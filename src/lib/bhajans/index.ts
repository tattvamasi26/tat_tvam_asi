import type { Locale } from "@/i18n/config";
import { BHAJAN_GROUPS, bhajanGroup, haridasa, FORM_NAMES } from "./groups";
import spineData from "./data/spine.json";

// ─────────────────────────────────────────────────────────
//  The bhajan corpus.
//
//  Nine hundred and thirteen Kannada devotional songs, brought over
//  from bhakthilahari.com, which this site's owner also runs. They are
//  built and committed as data rather than written into
//  src/lib/seed/, for the same reason the Rigveda is: there are too
//  many of them to be TypeScript arrays.
//
//    scripts/wordpress/fetch.mjs         the harvest, read-only
//    scripts/wordpress/parse-bhajans.mjs the parse
//    scripts/wordpress/build-bhajans.mjs what this module reads
//
//  **Load one group, never twenty-two.** SPINE is imported directly —
//  it is every song without its text, which is what the index and the
//  group pages list. The texts are loaded one group at a time by
//  songsIn(), and no page may import data/texts/*.json itself.
//
//  **What these songs do not have is a translation.** The source gives
//  the Kannada and a transliteration of it; thirteen posts out of 915
//  carry a meaning, and nothing reliable can be built from thirteen.
//  So this is a complete text whose translation has not been written —
//  the same claim the Rigveda makes, and it needs the same plain words
//  on the page. Never let a song imply a meaning is present.
// ─────────────────────────────────────────────────────────

export interface BhajanSpineRow {
  slug: string;
  devata: string;
  form: string;
  composer: string | null;
  titleKn: string;
  titleEn: string;
  stanzas: number;
  lines: number;
  hasText: boolean;
  hasTransliteration: boolean;
  hasVideo: boolean;
  raga: string | null;
}

export interface BhajanText {
  slug: string;
  titleKn: string;
  titleEn: string;
  form: string;
  composer: string | null;
  ankita: string | null;
  raga: string | null;
  tala: string | null;
  /** The song as it is sung: stanzas, each a list of lines. */
  stanzas: string[][];
  /**
   * The transliteration, as its own sequence. It is deliberately not
   * paired stanza-for-stanza with the Kannada: in four songs out of
   * ten the source's transliteration is abridged, and a pairing that
   * is not in the source would be a claim the data cannot support.
   */
  transliteration: string[][];
  aligned: boolean;
  video: string | null;
  videos: string[];
  sourceUrl: string;
}

interface Spine {
  groups: { id: string; count: number }[];
  songs: BhajanSpineRow[];
}

const SPINE = spineData as Spine;

/** Every song, without its text. */
export function allBhajans(): BhajanSpineRow[] {
  return SPINE.songs;
}

export function bhajanCount(): number {
  return SPINE.songs.length;
}

/** The groups that actually hold songs, in the order they are shown. */
export function bhajanGroups(locale: Locale) {
  return SPINE.groups
    .map(({ id, count }) => {
      const g = bhajanGroup(id);
      return g ? { id, count, name: g.name[locale], kind: g.kind } : null;
    })
    .filter((g): g is { id: string; count: number; name: string; kind: "devata" | "form" | "gap" } => g !== null);
}

export function bhajanGroupExists(id: string): boolean {
  return SPINE.groups.some((g) => g.id === id);
}

/** One group's songs, without their texts. */
export function bhajansIn(devata: string): BhajanSpineRow[] {
  return SPINE.songs.filter((s) => s.devata === devata);
}

/** Which group a song belongs to, without loading any text. */
export function bhajanRow(slug: string): BhajanSpineRow | undefined {
  return SPINE.songs.find((s) => s.slug === slug);
}

/**
 * One group's texts. This is the only place a texts file is read, and
 * it reads exactly one — a page that needs a song must go through
 * here so it never pulls the whole corpus into memory.
 */
export async function songsIn(devata: string): Promise<BhajanText[]> {
  if (!bhajanGroupExists(devata)) return [];
  const mod = await import(`./data/texts/${devata}.json`);
  return (mod.default ?? mod) as BhajanText[];
}

/** One song, with its text. */
export async function bhajan(devata: string, slug: string): Promise<BhajanText | undefined> {
  const songs = await songsIn(devata);
  return songs.find((s) => s.slug === slug);
}

/** The composer's name in the reader's language, where a song is signed. */
export function composerName(id: string | null, locale: Locale): string | null {
  return haridasa(id)?.name[locale] ?? null;
}

/** What kind of text this is, in the reader's language. */
export function formName(form: string, locale: Locale): string {
  return FORM_NAMES[form]?.[locale] ?? FORM_NAMES.song[locale];
}

/** How many songs each Haridasa signed, most first. */
export function composerCounts(locale: Locale) {
  const counts = new Map<string, number>();
  for (const s of SPINE.songs) {
    if (s.composer) counts.set(s.composer, (counts.get(s.composer) ?? 0) + 1);
  }
  return [...counts.entries()]
    .map(([id, count]) => {
      const h = haridasa(id)!;
      return { id, count, name: h.name[locale], ankita: h.ankita, when: h.when[locale] };
    })
    .sort((a, b) => b.count - a.count);
}

export { BHAJAN_GROUPS, bhajanGroup, haridasa, HARIDASAS } from "./groups";
