import type { Locale } from "./config";

// ─────────────────────────────────────────────────────────
//  Rituals & Festivals — the words the two-tab design needs.
//
//  The older strings (labels, the standing note, "Read") stay in
//  i18n/rituals.ts and i18n/festivals.ts; this file holds only what
//  the redesign added: the two tabs, the in-page jumps, the seasons'
//  framing and the labels of the deeper detail pages.
//
//  Counted labels carry {n} and are filled at the call site, because
//  the i18n test holds string tables to strings.
// ─────────────────────────────────────────────────────────

export interface RfStrings {
  sectionTitle: string;
  sectionLede: string;

  tabRituals: string;
  tabRitualsBlurb: string;
  tabFestivals: string;
  tabFestivalsBlurb: string;
  /** Carries {n}. */
  countRites: string;
  /** Carries {n}. */
  countFestivals: string;

  jumpTo: string;

  sixteenTitle: string;
  sixteenLede: string;
  writtenUp: string;

  everyMonthTitle: string;
  everyMonthLede: string;
  /** Carries {n}. */
  timesAYear: string;

  /** Carries {a} and {b}, the season's two months. */
  seasonMonths: string;

  labelSteps: string;
  labelNeeds: string;
  labelDays: string;
  labelAtAGlance: string;
  labelKind: string;
  labelSeason: string;
  /** Carries {n}. */
  stepsCount: string;
  /** Carries {n}. */
  daysCount: string;
}

