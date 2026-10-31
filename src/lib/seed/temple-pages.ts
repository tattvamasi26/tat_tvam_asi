import type { Locale } from "@/i18n/config";
import type { DevataImage } from "./devatas";

// ─────────────────────────────────────────────────────────
//  The registry of temples written in depth.
//
//  A temple becomes a page by writing one module under
//  seed/temple-pages/ and calling registerTemplePage(). The module
//  carries the whole monograph: the facts bar, the sections of prose,
//  the pictures and the sources every fact came from. No page code is
//  needed, and every temple page looks the same.
//
//  The prose is written per language rather than field by field, the
//  way the Kollur guide was, so a translator reads a passage beside
//  the passages it sits between. A unit test holds the languages to
//  the same sections and the same blocks, so none can drift.
//
//  Blocks:
//    · para — a paragraph
//    · sub  — a titled passage of one or more paragraphs
//    · list — label-and-text pairs (practices, places, travel)
//    · rows — three columns (a time, a name, what happens then)
// ─────────────────────────────────────────────────────────

export type TempleBlock =
  | { kind: "para"; text: string }
  | { kind: "sub"; title: string; paras: string[] }
  | { kind: "list"; title?: string; items: { label: string; text: string }[] }
  | { kind: "rows"; title?: string; rows: { when: string; name: string; text?: string }[] };

export interface TempleSection {
  /** Stable across languages; also the heading's anchor. */
  id: string;
  /** The small label above the heading. */
  eyebrow: string;
  title: string;
  blocks: TempleBlock[];
}

export interface TempleContent {
  /** One line under the name: what this temple is. */
  tagline: string;
  /** Where it stands, as a reader would say it. */
  place: string;
  /** The facts bar: label and value. */
  facts: [string, string][];
  /** An optional line to open with, set apart. */
  quote?: string;
  sections: TempleSection[];
}

/** A picture, with an optional caption under it. */
export interface TemplePicture extends DevataImage {
  caption?: Record<Locale, string>;
}

export interface TemplePage {
  slug: string;
  /** A seed/temple-regions.ts slug. */
  region: string;
  /** Where it sits on the region's page. */
  order: number;
  name: Record<Locale, string>;
  /** The temple's own name in its own script, shown in every language. */
  nameLocal: string;
  /** The script nameLocal is written in, for the lang attribute. */
  nameLocalLang: "kn" | "ta" | "ml" | "hi";
  hero?: TemplePicture;
  gallery?: TemplePicture[];
  /** Where the facts came from. Every temple page shows these. */
  sources: { title: string; url: string }[];
  content: Record<Locale, TempleContent>;
}

const REGISTRY = new Map<string, TemplePage>();

export function registerTemplePage(page: TemplePage) {
  REGISTRY.set(page.slug, page);
}

export function getTemplePage(slug: string): TemplePage | undefined {
  return REGISTRY.get(slug);
}

export function templePageSlugs(): string[] {
  return Array.from(REGISTRY.keys());
}

/** A region's temples, in the order set for its page. */
export function templePagesOf(region: string): TemplePage[] {
  return Array.from(REGISTRY.values())
    .filter((p) => p.region === region)
    .sort((a, b) => a.order - b.order);
}
