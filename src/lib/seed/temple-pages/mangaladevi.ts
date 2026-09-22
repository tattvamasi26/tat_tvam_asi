import { registerTemplePage } from "../temple-pages";

// ─────────────────────────────────────────────────────────
//  Mangaladevi Temple, Mangaluru.
//
//  Written from the temple's Wikipedia article. Two accounts of its
//  founding are given there and both are kept here: the Alupa king
//  Kundavarman building it in the ninth century under Matsyendranath,
//  and the older claim that Parashurama raised it and Kundavarman
//  restored what had been overgrown.
// ─────────────────────────────────────────────────────────

registerTemplePage({
  slug: "mangaladevi",
  region: "tulunadu",
  order: 6,
  name: {
    en: "Mangaladevi Temple",
    kn: "ಮಂಗಳಾದೇವಿ ದೇವಸ್ಥಾನ",
    hi: "मंगलादेवी मंदिर",
  },
  nameLocal: "ಶ್ರೀ ಮಂಗಳಾದೇವಿ ದೇವಸ್ಥಾನ",
  nameLocalLang: "kn",
  hero: {
    src: "/images/temples/mangaladevi/hero.jpg",
    width: 1200,
    height: 675,
    credit: "Mangaladevi Temple, Mangaluru — photo by Vinay bhat, CC BY-SA 4.0, via Wikimedia Commons, cropped",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Mangaladevi_Temple_Mangalore_1.jpg",
    alt: {
      en: "The carved wooden gable of the Mangaladevi temple.",
      kn: "ಮಂಗಳಾದೇವಿ ದೇವಸ್ಥಾನದ ಕೆತ್ತನೆಯ ಮರದ ಮುಂಭಾಗ.",
      hi: "मंगलादेवी मंदिर का नक्काशीदार काष्ठ अग्रभाग।",
    },
  },
  gallery: [
    {
      src: "/images/temples/mangaladevi/inside.jpg",
      width: 600,
      height: 800,
      credit: "Inside the Mangaladevi temple — photo by Vinay bhat, CC BY-SA 4.0, via Wikimedia Commons, cropped",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Mangaladevi_Temple_Mangalore_3.jpg",
      alt: {
        en: "The pillared corridor inside the temple wall.",
        kn: "ದೇವಾಲಯದ ಪ್ರಾಕಾರದ ಒಳಗಿನ ಕಂಬಗಳ ಸಾಲು.",
        hi: "मंदिर के प्राकार के भीतर स्तंभों वाला गलियारा।",
      },
      caption: {
        en: "The corridor within the Kshetra-Madilluka, the wall that encloses the shrines.",
        kn: "ಗುಡಿಗಳನ್ನು ಸುತ್ತುವರಿದ ಕ್ಷೇತ್ರ-ಮಡಿಲ್ಲುಕದ ಒಳಗಿನ ಪ್ರಾಕಾರ.",
        hi: "मंदिरों को घेरने वाली क्षेत्र-मडिल्लुक दीवार के भीतर का गलियारा।",
      },
    },
  ],
  sources: [
    { title: "Mangaladevi Temple — Wikipedia", url: "https://en.wikipedia.org/wiki/Mangaladevi_Temple" },
    { title: "Kadri Manjunath Temple — Wikipedia", url: "https://en.wikipedia.org/wiki/Kadri_Manjunath_Temple" },
  ],
  content: {
    en: {
      tagline: "The goddess the city is named after, in a Kerala-style shrine three kilometres from its centre.",
      place: "Bolara · Mangaluru · Dakshina Kannada",
      facts: [
        ["Deity", "Shakti, as Mangaladevi"],
        ["Held to be", "9th century, by the Alupa king Kundavarman"],
        ["Style", "Kerala, with a circular sanctum"],
        ["The city", "Mangaluru takes its name from her"],
        ["Open", "6 am to 1 pm, 4 pm to 8:30 pm"],
        ["Biggest days", "Navaratri and the Dasara Rathotsava"],
      ],
      quote:
        "A princess from Malabar gave up her kingdom, followed Matsyendranath, and was renamed Mangaladevi. The temple took her name, and the city took the temple's.",
      sections: [
        {
          id: "story",
          eyebrow: "How it began",
          title: "Two saints from Nepal, and a king",
          blocks: [
            {
              kind: "para",
              text: "The temple is held to have been built in the ninth century by Kundavarman, the best known of the Alupa kings of Tulunadu, under the patronage of Matsyendranath. An older account says Parashurama raised it, that it was lost under vegetation with time, and that Kundavarman restored it.",
            },
            {
              kind: "sub",
              title: "The crossing at Gorakdandi",
              paras: [
                "Two saints of the Nath order, Machindranath and Gorakhnath, came from Nepal and crossed the Netravathi; the place where they crossed is still called Gorakdandi. They chose ground near the bank that had once been the seat of the sage Kapila.",
                "The king met them, and they told him his kingdom wanted a temple for Mangaladevi. They took him to the places where the older events had happened, and asked him to dig there and raise the linga and the dharapatra that stood for the goddess, and to install them along with Nagaraja for protection. Kundavarman built the shrine on that ground.",
              ],
            },
            {
              kind: "sub",
              title: "The name",
              paras: [
                "A princess of Malabar named Parimala, or Premaladevi, gave up her kingdom and became a disciple of Matsyendranath, who renamed her Mangaladevi. The temple carries her name, and the city grew up around the temple and took the name too.",
              ],
            },
          ],
        },
        {
          id: "building",
          eyebrow: "The building",
          title: "A circular sanctum under a tiled cone",
          blocks: [
            {
              kind: "para",
              text: "The temple is built in the Kerala manner found along this coast and the Western Ghats. A two-storeyed gopura opens the way in, its upper floor of wooden trails covering the Kottupura, the hall where the drums are beaten at festivals. A rectangular wall, the Kshetra-Madilluka, encloses all the shrines, and the metal-plated Dwajasthamba stands on the axis from the tower to the sanctum.",
            },
            {
              kind: "list",
              items: [
                { label: "The sanctum", text: "On a raised platform, reached by five steps through a single door, with dvarapalakas on either side." },
                { label: "How it is built", text: "A circular plan: granite base, laterite above it, and a conical roof of terracotta tile carried on a wooden frame within." },
                { label: "The image", text: "Mangaladevi is seated, as the Dharapatra, with a small linga to her left." },
                { label: "Nagaraja", text: "The snake god's shrine stands at the higher level beside the central one." },
              ],
            },
          ],
        },
        {
          id: "festivals",
          eyebrow: "The year",
          title: "Navaratri, and the chariot to Marnamikatte",
          blocks: [
            {
              kind: "rows",
              rows: [
                { when: "Day 7", name: "Chandika", text: "During Navaratri the goddess is worshipped on the seventh day as Chandika, also called Marikamba." },
                { when: "Day 8", name: "Maha Saraswati", text: "The eighth day is hers." },
                { when: "Day 9", name: "Vagdevi", text: "Mahanavami: the goddess as the deity of speech, with Ayudha Puja and the Chandika Yaga." },
                { when: "Day 10", name: "Rathotsava", text: "On Dasara the goddess is drawn in the great chariot to Marnamikatte, where she and the Shami tree are worshipped." },
              ],
            },
          ],
        },
        {
          id: "kadri",
          eyebrow: "A tie that holds",
          title: "Mangaladevi and Kadri",
          blocks: [
            {
              kind: "para",
              text: "The two temples of the city have kept their connection. On the first days of the Kadri temple's festival, the hermits of the Kadri Yogirajmutt come to Mangaladevi, offer prayer, and present silk cloth.",
            },
            {
              kind: "list",
              items: [
                { label: "Hours", text: "Open 6 am to 1 pm and 4 pm to 8:30 pm." },
                { label: "Where", text: "At Bolara, about three kilometres south-west of the centre of Mangaluru." },
                { label: "Who keeps it", text: "Hereditary trustees administer the temple." },
              ],
            },
          ],
        },
      ],
    },
    kn: {
      tagline: "ನಗರಕ್ಕೆ ಹೆಸರಿತ್ತ ದೇವಿ — ಊರ ಕೇಂದ್ರದಿಂದ ಮೂರು ಕಿಲೋಮೀಟರ್ ದೂರದ ಕೇರಳ ಶೈಲಿಯ ಗುಡಿಯಲ್ಲಿ.",
      place: "ಬೋಳಾರ · ಮಂಗಳೂರು · ದಕ್ಷಿಣ ಕನ್ನಡ",
      facts: [
        ["ದೇವತೆ", "ಶಕ್ತಿ — ಮಂಗಳಾದೇವಿ"],
        ["ಕಾಲ", "9ನೇ ಶತಮಾನ; ಆಳುಪ ಅರಸ ಕುಂದವರ್ಮ"],
        ["ಶೈಲಿ", "ಕೇರಳ ಶೈಲಿ; ವೃತ್ತಾಕಾರದ ಗರ್ಭಗುಡಿ"],
        ["ನಗರ", "ಮಂಗಳೂರಿಗೆ ಹೆಸರು ಇವಳಿಂದಲೇ"],
        ["ಸಮಯ", "ಬೆಳಿಗ್ಗೆ 6–1, ಸಂಜೆ 4–8:30"],
        ["ಪ್ರಮುಖ ದಿನಗಳು", "ನವರಾತ್ರಿ ಮತ್ತು ದಸರಾ ರಥೋತ್ಸವ"],
      ],
      quote:
        "ಮಲಬಾರಿನ ರಾಜಕುಮಾರಿ ರಾಜ್ಯವನ್ನು ತೊರೆದು ಮತ್ಸ್ಯೇಂದ್ರನಾಥರ ಶಿಷ್ಯೆಯಾದಳು; ಅವಳಿಗೆ ಮಂಗಳಾದೇವಿ ಎಂಬ ಹೆಸರಾಯಿತು. ಆ ಹೆಸರು ದೇವಾಲಯಕ್ಕೆ, ದೇವಾಲಯದ ಹೆಸರು ನಗರಕ್ಕೆ.",
      sections: [
        {
          id: "story",
          eyebrow: "ಆರಂಭ",
          title: "ನೇಪಾಳದಿಂದ ಬಂದ ಇಬ್ಬರು ಸಿದ್ಧರು, ಮತ್ತು ಅರಸ",
          blocks: [
            {
              kind: "para",
              text: "ತುಳುನಾಡಿನ ಆಳುಪ ಅರಸರಲ್ಲಿ ಪ್ರಸಿದ್ಧನಾದ ಕುಂದವರ್ಮನು ಮತ್ಸ್ಯೇಂದ್ರನಾಥರ ಆಶ್ರಯದಲ್ಲಿ ಒಂಬತ್ತನೆಯ ಶತಮಾನದಲ್ಲಿ ಈ ದೇವಾಲಯವನ್ನು ಕಟ್ಟಿಸಿದನೆಂದು ಹೇಳಲಾಗುತ್ತದೆ. ಪರಶುರಾಮನೇ ಇದನ್ನು ಕಟ್ಟಿದ್ದನೆಂದೂ, ಕಾಲಕ್ರಮೇಣ ಗಿಡಗಂಟಿಗಳಲ್ಲಿ ಮುಚ್ಚಿಹೋಗಿದ್ದನ್ನು ಕುಂದವರ್ಮ ಪುನರುದ್ಧರಿಸಿದನೆಂದೂ ಇನ್ನೊಂದು ಕಥೆ.",
            },
            {
              kind: "sub",
              title: "ಗೋರಕದಂಡಿಯ ಹಾದಿ",
              paras: [
                "ನಾಥ ಪಂಥದ ಇಬ್ಬರು ಸಿದ್ಧರು — ಮಚ್ಚೇಂದ್ರನಾಥ ಮತ್ತು ಗೋರಖನಾಥ — ನೇಪಾಳದಿಂದ ಬಂದು ನೇತ್ರಾವತಿಯನ್ನು ದಾಟಿದರು; ಅವರು ದಾಟಿದ ಸ್ಥಳಕ್ಕೆ ಇಂದಿಗೂ ಗೋರಕದಂಡಿ ಎಂಬ ಹೆಸರು. ಒಮ್ಮೆ ಕಪಿಲ ಮಹರ್ಷಿಗಳ ನೆಲೆಯಾಗಿದ್ದ ನದಿ ದಂಡೆಯ ಸಮೀಪದ ಜಾಗವನ್ನು ಅವರು ಆರಿಸಿದರು.",
                "ಅರಸನು ಅವರನ್ನು ಭೇಟಿಯಾದಾಗ, ತನ್ನ ರಾಜ್ಯಕ್ಕೆ ಮಂಗಳಾದೇವಿಯ ದೇವಾಲಯ ಬೇಕೆಂದು ಅವರು ತಿಳಿಸಿದರು. ಹಿಂದಿನ ಘಟನೆಗಳು ನಡೆದ ಸ್ಥಳಗಳಿಗೆ ಅವನನ್ನು ಕರೆದೊಯ್ದು, ಅಲ್ಲಿ ಅಗೆದು ದೇವಿಯ ಸಂಕೇತವಾದ ಲಿಂಗ ಮತ್ತು ಧಾರಾಪಾತ್ರವನ್ನು ಹೊರತೆಗೆದು, ರಕ್ಷಣೆಗಾಗಿ ನಾಗರಾಜನೊಂದಿಗೆ ಪ್ರತಿಷ್ಠಾಪಿಸಲು ಹೇಳಿದರು. ಆ ನೆಲದಲ್ಲೇ ಕುಂದವರ್ಮ ಗುಡಿಯನ್ನು ಕಟ್ಟಿಸಿದನು.",
              ],
            },
            {
              kind: "sub",
              title: "ಹೆಸರಿನ ಕಥೆ",
              paras: [
                "ಪರಿಮಳ ಅಥವಾ ಪ್ರೇಮಲಾದೇವಿ ಎಂಬ ಮಲಬಾರಿನ ರಾಜಕುಮಾರಿ ರಾಜ್ಯವನ್ನು ತ್ಯಜಿಸಿ ಮತ್ಸ್ಯೇಂದ್ರನಾಥರ ಶಿಷ್ಯೆಯಾದಳು; ಅವರು ಅವಳಿಗೆ ಮಂಗಳಾದೇವಿ ಎಂದು ಹೆಸರಿಟ್ಟರು. ದೇವಾಲಯ ಆ ಹೆಸರನ್ನು ಹೊತ್ತಿತು; ದೇವಾಲಯದ ಸುತ್ತ ಬೆಳೆದ ನಗರ ಅದೇ ಹೆಸರನ್ನು ಪಡೆಯಿತು.",
              ],
            },
          ],
        },
        {
          id: "building",
          eyebrow: "ಕಟ್ಟಡ",
          title: "ಹೆಂಚಿನ ಶಂಕುವಿನ ಕೆಳಗೆ ವೃತ್ತಾಕಾರದ ಗರ್ಭಗುಡಿ",
          blocks: [
            {
              kind: "para",
              text: "ಈ ಕರಾವಳಿಯಲ್ಲೂ ಪಶ್ಚಿಮ ಘಟ್ಟಗಳಲ್ಲೂ ಕಾಣುವ ಕೇರಳ ಶೈಲಿಯಲ್ಲಿ ಇದನ್ನು ಕಟ್ಟಲಾಗಿದೆ. ಎರಡು ಅಂತಸ್ತಿನ ಗೋಪುರ ಪ್ರವೇಶವನ್ನು ತೆರೆಯುತ್ತದೆ; ಮೇಲಂತಸ್ತಿನ ಮರದ ಜಾಲರಿ ಉತ್ಸವಗಳಲ್ಲಿ ವಾದ್ಯ ಬಾರಿಸುವ ಕೊಟ್ಟುಪುರವನ್ನು ಮುಚ್ಚುತ್ತದೆ. ಕ್ಷೇತ್ರ-ಮಡಿಲ್ಲುಕ ಎಂಬ ಆಯತಾಕಾರದ ಗೋಡೆ ಎಲ್ಲ ಗುಡಿಗಳನ್ನು ಸುತ್ತುವರಿದಿದೆ; ಗೋಪುರದಿಂದ ಗರ್ಭಗುಡಿಯವರೆಗಿನ ಅಕ್ಷದಲ್ಲಿ ಲೋಹದ ಹೊದಿಕೆಯ ಧ್ವಜಸ್ತಂಭ ನಿಂತಿದೆ.",
            },
            {
              kind: "list",
              items: [
                { label: "ಗರ್ಭಗುಡಿ", text: "ಎತ್ತರದ ಜಗಲಿಯ ಮೇಲೆ; ಐದು ಮೆಟ್ಟಿಲುಗಳ ಒಂದೇ ಬಾಗಿಲು, ಇಕ್ಕೆಲಗಳಲ್ಲಿ ದ್ವಾರಪಾಲಕರು." },
                { label: "ರಚನೆ", text: "ವೃತ್ತಾಕಾರ: ಗ್ರಾನೈಟ್ ಬುಡ, ಮೇಲೆ ಮುರಕಲ್ಲು, ಒಳಗಿನ ಮರದ ಚೌಕಟ್ಟಿನ ಮೇಲೆ ಹೆಂಚಿನ ಶಂಕುವಿನ ಛಾವಣಿ." },
                { label: "ಮೂರ್ತಿ", text: "ಮಂಗಳಾದೇವಿ ಆಸೀನಳಾಗಿ, ಧಾರಾಪಾತ್ರ ರೂಪದಲ್ಲಿ; ಎಡಕ್ಕೆ ಸಣ್ಣ ಲಿಂಗ." },
                { label: "ನಾಗರಾಜ", text: "ಕೇಂದ್ರ ಗುಡಿಯ ಪಕ್ಕ, ಎತ್ತರದಲ್ಲಿ ನಾಗದೇವರ ಗುಡಿ." },
              ],
            },
          ],
        },
        {
          id: "festivals",
          eyebrow: "ವರ್ಷದ ಉತ್ಸವ",
          title: "ನವರಾತ್ರಿ, ಮತ್ತು ಮರ್ನಮಿಕಟ್ಟೆಗೆ ರಥ",
          blocks: [
            {
              kind: "rows",
              rows: [
                { when: "ಏಳನೇ ದಿನ", name: "ಚಂಡಿಕಾ", text: "ನವರಾತ್ರಿಯ ಏಳನೆಯ ದಿನ ದೇವಿಯನ್ನು ಚಂಡಿಕಾ — ಮಾರಿಕಾಂಬಾ — ಎಂದು ಪೂಜಿಸಲಾಗುತ್ತದೆ." },
                { when: "ಎಂಟನೇ ದಿನ", name: "ಮಹಾ ಸರಸ್ವತಿ", text: "ಎಂಟನೆಯ ದಿನ ಸರಸ್ವತಿಗೆ." },
                { when: "ಒಂಬತ್ತನೇ ದಿನ", name: "ವಾಗ್ದೇವಿ", text: "ಮಹಾನವಮಿ: ವಾಕ್ಕಿನ ದೇವಿಯಾಗಿ ಪೂಜೆ, ಆಯುಧ ಪೂಜೆ ಮತ್ತು ಚಂಡಿಕಾ ಯಾಗ." },
                { when: "ಹತ್ತನೇ ದಿನ", name: "ರಥೋತ್ಸವ", text: "ದಸರಾದಂದು ದೇವಿಯನ್ನು ಮಹಾರಥದಲ್ಲಿ ಮರ್ನಮಿಕಟ್ಟೆಗೆ ಎಳೆಯಲಾಗುತ್ತದೆ; ಅಲ್ಲಿ ದೇವಿಗೂ ಶಮೀ ವೃಕ್ಷಕ್ಕೂ ಪೂಜೆ." },
              ],
            },
          ],
        },
        {
          id: "kadri",
          eyebrow: "ಉಳಿದ ನಂಟು",
          title: "ಮಂಗಳಾದೇವಿ ಮತ್ತು ಕದ್ರಿ",
          blocks: [
            {
              kind: "para",
              text: "ನಗರದ ಈ ಎರಡು ದೇವಾಲಯಗಳ ನಂಟು ಇಂದಿಗೂ ಉಳಿದಿದೆ. ಕದ್ರಿ ದೇವಾಲಯದ ಜಾತ್ರೆಯ ಮೊದಲ ದಿನಗಳಲ್ಲಿ ಕದ್ರಿ ಯೋಗಿರಾಜಮಠದ ಸಂನ್ಯಾಸಿಗಳು ಮಂಗಳಾದೇವಿಗೆ ಬಂದು ಪ್ರಾರ್ಥಿಸಿ ರೇಷ್ಮೆ ವಸ್ತ್ರವನ್ನು ಅರ್ಪಿಸುತ್ತಾರೆ.",
            },
            {
              kind: "list",
              items: [
                { label: "ಸಮಯ", text: "ಬೆಳಿಗ್ಗೆ 6ರಿಂದ 1, ಸಂಜೆ 4ರಿಂದ 8:30." },
                { label: "ಎಲ್ಲಿ", text: "ಬೋಳಾರದಲ್ಲಿ; ಮಂಗಳೂರು ಕೇಂದ್ರದಿಂದ ನೈಋತ್ಯಕ್ಕೆ ಸುಮಾರು ಮೂರು ಕಿಲೋಮೀಟರ್." },
                { label: "ಆಡಳಿತ", text: "ವಂಶಪಾರಂಪರ್ಯ ಧರ್ಮದರ್ಶಿಗಳು ನಿರ್ವಹಿಸುತ್ತಾರೆ." },
              ],
            },
          ],
        },
      ],
    },
    hi: {
      tagline: "जिस देवी से नगर का नाम है — नगर-केंद्र से तीन किलोमीटर दूर केरल शैली के मंदिर में।",
      place: "बोलार · मंगलूरु · दक्षिण कन्नड़",
      facts: [
        ["देवी", "शक्ति — मंगलादेवी"],
        ["काल", "9वीं शताब्दी; आलुप राजा कुंदवर्मन"],
        ["शैली", "केरल शैली; वृत्ताकार गर्भगृह"],
        ["नगर", "मंगलूरु का नाम इन्हीं से"],
        ["समय", "प्रातः 6–1, सायं 4–8:30"],
        ["मुख्य दिन", "नवरात्रि और दशहरा रथोत्सव"],
      ],
      quote:
        "मलबार की एक राजकुमारी ने राज्य त्यागकर मत्स्येंद्रनाथ का शिष्यत्व लिया और मंगलादेवी कहलाईं। वही नाम मंदिर को मिला, और मंदिर का नाम नगर को।",
      sections: [
        {
          id: "story",
          eyebrow: "आरंभ",
          title: "नेपाल से आए दो सिद्ध, और एक राजा",
          blocks: [
            {
              kind: "para",
              text: "माना जाता है कि तुलुनाडु के आलुप राजाओं में सबसे प्रसिद्ध कुंदवर्मन ने मत्स्येंद्रनाथ के संरक्षण में नौवीं शताब्दी में यह मंदिर बनवाया। एक पुराना मत यह भी है कि इसे परशुराम ने बनाया, समय के साथ यह वनस्पति में ढक गया, और कुंदवर्मन ने इसका जीर्णोद्धार किया।",
            },
            {
              kind: "sub",
              title: "गोरकदंडी का घाट",
              paras: [
                "नाथ संप्रदाय के दो सिद्ध — मच्छिंद्रनाथ और गोरखनाथ — नेपाल से आकर नेत्रावती पार कर आए; जिस स्थान से वे उतरे उसे आज भी गोरकदंडी कहते हैं। उन्होंने नदी-तट के पास वह भूमि चुनी जो कभी कपिल मुनि की साधना-स्थली थी।",
                "राजा उनसे मिला तो उन्होंने बताया कि उसके राज्य को मंगलादेवी के मंदिर की आवश्यकता है। वे उसे उन स्थानों पर ले गए जहाँ पुरानी घटनाएँ घटी थीं, और कहा कि वहाँ खोदकर देवी के प्रतीक लिंग तथा धारापात्र को निकालें और रक्षा हेतु नागराज के साथ प्रतिष्ठित करें। उसी भूमि पर कुंदवर्मन ने मंदिर बनवाया।",
              ],
            },
            {
              kind: "sub",
              title: "नाम की कथा",
              paras: [
                "मलबार की राजकुमारी परिमला अथवा प्रेमलादेवी ने राज्य त्यागकर मत्स्येंद्रनाथ का शिष्यत्व लिया; उन्होंने उसका नाम मंगलादेवी रखा। मंदिर ने वही नाम लिया, और मंदिर के चारों ओर बसे नगर ने भी।",
              ],
            },
          ],
        },
        {
          id: "building",
          eyebrow: "भवन",
          title: "खपरैल के शंकु के नीचे वृत्ताकार गर्भगृह",
          blocks: [
            {
              kind: "para",
              text: "यह इस तट और पश्चिमी घाट में प्रचलित केरल शैली में बना है। दो मंज़िला गोपुर प्रवेश देता है; ऊपरी मंज़िल की काष्ठ-जाली कोट्टुपुर को ढकती है, जहाँ उत्सवों में वाद्य बजते हैं। क्षेत्र-मडिल्लुक नामक आयताकार दीवार सब मंदिरों को घेरती है, और गोपुर से गर्भगृह तक की धुरी पर धातु-मढ़ा ध्वजस्तंभ खड़ा है।",
            },
            {
              kind: "list",
              items: [
                { label: "गर्भगृह", text: "ऊँचे चबूतरे पर; पाँच सीढ़ियों वाला एक ही द्वार, दोनों ओर द्वारपालक।" },
                { label: "रचना", text: "वृत्ताकार योजना: ग्रेनाइट का आधार, ऊपर लेटराइट, और भीतर काष्ठ ढाँचे पर टिका खपरैल का शंकु-छत।" },
                { label: "प्रतिमा", text: "मंगलादेवी आसीन हैं, धारापात्र रूप में; बाईं ओर एक छोटा लिंग।" },
                { label: "नागराज", text: "मुख्य मंदिर के पास, ऊँचाई पर नाग देवता का मंदिर।" },
              ],
            },
          ],
        },
        {
          id: "festivals",
          eyebrow: "वर्ष के उत्सव",
          title: "नवरात्रि, और मर्नमिकट्टे तक रथ",
          blocks: [
            {
              kind: "rows",
              rows: [
                { when: "सातवाँ दिन", name: "चंडिका", text: "नवरात्रि के सातवें दिन देवी की पूजा चंडिका — मारिकांबा — के रूप में।" },
                { when: "आठवाँ दिन", name: "महा सरस्वती", text: "आठवाँ दिन सरस्वती का।" },
                { when: "नवाँ दिन", name: "वाग्देवी", text: "महानवमी: वाणी की देवी के रूप में पूजा, आयुध पूजा और चंडिका याग।" },
                { when: "दसवाँ दिन", name: "रथोत्सव", text: "दशहरे पर देवी को महारथ में मर्नमिकट्टे ले जाया जाता है; वहाँ देवी और शमी वृक्ष की पूजा होती है।" },
              ],
            },
          ],
        },
        {
          id: "kadri",
          eyebrow: "बना हुआ संबंध",
          title: "मंगलादेवी और कद्रि",
          blocks: [
            {
              kind: "para",
              text: "नगर के इन दो मंदिरों का संबंध आज भी बना है। कद्रि मंदिर के उत्सव के पहले दिनों में कद्रि योगिराजमठ के संन्यासी मंगलादेवी आकर प्रार्थना करते हैं और रेशमी वस्त्र अर्पित करते हैं।",
            },
            {
              kind: "list",
              items: [
                { label: "समय", text: "प्रातः 6 से 1 और सायं 4 से 8:30।" },
                { label: "कहाँ", text: "बोलार में; मंगलूरु के केंद्र से लगभग तीन किलोमीटर दक्षिण-पश्चिम।" },
                { label: "प्रबंधन", text: "वंशानुगत धर्मदर्शी मंदिर का संचालन करते हैं।" },
              ],
            },
          ],
        },
      ],
    },
  },
});
