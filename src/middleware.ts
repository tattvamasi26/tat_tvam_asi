import { NextResponse, type NextRequest } from "next/server";
import { createServerClient, type CookieOptions } from "@supabase/ssr";
import { readsSession } from "@/lib/auth-paths";
import { LOCALE_COOKIE, isLocale } from "@/i18n/config";
import { classify, TRAP_PATH } from "@/lib/security/bots";
import { RateLimiter } from "@/lib/security/rate-limit";
import {
  clientAddress,
  isDisguisedScript,
  isProbe,
  isRouterPrefetch,
  isUncounted,
} from "@/lib/security/guard";

/**
 * Runs before every request. In order:
 *
 * 1. The bot guard. AI crawlers and copying tools that name themselves
 *    are refused with 403; robots.txt has already told them no. So is a
 *    script that borrows a browser's User-Agent but none of the headers
 *    every browser sends with it.
 * 2. The traps. A client that requests the invisible trap link is
 *    copying the site, and is refused for an hour; one probing for
 *    other platforms' admin pages or secret files, for fifteen minutes.
 * 3. The rate limit, counted on pages. The router's own prefetches are
 *    counted separately against a larger allowance, since a long list
 *    of links prefetches many at once; pictures are not counted.
 * 4. `?lang=kn`: the parameter is written to the locale cookie and
 *    stripped by a redirect, so any page can be shared in a language.
 *
 * The response headers that apply to every file, including the static
 * ones this never sees, are in next.config.js. The decisions themselves
 * are in lib/security/guard.ts, where they are tested.
 */

// 120 pages a minute, 1,200 an hour. Reading at full tilt is a page
// every few seconds.
const pages = new RateLimiter([
  { limit: 120, ms: 60_000 },
  { limit: 1_200, ms: 3_600_000 },
]);
// A Rigveda mandala lists nearly two hundred hymns, and the router
// prefetches each link as it scrolls into view.
const prefetches = new RateLimiter([
  { limit: 600, ms: 60_000 },
  { limit: 6_000, ms: 3_600_000 },
]);
const TRAP_BAN_MS = 3_600_000;
const PROBE_BAN_MS = 900_000;
const REFUSAL = "Automated access to this site is not permitted. See /rights.";

function refuse(status: 403 | 429, message: string): NextResponse {
  return new NextResponse(message, {
    status,
    headers: {
      "content-type": "text/plain; charset=utf-8",
      "cache-control": "no-store",
      "x-robots-tag": "noindex, nofollow",
      ...(status === 429 ? { "retry-after": "60" } : {}),
    },
  });
}

function isLocalHost(host: string | null): boolean {
  return !host || /^(localhost|127\.0\.0\.1|\[::1\])(:\d+)?$/.test(host);
}

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const key = clientAddress(request.headers, request.ip);
  // No client address at all: this machine (`next start` with no proxy
  // in front, where the tests run) or the image optimiser's internal
  // read. Never banned or counted, or one trap hit would lock out
  // everyone behind the same missing address. An address a request
  // merely *claims* (127.0.0.1 in X-Forwarded-For) gets no such pass.
  const uncounted = isUncounted(key);

  // 1 — who is asking. A picture refuses only the AI crawlers: the
  // image optimiser reads /images/ through an internal request that
  // carries no headers at all, and most pictures are Commons files
  // anyway. (The optimiser's own /_next/image URL is answered before
  // middleware runs at all, so it is guarded only at the edge; see
  // docs/SECURITY.md.)
  const isPicture = pathname.startsWith("/images/");
  const ua = request.headers.get("user-agent");
  const verdict = classify(ua);
  if (verdict === "ai") return refuse(403, REFUSAL);
  if (!isPicture && (verdict === "scraper" || isDisguisedScript(ua, request.headers))) {
    return refuse(403, REFUSAL);
  }

  // 2 — the traps
  if (pathname === TRAP_PATH) {
    if (!uncounted) pages.block(key, TRAP_BAN_MS);
    return refuse(403, REFUSAL);
  }
  if (isProbe(pathname)) {
    if (!uncounted) pages.block(key, PROBE_BAN_MS);
    return refuse(403, REFUSAL);
  }
  if (pages.isBlocked(key)) return refuse(403, REFUSAL);

  // 3 — how often
  if (!isPicture && !uncounted) {
    const limiter = isRouterPrefetch(request.headers) ? prefetches : pages;
    if (limiter.hit(key)) return refuse(429, "Too many requests. Please slow down.");
  }

  // 4 — the language parameter
  const lang = request.nextUrl.searchParams.get("lang");
  let response: NextResponse;
  if (isLocale(lang)) {
    const url = request.nextUrl.clone();
    url.searchParams.delete("lang");
    response = NextResponse.redirect(url);
    response.cookies.set(LOCALE_COOKIE, lang, {
      path: "/",
      maxAge: 31_536_000,
      sameSite: "lax",
      secure: !isLocalHost(request.headers.get("host")),
    });
  } else {
    response = NextResponse.next();
  }

  // 5 — a signed-in reader's session, refreshed where a page reads it.
  // A Server Component cannot write cookies, so a token refreshed there
  // is never saved, and the next refresh, with the spent token, fails.
  // Only on these paths: elsewhere a page never looks at the session,
  // and asking Supabase on every page would cost every reader a call.
  if (readsSession(pathname) && !response.headers.has("location")) {
    response = await refreshSession(request, response);
  }

  // HSTS only off localhost: sent to localhost it would pin every other
  // project on this machine to https.
  if (!isLocalHost(request.headers.get("host"))) {
    response.headers.set(
      "strict-transport-security",
      "max-age=63072000; includeSubDomains; preload",
    );
  }
  if (pathname.startsWith("/admin") || readsSession(pathname)) {
    response.headers.set("x-robots-tag", "noindex, nofollow, noarchive");
    response.headers.set("cache-control", "no-store");
  }
  return response;
}

async function refreshSession(request: NextRequest, response: NextResponse): Promise<NextResponse> {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  if (!url || !key) return response;
  let out = response;
  try {
    const supabase = createServerClient(url, key, {
      cookies: {
        getAll: () => request.cookies.getAll(),
        setAll: (cookies: { name: string; value: string; options: CookieOptions }[]) => {
          // The page rendering this request must see the new tokens
          // too, or it refreshes again with the spent one.
          for (const { name, value } of cookies) request.cookies.set(name, value);
          out = NextResponse.next({ request });
          for (const { name, value, options } of cookies) out.cookies.set(name, value, options);
        },
      },
    });
    await supabase.auth.getUser();
  } catch {
    // Supabase unreachable: the page itself will find no reader.
  }
  return out;
}

export const config = {
  // Everything except the framework's own hashed bundles and the icons.
  matcher: ["/((?!_next/static|favicon.ico|icon.svg|apple-icon.png).*)"],
};
