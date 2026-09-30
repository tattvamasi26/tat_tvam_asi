import type { Locale } from "./config";

// ─────────────────────────────────────────────────────────
//  Rituals & Festivals — the section's own words.
//
//  Two carry weight beyond their length.
//
//  `standing` says what this section is not: it is not instructions.
//  A page listing what is done at an upanayana will be read as a
//  manual unless it says otherwise, and this site is in no position
//  to be one.
//
//  `kept*` are the three words that make the arc of sixteen honest.
//  Half of the sixteen saṃskāras are rare or no longer performed at
//  all, and the page says so on each of them rather than printing a
//  tidy list that implies otherwise. The split is pinned by
//  tests/unit/rituals.test.ts, so these numbers cannot drift from it.
// ─────────────────────────────────────────────────────────

export interface RitualStrings {
  title: string;
  lede: string;
  standing: string;
  count: (rites: string, festivals: string) => string;

  /** The arc of sixteen across a life. */
  arcTitle: string;
  arcLede: string;
  keptCommon: string;
  keptRare: string;
  keptLapsed: string;
  /** Screen-reader text for a name on the arc with no page of its own. */
  noPage: string;

  /** The band that leads into the festivals. */
  yearTitle: string;
  yearLede: string;
  yearLink: string;

  groupCount: (n: string) => string;

  labelWhen: string;
  labelObserved: string;
  labelWhy: string;
  labelRegional: string;
  labelWords: string;
  labelElsewhere: string;
  labelGroup: string;

  read: string;
  back: string;
  next: string;
  previous: string;
}

