import type { Locale } from "./config";

// ─────────────────────────────────────────────────────────
//  The six darśanas — the section's own words.
//
//  Three of these strings are the point of the file, and all three
//  correct something the popular account states confidently and
//  wrongly:
//
//  `standingSix`  — that the list of six is a later convention, not
//                   how the schools formed or saw themselves.
//  `standingAstika` — that āstika means accepting the Veda, not
//                   believing in God. Sāṅkhya argues there is none;
//                   Mīmāṃsā gives one nothing to do; both are āstika.
//  `standingOthers` — that six is not all there were, and a list that
//                   drops the Buddhists, the Jains and the Cārvākas
//                   makes a public argument look like a family
//                   conversation.
// ─────────────────────────────────────────────────────────

export interface DarshanaStrings {
  title: string;
  lede: string;

  standingSix: string;
  standingAstika: string;
  standingOthers: string;

  pairsTitle: string;
  pairsLede: string;

  gridTitle: string;
  gridLede: string;
  gridCaption: string;
  /** Carries {n}. */
  gridAccepts: string;
  gridYes: string;
  gridNo: string;
  gridOwnList: string;
  colSchool: string;
  colCount: string;
  legendTitle: string;

  schoolsTitle: string;
  othersTitle: string;
  othersLede: string;

  labelAsks: string;
  labelRoot: string;
  labelAuthor: string;
  labelDating: string;
  labelExtent: string;
  labelPramanas: string;
  labelIshvara: string;
  labelPairedWith: string;
  labelStructure: string;
  labelArgument: string;
  labelElsewhere: string;

  tattvaTitle: string;
  tattvaLede: string;
  /** Carries {n}. */
  tattvaCount: string;
  tattvaAside: string;
  avayavaTitle: string;
  avayavaLede: string;
  avayavaStep: string;
  avayavaExample: string;

  read: string;
  back: string;
  next: string;
  previous: string;
}

