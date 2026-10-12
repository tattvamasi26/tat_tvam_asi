// ─────────────────────────────────────────────────────────
//  The depth of a Purāṇa: how it is arranged, and the passages people
//  actually know from it.
//
//  The summary rows in seed/puranas.ts say what each one is. This is
//  the part a reader opens a Purāṇa's page for — its shape, and where
//  in it the famous things are — written one language per file, the
//  way the rites' depth is, so a test can hold the three together.
//
//  Divisions are given as the printed editions arrange them. Where the
//  recensions disagree about the divisions, the entry says so rather
//  than choosing one silently.
// ─────────────────────────────────────────────────────────

export interface PuranaDepth {
  /** Its divisions: name, and what is in that part. */
  parts: [string, string][];
  /** The passages a reader is likely to have met. */
  passages: [string, string][];
}

export type PuranaDepthBook = Record<string, PuranaDepth>;
