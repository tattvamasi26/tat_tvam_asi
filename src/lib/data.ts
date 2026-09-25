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
  /** The region it is listed under, and the page it lives on. */
  region: string;
  href: string;
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
      region: t.region,
      href: `/temples/${t.region}/${t.slug}`,
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

// ── Temples by region ───────────────────────────────────────
//
// /temples lists the regions; /temples/[region] lists a region's
// temples and its circuits; /temples/[region]/[entry] is one temple
// written in depth, or one circuit. A temple module registers itself
// when imported, as the stotras do.
import "./seed/temple-pages/kollur-mookambika";
import "./seed/temple-pages/udupi-krishna-matha";
import "./seed/temple-pages/dharmasthala";
import "./seed/temple-pages/kukke-subramanya";
import "./seed/temple-pages/kateel";
import "./seed/temple-pages/mangaladevi";
import "./seed/temple-pages/kadri-manjunatha";
// An acharya written in depth registers itself on import, the same way
// a temple or a readable text does.
import "./seed/acharya-pages/shankara";
import {
  getAcharyaPage,
  acharyaPageSlugs,
  type AcharyaBlock,
  type AcharyaPicture,
  type AcharyaSection,
} from "./seed/acharya-pages";
import { TEMPLE_REGIONS, type TempleRegion } from "./seed/temple-regions";
import { collectionsOf, getCollection, type TempleCollection } from "./seed/temple-collections";
import {
  getTemplePage,
  templePagesOf,
  templePageSlugs,
  type TempleContent,
  type TemplePage,
  type TemplePicture,
} from "./seed/temple-pages";

export type { TempleBlock, TempleContent, TempleSection } from "./seed/temple-pages";

export interface TempleRegionView {
  slug: string;
  href: string;
  name: string;
  blurb: string;
  lede: string;
  image: ImageView | null;
  /** How many temples and circuits the region holds. */
  templeCount: number;
  collectionCount: number;
}

/** A temple or a circuit, as a card on a region's page. */
export interface TempleCardView {
  slug: string;
  href: string;
  name: string;
  nameLocal: string;
  nameLocalLang: string;
  /** Where it stands, or for a circuit, how many temples it takes in. */
  meta: string;
  blurb: string;
  image: ImageView | null;
  /** True for a temple written in depth, false for a short entry. */
  inDepth: boolean;
}

function regionView(r: TempleRegion, locale: Locale): TempleRegionView {
  const pick = (t: Record<Locale, string>) => t[locale] ?? t.en;
  return {
    slug: r.slug,
    href: `/temples/${r.slug}`,
    name: pick(r.name),
    blurb: pick(r.blurb),
    lede: pick(r.lede),
    image: imageView(r.image, locale),
    templeCount: templePagesOf(r.slug).length + TEMPLES.filter((t) => t.region === r.slug).length,
    collectionCount: collectionsOf(r.slug).length,
  };
}

/** The regions, in order, for the Temples index. */
export function getTempleRegions(locale: Locale): TempleRegionView[] {
  return [...TEMPLE_REGIONS].sort((a, b) => a.order - b.order).map((r) => regionView(r, locale));
}

function pageCard(p: TemplePage, locale: Locale): TempleCardView {
  const c = p.content[locale] ?? p.content.en;
  return {
    slug: p.slug,
    href: `/temples/${p.region}/${p.slug}`,
    name: p.name[locale] ?? p.name.en,
    nameLocal: p.nameLocal,
    nameLocalLang: p.nameLocalLang,
    meta: c.place,
    blurb: c.tagline,
    image: imageView(p.hero, locale),
    inDepth: true,
  };
}

function collectionCard(c: TempleCollection, locale: Locale, templesLabel: string): TempleCardView {
  return {
    slug: c.slug,
    href: `/temples/${c.region}/${c.slug}`,
    name: c.name[locale] ?? c.name.en,
    nameLocal: "",
    nameLocalLang: "kn",
    meta: `${c.count} ${templesLabel}`,
    blurb: c.blurb[locale] ?? c.blurb.en,
    image: imageView(c.image, locale),
    inDepth: false,
  };
}

