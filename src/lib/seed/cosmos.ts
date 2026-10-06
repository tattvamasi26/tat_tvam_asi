import type { Locale } from "@/i18n/config";

// ─────────────────────────────────────────────────────────
//  Time and the cosmos.
//
//  The Purāṇas carry a scheme of time and space worked out in more
//  detail than almost anything else in the tradition, and the site
//  has had nowhere to put it. The numbers are famous, usually quoted
//  badly, and almost always quoted for the wrong reason.
//
//  **This is a cosmology, not a cosmogony in the modern sense, and
//  the section says so.** The figures are not claims about the age of
//  the universe and do not become more respectable by being compared
//  to one. Every number here is divisible by 432,000, which is the
//  surest sign that the scheme was built outwards from a ratio rather
//  than measured; a page that printed the kalpa beside the age of the
//  earth and invited the reader to be impressed would be doing the
//  tradition no favours and the reader none either.
//
//  **The texts disagree, and the disagreement is printed.** The small
//  units of the Viṣṇu Purāṇa and of the Bhāgavata do not reconcile.
//  Whether a yuga's length is counted in human or in divine years
//  changes every figure by a factor of 360, and both readings are in
//  circulation. The start of Kali in 3102 BCE is a later astronomical
//  back-calculation, not something the early texts give.
//
//  **The seven dvīpas are not continents.** Attempts to map them onto
//  real geography are modern, strained, and have to ignore that the
//  oceans between them are made of sugarcane juice, wine, ghee, curd
//  and milk.
//
//  Figures below are in human years unless a field says otherwise.
//  Sanskrit is stored in Devanagari and converted by the view.
// ─────────────────────────────────────────────────────────

export interface CosmosLink {
  href: string;
  label: Record<Locale, string>;
}

const L = (href: string, en: string, kn: string, hi: string): CosmosLink => ({
  href,
  label: { en, kn, hi },
});

// ── the ladder of time ──────────────────────────────────────

export interface TimeUnit {
  id: string;
  name: Record<Locale, string>;
  sanskrit: string;
  /** In seconds, for the scale. Approximate above a year. */
  seconds: number;
  /** How the texts define it, in their own terms. */
  defined: Record<Locale, string>;
}

/**
 * The chain Manu and the Viṣṇu Purāṇa give, which is internally
 * consistent and lands exactly on a day. The Bhāgavata gives a finer
 * one starting from a paramāṇu, and the two do not reconcile; that is
 * said on the page rather than resolved here.
 */
