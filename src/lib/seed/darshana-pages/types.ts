import type { TempleBlock } from "../temple-pages";

// ─────────────────────────────────────────────────────────
//  The shape of a darśana's prose, and the shorthand the three
//  language files are written with.
//
//  One file per language, assembled by index.ts — the arrangement the
//  Shankara monograph uses, for the same reason: three languages of
//  the same structure in one file is unreadable, and a unit test can
//  hold the three to the same section ids and the same block kinds so
//  none of them drifts.
// ─────────────────────────────────────────────────────────

export interface DarshanaSection {
  id: string;
  eyebrow: string;
  title: string;
  blocks: TempleBlock[];
}

/** One language's prose for all six schools, keyed by slug. */
export type DarshanaProse = Record<string, DarshanaSection[]>;

export const para = (text: string): TempleBlock => ({ kind: "para", text });

export const sub = (title: string, ...paras: string[]): TempleBlock => ({
  kind: "sub",
  title,
  paras,
});

export const list = (
  title: string,
  ...items: [string, string][]
): TempleBlock => ({
  kind: "list",
  title,
  items: items.map(([label, text]) => ({ label, text })),
});
