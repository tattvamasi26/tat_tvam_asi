import { test } from "node:test";
import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";
import path from "node:path";
import { createRequire } from "node:module";
import { AI_CRAWLERS, TRAP_PATH, classify } from "../../src/lib/security/bots";
import { RateLimiter } from "../../src/lib/security/rate-limit";
import {
  clientAddress,
  isDisguisedScript,
  isProbe,
  isRouterPrefetch,
  isUncounted,
  ipv6Prefix64,
} from "../../src/lib/security/guard";
import robots from "../../src/app/robots";
import { rightsStrings } from "../../src/i18n/rights";
import { LOCALES } from "../../src/i18n/config";

// The site's defences against copying, and its response headers.
//
// What is pinned here: readers' browsers and search engines get in;
// AI crawlers and copying tools that name themselves do not; robots.txt
// says no to every AI token and to the trap; the headers that stop
// framing, sniffing and hotlinking are sent on every path; and the open
// JSON feed of the whole corpus that /api/search used to be stays gone.

const root = path.resolve(__dirname, "../..");

const BROWSERS = [
  "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Safari/537.36",
  "Mozilla/5.0 (Macintosh; Intel Mac OS X 14_5) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.5 Safari/605.1.15",
  "Mozilla/5.0 (X11; Linux x86_64; rv:131.0) Gecko/20100101 Firefox/131.0",
  "Mozilla/5.0 (Linux; Android 14; Pixel 8) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Mobile Safari/537.36",
  "Mozilla/5.0 (iPhone; CPU iPhone OS 17_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.5 Mobile/15E148 Safari/604.1",
];

const SEARCH_ENGINES = [
  "Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)",
  "Mozilla/5.0 AppleWebKit/537.36 (KHTML, like Gecko; compatible; bingbot/2.0; +http://www.bing.com/bingbot.htm) Chrome/116.0.1938.76 Safari/537.36",
  "DuckDuckBot/1.1; (+http://duckduckgo.com/duckduckbot.html)",
  "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_5) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.1.1 Safari/605.1.15 (Applebot/0.1; +http://www.apple.com/go/applebot)",
];

test("readers' browsers and search engines are let in", () => {
  for (const ua of [...BROWSERS, ...SEARCH_ENGINES]) {
    assert.equal(classify(ua), "ok", ua);
  }
});

test("AI crawlers that name themselves are refused", () => {
  for (const ua of [
    "Mozilla/5.0 AppleWebKit/537.36 (KHTML, like Gecko; compatible; GPTBot/1.2; +https://openai.com/gptbot)",
    "Mozilla/5.0 AppleWebKit/537.36 (KHTML, like Gecko; compatible; ClaudeBot/1.0; +claudebot@anthropic.com)",
    "CCBot/2.0 (https://commoncrawl.org/faq/)",
    "Mozilla/5.0 (compatible; Bytespider; spider-feedback@bytedance.com)",
    "Mozilla/5.0 AppleWebKit/537.36 (KHTML, like Gecko; compatible; PerplexityBot/1.0; +https://perplexity.ai/perplexitybot)",
    "meta-externalagent/1.1 (+https://developers.facebook.com/docs/sharing/webmasters/crawler)",
  ]) {
    assert.equal(classify(ua), "ai", ua);
  }
});

test("copying tools and headless browsers are refused", () => {
  for (const ua of [
    "",
    "   ",
    null,
    "curl/8.4.0",
    "Wget/1.21.4",
    "python-requests/2.32.3",
    "python-httpx/0.27.0",
    "Python/3.12 aiohttp/3.9.5",
    "Go-http-client/2.0",
    "axios/1.7.2",
    "node",
    "Scrapy/2.11.2 (+https://scrapy.org)",
    "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) HeadlessChrome/130.0.0.0 Safari/537.36",
    "Mozilla/4.5 (compatible; HTTrack 3.0x; Windows 98)",
  ]) {
    assert.notEqual(classify(ua), "ok", String(ua));
  }
});

