// ─────────────────────────────────────────────
//  Core domain types for Tat Tvam Asi platform
//  Mirrors supabase/schema.sql — see docs/ROADMAP.md for the
//  design rationale behind the texts/verses/translations model.
// ─────────────────────────────────────────────

export type Category =
  | "advaita"
  | "shruti"
  | "smriti"
  | "temples"
  | "dharma"
  | "teachers";

export type CitationStatus = "cited" | "legacy_uncited" | "pending_review";

export type CopyrightStatus =
  | "public_domain_pre_1928"
  | "public_domain_other"
  | "cc_by"
  | "cc_by_sa"
  | "licensed"
  | "original_by_site_owner"
  | "legacy_uncited_flagged"
  | "pending_review";

export type WorkType =
  | "veda"
  | "samhita"
  | "brahmana"
  | "aranyaka"
  | "upanishad"
  | "smriti"
  | "sutra"
  | "stotra"
  | "itihasa";

export type Veda = "rigveda" | "samaveda" | "yajurveda" | "atharvaveda";

// ── Source / Citation ────────────────────────
export interface Source {
  id: string;
  work_title: string;
  translator_author?: string;
  publisher?: string;
  publication_year?: number;
  edition?: string;
  copyright_status: CopyrightStatus;
  license_url?: string;
  source_url?: string;
  notes?: string;
  created_at: string;
}

// ── Sampradaya (tradition / school) ──────────
export interface Sampradaya {
  id: string;
  slug: string;
  name: string;
  name_sanskrit?: string;
  description?: string;
  founder_teacher_id?: string;
  created_at: string;
}

// ── Text — a Veda, Samhita, Upanishad, the Gita, ─
//    the Brahma Sutras, a Stotra, etc.
export interface Text {
  id: string;
  slug: string;
  title_sanskrit: string;
  title_iast: string;
  title_en: string;
  work_type: WorkType;
  parent_id?: string;
  veda?: Veda;
  canonical_order?: number;
  verse_count?: number;
  summary?: string;
  key_teaching?: string;
  citation_status: CitationStatus;
  // Stotra-only metadata — nullable for other work_types
  author_teacher_id?: string;
  deity?: string;
  occasion?: string[];
  meter?: string;
  audio_url?: string; // reserved for a future audio phase; unused for now
  created_at: string;
  updated_at: string;
}

// ── Verse / Shloka / Mantra / Sutra ──────────
export interface Verse {
  id: string;
  text_id: string;
  sanskrit: string;           // Devanagari script
  transliteration_iast: string;
  site_gloss?: string;        // the site's own editorial voice — NOT a cited translation
  division_1?: string;        // e.g. chapter / khanda
  division_2?: string;        // e.g. verse / mantra number within division_1
  division_3?: string;        // rarely needed (e.g. Brahma Sutra pada.adhikarana.sutra)
  locator?: string;           // display string, e.g. "6.8.7" or "BG 2.47"
  tags: string[];
  category: Category;
  is_mahavakya: boolean;
  citation_status: CitationStatus;
  created_at: string;
  updated_at: string;
}

// ── Translation — always cites a Source ──────
export interface Translation {
  id: string;
  verse_id: string;
  language: string;           // e.g. "en", "kn"
  translation_text: string;
  source_id: string;          // NOT NULL — every translation must cite a source
  is_primary: boolean;
  created_at: string;
  updated_at: string;
}

// ── Commentary (bhashya) as a work ───────────
export interface Commentary {
  id: string;
  teacher_id: string;
  base_text_id: string;
  title: string;
  sampradaya_id?: string;
  language: string;
  summary?: string;
  source_id?: string;
  created_at: string;
}

// ── Commentary entry — per-verse bhashya content ─
export interface CommentaryEntry {
  id: string;
  commentary_id: string;
  verse_id: string;
  sanskrit_text?: string;
  content: string;
  source_id: string;          // NOT NULL — same citation rule as translations
  sort_order: number;
  created_at: string;
}

