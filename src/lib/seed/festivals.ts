import type { Locale } from "@/i18n/config";

// ─────────────────────────────────────────────────────────
//  The festivals, and what they are for.
//
//  **A date here is a lunar date, never a Gregorian one.** Gaṇeśa
//  Chaturthī is not "August or September": it is śukla chaturthī of
//  Bhādrapada, and it lands on a different Gregorian date every year.
//  The stutis section already made this decision for its Gaṇeśa
//  Chaturthī band; this section follows it. Printing a year's date
//  would be wrong within twelve months and wrong for half the readers
//  immediately.
//
//  **Two reckonings, and the site says which.** Most festivals are
//  lunar. A few — Makara Saṅkrānti above all — are solar, fixed to the
//  sun entering a rāśi, which is why Saṅkrānti alone falls on nearly
//  the same Gregorian day every year. Calling them all "lunar" would
//  be tidy and false.
//
//  **The month depends on where you are.** A lunar month ends at the
//  new moon in the south (amānta) and at the full moon in the north
//  (pūrṇimānta), so the same night is Māgha kṛṣṇa chaturdaśī in
//  Karnataka and Phālguna kṛṣṇa chaturdaśī in Delhi. Same night, two
//  month names. Where that applies, `alsoCalled` carries the northern
//  name, because a reader in either place should find what they know.
//
//  Ordering runs from Chaitra, which is where the lunar year begins.
// ─────────────────────────────────────────────────────────

export type Paksha = "shukla" | "krishna";
export type Reckoning = "lunar" | "solar";

/** The twelve lunar months, in order from the start of the year. */
export const LUNAR_MONTHS: Record<string, Record<Locale, string>> = {
  chaitra: { en: "Chaitra", kn: "ಚೈತ್ರ", hi: "चैत्र" },
  vaishakha: { en: "Vaiśākha", kn: "ವೈಶಾಖ", hi: "वैशाख" },
  jyeshtha: { en: "Jyeṣṭha", kn: "ಜ್ಯೇಷ್ಠ", hi: "ज्येष्ठ" },
  ashadha: { en: "Āṣāḍha", kn: "ಆಷಾಢ", hi: "आषाढ" },
  shravana: { en: "Śrāvaṇa", kn: "ಶ್ರಾವಣ", hi: "श्रावण" },
  bhadrapada: { en: "Bhādrapada", kn: "ಭಾದ್ರಪದ", hi: "भाद्रपद" },
  ashvina: { en: "Āśvina", kn: "ಆಶ್ವಯುಜ", hi: "आश्विन" },
  kartika: { en: "Kārtika", kn: "ಕಾರ್ತಿಕ", hi: "कार्तिक" },
  margashirsha: { en: "Mārgaśīrṣa", kn: "ಮಾರ್ಗಶಿರ", hi: "मार्गशीर्ष" },
  pausha: { en: "Pauṣa", kn: "ಪುಷ್ಯ", hi: "पौष" },
  magha: { en: "Māgha", kn: "ಮಾಘ", hi: "माघ" },
  phalguna: { en: "Phālguna", kn: "ಫಾಲ್ಗುಣ", hi: "फाल्गुन" },
};

export const PAKSHAS: Record<Paksha, Record<Locale, string>> = {
  shukla: { en: "śukla pakṣa", kn: "ಶುಕ್ಲ ಪಕ್ಷ", hi: "शुक्ल पक्ष" },
  krishna: { en: "kṛṣṇa pakṣa", kn: "ಕೃಷ್ಣ ಪಕ್ಷ", hi: "कृष्ण पक्ष" },
};

/** The tithis a festival is likely to fall on. */
export const TITHIS: Record<string, Record<Locale, string>> = {
  pratipada: { en: "pratipadā", kn: "ಪಾಡ್ಯ", hi: "प्रतिपदा" },
  tritiya: { en: "tṛtīyā", kn: "ತದಿಗೆ", hi: "तृतीया" },
  chaturthi: { en: "chaturthī", kn: "ಚೌತಿ", hi: "चतुर्थी" },
  panchami: { en: "pañcamī", kn: "ಪಂಚಮಿ", hi: "पंचमी" },
  saptami: { en: "saptamī", kn: "ಸಪ್ತಮಿ", hi: "सप्तमी" },
  ashtami: { en: "aṣṭamī", kn: "ಅಷ್ಟಮಿ", hi: "अष्टमी" },
  navami: { en: "navamī", kn: "ನವಮಿ", hi: "नवमी" },
  dashami: { en: "daśamī", kn: "ದಶಮಿ", hi: "दशमी" },
  ekadashi: { en: "ekādaśī", kn: "ಏಕಾದಶಿ", hi: "एकादशी" },
  dvadashi: { en: "dvādaśī", kn: "ದ್ವಾದಶಿ", hi: "द्वादशी" },
  chaturdashi: { en: "chaturdaśī", kn: "ಚತುರ್ದಶಿ", hi: "चतुर्दशी" },
  purnima: { en: "pūrṇimā", kn: "ಹುಣ್ಣಿಮೆ", hi: "पूर्णिमा" },
  amavasya: { en: "amāvāsyā", kn: "ಅಮಾವಾಸ್ಯೆ", hi: "अमावस्या" },
};

export interface FestivalLink {
  href: string;
  label: Record<Locale, string>;
}

export interface Festival {
  slug: string;
  name: Record<Locale, string>;
  /** In Devanagari, converted by the view. */
  sanskrit: string;
  reckoning: Reckoning;
  /** Lunar festivals only. */
  month?: string;
  paksha?: Paksha;
  tithi?: string;
  /** For a festival spanning days, or one fixed another way. */
  whenNote?: Record<Locale, string>;
  /** The northern month name, where the two reckonings disagree. */
  alsoCalled?: Record<Locale, string>;
  /** One line: what this day is. */
  lede: Record<Locale, string>;
  /** What is actually done. */
  observed: Record<Locale, string>;
  /** Why — the story, or the meaning. */
  significance: Record<Locale, string>;
  /** Where it differs from place to place. */
  regional?: Record<Locale, string>;
  /** Into the sections that already hold the songs, stotras, temples. */
  links?: FestivalLink[];
}

const L = (href: string, en: string, kn: string, hi: string): FestivalLink => ({
  href,
  label: { en, kn, hi },
});

