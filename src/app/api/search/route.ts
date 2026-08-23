import { NextResponse } from "next/server";
import { searchAll } from "@/lib/data";
import { isLocale, DEFAULT_LOCALE } from "@/i18n/config";

/**
 * JSON search, used for type-ahead and available to anything that wants
 * results without the page chrome. Locale comes from ?lang= so callers
 * can request a language explicitly rather than depending on the cookie.
 */
export function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const q = searchParams.get("q") ?? "";
  const lang = searchParams.get("lang");
  const locale = isLocale(lang) ? lang : DEFAULT_LOCALE;

  return NextResponse.json(searchAll(q, locale));
}