export const TIME_UNITS: TimeUnit[] = [
  {
    id: "nimesha",
    name: { en: "Nimeṣa", kn: "ನಿಮೇಷ", hi: "निमेष" },
    sanskrit: "निमेषः",
    // Not a measurement but a consequence: the chain is 18 × 30 × 30 ×
    // 30 nimesas to a day, so a nimesa is 86,400 / 486,000 seconds.
    // The first draft had 0.213 here, guessed at "about a fifth of a
    // second", and the arithmetic test caught it.
    seconds: 86400 / 486000,
    defined: {
      en: "A blink. The scale begins at something anybody can check against their own eye.",
      kn: "ಒಂದು ರೆಪ್ಪೆ ಮಿಟುಕು. ತನ್ನ ಕಣ್ಣಿನಿಂದಲೇ ಪರೀಕ್ಷಿಸಬಹುದಾದ ವಸ್ತುವಿನಿಂದ ಅಳತೆ ಆರಂಭವಾಗುತ್ತದೆ.",
      hi: "एक पलक। माप वहीं से आरंभ होती है जिसे कोई अपनी आँख से जाँच सके।",
    },
  },
  {
    id: "kashtha",
    name: { en: "Kāṣṭhā", kn: "ಕಾಷ್ಠಾ", hi: "काष्ठा" },
    sanskrit: "काष्ठा",
    seconds: 3.2,
    defined: {
      en: "Eighteen nimeṣas.",
      kn: "ಹದಿನೆಂಟು ನಿಮೇಷಗಳು.",
      hi: "अठारह निमेष।",
    },
  },
  {
    id: "kala",
    name: { en: "Kalā", kn: "ಕಲಾ", hi: "कला" },
    sanskrit: "कला",
    seconds: 96,
    defined: {
      en: "Thirty kāṣṭhās — about a minute and a half.",
      kn: "ಮೂವತ್ತು ಕಾಷ್ಠಾಗಳು — ಸುಮಾರು ಒಂದೂವರೆ ನಿಮಿಷ.",
      hi: "तीस काष्ठा — लगभग डेढ़ मिनट।",
    },
  },
  {
    id: "muhurta",
    name: { en: "Muhūrta", kn: "ಮುಹೂರ್ತ", hi: "मुहूर्त" },
    sanskrit: "मुहूर्तः",
    seconds: 2880,
    defined: {
      en: "Thirty kalās — forty-eight minutes, and the unit a pañcāṅga still works in.",
      kn: "ಮೂವತ್ತು ಕಲೆಗಳು — ನಲವತ್ತೆಂಟು ನಿಮಿಷ; ಪಂಚಾಂಗ ಇಂದಿಗೂ ಬಳಸುವ ಏಕಮಾನ.",
      hi: "तीस कला — अड़तालीस मिनट, और वही इकाई जिसमें पंचांग आज भी चलता है।",
    },
  },
  {
    id: "ahoratra",
    name: { en: "Ahorātra", kn: "ಅಹೋರಾತ್ರ", hi: "अहोरात्र" },
    sanskrit: "अहोरात्रम्",
    seconds: 86400,
    defined: {
      en: "Thirty muhūrtas — a day and a night together. The chain closes here exactly.",
      kn: "ಮೂವತ್ತು ಮುಹೂರ್ತಗಳು — ಹಗಲು ಮತ್ತು ರಾತ್ರಿ ಸೇರಿ. ಸರಪಳಿ ಇಲ್ಲಿ ನಿಖರವಾಗಿ ಮುಚ್ಚುತ್ತದೆ.",
      hi: "तीस मुहूर्त — दिन और रात मिलाकर। शृंखला यहीं ठीक-ठीक बंद होती है।",
    },
  },
  {
    id: "varsha",
    name: { en: "A year", kn: "ವರ್ಷ", hi: "वर्ष" },
    sanskrit: "वर्षम्",
    seconds: 31557600,
    defined: {
      en: "Three hundred and sixty days in the scheme's own reckoning.",
      kn: "ಈ ಯೋಜನೆಯ ಲೆಕ್ಕದಲ್ಲಿ ಮುನ್ನೂರ ಅರವತ್ತು ದಿನ.",
      hi: "इस व्यवस्था की गणना में तीन सौ साठ दिन।",
    },
  },
  {
    id: "kali",
    name: { en: "Kali yuga", kn: "ಕಲಿಯುಗ", hi: "कलियुग" },
    sanskrit: "कलियुगम्",
    seconds: 1.363e13,
    defined: {
      en: "432,000 years. Every other figure in the scheme is a multiple of this one.",
      kn: "೪,೩೨,೦೦೦ ವರ್ಷ. ಈ ಯೋಜನೆಯ ಉಳಿದೆಲ್ಲ ಅಂಕಿಯೂ ಇದರ ಗುಣಕ.",
      hi: "४,३२,००० वर्ष। इस व्यवस्था का हर दूसरा अंक इसी का गुणक है।",
    },
  },
  {
    id: "mahayuga",
    name: { en: "Mahāyuga", kn: "ಮಹಾಯುಗ", hi: "महायुग" },
    sanskrit: "महायुगम्",
    seconds: 1.363e14,
    defined: {
      en: "The four yugas together — 4,320,000 years.",
      kn: "ನಾಲ್ಕು ಯುಗಗಳು ಸೇರಿ — ೪೩,೨೦,೦೦೦ ವರ್ಷ.",
      hi: "चारों युग मिलाकर — ४३,२०,००० वर्ष।",
    },
  },
  {
    id: "manvantara",
    name: { en: "Manvantara", kn: "ಮನ್ವಂತರ", hi: "मन्वंतर" },
    sanskrit: "मन्वन्तरम्",
    seconds: 9.73e15,
    defined: {
      en: "Seventy-one mahāyugas and a joint — the reign of one Manu, 308,448,000 years.",
      kn: "ಎಪ್ಪತ್ತೊಂದು ಮಹಾಯುಗ ಮತ್ತು ಒಂದು ಸಂಧಿ — ಒಬ್ಬ ಮನುವಿನ ಕಾಲ, ೩೦,೮೪,೪೮,೦೦೦ ವರ್ಷ.",
      hi: "इकहत्तर महायुग और एक संधि — एक मनु का काल, ३०,८४,४८,००० वर्ष।",
    },
  },
  {
    id: "kalpa",
    name: { en: "Kalpa", kn: "ಕಲ್ಪ", hi: "कल्प" },
    sanskrit: "कल्पः",
    seconds: 1.363e17,
    defined: {
      en: "A thousand mahāyugas — 4.32 billion years, and one day of Brahmā.",
      kn: "ಸಾವಿರ ಮಹಾಯುಗ — ೪೩೨ ಕೋಟಿ ವರ್ಷ, ಮತ್ತು ಬ್ರಹ್ಮನ ಒಂದು ಹಗಲು.",
      hi: "एक हज़ार महायुग — ४३२ करोड़ वर्ष, और ब्रह्मा का एक दिन।",
    },
  },
  {
    id: "brahma-life",
    name: { en: "A life of Brahmā", kn: "ಬ್ರಹ್ಮನ ಆಯುಷ್ಯ", hi: "ब्रह्मा की आयु" },
    sanskrit: "ब्रह्मायुः",
    seconds: 9.81e21,
    defined: {
      en: "A hundred of his years — 311.04 trillion of ours, and still not the end of time.",
      kn: "ಅವನ ನೂರು ವರ್ಷ — ನಮ್ಮ ೩೧೧.೦೪ ಲಕ್ಷ ಕೋಟಿ, ಮತ್ತು ಅದೂ ಕಾಲದ ಕೊನೆಯಲ್ಲ.",
      hi: "उनके सौ वर्ष — हमारे ३११.०४ लाख करोड़, और वह भी काल का अंत नहीं।",
    },
  },
];

