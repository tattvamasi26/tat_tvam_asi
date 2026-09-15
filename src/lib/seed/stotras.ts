import type { Locale } from "@/i18n/config";
import type { Completeness, FullVerse, VerseKeyword } from "./upanishads";
import type { Category, TranslationRow, VerseNoteRow, VerseRow } from "./types";
import type { DevataImage } from "./devatas";

// ─────────────────────────────────────────────────────────
//  The registry of readable stotras, arranged by devata.
//
//  The same bargain as the Upanishad registry: a stotra is written
//  verse by verse in its own module under seed/stotras/, registers
//  itself here, and gets the whole reader — the devata's page, the
//  text, script transliteration, the meaning on request, its video —
//  without any page or component code.
//
//  Its header row (Sanskrit name, per-language name and summary)
//  lives in seed/corpus.ts with the other stotras, carrying the
//  devata in `deity`, so one `texts` table still holds every work.
//
//  Locators: "invocation" for anything said before the stotra
//  proper, "1".."n" for its verses, "phala" for a closing
//  phalaśruti. The reader labels each accordingly.
//
//  The mūla is entered only where every syllable could be checked
//  against a published edition; each module names the edition it
//  was checked against and any reading where it departs from it.
// ─────────────────────────────────────────────────────────

/**
 * A stotra verse. The stotra page shows the mūla, its transliteration
 * and — when the reader asks — the translation, so only those are
 * required. Handles, glossed words and commentary are kept where they
 * were written, but a new stotra need not supply them.
 */
export type StotraVerse = Omit<FullVerse, "handle" | "keywords" | "readings"> & {
  handle?: Record<Locale, string>;
  keywords?: VerseKeyword[];
  readings: Record<Locale, { translation: string; explanation?: string }>;
};

/** Where a stotra sits on its devata's page. */
export type StotraGroup = "daily" | "vedic" | "stotra";

/** A recitation to listen to, chosen by the site owner. */
export interface StotraVideo {
  /** The YouTube video id. */
  id: string;
  title: string;
  channel: string;
}

export interface Stotra {
  /** Matches the corpus.ts row slug, and is the last URL segment. */
  slug: string;
  /** The `texts.id` these verses hang off. */
  textId: string;
  /** A seed/devatas.ts slug. */
  devata: string;
  /** The section of the devata's page it is listed in. */
  group: StotraGroup;
  /** Position on the devata's page: the order in which they are said. */
  order: number;
  /** Vedic mantras are śruti; purāṇic and composed stotras are smṛti. */
  category: Extract<Category, "shruti" | "smriti">;
  /** Where the text is found, per language. */
  origin: Record<Locale, string>;
  /** Who composed it, where tradition names someone. */
  composer?: Record<Locale, string>;
  /** The metre, in IAST. Omitted for a set of verses in mixed metres. */
  metre?: string;
  verses: StotraVerse[];
  video?: StotraVideo;
  /** Its own picture; without one it takes its section's, then the devata's. */
  image?: DevataImage;
  completeness?: Completeness;
  covers?: Record<Locale, string>;
}

const REGISTRY = new Map<string, Stotra>();

export function registerStotra(stotra: Stotra) {
  REGISTRY.set(stotra.slug, stotra);
}

export function getStotra(slug: string): Stotra | undefined {
  return REGISTRY.get(slug);
}

export function stotraSlugs(): string[] {
  return Array.from(REGISTRY.keys());
}

/** A devata's stotras, in the order they are said. */
export function stotrasOf(devata: string): Stotra[] {
  return Array.from(REGISTRY.values())
    .filter((s) => s.devata === devata)
    .sort((a, b) => a.order - b.order);
}

// ── Derived storage rows ───────────────────────────────────

const LOCALES: Locale[] = ["en", "kn", "hi"];

function verseRows(s: Stotra): VerseRow[] {
  return s.verses.map((v) => ({
    id: v.id,
    text_id: s.textId,
    sanskrit: v.sanskrit.join("\n"),
    transliteration_iast: v.iast.join("\n"),
    locator: v.locator,
    division_1: null,
    division_2: v.locator,
    category: s.category,
    is_mahavakya: false,
    citation_status: "legacy_uncited",
    tags: [s.slug, "stotra", s.devata],
  }));
}

function translationRows(s: Stotra): TranslationRow[] {
  return s.verses.flatMap((v) =>
    LOCALES.map((l) => ({
      verse_id: v.id,
      language: l,
      translation_text: v.readings[l].translation,
      // The site's own reading, labelled as such on every verse.
      source_id: "site-editorial",
      is_primary: true,
    }))
  );
}

function noteRows(s: Stotra): VerseNoteRow[] {
  return s.verses.flatMap((v) =>
    LOCALES.flatMap((l) => {
      const note = v.readings[l].explanation;
      return note ? [{ verse_id: v.id, language: l, note }] : [];
    })
  );
}

/** Every registered stotra's rows, for when the corpus is pushed to Postgres. */
export function allStotraRows() {
  const all = Array.from(REGISTRY.values());
  return {
    verses: all.flatMap(verseRows),
    translations: all.flatMap(translationRows),
    notes: all.flatMap(noteRows),
  };
}
