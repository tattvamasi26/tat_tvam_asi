import type { Locale } from "@/i18n/config";
import type { DevataImage } from "./devatas";
import { NAVA_VINAYAKAS, NAVA_VINAYAKAS_PAGE } from "./nava-vinayakas";

// ─────────────────────────────────────────────────────────
//  Circuits: sets of temples visited together, listed on their
//  region's page beside the temples themselves.
//
//  A circuit keeps its own page and its own data — the Nava Vinayakas
//  have theirs in seed/nava-vinayakas.ts. This file only says which
//  region a circuit belongs to, and what its card says.
// ─────────────────────────────────────────────────────────

export interface TempleCollection {
  slug: string;
  /** A seed/temple-regions.ts slug. */
  region: string;
  order: number;
  name: Record<Locale, string>;
  blurb: Record<Locale, string>;
  /** How many temples it takes in. */
  count: number;
  image?: DevataImage;
}

export const TEMPLE_COLLECTIONS: TempleCollection[] = [
  {
    slug: "nava-vinayakas",
    region: "tulunadu",
    order: 1,
    name: NAVA_VINAYAKAS_PAGE.title,
    blurb: NAVA_VINAYAKAS_PAGE.blurb,
    count: NAVA_VINAYAKAS.length,
    image: NAVA_VINAYAKAS.find((n) => n.photo)?.photo,
  },
];

export function collectionsOf(region: string): TempleCollection[] {
  return TEMPLE_COLLECTIONS.filter((c) => c.region === region).sort((a, b) => a.order - b.order);
}

export function getCollection(slug: string): TempleCollection | undefined {
  return TEMPLE_COLLECTIONS.find((c) => c.slug === slug);
}
