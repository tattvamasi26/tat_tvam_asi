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
import {
  CONCEPT_GROUP,
  SCHOOLS,
  SOURCE_TEXTS,
  type ConceptGroup,
} from "./seed/concepts-more";
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
  group: ConceptGroup;
  /** Where the term is chiefly set out, so a reader can go and look. */
  sourceText: string | null;
  /**
   * The six terms where Vedanta actually divides. Three schools wrote
   * on the same verses and reached incompatible conclusions; a single
   * confident sentence here would be a quiet lie.
   */
  schools: { advaita: string; vishishtadvaita: string; dvaita: string } | null;
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
import { SHASTRA_BRANCHES, type ShastraStatus } from "./seed/shastras";
import {
  FESTIVALS,
  LUNAR_MONTHS,
  PAKSHAS,
  TITHIS,
  monthOrder,
  monthFraction,
  type Reckoning,
} from "./seed/festivals";
import { festivalImage, type FestivalImage } from "./seed/festival-images";
import {
  RITUALS,
  RITUAL_GROUPS,
  SAMSKARAS,
  PLACEMENT,
  SAMSKARA_AGE,
  ritualsInGroup,
  ritualsInOrder,
  ritualsOnLens,
  ritualsFromBranch,
  prescriptionFor,
  type Kept,
  type Lens,
  type RitualGroupId,
} from "./seed/rituals";
import { ritualImage, ritualGroupImage, type RitualImage } from "./seed/ritual-images";
import {
  PURANAS,
  puranaBySlug,
  puranasInOrder,
  puranasByGuna,
  traditionalVerseTotal,
  type PuranaGuna,
} from "./seed/puranas";
import {
  STORIES,
  storyBySlug,
  storiesInOrder,
  storiesFromPurana,
} from "./seed/stories";
import {
  TIME_UNITS,
  YUGAS,
  LOKAS,
  DVIPAS,
  PRALAYAS,
  NOW,
} from "./seed/cosmos";
import {
  COSMOS_TOPICS,
  topicBySlug,
  topicsInOrder,
  type CosmosSection,
} from "./seed/cosmos-topics";
import { PRACTICES, type PracticeKind, type PracticeTrack } from "./seed/practice";
import { practiceImage, type PracticeImage } from "./seed/practice-images";
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
      group: CONCEPT_GROUP[c.slug] ?? "reality",
      sourceText: SOURCE_TEXTS[c.slug]?.[locale] ?? null,
      schools: SCHOOLS[c.slug]
        ? {
            advaita: SCHOOLS[c.slug]!.advaita[locale],
            vishishtadvaita: SCHOOLS[c.slug]!.vishishtadvaita[locale],
            dvaita: SCHOOLS[c.slug]!.dvaita[locale],
          }
        : null,
    };
  });
}

