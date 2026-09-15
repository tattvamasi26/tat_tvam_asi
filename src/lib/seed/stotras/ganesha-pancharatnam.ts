import { registerStotra } from "../stotras";

// ─────────────────────────────────────────────────────────
//  Gaṇeśa Pañcaratnam — five verses and a phalaśruti, ascribed to
//  Śaṅkara, in pañcacāmara (sixteen syllables a line, short and
//  long alternating).
//
//  Checked against Sanskrit Wikisource (गणेशपञ्चरत्नम्). That page
//  numbers the fifth verse ६ by mistake; the text is otherwise as
//  printed there, line for line.
// ─────────────────────────────────────────────────────────

registerStotra({
  slug: "ganesha-pancharatnam",
  textId: "t-stuti-ganesha",
  devata: "ganesha",
  group: "stotra",
  order: 7,
  category: "smriti",
  metre: "pañcacāmara",
  origin: { en: "Brihat Stotra Ratnakara", kn: "ಬೃಹತ್ ಸ್ತೋತ್ರ ರತ್ನಾಕರ", hi: "बृहत् स्तोत्र रत्नाकर" },
  composer: { en: "Adi Shankaracharya", kn: "ಆದಿ ಶಂಕರಾಚಾರ್ಯರು", hi: "आदि शंकराचार्य" },
  video: { id: "bgnEJM0C1Cg", title: "Mudakaratta Modakam, with lyrics", channel: "Rajshri Soul" },
  verses: [
    {
      id: "ganesha-pancharatnam-1",
      locator: "1",
      handle: { en: "Modaka in hand", kn: "ಕೈಯಲ್ಲಿ ಮೋದಕ", hi: "हाथ में मोदक" },
      sanskrit: [
        "मुदाकरात्तमोदकं सदा विमुक्तिसाधकं",
        "कलाधरावतंसकं विलासलोकरक्षकम् ।",
        "अनायकैकनायकं विनाशितेभदैत्यकं",
        "नताशुभाशुनाशकं नमामि तं विनायकम् ॥",
      ],
      iast: [
        "mudākarāttamodakaṃ sadā vimuktisādhakaṃ",
        "kalādharāvataṃsakaṃ vilāsalokarakṣakam |",
        "anāyakaikanāyakaṃ vināśitebhadaityakaṃ",
        "natāśubhāśunāśakaṃ namāmi taṃ vināyakam ||",
      ],
      keywords: [
        { term: "करात्तमोदकम्", iast: "karāttamodakam", gloss: { en: "holding a modaka in his hand", kn: "ಕೈಯಲ್ಲಿ ಮೋದಕ ಹಿಡಿದವನು", hi: "हाथ में मोदक लिए" } },
        { term: "कलाधरावतंसकम्", iast: "kalādharāvataṃsakam", gloss: { en: "wearing the crescent moon as an ornament", kn: "ಚಂದ್ರಕಲೆಯನ್ನು ಆಭರಣವಾಗಿ ಧರಿಸಿದವನು", hi: "चंद्रकला को आभूषण बनाए" } },
        { term: "अनायकैकनायकम्", iast: "anāyakaikanāyakam", gloss: { en: "sole leader of those who have none", kn: "ನಾಯಕರಿಲ್ಲದವರ ಏಕೈಕ ನಾಯಕ", hi: "अनाथों के एकमात्र नायक" } },
        { term: "विनाशितेभदैत्यकम्", iast: "vināśitebhadaityakam", gloss: { en: "who destroyed the elephant-demon", kn: "ಗಜಾಸುರನನ್ನು ಸಂಹರಿಸಿದವನು", hi: "गजासुर का नाश करने वाले" } },
      ],
      readings: {
        en: {
          translation:
            "Joyfully holding a modaka in his hand, ever the means to freedom; wearing the crescent moon as an ornament, guardian of the world that is his play; sole leader of those who have none, slayer of the elephant-demon, swift destroyer of the misfortune of all who bow — to that Vināyaka I bow.",
          explanation:
            "The five 'jewels' are set in pañcacāmara, sixteen syllables to a line alternating short and long — the metre of the Śiva Tāṇḍava — so the verse moves like a procession drum. Almost every word is a compound ending in -kam, and nothing is grammatically complete until the last two words: namāmi taṃ vināyakam, 'I bow to that Vināyaka'. Everything before them is description held in suspension.\n\nThe first image is domestic and the next is cosmic: a sweet in the hand and, in the same breath, 'always the means to liberation'. The verse insists they belong to the same god.",
        },
        kn: {
          translation:
            "ಸಂತೋಷದಿಂದ ಕೈಯಲ್ಲಿ ಮೋದಕ ಹಿಡಿದವನು, ಸದಾ ಮುಕ್ತಿಗೆ ಸಾಧನನಾದವನು; ಚಂದ್ರಕಲೆಯನ್ನು ಆಭರಣವಾಗಿ ಧರಿಸಿದವನು, ತನ್ನ ಲೀಲೆಯಾದ ಲೋಕದ ರಕ್ಷಕನು; ನಾಯಕರಿಲ್ಲದವರ ಏಕೈಕ ನಾಯಕ, ಗಜಾಸುರನನ್ನು ಸಂಹರಿಸಿದವನು, ನಮಿಸುವವರ ಅಶುಭವನ್ನು ಬೇಗನೆ ನಾಶಮಾಡುವವನು — ಆ ವಿನಾಯಕನಿಗೆ ನಮಿಸುತ್ತೇನೆ.",
          explanation:
            "ಈ ಐದು 'ರತ್ನ'ಗಳು ಪಂಚಚಾಮರ ಛಂದಸ್ಸಿನಲ್ಲಿವೆ — ಹ್ರಸ್ವ ದೀರ್ಘಗಳು ಪರ್ಯಾಯವಾಗಿ ಬರುವ ಹದಿನಾರು ಅಕ್ಷರಗಳ ಪಾದ, ಶಿವತಾಂಡವದ ಛಂದಸ್ಸು — ಹೀಗಾಗಿ ಶ್ಲೋಕ ಉತ್ಸವದ ನಗಾರಿಯಂತೆ ಸಾಗುತ್ತದೆ. ಬಹುತೇಕ ಪ್ರತಿ ಪದವೂ '-ಕಂ' ಎಂದು ಮುಗಿಯುವ ಸಮಾಸ; ಕೊನೆಯ ಎರಡು ಪದಗಳು — ನಮಾಮಿ ತಂ ವಿನಾಯಕಂ, 'ಆ ವಿನಾಯಕನಿಗೆ ನಮಿಸುತ್ತೇನೆ' — ಬರುವವರೆಗೆ ವಾಕ್ಯ ಪೂರ್ಣವಾಗುವುದಿಲ್ಲ. ಅದರ ಮೊದಲಿನದೆಲ್ಲವೂ ತೂಗಿನಿಂತ ವರ್ಣನೆ.\n\nಮೊದಲ ಚಿತ್ರ ಮನೆಯೊಳಗಿನದು, ಮುಂದಿನದು ವಿಶ್ವದ್ದು: ಕೈಯಲ್ಲಿ ಒಂದು ಸಿಹಿ, ಅದೇ ಉಸಿರಿನಲ್ಲಿ 'ಸದಾ ಮುಕ್ತಿಗೆ ಸಾಧನ'. ಇವೆರಡೂ ಒಬ್ಬನೇ ದೇವನವು ಎಂದು ಶ್ಲೋಕ ಒತ್ತಿಹೇಳುತ್ತದೆ.",
        },
        hi: {
          translation:
            "आनंद से हाथ में मोदक लिए, सदा मुक्ति के साधन; चंद्रकला को आभूषण बनाए, अपनी लीला रूपी लोक के रक्षक; अनाथों के एकमात्र नायक, गजासुर का नाश करने वाले, नमन करने वालों के अशुभ को शीघ्र नष्ट करने वाले — उन विनायक को मैं नमन करता हूँ।",
          explanation:
            "ये पाँच 'रत्न' पंचचामर छंद में हैं — सोलह अक्षरों का पाद, जिसमें लघु और गुरु बारी-बारी से आते हैं, वही छंद जो शिवतांडव का है — इसलिए श्लोक शोभायात्रा के नगाड़े की तरह चलता है। लगभग हर शब्द '-कं' पर समाप्त होने वाला समास है, और अंतिम दो शब्दों — नमामि तं विनायकम्, 'उन विनायक को नमन करता हूँ' — तक वाक्य पूरा नहीं होता। उससे पहले का सब कुछ थमा हुआ वर्णन है।\n\nपहला चित्र घरेलू है और अगला ब्रह्मांडीय: हाथ में एक मिठाई, और उसी साँस में 'सदा मुक्ति के साधन'। श्लोक का आग्रह है कि दोनों एक ही देवता के हैं।",
        },
      },
    },
    {
      id: "ganesha-pancharatnam-2",
      locator: "2",
      handle: { en: "Lord of lords", kn: "ಈಶ್ವರರ ಈಶ್ವರ", hi: "ईश्वरों के ईश्वर" },
      sanskrit: [
        "नतेतरातिभीकरं नवोदितार्कभास्वरं",
        "नमत्सुरारिनिर्जरं नताधिकापदुद्धरम् ।",
        "सुरेश्वरं निधीश्वरं गजेश्वरं गणेश्वरं",
        "महेश्वरं तमाश्रये परात्परं निरन्तरम् ॥",
      ],
      iast: [
        "natetarātibhīkaraṃ navoditārkabhāsvaraṃ",
        "namatsurārinirjaraṃ natādhikāpaduddharam |",
        "sureśvaraṃ nidhīśvaraṃ gajeśvaraṃ gaṇeśvaraṃ",
        "maheśvaraṃ tam āśraye parātparaṃ nirantaram ||",
      ],
      keywords: [
        { term: "नतेतर", iast: "natetara", gloss: { en: "those who will not bow", kn: "ನಮಿಸದವರು", hi: "जो नमन नहीं करते" } },
        { term: "नवोदितार्कभास्वरम्", iast: "navoditārkabhāsvaram", gloss: { en: "radiant as the newly risen sun", kn: "ಆಗತಾನೇ ಉದಯಿಸಿದ ಸೂರ್ಯನಂತೆ ಬೆಳಗುವವನು", hi: "नवोदित सूर्य के समान दीप्त" } },
        { term: "निर्जर", iast: "nirjara", gloss: { en: "the gods — 'the unageing'", kn: "ದೇವತೆಗಳು — 'ಮುಪ್ಪಿಲ್ಲದವರು'", hi: "देवता — 'जरारहित'" } },
        { term: "आपदुद्धरम्", iast: "āpaduddharam", gloss: { en: "who lifts out of calamity", kn: "ಆಪತ್ತಿನಿಂದ ಮೇಲೆತ್ತುವವನು", hi: "आपदा से उबारने वाले" } },
        { term: "परात्परम्", iast: "parātparam", gloss: { en: "higher than the highest", kn: "ಶ್ರೇಷ್ಠರಿಗಿಂತಲೂ ಶ್ರೇಷ್ಠ", hi: "परे से भी परे" } },
      ],
      readings: {
        en: {
          translation:
            "Terrifying to those who will not bow, radiant as the newly risen sun; to whom the gods and their enemies alike bow, who lifts those who bow out of great calamity; lord of the gods, lord of treasure, lord of elephants, lord of the gaṇas, the great lord — in him, higher than the highest, I take refuge without pause.",
          explanation:
            "The third line is a run of titles ending in -īśvaram, 'lord': of the gods, of treasure, of elephants, of the gaṇas — and then maheśvara, 'great lord', a name usually Śiva's, given here to his son. The line does what a pūjā does with names, piling them up until the list itself is the praise.\n\nNatetara, 'other than those who bow', is a careful choice. He is fearsome only to those who refuse him, and the same verse says that even the asuras bow.",
        },
        kn: {
          translation:
            "ನಮಿಸದವರಿಗೆ ಅತಿಭಯಂಕರನು, ಆಗತಾನೇ ಉದಯಿಸಿದ ಸೂರ್ಯನಂತೆ ಬೆಳಗುವವನು; ದೇವತೆಗಳೂ ಅಸುರರೂ ನಮಿಸುವವನು, ನಮಿಸುವವರನ್ನು ಮಹಾಪತ್ತಿನಿಂದ ಮೇಲೆತ್ತುವವನು; ಸುರೇಶ್ವರ, ನಿಧೀಶ್ವರ, ಗಜೇಶ್ವರ, ಗಣೇಶ್ವರ, ಮಹೇಶ್ವರ — ಶ್ರೇಷ್ಠರಿಗಿಂತಲೂ ಶ್ರೇಷ್ಠನಾದ ಅವನನ್ನು ನಿರಂತರವಾಗಿ ಆಶ್ರಯಿಸುತ್ತೇನೆ.",
          explanation:
            "ಮೂರನೆಯ ಪಾದ '-ಈಶ್ವರಂ' ಎಂದು ಮುಗಿಯುವ ಬಿರುದುಗಳ ಸಾಲು: ದೇವತೆಗಳ, ನಿಧಿಯ, ಗಜಗಳ, ಗಣಗಳ ಈಶ್ವರ — ನಂತರ ಮಹೇಶ್ವರ, ಸಾಮಾನ್ಯವಾಗಿ ಶಿವನ ಹೆಸರು, ಇಲ್ಲಿ ಅವನ ಮಗನಿಗೆ. ಪೂಜೆಯಲ್ಲಿ ಹೆಸರುಗಳನ್ನು ಪೇರಿಸುವಂತೆ ಈ ಪಾದವೂ ಹೆಸರುಗಳನ್ನು ಪೇರಿಸುತ್ತದೆ, ಆ ಪಟ್ಟಿಯೇ ಸ್ತುತಿಯಾಗುವವರೆಗೆ.\n\n'ನತೇತರ' — 'ನಮಿಸುವವರಲ್ಲದವರು' — ಎಚ್ಚರಿಕೆಯ ಆಯ್ಕೆ. ಅವನು ಭಯಂಕರನಾಗುವುದು ಅವನನ್ನು ನಿರಾಕರಿಸುವವರಿಗೆ ಮಾತ್ರ; ಅದೇ ಶ್ಲೋಕ ಅಸುರರೂ ನಮಿಸುತ್ತಾರೆ ಎನ್ನುತ್ತದೆ.",
        },
        hi: {
          translation:
            "जो नमन नहीं करते उनके लिए अति भयंकर, नवोदित सूर्य के समान दीप्त; जिन्हें देवता और असुर दोनों नमन करते हैं, जो नमन करने वालों को बड़ी आपदा से उबारते हैं; सुरेश्वर, निधीश्वर, गजेश्वर, गणेश्वर, महेश्वर — परे से भी परे उन्हीं का मैं निरंतर आश्रय लेता हूँ।",
          explanation:
            "तीसरा पाद '-ईश्वरं' पर समाप्त होने वाली उपाधियों की पंक्ति है: देवताओं के, निधि के, गजों के, गणों के ईश्वर — और फिर महेश्वर, जो सामान्यतः शिव का नाम है, यहाँ उनके पुत्र को दिया गया। पूजा में नामों की तरह यह पाद भी नाम पर नाम रखता जाता है, जब तक सूची स्वयं स्तुति न बन जाए।\n\n'नतेतर' — 'नमन करने वालों से भिन्न' — सोचा-समझा चुनाव है। वे केवल उन्हीं के लिए भयंकर हैं जो उन्हें अस्वीकार करते हैं, और यही श्लोक कहता है कि असुर भी नमन करते हैं।",
        },
      },
    },
    {
      id: "ganesha-pancharatnam-3",
      locator: "3",
      handle: { en: "Mine of compassion", kn: "ಕೃಪಾಕರ", hi: "कृपा के आकर" },
      sanskrit: [
        "समस्तलोकशङ्करं निरस्तदैत्यकुञ्जरं",
        "दरेतरोदरं वरं वरेभवक्त्रमक्षरम् ।",
        "कृपाकरं क्षमाकरं मुदाकरं यशस्करं",
        "मनस्करं नमस्कृतां नमस्करोमि भास्वरम् ॥",
      ],
      iast: [
        "samastalokaśaṅkaraṃ nirastadaityakuñjaraṃ",
        "daretarodaraṃ varaṃ varebhavaktram akṣaram |",
        "kṛpākaraṃ kṣamākaraṃ mudākaraṃ yaśaskaraṃ",
        "manaskaraṃ namaskṛtāṃ namaskaromi bhāsvaram ||",
      ],
      keywords: [
        { term: "शङ्करम्", iast: "śaṅkaram", gloss: { en: "who brings welfare", kn: "ಮಂಗಳವನ್ನುಂಟುಮಾಡುವವನು", hi: "कल्याण करने वाले" } },
        { term: "दरेतरोदरम्", iast: "daretarodaram", gloss: { en: "whose belly is anything but small", kn: "ಚಿಕ್ಕದಲ್ಲದ ಹೊಟ್ಟೆಯವನು", hi: "जिनका उदर छोटा नहीं" } },
        { term: "वरेभवक्त्रम्", iast: "varebhavaktram", gloss: { en: "with the face of a noble elephant", kn: "ಶ್ರೇಷ್ಠ ಗಜದ ಮುಖದವನು", hi: "श्रेष्ठ गज के मुख वाले" } },
        { term: "अक्षरम्", iast: "akṣaram", gloss: { en: "imperishable", kn: "ಅಕ್ಷರ, ನಾಶವಿಲ್ಲದವನು", hi: "अविनाशी" } },
        { term: "मनस्करम्", iast: "manaskaram", gloss: { en: "who gives understanding", kn: "ಬುದ್ಧಿಯನ್ನು ನೀಡುವವನು", hi: "सद्बुद्धि देने वाले" } },
      ],
      readings: {
        en: {
          translation:
            "Bringer of welfare to all the worlds, who drove off the demon-elephant; great of belly, excellent, elephant-faced, imperishable; a mine of compassion, of patience, of joy, the giver of good name; who gives understanding to those who bow — to the radiant one I bow.",
          explanation:
            "Here the sound carries the sense. The third line is four words ending in -karam, 'maker of', and the fourth answers with manaskaram, namaskṛtām, namaskaromi — the verse ends in a cascade of the same syllables, nam and kar, until 'bowing' and 'making' run together.\n\nDaretarodaram is a gentle joke in the middle of all this grandeur: 'whose belly is other than small'.",
        },
        kn: {
          translation:
            "ಸಮಸ್ತ ಲೋಕಗಳಿಗೆ ಮಂಗಳವನ್ನುಂಟುಮಾಡುವವನು, ಅಸುರಗಜವನ್ನು ಓಡಿಸಿದವನು; ದೊಡ್ಡ ಹೊಟ್ಟೆಯವನು, ಶ್ರೇಷ್ಠನು, ಗಜಮುಖನು, ಅಕ್ಷರನು; ಕೃಪೆಯ, ಕ್ಷಮೆಯ, ಆನಂದದ ಆಗರ, ಕೀರ್ತಿಯನ್ನು ನೀಡುವವನು; ನಮಿಸುವವರಿಗೆ ಸದ್ಬುದ್ಧಿ ನೀಡುವವನು — ಆ ತೇಜಸ್ವಿಗೆ ನಮಸ್ಕರಿಸುತ್ತೇನೆ.",
          explanation:
            "ಇಲ್ಲಿ ನಾದವೇ ಅರ್ಥವನ್ನು ಹೊತ್ತೊಯ್ಯುತ್ತದೆ. ಮೂರನೆಯ ಪಾದದಲ್ಲಿ '-ಕರಂ' — 'ಮಾಡುವವನು' — ಎಂದು ಮುಗಿಯುವ ನಾಲ್ಕು ಪದಗಳು; ನಾಲ್ಕನೆಯದು ಮನಸ್ಕರಂ, ನಮಸ್ಕೃತಾಂ, ನಮಸ್ಕರೋಮಿ ಎಂದು ಉತ್ತರಿಸುತ್ತದೆ — 'ನಮ್' ಮತ್ತು 'ಕರ್' ಎಂಬ ಅಕ್ಷರಗಳ ಜಲಪಾತದಲ್ಲಿ ಶ್ಲೋಕ ಮುಗಿಯುತ್ತದೆ; 'ನಮಿಸುವುದು' ಮತ್ತು 'ಮಾಡುವುದು' ಒಂದರೊಳಗೊಂದು ಬೆರೆಯುತ್ತವೆ.\n\nಈ ವೈಭವದ ನಡುವೆ 'ದರೇತರೋದರಂ' ಒಂದು ಮೃದು ಹಾಸ್ಯ: 'ಚಿಕ್ಕದಲ್ಲದ ಹೊಟ್ಟೆಯವನು'.",
        },
        hi: {
          translation:
            "समस्त लोकों का कल्याण करने वाले, असुर-गज को भगाने वाले; विशाल उदर वाले, श्रेष्ठ, गजमुख, अविनाशी; कृपा, क्षमा और आनंद के आकर, यश देने वाले; नमन करने वालों को सद्बुद्धि देने वाले — उन तेजस्वी को मैं नमस्कार करता हूँ।",
          explanation:
            "यहाँ नाद ही अर्थ को वहन करता है। तीसरे पाद में '-करं' — 'करने वाले' — पर समाप्त होने वाले चार शब्द हैं, और चौथा मनस्करं, नमस्कृतां, नमस्करोमि से उत्तर देता है — श्लोक 'नम्' और 'कर्' के झरने में समाप्त होता है, जब तक 'नमन' और 'करना' एक-दूसरे में घुल न जाएँ।\n\nइस सारी भव्यता के बीच 'दरेतरोदरं' एक कोमल विनोद है: 'जिनका उदर छोटा नहीं'।",
        },
      },
    },
    {
      id: "ganesha-pancharatnam-4",
      locator: "4",
      handle: { en: "The ancient elephant", kn: "ಪುರಾಣ ಗಜ", hi: "पुरातन गज" },
      sanskrit: [
        "अकिञ्चनार्तिमार्जनं चिरन्तनोक्तिभाजनं",
        "पुरारिपूर्वनन्दनं सुरारिगर्वचर्वणम् ।",
        "प्रपञ्चनाशभीषणं धनञ्जयादिभूषणं",
        "कपोलदानवारणं भजे पुराणवारणम् ॥",
      ],
      iast: [
        "akiñcanārtimārjanaṃ cirantanoktibhājanaṃ",
        "purāripūrvanandanaṃ surārigarvacarvaṇam |",
        "prapañcanāśabhīṣaṇaṃ dhanañjayādibhūṣaṇaṃ",
        "kapoladānavāraṇaṃ bhaje purāṇavāraṇam ||",
      ],
      keywords: [
        { term: "अकिञ्चनार्तिमार्जनम्", iast: "akiñcanārtimārjanam", gloss: { en: "who wipes away the distress of those who have nothing", kn: "ಏನೂ ಇಲ್ಲದವರ ಸಂಕಟವನ್ನು ಒರೆಸುವವನು", hi: "अकिंचनों की पीड़ा पोंछने वाले" } },
        { term: "चिरन्तनोक्ति", iast: "cirantanokti", gloss: { en: "the ancient word, the Veda", kn: "ಪ್ರಾಚೀನ ವಾಣಿ, ವೇದ", hi: "सनातन वाणी, वेद" } },
        { term: "पुरारिपूर्वनन्दनम्", iast: "purāripūrvanandanam", gloss: { en: "elder son of Śiva, the foe of the three cities", kn: "ತ್ರಿಪುರಾರಿ ಶಿವನ ಹಿರಿಯ ಮಗ", hi: "त्रिपुरारि शिव के ज्येष्ठ पुत्र" } },
        { term: "कपोलदानवारणम्", iast: "kapoladānavāraṇam", gloss: { en: "the elephant whose temples stream with ichor", kn: "ಕಪೋಲಗಳಿಂದ ಮದಜಲ ಸುರಿಯುವ ಗಜ", hi: "कपोलों से मदजल बहाने वाले गज" } },
        { term: "पुराणवारणम्", iast: "purāṇavāraṇam", gloss: { en: "the ancient elephant", kn: "ಪುರಾತನ ಗಜ", hi: "पुरातन गज" } },
      ],
      readings: {
        en: {
          translation:
            "Who wipes away the distress of those who have nothing, of whom the ancient words speak; the elder son of Śiva, foe of the three cities, who chews up the pride of the gods' enemies; terrible at the world's dissolution, adorned with serpents such as Dhanañjaya; the elephant whose temples stream with ichor — the ancient elephant I worship.",
          explanation:
            "Purāri is Śiva, 'enemy of the cities' — the three flying cities of the asuras, which he burned with a single arrow — and Gaṇeśa is his pūrva-nandana, first son. Dhanañjaya is read by the commentators as the name of a nāga: like his father, Gaṇeśa wears serpents.\n\nThe verse ends by doubling one word. Vāraṇa is 'elephant', and it is also 'the one who wards off' — so kapola-dāna-vāraṇam and purāṇa-vāraṇam give the elephant in rut and the ancient guardian together, in the god who began the verse by wiping away the distress of the poor.",
        },
        kn: {
          translation:
            "ಏನೂ ಇಲ್ಲದವರ ಸಂಕಟವನ್ನು ಒರೆಸುವವನು, ಪ್ರಾಚೀನ ವಾಣಿಯ ವಿಷಯನಾದವನು; ತ್ರಿಪುರಾರಿ ಶಿವನ ಹಿರಿಯ ಮಗನು, ಅಸುರರ ಗರ್ವವನ್ನು ಅಗಿದುಹಾಕುವವನು; ಪ್ರಳಯದಲ್ಲಿ ಭೀಷಣನು, ಧನಂಜಯನೇ ಮೊದಲಾದ ಸರ್ಪಗಳನ್ನು ಆಭರಣವಾಗಿ ಧರಿಸಿದವನು; ಕಪೋಲಗಳಿಂದ ಮದಜಲ ಸುರಿಯುವ ಗಜ — ಆ ಪುರಾತನ ಗಜವನ್ನು ಭಜಿಸುತ್ತೇನೆ.",
          explanation:
            "ಪುರಾರಿ ಎಂದರೆ ಶಿವ, 'ಪುರಗಳ ಶತ್ರು' — ಅಸುರರ ಮೂರು ಹಾರುವ ನಗರಗಳನ್ನು ಒಂದೇ ಬಾಣದಿಂದ ಸುಟ್ಟವನು — ಗಣೇಶನು ಅವನ ಪೂರ್ವನಂದನ, ಹಿರಿಯ ಮಗ. ಧನಂಜಯ ಎಂಬುದನ್ನು ವ್ಯಾಖ್ಯಾನಕಾರರು ಒಂದು ನಾಗದ ಹೆಸರೆಂದು ಓದುತ್ತಾರೆ: ತಂದೆಯಂತೆಯೇ ಗಣೇಶನೂ ಸರ್ಪಗಳನ್ನು ಧರಿಸುತ್ತಾನೆ.\n\nಶ್ಲೋಕ ಒಂದು ಪದವನ್ನು ಇಮ್ಮಡಿಗೊಳಿಸಿ ಮುಗಿಯುತ್ತದೆ. 'ವಾರಣ' ಎಂದರೆ ಆನೆ, ಮತ್ತು 'ತಡೆಯುವವನು' ಕೂಡ — ಹೀಗೆ ಕಪೋಲದಾನವಾರಣಂ, ಪುರಾಣವಾರಣಂ ಎಂಬವು ಮದಗಜವನ್ನೂ ಪ್ರಾಚೀನ ರಕ್ಷಕನನ್ನೂ ಒಟ್ಟಿಗೆ ಕೊಡುತ್ತವೆ — ಬಡವರ ಸಂಕಟವನ್ನು ಒರೆಸುವುದರಿಂದ ಶ್ಲೋಕವನ್ನು ಆರಂಭಿಸಿದ ದೇವನಲ್ಲಿ.",
        },
        hi: {
          translation:
            "अकिंचनों की पीड़ा पोंछने वाले, सनातन वाणी के विषय; त्रिपुरारि शिव के ज्येष्ठ पुत्र, असुरों के गर्व को चबा डालने वाले; प्रलय में भीषण, धनंजय आदि सर्पों से भूषित; कपोलों से मदजल बहाने वाले गज — उन पुरातन गज को मैं भजता हूँ।",
          explanation:
            "पुरारि शिव हैं, 'पुरों के शत्रु' — असुरों के तीन उड़ते नगर, जिन्हें उन्होंने एक ही बाण से जला दिया — और गणेश उनके पूर्वनंदन, ज्येष्ठ पुत्र हैं। धनंजय को टीकाकार एक नाग का नाम मानते हैं: पिता की तरह गणेश भी सर्प धारण करते हैं।\n\nश्लोक एक शब्द को दोहरा कर समाप्त होता है। 'वारण' का अर्थ हाथी है, और 'रोकने वाला' भी — इस प्रकार कपोलदानवारणं और पुराणवारणं मदमत्त गज और पुरातन रक्षक, दोनों को एक साथ देते हैं — उस देवता में जिसने श्लोक का आरंभ दीनों की पीड़ा पोंछने से किया।",
        },
      },
    },
    {
      id: "ganesha-pancharatnam-5",
      locator: "5",
      handle: { en: "The one-tusked, always", kn: "ಸದಾ ಏಕದಂತನನ್ನೇ", hi: "सदा एकदंत का" },
      sanskrit: [
        "नितान्तकान्तदन्तकान्तिमन्तकान्तकात्मजं",
        "अचिन्त्यरूपमन्तहीनमन्तरायकृन्तनम् ।",
        "हृदन्तरे निरन्तरं वसन्तमेव योगिनां",
        "तमेकदन्तमेव तं विचिन्तयामि सन्ततम् ॥",
      ],
      iast: [
        "nitāntakāntadantakāntim antakāntakātmajaṃ",
        "acintyarūpam antahīnam antarāyakṛntanam |",
        "hṛdantare nirantaraṃ vasantam eva yogināṃ",
        "tam ekadantam eva taṃ vicintayāmi santatam ||",
      ],
      keywords: [
        { term: "नितान्तकान्तदन्तकान्तिम्", iast: "nitāntakāntadantakāntim", gloss: { en: "whose tusk shines with exceeding beauty", kn: "ಅತಿಸುಂದರವಾಗಿ ಹೊಳೆಯುವ ದಂತದವನು", hi: "जिनका दाँत अत्यंत सुंदर दीप्ति से चमकता है" } },
        { term: "अन्तकान्तकात्मजम्", iast: "antakāntakātmajam", gloss: { en: "son of the one who ended Death", kn: "ಯಮನನ್ನು ಅಂತ್ಯಗೊಳಿಸಿದವನ ಮಗ", hi: "यम का अंत करने वाले के पुत्र" } },
        { term: "अन्तरायकृन्तनम्", iast: "antarāyakṛntanam", gloss: { en: "who cuts obstacles away", kn: "ಅಡ್ಡಿಗಳನ್ನು ಕತ್ತರಿಸುವವನು", hi: "विघ्नों को काटने वाले" } },
        { term: "हृदन्तरे", iast: "hṛdantare", gloss: { en: "within the heart", kn: "ಹೃದಯದೊಳಗೆ", hi: "हृदय के भीतर" } },
        { term: "सन्ततम्", iast: "santatam", gloss: { en: "always, without a break", kn: "ಸದಾ, ಬಿಡುವಿಲ್ಲದೆ", hi: "सदा, निरंतर" } },
      ],
      readings: {
        en: {
          translation:
            "Whose tusk shines with exceeding beauty, son of the one who put an end to Death; of unthinkable form, without end, who cuts obstacles away; who dwells without pause in the hearts of yogis — on him, the one-tusked, on him alone I meditate always.",
          explanation:
            "The most elaborate line of the stotra is also its sound-game: nitānta-kānta-danta-kāntim antakāntakātmajam turns on -anta- again and again. Antaka is Death, and the antakāntaka, 'ender of the ender', is Śiva, who struck Death down to save the boy Mārkaṇḍeya.\n\nThen the verse turns inward. After four verses of titles and images, the last is about where he lives — in the hearts of yogis, without interruption — and the stotra closes not with 'I bow' but with 'I meditate'.",
        },
        kn: {
          translation:
            "ಅತಿಸುಂದರವಾಗಿ ಹೊಳೆಯುವ ದಂತದವನು, ಯಮನನ್ನು ಅಂತ್ಯಗೊಳಿಸಿದವನ ಮಗನು; ಅಚಿಂತ್ಯ ರೂಪದವನು, ಅಂತ್ಯವಿಲ್ಲದವನು, ಅಡ್ಡಿಗಳನ್ನು ಕತ್ತರಿಸುವವನು; ಯೋಗಿಗಳ ಹೃದಯದೊಳಗೆ ನಿರಂತರವಾಗಿ ವಾಸಿಸುವವನು — ಆ ಏಕದಂತನನ್ನೇ, ಅವನನ್ನೇ ಸದಾ ಚಿಂತಿಸುತ್ತೇನೆ.",
          explanation:
            "ಸ್ತೋತ್ರದ ಅತ್ಯಂತ ಅಲಂಕೃತ ಪಾದವೇ ಅದರ ನಾದದಾಟ: ನಿತಾಂತ-ಕಾಂತ-ದಂತ-ಕಾಂತಿಮ್ ಅಂತಕಾಂತಕಾತ್ಮಜಂ — '-ಅಂತ-' ಮತ್ತೆ ಮತ್ತೆ ತಿರುಗುತ್ತದೆ. ಅಂತಕ ಎಂದರೆ ಯಮ; ಅಂತಕಾಂತಕ, 'ಅಂತ್ಯಗೊಳಿಸುವವನನ್ನು ಅಂತ್ಯಗೊಳಿಸಿದವನು', ಎಂದರೆ ಬಾಲಕ ಮಾರ್ಕಂಡೇಯನನ್ನು ಉಳಿಸಲು ಯಮನನ್ನು ಕೆಡವಿದ ಶಿವ.\n\nನಂತರ ಶ್ಲೋಕ ಒಳಮುಖವಾಗುತ್ತದೆ. ನಾಲ್ಕು ಶ್ಲೋಕಗಳ ಬಿರುದು ಮತ್ತು ಚಿತ್ರಗಳ ನಂತರ ಕೊನೆಯದು ಅವನು ಎಲ್ಲಿ ವಾಸಿಸುತ್ತಾನೆ ಎಂಬುದರ ಬಗ್ಗೆ — ಯೋಗಿಗಳ ಹೃದಯದಲ್ಲಿ, ಬಿಡುವಿಲ್ಲದೆ — ಮತ್ತು ಸ್ತೋತ್ರ 'ನಮಿಸುತ್ತೇನೆ' ಎಂದಲ್ಲ, 'ಚಿಂತಿಸುತ್ತೇನೆ' ಎಂದು ಮುಗಿಯುತ್ತದೆ.",
        },
        hi: {
          translation:
            "जिनका दाँत अत्यंत सुंदर दीप्ति से चमकता है, यम का अंत करने वाले के पुत्र; अचिंत्य रूप, अनंत, विघ्नों को काटने वाले; योगियों के हृदय में निरंतर वास करने वाले — उन एकदंत का, केवल उन्हीं का मैं सदा चिंतन करता हूँ।",
          explanation:
            "स्तोत्र का सबसे अलंकृत पाद ही उसका नाद-खेल है: नितान्त-कान्त-दन्त-कान्तिम् अन्तकान्तकात्मजं — '-अन्त-' बार-बार लौटता है। अंतक यम हैं, और अंतकांतक, 'अंत करने वाले का अंत करने वाले', शिव हैं, जिन्होंने बालक मार्कंडेय को बचाने के लिए यम को गिरा दिया।\n\nफिर श्लोक भीतर की ओर मुड़ता है। चार श्लोकों की उपाधियों और चित्रों के बाद अंतिम इस बारे में है कि वे कहाँ रहते हैं — योगियों के हृदय में, बिना विराम — और स्तोत्र 'नमन करता हूँ' से नहीं, 'चिंतन करता हूँ' से समाप्त होता है।",
        },
      },
    },
    {
      id: "ganesha-pancharatnam-phala",
      locator: "phala",
      handle: { en: "The fruit of saying it", kn: "ಪಠಣದ ಫಲ", hi: "पाठ का फल" },
      sanskrit: [
        "महागणेशपञ्चरत्नमादरेण योऽन्वहं",
        "प्रजल्पति प्रभातके हृदि स्मरन् गणेश्वरम् ।",
        "अरोगतां अदोषतां सुसाहितीं सुपुत्रतां",
        "समीहितायुरष्टभूतिमभ्युपैति सोऽचिरात् ॥",
      ],
      iast: [
        "mahāgaṇeśapañcaratnam ādareṇa yo 'nvahaṃ",
        "prajalpati prabhātake hṛdi smaran gaṇeśvaram |",
        "arogatāṃ adoṣatāṃ susāhitīṃ suputratāṃ",
        "samīhitāyur aṣṭabhūtim abhyupaiti so 'cirāt ||",
      ],
      keywords: [
        { term: "आदरेण", iast: "ādareṇa", gloss: { en: "with reverence", kn: "ಆದರದಿಂದ", hi: "आदर के साथ" } },
        { term: "प्रभातके", iast: "prabhātake", gloss: { en: "at daybreak", kn: "ಬೆಳಗಿನ ಜಾವದಲ್ಲಿ", hi: "प्रभात में" } },
        { term: "सुसाहितीम्", iast: "susāhitīm", gloss: { en: "a gift for letters", kn: "ಉತ್ತಮ ಸಾಹಿತ್ಯ ಸಾಮರ್ಥ್ಯ", hi: "उत्तम साहित्य-सामर्थ्य" } },
        { term: "अष्टभूतिम्", iast: "aṣṭabhūtim", gloss: { en: "the eightfold powers", kn: "ಅಷ್ಟೈಶ್ವರ್ಯ", hi: "अष्ट सिद्धियाँ" } },
        { term: "अचिरात्", iast: "acirāt", gloss: { en: "before long", kn: "ಬೇಗನೆ", hi: "शीघ्र ही" } },
      ],
      readings: {
        en: {
          translation:
            "Whoever recites these five jewels of Mahāgaṇeśa with reverence every day at daybreak, holding Gaṇeśvara in the heart, before long attains health, freedom from fault, a gift for letters, good children, the long life they wish for, and the eightfold powers.",
          explanation:
            "A phalaśruti — the 'hearing of the fruit' with which most stotras end, saying what reciting them brings. It is the stotra's own claim, made in the convention of the form, and is given here as that.\n\nIts list suits a hymn to the lord of beginnings: health, blamelessness, susāhitī — skill with words — children, long life, and the aṣṭa-bhūti, the eight powers. The condition is simple: every day, at dawn, with attention.",
        },
        kn: {
          translation:
            "ಮಹಾಗಣೇಶನ ಈ ಪಂಚರತ್ನವನ್ನು ಪ್ರತಿದಿನ ಬೆಳಗಿನ ಜಾವದಲ್ಲಿ ಹೃದಯದಲ್ಲಿ ಗಣೇಶ್ವರನನ್ನು ಸ್ಮರಿಸುತ್ತಾ ಆದರದಿಂದ ಪಠಿಸುವವನು ಬೇಗನೆ ಆರೋಗ್ಯ, ದೋಷರಾಹಿತ್ಯ, ಉತ್ತಮ ಸಾಹಿತ್ಯ ಸಾಮರ್ಥ್ಯ, ಸತ್ಸಂತಾನ, ಬಯಸಿದ ಆಯುಸ್ಸು ಮತ್ತು ಅಷ್ಟೈಶ್ವರ್ಯವನ್ನು ಪಡೆಯುತ್ತಾನೆ.",
          explanation:
            "ಫಲಶ್ರುತಿ — ಬಹುತೇಕ ಸ್ತೋತ್ರಗಳು ಮುಗಿಯುವ 'ಫಲದ ಶ್ರವಣ', ಪಠಣದಿಂದ ಏನು ದೊರೆಯುತ್ತದೆ ಎಂದು ಹೇಳುವ ಭಾಗ. ಇದು ಸ್ತೋತ್ರದ ತನ್ನದೇ ಮಾತು, ಈ ಪ್ರಕಾರದ ಸಂಪ್ರದಾಯದಂತೆ ಹೇಳಿದ್ದು; ಇಲ್ಲಿ ಅದನ್ನು ಹಾಗೆಯೇ ನೀಡಲಾಗಿದೆ.\n\nಆರಂಭಗಳ ಒಡೆಯನ ಸ್ತೋತ್ರಕ್ಕೆ ತಕ್ಕ ಪಟ್ಟಿ: ಆರೋಗ್ಯ, ನಿರ್ದೋಷತೆ, ಸುಸಾಹಿತಿ — ಮಾತಿನ ಕೌಶಲ — ಸಂತಾನ, ಆಯುಸ್ಸು ಮತ್ತು ಅಷ್ಟಭೂತಿ, ಎಂಟು ಸಿದ್ಧಿಗಳು. ಷರತ್ತು ಸರಳ: ಪ್ರತಿದಿನ, ಮುಂಜಾನೆ, ಗಮನವಿಟ್ಟು.",
        },
        hi: {
          translation:
            "जो महागणेश के इन पाँच रत्नों का प्रतिदिन प्रभात में हृदय में गणेश्वर का स्मरण करते हुए आदर से पाठ करता है, वह शीघ्र ही आरोग्य, निर्दोषता, उत्तम साहित्य-सामर्थ्य, सुसंतान, इच्छित आयु और अष्ट सिद्धियाँ प्राप्त करता है।",
          explanation:
            "फलश्रुति — अधिकांश स्तोत्रों का वह समापन-भाग, 'फल का श्रवण', जो बताता है कि पाठ से क्या मिलता है। यह स्तोत्र का अपना कथन है, इस विधा की परंपरा में कहा गया, और यहाँ उसे वैसे ही दिया गया है।\n\nआरंभों के स्वामी के स्तोत्र के अनुरूप सूची: आरोग्य, निर्दोषता, सुसाहिती — वाणी का कौशल — संतान, आयु, और अष्टभूति, आठ सिद्धियाँ। शर्त सरल है: प्रतिदिन, प्रभात में, ध्यानपूर्वक।",
        },
      },
    },
  ],
});