// ── Teacher / Acharya ────────────────────────
export interface Teacher {
  id: string;
  name: string;
  name_sanskrit?: string;
  birth_year?: number;        // CE or BCE
  death_year?: number;
  era: string;                // e.g. "8th century CE"
  tradition: string;          // display fallback — see sampradaya_id
  sampradaya_id?: string;
  key_works: string[];        // e.g. ["Vivekachudamani", "Brahmasutra Bhashya"]
  biography: string;
  quote?: string;
  image_url?: string;
  slug: string;
  created_at: string;
}

// ── Dynasty ───────────────────────────────────
export interface Dynasty {
  id: string;
  slug: string;
  name: string;
  name_local?: string;
  start_year_ce?: number;     // negative = BCE
  end_year_ce?: number;
  region?: string;
  description?: string;
}

// ── Temple ───────────────────────────────────
export interface Temple {
  id: string;
  name: string;
  name_local?: string;        // Name in local script
  location: string;           // City / village
  state: string;
  dynasty: string;            // display fallback — see dynasty_id
  dynasty_id?: string;
  century_built?: string;     // e.g. "11th century CE"
  architecture_style: string; // e.g. "Dravidian", "Nagara"
  presiding_deity: string;
  description: string;
  significance: string;       // Philosophical / spiritual significance
  images: TempleImage[];
  slug: string;
  created_at: string;
}

export interface TempleImage {
  id: string;
  url: string;
  cloudinary_id?: string;
  alt_text: string;
  caption?: string;
  credit?: string;
  is_primary: boolean;
}

export type TempleEventType =
  | "founding"
  | "renovation"
  | "desecration"
  | "rediscovery"
  | "unesco_designation"
  | "other";

export interface TempleEvent {
  id: string;
  temple_id: string;
  year_ce_approx?: number;
  event_type: TempleEventType;
  description: string;
  source_id?: string;
  created_at: string;
}

// ── Article ──────────────────────────────────
export interface Article {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  body: string;               // Rich text / markdown
  category: Category;
  tags: string[];
  author?: string;
  published_at: string;
  updated_at: string;
  reading_time_minutes: number;
  is_featured: boolean;
}

// ── Matha / Monastery ────────────────────────
export interface Matha {
  id: string;
  name: string;
  location: string;
  state: string;
  founded_by: string;         // e.g. "Adi Shankaracharya"
  direction: "north" | "south" | "east" | "west"; // Amnaya direction
  presiding_deity: string;
  mahavakya: string;          // The great saying associated
  veda: string;
  current_shankaracharya?: string;
  description: string;
  slug: string;
}

// ── Concept / Tattva ─────────────────────────
export interface Concept {
  id: string;
  term_sanskrit: string;      // e.g. "माया"
  term_iast: string;          // e.g. "Māyā"
  term_en: string;            // e.g. "Maya"
  definition: string;
  detailed_explanation: string;
  related_concepts: string[]; // IDs or slugs of related concepts
  related_verses: string[];   // Verse IDs
  category: Category;
  slug: string;
  created_at: string;
}

// ── Practice / tradition (festival, ritual, vrata, samskara) ─
export type PracticeType =
  | "festival"
  | "ritual"
  | "vrata"
  | "samskara"
  | "daily_practice";

export interface Practice {
  id: string;
  slug: string;
  name_sanskrit?: string;
  name_en: string;
  practice_type: PracticeType;
  description?: string;
  significance?: string;
  associated_deity?: string;
  timing_rule?: string;
  region_scope?: string;
  created_at: string;
}

// ── Tag ──────────────────────────────────────
export interface Tag {
  id: string;
  name: string;
  slug: string;
  description?: string;
}

// ── API Response wrappers ────────────────────
export interface PaginatedResponse<T> {
  data: T[];
  count: number;
  page: number;
  pageSize: number;
  totalPages: number;
}

export interface ApiError {
  message: string;
  code?: string;
}
