import type { Locale } from "@/i18n/config";

// ─────────────────────────────────────────────────────────
//  The eighteen Mahāpurāṇas.
//
//  The largest hole in the site: /shastras has listed this branch as
//  planned with nothing behind it since the map was built.
//
//  Four rules this file keeps, and they are all about not overstating
//  what is known.
//
//  **No Purāṇa is entered as a text here.** This is a section *about*
//  them — what each one is, what is in it, and what came out of it
//  into practice. The Rigveda took a harvest, a build step and ten
//  committed data files to enter honestly; four hundred thousand
//  ślokas are not going to arrive as a side effect of a page.
//
//  **The verse counts are traditional, not counted.** They come from
//  the Purāṇas' own lists of each other, the manuscripts disagree
//  with those lists and with one another, and Skanda's 81,100 is a
//  figure no surviving recension matches. They are given because the
//  tradition gives them, labelled as what they are.
//
//  **The list of eighteen is itself disputed.** Every enumeration
//  agrees on about fifteen. Where they differ — Devī Bhāgavata
//  against Bhāgavata, Vāyu against Śiva — the page says so rather
//  than printing one list as settled.
//
//  **The sāttvika / rājasa / tāmasa grading is sectarian and the
//  page says so.** It comes from the Padma Purāṇa, a Vaiṣṇava text,
//  and it ranks the Vaiṣṇava Purāṇas highest and the Śaiva ones
//  lowest. Printing it without that remark would be repeating a
//  partisan claim as a neutral classification.
//
//  Sanskrit is stored in Devanagari and converted by the view.
// ─────────────────────────────────────────────────────────

/** The Padma Purāṇa's grading. Sectarian; see the note above. */
export type PuranaGuna = "sattvika" | "rajasa" | "tamasa";

export interface PuranaLink {
  href: string;
  label: Record<Locale, string>;
}

export interface Purana {
  slug: string;
  name: Record<Locale, string>;
  /** In Devanagari. */
  sanskrit: string;
  /** Where it is usually placed in the list of eighteen. */
  order: number;
  /** The deity it leans to, in its own telling. */
  deity: Record<Locale, string>;
  /** As the tradition gives it. Never presented as a count. */
  verses: number;
  guna: PuranaGuna;
  /** One line: what this one is. */
  lede: Record<Locale, string>;
  /** What is actually in it. */
  about: Record<Locale, string>;
  /** What came out of it — the thing a reader is likely to have met. */
  known: Record<Locale, string>;
  /** Where it is disputed, uncertain, or not what its name suggests. */
  note?: Record<Locale, string>;
  /** Into the sections that already hold what it produced. */
  links?: PuranaLink[];
}

const L = (href: string, en: string, kn: string, hi: string): PuranaLink => ({
  href,
  label: { en, kn, hi },
});

