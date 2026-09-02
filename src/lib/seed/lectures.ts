import type { VerseVideo } from "./isha-video";

// ─────────────────────────────────────────────────────────
//  Lecture mappings for the texts other than the Īśa.
//
//  All from Swami Sarvapriyananda's series at the Vedanta
//  Society of New York, mapped verse by verse the same way the
//  Īśa's are.
//
//  WHERE A VERSE HAS NO ENTRY
//
//  Not every talk in these series has a findable video id. A verse
//  with no entry here simply shows no lecture card — it does NOT
//  fall back to a neighbouring talk.
//
//  That is deliberate. Sending someone to a video that discusses a
//  different mantra is worse than sending them nowhere: they would
//  watch it expecting this verse and conclude the site is careless.
//  The series link in the page footer covers the gaps honestly.
// ─────────────────────────────────────────────────────────

/** Māṇḍūkya — twelve mantras, complete coverage. */
export const MANDUKYA_VIDEOS: Record<string, VerseVideo> = {
  "1": { id: "8mCkWGlO2x8", talk: 1, covers: "Mantra 1" },
  "2": { id: "Da4Upkl_jj4", talk: 2, covers: "Mantra 2" },
  "3": { id: "1pBhcSi9uKQ", talk: 3, covers: "Mantras 3–4" },
  "4": { id: "1pBhcSi9uKQ", talk: 3, covers: "Mantras 3–4" },
  "5": { id: "o_uj86CgwRI", talk: 4, covers: "Mantras 5–6" },
  "6": { id: "o_uj86CgwRI", talk: 4, covers: "Mantras 5–6" },
  "7": { id: "WESfnSGQ2_A", talk: 7, covers: "Mantra 7" },
  "8": { id: "ZubZjJ8m9NE", talk: 12, covers: "Mantra 8" },
  "9": { id: "uQ7Sryn5lkY", talk: 13, covers: "Mantras 9–11" },
  "10": { id: "uQ7Sryn5lkY", talk: 13, covers: "Mantras 9–11" },
  "11": { id: "uQ7Sryn5lkY", talk: 13, covers: "Mantras 9–11" },
  "12": { id: "g3i_JP_muUU", talk: 15, covers: "Mantra 12 & Kārikā 22–23" },
};

export const MANDUKYA_SERIES = {
  speaker: "Swami Sarvapriyananda",
  org: "Vedanta Society of New York",
  channel: "https://www.youtube.com/playlist?list=PL2imXor63HtRJbtP4mMt-Q2ke8XOkL7pX",
};

/**
 * Kena — partial coverage. Talks 6, 11, 16 and 17 are part of the
 * series but their video ids did not surface; those verses (1.5,
 * 2.2–2.3, and the Yakṣa narrative up to 4.6) carry no card.
 */
export const KENA_VIDEOS: Record<string, VerseVideo> = {
  invocation: { id: "jXiYm7O3vzs", talk: 1, covers: "Introduction" },
  "1.1": { id: "jXiYm7O3vzs", talk: 1, covers: "Introduction" },
  "1.2": { id: "s8QZSmkmMpY", talk: 4, covers: "Mantra 1.2" },
  "1.3": { id: "cPjsN1G5PwU", talk: 5, covers: "Mantras 1.3–1.4" },
  "1.4": { id: "cPjsN1G5PwU", talk: 5, covers: "Mantras 1.3–1.4" },
  "1.6": { id: "hwfE5fn6UMc", talk: 7, covers: "Mantras 1.6–1.9" },
  "1.7": { id: "hwfE5fn6UMc", talk: 7, covers: "Mantras 1.6–1.9" },
  "1.8": { id: "R8Bx18mElL4", talk: 8, covers: "Mantras 1.6–1.9, continued" },
  "1.9": { id: "R8Bx18mElL4", talk: 8, covers: "Mantras 1.6–1.9, continued" },
  "2.1": { id: "-hgtngYbtmk", talk: 9, covers: "Mantra 2.1" },
  "2.4": { id: "4iXKLeIRQco", talk: 12, covers: "Mantra 2.4" },
  "2.5": { id: "YqOVJYi_U6s", talk: 15, covers: "Mantra 2.5" },
  "4.7–4.9": { id: "YalmPLGWGn4", talk: 18, covers: "Mantras 4.7–4.9" },
};

export const KENA_SERIES = {
  speaker: "Swami Sarvapriyananda",
  org: "Vedanta Society of New York",
  channel: "https://www.youtube.com/playlist?list=PLDqahtm2vA714ymJsH9cqxoK-sJFMtsJU",
};
