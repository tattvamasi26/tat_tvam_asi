import type { Locale } from "@/i18n/config";
import type { DarshanaSection } from "./types";
import { EN } from "./en";
import { KN } from "./kn";
import { HI } from "./hi";

// ─────────────────────────────────────────────────────────
//  The prose for the six darśanas, assembled from one file per
//  language.
//
//  Each language carries all six schools under the same slugs, with
//  the same section ids in the same order and the same block kinds —
//  the Shankara monograph's arrangement, and for the same reason.
//  tests/unit/darshanas.test.ts holds the three to each other, so a
//  section added to one and forgotten in another fails rather than
//  quietly falling back to English.
// ─────────────────────────────────────────────────────────

export type { DarshanaSection } from "./types";

export const DARSHANA_PROSE: Record<Locale, Record<string, DarshanaSection[]>> = {
  en: EN,
  kn: KN,
  hi: HI,
};

export function darshanaProse(slug: string, locale: Locale): DarshanaSection[] {
  return DARSHANA_PROSE[locale]?.[slug] ?? DARSHANA_PROSE.en[slug] ?? [];
}
