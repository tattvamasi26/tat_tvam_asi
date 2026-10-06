import type { Locale } from "@/i18n/config";

// ─────────────────────────────────────────────────────────
//  The eighteen chapters, in depth.
//
//  /gita has listed eighteen names and their verse counts since the
//  section was built. A name and a number is not a reading; what a
//  reader needs is what each chapter actually does, where it turns,
//  and what it is answering.
//
//  **No Sanskrit mūla is entered here, and that is deliberate.** The
//  site's rule is to enter mūla only where every syllable can be
//  verified, and a verse written out from memory is not verified
//  however confident the memory. The chapter titles below are the
//  ones already in seed/corpus.ts rather than retyped, so this file
//  introduces no new Sanskrit at all. Entering the verses is a job
//  for when there is an edition to collate against; what it needs is
//  recorded in the section's own note.
//
//  The counts are the Gītā Press / vulgate numbering, which is what
//  almost every edition and every reciter uses. A handful of
//  manuscripts differ by a verse or two in places; nothing here turns
//  on that.
// ─────────────────────────────────────────────────────────

export interface GitaChapterLink {
  href: string;
  label: Record<Locale, string>;
}

export interface GitaChapter {
  /** 1 to 18. */
  n: number;
  /** Matches the slug in seed/corpus.ts, minus the "gita-N-" prefix. */
  key: string;
  name: Record<Locale, string>;
  verses: number;
  /** One line: what this chapter is. */
  lede: Record<Locale, string>;
  /** What actually happens in it. */
  argument: Record<Locale, string>;
  /** The hinge — the place the chapter turns. */
  turn: Record<Locale, string>;
  /** Where the chapter itself is textually disputed. */
  note?: Record<Locale, string>;
  links?: GitaChapterLink[];
}

const L = (href: string, en: string, kn: string, hi: string): GitaChapterLink => ({
  href,
  label: { en, kn, hi },
});

