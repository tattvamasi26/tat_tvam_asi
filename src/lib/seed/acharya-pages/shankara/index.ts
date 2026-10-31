import { registerAcharyaPage } from "../../acharya-pages";
import { en } from "./en";
import { kn } from "./kn";
import { hi } from "./hi";

// ─────────────────────────────────────────────────────────
//  Adi Shankaracharya.
//
//  Written from docs/SHANKARA.md, which carries the sources and the
//  reasoning. The prose lives one file per language; this module holds
//  what the languages share — the pictures, with their licences, and
//  the sources every claim rests on.
//
//  Three rules govern the page, and tests/unit/acharyas.test.ts fails
//  if any of them is broken:
//
//   1. The dates are given as a disagreement, drawn to scale. 788-820
//      CE is never printed as a known fact.
//   2. The life is labelled as tradition. Every surviving biography
//      was written five centuries or more after he died, and
//      "Shankaracharya" had become a title by then.
//   3. The works are given in three tiers — accepted, doubted,
//      attributed — because more than three hundred texts carry his
//      name and a handful are his.
//
//  Pictures are Wikimedia Commons, each with its licence and author.
// ─────────────────────────────────────────────────────────

const COMMONS = "https://commons.wikimedia.org/wiki/";

//  Two of the pictures are devotional paintings the site's owner
//  supplied rather than Commons photographs. Neither is under a free
//  licence: one is unsigned, and one is signed by its artists, who are
//  named in its credit. They carry no source link.
const OWNER = "Supplied by the site owner";

