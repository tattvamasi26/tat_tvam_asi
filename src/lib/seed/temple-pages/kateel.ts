import { registerTemplePage } from "../temple-pages";

// ─────────────────────────────────────────────────────────
//  Kateel Sri Durgaparameshwari.
//
//  The English Wikipedia article on the town is thin; the sthala
//  purana here follows the Kannada article (ಕಟೀಲು), which gives the
//  Arunasura story and the curse of Nandini in full. The geography
//  and the temple's own institutions follow the English article.
// ─────────────────────────────────────────────────────────

registerTemplePage({
  slug: "kateel",
  region: "tulunadu",
  order: 5,
  name: {
    en: "Kateel Sri Durgaparameshwari Temple",
    kn: "ಕಟೀಲು ಶ್ರೀ ದುರ್ಗಾಪರಮೇಶ್ವರಿ ದೇವಸ್ಥಾನ",
    hi: "कटील श्री दुर्गापरमेश्वरी मंदिर",
  },
  nameLocal: "ಕಟೀಲು ಶ್ರೀ ದುರ್ಗಾಪರಮೇಶ್ವರಿ ದೇವಸ್ಥಾನ",
  nameLocalLang: "kn",
  hero: {
    src: "/images/temples/kateel/hero.jpg",
    width: 1200,
    height: 675,
    credit:
      "Shri Durgaparameshwari Temple, Kateel — photo by Pragathi. BH, CC BY-SA 4.0, via Wikimedia Commons, cropped",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Shri_durgaparameshwari_temple.jpg",
    alt: {
      en: "The carved and painted gopura of the Kateel temple.",
      kn: "ಕಟೀಲು ದೇವಾಲಯದ ಕೆತ್ತನೆಯ, ಬಣ್ಣದ ಗೋಪುರ.",
      hi: "कटील मंदिर का नक्काशीदार और रंगा हुआ गोपुर।",
    },
  },
  gallery: [
    {
      src: "/images/temples/kateel/entrance.jpg",
      width: 600,
      height: 800,
      credit: "Kateel Temple — photo by Hariprasad Shetty, CC BY-SA 4.0, via Wikimedia Commons, cropped",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Kateel_Temple.jpg",
      alt: {
        en: "The temple entrance seen from the road.",
        kn: "ರಸ್ತೆಯಿಂದ ಕಾಣುವ ದೇವಾಲಯದ ಪ್ರವೇಶ.",
        hi: "सड़क से दिखता मंदिर का प्रवेश।",
      },
      caption: {
        en: "The entrance, with the Nandini running on both sides of the shrine.",
        kn: "ಪ್ರವೇಶದ್ವಾರ; ಗುಡಿಯ ಎರಡೂ ಬದಿಗಳಲ್ಲಿ ನಂದಿನಿ ಹರಿಯುತ್ತದೆ.",
        hi: "प्रवेश द्वार; मंदिर के दोनों ओर नंदिनी बहती है।",
      },
    },
  ],
  sources: [
    { title: "ಕಟೀಲು — Kannada Wikipedia", url: "https://kn.wikipedia.org/wiki/%E0%B2%95%E0%B2%9F%E0%B3%80%E0%B2%B2%E0%B3%81" },
    { title: "Kateel — Wikipedia", url: "https://en.wikipedia.org/wiki/Kateel" },
  ],
  content: {
    en: {
      tagline: "The goddess rose on an islet in the middle of the river, and freed the river from her curse.",
      place: "Kateel · Dakshina Kannada",
      facts: [
        ["Deity", "Durgaparameshwari, in linga form"],
        ["Stands on", "An islet in the Nandini river"],
        ["Name from", "Kati, the middle, and ila, land"],
        ["From Mangaluru", "About 21 km"],
        ["Administered by", "The Karnataka endowment department"],
        ["Known for", "Its six Yakshagana melas"],
      ],
      quote:
        "Nandini was cursed to flow as a river, and told that the goddess would be born as her daughter. She rose in the middle of her stream — so the place is Kati-ila, Kateel.",
      sections: [
        {
          id: "story",
          eyebrow: "Sthala purana",
          title: "The famine, the river and the bee",
          blocks: [
            {
              kind: "sub",
              title: "Arunasura and the drought",
              paras: [
                "When Durga killed the demons Shumbha and Nishumbha, one of their ministers, Arunasura, fled the field and lived. In time he became the leader of the demons and set himself to spoiling the penances and sacrifices of the sages.",
                "With the sacrifices stopped, the gods withheld rain, and a hard famine followed on earth. The sage Jabali resolved to hold a yajna to satisfy the gods and bring the rain back.",
              ],
            },
            {
              kind: "sub",
              title: "Nandini's curse",
              paras: [
                "Jabali went to Indra and asked for Kamadhenu to help with the sacrifice. Kamadhenu had gone to Varuna's world, so Indra sent her daughter Nandini in her place. Nandini refused to go, and spoke slightingly of the earth and its people. Stung, the sage cursed her to flow on earth as a river.",
                "When she begged forgiveness he told her to pray to Adi Shakti. The goddess came, and said the sage's word could not be made false: Nandini must flow. But she promised to be born as Nandini's daughter and so free her of the curse. On the full moon of Magha, Nandini came down from Kanakagiri as a river, and the land was green again.",
              ],
            },
            {
              kind: "sub",
              title: "The boon, and the form of a bee",
              paras: [
                "Arunasura meanwhile had won a boon from Brahma: no death at the hands of the Trimurti, of the gods, of men or women, or of four-footed creatures. Saraswati had taught him the Gayatri, and with it he grew stronger still, took the world of the gods, and demanded worship for himself.",
                "The goddess told the gods that while he held to the Gayatri she could not kill him. Brihaspati was sent, and by a stratagem turned him from the mantra. Then the goddess walked in his garden as Mohini. His ministers Chanda and Prachanda saw her; Arunasura came to marry her, learned who she was, and attacked. She vanished into a rock. He struck the rock with his sword, and bees poured out of it in thousands. The goddess took the form of a great bee — bhramara — and stung him to death. From that she is Bhramari.",
                "To cool her fury the gods and Jabali bathed her with tender coconut water brought from the kalpavriksha and put a jasmine garland on her. She then rose as a linga on the islet in the middle of the Nandini, as Durgaparameshwari — and Nandini's curse ended there.",
              ],
            },
          ],
        },
        {
          id: "place",
          eyebrow: "The place",
          title: "Between the source and the sea",
          blocks: [
            {
              kind: "para",
              text: "Kateel lies about 21 km from Mangaluru, between Bajpe, where the airport is, and the junction at Kinnigoli. The temple stands on a small island in the Nandini, with the river running on both sides of it.",
            },
            {
              kind: "para",
              text: "The name is read as kati and ila — the middle, and land. Kateel is midway between Kanakagiri, where the Nandini rises, and Pavanje, where it reaches the sea.",
            },
          ],
        },
        {
          id: "life",
          eyebrow: "What goes on",
          title: "Yakshagana, homas and schools",
          blocks: [
            {
              kind: "para",
              text: "The temple is under the Karnataka endowment department. It keeps up the arts of the coast, Yakshagana above all: six melas — troupes — perform as a seva, and devotees have a play staged at their own place through one of them.",
            },
            {
              kind: "list",
              items: [
                { label: "Chandika Homa", text: "Performed here on special days, with Veda parayana and Harikathe." },
                { label: "Tulabhara", text: "The offering of one's own weight in grain or other goods." },
                { label: "Schools and colleges", text: "The temple owns and runs them, including a first grade college and a Sanskrit postgraduate and research centre." },
              ],
            },
          ],
        },
      ],
    },
    kn: {
      tagline: "ನದಿಯ ನಡುವಿನ ದ್ವೀಪದಲ್ಲಿ ದೇವಿ ಉದ್ಭವಿಸಿದಳು; ನದಿಯ ಶಾಪವೂ ಅಲ್ಲೇ ಕಳೆಯಿತು.",
      place: "ಕಟೀಲು · ದಕ್ಷಿಣ ಕನ್ನಡ",
      facts: [
        ["ದೇವತೆ", "ದುರ್ಗಾಪರಮೇಶ್ವರಿ — ಲಿಂಗ ರೂಪದಲ್ಲಿ"],
        ["ನೆಲೆ", "ನಂದಿನಿ ನದಿಯ ನಡುವಿನ ದ್ವೀಪ"],
        ["ಹೆಸರು", "ಕಟಿ (ನಡು) + ಇಳಾ (ಭೂಮಿ)"],
        ["ಮಂಗಳೂರಿನಿಂದ", "ಸುಮಾರು 21 ಕಿ.ಮೀ."],
        ["ಆಡಳಿತ", "ಕರ್ನಾಟಕ ಮುಜರಾಯಿ ಇಲಾಖೆ"],
        ["ಪ್ರಸಿದ್ಧಿ", "ಆರು ಯಕ್ಷಗಾನ ಮೇಳಗಳು"],
      ],
      quote:
        "ನಂದಿನಿಗೆ ನದಿಯಾಗಿ ಹರಿಯುವ ಶಾಪ; ದೇವಿಯೇ ಅವಳ ಮಗಳಾಗಿ ಬರುವ ಅಭಯ. ದೇವಿ ಉದ್ಭವಿಸಿದ್ದು ನಂದಿನಿಯ ನಡುವೆ — ಕಟಿ-ಇಳಾ, ಕಟೀಲು.",
      sections: [
        {
          id: "story",
          eyebrow: "ಸ್ಥಳ ಪುರಾಣ",
          title: "ಕ್ಷಾಮ, ನದಿ ಮತ್ತು ದುಂಬಿ",
          blocks: [
            {
              kind: "sub",
              title: "ಅರುಣಾಸುರ ಮತ್ತು ಬರ",
              paras: [
                "ದುರ್ಗೆಯು ಶುಂಭ ನಿಶುಂಭರನ್ನು ಸಂಹರಿಸಿದಾಗ ಅವರ ಮಂತ್ರಿಗಳಲ್ಲೊಬ್ಬನಾದ ಅರುಣಾಸುರನು ಯುದ್ಧಭೂಮಿಯಿಂದ ಓಡಿ ಪ್ರಾಣ ಉಳಿಸಿಕೊಂಡನು. ಕಾಲಕ್ರಮೇಣ ರಾಕ್ಷಸರ ನಾಯಕನಾಗಿ ಋಷಿಮುನಿಗಳ ತಪಸ್ಸು, ಯಾಗಗಳಿಗೆ ವಿಘ್ನ ತರತೊಡಗಿದನು.",
                "ಯಾಗಗಳು ನಿಂತಾಗ ದೇವತೆಗಳು ಮಳೆಯನ್ನು ನಿಲ್ಲಿಸಿದರು; ಭೂಮಿಯಲ್ಲಿ ಭೀಕರ ಕ್ಷಾಮ ತಲೆದೋರಿತು. ದೇವತೆಗಳನ್ನು ತೃಪ್ತಿಗೊಳಿಸಿ ಮಳೆ ತರಿಸಲು ಜಾಬಾಲಿ ಮಹರ್ಷಿಗಳು ಯಜ್ಞ ನಡೆಸಲು ನಿಶ್ಚಯಿಸಿದರು.",
              ],
            },
            {
              kind: "sub",
              title: "ನಂದಿನಿಯ ಶಾಪ",
              paras: [
                "ಯಜ್ಞಕ್ಕೆ ನೆರವಾಗಲು ಕಾಮಧೇನುವನ್ನು ಕಳುಹಿಸುವಂತೆ ಮಹರ್ಷಿಗಳು ದೇವೇಂದ್ರನಲ್ಲಿ ಕೇಳಿದರು. ಕಾಮಧೇನು ವರುಣಲೋಕಕ್ಕೆ ಹೋಗಿದ್ದರಿಂದ ಅವಳ ಮಗಳು ನಂದಿನಿಯನ್ನು ಇಂದ್ರ ಕಳುಹಿಸಿದನು. ನಂದಿನಿ ಬರಲು ನಿರಾಕರಿಸಿ ಭೂಲೋಕವನ್ನೂ ಅಲ್ಲಿನ ಜನರನ್ನೂ ನಿಂದಿಸಿದಳು. ಮನನೊಂದ ಮಹರ್ಷಿಗಳು ಭೂಮಿಯಲ್ಲಿ ನದಿಯಾಗಿ ಹರಿಯುವಂತೆ ಶಪಿಸಿದರು.",
                "ಕ್ಷಮೆ ಕೇಳಿದಾಗ ಆದಿಶಕ್ತಿಯನ್ನು ಪ್ರಾರ್ಥಿಸುವಂತೆ ಸೂಚಿಸಿದರು. ಪ್ರತ್ಯಕ್ಷಳಾದ ದೇವಿ, ಋಷಿವಾಕ್ಯವನ್ನು ಸುಳ್ಳಾಗಿಸಲಾಗದು — ನಂದಿನಿ ನದಿಯಾಗಿ ಹರಿಯಲೇಬೇಕು — ಎಂದು ಹೇಳಿ, ತಾನೇ ಅವಳ ಮಗಳಾಗಿ ಜನಿಸಿ ಶಾಪ ವಿಮೋಚನೆ ಮಾಡುವುದಾಗಿ ಅಭಯವಿತ್ತಳು. ಮಾಘ ಶುದ್ಧ ಪೂರ್ಣಿಮೆಯಂದು ಕನಕಗಿರಿಯಿಂದ ನಂದಿನಿ ನದಿಯಾಗಿ ಹರಿದಳು; ಭೂಮಿ ಮತ್ತೆ ಹಸಿರಾಯಿತು.",
              ],
            },
            {
              kind: "sub",
              title: "ವರ, ಮತ್ತು ಭ್ರಮರ ರೂಪ",
              paras: [
                "ಇತ್ತ ಅರುಣಾಸುರನು ಬ್ರಹ್ಮನಿಂದ ವರ ಪಡೆದಿದ್ದನು: ತ್ರಿಮೂರ್ತಿಗಳಿಂದ, ದೇವತೆಗಳಿಂದ, ಪುರುಷರಿಂದ, ಸ್ತ್ರೀಯರಿಂದ, ಚತುಷ್ಪದಿಗಳಿಂದ ಮರಣವಿಲ್ಲ. ಸರಸ್ವತಿಯು ಗಾಯತ್ರಿಯನ್ನು ಉಪದೇಶಿಸಿದ್ದರಿಂದ ಇನ್ನಷ್ಟು ಬಲಿಷ್ಠನಾಗಿ ದೇವಲೋಕವನ್ನೇ ವಶಪಡಿಸಿಕೊಂಡು ತನ್ನನ್ನೇ ಪೂಜಿಸಬೇಕೆಂದು ಆಜ್ಞಾಪಿಸಿದನು.",
                "ಗಾಯತ್ರಿಯನ್ನು ಅವನು ಬಿಡದ ತನಕ ಸಂಹಾರ ಅಸಾಧ್ಯವೆಂದು ದೇವಿ ಹೇಳಿದಳು; ಬೃಹಸ್ಪತಿಗಳು ಉಪಾಯದಿಂದ ಅವನನ್ನು ಮಂತ್ರದಿಂದ ವಿಮುಖನಾಗಿಸಿದರು. ಆಗ ದೇವಿ ಮೋಹಿನಿಯ ರೂಪದಲ್ಲಿ ಅವನ ಉದ್ಯಾನದಲ್ಲಿ ಸುಳಿದಳು. ಮಂತ್ರಿಗಳಾದ ಚಂಡ ಪ್ರಚಂಡರು ಕಂಡು ತಿಳಿಸಿದರು; ಅರುಣಾಸುರನು ಬಂದು, ಇವಳೇ ತನ್ನ ಒಡೆಯರನ್ನು ಕೊಂದವಳೆಂದು ತಿಳಿದು ದಾಳಿ ಮಾಡಿದನು. ದೇವಿ ಬಂಡೆಯೊಳಗೆ ಅಂತರ್ಧಾನಳಾದಳು; ಖಡ್ಗದಿಂದ ಬಂಡೆಯನ್ನು ಒಡೆದಾಗ ಸಾವಿರಾರು ದುಂಬಿಗಳು ಹೊರಬಂದವು. ದೇವಿ ದೊಡ್ಡ ಭ್ರಮರದ ರೂಪ ತಾಳಿ ಅವನನ್ನು ಕಚ್ಚಿ ಕೊಂದಳು — ಅಂದಿನಿಂದ ಅವಳು ಭ್ರಾಮರಿ.",
                "ರೌದ್ರ ರೂಪವನ್ನು ಶಾಂತಗೊಳಿಸಲು ದೇವತೆಗಳೂ ಜಾಬಾಲಿ ಮಹರ್ಷಿಗಳೂ ಕಲ್ಪವೃಕ್ಷದಿಂದ ತಂದ ಎಳನೀರಿನಿಂದ ಅಭಿಷೇಕ ಮಾಡಿ ಮಲ್ಲಿಗೆ ಹಾರ ಹಾಕಿದರು. ದೇವಿ ನಂದಿನಿಯ ನಡುವಿನ ಪುಟ್ಟ ದ್ವೀಪದಲ್ಲಿ ಲಿಂಗ ರೂಪದಲ್ಲಿ ದುರ್ಗಾಪರಮೇಶ್ವರಿಯಾಗಿ ಉದ್ಭವಿಸಿದಳು; ನಂದಿನಿಯ ಶಾಪವೂ ಕಳೆಯಿತು.",
              ],
            },
          ],
        },
        {
          id: "place",
          eyebrow: "ಸ್ಥಳ",
          title: "ಉಗಮ ಮತ್ತು ಕಡಲ ನಡುವೆ",
          blocks: [
            {
              kind: "para",
              text: "ಮಂಗಳೂರಿನಿಂದ ಸುಮಾರು 21 ಕಿ.ಮೀ. ದೂರದಲ್ಲಿ, ವಿಮಾನ ನಿಲ್ದಾಣವಿರುವ ಬಜ್ಪೆ ಮತ್ತು ಕಿನ್ನಿಗೋಳಿ ಜಂಕ್ಷನ್ ನಡುವೆ ಕಟೀಲು ಇದೆ. ನಂದಿನಿ ನದಿಯ ನಡುವಿನ ಪುಟ್ಟ ದ್ವೀಪದಲ್ಲಿ ದೇವಾಲಯವಿದ್ದು, ಎರಡೂ ಬದಿಗಳಲ್ಲಿ ನದಿ ಹರಿಯುತ್ತದೆ.",
            },
            {
              kind: "para",
              text: "'ಕಟಿ' ಎಂದರೆ ನಡು, 'ಇಳಾ' ಎಂದರೆ ಭೂಮಿ. ನಂದಿನಿ ಹುಟ್ಟುವ ಕನಕಗಿರಿ ಮತ್ತು ಕಡಲನ್ನು ಸೇರುವ ಪಾವಂಜೆಯ ನಡುವಿನ ಮಧ್ಯಭಾಗವೇ ಕಟೀಲು.",
            },
          ],
        },
        {
          id: "life",
          eyebrow: "ಇಲ್ಲಿನ ನಡೆ",
          title: "ಯಕ್ಷಗಾನ, ಹೋಮ ಮತ್ತು ಶಾಲೆಗಳು",
          blocks: [
            {
              kind: "para",
              text: "ದೇವಾಲಯ ಕರ್ನಾಟಕ ಮುಜರಾಯಿ ಇಲಾಖೆಯ ವ್ಯಾಪ್ತಿಯಲ್ಲಿದೆ. ಕರಾವಳಿಯ ಕಲೆಗಳಿಗೆ, ಅದರಲ್ಲೂ ಯಕ್ಷಗಾನಕ್ಕೆ ಆಶ್ರಯ ನೀಡುತ್ತದೆ: ಆರು ಮೇಳಗಳು ಸೇವಾರೂಪದಲ್ಲಿ ಬಯಲಾಟ ನಡೆಸುತ್ತವೆ; ಭಕ್ತರು ತಮ್ಮ ಊರಿನಲ್ಲೇ ಆಟ ಆಡಿಸಬಹುದು.",
            },
            {
              kind: "list",
              items: [
                { label: "ಚಂಡಿಕಾ ಹೋಮ", text: "ವಿಶೇಷ ದಿನಗಳಂದು; ಜೊತೆಗೆ ವೇದ ಪಾರಾಯಣ, ಹರಿಕಥೆ." },
                { label: "ತುಲಾಭಾರ", text: "ತನ್ನ ತೂಕದಷ್ಟು ಧಾನ್ಯ ಮೊದಲಾದವನ್ನು ಅರ್ಪಿಸುವ ಸೇವೆ." },
                { label: "ಶಿಕ್ಷಣ ಸಂಸ್ಥೆಗಳು", text: "ಪ್ರಥಮ ದರ್ಜೆ ಕಾಲೇಜು ಮತ್ತು ಸಂಸ್ಕೃತ ಸ್ನಾತಕೋತ್ತರ ಅಧ್ಯಯನ ಕೇಂದ್ರ ಸೇರಿದಂತೆ ದೇವಾಲಯದ ಒಡೆತನದ ಸಂಸ್ಥೆಗಳು." },
              ],
            },
          ],
        },
      ],
    },
    hi: {
      tagline: "देवी नदी के बीच के द्वीप पर प्रकट हुईं, और वहीं नदी का शाप भी समाप्त हुआ।",
      place: "कटील · दक्षिण कन्नड़",
      facts: [
        ["देवी", "दुर्गापरमेश्वरी — लिंग रूप में"],
        ["स्थान", "नंदिनी नदी के बीच का द्वीप"],
        ["नाम", "कटि (मध्य) + इला (भूमि)"],
        ["मंगलूरु से", "लगभग 21 किमी"],
        ["प्रबंधन", "कर्नाटक मुजराई विभाग"],
        ["प्रसिद्धि", "छह यक्षगान मेले"],
      ],
      quote:
        "नंदिनी को नदी बनकर बहने का शाप मिला, और यह वचन भी कि देवी उसकी पुत्री बनकर आएँगी। देवी उसी धारा के बीच प्रकट हुईं — कटि-इला, कटील।",
      sections: [
        {
          id: "story",
          eyebrow: "स्थल पुराण",
          title: "अकाल, नदी और भ्रमर",
          blocks: [
            {
              kind: "sub",
              title: "अरुणासुर और सूखा",
              paras: [
                "जब दुर्गा ने शुंभ और निशुंभ का वध किया, उनके मंत्रियों में से एक अरुणासुर रणभूमि से भागकर बच निकला। समय के साथ वह राक्षसों का नायक बना और ऋषियों की तपस्या तथा यज्ञों में विघ्न डालने लगा।",
                "यज्ञ रुक जाने पर देवताओं ने वर्षा रोक दी, और पृथ्वी पर भीषण अकाल पड़ा। देवताओं को प्रसन्न कर वर्षा लौटाने के लिए जाबालि ऋषि ने यज्ञ का संकल्प किया।",
              ],
            },
            {
              kind: "sub",
              title: "नंदिनी का शाप",
              paras: [
                "जाबालि ने इंद्र से यज्ञ हेतु कामधेनु माँगी। कामधेनु वरुणलोक गई थीं, अतः इंद्र ने उनकी पुत्री नंदिनी को भेजा। नंदिनी ने आने से इनकार किया और पृथ्वी तथा उसके लोगों की निंदा की। आहत ऋषि ने उसे पृथ्वी पर नदी बनकर बहने का शाप दिया।",
                "क्षमा माँगने पर उन्होंने आदिशक्ति की प्रार्थना करने को कहा। देवी प्रकट हुईं और कहा कि ऋषि का वचन मिथ्या नहीं हो सकता — नंदिनी को नदी बनना ही होगा; किंतु वे स्वयं उसकी पुत्री बनकर जन्म लेंगी और शाप से मुक्त करेंगी। माघ शुक्ल पूर्णिमा को नंदिनी कनकगिरि से नदी बनकर बही, और भूमि फिर हरी हो उठी।",
              ],
            },
            {
              kind: "sub",
              title: "वरदान, और भ्रमर का रूप",
              paras: [
                "उधर अरुणासुर ने ब्रह्मा से वर पाया था: त्रिमूर्ति, देवताओं, पुरुषों, स्त्रियों या चौपायों से उसकी मृत्यु न हो। सरस्वती ने उसे गायत्री का उपदेश दिया था; उससे और बलवान होकर उसने देवलोक जीत लिया और अपनी ही पूजा का आदेश दिया।",
                "देवी ने कहा कि जब तक वह गायत्री का जप करता है, वध संभव नहीं। बृहस्पति ने युक्ति से उसे मंत्र से विमुख किया। तब देवी मोहिनी रूप में उसके उद्यान में विचरीं। मंत्री चंड-प्रचंड ने देखकर बताया; अरुणासुर आया, जाना कि यही उसके स्वामियों की संहारक है, और आक्रमण किया। देवी एक शिला में अंतर्धान हो गईं। उसने तलवार से शिला तोड़ी तो सहस्रों भौंरे निकल पड़े। देवी ने विशाल भ्रमर का रूप लेकर उसे डंक मारकर मारा — तभी से वे भ्रामरी हैं।",
                "उनके रौद्र रूप को शांत करने के लिए देवताओं और जाबालि ने कल्पवृक्ष से लाए नारियल जल से अभिषेक कर मल्लिका की माला पहनाई। तब देवी नंदिनी के बीच के छोटे द्वीप पर लिंग रूप में दुर्गापरमेश्वरी के रूप में प्रकट हुईं, और नंदिनी का शाप समाप्त हुआ।",
              ],
            },
          ],
        },
        {
          id: "place",
          eyebrow: "स्थान",
          title: "उद्गम और समुद्र के बीच",
          blocks: [
            {
              kind: "para",
              text: "कटील मंगलूरु से लगभग 21 किमी दूर, हवाई अड्डे वाले बज्पे और किन्निगोली जंक्शन के बीच है। मंदिर नंदिनी नदी के बीच एक छोटे द्वीप पर है, और नदी उसके दोनों ओर बहती है।",
            },
            {
              kind: "para",
              text: "'कटि' अर्थात् मध्य, 'इला' अर्थात् भूमि। नंदिनी जहाँ से निकलती है उस कनकगिरि और जहाँ समुद्र में मिलती है उस पावंजे के ठीक बीच में कटील पड़ता है।",
            },
          ],
        },
        {
          id: "life",
          eyebrow: "यहाँ का जीवन",
          title: "यक्षगान, होम और विद्यालय",
          blocks: [
            {
              kind: "para",
              text: "मंदिर कर्नाटक मुजराई विभाग के अधीन है। यह तट की कलाओं को, विशेषकर यक्षगान को, आश्रय देता है: छह मेले सेवा रूप में बयलाट करते हैं, और भक्त अपने गाँव में भी इनमें से किसी मेले से प्रदर्शन करा सकते हैं।",
            },
            {
              kind: "list",
              items: [
                { label: "चंडिका होम", text: "विशेष दिनों पर; साथ में वेद पारायण और हरिकथा।" },
                { label: "तुलाभार", text: "अपने भार के बराबर अन्न आदि अर्पित करने की सेवा।" },
                { label: "विद्यालय और महाविद्यालय", text: "मंदिर के स्वामित्व में, जिनमें प्रथम श्रेणी महाविद्यालय और संस्कृत स्नातकोत्तर शोध केंद्र शामिल हैं।" },
              ],
            },
          ],
        },
      ],
    },
  },
});
