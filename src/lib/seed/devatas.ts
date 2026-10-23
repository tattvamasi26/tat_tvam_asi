import type { Locale } from "@/i18n/config";
import type { StotraGroup } from "./stotras";
import { GANESHA_BRUSH, GANESHA_GARLANDS, GANESHA_LAMPS, GANESHA_MANTRA } from "./stuti-images";

// ─────────────────────────────────────────────────────────
//  The devatas the stotras are arranged by.
//
//  `open` devatas have at least one stotra entered in full and get a
//  page with their picture. `planned` devatas are listed under
//  "Coming soon" and have no page yet.
//
//  Every picture is a local file and carries its credit. The devatas'
//  own portraits are under free licences (public domain or CC0) and
//  link to their source; the pictures in stuti-images.ts were supplied
//  by the site's owner. `width` and `height` are the file's real pixel
//  size — a unit test reads the JPEG to hold them to it — so a picture
//  is never drawn stretched.
// ─────────────────────────────────────────────────────────

export interface DevataImage {
  src: string;
  width: number;
  height: number;
  /** Which part of the picture to keep when a frame crops it. */
  position?: string;
  credit: string;
  /** Where the picture came from. Absent for one supplied without a source. */
  sourceUrl?: string;
  alt: Record<Locale, string>;
}