/** One region: its own words, its circuits, and its temples. */
export function getTempleRegionPage(slug: string, locale: Locale, templesLabel: string) {
  const row = TEMPLE_REGIONS.find((r) => r.slug === slug);
  if (!row) return null;
  const temples: TempleCardView[] = [
    ...templePagesOf(slug).map((p) => pageCard(p, locale)),
    ...getAllTemples(locale)
      .filter((t) => t.region === slug)
      .map((t) => ({
        slug: t.slug,
        href: t.href,
        name: t.name,
        nameLocal: t.nameLocal,
        nameLocalLang: "kn",
        meta: `${t.location} · ${t.state}`,
        blurb: t.description,
        image: t.imageUrl
          ? { src: t.imageUrl, width: 0, height: 0, position: "50% 50%", alt: t.name, credit: t.imageCredit ?? "", sourceUrl: null }
          : null,
        inDepth: false,
      })),
  ];
  return {
    ...regionView(row, locale),
    collections: collectionsOf(slug).map((c) => collectionCard(c, locale, templesLabel)),
    temples,
  };
}

/** What sits at /temples/[region]/[entry]: a temple, a circuit, or nothing. */
export function getTempleEntryKind(region: string, entry: string): "temple" | "collection" | null {
  const page = getTemplePage(entry);
  if (page && page.region === region) return "temple";
  const row = TEMPLES.find((t) => t.slug === entry && t.region === region);
  if (row) return "temple";
  const collection = getCollection(entry);
  if (collection && collection.region === region) return "collection";
  return null;
}

export interface TempleMonographView {
  slug: string;
  region: TempleRegionView;
  name: string;
  nameLocal: string;
  nameLocalLang: string;
  tagline: string;
  place: string;
  facts: [string, string][];
  quote: string | null;
  sections: TempleContent["sections"];
  hero: ImageView | null;
  gallery: (ImageView & { caption: string | null })[];
  sources: { title: string; url: string }[];
  /** The temples either side of it on the region's page. */
  prev: { href: string; name: string } | null;
  next: { href: string; name: string } | null;
}

/**
 * A block as a page renders it. The only difference from the seed
 * shape is the figure: a section names a picture by src, and the view
 * resolves it against the page's own pictures so the alt text and the
 * crop come from where they are declared once.
 */
export type AcharyaBlockView =
  | Exclude<AcharyaBlock, { kind: "figure" }>
  | { kind: "figure"; src: string; caption: string; alt: string; position: string };

export interface AcharyaSectionView {
  id: string;
  eyebrow: string;
  title: string;
  standfirst: string | null;
  blocks: AcharyaBlockView[];
}

export interface AcharyaMonographView {
  slug: string;
  name: string;
  /** In the reader's script. */
  nameSanskrit: string;
  scriptClass: string;
  /** When he lived, in words — never a bare pair of years. */
  when: string;
  tagline: string;
  facts: [string, string][];
  quote: string | null;
  sections: AcharyaSectionView[];
  hero: ImageView | null;
  gallery: (ImageView & { caption: string | null })[];
  sources: { title: string; url: string; note?: string }[];
  /** For the contents rail: every section, in order. */
  contents: { id: string; title: string }[];
}

