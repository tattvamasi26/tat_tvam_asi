// ─────────────────────────────────────────────────────────
//  A branch of the śāstra map, written out.
//
//  Six of the ten branches have no section of their own — Vedānta, the
//  Vedāṅgas, Dharma, Āgama, Itihāsa and the teaching texts — and on the
//  map they were a heading and a row of grey chips leading nowhere.
//  Each now has a page at /shastras/[branch]: what the branch is, how
//  it stands to the Veda, and a paragraph on every text in it.
//
//  This does not break the map's rule. A page here describes a branch;
//  it never holds a text. Where a text is readable on this site its
//  card links to the section that holds it, exactly as before.
//
//  One file per language, held to the same shape by a unit test.
// ─────────────────────────────────────────────────────────

export interface BranchPage {
  /** What the branch is: a few paragraphs. */
  about: string[];
  /** One paragraph per text, keyed by the text's id in seed/shastras.ts. */
  texts: Record<string, string>;
}

export type BranchBook = Record<string, BranchPage>;
