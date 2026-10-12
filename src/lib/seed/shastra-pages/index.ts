import type { Locale } from "@/i18n/config";
import type { BranchBook, BranchPage } from "./types";
import { EN } from "./en";
import { KN } from "./kn";
import { HI } from "./hi";

// The six branches with no section of their own, one file per language.
// tests/unit/shastras.test.ts holds the three to the same shape.

export type { BranchBook, BranchPage } from "./types";

export const BRANCH_PAGES: Record<Locale, BranchBook> = { en: EN, kn: KN, hi: HI };

/** The branches that have a page at /shastras/[branch]. */
export const BRANCHES_WITH_PAGES = Object.keys(EN);

export function branchPageFor(id: string, locale: Locale): BranchPage | null {
  return BRANCH_PAGES[locale]?.[id] ?? BRANCH_PAGES.en[id] ?? null;
}
