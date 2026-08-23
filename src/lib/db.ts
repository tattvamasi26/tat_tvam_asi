// ─────────────────────────────────────────────────────────
//  Typed read-query functions backing every public page.
//  Replaces src/lib/data.ts (kept only as a reference for the
//  Phase 0 seed migrated into supabase/schema.sql).
//
//  These return small "card/detail" view shapes tailored to
//  what each page actually renders, flattened from the
//  normalized texts/verses/translations schema (see
//  docs/ROADMAP.md) — e.g. a verse's `translation_en` here is
//  its primary cited translation, not a column on `verses`.
// ─────────────────────────────────────────────────────────
import { getSupabasePublic } from "./supabase";

// ── Verses ────────────────────────────────────────────────
export interface VerseDetail {
  id: string;
  sanskrit: string;
  transliteration: string;
  translation_en: string;
  source: string;
  chapter?: string;
  category: string;
  is_mahavakya: boolean;
  tags: string[];
  commentary?: string;
}

const VERSE_SELECT =
  "id, sanskrit, transliteration_iast, site_gloss, locator, category, is_mahavakya, tags, text:texts(title_en), translations(translation_text, is_primary)";

function flattenVerse(row: any): VerseDetail {
  const translations = row.translations ?? [];
  const primary = translations.find((t: any) => t.is_primary) ?? translations[0];
  const text = Array.isArray(row.text) ? row.text[0] : row.text;
  return {
    id: row.id,
    sanskrit: row.sanskrit,
    transliteration: row.transliteration_iast,
    translation_en: primary?.translation_text ?? "",
    source: text?.title_en ?? "",
    chapter: row.locator ?? undefined,
    category: row.category,
    is_mahavakya: row.is_mahavakya,
    tags: row.tags ?? [],
    commentary: row.site_gloss ?? undefined,
  };
}

export async function getAllVerses(): Promise<VerseDetail[]> {
  const { data, error } = await getSupabasePublic().from("verses").select(VERSE_SELECT).order("created_at");
  if (error) throw error;
  return (data ?? []).map(flattenVerse);
}

export async function getVerseIds(): Promise<string[]> {
  const { data, error } = await getSupabasePublic().from("verses").select("id");
  if (error) throw error;
  return (data ?? []).map((v) => v.id);
}

export async function getVerseById(id: string): Promise<VerseDetail | null> {
  const { data, error } = await getSupabasePublic().from("verses").select(VERSE_SELECT).eq("id", id).maybeSingle();
  if (error) throw error;
  return data ? flattenVerse(data) : null;
}

// ── Upanishads (texts where work_type = 'upanishad') ──────
export interface UpanishadCard {
  id: string;
  slug: string;
  name_sanskrit: string;
  name_iast: string;
  name_en: string;
  veda: string;
  verse_count: number;
  summary: string;
  key_teaching: string;
}

export async function getAllUpanishads(): Promise<UpanishadCard[]> {
  const { data, error } = await getSupabasePublic()
    .from("texts")
    .select("id, slug, title_sanskrit, title_iast, title_en, veda, verse_count, summary, key_teaching, canonical_order")
    .eq("work_type", "upanishad")
    .order("canonical_order", { ascending: true, nullsFirst: false });
  if (error) throw error;
  return (data ?? []).map((t) => ({
    id: t.id,
    slug: t.slug,
    name_sanskrit: t.title_sanskrit,
    name_iast: t.title_iast,
    name_en: t.title_en,
    veda: t.veda ?? "",
    verse_count: t.verse_count ?? 0,
    summary: t.summary ?? "",
    key_teaching: t.key_teaching ?? "",
  }));
}

// ── Teachers ────────────────────────────────────────────
export interface TeacherCard {
  id: string;
  slug: string;
  name: string;
  name_sanskrit?: string;
  era: string;
  tradition: string;
  birth_year?: number;
  death_year?: number;
  key_works: string[];
  biography: string;
  quote?: string;
}

const TEACHER_SELECT = "id, slug, name, name_sanskrit, era, tradition, birth_year, death_year, key_works, biography, quote";

export async function getAllTeachers(): Promise<TeacherCard[]> {
  const { data, error } = await getSupabasePublic().from("teachers").select(TEACHER_SELECT).order("birth_year");
  if (error) throw error;
  return data ?? [];
}

export async function getTeacherBySlug(slug: string): Promise<TeacherCard | null> {
  const { data, error } = await getSupabasePublic().from("teachers").select(TEACHER_SELECT).eq("slug", slug).maybeSingle();
  if (error) throw error;
  return data;
}

// ── Temples ─────────────────────────────────────────────
export interface TempleCard {
  id: string;
  slug: string;
  name: string;
  name_local?: string;
  location: string;
  state: string;
  dynasty: string;
  century_built?: string;
  architecture_style: string;
  presiding_deity: string;
  description: string;
  significance: string;
}

const TEMPLE_SELECT =
  "id, slug, name, name_local, location, state, dynasty, century_built, architecture_style, presiding_deity, description, significance";

export async function getAllTemples(): Promise<TempleCard[]> {
  const { data, error } = await getSupabasePublic().from("temples").select(TEMPLE_SELECT).order("name");
  if (error) throw error;
  return data ?? [];
}