export const RITUAL_STRINGS: Record<Locale, RitualStrings> = {
  en: {
    title: "Rituals & Festivals",
    lede: "What is actually done — at a birth, at dusk, on the eleventh day of the moon, and once a year in the order of the lunar calendar.",
    standing:
      "These pages describe rites; they do not teach them. What is done, when, and why it is held to be done that way — and where families and traditions disagree, the disagreement is printed rather than settled. Nothing here is a substitute for somebody who knows the rite, and no mantra is given as an instruction.",
    count: (rites, festivals) => `${rites} rites, and ${festivals} festivals.`,

    arcTitle: "A life in sixteen rites",
    arcLede:
      "The saṃskāras run from before birth to after death. Eight are still commonly performed, and the other eight are named here because a list of sixteen with half of it quietly missing would look complete and would not be.",
    keptCommon: "Still common",
    keptRare: "Rarely done",
    keptLapsed: "No longer performed",
    noPage: "not yet written up",

    yearTitle: "The year",
    yearLede:
      "Sixteen festivals in the order of the lunar year, each with its date given the way the tradition gives it — never as a Gregorian one.",
    yearLink: "Go to the festivals",

    groupCount: (n) => `${n} rites`,

    labelWhen: "When",
    labelObserved: "What is done",
    labelWhy: "Why",
    labelRegional: "Where it differs",
    labelWords: "The words",
    labelElsewhere: "Elsewhere on this site",
    labelGroup: "Part of",

    read: "Read",
    back: "All rites",
    next: "Next",
    previous: "Previous",
  },

  kn: {
    title: "ಆಚರಣೆ ಮತ್ತು ಹಬ್ಬಗಳು",
    lede: "ನಿಜವಾಗಿ ಏನು ಮಾಡುತ್ತಾರೆ — ಹುಟ್ಟಿನಲ್ಲಿ, ಸಂಜೆಯಲ್ಲಿ, ಚಂದ್ರನ ಹನ್ನೊಂದನೇ ದಿನದಲ್ಲಿ, ಮತ್ತು ವರ್ಷಕ್ಕೊಮ್ಮೆ ಚಾಂದ್ರಮಾನ ಕ್ರಮದಲ್ಲಿ.",
    standing:
      "ಈ ಪುಟಗಳು ಆಚರಣೆಗಳನ್ನು ವರ್ಣಿಸುತ್ತವೆ; ಕಲಿಸುವುದಿಲ್ಲ. ಏನು ಮಾಡುತ್ತಾರೆ, ಯಾವಾಗ, ಮತ್ತು ಹಾಗೆ ಮಾಡಲಾಗುತ್ತದೆ ಎಂದು ಏಕೆ ಪರಿಗಣಿಸಲಾಗಿದೆ — ಮತ್ತು ಕುಟುಂಬಗಳು, ಪರಂಪರೆಗಳು ಭಿನ್ನಮತ ಹೊಂದಿದ್ದಲ್ಲಿ ಆ ಭಿನ್ನಮತವನ್ನು ಬಗೆಹರಿಸದೆ ಮುದ್ರಿಸಲಾಗಿದೆ. ಆಚರಣೆ ಗೊತ್ತಿರುವವರ ಸ್ಥಾನವನ್ನು ಇಲ್ಲಿ ಯಾವುದೂ ತುಂಬುವುದಿಲ್ಲ, ಮತ್ತು ಯಾವ ಮಂತ್ರವನ್ನೂ ಸೂಚನೆಯಾಗಿ ಕೊಡಲಾಗಿಲ್ಲ.",
    count: (rites, festivals) => `${rites} ಆಚರಣೆಗಳು, ಮತ್ತು ${festivals} ಹಬ್ಬಗಳು.`,

    arcTitle: "ಹದಿನಾರು ಸಂಸ್ಕಾರಗಳಲ್ಲಿ ಒಂದು ಬದುಕು",
    arcLede:
      "ಸಂಸ್ಕಾರಗಳು ಹುಟ್ಟುವ ಮೊದಲಿನಿಂದ ಸತ್ತ ನಂತರದವರೆಗೆ ಸಾಗುತ್ತವೆ. ಎಂಟು ಇಂದಿಗೂ ಸಾಮಾನ್ಯ, ಉಳಿದ ಎಂಟನ್ನೂ ಇಲ್ಲಿ ಹೆಸರಿಸಲಾಗಿದೆ — ಅರ್ಧ ಸದ್ದಿಲ್ಲದೆ ಬಿಟ್ಟುಹೋದ ಹದಿನಾರರ ಪಟ್ಟಿ ಪೂರ್ಣವಾಗಿ ಕಾಣುತ್ತದೆ, ಆದರೆ ಇರುವುದಿಲ್ಲ.",
    keptCommon: "ಇಂದಿಗೂ ಸಾಮಾನ್ಯ",
    keptRare: "ಅಪರೂಪ",
    keptLapsed: "ಈಗ ನಡೆಯುವುದಿಲ್ಲ",
    noPage: "ಇನ್ನೂ ಬರೆದಿಲ್ಲ",

    yearTitle: "ವರ್ಷ",
    yearLede:
      "ಚಾಂದ್ರಮಾನ ವರ್ಷದ ಕ್ರಮದಲ್ಲಿ ಹದಿನಾರು ಹಬ್ಬಗಳು — ಪ್ರತಿಯೊಂದರ ದಿನಾಂಕವೂ ಪರಂಪರೆ ಕೊಡುವ ರೀತಿಯಲ್ಲೇ, ಗ್ರೆಗೋರಿಯನ್ ರೂಪದಲ್ಲಿ ಎಂದಿಗೂ ಅಲ್ಲ.",
    yearLink: "ಹಬ್ಬಗಳಿಗೆ ಹೋಗಿ",

    groupCount: (n) => `${n} ಆಚರಣೆಗಳು`,

    labelWhen: "ಯಾವಾಗ",
    labelObserved: "ಏನು ಮಾಡುತ್ತಾರೆ",
    labelWhy: "ಏಕೆ",
    labelRegional: "ಎಲ್ಲಿ ಬೇರೆಯಾಗುತ್ತದೆ",
    labelWords: "ಹೇಳುವ ಮಾತು",
    labelElsewhere: "ಈ ತಾಣದ ಇತರೆಡೆ",
    labelGroup: "ಇದರ ಭಾಗ",

    read: "ಓದಿ",
    back: "ಎಲ್ಲ ಆಚರಣೆಗಳು",
    next: "ಮುಂದೆ",
    previous: "ಹಿಂದೆ",
  },

  hi: {
    title: "अनुष्ठान और पर्व",
    lede: "वास्तव में क्या किया जाता है — जन्म पर, सांध्यकाल में, चंद्रमा की ग्यारहवीं तिथि पर, और वर्ष में एक बार चांद्र क्रम में।",
    standing:
      "ये पृष्ठ अनुष्ठानों का वर्णन करते हैं; उन्हें सिखाते नहीं। क्या किया जाता है, कब, और वैसा क्यों किया जाना माना गया है — और जहाँ परिवारों और परंपराओं में मतभेद है, वह मतभेद निपटाया नहीं, छापा गया है। जो अनुष्ठान जानता है उसका स्थान यहाँ कुछ नहीं लेता, और कोई मंत्र निर्देश के रूप में नहीं दिया गया।",
    count: (rites, festivals) => `${rites} अनुष्ठान, और ${festivals} पर्व।`,

    arcTitle: "सोलह संस्कारों में एक जीवन",
    arcLede:
      "संस्कार जन्म से पहले से मृत्यु के बाद तक चलते हैं। आठ आज भी सामान्य हैं, और शेष आठ को भी यहाँ नाम दिया गया है — आधी चुपचाप छूटी हुई सोलह की सूची पूरी दिखती है, पूरी होती नहीं।",
    keptCommon: "आज भी सामान्य",
    keptRare: "दुर्लभ",
    keptLapsed: "अब नहीं होता",
    noPage: "अभी लिखा नहीं",

    yearTitle: "वर्ष",
    yearLede:
      "चांद्र वर्ष के क्रम में सोलह पर्व — प्रत्येक की तिथि उसी रूप में जिस रूप में परंपरा देती है, ग्रेगोरियन रूप में कभी नहीं।",
    yearLink: "पर्वों पर जाएँ",

    groupCount: (n) => `${n} अनुष्ठान`,

    labelWhen: "कब",
    labelObserved: "क्या किया जाता है",
    labelWhy: "क्यों",
    labelRegional: "कहाँ भिन्न है",
    labelWords: "जो कहा जाता है",
    labelElsewhere: "इस साइट पर अन्यत्र",
    labelGroup: "इसका अंग",

    read: "पढ़ें",
    back: "सभी अनुष्ठान",
    next: "आगे",
    previous: "पीछे",
  },
};

export function ritualStrings(locale: Locale): RitualStrings {
  return RITUAL_STRINGS[locale];
}
