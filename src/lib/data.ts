// ─────────────────────────────────────────────────────────
//  The read path.
//
//  Every function here takes a Locale and returns a view object
//  with the right language already resolved, so pages never deal
//  with translation rows directly.
//
//  These signatures deliberately mirror src/lib/db.ts. When the
//  Supabase project exists, `scripts/seed-supabase.mjs` pushes
//  src/lib/seed/* to Postgres and pages switch over by changing
//  their import — the call sites stay identical.
// ─────────────────────────────────────────────────────────
import { DEFAULT_LOCALE, type Locale } from "@/i18n/config";
import { SOURCES } from "./seed/sources";
import { TEXTS, TEXT_TRANSLATIONS } from "./seed/texts";
import { VERSES, VERSE_TRANSLATIONS, VERSE_NOTES } from "./seed/verses";
import { TEACHERS, TEACHER_TRANSLATIONS } from "./seed/teachers";
import { TEMPLES, TEMPLE_TRANSLATIONS } from "./seed/temples";
import { CONCEPTS, CONCEPT_TRANSLATIONS } from "./seed/concepts";
import { MATHAS, MATHA_TRANSLATIONS } from "./seed/mathas";
import type { SourceRow } from "./seed/types";

/**
 * Resolve a translation row for the requested language, falling back
 * to English so a half-translated entity still renders. Returning
 * `undefined` would push null-handling into every page.
 */
function forLocale<T extends { language: Locale }>(rows: T[], locale: Locale): T | undefined {
  return rows.find((r) => r.language === locale) ?? rows.find((r) => r.language === DEFAULT_LOCALE);
}

// ── View types (what pages actually consume) ────────────────

export interface VerseView {
  id: string;
  sanskrit: string;
  transliteration: string;
  translation: string;
  note: string | null;
  source: string;
  sourceTitle: string;
  isCited: boolean;
  locator: string;
  category: string;
  isMahavakya: boolean;
  tags: string[];
}

export interface UpanishadView {
  id: string;
  slug: string;
  nameSanskrit: string;
  nameIast: string;
  name: string;
  veda: string | null;
  verseCount: number | null;
  summary: string;
  keyTeaching: string;
}

export interface TeacherView {
  id: string;
  slug: string;
  name: string;
  nameSanskrit: string;
  era: string;
  tradition: string;
  biography: string;
  quote: string;
  keyWorks: string[];
  imageUrl: string | null;
  imageCredit: string | null;
}

export interface TempleView {
  id: string;
  slug: string;
  name: string;
  nameLocal: string;
  location: string;
  state: string;
  dynasty: string;
  centuryBuilt: string;
  architectureStyle: string;
  presidingDeity: string;
  description: string;
  significance: string;
  imageUrl: string | null;
  imageCredit: string | null;
}

export interface ConceptView {
  id: string;
  slug: string;
  termSanskrit: string;
  termIast: string;
  term: string;
  definition: string;
  detailedExplanation: string;
  relatedConcepts: string[];
}

export interface MathaView {
  id: string;
  slug: string;
  name: string;
  location: string;
  state: string;
  direction: "north" | "south" | "east" | "west";
  veda: string;
  mahavakya: string;
  presidingDeity: string;
  foundedBy: string;
  description: string;
  imageUrl: string | null;
  imageCredit: string | null;
}

// ── Verses ──────────────────────────────────────────────────

export function getAllVerses(locale: Locale): VerseView[] {
  return VERSES.map((v) => {
    const tr = forLocale(VERSE_TRANSLATIONS.filter((t) => t.verse_id === v.id), locale);
    const note = forLocale(VERSE_NOTES.filter((n) => n.verse_id === v.id), locale);
    const src = SOURCES.find((s) => s.id === tr?.source_id);
    const text = TEXTS.find((t) => t.id === v.text_id);
    const textName = forLocale(TEXT_TRANSLATIONS.filter((t) => t.text_id === v.text_id), locale);
    return {
      id: v.id,
      sanskrit: v.sanskrit,
      transliteration: v.transliteration_iast,
      translation: tr?.translation_text ?? "",
      note: note?.note ?? null,
      source: textName?.name ?? text?.name_iast ?? "",
      sourceTitle: src?.work_title ?? "",
      isCited: v.citation_status === "cited",
      locator: v.locator,
      category: v.category,
      isMahavakya: v.is_mahavakya,
      tags: v.tags,
    };
  });
}

export function getVerseIds(): string[] {
  return VERSES.map((v) => v.id);
}

export function getVerseById(id: string, locale: Locale): VerseView | null {
  return getAllVerses(locale).find((v) => v.id === id) ?? null;
}

export function getMahavakyas(locale: Locale): VerseView[] {
  return getAllVerses(locale).filter((v) => v.isMahavakya);
}

/**
 * Deterministic per-day pick. Uses the date only, so the same day
 * yields the same verse for every visitor and across a rebuild.
 */
export function getVerseOfTheDay(locale: Locale): VerseView {
  const now = new Date();
  const startOfYear = new Date(now.getFullYear(), 0, 0);
  const dayOfYear = Math.floor((now.getTime() - startOfYear.getTime()) / 86_400_000);
  const all = getAllVerses(locale);
  return all[dayOfYear % all.length];
}

