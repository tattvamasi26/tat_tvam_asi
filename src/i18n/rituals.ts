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

  /** The three lenses the section is entered through. */
  lensYear: string;
  lensYearLede: string;
  lensYearCaption: string;
  wheelCentreTop: string;
  wheelCentreBottom: string;
  timesAYear: (n: string) => string;
  monthsHeading: string;
  noFestivals: string;

  lensDay: string;
  lensDayLede: string;
  lensDayCaption: string;
  dawn: string;
  noon: string;
  dusk: string;

  lensLife: string;
  lensLifeLede: string;
  lensLifeCaption: string;
  beforeBirth: string;
  years: string;
  ageNote: string;

  lensOccasion: string;
  lensOccasionLede: string;

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
  /** The bridge: which layer of the tradition lays a rite down. */
  labelPrescribed: string;
  /** Shown on /shastras, beside a branch that lays rites down. */
  doneBecause: (n: string) => string;

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

    lensYear: "The year",
    lensYearLede:
      "Sixteen festivals and the observances that come round inside them, on the ring the lunar year actually is. The months are shaded by how much falls in each; Āṣāḍha is nearly empty and Āśvina is crowded.",
    lensYearCaption:
      "The twelve lunar months from Chaitra, clockwise. Dots are festivals at their tithi; the inner ticks are the observances that repeat; the arcs are the stretches kept as a whole.",
    wheelCentreTop: "Chaitra",
    wheelCentreBottom: "to Phālguna",
    timesAYear: (n) => `${n} times a year`,
    monthsHeading: "Month by month",
    noFestivals: "No festival falls in this month.",

    lensDay: "The day",
    lensDayLede:
      "What is done daily, at the hours it is done. Nearly all of it falls at the two joins — which is what saṃdhi means, and why the middle of the day is empty.",
    lensDayCaption:
      "From four in the morning to ten at night. The shaded bands are the joins at dawn and dusk; the real ones move through the year with the sun.",
    dawn: "Dawn",
    noon: "Midday",
    dusk: "Dusk",

    lensLife: "A life",
    lensLifeLede:
      "The sixteen rites of passage at the ages they fall at. Seven land inside the first three years; fifty years then pass with nothing on them.",
    lensLifeCaption:
      "Conception to the last rite, drawn to scale. The axis is broken once: three of the sixteen fall before birth and have a segment of their own.",
    beforeBirth: "Before birth",
    years: "Years",
    ageNote:
      "The ages are the ones the Gṛhya Sūtras give, and those texts disagree with each other — most of all about the upanayana, where it depends on the varṇa and on whether you count from conception. They are here to place a mark, not to be quoted.",

    lensOccasion: "When the occasion comes",
    lensOccasionLede:
      "Four rites that sit on no calendar. A śrāddha is annual, but on the tithi somebody died — which is a different calendar in every house.",

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
    labelPrescribed: "Where it is laid down",
    doneBecause: (n) => `${n} rites come from this branch`,

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

    lensYear: "ವರ್ಷ",
    lensYearLede:
      "ಹದಿನಾರು ಹಬ್ಬಗಳು ಮತ್ತು ಅವುಗಳ ನಡುವೆ ಮರಳಿ ಮರಳಿ ಬರುವ ಆಚರಣೆಗಳು — ಚಾಂದ್ರಮಾನ ವರ್ಷ ನಿಜವಾಗಿ ಇರುವ ಚಕ್ರದ ಮೇಲೆ. ಯಾವ ತಿಂಗಳಲ್ಲಿ ಎಷ್ಟು ಬೀಳುತ್ತದೋ ಅಷ್ಟು ಗಾಢ; ಆಷಾಢ ಬಹುತೇಕ ಖಾಲಿ, ಆಶ್ವಯುಜ ಕಿಕ್ಕಿರಿದಿದೆ.",
    lensYearCaption:
      "ಚೈತ್ರದಿಂದ ಆರಂಭಿಸಿ ಪ್ರದಕ್ಷಿಣ ದಿಕ್ಕಿನಲ್ಲಿ ಹನ್ನೆರಡು ಚಾಂದ್ರಮಾಸಗಳು. ಚುಕ್ಕಿಗಳು ತಿಥಿಯ ಮೇಲಿನ ಹಬ್ಬಗಳು; ಒಳಗಿನ ಗೆರೆಗಳು ಪುನರಾವರ್ತಿತ ಆಚರಣೆಗಳು; ಕಮಾನುಗಳು ಪೂರ್ಣವಾಗಿ ಆಚರಿಸುವ ಅವಧಿಗಳು.",
    wheelCentreTop: "ಚೈತ್ರ",
    wheelCentreBottom: "ಫಾಲ್ಗುಣದವರೆಗೆ",
    timesAYear: (n) => `ವರ್ಷಕ್ಕೆ ${n} ಬಾರಿ`,
    monthsHeading: "ತಿಂಗಳವಾರು",
    noFestivals: "ಈ ತಿಂಗಳಲ್ಲಿ ಯಾವ ಹಬ್ಬವೂ ಬರುವುದಿಲ್ಲ.",

    lensDay: "ದಿನ",
    lensDayLede:
      "ದಿನನಿತ್ಯ ಏನು ಮಾಡುತ್ತಾರೆ, ಯಾವ ಹೊತ್ತಿನಲ್ಲಿ. ಬಹುತೇಕ ಎಲ್ಲವೂ ಎರಡು ಸಂಧಿಗಳಲ್ಲೇ ಬೀಳುತ್ತದೆ — ಸಂಧಿ ಎಂದರೆ ಅದೇ, ಮತ್ತು ಮಧ್ಯಾಹ್ನ ಖಾಲಿಯಾಗಿರುವುದೂ ಅದಕ್ಕೇ.",
    lensDayCaption:
      "ಬೆಳಿಗ್ಗೆ ನಾಲ್ಕರಿಂದ ರಾತ್ರಿ ಹತ್ತರವರೆಗೆ. ಗಾಢವಾದ ಪಟ್ಟಿಗಳು ಮುಂಜಾನೆ ಮತ್ತು ಸಂಜೆಯ ಸಂಧಿಗಳು; ನಿಜವಾದವು ಸೂರ್ಯನೊಂದಿಗೆ ವರ್ಷವಿಡೀ ಸರಿಯುತ್ತವೆ.",
    dawn: "ಮುಂಜಾನೆ",
    noon: "ಮಧ್ಯಾಹ್ನ",
    dusk: "ಸಂಜೆ",

    lensLife: "ಒಂದು ಬದುಕು",
    lensLifeLede:
      "ಹದಿನಾರು ಸಂಸ್ಕಾರಗಳು, ಅವು ಬೀಳುವ ವಯಸ್ಸಿನಲ್ಲಿ. ಏಳು ಮೊದಲ ಮೂರು ವರ್ಷಗಳಲ್ಲೇ ಬರುತ್ತವೆ; ಆಮೇಲೆ ಐವತ್ತು ವರ್ಷ ಏನೂ ಇಲ್ಲದೆ ಕಳೆಯುತ್ತವೆ.",
    lensLifeCaption:
      "ಗರ್ಭಧಾರಣೆಯಿಂದ ಕೊನೆಯ ಸಂಸ್ಕಾರದವರೆಗೆ, ಪ್ರಮಾಣಬದ್ಧವಾಗಿ. ಅಕ್ಷ ಒಂದೆಡೆ ತುಂಡಾಗಿದೆ: ಹದಿನಾರರಲ್ಲಿ ಮೂರು ಹುಟ್ಟುವ ಮೊದಲೇ ಬರುವುದರಿಂದ ಅವಕ್ಕೆ ತಮ್ಮದೇ ಭಾಗ.",
    beforeBirth: "ಹುಟ್ಟುವ ಮೊದಲು",
    years: "ವರ್ಷಗಳು",
    ageNote:
      "ಈ ವಯಸ್ಸುಗಳು ಗೃಹ್ಯ ಸೂತ್ರಗಳು ಕೊಡುವಂಥವು, ಮತ್ತು ಆ ಗ್ರಂಥಗಳು ಪರಸ್ಪರ ಒಪ್ಪುವುದಿಲ್ಲ — ಮುಖ್ಯವಾಗಿ ಉಪನಯನದ ಬಗ್ಗೆ, ಅಲ್ಲಿ ಅದು ವರ್ಣವನ್ನೂ ಗರ್ಭದಿಂದ ಎಣಿಸುತ್ತೀರೋ ಇಲ್ಲವೋ ಎಂಬುದನ್ನೂ ಅವಲಂಬಿಸಿದೆ. ಇವು ಒಂದು ಗುರುತು ಇಡಲು ಇವೆ, ಉಲ್ಲೇಖಿಸಲು ಅಲ್ಲ.",

    lensOccasion: "ಸಂದರ್ಭ ಬಂದಾಗ",
    lensOccasionLede:
      "ಯಾವ ಪಂಚಾಂಗದಲ್ಲೂ ಬರದ ನಾಲ್ಕು ಕರ್ಮಗಳು. ಶ್ರಾದ್ಧ ವಾರ್ಷಿಕವೇ, ಆದರೆ ಯಾರೋ ಸತ್ತ ತಿಥಿಯಂದು — ಅದು ಪ್ರತಿ ಮನೆಗೂ ಬೇರೆ ಪಂಚಾಂಗ.",

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
    labelPrescribed: "ಎಲ್ಲಿ ವಿಧಿಸಲಾಗಿದೆ",
    doneBecause: (n) => `ಈ ಶಾಖೆಯಿಂದ ${n} ಆಚರಣೆಗಳು ಬರುತ್ತವೆ`,

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

    lensYear: "वर्ष",
    lensYearLede:
      "सोलह पर्व और उनके बीच बार-बार लौटने वाले आचरण — उसी चक्र पर, जो चांद्र वर्ष वास्तव में है। जिस मास में जितना पड़ता है वह उतना गाढ़ा; आषाढ़ लगभग खाली है और आश्विन ठसाठस।",
    lensYearCaption:
      "चैत्र से आरंभ कर दक्षिणावर्त बारह चांद्र मास। बिंदु तिथि पर पड़ते पर्व हैं; भीतर की रेखाएँ बार-बार लौटने वाले आचरण; चाप वे अवधियाँ जो पूरी निभाई जाती हैं।",
    wheelCentreTop: "चैत्र",
    wheelCentreBottom: "से फाल्गुन",
    timesAYear: (n) => `वर्ष में ${n} बार`,
    monthsHeading: "मास दर मास",
    noFestivals: "इस मास में कोई पर्व नहीं पड़ता।",

    lensDay: "दिन",
    lensDayLede:
      "प्रतिदिन क्या किया जाता है, और किस घड़ी। लगभग सब कुछ दो संधियों पर ही पड़ता है — संधि का अर्थ यही है, और मध्याह्न के खाली होने का कारण भी।",
    lensDayCaption:
      "प्रातः चार से रात्रि दस तक। गाढ़ी पट्टियाँ भोर और सांझ की संधियाँ हैं; वास्तविक संधियाँ वर्ष भर सूर्य के साथ खिसकती रहती हैं।",
    dawn: "भोर",
    noon: "मध्याह्न",
    dusk: "सांझ",

    lensLife: "एक जीवन",
    lensLifeLede:
      "सोलह संस्कार, उन्हीं आयुओं पर जहाँ वे पड़ते हैं। सात पहले तीन वर्षों में ही आ जाते हैं; फिर पचास वर्ष बिना किसी चिह्न के बीतते हैं।",
    lensLifeCaption:
      "गर्भाधान से अंतिम संस्कार तक, अनुपात में। अक्ष एक जगह टूटा है: सोलह में तीन जन्म से पहले पड़ते हैं, इसलिए उनका अपना खंड है।",
    beforeBirth: "जन्म से पूर्व",
    years: "वर्ष",
    ageNote:
      "ये आयु गृह्य सूत्रों की दी हुई हैं, और वे ग्रंथ आपस में असहमत हैं — सबसे अधिक उपनयन पर, जहाँ यह वर्ण पर और इस पर निर्भर करता है कि गर्भ से गिना जाए या नहीं। ये एक चिह्न रखने के लिए हैं, उद्धृत करने के लिए नहीं।",

    lensOccasion: "जब अवसर आए",
    lensOccasionLede:
      "चार कर्म जो किसी पंचांग पर नहीं बैठते। श्राद्ध वार्षिक है, पर उसी तिथि को जिस दिन कोई गया — और वह हर घर का अलग पंचांग है।",

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
    labelPrescribed: "कहाँ विहित है",
    doneBecause: (n) => `इस शाखा से ${n} अनुष्ठान आते हैं`,

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
