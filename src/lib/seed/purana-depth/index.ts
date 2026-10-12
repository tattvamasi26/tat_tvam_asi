import type { Locale } from "@/i18n/config";
import type { PuranaDepth, PuranaDepthBook } from "./types";
import { EN } from "./en";
import { KN } from "./kn";
import { HI } from "./hi";

// How each Purāṇa is arranged and what is in it, one file per language.
// tests/unit/puranas.test.ts holds the three to the same counts.

export type { PuranaDepth, PuranaDepthBook } from "./types";

export const PURANA_DEPTH: Record<Locale, PuranaDepthBook> = { en: EN, kn: KN, hi: HI };

export function puranaDepthFor(slug: string, locale: Locale): PuranaDepth | null {
  return PURANA_DEPTH[locale]?.[slug] ?? PURANA_DEPTH.en[slug] ?? null;
}
