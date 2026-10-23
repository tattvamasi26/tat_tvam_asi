/**
 * The reading meter: a reader may open a few of the site's reading
 * pages without an account, and then signs in to read on.
 *
 * What counts is a reading page — one text, one hymn, one temple or
 * acharya written up, one festival, one song — never an index, the
 * home page, search, the rights notice or the practice timer. Opening
 * the same page again does not count again.
 *
 * The count lives in a cookie signed with HMAC, so it cannot be edited
 * up or down; a reader who deletes it starts again, which is accepted —
 * this is a door, not a vault. Clients that keep no cookies at all (a
 * script, a crawler) are counted per address instead, in memory.
 * Google's and Bing's crawlers, verified by address, read freely so the
 * site stays findable; the page tells them, in schema.org markup, that
 * readers meet a sign-in.
 *
 * Kept free of Node APIs: it runs in the middleware (Web Crypto only).
 */

/** Reading pages a visitor may open without signing in. */
export const FREE_READS = 5;
/** The free allowance starts again this long after the first read. */
export const WINDOW_MS = 30 * 24 * 60 * 60 * 1000;
/** Without the meter cookie: reading pages one address may open a day. */
export const COOKIELESS_DAILY = 30;

export const METER_COOKIE = "tta_meter";
/** For the page's notice only: how many free pages are left. Not trusted. */
export const LEFT_COOKIE = "tta_meter_left";
/** For the masthead only: set while a verified session exists. Not trusted. */
export const SIGNED_IN_COOKIE = "tta_signed_in";

/**
 * The reading pages: one item inside a section. Indexes and section
 * pages ("/stutis/ganesha", "/temples/tulunadu") stay open.
 */
const GATED: RegExp[] = [
  /^\/upanishads\/[^/]+$/,
  /^\/gita\/[^/]+$/,
  /^\/stutis\/[^/]+\/[^/]+$/,
  /^\/vedas\/rigveda\/\d+\/\d+$/,
  /^\/bhajans\/[^/]+\/[^/]+$/,
  /^\/acharyas\/[^/]+$/,
  /^\/temples\/[^/]+\/[^/]+$/,
  /^\/puranas\/(?!stories$)[^/]+$/,
  /^\/puranas\/stories\/[^/]+$/,
  /^\/darshanas\/[^/]+$/,
  /^\/shastras\/[^/]+$/,
  /^\/rituals\/[^/]+$/,
  /^\/festivals\/[^/]+$/,
  /^\/concepts\/[^/]+$/,
  /^\/cosmos\/[^/]+$/,
  /^\/verses\/[^/]+$/,
];

export function isGatedPath(pathname: string): boolean {
  const p = pathname.replace(/\/+$/, "") || "/";
  return GATED.some((re) => re.test(p));
}

// ── The signed meter cookie ─────────────────────────────────

export type Meter = {
  /** When the window began, ms since epoch. */
  since: number;
  /** Short ids of the reading pages opened in this window. */
  read: string[];
};

const enc = new TextEncoder();

async function hmac(secret: string, data: string): Promise<string> {
  const key = await crypto.subtle.importKey("raw", enc.encode(secret), { name: "HMAC", hash: "SHA-256" }, false, ["sign"]);
  const sig = new Uint8Array(await crypto.subtle.sign("HMAC", key, enc.encode(data)));
  return b64url(sig).slice(0, 32);
}

function b64url(bytes: Uint8Array): string {
  let s = "";
  for (const b of bytes) s += String.fromCharCode(b);
  return btoa(s).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}

/** A page's id in the meter: eight hex digits of its path's SHA-256. */
export async function pageId(pathname: string): Promise<string> {
  const p = pathname.replace(/\/+$/, "") || "/";
  const d = new Uint8Array(await crypto.subtle.digest("SHA-256", enc.encode(p)));
  return [...d.slice(0, 4)].map((b) => b.toString(16).padStart(2, "0")).join("");
}

export async function encodeMeter(m: Meter, secret: string): Promise<string> {
  const body = `${m.since.toString(36)}.${m.read.join("-")}`;
  return `${body}.${await hmac(secret, body)}`;
}

/** The meter in a cookie, or a fresh one if it is missing, forged, malformed or expired. */
export async function decodeMeter(value: string | undefined, secret: string, now = Date.now()): Promise<Meter | null> {
  if (!value) return null;
  const parts = value.split(".");
  if (parts.length !== 3) return null;
  const [since36, read, sig] = parts;
  if ((await hmac(secret, `${since36}.${read}`)) !== sig) return null;
  const since = parseInt(since36, 36);
  if (!Number.isFinite(since) || since > now + 60_000 || now - since > WINDOW_MS) return null;
  const ids = read ? read.split("-") : [];
  if (ids.some((id) => !/^[0-9a-f]{8}$/.test(id)) || ids.length > FREE_READS) return null;
  return { since, read: ids };
}

