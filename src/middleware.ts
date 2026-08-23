import { NextResponse, type NextRequest } from "next/server";
import { LOCALE_COOKIE, isLocale } from "@/i18n/config";

/**
 * Makes `?lang=kn` a shareable way to open any page in a given language:
 * the parameter is written to the locale cookie and stripped from the URL
 * by a redirect, so the address stays clean and every later navigation
 * stays in that language.
 *
 * The switcher in the header sets the same cookie directly and never
 * reaches this path.
 */
export function middleware(request: NextRequest) {
  const lang = request.nextUrl.searchParams.get("lang");
  if (!isLocale(lang)) return NextResponse.next();

  const url = request.nextUrl.clone();
  url.searchParams.delete("lang");

  const response = NextResponse.redirect(url);
  response.cookies.set(LOCALE_COOKIE, lang, {
    path: "/",
    maxAge: 31_536_000,
    sameSite: "lax",
  });
  return response;
}

export const config = {
  // Skip Next internals and static assets — they have no locale.
  matcher: ["/((?!_next/static|_next/image|favicon.ico|images/).*)"],
};
