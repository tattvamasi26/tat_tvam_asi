import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import path from "node:path";
import {
  FREE_READS,
  WINDOW_MS,
  decide,
  decodeMeter,
  encodeMeter,
  inRanges,
  isGatedPath,
  isVerifiedCrawler,
  pageId,
  parseCidr,
} from "../../src/lib/security/reading-gate";

// The reading meter: a few reading pages free, then sign in. The count
// cannot be edited, re-reading never counts, indexes stay open, and a
// client claiming to be Googlebot is metered like anyone else.

const read = (p: string) => readFileSync(path.join(__dirname, "../..", p), "utf8");
const SECRET = "test-secret-not-used-anywhere";

test("only reading pages are metered; indexes, home and sign-in stay open", () => {
  for (const p of [
    "/upanishads/isha",
    "/gita/2",
    "/stutis/ganesha/ganesha-ashtakam",
    "/vedas/rigveda/1/1",
    "/bhajans/vitthala/some-song",
    "/acharyas/shankara",
    "/temples/tulunadu/kollur",
    "/puranas/bhagavata",
    "/puranas/stories/prahlada",
    "/darshanas/nyaya",
    "/shastras/vedanta",
    "/rituals/upanayana",
    "/festivals/deepavali",
    "/concepts/maya",
    "/verses/tat-tvam-asi",
    "/upanishads/isha/",
  ])
    assert.ok(isGatedPath(p), p);
  for (const p of [
    "/",
    "/upanishads",
    "/stutis",
    "/stutis/ganesha",
    "/vedas/rigveda",
    "/vedas/rigveda/1",
    "/vedas/rigveda/devata/agni",
    "/temples",
    "/temples/tulunadu",
    "/puranas",
    "/puranas/stories",
    "/signin",
    "/account",
    "/rights",
    "/search",
    "/practice",
    "/about",
  ])
    assert.equal(isGatedPath(p), false, p);
});

test("each new reading page counts once, and the sixth is refused", async () => {
  const now = Date.now();
  let meter = null as Awaited<ReturnType<typeof decodeMeter>>;
  for (let i = 0; i < FREE_READS; i++) {
    const d = decide(meter, await pageId(`/upanishads/t${i}`), now);
    assert.equal(d.allow, true);
    meter = d.meter;
  }
  assert.equal(meter!.read.length, FREE_READS);
  // Re-reading one already opened is free.
  const again = decide(meter, await pageId("/upanishads/t0"), now);
  assert.ok(again.allow && !again.counted);
  // A new one is not.
  assert.equal(decide(meter, await pageId("/upanishads/new"), now).allow, false);
});

test("a page's id ignores a trailing slash", async () => {
  assert.equal(await pageId("/gita/2/"), await pageId("/gita/2"));
  assert.match(await pageId("/gita/2"), /^[0-9a-f]{8}$/);
});

test("the meter cookie cannot be edited, forged or kept past its month", async () => {
  const now = Date.now();
  const m = { since: now - 1000, read: [await pageId("/gita/1"), await pageId("/gita/2")] };
  const raw = await encodeMeter(m, SECRET);
  assert.deepEqual(await decodeMeter(raw, SECRET, now), m);

  // Dropping a page from the list breaks the signature.
  const [since, ids, sig] = raw.split(".");
  assert.equal(await decodeMeter(`${since}.${ids.split("-")[0]}.${sig}`, SECRET, now), null);
  // Another secret, garbage, and nothing at all.
  assert.equal(await decodeMeter(raw, "another-secret", now), null);
  assert.equal(await decodeMeter("x.y", SECRET, now), null);
  assert.equal(await decodeMeter(undefined, SECRET, now), null);
  // After the window the allowance starts again.
  assert.equal(await decodeMeter(raw, SECRET, now + WINDOW_MS + 1), null);
  // A window dated in the future is refused.
  const future = await encodeMeter({ since: now + 3_600_000, read: [] }, SECRET);
  assert.equal(await decodeMeter(future, SECRET, now), null);
});

test("address ranges match exactly, in IPv4 and IPv6", () => {
  const v4 = parseCidr("66.249.64.0/27")!;
  const v6 = parseCidr("2001:4860:4801:10::/64")!;
  assert.ok(inRanges("66.249.64.5", [v4]));
  assert.equal(inRanges("66.249.64.40", [v4]), false);
  assert.ok(inRanges("2001:4860:4801:10::1", [v6]));
  assert.equal(inRanges("2001:4860:4801:11::1", [v6]), false);
  assert.equal(inRanges("66.249.64.5", [v6]), false);
  assert.equal(inRanges("not-an-ip", [v4]), false);
  assert.equal(parseCidr("300.1.1.1/8"), null);
});

test("a client that only says it is a search engine is not believed", async () => {
  assert.equal(await isVerifiedCrawler("Mozilla/5.0 (compatible; Googlebot/2.1)", null), false);
  assert.equal(await isVerifiedCrawler("Mozilla/5.0 Chrome/120", "66.249.64.5"), false);
});

test("the middleware meters only where sign-in works, and never a prefetch", () => {
  const mw = read("src/middleware.ts");
  assert.match(mw, /process\.env\.READING_GATE === "off"/);
  assert.match(mw, /status\.state === "ready" && \(status\.google \|\| status\.email\)/);
  assert.match(mw, /isRouterPrefetch\(request\.headers\)\) return new NextResponse\(null, \{ status: 204 \}\)/);
  assert.match(mw, /await isVerifiedCrawler\(/);
  // The signed cookie is httpOnly; the page's count is only a hint.
  assert.match(mw, /METER_COOKIE, await encodeMeter[\s\S]{0,80}httpOnly: true/);
  // Search engines are told the page is metered, rather than shown a different page.
  const layout = read("src/app/layout.tsx");
  assert.match(layout, /isAccessibleForFree: false/);
});

test("signed-out reading sends the reader back to the same page after sign-in", () => {
  const mw = read("src/middleware.ts");
  assert.match(mw, /url\.pathname = "\/signin"/);
  assert.match(mw, /searchParams\.set\("reason", "limit"\)/);
  assert.match(mw, /searchParams\.set\("next", pathname\)/);
  const page = read("src/app/signin/page.tsx");
  assert.match(page, /searchParams\.reason === "limit"/);
});