export const FESTIVALS: Festival[] = [
  {
    slug: "ugadi",
    name: { en: "Ugādi", kn: "ಯುಗಾದಿ", hi: "उगादि" },
    sanskrit: "युगादिः",
    reckoning: "lunar",
    month: "chaitra",
    paksha: "shukla",
    tithi: "pratipada",
    lede: {
      en: "The first day of the lunar year in Karnataka, Andhra and Telangana.",
      kn: "ಕರ್ನಾಟಕ, ಆಂಧ್ರ ಮತ್ತು ತೆಲಂಗಾಣದಲ್ಲಿ ಚಾಂದ್ರಮಾನ ವರ್ಷದ ಮೊದಲ ದಿನ.",
      hi: "कर्नाटक, आंध्र और तेलंगाना में चांद्र वर्ष का पहला दिन।",
    },
    observed: {
      en: "The house is washed and hung with mango leaves. The year's pañcāṅga is read aloud. And bevu-bella is eaten — neem and jaggery together, bitter with sweet.",
      kn: "ಮನೆ ತೊಳೆದು ಮಾವಿನ ತೋರಣ ಕಟ್ಟುತ್ತಾರೆ. ವರ್ಷದ ಪಂಚಾಂಗವನ್ನು ಓದಿ ಹೇಳುತ್ತಾರೆ. ಮತ್ತು ಬೇವು-ಬೆಲ್ಲ ತಿನ್ನುತ್ತಾರೆ — ಕಹಿ ಮತ್ತು ಸಿಹಿ ಒಟ್ಟಿಗೆ.",
      hi: "घर धोकर आम के पत्तों का तोरण बाँधा जाता है। वर्ष का पंचांग पढ़ा जाता है। और नीम-गुड़ खाया जाता है — कड़वा और मीठा साथ।",
    },
    significance: {
      en: "The neem and jaggery are the whole teaching of the day, and it is not a cheerful one: the year will bring both, they are eaten in one mouthful, and you are asked to accept that before it starts.",
      kn: "ಬೇವು-ಬೆಲ್ಲವೇ ಆ ದಿನದ ಪೂರ್ಣ ಉಪದೇಶ, ಮತ್ತು ಅದು ಸಂತೋಷದ್ದಲ್ಲ: ವರ್ಷ ಎರಡನ್ನೂ ತರುತ್ತದೆ, ಎರಡನ್ನೂ ಒಂದೇ ತುತ್ತಿನಲ್ಲಿ ತಿನ್ನಲಾಗುತ್ತದೆ, ಮತ್ತು ಆರಂಭಕ್ಕೆ ಮೊದಲೇ ಅದನ್ನು ಒಪ್ಪಬೇಕೆಂದು ಕೇಳಲಾಗುತ್ತದೆ.",
      hi: "नीम और गुड़ ही उस दिन का पूरा उपदेश हैं, और वह प्रसन्न करने वाला नहीं है: वर्ष दोनों लाएगा, दोनों एक ही कौर में खाए जाते हैं, और आरंभ से पहले ही उसे स्वीकारने को कहा जाता है।",
    },
    regional: {
      en: "The same day is Gudi Padwa in Maharashtra and Cheti Chand for Sindhis. Tamil Nadu and Kerala keep a solar new year instead, a fortnight later.",
      kn: "ಅದೇ ದಿನ ಮಹಾರಾಷ್ಟ್ರದಲ್ಲಿ ಗುಡಿ ಪಾಡ್ವಾ, ಸಿಂಧಿಗಳಿಗೆ ಚೇಟಿ ಚಾಂದ್. ತಮಿಳುನಾಡು ಮತ್ತು ಕೇರಳ ಬದಲಾಗಿ ಸೌರಮಾನ ಹೊಸವರ್ಷವನ್ನು, ಒಂದು ಪಕ್ಷದ ನಂತರ ಆಚರಿಸುತ್ತವೆ.",
      hi: "वही दिन महाराष्ट्र में गुड़ी पड़वा और सिंधियों के लिए चेटी चंड है। तमिलनाडु और केरल इसके बजाय सौर नववर्ष, एक पखवाड़े बाद मनाते हैं।",
    },
  },

  {
    slug: "rama-navami",
    name: { en: "Rāma Navamī", kn: "ರಾಮ ನವಮಿ", hi: "राम नवमी" },
    sanskrit: "रामनवमी",
    reckoning: "lunar",
    month: "chaitra",
    paksha: "shukla",
    tithi: "navami",
    lede: {
      en: "The birth of Rāma, at midday rather than midnight.",
      kn: "ರಾಮನ ಜನನ — ಮಧ್ಯರಾತ್ರಿಯಲ್ಲ, ಮಧ್ಯಾಹ್ನ.",
      hi: "राम का जन्म — मध्यरात्रि नहीं, मध्याह्न।",
    },
    observed: {
      en: "The Rāmāyaṇa is read. Pānaka, kosambari and majjige are made and given away — the drinks of a Karnataka summer, because the festival falls in the heat.",
      kn: "ರಾಮಾಯಣ ಪಾರಾಯಣ ನಡೆಯುತ್ತದೆ. ಪಾನಕ, ಕೋಸಂಬರಿ, ಮಜ್ಜಿಗೆ ಮಾಡಿ ಹಂಚುತ್ತಾರೆ — ಕರ್ನಾಟಕದ ಬೇಸಿಗೆಯ ಪಾನೀಯಗಳು, ಏಕೆಂದರೆ ಹಬ್ಬ ಬಿಸಿಲಲ್ಲಿ ಬರುತ್ತದೆ.",
      hi: "रामायण का पाठ होता है। पानक, कोसंबरी और मट्ठा बनाकर बाँटा जाता है — कर्नाटक की गर्मी के पेय, क्योंकि यह पर्व धूप में आता है।",
    },
    significance: {
      en: "Kṛṣṇa is born at midnight and Rāma at noon, and the tradition makes something of the contrast: one arrives in secret and in danger, the other in full daylight to a waiting city.",
      kn: "ಕೃಷ್ಣ ಮಧ್ಯರಾತ್ರಿಯಲ್ಲಿ, ರಾಮ ಮಧ್ಯಾಹ್ನ ಹುಟ್ಟುತ್ತಾನೆ; ಪರಂಪರೆ ಈ ವ್ಯತ್ಯಾಸಕ್ಕೆ ಅರ್ಥ ಕೊಡುತ್ತದೆ — ಒಬ್ಬ ಗುಟ್ಟಾಗಿ, ಅಪಾಯದಲ್ಲಿ ಬರುತ್ತಾನೆ; ಇನ್ನೊಬ್ಬ ಹಗಲ ಬೆಳಕಲ್ಲಿ, ಕಾಯುತ್ತಿರುವ ನಗರಕ್ಕೆ.",
      hi: "कृष्ण मध्यरात्रि में और राम मध्याह्न में जन्मते हैं, और परंपरा इस अंतर को अर्थ देती है: एक गुप्त रूप से और संकट में आता है, दूसरा पूरे उजाले में, प्रतीक्षा करते नगर में।",
    },
  },

  {
    slug: "akshaya-tritiya",
    name: { en: "Akṣaya Tṛtīyā", kn: "ಅಕ್ಷಯ ತದಿಗೆ", hi: "अक्षय तृतीया" },
    sanskrit: "अक्षयतृतीया",
    reckoning: "lunar",
    month: "vaishakha",
    paksha: "shukla",
    tithi: "tritiya",
    lede: {
      en: "A day held to need no auspicious hour, because the whole of it is one.",
      kn: "ಶುಭ ಮುಹೂರ್ತ ಬೇಕಿಲ್ಲವೆಂದು ಪರಿಗಣಿಸಲಾದ ದಿನ, ಏಕೆಂದರೆ ಇಡೀ ದಿನವೇ ಶುಭ.",
      hi: "वह दिन जिसे शुभ मुहूर्त की आवश्यकता नहीं मानी जाती, क्योंकि पूरा दिन ही शुभ है।",
    },
    observed: {
      en: "Anything begun today is held to last: a house, a marriage, a business. Gold is bought, and giving is done — the name means undiminishing, and it is said to apply to what you give away as much as what you keep.",
      kn: "ಇಂದು ಆರಂಭಿಸಿದ್ದು ಉಳಿಯುತ್ತದೆಂಬ ನಂಬಿಕೆ: ಮನೆ, ಮದುವೆ, ವ್ಯಾಪಾರ. ಚಿನ್ನ ಕೊಳ್ಳುತ್ತಾರೆ, ದಾನ ಮಾಡುತ್ತಾರೆ — ಹೆಸರಿನ ಅರ್ಥ ಕ್ಷಯವಿಲ್ಲದ್ದು, ಮತ್ತು ಅದು ಇಟ್ಟುಕೊಂಡದ್ದಕ್ಕಷ್ಟೇ ಅಲ್ಲ, ಕೊಟ್ಟದ್ದಕ್ಕೂ ಅನ್ವಯಿಸುತ್ತದೆಂದು ಹೇಳುತ್ತಾರೆ.",
      hi: "आज आरंभ किया गया कुछ भी टिकता है ऐसा माना जाता है: घर, विवाह, व्यापार। सोना खरीदा जाता है, और दान किया जाता है — नाम का अर्थ है अक्षय, और कहा जाता है कि वह जितना रखे हुए पर लागू है उतना ही दिए हुए पर।",
    },
    significance: {
      en: "The older weight of the day is on the giving, not the buying. The gold trade's version is recent.",
      kn: "ಆ ದಿನದ ಪ್ರಾಚೀನ ತೂಕ ಕೊಳ್ಳುವುದರ ಮೇಲಲ್ಲ, ಕೊಡುವುದರ ಮೇಲಿದೆ. ಚಿನ್ನದ ವ್ಯಾಪಾರದ ಆವೃತ್ತಿ ಇತ್ತೀಚಿನದು.",
      hi: "इस दिन का पुराना भार खरीदने पर नहीं, देने पर है। सोने के व्यापार वाला रूप हाल का है।",
    },
  },

  {
    slug: "guru-purnima",
    name: { en: "Guru Pūrṇimā", kn: "ಗುರು ಪೂರ್ಣಿಮಾ", hi: "गुरु पूर्णिमा" },
    sanskrit: "गुरुपूर्णिमा",
    reckoning: "lunar",
    month: "ashadha",
    paksha: "shukla",
    tithi: "purnima",
    lede: {
      en: "For the teacher — and for Vyāsa, who is the first of them.",
      kn: "ಗುರುವಿಗಾಗಿ — ಮತ್ತು ಅವರಲ್ಲಿ ಮೊದಲಿಗರಾದ ವ್ಯಾಸರಿಗಾಗಿ.",
      hi: "गुरु के लिए — और उनमें प्रथम व्यास के लिए।",
    },
    observed: {
      en: "The teacher is honoured in person where there is one, and in the lineage where there is not. In the maṭhas the four months of Chāturmāsya begin around now, and the Jagadgurus stay in one place.",
      kn: "ಗುರು ಇದ್ದಲ್ಲಿ ಪ್ರತ್ಯಕ್ಷವಾಗಿ, ಇಲ್ಲದಿದ್ದಲ್ಲಿ ಪರಂಪರೆಯಲ್ಲಿ ಪೂಜಿಸಲಾಗುತ್ತದೆ. ಮಠಗಳಲ್ಲಿ ಈ ಸುಮಾರಿಗೆ ಚಾತುರ್ಮಾಸ್ಯದ ನಾಲ್ಕು ತಿಂಗಳು ಆರಂಭವಾಗುತ್ತವೆ, ಜಗದ್ಗುರುಗಳು ಒಂದೇ ಸ್ಥಳದಲ್ಲಿ ನೆಲೆಸುತ್ತಾರೆ.",
      hi: "गुरु हों तो प्रत्यक्ष, न हों तो परंपरा में पूजे जाते हैं। मठों में इसी के आसपास चातुर्मास्य के चार महीने आरंभ होते हैं, और जगद्गुरु एक ही स्थान पर रहते हैं।",
    },
    significance: {
      en: "It is also called Vyāsa Pūrṇimā. He is credited with arranging the Vedas into four and composing the Mahābhārata, so the day honours transmission itself — the act of carrying something forward without losing it.",
      kn: "ಇದನ್ನು ವ್ಯಾಸ ಪೂರ್ಣಿಮಾ ಎಂದೂ ಕರೆಯುತ್ತಾರೆ. ವೇದವನ್ನು ನಾಲ್ಕಾಗಿ ವಿಂಗಡಿಸಿದ್ದೂ, ಮಹಾಭಾರತ ರಚಿಸಿದ್ದೂ ಅವರೇ ಎಂದು ಹೇಳಲಾಗುತ್ತದೆ; ಹಾಗಾಗಿ ಈ ದಿನ ಪರಂಪರೆಯ ಹಸ್ತಾಂತರವನ್ನೇ ಗೌರವಿಸುತ್ತದೆ — ಕಳೆದುಕೊಳ್ಳದೆ ಮುಂದೆ ಸಾಗಿಸುವ ಕ್ರಿಯೆಯನ್ನು.",
      hi: "इसे व्यास पूर्णिमा भी कहते हैं। वेद को चार में बाँटने और महाभारत रचने का श्रेय उन्हीं को है, इसलिए यह दिन संचरण को ही सम्मान देता है — बिना खोए आगे ले जाने की क्रिया को।",
    },
    links: [L("/acharyas", "The acharyas", "ಆಚಾರ್ಯರು", "आचार्य")],
  },

  {
    slug: "nagara-panchami",
    name: { en: "Nāga Pañcamī", kn: "ನಾಗರ ಪಂಚಮಿ", hi: "नाग पंचमी" },
    sanskrit: "नागपञ्चमी",
    reckoning: "lunar",
    month: "shravana",
    paksha: "shukla",
    tithi: "panchami",
    lede: {
      en: "For the serpents, in the month when the rains bring them out.",
      kn: "ನಾಗಗಳಿಗಾಗಿ — ಮಳೆ ಅವುಗಳನ್ನು ಹೊರತರುವ ತಿಂಗಳಲ್ಲಿ.",
      hi: "नागों के लिए, उस महीने में जब वर्षा उन्हें बाहर लाती है।",
    },
    observed: {
      en: "Milk and tambittu are offered at the nāga stones that stand under trees in almost every Karnataka village. Nothing is dug or ploughed that day.",
      kn: "ಕರ್ನಾಟಕದ ಬಹುತೇಕ ಪ್ರತಿ ಹಳ್ಳಿಯಲ್ಲೂ ಮರದಡಿ ನಿಂತ ನಾಗರಕಲ್ಲುಗಳಿಗೆ ಹಾಲು, ತಂಬಿಟ್ಟು ಅರ್ಪಿಸುತ್ತಾರೆ. ಅಂದು ಅಗೆಯುವುದಿಲ್ಲ, ಉಳುವುದಿಲ್ಲ.",
      hi: "कर्नाटक के लगभग हर गाँव में पेड़ के नीचे खड़े नागकल्लों पर दूध और तंबिट्टु चढ़ाया जाता है। उस दिन न खोदा जाता है, न हल चलाया जाता है।",
    },
    significance: {
      en: "The prohibition on digging is the point, and it is practical as much as devotional: this is when the ground is full of them and both sides are best left alone.",
      kn: "ಅಗೆಯದಿರುವ ನಿಷೇಧವೇ ಮುಖ್ಯ, ಮತ್ತು ಅದು ಭಕ್ತಿಯಷ್ಟೇ ವ್ಯಾವಹಾರಿಕ: ಈ ಕಾಲದಲ್ಲಿ ನೆಲ ಅವುಗಳಿಂದ ತುಂಬಿರುತ್ತದೆ, ಎರಡೂ ಕಡೆಯವರು ಪರಸ್ಪರ ದೂರವಿರುವುದೇ ಒಳ್ಳೆಯದು.",
      hi: "न खोदने का निषेध ही मुख्य बात है, और वह भक्ति जितना ही व्यावहारिक है: इस समय भूमि उनसे भरी रहती है, और दोनों पक्षों का एक-दूसरे से दूर रहना ही भला है।",
    },
    links: [L("/temples/tulunadu/kukke-subramanya", "Kukke Subramanya", "ಕುಕ್ಕೆ ಸುಬ್ರಹ್ಮಣ್ಯ", "कुक्के सुब्रह्मण्य")],
  },

  {
    slug: "varamahalakshmi",
    name: { en: "Varamahālakṣmī Vrata", kn: "ವರಮಹಾಲಕ್ಷ್ಮಿ ವ್ರತ", hi: "वरमहालक्ष्मी व्रत" },
    sanskrit: "वरमहालक्ष्मीव्रतम्",
    reckoning: "lunar",
    month: "shravana",
    paksha: "shukla",
    tithi: "purnima",
    whenNote: {
      en: "The Friday before the full moon of Śrāvaṇa.",
      kn: "ಶ್ರಾವಣ ಹುಣ್ಣಿಮೆಯ ಹಿಂದಿನ ಶುಕ್ರವಾರ.",
      hi: "श्रावण पूर्णिमा से पहले वाला शुक्रवार।",
    },
    lede: {
      en: "A women's vrata, and one of the largest days of the Karnataka year.",
      kn: "ಮಹಿಳೆಯರ ವ್ರತ, ಮತ್ತು ಕರ್ನಾಟಕದ ವರ್ಷದ ಅತಿ ದೊಡ್ಡ ದಿನಗಳಲ್ಲಿ ಒಂದು.",
      hi: "स्त्रियों का व्रत, और कर्नाटक के वर्ष के सबसे बड़े दिनों में एक।",
    },
    observed: {
      en: "A kalaśa is dressed as the goddess — a pot, a coconut, a face, and all the ornaments the household has. Women invite each other, and the day ends in giving away what was prepared.",
      kn: "ಕಲಶವನ್ನು ದೇವಿಯಂತೆ ಅಲಂಕರಿಸುತ್ತಾರೆ — ಕಳಶ, ತೆಂಗಿನಕಾಯಿ, ಮುಖ, ಮತ್ತು ಮನೆಯಲ್ಲಿರುವ ಎಲ್ಲ ಒಡವೆ. ಹೆಂಗಸರು ಪರಸ್ಪರ ಕರೆಯುತ್ತಾರೆ, ದಿನ ಮಾಡಿದ್ದನ್ನು ಹಂಚುವುದರಲ್ಲಿ ಮುಗಿಯುತ್ತದೆ.",
      hi: "कलश को देवी की तरह सजाया जाता है — घड़ा, नारियल, मुख, और घर के सारे आभूषण। स्त्रियाँ एक-दूसरे को बुलाती हैं, और दिन बनाए हुए को बाँटने में समाप्त होता है।",
    },
    significance: {
      en: "The vrata asks for the household's wellbeing rather than for wealth, and the distinction is kept carefully in the way it is spoken about.",
      kn: "ಈ ವ್ರತ ಸಂಪತ್ತಿಗಿಂತ ಮನೆಯ ಕ್ಷೇಮವನ್ನು ಬೇಡುತ್ತದೆ, ಮತ್ತು ಆ ವ್ಯತ್ಯಾಸವನ್ನು ಹೇಳುವ ರೀತಿಯಲ್ಲಿ ಎಚ್ಚರಿಕೆಯಿಂದ ಕಾಪಾಡಲಾಗಿದೆ.",
      hi: "यह व्रत धन से अधिक घर के कुशल की माँग करता है, और यह अंतर उसे कहने के ढंग में सावधानी से बनाए रखा गया है।",
    },
    links: [L("/bhajans/lakshmi", "Songs to Lakshmi", "ಲಕ್ಷ್ಮಿಗೆ ಪದಗಳು", "लक्ष्मी के पद")],
  },

  {
    slug: "krishna-janmashtami",
    name: { en: "Kṛṣṇa Janmāṣṭamī", kn: "ಕೃಷ್ಣ ಜನ್ಮಾಷ್ಟಮಿ", hi: "कृष्ण जन्माष्टमी" },
    sanskrit: "कृष्णजन्माष्टमी",
    reckoning: "lunar",
    month: "shravana",
    paksha: "krishna",
    tithi: "ashtami",
    alsoCalled: {
      en: "Bhādrapada kṛṣṇa aṣṭamī in the north, where the month is counted from the full moon.",
      kn: "ಉತ್ತರದಲ್ಲಿ ಭಾದ್ರಪದ ಕೃಷ್ಣ ಅಷ್ಟಮಿ — ಅಲ್ಲಿ ತಿಂಗಳನ್ನು ಹುಣ್ಣಿಮೆಯಿಂದ ಎಣಿಸಲಾಗುತ್ತದೆ.",
      hi: "उत्तर में भाद्रपद कृष्ण अष्टमी — वहाँ महीना पूर्णिमा से गिना जाता है।",
    },
    lede: {
      en: "The birth of Kṛṣṇa, at midnight, in a prison.",
      kn: "ಕೃಷ್ಣನ ಜನನ — ಮಧ್ಯರಾತ್ರಿಯಲ್ಲಿ, ಸೆರೆಮನೆಯಲ್ಲಿ.",
      hi: "कृष्ण का जन्म — मध्यरात्रि में, कारागार में।",
    },
    observed: {
      en: "The fast is kept until midnight. Small footprints are drawn from the door to the shrine, coming in. In Udupi it is the largest day of the year.",
      kn: "ಮಧ್ಯರಾತ್ರಿಯವರೆಗೆ ಉಪವಾಸ. ಬಾಗಿಲಿನಿಂದ ದೇವರಮನೆಯವರೆಗೆ ಒಳಬರುವ ಪುಟ್ಟ ಹೆಜ್ಜೆಗಳನ್ನು ಬಿಡಿಸುತ್ತಾರೆ. ಉಡುಪಿಯಲ್ಲಿ ಇದು ವರ್ಷದ ಅತಿ ದೊಡ್ಡ ದಿನ.",
      hi: "मध्यरात्रि तक उपवास। द्वार से देवघर तक भीतर आते हुए छोटे पदचिह्न बनाए जाते हैं। उडुपी में यह वर्ष का सबसे बड़ा दिन है।",
    },
    significance: {
      en: "Everything about the night is wrong for a birth — a prison, a tyrant waiting, a river to cross in the rain — and that is the point the story keeps making.",
      kn: "ಜನನಕ್ಕೆ ಆ ರಾತ್ರಿಯ ಪ್ರತಿಯೊಂದೂ ವಿರುದ್ಧವಾಗಿದೆ — ಸೆರೆಮನೆ, ಕಾಯುತ್ತಿರುವ ದುಷ್ಟ, ಮಳೆಯಲ್ಲಿ ದಾಟಬೇಕಾದ ನದಿ — ಕಥೆ ಪದೇಪದೇ ಹೇಳುವ ಅಂಶವೇ ಅದು.",
      hi: "जन्म के लिए उस रात का सब कुछ प्रतिकूल है — कारागार, प्रतीक्षा करता अत्याचारी, वर्षा में पार करने को नदी — और कथा यही बात बार-बार कहती है।",
    },
    links: [
      L("/bhajans/krishna", "Songs to Krishna", "ಕೃಷ್ಣನಿಗೆ ಪದಗಳು", "कृष्ण के पद"),
      L("/temples/tulunadu/udupi-krishna-matha", "Udupi Krishna Matha", "ಉಡುಪಿ ಕೃಷ್ಣ ಮಠ", "उडुपी कृष्ण मठ"),
    ],
  },

  {
    slug: "ganesha-chaturthi",
    name: { en: "Gaṇeśa Chaturthī", kn: "ಗಣೇಶ ಚತುರ್ಥಿ", hi: "गणेश चतुर्थी" },
    sanskrit: "गणेशचतुर्थी",
    reckoning: "lunar",
    month: "bhadrapada",
    paksha: "shukla",
    tithi: "chaturthi",
    lede: {
      en: "Gaṇeśa is made of clay, kept for a day or ten, and then dissolved in water.",
      kn: "ಗಣೇಶನನ್ನು ಮಣ್ಣಿನಿಂದ ಮಾಡಿ, ಒಂದು ದಿನ ಅಥವಾ ಹತ್ತು ದಿನ ಇಟ್ಟುಕೊಂಡು, ನಂತರ ನೀರಿನಲ್ಲಿ ಕರಗಿಸುತ್ತಾರೆ.",
      hi: "गणेश मिट्टी से बनाए जाते हैं, एक दिन या दस दिन रखे जाते हैं, फिर जल में विसर्जित कर दिए जाते हैं।",
    },
    observed: {
      en: "Twenty-one blades of garike are offered, and modaka. The Atharvaśīrṣa is recited. On the last day the image is carried to water and let go.",
      kn: "ಇಪ್ಪತ್ತೊಂದು ಗರಿಕೆ ಮತ್ತು ಮೋದಕ ಅರ್ಪಿಸುತ್ತಾರೆ. ಅಥರ್ವಶೀರ್ಷ ಪಠಿಸುತ್ತಾರೆ. ಕೊನೆಯ ದಿನ ಮೂರ್ತಿಯನ್ನು ನೀರಿಗೆ ಒಯ್ದು ಬಿಡುತ್ತಾರೆ.",
      hi: "इक्कीस गरिके और मोदक अर्पित किए जाते हैं। अथर्वशीर्ष का पाठ होता है। अंतिम दिन मूर्ति को जल तक ले जाकर छोड़ दिया जाता है।",
    },
    significance: {
      en: "The immersion is not an afterthought to the festival; it is the festival. The god is welcomed as a guest, kept as long as a guest is kept, and then walked to the water and dissolved.",
      kn: "ವಿಸರ್ಜನೆ ಹಬ್ಬದ ನಂತರದ ಕ್ರಿಯೆಯಲ್ಲ; ಅದೇ ಹಬ್ಬ. ದೇವರನ್ನು ಅತಿಥಿಯಂತೆ ಬರಮಾಡಿಕೊಂಡು, ಅತಿಥಿಯನ್ನು ಇರಿಸಿಕೊಳ್ಳುವಷ್ಟು ಕಾಲ ಇಟ್ಟುಕೊಂಡು, ನಂತರ ನೀರಿನವರೆಗೆ ನಡೆಸಿ ಕರಗಿಸಲಾಗುತ್ತದೆ.",
      hi: "विसर्जन पर्व के बाद की बात नहीं; वही पर्व है। देवता को अतिथि की तरह बुलाया जाता है, अतिथि जितना रुकता है उतना रखा जाता है, फिर जल तक ले जाकर घोल दिया जाता है।",
    },
    links: [
      L("/stutis/ganesha", "The Ganesha stotras", "ಗಣೇಶ ಸ್ತೋತ್ರಗಳು", "गणेश स्तोत्र"),
      L("/bhajans/ganesha", "Songs to Ganesha", "ಗಣೇಶನಿಗೆ ಪದಗಳು", "गणेश के पद"),
      L("/temples/tulunadu/nava-vinayakas", "The Nava Vinayakas", "ನವ ವಿನಾಯಕರು", "नव विनायक"),
    ],
  },

  {
    slug: "navaratri",
    name: { en: "Śāradā Navarātri", kn: "ಶರನ್ನವರಾತ್ರಿ", hi: "शारदीय नवरात्रि" },
    sanskrit: "नवरात्रम्",
    reckoning: "lunar",
    month: "ashvina",
    paksha: "shukla",
    tithi: "pratipada",
    whenNote: {
      en: "Nine nights, pratipadā to navamī.",
      kn: "ಒಂಬತ್ತು ರಾತ್ರಿಗಳು, ಪಾಡ್ಯದಿಂದ ನವಮಿಯವರೆಗೆ.",
      hi: "नौ रातें, प्रतिपदा से नवमी तक।",
    },
    lede: {
      en: "Nine nights for the Goddess, and the one festival that is a season rather than a day.",
      kn: "ದೇವಿಗಾಗಿ ಒಂಬತ್ತು ರಾತ್ರಿಗಳು — ಒಂದು ದಿನವಲ್ಲ, ಒಂದು ಋತುವಿನಂತಿರುವ ಏಕೈಕ ಹಬ್ಬ.",
      hi: "देवी के लिए नौ रातें, और वह एकमात्र पर्व जो दिन नहीं, ऋतु है।",
    },
    observed: {
      en: "In Karnataka a gombe habba is set up — dolls on stepped shelves, added to over generations. Books and tools are laid before the Goddess on the ninth day and not touched.",
      kn: "ಕರ್ನಾಟಕದಲ್ಲಿ ಗೊಂಬೆ ಹಬ್ಬ — ಮೆಟ್ಟಿಲು ಮೆಟ್ಟಿಲಾದ ಜಗಲಿಯ ಮೇಲೆ ಗೊಂಬೆಗಳು, ತಲೆಮಾರುಗಳಿಂದ ಸೇರಿಸಿಕೊಂಡು ಬಂದವು. ಒಂಬತ್ತನೇ ದಿನ ಪುಸ್ತಕ ಮತ್ತು ಸಾಧನಗಳನ್ನು ದೇವಿಯ ಮುಂದೆ ಇಟ್ಟು ಮುಟ್ಟುವುದಿಲ್ಲ.",
      hi: "कर्नाटक में गोंबे हब्बा सजता है — सीढ़ीनुमा तख्तों पर गुड़ियाँ, पीढ़ियों से जोड़ी हुईं। नवें दिन पुस्तकें और औज़ार देवी के सामने रखकर छुए नहीं जाते।",
    },
    significance: {
      en: "Āyudha Pūjā on the ninth day puts down the tools of every trade — a lathe, a lorry, a laptop — and the rest is as much the point as the worship.",
      kn: "ಒಂಬತ್ತನೇ ದಿನದ ಆಯುಧ ಪೂಜೆ ಪ್ರತಿ ವೃತ್ತಿಯ ಸಾಧನಗಳನ್ನು ಕೆಳಗಿರಿಸುತ್ತದೆ — ಯಂತ್ರ, ಲಾರಿ, ಗಣಕ — ಮತ್ತು ಪೂಜೆಯಷ್ಟೇ ಆ ವಿಶ್ರಾಂತಿಯೂ ಮುಖ್ಯ.",
      hi: "नवें दिन की आयुध पूजा हर पेशे के औज़ार नीचे रखवा देती है — खराद, लॉरी, लैपटॉप — और पूजा जितना ही वह विश्राम भी अर्थ रखता है।",
    },
    regional: {
      en: "Bengal keeps the same nights as Durgā Pūjā, with a different shape entirely. Gujarat dances them.",
      kn: "ಬಂಗಾಳ ಅದೇ ರಾತ್ರಿಗಳನ್ನು ದುರ್ಗಾ ಪೂಜೆಯಾಗಿ, ಸಂಪೂರ್ಣ ಬೇರೆ ರೂಪದಲ್ಲಿ ಆಚರಿಸುತ್ತದೆ. ಗುಜರಾತ್ ಅವನ್ನು ಕುಣಿಯುತ್ತದೆ.",
      hi: "बंगाल उन्हीं रातों को दुर्गा पूजा के रूप में, बिलकुल अलग आकार में मनाता है। गुजरात उन्हें नाचता है।",
    },
    links: [L("/bhajans/devi", "Songs to the Devi", "ದೇವಿಗೆ ಪದಗಳು", "देवी के पद")],
  },

  {
    slug: "vijayadashami",
    name: { en: "Vijayadaśamī", kn: "ವಿಜಯದಶಮಿ", hi: "विजयदशमी" },
    sanskrit: "विजयदशमी",
    reckoning: "lunar",
    month: "ashvina",
    paksha: "shukla",
    tithi: "dashami",
    lede: {
      en: "The tenth day, when the nine nights end and something is begun.",
      kn: "ಹತ್ತನೇ ದಿನ — ಒಂಬತ್ತು ರಾತ್ರಿಗಳು ಮುಗಿದು ಏನಾದರೂ ಆರಂಭವಾಗುವ ದಿನ.",
      hi: "दसवाँ दिन, जब नौ रातें समाप्त होती हैं और कुछ आरंभ होता है।",
    },
    observed: {
      en: "A child's first letters are written today. The banni tree is honoured and its leaves exchanged. Mysore's procession is the best known in the south.",
      kn: "ಮಗುವಿನ ಮೊದಲ ಅಕ್ಷರ ಇಂದು ಬರೆಸಲಾಗುತ್ತದೆ. ಬನ್ನಿ ಮರವನ್ನು ಪೂಜಿಸಿ ಎಲೆ ಹಂಚಿಕೊಳ್ಳುತ್ತಾರೆ. ಮೈಸೂರಿನ ಮೆರವಣಿಗೆ ದಕ್ಷಿಣದಲ್ಲಿ ಅತಿ ಪ್ರಸಿದ್ಧ.",
      hi: "बच्चे के पहले अक्षर आज लिखवाए जाते हैं। बन्नी वृक्ष की पूजा कर पत्ते बाँटे जाते हैं। मैसूर का जुलूस दक्षिण में सबसे प्रसिद्ध है।",
    },
    significance: {
      en: "Two stories meet on the same day: Durgā's victory over Mahiṣāsura, and Rāma's over Rāvaṇa. The tradition has never chosen between them, and both are kept.",
      kn: "ಒಂದೇ ದಿನದಲ್ಲಿ ಎರಡು ಕಥೆಗಳು ಸೇರುತ್ತವೆ: ಮಹಿಷಾಸುರನ ಮೇಲೆ ದುರ್ಗೆಯ ಜಯ, ಮತ್ತು ರಾವಣನ ಮೇಲೆ ರಾಮನ ಜಯ. ಪರಂಪರೆ ಎಂದೂ ಇವೆರಡರ ನಡುವೆ ಆಯ್ಕೆ ಮಾಡಿಲ್ಲ; ಎರಡನ್ನೂ ಉಳಿಸಿಕೊಂಡಿದೆ.",
      hi: "एक ही दिन दो कथाएँ मिलती हैं: महिषासुर पर दुर्गा की जय, और रावण पर राम की। परंपरा ने कभी इनमें चुनाव नहीं किया; दोनों को रखा है।",
    },
  },

  {
    slug: "deepavali",
    name: { en: "Dīpāvali", kn: "ದೀಪಾವಳಿ", hi: "दीपावली" },
    sanskrit: "दीपावली",
    reckoning: "lunar",
    month: "ashvina",
    paksha: "krishna",
    tithi: "amavasya",
    whenNote: {
      en: "Three or four days, from Naraka Chaturdaśī to Bali Pāḍyami.",
      kn: "ಮೂರು ಅಥವಾ ನಾಲ್ಕು ದಿನಗಳು, ನರಕ ಚತುರ್ದಶಿಯಿಂದ ಬಲಿ ಪಾಡ್ಯಮಿಯವರೆಗೆ.",
      hi: "तीन या चार दिन, नरक चतुर्दशी से बलि पाड़्यमी तक।",
    },
    lede: {
      en: "Lamps on the darkest night of the year, which is what the name says.",
      kn: "ವರ್ಷದ ಅತಿ ಕತ್ತಲ ರಾತ್ರಿಯಲ್ಲಿ ದೀಪಗಳು — ಹೆಸರೇ ಹೇಳುವುದು ಅದನ್ನೇ.",
      hi: "वर्ष की सबसे अँधेरी रात पर दीप — नाम यही कहता है।",
    },
    observed: {
      en: "The oil bath before dawn on Naraka Chaturdaśī. Lakṣmī pūjā on the new moon. Lamps along every ledge, and in Karnataka the cattle honoured on Bali Pāḍyami.",
      kn: "ನರಕ ಚತುರ್ದಶಿಯಂದು ಬೆಳಗಿನ ಜಾವದ ಎಣ್ಣೆ ಸ್ನಾನ. ಅಮಾವಾಸ್ಯೆಯಂದು ಲಕ್ಷ್ಮೀ ಪೂಜೆ. ಪ್ರತಿ ಅಂಚಿನಲ್ಲೂ ದೀಪ, ಮತ್ತು ಕರ್ನಾಟಕದಲ್ಲಿ ಬಲಿ ಪಾಡ್ಯಮಿಯಂದು ಗೋಪೂಜೆ.",
      hi: "नरक चतुर्दशी को भोर से पहले तेल स्नान। अमावस्या को लक्ष्मी पूजा। हर मुँडेर पर दीप, और कर्नाटक में बलि पाड़्यमी को गोपूजा।",
    },
    significance: {
      en: "The day is built on a new moon on purpose. The lamps are not decoration on a bright night; they are the only light there is.",
      kn: "ಈ ದಿನವನ್ನು ಉದ್ದೇಶಪೂರ್ವಕವಾಗಿ ಅಮಾವಾಸ್ಯೆಯ ಮೇಲೆ ಕಟ್ಟಲಾಗಿದೆ. ದೀಪಗಳು ಬೆಳಗುವ ರಾತ್ರಿಯ ಅಲಂಕಾರವಲ್ಲ; ಅವೇ ಇರುವ ಏಕೈಕ ಬೆಳಕು.",
      hi: "यह दिन जान-बूझकर अमावस्या पर रखा गया है। दीप किसी उजली रात का शृंगार नहीं; वही एकमात्र प्रकाश हैं।",
    },
    regional: {
      en: "The north keeps it as Rāma's return to Ayodhyā. The south keeps Naraka's defeat. Both light the same lamps.",
      kn: "ಉತ್ತರ ಇದನ್ನು ರಾಮನ ಅಯೋಧ್ಯಾ ಪ್ರವೇಶವೆಂದು ಆಚರಿಸುತ್ತದೆ. ದಕ್ಷಿಣ ನರಕಾಸುರನ ಸೋಲನ್ನು. ಎರಡೂ ಕಡೆ ದೀಪ ಒಂದೇ.",
      hi: "उत्तर इसे राम की अयोध्या-वापसी मानता है। दक्षिण नरक की पराजय। दीप दोनों जगह वही हैं।",
    },
  },

  {
    slug: "utthana-dwadashi",
    name: { en: "Utthāna Dvādaśī", kn: "ಉತ್ಥಾನ ದ್ವಾದಶಿ", hi: "उत्थान द्वादशी" },
    sanskrit: "उत्थानद्वादशी",
    reckoning: "lunar",
    month: "kartika",
    paksha: "shukla",
    tithi: "dvadashi",
    lede: {
      en: "Viṣṇu wakes, Chāturmāsya ends, and marriages can be held again.",
      kn: "ವಿಷ್ಣು ಎಚ್ಚರಗೊಳ್ಳುತ್ತಾನೆ, ಚಾತುರ್ಮಾಸ್ಯ ಮುಗಿಯುತ್ತದೆ, ಮದುವೆಗಳು ಮತ್ತೆ ನಡೆಯಬಹುದು.",
      hi: "विष्णु जागते हैं, चातुर्मास्य समाप्त होता है, और विवाह फिर हो सकते हैं।",
    },
    observed: {
      en: "The tulasi in the courtyard is married to Kṛṣṇa — a full wedding, with a canopy, a sari for the plant and a procession. Lamps are lit around the tulasi kaṭṭe.",
      kn: "ಅಂಗಳದ ತುಳಸಿಗೆ ಕೃಷ್ಣನೊಂದಿಗೆ ಮದುವೆ — ಪೂರ್ಣ ಮದುವೆ, ಚಪ್ಪರ, ಗಿಡಕ್ಕೆ ಸೀರೆ ಮತ್ತು ಮೆರವಣಿಗೆ ಸಹಿತ. ತುಳಸಿ ಕಟ್ಟೆಯ ಸುತ್ತ ದೀಪ ಹಚ್ಚುತ್ತಾರೆ.",
      hi: "आँगन की तुलसी का कृष्ण से विवाह — पूरा विवाह, मंडप, पौधे के लिए साड़ी और बारात सहित। तुलसी चौरे के चारों ओर दीप जलाए जाते हैं।",
    },
    significance: {
      en: "A plant is married to a god, in the courtyard, with the neighbours invited. Nothing in the practice treats this as a metaphor.",
      kn: "ಒಂದು ಗಿಡವನ್ನು ದೇವರಿಗೆ ಮದುವೆ ಮಾಡಲಾಗುತ್ತದೆ — ಅಂಗಳದಲ್ಲಿ, ನೆರೆಹೊರೆಯವರನ್ನು ಕರೆದು. ಆಚರಣೆಯಲ್ಲಿ ಎಲ್ಲಿಯೂ ಇದನ್ನು ರೂಪಕವೆಂದು ಭಾವಿಸುವುದಿಲ್ಲ.",
      hi: "एक पौधे का देवता से विवाह होता है — आँगन में, पड़ोसियों को बुलाकर। आचरण में कहीं भी इसे रूपक नहीं माना जाता।",
    },
    links: [L("/bhajans/tulasi", "Songs to Tulasi", "ತುಳಸಿಗೆ ಪದಗಳು", "तुलसी के पद")],
  },

  {
    slug: "gita-jayanti",
    name: { en: "Gītā Jayantī", kn: "ಗೀತಾ ಜಯಂತಿ", hi: "गीता जयंती" },
    sanskrit: "गीताजयन्ती",
    reckoning: "lunar",
    month: "margashirsha",
    paksha: "shukla",
    tithi: "ekadashi",
    lede: {
      en: "The day the Gītā is held to have been spoken, between two armies.",
      kn: "ಎರಡು ಸೇನೆಗಳ ನಡುವೆ ಗೀತೆ ಹೇಳಲ್ಪಟ್ಟಿತೆಂದು ನಂಬಲಾದ ದಿನ.",
      hi: "वह दिन जब गीता कही गई मानी जाती है, दो सेनाओं के बीच।",
    },
    observed: {
      en: "The whole text is read in a day, or one chapter is. Many begin a year's study on this day rather than finish one.",
      kn: "ಇಡೀ ಪಠ್ಯವನ್ನು ಒಂದೇ ದಿನದಲ್ಲಿ, ಅಥವಾ ಒಂದು ಅಧ್ಯಾಯವನ್ನು ಓದುತ್ತಾರೆ. ಅನೇಕರು ಈ ದಿನ ವರ್ಷದ ಅಧ್ಯಯನವನ್ನು ಮುಗಿಸುವ ಬದಲು ಆರಂಭಿಸುತ್ತಾರೆ.",
      hi: "पूरा पाठ एक दिन में पढ़ा जाता है, या एक अध्याय। कई लोग इस दिन वर्ष भर का अध्ययन समाप्त करने के बजाय आरंभ करते हैं।",
    },
    significance: {
      en: "It is also Mokṣadā Ekādaśī. The text it marks is the one place in the tradition where the teaching is given to someone who does not want it and is asking to leave.",
      kn: "ಇದು ಮೋಕ್ಷದಾ ಏಕಾದಶಿಯೂ ಹೌದು. ಇದು ಗುರುತಿಸುವ ಗ್ರಂಥವೇ ಪರಂಪರೆಯಲ್ಲಿ ಉಪದೇಶವನ್ನು ಬೇಡದವನಿಗೆ, ಹೊರಡಲು ಕೇಳುತ್ತಿರುವವನಿಗೆ ಕೊಡುವ ಏಕೈಕ ಸ್ಥಳ.",
      hi: "यह मोक्षदा एकादशी भी है। जिस ग्रंथ को यह चिह्नित करता है, वही परंपरा में एकमात्र स्थान है जहाँ उपदेश उसे दिया जाता है जो उसे नहीं चाहता और जाने की अनुमति माँग रहा है।",
    },
    links: [L("/gita", "The Bhagavad Gita", "ಭಗವದ್ಗೀತೆ", "भगवद्गीता")],
  },

  {
    slug: "makara-sankranti",
    name: { en: "Makara Saṅkrānti", kn: "ಮಕರ ಸಂಕ್ರಾಂತಿ", hi: "मकर संक्रांति" },
    sanskrit: "मकरसङ्क्रान्तिः",
    reckoning: "solar",
    whenNote: {
      en: "When the sun enters Makara rāśi — around 14 January, and almost the same date every year.",
      kn: "ಸೂರ್ಯ ಮಕರ ರಾಶಿಗೆ ಪ್ರವೇಶಿಸಿದಾಗ — ಸುಮಾರು ಜನವರಿ ೧೪, ಮತ್ತು ಪ್ರತಿ ವರ್ಷವೂ ಬಹುತೇಕ ಅದೇ ದಿನಾಂಕ.",
      hi: "जब सूर्य मकर राशि में प्रवेश करता है — लगभग १४ जनवरी, और हर वर्ष लगभग वही तिथि।",
    },
    lede: {
      en: "The one major festival fixed to the sun, not the moon — which is why it alone barely moves.",
      kn: "ಚಂದ್ರನಿಗಲ್ಲ, ಸೂರ್ಯನಿಗೆ ಜೋಡಿಸಿದ ಏಕೈಕ ಪ್ರಮುಖ ಹಬ್ಬ — ಆದ್ದರಿಂದಲೇ ಇದೊಂದೇ ಬಹುತೇಕ ಜರುಗುವುದಿಲ್ಲ.",
      hi: "एकमात्र बड़ा पर्व जो चंद्र नहीं, सूर्य से बँधा है — इसीलिए केवल यही मुश्किल से खिसकता है।",
    },
    observed: {
      en: "Ellu-bella is exchanged — sesame, jaggery, groundnut, dry coconut — with the words ellu bella tindu olle mātāḍi: eat this, and speak well of others.",
      kn: "ಎಳ್ಳು-ಬೆಲ್ಲ ಹಂಚಿಕೊಳ್ಳುತ್ತಾರೆ — ಎಳ್ಳು, ಬೆಲ್ಲ, ಕಡಲೆಕಾಯಿ, ಕೊಬ್ಬರಿ — ಜೊತೆಗೆ 'ಎಳ್ಳು ಬೆಲ್ಲ ತಿಂದು ಒಳ್ಳೆ ಮಾತಾಡಿ' ಎಂಬ ಮಾತು.",
      hi: "तिल-गुड़ बाँटा जाता है — तिल, गुड़, मूँगफली, सूखा नारियल — इन शब्दों के साथ: यह खाओ, और दूसरों की भली बात कहो।",
    },
    significance: {
      en: "The sun turns north from here. The festival is agricultural before it is anything else — the harvest is in, and the giving is of what was grown.",
      kn: "ಇಲ್ಲಿಂದ ಸೂರ್ಯ ಉತ್ತರಕ್ಕೆ ತಿರುಗುತ್ತಾನೆ. ಈ ಹಬ್ಬ ಮೊದಲು ಕೃಷಿಯದ್ದು — ಸುಗ್ಗಿ ಮನೆ ಸೇರಿದೆ, ಮತ್ತು ಹಂಚುವುದು ಬೆಳೆದದ್ದನ್ನೇ.",
      hi: "यहीं से सूर्य उत्तर की ओर मुड़ता है। यह पर्व सबसे पहले कृषि का है — फसल घर आ चुकी है, और जो बाँटा जाता है वह उगाया हुआ ही है।",
    },
    regional: {
      en: "Pongal in Tamil Nadu, Bhogi and Sankranti in Andhra, Lohri the night before in the Punjab, Magh Bihu in Assam.",
      kn: "ತಮಿಳುನಾಡಿನಲ್ಲಿ ಪೊಂಗಲ್, ಆಂಧ್ರದಲ್ಲಿ ಭೋಗಿ ಮತ್ತು ಸಂಕ್ರಾಂತಿ, ಪಂಜಾಬಿನಲ್ಲಿ ಹಿಂದಿನ ರಾತ್ರಿ ಲೋಹ್ರಿ, ಅಸ್ಸಾಂನಲ್ಲಿ ಮಾಘ ಬಿಹು.",
      hi: "तमिलनाडु में पोंगल, आंध्र में भोगी और संक्रांति, पंजाब में एक रात पहले लोहड़ी, असम में माघ बिहू।",
    },
  },

  {
    slug: "maha-shivaratri",
    name: { en: "Mahā Śivarātri", kn: "ಮಹಾ ಶಿವರಾತ್ರಿ", hi: "महा शिवरात्रि" },
    sanskrit: "महाशिवरात्रिः",
    reckoning: "lunar",
    month: "magha",
    paksha: "krishna",
    tithi: "chaturdashi",
    alsoCalled: {
      en: "Phālguna kṛṣṇa chaturdaśī in the north — the same night, a different month name.",
      kn: "ಉತ್ತರದಲ್ಲಿ ಫಾಲ್ಗುಣ ಕೃಷ್ಣ ಚತುರ್ದಶಿ — ಅದೇ ರಾತ್ರಿ, ಬೇರೆ ತಿಂಗಳ ಹೆಸರು.",
      hi: "उत्तर में फाल्गुन कृष्ण चतुर्दशी — वही रात, महीने का नाम अलग।",
    },
    lede: {
      en: "A night kept awake, on the darkest night before the new moon.",
      kn: "ಅಮಾವಾಸ್ಯೆಯ ಹಿಂದಿನ ಅತಿ ಕತ್ತಲ ರಾತ್ರಿಯಲ್ಲಿ ಎಚ್ಚರವಾಗಿ ಕಳೆಯುವ ರಾತ್ರಿ.",
      hi: "अमावस्या से पहले की सबसे अँधेरी रात, जागकर बिताई जाने वाली।",
    },
    observed: {
      en: "The fast runs the whole day and the vigil the whole night, in four watches, with abhiṣeka at each. Bilva leaves are offered.",
      kn: "ಇಡೀ ದಿನ ಉಪವಾಸ, ಇಡೀ ರಾತ್ರಿ ಜಾಗರಣೆ — ನಾಲ್ಕು ಯಾಮಗಳಲ್ಲಿ, ಪ್ರತಿಯೊಂದರಲ್ಲೂ ಅಭಿಷೇಕ. ಬಿಲ್ವಪತ್ರೆ ಅರ್ಪಿಸುತ್ತಾರೆ.",
      hi: "पूरे दिन उपवास और पूरी रात जागरण, चार प्रहरों में, हर प्रहर में अभिषेक। बिल्वपत्र चढ़ाए जाते हैं।",
    },
    significance: {
      en: "Almost every other festival is kept in daylight. This one is defined by staying awake through the dark, and the fasting and the vigil are the observance — not the preparation for it.",
      kn: "ಉಳಿದ ಬಹುತೇಕ ಹಬ್ಬಗಳು ಹಗಲಲ್ಲಿ ನಡೆಯುತ್ತವೆ. ಇದು ಕತ್ತಲಲ್ಲಿ ಎಚ್ಚರವಿರುವುದರಿಂದಲೇ ವ್ಯಾಖ್ಯಾನಿಸಲ್ಪಡುತ್ತದೆ; ಉಪವಾಸ ಮತ್ತು ಜಾಗರಣೆಯೇ ಆಚರಣೆ — ಅದಕ್ಕೆ ಸಿದ್ಧತೆಯಲ್ಲ.",
      hi: "लगभग हर दूसरा पर्व उजाले में मनाया जाता है। यह अँधेरे में जागते रहने से ही परिभाषित होता है; उपवास और जागरण ही आचरण हैं — उसकी तैयारी नहीं।",
    },
    links: [L("/bhajans/shiva", "Songs to Shiva", "ಶಿವನಿಗೆ ಪದಗಳು", "शिव के पद")],
  },

  {
    slug: "holi",
    name: { en: "Holi and Kāmadahana", kn: "ಹೋಳಿ ಮತ್ತು ಕಾಮದಹನ", hi: "होली और कामदहन" },
    sanskrit: "होलिका",
    reckoning: "lunar",
    month: "phalguna",
    paksha: "shukla",
    tithi: "purnima",
    lede: {
      en: "A fire on the full moon, and colour the morning after.",
      kn: "ಹುಣ್ಣಿಮೆಯಂದು ಬೆಂಕಿ, ಮರುದಿನ ಬೆಳಗ್ಗೆ ಬಣ್ಣ.",
      hi: "पूर्णिमा पर आग, और अगली सुबह रंग।",
    },
    observed: {
      en: "The bonfire is lit at night and circled. In Karnataka the day is Kāmadahana, and the burning is of Kāma rather than of Holikā.",
      kn: "ರಾತ್ರಿ ಕಾಮನ ಬೆಂಕಿ ಹಚ್ಚಿ ಸುತ್ತು ಬರುತ್ತಾರೆ. ಕರ್ನಾಟಕದಲ್ಲಿ ಈ ದಿನ ಕಾಮದಹನ — ಸುಡುವುದು ಹೋಲಿಕೆಯನ್ನಲ್ಲ, ಕಾಮನನ್ನು.",
      hi: "रात में होलिका जलाई जाती है और परिक्रमा होती है। कर्नाटक में यह दिन कामदहन है — जलाया जाता है होलिका को नहीं, काम को।",
    },
    significance: {
      en: "Two different stories are burnt in the same fire depending on where you stand: Holikā in the north, Kāma in the south. It is one of the clearest cases of a single festival carrying two meanings without either yielding.",
      kn: "ನೀವು ಎಲ್ಲಿ ನಿಂತಿದ್ದೀರಿ ಎಂಬುದರ ಮೇಲೆ ಅದೇ ಬೆಂಕಿಯಲ್ಲಿ ಎರಡು ಬೇರೆ ಕಥೆಗಳು ಸುಡುತ್ತವೆ: ಉತ್ತರದಲ್ಲಿ ಹೋಲಿಕಾ, ದಕ್ಷಿಣದಲ್ಲಿ ಕಾಮ. ಒಂದೇ ಹಬ್ಬ ಎರಡು ಅರ್ಥಗಳನ್ನು, ಯಾವುದೂ ಬಿಟ್ಟುಕೊಡದೆ ಹೊತ್ತಿರುವ ಅತ್ಯಂತ ಸ್ಪಷ್ಟ ಉದಾಹರಣೆಗಳಲ್ಲಿ ಇದೊಂದು.",
      hi: "आप कहाँ खड़े हैं इसके अनुसार उसी आग में दो अलग कथाएँ जलती हैं: उत्तर में होलिका, दक्षिण में काम। यह एक ही पर्व के दो अर्थ ढोने का, और किसी के न झुकने का, सबसे स्पष्ट उदाहरण है।",
    },
  },
];

