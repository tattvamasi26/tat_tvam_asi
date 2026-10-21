import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import path from "node:path";
import { safeNext, readsSession, AFTER_SIGNIN } from "../../src/lib/auth-paths";
import { accountStrings } from "../../src/i18n/account";
import { LOCALES } from "../../src/i18n/config";
import robots from "../../src/app/robots";

// Readers' accounts: sign-in returns only to this site, the three
// languages say the same things, and the profiles table is private.

const root = path.resolve(__dirname, "../..");
const read = (p: string) => readFileSync(path.join(root, p), "utf8");

test("after sign-in a reader returns only to a path on this site", () => {
  for (const ok of ["/account", "/stutis/ganesha", "/upanishads/isha?verse=3", "/vedas/rigveda/1/1#v2"]) {
    assert.equal(safeNext(ok), ok);
  }
  for (const bad of [
    null, undefined, "", "https://evil.example", "//evil.example", "/\\evil.example",
    "\\\\evil.example", "javascript:alert(1)", "evil", "/x\nLocation: https://evil.example",
    "/auth/callback", "/auth/google?next=//evil", "/signin", "/signin?next=/x", "/" + "a".repeat(600),
  ]) {
    assert.equal(safeNext(bad as string), AFTER_SIGNIN, String(bad));
  }
});

test("the session is refreshed only on the pages that read it", () => {
  for (const p of ["/account", "/signin", "/admin/sources", "/auth/callback"]) assert.ok(readsSession(p), p);
  for (const p of ["/", "/stutis", "/accountancy", "/authors", "/upanishads/isha"]) assert.equal(readsSession(p), false, p);
});

test("the account words exist in every language", () => {
  const keys = Object.keys(accountStrings("en")).sort();
  for (const l of LOCALES) {
    const s = accountStrings(l);
    assert.deepEqual(Object.keys(s).sort(), keys, l);
    for (const [k, v] of Object.entries(s)) assert.ok(v.trim(), `${l}.${k}`);
  }
  // Nothing about the account is promised beyond what is kept.
  assert.doesNotMatch(Object.values(accountStrings("en")).join(" "), /never shared|sold|free forever|premium/i);
});

test("profiles are private: own row only, no public read, payment columns safe", () => {
  const sql = read("supabase/schema.sql");
  const block = sql.slice(sql.indexOf("create table if not exists profiles"));
  assert.match(block, /alter table profiles enable row level security/);
  assert.match(block, /for select to authenticated using \(\(select auth\.uid\(\)\) = id\)/);
  assert.doesNotMatch(block, /profiles[^;]*using \(true\)/);
  assert.match(block, /revoke all on profiles from anon, authenticated/);
  // A reader can change only these; anything added later is server-only.
  assert.match(block, /grant update \(full_name, locale\) on profiles to authenticated/);
  assert.match(block, /security definer\s+set search_path = public/);
  assert.match(block, /on delete cascade/);
});

test("the sign-in pages are kept out of search and the start is never prefetched", () => {
  const r = robots();
  const rules = Array.isArray(r.rules) ? r.rules : [r.rules];
  const star = rules.find((x) => x.userAgent === "*")!;
  for (const p of ["/account", "/auth/", "/signin"]) assert.ok((star.disallow as string[]).includes(p), p);
  const signin = read("src/app/signin/page.tsx");
  assert.match(signin, /<a className="btn btn-outline account-google" href=\{`\/auth\/google/);
  assert.doesNotMatch(signin, /<Link[^>]*auth\/google/);
  // The server reads the verified user, never the unverified cookie.
  const auth = read("src/lib/auth.ts");
  assert.match(auth, /auth\.getUser\(\)/);
  assert.doesNotMatch(auth, /\.getSession\(/);
  // Sign-out is POST-only and refuses another site's origin.
  const out = read("src/app/auth/signout/route.ts");
  assert.match(out, /export async function POST/);
  assert.doesNotMatch(out, /export async function GET/);
  assert.match(out, /status: 403/);
});
