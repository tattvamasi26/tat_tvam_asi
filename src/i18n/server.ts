import { cookies } from "next/headers";
import { DEFAULT_LOCALE, LOCALE_COOKIE, isLocale, type Locale } from "./config";
import { ui, type UIStrings } from "./ui";

/**
 * The active locale for this request, read from the cookie the
 * language switcher sets. Server Components call this so the HTML
 * arrives already translated rather than being swapped client-side.
 *
 * Reading a cookie opts the route into dynamic rendering, which is
 * what we want — the same URL must be able to serve three languages.
 */
export function getLocale(): Locale {
  const value = cookies().get(LOCALE_COOKIE)?.value;
  return isLocale(value) ? value : DEFAULT_LOCALE;
}

/** Convenience: the locale and its UI dictionary in one call. */
export function getTranslations(): { locale: Locale; t: UIStrings } {
  const locale = getLocale();
  return { locale, t: ui(locale) };
}
