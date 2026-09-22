import { registerTemplePage } from "../temple-pages";

// ─────────────────────────────────────────────────────────
//  Kukke Sri Subramanya.
//
//  Written from the temple's Wikipedia article. Two histories in it
//  are contested ground and are given as the article gives them —
//  the administrators before the state took over, and the Sthanika
//  Brahmins who were the priests until the early 1900s.
// ─────────────────────────────────────────────────────────

registerTemplePage({
  slug: "kukke-subramanya",
  region: "tulunadu",
  order: 4,
  name: {
    en: "Kukke Sri Subramanya Temple",
    kn: "ಕುಕ್ಕೆ ಶ್ರೀ ಸುಬ್ರಹ್ಮಣ್ಯ ದೇವಸ್ಥಾನ",
    hi: "कुक्के श्री सुब्रह्मण्य मंदिर",
  },
  nameLocal: "ಕುಕ್ಕೆ ಶ್ರೀ ಸುಬ್ರಹ್ಮಣ್ಯ ದೇವಸ್ಥಾನ",
  nameLocalLang: "kn",
  hero: {
    src: "/images/temples/kukke-subramanya/hero.jpg",
    width: 1200,
    height: 675,
    credit:
      "Kukke Subramanya Temple — photo by Bharathesha Alasandemajalu, CC BY-SA 4.0, via Wikimedia Commons, cropped",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Kukke_Subramanya_Temple_5.jpg",
    alt: {
      en: "The Kukke Subramanya temple with the Western Ghats behind it.",
      kn: "ಹಿಂದೆ ಪಶ್ಚಿಮ ಘಟ್ಟಗಳಿರುವ ಕುಕ್ಕೆ ಸುಬ್ರಹ್ಮಣ್ಯ ದೇವಾಲಯ.",
      hi: "पीछे पश्चिमी घाट के साथ कुक्के सुब्रह्मण्य मंदिर।",
    },
  },
  gallery: [
    {
      src: "/images/temples/kukke-subramanya/gopura.jpg",
      width: 600,
      height: 800,
      credit: "Kukke Subramanya Temple — photo by A.Murali, CC0, via Wikimedia Commons, cropped",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Kukke_Subramanya_Temple,_Karnataka_01.jpg",
      alt: {
        en: "The white gopura over the temple entrance.",
        kn: "ದೇವಾಲಯದ ಪ್ರವೇಶದ ಮೇಲಿನ ಬಿಳಿಯ ಗೋಪುರ.",
        hi: "मंदिर के प्रवेश पर श्वेत गोपुर।",
      },
      caption: {
        en: "The gopura at the entrance, on the road up from the Kumaradhara.",
        kn: "ಕುಮಾರಧಾರೆಯಿಂದ ಮೇಲೇರುವ ದಾರಿಯಲ್ಲಿನ ಪ್ರವೇಶ ಗೋಪುರ.",
        hi: "कुमारधारा से ऊपर आते मार्ग पर प्रवेश गोपुर।",
      },
    },
  ],
  sources: [
    { title: "Kukke Subramanya Temple — Wikipedia", url: "https://en.wikipedia.org/wiki/Kukke_Subramanya_Temple" },
    { title: "Kartikeya — Wikipedia", url: "https://en.wikipedia.org/wiki/Kartikeya" },
  ],
  content: {
    en: {
      tagline: "Where Vasuki took refuge, and where people come to be freed of the serpent's affliction.",
      place: "Subramanya · Kadaba · Dakshina Kannada",
      facts: [
        ["Deity", "Kartikeya, as Subramanya, lord of serpents"],
        ["River", "Kumaradhara"],
        ["Priests", "Shivalli Madhva Brahmins"],
        ["Worship follows", "Madhvacharya's Tantrasara Sangraha"],
        ["Known for", "Ashlesha Bali and Sarpa Dosha Parihara"],
        ["Held to be", "One of the seven sites of Parashurama"],
      ],
      quote:
        "The serpents came here to be safe. People come here for the same reason — to have a serpent's curse lifted, at the feet of the god the serpents hid behind.",
      sections: [
        {
          id: "story",
          eyebrow: "Why here",
          title: "Vasuki under Subramanya",
          blocks: [
            {
              kind: "para",
              text: "The temple stands on the bank of the Kumaradhara, in the village of Subramanya in Kadaba taluk. Kartikeya is worshipped here as Subramanya, and in this place he is the lord of all serpents.",
            },
            {
              kind: "para",
              text: "The epics say the divine serpent Vasuki, hunted by Garuda, took refuge under Subramanya here, and the other serpents with him. The temple is also counted among the seven sacred sites established by Parashurama.",
            },
            {
              kind: "sub",
              title: "Kumara Parvatha",
              paras: [
                "The hill behind the temple carries its own story: Kumaraswamy and his brother Ganesha are held to have defeated the demon rulers Tharaka and Shura Padmasura there. After the victory Kumaraswamy married Devasena, the daughter of Indra, and the gods who came for the wedding left their blessing on the place.",
              ],
            },
          ],
        },
        {
          id: "rituals",
          eyebrow: "What people come for",
          title: "Ashlesha Bali and the serpent's affliction",
          blocks: [
            {
              kind: "para",
              text: "The priests are Shivalli Madhva Brahmins, and the daily rituals follow Madhvacharya's Tantrasara Sangraha. Two rites bring most of the pilgrims.",
            },
            {
              kind: "list",
              items: [
                { label: "Ashlesha Bali", text: "A puja performed on the Ashlesha nakshatra, sought for protection from black snakes." },
                { label: "Sarpa Dosha Parihara", text: "Performed to lift the affliction held to follow harm done to serpents." },
              ],
            },
          ],
        },
        {
          id: "keepers",
          eyebrow: "Who kept it",
          title: "The priests and the administrators",
          blocks: [
            {
              kind: "sub",
              title: "The Sthanika Brahmins",
              paras: [
                "Kukke was the chief centre of the Sthanika Brahmins, the oldest of the Tulu Brahmin groups, who were its priests until the early 1900s. Their trusteeship was revoked under British rule after the community took part in the independence campaigns; their leader Sri Padma Theertha was killed in 1845 and many were hanged, and the community fell into poverty. The priesthood passed to the Shivalli Brahmins.",
                "The Shri Subramanya Sabha, founded in 1908, restored the community's standing, and Sthanika Brahmins still take part in the temple's rituals.",
              ],
            },
            {
              kind: "sub",
              title: "The Koojugodu Kattemane family",
              paras: [
                "The chief administrators — the Sankesha Adhikaris — were the Koojugodu Kattemane family, a Gowda lineage tracing its descent to Thimma Nayaka of Ikkeri. They held the office from the Ikkeri Nayaka period, kept ties with the Haleri rulers of Kodagu and with the Sringeri Sharada Peetha, and built the Chandramouleshwara temple and a Sringeri mutt inside the temple grounds.",
                "Administration later passed to the Karnataka endowment department, and the temple is run by the state today.",
              ],
            },
          ],
        },
      ],
    },
    kn: {
      tagline: "ವಾಸುಕಿ ಆಶ್ರಯ ಪಡೆದ ಸ್ಥಳ; ಸರ್ಪದೋಷ ಪರಿಹಾರಕ್ಕೆ ಜನ ಬರುವ ಸ್ಥಳ.",
      place: "ಸುಬ್ರಹ್ಮಣ್ಯ · ಕಡಬ · ದಕ್ಷಿಣ ಕನ್ನಡ",
      facts: [
        ["ದೇವರು", "ಕಾರ್ತಿಕೇಯ — ಸುಬ್ರಹ್ಮಣ್ಯ, ಸರ್ಪಗಳ ಒಡೆಯ"],
        ["ನದಿ", "ಕುಮಾರಧಾರಾ"],
        ["ಅರ್ಚಕರು", "ಶಿವಳ್ಳಿ ಮಾಧ್ವ ಬ್ರಾಹ್ಮಣರು"],
        ["ಪೂಜಾ ವಿಧಾನ", "ಮಧ್ವಾಚಾರ್ಯರ ತಂತ್ರಸಾರ ಸಂಗ್ರಹ"],
        ["ಪ್ರಸಿದ್ಧಿ", "ಆಶ್ಲೇಷ ಬಲಿ ಮತ್ತು ಸರ್ಪದೋಷ ಪರಿಹಾರ"],
        ["ಪರಂಪರೆ", "ಪರಶುರಾಮ ಸ್ಥಾಪಿಸಿದ ಏಳು ಕ್ಷೇತ್ರಗಳಲ್ಲಿ ಒಂದು"],
      ],
      quote:
        "ಸರ್ಪಗಳು ರಕ್ಷಣೆಗಾಗಿ ಇಲ್ಲಿಗೆ ಬಂದವು. ಜನರೂ ಅದೇ ಕಾರಣಕ್ಕೆ ಬರುತ್ತಾರೆ — ಸರ್ಪಗಳು ಅಡಗಿದ ದೇವರ ಪಾದದಲ್ಲಿ ಸರ್ಪದೋಷ ಕಳೆದುಕೊಳ್ಳಲು.",
      sections: [
        {
          id: "story",
          eyebrow: "ಏಕೆ ಇಲ್ಲಿ",
          title: "ಸುಬ್ರಹ್ಮಣ್ಯನ ಆಶ್ರಯದಲ್ಲಿ ವಾಸುಕಿ",
          blocks: [
            {
              kind: "para",
              text: "ಕಡಬ ತಾಲೂಕಿನ ಸುಬ್ರಹ್ಮಣ್ಯ ಗ್ರಾಮದಲ್ಲಿ, ಕುಮಾರಧಾರಾ ನದಿಯ ದಂಡೆಯಲ್ಲಿ ಈ ದೇವಾಲಯವಿದೆ. ಇಲ್ಲಿ ಕಾರ್ತಿಕೇಯನನ್ನು ಸುಬ್ರಹ್ಮಣ್ಯನೆಂದು ಪೂಜಿಸಲಾಗುತ್ತದೆ; ಈ ಕ್ಷೇತ್ರದಲ್ಲಿ ಅವನು ಸರ್ಪಗಳೆಲ್ಲರ ಒಡೆಯ.",
            },
            {
              kind: "para",
              text: "ಗರುಡನಿಂದ ಬೆದರಿದ ದಿವ್ಯ ಸರ್ಪ ವಾಸುಕಿ ಇಲ್ಲಿ ಸುಬ್ರಹ್ಮಣ್ಯನ ಆಶ್ರಯ ಪಡೆದನು, ಅವನೊಡನೆ ಉಳಿದ ಸರ್ಪಗಳೂ ಎಂದು ಪುರಾಣಗಳು ಹೇಳುತ್ತವೆ. ಪರಶುರಾಮ ಸ್ಥಾಪಿಸಿದ ಏಳು ಕ್ಷೇತ್ರಗಳಲ್ಲಿ ಇದೂ ಒಂದೆಂದು ಎಣಿಕೆ.",
            },
            {
              kind: "sub",
              title: "ಕುಮಾರ ಪರ್ವತ",
              paras: [
                "ದೇವಾಲಯದ ಹಿಂದಿನ ಬೆಟ್ಟಕ್ಕೂ ತನ್ನದೇ ಕಥೆ: ಕುಮಾರಸ್ವಾಮಿ ಮತ್ತು ಅವನ ಸೋದರ ಗಣೇಶ ಅಲ್ಲಿ ತಾರಕ ಮತ್ತು ಶೂರಪದ್ಮಾಸುರರನ್ನು ಸೋಲಿಸಿದರೆಂದು ನಂಬಿಕೆ. ವಿಜಯದ ನಂತರ ಇಂದ್ರನ ಮಗಳಾದ ದೇವಸೇನೆಯನ್ನು ಕುಮಾರಸ್ವಾಮಿ ವಿವಾಹವಾದನು; ಮದುವೆಗೆ ಬಂದ ದೇವತೆಗಳು ಈ ನೆಲಕ್ಕೆ ಆಶೀರ್ವಾದವಿತ್ತರು.",
              ],
            },
          ],
        },
        {
          id: "rituals",
          eyebrow: "ಸೇವೆಗಳು",
          title: "ಆಶ್ಲೇಷ ಬಲಿ ಮತ್ತು ಸರ್ಪದೋಷ",
          blocks: [
            {
              kind: "para",
              text: "ಅರ್ಚಕರು ಶಿವಳ್ಳಿ ಮಾಧ್ವ ಬ್ರಾಹ್ಮಣರು; ನಿತ್ಯಪೂಜೆಗಳು ಮಧ್ವಾಚಾರ್ಯರ ತಂತ್ರಸಾರ ಸಂಗ್ರಹದ ಪ್ರಕಾರ ನಡೆಯುತ್ತವೆ. ಹೆಚ್ಚಿನ ಯಾತ್ರಿಕರನ್ನು ಕರೆತರುವುದು ಎರಡು ಸೇವೆಗಳು.",
            },
            {
              kind: "list",
              items: [
                { label: "ಆಶ್ಲೇಷ ಬಲಿ", text: "ಆಶ್ಲೇಷಾ ನಕ್ಷತ್ರದಂದು ನಡೆಯುವ ಪೂಜೆ; ಕಪ್ಪು ಸರ್ಪಗಳಿಂದ ರಕ್ಷಣೆಗಾಗಿ." },
                { label: "ಸರ್ಪದೋಷ ಪರಿಹಾರ", text: "ಸರ್ಪಗಳಿಗೆ ಮಾಡಿದ ಹಾನಿಯಿಂದ ಬರುವ ದೋಷದ ನಿವಾರಣೆಗಾಗಿ." },
              ],
            },
          ],
        },
        {
          id: "keepers",
          eyebrow: "ಪರಂಪರೆ",
          title: "ಅರ್ಚಕರು ಮತ್ತು ಆಡಳಿತಗಾರರು",
          blocks: [
            {
              kind: "sub",
              title: "ಸ್ಥಾನಿಕ ಬ್ರಾಹ್ಮಣರು",
              paras: [
                "ತುಳು ಬ್ರಾಹ್ಮಣ ಗುಂಪುಗಳಲ್ಲಿ ಅತ್ಯಂತ ಹಳೆಯದಾದ ಸ್ಥಾನಿಕ ಬ್ರಾಹ್ಮಣರ ಪ್ರಮುಖ ಕೇಂದ್ರ ಕುಕ್ಕೆ; 1900ರ ದಶಕದ ಆರಂಭದವರೆಗೆ ಅವರೇ ಇಲ್ಲಿನ ಅರ್ಚಕರು. ಸ್ವಾತಂತ್ರ್ಯ ಚಳವಳಿಗಳಲ್ಲಿ ಭಾಗವಹಿಸಿದ ಕಾರಣ ಬ್ರಿಟಿಷ್ ಆಡಳಿತದಲ್ಲಿ ಅವರ ಧರ್ಮದರ್ಶಿತ್ವ ರದ್ದಾಯಿತು; 1845ರಲ್ಲಿ ಅವರ ನಾಯಕ ಶ್ರೀ ಪದ್ಮತೀರ್ಥರ ಹತ್ಯೆಯಾಯಿತು, ಹಲವರನ್ನು ಗಲ್ಲಿಗೇರಿಸಲಾಯಿತು, ಸಮುದಾಯ ಬಡತನಕ್ಕೆ ಇಳಿಯಿತು. ಅರ್ಚಕತ್ವ ಶಿವಳ್ಳಿ ಬ್ರಾಹ್ಮಣರಿಗೆ ವರ್ಗಾವಣೆಯಾಯಿತು.",
                "1908ರಲ್ಲಿ ಸ್ಥಾಪನೆಯಾದ ಶ್ರೀ ಸುಬ್ರಹ್ಮಣ್ಯ ಸಭಾ ಸಮುದಾಯವನ್ನು ಮತ್ತೆ ಮೇಲೆತ್ತಿತು; ಇಂದಿಗೂ ಸ್ಥಾನಿಕ ಬ್ರಾಹ್ಮಣರು ದೇವಾಲಯದ ಆಚರಣೆಗಳಲ್ಲಿ ಪಾಲ್ಗೊಳ್ಳುತ್ತಾರೆ.",
              ],
            },
            {
              kind: "sub",
              title: "ಕೂಜುಗೋಡು ಕಟ್ಟೆಮನೆ ಕುಟುಂಬ",
              paras: [
                "ಇಕ್ಕೇರಿಯ ತಿಮ್ಮ ನಾಯಕರ ವಂಶಸ್ಥರೆಂದು ಹೇಳಿಕೊಳ್ಳುವ ಕೂಜುಗೋಡು ಕಟ್ಟೆಮನೆ ಗೌಡ ಕುಟುಂಬ ಸಂಕೇಶ ಅಧಿಕಾರಿಗಳಾಗಿ — ಮುಖ್ಯ ಆಡಳಿತಗಾರರಾಗಿ — ಇದ್ದರು. ಇಕ್ಕೇರಿ ನಾಯಕರ ಕಾಲದಿಂದ ಈ ಹೊಣೆ ಹೊತ್ತ ಅವರು ಕೊಡಗಿನ ಹಾಲೇರಿ ಅರಸರೊಡನೆ ಮತ್ತು ಶೃಂಗೇರಿ ಶಾರದಾ ಪೀಠದೊಡನೆ ಸಂಬಂಧ ಇಟ್ಟುಕೊಂಡಿದ್ದರು; ದೇವಾಲಯದ ಆವರಣದಲ್ಲಿ ಚಂದ್ರಮೌಳೇಶ್ವರ ದೇವಾಲಯ ಮತ್ತು ಶೃಂಗೇರಿ ಮಠವನ್ನು ಸ್ಥಾಪಿಸಿದರು.",
                "ಮುಂದೆ ಆಡಳಿತ ಕರ್ನಾಟಕದ ಮುಜರಾಯಿ ಇಲಾಖೆಗೆ ವರ್ಗಾವಣೆಯಾಯಿತು; ಇಂದು ದೇವಾಲಯ ಸರ್ಕಾರದ ನಿರ್ವಹಣೆಯಲ್ಲಿದೆ.",
              ],
            },
          ],
        },
      ],
    },
    hi: {
      tagline: "जहाँ वासुकि ने शरण ली, और जहाँ लोग सर्पदोष से मुक्ति के लिए आते हैं।",
      place: "सुब्रह्मण्य · कडब · दक्षिण कन्नड़",
      facts: [
        ["देवता", "कार्तिकेय — सुब्रह्मण्य, सर्पों के स्वामी"],
        ["नदी", "कुमारधारा"],
        ["पुरोहित", "शिवल्लि माध्व ब्राह्मण"],
        ["पूजा विधि", "मध्वाचार्य का तंत्रसार संग्रह"],
        ["प्रसिद्धि", "आश्लेष बलि और सर्पदोष परिहार"],
        ["परंपरा", "परशुराम के सात क्षेत्रों में से एक"],
      ],
      quote:
        "सर्प यहाँ सुरक्षा के लिए आए। लोग भी उसी कारण आते हैं — जिस देव के पीछे सर्प छिपे, उन्हीं के चरणों में सर्पदोष उतारने।",
      sections: [
        {
          id: "story",
          eyebrow: "यहीं क्यों",
          title: "सुब्रह्मण्य की शरण में वासुकि",
          blocks: [
            {
              kind: "para",
              text: "यह मंदिर कडब तालुक के सुब्रह्मण्य गाँव में, कुमारधारा नदी के तट पर है। यहाँ कार्तिकेय की पूजा सुब्रह्मण्य के रूप में होती है, और इस क्षेत्र में वे समस्त सर्पों के स्वामी हैं।",
            },
            {
              kind: "para",
              text: "पुराण कहते हैं कि गरुड़ से भयभीत दिव्य सर्प वासुकि ने यहाँ सुब्रह्मण्य की शरण ली, और उनके साथ अन्य सर्पों ने भी। यह मंदिर परशुराम द्वारा स्थापित सात क्षेत्रों में भी गिना जाता है।",
            },
            {
              kind: "sub",
              title: "कुमार पर्वत",
              paras: [
                "मंदिर के पीछे की पहाड़ी की अपनी कथा है: कुमारस्वामी और उनके भाई गणेश ने वहाँ तारक और शूरपद्मासुर को पराजित किया, ऐसा माना जाता है। विजय के बाद कुमारस्वामी ने इंद्र की पुत्री देवसेना से विवाह किया, और विवाह में आए देवताओं ने इस भूमि को आशीर्वाद दिया।",
              ],
            },
          ],
        },
        {
          id: "rituals",
          eyebrow: "सेवाएँ",
          title: "आश्लेष बलि और सर्पदोष",
          blocks: [
            {
              kind: "para",
              text: "पुरोहित शिवल्लि माध्व ब्राह्मण हैं; नित्य पूजाएँ मध्वाचार्य के तंत्रसार संग्रह के अनुसार होती हैं। अधिकांश तीर्थयात्री दो अनुष्ठानों के लिए आते हैं।",
            },
            {
              kind: "list",
              items: [
                { label: "आश्लेष बलि", text: "आश्लेषा नक्षत्र पर की जाने वाली पूजा; काले सर्पों से रक्षा के लिए।" },
                { label: "सर्पदोष परिहार", text: "सर्पों को पहुँची हानि से उत्पन्न दोष के निवारण के लिए।" },
              ],
            },
          ],
        },
        {
          id: "keepers",
          eyebrow: "परंपरा",
          title: "पुरोहित और प्रबंधक",
          blocks: [
            {
              kind: "sub",
              title: "स्थानिक ब्राह्मण",
              paras: [
                "तुलु ब्राह्मण समूहों में सबसे पुराने स्थानिक ब्राह्मणों का प्रमुख केंद्र कुक्के था; 1900 के दशक के आरंभ तक वे ही यहाँ के पुरोहित थे। स्वतंत्रता आंदोलनों में भाग लेने के कारण ब्रिटिश शासन में उनका न्यास-अधिकार समाप्त कर दिया गया; 1845 में उनके नेता श्री पद्मतीर्थ की हत्या हुई, अनेक को फाँसी दी गई, और समुदाय दरिद्रता में चला गया। पुरोहिताई शिवल्लि ब्राह्मणों को मिली।",
                "1908 में स्थापित श्री सुब्रह्मण्य सभा ने समुदाय को फिर खड़ा किया; स्थानिक ब्राह्मण आज भी मंदिर के अनुष्ठानों में भाग लेते हैं।",
              ],
            },
            {
              kind: "sub",
              title: "कूजुगोडु कट्टेमने परिवार",
              paras: [
                "इक्केरी के तिम्म नायक के वंशज कहलाने वाला कूजुगोडु कट्टेमने गौड़ परिवार संकेश अधिकारी — मुख्य प्रबंधक — रहा। इक्केरी नायकों के समय से यह दायित्व सँभालते हुए उन्होंने कोडगु के हालेरी राजाओं और शृंगेरी शारदा पीठ से संबंध रखे, और मंदिर परिसर में चंद्रमौलेश्वर मंदिर तथा शृंगेरी मठ की स्थापना की।",
                "बाद में प्रबंधन कर्नाटक के मुजराई विभाग को चला गया; आज मंदिर राज्य के अधीन है।",
              ],
            },
          ],
        },
      ],
    },
  },
});