export const DARSHANA_STRINGS: Record<Locale, DarshanaStrings> = {
  en: {
    title: "The six darśanas",
    lede:
      "Not six religions. Six ways of asking what is real and how anyone could know it — and three pairs rather than six positions, because each question is asked twice.",

    standingSix:
      "The list of six is a convention of the doxographers, not a fact about how the schools formed. They did not arise as a set, did not number themselves, and spent most of their history arguing with each other and with schools not on the list. The pairing below is kept because it is genuinely informative, not because it is ancient.",
    standingAstika:
      "Āstika does not mean theist. It means accepting the Veda as a means of knowledge. Sāṅkhya argues that the world needs no maker; Mīmāṃsā holds the Veda to be authorless and leaves God nothing to do. Both are āstika. Nyāya, which argues for God at length, is āstika on exactly the same ground.",
    standingOthers:
      "Six is not all there were. The Buddhist logicians, the Jain thinkers and the Cārvākas are on nearly every page of these texts, as the opponents being answered. A list of six that leaves them out makes a public argument look like a family conversation.",

    pairsTitle: "Three questions, each asked twice",
    pairsLede:
      "This is the most useful thing to know before reading any of the six. They are not six answers to one question but three questions approached from two sides — one school working out what there is, the other what to do about it.",

    gridTitle: "Where each school stops counting",
    gridLede:
      "Every school accepts perception. After that they diverge, and the divergence is not a detail: how many means of knowledge you admit decides what you are allowed to prove. This is the sharpest single comparison available between them.",
    gridCaption:
      "The six means of knowledge, and which schools accept each. The six āstika schools are above the rule; below it are three positions not counted among them.",
    gridAccepts: "{n} of six",
    gridYes: "accepted",
    gridNo: "not accepted",
    gridOwnList: "a list of its own",
    colSchool: "School",
    colCount: "Accepts",
    legendTitle: "The six, numbered as the columns are",

    schoolsTitle: "The six",
    othersTitle: "Not among the six, and on every page of them",
    othersLede:
      "These are the positions the darśanas were arguing against. Two of them can be placed on the grid above; the third cannot, and saying so is better than a tidy row that misrepresents it.",

    labelAsks: "What it asks",
    labelRoot: "Root text",
    labelAuthor: "Attributed to",
    labelDating: "When",
    labelExtent: "How long",
    labelPramanas: "Means of knowledge",
    labelIshvara: "On God",
    labelPairedWith: "Paired with",
    labelStructure: "What it counts",
    labelArgument: "The argument",
    labelElsewhere: "Elsewhere on this site",

    tattvaTitle: "The twenty-five, in the order they are derived",
    tattvaLede:
      "Puruṣa stands apart, producing nothing. Everything else is on one cascade, and the cascade runs from the subtle to the gross — intellect before the senses, the senses before the elements.",
    tattvaCount: "{n} constituents",
    tattvaAside:
      "Read the order carefully: mind comes earlier than matter here. A modern reader expects the reverse, and the reversal is the claim rather than an oversight.",
    avayavaTitle: "The five members of an argument",
    avayavaLede:
      "Nyāya's most borrowed piece of machinery, with the example its own texts use. The third member must be a case the opponent already grants — which is why this is a procedure for convincing somebody rather than a calculus.",
    avayavaStep: "What it does",
    avayavaExample: "In the standard example",

    read: "Read",
    back: "All six",
    next: "Next",
    previous: "Previous",
  },

  kn: {
    title: "ಆರು ದರ್ಶನಗಳು",
    lede:
      "ಆರು ಧರ್ಮಗಳಲ್ಲ. ಯಾವುದು ಸತ್ಯ ಮತ್ತು ಅದನ್ನು ಯಾರಾದರೂ ಹೇಗೆ ತಿಳಿಯಬಹುದು ಎಂದು ಕೇಳುವ ಆರು ಮಾರ್ಗಗಳು — ಮತ್ತು ಆರು ನಿಲುವುಗಳಲ್ಲ, ಮೂರು ಜೋಡಿಗಳು, ಏಕೆಂದರೆ ಪ್ರತಿ ಪ್ರಶ್ನೆಯನ್ನೂ ಎರಡು ಬಾರಿ ಕೇಳಲಾಗಿದೆ.",

    standingSix:
      "ಆರರ ಪಟ್ಟಿ ಸಂಗ್ರಹಕಾರರ ಸಂಪ್ರದಾಯ, ಶಾಖೆಗಳು ಹೇಗೆ ರೂಪುಗೊಂಡವು ಎಂಬ ಸಂಗತಿಯಲ್ಲ. ಅವು ಒಂದು ಗುಂಪಾಗಿ ಹುಟ್ಟಲಿಲ್ಲ, ತಮ್ಮನ್ನು ಎಣಿಸಿಕೊಳ್ಳಲಿಲ್ಲ, ಮತ್ತು ತಮ್ಮ ಇತಿಹಾಸದ ಬಹುಭಾಗವನ್ನು ಪರಸ್ಪರ ಮತ್ತು ಪಟ್ಟಿಯಲ್ಲಿಲ್ಲದ ಶಾಖೆಗಳೊಂದಿಗೆ ವಾದಿಸುತ್ತ ಕಳೆದವು. ಕೆಳಗಿನ ಜೋಡಿಸುವಿಕೆಯನ್ನು ಅದು ಪ್ರಾಚೀನವಾದ್ದರಿಂದಲ್ಲ, ನಿಜವಾಗಿ ತಿಳಿಸುವುದರಿಂದ ಉಳಿಸಿಕೊಳ್ಳಲಾಗಿದೆ.",
    standingAstika:
      "ಆಸ್ತಿಕ ಎಂದರೆ ದೇವರನ್ನು ನಂಬುವವನು ಅಲ್ಲ. ವೇದವನ್ನು ಪ್ರಮಾಣವೆಂದು ಒಪ್ಪುವುದು ಎಂದರ್ಥ. ಜಗತ್ತಿಗೆ ಕರ್ತೃ ಬೇಕಿಲ್ಲ ಎಂದು ಸಾಂಖ್ಯ ವಾದಿಸುತ್ತದೆ; ವೇದ ಅಪೌರುಷೇಯ ಎಂದು ಮೀಮಾಂಸಾ ಹಿಡಿದು ದೇವರಿಗೆ ಮಾಡಲು ಏನನ್ನೂ ಬಿಡುವುದಿಲ್ಲ. ಎರಡೂ ಆಸ್ತಿಕ. ದೇವರಿಗಾಗಿ ವಿಸ್ತಾರವಾಗಿ ವಾದಿಸುವ ನ್ಯಾಯವೂ ನಿಖರವಾಗಿ ಅದೇ ನೆಲೆಯಲ್ಲಿ ಆಸ್ತಿಕ.",
    standingOthers:
      "ಆರೇ ಇದ್ದದ್ದಲ್ಲ. ಬೌದ್ಧ ತಾರ್ಕಿಕರು, ಜೈನ ಚಿಂತಕರು ಮತ್ತು ಚಾರ್ವಾಕರು ಈ ಗ್ರಂಥಗಳ ಬಹುತೇಕ ಪ್ರತಿ ಪುಟದಲ್ಲಿದ್ದಾರೆ — ಉತ್ತರಿಸಲಾಗುತ್ತಿರುವ ಪ್ರತಿವಾದಿಗಳಾಗಿ. ಅವರನ್ನು ಬಿಟ್ಟುಬಿಡುವ ಆರರ ಪಟ್ಟಿ ಒಂದು ಸಾರ್ವಜನಿಕ ವಾದವನ್ನು ಮನೆಯ ಮಾತುಕತೆಯಂತೆ ಕಾಣಿಸುತ್ತದೆ.",

    pairsTitle: "ಮೂರು ಪ್ರಶ್ನೆಗಳು, ಪ್ರತಿಯೊಂದೂ ಎರಡು ಬಾರಿ",
    pairsLede:
      "ಆರರಲ್ಲಿ ಯಾವುದನ್ನೂ ಓದುವ ಮೊದಲು ತಿಳಿಯಲು ಅತಿ ಉಪಯುಕ್ತವಾದದ್ದು ಇದು. ಅವು ಒಂದು ಪ್ರಶ್ನೆಗೆ ಆರು ಉತ್ತರಗಳಲ್ಲ, ಎರಡು ಕಡೆಯಿಂದ ಸಮೀಪಿಸಿದ ಮೂರು ಪ್ರಶ್ನೆಗಳು — ಒಂದು ಶಾಖೆ ಏನಿದೆ ಎಂದು ರೂಪಿಸುತ್ತದೆ, ಇನ್ನೊಂದು ಅದರ ಬಗ್ಗೆ ಏನು ಮಾಡಬೇಕೆಂದು.",

    gridTitle: "ಪ್ರತಿ ಶಾಖೆ ಎಣಿಕೆಯನ್ನು ಎಲ್ಲಿ ನಿಲ್ಲಿಸುತ್ತದೆ",
    gridLede:
      "ಪ್ರತ್ಯಕ್ಷವನ್ನು ಎಲ್ಲ ಶಾಖೆಗಳೂ ಒಪ್ಪುತ್ತವೆ. ಆಮೇಲೆ ಅವು ಬೇರೆಯಾಗುತ್ತವೆ, ಮತ್ತು ಆ ಬೇರೆಯಾಗುವಿಕೆ ಸಣ್ಣ ವಿವರವಲ್ಲ: ನೀವು ಎಷ್ಟು ಪ್ರಮಾಣಗಳನ್ನು ಒಪ್ಪುತ್ತೀರಿ ಎಂಬುದು ನೀವು ಏನನ್ನು ಸಾಧಿಸಲು ಅನುಮತಿ ಪಡೆದಿದ್ದೀರಿ ಎಂಬುದನ್ನು ನಿರ್ಧರಿಸುತ್ತದೆ. ಅವುಗಳ ನಡುವೆ ಸಿಗುವ ಅತಿ ಹರಿತವಾದ ಒಂದೇ ಹೋಲಿಕೆ ಇದು.",
    gridCaption:
      "ಆರು ಪ್ರಮಾಣಗಳು, ಮತ್ತು ಪ್ರತಿಯೊಂದನ್ನು ಯಾವ ಶಾಖೆಗಳು ಒಪ್ಪುತ್ತವೆ. ಗೆರೆಯ ಮೇಲೆ ಆರು ಆಸ್ತಿಕ ಶಾಖೆಗಳು; ಕೆಳಗೆ ಅವುಗಳಲ್ಲಿ ಎಣಿಸದ ಮೂರು ನಿಲುವುಗಳು.",
    gridAccepts: "ಆರರಲ್ಲಿ {n}",
    gridYes: "ಒಪ್ಪಿತ",
    gridNo: "ಒಪ್ಪಿತವಲ್ಲ",
    gridOwnList: "ತನ್ನದೇ ಪಟ್ಟಿ",
    colSchool: "ಶಾಖೆ",
    colCount: "ಒಪ್ಪುವುದು",
    legendTitle: "ಆರು, ಸಾಲುಗಳಂತೆಯೇ ಎಣಿಸಿದ್ದು",

    schoolsTitle: "ಆರು",
    othersTitle: "ಆರರಲ್ಲಿ ಇಲ್ಲ, ಮತ್ತು ಅವುಗಳ ಪ್ರತಿ ಪುಟದಲ್ಲಿ",
    othersLede:
      "ದರ್ಶನಗಳು ಯಾವುದರ ವಿರುದ್ಧ ವಾದಿಸುತ್ತಿದ್ದವೋ ಆ ನಿಲುವುಗಳು ಇವು. ಇವುಗಳಲ್ಲಿ ಎರಡನ್ನು ಮೇಲಿನ ಕೋಷ್ಟಕದಲ್ಲಿ ಇಡಬಹುದು; ಮೂರನೆಯದನ್ನು ಆಗದು, ಮತ್ತು ಅದನ್ನು ತಪ್ಪಾಗಿ ತೋರಿಸುವ ಅಚ್ಚುಕಟ್ಟಾದ ಸಾಲಿಗಿಂತ ಹಾಗೆ ಹೇಳುವುದೇ ಒಳ್ಳೆಯದು.",

    labelAsks: "ಅದು ಏನನ್ನು ಕೇಳುತ್ತದೆ",
    labelRoot: "ಮೂಲ ಗ್ರಂಥ",
    labelAuthor: "ಆರೋಪಿತ ಕರ್ತೃ",
    labelDating: "ಯಾವಾಗ",
    labelExtent: "ಎಷ್ಟು ಉದ್ದ",
    labelPramanas: "ಪ್ರಮಾಣಗಳು",
    labelIshvara: "ದೇವರ ಕುರಿತು",
    labelPairedWith: "ಜೋಡಿ",
    labelStructure: "ಅದು ಏನನ್ನು ಎಣಿಸುತ್ತದೆ",
    labelArgument: "ವಾದ",
    labelElsewhere: "ಈ ತಾಣದ ಇತರೆಡೆ",

    tattvaTitle: "ಇಪ್ಪತ್ತೈದು, ನಿಷ್ಪತ್ತಿಯಾಗುವ ಕ್ರಮದಲ್ಲಿ",
    tattvaLede:
      "ಪುರುಷ ಬೇರೆಯಾಗಿ ನಿಲ್ಲುತ್ತದೆ, ಏನನ್ನೂ ಹುಟ್ಟಿಸದೆ. ಉಳಿದೆಲ್ಲವೂ ಒಂದೇ ಇಳಿಜಾರಿನ ಮೇಲಿದೆ, ಮತ್ತು ಆ ಇಳಿಜಾರು ಸೂಕ್ಷ್ಮದಿಂದ ಸ್ಥೂಲಕ್ಕೆ ಸಾಗುತ್ತದೆ — ಇಂದ್ರಿಯಗಳ ಮೊದಲು ಬುದ್ಧಿ, ಭೂತಗಳ ಮೊದಲು ಇಂದ್ರಿಯಗಳು.",
    tattvaCount: "{n} ತತ್ತ್ವಗಳು",
    tattvaAside:
      "ಕ್ರಮವನ್ನು ಗಮನವಿಟ್ಟು ಓದಿ: ಇಲ್ಲಿ ಮನಸ್ಸು ಜಡದಿಂದ ಹಿಂದಿನದು. ಆಧುನಿಕ ಓದುಗ ಇದರ ವಿರುದ್ಧವನ್ನು ನಿರೀಕ್ಷಿಸುತ್ತಾನೆ, ಮತ್ತು ಈ ತಿರುಗುವಿಕೆ ಕೈತಪ್ಪಿದದ್ದಲ್ಲ, ಪ್ರತಿಪಾದನೆಯೇ.",
    avayavaTitle: "ವಾದದ ಐದು ಅವಯವಗಳು",
    avayavaLede:
      "ನ್ಯಾಯದ ಅತಿ ಹೆಚ್ಚು ಎರವಲಾದ ಸಾಧನ, ಅದರದೇ ಗ್ರಂಥಗಳು ಬಳಸುವ ನಿದರ್ಶನದೊಂದಿಗೆ. ಮೂರನೇ ಅವಯವ ಪ್ರತಿವಾದಿ ಈಗಾಗಲೇ ಕೊಡುವ ಪ್ರಕರಣವಾಗಿರಬೇಕು — ಆದ್ದರಿಂದಲೇ ಇದು ಗಣಿತವಲ್ಲ, ಯಾರನ್ನಾದರೂ ಒಪ್ಪಿಸುವ ವಿಧಾನ.",
    avayavaStep: "ಅದು ಏನು ಮಾಡುತ್ತದೆ",
    avayavaExample: "ಪ್ರಸಿದ್ಧ ನಿದರ್ಶನದಲ್ಲಿ",

    read: "ಓದಿ",
    back: "ಆರೂ",
    next: "ಮುಂದೆ",
    previous: "ಹಿಂದೆ",
  },

  hi: {
    title: "छह दर्शन",
    lede:
      "छह धर्म नहीं। क्या सत्य है और उसे कोई कैसे जान सकता है, यह पूछने के छह मार्ग — और छह पक्ष नहीं, तीन जोड़े, क्योंकि हर प्रश्न दो बार पूछा गया है।",

    standingSix:
      "छह की सूची संग्रहकारों की परिपाटी है, यह तथ्य नहीं कि शाखाएँ कैसे बनीं। वे किसी समूह के रूप में उत्पन्न नहीं हुईं, अपनी गिनती नहीं की, और अपने इतिहास का बहुभाग एक-दूसरे से तथा सूची में न आनेवाली शाखाओं से विवाद करते बिताया। नीचे का जोड़ा इसलिए रखा गया है कि वह वस्तुतः कुछ बताता है, इसलिए नहीं कि वह प्राचीन है।",
    standingAstika:
      "आस्तिक का अर्थ ईश्वरवादी नहीं। अर्थ है वेद को प्रमाण मानना। सांख्य तर्क देता है कि जगत् को कर्ता की आवश्यकता नहीं; मीमांसा वेद को अपौरुषेय मानकर ईश्वर को करने के लिए कुछ नहीं छोड़ती। दोनों आस्तिक हैं। न्याय, जो ईश्वर के लिए विस्तार से तर्क देता है, ठीक उसी आधार पर आस्तिक है।",
    standingOthers:
      "छह ही नहीं थे। बौद्ध तार्किक, जैन चिंतक और चार्वाक इन ग्रंथों के लगभग हर पृष्ठ पर हैं — उन प्रतिवादियों के रूप में जिनका उत्तर दिया जा रहा है। उन्हें छोड़ देनेवाली छह की सूची एक सार्वजनिक विवाद को घर की बातचीत जैसा दिखा देती है।",

    pairsTitle: "तीन प्रश्न, प्रत्येक दो बार",
    pairsLede:
      "छहों में कुछ भी पढ़ने से पहले जानने योग्य सबसे उपयोगी बात यही है। वे एक प्रश्न के छह उत्तर नहीं, दो ओर से आए तीन प्रश्न हैं — एक शाखा गढ़ती है कि क्या है, दूसरी कि उसका क्या किया जाए।",

    gridTitle: "हर शाखा गिनना कहाँ रोकती है",
    gridLede:
      "प्रत्यक्ष को हर शाखा मानती है। उसके बाद वे अलग होती हैं, और वह अलगाव कोई छोटा विवरण नहीं: आप कितने प्रमाण मानते हैं यह तय करता है कि आपको क्या सिद्ध करने की छूट है। उनके बीच उपलब्ध सबसे तीखी एक तुलना यही है।",
    gridCaption:
      "छह प्रमाण, और प्रत्येक को कौन शाखाएँ मानती हैं। रेखा के ऊपर छह आस्तिक शाखाएँ; नीचे उनमें न गिने जानेवाले तीन पक्ष।",
    gridAccepts: "छह में {n}",
    gridYes: "मान्य",
    gridNo: "अमान्य",
    gridOwnList: "अपनी ही सूची",
    colSchool: "शाखा",
    colCount: "मानती है",
    legendTitle: "छह, जैसे स्तंभ गिने गए हैं",

    schoolsTitle: "छह",
    othersTitle: "छहों में नहीं, और उनके हर पृष्ठ पर",
    othersLede:
      "दर्शन जिनके विरुद्ध तर्क कर रहे थे वे पक्ष ये हैं। इनमें दो को ऊपर की तालिका में रखा जा सकता है; तीसरे को नहीं, और उसका ग़लत चित्र देनेवाली सुव्यवस्थित पंक्ति से यह कहना बेहतर है।",

    labelAsks: "वह क्या पूछता है",
    labelRoot: "मूल ग्रंथ",
    labelAuthor: "आरोपित कर्ता",
    labelDating: "कब",
    labelExtent: "कितना लंबा",
    labelPramanas: "प्रमाण",
    labelIshvara: "ईश्वर पर",
    labelPairedWith: "जोड़ा",
    labelStructure: "वह क्या गिनता है",
    labelArgument: "तर्क",
    labelElsewhere: "इस साइट पर अन्यत्र",

    tattvaTitle: "पच्चीस, निष्पत्ति के क्रम में",
    tattvaLede:
      "पुरुष अलग खड़ा है, कुछ उत्पन्न नहीं करता। शेष सब एक ही क्रम पर है, और वह क्रम सूक्ष्म से स्थूल की ओर चलता है — इंद्रियों से पहले बुद्धि, भूतों से पहले इंद्रियाँ।",
    tattvaCount: "{n} तत्त्व",
    tattvaAside:
      "क्रम ध्यान से पढ़िए: यहाँ मन जड़ से पहले है। आधुनिक पाठक इसका उल्टा अपेक्षित करता है, और यह उलटाव चूक नहीं, दावा ही है।",
    avayavaTitle: "तर्क के पाँच अवयव",
    avayavaLede:
      "न्याय का सर्वाधिक उधार लिया गया उपकरण, उसी उदाहरण के साथ जो उसके अपने ग्रंथ प्रयोग करते हैं। तीसरा अवयव ऐसा प्रसंग होना चाहिए जिसे प्रतिवादी पहले से मानता हो — इसीलिए यह गणित नहीं, किसी को समझाने की प्रक्रिया है।",
    avayavaStep: "वह क्या करता है",
    avayavaExample: "प्रसिद्ध उदाहरण में",

    read: "पढ़ें",
    back: "छहों",
    next: "आगे",
    previous: "पीछे",
  },
};

export function darshanaStrings(locale: Locale): DarshanaStrings {
  return DARSHANA_STRINGS[locale];
}
