// ─────────────────────────────────────────────────────────
//  Row shapes for the local seed data.
//
//  Every interface here mirrors a table in supabase/schema.sql
//  column-for-column, so `scripts/seed-supabase.mjs` can push
//  these arrays with a plain `insert()` and no transformation.
//
//  Two rules keep local and remote in lockstep:
//    1. `id` is a stable human-readable string here. Postgres
//       uses uuid defaults, so the seed script keeps a slug→uuid
//       map and rewrites foreign keys as it inserts.
//    2. Language-neutral facts (dates, coordinates, slugs,
//       Sanskrit) live on the base row. Anything a human would
//       translate lives in a `*_translations` row keyed by
//       (parent_id, language).
// ─────────────────────────────────────────────────────────
import type { Locale } from "@/i18n/config";

export type CopyrightStatus =
  | "public_domain_pre_1928"
  | "public_domain_other"
  | "cc_by"
  | "cc_by_sa"
  | "licensed"
  | "original_by_site_owner"
  | "legacy_uncited_flagged"
  | "pending_review";

export type Category = "advaita" | "shruti" | "smriti" | "temples" | "dharma" | "teachers";

export type CitationStatus = "cited" | "legacy_uncited" | "pending_review";

export type WorkType =
  | "veda"
  | "samhita"
  | "brahmana"
  | "aranyaka"
  | "upanishad"
  | "gita"
  | "gita_chapter"
  | "brahma_sutra"
  | "stotra"
  | "bhajan";

export type Direction = "north" | "south" | "east" | "west";

/** → sources */
export interface SourceRow {
  id: string;
  work_title: string;
  translator_author: string | null;
  publisher: string | null;
  publication_year: number | null;
  copyright_status: CopyrightStatus;
  license_url: string | null;
  source_url: string | null;
  notes: string | null;
}

/** → texts */
export interface TextRow {
  id: string;
  slug: string;
  work_type: WorkType;
  parent_id: string | null;
  name_sanskrit: string;
  name_iast: string;
  veda: string | null;
  verse_count: number | null;
}

/** → text_translations */
export interface TextTranslationRow {
  text_id: string;
  language: Locale;
  name: string;
  summary: string;
  key_teaching: string;
}

/** → verses */
export interface VerseRow {
  id: string;
  text_id: string;
  sanskrit: string;
  transliteration_iast: string;
  locator: string;
  division_1: string | null;
  division_2: string | null;
  category: Category;
  is_mahavakya: boolean;
  citation_status: CitationStatus;
  tags: string[];
}

/** → translations (the citation-enforcing table: source_id is NOT NULL) */
export interface TranslationRow {
  verse_id: string;
  language: Locale;
  translation_text: string;
  source_id: string;
  is_primary: boolean;
}

/** → verse_commentaries (site editorial note, per language) */
export interface VerseNoteRow {
  verse_id: string;
  language: Locale;
  note: string;
}

/** → teachers */
export interface TeacherRow {
  id: string;
  slug: string;
  name_sanskrit: string;
  birth_year: number | null;
  death_year: number | null;
  image_url: string | null;
  image_credit: string | null;
}

/** → teacher_translations */
export interface TeacherTranslationRow {
  teacher_id: string;
  language: Locale;
  name: string;
  era: string;
  tradition: string;
  biography: string;
  quote: string;
  key_works: string[];
}

/** → temples */
export interface TempleRow {
  id: string;
  slug: string;
  name_local: string;
  century_built: string;
  image_url: string | null;
  image_credit: string | null;
  latitude: number | null;
  longitude: number | null;
}

/** → temple_translations */
export interface TempleTranslationRow {
  temple_id: string;
  language: Locale;
  name: string;
  location: string;
  state: string;
  dynasty: string;
  architecture_style: string;
  presiding_deity: string;
  description: string;
  significance: string;
}

/** → concepts */
export interface ConceptRow {
  id: string;
  slug: string;
  term_sanskrit: string;
  term_iast: string;
  category: Category;
  related_concepts: string[];
}

/** → concept_translations */
export interface ConceptTranslationRow {
  concept_id: string;
  language: Locale;
  term: string;
  definition: string;
  detailed_explanation: string;
}

/** → mathas */
export interface MathaRow {
  id: string;
  slug: string;
  direction: Direction;
  veda: string;
  mahavakya: string;
  image_url: string | null;
  image_credit: string | null;
}

/** → matha_translations */
export interface MathaTranslationRow {
  matha_id: string;
  language: Locale;
  name: string;
  location: string;
  state: string;
  presiding_deity: string;
  founded_by: string;
  description: string;
}
