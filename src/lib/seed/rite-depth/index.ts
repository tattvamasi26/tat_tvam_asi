import type { Locale } from "@/i18n/config";
import type { Depth, DepthBook } from "./types";
import { EN } from "./en";
import { KN } from "./kn";
import { HI } from "./hi";

// The depth of every rite and festival, one file per language.
// tests/unit/rituals.test.ts holds the three to the same number of
// steps, things used and days, so none can drift.

export type { Depth, DepthBook } from "./types";

export const DEPTH: Record<Locale, DepthBook> = { en: EN, kn: KN, hi: HI };

export function depthFor(slug: string, locale: Locale): Depth | null {
  return DEPTH[locale]?.[slug] ?? DEPTH.en[slug] ?? null;
}
