import { registerTemplePage } from "../temple-pages";

// ─────────────────────────────────────────────────────────
//  Kadri Manjunatha Temple, Mangaluru.
//
//  Written from the temple's Wikipedia article. The Buddhist layer is
//  not smoothed away: the inscriptions and the bronzes are evidence
//  that a Vajrayana vihara stood here, and the article's reading of
//  that — following M. Govinda Pai — is given as his.
// ─────────────────────────────────────────────────────────

registerTemplePage({
  slug: "kadri-manjunatha",
  region: "tulunadu",
  order: 7,
  name: {
    en: "Kadri Manjunatha Temple",
    kn: "ಕದ್ರಿ ಮಂಜುನಾಥ ದೇವಸ್ಥಾನ",
    hi: "कद्रि मंजुनाथ मंदिर",
  },
  nameLocal: "ಶ್ರೀ ಮಂಜುನಾಥ ದೇವಸ್ಥಾನ, ಕದ್ರಿ",
  nameLocalLang: "kn",
  hero: {
    src: "/images/temples/kadri-manjunatha/hero.jpg",
    width: 1200,
    height: 675,
    credit: "Kadri temple, Mangaluru — photo by Vaikoovery, CC BY 3.0, via Wikimedia Commons, cropped",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Kadri_temple.JPG",
    alt: {
      en: "The tiled roofs and white shikhara of the Kadri temple.",
      kn: "ಕದ್ರಿ ದೇವಾಲಯದ ಹೆಂಚಿನ ಛಾವಣಿಗಳು ಮತ್ತು ಬಿಳಿಯ ಶಿಖರ.",
      hi: "कद्रि मंदिर की खपरैल छतें और श्वेत शिखर।",
    },
  },
  gallery: [
    {
      src: "/images/temples/kadri-manjunatha/gopura.jpg",
      width: 600,
      height: 800,
      credit: "Kadri temple entrance, Mangaluru — photo by Surfmaster23, CC BY 4.0, via Wikimedia Commons, cropped",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Kadri_temple_entrance_mangalore.jpg",
      alt: {
        en: "The painted gopura at the entrance to the Kadri temple.",
        kn: "ಕದ್ರಿ ದೇವಾಲಯದ ಪ್ರವೇಶದ ಬಣ್ಣದ ಗೋಪುರ.",
        hi: "कद्रि मंदिर के प्रवेश का रंगा हुआ गोपुर।",
      },
      caption: {
        en: "The gopura on the street below the hill.",
        kn: "ಗುಡ್ಡದ ಕೆಳಗಿನ ಬೀದಿಯಲ್ಲಿರುವ ಗೋಪುರ.",
        hi: "पहाड़ी के नीचे की सड़क पर बना गोपुर।",
      },
    },
  ],
  sources: [
    { title: "Kadri Manjunath Temple — Wikipedia", url: "https://en.wikipedia.org/wiki/Kadri_Manjunath_Temple" },
    { title: "Avalokiteśvara — Wikipedia", url: "https://en.wikipedia.org/wiki/Avalokite%C5%9Bvara" },
  ],
  content: {
    en: {
      tagline: "A Shiva temple on a hill that was a Buddhist vihara, with a bronze Lokeshwara older than the linga's fame.",
      place: "Kadri · Mangaluru · Dakshina Kannada",
      facts: [
        ["Deity", "Shiva, as Manjunatha"],
        ["Built", "10th–11th century; stone from the 14th"],
        ["The bronze", "Lokeshwara, inscribed 968 CE"],
        ["Installed by", "King Kundavarma of the Alupas"],
        ["Priests", "Shivalli Madhva Brahmins"],
        ["Water", "The Gomukha spring and nine ponds"],
      ],
      quote:
        "The inscription on the bronze says an Alupa king set Lokeshwara in the Kadarika Vihara. The same building is now Manjunatha's. Both are true, one after the other.",
      sections: [
        {
          id: "history",
          eyebrow: "What the stones say",
          title: "A vihara that became a temple",
          blocks: [
            {
              kind: "para",
              text: "The temple on the Kadri hill is held to have been built in the tenth or eleventh century, and was rebuilt wholly in stone in the fourteenth.",
            },
            {
              kind: "sub",
              title: "The bronze Lokeshwara",
              paras: [
                "Its panchaloha image of Lokeshwara stands about five feet high and is called the oldest bronze in any South Indian temple. The inscription on its pedestal, dated 968 CE — some read 1068 — says King Kundavarma of the Alupa dynasty installed the Lokeshwara in the Kadarika Vihara, and calls the city Mangalapura.",
                "The image has three faces and six arms, holds flowers in two of them, and wears a crown showing a Dhyani Buddha. Two other bronzes of the same workmanship stand here: one identifiable as Avalokiteshvara, called Narayana, and one as the Buddha, called Vedavyasa.",
                "A stone inscription in the temple kitchen, in Tulu, Kannada and Malayalam scripts and of the twelfth or thirteenth century, records land given by the ruler and local landlords. A text of 1730, the Kadli Manjunath Mahatmyam, gives the temple's link with the Nath order.",
              ],
            },
            {
              kind: "sub",
              title: "How the change is read",
              paras: [
                "Buddhism was practised here until about the tenth century, and devotion to Manjusri and Avalokiteshvara continued in this region after it had declined elsewhere. The Nath order was turned partly towards Buddhism and partly towards the tantric Shiva tradition, and many Buddhist foundations passed into Hindu hands.",
                "M. Govinda Pai read the name Kadri from Kadri Vihara, a Vajrayana monastery, and took this to have been a centre of the Manjusri cult, the bodhisattva later identified with Shiva as Manjunatha. Kundavarma's own inscription, on the base of the Avalokiteshvara image, calls him a devotee of Shiva — the linga and the bodhisattva were worshipped together here for centuries before the temple became wholly Shaiva.",
              ],
            },
          ],
        },
        {
          id: "legend",
          eyebrow: "The other account",
          title: "Parashurama and Manjunatha",
          blocks: [
            {
              kind: "para",
              text: "The tradition tells it differently. Parashurama, living in the Sahyadri, gave away the land he had won and asked Shiva for a place of his own to do penance. Shiva promised that if he performed penance at Kadali Kshetra, he would come there as Manjunatha for the good of the world.",
            },
            {
              kind: "para",
              text: "Parashurama threw his axe into the sea and made ground to sit on, and Shiva appeared to him as Manjunatha with Parvati and stayed at Kadri. By Manjunatha's word the seven crore mantras became the seven tirthas.",
            },
          ],
        },
        {
          id: "water",
          eyebrow: "The hill",
          title: "Gomukha, and the nine ponds",
          blocks: [
            {
              kind: "para",
              text: "Behind the temple, higher up, a natural spring runs from a spout called the Gomukha. The water is held to come from the Bhagirathi at Kashi, and is called Kashi Bhagirathi tirtha. It feeds nine ponds of different sizes below it, and visitors wash there before going in.",
            },
            {
              kind: "para",
              text: "In front of the temple stands a tall lamp post, lit for the Deepotsava in the month of Karthika. Images of Machendranath, Gorakanath, Shringinath, Lokeshwara, Manjushri and the Buddha stand in the temple.",
            },
          ],
        },
        {
          id: "jatra",
          eyebrow: "The year",
          title: "Jathra Mahotsava, from Makara Sankranti",
          blocks: [
            {
              kind: "para",
              text: "The annual festival runs nine days from Makara Sankranti in January. It opens with the bhandara of the Malaraya daiva carried in procession, the tirtha snana in the morning, the raising of the flag, the lighting of the kanchi stambha and the bali utsava.",
            },
            {
              kind: "rows",
              rows: [
                { when: "Four days", name: "Savari Bali", text: "Manjunatha visits the four kattas in turn — Bikarnakatte, Mallikatte, Mundanakatte and Konchadi." },
                { when: "Seventh day", name: "Deepotsava", text: "The seventh lighting, followed by the Maha Anna Santarpane, the mass feeding." },
                { when: "Eighth day", name: "Maha Rathotsava", text: "The great chariot, and then the silver chariot, the Belli Rathotsava." },
                { when: "After", name: "Avabritha Snana", text: "With the tulabhara seva, the Chandramandalotsava and the flag-raising." },
                { when: "Last", name: "Malaraya Nemotsava", text: "The bhandara goes up to the Kadri hills for the daivas' nemotsava, and returns to the house it came from." },
              ],
            },
          ],
        },
      ],
    },
    kn: {
      tagline: "ಬೌದ್ಧ ವಿಹಾರವಾಗಿದ್ದ ಗುಡ್ಡದ ಮೇಲಿನ ಶಿವ ದೇವಾಲಯ; ಲಿಂಗದ ಕೀರ್ತಿಗಿಂತಲೂ ಹಳೆಯ ಕಂಚಿನ ಲೋಕೇಶ್ವರ.",
      place: "ಕದ್ರಿ · ಮಂಗಳೂರು · ದಕ್ಷಿಣ ಕನ್ನಡ",
      facts: [
        ["ದೇವರು", "ಶಿವ — ಮಂಜುನಾಥ"],
        ["ನಿರ್ಮಾಣ", "10–11ನೇ ಶತಮಾನ; 14ನೇ ಶತಮಾನದಲ್ಲಿ ಸಂಪೂರ್ಣ ಶಿಲೆ"],
        ["ಕಂಚಿನ ಮೂರ್ತಿ", "ಲೋಕೇಶ್ವರ — ಕ್ರಿ.ಶ. 968ರ ಶಾಸನ"],
        ["ಪ್ರತಿಷ್ಠಾಪಕ", "ಆಳುಪ ಅರಸ ಕುಂದವರ್ಮ"],
        ["ಅರ್ಚಕರು", "ಶಿವಳ್ಳಿ ಮಾಧ್ವ ಬ್ರಾಹ್ಮಣರು"],
        ["ನೀರು", "ಗೋಮುಖ ಚಿಲುಮೆ ಮತ್ತು ಒಂಬತ್ತು ಕೊಳಗಳು"],
      ],
      quote:
        "ಕಂಚಿನ ಮೂರ್ತಿಯ ಶಾಸನ ಹೇಳುತ್ತದೆ: ಆಳುಪ ಅರಸನೊಬ್ಬ ಕದರಿಕಾ ವಿಹಾರದಲ್ಲಿ ಲೋಕೇಶ್ವರನನ್ನು ಪ್ರತಿಷ್ಠಾಪಿಸಿದನು. ಅದೇ ಕಟ್ಟಡ ಈಗ ಮಂಜುನಾಥನದು. ಎರಡೂ ನಿಜ — ಒಂದರ ನಂತರ ಒಂದು.",
      sections: [
        {
          id: "history",
          eyebrow: "ಶಾಸನಗಳು ಹೇಳುವುದು",
          title: "ವಿಹಾರದಿಂದ ದೇವಾಲಯಕ್ಕೆ",
          blocks: [
            {
              kind: "para",
              text: "ಕದ್ರಿ ಗುಡ್ಡದ ಮೇಲಿನ ಈ ದೇವಾಲಯ ಹತ್ತನೆಯ ಅಥವಾ ಹನ್ನೊಂದನೆಯ ಶತಮಾನದ್ದೆಂದು ಹೇಳಲಾಗುತ್ತದೆ; ಹದಿನಾಲ್ಕನೆಯ ಶತಮಾನದಲ್ಲಿ ಪೂರ್ಣವಾಗಿ ಶಿಲೆಯಲ್ಲಿ ಪುನರ್ನಿರ್ಮಾಣವಾಯಿತು.",
            },
            {
              kind: "sub",
              title: "ಕಂಚಿನ ಲೋಕೇಶ್ವರ",
              paras: [
                "ಇಲ್ಲಿನ ಪಂಚಲೋಹದ ಲೋಕೇಶ್ವರ ಮೂರ್ತಿ ಸುಮಾರು ಐದು ಅಡಿ ಎತ್ತರವಿದ್ದು, ದಕ್ಷಿಣ ಭಾರತದ ದೇವಾಲಯಗಳಲ್ಲಿನ ಅತ್ಯಂತ ಹಳೆಯ ಕಂಚಿನ ಮೂರ್ತಿ ಎನ್ನಲಾಗುತ್ತದೆ. ಪೀಠದ ಮೇಲಿನ ಶಾಸನ ಕ್ರಿ.ಶ. 968 — ಕೆಲವರು 1068 ಎಂದು ಓದುತ್ತಾರೆ — ಎಂದು ಹೇಳಿ, ಆಳುಪ ವಂಶದ ಅರಸ ಕುಂದವರ್ಮನು ಕದರಿಕಾ ವಿಹಾರದಲ್ಲಿ ಲೋಕೇಶ್ವರನನ್ನು ಪ್ರತಿಷ್ಠಾಪಿಸಿದನೆಂದು ದಾಖಲಿಸುತ್ತದೆ; ನಗರವನ್ನು 'ಮಂಗಳಾಪುರ' ಎಂದು ಕರೆಯುತ್ತದೆ.",
                "ಮೂರ್ತಿಗೆ ಮೂರು ಮುಖಗಳು, ಆರು ಕೈಗಳು; ಎರಡರಲ್ಲಿ ಹೂವು; ಕಿರೀಟದಲ್ಲಿ ಧ್ಯಾನಿ ಬುದ್ಧನ ಚಿತ್ರಣ. ಅದೇ ಕುಶಲತೆಯ ಇನ್ನೆರಡು ಕಂಚಿನ ಮೂರ್ತಿಗಳಿವೆ: ಒಂದು ಅವಲೋಕಿತೇಶ್ವರ — ಇಲ್ಲಿ 'ನಾರಾಯಣ' — ಮತ್ತೊಂದು ಬುದ್ಧ — ಇಲ್ಲಿ 'ವೇದವ್ಯಾಸ'.",
                "ದೇವಾಲಯದ ಪಾಕಶಾಲೆಯಲ್ಲಿ ತುಳು, ಕನ್ನಡ ಮತ್ತು ಮಲಯಾಳ ಲಿಪಿಗಳ, ಹನ್ನೆರಡು-ಹದಿಮೂರನೆಯ ಶತಮಾನದ ಶಿಲಾಶಾಸನವಿದ್ದು, ಅರಸ ಮತ್ತು ಸ್ಥಳೀಯ ಒಡೆಯರು ನೀಡಿದ ಭೂಮಿಯನ್ನು ದಾಖಲಿಸುತ್ತದೆ. 1730ರ 'ಕದಳಿ ಮಂಜುನಾಥ ಮಹಾತ್ಮ್ಯಂ' ನಾಥ ಪಂಥದೊಡನೆ ಈ ಕ್ಷೇತ್ರದ ನಂಟನ್ನು ಹೇಳುತ್ತದೆ.",
              ],
            },
            {
              kind: "sub",
              title: "ಈ ಬದಲಾವಣೆಯನ್ನು ಓದುವ ಬಗೆ",
              paras: [
                "ಇಲ್ಲಿ ಸುಮಾರು ಹತ್ತನೆಯ ಶತಮಾನದವರೆಗೆ ಬೌದ್ಧ ಧರ್ಮ ಆಚರಣೆಯಲ್ಲಿತ್ತು; ಬೇರೆಡೆ ಅದು ಕ್ಷೀಣಿಸಿದ ಮೇಲೂ ಈ ಭಾಗದಲ್ಲಿ ಮಂಜುಶ್ರೀ ಮತ್ತು ಅವಲೋಕಿತೇಶ್ವರರ ಆರಾಧನೆ ಮುಂದುವರಿಯಿತು. ನಾಥ ಪಂಥ ಒಂದೆಡೆ ಬೌದ್ಧದತ್ತ, ಇನ್ನೊಂದೆಡೆ ತಾಂತ್ರಿಕ ಶೈವದತ್ತ ವಾಲಿತ್ತು; ಹಲವು ಬೌದ್ಧ ಕೇಂದ್ರಗಳು ಹಿಂದೂ ಪರಂಪರೆಗೆ ವರ್ಗಾವಣೆಯಾದವು.",
                "ಎಂ. ಗೋವಿಂದ ಪೈ ಅವರು 'ಕದ್ರಿ' ಎಂಬ ಹೆಸರನ್ನು ವಜ್ರಯಾನ ಮಠವಾದ 'ಕದ್ರಿ ವಿಹಾರ'ದಿಂದ ಬಂದದ್ದೆಂದು ಓದಿ, ಇದು ಮಂಜುಶ್ರೀ ಆರಾಧನೆಯ ಕೇಂದ್ರವಾಗಿತ್ತೆಂದು ತೀರ್ಮಾನಿಸಿದರು; ಮುಂದೆ ಆ ಬೋಧಿಸತ್ವನೇ ಮಂಜುನಾಥನಾಗಿ ಶಿವನೊಡನೆ ಗುರುತಿಸಲ್ಪಟ್ಟನು. ಅವಲೋಕಿತೇಶ್ವರ ಮೂರ್ತಿಯ ಬುಡದಲ್ಲಿರುವ ಕುಂದವರ್ಮನ ಶಾಸನ ಅವನನ್ನು ಶಿವಭಕ್ತನೆಂದು ಹೇಳುತ್ತದೆ — ಈ ದೇವಾಲಯ ಸಂಪೂರ್ಣ ಶೈವವಾಗುವ ಮೊದಲು ಶತಮಾನಗಳ ಕಾಲ ಲಿಂಗ ಮತ್ತು ಬೋಧಿಸತ್ವ ಇಲ್ಲಿ ಜೊತೆಯಾಗಿ ಪೂಜೆಗೊಂಡರು.",
              ],
            },
          ],
        },
        {
          id: "legend",
          eyebrow: "ಇನ್ನೊಂದು ಕಥೆ",
          title: "ಪರಶುರಾಮ ಮತ್ತು ಮಂಜುನಾಥ",
          blocks: [
            {
              kind: "para",
              text: "ಪರಂಪರೆ ಬೇರೆಯದೇ ಕಥೆ ಹೇಳುತ್ತದೆ. ಸಹ್ಯಾದ್ರಿಯಲ್ಲಿ ನೆಲೆಸಿದ್ದ ಪರಶುರಾಮನು ಗೆದ್ದ ಭೂಮಿಯನ್ನು ದಾನ ಮಾಡಿ, ತಪಸ್ಸಿಗೆ ತನ್ನದೇ ಸ್ಥಳವನ್ನು ಶಿವನಲ್ಲಿ ಬೇಡಿದನು. ಕದಳಿ ಕ್ಷೇತ್ರದಲ್ಲಿ ತಪಸ್ಸು ಮಾಡಿದರೆ ಲೋಕಕಲ್ಯಾಣಕ್ಕಾಗಿ ತಾನು ಮಂಜುನಾಥನಾಗಿ ಬರುವುದಾಗಿ ಶಿವನು ಅಭಯವಿತ್ತನು.",
            },
            {
              kind: "para",
              text: "ಪರಶುರಾಮನು ಕಡಲಿಗೆ ಕೊಡಲಿಯನ್ನು ಎಸೆದು ತಪಸ್ಸಿಗೆ ನೆಲವನ್ನು ಸೃಷ್ಟಿಸಿದನು; ಶಿವನು ಪಾರ್ವತಿಯೊಡನೆ ಮಂಜುನಾಥನಾಗಿ ಕಾಣಿಸಿಕೊಂಡು ಕದ್ರಿಯಲ್ಲಿ ನೆಲೆಸಿದನು. ಮಂಜುನಾಥನ ಆಜ್ಞೆಯಂತೆ ಸಪ್ತಕೋಟಿ ಮಂತ್ರಗಳು ಏಳು ತೀರ್ಥಗಳಾದವು.",
            },
          ],
        },
        {
          id: "water",
          eyebrow: "ಗುಡ್ಡ",
          title: "ಗೋಮುಖ ಮತ್ತು ಒಂಬತ್ತು ಕೊಳಗಳು",
          blocks: [
            {
              kind: "para",
              text: "ದೇವಾಲಯದ ಹಿಂದೆ, ಎತ್ತರದಲ್ಲಿ ನೈಸರ್ಗಿಕ ಚಿಲುಮೆಯೊಂದು ಗೋಮುಖದಿಂದ ಹರಿಯುತ್ತದೆ. ಈ ನೀರು ಕಾಶಿಯ ಭಾಗೀರಥಿಯಿಂದ ಬರುತ್ತದೆಂಬ ನಂಬಿಕೆ; ಅದಕ್ಕೇ ಕಾಶೀ ಭಾಗೀರಥಿ ತೀರ್ಥ ಎಂಬ ಹೆಸರು. ಕೆಳಗಿನ ಬೇರೆ ಬೇರೆ ಗಾತ್ರದ ಒಂಬತ್ತು ಕೊಳಗಳಿಗೆ ಈ ನೀರು ಹರಿಯುತ್ತದೆ; ಭಕ್ತರು ಒಳಹೋಗುವ ಮೊದಲು ಅಲ್ಲಿ ಸ್ನಾನ ಮಾಡುತ್ತಾರೆ.",
            },
            {
              kind: "para",
              text: "ದೇವಾಲಯದ ಎದುರು ಎತ್ತರದ ದೀಪಸ್ತಂಭವಿದೆ; ಕಾರ್ತಿಕ ಮಾಸದಲ್ಲಿ ಇಲ್ಲಿ ದೀಪೋತ್ಸವ ನಡೆಯುತ್ತದೆ. ಮಚ್ಚೇಂದ್ರನಾಥ, ಗೋರಕನಾಥ, ಶೃಂಗಿನಾಥ, ಲೋಕೇಶ್ವರ, ಮಂಜುಶ್ರೀ ಮತ್ತು ಬುದ್ಧರ ಮೂರ್ತಿಗಳು ದೇವಾಲಯದಲ್ಲಿವೆ.",
            },
          ],
        },
        {
          id: "jatra",
          eyebrow: "ವರ್ಷದ ಜಾತ್ರೆ",
          title: "ಮಕರ ಸಂಕ್ರಾಂತಿಯಿಂದ ಜಾತ್ರಾ ಮಹೋತ್ಸವ",
          blocks: [
            {
              kind: "para",
              text: "ಜನವರಿಯ ಮಕರ ಸಂಕ್ರಾಂತಿಯಿಂದ ಒಂಬತ್ತು ದಿನಗಳ ವಾರ್ಷಿಕ ಜಾತ್ರೆ ಆರಂಭವಾಗುತ್ತದೆ. ಮಲರಾಯ ದೈವದ ಭಂಡಾರದ ಮೆರವಣಿಗೆ, ಬೆಳಗಿನ ತೀರ್ಥಸ್ನಾನ, ಧ್ವಜಾರೋಹಣ, ಕಂಚಿನ ಸ್ತಂಭದ ದೀಪ ಮತ್ತು ಬಲಿ ಉತ್ಸವದೊಂದಿಗೆ ಅದು ತೆರೆದುಕೊಳ್ಳುತ್ತದೆ.",
            },
            {
              kind: "rows",
              rows: [
                { when: "ನಾಲ್ಕು ದಿನ", name: "ಸವಾರಿ ಬಲಿ", text: "ಮಂಜುನಾಥನು ನಾಲ್ಕು ಕಟ್ಟೆಗಳಿಗೆ ಸರದಿಯಂತೆ ಭೇಟಿ — ಬಿಕರ್ನಕಟ್ಟೆ, ಮಲ್ಲಿಕಟ್ಟೆ, ಮುಂಡನಕಟ್ಟೆ ಮತ್ತು ಕೊಂಚಾಡಿ." },
                { when: "ಏಳನೇ ದಿನ", name: "ದೀಪೋತ್ಸವ", text: "ಏಳನೆಯ ದೀಪೋತ್ಸವ; ನಂತರ ಮಹಾ ಅನ್ನಸಂತರ್ಪಣೆ." },
                { when: "ಎಂಟನೇ ದಿನ", name: "ಮಹಾ ರಥೋತ್ಸವ", text: "ಮಹಾರಥ, ಆನಂತರ ಬೆಳ್ಳಿ ರಥೋತ್ಸವ." },
                { when: "ನಂತರ", name: "ಅವಭೃತ ಸ್ನಾನ", text: "ತುಲಾಭಾರ ಸೇವೆ, ಚಂದ್ರಮಂಡಲೋತ್ಸವ ಮತ್ತು ಧ್ವಜಾರೋಹಣದೊಂದಿಗೆ." },
                { when: "ಕೊನೆಗೆ", name: "ಮಲರಾಯ ನೇಮೋತ್ಸವ", text: "ಭಂಡಾರ ಕದ್ರಿ ಗುಡ್ಡಕ್ಕೆ ಸಾಗಿ ದೈವಗಳ ನೇಮೋತ್ಸವ; ಬಳಿಕ ಬಂದ ಮನೆಗೇ ಮರಳುತ್ತದೆ." },
              ],
            },
          ],
        },
      ],
    },
    hi: {
      tagline: "उस पहाड़ी पर शिव मंदिर जो कभी बौद्ध विहार थी; लिंग की कीर्ति से भी पुरानी कांस्य लोकेश्वर प्रतिमा।",
      place: "कद्रि · मंगलूरु · दक्षिण कन्नड़",
      facts: [
        ["देवता", "शिव — मंजुनाथ"],
        ["निर्माण", "10–11वीं शताब्दी; 14वीं में पूर्ण पाषाण"],
        ["कांस्य प्रतिमा", "लोकेश्वर — 968 ई. का अभिलेख"],
        ["प्रतिष्ठाता", "आलुप राजा कुंदवर्म"],
        ["पुरोहित", "शिवल्लि माध्व ब्राह्मण"],
        ["जल", "गोमुख स्रोत और नौ कुंड"],
      ],
      quote:
        "कांस्य प्रतिमा का अभिलेख कहता है कि एक आलुप राजा ने कदरिका विहार में लोकेश्वर की प्रतिष्ठा की। वही भवन अब मंजुनाथ का है। दोनों सत्य हैं — एक के बाद एक।",
      sections: [
        {
          id: "history",
          eyebrow: "पत्थर क्या कहते हैं",
          title: "विहार से मंदिर तक",
          blocks: [
            {
              kind: "para",
              text: "कद्रि पहाड़ी पर स्थित यह मंदिर दसवीं या ग्यारहवीं शताब्दी का माना जाता है; चौदहवीं शताब्दी में इसे पूरी तरह पत्थर में बनाया गया।",
            },
            {
              kind: "sub",
              title: "कांस्य लोकेश्वर",
              paras: [
                "यहाँ की पंचलोह लोकेश्वर प्रतिमा लगभग पाँच फुट ऊँची है और दक्षिण भारतीय मंदिरों की सबसे पुरानी कांस्य प्रतिमा कही जाती है। पीठ पर का अभिलेख 968 ई. का है — कुछ इसे 1068 पढ़ते हैं — और कहता है कि आलुप वंश के राजा कुंदवर्म ने कदरिका विहार में लोकेश्वर की प्रतिष्ठा की; नगर को वह 'मंगलापुर' कहता है।",
                "प्रतिमा के तीन मुख और छह भुजाएँ हैं, दो में पुष्प हैं, और मुकुट पर ध्यानी बुद्ध अंकित हैं। उसी शिल्प की दो और कांस्य प्रतिमाएँ यहाँ हैं: एक अवलोकितेश्वर — यहाँ 'नारायण' — और दूसरी बुद्ध — यहाँ 'वेदव्यास'।",
                "मंदिर की रसोई में तुलु, कन्नड़ और मलयालम लिपियों का बारहवीं-तेरहवीं शताब्दी का शिलालेख है, जो राजा और स्थानीय भूस्वामियों द्वारा दी गई भूमि दर्ज करता है। 1730 का ग्रंथ 'कदलि मंजुनाथ माहात्म्यम्' नाथ संप्रदाय से इस क्षेत्र का संबंध बताता है।",
              ],
            },
            {
              kind: "sub",
              title: "इस परिवर्तन को कैसे पढ़ा गया",
              paras: [
                "यहाँ लगभग दसवीं शताब्दी तक बौद्ध धर्म का आचरण था; अन्यत्र उसके क्षीण होने के बाद भी इस क्षेत्र में मंजुश्री और अवलोकितेश्वर की उपासना चलती रही। नाथ संप्रदाय एक ओर बौद्ध और दूसरी ओर तांत्रिक शैव परंपरा की ओर झुका था, और अनेक बौद्ध केंद्र हिंदू परंपरा में आ गए।",
                "एम. गोविंद पै ने 'कद्रि' नाम को वज्रयान मठ 'कद्रि विहार' से जोड़ा और इसे मंजुश्री-उपासना का केंद्र माना; आगे चलकर वही बोधिसत्व मंजुनाथ के रूप में शिव से जोड़े गए। अवलोकितेश्वर प्रतिमा के आधार पर कुंदवर्म का अभिलेख उन्हें शिवभक्त कहता है — मंदिर के पूर्णतः शैव होने से पहले सदियों तक लिंग और बोधिसत्व यहाँ साथ पूजे जाते रहे।",
              ],
            },
          ],
        },
        {
          id: "legend",
          eyebrow: "दूसरी कथा",
          title: "परशुराम और मंजुनाथ",
          blocks: [
            {
              kind: "para",
              text: "परंपरा इसे भिन्न रूप में कहती है। सह्याद्रि में रहते परशुराम ने जीती हुई भूमि दान कर दी और तपस्या के लिए अपनी जगह शिव से माँगी। शिव ने वचन दिया कि यदि वे कदलि क्षेत्र में तप करें तो लोककल्याण के लिए वे स्वयं मंजुनाथ रूप में वहाँ आएँगे।",
            },
            {
              kind: "para",
              text: "परशुराम ने समुद्र में कुल्हाड़ी फेंककर तप के लिए भूमि बनाई; शिव पार्वती सहित मंजुनाथ रूप में प्रकट होकर कद्रि में स्थित हुए। मंजुनाथ के वचन से सप्तकोटि मंत्र सात तीर्थ बन गए।",
            },
          ],
        },
        {
          id: "water",
          eyebrow: "पहाड़ी",
          title: "गोमुख और नौ कुंड",
          blocks: [
            {
              kind: "para",
              text: "मंदिर के पीछे, ऊँचाई पर एक प्राकृतिक स्रोत गोमुख से बहता है। माना जाता है कि यह जल काशी की भागीरथी से आता है, इसलिए इसे काशी भागीरथी तीर्थ कहते हैं। नीचे के अलग-अलग आकार के नौ कुंडों में यही जल जाता है; दर्शन से पहले लोग वहीं स्नान करते हैं।",
            },
            {
              kind: "para",
              text: "मंदिर के सामने ऊँचा दीपस्तंभ है; कार्तिक मास में यहाँ दीपोत्सव होता है। मच्छिंद्रनाथ, गोरखनाथ, शृंगिनाथ, लोकेश्वर, मंजुश्री और बुद्ध की मूर्तियाँ मंदिर में हैं।",
            },
          ],
        },
        {
          id: "jatra",
          eyebrow: "वर्ष की जात्रा",
          title: "मकर संक्रांति से जात्रा महोत्सव",
          blocks: [
            {
              kind: "para",
              text: "जनवरी की मकर संक्रांति से नौ दिन का वार्षिक उत्सव आरंभ होता है। मलराय दैव के भंडार की शोभायात्रा, प्रातः तीर्थ स्नान, ध्वजारोहण, कांचि स्तंभ का दीप और बलि उत्सव से इसकी शुरुआत होती है।",
            },
            {
              kind: "rows",
              rows: [
                { when: "चार दिन", name: "सवारी बलि", text: "मंजुनाथ क्रमशः चार कट्टों में जाते हैं — बिकर्नकट्टे, मल्लिकट्टे, मुंडनकट्टे और कोंचाडि।" },
                { when: "सातवाँ दिन", name: "दीपोत्सव", text: "सातवाँ दीपोत्सव; उसके बाद महा अन्नसंतर्पण।" },
                { when: "आठवाँ दिन", name: "महा रथोत्सव", text: "महारथ, और फिर रजत रथोत्सव।" },
                { when: "उसके बाद", name: "अवभृत स्नान", text: "तुलाभार सेवा, चंद्रमंडलोत्सव और ध्वजारोहण के साथ।" },
                { when: "अंत में", name: "मलराय नेमोत्सव", text: "भंडार कद्रि पहाड़ी पर जाकर दैवों का नेमोत्सव; फिर जिस घर से आया था वहीं लौटता है।" },
              ],
            },
          ],
        },
      ],
    },
  },
});