// ── Texts / Upanishads ──────────────────────────────────────

export function getAllUpanishads(locale: Locale): UpanishadView[] {
  return TEXTS.filter((t) => t.work_type === "upanishad").map((t) => {
    const tr = forLocale(TEXT_TRANSLATIONS.filter((x) => x.text_id === t.id), locale);
    return {
      id: t.id,
      slug: t.slug,
      nameSanskrit: t.name_sanskrit,
      nameIast: t.name_iast,
      name: tr?.name ?? t.name_iast,
      veda: t.veda,
      verseCount: t.verse_count,
      summary: tr?.summary ?? "",
      keyTeaching: tr?.key_teaching ?? "",
    };
  });
}

// ── Teachers ────────────────────────────────────────────────

export function getAllTeachers(locale: Locale): TeacherView[] {
  return TEACHERS.map((t) => {
    const tr = forLocale(TEACHER_TRANSLATIONS.filter((x) => x.teacher_id === t.id), locale);
    return {
      id: t.id,
      slug: t.slug,
      name: tr?.name ?? "",
      nameSanskrit: t.name_sanskrit,
      era: tr?.era ?? "",
      tradition: tr?.tradition ?? "",
      biography: tr?.biography ?? "",
      quote: tr?.quote ?? "",
      keyWorks: tr?.key_works ?? [],
      imageUrl: t.image_url,
      imageCredit: t.image_credit,
    };
  });
}

export function getTeacherBySlug(slug: string, locale: Locale): TeacherView | null {
  return getAllTeachers(locale).find((t) => t.slug === slug) ?? null;
}

// ── Temples ─────────────────────────────────────────────────

export function getAllTemples(locale: Locale): TempleView[] {
  return TEMPLES.map((t) => {
    const tr = forLocale(TEMPLE_TRANSLATIONS.filter((x) => x.temple_id === t.id), locale);
    return {
      id: t.id,
      slug: t.slug,
      name: tr?.name ?? "",
      nameLocal: t.name_local,
      location: tr?.location ?? "",
      state: tr?.state ?? "",
      dynasty: tr?.dynasty ?? "",
      centuryBuilt: t.century_built,
      architectureStyle: tr?.architecture_style ?? "",
      presidingDeity: tr?.presiding_deity ?? "",
      description: tr?.description ?? "",
      significance: tr?.significance ?? "",
      imageUrl: t.image_url,
      imageCredit: t.image_credit,
    };
  });
}

export function getTempleBySlug(slug: string, locale: Locale): TempleView | null {
  return getAllTemples(locale).find((t) => t.slug === slug) ?? null;
}

// ── Concepts ────────────────────────────────────────────────

export function getAllConcepts(locale: Locale): ConceptView[] {
  return CONCEPTS.map((c) => {
    const tr = forLocale(CONCEPT_TRANSLATIONS.filter((x) => x.concept_id === c.id), locale);
    return {
      id: c.id,
      slug: c.slug,
      termSanskrit: c.term_sanskrit,
      termIast: c.term_iast,
      term: tr?.term ?? c.term_iast,
      definition: tr?.definition ?? "",
      detailedExplanation: tr?.detailed_explanation ?? "",
      relatedConcepts: c.related_concepts,
    };
  });
}

export function getConceptBySlug(slug: string, locale: Locale): ConceptView | null {
  return getAllConcepts(locale).find((c) => c.slug === slug) ?? null;
}

// ── Mathas ──────────────────────────────────────────────────

export function getAllMathas(locale: Locale): MathaView[] {
  return MATHAS.map((m) => {
    const tr = forLocale(MATHA_TRANSLATIONS.filter((x) => x.matha_id === m.id), locale);
    return {
      id: m.id,
      slug: m.slug,
      name: tr?.name ?? "",
      location: tr?.location ?? "",
      state: tr?.state ?? "",
      direction: m.direction,
      veda: m.veda,
      mahavakya: m.mahavakya,
      presidingDeity: tr?.presiding_deity ?? "",
      foundedBy: tr?.founded_by ?? "",
      description: tr?.description ?? "",
      imageUrl: m.image_url,
      imageCredit: m.image_credit,
    };
  });
}

// ── Sources ─────────────────────────────────────────────────

export function getAllSources(): SourceRow[] {
  return SOURCES;
}

// ── Search ──────────────────────────────────────────────────

export interface SearchResults {
  verses: VerseView[];
  teachers: TeacherView[];
  temples: TempleView[];
  concepts: ConceptView[];
}