/** A festival of the devata's, given a band of its own on their page. */
export interface DevataFestival {
  name: Record<Locale, string>;
  /** When it falls, in the lunar calendar — not a date that goes stale. */
  when: Record<Locale, string>;
  text: Record<Locale, string>;
  image: DevataImage;
  /** The stotra the band points to, by slug. */
  stotra: string;
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
  festival?: DevataFestival;
  /** A picture beside each section of their page, when it has sections. */
  groupImages?: Partial<Record<StotraGroup, DevataImage>>;
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
    festival: {
      name: { en: "Ganesha Chaturthi", kn: "ಗಣೇಶ ಚತುರ್ಥಿ", hi: "गणेश चतुर्थी" },
      when: { en: "Bhadrapada Shukla Chaturthi", kn: "ಭಾದ್ರಪದ ಶುಕ್ಲ ಚತುರ್ಥಿ", hi: "भाद्रपद शुक्ल चतुर्थी" },
      text: {
        en: "Ganesha Chaturthi falls on the fourth day of the bright half of Bhadrapada. A clay image of Ganesha is brought home and worshipped with modakas, durva grass and red flowers, and the Atharvashirsha is recited. After a few days the image is immersed in water.",
        kn: "ಗಣೇಶ ಚತುರ್ಥಿ ಭಾದ್ರಪದ ಮಾಸದ ಶುಕ್ಲ ಪಕ್ಷದ ನಾಲ್ಕನೆಯ ದಿನ ಬರುತ್ತದೆ. ಮಣ್ಣಿನ ಗಣೇಶ ಮೂರ್ತಿಯನ್ನು ಮನೆಗೆ ತಂದು ಮೋದಕ, ಗರಿಕೆ ಮತ್ತು ಕೆಂಪು ಹೂಗಳಿಂದ ಪೂಜಿಸಿ, ಅಥರ್ವಶೀರ್ಷವನ್ನು ಪಠಿಸಲಾಗುತ್ತದೆ. ಕೆಲವು ದಿನಗಳ ನಂತರ ಮೂರ್ತಿಯನ್ನು ನೀರಿನಲ್ಲಿ ವಿಸರ್ಜಿಸಲಾಗುತ್ತದೆ.",
        hi: "गणेश चतुर्थी भाद्रपद मास के शुक्ल पक्ष के चौथे दिन आती है। मिट्टी की गणेश प्रतिमा घर लाकर मोदक, दूर्वा और लाल फूलों से पूजी जाती है और अथर्वशीर्ष का पाठ होता है। कुछ दिनों बाद प्रतिमा का जल में विसर्जन किया जाता है।",
      },
      image: GANESHA_LAMPS,
      stotra: "ganapati-atharvashirsha",
    },
    groupImages: {
      daily: GANESHA_GARLANDS,
      vedic: GANESHA_MANTRA,
      stotra: GANESHA_BRUSH,
    },
  },
  {
    slug: "subrahmanya",
    order: 3,
    status: "planned",
    name_sanskrit: "सुब्रह्मण्य",
    name_iast: "Subrahmaṇya",
    name: { en: "Subrahmanya", kn: "ಸುಬ್ರಹ್ಮಣ್ಯ", hi: "सुब्रह्मण्य" },
    epithet: { en: "Skanda, son of Shiva", kn: "ಶಿವಪುತ್ರ ಸ್ಕಂದ", hi: "शिवपुत्र स्कंद" },
    blurb: {
      en: "Subrahmanya, also called Skanda, Kartikeya and Murugan, is the son of Shiva and Parvati and the commander of the gods.",
      kn: "ಸ್ಕಂದ, ಕಾರ್ತಿಕೇಯ, ಮುರುಗ ಎಂದೂ ಕರೆಯಲ್ಪಡುವ ಸುಬ್ರಹ್ಮಣ್ಯನು ಶಿವಪಾರ್ವತಿಯರ ಪುತ್ರ ಮತ್ತು ದೇವಸೇನಾಪತಿ.",
      hi: "सुब्रह्मण्य, जिन्हें स्कंद, कार्तिकेय और मुरुगन भी कहते हैं, शिव और पार्वती के पुत्र और देवताओं के सेनापति हैं।",
    },
    image: {
      src: "/images/stutis/subrahmanya-bronze-jambavanodai.jpg",
      width: 1280,
      height: 2809,
      position: "50% 18%",
      credit: "Subrahmanya, bronze, 13th century, from Jambavanodai, Thanjavur district — photograph by Sailko, CC BY 3.0, via Wikimedia Commons",
      sourceUrl:
        "https://commons.wikimedia.org/wiki/File:Subrahmanya,_xiii_secolo,_da_jambavanodai,_thanjavur_district_01.jpg",
      alt: {
        en: "A thirteenth-century bronze of Subrahmanya, four-armed, standing on a lotus base.",
        kn: "ಕಮಲಪೀಠದ ಮೇಲೆ ನಿಂತಿರುವ ಚತುರ್ಭುಜ ಸುಬ್ರಹ್ಮಣ್ಯನ ಹದಿಮೂರನೆಯ ಶತಮಾನದ ಕಂಚಿನ ಮೂರ್ತಿ.",
        hi: "कमल पीठ पर खड़े चतुर्भुज सुब्रह्मण्य की तेरहवीं सदी की कांस्य प्रतिमा।",
      },
    },
  },
  {
    slug: "shiva",
    order: 4,
    status: "planned",
    name_sanskrit: "शिव",
    name_iast: "Śiva",
    name: { en: "Shiva", kn: "ಶಿವ", hi: "शिव" },
    epithet: { en: "The auspicious one", kn: "ಮಂಗಳಕರ", hi: "कल्याणकारी" },
    blurb: {
      en: "Shiva is worshipped as the linga. Many of the stotras to him are traditionally attributed to Adi Shankaracharya.",
      kn: "ಶಿವನನ್ನು ಲಿಂಗರೂಪದಲ್ಲಿ ಪೂಜಿಸಲಾಗುತ್ತದೆ. ಅವನ ಅನೇಕ ಸ್ತೋತ್ರಗಳು ಸಂಪ್ರದಾಯದಂತೆ ಆದಿ ಶಂಕರಾಚಾರ್ಯರ ಕೃತಿಗಳು.",
      hi: "शिव की पूजा लिंग रूप में होती है। उनके कई स्तोत्र परंपरा से आदि शंकराचार्य के माने जाते हैं।",
    },
    image: {
      src: "/images/stutis/shiva-nataraja-chola-bronze-cleveland.jpg",
      width: 1280,
      height: 1600,
      position: "50% 35%",
      credit: "Nataraja, Shiva as Lord of the Dance, Chola bronze, Tamil Nadu, c. 1100 — Cleveland Museum of Art, CC0",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Clevelandart_1930.331.jpg",
      alt: {
        en: "A Chola bronze of Shiva as Nataraja, dancing in a ring of flames.",
        kn: "ಜ್ವಾಲಾವೃತ್ತದೊಳಗೆ ನರ್ತಿಸುತ್ತಿರುವ ನಟರಾಜ ಶಿವನ ಚೋಳರ ಕಾಲದ ಕಂಚಿನ ಮೂರ್ತಿ.",
        hi: "ज्वालाओं के वृत्त में नृत्य करते नटराज शिव की चोल कालीन कांस्य प्रतिमा।",
      },
    },
  },
  {
    slug: "bhairava",
    order: 5,
    status: "planned",
    name_sanskrit: "भैरव",
    name_iast: "Bhairava",
    name: { en: "Bhairava", kn: "ಭೈರವ", hi: "भैरव" },
    epithet: { en: "The fierce form of Shiva", kn: "ಶಿವನ ಉಗ್ರರೂಪ", hi: "शिव का उग्र रूप" },
    blurb: {
      en: "Bhairava is the fierce form of Shiva. As Kala Bhairava he is the guardian of Kashi.",
      kn: "ಭೈರವನು ಶಿವನ ಉಗ್ರರೂಪ. ಕಾಲಭೈರವನಾಗಿ ಅವನು ಕಾಶಿಯ ರಕ್ಷಕ.",
      hi: "भैरव शिव का उग्र रूप हैं। काल भैरव के रूप में वे काशी के रक्षक हैं।",
    },
    image: {
      src: "/images/stutis/bhairava-chola-bronze.jpg",
      width: 1280,
      height: 2102,
      position: "50% 22%",
      credit: "Bhairava, Chola bronze, Tamil Nadu, 10th–11th century — photograph by Sailko, CC BY-SA 3.0, via Wikimedia Commons",
      sourceUrl:
        "https://commons.wikimedia.org/wiki/File:Tamil_nadu,_epoca_cola,_bhairava,_la_forma_terribile_di_shiva,_x-xi_sec..JPG",
      alt: {
        en: "A Chola bronze of Bhairava, four-armed, with flaming hair, standing.",
        kn: "ಜ್ವಾಲಾಕೇಶಿಯಾದ ಚತುರ್ಭುಜ ಭೈರವನ ನಿಂತಿರುವ ಚೋಳರ ಕಾಲದ ಕಂಚಿನ ಮೂರ್ತಿ.",
        hi: "ज्वाला जैसे केशों वाले चतुर्भुज भैरव की खड़ी चोल कालीन कांस्य प्रतिमा।",
      },
    },
  },
  {
    slug: "vishnu",
    order: 6,
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
    order: 7,
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