export const PURANAS: Purana[] = [
  {
    slug: "brahma",
    name: { en: "Brahma Purāṇa", kn: "ಬ್ರಹ್ಮ ಪುರಾಣ", hi: "ब्रह्म पुराण" },
    sanskrit: "ब्रह्मपुराणम्",
    order: 1,
    deity: { en: "Brahmā, then Sūrya and Viṣṇu", kn: "ಬ್ರಹ್ಮ, ನಂತರ ಸೂರ್ಯ ಮತ್ತು ವಿಷ್ಣು", hi: "ब्रह्मा, फिर सूर्य और विष्णु" },
    verses: 10000,
    guna: "rajasa",
    lede: {
      en: "First in every list, and much less about Brahmā than its name promises.",
      kn: "ಪ್ರತಿ ಪಟ್ಟಿಯಲ್ಲೂ ಮೊದಲನೆಯದು, ಮತ್ತು ಹೆಸರು ಕೊಡುವ ಭರವಸೆಗಿಂತ ಬ್ರಹ್ಮನ ಬಗ್ಗೆ ಬಹಳ ಕಡಿಮೆ.",
      hi: "हर सूची में पहला, और नाम जितना वचन देता है उससे कहीं कम ब्रह्मा के विषय में।",
    },
    about: {
      en: "Creation, the genealogies of gods and sages, and then a long stretch on the holy places of Odisha and the Godāvarī. Much of its later material is shared almost word for word with other Purāṇas, which is ordinary in this literature rather than remarkable.",
      kn: "ಸೃಷ್ಟಿ, ದೇವತೆಗಳ ಮತ್ತು ಋಷಿಗಳ ವಂಶಾವಳಿ, ನಂತರ ಒಡಿಶಾದ ಮತ್ತು ಗೋದಾವರಿಯ ಪುಣ್ಯಕ್ಷೇತ್ರಗಳ ಬಗ್ಗೆ ದೀರ್ಘ ಭಾಗ. ಇದರ ನಂತರದ ಬಹುಪಾಲು ವಿಷಯ ಬೇರೆ ಪುರಾಣಗಳೊಂದಿಗೆ ಬಹುತೇಕ ಪದಶಃ ಹಂಚಿಕೊಂಡಿದೆ — ಈ ಸಾಹಿತ್ಯದಲ್ಲಿ ಅದು ಅಪರೂಪವಲ್ಲ, ಸಾಮಾನ್ಯ.",
      hi: "सृष्टि, देवताओं और ऋषियों की वंशावली, फिर ओडिशा तथा गोदावरी के पुण्यक्षेत्रों पर लंबा भाग। इसकी बाद की अधिकांश सामग्री अन्य पुराणों के साथ लगभग शब्दशः साझा है — इस साहित्य में यह असाधारण नहीं, सामान्य है।",
    },
    known: {
      en: "It is the main textual source for Puri Jagannātha and for Konārak, and so for a good deal of what is done in coastal Odisha.",
      kn: "ಪುರಿ ಜಗನ್ನಾಥ ಮತ್ತು ಕೋನಾರ್ಕಕ್ಕೆ ಇದೇ ಮುಖ್ಯ ಗ್ರಂಥಾಧಾರ — ಆದ್ದರಿಂದ ಕರಾವಳಿ ಒಡಿಶಾದಲ್ಲಿ ನಡೆಯುವ ಬಹಳಷ್ಟಕ್ಕೂ.",
      hi: "पुरी जगन्नाथ और कोणार्क का यही मुख्य ग्रंथाधार है — और इसलिए तटीय ओडिशा में जो कुछ होता है उसका भी।",
    },
    links: [L("/temples/odisha", "Temples of Odisha", "ಒಡಿಶಾದ ದೇವಾಲಯಗಳು", "ओडिशा के मंदिर")],
  },
  {
    slug: "padma",
    name: { en: "Padma Purāṇa", kn: "ಪದ್ಮ ಪುರಾಣ", hi: "पद्म पुराण" },
    sanskrit: "पद्मपुराणम्",
    order: 2,
    deity: { en: "Viṣṇu", kn: "ವಿಷ್ಣು", hi: "विष्णु" },
    verses: 55000,
    guna: "sattvika",
    lede: {
      en: "The second longest, and the source of most of what is kept on Ekādaśī.",
      kn: "ಎರಡನೇ ಅತಿ ದೀರ್ಘವಾದದ್ದು, ಮತ್ತು ಏಕಾದಶಿಯಂದು ಆಚರಿಸುವ ಬಹುಪಾಲು ವಿಷಯದ ಮೂಲ.",
      hi: "दूसरा सबसे लंबा, और एकादशी पर जो निभाया जाता है उसका अधिकांश स्रोत।",
    },
    about: {
      en: "Five khaṇḍas covering creation, sacred geography, the Rāma story, Kṛṣṇa's deeds and a long closing section on devotion. The Gītā Māhātmya and the Viṣṇu Sahasranāma glosses that circulate separately come from its last khaṇḍa.",
      kn: "ಸೃಷ್ಟಿ, ಪವಿತ್ರ ಭೂಗೋಳ, ರಾಮಕಥೆ, ಕೃಷ್ಣನ ಲೀಲೆಗಳು ಮತ್ತು ಭಕ್ತಿಯ ಬಗ್ಗೆ ದೀರ್ಘ ಮುಕ್ತಾಯ ಭಾಗ — ಐದು ಖಂಡಗಳು. ಪ್ರತ್ಯೇಕವಾಗಿ ಪ್ರಚಲಿತವಿರುವ ಗೀತಾ ಮಾಹಾತ್ಮ್ಯ ಮತ್ತು ವಿಷ್ಣುಸಹಸ್ರನಾಮದ ವ್ಯಾಖ್ಯಾನಗಳು ಇದರ ಕೊನೆಯ ಖಂಡದಿಂದ ಬಂದವು.",
      hi: "सृष्टि, पवित्र भूगोल, राम-कथा, कृष्ण-लीला और भक्ति पर लंबा समापन भाग — पाँच खंड। जो गीता माहात्म्य और विष्णुसहस्रनाम की व्याख्याएँ अलग से प्रचलित हैं, वे इसी के अंतिम खंड से हैं।",
    },
    known: {
      en: "The Ekādaśī observances — which one falls when, what is given up, and what is said on each — are set out here more fully than anywhere else.",
      kn: "ಏಕಾದಶಿ ವ್ರತಗಳು — ಯಾವುದು ಯಾವಾಗ, ಏನು ಬಿಡಬೇಕು, ಪ್ರತಿಯೊಂದರಲ್ಲೂ ಏನು ಹೇಳಬೇಕು — ಬೇರೆಲ್ಲಿಗಿಂತಲೂ ಪೂರ್ಣವಾಗಿ ಇಲ್ಲಿ ನಿರೂಪಿತ.",
      hi: "एकादशी व्रत — कौन-सी कब, क्या छोड़ा जाए, प्रत्येक पर क्या कहा जाए — अन्यत्र से कहीं अधिक पूर्णता से यहीं निरूपित हैं।",
    },
    note: {
      en: "The grading of all eighteen into sāttvika, rājasa and tāmasa comes from this Purāṇa, and it places itself in the top class.",
      kn: "ಹದಿನೆಂಟನ್ನೂ ಸಾತ್ತ್ವಿಕ, ರಾಜಸ, ತಾಮಸ ಎಂದು ವಿಂಗಡಿಸುವುದು ಇದೇ ಪುರಾಣ — ಮತ್ತು ತನ್ನನ್ನು ಅತ್ಯುನ್ನತ ವರ್ಗದಲ್ಲಿ ಇರಿಸಿಕೊಳ್ಳುತ್ತದೆ.",
      hi: "अठारहों का सात्त्विक, राजस और तामस में वर्गीकरण इसी पुराण से आता है — और यह स्वयं को सर्वोच्च वर्ग में रखता है।",
    },
    links: [L("/rituals/ekadashi", "Ekādaśī", "ಏಕಾದಶಿ", "एकादशी")],
  },
  {
    slug: "vishnu",
    name: { en: "Viṣṇu Purāṇa", kn: "ವಿಷ್ಣು ಪುರಾಣ", hi: "विष्णु पुराण" },
    sanskrit: "विष्णुपुराणम्",
    order: 3,
    deity: { en: "Viṣṇu", kn: "ವಿಷ್ಣು", hi: "विष्णु" },
    verses: 23000,
    guna: "sattvika",
    lede: {
      en: "The tidiest of the eighteen, and the one scholars usually call the model Purāṇa.",
      kn: "ಹದಿನೆಂಟರಲ್ಲಿ ಅತಿ ಅಚ್ಚುಕಟ್ಟಾದದ್ದು, ಮತ್ತು ವಿದ್ವಾಂಸರು ಸಾಮಾನ್ಯವಾಗಿ ಮಾದರಿ ಪುರಾಣ ಎನ್ನುವುದು ಇದನ್ನೇ.",
      hi: "अठारह में सबसे सुघड़, और विद्वान् जिसे प्रायः आदर्श पुराण कहते हैं वही।",
    },
    about: {
      en: "Alone among the eighteen it actually covers the five subjects a Purāṇa is supposed to cover — creation, dissolution and remaking, the ages of the Manus, the genealogies of gods and kings — and it does so in order and without padding.",
      kn: "ಹದಿನೆಂಟರಲ್ಲಿ ಇದೊಂದೇ ಪುರಾಣ ವಹಿಸಬೇಕಾದ ಐದು ವಿಷಯಗಳನ್ನೂ ನಿಜವಾಗಿ ವಹಿಸುತ್ತದೆ — ಸೃಷ್ಟಿ, ಪ್ರಳಯ ಮತ್ತು ಮರುಸೃಷ್ಟಿ, ಮನ್ವಂತರಗಳು, ದೇವತೆಗಳ ಮತ್ತು ರಾಜರ ವಂಶಾವಳಿ — ಮತ್ತು ಕ್ರಮವಾಗಿ, ತುಂಬುಮಾತಿಲ್ಲದೆ.",
      hi: "अठारह में केवल यही उन पाँच विषयों को वस्तुतः निभाता है जो पुराण को निभाने चाहिए — सृष्टि, प्रलय और पुनःसृष्टि, मन्वंतर, देवताओं और राजाओं की वंशावली — और वह भी क्रम से, बिना भराव के।",
    },
    known: {
      en: "The story of Prahlāda, and the ten avatāras set out as a sequence rather than scattered.",
      kn: "ಪ್ರಹ್ಲಾದನ ಕಥೆ, ಮತ್ತು ಚದುರಿ ಬಿದ್ದಿರದೆ ಒಂದು ಕ್ರಮವಾಗಿ ನಿರೂಪಿತವಾದ ದಶಾವತಾರ.",
      hi: "प्रह्लाद की कथा, और बिखरे हुए नहीं, एक क्रम में निरूपित दशावतार।",
    },
  },
  {
    slug: "shiva",
    name: { en: "Śiva Purāṇa", kn: "ಶಿವ ಪುರಾಣ", hi: "शिव पुराण" },
    sanskrit: "शिवपुराणम्",
    order: 4,
    deity: { en: "Śiva", kn: "ಶಿವ", hi: "शिव" },
    verses: 24000,
    guna: "tamasa",
    lede: {
      en: "The principal Śaiva Purāṇa, and the source of most of what is told about Śiva.",
      kn: "ಪ್ರಧಾನ ಶೈವ ಪುರಾಣ, ಮತ್ತು ಶಿವನ ಬಗ್ಗೆ ಹೇಳಲಾಗುವ ಬಹುಪಾಲು ವಿಷಯದ ಮೂಲ.",
      hi: "प्रमुख शैव पुराण, और शिव के विषय में जो कहा जाता है उसका अधिकांश स्रोत।",
    },
    about: {
      en: "Saṃhitās on the liṅga, on Satī and Pārvatī, on Śiva's marriage and on his sons. The twelve jyotirliṅgas and what is done at each are set out at length.",
      kn: "ಲಿಂಗ, ಸತೀ ಮತ್ತು ಪಾರ್ವತಿ, ಶಿವನ ವಿವಾಹ, ಅವನ ಮಕ್ಕಳು — ಇವುಗಳ ಕುರಿತ ಸಂಹಿತೆಗಳು. ಹನ್ನೆರಡು ಜ್ಯೋತಿರ್ಲಿಂಗಗಳು ಮತ್ತು ಪ್ರತಿಯೊಂದರಲ್ಲೂ ಏನು ಮಾಡಬೇಕೆಂಬುದು ವಿಸ್ತಾರವಾಗಿ ನಿರೂಪಿತ.",
      hi: "लिंग, सती और पार्वती, शिव-विवाह और उनके पुत्रों पर संहिताएँ। बारह ज्योतिर्लिंग और प्रत्येक पर क्या किया जाए, यह विस्तार से निरूपित है।",
    },
    known: {
      en: "Mahāśivarātri and the Pradoṣa observance both take their account from here.",
      kn: "ಮಹಾಶಿವರಾತ್ರಿ ಮತ್ತು ಪ್ರದೋಷ ವ್ರತ — ಎರಡರ ವಿವರಣೆಯೂ ಇಲ್ಲಿಂದಲೇ.",
      hi: "महाशिवरात्रि और प्रदोष व्रत — दोनों का विवरण यहीं से आता है।",
    },
    note: {
      en: "Some enumerations put the Vāyu Purāṇa in this slot instead, and count Śiva among the upapurāṇas.",
      kn: "ಕೆಲವು ಪಟ್ಟಿಗಳು ಈ ಸ್ಥಾನದಲ್ಲಿ ವಾಯು ಪುರಾಣವನ್ನು ಇಡುತ್ತವೆ, ಮತ್ತು ಶಿವ ಪುರಾಣವನ್ನು ಉಪಪುರಾಣಗಳಲ್ಲಿ ಎಣಿಸುತ್ತವೆ.",
      hi: "कुछ सूचियाँ इस स्थान पर वायु पुराण रखती हैं, और शिव पुराण को उपपुराणों में गिनती हैं।",
    },
    links: [
      L("/festivals/maha-shivaratri", "Mahāśivarātri", "ಮಹಾಶಿವರಾತ್ರಿ", "महाशिवरात्रि"),
      L("/rituals/pradosha", "Pradoṣa", "ಪ್ರದೋಷ", "प्रदोष"),
    ],
  },
  {
    slug: "bhagavata",
    name: { en: "Bhāgavata Purāṇa", kn: "ಭಾಗವತ ಪುರಾಣ", hi: "भागवत पुराण" },
    sanskrit: "भागवतपुराणम्",
    order: 5,
    deity: { en: "Kṛṣṇa", kn: "ಕೃಷ್ಣ", hi: "कृष्ण" },
    verses: 18000,
    guna: "sattvika",
    lede: {
      en: "The most read of the eighteen by a long way, and the one that made bhakti a literature.",
      kn: "ಹದಿನೆಂಟರಲ್ಲಿ ಬಹುದೂರ ಮುಂದೆ ನಿಂತ ಅತಿ ಹೆಚ್ಚು ಓದಲ್ಪಡುವ ಪುರಾಣ, ಮತ್ತು ಭಕ್ತಿಯನ್ನು ಸಾಹಿತ್ಯವಾಗಿಸಿದ್ದು.",
      hi: "अठारह में कहीं आगे, सबसे अधिक पढ़ा जाने वाला, और जिसने भक्ति को साहित्य बनाया।",
    },
    about: {
      en: "Twelve skandhas, of which the tenth — Kṛṣṇa's childhood and youth at Vraja — is longer and better known than most whole Purāṇas. Its Sanskrit is deliberately archaic, closer to the Veda than to the other Purāṇas, which is itself a claim about its standing.",
      kn: "ಹನ್ನೆರಡು ಸ್ಕಂಧಗಳು; ಅವುಗಳಲ್ಲಿ ಹತ್ತನೆಯದು — ವ್ರಜದಲ್ಲಿ ಕೃಷ್ಣನ ಬಾಲ್ಯ ಮತ್ತು ಯೌವನ — ಬಹುತೇಕ ಪೂರ್ಣ ಪುರಾಣಗಳಿಗಿಂತ ದೀರ್ಘವೂ ಪ್ರಸಿದ್ಧವೂ. ಇದರ ಸಂಸ್ಕೃತ ಬೇಕೆಂದೇ ಪ್ರಾಚೀನ ಶೈಲಿಯದು, ಇತರ ಪುರಾಣಗಳಿಗಿಂತ ವೇದಕ್ಕೆ ಹತ್ತಿರ — ಅದೇ ತನ್ನ ಸ್ಥಾನದ ಬಗೆಗಿನ ಒಂದು ಹೇಳಿಕೆ.",
      hi: "बारह स्कंध, जिनमें दसवाँ — व्रज में कृष्ण का बचपन और यौवन — अधिकांश पूरे पुराणों से लंबा और अधिक प्रसिद्ध है। इसकी संस्कृत जान-बूझकर प्राचीन शैली की है, अन्य पुराणों से अधिक वेद के निकट — और वही अपने स्थान के विषय में एक दावा है।",
    },
    known: {
      en: "Almost every Kṛṣṇa story anybody can tell, and the nine ways of bhakti that the devotional traditions are built on.",
      kn: "ಯಾರಾದರೂ ಹೇಳಬಲ್ಲ ಬಹುತೇಕ ಪ್ರತಿ ಕೃಷ್ಣ ಕಥೆ, ಮತ್ತು ಭಕ್ತಿ ಪರಂಪರೆಗಳು ನಿಂತಿರುವ ನವವಿಧ ಭಕ್ತಿ.",
      hi: "जो भी कृष्ण-कथा कोई सुना सकता है उसकी लगभग सब, और नवविधा भक्ति जिस पर भक्ति-परंपराएँ खड़ी हैं।",
    },
    note: {
      en: "Some lists give the eighteenth place to the Devī Bhāgavata instead, and the two have been argued over for centuries.",
      kn: "ಕೆಲವು ಪಟ್ಟಿಗಳು ಈ ಸ್ಥಾನವನ್ನು ದೇವೀ ಭಾಗವತಕ್ಕೆ ಕೊಡುತ್ತವೆ, ಮತ್ತು ಈ ಎರಡರ ಬಗ್ಗೆ ಶತಮಾನಗಳಿಂದ ವಾದ ನಡೆದಿದೆ.",
      hi: "कुछ सूचियाँ यह स्थान देवी भागवत को देती हैं, और इन दोनों पर सदियों से विवाद है।",
    },
    links: [
      L("/festivals/krishna-janmashtami", "Kṛṣṇa Janmāṣṭamī", "ಕೃಷ್ಣ ಜನ್ಮಾಷ್ಟಮಿ", "कृष्ण जन्माष्टमी"),
      L("/concepts/bhakti", "Bhakti", "ಭಕ್ತಿ", "भक्ति"),
    ],
  },
  {
    slug: "narada",
    name: { en: "Nārada Purāṇa", kn: "ನಾರದ ಪುರಾಣ", hi: "नारद पुराण" },
    sanskrit: "नारदपुराणम्",
    order: 6,
    deity: { en: "Viṣṇu", kn: "ವಿಷ್ಣು", hi: "विष्णु" },
    verses: 25000,
    guna: "sattvika",
    lede: {
      en: "Less a story than a manual: what to do, when, and in what order.",
      kn: "ಕಥೆಗಿಂತ ಹೆಚ್ಚು ಕೈಪಿಡಿ: ಏನು ಮಾಡಬೇಕು, ಯಾವಾಗ, ಯಾವ ಕ್ರಮದಲ್ಲಿ.",
      hi: "कथा से अधिक एक नियमावली: क्या करें, कब, और किस क्रम में।",
    },
    about: {
      en: "Vratas, pilgrimages, the duties of each stage of life, and a long account of the other seventeen Purāṇas — which makes it one of the main witnesses to what the list contained when it was written.",
      kn: "ವ್ರತಗಳು, ತೀರ್ಥಯಾತ್ರೆಗಳು, ಪ್ರತಿ ಆಶ್ರಮದ ಕರ್ತವ್ಯಗಳು, ಮತ್ತು ಉಳಿದ ಹದಿನೇಳು ಪುರಾಣಗಳ ದೀರ್ಘ ವಿವರಣೆ — ಆದ್ದರಿಂದ ಬರೆಯುವ ಕಾಲಕ್ಕೆ ಆ ಪಟ್ಟಿಯಲ್ಲಿ ಏನಿತ್ತು ಎಂಬುದಕ್ಕೆ ಇದು ಮುಖ್ಯ ಸಾಕ್ಷಿಗಳಲ್ಲಿ ಒಂದು.",
      hi: "व्रत, तीर्थयात्रा, प्रत्येक आश्रम के कर्तव्य, और शेष सत्रह पुराणों का विस्तृत विवरण — इसलिए जब यह लिखा गया तब उस सूची में क्या था, इसका यह एक मुख्य साक्ष्य है।",
    },
    known: {
      en: "The nine forms of devotion in their most often quoted arrangement.",
      kn: "ನವವಿಧ ಭಕ್ತಿ, ಅತಿ ಹೆಚ್ಚು ಉಲ್ಲೇಖಿಸಲಾಗುವ ರೂಪದಲ್ಲಿ.",
      hi: "नवविधा भक्ति, उसी क्रम में जिसमें वह सबसे अधिक उद्धृत होती है।",
    },
  },
  {
    slug: "markandeya",
    name: { en: "Mārkaṇḍeya Purāṇa", kn: "ಮಾರ್ಕಂಡೇಯ ಪುರಾಣ", hi: "मार्कंडेय पुराण" },
    sanskrit: "मार्कण्डेयपुराणम्",
    order: 7,
    deity: { en: "Devī; also Sūrya and Agni", kn: "ದೇವಿ; ಜೊತೆಗೆ ಸೂರ್ಯ ಮತ್ತು ಅಗ್ನಿ", hi: "देवी; साथ ही सूर्य और अग्नि" },
    verses: 9000,
    guna: "rajasa",
    lede: {
      en: "One of the shortest, and it contains the single most recited passage of any Purāṇa.",
      kn: "ಅತಿ ಚಿಕ್ಕವುಗಳಲ್ಲಿ ಒಂದು, ಮತ್ತು ಯಾವ ಪುರಾಣದಲ್ಲೂ ಇಲ್ಲದಷ್ಟು ಹೆಚ್ಚು ಪಠಿಸಲಾಗುವ ಭಾಗ ಇದರಲ್ಲಿದೆ.",
      hi: "सबसे छोटों में एक, और किसी भी पुराण का सर्वाधिक पाठ किया जाने वाला अंश इसी में है।",
    },
    about: {
      en: "A frame of questions put to sages by birds, within which sit cosmology, dharma, and the thirteen chapters called the Devī Māhātmya.",
      kn: "ಪಕ್ಷಿಗಳು ಋಷಿಗಳಿಗೆ ಕೇಳುವ ಪ್ರಶ್ನೆಗಳ ಚೌಕಟ್ಟು; ಅದರೊಳಗೆ ಸೃಷ್ಟಿವಿಜ್ಞಾನ, ಧರ್ಮ, ಮತ್ತು ದೇವೀ ಮಾಹಾತ್ಮ್ಯ ಎಂಬ ಹದಿಮೂರು ಅಧ್ಯಾಯಗಳು.",
      hi: "पक्षियों द्वारा ऋषियों से पूछे प्रश्नों का ढाँचा; उसके भीतर सृष्टिविज्ञान, धर्म, और देवी माहात्म्य नामक तेरह अध्याय।",
    },
    known: {
      en: "The Devī Māhātmya, recited through all nine nights of Navarātri, in which the goddess kills Mahiṣa, Śumbha and Niśumbha.",
      kn: "ದೇವೀ ಮಾಹಾತ್ಮ್ಯ — ನವರಾತ್ರಿಯ ಒಂಬತ್ತೂ ರಾತ್ರಿ ಪಾರಾಯಣ ಮಾಡಲಾಗುವುದು; ಅದರಲ್ಲಿ ದೇವಿ ಮಹಿಷ, ಶುಂಭ, ನಿಶುಂಭರನ್ನು ಸಂಹರಿಸುತ್ತಾಳೆ.",
      hi: "देवी माहात्म्य — नवरात्रि की नौ रातों में पाठ किया जाने वाला; जिसमें देवी महिष, शुंभ और निशुंभ का वध करती है।",
    },
    links: [L("/festivals/navaratri", "Navarātri", "ನವರಾತ್ರಿ", "नवरात्रि")],
  },
  {
    slug: "agni",
    name: { en: "Agni Purāṇa", kn: "ಅಗ್ನಿ ಪುರಾಣ", hi: "अग्नि पुराण" },
    sanskrit: "अग्निपुराणम्",
    order: 8,
    deity: { en: "No single one; Agni is the narrator", kn: "ಒಂದೇ ದೇವತೆಯಲ್ಲ; ಅಗ್ನಿ ನಿರೂಪಕ", hi: "कोई एक नहीं; अग्नि कथावाचक" },
    verses: 15400,
    guna: "tamasa",
    lede: {
      en: "Barely a Purāṇa at all — an encyclopaedia that happens to be in one.",
      kn: "ಪುರಾಣ ಎನ್ನುವುದಕ್ಕಿಂತ ಹೆಚ್ಚು ವಿಶ್ವಕೋಶ — ಆಕಸ್ಮಿಕವಾಗಿ ಒಂದು ಪುರಾಣದೊಳಗೆ ಇರುವಂಥದ್ದು.",
      hi: "पुराण से अधिक एक विश्वकोश — जो संयोग से एक पुराण के भीतर है।",
    },
    about: {
      en: "Temple architecture and image-making, grammar, prosody, law, statecraft, medicine, archery, gemmology and the care of trees — alongside the usual cosmology. If a subject existed when it was compiled, it is probably in here.",
      kn: "ದೇವಾಲಯ ವಾಸ್ತು ಮತ್ತು ಮೂರ್ತಿಶಿಲ್ಪ, ವ್ಯಾಕರಣ, ಛಂದಸ್ಸು, ಕಾನೂನು, ರಾಜನೀತಿ, ವೈದ್ಯ, ಧನುರ್ವಿದ್ಯೆ, ರತ್ನಶಾಸ್ತ್ರ ಮತ್ತು ವೃಕ್ಷಪಾಲನೆ — ಜೊತೆಗೆ ಸಾಮಾನ್ಯ ಸೃಷ್ಟಿವಿಜ್ಞಾನ. ಸಂಕಲನದ ಕಾಲಕ್ಕೆ ಒಂದು ವಿಷಯ ಇದ್ದಿದ್ದರೆ, ಅದು ಬಹುಶಃ ಇದರಲ್ಲಿದೆ.",
      hi: "मंदिर वास्तु और मूर्तिशिल्प, व्याकरण, छंद, विधि, राजनीति, चिकित्सा, धनुर्विद्या, रत्नशास्त्र और वृक्षपालन — साथ में सामान्य सृष्टिविज्ञान। संकलन के समय यदि कोई विषय था, तो वह संभवतः इसी में है।",
    },
    known: {
      en: "It is the standard source for how a temple is laid out and how an image is proportioned.",
      kn: "ದೇವಾಲಯವನ್ನು ಹೇಗೆ ಹಾಕಬೇಕು, ಮೂರ್ತಿಯ ಪ್ರಮಾಣ ಹೇಗಿರಬೇಕು ಎಂಬುದಕ್ಕೆ ಇದೇ ಪ್ರಮಾಣ ಗ್ರಂಥ.",
      hi: "मंदिर का विन्यास कैसे हो और प्रतिमा का प्रमाण क्या हो — इसके लिए यही मानक स्रोत है।",
    },
    links: [L("/temples", "Temples", "ದೇವಾಲಯಗಳು", "मंदिर")],
  },
  {
    slug: "bhavishya",
    name: { en: "Bhaviṣya Purāṇa", kn: "ಭವಿಷ್ಯ ಪುರಾಣ", hi: "भविष्य पुराण" },
    sanskrit: "भविष्यपुराणम्",
    order: 9,
    deity: { en: "Sūrya", kn: "ಸೂರ್ಯ", hi: "सूर्य" },
    verses: 14500,
    guna: "rajasa",
    lede: {
      en: "Named for what is to come, and the most obviously added to of the eighteen.",
      kn: "ಮುಂದೆ ಬರುವುದರ ಹೆಸರಿನದು, ಮತ್ತು ಹದಿನೆಂಟರಲ್ಲಿ ಅತಿ ಸ್ಪಷ್ಟವಾಗಿ ಸೇರಿಸಲ್ಪಟ್ಟದ್ದು.",
      hi: "आने वाले के नाम पर, और अठारह में सबसे स्पष्ट रूप से बाद में जोड़ा गया।",
    },
    about: {
      en: "Sun worship, vratas and festivals, and social duty. Its surviving recensions also contain passages on events of the last few centuries, which no manuscript tradition can account for as original.",
      kn: "ಸೂರ್ಯೋಪಾಸನೆ, ವ್ರತಗಳು ಮತ್ತು ಹಬ್ಬಗಳು, ಸಾಮಾಜಿಕ ಕರ್ತವ್ಯ. ಉಳಿದಿರುವ ಪಾಠಾಂತರಗಳಲ್ಲಿ ಕಳೆದ ಕೆಲವು ಶತಮಾನಗಳ ಘಟನೆಗಳ ಬಗೆಗಿನ ಭಾಗಗಳೂ ಇವೆ — ಯಾವ ಹಸ್ತಪ್ರತಿ ಪರಂಪರೆಯೂ ಅವನ್ನು ಮೂಲವೆಂದು ಸಮರ್ಥಿಸಲಾರದು.",
      hi: "सूर्योपासना, व्रत और पर्व, सामाजिक कर्तव्य। इसके उपलब्ध पाठों में पिछली कुछ शताब्दियों की घटनाओं के अंश भी हैं — जिन्हें कोई पांडुलिपि-परंपरा मूल नहीं ठहरा सकती।",
    },
    known: {
      en: "Much of the vrata calendar in common use is drawn from it.",
      kn: "ಪ್ರಚಲಿತ ವ್ರತ ಪಂಚಾಂಗದ ಬಹುಪಾಲು ಇದರಿಂದ ಬಂದದ್ದು.",
      hi: "प्रचलित व्रत-पंचांग का अधिकांश इसी से लिया गया है।",
    },
    note: {
      en: "The late interpolations are well attested and are not a matter of dispute among editors; treat any prophecy quoted from it accordingly.",
      kn: "ತಡವಾದ ಪ್ರಕ್ಷೇಪಗಳು ಚೆನ್ನಾಗಿ ದಾಖಲಾಗಿವೆ ಮತ್ತು ಸಂಪಾದಕರಲ್ಲಿ ಅವುಗಳ ಬಗ್ಗೆ ವಿವಾದವಿಲ್ಲ; ಇದರಿಂದ ಉಲ್ಲೇಖಿಸಲಾಗುವ ಯಾವುದೇ ಭವಿಷ್ಯವಾಣಿಯನ್ನು ಅದಕ್ಕೆ ತಕ್ಕಂತೆ ನೋಡಿ.",
      hi: "परवर्ती प्रक्षेप भली-भाँति प्रमाणित हैं और संपादकों में उन पर विवाद नहीं; इससे उद्धृत किसी भी भविष्यवाणी को तदनुसार ही देखें।",
    },
  },
  {
    slug: "brahmavaivarta",
    name: { en: "Brahmavaivarta Purāṇa", kn: "ಬ್ರಹ್ಮವೈವರ್ತ ಪುರಾಣ", hi: "ब्रह्मवैवर्त पुराण" },
    sanskrit: "ब्रह्मवैवर्तपुराणम्",
    order: 10,
    deity: { en: "Kṛṣṇa and Rādhā", kn: "ಕೃಷ್ಣ ಮತ್ತು ರಾಧೆ", hi: "कृष्ण और राधा" },
    verses: 18000,
    guna: "rajasa",
    lede: {
      en: "The text that gives Rādhā her theology.",
      kn: "ರಾಧೆಗೆ ತತ್ತ್ವಶಾಸ್ತ್ರವನ್ನು ಕೊಡುವ ಗ್ರಂಥ.",
      hi: "जो ग्रंथ राधा को उनका तत्त्वशास्त्र देता है।",
    },
    about: {
      en: "Four khaṇḍas on Brahmā, on Prakṛti, on Gaṇeśa and on Kṛṣṇa's birth. Kṛṣṇa here is not an avatāra of Viṣṇu but the supreme himself, with Rādhā as his inseparable power.",
      kn: "ಬ್ರಹ್ಮ, ಪ್ರಕೃತಿ, ಗಣೇಶ ಮತ್ತು ಕೃಷ್ಣಜನ್ಮ — ನಾಲ್ಕು ಖಂಡಗಳು. ಇಲ್ಲಿ ಕೃಷ್ಣ ವಿಷ್ಣುವಿನ ಅವತಾರವಲ್ಲ, ಸ್ವಯಂ ಪರಮ; ರಾಧೆ ಅವನ ಅಭಿನ್ನ ಶಕ್ತಿ.",
      hi: "ब्रह्मा, प्रकृति, गणेश और कृष्ण-जन्म पर चार खंड। यहाँ कृष्ण विष्णु के अवतार नहीं, स्वयं परम हैं; राधा उनकी अभिन्न शक्ति।",
    },
    known: {
      en: "The Rādhā–Kṛṣṇa devotion of the later Vaiṣṇava schools rests largely on it.",
      kn: "ನಂತರದ ವೈಷ್ಣವ ಪಂಥಗಳ ರಾಧಾ-ಕೃಷ್ಣ ಭಕ್ತಿ ಬಹುಪಾಲು ಇದರ ಮೇಲೆಯೇ ನಿಂತಿದೆ.",
      hi: "परवर्ती वैष्णव संप्रदायों की राधा-कृष्ण भक्ति मुख्यतः इसी पर टिकी है।",
    },
  },
  {
    slug: "linga",
    name: { en: "Liṅga Purāṇa", kn: "ಲಿಂಗ ಪುರಾಣ", hi: "लिंग पुराण" },
    sanskrit: "लिङ्गपुराणम्",
    order: 11,
    deity: { en: "Śiva", kn: "ಶಿವ", hi: "शिव" },
    verses: 11000,
    guna: "tamasa",
    lede: {
      en: "What the liṅga is, and why it is not what most people are told it is.",
      kn: "ಲಿಂಗವೆಂದರೇನು, ಮತ್ತು ಬಹುತೇಕರಿಗೆ ಹೇಳಲಾಗುವಂಥದ್ದು ಅದು ಏಕೆ ಅಲ್ಲ.",
      hi: "लिंग क्या है, और वह वह क्यों नहीं जो अधिकांश लोगों को बताया जाता है।",
    },
    about: {
      en: "Cosmology, the yugas, and Śiva's forms and manifestations, built around the account of the beginningless pillar of light that neither Brahmā nor Viṣṇu could find an end to.",
      kn: "ಸೃಷ್ಟಿವಿಜ್ಞಾನ, ಯುಗಗಳು, ಶಿವನ ರೂಪಗಳು ಮತ್ತು ಅವತಾರಗಳು — ಬ್ರಹ್ಮನಿಗೂ ವಿಷ್ಣುವಿಗೂ ಕೊನೆ ಕಾಣದ ಅನಾದಿ ಜ್ಯೋತಿಸ್ತಂಭದ ಕಥೆಯ ಸುತ್ತ ಕಟ್ಟಲಾಗಿದೆ.",
      hi: "सृष्टिविज्ञान, युग, और शिव के रूप तथा अवतार — उस अनादि ज्योतिस्तंभ की कथा के चारों ओर रचे गए, जिसका अंत न ब्रह्मा को मिला न विष्णु को।",
    },
    known: {
      en: "The jyotirliṅga story, which is where the word liṅga gets its sense of a mark or sign rather than anything anatomical.",
      kn: "ಜ್ಯೋತಿರ್ಲಿಂಗದ ಕಥೆ — ಲಿಂಗ ಎಂಬ ಪದಕ್ಕೆ ಶಾರೀರಿಕವಾದ ಯಾವುದೇ ಅರ್ಥಕ್ಕಿಂತ ಗುರುತು ಅಥವಾ ಚಿಹ್ನೆ ಎಂಬ ಅರ್ಥ ಬರುವುದು ಇಲ್ಲಿಂದಲೇ.",
      hi: "ज्योतिर्लिंग की कथा — जहाँ से लिंग शब्द को किसी शारीरिक अर्थ के बजाय चिह्न या संकेत का अर्थ मिलता है।",
    },
  },
  {
    slug: "varaha",
    name: { en: "Varāha Purāṇa", kn: "ವರಾಹ ಪುರಾಣ", hi: "वराह पुराण" },
    sanskrit: "वराहपुराणम्",
    order: 12,
    deity: { en: "Viṣṇu as the boar", kn: "ವರಾಹ ರೂಪದ ವಿಷ್ಣು", hi: "वराह रूप में विष्णु" },
    verses: 24000,
    guna: "sattvika",
    lede: {
      en: "Told by Viṣṇu to the earth he has just lifted out of the water.",
      kn: "ತಾನು ಈಗಷ್ಟೇ ನೀರಿನಿಂದ ಮೇಲೆತ್ತಿದ ಭೂಮಿಗೆ ವಿಷ್ಣು ಹೇಳುವುದು.",
      hi: "जिस पृथ्वी को अभी-अभी जल से ऊपर उठाया, उसी को विष्णु द्वारा कहा गया।",
    },
    about: {
      en: "Vratas, the duties of a householder, and a great deal of sacred geography — particularly Mathurā and the sites along the Yamunā.",
      kn: "ವ್ರತಗಳು, ಗೃಹಸ್ಥನ ಕರ್ತವ್ಯಗಳು, ಮತ್ತು ಸಾಕಷ್ಟು ಪವಿತ್ರ ಭೂಗೋಳ — ಮುಖ್ಯವಾಗಿ ಮಥುರಾ ಮತ್ತು ಯಮುನಾ ತೀರದ ಕ್ಷೇತ್ರಗಳು.",
      hi: "व्रत, गृहस्थ के कर्तव्य, और पर्याप्त पवित्र भूगोल — विशेषतः मथुरा और यमुना-तट के क्षेत्र।",
    },
    known: {
      en: "The boar lifting the earth, which is among the oldest of the avatāra stories and older than the list of ten.",
      kn: "ಭೂಮಿಯನ್ನು ಮೇಲೆತ್ತುವ ವರಾಹ — ಅವತಾರ ಕಥೆಗಳಲ್ಲಿ ಅತಿ ಪ್ರಾಚೀನವಾದವುಗಳಲ್ಲಿ ಒಂದು, ಮತ್ತು ಹತ್ತರ ಪಟ್ಟಿಗಿಂತಲೂ ಹಳೆಯದು.",
      hi: "पृथ्वी को उठाता वराह — अवतार-कथाओं में प्राचीनतम में से एक, और दस की सूची से भी पुरानी।",
    },
  },
  {
    slug: "skanda",
    name: { en: "Skanda Purāṇa", kn: "ಸ್ಕಾಂದ ಪುರಾಣ", hi: "स्कंद पुराण" },
    sanskrit: "स्कन्दपुराणम्",
    order: 13,
    deity: { en: "Skanda, and Śiva", kn: "ಸ್ಕಂದ, ಮತ್ತು ಶಿವ", hi: "स्कंद, और शिव" },
    verses: 81100,
    guna: "tamasa",
    lede: {
      en: "By far the longest, and more a library of local traditions than a single book.",
      kn: "ಬಹುದೂರ ಮುಂದೆ ನಿಂತ ಅತಿ ದೀರ್ಘವಾದದ್ದು — ಒಂದೇ ಗ್ರಂಥಕ್ಕಿಂತ ಹೆಚ್ಚು ಸ್ಥಳೀಯ ಪರಂಪರೆಗಳ ಗ್ರಂಥಾಲಯ.",
      hi: "कहीं आगे, सबसे लंबा — एक पुस्तक से अधिक स्थानीय परंपराओं का पुस्तकालय।",
    },
    about: {
      en: "Khaṇḍas devoted to particular regions and shrines: Kāśī, Kedāra, Badarī, Puruṣottama, Avantī, Reva. Most of what a place in India says about itself can be found somewhere in here.",
      kn: "ನಿರ್ದಿಷ್ಟ ಪ್ರದೇಶಗಳಿಗೆ ಮತ್ತು ಕ್ಷೇತ್ರಗಳಿಗೆ ಮೀಸಲಾದ ಖಂಡಗಳು: ಕಾಶೀ, ಕೇದಾರ, ಬದರೀ, ಪುರುಷೋತ್ತಮ, ಅವಂತೀ, ರೇವಾ. ಭಾರತದ ಒಂದು ಸ್ಥಳ ತನ್ನ ಬಗ್ಗೆ ಹೇಳುವುದರ ಬಹುಪಾಲು ಇದರಲ್ಲಿ ಎಲ್ಲೋ ಸಿಗುತ್ತದೆ.",
      hi: "विशेष प्रदेशों और क्षेत्रों को समर्पित खंड: काशी, केदार, बदरी, पुरुषोत्तम, अवंती, रेवा। भारत का कोई स्थान अपने विषय में जो कहता है उसका अधिकांश कहीं न कहीं इसी में मिलता है।",
    },
    known: {
      en: "The Kāśī Khaṇḍa, and the account of Skanda's birth and his war with Tāraka.",
      kn: "ಕಾಶೀ ಖಂಡ, ಮತ್ತು ಸ್ಕಂದನ ಜನನ ಹಾಗೂ ತಾರಕನೊಡನೆ ಅವನ ಯುದ್ಧದ ವಿವರಣೆ.",
      hi: "काशी खंड, और स्कंद के जन्म तथा तारक के साथ उनके युद्ध का विवरण।",
    },
    note: {
      en: "Its traditional figure of 81,100 verses matches no surviving recension, and the manuscripts differ from one another more than for any other Purāṇa.",
      kn: "೮೧,೧೦೦ ಶ್ಲೋಕಗಳ ಸಾಂಪ್ರದಾಯಿಕ ಸಂಖ್ಯೆಗೆ ಉಳಿದಿರುವ ಯಾವ ಪಾಠಾಂತರವೂ ಹೊಂದುವುದಿಲ್ಲ, ಮತ್ತು ಬೇರೆ ಯಾವ ಪುರಾಣಕ್ಕಿಂತಲೂ ಇದರ ಹಸ್ತಪ್ರತಿಗಳು ಪರಸ್ಪರ ಹೆಚ್ಚು ಭಿನ್ನ.",
      hi: "८१,१०० श्लोकों की पारंपरिक संख्या से कोई भी उपलब्ध पाठ मेल नहीं खाता, और किसी भी अन्य पुराण की तुलना में इसकी पांडुलिपियाँ परस्पर अधिक भिन्न हैं।",
    },
  },
  {
    slug: "vamana",
    name: { en: "Vāmana Purāṇa", kn: "ವಾಮನ ಪುರಾಣ", hi: "वामन पुराण" },
    sanskrit: "वामनपुराणम्",
    order: 14,
    deity: { en: "Viṣṇu as the dwarf; also Śiva", kn: "ವಾಮನ ರೂಪದ ವಿಷ್ಣು; ಜೊತೆಗೆ ಶಿವ", hi: "वामन रूप में विष्णु; साथ ही शिव" },
    verses: 10000,
    guna: "rajasa",
    lede: {
      en: "Three steps, and a king who keeps his word knowing what it will cost.",
      kn: "ಮೂರು ಹೆಜ್ಜೆ, ಮತ್ತು ಬೆಲೆ ಏನೆಂದು ತಿಳಿದೂ ಮಾತು ಉಳಿಸಿಕೊಳ್ಳುವ ಒಬ್ಬ ರಾಜ.",
      hi: "तीन पग, और एक राजा जो मूल्य जानते हुए भी वचन निभाता है।",
    },
    about: {
      en: "The Vāmana story, pilgrimage accounts of Kurukṣetra, and — unusually for a Vaiṣṇava-named text — a good deal of Śaiva material.",
      kn: "ವಾಮನ ಕಥೆ, ಕುರುಕ್ಷೇತ್ರದ ತೀರ್ಥ ವಿವರಣೆಗಳು, ಮತ್ತು — ವೈಷ್ಣವ ಹೆಸರಿನ ಗ್ರಂಥಕ್ಕೆ ಅಸಾಮಾನ್ಯವಾಗಿ — ಸಾಕಷ್ಟು ಶೈವ ವಿಷಯ.",
      hi: "वामन-कथा, कुरुक्षेत्र के तीर्थ-विवरण, और — वैष्णव नाम वाले ग्रंथ के लिए असामान्य रूप से — पर्याप्त शैव सामग्री।",
    },
    known: {
      en: "Bali, who is honoured rather than condemned, and whose yearly return is kept as Onam in Kerala and as Balipāḍyami at Dīpāvali.",
      kn: "ಬಲಿ — ಖಂಡಿಸಲ್ಪಡುವುದಿಲ್ಲ, ಗೌರವಿಸಲ್ಪಡುತ್ತಾನೆ; ಅವನ ವಾರ್ಷಿಕ ಮರಳುವಿಕೆಯನ್ನು ಕೇರಳದಲ್ಲಿ ಓಣಂ ಆಗಿ, ದೀಪಾವಳಿಯಲ್ಲಿ ಬಲಿಪಾಡ್ಯಮಿಯಾಗಿ ಆಚರಿಸುತ್ತಾರೆ.",
      hi: "बलि — निंदित नहीं, सम्मानित; उनकी वार्षिक वापसी केरल में ओणम और दीपावली में बलिपाड्यमि के रूप में मनाई जाती है।",
    },
    links: [L("/festivals/deepavali", "Dīpāvali", "ದೀಪಾವಳಿ", "दीपावली")],
  },
  {
    slug: "kurma",
    name: { en: "Kūrma Purāṇa", kn: "ಕೂರ್ಮ ಪುರಾಣ", hi: "कूर्म पुराण" },
    sanskrit: "कूर्मपुराणम्",
    order: 15,
    deity: { en: "Viṣṇu as the tortoise; strongly Śaiva in parts", kn: "ಕೂರ್ಮ ರೂಪದ ವಿಷ್ಣು; ಕೆಲವೆಡೆ ಬಲವಾಗಿ ಶೈವ", hi: "कूर्म रूप में विष्णु; कुछ भागों में प्रबल शैव" },
    verses: 17000,
    guna: "tamasa",
    lede: {
      en: "The churning of the ocean, told by the tortoise who held the mountain up.",
      kn: "ಸಮುದ್ರ ಮಥನ — ಪರ್ವತವನ್ನು ಹೊತ್ತ ಕೂರ್ಮನೇ ಹೇಳುವುದು.",
      hi: "समुद्र मंथन — उसी कूर्म द्वारा कहा गया जिसने पर्वत को थामा।",
    },
    about: {
      en: "The churning, cosmology, the duties of the four stages, and the Īśvara Gītā — a dialogue in Śiva's voice that answers the Bhagavad Gītā form for form.",
      kn: "ಮಥನ, ಸೃಷ್ಟಿವಿಜ್ಞಾನ, ನಾಲ್ಕು ಆಶ್ರಮಗಳ ಕರ್ತವ್ಯಗಳು, ಮತ್ತು ಈಶ್ವರ ಗೀತೆ — ಭಗವದ್ಗೀತೆಯ ರೂಪಕ್ಕೆ ರೂಪದಲ್ಲೇ ಉತ್ತರಿಸುವ, ಶಿವನ ಧ್ವನಿಯಲ್ಲಿನ ಸಂವಾದ.",
      hi: "मंथन, सृष्टिविज्ञान, चार आश्रमों के कर्तव्य, और ईश्वर गीता — शिव के स्वर में एक संवाद, जो भगवद्गीता के रूप का रूप से ही उत्तर देता है।",
    },
    known: {
      en: "The fourteen treasures the ocean gave up, and the poison Śiva drank before the nectar arrived.",
      kn: "ಸಮುದ್ರ ಕೊಟ್ಟ ಹದಿನಾಲ್ಕು ರತ್ನಗಳು, ಮತ್ತು ಅಮೃತ ಬರುವ ಮೊದಲು ಶಿವ ಕುಡಿದ ವಿಷ.",
      hi: "समुद्र से निकले चौदह रत्न, और अमृत से पहले शिव द्वारा पिया गया विष।",
    },
    links: [L("/rituals/pradosha", "Pradoṣa", "ಪ್ರದೋಷ", "प्रदोष")],
  },
  {
    slug: "matsya",
    name: { en: "Matsya Purāṇa", kn: "ಮತ್ಸ್ಯ ಪುರಾಣ", hi: "मत्स्य पुराण" },
    sanskrit: "मत्स्यपुराणम्",
    order: 16,
    deity: { en: "Viṣṇu as the fish; much Śaiva material", kn: "ಮತ್ಸ್ಯ ರೂಪದ ವಿಷ್ಣು; ಸಾಕಷ್ಟು ಶೈವ ವಿಷಯ", hi: "मत्स्य रूप में विष्णु; पर्याप्त शैव सामग्री" },
    verses: 14000,
    guna: "tamasa",
    lede: {
      en: "The flood, the boat, and the man who was warned in time.",
      kn: "ಪ್ರಳಯ, ದೋಣಿ, ಮತ್ತು ಸಕಾಲದಲ್ಲಿ ಎಚ್ಚರಿಕೆ ಪಡೆದ ಮನು.",
      hi: "प्रलय, नौका, और वह मनु जिसे समय रहते चेताया गया।",
    },
    about: {
      en: "Among the oldest of the eighteen on linguistic grounds. Besides the flood it carries genealogies, temple building, image-making and the rules for śrāddha.",
      kn: "ಭಾಷಾ ಆಧಾರದ ಮೇಲೆ ಹದಿನೆಂಟರಲ್ಲಿ ಅತಿ ಪ್ರಾಚೀನವಾದವುಗಳಲ್ಲಿ ಒಂದು. ಪ್ರಳಯದ ಜೊತೆಗೆ ವಂಶಾವಳಿ, ದೇವಾಲಯ ನಿರ್ಮಾಣ, ಮೂರ್ತಿಶಿಲ್ಪ ಮತ್ತು ಶ್ರಾದ್ಧದ ನಿಯಮಗಳನ್ನು ಹೊಂದಿದೆ.",
      hi: "भाषिक आधार पर अठारह में प्राचीनतम में से एक। प्रलय के साथ-साथ इसमें वंशावली, मंदिर-निर्माण, मूर्तिशिल्प और श्राद्ध के नियम हैं।",
    },
    known: {
      en: "The flood story, which is the Indian member of a family of such stories found all across the ancient world.",
      kn: "ಪ್ರಳಯದ ಕಥೆ — ಪ್ರಾಚೀನ ಜಗತ್ತಿನಾದ್ಯಂತ ಕಾಣುವ ಇಂಥ ಕಥೆಗಳ ಕುಟುಂಬದ ಭಾರತೀಯ ಸದಸ್ಯ.",
      hi: "प्रलय-कथा — प्राचीन संसार भर में मिलने वाली ऐसी कथाओं के परिवार की भारतीय सदस्य।",
    },
    links: [L("/rituals/shraddha", "Śrāddha", "ಶ್ರಾದ್ಧ", "श्राद्ध")],
  },
  {
    slug: "garuda",
    name: { en: "Garuḍa Purāṇa", kn: "ಗರುಡ ಪುರಾಣ", hi: "गरुड़ पुराण" },
    sanskrit: "गरुडपुराणम्",
    order: 17,
    deity: { en: "Viṣṇu", kn: "ವಿಷ್ಣು", hi: "विष्णु" },
    verses: 19000,
    guna: "sattvika",
    lede: {
      en: "Read in houses where somebody has just died, and known for almost nothing else.",
      kn: "ಯಾರಾದರೂ ಈಗಷ್ಟೇ ಸತ್ತ ಮನೆಗಳಲ್ಲಿ ಓದಲಾಗುವುದು, ಮತ್ತು ಬೇರೆ ಬಹುತೇಕ ಯಾವುದಕ್ಕೂ ಪರಿಚಿತವಲ್ಲ.",
      hi: "जिन घरों में अभी कोई गया हो वहाँ पढ़ा जाने वाला, और शेष लगभग किसी बात के लिए अज्ञात।",
    },
    about: {
      en: "Two very different halves. The first is medicine, gemmology, grammar and statecraft; the second, the Pretakalpa, is what the soul meets after death and what the living owe it.",
      kn: "ಎರಡು ಬಹು ಭಿನ್ನ ಭಾಗಗಳು. ಮೊದಲನೆಯದು ವೈದ್ಯ, ರತ್ನಶಾಸ್ತ್ರ, ವ್ಯಾಕರಣ ಮತ್ತು ರಾಜನೀತಿ; ಎರಡನೆಯದು ಪ್ರೇತಕಲ್ಪ — ಮರಣದ ನಂತರ ಆತ್ಮ ಎದುರಿಸುವುದು ಮತ್ತು ಬದುಕಿರುವವರು ಅದಕ್ಕೆ ಸಲ್ಲಿಸಬೇಕಾದದ್ದು.",
      hi: "दो बहुत भिन्न भाग। पहला चिकित्सा, रत्नशास्त्र, व्याकरण और राजनीति; दूसरा प्रेतकल्प — मृत्यु के बाद आत्मा जिससे मिलती है और जीवित जो उसे देते हैं।",
    },
    known: {
      en: "The Pretakalpa, and with it the whole shape of the ten days after a death.",
      kn: "ಪ್ರೇತಕಲ್ಪ, ಮತ್ತು ಅದರೊಂದಿಗೆ ಮರಣದ ನಂತರದ ಹತ್ತು ದಿನಗಳ ಇಡೀ ರೂಪ.",
      hi: "प्रेतकल्प, और उसी के साथ मृत्यु के बाद के दस दिनों का पूरा ढाँचा।",
    },
    links: [
      L("/rituals/antyeshti", "Antyeṣṭi", "ಅಂತ್ಯೇಷ್ಟಿ", "अंत्येष्टि"),
      L("/rituals/shraddha", "Śrāddha", "ಶ್ರಾದ್ಧ", "श्राद्ध"),
    ],
  },
  {
    slug: "brahmanda",
    name: { en: "Brahmāṇḍa Purāṇa", kn: "ಬ್ರಹ್ಮಾಂಡ ಪುರಾಣ", hi: "ब्रह्मांड पुराण" },
    sanskrit: "ब्रह्माण्डपुराणम्",
    order: 18,
    deity: { en: "No single one; Lalitā in its best known part", kn: "ಒಂದೇ ದೇವತೆಯಲ್ಲ; ಅತಿ ಪ್ರಸಿದ್ಧ ಭಾಗದಲ್ಲಿ ಲಲಿತಾ", hi: "कोई एक नहीं; सर्वाधिक प्रसिद्ध भाग में ललिता" },
    verses: 12000,
    guna: "rajasa",
    lede: {
      en: "Last in the list, and the source of one of the most recited texts in the tradition.",
      kn: "ಪಟ್ಟಿಯಲ್ಲಿ ಕೊನೆಯದು, ಮತ್ತು ಪರಂಪರೆಯಲ್ಲಿ ಅತಿ ಹೆಚ್ಚು ಪಠಿಸಲಾಗುವ ಗ್ರಂಥಗಳಲ್ಲಿ ಒಂದರ ಮೂಲ.",
      hi: "सूची में अंतिम, और परंपरा के सर्वाधिक पाठ किए जाने वाले ग्रंथों में एक का स्रोत।",
    },
    about: {
      en: "Named for the cosmic egg, and largely concerned with the shape and measure of the universe, the yugas and the lines of kings.",
      kn: "ಬ್ರಹ್ಮಾಂಡದ ಹೆಸರಿನದು; ಮುಖ್ಯವಾಗಿ ವಿಶ್ವದ ರೂಪ ಮತ್ತು ಅಳತೆ, ಯುಗಗಳು ಮತ್ತು ರಾಜವಂಶಗಳ ಬಗ್ಗೆ.",
      hi: "ब्रह्मांड के नाम पर; मुख्यतः विश्व के आकार और माप, युगों तथा राजवंशों के विषय में।",
    },
    known: {
      en: "The Lalitā Sahasranāma and the Lalitopākhyāna, which carry the Śrīvidyā tradition.",
      kn: "ಲಲಿತಾ ಸಹಸ್ರನಾಮ ಮತ್ತು ಲಲಿತೋಪಾಖ್ಯಾನ — ಶ್ರೀವಿದ್ಯಾ ಪರಂಪರೆಯನ್ನು ಹೊತ್ತಿರುವವು.",
      hi: "ललिता सहस्रनाम और ललितोपाख्यान, जो श्रीविद्या परंपरा को धारण करते हैं।",
    },
    links: [L("/stutis", "Stotras", "ಸ್ತೋತ್ರಗಳು", "स्तोत्र")],
  },
];

export function puranaBySlug(slug: string): Purana | undefined {
  return PURANAS.find((p) => p.slug === slug);
}

export function puranasInOrder(): Purana[] {
  return [...PURANAS].sort((a, b) => a.order - b.order);
}

export function puranasByGuna(guna: PuranaGuna): Purana[] {
  return puranasInOrder().filter((p) => p.guna === guna);
}

/** The traditional total, added up from the figures the tradition gives. */
export function traditionalVerseTotal(): number {
  return PURANAS.reduce((n, p) => n + p.verses, 0);
}