/** An acharya written in depth. The rest stay summary cards. */
export function getAcharyaMonograph(slug: string, locale: Locale): AcharyaMonographView | null {
  const p = getAcharyaPage(slug);
  if (!p) return null;
  const c = p.content[locale] ?? p.content.en;
  const teacher = getTeacherBySlug(slug, locale);
  const pictures = [p.hero, ...(p.gallery ?? [])].filter(Boolean) as AcharyaPicture[];

  const resolve = (section: AcharyaSection): AcharyaSectionView => ({
    id: section.id,
    eyebrow: section.eyebrow,
    title: section.title,
    standfirst: section.standfirst ?? null,
    blocks: section.blocks.map((b): AcharyaBlockView => {
      // Sanskrit is stored in Devanagari and rendered in the reader's
      // script, here as everywhere else on the site.
      if (b.kind === "verse") return { ...b, sanskrit: scriptFor(b.sanskrit, locale) };
      if (b.kind === "terms") {
        return {
          ...b,
          terms: b.terms.map((t) => (t.sanskrit ? { ...t, sanskrit: scriptFor(t.sanskrit, locale) } : t)),
        };
      }
      if (b.kind === "compass") {
        return {
          ...b,
          centre: scriptFor(b.centre, locale),
          points: b.points.map((pt) => ({ ...pt, vakya: scriptFor(pt.vakya, locale) })),
        };
      }
      if (b.kind !== "figure") return b;
      const pic = pictures.find((x) => x.src === b.src);
      return {
        kind: "figure",
        src: b.src,
        caption: b.caption,
        alt: pic?.alt[locale] ?? pic?.alt.en ?? "",
        position: pic?.position ?? "50% 50%",
      };
    }),
  });

  const sections = c.sections.map(resolve);

  return {
    slug: p.slug,
    name: teacher?.name ?? p.slug,
    nameSanskrit: scriptFor(p.nameSanskrit, locale),
    scriptClass: scriptClass(locale),
    when: c.when,
    tagline: c.tagline,
    facts: c.facts,
    quote: c.quote ?? null,
    sections,
    hero: imageView(p.hero, locale),
    gallery: (p.gallery ?? []).map((g: AcharyaPicture) => ({
      ...imageView(g, locale)!,
      caption: g.caption?.[locale] ?? g.caption?.en ?? null,
    })),
    sources: p.sources,
    contents: sections.map((s) => ({ id: s.id, title: s.title })),
  };
}

/** Which acharyas have a monograph; the index uses it for a Read link. */
export function getAcharyaMonographSlugs(): string[] {
  return acharyaPageSlugs();
}

/** A temple written in depth. Short entries have no monograph. */
export function getTempleMonograph(slug: string, locale: Locale): TempleMonographView | null {
  const p = getTemplePage(slug);
  if (!p) return null;
  const region = TEMPLE_REGIONS.find((r) => r.slug === p.region);
  if (!region) return null;
  const c = p.content[locale] ?? p.content.en;
  const siblings = templePagesOf(p.region);
  const i = siblings.findIndex((x) => x.slug === slug);
  const link = (x: TemplePage | undefined) =>
    x ? { href: `/temples/${x.region}/${x.slug}`, name: x.name[locale] ?? x.name.en } : null;

  return {
    slug: p.slug,
    region: regionView(region, locale),
    name: p.name[locale] ?? p.name.en,
    nameLocal: p.nameLocal,
    nameLocalLang: p.nameLocalLang,
    tagline: c.tagline,
    place: c.place,
    facts: c.facts,
    quote: c.quote ?? null,
    sections: c.sections,
    hero: imageView(p.hero, locale),
    gallery: (p.gallery ?? []).map((g: TemplePicture) => ({
      ...imageView(g, locale)!,
      caption: g.caption ? g.caption[locale] ?? g.caption.en : null,
    })),
    sources: p.sources,
    prev: link(siblings[i - 1]),
    next: link(siblings[i + 1]),
  };
}

/** Every region and entry route, for the static params. */
export function getTempleRoutes() {
  const regions = TEMPLE_REGIONS.map((r) => ({ section: r.slug }));
  const entries = [
    ...templePageSlugs().map((slug) => ({ section: getTemplePage(slug)!.region, entry: slug })),
    ...TEMPLES.map((t) => ({ section: t.region, entry: t.slug })),
    ...TEMPLE_COLLECTIONS_ROUTES(),
  ];
  return { regions, entries };
}