export const GITA_CHAPTER_NOTES: GitaChapter[] = [
  {
    n: 1,
    key: "arjuna-vishada",
    name: { en: "Arjuna's collapse", kn: "ಅರ್ಜುನ ವಿಷಾದ", hi: "अर्जुन विषाद" },
    verses: 47,
    lede: {
      en: "The only chapter with no teaching in it at all.",
      kn: "ಯಾವ ಬೋಧನೆಯೂ ಇಲ್ಲದ ಏಕೈಕ ಅಧ್ಯಾಯ.",
      hi: "एकमात्र अध्याय जिसमें कोई उपदेश नहीं।",
    },
    argument: {
      en: "The armies are drawn up and the conches are blown. Arjuna asks to be driven between the two sides to see who has come, sees his own relatives and teachers on both, and argues himself out of fighting — on grounds that are decent rather than cowardly: the families will be destroyed, the women unprotected, the order of things will fail.",
      kn: "ಸೇನೆಗಳು ನಿಂತಿವೆ, ಶಂಖಗಳು ಮೊಳಗಿವೆ. ಯಾರು ಬಂದಿದ್ದಾರೆಂದು ನೋಡಲು ತನ್ನನ್ನು ಎರಡು ಪಕ್ಷಗಳ ನಡುವೆ ಒಯ್ಯಬೇಕೆಂದು ಅರ್ಜುನ ಕೇಳುತ್ತಾನೆ, ಎರಡೂ ಕಡೆ ತನ್ನ ಬಂಧುಗಳನ್ನೂ ಗುರುಗಳನ್ನೂ ಕಂಡು, ಯುದ್ಧ ಬೇಡವೆಂದು ತನ್ನನ್ನೇ ಒಪ್ಪಿಸಿಕೊಳ್ಳುತ್ತಾನೆ — ಹೇಡಿತನದಿಂದಲ್ಲ, ಗೌರವಾರ್ಹವಾದ ಕಾರಣಗಳಿಂದ: ಕುಲ ನಾಶವಾಗುತ್ತದೆ, ಹೆಂಗಸರಿಗೆ ರಕ್ಷಣೆ ಇರುವುದಿಲ್ಲ, ವ್ಯವಸ್ಥೆ ಕುಸಿಯುತ್ತದೆ.",
      hi: "सेनाएँ खड़ी हैं, शंख बज चुके हैं। कौन आया है यह देखने के लिए अर्जुन स्वयं को दोनों पक्षों के बीच ले चलने को कहता है, दोनों ओर अपने संबंधी और गुरु देखता है, और स्वयं को युद्ध से विरत कर लेता है — कायरता से नहीं, आदरणीय तर्कों से: कुल नष्ट होगा, स्त्रियाँ असुरक्षित होंगी, व्यवस्था गिरेगी।",
    },
    turn: {
      en: "He puts down the bow and sits. The text is careful that his reasons are good ones; a weaker opening would have made the rest of the book easy.",
      kn: "ಬಿಲ್ಲು ಕೆಳಗಿಟ್ಟು ಕೂರುತ್ತಾನೆ. ಅವನ ಕಾರಣಗಳು ಸರಿಯಾದವು ಎಂಬುದರಲ್ಲಿ ಗ್ರಂಥ ಎಚ್ಚರ ವಹಿಸಿದೆ; ದುರ್ಬಲ ಆರಂಭ ಉಳಿದ ಗ್ರಂಥವನ್ನು ಸುಲಭಗೊಳಿಸುತ್ತಿತ್ತು.",
      hi: "वह धनुष रखकर बैठ जाता है। उसके तर्क अच्छे हैं, इसमें ग्रंथ सावधान है; दुर्बल आरंभ शेष पुस्तक को सरल बना देता।",
    },
  },
  {
    n: 2,
    key: "sankhya",
    name: { en: "The count of things", kn: "ಸಾಂಖ್ಯ", hi: "सांख्य" },
    verses: 72,
    lede: {
      en: "The teaching begins, and the whole book is in outline here.",
      kn: "ಬೋಧನೆ ಆರಂಭವಾಗುತ್ತದೆ, ಮತ್ತು ಇಡೀ ಗ್ರಂಥದ ರೂಪರೇಖೆ ಇಲ್ಲಿಯೇ ಇದೆ.",
      hi: "उपदेश आरंभ होता है, और पूरी पुस्तक की रूपरेखा यहीं है।",
    },
    argument: {
      en: "Krishna answers first with metaphysics — the self is not born and does not die, so the grief is misplaced — and then, abruptly, stops arguing from that and starts arguing from duty and from the manner of acting. The chapter ends with a long portrait of the person who is steady in understanding.",
      kn: "ಕೃಷ್ಣ ಮೊದಲು ತತ್ತ್ವದಿಂದ ಉತ್ತರಿಸುತ್ತಾನೆ — ಆತ್ಮ ಹುಟ್ಟುವುದೂ ಇಲ್ಲ ಸಾಯುವುದೂ ಇಲ್ಲ, ಆದ್ದರಿಂದ ಈ ದುಃಖ ಅಸ್ಥಾನದ್ದು — ಆಮೇಲೆ ಥಟ್ಟನೆ ಆ ನೆಲೆಯಿಂದ ವಾದಿಸುವುದನ್ನು ನಿಲ್ಲಿಸಿ ಕರ್ತವ್ಯದಿಂದಲೂ ಕರ್ಮ ಮಾಡುವ ರೀತಿಯಿಂದಲೂ ವಾದಿಸತೊಡಗುತ್ತಾನೆ. ಸ್ಥಿತಪ್ರಜ್ಞನ ದೀರ್ಘ ಚಿತ್ರದೊಂದಿಗೆ ಅಧ್ಯಾಯ ಮುಗಿಯುತ್ತದೆ.",
      hi: "कृष्ण पहले तत्त्व से उत्तर देते हैं — आत्मा न जन्मती है न मरती, अतः यह शोक अस्थानी है — और फिर अचानक उस आधार से तर्क छोड़कर कर्तव्य और कर्म करने की रीति से तर्क करने लगते हैं। अध्याय स्थितप्रज्ञ के दीर्घ चित्र पर समाप्त होता है।",
    },
    turn: {
      en: "The shift from what the self is to what Arjuna should do. Every later chapter is an expansion of one half or the other of that turn, which is why this chapter is often read on its own.",
      kn: "ಆತ್ಮ ಏನೆಂಬುದರಿಂದ ಅರ್ಜುನ ಏನು ಮಾಡಬೇಕೆಂಬುದಕ್ಕೆ ಸರಿಯುವಿಕೆ. ಮುಂದಿನ ಪ್ರತಿ ಅಧ್ಯಾಯವೂ ಆ ತಿರುವಿನ ಒಂದು ಅಥವಾ ಇನ್ನೊಂದು ಅರ್ಧದ ವಿಸ್ತರಣೆ — ಆದ್ದರಿಂದಲೇ ಈ ಅಧ್ಯಾಯವನ್ನು ಪ್ರತ್ಯೇಕವಾಗಿಯೂ ಓದುವುದು ಸಾಮಾನ್ಯ.",
      hi: "आत्मा क्या है, से अर्जुन को क्या करना चाहिए — यह मोड़। आगे का हर अध्याय उसी मोड़ के किसी एक आधे का विस्तार है, इसीलिए यह अध्याय अकेले भी पढ़ा जाता है।",
    },
    links: [L("/concepts/atman", "Ātman", "ಆತ್ಮನ್", "आत्मन्")],
  },
  {
    n: 3,
    key: "karma",
    name: { en: "Action", kn: "ಕರ್ಮ", hi: "कर्म" },
    verses: 43,
    lede: {
      en: "If understanding is better than action, why act at all?",
      kn: "ಜ್ಞಾನ ಕರ್ಮಕ್ಕಿಂತ ಮೇಲಾದರೆ, ಕರ್ಮ ಏಕೆ ಮಾಡಬೇಕು?",
      hi: "यदि ज्ञान कर्म से श्रेष्ठ है, तो कर्म क्यों करें?",
    },
    argument: {
      en: "Arjuna asks the obvious question the last chapter left open. The answer is that nobody can stop acting — staying still is also a kind of doing — and that the world is held up by a cycle of giving in which sacrifice is the model. A person of standing is also told that others copy what they do, which makes the question not only personal.",
      kn: "ಹಿಂದಿನ ಅಧ್ಯಾಯ ತೆರೆದಿಟ್ಟ ಸ್ಪಷ್ಟ ಪ್ರಶ್ನೆಯನ್ನು ಅರ್ಜುನ ಕೇಳುತ್ತಾನೆ. ಉತ್ತರ: ಕರ್ಮ ಬಿಡಲು ಯಾರಿಗೂ ಆಗದು — ಸುಮ್ಮನಿರುವುದೂ ಒಂದು ಬಗೆಯ ಮಾಡುವಿಕೆಯೇ — ಮತ್ತು ಜಗತ್ತು ನಿಂತಿರುವುದು ಕೊಡುವ ಚಕ್ರದ ಮೇಲೆ, ಅದಕ್ಕೆ ಯಜ್ಞವೇ ಮಾದರಿ. ತನ್ನನ್ನು ನೋಡಿ ಉಳಿದವರು ಅನುಕರಿಸುತ್ತಾರೆ ಎಂದೂ ಹೇಳಲಾಗುತ್ತದೆ — ಆದ್ದರಿಂದ ಇದು ಕೇವಲ ವೈಯಕ್ತಿಕ ಪ್ರಶ್ನೆಯಲ್ಲ.",
      hi: "पिछले अध्याय ने जो स्पष्ट प्रश्न खुला छोड़ा था, अर्जुन वही पूछता है। उत्तर यह कि कर्म कोई छोड़ नहीं सकता — निष्क्रिय रहना भी एक प्रकार का करना है — और जगत् देने के उस चक्र पर टिका है जिसका आदर्श यज्ञ है। यह भी कहा जाता है कि प्रतिष्ठित व्यक्ति जो करता है उसे दूसरे दोहराते हैं, जिससे प्रश्न केवल व्यक्तिगत नहीं रह जाता।",
    },
    turn: {
      en: "Doing your own work imperfectly is placed above doing someone else's well. It is the line the book returns to at its very end.",
      kn: "ಬೇರೊಬ್ಬರ ಕೆಲಸವನ್ನು ಚೆನ್ನಾಗಿ ಮಾಡುವುದಕ್ಕಿಂತ ತನ್ನದನ್ನು ಕುಂದಿನೊಡನೆ ಮಾಡುವುದೇ ಮೇಲು ಎನ್ನಲಾಗುತ್ತದೆ. ಗ್ರಂಥ ತನ್ನ ಕೊನೆಯಲ್ಲಿ ಮತ್ತೆ ಮರಳುವ ಸಾಲು ಅದೇ.",
      hi: "दूसरे का काम भली भाँति करने से अपना काम त्रुटि सहित करना श्रेष्ठ कहा जाता है। यही पंक्ति पुस्तक अपने अंत में फिर दोहराती है।",
    },
    links: [L("/concepts/karma", "Karma", "ಕರ್ಮ", "कर्म")],
  },
  {
    n: 4,
    key: "jnana-karma-sanyasa",
    name: { en: "Knowledge and the giving up of action", kn: "ಜ್ಞಾನಕರ್ಮಸಂನ್ಯಾಸ", hi: "ज्ञानकर्मसंन्यास" },
    verses: 42,
    lede: {
      en: "Where the avatāra is explained, and where knowledge is called a fire.",
      kn: "ಅವತಾರವನ್ನು ವಿವರಿಸುವ ಅಧ್ಯಾಯ, ಮತ್ತು ಜ್ಞಾನವನ್ನು ಅಗ್ನಿ ಎಂದು ಕರೆಯುವ ಅಧ್ಯಾಯ.",
      hi: "जहाँ अवतार समझाया जाता है, और जहाँ ज्ञान को अग्नि कहा जाता है।",
    },
    argument: {
      en: "Krishna says this teaching is old and was lost, and that he has taught it before — which prompts Arjuna to ask how, since Krishna was born after the people named. The answer is the avatāra passage: he takes birth when dharma weakens. The rest of the chapter sorts kinds of sacrifice, and ends by calling knowledge the fire that reduces action to ash.",
      kn: "ಈ ಬೋಧನೆ ಹಳೆಯದು, ನಡುವೆ ಕಳೆದುಹೋಯಿತು, ಮತ್ತು ತಾನು ಇದನ್ನು ಮೊದಲೇ ಕಲಿಸಿದ್ದೆ ಎಂದು ಕೃಷ್ಣ ಹೇಳುತ್ತಾನೆ — ಹೆಸರಿಸಿದವರ ನಂತರ ಹುಟ್ಟಿದ ನೀನು ಹೇಗೆ ಎಂದು ಅರ್ಜುನ ಕೇಳುತ್ತಾನೆ. ಉತ್ತರವೇ ಅವತಾರದ ಭಾಗ: ಧರ್ಮ ಕುಂದಿದಾಗ ತಾನು ಜನಿಸುತ್ತೇನೆ. ಉಳಿದ ಅಧ್ಯಾಯ ಯಜ್ಞಗಳ ಬಗೆಗಳನ್ನು ವಿಂಗಡಿಸಿ, ಕರ್ಮವನ್ನು ಬೂದಿ ಮಾಡುವ ಅಗ್ನಿ ಜ್ಞಾನವೇ ಎಂದು ಮುಗಿಯುತ್ತದೆ.",
      hi: "कृष्ण कहते हैं कि यह उपदेश पुराना है, बीच में लुप्त हो गया, और वे इसे पहले दे चुके हैं — जिस पर अर्जुन पूछता है कि जिनके नाम लिए गए उनके बाद जन्मे आप कैसे। उत्तर ही अवतार-प्रसंग है: धर्म क्षीण होने पर वे जन्म लेते हैं। शेष अध्याय यज्ञों के प्रकार छाँटता है और ज्ञान को वह अग्नि कहकर समाप्त होता है जो कर्म को भस्म कर देती है।",
    },
    turn: {
      en: "Arjuna's interruption. He catches a difficulty in what he has just been told and says so, which is the only way the avatāra passage comes to be spoken at all.",
      kn: "ಅರ್ಜುನನ ಅಡ್ಡಮಾತು. ಈಗಷ್ಟೇ ಕೇಳಿದ್ದರಲ್ಲಿನ ತೊಡಕನ್ನು ಗುರುತಿಸಿ ಹೇಳುತ್ತಾನೆ — ಅವತಾರದ ಭಾಗ ಹೇಳಲ್ಪಡುವುದೇ ಅದರಿಂದ.",
      hi: "अर्जुन का टोकना। अभी-अभी सुनी बात में वह एक अड़चन पकड़ता है और कह देता है — अवतार-प्रसंग कहा ही इसीलिए जाता है।",
    },
    links: [L("/puranas/vishnu", "The ten avatāras", "ದಶಾವತಾರ", "दशावतार")],
  },
  {
    n: 5,
    key: "karma-sanyasa",
    name: { en: "Giving up action", kn: "ಕರ್ಮಸಂನ್ಯಾಸ", hi: "कर्मसंन्यास" },
    verses: 29,
    lede: {
      en: "Arjuna asks which is better, and is told the question is wrong.",
      kn: "ಯಾವುದು ಮೇಲು ಎಂದು ಅರ್ಜುನ ಕೇಳುತ್ತಾನೆ, ಪ್ರಶ್ನೆಯೇ ತಪ್ಪು ಎಂದು ಉತ್ತರ ಸಿಗುತ್ತದೆ.",
      hi: "अर्जुन पूछता है कौन श्रेष्ठ है, और उत्तर मिलता है कि प्रश्न ही गलत है।",
    },
    argument: {
      en: "Renouncing action and acting without attachment both reach the same place, and the second is easier. The person described here acts constantly and is untouched by it, like a lotus leaf in water — the image the chapter is remembered for.",
      kn: "ಕರ್ಮ ತ್ಯಾಗ ಮತ್ತು ಆಸಕ್ತಿಯಿಲ್ಲದ ಕರ್ಮ — ಎರಡೂ ಒಂದೇ ಕಡೆ ತಲುಪುತ್ತವೆ, ಮತ್ತು ಎರಡನೆಯದು ಸುಲಭ. ಇಲ್ಲಿ ವರ್ಣಿಸಿದ ವ್ಯಕ್ತಿ ನಿರಂತರ ಕರ್ಮ ಮಾಡುತ್ತಾನೆ ಮತ್ತು ಅದರಿಂದ ಅಂಟಿಕೊಳ್ಳುವುದಿಲ್ಲ — ನೀರಿನಲ್ಲಿನ ತಾವರೆ ಎಲೆಯಂತೆ; ಈ ಅಧ್ಯಾಯ ನೆನಪಿನಲ್ಲಿ ಉಳಿಯುವುದು ಆ ಚಿತ್ರದಿಂದ.",
      hi: "कर्म का त्याग और अनासक्त कर्म — दोनों एक ही स्थान पहुँचते हैं, और दूसरा सरल है। यहाँ वर्णित व्यक्ति निरंतर कर्म करता है और उससे लिप्त नहीं होता — जल में कमलपत्र की तरह; यह अध्याय उसी चित्र से याद रहता है।",
    },
    turn: {
      en: "The two paths are collapsed into one. Much of the later commentarial argument between the schools starts from whether that collapse is complete.",
      kn: "ಎರಡು ಮಾರ್ಗಗಳನ್ನು ಒಂದಾಗಿಸಲಾಗುತ್ತದೆ. ಮುಂದಿನ ಭಾಷ್ಯಕಾರರ ನಡುವಿನ ಬಹುಪಾಲು ವಾದ ಆರಂಭವಾಗುವುದು ಆ ಒಂದಾಗಿಸುವಿಕೆ ಪೂರ್ಣವೋ ಅಲ್ಲವೋ ಎಂಬಲ್ಲಿಂದ.",
      hi: "दोनों मार्ग एक कर दिए जाते हैं। आगे के भाष्यकारों का अधिकांश विवाद वहीं से आरंभ होता है कि वह एकीकरण पूर्ण है या नहीं।",
    },
  },
  {
    n: 6,
    key: "dhyana",
    name: { en: "Meditation", kn: "ಧ್ಯಾನ", hi: "ध्यान" },
    verses: 47,
    lede: {
      en: "The practical chapter: where to sit, how much to eat, what to do when the mind will not settle.",
      kn: "ಪ್ರಾಯೋಗಿಕ ಅಧ್ಯಾಯ: ಎಲ್ಲಿ ಕೂರಬೇಕು, ಎಷ್ಟು ತಿನ್ನಬೇಕು, ಮನಸ್ಸು ನಿಲ್ಲದಿದ್ದಾಗ ಏನು ಮಾಡಬೇಕು.",
      hi: "व्यावहारिक अध्याय: कहाँ बैठें, कितना खाएँ, और मन न ठहरे तो क्या करें।",
    },
    argument: {
      en: "A seat neither too high nor too low, food and sleep neither too much nor too little, the mind brought back each time it wanders. The steady mind is likened to a lamp in a place out of the wind. Arjuna objects that the mind is as hard to hold as the wind itself, and is told that it is — and that practice and dispassion do it anyway.",
      kn: "ಅತಿ ಎತ್ತರವೂ ಅಲ್ಲದ ಅತಿ ತಗ್ಗೂ ಅಲ್ಲದ ಆಸನ, ಅತಿಯೂ ಅಲ್ಲದ ಅತಿ ಕಡಿಮೆಯೂ ಅಲ್ಲದ ಆಹಾರ ಮತ್ತು ನಿದ್ರೆ, ಅಲೆದಾಡಿದಾಗಲೆಲ್ಲ ಮರಳಿಸಲ್ಪಡುವ ಮನಸ್ಸು. ಸ್ಥಿರ ಮನಸ್ಸನ್ನು ಗಾಳಿಯಿಲ್ಲದ ಕಡೆಯ ದೀಪಕ್ಕೆ ಹೋಲಿಸಲಾಗಿದೆ. ಮನಸ್ಸನ್ನು ಹಿಡಿಯುವುದು ಗಾಳಿಯನ್ನು ಹಿಡಿಯುವಷ್ಟೇ ಕಷ್ಟ ಎಂದು ಅರ್ಜುನ ಆಕ್ಷೇಪಿಸುತ್ತಾನೆ; ಹೌದು ಎಂದೇ ಉತ್ತರ ಸಿಗುತ್ತದೆ — ಮತ್ತು ಅಭ್ಯಾಸ ಹಾಗೂ ವೈರಾಗ್ಯ ಅದನ್ನು ಮಾಡಿಯೇ ಮಾಡುತ್ತವೆ.",
      hi: "न बहुत ऊँचा न बहुत नीचा आसन, न अधिक न अत्यल्प आहार और निद्रा, और भटकने पर हर बार लौटाया गया मन। स्थिर मन की उपमा वायुरहित स्थान के दीपक से दी गई है। अर्जुन आपत्ति करता है कि मन को थामना वायु को थामने जितना कठिन है, और उत्तर मिलता है कि है — और अभ्यास तथा वैराग्य फिर भी वह कर लेते हैं।",
    },
    turn: {
      en: "Arjuna asks what becomes of somebody who tries and fails, and is told that no effort of this kind is wasted — the clearest reassurance in the book.",
      kn: "ಪ್ರಯತ್ನಿಸಿ ಸೋತವನ ಗತಿ ಏನು ಎಂದು ಅರ್ಜುನ ಕೇಳುತ್ತಾನೆ; ಈ ಬಗೆಯ ಯಾವ ಪ್ರಯತ್ನವೂ ವ್ಯರ್ಥವಾಗುವುದಿಲ್ಲ ಎಂದು ಉತ್ತರ — ಗ್ರಂಥದಲ್ಲಿನ ಅತಿ ಸ್ಪಷ್ಟ ಆಶ್ವಾಸನೆ.",
      hi: "अर्जुन पूछता है कि जो प्रयत्न करके चूक जाए उसका क्या होता है, और उत्तर मिलता है कि इस प्रकार का कोई प्रयत्न व्यर्थ नहीं जाता — पुस्तक का सबसे स्पष्ट आश्वासन।",
    },
    links: [L("/practice", "Everyday Vedanta", "ನಿತ್ಯ ವೇದಾಂತ", "रोज़मर्रा वेदांत")],
  },
  {
    n: 7,
    key: "jnana-vijnana",
    name: { en: "Knowing and knowing fully", kn: "ಜ್ಞಾನವಿಜ್ಞಾನ", hi: "ज्ञानविज्ञान" },
    verses: 30,
    lede: {
      en: "Where the book stops arguing and starts describing who is speaking.",
      kn: "ಗ್ರಂಥ ವಾದಿಸುವುದನ್ನು ನಿಲ್ಲಿಸಿ, ಮಾತನಾಡುತ್ತಿರುವವನು ಯಾರೆಂದು ವರ್ಣಿಸಲು ತೊಡಗುವ ಕಡೆ.",
      hi: "जहाँ पुस्तक तर्क करना छोड़कर यह वर्णन करने लगती है कि बोल कौन रहा है।",
    },
    argument: {
      en: "Two natures are distinguished, a lower one of the elements and mind and a higher one that holds the world up. Four kinds of people are said to turn to God — those in trouble, those who want to know, those who want something, and those who already know — and the last is called the dearest, with the others not dismissed.",
      kn: "ಎರಡು ಪ್ರಕೃತಿಗಳನ್ನು ಬೇರ್ಪಡಿಸಲಾಗುತ್ತದೆ — ಭೂತ ಮತ್ತು ಮನಸ್ಸಿನ ಅಪರಾ, ಮತ್ತು ಜಗತ್ತನ್ನು ಹೊತ್ತಿರುವ ಪರಾ. ನಾಲ್ಕು ಬಗೆಯವರು ದೇವರ ಕಡೆ ತಿರುಗುತ್ತಾರೆ ಎನ್ನಲಾಗಿದೆ — ಕಷ್ಟದಲ್ಲಿರುವವರು, ತಿಳಿಯಬಯಸುವವರು, ಏನನ್ನೋ ಬಯಸುವವರು, ಮತ್ತು ಈಗಾಗಲೇ ತಿಳಿದವರು — ಕೊನೆಯವನನ್ನು ಅತಿ ಪ್ರಿಯನೆಂದು ಕರೆಯಲಾಗಿದೆ, ಉಳಿದವರನ್ನು ತಳ್ಳಿಹಾಕದೆ.",
      hi: "दो प्रकृतियाँ अलग की जाती हैं — भूतों और मन की अपरा, और जगत् को धारण करने वाली परा। चार प्रकार के लोग ईश्वर की ओर मुड़ते हैं कहा गया है — दुःखी, जिज्ञासु, अर्थार्थी, और ज्ञानी — और अंतिम को सबसे प्रिय कहा गया है, शेष को नकारे बिना।",
    },
    turn: {
      en: "The list of four. It is the book's most generous sentence about motive: wanting something is still a way of turning up.",
      kn: "ಆ ನಾಲ್ಕರ ಪಟ್ಟಿ. ಉದ್ದೇಶದ ಬಗ್ಗೆ ಗ್ರಂಥದ ಅತಿ ಉದಾರ ವಾಕ್ಯ ಅದೇ: ಏನನ್ನೋ ಬಯಸುವುದೂ ಬರುವ ಒಂದು ದಾರಿಯೇ.",
      hi: "उन चार की सूची। मंशा के विषय में पुस्तक का सबसे उदार वाक्य वही है: कुछ चाहना भी आने का एक ढंग है।",
    },
  },
  {
    n: 8,
    key: "akshara-brahma",
    name: { en: "The imperishable", kn: "ಅಕ್ಷರಬ್ರಹ್ಮ", hi: "अक्षरब्रह्म" },
    verses: 28,
    lede: {
      en: "The hour of death, and the two roads the dead are said to take.",
      kn: "ಮರಣದ ಗಳಿಗೆ, ಮತ್ತು ಸತ್ತವರು ಹಿಡಿಯುತ್ತಾರೆಂದು ಹೇಳಲಾದ ಎರಡು ದಾರಿಗಳು.",
      hi: "मृत्यु की घड़ी, और मृतकों के बताए गए दो मार्ग।",
    },
    argument: {
      en: "Arjuna asks a series of short definitional questions and gets short answers. The chapter then says that what a person is holding in mind at the end carries them, and sets out the two paths — one of light from which there is no return, one of smoke from which there is.",
      kn: "ಅರ್ಜುನ ಸಾಲಾಗಿ ಚಿಕ್ಕ ವ್ಯಾಖ್ಯಾನ ಪ್ರಶ್ನೆಗಳನ್ನು ಕೇಳುತ್ತಾನೆ, ಚಿಕ್ಕ ಉತ್ತರಗಳು ಸಿಗುತ್ತವೆ. ನಂತರ ಅಧ್ಯಾಯ ಹೇಳುತ್ತದೆ: ಕೊನೆಯ ಗಳಿಗೆಯಲ್ಲಿ ಮನಸ್ಸಿನಲ್ಲಿ ಹಿಡಿದಿದ್ದೇ ಒಯ್ಯುತ್ತದೆ; ಮತ್ತು ಎರಡು ದಾರಿಗಳನ್ನು ನಿರೂಪಿಸುತ್ತದೆ — ಮರಳಿ ಬರುವಿಕೆ ಇಲ್ಲದ ಬೆಳಕಿನದ್ದು, ಮತ್ತು ಮರಳಿ ಬರುವಿಕೆ ಇರುವ ಹೊಗೆಯದ್ದು.",
      hi: "अर्जुन कई छोटे परिभाषात्मक प्रश्न पूछता है और छोटे उत्तर पाता है। फिर अध्याय कहता है कि अंत समय मन में जो धारण है वही ले जाता है; और दो मार्ग बताता है — प्रकाश का, जिससे लौटना नहीं, और धूम का, जिससे लौटना है।",
    },
    turn: {
      en: "The two roads, which the Upaniṣads had already set out. This is one of the clearest places where the Gītā is visibly building on them rather than starting fresh.",
      kn: "ಆ ಎರಡು ದಾರಿಗಳು — ಉಪನಿಷತ್ತುಗಳು ಈಗಾಗಲೇ ನಿರೂಪಿಸಿದ್ದವು. ಗೀತೆ ಹೊಸದಾಗಿ ಆರಂಭಿಸದೆ ಅವುಗಳ ಮೇಲೆ ಕಟ್ಟುತ್ತಿದೆ ಎಂಬುದು ಕಾಣುವ ಅತಿ ಸ್ಪಷ್ಟ ಸ್ಥಳಗಳಲ್ಲಿ ಇದೊಂದು.",
      hi: "वे दो मार्ग, जिन्हें उपनिषद् पहले ही बता चुके थे। गीता नया आरंभ न कर उन्हीं पर निर्माण कर रही है, यह दिखने वाले सबसे स्पष्ट स्थानों में एक यही है।",
    },
    links: [L("/upanishads", "The Upaniṣads", "ಉಪನಿಷತ್ತುಗಳು", "उपनिषद्")],
  },
  {
    n: 9,
    key: "raja-vidya",
    name: { en: "The sovereign knowledge", kn: "ರಾಜವಿದ್ಯಾ", hi: "राजविद्या" },
    verses: 34,
    lede: {
      en: "The most generous chapter in the book, and the one the devotional traditions stand on.",
      kn: "ಗ್ರಂಥದ ಅತಿ ಉದಾರ ಅಧ್ಯಾಯ, ಮತ್ತು ಭಕ್ತಿ ಪರಂಪರೆಗಳು ನಿಂತಿರುವುದು ಇದರ ಮೇಲೆ.",
      hi: "पुस्तक का सबसे उदार अध्याय, और जिस पर भक्ति-परंपराएँ खड़ी हैं।",
    },
    argument: {
      en: "The teaching is called a secret and then given away. What is offered in devotion is accepted whatever it is, a leaf or water will do, and nobody is excluded by birth or by past conduct. The chapter also says that God is equal towards all beings and yet present in those who turn.",
      kn: "ಬೋಧನೆಯನ್ನು ರಹಸ್ಯವೆಂದು ಕರೆದು ಆಮೇಲೆ ಕೊಟ್ಟುಬಿಡಲಾಗುತ್ತದೆ. ಭಕ್ತಿಯಿಂದ ಅರ್ಪಿಸಿದ್ದು ಏನೇ ಇರಲಿ ಸ್ವೀಕೃತ — ಒಂದು ಎಲೆ ಅಥವಾ ನೀರು ಸಾಕು — ಮತ್ತು ಹುಟ್ಟಿನಿಂದಾಗಲಿ ಹಿಂದಿನ ನಡತೆಯಿಂದಾಗಲಿ ಯಾರನ್ನೂ ಹೊರಗಿಡುವುದಿಲ್ಲ. ದೇವರು ಎಲ್ಲ ಜೀವಿಗಳಿಗೂ ಸಮಾನ, ಆದರೂ ತಿರುಗುವವರಲ್ಲಿ ಇದ್ದಾನೆ ಎಂದೂ ಅಧ್ಯಾಯ ಹೇಳುತ್ತದೆ.",
      hi: "उपदेश को रहस्य कहकर फिर दे दिया जाता है। भक्ति से जो अर्पित हो वह जो भी हो, स्वीकार है — एक पत्र या जल पर्याप्त — और जन्म या पूर्व आचरण से कोई बाहर नहीं। अध्याय यह भी कहता है कि ईश्वर सब प्राणियों के प्रति समान है, और फिर भी जो मुड़ते हैं उनमें उपस्थित।",
    },
    turn: {
      en: "The leaf and the water. One line removes cost as a condition of approach, and a great deal of later devotional practice follows from it.",
      kn: "ಎಲೆ ಮತ್ತು ನೀರು. ಒಂದೇ ಸಾಲು ಸಮೀಪಿಸುವಿಕೆಗೆ ಬೆಲೆಯ ಷರತ್ತನ್ನು ತೆಗೆದುಹಾಕುತ್ತದೆ, ಮತ್ತು ಮುಂದಿನ ಬಹುಪಾಲು ಭಕ್ತಿ ಆಚರಣೆ ಅದರಿಂದಲೇ ಬರುತ್ತದೆ.",
      hi: "पत्र और जल। एक पंक्ति पहुँच की शर्त से मूल्य हटा देती है, और आगे की बहुत-सी भक्ति-साधना उसी से निकलती है।",
    },
    links: [L("/concepts/bhakti", "Bhakti", "ಭಕ್ತಿ", "भक्ति")],
  },
  {
    n: 10,
    key: "vibhuti",
    name: { en: "The glories", kn: "ವಿಭೂತಿ", hi: "विभूति" },
    verses: 42,
    lede: {
      en: "A long list of the best of each kind, each one said to be him.",
      kn: "ಪ್ರತಿ ಬಗೆಯಲ್ಲಿ ಶ್ರೇಷ್ಠವಾದದ್ದರ ದೀರ್ಘ ಪಟ್ಟಿ — ಪ್ರತಿಯೊಂದೂ ತಾನೇ ಎಂದು ಹೇಳಲಾಗಿದೆ.",
      hi: "हर वर्ग में श्रेष्ठ की लंबी सूची — हर एक को वही कहा गया है।",
    },
    argument: {
      en: "Arjuna asks how to think of God while going about the world, and gets an answer built as a catalogue: among mountains, among rivers, among trees, among weapons, among the senses — in each case the foremost. The list is long and ends by saying it could go on, and that a single fragment of him holds the whole world.",
      kn: "ಜಗತ್ತಿನಲ್ಲಿ ನಡೆಯುತ್ತ ದೇವರನ್ನು ಹೇಗೆ ನೆನೆಯಬೇಕೆಂದು ಅರ್ಜುನ ಕೇಳುತ್ತಾನೆ; ಉತ್ತರ ಒಂದು ಪಟ್ಟಿಯಾಗಿ ಕಟ್ಟಲ್ಪಟ್ಟಿದೆ: ಪರ್ವತಗಳಲ್ಲಿ, ನದಿಗಳಲ್ಲಿ, ಮರಗಳಲ್ಲಿ, ಆಯುಧಗಳಲ್ಲಿ, ಇಂದ್ರಿಯಗಳಲ್ಲಿ — ಪ್ರತಿ ಬಾರಿಯೂ ಮುಂಚೂಣಿಯದು. ಪಟ್ಟಿ ದೀರ್ಘ, ಮತ್ತು ಇದು ಮುಂದುವರಿಯಬಹುದೆಂದೂ ತನ್ನ ಒಂದೇ ಅಂಶ ಇಡೀ ಜಗತ್ತನ್ನು ಹಿಡಿದಿದೆಯೆಂದೂ ಹೇಳಿ ಮುಗಿಯುತ್ತದೆ.",
      hi: "अर्जुन पूछता है कि संसार में चलते हुए ईश्वर का स्मरण कैसे करें, और उत्तर एक सूची के रूप में मिलता है: पर्वतों में, नदियों में, वृक्षों में, शस्त्रों में, इंद्रियों में — हर बार अग्रणी। सूची लंबी है और यह कहकर समाप्त होती है कि यह चलती रह सकती है, और उनका एक अंश ही पूरे जगत् को धारण किए है।",
    },
    turn: {
      en: "The catalogue form itself. It makes the teaching portable: anything a person is looking at can be the thing they are looking through.",
      kn: "ಪಟ್ಟಿಯ ರೂಪವೇ. ಅದು ಬೋಧನೆಯನ್ನು ಜೊತೆಗೊಯ್ಯುವಂತೆ ಮಾಡುತ್ತದೆ: ನೋಡುತ್ತಿರುವ ಯಾವುದೂ ಅದರ ಮೂಲಕ ನೋಡುವ ವಸ್ತುವಾಗಬಲ್ಲದು.",
      hi: "सूची का रूप ही। वह उपदेश को साथ ले चलने योग्य बनाता है: जिसे भी देख रहे हों वही वह बन सकता है जिसके भीतर से देखा जाए।",
    },
  },
  {
    n: 11,
    key: "vishvarupa-darshana",
    name: { en: "The vision", kn: "ವಿಶ್ವರೂಪದರ್ಶನ", hi: "विश्वरूपदर्शन" },
    verses: 55,
    lede: {
      en: "Arjuna asks to see, is given sight to see with, and almost immediately asks for it to stop.",
      kn: "ನೋಡಬೇಕೆಂದು ಅರ್ಜುನ ಕೇಳುತ್ತಾನೆ, ನೋಡಲು ಬೇಕಾದ ಕಣ್ಣು ಸಿಗುತ್ತದೆ, ಮತ್ತು ಬಹುತೇಕ ತಕ್ಷಣವೇ ನಿಲ್ಲಿಸುವಂತೆ ಕೇಳುತ್ತಾನೆ.",
      hi: "अर्जुन देखने को कहता है, देखने की दृष्टि पाता है, और लगभग तुरंत रोक देने की प्रार्थना करता है।",
    },
    argument: {
      en: "The form shown has no edges — mouths, eyes and arms without number, every being running into it. Arjuna's reaction moves from wonder to terror within a few verses, and he ends by apologising for every time he treated Krishna casually as a friend. The form is withdrawn and the familiar one returns.",
      kn: "ತೋರಿಸಲಾದ ರೂಪಕ್ಕೆ ಅಂಚುಗಳಿಲ್ಲ — ಲೆಕ್ಕವಿಲ್ಲದ ಬಾಯಿ, ಕಣ್ಣು, ತೋಳುಗಳು; ಎಲ್ಲ ಜೀವಿಗಳೂ ಅದರೊಳಗೆ ಓಡುತ್ತಿವೆ. ಕೆಲವೇ ಶ್ಲೋಕಗಳಲ್ಲಿ ಅರ್ಜುನನ ಪ್ರತಿಕ್ರಿಯೆ ವಿಸ್ಮಯದಿಂದ ಭೀತಿಗೆ ಸರಿಯುತ್ತದೆ, ಮತ್ತು ಕೃಷ್ಣನನ್ನು ಗೆಳೆಯನೆಂದು ಹಗುರವಾಗಿ ನಡೆಸಿಕೊಂಡ ಪ್ರತಿ ಸಲಕ್ಕೂ ಕ್ಷಮೆ ಕೇಳಿ ಮುಗಿಸುತ್ತಾನೆ. ರೂಪ ಹಿಂತೆಗೆಯಲ್ಪಟ್ಟು ಪರಿಚಿತ ರೂಪ ಮರಳುತ್ತದೆ.",
      hi: "दिखाए गए रूप की कोई सीमा नहीं — अनगिनत मुख, नेत्र और भुजाएँ, हर प्राणी उसी में दौड़ता हुआ। कुछ ही श्लोकों में अर्जुन की प्रतिक्रिया विस्मय से भय तक पहुँचती है, और वह कृष्ण को मित्र मानकर जितनी बार हल्के में लिया उस हर बार के लिए क्षमा माँगते हुए समाप्त करता है। रूप समेट लिया जाता है और परिचित रूप लौटता है।",
    },
    turn: {
      en: "The apology. It is the only place in the book where Arjuna's relationship with Krishna is itself the subject, and it is what makes the vision matter rather than merely impress.",
      kn: "ಆ ಕ್ಷಮಾಯಾಚನೆ. ಗ್ರಂಥದಲ್ಲಿ ಅರ್ಜುನ-ಕೃಷ್ಣ ಸಂಬಂಧವೇ ವಿಷಯವಾಗುವ ಏಕೈಕ ಕಡೆ ಅದು, ಮತ್ತು ದರ್ಶನ ಕೇವಲ ಬೆರಗುಗೊಳಿಸದೆ ಅರ್ಥಪೂರ್ಣವಾಗುವುದೂ ಅದರಿಂದಲೇ.",
      hi: "वह क्षमायाचना। पुस्तक में यही एकमात्र स्थान है जहाँ अर्जुन और कृष्ण का संबंध स्वयं विषय बनता है, और दर्शन केवल चकित न कर सार्थक होता भी इसी से है।",
    },
  },
  {
    n: 12,
    key: "bhakti",
    name: { en: "Devotion", kn: "ಭಕ್ತಿ", hi: "भक्ति" },
    verses: 20,
    lede: {
      en: "The shortest chapter, and it answers a question most of the book has avoided.",
      kn: "ಅತಿ ಚಿಕ್ಕ ಅಧ್ಯಾಯ, ಮತ್ತು ಗ್ರಂಥದ ಬಹುಭಾಗ ತಪ್ಪಿಸಿಕೊಂಡ ಪ್ರಶ್ನೆಗೆ ಇದು ಉತ್ತರಿಸುತ್ತದೆ.",
      hi: "सबसे छोटा अध्याय, और यह उस प्रश्न का उत्तर देता है जिसे पुस्तक का अधिकांश टालता रहा।",
    },
    argument: {
      en: "Arjuna asks outright which is better, worshipping the form or the formless. He is told the formless is harder for embodied beings, and then given a descending ladder of what to do if the first thing is beyond you — and if that is too, then this, and if that too, then simply give up the fruit of what you do.",
      kn: "ರೂಪವನ್ನು ಪೂಜಿಸುವುದೋ ನಿರಾಕಾರವನ್ನೋ — ಯಾವುದು ಮೇಲು ಎಂದು ಅರ್ಜುನ ನೇರವಾಗಿ ಕೇಳುತ್ತಾನೆ. ದೇಹಧಾರಿಗಳಿಗೆ ನಿರಾಕಾರ ಕಷ್ಟ ಎಂದು ಹೇಳಿ, ಮೊದಲನೆಯದು ಕೈಗೆಟುಕದಿದ್ದರೆ ಏನು ಮಾಡಬೇಕೆಂಬ ಇಳಿಯುವ ಏಣಿ ಕೊಡಲಾಗುತ್ತದೆ — ಅದೂ ಆಗದಿದ್ದರೆ ಇದು, ಅದೂ ಆಗದಿದ್ದರೆ ಮಾಡುವುದರ ಫಲವನ್ನು ಬಿಟ್ಟುಬಿಡು.",
      hi: "अर्जुन सीधे पूछता है कि श्रेष्ठ क्या है — सगुण की उपासना या निर्गुण की। उत्तर मिलता है कि देहधारियों के लिए निर्गुण कठिन है, और फिर उतरती हुई एक सीढ़ी दी जाती है कि पहला न सधे तो क्या करें — वह भी न सधे तो यह, और वह भी नहीं तो जो करते हो उसका फल छोड़ दो।",
    },
    turn: {
      en: "The ladder downwards. Almost nothing else in the literature is so explicit that a lesser practice is still a practice.",
      kn: "ಆ ಇಳಿಯುವ ಏಣಿ. ಕಡಿಮೆ ಸಾಧನೆಯೂ ಸಾಧನೆಯೇ ಎಂದು ಇಷ್ಟು ಸ್ಪಷ್ಟವಾಗಿ ಹೇಳುವುದು ಈ ಸಾಹಿತ್ಯದಲ್ಲಿ ಬೇರೆ ಬಹುತೇಕ ಇಲ್ಲ.",
      hi: "वह उतरती सीढ़ी। कम साधना भी साधना है, यह इतनी स्पष्टता से कहने वाला कुछ और इस साहित्य में प्रायः नहीं।",
    },
  },
  {
    n: 13,
    key: "kshetra-kshetrajna",
    name: { en: "The field and its knower", kn: "ಕ್ಷೇತ್ರಕ್ಷೇತ್ರಜ್ಞ", hi: "क्षेत्रक्षेत्रज्ञ" },
    verses: 35,
    lede: {
      en: "The body is called a field, and what knows it is called something else.",
      kn: "ದೇಹವನ್ನು ಕ್ಷೇತ್ರ ಎನ್ನಲಾಗಿದೆ, ಮತ್ತು ಅದನ್ನು ಅರಿಯುವುದನ್ನು ಬೇರೆ ಹೆಸರಿನಿಂದ.",
      hi: "देह को क्षेत्र कहा गया है, और जो उसे जानता है उसे कुछ और।",
    },
    argument: {
      en: "The distinction is drawn carefully: the field is listed out — elements, senses, mind, desire, aversion, pleasure, pain — and the knower is whatever is aware of all of it and is not on the list. What follows is a description of knowledge as a set of dispositions rather than a set of facts: humility, patience, steadiness, absence of display.",
      kn: "ಭೇದವನ್ನು ಎಚ್ಚರದಿಂದ ಎಳೆಯಲಾಗಿದೆ: ಕ್ಷೇತ್ರವನ್ನು ಪಟ್ಟಿ ಮಾಡಲಾಗಿದೆ — ಭೂತಗಳು, ಇಂದ್ರಿಯಗಳು, ಮನಸ್ಸು, ಇಚ್ಛೆ, ದ್ವೇಷ, ಸುಖ, ದುಃಖ — ಮತ್ತು ಕ್ಷೇತ್ರಜ್ಞನೆಂದರೆ ಇವೆಲ್ಲವನ್ನೂ ಅರಿಯುತ್ತಿರುವುದು, ಪಟ್ಟಿಯಲ್ಲಿ ಇಲ್ಲದ್ದು. ನಂತರ ಜ್ಞಾನವನ್ನು ಸಂಗತಿಗಳ ಗುಂಪಾಗಿ ಅಲ್ಲ, ಗುಣಗಳ ಗುಂಪಾಗಿ ವರ್ಣಿಸಲಾಗುತ್ತದೆ: ವಿನಯ, ತಾಳ್ಮೆ, ಸ್ಥಿರತೆ, ಪ್ರದರ್ಶನವಿಲ್ಲದಿರುವಿಕೆ.",
      hi: "भेद सावधानी से खींचा गया है: क्षेत्र गिनाया जाता है — भूत, इंद्रियाँ, मन, इच्छा, द्वेष, सुख, दुःख — और क्षेत्रज्ञ वह है जो इन सबको जानता है और सूची में नहीं है। इसके बाद ज्ञान का वर्णन तथ्यों के समूह के रूप में नहीं, वृत्तियों के समूह के रूप में होता है: विनय, धैर्य, स्थिरता, अप्रदर्शन।",
    },
    turn: {
      en: "Knowledge is defined as a way of being rather than a quantity of information, which is a different claim from the one the word usually carries.",
      kn: "ಜ್ಞಾನವನ್ನು ಮಾಹಿತಿಯ ಪ್ರಮಾಣವೆಂದಲ್ಲ, ಇರುವ ರೀತಿಯೆಂದು ವ್ಯಾಖ್ಯಾನಿಸಲಾಗಿದೆ — ಆ ಪದ ಸಾಮಾನ್ಯವಾಗಿ ಹೊರುವ ಅರ್ಥಕ್ಕಿಂತ ಬೇರೆ ಹೇಳಿಕೆ ಅದು.",
      hi: "ज्ञान को सूचना की मात्रा नहीं, होने का ढंग कहकर परिभाषित किया गया है — जो उस शब्द के सामान्य अर्थ से भिन्न दावा है।",
    },
    note: {
      en: "This is the chapter the famous total of seven hundred turns on. Some recensions open it with Arjuna's question and count thirty-five verses; others begin with Krishna's answer and count thirty-four. Thirty-four is what gives the round seven hundred. This site counts thirty-five, which is why its chapters add up to one more.",
      kn: "ಏಳುನೂರು ಎಂಬ ಪ್ರಸಿದ್ಧ ಒಟ್ಟು ಸಂಖ್ಯೆ ನಿಲ್ಲುವುದು ಈ ಅಧ್ಯಾಯದ ಮೇಲೆ. ಕೆಲವು ಪಾಠಾಂತರಗಳು ಇದನ್ನು ಅರ್ಜುನನ ಪ್ರಶ್ನೆಯಿಂದ ಆರಂಭಿಸಿ ಮೂವತ್ತೈದು ಶ್ಲೋಕ ಎಣಿಸುತ್ತವೆ; ಬೇರೆ ಕೆಲವು ಕೃಷ್ಣನ ಉತ್ತರದಿಂದ ಆರಂಭಿಸಿ ಮೂವತ್ತನಾಲ್ಕು. ದುಂಡಾದ ಏಳುನೂರು ಬರುವುದು ಮೂವತ್ತನಾಲ್ಕರಿಂದ. ಈ ತಾಣ ಮೂವತ್ತೈದು ಎಣಿಸುತ್ತದೆ — ಆದ್ದರಿಂದಲೇ ಇದರ ಅಧ್ಯಾಯಗಳ ಮೊತ್ತ ಒಂದು ಹೆಚ್ಚು.",
      hi: "सात सौ का प्रसिद्ध योग इसी अध्याय पर टिका है। कुछ पाठ इसे अर्जुन के प्रश्न से आरंभ कर पैंतीस श्लोक गिनते हैं; कुछ कृष्ण के उत्तर से आरंभ कर चौंतीस। गोल सात सौ चौंतीस से बनता है। यह साइट पैंतीस गिनती है — इसीलिए इसके अध्यायों का योग एक अधिक है।",
    },
  },
  {
    n: 14,
    key: "gunatraya-vibhaga",
    name: { en: "The three strands", kn: "ಗುಣತ್ರಯವಿಭಾಗ", hi: "गुणत्रयविभाग" },
    verses: 27,
    lede: {
      en: "Everything made is woven from three, and a person is a changing mixture of them.",
      kn: "ಮಾಡಲ್ಪಟ್ಟ ಎಲ್ಲವೂ ಮೂರರಿಂದ ಹೆಣೆಯಲ್ಪಟ್ಟಿದೆ, ಮತ್ತು ವ್ಯಕ್ತಿ ಅವುಗಳ ಬದಲಾಗುತ್ತಿರುವ ಮಿಶ್ರಣ.",
      hi: "रचा हुआ सब कुछ तीन से बुना है, और व्यक्ति उन्हीं का बदलता मिश्रण है।",
    },
    argument: {
      en: "Sattva binds by pleasure and knowledge, rajas by craving and activity, tamas by inattention and sleep — and binding is the point: all three bind, including the good one. Arjuna asks how to recognise somebody who has got past all three, and the answer is given in behaviour rather than in belief.",
      kn: "ಸತ್ತ್ವ ಸುಖ ಮತ್ತು ಜ್ಞಾನದಿಂದ ಕಟ್ಟುತ್ತದೆ, ರಜಸ್ ಆಸೆ ಮತ್ತು ಚಟುವಟಿಕೆಯಿಂದ, ತಮಸ್ ಅಜಾಗ್ರತೆ ಮತ್ತು ನಿದ್ರೆಯಿಂದ — ಮತ್ತು ಕಟ್ಟುವುದೇ ಮುಖ್ಯ ಅಂಶ: ಮೂರೂ ಕಟ್ಟುತ್ತವೆ, ಒಳ್ಳೆಯದೂ ಸೇರಿ. ಮೂರನ್ನೂ ದಾಟಿದವನನ್ನು ಹೇಗೆ ಗುರುತಿಸುವುದೆಂದು ಅರ್ಜುನ ಕೇಳುತ್ತಾನೆ, ಮತ್ತು ಉತ್ತರ ನಂಬಿಕೆಯಲ್ಲಲ್ಲ, ನಡವಳಿಕೆಯಲ್ಲಿ ಕೊಡಲಾಗಿದೆ.",
      hi: "सत्त्व सुख और ज्ञान से बाँधता है, रजस् तृष्णा और क्रिया से, तमस् प्रमाद और निद्रा से — और बाँधना ही मुख्य बात है: तीनों बाँधते हैं, अच्छा भी। अर्जुन पूछता है कि तीनों से पार गए को कैसे पहचानें, और उत्तर मान्यता में नहीं, आचरण में दिया जाता है।",
    },
    turn: {
      en: "That sattva binds too. It stops the three being a moral ranking, which is how they are almost always summarised.",
      kn: "ಸತ್ತ್ವವೂ ಕಟ್ಟುತ್ತದೆ ಎಂಬುದು. ಆ ಮೂರು ನೈತಿಕ ಶ್ರೇಣಿಯಾಗುವುದನ್ನು ಅದು ತಡೆಯುತ್ತದೆ — ಬಹುತೇಕ ಸದಾ ಅವನ್ನು ಹಾಗೆಯೇ ಸಾರಾಂಶಿಸಲಾಗುತ್ತದೆ.",
      hi: "कि सत्त्व भी बाँधता है। यही बात उन तीनों को नैतिक श्रेणी बनने से रोकती है, जबकि उनका सार प्रायः वैसे ही दिया जाता है।",
    },
    links: [L("/concepts/guna", "Guṇa", "ಗುಣ", "गुण")],
  },
  {
    n: 15,
    key: "purushottama",
    name: { en: "The supreme person", kn: "ಪುರುಷೋತ್ತಮ", hi: "पुरुषोत्तम" },
    verses: 20,
    lede: {
      en: "It opens with a tree growing the wrong way up.",
      kn: "ತಲೆಕೆಳಗಾಗಿ ಬೆಳೆಯುವ ಒಂದು ಮರದಿಂದ ಇದು ಆರಂಭವಾಗುತ್ತದೆ.",
      hi: "यह उलटे उगते एक वृक्ष से आरंभ होता है।",
    },
    argument: {
      en: "The world is figured as an aśvattha with its roots above and its branches below, and the instruction is to cut it with detachment — not to admire it. The chapter then distinguishes the perishable, the imperishable and the one beyond both, and this third is where its title comes from.",
      kn: "ಜಗತ್ತನ್ನು ಬೇರು ಮೇಲೆ ಕೊಂಬೆ ಕೆಳಗೆ ಇರುವ ಅಶ್ವತ್ಥವಾಗಿ ಚಿತ್ರಿಸಲಾಗಿದೆ, ಮತ್ತು ಸೂಚನೆ ಅದನ್ನು ವೈರಾಗ್ಯದಿಂದ ಕಡಿಯುವುದು — ಮೆಚ್ಚುವುದಲ್ಲ. ನಂತರ ಅಧ್ಯಾಯ ಕ್ಷರ, ಅಕ್ಷರ ಮತ್ತು ಇವೆರಡನ್ನೂ ಮೀರಿದ್ದನ್ನು ಬೇರ್ಪಡಿಸುತ್ತದೆ; ಈ ಮೂರನೆಯದರಿಂದಲೇ ಅದರ ಹೆಸರು.",
      hi: "जगत् को ऐसे अश्वत्थ के रूप में चित्रित किया गया है जिसकी जड़ें ऊपर और शाखाएँ नीचे हैं, और निर्देश है उसे वैराग्य से काटना — सराहना नहीं। फिर अध्याय क्षर, अक्षर और इन दोनों से परे को अलग करता है; उसी तीसरे से उसका नाम है।",
    },
    turn: {
      en: "The instruction to cut. A reader expecting the image to be admired finds it is being handed an axe.",
      kn: "ಕಡಿಯಬೇಕೆಂಬ ಸೂಚನೆ. ಚಿತ್ರವನ್ನು ಮೆಚ್ಚಬೇಕೆಂದು ನಿರೀಕ್ಷಿಸಿದ ಓದುಗನಿಗೆ ಕೊಡಲಾಗುತ್ತಿರುವುದು ಕೊಡಲಿ.",
      hi: "काटने का निर्देश। जो पाठक चित्र की सराहना की अपेक्षा रखता है उसे कुल्हाड़ी थमाई जाती है।",
    },
  },
  {
    n: 16,
    key: "daivasura-sampad",
    name: { en: "Two kinds of nature", kn: "ದೈವಾಸುರಸಂಪದ್", hi: "दैवासुरसंपद्" },
    verses: 24,
    lede: {
      en: "Two lists of qualities, and a long portrait of the second kind.",
      kn: "ಗುಣಗಳ ಎರಡು ಪಟ್ಟಿ, ಮತ್ತು ಎರಡನೇ ಬಗೆಯ ದೀರ್ಘ ಚಿತ್ರ.",
      hi: "गुणों की दो सूचियाँ, और दूसरे प्रकार का लंबा चित्र।",
    },
    argument: {
      en: "The first list is short and the second long, which is itself telling: the chapter spends most of its length describing the person who thinks the world has no moral order, takes himself to be self-made, and works from appetite. Three gates are named at the end, and shutting them is the instruction.",
      kn: "ಮೊದಲ ಪಟ್ಟಿ ಚಿಕ್ಕದು, ಎರಡನೆಯದು ದೀರ್ಘ — ಅದೇ ಸೂಚಕ: ಜಗತ್ತಿಗೆ ನೈತಿಕ ಕ್ರಮವಿಲ್ಲವೆಂದು ಭಾವಿಸುವ, ತಾನೇ ತನ್ನನ್ನು ಮಾಡಿಕೊಂಡೆನೆಂದು ತಿಳಿಯುವ, ಹಸಿವಿನಿಂದ ನಡೆಯುವ ವ್ಯಕ್ತಿಯನ್ನು ವರ್ಣಿಸುವುದರಲ್ಲೇ ಅಧ್ಯಾಯ ತನ್ನ ಬಹುಭಾಗ ಕಳೆಯುತ್ತದೆ. ಕೊನೆಯಲ್ಲಿ ಮೂರು ಬಾಗಿಲುಗಳನ್ನು ಹೆಸರಿಸಲಾಗಿದೆ, ಮತ್ತು ಅವನ್ನು ಮುಚ್ಚುವುದೇ ಸೂಚನೆ.",
      hi: "पहली सूची छोटी है और दूसरी लंबी, और यही सूचक है: अध्याय अपनी अधिकांश लंबाई उस व्यक्ति के वर्णन में लगाता है जो मानता है कि जगत् में कोई नैतिक क्रम नहीं, स्वयं को स्वयंनिर्मित समझता है, और भूख से चलता है। अंत में तीन द्वार गिनाए जाते हैं, और उन्हें बंद करना ही निर्देश है।",
    },
    turn: {
      en: "The shutting of the three gates. After several chapters of metaphysics the instruction becomes short and practical again.",
      kn: "ಆ ಮೂರು ಬಾಗಿಲು ಮುಚ್ಚುವಿಕೆ. ಹಲವು ಅಧ್ಯಾಯಗಳ ತತ್ತ್ವದ ನಂತರ ಸೂಚನೆ ಮತ್ತೆ ಚಿಕ್ಕದೂ ಪ್ರಾಯೋಗಿಕವೂ ಆಗುತ್ತದೆ.",
      hi: "उन तीन द्वारों का बंद करना। कई अध्यायों के तत्त्व के बाद निर्देश फिर छोटा और व्यावहारिक हो जाता है।",
    },
  },
  {
    n: 17,
    key: "shraddhatraya-vibhaga",
    name: { en: "Three kinds of faith", kn: "ಶ್ರದ್ಧಾತ್ರಯವಿಭಾಗ", hi: "श्रद्धात्रयविभाग" },
    verses: 28,
    lede: {
      en: "Food, sacrifice, austerity and giving, each sorted three ways.",
      kn: "ಆಹಾರ, ಯಜ್ಞ, ತಪಸ್ಸು ಮತ್ತು ದಾನ — ಪ್ರತಿಯೊಂದನ್ನೂ ಮೂರಾಗಿ ವಿಂಗಡಿಸಲಾಗಿದೆ.",
      hi: "आहार, यज्ञ, तप और दान — हर एक तीन में छाँटा गया।",
    },
    argument: {
      en: "Arjuna asks about people who have faith but do not follow the rules, and the answer turns on what kind of faith it is. The chapter then applies the three strands to ordinary things — what is eaten, what is given, what is undertaken — and sorts each. Giving is sorted by when, where and to whom, not by how much.",
      kn: "ಶ್ರದ್ಧೆ ಇದ್ದೂ ವಿಧಿ ಪಾಲಿಸದವರ ಬಗ್ಗೆ ಅರ್ಜುನ ಕೇಳುತ್ತಾನೆ, ಮತ್ತು ಉತ್ತರ ಅದು ಯಾವ ಬಗೆಯ ಶ್ರದ್ಧೆ ಎಂಬುದರ ಮೇಲೆ ನಿಲ್ಲುತ್ತದೆ. ನಂತರ ಅಧ್ಯಾಯ ಮೂರು ಗುಣಗಳನ್ನು ಸಾಮಾನ್ಯ ವಿಷಯಗಳಿಗೆ ಅನ್ವಯಿಸುತ್ತದೆ — ಏನು ತಿನ್ನುತ್ತಾರೆ, ಏನು ಕೊಡುತ್ತಾರೆ, ಏನು ಕೈಗೊಳ್ಳುತ್ತಾರೆ — ಮತ್ತು ಪ್ರತಿಯೊಂದನ್ನೂ ವಿಂಗಡಿಸುತ್ತದೆ. ದಾನವನ್ನು ಎಷ್ಟು ಎಂಬುದರಿಂದಲ್ಲ, ಯಾವಾಗ, ಎಲ್ಲಿ, ಯಾರಿಗೆ ಎಂಬುದರಿಂದ ವಿಂಗಡಿಸಲಾಗಿದೆ.",
      hi: "अर्जुन उन लोगों के विषय में पूछता है जिनमें श्रद्धा है पर विधि का पालन नहीं, और उत्तर इस पर टिकता है कि वह किस प्रकार की श्रद्धा है। फिर अध्याय तीनों गुणों को साधारण वस्तुओं पर लागू करता है — क्या खाया जाता है, क्या दिया जाता है, क्या उठाया जाता है — और हर एक को छाँटता है। दान कितना है इससे नहीं, कब, कहाँ और किसे दिया गया इससे छाँटा जाता है।",
    },
    turn: {
      en: "The claim that a person is made of their faith. It makes the chapter's sorting descriptive rather than prescriptive: you can see which way you lean without being told to be otherwise.",
      kn: "ವ್ಯಕ್ತಿ ತನ್ನ ಶ್ರದ್ಧೆಯಿಂದಲೇ ಆಗಿದ್ದಾನೆ ಎಂಬ ಹೇಳಿಕೆ. ಅದು ಈ ಅಧ್ಯಾಯದ ವಿಂಗಡಣೆಯನ್ನು ವಿಧಿಸುವುದಲ್ಲ, ವರ್ಣಿಸುವುದನ್ನಾಗಿ ಮಾಡುತ್ತದೆ: ಬೇರೆಯಾಗಿರು ಎಂದು ಹೇಳಿಸಿಕೊಳ್ಳದೆಯೇ ತಾನು ಯಾವ ಕಡೆ ವಾಲುತ್ತೇನೆಂದು ಕಾಣಬಹುದು.",
      hi: "यह कथन कि व्यक्ति अपनी श्रद्धा से ही बना है। इससे अध्याय की छँटाई विधान नहीं, वर्णन बन जाती है: बिना यह सुने कि और कुछ बनो, आप देख सकते हैं कि आप किस ओर झुके हैं।",
    },
  },
  {
    n: 18,
    key: "moksha-sanyasa",
    name: { en: "Letting go", kn: "ಮೋಕ್ಷಸಂನ್ಯಾಸ", hi: "मोक्षसंन्यास" },
    verses: 78,
    lede: {
      en: "The longest chapter, and the summing-up — which does not simply repeat what came before.",
      kn: "ಅತಿ ದೀರ್ಘ ಅಧ್ಯಾಯ, ಮತ್ತು ಸಮಾರೋಪ — ಅದು ಹಿಂದಿನದನ್ನು ಬರೀ ಪುನರಾವರ್ತಿಸುವುದಿಲ್ಲ.",
      hi: "सबसे लंबा अध्याय, और उपसंहार — जो पहले कही बात को केवल दोहराता नहीं।",
    },
    argument: {
      en: "It separates renunciation from relinquishment, sorts knowledge, action, doer, understanding and happiness by the three strands, returns to doing one's own work, and ends with an instruction to give up every prescription and take refuge. The last verses hand the teaching back to Arjuna and ask him whether his confusion has gone; he says it has, and picks up the bow.",
      kn: "ಸಂನ್ಯಾಸ ಮತ್ತು ತ್ಯಾಗವನ್ನು ಬೇರ್ಪಡಿಸುತ್ತದೆ; ಜ್ಞಾನ, ಕರ್ಮ, ಕರ್ತೃ, ಬುದ್ಧಿ ಮತ್ತು ಸುಖವನ್ನು ಮೂರು ಗುಣಗಳಿಂದ ವಿಂಗಡಿಸುತ್ತದೆ; ಸ್ವಧರ್ಮಕ್ಕೆ ಮರಳುತ್ತದೆ; ಮತ್ತು ಎಲ್ಲ ವಿಧಿಗಳನ್ನೂ ಬಿಟ್ಟು ಶರಣಾಗುವ ಸೂಚನೆಯೊಂದಿಗೆ ಮುಗಿಯುತ್ತದೆ. ಕೊನೆಯ ಶ್ಲೋಕಗಳು ಬೋಧನೆಯನ್ನು ಅರ್ಜುನನಿಗೇ ಹಿಂತಿರುಗಿಸಿ, ಅವನ ಗೊಂದಲ ಹೋಯಿತೇ ಎಂದು ಕೇಳುತ್ತವೆ; ಹೋಯಿತೆಂದು ಅವನು ಹೇಳಿ ಬಿಲ್ಲು ಎತ್ತಿಕೊಳ್ಳುತ್ತಾನೆ.",
      hi: "यह संन्यास और त्याग को अलग करता है; ज्ञान, कर्म, कर्ता, बुद्धि और सुख को तीनों गुणों से छाँटता है; स्वधर्म पर लौटता है; और सब विधानों को छोड़कर शरण लेने के निर्देश पर समाप्त होता है। अंतिम श्लोक उपदेश अर्जुन को ही लौटाकर पूछते हैं कि उसका मोह गया या नहीं; वह कहता है गया, और धनुष उठा लेता है।",
    },
    turn: {
      en: "The question put back to Arjuna. After seventeen chapters the teaching is not imposed; he is asked, and the book waits for his answer before it ends.",
      kn: "ಅರ್ಜುನನಿಗೇ ಮರಳಿ ಹಾಕಿದ ಪ್ರಶ್ನೆ. ಹದಿನೇಳು ಅಧ್ಯಾಯಗಳ ನಂತರ ಬೋಧನೆಯನ್ನು ಹೇರಲಾಗುವುದಿಲ್ಲ; ಅವನನ್ನು ಕೇಳಲಾಗುತ್ತದೆ, ಮತ್ತು ಅವನ ಉತ್ತರಕ್ಕಾಗಿ ಕಾದು ಗ್ರಂಥ ಮುಗಿಯುತ್ತದೆ.",
      hi: "अर्जुन को लौटाया गया प्रश्न। सत्रह अध्यायों के बाद उपदेश थोपा नहीं जाता; उससे पूछा जाता है, और उसके उत्तर की प्रतीक्षा कर पुस्तक समाप्त होती है।",
    },
    links: [L("/concepts/moksha", "Mokṣa", "ಮೋಕ್ಷ", "मोक्ष")],
  },
];

export function gitaChapter(n: number): GitaChapter | undefined {
  return GITA_CHAPTER_NOTES.find((c) => c.n === n);
}

export function gitaChaptersInOrder(): GitaChapter[] {
  return [...GITA_CHAPTER_NOTES].sort((a, b) => a.n - b.n);
}

/** The verse counts, summed — 700 in the numbering almost everyone uses. */
export function gitaVerseTotal(): number {
  return GITA_CHAPTER_NOTES.reduce((n, c) => n + c.verses, 0);
}