// ── the four yugas ──────────────────────────────────────────

export interface Yuga {
  id: string;
  name: Record<Locale, string>;
  sanskrit: string;
  /** In human years. */
  years: number;
  /** Its share of the mahāyuga, as the texts give it: 4, 3, 2, 1. */
  parts: number;
  /** What the texts say is true of it. */
  character: Record<Locale, string>;
}

export const YUGAS: Yuga[] = [
  {
    id: "krita",
    name: { en: "Kṛta, or Satya", kn: "ಕೃತ, ಅಥವಾ ಸತ್ಯ", hi: "कृत, या सत्य" },
    sanskrit: "कृतयुगम्",
    years: 1728000,
    parts: 4,
    character: {
      en: "Dharma stands on four legs. Nobody is taught anything because nothing has been forgotten; there is one Veda, no disease, and no ritual, because a rite is a repair and nothing is broken.",
      kn: "ಧರ್ಮ ನಾಲ್ಕು ಕಾಲಿನ ಮೇಲೆ ನಿಂತಿದೆ. ಯಾರಿಗೂ ಏನನ್ನೂ ಕಲಿಸಬೇಕಿಲ್ಲ, ಏಕೆಂದರೆ ಏನೂ ಮರೆತಿಲ್ಲ; ಒಂದೇ ವೇದ, ರೋಗವಿಲ್ಲ, ಕರ್ಮಕಾಂಡವಿಲ್ಲ — ಏಕೆಂದರೆ ಕರ್ಮವೆಂದರೆ ದುರಸ್ತಿ, ಮತ್ತು ಏನೂ ಮುರಿದಿಲ್ಲ.",
      hi: "धर्म चार पैरों पर खड़ा है। किसी को कुछ सिखाना नहीं पड़ता क्योंकि कुछ भूला ही नहीं; एक ही वेद, न रोग, न कर्मकांड — क्योंकि कर्म एक मरम्मत है, और कुछ टूटा ही नहीं।",
    },
  },
  {
    id: "treta",
    name: { en: "Tretā", kn: "ತ್ರೇತಾ", hi: "त्रेता" },
    sanskrit: "त्रेतायुगम्",
    years: 1296000,
    parts: 3,
    character: {
      en: "Dharma stands on three. Sacrifice appears, which is the tradition saying that ritual begins when something has already gone — the word tretā names the three fires.",
      kn: "ಧರ್ಮ ಮೂರು ಕಾಲಿನ ಮೇಲೆ. ಯಜ್ಞ ಕಾಣಿಸಿಕೊಳ್ಳುತ್ತದೆ — ಅಂದರೆ ಏನೋ ಈಗಾಗಲೇ ಹೋಗಿದೆ ಎಂದು ಪರಂಪರೆಯೇ ಹೇಳುತ್ತಿದೆ; ತ್ರೇತಾ ಎಂಬ ಪದ ಮೂರು ಅಗ್ನಿಗಳನ್ನು ಹೆಸರಿಸುತ್ತದೆ.",
      hi: "धर्म तीन पैरों पर। यज्ञ प्रकट होता है — अर्थात् परंपरा स्वयं कह रही है कि कुछ पहले ही जा चुका; त्रेता शब्द तीन अग्नियों का नाम है।",
    },
  },
  {
    id: "dvapara",
    name: { en: "Dvāpara", kn: "ದ್ವಾಪರ", hi: "द्वापर" },
    sanskrit: "द्वापरयुगम्",
    years: 864000,
    parts: 2,
    character: {
      en: "Dharma stands on two. The one Veda is divided into four because nobody can hold it whole any more, and the division is itself dated to this yuga.",
      kn: "ಧರ್ಮ ಎರಡು ಕಾಲಿನ ಮೇಲೆ. ಒಂದೇ ಇದ್ದ ವೇದ ನಾಲ್ಕಾಗಿ ವಿಭಜನೆಯಾಗುತ್ತದೆ — ಏಕೆಂದರೆ ಅದನ್ನು ಪೂರ್ಣವಾಗಿ ಹಿಡಿದಿಡಲು ಈಗ ಯಾರಿಗೂ ಆಗುವುದಿಲ್ಲ; ಆ ವಿಭಜನೆಯನ್ನೇ ಈ ಯುಗಕ್ಕೆ ಕಟ್ಟಲಾಗಿದೆ.",
      hi: "धर्म दो पैरों पर। एक वेद चार में बँटता है क्योंकि अब उसे पूरा धारण कोई नहीं कर सकता; और वह विभाजन स्वयं इसी युग का माना जाता है।",
    },
  },
  {
    id: "kali",
    name: { en: "Kali", kn: "ಕಲಿ", hi: "कलि" },
    sanskrit: "कलियुगम्",
    years: 432000,
    parts: 1,
    character: {
      en: "Dharma stands on one. The texts are bleak about it and then say something odd: that what took a thousand years of effort in the Kṛta can be had here by saying a name, because the age is so poor that the bar has been lowered.",
      kn: "ಧರ್ಮ ಒಂದೇ ಕಾಲಿನ ಮೇಲೆ. ಗ್ರಂಥಗಳು ಇದರ ಬಗ್ಗೆ ಕಠೋರವಾಗಿ ಹೇಳಿ, ನಂತರ ವಿಚಿತ್ರವಾದದ್ದೊಂದನ್ನು ಹೇಳುತ್ತವೆ: ಕೃತಯುಗದಲ್ಲಿ ಸಾವಿರ ವರ್ಷದ ಪ್ರಯತ್ನ ಬೇಡುತ್ತಿದ್ದದ್ದು ಇಲ್ಲಿ ಒಂದು ಹೆಸರು ಹೇಳುವುದರಿಂದ ಸಿಗುತ್ತದೆ — ಯುಗ ಅಷ್ಟು ಕೆಟ್ಟದ್ದಾದ್ದರಿಂದ ಮಟ್ಟವನ್ನೇ ಇಳಿಸಲಾಗಿದೆ.",
      hi: "धर्म एक पैर पर। ग्रंथ इसके विषय में कठोर हैं और फिर एक विचित्र बात कहते हैं: कृत में जो हज़ार वर्ष के प्रयत्न से मिलता था वह यहाँ एक नाम लेने से मिल जाता है — क्योंकि युग इतना हीन है कि मानदंड ही नीचे कर दिया गया।",
    },
  },
];