export function searchAll(query: string, locale: Locale, limit = 8): SearchResults {
  const q = query.trim().toLowerCase();
  if (!q) return { verses: [], teachers: [], temples: [], concepts: [] };

  const has = (...fields: (string | undefined)[]) =>
    fields.some((f) => f?.toLowerCase().includes(q));

  return {
    verses: getAllVerses(locale)
      .filter((v) => has(v.sanskrit, v.transliteration, v.translation, v.source, ...v.tags))
      .slice(0, limit),
    teachers: getAllTeachers(locale)
      .filter((t) => has(t.name, t.nameSanskrit, t.biography, t.tradition))
      .slice(0, limit),
    temples: getAllTemples(locale)
      .filter((t) => has(t.name, t.nameLocal, t.location, t.state, t.description, t.presidingDeity))
      .slice(0, limit),
    concepts: getAllConcepts(locale)
      .filter((c) => has(c.term, c.termSanskrit, c.termIast, c.definition, c.detailedExplanation))
      .slice(0, limit),
  };
}

// ── The wider corpus: Vedas, Gita, stutis, bhajans ──────────
//
// These read from src/lib/seed/corpus.ts, which uses the same TextRow /
// TextTranslationRow shapes as the Upanishads — so one resolver serves
// all of them and a new work_type needs no new code here.

import {
  VEDAS,
  GITA,
  GITA_CHAPTERS,
  GITA_CHAPTER_TRANSLATIONS,
  STUTIS,
  BHAJANS,
  CORPUS_TRANSLATIONS,
} from "./seed/corpus";
import type { TextRow, TextTranslationRow } from "./seed/types";

const CORPUS_ALL: TextTranslationRow[] = [
  ...CORPUS_TRANSLATIONS,
  ...GITA_CHAPTER_TRANSLATIONS,
];

function resolveTexts(rows: TextRow[], locale: Locale): UpanishadView[] {
  return rows.map((t) => {
    const tr = forLocale(CORPUS_ALL.filter((x) => x.text_id === t.id), locale);
    return {
      id: t.id,
      slug: t.slug,
      nameSanskrit: t.name_sanskrit,
      nameIast: t.name_iast,
      name: tr?.name ?? t.name_iast,
      veda: t.veda,
      verseCount: t.verse_count,
      summary: tr?.summary ?? "",
      keyTeaching: tr?.key_teaching ?? "",
    };
  });
}

export function getVedas(locale: Locale): UpanishadView[] {
  return resolveTexts(VEDAS, locale);
}

export function getGita(locale: Locale): { work: UpanishadView; chapters: UpanishadView[] } {
  return {
    work: resolveTexts([GITA], locale)[0],
    chapters: resolveTexts(GITA_CHAPTERS, locale),
  };
}

export function getStutis(locale: Locale): UpanishadView[] {
  return resolveTexts(STUTIS, locale);
}

export function getBhajans(locale: Locale): UpanishadView[] {
  return resolveTexts(BHAJANS, locale);
}

// ── Isha Upanishad: the full verse-by-verse reading ─────────
//
// The other read functions here resolve one language and hand the page
// a flat view. This one also exposes every language at once, because a
// verse reader genuinely wants to compare renderings side by side —
// that is a feature of scripture, not a violation of the locale rule.
// The page still follows the active locale for everything else.

import { ISHA_VERSES, commentaryFor, videoFor, type IshaVerse } from "./seed/isha";
import { watchUrl, thumbUrl, VIDEO_SERIES } from "./seed/isha-video";
import { LOCALES } from "@/i18n/config";

export interface IshaVerseView {
  id: string;
  locator: string;
  handle: string;
  sanskrit: string[];
  iast: string[];
  keywords: { term: string; iast: string; gloss: string }[];
  /** The active locale's reading. */
  translation: string;
  explanation: string;
  /** Every locale, for the compare panel. */
  allTranslations: { locale: Locale; text: string }[];
  isCited: boolean;
  sourceTitle: string;
  video: {
    id: string;
    talk: number;
    covers: string;
    url: string;
    thumb: string;
    speaker: string;
    org: string;
  } | null;
}

export function getIshaVerses(locale: Locale): IshaVerseView[] {
  const source = SOURCES.find((s) => s.id === "site-editorial");

  return ISHA_VERSES.map((v: IshaVerse) => ({
    id: v.id,
    locator: v.locator,
    handle: v.handle[locale] ?? v.handle.en,
    sanskrit: v.sanskrit,
    iast: v.iast,
    keywords: v.keywords.map((k) => ({
      term: k.term,
      iast: k.iast,
      gloss: k.gloss[locale] ?? k.gloss.en,
    })),
    translation: v.readings[locale]?.translation ?? v.readings.en.translation,
    explanation: commentaryFor(v.id, locale),
    allTranslations: LOCALES.map((l) => ({
      locale: l,
      text: v.readings[l]?.translation ?? v.readings.en.translation,
    })),
    // Every row points at site-editorial for now — see the header of
    // seed/isha.ts for why nothing here is attributed to a translator.
    isCited: false,
    sourceTitle: source?.work_title ?? "",
    video: (() => {
      const vid = videoFor(v.locator);
      if (!vid) return null;
      return {
        ...vid,
        url: watchUrl(vid.id),
        thumb: thumbUrl(vid.id),
        speaker: VIDEO_SERIES.speaker,
        org: VIDEO_SERIES.org,
      };
    })(),
  }));
}

/** The Isha's own record from the texts table. */
export function getIshaText(locale: Locale): UpanishadView | null {
  return getAllUpanishads(locale).find((u) => u.slug === "isha") ?? null;
}