export const RF_STRINGS: Record<Locale, RfStrings> = {
  en: {
    sectionTitle: "Rituals & Festivals",
    sectionLede:
      "What is done at a birth, at dusk, on the eleventh day of the moon — and what the year keeps, season by season. Every date is lunar.",

    tabRituals: "Rituals",
    tabRitualsBlurb: "Rites of passage, daily rites, vows, the fire, the ancestors and pilgrimage.",
    tabFestivals: "Festivals",
    tabFestivalsBlurb: "The year as it is kept, through its six seasons.",
    countRites: "{n} rites",
    countFestivals: "{n} festivals",

    jumpTo: "Jump to",

    sixteenTitle: "The sixteen saṃskāras",
    sixteenLede:
      "From before birth to after death. Each says whether it is still done; the ones written up below are marked.",
    writtenUp: "Written up",

    everyMonthTitle: "Every month",
    everyMonthLede: "Days that come round more than once a year, fixed by the moon.",
    timesAYear: "{n} times a year",

    seasonMonths: "{a} and {b}",

    labelSteps: "How it is done",
    labelNeeds: "What is used",
    labelDays: "Day by day",
    labelAtAGlance: "At a glance",
    labelKind: "Kind",
    labelSeason: "Season",
    stepsCount: "{n} steps",
    daysCount: "{n} days",
  },

  kn: {
    sectionTitle: "ಆಚರಣೆ ಮತ್ತು ಹಬ್ಬಗಳು",
    sectionLede:
      "ಹುಟ್ಟಿನಲ್ಲಿ, ಸಂಜೆಯಲ್ಲಿ, ಚಂದ್ರನ ಹನ್ನೊಂದನೇ ದಿನದಲ್ಲಿ ಏನು ಮಾಡುತ್ತಾರೆ — ಮತ್ತು ವರ್ಷ ಋತುವಿನಿಂದ ಋತುವಿಗೆ ಏನನ್ನು ಆಚರಿಸುತ್ತದೆ. ಎಲ್ಲ ದಿನಾಂಕಗಳೂ ಚಾಂದ್ರಮಾನದವು.",

    tabRituals: "ಆಚರಣೆಗಳು",
    tabRitualsBlurb: "ಸಂಸ್ಕಾರಗಳು, ನಿತ್ಯ ಕರ್ಮ, ವ್ರತಗಳು, ಯಜ್ಞ, ಪಿತೃ ಕಾರ್ಯ ಮತ್ತು ತೀರ್ಥಯಾತ್ರೆ.",
    tabFestivals: "ಹಬ್ಬಗಳು",
    tabFestivalsBlurb: "ಆರು ಋತುಗಳಲ್ಲಿ, ವರ್ಷ ಆಚರಿಸಲ್ಪಡುವ ಬಗೆ.",
    countRites: "{n} ಆಚರಣೆಗಳು",
    countFestivals: "{n} ಹಬ್ಬಗಳು",

    jumpTo: "ನೇರವಾಗಿ",

    sixteenTitle: "ಷೋಡಶ ಸಂಸ್ಕಾರಗಳು",
    sixteenLede:
      "ಹುಟ್ಟಿಗೆ ಮುಂಚಿನಿಂದ ಮರಣದ ನಂತರದವರೆಗೆ. ಪ್ರತಿಯೊಂದೂ ಇನ್ನೂ ಆಚರಣೆಯಲ್ಲಿದೆಯೇ ಎಂದು ಹೇಳುತ್ತದೆ; ಕೆಳಗೆ ವಿವರಿಸಿದವುಗಳನ್ನು ಗುರುತಿಸಲಾಗಿದೆ.",
    writtenUp: "ವಿವರಿಸಲಾಗಿದೆ",

    everyMonthTitle: "ಪ್ರತಿ ತಿಂಗಳು",
    everyMonthLede: "ವರ್ಷಕ್ಕೆ ಒಂದಕ್ಕಿಂತ ಹೆಚ್ಚು ಬಾರಿ ಬರುವ, ಚಂದ್ರನಿಂದ ನಿರ್ಧಾರವಾಗುವ ದಿನಗಳು.",
    timesAYear: "ವರ್ಷಕ್ಕೆ {n} ಬಾರಿ",

    seasonMonths: "{a} ಮತ್ತು {b}",

    labelSteps: "ಹೇಗೆ ಮಾಡಲಾಗುತ್ತದೆ",
    labelNeeds: "ಬೇಕಾಗುವುದು",
    labelDays: "ದಿನದಿಂದ ದಿನಕ್ಕೆ",
    labelAtAGlance: "ಒಂದು ನೋಟದಲ್ಲಿ",
    labelKind: "ಬಗೆ",
    labelSeason: "ಋತು",
    stepsCount: "{n} ಹೆಜ್ಜೆಗಳು",
    daysCount: "{n} ದಿನಗಳು",
  },

  hi: {
    sectionTitle: "अनुष्ठान और पर्व",
    sectionLede:
      "जन्म पर, संध्या को, चंद्रमा की ग्यारहवीं तिथि पर क्या किया जाता है — और वर्ष ऋतु-दर-ऋतु क्या मनाता है। हर तिथि चांद्र है।",

    tabRituals: "अनुष्ठान",
    tabRitualsBlurb: "संस्कार, नित्य कर्म, व्रत, यज्ञ, पितृ कर्म और तीर्थयात्रा।",
    tabFestivals: "पर्व",
    tabFestivalsBlurb: "वर्ष जैसा मनाया जाता है, उसकी छह ऋतुओं में।",
    countRites: "{n} अनुष्ठान",
    countFestivals: "{n} पर्व",

    jumpTo: "सीधे जाएँ",

    sixteenTitle: "सोलह संस्कार",
    sixteenLede:
      "जन्म से पहले से मृत्यु के बाद तक। हर एक बताता है कि वह अब भी होता है या नहीं; नीचे जिनका विवरण है उन्हें चिह्नित किया गया है।",
    writtenUp: "विवरण उपलब्ध",

    everyMonthTitle: "हर महीने",
    everyMonthLede: "वे दिन जो वर्ष में एक से अधिक बार आते हैं, चंद्रमा से निश्चित।",
    timesAYear: "वर्ष में {n} बार",

    seasonMonths: "{a} और {b}",

    labelSteps: "कैसे किया जाता है",
    labelNeeds: "क्या प्रयुक्त होता है",
    labelDays: "दिन-प्रतिदिन",
    labelAtAGlance: "एक दृष्टि में",
    labelKind: "प्रकार",
    labelSeason: "ऋतु",
    stepsCount: "{n} चरण",
    daysCount: "{n} दिन",
  },
};

export function rfStrings(locale: Locale): RfStrings {
  return RF_STRINGS[locale];
}