export async function getTempleBySlug(slug: string): Promise<TempleCard | null> {
  const { data, error } = await getSupabasePublic().from("temples").select(TEMPLE_SELECT).eq("slug", slug).maybeSingle();
  if (error) throw error;
  return data;
}

// ── Concepts ────────────────────────────────────────────
export interface ConceptCard {
  id: string;
  slug: string;
  term_sanskrit: string;
  term_iast: string;
  term_en: string;
  definition: string;
  detailed_explanation?: string;
  related_concepts: string[];
}

const CONCEPT_SELECT = "id, slug, term_sanskrit, term_iast, term_en, definition, detailed_explanation, related_concepts";

export async function getAllConcepts(): Promise<ConceptCard[]> {
  const { data, error } = await getSupabasePublic().from("concepts").select(CONCEPT_SELECT).order("term_en");
  if (error) throw error;
  return data ?? [];
}

export async function getConceptBySlug(slug: string): Promise<ConceptCard | null> {
  const { data, error } = await getSupabasePublic().from("concepts").select(CONCEPT_SELECT).eq("slug", slug).maybeSingle();
  if (error) throw error;
  return data;
}

// ── Mathas ──────────────────────────────────────────────
export interface MathaCard {
  id: string;
  slug: string;
  name: string;
  location: string;
  state: string;
  founded_by: string;
  direction: string;
  presiding_deity: string;
  mahavakya: string;
  veda: string;
  description: string;
}

const MATHA_SELECT = "id, slug, name, location, state, founded_by, direction, presiding_deity, mahavakya, veda, description";

const DIRECTION_ORDER: Record<string, number> = { south: 0, north: 1, east: 2, west: 3 };

export async function getAllMathas(): Promise<MathaCard[]> {
  const { data, error } = await getSupabasePublic().from("mathas").select(MATHA_SELECT);
  if (error) throw error;
  return (data ?? []).sort((a, b) => (DIRECTION_ORDER[a.direction] ?? 9) - (DIRECTION_ORDER[b.direction] ?? 9));
}

// ── Sources (citation registry) ──────────────────────────
export interface SourceRow {
  id: string;
  work_title: string;
  translator_author?: string;
  publisher?: string;
  publication_year?: number;
  edition?: string;
  copyright_status: string;
  license_url?: string;
  source_url?: string;
  notes?: string;
}

const SOURCE_SELECT =
  "id, work_title, translator_author, publisher, publication_year, edition, copyright_status, license_url, source_url, notes";

export async function getAllSources(): Promise<SourceRow[]> {
  const { data, error } = await getSupabasePublic().from("sources").select(SOURCE_SELECT).order("created_at", { ascending: false });
  if (error) throw error;
  return data ?? [];
}

// ── Search ──────────────────────────────────────────────
export interface SearchResults {
  verses: { id: string; sanskrit: string; translation_en: string }[];
  temples: { id: string; slug: string; name: string; location: string; state: string }[];
  concepts: { id: string; slug: string; term_sanskrit: string; term_en: string }[];
  teachers: { id: string; slug: string; name: string; era: string }[];
}

export async function searchAll(query: string, limit = 5): Promise<SearchResults> {
  const q = query.trim();
  if (q.length < 2) return { verses: [], temples: [], concepts: [], teachers: [] };
  const like = `%${q}%`;

  const client = getSupabasePublic();
  const [versesRes, templesRes, conceptsRes, teachersRes] = await Promise.all([
    client
      .from("translations")
      .select("translation_text, verse:verses(id, sanskrit)")
      .ilike("translation_text", like)
      .limit(limit),
    client
      .from("temples")
      .select("id, slug, name, location, state, dynasty")
      .or(`name.ilike.${like},location.ilike.${like},dynasty.ilike.${like}`)
      .limit(limit),
    client
      .from("concepts")
      .select("id, slug, term_sanskrit, term_iast, term_en, definition")
      .or(`term_en.ilike.${like},definition.ilike.${like},term_iast.ilike.${like}`)
      .limit(limit),
    client
      .from("teachers")
      .select("id, slug, name, era, biography")
      .or(`name.ilike.${like},biography.ilike.${like}`)
      .limit(limit),
  ]);

  const verses = (versesRes.data ?? [])
    .map((r: any) => ({ verse: Array.isArray(r.verse) ? r.verse[0] : r.verse, translation_text: r.translation_text }))
    .filter((r) => r.verse)
    .map((r) => ({ id: r.verse.id, sanskrit: r.verse.sanskrit, translation_en: r.translation_text }));

  return {
    verses,
    temples: (templesRes.data ?? []).map((t: any) => ({ id: t.id, slug: t.slug, name: t.name, location: t.location, state: t.state })),
    concepts: (conceptsRes.data ?? []).map((c: any) => ({ id: c.id, slug: c.slug, term_sanskrit: c.term_sanskrit, term_en: c.term_en })),
    teachers: (teachersRes.data ?? []).map((t: any) => ({ id: t.id, slug: t.slug, name: t.name, era: t.era })),
  };
}
