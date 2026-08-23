// ─────────────────────────────────────────────────────────
//  Language configuration.
//
//  Locale lives in a cookie rather than the URL, so every page
//  stays a Server Component and renders already-translated HTML
//  (good for search engines) while the switcher still feels
//  instant. Adding a fourth language is a one-line change here
//  plus its column in the dictionaries — no per-language code
//  paths anywhere in the app.
// ─────────────────────────────────────────────────────────

export const LOCALES = ["en", "kn", "hi"] as const;

export type Locale = (typeof LOCALES)[number];

export const DEFAULT_LOCALE: Locale = "en";

/** Cookie the switcher writes and the server reads on every request. */
export const LOCALE_COOKIE = "tta_locale";

export interface LocaleMeta {
  /** Name in English, for aria-labels and admin surfaces. */
  label: string;
  /** Name in its own script — what the switcher actually shows. */
  native: string;
  /** Two-letter code for the <html lang> attribute. */
  htmlLang: string;
  /** Short badge text for the compact switcher. */
  short: string;
}

export const LOCALE_META: Record<Locale, LocaleMeta> = {
  en: { label: "English", native: "English", htmlLang: "en", short: "EN" },
  kn: { label: "Kannada", native: "ಕನ್ನಡ", htmlLang: "kn", short: "ಕ" },
  hi: { label: "Hindi", native: "हिन्दी", htmlLang: "hi", short: "हि" },
};

export function isLocale(value: string | undefined | null): value is Locale {
  return !!value && (LOCALES as readonly string[]).includes(value);
}
