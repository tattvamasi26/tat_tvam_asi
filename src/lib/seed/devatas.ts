import type { Locale } from "@/i18n/config";

// ─────────────────────────────────────────────────────────
//  The devatas the stotras are arranged by.
//
//  `open` devatas have at least one stotra entered in full and get a
//  page with their picture. `planned` devatas are listed under
//  "Coming soon" and have no page yet.
//
//  Every picture is a local file under a free licence (public domain
//  or CC0) and carries its credit. `width` and `height` are the file's
//  real pixel size — a unit test reads the JPEG to hold them to it —
//  so a picture is never drawn stretched.
// ─────────────────────────────────────────────────────────

export interface DevataImage {
  src: string;
  width: number;
  height: number;
  /** Which part of the picture to keep when a frame crops it. */
  position?: string;
  credit: string;
  sourceUrl: string;
  alt: Record<Locale, string>;
}

export interface DevataRow {
  slug: string;
  order: number;
  status: "open" | "planned";
  name_sanskrit: string;
  name_iast: string;
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
    name_sanskrit: "गायत्री",
    name_iast: "Gāyatrī",
    name: { en: "Gayatri", kn: "ಗಾಯತ್ರೀ", hi: "गायत्री" },
    epithet: { en: "Mother of the Vedas", kn: "ವೇದಮಾತೆ", hi: "वेदमाता" },
    blurb: {
      en: "The Gayatri mantra from the Rigveda is said at dawn, noon and dusk. Gayatri Devi is the mantra in the form of the goddess.",
      kn: "ಋಗ್ವೇದದ ಗಾಯತ್ರೀ ಮಂತ್ರವನ್ನು ಮುಂಜಾನೆ, ಮಧ್ಯಾಹ್ನ ಮತ್ತು ಸಂಜೆ ಜಪಿಸಲಾಗುತ್ತದೆ. ಗಾಯತ್ರೀ ದೇವಿ ಆ ಮಂತ್ರದ ದೇವತಾರೂಪ.",
      hi: "ऋग्वेद का गायत्री मंत्र प्रातः, मध्याह्न और सायं जपा जाता है। गायत्री देवी उसी मंत्र का देवी रूप हैं।",
    },
    image: {
      src: "/images/stutis/gayatri-devi-siddhalinga-swami.jpg",
      width: 540,
      height: 720,
      position: "50% 30%",
      credit:
        "Sri Gayatri Devi, painting by Shilpi Siddhanti Siddhalinga Swami (1870–1962), Jaganmohan Palace, Mysore — public domain, via Wikimedia Commons",
      sourceUrl:
        "https://commons.wikimedia.org/wiki/File:%E0%B2%B6%E0%B3%8D%E0%B2%B0%E0%B3%80_%E0%B2%97%E0%B2%BE%E0%B2%AF%E0%B2%A4%E0%B3%8D%E0%B2%B0%E0%B2%BF_%E0%B2%A6%E0%B3%87%E0%B2%B5%E0%B2%BF.jpg",
      alt: {
        en: "Gayatri Devi with five faces and ten arms, seated on a pink lotus in a pond with swans.",
        kn: "ಹಂಸಗಳಿರುವ ಕೊಳದಲ್ಲಿ ಗುಲಾಬಿ ಕಮಲದ ಮೇಲೆ ಕುಳಿತ ಪಂಚಮುಖಿ, ದಶಭುಜೆ ಗಾಯತ್ರೀ ದೇವಿ.",
        hi: "हंसों वाले सरोवर में गुलाबी कमल पर विराजमान पंचमुखी, दशभुजा गायत्री देवी।",
      },
    },
  },
  {
    slug: "ganesha",
    order: 2,
    status: "open",
    name_sanskrit: "गणेश",
    name_iast: "Gaṇeśa",
    name: { en: "Ganesha", kn: "ಗಣೇಶ", hi: "गणेश" },
    epithet: { en: "Remover of obstacles", kn: "ವಿಘ್ನನಿವಾರಕ", hi: "विघ्नहर्ता" },
    blurb: {
      en: "Ganesha is worshipped first, before any puja or new beginning. He removes obstacles.",
      kn: "ಯಾವುದೇ ಪೂಜೆ ಅಥವಾ ಹೊಸ ಆರಂಭದ ಮೊದಲು ಗಣೇಶನನ್ನು ಪೂಜಿಸಲಾಗುತ್ತದೆ. ಅವನು ವಿಘ್ನಗಳನ್ನು ನಿವಾರಿಸುತ್ತಾನೆ.",
      hi: "किसी भी पूजा या नए आरंभ से पहले गणेश की पूजा होती है। वे विघ्न दूर करते हैं।",
    },
    // Cropped from the museum photograph to the figure, crown to lotus.
    image: {
      src: "/images/stutis/ganesha-chola-bronze-cleveland.jpg",
      width: 1200,
      height: 1600,
      position: "50% 30%",
      credit: "Ganesha, Chola bronze, South India, c. 1070 — Cleveland Museum of Art, CC0, cropped",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Clevelandart_1970.62.jpg",
      alt: {
        en: "A Chola-period bronze of Ganesha, four-armed, standing on a lotus.",
        kn: "ಕಮಲದ ಮೇಲೆ ನಿಂತಿರುವ ಚತುರ್ಭುಜ ಗಣೇಶನ ಚೋಳರ ಕಾಲದ ಕಂಚಿನ ಮೂರ್ತಿ.",
        hi: "कमल पर खड़े चतुर्भुज गणेश की चोल काल की कांस्य प्रतिमा।",
      },
    },
  },
  {
    slug: "shiva",
    order: 3,
    status: "planned",
    name_sanskrit: "शिव",
    name_iast: "Śiva",
    name: { en: "Shiva", kn: "ಶಿವ", hi: "शिव" },
    epithet: { en: "The auspicious one", kn: "ಮಂಗಳಕರ", hi: "कल्याणकारी" },
    blurb: {
      en: "Stotras to Shiva, such as the Shiva Tandava Stotram.",
      kn: "ಶಿವತಾಂಡವ ಸ್ತೋತ್ರದಂತಹ ಶಿವನ ಸ್ತೋತ್ರಗಳು.",
      hi: "शिव तांडव स्तोत्र जैसे शिव के स्तोत्र।",
    },
  },
  {
    slug: "vishnu",
    order: 4,
    status: "planned",
    name_sanskrit: "विष्णु",
    name_iast: "Viṣṇu",
    name: { en: "Vishnu", kn: "ವಿಷ್ಣು", hi: "विष्णु" },
    epithet: { en: "The preserver", kn: "ಪಾಲಕ", hi: "पालनकर्ता" },
    blurb: {
      en: "Stotras to Vishnu, such as the Vishnu Sahasranama.",
      kn: "ವಿಷ್ಣು ಸಹಸ್ರನಾಮದಂತಹ ವಿಷ್ಣುವಿನ ಸ್ತೋತ್ರಗಳು.",
      hi: "विष्णु सहस्रनाम जैसे विष्णु के स्तोत्र।",
    },
  },
  {
    slug: "devi",
    order: 5,
    status: "planned",
    name_sanskrit: "देवी",
    name_iast: "Devī",
    name: { en: "Devi", kn: "ದೇವಿ", hi: "देवी" },
    epithet: { en: "The Mother", kn: "ಜಗನ್ಮಾತೆ", hi: "जगन्माता" },
    blurb: {
      en: "Stotras to the Devi, such as the Lalita Sahasranama.",
      kn: "ಲಲಿತಾ ಸಹಸ್ರನಾಮದಂತಹ ದೇವಿಯ ಸ್ತೋತ್ರಗಳು.",
      hi: "ललिता सहस्रनाम जैसे देवी के स्तोत्र।",
    },
  },
];
