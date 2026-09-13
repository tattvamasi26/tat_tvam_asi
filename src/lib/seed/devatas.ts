import type { Locale } from "@/i18n/config";

// ─────────────────────────────────────────────────────────
//  The devatas the stotras are arranged by.
//
//  `open` devatas have at least one stotra entered in full and get
//  their own page, picture and theme. `planned` devatas are listed
//  on the index with the stotras already summarised in corpus.ts,
//  marked plainly as not yet entered — never as readable.
//
//  `theme` picks the warmth of the page's light and its gold. Every
//  picture is a local file under a free licence — public domain, CC0
//  or CC BY-SA — and carries its credit, saying so where it has been
//  cropped; `width` and `height` are the file's real pixel size (a
//  unit test reads the JPEG to hold them to it), so nothing can be
//  drawn stretched.
// ─────────────────────────────────────────────────────────

export type DevataTheme = "savitr" | "ganapati" | "shiva" | "vishnu" | "devi";

export interface DevataImage {
  src: string;
  width: number;
  height: number;
  /** Which part of the picture to keep when the arch crops it. */
  position?: string;
  credit: string;
  sourceUrl: string;
  alt: Record<Locale, string>;
}

export interface DevataRow {
  slug: string;
  order: number;
  status: "open" | "planned";
  theme: DevataTheme;
  name_sanskrit: string;
  name_iast: string;
  /** A short Sanskrit form for decoration — a bīja or the name itself. */
  glyph: string;
  name: Record<Locale, string>;
  epithet: Record<Locale, string>;
  blurb: Record<Locale, string>;
  image?: DevataImage;
}