// ── the fourteen worlds ─────────────────────────────────────

export interface Loka {
  id: string;
  name: Record<Locale, string>;
  sanskrit: string;
  /** 7 down to 1 above, 0 is ours, -1 to -7 below. */
  level: number;
  gloss: Record<Locale, string>;
}

export const LOKAS: Loka[] = [
  { id: "satya", name: { en: "Satya", kn: "ಸತ್ಯ", hi: "सत्य" }, sanskrit: "सत्यलोकः", level: 6,
    gloss: { en: "Brahmā's own world; it ends when he does.", kn: "ಬ್ರಹ್ಮನ ಲೋಕ; ಅವನೊಡನೆಯೇ ಅದೂ ಮುಗಿಯುತ್ತದೆ.", hi: "ब्रह्मा का लोक; उन्हीं के साथ वह भी समाप्त होता है।" } },
  { id: "tapas", name: { en: "Tapas", kn: "ತಪಸ್", hi: "तपस्" }, sanskrit: "तपोलोकः", level: 5,
    gloss: { en: "Of the ascetics who survive a dissolution.", kn: "ಪ್ರಳಯವನ್ನು ಉಳಿದುಕೊಳ್ಳುವ ತಪಸ್ವಿಗಳದ್ದು.", hi: "उन तपस्वियों का जो प्रलय से बच रहते हैं।" } },
  { id: "jana", name: { en: "Jana", kn: "ಜನ", hi: "जन" }, sanskrit: "जनलोकः", level: 4,
    gloss: { en: "Of Brahmā's mind-born sons.", kn: "ಬ್ರಹ್ಮನ ಮಾನಸಪುತ್ರರದ್ದು.", hi: "ब्रह्मा के मानसपुत्रों का।" } },
  { id: "mahas", name: { en: "Mahas", kn: "ಮಹಸ್", hi: "महस्" }, sanskrit: "महर्लोकः", level: 3,
    gloss: { en: "Emptied at each night of Brahmā, not destroyed.", kn: "ಬ್ರಹ್ಮನ ಪ್ರತಿ ರಾತ್ರಿಗೆ ಖಾಲಿಯಾಗುತ್ತದೆ, ನಾಶವಾಗುವುದಿಲ್ಲ.", hi: "ब्रह्मा की हर रात्रि पर रिक्त होता है, नष्ट नहीं।" } },
  { id: "svar", name: { en: "Svar", kn: "ಸ್ವರ್", hi: "स्वर्" }, sanskrit: "स्वर्लोकः", level: 2,
    gloss: { en: "Heaven — a long stay, not a permanent one.", kn: "ಸ್ವರ್ಗ — ದೀರ್ಘ ವಾಸ, ಶಾಶ್ವತವಲ್ಲ.", hi: "स्वर्ग — लंबा निवास, स्थायी नहीं।" } },
  { id: "bhuvas", name: { en: "Bhuvas", kn: "ಭುವಸ್", hi: "भुवस्" }, sanskrit: "भुवर्लोकः", level: 1,
    gloss: { en: "The space between earth and sun.", kn: "ಭೂಮಿ ಮತ್ತು ಸೂರ್ಯನ ನಡುವಿನ ಅವಕಾಶ.", hi: "पृथ्वी और सूर्य के बीच का अवकाश।" } },
  { id: "bhu", name: { en: "Bhū", kn: "ಭೂ", hi: "भू" }, sanskrit: "भूलोकः", level: 0,
    gloss: { en: "Here. The only one of the fourteen where karma can be made.", kn: "ಇಲ್ಲಿ. ಹದಿನಾಲ್ಕರಲ್ಲಿ ಕರ್ಮ ಮಾಡಬಹುದಾದ ಏಕೈಕ ಲೋಕ.", hi: "यहाँ। चौदह में एकमात्र लोक जहाँ कर्म किया जा सकता है।" } },
  { id: "atala", name: { en: "Atala", kn: "ಅತಲ", hi: "अतल" }, sanskrit: "अतलम्", level: -1,
    gloss: { en: "The first below.", kn: "ಕೆಳಗಿನ ಮೊದಲನೆಯದು.", hi: "नीचे का पहला।" } },
  { id: "vitala", name: { en: "Vitala", kn: "ವಿತಲ", hi: "वितल" }, sanskrit: "वितलम्", level: -2,
    gloss: { en: "The second.", kn: "ಎರಡನೆಯದು.", hi: "दूसरा।" } },
  { id: "sutala", name: { en: "Sutala", kn: "ಸುತಲ", hi: "सुतल" }, sanskrit: "सुतलम्", level: -3,
    gloss: { en: "Bali's, given to him after the three steps.", kn: "ಬಲಿಯದ್ದು — ಮೂರು ಹೆಜ್ಜೆಗಳ ನಂತರ ಅವನಿಗೆ ಕೊಟ್ಟದ್ದು.", hi: "बलि का, तीन पग के बाद उसे दिया गया।" } },
  { id: "talatala", name: { en: "Talātala", kn: "ತಲಾತಲ", hi: "तलातल" }, sanskrit: "तलातलम्", level: -4,
    gloss: { en: "The fourth.", kn: "ನಾಲ್ಕನೆಯದು.", hi: "चौथा।" } },
  { id: "mahatala", name: { en: "Mahātala", kn: "ಮಹಾತಲ", hi: "महातल" }, sanskrit: "महातलम्", level: -5,
    gloss: { en: "The fifth.", kn: "ಐದನೆಯದು.", hi: "पाँचवाँ।" } },
  { id: "rasatala", name: { en: "Rasātala", kn: "ರಸಾತಲ", hi: "रसातल" }, sanskrit: "रसातलम्", level: -6,
    gloss: { en: "The sixth.", kn: "ಆರನೆಯದು.", hi: "छठा।" } },
  { id: "patala", name: { en: "Pātāla", kn: "ಪಾತಾಳ", hi: "पाताल" }, sanskrit: "पातालम्", level: -7,
    gloss: { en: "The lowest, and described as splendid rather than grim.", kn: "ಅತಿ ಕೆಳಗಿನದು, ಮತ್ತು ಭೀಕರವೆಂದಲ್ಲ, ವೈಭವಯುತವೆಂದು ವರ್ಣಿತ.", hi: "सबसे नीचे का, और भयावह नहीं, वैभवशाली वर्णित।" } },
];

