/**
 * The middleware's decisions, kept apart from Next so they can be
 * tested: who the client is, whether a request is a router prefetch,
 * whether a "browser" is lying about being one, and whether a path is a
 * scanner's probe.
 *
 * Kept free of Node APIs: it runs in the middleware.
 */

/** Anything with a `get`/`has` by header name: `Headers`, or a test stub. */
export type HeaderBag = {
  get(name: string): string | null;
  has(name: string): boolean;
};

/**
 * How many proxies of our own sit in front of the app and append to
 * `X-Forwarded-For`. Each one appends the address it saw, so the client
 * is that many entries from the right. Everything to the left of it was
 * written by the client and can say anything at all.
 */
export function trustedHops(): number {
  const n = Number(process.env.TRUSTED_PROXY_HOPS ?? "1");
  return Number.isInteger(n) && n >= 1 && n <= 5 ? n : 1;
}

const LOCAL = "local";
// A forwarding header that is there but holds no address: counted, as
// one shared client, and never mistaken for "no address at all".
const UNREADABLE = "unreadable";

/**
 * The address a request is counted against.
 *
 * - A platform address (`request.ip`, which Vercel fills in) is used
 *   first: the platform saw the connection itself.
 * - Otherwise the entry in `X-Forwarded-For` that our own proxy added,
 *   counted from the right. Never the leftmost: that one is the client's
 *   own say-so, and taking it let a copier name a fresh address on every
 *   request, or claim to be 127.0.0.1 and be waved through.
 * - IPv6 addresses are counted by their /64, the block one subscriber is
 *   given; otherwise a single machine has 2^64 addresses to rotate.
 * - `"local"` when there is no address at all: this machine under
 *   `next start`, or the image optimiser's own internal read.
 */
export function clientAddress(
  headers: HeaderBag,
  platformIp?: string | null,
  hops = trustedHops(),
): string {
  const fromPlatform = clean(platformIp);
  if (fromPlatform) return normalise(fromPlatform);

  const chain = (headers.get("x-forwarded-for") ?? "")
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean);
  if (chain.length > 0) {
    const ours = clean(chain[Math.max(0, chain.length - hops)]);
    return ours ? normalise(ours) : UNREADABLE;
  }
  const realHeader = headers.get("x-real-ip");
  if (realHeader) {
    const real = clean(realHeader);
    return real ? normalise(real) : UNREADABLE;
  }
  return LOCAL;
}

/**
 * Only an address with no source at all is exempt from counting, plus
 * this machine when the server was started with RATE_LIMIT=off.
 */
export function isUncounted(address: string): boolean {
  return address === LOCAL || (process.env.RATE_LIMIT === "off" && isLoopback(address));
}

/**
 * This machine. Used only with RATE_LIMIT=off, to run the rendering
 * audit against a local production build: `next start` sets
 * X-Forwarded-For to the socket address, so every test browser counts
 * as one reader and is throttled within a minute. Both halves are
 * needed: the switch is the server's own environment, never anything a
 * request can send, and even with it on only the machine itself is
 * uncounted.
 */
function isLoopback(address: string): boolean {
  return /^127\./.test(address) || address === "0:0:0:0::/64";
}

function clean(value: string | null | undefined): string | null {
  if (!value) return null;
  let v = value.trim();
  // "[2001:db8::1]:443" and "203.0.113.9:51234"
  const bracket = /^\[([0-9a-f:.]+)\](?::\d+)?$/i.exec(v);
  if (bracket) v = bracket[1];
  else if (/^\d{1,3}(\.\d{1,3}){3}:\d+$/.test(v)) v = v.replace(/:\d+$/, "");
  if (v.length > 45) return null;
  if (/^\d{1,3}(\.\d{1,3}){3}$/.test(v)) return v;
  if (/^[0-9a-f:.]+$/i.test(v) && v.includes(":")) return v.toLowerCase();
  return null;
}

function normalise(address: string): string {
  if (!address.includes(":")) return address;
  const mapped = /^::ffff:(\d{1,3}(\.\d{1,3}){3})$/i.exec(address);
  if (mapped) return mapped[1];
  return ipv6Prefix64(address);
}

/** The first four groups of an IPv6 address, `::` expanded. */
export function ipv6Prefix64(address: string): string {
  const [head, tail] = address.split("::");
  const h = head ? head.split(":") : [];
  const t = tail !== undefined && tail !== "" ? tail.split(":") : [];
  const groups =
    tail === undefined ? h : [...h, ...Array(Math.max(0, 8 - h.length - t.length)).fill("0"), ...t];
  return (
    groups
      .slice(0, 4)
      .map((g) => (g || "0").replace(/^0+(?=.)/, ""))
      .join(":") + "::/64"
  );
}

/**
 * A prefetch from the site's own router. It always carries both of
 * these headers. The browser's own `Purpose: prefetch` is not accepted:
 * the site never asks for it, and it was a header any script could add
 * to have every page it fetched go uncounted.
 */
export function isRouterPrefetch(headers: HeaderBag): boolean {
  return headers.has("next-router-prefetch") && headers.get("rsc") === "1";
}

/**
 * A script dressed as a browser. Every browser released since 2020
 * sends `Sec-Fetch-Mode` with each request, and every browser ever made
 * sends `Accept-Language`. A client whose User-Agent claims Chrome,
 * Firefox, Safari or Edge but which sends neither is an HTTP library
 * with a borrowed User-Agent string.
 *
 * Crawlers that say they are crawlers (Googlebot, bingbot, link
 * previewers) are not held to it; they are dealt with by name.
 */
export function isDisguisedScript(userAgent: string | null, headers: HeaderBag): boolean {
  const ua = userAgent ?? "";
  if (!/^Mozilla\/5\.0 /.test(ua)) return false;
  if (!/(Chrome|Firefox|Safari|Edg)\//.test(ua)) return false;
  if (/bot|crawl|spider|slurp|preview|facebookexternalhit|lighthouse|pagespeed/i.test(ua)) return false;
  return !headers.has("sec-fetch-mode") && !headers.has("accept-language");
}

/**
 * Paths no reader of this site ever asks for: other platforms' admin
 * pages and the secret files a scanner hopes were left lying around.
 * The site is Next.js and has none of them. Whoever asks is looking for
 * a way in, and is refused for a while.
 */
const PROBES: RegExp[] = [
  /^\/\.(env|git|svn|hg|aws|ssh|docker|DS_Store|htaccess|htpasswd)(\/|$|\.)/i,
  /^\/wp-(admin|login|content|includes|json)/i,
  /^\/(xmlrpc|phpinfo|info|config|setup|install)\.php$/i,
  /\.(php\d?|asp|aspx|jsp|cgi)$/i,
  /^\/(phpmyadmin|pma|myadmin|adminer|cgi-bin|server-status|actuator|vendor\/phpunit)(\/|$)/i,
  /^\/(backup|db|database|dump|site)\.(sql|zip|tar|tar\.gz|tgz|bak)$/i,
];

export function isProbe(pathname: string): boolean {
  if (pathname.startsWith("/.well-known/")) return false;
  return PROBES.some((re) => re.test(pathname));
}
