import type { Locale } from "@/i18n/config";
import type { TranslationRow, VerseNoteRow, VerseRow } from "./types";
import type { VerseVideo } from "./isha-video";

// ─────────────────────────────────────────────────────────
//  The registry of readable Upanishads.
//
//  The Isha reader was built for one text. This turns it into a
//  template: a text supplies its verses, its commentary and its
//  lecture mapping, registers itself here, and gets the whole
//  reading experience — script transliteration, per-verse
//  commentary, spine, keyboard navigation, talks — for free.
//
//  Adding the next Upanishad is therefore a content job and not
//  an engineering one, which is the same principle the language
//  layer already follows.
//
//  A text is only listed here once it is COMPLETE. A half-entered
//  text that renders as a reader implies a completeness it does
//  not have, and on a site whose whole claim is that it cites its
//  sources, that is the wrong failure mode. Everything else stays
//  on the /upanishads index as a summary card until it is done.
// ─────────────────────────────────────────────────────────

export interface VerseReading {
  translation: string;
  explanation: string;
}

export interface VerseKeyword {
  term: string;
  iast: string;
  gloss: Record<Locale, string>;
}

export interface FullVerse {
  id: string;
  /** "invocation", or "1".."18" — what the reader is told. */
  locator: string;
  /** Short handle shown beside the verse number, per language. */
  handle: Record<Locale, string>;
  /** Devanagari mūla, one pada per line. Transliterated per script. */
  sanskrit: string[];
  /** IAST, aligned line-for-line. */
  iast: string[];
  keywords: VerseKeyword[];
  readings: Record<Locale, VerseReading>;
}

export interface FullText {
  /** Matches the `texts` row slug, so the header can be looked up. */
  slug: string;
  /** The `texts.id` these verses hang off. */
  textId: string;
  verses: FullVerse[];
  /** Long-form commentary, keyed by verse id. Optional per verse. */
  commentary?: Record<string, Record<Locale, string>>;
  /** Lecture per verse locator, if a series covers this text. */
  videos?: Record<string, VerseVideo>;
  /** Who gave those lectures. */
  series?: { speaker: string; org: string; channel: string };
}

const REGISTRY = new Map<string, FullText>();

export function registerText(text: FullText) {
  REGISTRY.set(text.slug, text);
}

export function getFullText(slug: string): FullText | undefined {
  return REGISTRY.get(slug);
}

/** Slugs that have a complete verse-by-verse reader. */
export function readableSlugs(): string[] {
  return Array.from(REGISTRY.keys());
}

// ── Derived storage rows, for any registered text ───────────

const LOCALES: Locale[] = ["en", "kn", "hi"];

export function commentaryFor(text: FullText, verseId: string, locale: Locale): string {
  const long = text.commentary?.[verseId]?.[locale];
  if (long) return long;
  const v = text.verses.find((x) => x.id === verseId);
  return v?.readings[locale]?.explanation ?? "";
}

export function verseRowsFor(text: FullText): VerseRow[] {
  return text.verses.map((v) => ({
    id: v.id,
    text_id: text.textId,
    sanskrit: v.sanskrit.join("\n"),
    transliteration_iast: v.iast.join("\n"),
    locator: v.locator,
    division_1: null,
    division_2: v.locator === "invocation" ? null : v.locator,
    category: "shruti",
    is_mahavakya: false,
    citation_status: "legacy_uncited",
    tags: [text.slug, "upanishad"],
  }));
}

export function translationRowsFor(text: FullText): TranslationRow[] {
  return text.verses.flatMap((v) =>
    LOCALES.map((l) => ({
      verse_id: v.id,
      language: l,
      translation_text: v.readings[l].translation,
      source_id: "site-editorial",
      is_primary: true,
    }))
  );
}

export function noteRowsFor(text: FullText): VerseNoteRow[] {
  return text.verses.flatMap((v) =>
    LOCALES.map((l) => ({
      verse_id: v.id,
      language: l,
      note: commentaryFor(text, v.id, l),
    }))
  );
}

/** Every registered text's rows, for the seed script. */
export function allReadableRows() {
  const texts = Array.from(REGISTRY.values());
  return {
    verses: texts.flatMap(verseRowsFor),
    translations: texts.flatMap(translationRowsFor),
    notes: texts.flatMap(noteRowsFor),
  };
}