test("robots.txt refuses every AI token and the trap, and lets search in", () => {
  const r = robots();
  const rules = Array.isArray(r.rules) ? r.rules : [r.rules];
  for (const c of AI_CRAWLERS) {
    const rule = rules.find((x) => x.userAgent === c.token);
    assert.ok(rule, `no group for ${c.token}`);
    assert.equal(rule.disallow, "/");
  }
  const star = rules.find((x) => x.userAgent === "*")!;
  assert.equal(star.allow, "/");
  assert.ok((star.disallow as string[]).includes(TRAP_PATH));
  assert.ok((star.disallow as string[]).includes("/admin"));
});

test("the rate limit lets a reader through and stops a crawl", () => {
  const rl = new RateLimiter([
    { limit: 5, ms: 60_000 },
    { limit: 20, ms: 3_600_000 },
  ]);
  const t0 = 1_000_000;
  // A reader: one page every twenty seconds for an hour is 180 pages,
  // over the hourly limit of this small test limiter only after 20.
  for (let i = 0; i < 5; i++) assert.equal(rl.hit("reader", t0 + i * 20_000), false);
  // A burst: six in a second.
  let over = false;
  for (let i = 0; i < 6; i++) over = rl.hit("burst", t0 + i);
  assert.equal(over, true);
  // The burst window passes.
  assert.equal(rl.hit("burst", t0 + 61_000), false);
  // A patient crawl trips the long window.
  let crawled = false;
  for (let i = 0; i < 25; i++) crawled = rl.hit("crawl", t0 + i * 15_000) || crawled;
  assert.equal(crawled, true);
});

test("a client caught by the trap stays refused, then is let back", () => {
  const rl = new RateLimiter([{ limit: 100, ms: 60_000 }]);
  rl.block("x", 3_600_000, 0);
  assert.equal(rl.isBlocked("x", 1_000), true);
  assert.equal(rl.hit("x", 2_000), true);
  assert.equal(rl.isBlocked("x", 3_600_001), false);
});

test("every response carries the protective headers", async () => {
  const require = createRequire(__filename);
  const config = require(path.join(root, "next.config.js"));
  assert.equal(config.poweredByHeader, false);
  const [all] = await config.headers();
  assert.equal(all.source, "/:path*");
  const h = Object.fromEntries(all.headers.map((x: { key: string; value: string }) => [x.key.toLowerCase(), x.value]));
  const csp: string = h["content-security-policy"];
  assert.match(csp, /frame-ancestors 'none'/);
  assert.match(csp, /object-src 'none'/);
  assert.match(csp, /base-uri 'self'/);
  assert.match(csp, /form-action 'self'/);
  assert.match(csp, /frame-src https:\/\/www\.youtube-nocookie\.com/);
  assert.equal(h["x-frame-options"], "DENY");
  assert.equal(h["x-content-type-options"], "nosniff");
  assert.equal(h["cross-origin-resource-policy"], "same-origin");
  assert.equal(h["tdm-reservation"], "1");
  assert.match(h["x-robots-tag"], /noai/);
  // The optimiser fetches only from hosts the site uses.
  const hosts = config.images.remotePatterns.map((p: { hostname: string }) => p.hostname).sort();
  assert.deepEqual(hosts, ["i.ytimg.com", "upload.wikimedia.org"]);
});

test("the corpus is not served as an open JSON feed", () => {
  assert.equal(existsSync(path.join(root, "src/app/api/search")), false);
});