// ── the seven islands and seven seas ────────────────────────

export interface Dvipa {
  id: string;
  name: Record<Locale, string>;
  sanskrit: string;
  /** 1 at the centre, 7 outermost. */
  ring: number;
  /** What the sea beyond it is made of. */
  sea: Record<Locale, string>;
  note?: Record<Locale, string>;
}

export const DVIPAS: Dvipa[] = [
  { id: "jambu", name: { en: "Jambū", kn: "ಜಂಬೂ", hi: "जंबू" }, sanskrit: "जम्बूद्वीपः", ring: 1,
    sea: { en: "Salt", kn: "ಉಪ್ಪು", hi: "लवण" },
    note: { en: "Meru stands at its centre, and Bhārata is its southern part — the only ground in the scheme where karma can be made.", kn: "ಇದರ ಮಧ್ಯದಲ್ಲಿ ಮೇರು, ಮತ್ತು ಭಾರತ ಇದರ ದಕ್ಷಿಣ ಭಾಗ — ಈ ಯೋಜನೆಯಲ್ಲಿ ಕರ್ಮ ಮಾಡಬಹುದಾದ ಏಕೈಕ ನೆಲ.", hi: "इसके मध्य मेरु, और भारत इसका दक्षिण भाग — इस व्यवस्था में एकमात्र भूमि जहाँ कर्म किया जा सकता है।" } },
  { id: "plaksha", name: { en: "Plakṣa", kn: "ಪ್ಲಕ್ಷ", hi: "प्लक्ष" }, sanskrit: "प्लक्षद्वीपः", ring: 2,
    sea: { en: "Sugarcane juice", kn: "ಕಬ್ಬಿನ ರಸ", hi: "इक्षुरस" } },
  { id: "shalmala", name: { en: "Śālmala", kn: "ಶಾಲ್ಮಲ", hi: "शाल्मल" }, sanskrit: "शाल्मलद्वीपः", ring: 3,
    sea: { en: "Wine", kn: "ಸುರೆ", hi: "सुरा" } },
  { id: "kusha", name: { en: "Kuśa", kn: "ಕುಶ", hi: "कुश" }, sanskrit: "कुशद्वीपः", ring: 4,
    sea: { en: "Ghee", kn: "ತುಪ್ಪ", hi: "घृत" } },
  { id: "krauncha", name: { en: "Krauñca", kn: "ಕ್ರೌಂಚ", hi: "क्रौंच" }, sanskrit: "क्रौञ्चद्वीपः", ring: 5,
    sea: { en: "Curd", kn: "ಮೊಸರು", hi: "दधि" } },
  { id: "shaka", name: { en: "Śāka", kn: "ಶಾಕ", hi: "शाक" }, sanskrit: "शाकद्वीपः", ring: 6,
    sea: { en: "Milk", kn: "ಹಾಲು", hi: "क्षीर" } },
  { id: "pushkara", name: { en: "Puṣkara", kn: "ಪುಷ್ಕರ", hi: "पुष्कर" }, sanskrit: "पुष्करद्वीपः", ring: 7,
    sea: { en: "Fresh water", kn: "ಸಿಹಿ ನೀರು", hi: "स्वादु जल" } },
];