registerAcharyaPage({
  slug: "adi-shankaracharya",
  nameSanskrit: "आदि शङ्कराचार्यः",

  hero: {
    src: "/images/acharyas/shankara/ravi-varma-shankara.jpg",
    width: 1280,
    height: 1806,
    position: "50% 30%",
    credit: "Raja Ravi Varma · Public domain · Wikimedia Commons",
    sourceUrl: COMMONS + "File:Raja_Ravi_Varma_-_Sankaracharya.jpg",
    alt: {
      en: "Shankara seated on a tiger skin by a river, teaching four disciples",
      kn: "ನದಿಯ ದಡದಲ್ಲಿ ವ್ಯಾಘ್ರಾಜಿನದ ಮೇಲೆ ಕುಳಿತು ನಾಲ್ವರು ಶಿಷ್ಯರಿಗೆ ಬೋಧಿಸುತ್ತಿರುವ ಶಂಕರರು",
      hi: "नदी के तट पर व्याघ्रचर्म पर बैठे चार शिष्यों को उपदेश देते शंकर",
    },
  },

  gallery: [
    {
      src: "/images/acharyas/shankara/kalady-janmabhumi.jpg",
      width: 1920,
      height: 1815,
      credit: "CC0 · Wikimedia Commons",
      sourceUrl: COMMONS + "File:Sri_Adi_Shankara_Janmabhoomi_Kshetram.jpg",
      alt: {
        en: "The Janmabhumi Kshetram at Kalady, Kerala",
        kn: "ಕೇರಳದ ಕಾಲಡಿಯಲ್ಲಿರುವ ಜನ್ಮಭೂಮಿ ಕ್ಷೇತ್ರ",
        hi: "केरल के कालडी स्थित जन्मभूमि क्षेत्रम्",
      },
      caption: {
        en: "Kalady, on the Periyar — his birthplace by tradition",
        kn: "ಪೆರಿಯಾರ್ ನದಿಯ ದಡದ ಕಾಲಡಿ — ಪರಂಪರೆಯ ಪ್ರಕಾರ ಅವರ ಜನ್ಮಸ್ಥಳ",
        hi: "पेरियार के तट पर कालडी — परंपरा के अनुसार उनकी जन्मभूमि",
      },
    },
    {
      src: "/images/acharyas/shankara/sringeri-vidyashankara.jpg",
      width: 1920,
      height: 1440,
      credit: "Chiranjeevi Kuruba · CC BY-SA 4.0 · Wikimedia Commons",
      sourceUrl: COMMONS + "File:Sringeri_Vidyashankara_Temple._An_Architectural_marvel.jpg",
      alt: {
        en: "The Vidyashankara temple at Sringeri",
        kn: "ಶೃಂಗೇರಿಯ ವಿದ್ಯಾಶಂಕರ ದೇವಾಲಯ",
        hi: "शृंगेरी का विद्याशंकर मंदिर",
      },
      caption: {
        en: "Sringeri — the southern matha, and its 14th-century Vidyashankara temple",
        kn: "ಶೃಂಗೇರಿ — ದಕ್ಷಿಣಾಮ್ನಾಯ ಮಠ ಮತ್ತು ೧೪ನೇ ಶತಮಾನದ ವಿದ್ಯಾಶಂಕರ ದೇವಾಲಯ",
        hi: "शृंगेरी — दक्षिण का मठ और उसका १४वीं सदी का विद्याशंकर मंदिर",
      },
    },
    {
      src: "/images/acharyas/shankara/kedarnath-statue.jpg",
      width: 1920,
      height: 1156,
      credit: "Mayank7078 · CC BY-SA 4.0 · Wikimedia Commons",
      sourceUrl: COMMONS + "File:Shankaracharya.jpg",
      alt: {
        en: "The statue of Shankara behind the Kedarnath temple, against the Himalaya",
        kn: "ಹಿಮಾಲಯದ ಹಿನ್ನೆಲೆಯಲ್ಲಿ ಕೇದಾರನಾಥ ದೇವಾಲಯದ ಹಿಂದಿರುವ ಶಂಕರರ ಪ್ರತಿಮೆ",
        hi: "हिमालय की पृष्ठभूमि में केदारनाथ मंदिर के पीछे शंकर की प्रतिमा",
      },
      caption: {
        en: "Kedarnath — where tradition places his end, at thirty-two",
        kn: "ಕೇದಾರನಾಥ — ಪರಂಪರೆಯ ಪ್ರಕಾರ ಮೂವತ್ತೆರಡನೆಯ ವಯಸ್ಸಿನಲ್ಲಿ ಅವರ ಅಂತ್ಯ",
        hi: "केदारनाथ — परंपरा के अनुसार बत्तीस वर्ष की आयु में उनका अंत",
      },
    },
    {
      src: "/images/acharyas/shankara/kalady-kirti-stambha.jpg",
      width: 1280,
      height: 1707,
      credit: "Prof Ranga Sai · CC BY-SA 4.0 · Wikimedia Commons",
      sourceUrl: COMMONS + "File:Adi_shankara_kirti_sthambha_and_mandapam.jpg",
      alt: {
        en: "The Kirti Stambha and mandapam at Kalady",
        kn: "ಕಾಲಡಿಯ ಕೀರ್ತಿ ಸ್ತಂಭ ಮತ್ತು ಮಂಟಪ",
        hi: "कालडी का कीर्ति स्तंभ और मंडप",
      },
      caption: {
        en: "The Kirti Stambha at Kalady",
        kn: "ಕಾಲಡಿಯ ಕೀರ್ತಿ ಸ್ತಂಭ",
        hi: "कालडी का कीर्ति स्तंभ",
      },
    },
    {
      src: "/images/acharyas/shankara/puri-govardhana-matha.jpg",
      width: 1600,
      height: 1200,
      credit: "CC BY 3.0 · Wikimedia Commons",
      sourceUrl: COMMONS + "File:Goverdhana_matha.jpg",
      alt: {
        en: "The Govardhana matha at Puri",
        kn: "ಪುರಿಯ ಗೋವರ್ಧನ ಮಠ",
        hi: "पुरी का गोवर्धन मठ",
      },
      caption: {
        en: "Govardhana matha, Puri — the eastern seat",
        kn: "ಗೋವರ್ಧನ ಮಠ, ಪುರಿ — ಪೂರ್ವಾಮ್ನಾಯ ಪೀಠ",
        hi: "गोवर्धन मठ, पुरी — पूर्व का पीठ",
      },
    },
    {
      src: "/images/acharyas/shankara/dwarka-sharada.jpg",
      width: 1920,
      height: 933,
      credit: "VasuVR · CC BY-SA 4.0 · Wikimedia Commons",
      sourceUrl: COMMONS + "File:Adi_Shankara_statue_and_art_near_Dwarka_Sharada_Peetham.jpg",
      alt: {
        en: "Statue of Shankara near the Dwarka Sharada Peetham",
        kn: "ದ್ವಾರಕಾ ಶಾರದಾ ಪೀಠದ ಬಳಿ ಶಂಕರರ ಪ್ರತಿಮೆ",
        hi: "द्वारका शारदा पीठम् के निकट शंकर की प्रतिमा",
      },
      caption: {
        en: "Dvaraka — the western seat",
        kn: "ದ್ವಾರಕಾ — ಪಶ್ಚಿಮಾಮ್ನಾಯ ಪೀಠ",
        hi: "द्वारका — पश्चिम का पीठ",
      },
    },
    {
      src: "/images/acharyas/shankara/shankara-painting.jpg",
      width: 702,
      height: 960,
      position: "50% 25%",
      credit: OWNER,
      alt: {
        en: "A devotional painting of Shankara seated in ochre with a staff and a palm-leaf manuscript, one hand raised in the teaching gesture",
        kn: "ಕಾವಿ ವಸ್ತ್ರ, ದಂಡ ಮತ್ತು ತಾಳೆಗರಿಯ ಗ್ರಂಥ ಹಿಡಿದು, ಒಂದು ಕೈಯಲ್ಲಿ ಉಪದೇಶ ಮುದ್ರೆ ತೋರುತ್ತ ಕುಳಿತ ಶಂಕರರ ಭಕ್ತಿಚಿತ್ರ",
        hi: "गेरुआ वस्त्र, दंड और ताड़पत्र-ग्रंथ लिए, एक हाथ में उपदेश मुद्रा दिखाते बैठे शंकर का भक्ति-चित्र",
      },
      caption: {
        en: "The icon he became — a twentieth-century devotional painting, and the image by which most people now know him.",
        kn: "ಅವರು ಆದ ರೂಪ — ಇಪ್ಪತ್ತನೇ ಶತಮಾನದ ಭಕ್ತಿಚಿತ್ರ; ಇಂದು ಹೆಚ್ಚಿನವರು ಅವರನ್ನು ಅರಿಯುವುದು ಈ ರೂಪದಲ್ಲಿಯೇ.",
        hi: "वे जो प्रतीक बन गए — बीसवीं सदी का एक भक्ति-चित्र, और वही रूप जिससे आज अधिकांश लोग उन्हें जानते हैं।",
      },
    },
    {
      src: "/images/acharyas/shankara/shankara-before-the-goddess.jpg",
      width: 1013,
      height: 1423,
      position: "50% 40%",
      credit: "C. Kondiah Raju and T. S. Subbiah, Kovilpatti · supplied by the site owner",
      alt: {
        en: "Shankara standing with folded hands before a four-armed goddess enthroned in a golden shrine, lamps burning in front of her",
        kn: "ಚಿನ್ನದ ಪ್ರಭಾವಳಿಯ ಗರ್ಭಗುಡಿಯಲ್ಲಿ ಕುಳಿತ ಚತುರ್ಭುಜ ದೇವಿಯ ಮುಂದೆ ಕೈಮುಗಿದು ನಿಂತ ಶಂಕರರು, ಎದುರಿಗೆ ದೀಪಗಳು ಬೆಳಗುತ್ತಿವೆ",
        hi: "स्वर्ण-प्रभामंडल वाले गर्भगृह में विराजमान चतुर्भुजा देवी के सम्मुख हाथ जोड़े खड़े शंकर, आगे दीप जल रहे हैं",
      },
      caption: {
        en: "The hymns to the Goddess are the best loved of all the works that carry his name, and among the least likely to be his.",
        kn: "ದೇವಿಯ ಸ್ತೋತ್ರಗಳೇ ಅವರ ಹೆಸರಿನಲ್ಲಿರುವ ಕೃತಿಗಳಲ್ಲಿ ಅತ್ಯಂತ ಪ್ರಿಯವಾದವು, ಮತ್ತು ಅವರವೇ ಆಗಿರುವ ಸಾಧ್ಯತೆ ಅತ್ಯಂತ ಕಡಿಮೆ ಇರುವವು.",
        hi: "देवी के स्तोत्र उनके नाम से चलने वाली सब कृतियों में सबसे प्रिय हैं, और उन्हीं के होने की संभावना सबसे कम।",
      },
    },
  ],
  sources: [
    {
      title: "Śaṅkara — Stanford Encyclopedia of Philosophy",
      url: "https://plato.stanford.edu/entries/shankara/",
      note: "For the dating, the authentic works, and the doctrine.",
    },
    {
      title: "Advaita Vedanta — Internet Encyclopedia of Philosophy",
      url: "https://iep.utm.edu/advaita-vedanta/",
      note: "For adhyasa, the three orders of reality and vivarta.",
    },
    {
      title:
        "Vidyasankar Sundaresan, 'Conflicting hagiographies and history: The place of Śaṅkaravijaya texts in Advaita tradition', International Journal of Hindu Studies 4.2 (2000): 109–84",
      url: "https://who.rocq.inria.fr/Ramakrishna.Upadrasta/Advaita/PHIL_PAPERS/Sundaresan-Shankaravijaya-history.pdf",
      note: "For the hagiographies, their dates, and the finding that Śaṅkarācārya had become a title.",
    },
    {
      title: "Brahma Sūtras — Wikipedia",
      url: "https://en.wikipedia.org/wiki/Brahma_Sutras",
      note: "For the 555 sutras, the four chapters and the commentators.",
    },
    {
      title: "Sringeri Sharada Peetham — Wikipedia",
      url: "https://en.wikipedia.org/wiki/Sringeri_Sharada_Peetham",
      note: "For the Vijayanagara dates and the succession.",
    },
    {
      title: "Upadeśasāhasrī — Wikipedia",
      url: "https://en.wikipedia.org/wiki/Upadesasahasri",
      note: "For its structure and Mayeda's edition.",
    },
    {
      title: "Daśanāmi Sampradaya — Wikipedia",
      url: "https://en.wikipedia.org/wiki/Da%C5%9Ban%C4%81mi_Sampradaya",
      note: "For the four mathas and the ten orders.",
    },
    {
      title: "Adi Shankara — Wikipedia",
      url: "https://en.wikipedia.org/wiki/Adi_Shankara",
      note: "For the traditional narrative, checked against the above.",
    },
  ],

  content: { en, kn, hi },
});
