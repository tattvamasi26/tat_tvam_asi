import type { Locale } from "./config";

// ─────────────────────────────────────────────────────────
//  The śāstra map — the words the redesign added: the branch card's
//  way in, and the labels of a branch's own page. The older strings
//  stay in i18n/shastras.ts.
// ─────────────────────────────────────────────────────────

export interface ShastraUi {
  open: string;
  textsTitle: string;
  labelTier: string;
  labelTexts: string;
  labelOnSite: string;
  readHere: string;
  /** Carries {n}. */
  countTexts: string;
  /** Carries {n}. */
  countBranches: string;
}

export const SHASTRA_UI: Record<Locale, ShastraUi> = {
  en: {
    open: "Open",
    textsTitle: "Its texts",
    labelTier: "Tier",
    labelTexts: "Texts",
    labelOnSite: "On this site",
    readHere: "Read it here",
    countTexts: "{n} texts",
    countBranches: "{n} branches",
  },
  kn: {
    open: "ತೆರೆಯಿರಿ",
    textsTitle: "ಇದರ ಗ್ರಂಥಗಳು",
    labelTier: "ಸ್ತರ",
    labelTexts: "ಗ್ರಂಥಗಳು",
    labelOnSite: "ಈ ತಾಣದಲ್ಲಿ",
    readHere: "ಇಲ್ಲಿ ಓದಿ",
    countTexts: "{n} ಗ್ರಂಥಗಳು",
    countBranches: "{n} ಶಾಖೆಗಳು",
  },
  hi: {
    open: "खोलें",
    textsTitle: "इसके ग्रंथ",
    labelTier: "स्तर",
    labelTexts: "ग्रंथ",
    labelOnSite: "इस साइट पर",
    readHere: "यहाँ पढ़ें",
    countTexts: "{n} ग्रंथ",
    countBranches: "{n} शाखाएँ",
  },
};

export function shastraUi(locale: Locale): ShastraUi {
  return SHASTRA_UI[locale];
}