// ── the four dissolutions ───────────────────────────────────

export interface Pralaya {
  id: string;
  name: Record<Locale, string>;
  sanskrit: string;
  when: Record<Locale, string>;
  what: Record<Locale, string>;
}

export const PRALAYAS: Pralaya[] = [
  {
    id: "nitya",
    name: { en: "Nitya", kn: "ನಿತ್ಯ", hi: "नित्य" },
    sanskrit: "नित्यप्रलयः",
    when: { en: "Every moment, and every night in sleep.", kn: "ಪ್ರತಿ ಕ್ಷಣ, ಮತ್ತು ಪ್ರತಿ ರಾತ್ರಿ ನಿದ್ರೆಯಲ್ಲಿ.", hi: "हर क्षण, और हर रात्रि निद्रा में।" },
    what: { en: "The continual ending of things. Counting this as a dissolution at all is the scheme's most interesting move: it puts the death of a universe and the end of a day on one list.", kn: "ವಸ್ತುಗಳ ನಿರಂತರ ಅಂತ್ಯ. ಇದನ್ನೂ ಪ್ರಳಯವೆಂದು ಎಣಿಸುವುದೇ ಈ ಯೋಜನೆಯ ಅತಿ ಕುತೂಹಲಕರ ನಡೆ: ಒಂದು ವಿಶ್ವದ ಸಾವನ್ನೂ ಒಂದು ದಿನದ ಕೊನೆಯನ್ನೂ ಒಂದೇ ಪಟ್ಟಿಯಲ್ಲಿ ಇಡುತ್ತದೆ.", hi: "वस्तुओं का निरंतर अंत। इसे भी प्रलय गिनना ही इस व्यवस्था की सबसे रोचक चाल है: यह एक विश्व की मृत्यु और एक दिन के अंत को एक ही सूची में रखती है।" },
  },
  {
    id: "naimittika",
    name: { en: "Naimittika", kn: "ನೈಮಿತ್ತಿಕ", hi: "नैमित्तिक" },
    sanskrit: "नैमित्तिकप्रलयः",
    when: { en: "At the end of a kalpa — one night of Brahmā.", kn: "ಕಲ್ಪದ ಕೊನೆಯಲ್ಲಿ — ಬ್ರಹ್ಮನ ಒಂದು ರಾತ್ರಿ.", hi: "कल्प के अंत में — ब्रह्मा की एक रात्रि।" },
    what: { en: "The three lower worlds burn and are flooded; the higher ones are emptied but not destroyed, and what was there waits out the night.", kn: "ಕೆಳಗಿನ ಮೂರು ಲೋಕಗಳು ಸುಟ್ಟು ಮುಳುಗುತ್ತವೆ; ಮೇಲಿನವು ಖಾಲಿಯಾಗುತ್ತವೆ, ನಾಶವಾಗುವುದಿಲ್ಲ, ಮತ್ತು ಅಲ್ಲಿದ್ದವು ರಾತ್ರಿ ಕಳೆಯುವವರೆಗೆ ಕಾಯುತ್ತವೆ.", hi: "नीचे के तीन लोक जलते और डूबते हैं; ऊपर के रिक्त होते हैं, नष्ट नहीं, और जो वहाँ था वह रात बीतने की प्रतीक्षा करता है।" },
  },
  {
    id: "prakritika",
    name: { en: "Prākṛtika", kn: "ಪ್ರಾಕೃತಿಕ", hi: "प्राकृतिक" },
    sanskrit: "प्राकृतिकप्रलयः",
    when: { en: "At the end of Brahmā's hundred years.", kn: "ಬ್ರಹ್ಮನ ನೂರು ವರ್ಷಗಳ ಕೊನೆಯಲ್ಲಿ.", hi: "ब्रह्मा के सौ वर्षों के अंत में।" },
    what: { en: "Everything made goes back into what it was made of, element by element, until only unmanifest nature is left. Then another Brahmā.", kn: "ಮಾಡಲ್ಪಟ್ಟ ಎಲ್ಲವೂ ತಾನು ಯಾವುದರಿಂದ ಆಯಿತೋ ಅದಕ್ಕೆ ಮರಳುತ್ತದೆ, ಭೂತದಿಂದ ಭೂತಕ್ಕೆ — ಕೊನೆಗೆ ಅವ್ಯಕ್ತ ಪ್ರಕೃತಿ ಮಾತ್ರ ಉಳಿಯುವವರೆಗೆ. ಆಮೇಲೆ ಇನ್ನೊಬ್ಬ ಬ್ರಹ್ಮ.", hi: "रचा हुआ सब कुछ जिससे बना था उसी में लौटता है, भूत दर भूत — जब तक केवल अव्यक्त प्रकृति न बचे। फिर दूसरा ब्रह्मा।" },
  },
  {
    id: "atyantika",
    name: { en: "Ātyantika", kn: "ಆತ್ಯಂತಿಕ", hi: "आत्यंतिक" },
    sanskrit: "आत्यन्तिकप्रलयः",
    when: { en: "For one person, at any time.", kn: "ಒಬ್ಬ ವ್ಯಕ್ತಿಗೆ, ಯಾವಾಗ ಬೇಕಾದರೂ.", hi: "एक व्यक्ति के लिए, किसी भी समय।" },
    what: { en: "Liberation, counted as a dissolution because for the one it happens to the whole machinery stops. It is the only one of the four that anybody can bring about.", kn: "ಮೋಕ್ಷ — ಪ್ರಳಯವೆಂದು ಎಣಿಸಲಾಗಿದೆ, ಏಕೆಂದರೆ ಯಾರಿಗೆ ಅದು ಸಂಭವಿಸುತ್ತದೋ ಅವರಿಗೆ ಇಡೀ ಯಂತ್ರ ನಿಂತುಹೋಗುತ್ತದೆ. ನಾಲ್ಕರಲ್ಲಿ ಯಾರಾದರೂ ತರಬಹುದಾದ ಏಕೈಕ ಪ್ರಳಯ ಇದೇ.", hi: "मोक्ष — प्रलय गिना गया, क्योंकि जिसे वह होता है उसके लिए पूरी मशीन रुक जाती है। चारों में यही एक है जिसे कोई ला सकता है।" },
  },
];

/** Where we are said to be, as the Purāṇas reckon it. */
export const NOW = {
  brahmaYear: 51,
  manvantara: 7,
  manu: { en: "Vaivasvata", kn: "ವೈವಸ್ವತ", hi: "वैवस्वत" },
  mahayuga: 28,
  yuga: "kali",
  /** The usual back-calculated start of Kali. Not given by the early texts. */
  kaliStartBCE: 3102,
};

export function yugaById(id: string): Yuga | undefined {
  return YUGAS.find((y) => y.id === id);
}

export function mahayugaYears(): number {
  return YUGAS.reduce((n, y) => n + y.years, 0);
}

export const COSMOS_LINKS = { L };