/** A festival by its slug. */
export function festivalBySlug(slug: string): Festival | undefined {
  return FESTIVALS.find((f) => f.slug === slug);
}

/** The order a lunar month falls in, counting from Chaitra. */
export function monthOrder(month: string | undefined): number {
  if (!month) return 99;
  return Object.keys(LUNAR_MONTHS).indexOf(month);
}

/**
 * Where each tithi falls inside its fortnight, as a number.
 *
 * Only needed to place a festival on a drawing of the year. A tithi
 * is not a day and the two drift against each other, so this is good
 * enough to put a dot in the right part of a month and not good
 * enough for anything else.
 */
export const TITHI_NUMBER: Record<string, number> = {
  pratipada: 1,
  tritiya: 3,
  chaturthi: 4,
  panchami: 5,
  saptami: 7,
  ashtami: 8,
  navami: 9,
  dashami: 10,
  ekadashi: 11,
  dvadashi: 12,
  chaturdashi: 14,
  purnima: 15,
  amavasya: 15,
};

/** 0 at the start of the lunar month, 1 at its end. */
export function monthFraction(paksha: Paksha | undefined, tithi: string | undefined): number {
  if (!tithi) return 0.5; // a solar festival, or one fixed another way
  const n = TITHI_NUMBER[tithi] ?? 8;
  return (paksha === "krishna" ? 15 + n : n) / 30;
}
