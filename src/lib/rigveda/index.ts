// The Rigveda read path.
//
// The corpus is built by scripts/rigveda/build.ts into ./data:
// spine.json holds all 1,028 hymns without their verses, and one
// mandala-N.json holds the verses of one mandala. The split is the
// point — the index, the mandala lists and the devata pages need the
// spine alone (~330 KB), and a sukta page pulls in exactly one
// mandala. Nothing ever loads all 10,552 verses.
//
// Sanskrit is stored in Devanagari only, as everywhere on this site.
// Rendering it in the reader's script is the caller's job, through
// scriptFor() — which also drops the Vedic accents on the Kannada
// path, per the decision recorded in docs/RIGVEDA-SOURCES.md §8.

import spineJson from "./data/spine.json";
import { DEVATAS, type Devata } from "./devatas";

export type { Devata, DevataKind } from "./devatas";
export { DEVATAS } from "./devatas";

/** One hymn, without its verses. */
export type SuktaSpine = {
  /** "1.164" — mandala.sukta, as the tradition cites it. */
  ref: string;
  mandala: number;
  sukta: number;
  /** Verse count, counted from the samhita itself. */
  verses: number;
  /** The rishi, as the Anukramani gives him — sometimes verse by verse. */
  rishi: string;
  /** Canonical devata id; the hymn's home. */
  devataId: string;
  /** The full attribution, which may name several devatas in turn. */
  devata: string;
  /** True when that attribution names more than one devata. */
  mixed: boolean;
  metre: string;
  hasSayana: boolean;
  /** Present only where a value was read by hand; says from where. */
  readByHand?: Record<string, string>;
};

export type Verse = { n: number; lines: string[] };
export type SuktaText = { sukta: number; ref: string; verses: Verse[] };

export const SPINE: SuktaSpine[] = spineJson as SuktaSpine[];

const BY_REF = new Map(SPINE.map((s) => [s.ref, s]));
const BY_DEVATA = new Map<string, SuktaSpine[]>();
for (const s of SPINE) {
  if (!BY_DEVATA.has(s.devataId)) BY_DEVATA.set(s.devataId, []);
  BY_DEVATA.get(s.devataId)!.push(s);
}

export const MANDALA_COUNT = 10;

export type MandalaSummary = {
  mandala: number;
  suktas: number;
  verses: number;
  /** The devatas of this mandala, biggest group first. */
  devatas: { devata: Devata; suktas: number }[];
};

/** One devata with the hymns filed under it, biggest first. */
export type DevataGroup = {
  devata: Devata;
  suktas: SuktaSpine[];
};

const devataById = new Map(DEVATAS.map((d) => [d.id, d]));

export function devata(id: string): Devata | undefined {
  return devataById.get(id);
}

export function sukta(ref: string): SuktaSpine | undefined {
  return BY_REF.get(ref);
}

export function suktasOf(mandala: number): SuktaSpine[] {
  return SPINE.filter((s) => s.mandala === mandala);
}

export function suktasFor(devataId: string): SuktaSpine[] {
  return BY_DEVATA.get(devataId) ?? [];
}

/**
 * A mandala's hymns grouped by devata — the shape a mandala page
 * renders. 191 numbered rows is a list nobody reads; "to Indra (58)"
 * is a way in. Groups run biggest first, and each group keeps its
 * hymns in their own order.
 */
export function groupsOf(mandala: number): DevataGroup[] {
  const groups = new Map<string, SuktaSpine[]>();
  for (const s of suktasOf(mandala)) {
    if (!groups.has(s.devataId)) groups.set(s.devataId, []);
    groups.get(s.devataId)!.push(s);
  }
  return [...groups.entries()]
    .map(([id, suktas]) => ({ devata: devataById.get(id)!, suktas }))
    .sort((a, b) => b.suktas.length - a.suktas.length || a.devata.id.localeCompare(b.devata.id));
}

export function mandala(n: number): MandalaSummary {
  const suktas = suktasOf(n);
  return {
    mandala: n,
    suktas: suktas.length,
    verses: suktas.reduce((t, s) => t + s.verses, 0),
    devatas: groupsOf(n).map((g) => ({ devata: g.devata, suktas: g.suktas.length })),
  };
}

export function mandalas(): MandalaSummary[] {
  return Array.from({ length: MANDALA_COUNT }, (_, i) => mandala(i + 1));
}

/** Every devata that has at least one hymn, biggest group first. */
export function devatasByHymnCount(): { devata: Devata; suktas: number }[] {
  return DEVATAS.map((d) => ({ devata: d, suktas: BY_DEVATA.get(d.id)?.length ?? 0 }))
    .filter((d) => d.suktas > 0)
    .sort((a, b) => b.suktas - a.suktas || a.devata.id.localeCompare(b.devata.id));
}

/** The whole collection, in one line, for the pages that state it. */
export function totals() {
  return {
    suktas: SPINE.length,
    verses: SPINE.reduce((t, s) => t + s.verses, 0),
    devatas: BY_DEVATA.size,
    /** Hymns whose attribution names more than one devata. */
    mixed: SPINE.filter((s) => s.mixed).length,
  };
}

/**
 * The verses of one hymn. Loads a single mandala's file on demand, so
 * a page never pulls in more of the Rigveda than it shows.
 */
export async function verses(mandala: number, sukta: number): Promise<Verse[] | null> {
  if (!Number.isInteger(mandala) || mandala < 1 || mandala > MANDALA_COUNT) return null;
  const file = (await import(`./data/mandala-${mandala}.json`)) as {
    default: { mandala: number; suktas: SuktaText[] };
  };
  return file.default.suktas.find((s) => s.sukta === sukta)?.verses ?? null;
}

/** The hymns either side of this one, for the reader's foot. */
export function neighbours(ref: string): { previous?: SuktaSpine; next?: SuktaSpine } {
  const i = SPINE.findIndex((s) => s.ref === ref);
  if (i < 0) return {};
  return { previous: SPINE[i - 1], next: SPINE[i + 1] };
}
