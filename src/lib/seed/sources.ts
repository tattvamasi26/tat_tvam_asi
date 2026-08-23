import type { SourceRow } from "./types";

/**
 * The citation registry. Every translation row points at one of
 * these — `translations.source_id` is NOT NULL in the schema, so
 * an uncited translation cannot physically be stored.
 *
 * The `site-editorial` row exists so today's inherited paraphrases
 * can be represented honestly rather than silently promoted to
 * scholarship. Replacing those with a real translator's work is
 * Phase 1 of docs/ROADMAP.md.
 */
export const SOURCES: SourceRow[] = [
  {
    id: "site-editorial",
    work_title: "Site editorial paraphrase — uncited legacy content, pending scholarly citation",
    translator_author: "Tat Tvam Asi (site editorial)",
    publisher: null,
    publication_year: null,
    copyright_status: "legacy_uncited_flagged",
    license_url: null,
    source_url: null,
    notes:
      "Inherited from the pre-database site. Renders with a visible 'not yet cited' notice. Must be replaced verse-by-verse with a properly attributed public-domain or licensed translation.",
  },
  {
    id: "hume-1921",
    work_title: "The Thirteen Principal Upanishads",
    translator_author: "Robert Ernest Hume",
    publisher: "Oxford University Press",
    publication_year: 1921,
    copyright_status: "public_domain_pre_1928",
    license_url: null,
    source_url: "https://archive.org/details/thirteenprincipa028442mbp",
    notes: "One coherent public-domain source covering the whole Principal Upanishad pillar (Phase 4).",
  },
  {
    id: "telang-1882",
    work_title: "The Bhagavadgîtâ, with the Sanatsugâtîya and the Anugîtâ (Sacred Books of the East, Vol. 8)",
    translator_author: "Kâshinâth Trimbak Telang",
    publisher: "Clarendon Press",
    publication_year: 1882,
    copyright_status: "public_domain_pre_1928",
    license_url: null,
    source_url: "https://archive.org/details/sacredbooksofeas08ml",
    notes: "Primary English source for the Bhagavad Gita pillar (Phase 1–2).",
  },
];