test("the machine-readable opt-outs exist and point at the notice", () => {
  const tdm = JSON.parse(readFileSync(path.join(root, "public/.well-known/tdmrep.json"), "utf8"));
  assert.equal(tdm[0]["tdm-reservation"], 1);
  assert.match(tdm[0]["tdm-policy"], /\/rights$/);
  assert.match(readFileSync(path.join(root, "public/ai.txt"), "utf8"), /Disallow: \//);
});

test("the rights notice says the same thing in every language", () => {
  const en = rightsStrings("en");
  for (const l of LOCALES) {
    const s = rightsStrings(l);
    assert.equal(s.sections.length, en.sections.length, l);
    s.sections.forEach((sec, i) => assert.equal(sec.body.length, en.sections[i].body.length, `${l} §${i}`));
    // Each names the EU reservation and the files a machine reads.
    const all = s.sections.flatMap((x) => x.body).join(" ");
    assert.match(all, /2019\/790/, l);
    assert.match(all, /tdmrep\.json/, l);
  }
});

// ---- Second round (2026-10-19): the bypasses the first round left open.

function h(map: Record<string, string>) {
  const m = new Map(Object.entries(map).map(([k, v]) => [k.toLowerCase(), v]));
  return { get: (k: string) => m.get(k.toLowerCase()) ?? null, has: (k: string) => m.has(k.toLowerCase()) };
}

test("the client is the address our proxy saw, not the one the client claims", () => {
  // One proxy appends what it saw; what is to its left the client wrote.
  assert.equal(clientAddress(h({ "x-forwarded-for": "1.2.3.4, 203.0.113.9" }), null, 1), "203.0.113.9");
  // Claiming to be this machine no longer earns a pass.
  const spoof = clientAddress(h({ "x-forwarded-for": "127.0.0.1, 203.0.113.9" }), null, 1);
  assert.equal(spoof, "203.0.113.9");
  assert.equal(isUncounted(spoof), false);
  // Two proxies (a CDN, then nginx): the client is second from the right.
  assert.equal(clientAddress(h({ "x-forwarded-for": "9.9.9.9, 198.51.100.7, 10.0.0.2" }), null, 2), "198.51.100.7");
  // The platform's own address wins over any header.
  assert.equal(clientAddress(h({ "x-forwarded-for": "1.1.1.1" }), "198.51.100.1", 1), "198.51.100.1");
  // A port is not a different client.
  assert.equal(clientAddress(h({ "x-forwarded-for": "203.0.113.9:51234" }), null, 1), "203.0.113.9");
  // Nothing at all: this machine, uncounted.
  assert.equal(isUncounted(clientAddress(h({}), null, 1)), true);
  // A header that is there but holds rubbish is counted, not waved through.
  assert.equal(isUncounted(clientAddress(h({ "x-forwarded-for": "<script>" }), null, 1)), false);
  assert.equal(isUncounted(clientAddress(h({ "x-real-ip": "nonsense" }), null, 1)), false);
});

test("an IPv6 client is counted by its /64, so it cannot rotate addresses", () => {
  const a = clientAddress(h({}), "2001:db8:abcd:12:1::1", 1);
  const b = clientAddress(h({}), "2001:db8:abcd:12:ffff:ffff:ffff:fffe", 1);
  assert.equal(a, b);
  assert.notEqual(a, clientAddress(h({}), "2001:db8:abcd:13::1", 1));
  assert.equal(ipv6Prefix64("2001:db8::1"), "2001:db8:0:0::/64");
  assert.equal(clientAddress(h({}), "::ffff:203.0.113.9", 1), "203.0.113.9");
});

test("only the router's own prefetch is counted as one", () => {
  assert.equal(isRouterPrefetch(h({ "next-router-prefetch": "1", rsc: "1" })), true);
  // These used to put a whole page outside the rate limit.
  assert.equal(isRouterPrefetch(h({ purpose: "prefetch" })), false);
  assert.equal(isRouterPrefetch(h({ "sec-purpose": "prefetch" })), false);
  assert.equal(isRouterPrefetch(h({ "next-router-prefetch": "1" })), false);
});

test("a script wearing a browser's User-Agent is caught by what it leaves out", () => {
  const chrome = BROWSERS[0];
  // What requests, httpx or a bare fetch send with a borrowed UA.
  assert.equal(isDisguisedScript(chrome, h({ accept: "*/*" })), true);
  // A real browser, old Safari without Sec-Fetch included.
  for (const ua of BROWSERS) {
    assert.equal(isDisguisedScript(ua, h({ "accept-language": "en-IN", "sec-fetch-mode": "navigate" })), false, ua);
    assert.equal(isDisguisedScript(ua, h({ "accept-language": "kn" })), false, ua);
  }
  // Search engines are dealt with by name, not held to browser headers.
  for (const ua of SEARCH_ENGINES) assert.equal(isDisguisedScript(ua, h({})), false, ua);
});

test("scanners probing for other platforms' secrets are caught; real paths are not", () => {
  for (const p of ["/.env", "/.env.local", "/.git/config", "/wp-login.php", "/wp-admin/", "/xmlrpc.php",
    "/index.php", "/phpmyadmin/", "/backup.sql", "/.aws/credentials", "/cgi-bin/x"]) {
    assert.equal(isProbe(p), true, p);
  }
  for (const p of ["/", "/upanishads/isha", "/rights", "/.well-known/tdmrep.json",
    "/.well-known/security.txt", "/images/stutis/ganesha.jpg", "/vedas/rigveda/1/1", "/admin"]) {
    assert.equal(isProbe(p), false, p);
  }
});

test("a flood of addresses evicts the oldest, and never wipes the crawler being counted", () => {
  const rl = new RateLimiter([{ limit: 3, ms: 60_000 }], 100);
  const t0 = 5_000_000;
  rl.hit("crawler", t0);
  rl.hit("crawler", t0 + 1);
  rl.hit("crawler", t0 + 2);
  // Two hundred one-off addresses, the crawler still active among them.
  for (let i = 0; i < 200; i++) {
    rl.hit(`noise-${i}`, t0 + 10 + i);
    if (i % 50 === 0) rl.hit("crawler", t0 + 10 + i);
  }
  assert.ok(rl.size <= 101, String(rl.size));
  // The fourth hit within the minute is still over the limit.
  assert.equal(rl.hit("crawler", t0 + 300), true);
});

test("a copied passage carries its source in every language", () => {
  for (const l of LOCALES) {
    const s = rightsStrings(l);
    assert.ok(s.copySource.trim(), l);
    assert.ok(s.copyTerms.trim(), l);
  }
  const footer = readFileSync(path.join(root, "src/components/layout/Footer.tsx"), "utf8");
  assert.match(footer, /<CopyAttribution /);
  const hook = readFileSync(path.join(root, "src/components/security/CopyAttribution.tsx"), "utf8");
  // Copying is never blocked outright, only annotated.
  assert.doesNotMatch(hook, /user-select|oncontextmenu|contextmenu/);
  assert.match(hook, /\/rights/);
});

test("the middleware uses the guarded address and prefetch checks", () => {
  const mw = readFileSync(path.join(root, "src/middleware.ts"), "utf8");
  assert.match(mw, /clientAddress\(request\.headers, request\.ip\)/);
  assert.match(mw, /isRouterPrefetch\(/);
  assert.doesNotMatch(mw, /"purpose"/);
  assert.match(mw, /isDisguisedScript\(/);
  assert.match(mw, /isProbe\(/);
});

test("RATE_LIMIT=off exempts only this machine, and only when the server sets it", () => {
  const before = process.env.RATE_LIMIT;
  try {
    delete process.env.RATE_LIMIT;
    assert.equal(isUncounted("127.0.0.1"), false, "loopback is counted by default");
    assert.equal(isUncounted("0:0:0:0::/64"), false);
    process.env.RATE_LIMIT = "off";
    assert.equal(isUncounted("127.0.0.1"), true);
    assert.equal(isUncounted("0:0:0:0::/64"), true);
    assert.equal(isUncounted("203.0.113.9"), false, "a real reader is still counted");
    assert.equal(isUncounted("2001:db8:0:0::/64"), false);
  } finally {
    if (before === undefined) delete process.env.RATE_LIMIT;
    else process.env.RATE_LIMIT = before;
  }
});

test("the site's address is spelled out only in src/lib/site.ts", () => {
  // The sitemap and the rights notices once pointed at tattvamasi.in, a
  // domain the site never owned. Everything now reads SITE_URL, so no
  // other source file may name a domain of the site's own.
  const own = /https?:\/\/(www\.)?(tattvam-?asi|tat-tvam-asi)\.(org|in|com)/;
  const walk = (dir: string): string[] =>
    require("node:fs").readdirSync(dir, { withFileTypes: true }).flatMap((e: { name: string; isDirectory(): boolean }) =>
      e.isDirectory() ? walk(path.join(dir, e.name)) : /\.(ts|tsx)$/.test(e.name) ? [path.join(dir, e.name)] : [],
    );
  const offenders = walk(path.join(process.cwd(), "src"))
    .filter((f) => !f.endsWith(path.join("lib", "site.ts")))
    .filter((f) => own.test(readFileSync(f, "utf8")));
  assert.deepEqual(offenders, []);
  assert.match(readFileSync("src/lib/site.ts", "utf8"), /https:\/\/tattvam-asi\.in/);
  assert.doesNotMatch(readFileSync("public/ai.txt", "utf8"), /tattvamasi\.in/);
});