/** The groups in reading order, each with its concepts. */
export function getConceptGroups(
  locale: Locale,
): { id: ConceptGroup; concepts: ConceptView[] }[] {
  const order: ConceptGroup[] = ["reality", "self", "action", "life", "path"];
  const all = getAllConcepts(locale);
  return order.map((id) => ({ id, concepts: all.filter((c) => c.group === id) }));
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

// ── The śāstra map ──────────────────────────────────────────

/**
 * The whole tradition in one shape, resolved for the reader.
 *
 * The map holds no texts of its own: it names the nine branches and
 * says, for each text, whether this site can show it yet and where.
 * A text that lives in another section carries that section's href,
 * so the map never becomes a second address for anything.
 */
export function getShastraMap(locale: Locale): ShastraBranchView[] {
  return SHASTRA_BRANCHES.map((branch) => ({
    id: branch.id,
    name: branch.name[locale],
    sanskrit: scriptFor(branch.sanskrit, locale),
    glyph: scriptFor(branch.glyph, locale),
    href: branch.href ?? null,
    lede: branch.lede[locale],
    // What a reader can actually open in this branch today. The card
    // prints it, so a branch never looks fuller than it is.
    readable: branch.texts.filter((t) => t.status !== "planned").length,
    total: branch.texts.length,
    // How many rites this branch lays down — the return leg of the
    // bridge into Rituals & Festivals.
    rites: ritualsFromBranch(branch.id).length,
    texts: branch.texts.map((text) => ({
      id: text.id,
      name: text.name[locale],
      sanskrit: scriptFor(text.sanskrit, locale),
      note: text.note[locale],
      href: text.href ?? null,
      status: text.status,
    })),
  }));
}

export interface ShastraTextView {
  id: string;
  name: string;
  /** Already in the reader's script. */
  sanskrit: string;
  note: string;
  href: string | null;
  status: ShastraStatus;
}

export interface ShastraBranchView {
  id: string;
  name: string;
  /** Already in the reader's script. */
  sanskrit: string;
  /** Short, for the card's art panel. Already converted. */
  glyph: string;
  href: string | null;
  lede: string;
  readable: number;
  total: number;
  /** How many rites this branch lays down. */
  rites: number;
  texts: ShastraTextView[];
}

// ── The festivals ───────────────────────────────────────────

export interface FestivalLinkView {
  href: string;
  label: string;
}

export interface FestivalView {
  slug: string;
  name: string;
  /** Already in the reader's script. */
  sanskrit: string;
  reckoning: Reckoning;
  /**
   * The date, composed and ready to print: "Chaitra · śukla pakṣa ·
   * pratipadā". Never a Gregorian date — a lunar festival does not
   * have one that holds for more than a year.
   */
  when: string;
  /** A day that spans several, or is fixed some other way. */
  whenNote: string | null;
  /** The northern month name, where the two reckonings disagree. */
  alsoCalled: string | null;
  lede: string;
  observed: string;
  significance: string;
  regional: string | null;
  links: FestivalLinkView[];
  /** The photograph, with its alt already in the reader's language. */
  image: {
    src: string;
    width: number;
    height: number;
    alt: string;
    credit: string;
    sourceUrl: string;
    position: string;
  } | null;
}

function festivalView(f: (typeof FESTIVALS)[number], locale: Locale): FestivalView {
  // A lunar date is three parts. A solar one has none of them and
  // leans on its note instead.
  const parts: string[] = [];
  if (f.month) parts.push(LUNAR_MONTHS[f.month][locale]);
  if (f.paksha) parts.push(PAKSHAS[f.paksha][locale]);
  if (f.tithi) parts.push(TITHIS[f.tithi][locale]);

  return {
    slug: f.slug,
    name: f.name[locale],
    sanskrit: scriptFor(f.sanskrit, locale),
    reckoning: f.reckoning,
    when: parts.join(" \u00b7 "),
    whenNote: f.whenNote?.[locale] ?? null,
    alsoCalled: f.alsoCalled?.[locale] ?? null,
    lede: f.lede[locale],
    observed: f.observed[locale],
    significance: f.significance[locale],
    regional: f.regional?.[locale] ?? null,
    links: (f.links ?? []).map((l) => ({ href: l.href, label: l.label[locale] })),
    image: imageFor(festivalImage(f.slug), locale),
  };
}

function imageFor(img: FestivalImage | undefined, locale: Locale) {
  if (!img) return null;
  return {
    src: img.src,
    width: img.width,
    height: img.height,
    alt: img.alt[locale],
    credit: img.credit,
    sourceUrl: img.sourceUrl,
    position: img.position ?? "50% 50%",
  };
}

/**
 * The festivals in the order of the lunar year, which begins at
 * Chaitra. Makara Sankranti is solar and has no lunar month, so it
 * sorts by the month it actually falls in.
 */
export function getFestivals(locale: Locale): FestivalView[] {
  return [...FESTIVALS]
    .sort((a, b) => {
      const am = a.reckoning === "solar" ? 9.5 : monthOrder(a.month);
      const bm = b.reckoning === "solar" ? 9.5 : monthOrder(b.month);
      return am - bm;
    })
    .map((f) => festivalView(f, locale));
}

export function getFestival(slug: string, locale: Locale): FestivalView | null {
  const f = FESTIVALS.find((x) => x.slug === slug);
  return f ? festivalView(f, locale) : null;
}

// ── Vedanta in Everyday Life ────────────────────────────────

export interface PracticeLinkView {
  href: string;
  label: string;
}

export interface PracticeImageView {
  src: string;
  width: number;
  height: number;
  alt: string;
  credit: string;
  sourceUrl: string;
  position: string;
}

export interface PracticeView {
  slug: string;
  name: string;
  /** Already in the reader's script; null for a wordless sitting. */
  sanskrit: string | null;
  kind: PracticeKind;
  durations: number[];
  lede: string;
  howTo: string[];
  origin: string;
  text: PracticeLinkView | null;
  track: PracticeTrack | null;
  links: PracticeLinkView[];
  image: PracticeImageView | null;
}

function practiceImageView(img: PracticeImage | undefined, locale: Locale): PracticeImageView | null {
  if (!img) return null;
  return {
    src: img.src,
    width: img.width,
    height: img.height,
    alt: img.alt[locale],
    credit: img.credit,
    sourceUrl: img.sourceUrl,
    position: img.position ?? "50% 50%",
  };
}

function practiceView(p: (typeof PRACTICES)[number], locale: Locale): PracticeView {
  return {
    slug: p.slug,
    name: p.name[locale],
    sanskrit: p.sanskrit ? scriptFor(p.sanskrit, locale) : null,
    kind: p.kind,
    durations: p.durations,
    lede: p.lede[locale],
    howTo: p.howTo[locale],
    origin: p.origin[locale],
    text: p.text ? { href: p.text.href, label: p.text.label[locale] } : null,
    track: p.track ?? null,
    links: (p.links ?? []).map((l) => ({ href: l.href, label: l.label[locale] })),
    image: practiceImageView(practiceImage(p.slug), locale),
  };
}

export function getPractices(locale: Locale): PracticeView[] {
  return PRACTICES.map((p) => practiceView(p, locale));
}

export function getPractice(slug: string, locale: Locale): PracticeView | null {
  const p = PRACTICES.find((x) => x.slug === slug);
  return p ? practiceView(p, locale) : null;
}

// ── The rites ───────────────────────────────────────────────

export interface RitualLinkView {
  href: string;
  label: string;
}

export interface RitualImageView {
  src: string;
  width: number;
  height: number;
  alt: string;
  credit: string;
  /** Null for an owner-supplied picture, which links nowhere. */
  sourceUrl: string | null;
  position: string;
}

export interface RitualView {
  slug: string;
  name: string;
  /** Already in the reader's script. */
  sanskrit: string;
  group: RitualGroupId;
  /** The group's name, resolved, for the chip on a rite's own page. */
  groupName: string;
  order: number;
  when: string;
  lede: string;
  observed: string;
  significance: string;
  regional: string | null;
  words: RitualLinkView[];
  links: RitualLinkView[];
  /**
   * Which layer of the tradition lays this rite down, and a line about
   * it. The bridge into /shastras: a saṃskāra is in the Gṛhya Sūtras,
   * a vrata is Paurāṇika, temple pūjā is Āgamic, and a reader who sees
   * that has learned something a list of rites cannot teach.
   */
  prescribedBy: { branch: string; note: string; href: string } | null;
  /** Null far more often than not — see seed/ritual-images.ts. */
  image: RitualImageView | null;
}

export interface RitualGroupView {
  id: RitualGroupId;
  name: string;
  /** Already in the reader's script. */
  sanskrit: string;
  /** Also already in the reader's script — the plate prints it raw. */
  glyph: string;
  lede: string;
  rituals: RitualView[];
  image: RitualImageView | null;
}

export interface SamskaraView {
  id: string;
  name: string;
  /** Already in the reader's script. */
  sanskrit: string;
  marks: string;
  /** Present only where the rite has a page of its own. */
  slug: string | null;
  kept: Kept;
  /** 1-based, so the arc can print its own numbering. */
  step: number;
}

function ritualImageView(img: RitualImage | undefined, locale: Locale): RitualImageView | null {
  if (!img) return null;
  return {
    src: img.src,
    width: img.width,
    height: img.height,
    alt: img.alt[locale],
    credit: img.credit,
    sourceUrl: img.sourceUrl ?? null,
    position: img.position ?? "50% 50%",
  };
}

function groupNameFor(group: RitualGroupId, locale: Locale): string {
  const g = RITUAL_GROUPS.find((x) => x.id === group);
  return g ? g.name[locale] : group;
}

function ritualView(r: (typeof RITUALS)[number], locale: Locale): RitualView {
  return {
    slug: r.slug,
    name: r.name[locale],
    sanskrit: scriptFor(r.sanskrit, locale),
    group: r.group,
    groupName: groupNameFor(r.group, locale),
    order: r.order,
    when: r.when[locale],
    lede: r.lede[locale],
    observed: r.observed[locale],
    significance: r.significance[locale],
    regional: r.regional?.[locale] ?? null,
    words: (r.words ?? []).map((l) => ({ href: l.href, label: l.label[locale] })),
    links: (r.links ?? []).map((l) => ({ href: l.href, label: l.label[locale] })),
    prescribedBy: (() => {
      const p = prescriptionFor(r.slug);
      return p
        ? {
            branch: p.branch,
            note: p.note[locale],
            // A branch with a section of its own is linked to it;
            // the rest anchor into the map.
            href:
              SHASTRA_BRANCHES.find((b) => b.id === p.branch)?.href ?? `/shastras#${p.branch}`,
          }
        : null;
    })(),
    image: ritualImageView(ritualImage(r.slug), locale),
  };
}

/** The groups, each carrying its own rites in order. */
export function getRitualGroups(locale: Locale): RitualGroupView[] {
  return RITUAL_GROUPS.map((g) => ({
    id: g.id,
    name: g.name[locale],
    sanskrit: scriptFor(g.sanskrit, locale),
    // Converted here rather than at the call site, so no page can
    // print a Devanagari glyph onto a Kannada one. The e2e script
    // check caught exactly that.
    glyph: scriptFor(g.glyph, locale),
    lede: g.lede[locale],
    rituals: ritualsInGroup(g.id).map((r) => ritualView(r, locale)),
    image: ritualImageView(ritualGroupImage(g.id), locale),
  }));
}

/** Every rite in pager order, straight through the groups. */
export function getRituals(locale: Locale): RitualView[] {
  return ritualsInOrder().map((r) => ritualView(r, locale));
}

export function getRitual(slug: string, locale: Locale): RitualView | null {
  const r = RITUALS.find((x) => x.slug === slug);
  return r ? ritualView(r, locale) : null;
}

/**
 * The sixteen across a life, in order. Nine of them have no page and
 * are not meant to: the arc names them so the sequence is whole.
 */
export function getSamskaras(locale: Locale): SamskaraView[] {
  return SAMSKARAS.map((s, i) => ({
    id: s.id,
    name: s.name[locale],
    sanskrit: scriptFor(s.sanskrit, locale),
    marks: s.marks[locale],
    slug: s.slug ?? null,
    kept: s.kept,
    step: i + 1,
  }));
}

/**
 * The twelve lunar months in order from Chaitra, each saying how many
 * festivals fall in it.
 *
 * This is what the band on /rituals shows in place of photographs: the
 * shape of the year, drawn from the data the section already holds
 * rather than illustrated with somebody's snapshot of a crowd.
 */
export function getLunarYear(locale: Locale): {
  id: string;
  name: string;
  count: number;
}[] {
  const counted = new Map<string, number>();
  for (const f of FESTIVALS) {
    // A solar festival has no lunar month; it is still in the year, and
    // is counted under the month it actually falls in.
    const m = f.month ?? "pausha";
    counted.set(m, (counted.get(m) ?? 0) + 1);
  }

  return Object.entries(LUNAR_MONTHS).map(([id, names]) => ({
    id,
    name: names[locale] ?? names.en,
    count: counted.get(id) ?? 0,
  }));
}

// ── the three lenses on Rituals & Festivals ─────────────────
//
//  The section is entered through time rather than through its six
//  groups: the year, the day, a life, and the things that sit on no
//  calendar at all. Each lens is drawn, and each drawing is paired
//  with a numbered list — the drawing carries the shape, the list
//  carries the names and the links.

export interface MarkView {
  slug: string;
  name: string;
  /** Degrees clockwise from the top, for the year wheel. */
  angle?: number;
  /** Hours from midnight, for the day band. */
  hours?: number[];
  /** Years, for the life line. Negative before birth. */
  age?: number;
  href: string;
  /** Distinguishes a festival's dot from a rite's. */
  kind: "festival" | "rite";
}

export interface YearMonthView {
  id: string;
  name: string;
  /** 1-based; the lunar year begins at Chaitra. */
  index: number;
  festivals: { slug: string; name: string; when: string }[];
}

export interface YearLensView {
  months: YearMonthView[];
  /** The festivals as dots, already placed. */
  marks: MarkView[];
  /** Observances that come round many times, as a rhythm not a date. */
  recurring: { slug: string; name: string; timesAYear: number; lede: string }[];
  /** Observances that occupy a stretch of the year. */
  spans: { slug: string; name: string; from: number; to: number; lede: string }[];
}

const TWO_PI_DEG = 360;

/** The year, ready to draw: twelve months, the festivals placed on them. */
export function getYearLens(locale: Locale): YearLensView {
  const order = Object.keys(LUNAR_MONTHS);
  const at = (month: string) => Math.max(0, order.indexOf(month));

  const marks: MarkView[] = FESTIVALS.map((f) => {
    // A solar festival has no lunar month of its own; it is placed in
    // the month it falls in so the wheel is not missing a day people
    // actually keep.
    const m = f.month ?? "pausha";
    const within = monthFraction(f.paksha, f.tithi);
    return {
      slug: f.slug,
      name: f.name[locale],
      angle: ((at(m) + within) / 12) * TWO_PI_DEG,
      href: `/festivals/${f.slug}`,
      kind: "festival" as const,
    };
  }).sort((a, b) => (a.angle ?? 0) - (b.angle ?? 0));

  const months: YearMonthView[] = order.map((id, i) => ({
    id,
    name: LUNAR_MONTHS[id]?.[locale] ?? id,
    index: i + 1,
    festivals: FESTIVALS.filter((f) => (f.month ?? "pausha") === id)
      .sort((a, b) => monthFraction(a.paksha, a.tithi) - monthFraction(b.paksha, b.tithi))
      .map((f) => ({
        slug: f.slug,
        name: f.name[locale],
        when: [
          f.paksha ? PAKSHAS[f.paksha][locale] : null,
          f.tithi ? TITHIS[f.tithi][locale] : null,
        ]
          .filter(Boolean)
          .join(" · "),
      })),
  }));

  const onYear = ritualsOnLens("year");
  const recurring = onYear
    .filter((r) => (PLACEMENT[r.slug]?.timesAYear ?? 0) > 1)
    .map((r) => ({
      slug: r.slug,
      name: r.name[locale],
      timesAYear: PLACEMENT[r.slug]!.timesAYear!,
      lede: r.when[locale],
    }));

  const spans = onYear
    .filter((r) => PLACEMENT[r.slug]?.span)
    .map((r) => {
      const [a, b] = PLACEMENT[r.slug]!.span!;
      return {
        slug: r.slug,
        name: r.name[locale],
        from: (at(a) / 12) * TWO_PI_DEG,
        to: ((at(b) + 1) / 12) * TWO_PI_DEG,
        lede: r.when[locale],
      };
    });

  return { months, marks, recurring, spans };
}

/** The day, ready to draw: the rites done at fixed hours. */
export function getDayLens(locale: Locale): MarkView[] {
  return ritualsOnLens("day").map((r) => ({
    slug: r.slug,
    name: r.name[locale],
    hours: PLACEMENT[r.slug]?.hours ?? [],
    href: `/rituals/${r.slug}`,
    kind: "rite" as const,
  }));
}

/** A life, ready to draw: the sixteen placed at their traditional ages. */
export function getLifeLens(locale: Locale): (SamskaraView & { age: number })[] {
  return getSamskaras(locale).map((s) => ({ ...s, age: SAMSKARA_AGE[s.id] ?? 0 }));
}

/** Every rite on one lens, in full, for the list beside the drawing. */
export function getRitesOnLens(lens: Lens, locale: Locale): RitualView[] {
  return ritualsOnLens(lens).map((r) => ritualView(r, locale));
}

/** What belongs to no calendar, and is done when the occasion comes. */
export function getOccasionRites(locale: Locale): RitualView[] {
  return getRitesOnLens("occasion", locale);
}

/** The rites one branch of the map lays down, for the link back. */
export function getRitesFromBranch(
  branch: string,
  locale: Locale,
): { slug: string; name: string }[] {
  return ritualsFromBranch(branch).map((r) => ({ slug: r.slug, name: r.name[locale] }));
}

// ── The Purāṇas ─────────────────────────────────────────────

export interface PuranaLinkView {
  href: string;
  label: string;
}

export interface PuranaView {
  slug: string;
  name: string;
  /** Already in the reader's script. */
  sanskrit: string;
  order: number;
  deity: string;
  /** As the tradition gives it, never as a count. */
  verses: number;
  guna: PuranaGuna;
  lede: string;
  about: string;
  known: string;
  note: string | null;
  links: PuranaLinkView[];
}

function puranaView(p: (typeof PURANAS)[number], locale: Locale): PuranaView {
  return {
    slug: p.slug,
    name: p.name[locale],
    sanskrit: scriptFor(p.sanskrit, locale),
    order: p.order,
    deity: p.deity[locale],
    verses: p.verses,
    guna: p.guna,
    lede: p.lede[locale],
    about: p.about[locale],
    known: p.known[locale],
    note: p.note?.[locale] ?? null,
    links: (p.links ?? []).map((l) => ({ href: l.href, label: l.label[locale] })),
  };
}

/** All eighteen, in the order the lists give them. */
export function getPuranas(locale: Locale): PuranaView[] {
  return puranasInOrder().map((p) => puranaView(p, locale));
}

export function getPurana(slug: string, locale: Locale): PuranaView | null {
  const p = puranaBySlug(slug);
  return p ? puranaView(p, locale) : null;
}

/**
 * The three classes the Padma Purāṇa sorts them into. Sectarian, and
 * the page says so — it is a ranking made from inside the contest.
 */
export function getPuranasByGuna(
  locale: Locale,
): { guna: PuranaGuna; puranas: PuranaView[] }[] {
  const order: PuranaGuna[] = ["sattvika", "rajasa", "tamasa"];
  return order.map((guna) => ({
    guna,
    puranas: puranasByGuna(guna).map((p) => puranaView(p, locale)),
  }));
}

/** The traditional total, added up from the figures the tradition gives. */
export function getTraditionalVerseTotal(): number {
  return traditionalVerseTotal();
}

// ── The stories ─────────────────────────────────────────────

export interface StoryLinkView {
  href: string;
  label: string;
}

export interface StoryView {
  slug: string;
  name: string;
  /** Already in the reader's script. */
  sanskrit: string;
  order: number;
  told: string;
  purana: string;
  /** The Purāṇa's own name, resolved, for the chip. */
  puranaName: string;
  lede: string;
  story: string;
  /** Always framed as a reading, never as what the story says. */
  reading: string;
  differs: string | null;
  links: StoryLinkView[];
}

function storyView(s: (typeof STORIES)[number], locale: Locale): StoryView {
  const p = PURANAS.find((x) => x.slug === s.purana);
  return {
    slug: s.slug,
    name: s.name[locale],
    sanskrit: scriptFor(s.sanskrit, locale),
    order: s.order,
    told: s.told[locale],
    purana: s.purana,
    puranaName: p ? p.name[locale] : s.purana,
    lede: s.lede[locale],
    story: s.story[locale],
    reading: s.reading[locale],
    differs: s.differs?.[locale] ?? null,
    links: (s.links ?? []).map((l) => ({ href: l.href, label: l.label[locale] })),
  };
}

export function getStories(locale: Locale): StoryView[] {
  return storiesInOrder().map((s) => storyView(s, locale));
}

export function getStory(slug: string, locale: Locale): StoryView | null {
  const s = storyBySlug(slug);
  return s ? storyView(s, locale) : null;
}

/** The stories one Purāṇa carries, for the link from its own page. */
export function getStoriesFromPurana(purana: string, locale: Locale): StoryView[] {
  return storiesFromPurana(purana).map((s) => storyView(s, locale));
}

// ── Time and the cosmos ─────────────────────────────────────

export interface TimeUnitView {
  id: string;
  name: string;
  /** Already in the reader's script. */
  sanskrit: string;
  seconds: number;
  defined: string;
}

export interface YugaView {
  id: string;
  name: string;
  sanskrit: string;
  years: number;
  parts: number;
  character: string;
}

export interface LokaView {
  id: string;
  name: string;
  sanskrit: string;
  level: number;
  gloss: string;
}

export interface DvipaView {
  id: string;
  name: string;
  sanskrit: string;
  ring: number;
  sea: string;
  note: string | null;
}

export interface PralayaView {
  id: string;
  name: string;
  sanskrit: string;
  when: string;
  what: string;
}

export function getTimeUnits(locale: Locale): TimeUnitView[] {
  return TIME_UNITS.map((u) => ({
    id: u.id,
    name: u.name[locale],
    sanskrit: scriptFor(u.sanskrit, locale),
    seconds: u.seconds,
    defined: u.defined[locale],
  }));
}

export function getYugas(locale: Locale): YugaView[] {
  return YUGAS.map((y) => ({
    id: y.id,
    name: y.name[locale],
    sanskrit: scriptFor(y.sanskrit, locale),
    years: y.years,
    parts: y.parts,
    character: y.character[locale],
  }));
}

export function getLokas(locale: Locale): LokaView[] {
  return LOKAS.map((l) => ({
    id: l.id,
    name: l.name[locale],
    sanskrit: scriptFor(l.sanskrit, locale),
    level: l.level,
    gloss: l.gloss[locale],
  }));
}

export function getDvipas(locale: Locale): DvipaView[] {
  return DVIPAS.map((d) => ({
    id: d.id,
    name: d.name[locale],
    sanskrit: scriptFor(d.sanskrit, locale),
    ring: d.ring,
    sea: d.sea[locale],
    note: d.note?.[locale] ?? null,
  }));
}

export function getPralayas(locale: Locale): PralayaView[] {
  return PRALAYAS.map((p) => ({
    id: p.id,
    name: p.name[locale],
    sanskrit: scriptFor(p.sanskrit, locale),
    when: p.when[locale],
    what: p.what[locale],
  }));
}

/** Where the Purāṇas place the present moment. */
export function getNow(locale: Locale) {
  return {
    brahmaYear: NOW.brahmaYear,
    manvantara: NOW.manvantara,
    manu: NOW.manu[locale],
    mahayuga: NOW.mahayuga,
    yuga: getYugas(locale).find((y) => y.id === NOW.yuga) ?? null,
    kaliStartBCE: NOW.kaliStartBCE,
  };
}

export interface CosmosTopicView {
  slug: string;
  name: string;
  sanskrit: string;
  order: number;
  lede: string;
  sections: CosmosSection[];
}

function topicView(t: (typeof COSMOS_TOPICS)[number], locale: Locale): CosmosTopicView {
  return {
    slug: t.slug,
    name: t.name[locale],
    sanskrit: scriptFor(t.sanskrit, locale),
    order: t.order,
    lede: t.lede[locale],
    sections: t.content[locale],
  };
}

export function getCosmosTopics(locale: Locale): CosmosTopicView[] {
  return topicsInOrder().map((t) => topicView(t, locale));
}

export function getCosmosTopic(slug: string, locale: Locale): CosmosTopicView | null {
  const t = topicBySlug(slug);
  return t ? topicView(t, locale) : null;
}
