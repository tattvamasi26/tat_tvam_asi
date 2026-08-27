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
  /**
   * Which face the site's own name should be set in for this locale.
   * The wordmark is the one place where the script has to follow the
   * reading language: a Devanagari lockup above an English page reads
   * as a different site's logo dropped onto the wrong page.
   */
  script: "latin" | "deva" | "knda";
}

export const LOCALE_META: Record<Locale, LocaleMeta> = {
  en: { label: "English", native: "English", htmlLang: "en", short: "EN", script: "latin" },
  kn: { label: "Kannada", native: "ಕನ್ನಡ", htmlLang: "kn", short: "ಕ", script: "knda" },
  hi: { label: "Hindi", native: "हिन्दी", htmlLang: "hi", short: "हि", script: "deva" },
};

/**
 * The class the site name should carry in a given locale. Returns "" for
 * English so Latin text simply inherits the page face rather than being
 * forced into a script font that has no Latin coverage.
 */
export function nameScriptClass(locale: Locale): string {
  const s = LOCALE_META[locale].script;
  return s === "deva" ? "deva" : s === "knda" ? "kannada" : "";
}

export function isLocale(value: string | undefined | null): value is Locale {
  return !!value && (LOCALES as readonly string[]).includes(value);
}
