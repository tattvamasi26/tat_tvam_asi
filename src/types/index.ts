// ─────────────────────────────────────────────
//  Core domain types for Tat Tvam Asi platform
// ─────────────────────────────────────────────

export type Category =
  | "advaita"
  | "shruti"
  | "smriti"
  | "temples"
  | "dharma"
  | "teachers";

// ── Verse / Shloka ───────────────────────────
export interface Verse {
  id: string;
  sanskrit: string;           // Devanagari script
  transliteration: string;    // IAST romanisation
  translation_en: string;     // English meaning
  translation_kn?: string;    // Kannada (optional)
  commentary?: string;        // Shankaracharya / other bhashya
  source: string;             // e.g. "Chandogya Upanishad"
  chapter?: string;           // e.g. "6.8.7"
  tags: string[];
  category: Category;
  is_mahavakya: boolean;      // One of the four great sayings
  created_at: string;
  updated_at: string;
}

// ── Upanishad ────────────────────────────────
export interface Upanishad {
  id: string;
  name_sanskrit: string;      // e.g. "माण्डूक्य उपनिषद्"
  name_iast: string;          // e.g. "Māṇḍūkya Upaniṣad"
  name_en: string;            // e.g. "Mandukya Upanishad"
  veda: "rigveda" | "samaveda" | "yajurveda" | "atharvaveda";
  verse_count: number;
  summary: string;
  key_teaching: string;
  slug: string;
  created_at: string;
}

// ── Teacher / Acharya ────────────────────────
export interface Teacher {
  id: string;
  name: string;               // e.g. "Adi Shankaracharya"
  name_sanskrit?: string;
  birth_year?: number;        // CE or BCE
  death_year?: number;
  era: string;                // e.g. "8th century CE"
  tradition: string;          // e.g. "Advaita Vedanta"
  key_works: string[];        // e.g. ["Vivekachudamani", "Brahmasutra Bhashya"]
  biography: string;
  quote?: string;
  image_url?: string;
  slug: string;
  created_at: string;
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

// ── Temple ───────────────────────────────────
export interface Temple {
  id: string;
  name: string;
  name_local?: string;        // Name in local script
  location: string;           // City / village
  state: string;
  dynasty: string;            // e.g. "Chola", "Pallava"
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
