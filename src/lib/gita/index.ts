// The Gita's verses: the read path.
//
// The text is the Besant & Bhagavan Das edition (1905), as transcribed
// on Sanskrit Wikisource and checked against its scans; see
// docs/GITA.md. scripts/gita/build.mjs writes ./data: spine.json says
// which chapters are checked, and chapter-N.json holds one checked
// chapter's verses. A chapter that is not checked has no file, and its
// page says the verses are still being checked.
//
// Load one chapter, never eighteen.
//
// Sanskrit is stored in Devanagari only, as everywhere on this site;
// the page renders it in the reader's script through scriptFor().

import spineJson from "./data/spine.json";

export type GitaLine = { t: string; speaker?: boolean };

export type GitaVerse = {
  n: number;
  /** The mūla as printed, a speaker line ("अर्जुन उवाच") where the book sets one. */
  lines: GitaLine[];
  /** Besant & Bhagavan Das's English, as printed. */
  translation: string;
  /** The scan pages the verse and its translation stand on, with the revision read. */
  pages: { n: number; rev: number | null }[];
};

export type GitaFix = {
  ref: string;
  field: "mula" | "translation";
  from: string;
  to: string;
  kind: "transcription" | "misprint";
  page: number;
  why?: string;
};

export type GitaKept = { ref: string; ours: string; note: string; page: number };

export type GitaChapterText = { chapter: number; checkedOn: string; verses: GitaVerse[]; fixes: GitaFix[]; kept: GitaKept[] };

type Spine = {
  edition: { title: string; translators: string; year: number; printer: string; wikisource: string; index: string };
  chapters: { chapter: number; verses: number; verified: boolean }[];
};

export const GITA_SPINE = spineJson as Spine;
export const GITA_EDITION = GITA_SPINE.edition;

/** True once a chapter's text has passed its check. */
export function isChapterChecked(chapter: number): boolean {
  return !!GITA_SPINE.chapters.find((c) => c.chapter === chapter)?.verified;
}

export function checkedChapters(): number[] {
  return GITA_SPINE.chapters.filter((c) => c.verified).map((c) => c.chapter);
}

export async function chapterText(chapter: number): Promise<GitaChapterText | null> {
  if (!Number.isInteger(chapter) || chapter < 1 || chapter > 18 || !isChapterChecked(chapter)) return null;
  const file = (await import(`./data/chapter-${chapter}.json`)) as { default: GitaChapterText };
  return file.default;
}

const DEVA_DIGITS = "०१२३४५६७८९";
const toDeva = (n: number) => String(n).replace(/\d/g, (d) => DEVA_DIGITS[Number(d)]);

/** A scan page of the edition on Wikisource, at the revision that was read. */
export function scanPageUrl(page: number, rev: number | null): string {
  if (rev) return `https://sa.wikisource.org/w/index.php?oldid=${rev}`;
  const title = `पृष्ठम्:${GITA_EDITION.index}/${toDeva(page)}`;
  return `https://sa.wikisource.org/wiki/${encodeURIComponent(title.replace(/ /g, "_"))}`;
}

/** The edition's index page on Wikisource: every page, with its scan. */
export function editionIndexUrl(): string {
  const title = `अनुक्रमणिका:${GITA_EDITION.index}`;
  return `https://sa.wikisource.org/wiki/${encodeURIComponent(title.replace(/ /g, "_"))}`;
}

/**
 * The translation split where the book names a speaker ("Arjuna said:"),
 * so the page can set the speaker on a line of its own as the print does.
 */
export function translationParts(text: string): { speaker?: string; text: string }[] {
  const re = /((?:The Blessed Lord|[A-Z][\p{L}]+) said:)\s*/gu;
  const parts: { speaker?: string; text: string }[] = [];
  let last = 0;
  let speaker: string | undefined;
  for (const m of text.matchAll(re)) {
    const before = text.slice(last, m.index).trim();
    if (before || speaker) parts.push({ speaker, text: before });
    speaker = m[1].replace(/ said:$/, "");
    last = (m.index ?? 0) + m[0].length;
  }
  parts.push({ speaker, text: text.slice(last).trim() });
  return parts.filter((p) => p.text || p.speaker);
}
