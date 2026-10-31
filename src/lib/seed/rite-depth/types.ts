// ─────────────────────────────────────────────────────────
//  The depth of a rite or a festival: what is done, in order, and
//  what is used.
//
//  The summary rows in seed/rituals.ts and seed/festivals.ts say what
//  a thing is in a paragraph. This is the part a reader actually came
//  for — the sequence — and it is kept out of those files because it
//  is long, and because it is written one language per file the way
//  the Shankara and darśana prose is, so a test can hold the three to
//  the same shape.
//
//  Every step is a description, never an instruction: "the boy is
//  bathed", not "bathe the boy". These pages describe rites; they do
//  not teach them, and the rituals test rejects the second person.
// ─────────────────────────────────────────────────────────

export interface Depth {
  /** The rite in order: a short title and what happens. */
  steps: [string, string][];
  /** What is used. Short names, no quantities. */
  needs: string[];
  /** For a festival kept over several days: each day and what it is. */
  days?: [string, string][];
}

/** One language's depth for every rite and festival, keyed by slug. */
export type DepthBook = Record<string, Depth>;