export type Decision = { allow: true; meter: Meter; counted: boolean } | { allow: false; meter: Meter };

/** May this reading page be opened, and what does the meter become? */
export function decide(meter: Meter | null, id: string, now = Date.now()): Decision {
  const m: Meter = meter ?? { since: now, read: [] };
  if (m.read.includes(id)) return { allow: true, meter: m, counted: false };
  if (m.read.length < FREE_READS) return { allow: true, meter: { since: m.since, read: [...m.read, id] }, counted: true };
  return { allow: false, meter: m };
}

/** The secret the meter is signed with. */
export function meterSecret(): string | null {
  return process.env.METER_SECRET || process.env.SUPABASE_SERVICE_ROLE_KEY || null;
}

// ── Search engines, verified by address ─────────────────────

/** Crawlers that may read without the meter, once their address is checked. */
const CRAWLERS: { ua: RegExp; ranges: string }[] = [
  { ua: /Googlebot|Google-InspectionTool|Storebot-Google/i, ranges: "https://developers.google.com/static/search/apis/ipranges/googlebot.json" },
  { ua: /bingbot/i, ranges: "https://www.bing.com/toolbox/bingbot.json" },
];

type Cidr = { v6: boolean; bits: bigint; mask: bigint; len: number };
const rangeCache = new Map<string, { at: number; cidrs: Cidr[] }>();
const DAY = 86_400_000;

function parseIp(ip: string): { v6: boolean; value: bigint } | null {
  if (/^\d{1,3}(\.\d{1,3}){3}$/.test(ip)) {
    const n = ip.split(".").map(Number);
    if (n.some((x) => x > 255)) return null;
    return { v6: false, value: n.reduce((a, b) => (a << 8n) | BigInt(b), 0n) };
  }
  if (!ip.includes(":")) return null;
  const [head, tail] = ip.split("::");
  const h = head ? head.split(":") : [];
  const t = tail !== undefined && tail !== "" ? tail.split(":") : [];
  const groups = tail === undefined ? h : [...h, ...Array(8 - h.length - t.length).fill("0"), ...t];
  if (groups.length !== 8) return null;
  let v = 0n;
  for (const g of groups) {
    if (!/^[0-9a-f]{1,4}$/i.test(g)) return null;
    v = (v << 16n) | BigInt(parseInt(g, 16));
  }
  return { v6: true, value: v };
}

export function parseCidr(cidr: string): Cidr | null {
  const [ip, lenS] = cidr.split("/");
  const p = parseIp(ip);
  if (!p) return null;
  const total = p.v6 ? 128 : 32;
  const len = lenS === undefined ? total : Number(lenS);
  if (!Number.isInteger(len) || len < 0 || len > total) return null;
  const mask = len === 0 ? 0n : ((1n << BigInt(len)) - 1n) << BigInt(total - len);
  return { v6: p.v6, bits: p.value & mask, mask, len };
}

export function inRanges(ip: string, cidrs: Cidr[]): boolean {
  const p = parseIp(ip);
  if (!p) return false;
  return cidrs.some((c) => c.v6 === p.v6 && (p.value & c.mask) === c.bits);
}

async function rangesFor(url: string): Promise<Cidr[]> {
  const hit = rangeCache.get(url);
  if (hit && Date.now() - hit.at < DAY) return hit.cidrs;
  try {
    const res = await fetch(url, { signal: AbortSignal.timeout(3000) });
    const j = (await res.json()) as { prefixes?: { ipv4Prefix?: string; ipv6Prefix?: string }[] };
    const cidrs = (j.prefixes ?? [])
      .map((p) => parseCidr(p.ipv4Prefix ?? p.ipv6Prefix ?? ""))
      .filter((c): c is Cidr => c !== null);
    rangeCache.set(url, { at: Date.now(), cidrs });
    return cidrs;
  } catch {
    // Unreachable list: no crawler is verified until it comes back.
    return hit?.cidrs ?? [];
  }
}

/**
 * A search engine's crawler, proven by where it comes from. A client
 * that only *says* it is Googlebot is metered like anyone else.
 */
export async function isVerifiedCrawler(userAgent: string | null, ip: string | null): Promise<boolean> {
  if (!userAgent || !ip) return false;
  const c = CRAWLERS.find((x) => x.ua.test(userAgent));
  if (!c) return false;
  return inRanges(ip, await rangesFor(c.ranges));
}