function TEMPLE_COLLECTIONS_ROUTES() {
  return TEMPLE_REGIONS.flatMap((r) => collectionsOf(r.slug).map((c) => ({ section: r.slug, entry: c.slug })));
}

/** Where a temple slug lives now, for links written before the regions. */
export function templeHref(slug: string): string | null {
  const page = getTemplePage(slug);
  if (page) return `/temples/${page.region}/${page.slug}`;
  const row = TEMPLES.find((t) => t.slug === slug);
  return row ? `/temples/${row.region}/${row.slug}` : null;
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
import { scriptFor, scriptClass } from "./script";

export interface IshaVerseView {
  /** "kannada" or "deva" — the face the mūla should be set in. */
  scriptClass: string;
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
    // The mūla in the reader's own script. Sanskrit is not Devanagari;
    // in Karnataka it is written in Kannada letters, and a reader who
    // chose Kannada should not be handed a script they did not pick.
    sanskrit: v.sanskrit.map((l) => scriptFor(l, locale)),
    scriptClass: scriptClass(locale),
    iast: v.iast,
    keywords: v.keywords.map((k) => ({
      term: scriptFor(k.term, locale),
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
  const t = getAllUpanishads(locale).find((u) => u.slug === "isha");
  if (!t) return null;
  // The title too — a Kannada page should not open on a Devanagari word.
  return { ...t, nameSanskrit: scriptFor(t.nameSanskrit, locale) };
}


// ── Any registered Upanishad, verse by verse ────────────────
//
// The Isha-specific accessors above are kept as thin wrappers so
// existing call sites do not change; everything new should use these.

// Importing these runs their registerText() side effect. Without it a
// text exists on disk but not in the registry, and its reader 404s.
import "./seed/isha";
import "./seed/mandukya";
import "./seed/kena";
import {
  getFullText,
  readableSlugs,
  commentaryFor as fullCommentaryFor,
  type FullText,
} from "./seed/upanishads";

export function getReadableSlugs(): string[] {
  return readableSlugs();
}

export function getUpanishadHeader(slug: string, locale: Locale): UpanishadView | null {
  const t = getAllUpanishads(locale).find((u) => u.slug === slug);
  if (!t) return null;
  // The title follows the reading script too — a Kannada page should
  // not open on a Devanagari word.
  return { ...t, nameSanskrit: scriptFor(t.nameSanskrit, locale) };
}

export function getUpanishadVerses(slug: string, locale: Locale): IshaVerseView[] {
  const text: FullText | undefined = getFullText(slug);
  if (!text) return [];
  const source = SOURCES.find((s) => s.id === "site-editorial");
  const series = text.series;

  return text.verses.map((v) => ({
    id: v.id,
    locator: v.locator,
    handle: v.handle[locale] ?? v.handle.en,
    sanskrit: v.sanskrit.map((l) => scriptFor(l, locale)),
    scriptClass: scriptClass(locale),
    iast: v.iast,
    keywords: v.keywords.map((k) => ({
      term: scriptFor(k.term, locale),
      iast: k.iast,
      gloss: k.gloss[locale] ?? k.gloss.en,
    })),
    translation: v.readings[locale]?.translation ?? v.readings.en.translation,
    explanation: fullCommentaryFor(text, v.id, locale),
    allTranslations: LOCALES.map((l) => ({
      locale: l,
      text: v.readings[l]?.translation ?? v.readings.en.translation,
    })),
    isCited: false,
    sourceTitle: source?.work_title ?? "",
    video: (() => {
      const vid = text.videos?.[v.locator];
      if (!vid || !series) return null;
      return {
        ...vid,
        url: `https://www.youtube.com/watch?v=${vid.id}`,
        thumb: `https://i.ytimg.com/vi/${vid.id}/mqdefault.jpg`,
        speaker: series.speaker,
        org: series.org,
      };
    })(),
  }));
}

export function getUpanishadSeries(slug: string) {
  return getFullText(slug)?.series ?? null;
}

// ── Stotras, arranged by devata ─────────────────────────────
//
// Each module registers itself (registerStotra) when imported, exactly
// as the Upanishads do. A module that is not imported here exists on
// disk but has no page.
import "./seed/stotras/gayatri-mantra";
import "./seed/stotras/ganesha-dhyana";
import "./seed/stotras/gananam-tva";
import "./seed/stotras/ganesha-gayatri";
import "./seed/stotras/ganesha-pancharatnam";
import "./seed/stotras/sankatanashana";
import "./seed/stotras/ganesha-dvadasha-nama";
import "./seed/stotras/ganapati-mula-mantra";
import "./seed/stotras/ganapati-atharvashirsha";
import "./seed/stotras/ganesha-bhujangam";
import "./seed/stotras/ganeshashtakam";
import { DEVATAS, type DevataImage, type DevataRow } from "./seed/devatas";
import { getStotra, stotrasOf, stotraSlugs, type StotraGroup } from "./seed/stotras";

export type { StotraGroup };

/** A picture, described in the reader's language. */
export interface ImageView {
  src: string;
  width: number;
  height: number;
  position: string;
  alt: string;
  credit: string;
  /** Where it came from; null for a picture supplied without a source. */
  sourceUrl: string | null;
}

function imageView(img: DevataImage | undefined, locale: Locale): ImageView | null {
  if (!img) return null;
  return {
    src: img.src,
    width: img.width,
    height: img.height,
    position: img.position ?? "50% 50%",
    alt: img.alt[locale] ?? img.alt.en,
    credit: img.credit,
    sourceUrl: img.sourceUrl ?? null,
  };
}

export interface DevataView {
  slug: string;
  status: "open" | "planned";
  name: string;
  /** In the reader's script. */
  nameSanskrit: string;
  nameIast: string;
  scriptClass: string;
  epithet: string;
  blurb: string;
  image: ImageView | null;
  /** A festival of theirs, given a band of its own on their page. */
  festival: {
    name: string;
    when: string;
    text: string;
    image: ImageView | null;
    stotra: { href: string; name: string } | null;
  } | null;
  /** How many stotras can be read in full. */
  stotraCount: number;
}

export interface StotraView {
  slug: string;
  devata: string;
  href: string;
  name: string;
  /** In the reader's script. */
  nameSanskrit: string;
  nameIast: string;
  scriptClass: string;
  summary: string;
  keyTeaching: string;
  origin: string;
  composer: string | null;
  metre: string | null;
  verseCount: number | null;
  /** The opening line of the mūla, in the reader's script. */
  firstLine: string;
  coverage: string | null;
  /** The section of the devata's page it is listed in. */
  group: StotraGroup;
  /** A recitation to listen to. */
  video: { id: string; title: string; channel: string; url: string; thumb: string } | null;
  /** Its own picture, else its section's, else the devata's. */
  image: ImageView | null;
}

/** A stotra summarised in corpus.ts whose text is not entered yet. */
export interface PlannedStuti {
  slug: string;
  name: string;
  nameSanskrit: string;
  nameIast: string;
}

function devataView(d: DevataRow, locale: Locale): DevataView {
  return {
    slug: d.slug,
    status: d.status,
    name: d.name[locale] ?? d.name.en,
    nameSanskrit: scriptFor(d.name_sanskrit, locale),
    nameIast: d.name_iast,
    scriptClass: scriptClass(locale),
    epithet: d.epithet[locale] ?? d.epithet.en,
    blurb: d.blurb[locale] ?? d.blurb.en,
    image: imageView(d.image, locale),
    festival: d.festival
      ? {
          name: d.festival.name[locale] ?? d.festival.name.en,
          when: d.festival.when[locale] ?? d.festival.when.en,
          text: d.festival.text[locale] ?? d.festival.text.en,
          image: imageView(d.festival.image, locale),
          stotra: (() => {
            const s = getStotraView(d.festival.stotra, locale);
            return s ? { href: s.href, name: s.name } : null;
          })(),
        }
      : null,
    stotraCount: stotrasOf(d.slug).length,
  };
}

/** Devatas with stotras to read, in order: Gāyatrī first. */
export function getDevatas(locale: Locale): DevataView[] {
  return DEVATAS.filter((d) => d.status === "open")
    .sort((a, b) => a.order - b.order)
    .map((d) => devataView(d, locale));
}

/** An open devata; planned ones have no page yet. */
export function getDevata(slug: string, locale: Locale): DevataView | null {
  const d = DEVATAS.find((x) => x.slug === slug && x.status === "open");
  return d ? devataView(d, locale) : null;
}

/** Devatas still being entered, with the stotras already summarised for them. */
export function getPlannedDevatas(locale: Locale): { devata: DevataView; stotras: PlannedStuti[] }[] {
  const readable = new Set(stotraSlugs());
  return DEVATAS.filter((d) => d.status === "planned")
    .sort((a, b) => a.order - b.order)
    .map((d) => ({
      devata: devataView(d, locale),
      stotras: resolveTexts(
        STUTIS.filter((t) => t.deity === d.slug && !readable.has(t.slug)),
        locale
      ).map((t) => ({
        slug: t.slug,
        name: t.name,
        nameSanskrit: scriptFor(t.nameSanskrit, locale),
        nameIast: t.nameIast,
      })),
    }))
    .filter((g) => g.stotras.length > 0);
}

export function getStotraView(slug: string, locale: Locale): StotraView | null {
  const s = getStotra(slug);
  const row = STUTIS.find((t) => t.slug === slug);
  if (!s || !row) return null;
  const header = resolveTexts([row], locale)[0];
  const devataRow = DEVATAS.find((d) => d.slug === s.devata);
  return {
    slug: s.slug,
    devata: s.devata,
    href: `/stutis/${s.devata}/${s.slug}`,
    name: header.name,
    nameSanskrit: scriptFor(header.nameSanskrit, locale),
    nameIast: header.nameIast,
    scriptClass: scriptClass(locale),
    summary: header.summary,
    keyTeaching: header.keyTeaching,
    origin: s.origin[locale] ?? s.origin.en,
    composer: s.composer ? s.composer[locale] ?? s.composer.en : null,
    metre: s.metre ?? null,
    verseCount: header.verseCount,
    firstLine: scriptFor(s.verses[0]?.sanskrit[0] ?? "", locale),
    coverage: s.completeness === "selections" ? s.covers?.[locale] ?? s.covers?.en ?? null : null,
    group: s.group,
    video: s.video
      ? {
          ...s.video,
          url: `https://www.youtube.com/watch?v=${s.video.id}`,
          thumb: `https://i.ytimg.com/vi/${s.video.id}/hqdefault.jpg`,
        }
      : null,
    image: imageView(s.image ?? devataRow?.groupImages?.[s.group] ?? devataRow?.image, locale),
  };
}

/** A devata's stotras, in the order they are said. */
export function getStotraViews(devata: string, locale: Locale): StotraView[] {
  return stotrasOf(devata)
    .map((s) => getStotraView(s.slug, locale))
    .filter((v): v is StotraView => v !== null);
}

const GROUP_ORDER: StotraGroup[] = ["daily", "vedic", "stotra"];

export interface StotraGroupView {
  group: StotraGroup;
  /** The picture beside this section, if the devata has one for it. */
  image: ImageView | null;
  stotras: StotraView[];
}

/** A devata's stotras in the sections of their page, each in the order said. */
export function getStotraGroups(devata: string, locale: Locale): StotraGroupView[] {
  const row = DEVATAS.find((d) => d.slug === devata);
  const all = getStotraViews(devata, locale);
  return GROUP_ORDER.map((group) => ({
    group,
    image: imageView(row?.groupImages?.[group], locale),
    stotras: all.filter((s) => s.group === group),
  })).filter((g) => g.stotras.length > 0);
}

/** The verses, shaped for the same VerseStage the Upanishad reader uses. */
export function getStotraVerses(slug: string, locale: Locale): IshaVerseView[] {
  const s = getStotra(slug);
  if (!s) return [];
  const source = SOURCES.find((x) => x.id === "site-editorial");
  return s.verses.map((v) => ({
    id: v.id,
    locator: v.locator,
    handle: v.handle?.[locale] ?? v.handle?.en ?? "",
    sanskrit: v.sanskrit.map((l) => scriptFor(l, locale)),
    scriptClass: scriptClass(locale),
    iast: v.iast,
    keywords: (v.keywords ?? []).map((k) => ({
      term: scriptFor(k.term, locale),
      iast: k.iast,
      gloss: k.gloss[locale] ?? k.gloss.en,
    })),
    translation: v.readings[locale]?.translation ?? v.readings.en.translation,
    explanation: v.readings[locale]?.explanation ?? v.readings.en.explanation ?? "",
    allTranslations: LOCALES.map((l) => ({
      locale: l,
      text: v.readings[l]?.translation ?? v.readings.en.translation,
    })),
    isCited: false,
    sourceTitle: source?.work_title ?? "",
    video: null,
  }));
}

/** The stotras either side of this one on its devata's page. */
export function getStotraNeighbours(slug: string, locale: Locale) {
  const s = getStotra(slug);
  if (!s) return { prev: null, next: null };
  const list = getStotraViews(s.devata, locale);
  const i = list.findIndex((x) => x.slug === slug);
  return { prev: list[i - 1] ?? null, next: list[i + 1] ?? null };
}

/** Every readable stotra's route segments. */
export function getStotraParams(): { devata: string; stotra: string }[] {
  return stotraSlugs().map((slug) => ({ devata: getStotra(slug)!.devata, stotra: slug }));
}

// ── Nava Vinayakas of Tulunadu ───────────────────────────────
import { NAVA_VINAYAKAS, NAVA_VINAYAKAS_PAGE } from "./seed/nava-vinayakas";

export interface NavaVinayakaView {
  slug: string;
  short: string;
  name: string;
  /** In Kannada, whatever the reader's language. */
  nameLocal: string;
  place: string;
  text: string;
  photo: ImageView | null;
}

/** The nine temples, south to north, with the page's own words. */
export function getNavaVinayakas(locale: Locale) {
  const pick = (r: Record<Locale, string>) => r[locale] ?? r.en;
  const P = NAVA_VINAYAKAS_PAGE;
  return {
    title: pick(P.title),
    eyebrow: pick(P.eyebrow),
    lede: pick(P.lede),
    note: pick(P.note),
    blurb: pick(P.blurb),
    routeLabel: pick(P.routeLabel),
    temples: NAVA_VINAYAKAS.map(
      (n): NavaVinayakaView => ({
        slug: n.slug,
        short: pick(n.short),
        name: pick(n.name),
        nameLocal: n.nameLocal,
        place: pick(n.place),
        text: pick(n.text),
        photo: imageView(n.photo, locale),
      })
    ),
  };
}

/**
 * For a text entered as selections rather than in full: what is
 * actually here. Returns null for a complete text, so the page can
 * simply not render the banner.
 */
export function getUpanishadCoverage(
  slug: string,
  locale: Locale
): string | null {
  const t = getFullText(slug);
  if (!t || t.completeness !== "selections") return null;
  return t.covers?.[locale] ?? t.covers?.en ?? null;
}
