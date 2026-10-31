import type { Locale } from "@/i18n/config";
import type { DevataImage } from "./devatas";
import type { TempleBlock, TempleSection } from "./temple-pages";

// ─────────────────────────────────────────────────────────
//  The registry of acharyas written in depth.
//
//  An acharya becomes a monograph by writing one module under
//  seed/acharya-pages/ and calling registerAcharyaPage(). The short
//  card in seed/teachers.ts stays as it is — the monograph is what a
//  reader gets when there is enough to say.
//
//  The prose blocks are the temples' (para, sub, list, rows), imported
//  rather than copied, so a change to how a passage renders reaches
//  every monograph on the site at once.
//
//  On top of those sit blocks that only a life needs, and that exist
//  because some things are understood by being SEEN rather than read:
//
//    · timeline — dated claims on one band, so a disagreement of
//        thirteen centuries looks like thirteen centuries
//    · journey  — the stops of a life, in order, as a route
//    · compass  — the four mathas at the four directions, around him
//    · layers   — one thing inside another (the orders of reality)
//    · tiers    — a body of work sorted into what is his, what is
//        doubted, and what merely carries his name
//    · lineage  — who taught whom, as generations
//    · verse    — a line of the text itself, in Devanagari, IAST and
//        translation
//    · terms    — the Sanskrit words a section turns on, defined once
//    · figure   — a picture set inside the section it belongs to,
//        rather than in a gallery at the foot
//
//  The prose is written per language, whole, the way the Kollur guide
//  was. A unit test holds the languages to the same sections and the
//  same blocks, so none can drift.
// ─────────────────────────────────────────────────────────

export type MonographSection = TempleSection;

/** A point on a timeline band. `year` is negative for BCE. */
export type TimelineMark = {
  year: number;
  /** What to print as the date — "509 BCE", "c. 700–750 CE". */
  when: string;
  label: string;
  text?: string;
  /** Drawn as the reading this site follows. */
  emphasis?: boolean;
};

export type AcharyaBlock =
  | TempleBlock
  | { kind: "timeline"; title?: string; note?: string; marks: TimelineMark[]; ticks?: { year: number; label: string }[] }
  | { kind: "journey"; title?: string; stops: { place: string; text: string }[] }
  | {
      kind: "compass";
      title?: string;
      centre: string;
      points: {
        dir: "north" | "south" | "east" | "west";
        dirLabel: string;
        name: string;
        veda: string;
        /** Devanagari. Rendered in the reader's script, never stored converted. */
        vakya: string;
        /** What the mahavakya says, and who held the seat. */
        gloss: string;
      }[];
    }
  | { kind: "layers"; title?: string; layers: { name: string; text: string }[] }
  | { kind: "tiers"; title?: string; tiers: { name: string; count?: string; items: string[]; tone: "sure" | "doubted" | "attributed" }[] }
  | { kind: "lineage"; title?: string; generations: { label?: string; people: { name: string; text?: string }[] }[] }
  | { kind: "verse"; sanskrit: string; iast?: string; translation: string; attribution: string }
  | { kind: "terms"; title?: string; terms: { term: string; sanskrit?: string; text: string }[] }
  | { kind: "figure"; src: string; caption: string };

export interface AcharyaSection {
  /** Stable across languages; also the heading's anchor. */
  id: string;
  eyebrow: string;
  title: string;
  /** One line under the heading, saying what the section is for. */
  standfirst?: string;
  blocks: AcharyaBlock[];
}

/** A picture, with an optional caption under it. */
export interface AcharyaPicture extends DevataImage {
  caption?: Record<Locale, string>;
}

export interface AcharyaContent {
  /** One line under the name: what this person did. */
  tagline: string;
  /** When he lived, in the words the page should use — never a bare year. */
  when: string;
  /** The facts bar: label and value. */
  facts: [string, string][];
  /** A line to open with, set apart. */
  quote?: string;
  sections: AcharyaSection[];
}

export interface AcharyaPage {
  /** Must match a slug in seed/teachers.ts. */
  slug: string;
  /** His name in Devanagari; rendered in the reader's script. */
  nameSanskrit: string;
  hero?: AcharyaPicture;
  /** Pictures a section can call for by src, plus the closing gallery. */
  gallery?: AcharyaPicture[];
  /** Where the facts came from. Every monograph prints these. */
  sources: { title: string; url: string; note?: string }[];
  content: Record<Locale, AcharyaContent>;
}

const REGISTRY = new Map<string, AcharyaPage>();

export function registerAcharyaPage(page: AcharyaPage) {
  REGISTRY.set(page.slug, page);
}

export function getAcharyaPage(slug: string): AcharyaPage | undefined {
  return REGISTRY.get(slug);
}

export function acharyaPageSlugs(): string[] {
  return [...REGISTRY.keys()];
}