export const DEVATAS: DevataRow[] = [
  {
    slug: "gayatri",
    order: 1,
    status: "open",
    theme: "savitr",
    name_sanskrit: "गायत्री",
    name_iast: "Gāyatrī",
    glyph: "ॐ",
    name: { en: "Gayatri", kn: "ಗಾಯತ್ರೀ", hi: "गायत्री" },
    epithet: { en: "Mother of the Vedas", kn: "ವೇದಮಾತೆ", hi: "वेदमाता" },
    blurb: {
      en: "Gāyatrī is first a metre — three lines of eight syllables — and the verse in that metre to Savitṛ, the sun that sets the world in motion. The verse became the mantra given at every upanayana and said at the three twilights, and the mantra became a goddess: Gāyatrī, mother of the Vedas.",
      kn: "ಗಾಯತ್ರೀ ಮೊದಲು ಒಂದು ಛಂದಸ್ಸು — ಎಂಟು ಅಕ್ಷರಗಳ ಮೂರು ಪಾದಗಳು — ಮತ್ತು ಆ ಛಂದಸ್ಸಿನಲ್ಲಿ ಜಗತ್ತನ್ನು ಪ್ರೇರೇಪಿಸುವ ಸೂರ್ಯನಾದ ಸವಿತೃವಿಗೆ ಸಲ್ಲಿಸಿದ ಋಕ್ಕು. ಆ ಋಕ್ಕು ಪ್ರತಿ ಉಪನಯನದಲ್ಲಿ ಉಪದೇಶಿಸುವ, ಮೂರು ಸಂಧ್ಯೆಗಳಲ್ಲಿ ಜಪಿಸುವ ಮಂತ್ರವಾಯಿತು; ಆ ಮಂತ್ರವೇ ದೇವಿಯಾದಳು — ವೇದಮಾತೆ ಗಾಯತ್ರೀ.",
      hi: "गायत्री पहले एक छंद है — आठ-आठ अक्षरों के तीन पाद — और उसी छंद में जगत् को प्रेरित करने वाले सूर्य, सविता, की ऋचा। वह ऋचा हर उपनयन में दिया जाने वाला और तीनों संध्याओं में जपा जाने वाला मंत्र बनी, और वह मंत्र स्वयं देवी बना — वेदमाता गायत्री।",
    },
    // The mantra as it is actually kept: said at the river at sandhyā,
    // the count told on the fingers inside a cloth.
    image: {
      src: "/images/stutis/gayatri-japa-belnos-1851.jpg",
      width: 1200,
      height: 1600,
      position: "50% 72%",
      credit: "“The secret prayer” — Gayatri japa, hand-coloured lithograph by Mrs S. C. Belnos, 1851 — public domain, via Wikimedia Commons",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Gayatri_japa.jpg",
      alt: {
        en: "An elderly Brahmin seated on a mat by a river, eyes closed, telling the Gāyatrī on his fingers inside a cloth, his water-pot and vessels beside him — a hand-coloured lithograph of 1851.",
        kn: "ನದೀತೀರದಲ್ಲಿ ಚಾಪೆಯ ಮೇಲೆ ಕುಳಿತ ವೃದ್ಧ ಬ್ರಾಹ್ಮಣ, ಕಣ್ಣುಮುಚ್ಚಿ, ಬಟ್ಟೆಯೊಳಗೆ ಬೆರಳುಗಳಲ್ಲಿ ಗಾಯತ್ರಿಯನ್ನು ಎಣಿಸುತ್ತಾ ಜಪಿಸುತ್ತಿದ್ದಾರೆ; ಪಕ್ಕದಲ್ಲಿ ಕಮಂಡಲು ಮತ್ತು ಪಾತ್ರೆಗಳು — 1851ರ ಕೈಬಣ್ಣದ ಶಿಲಾಮುದ್ರಣ.",
        hi: "नदी तट पर चटाई पर बैठे वृद्ध ब्राह्मण, आँखें मूँदे, कपड़े के भीतर उँगलियों पर गिनते हुए गायत्री का जप करते; पास में कमंडलु और पात्र — 1851 का हाथ से रंगा शिलामुद्रण।",
      },
    },
  },
  {
    slug: "ganesha",
    order: 2,
    status: "open",
    theme: "ganapati",
    name_sanskrit: "गणेश",
    name_iast: "Gaṇeśa",
    glyph: "गं",
    name: { en: "Ganesha", kn: "ಗಣೇಶ", hi: "गणेश" },
    epithet: {
      en: "Lord of beginnings, remover of obstacles",
      kn: "ಆದಿಪೂಜ್ಯ, ವಿಘ್ನನಿವಾರಕ",
      hi: "प्रथमपूज्य, विघ्नहर्ता",
    },
    blurb: {
      en: "Nothing begins without him — not a pūjā, not a book, not a journey. Gaṇeśa is lord of the gaṇas, Śiva's attendant hosts; he puts obstacles in the way and takes them out of it, which is why he is honoured first and his name is the first word written.",
      kn: "ಅವನಿಲ್ಲದೆ ಯಾವುದೂ ಆರಂಭವಾಗದು — ಪೂಜೆಯಾಗಲಿ, ಗ್ರಂಥವಾಗಲಿ, ಪ್ರಯಾಣವಾಗಲಿ. ಗಣೇಶನು ಶಿವನ ಪರಿವಾರವಾದ ಗಣಗಳ ಒಡೆಯ; ವಿಘ್ನಗಳನ್ನು ತರುವವನೂ ಅವನೇ, ತೊಲಗಿಸುವವನೂ ಅವನೇ — ಆದ್ದರಿಂದಲೇ ಅವನಿಗೆ ಮೊದಲ ಪೂಜೆ, ಬರೆಯುವ ಮೊದಲ ಪದವೂ ಅವನ ಹೆಸರೇ.",
      hi: "उनके बिना कुछ आरंभ नहीं होता — न पूजा, न ग्रंथ, न यात्रा। गणेश शिव के गणों के स्वामी हैं; विघ्न रखने वाले भी वही हैं और हटाने वाले भी, इसीलिए उनकी पूजा सबसे पहले होती है और लिखा जाने वाला पहला शब्द उन्हीं का नाम होता है।",
    },
    // Cropped from the original photograph to the carved niche; CC BY-SA
    // asks that the change be stated, and the credit says so.
    image: {
      src: "/images/stutis/ganesha-hoysaleswara-halebidu.jpg",
      width: 1200,
      height: 1600,
      credit: "Dancing Ganesha, Hoysaleswara temple, Halebidu, 12th century — photograph by VasuVR, CC BY-SA 4.0, cropped, via Wikimedia Commons",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:KAHLB_09_Dancing_Ganesha_Hoysaleswara.jpg",
      alt: {
        en: "Dancing Ganesha carved into the wall of the Hoysaleswara temple at Halebidu, twelfth century, beneath an arch of scrolling stone foliage.",
        kn: "ಹಳೇಬೀಡಿನ ಹೊಯ್ಸಳೇಶ್ವರ ದೇವಾಲಯದ ಭಿತ್ತಿಯಲ್ಲಿ ಕೆತ್ತಿದ ನೃತ್ಯ ಗಣಪತಿ — ಹನ್ನೆರಡನೆಯ ಶತಮಾನ, ಕಲ್ಲಿನ ಬಳ್ಳಿಗಳ ಕಮಾನಿನಡಿ.",
        hi: "हळेबीडु के होयसळेश्वर मंदिर की भित्ति पर उकेरे नृत्य गणपति — बारहवीं शताब्दी, पत्थर की बेलों के तोरण के नीचे।",
      },
    },
  },
  {
    slug: "shiva",
    order: 3,
    status: "planned",
    theme: "shiva",
    name_sanskrit: "शिव",
    name_iast: "Śiva",
    glyph: "शिव",
    name: { en: "Shiva", kn: "ಶಿವ", hi: "शिव" },
    epithet: { en: "The auspicious one", kn: "ಮಂಗಳಕರ", hi: "कल्याणकारी" },
    blurb: {
      en: "The ascetic of Kailāsa and the dancer of Cidambaram — the stotras to Śiva are some of the most sonorous in the language.",
      kn: "ಕೈಲಾಸದ ತಪಸ್ವಿ, ಚಿದಂಬರದ ನರ್ತಕ — ಶಿವಸ್ತೋತ್ರಗಳು ಸಂಸ್ಕೃತದ ಅತ್ಯಂತ ನಾದಮಯ ರಚನೆಗಳಲ್ಲಿ ಸೇರಿವೆ.",
      hi: "कैलास के तपस्वी और चिदंबरम् के नर्तक — शिव के स्तोत्र संस्कृत की सबसे नादमय रचनाओं में हैं।",
    },
  },
  {
    slug: "vishnu",
    order: 4,
    status: "planned",
    theme: "vishnu",
    name_sanskrit: "विष्णु",
    name_iast: "Viṣṇu",
    glyph: "हरि",
    name: { en: "Vishnu", kn: "ವಿಷ್ಣು", hi: "विष्णु" },
    epithet: { en: "The all-pervading preserver", kn: "ಸರ್ವವ್ಯಾಪಿ ಪಾಲಕ", hi: "सर्वव्यापी पालनकर्ता" },
    blurb: {
      en: "Viṣṇu and his avatāras, Rāma and Kṛṣṇa among them — praised by name, a thousand times over.",
      kn: "ವಿಷ್ಣು ಮತ್ತು ರಾಮ, ಕೃಷ್ಣರನ್ನೊಳಗೊಂಡ ಅವನ ಅವತಾರಗಳು — ಸಾವಿರ ನಾಮಗಳಿಂದ ಸ್ತುತಿಸಲ್ಪಡುವವನು.",
      hi: "विष्णु और राम, कृष्ण सहित उनके अवतार — सहस्र नामों से जिनकी स्तुति होती है।",
    },
  },
  {
    slug: "devi",
    order: 5,
    status: "planned",
    theme: "devi",
    name_sanskrit: "देवी",
    name_iast: "Devī",
    glyph: "श्री",
    name: { en: "Devi", kn: "ದೇವಿ", hi: "देवी" },
    epithet: {
      en: "The Mother, as Lalitā and Durgā",
      kn: "ಲಲಿತೆ ಮತ್ತು ದುರ್ಗೆಯಾಗಿ ಜಗನ್ಮಾತೆ",
      hi: "ललिता और दुर्गा के रूप में जगन्माता",
    },
    blurb: {
      en: "The Goddess in her gentlest and her fiercest forms — the thousand names of Lalitā, and Durgā astride the lion.",
      kn: "ಅತ್ಯಂತ ಸೌಮ್ಯ ಮತ್ತು ಅತ್ಯಂತ ಉಗ್ರ ರೂಪಗಳಲ್ಲಿ ದೇವಿ — ಲಲಿತೆಯ ಸಾವಿರ ನಾಮಗಳು, ಸಿಂಹವಾಹಿನಿ ದುರ್ಗೆ.",
      hi: "अपने सबसे सौम्य और सबसे उग्र रूपों में देवी — ललिता के सहस्र नाम, और सिंहवाहिनी दुर्गा।",
    },
  },
];
