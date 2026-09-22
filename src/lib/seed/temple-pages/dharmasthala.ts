import { registerTemplePage } from "../temple-pages";

// ─────────────────────────────────────────────────────────
//  Shri Kshetra Dharmasthala.
//
//  Written from the temple's Wikipedia article. What makes the place
//  unusual is left plain rather than tidied: the deity is Shiva, the
//  priests are Madhva Brahmins, the administrators are a Jain Bunt
//  family, and a Jain Tirthankara and four daivas of the countryside
//  are worshipped in the same complex.
//
//  The article also carries a section on a 2025 police investigation
//  in the area. That is a live legal matter, not the history or the
//  worship of the temple, and it is left to the news to report.
// ─────────────────────────────────────────────────────────

registerTemplePage({
  slug: "dharmasthala",
  region: "tulunadu",
  order: 3,
  name: {
    en: "Shri Kshetra Dharmasthala",
    kn: "ಶ್ರೀ ಕ್ಷೇತ್ರ ಧರ್ಮಸ್ಥಳ",
    hi: "श्री क्षेत्र धर्मस्थल",
  },
  nameLocal: "ಶ್ರೀ ಕ್ಷೇತ್ರ ಧರ್ಮಸ್ಥಳ ಮಂಜುನಾಥ ಸ್ವಾಮಿ ದೇವಸ್ಥಾನ",
  nameLocalLang: "kn",
  hero: {
    src: "/images/temples/dharmasthala/hero.jpg",
    width: 1200,
    height: 675,
    credit: "Dharmasthala Temple — photo by Vedamurthy J, CC BY-SA 3.0, via Wikimedia Commons, cropped",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Dharmasthala_Temple.jpg",
    alt: {
      en: "The Manjunatha temple at Dharmasthala, with devotees before it.",
      kn: "ಧರ್ಮಸ್ಥಳದ ಮಂಜುನಾಥ ದೇವಾಲಯ; ಎದುರು ಭಕ್ತರು.",
      hi: "धर्मस्थल का मंजुनाथ मंदिर, सामने भक्तगण।",
    },
  },
  gallery: [
    {
      src: "/images/temples/dharmasthala/entrance.jpg",
      width: 600,
      height: 800,
      credit: "Dharmasthala Temple — photo by Gpkp, CC BY-SA 4.0, via Wikimedia Commons, cropped",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Dharmasthala_Temple,_Karnataka_(2025)_05.jpg",
      alt: {
        en: "The pillared entrance to the temple.",
        kn: "ದೇವಾಲಯದ ಕಂಬಗಳ ಪ್ರವೇಶ.",
        hi: "मंदिर का स्तंभयुक्त प्रवेश।",
      },
      caption: {
        en: "The way in, where the queue for darshan forms.",
        kn: "ದರ್ಶನದ ಸಾಲು ನಿಲ್ಲುವ ಪ್ರವೇಶದ್ವಾರ.",
        hi: "प्रवेश मार्ग, जहाँ दर्शन की पंक्ति लगती है।",
      },
    },
  ],
  sources: [
    { title: "Dharmasthala Temple — Wikipedia", url: "https://en.wikipedia.org/wiki/Dharmasthala_Temple" },
    { title: "Kadri Manjunath Temple — Wikipedia", url: "https://en.wikipedia.org/wiki/Kadri_Manjunath_Temple" },
  ],
  content: {
    en: {
      tagline: "A Shiva temple served by Vaishnava priests and run by a Jain family, for eight hundred years.",
      place: "Dharmasthala · Belthangady · Dakshina Kannada",
      facts: [
        ["Deity", "Shiva, as Manjunatha"],
        ["Also worshipped", "Ammanavaru, Chandraprabha and four daivas"],
        ["Age", "About 800 years"],
        ["Reconsecrated", "Vadiraja Tirtha, 16th century"],
        ["Priests", "Madhva Brahmins"],
        ["Administered by", "The Heggade family, Jain Bunts"],
      ],
      quote:
        "One complex holds a Shiva linga brought from Kadri, a Jain Tirthankara, and four guardian daivas of the countryside — and the family that keeps it has been Jain for twenty generations.",
      sections: [
        {
          id: "story",
          eyebrow: "How it began",
          title: "The house that was given away",
          blocks: [
            {
              kind: "para",
              text: "Eight hundred years ago the place was called Kuduma, in Mallarmadi, a village of Belthangady. A Jain chieftain, Birmanna Pergade, lived there with his wife Ammu Ballalthi in a house called Nelliadi Beedu.",
            },
            {
              kind: "para",
              text: "As the tradition tells it, the guardian daivas of Dharma took human form and came looking for a household where dharma was kept. The couple received them as they received everyone. That night the daivas appeared to Pergade in a dream, told him why they had come, and asked for his house. He built himself another, and began worshipping them in the one he had given away.",
            },
            {
              kind: "sub",
              title: "The four shrines, and the linga from Kadri",
              paras: [
                "The daivas came again and asked for separate shrines for four of them — Kalarahu, Kalarkayi, Kumaraswamy and Kanyakumari — and for two oracles of good family to speak for them, and four helpers for Pergade. In return they promised his family protection, the means to give, and renown for the kshetra.",
                "Pergade built the shrines and invited Brahmin priests to perform the rituals. The priests asked that a Shivalinga be installed beside the daivas. The daivas sent their vassal Annappa Swamy to fetch one from the Kadri Manjunath temple near Mangaluru, and the Manjunatha temple was raised around it.",
              ],
            },
            {
              kind: "para",
              text: "In the sixteenth century the Dvaita saint Vadiraja Tirtha reconsecrated the temple, at the request of the administrator of the day, Devaraja Heggade.",
            },
          ],
        },
        {
          id: "unusual",
          eyebrow: "What is unusual",
          title: "Four traditions in one courtyard",
          blocks: [
            {
              kind: "list",
              items: [
                { label: "The deity is Shiva", text: "Worshipped as Manjunatha, with the goddess Ammanavaru beside him." },
                { label: "The priests are Vaishnava", text: "Madhva Brahmins perform the rituals in a Shiva temple." },
                { label: "The administrators are Jain", text: "The Pergade family, Jain Bunts, have held the trust for about twenty generations." },
                { label: "A Tirthankara is worshipped here", text: "Chandraprabha, the eighth Tirthankara, has his shrine in the same complex." },
                { label: "The daivas remain", text: "Kalarahu, Kalarkayi, Kumaraswamy and Kanyakumari are worshipped as they were before the linga came." },
              ],
            },
          ],
        },
        {
          id: "heggade",
          eyebrow: "Who keeps it",
          title: "The Heggade and the day's complaints",
          blocks: [
            {
              kind: "para",
              text: "The eldest male of the Pergade family becomes Dharma Adhikari, the chief administrator, and takes the title Heggade. The office was once that of the feudal lord of the temple town, and it carried the settling of disputes with it.",
            },
            {
              kind: "para",
              text: "That part has not lapsed. The Heggade still sits in judgement on civil complaints — hoyulu — brought to him, hundreds in a day. The present Dharma Adhikari is Veerendra Heggade.",
            },
          ],
        },
        {
          id: "institutions",
          eyebrow: "What it runs",
          title: "Beyond the temple",
          blocks: [
            {
              kind: "para",
              text: "The kshetra runs schools, colleges and hospitals under its own trusts, chiefly at Ujire nearby.",
            },
            {
              kind: "list",
              items: [
                { label: "SDM Educational Society", text: "At Ujire, with colleges across Karnataka." },
                { label: "SDM Dental College", text: "At the Sattur campus." },
                { label: "Dharmothana Trust", text: "Temple renovation work, run from Bangalore." },
                { label: "SDM Yoga and Nature Cure Hospital", text: "At Dharmasthala itself." },
                { label: "De-addiction and Research Centre", text: "At Ujire." },
              ],
            },
          ],
        },
      ],
    },
    kn: {
      tagline: "ವೈಷ್ಣವ ಅರ್ಚಕರು ಪೂಜಿಸುವ, ಜೈನ ಕುಟುಂಬ ನಡೆಸುವ ಶಿವನ ಕ್ಷೇತ್ರ — ಎಂಟುನೂರು ವರ್ಷಗಳಿಂದ.",
      place: "ಧರ್ಮಸ್ಥಳ · ಬೆಳ್ತಂಗಡಿ · ದಕ್ಷಿಣ ಕನ್ನಡ",
      facts: [
        ["ದೇವರು", "ಶಿವ — ಮಂಜುನಾಥ"],
        ["ಜೊತೆಗೆ", "ಅಮ್ಮನವರು, ಚಂದ್ರಪ್ರಭ ಮತ್ತು ನಾಲ್ಕು ದೈವಗಳು"],
        ["ಕಾಲ", "ಸುಮಾರು 800 ವರ್ಷ"],
        ["ಪುನಃ ಪ್ರತಿಷ್ಠೆ", "ವಾದಿರಾಜ ತೀರ್ಥರು, 16ನೇ ಶತಮಾನ"],
        ["ಅರ್ಚಕರು", "ಮಾಧ್ವ ಬ್ರಾಹ್ಮಣರು"],
        ["ಆಡಳಿತ", "ಹೆಗ್ಗಡೆ ಕುಟುಂಬ — ಜೈನ ಬಂಟರು"],
      ],
      quote:
        "ಒಂದೇ ಪ್ರಾಂಗಣದಲ್ಲಿ ಕದ್ರಿಯಿಂದ ತಂದ ಶಿವಲಿಂಗ, ಜೈನ ತೀರ್ಥಂಕರ, ಮತ್ತು ನಾಡಿನ ನಾಲ್ಕು ಕಾವಲು ದೈವಗಳು — ಇದನ್ನು ಕಾಯುವ ಕುಟುಂಬ ಇಪ್ಪತ್ತು ತಲೆಮಾರುಗಳಿಂದ ಜೈನ.",
      sections: [
        {
          id: "story",
          eyebrow: "ಆರಂಭ",
          title: "ದಾನವಾದ ಮನೆ",
          blocks: [
            {
              kind: "para",
              text: "ಎಂಟುನೂರು ವರ್ಷಗಳ ಹಿಂದೆ ಈ ಸ್ಥಳದ ಹೆಸರು ಕುಡುಮ — ಬೆಳ್ತಂಗಡಿಯ ಮಲ್ಲರಮಡಿಯಲ್ಲಿತ್ತು. ಜೈನ ಪ್ರಭು ಬಿರ್ಮಣ್ಣ ಪೆರ್ಗಡೆ ಮತ್ತು ಅವರ ಪತ್ನಿ ಅಮ್ಮು ಬಲ್ಲಾಳ್ತಿ ನೆಲ್ಲಿಯಡಿ ಬೀಡು ಎಂಬ ಮನೆಯಲ್ಲಿ ವಾಸಿಸುತ್ತಿದ್ದರು.",
            },
            {
              kind: "para",
              text: "ಧರ್ಮದ ಕಾವಲು ದೈವಗಳು ಮನುಷ್ಯ ರೂಪ ತಾಳಿ, ಧರ್ಮ ಪಾಲಿಸುವ ಮನೆಯನ್ನು ಹುಡುಕುತ್ತಾ ಬಂದವು ಎಂಬುದು ಪರಂಪರೆ. ದಂಪತಿಗಳು ಎಲ್ಲರನ್ನೂ ಸ್ವಾಗತಿಸಿದಂತೆಯೇ ಅವರನ್ನೂ ಸತ್ಕರಿಸಿದರು. ಅದೇ ರಾತ್ರಿ ದೈವಗಳು ಪೆರ್ಗಡೆಯವರ ಕನಸಿನಲ್ಲಿ ಕಾಣಿಸಿಕೊಂಡು ತಾವು ಬಂದ ಕಾರಣವನ್ನು ಹೇಳಿ, ಆ ಮನೆಯನ್ನೇ ಕೇಳಿದವು. ಅವರು ತಮಗೆ ಬೇರೊಂದು ಮನೆ ಕಟ್ಟಿಕೊಂಡು, ಕೊಟ್ಟ ಮನೆಯಲ್ಲಿ ದೈವಗಳ ಪೂಜೆ ಆರಂಭಿಸಿದರು.",
            },
            {
              kind: "sub",
              title: "ನಾಲ್ಕು ಗುಡಿಗಳು, ಕದ್ರಿಯಿಂದ ಬಂದ ಲಿಂಗ",
              paras: [
                "ದೈವಗಳು ಮತ್ತೆ ಬಂದು ಕಾಲರಾಹು, ಕಾಲರ್ಕಾಯಿ, ಕುಮಾರಸ್ವಾಮಿ ಮತ್ತು ಕನ್ಯಾಕುಮಾರಿ — ಈ ನಾಲ್ವರಿಗೆ ಪ್ರತ್ಯೇಕ ಗುಡಿಗಳನ್ನು ಕಟ್ಟಲು, ತಮ್ಮ ಪರವಾಗಿ ನುಡಿಯಲು ಇಬ್ಬರು ಸತ್ಕುಲದವರನ್ನು ಮತ್ತು ಪೆರ್ಗಡೆಯವರಿಗೆ ನೆರವಾಗಲು ನಾಲ್ವರನ್ನು ಆರಿಸಲು ಹೇಳಿದವು. ಬದಲಾಗಿ ಕುಟುಂಬಕ್ಕೆ ರಕ್ಷಣೆ, ದಾನಕ್ಕೆ ಸಮೃದ್ಧಿ, ಕ್ಷೇತ್ರಕ್ಕೆ ಕೀರ್ತಿ ದೊರೆಯುವುದೆಂದು ಅಭಯವಿತ್ತವು.",
                "ಪೆರ್ಗಡೆಯವರು ಗುಡಿಗಳನ್ನು ಕಟ್ಟಿಸಿ ಪೂಜೆಗೆ ಬ್ರಾಹ್ಮಣ ಅರ್ಚಕರನ್ನು ಕರೆದರು. ದೈವಗಳ ಪಕ್ಕದಲ್ಲಿ ಶಿವಲಿಂಗವನ್ನೂ ಪ್ರತಿಷ್ಠಾಪಿಸಬೇಕೆಂದು ಅರ್ಚಕರು ಕೇಳಿದರು. ದೈವಗಳು ತಮ್ಮ ಸೇವಕ ಅಣ್ಣಪ್ಪ ಸ್ವಾಮಿಯನ್ನು ಮಂಗಳೂರಿನ ಕದ್ರಿ ಮಂಜುನಾಥ ದೇವಾಲಯಕ್ಕೆ ಕಳುಹಿಸಿ ಲಿಂಗವನ್ನು ತರಿಸಿದವು; ಅದರ ಸುತ್ತಲೇ ಮಂಜುನಾಥ ದೇವಾಲಯ ಎದ್ದಿತು.",
              ],
            },
            {
              kind: "para",
              text: "ಹದಿನಾರನೆಯ ಶತಮಾನದಲ್ಲಿ ಅಂದಿನ ಆಡಳಿತಗಾರ ದೇವರಾಜ ಹೆಗ್ಗಡೆಯವರ ಕೋರಿಕೆಯ ಮೇರೆಗೆ ದ್ವೈತ ಸಂತ ವಾದಿರಾಜ ತೀರ್ಥರು ದೇವಾಲಯವನ್ನು ಪುನಃ ಪ್ರತಿಷ್ಠಾಪಿಸಿದರು.",
            },
          ],
        },
        {
          id: "unusual",
          eyebrow: "ವಿಶೇಷ",
          title: "ಒಂದೇ ಅಂಗಳದಲ್ಲಿ ನಾಲ್ಕು ಪರಂಪರೆಗಳು",
          blocks: [
            {
              kind: "list",
              items: [
                { label: "ದೇವರು ಶಿವ", text: "ಮಂಜುನಾಥನಾಗಿ ಪೂಜೆ; ಪಕ್ಕದಲ್ಲಿ ಅಮ್ಮನವರು." },
                { label: "ಅರ್ಚಕರು ವೈಷ್ಣವರು", text: "ಶಿವ ದೇವಾಲಯದಲ್ಲಿ ಮಾಧ್ವ ಬ್ರಾಹ್ಮಣರ ಪೂಜೆ." },
                { label: "ಆಡಳಿತ ಜೈನರದು", text: "ಜೈನ ಬಂಟರಾದ ಪೆರ್ಗಡೆ ಕುಟುಂಬ ಸುಮಾರು ಇಪ್ಪತ್ತು ತಲೆಮಾರುಗಳಿಂದ ಧರ್ಮದರ್ಶಿಗಳು." },
                { label: "ತೀರ್ಥಂಕರರ ಪೂಜೆ", text: "ಎಂಟನೆಯ ತೀರ್ಥಂಕರ ಚಂದ್ರಪ್ರಭರಿಗೆ ಇದೇ ಪ್ರಾಂಗಣದಲ್ಲಿ ಗುಡಿ." },
                { label: "ದೈವಗಳು ಇಂದಿಗೂ", text: "ಕಾಲರಾಹು, ಕಾಲರ್ಕಾಯಿ, ಕುಮಾರಸ್ವಾಮಿ, ಕನ್ಯಾಕುಮಾರಿ — ಲಿಂಗ ಬರುವ ಮೊದಲಿನಂತೆಯೇ ಪೂಜೆ." },
              ],
            },
          ],
        },
        {
          id: "heggade",
          eyebrow: "ಪಾಲನೆ",
          title: "ಹೆಗ್ಗಡೆ ಮತ್ತು ದಿನದ ದೂರುಗಳು",
          blocks: [
            {
              kind: "para",
              text: "ಪೆರ್ಗಡೆ ಕುಟುಂಬದ ಹಿರಿಯ ಪುರುಷ ಧರ್ಮಾಧಿಕಾರಿಯಾಗಿ 'ಹೆಗ್ಗಡೆ' ಎಂಬ ಬಿರುದನ್ನು ಹೊಂದುತ್ತಾರೆ. ಒಂದು ಕಾಲದಲ್ಲಿ ಇದು ದೇವಾಲಯ ಪಟ್ಟಣದ ಪಾಳೆಗಾರಿಕೆಯ ಸ್ಥಾನವಾಗಿತ್ತು; ವ್ಯಾಜ್ಯಗಳ ಇತ್ಯರ್ಥವೂ ಇದರೊಂದಿಗೆ ಬಂತು.",
            },
            {
              kind: "para",
              text: "ಆ ಪದ್ಧತಿ ಇಂದಿಗೂ ನಿಂತಿಲ್ಲ. ಬಂದ ದೂರುಗಳಿಗೆ — 'ಹೊಯ್ಲು' — ಹೆಗ್ಗಡೆಯವರು ಇಂದಿಗೂ ತೀರ್ಪು ನೀಡುತ್ತಾರೆ; ದಿನಕ್ಕೆ ನೂರಾರು. ಈಗಿನ ಧರ್ಮಾಧಿಕಾರಿ ವೀರೇಂದ್ರ ಹೆಗ್ಗಡೆಯವರು.",
            },
          ],
        },
        {
          id: "institutions",
          eyebrow: "ಸಂಸ್ಥೆಗಳು",
          title: "ದೇವಾಲಯದಾಚೆಗೆ",
          blocks: [
            {
              kind: "para",
              text: "ಕ್ಷೇತ್ರವು ತನ್ನದೇ ಟ್ರಸ್ಟ್‌ಗಳ ಮೂಲಕ ಶಾಲೆ, ಕಾಲೇಜು ಮತ್ತು ಆಸ್ಪತ್ರೆಗಳನ್ನು ನಡೆಸುತ್ತದೆ — ಮುಖ್ಯವಾಗಿ ಹತ್ತಿರದ ಉಜಿರೆಯಲ್ಲಿ.",
            },
            {
              kind: "list",
              items: [
                { label: "ಎಸ್‌ಡಿಎಂ ಶಿಕ್ಷಣ ಸಂಸ್ಥೆ", text: "ಉಜಿರೆಯಲ್ಲಿ; ಕರ್ನಾಟಕದಾದ್ಯಂತ ಕಾಲೇಜುಗಳು." },
                { label: "ಎಸ್‌ಡಿಎಂ ದಂತ ಕಾಲೇಜು", text: "ಸತ್ತೂರು ಆವರಣದಲ್ಲಿ." },
                { label: "ಧರ್ಮೋತ್ಥಾನ ಟ್ರಸ್ಟ್", text: "ದೇವಾಲಯಗಳ ಜೀರ್ಣೋದ್ಧಾರ; ಬೆಂಗಳೂರಿನಿಂದ ನಿರ್ವಹಣೆ." },
                { label: "ಯೋಗ ಮತ್ತು ಪ್ರಕೃತಿ ಚಿಕಿತ್ಸಾಲಯ", text: "ಧರ್ಮಸ್ಥಳದಲ್ಲಿಯೇ." },
                { label: "ವ್ಯಸನಮುಕ್ತಿ ಕೇಂದ್ರ", text: "ಉಜಿರೆಯಲ್ಲಿ." },
              ],
            },
          ],
        },
      ],
    },
    hi: {
      tagline: "वैष्णव पुरोहितों द्वारा पूजित और जैन परिवार द्वारा संचालित शिव का क्षेत्र — आठ सौ वर्षों से।",
      place: "धर्मस्थल · बेलतंगडी · दक्षिण कन्नड़",
      facts: [
        ["देवता", "शिव — मंजुनाथ"],
        ["साथ में", "अम्मनवरु, चंद्रप्रभ और चार दैव"],
        ["काल", "लगभग 800 वर्ष"],
        ["पुनः प्रतिष्ठा", "वादिराज तीर्थ, 16वीं शताब्दी"],
        ["पुरोहित", "माध्व ब्राह्मण"],
        ["प्रबंधन", "हेग्गडे परिवार — जैन बंट"],
      ],
      quote:
        "एक ही प्रांगण में कद्रि से लाया शिवलिंग, एक जैन तीर्थंकर, और गाँव के चार रक्षक दैव — और इसे सँभालने वाला परिवार बीस पीढ़ियों से जैन है।",
      sections: [
        {
          id: "story",
          eyebrow: "आरंभ",
          title: "वह घर जो दान कर दिया गया",
          blocks: [
            {
              kind: "para",
              text: "आठ सौ वर्ष पहले इस जगह का नाम कुडुम था — बेलतंगडी के मल्लरमडि में। जैन सरदार बिर्मण्ण पेर्गडे अपनी पत्नी अम्मु बल्लाल्ति के साथ नेल्लियडि बीडु नामक घर में रहते थे।",
            },
            {
              kind: "para",
              text: "परंपरा कहती है कि धर्म के रक्षक दैव मनुष्य रूप धरकर ऐसा घर खोजते आए जहाँ धर्म निभाया जाता हो। दंपति ने उन्हें भी वैसे ही सत्कार दिया जैसे सबको देते थे। उसी रात दैव पेर्गडे के स्वप्न में आए, अपने आने का कारण बताया और वही घर माँग लिया। उन्होंने अपने लिए दूसरा घर बनाया और दिए हुए घर में दैवों की पूजा आरंभ की।",
            },
            {
              kind: "sub",
              title: "चार गुड़ियाँ और कद्रि से आया लिंग",
              paras: [
                "दैव फिर आए और कालराहु, कालर्कायि, कुमारस्वामी तथा कन्याकुमारी — इन चार के लिए अलग मंदिर बनाने को कहा, अपनी ओर से बोलने के लिए दो कुलीन व्यक्तियों और पेर्गडे की सहायता के लिए चार लोगों को चुनने को कहा। बदले में परिवार को रक्षा, दान का सामर्थ्य और क्षेत्र को कीर्ति का वचन दिया।",
                "पेर्गडे ने मंदिर बनवाए और पूजा के लिए ब्राह्मण पुरोहितों को बुलाया। पुरोहितों ने दैवों के पास शिवलिंग की प्रतिष्ठा का अनुरोध किया। दैवों ने अपने सेवक अण्णप्प स्वामी को मंगलूरु के पास कद्रि मंजुनाथ मंदिर से लिंग लाने भेजा, और उसी के चारों ओर मंजुनाथ मंदिर बना।",
              ],
            },
            {
              kind: "para",
              text: "सोलहवीं शताब्दी में तत्कालीन प्रबंधक देवराज हेग्गडे के अनुरोध पर द्वैत संत वादिराज तीर्थ ने मंदिर की पुनः प्रतिष्ठा की।",
            },
          ],
        },
        {
          id: "unusual",
          eyebrow: "विशेषता",
          title: "एक ही आँगन में चार परंपराएँ",
          blocks: [
            {
              kind: "list",
              items: [
                { label: "देवता शिव हैं", text: "मंजुनाथ के रूप में पूजा; साथ में देवी अम्मनवरु।" },
                { label: "पुरोहित वैष्णव हैं", text: "शिव मंदिर में माध्व ब्राह्मण पूजा करते हैं।" },
                { label: "प्रबंधन जैन परिवार का", text: "जैन बंट पेर्गडे परिवार लगभग बीस पीढ़ियों से धर्मदर्शी है।" },
                { label: "तीर्थंकर की पूजा", text: "आठवें तीर्थंकर चंद्रप्रभ का मंदिर इसी परिसर में है।" },
                { label: "दैव आज भी", text: "कालराहु, कालर्कायि, कुमारस्वामी और कन्याकुमारी — लिंग आने से पहले जैसी पूजा, वैसी ही आज भी।" },
              ],
            },
          ],
        },
        {
          id: "heggade",
          eyebrow: "संरक्षण",
          title: "हेग्गडे और दिन की शिकायतें",
          blocks: [
            {
              kind: "para",
              text: "पेर्गडे परिवार का सबसे बड़ा पुरुष धर्माधिकारी बनता है और 'हेग्गडे' उपाधि धारण करता है। कभी यह मंदिर-नगर के सामंत का पद था, और विवादों का निपटारा भी इसी के साथ आया।",
            },
            {
              kind: "para",
              text: "यह परंपरा आज भी नहीं रुकी। आने वाली दीवानी शिकायतों — 'होयलु' — पर हेग्गडे आज भी निर्णय देते हैं, दिन में सैकड़ों। वर्तमान धर्माधिकारी वीरेंद्र हेग्गडे हैं।",
            },
          ],
        },
        {
          id: "institutions",
          eyebrow: "संस्थाएँ",
          title: "मंदिर से आगे",
          blocks: [
            {
              kind: "para",
              text: "क्षेत्र अपने ट्रस्टों के माध्यम से विद्यालय, महाविद्यालय और अस्पताल चलाता है — मुख्यतः पास के उजिरे में।",
            },
            {
              kind: "list",
              items: [
                { label: "एसडीएम शिक्षण संस्था", text: "उजिरे में; कर्नाटक भर में महाविद्यालय।" },
                { label: "एसडीएम दंत महाविद्यालय", text: "सत्तूर परिसर में।" },
                { label: "धर्मोत्थान ट्रस्ट", text: "मंदिरों का जीर्णोद्धार; बेंगलुरु से संचालित।" },
                { label: "योग एवं प्राकृतिक चिकित्सालय", text: "धर्मस्थल में ही।" },
                { label: "व्यसनमुक्ति केंद्र", text: "उजिरे में।" },
              ],
            },
          ],
        },
      ],
    },
  },
});
