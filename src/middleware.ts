import { NextResponse, type NextRequest } from "next/server";
import { LOCALE_COOKIE, isLocale } from "@/i18n/config";
import { classify, TRAP_PATH } from "@/lib/security/bots";
import { RateLimiter } from "@/lib/security/rate-limit";

/**
 * Runs before every request. In order:
 *
 * 1. The bot guard. AI crawlers and copying tools that name themselves
 *    are refused with 403; robots.txt has already told them no.
 * 2. The trap. A client that requests the invisible trap link is
 *    copying the site, and is refused for an hour.
 * 3. The rate limit, counted on pages only — router prefetches and
 *    pictures don't count, so a reader never meets it.
 * 4. `?lang=kn`: the parameter is written to the locale cookie and
 *    stripped by a redirect, so any page can be shared in a language.
 *
 * The response headers that apply to every file, including the static
 * ones this never sees, are in next.config.js.
 */

// 120 pages a minute, 1,200 an hour. Reading at full tilt is a page
// every few seconds.
const limiter = new RateLimiter([
  { limit: 120, ms: 60_000 },
  { limit: 1_200, ms: 3_600_000 },
]);
const TRAP_BAN_MS = 3_600_000;

function clientKey(request: NextRequest): string {
  const forwarded = request.headers.get("x-forwarded-for");
  return (
    forwarded?.split(",")[0]?.trim() ||
    request.headers.get("x-real-ip") ||
    request.ip ||
    "local"
  );
}

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

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const key = clientKey(request);
  // No client address: this machine (`next start` with no proxy in
  // front, where the tests run) or the image optimiser's internal read.
  // Never banned or counted, or one trap hit would lock out everyone
  // behind the same missing address.
  const isLoopback = key === "local" || /^(127\.|::1$|::ffff:127\.)/.test(key);

  // 1 — who is asking. A picture refuses only the AI crawlers: the
  // image optimiser reads /images/ through an internal request that
  // carries no headers at all, and most pictures are Commons files
  // anyway. (The optimiser's own /_next/image URL is answered before
  // middleware runs at all, so it is guarded only at the edge; see
  // docs/SECURITY.md.)
  const isPicture = pathname.startsWith("/images/");
  const verdict = classify(request.headers.get("user-agent"));
  if (verdict === "ai" || (verdict === "scraper" && !isPicture)) {
    return refuse(403, "Automated access to this site is not permitted. See /rights.");
  }

  // 2 — the trap
  if (pathname === TRAP_PATH) {
    if (!isLoopback) limiter.block(key, TRAP_BAN_MS);
    return refuse(403, "Automated access to this site is not permitted. See /rights.");
  }
  if (limiter.isBlocked(key)) {
    return refuse(403, "Automated access to this site is not permitted. See /rights.");
  }

  // 3 — how often
  const isPrefetch =
    request.headers.has("next-router-prefetch") ||
    request.headers.get("purpose") === "prefetch" ||
    request.headers.get("sec-purpose")?.includes("prefetch");
  const isAsset = isPicture;
  if (!isPrefetch && !isAsset && !isLoopback && limiter.hit(key)) {
    return refuse(429, "Too many requests. Please slow down.");
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

  // HSTS only off localhost: sent to localhost it would pin every other
  // project on this machine to https.
  if (!isLocalHost(request.headers.get("host"))) {
    response.headers.set(
      "strict-transport-security",
      "max-age=63072000; includeSubDomains; preload",
    );
  }
  if (pathname.startsWith("/admin")) {
    response.headers.set("x-robots-tag", "noindex, nofollow, noarchive");
    response.headers.set("cache-control", "no-store");
  }
  return response;
}

export const config = {
  // Everything except the framework's own hashed bundles and the icons.
  matcher: ["/((?!_next/static|favicon.ico|icon.svg|apple-icon.png).*)"],
};
