import type { Locale } from "@/i18n/config";

// ─────────────────────────────────────────────────────────
//  The stories.
//
//  The Purāṇa pages kept gesturing at these — "the story of
//  Prahlāda", "the churning of the ocean" — with nowhere to point.
//  This is where they point.
//
//  Three rules, and the third is the one that makes this section
//  worth having rather than being a retelling site.
//
//  **Every story names the text it is told in, and where in it.** Not
//  "the Purāṇas say" but the Viṣṇu Purāṇa's first book, the
//  Bhāgavata's eighth skandha. A story with no address is folklore,
//  which is a fine thing to be and a different thing from what this
//  section claims.
//
//  **Where the tellings differ, the difference is printed.** Most of
//  these are told more than once and the versions do not agree — the
//  churning appears in at least four Purāṇas with different lists of
//  what came out of the sea. Flattening that into one version is the
//  commonest way a page like this goes wrong.
//
//  **A reading is labelled as a reading.** The tradition reads Dhruva
//  as fixity and Gajendra as the moment effort stops; those readings
//  are themselves old and worth having. They are not what the story
//  says. The `reading` field is always introduced as interpretation,
//  and a test rejects it being written as plain fact.
//
//  The prose is this site's own throughout. Nothing here is a
//  translation of anything.
// ─────────────────────────────────────────────────────────

export interface StoryLink {
  href: string;
  label: Record<Locale, string>;
}

export interface Story {
  slug: string;
  name: Record<Locale, string>;
  /** In Devanagari. The view converts it. */
  sanskrit: string;
  order: number;
  /** Which Purāṇa, and where in it. */
  told: Record<Locale, string>;
  /** The Purāṇa's own slug, for the link back. */
  purana: string;
  /** One line: what this story is. */
  lede: Record<Locale, string>;
  /** The narrative, told plainly and in this site's own words. */
  story: Record<Locale, string>;
  /** What the tradition reads it as — always framed as a reading. */
  reading: Record<Locale, string>;
  /** Where the tellings differ. */
  differs?: Record<Locale, string>;
  links?: StoryLink[];
}

const L = (href: string, en: string, kn: string, hi: string): StoryLink => ({
  href,
  label: { en, kn, hi },
});

export const STORIES: Story[] = [
  {
    slug: "dhruva",
    name: { en: "Dhruva", kn: "ಧ್ರುವ", hi: "ध्रुव" },
    sanskrit: "ध्रुवचरितम्",
    order: 1,
    purana: "vishnu",
    told: {
      en: "Viṣṇu Purāṇa, book one; retold at length in the Bhāgavata's fourth skandha.",
      kn: "ವಿಷ್ಣು ಪುರಾಣ, ಮೊದಲ ಅಂಶ; ಭಾಗವತದ ನಾಲ್ಕನೇ ಸ್ಕಂಧದಲ್ಲಿ ವಿಸ್ತಾರವಾಗಿ ಮರುಕಥನ.",
      hi: "विष्णु पुराण, प्रथम अंश; भागवत के चतुर्थ स्कंध में विस्तार से पुनःकथन।",
    },
    lede: {
      en: "A child is pushed off his father's lap, walks into the forest, and does not move again.",
      kn: "ಒಂದು ಮಗುವನ್ನು ತಂದೆಯ ತೊಡೆಯಿಂದ ತಳ್ಳಲಾಗುತ್ತದೆ; ಅದು ಕಾಡಿಗೆ ನಡೆದು, ಮತ್ತೆ ಕದಲುವುದಿಲ್ಲ.",
      hi: "एक बालक को पिता की गोद से हटा दिया जाता है; वह वन में चला जाता है, और फिर हिलता नहीं।",
    },
    story: {
      en: "Uttānapāda has two queens, and Dhruva is the son of the one he does not favour. Climbing into his father's lap, the boy is lifted off it by the other queen, who tells him that a place there is not his by birth and he should have been born to her if he wanted it. His mother, when he comes to her, does not contradict any of it. She tells him there is one lap nobody can be removed from, and that she does not know the way to it. He is five. He goes into the forest to find it himself, meets Nārada on the road, is told plainly that the thing he wants is beyond a child, and goes on anyway. What he then does is simply to stand, repeating what Nārada taught him, until the standing itself becomes difficult to look at. Viṣṇu comes. The boy who set out to be given a seat finds he no longer wants one, and asks instead to be fixed somewhere he cannot be moved from. He is given the pole star.",
      kn: "ಉತ್ತಾನಪಾದನಿಗೆ ಇಬ್ಬರು ರಾಣಿಯರು; ಧ್ರುವ ಅವನ ಪ್ರೀತಿಯಿಲ್ಲದ ರಾಣಿಯ ಮಗ. ತಂದೆಯ ತೊಡೆಗೆ ಹತ್ತಿದ ಹುಡುಗನನ್ನು ಇನ್ನೊಬ್ಬ ರಾಣಿ ಎತ್ತಿ ಇಳಿಸಿ, ಅಲ್ಲಿ ಜಾಗ ಜನ್ಮದಿಂದ ಅವನದ್ದಲ್ಲ, ಬೇಕಿದ್ದರೆ ತನಗೆ ಹುಟ್ಟಬೇಕಿತ್ತು ಎನ್ನುತ್ತಾಳೆ. ತಾಯಿಯ ಬಳಿ ಬಂದಾಗ ಅವಳು ಅದರಲ್ಲಿ ಯಾವುದನ್ನೂ ಅಲ್ಲಗಳೆಯುವುದಿಲ್ಲ. ಯಾರೂ ಇಳಿಸಲಾಗದ ಒಂದು ತೊಡೆ ಇದೆ, ಆದರೆ ಅದರ ದಾರಿ ತನಗೆ ಗೊತ್ತಿಲ್ಲ ಎನ್ನುತ್ತಾಳೆ. ಅವನಿಗೆ ಐದು ವರ್ಷ. ತಾನೇ ಹುಡುಕಲು ಕಾಡಿಗೆ ಹೊರಡುತ್ತಾನೆ, ದಾರಿಯಲ್ಲಿ ನಾರದರನ್ನು ಭೇಟಿಯಾಗುತ್ತಾನೆ, ಬಯಸುವುದು ಮಗುವಿನ ಮಿತಿಯಾಚೆಯದು ಎಂದು ನೇರವಾಗಿ ಕೇಳಿಸಿಕೊಳ್ಳುತ್ತಾನೆ, ಮತ್ತು ಮುಂದುವರಿಯುತ್ತಾನೆ. ಆಮೇಲೆ ಅವನು ಮಾಡುವುದಿಷ್ಟೇ — ನಾರದರು ಕಲಿಸಿದ್ದನ್ನು ಹೇಳುತ್ತ ನಿಲ್ಲುವುದು; ಆ ನಿಲ್ಲುವಿಕೆಯೇ ನೋಡಲಾಗದಷ್ಟು ಕಠಿಣವಾಗುವವರೆಗೆ. ವಿಷ್ಣು ಬರುತ್ತಾನೆ. ಆಸನ ಕೇಳಲು ಹೊರಟ ಹುಡುಗನಿಗೆ ಈಗ ಅದು ಬೇಕಿಲ್ಲ; ಬದಲಾಗಿ ಯಾರೂ ಕದಲಿಸಲಾಗದ ಕಡೆ ನೆಲೆಸಬೇಕೆಂದು ಕೇಳುತ್ತಾನೆ. ಅವನಿಗೆ ಧ್ರುವ ನಕ್ಷತ್ರ ಸಿಗುತ್ತದೆ.",
      hi: "उत्तानपाद की दो रानियाँ हैं; ध्रुव उस रानी का पुत्र है जो उन्हें प्रिय नहीं। पिता की गोद में चढ़े बालक को दूसरी रानी उतार देती है और कहती है कि वहाँ स्थान जन्म से उसका नहीं, चाहिए था तो उसे उसकी कोख से जन्म लेना चाहिए था। माता के पास आने पर वह इसमें से कुछ भी नहीं नकारती। वह कहती है कि एक गोद ऐसी है जिससे कोई उतारा नहीं जा सकता, और उसका मार्ग उसे नहीं आता। बालक पाँच वर्ष का है। वह स्वयं खोजने वन चला जाता है, मार्ग में नारद से मिलता है, स्पष्ट सुनता है कि जो वह चाहता है वह बालक की सीमा से परे है, और फिर भी आगे बढ़ता है। इसके बाद वह केवल खड़ा रहता है, नारद का सिखाया दोहराता हुआ — जब तक वह खड़ा रहना ही देखने में कठिन न हो जाए। विष्णु आते हैं। जो बालक आसन माँगने निकला था वह पाता है कि अब उसे आसन नहीं चाहिए; वह माँगता है ऐसा स्थान जहाँ से उसे हटाया न जा सके। उसे ध्रुव तारा मिलता है।",
    },
    reading: {
      en: "It is read as a story about fixity — the one point in a turning sky that does not move — and about a wish that changes on the way to being granted. Both readings are old. The story itself says neither; what it says is that a child was humiliated and went looking.",
      kn: "ಇದನ್ನು ಸ್ಥಿರತೆಯ ಕಥೆಯಾಗಿ ಓದಲಾಗುತ್ತದೆ — ತಿರುಗುವ ಆಕಾಶದಲ್ಲಿ ಕದಲದ ಒಂದೇ ಬಿಂದು — ಮತ್ತು ಈಡೇರುವ ದಾರಿಯಲ್ಲೇ ಬದಲಾಗುವ ಬಯಕೆಯ ಕಥೆಯಾಗಿ. ಎರಡೂ ಓದುಗಳು ಹಳೆಯವು. ಕಥೆ ಇವೆರಡನ್ನೂ ಹೇಳುವುದಿಲ್ಲ; ಅದು ಹೇಳುವುದು — ಒಂದು ಮಗು ಅವಮಾನಿತವಾಯಿತು ಮತ್ತು ಹುಡುಕಲು ಹೊರಟಿತು.",
      hi: "इसे स्थिरता की कथा के रूप में पढ़ा जाता है — घूमते आकाश में वह एक बिंदु जो नहीं हिलता — और उस इच्छा की कथा के रूप में जो पूरी होने के मार्ग में ही बदल जाती है। दोनों पाठ पुराने हैं। कथा स्वयं इनमें से कुछ नहीं कहती; वह कहती है कि एक बालक अपमानित हुआ और खोजने निकल पड़ा।",
    },
    differs: {
      en: "The Bhāgavata gives him a long hymn on Viṣṇu's arrival and the Viṣṇu Purāṇa does not. The older telling is the barer one.",
      kn: "ವಿಷ್ಣು ಬಂದಾಗ ಭಾಗವತ ಅವನಿಗೆ ದೀರ್ಘ ಸ್ತುತಿಯನ್ನು ಕೊಡುತ್ತದೆ, ವಿಷ್ಣು ಪುರಾಣ ಕೊಡುವುದಿಲ್ಲ. ಹಳೆಯ ಕಥನವೇ ಹೆಚ್ಚು ಬರಿದಾದದ್ದು.",
      hi: "विष्णु के आगमन पर भागवत उसे लंबी स्तुति देता है, विष्णु पुराण नहीं। पुराना कथन ही अधिक सादा है।",
    },
  },
  {
    slug: "prahlada",
    name: { en: "Prahlāda", kn: "ಪ್ರಹ್ಲಾದ", hi: "प्रह्लाद" },
    sanskrit: "प्रह्लादचरितम्",
    order: 2,
    purana: "vishnu",
    told: {
      en: "Viṣṇu Purāṇa, book one; the Bhāgavata's seventh skandha gives it most fully.",
      kn: "ವಿಷ್ಣು ಪುರಾಣ, ಮೊದಲ ಅಂಶ; ಭಾಗವತದ ಏಳನೇ ಸ್ಕಂಧ ಅತಿ ಪೂರ್ಣವಾಗಿ ಕೊಡುತ್ತದೆ.",
      hi: "विष्णु पुराण, प्रथम अंश; भागवत का सप्तम स्कंध इसे सबसे पूर्णता से देता है।",
    },
    lede: {
      en: "A boy will not stop saying a name, and his father, who has made himself nearly unkillable, cannot make him.",
      kn: "ಒಬ್ಬ ಹುಡುಗ ಒಂದು ಹೆಸರು ಹೇಳುವುದನ್ನು ನಿಲ್ಲಿಸುವುದಿಲ್ಲ; ತನ್ನನ್ನು ಬಹುತೇಕ ಅವಧ್ಯನಾಗಿಸಿಕೊಂಡ ಅವನ ತಂದೆಗೂ ಅದನ್ನು ನಿಲ್ಲಿಸಲಾಗುವುದಿಲ್ಲ.",
      hi: "एक बालक एक नाम लेना बंद नहीं करता, और उसका पिता — जिसने स्वयं को लगभग अवध्य बना लिया है — उसे रोक नहीं पाता।",
    },
    story: {
      en: "Hiraṇyakaśipu has won a boon shaped like a loophole: no death by man or beast, indoors or out, by day or night, on the ground or above it, by any weapon. Having removed every ordinary way of dying, he forbids the name of Viṣṇu in his kingdom. His own son says it. The teachers sent to correct the boy report that he has instead been teaching their other pupils. What follows is a sequence of attempts on a child's life by his father — poison, fire, a cliff, snakes — each of which fails, and after each the boy is asked where his protector is and answers that there is nowhere he is not. His father strikes a pillar and asks whether he is in that. The form that comes out is a man with a lion's head, neither one nor the other; it takes the king onto its lap on a threshold at dusk and opens him with its claws. Every clause of the boon is kept and the king dies anyway.",
      kn: "ಹಿರಣ್ಯಕಶಿಪು ಪಡೆದ ವರವೇ ಒಂದು ಲೋಪದೋಷದ ಆಕಾರದ್ದು: ಮನುಷ್ಯನಿಂದಲೂ ಮೃಗದಿಂದಲೂ ಅಲ್ಲ, ಒಳಗೂ ಹೊರಗೂ ಅಲ್ಲ, ಹಗಲೂ ರಾತ್ರಿಯೂ ಅಲ್ಲ, ನೆಲದ ಮೇಲೂ ಮೇಲಕ್ಕೂ ಅಲ್ಲ, ಯಾವ ಆಯುಧದಿಂದಲೂ ಅಲ್ಲ. ಸಾಯುವ ಎಲ್ಲ ಸಾಮಾನ್ಯ ದಾರಿಗಳನ್ನೂ ಮುಚ್ಚಿದ ಮೇಲೆ ಅವನು ತನ್ನ ರಾಜ್ಯದಲ್ಲಿ ವಿಷ್ಣುವಿನ ಹೆಸರನ್ನು ನಿಷೇಧಿಸುತ್ತಾನೆ. ಅವನ ಮಗನೇ ಅದನ್ನು ಹೇಳುತ್ತಾನೆ. ಹುಡುಗನನ್ನು ತಿದ್ದಲು ಕಳುಹಿಸಿದ ಗುರುಗಳು ವರದಿ ಮಾಡುವುದು — ಅವನು ಬದಲಾಗಿ ಉಳಿದ ಶಿಷ್ಯರಿಗೇ ಕಲಿಸುತ್ತಿದ್ದಾನೆ. ನಂತರ ನಡೆಯುವುದು ತಂದೆಯಿಂದ ಮಗುವಿನ ಜೀವದ ಮೇಲಿನ ಸರಣಿ ಪ್ರಯತ್ನಗಳು — ವಿಷ, ಬೆಂಕಿ, ಬೆಟ್ಟದ ತುದಿ, ಹಾವುಗಳು; ಪ್ರತಿಯೊಂದೂ ವಿಫಲ, ಮತ್ತು ಪ್ರತಿ ಬಾರಿಯೂ ನಿನ್ನ ರಕ್ಷಕ ಎಲ್ಲಿ ಎಂದು ಕೇಳಿದರೆ ಅವನಿಲ್ಲದ ಕಡೆ ಇಲ್ಲ ಎಂದು ಹುಡುಗ ಉತ್ತರಿಸುತ್ತಾನೆ. ತಂದೆ ಕಂಬಕ್ಕೆ ಹೊಡೆದು, ಇದರಲ್ಲಿದ್ದಾನೆಯೇ ಎಂದು ಕೇಳುತ್ತಾನೆ. ಹೊರಬರುವ ರೂಪ ಸಿಂಹದ ತಲೆಯ ಮನುಷ್ಯ — ಇದೂ ಅಲ್ಲ, ಅದೂ ಅಲ್ಲ; ಅದು ಸಂಜೆಯ ಹೊತ್ತು ಹೊಸ್ತಿಲ ಮೇಲೆ ರಾಜನನ್ನು ತೊಡೆಯ ಮೇಲೆ ಮಲಗಿಸಿ ಉಗುರುಗಳಿಂದ ಸೀಳುತ್ತದೆ. ವರದ ಪ್ರತಿ ಷರತ್ತೂ ಪಾಲನೆಯಾಗುತ್ತದೆ ಮತ್ತು ರಾಜ ಸಾಯುತ್ತಾನೆ.",
      hi: "हिरण्यकशिपु का पाया वरदान स्वयं एक छिद्र के आकार का है: न मनुष्य से न पशु से, न भीतर न बाहर, न दिन में न रात में, न भूमि पर न ऊपर, न किसी शस्त्र से। मरने के हर सामान्य मार्ग को बंद कर वह अपने राज्य में विष्णु का नाम वर्जित कर देता है। उसका अपना पुत्र वही नाम लेता है। बालक को सुधारने भेजे गए आचार्य बताते हैं कि वह उल्टे उनके शेष शिष्यों को पढ़ा रहा है। आगे जो होता है वह पिता द्वारा पुत्र के प्राणों पर किए प्रयत्नों की शृंखला है — विष, अग्नि, पर्वत-शिखर, सर्प; हर एक विफल, और हर बार पूछे जाने पर कि तेरा रक्षक कहाँ है, बालक उत्तर देता है कि ऐसा कोई स्थान नहीं जहाँ वह न हो। पिता स्तंभ पर प्रहार कर पूछता है, क्या इसमें भी। जो रूप निकलता है वह सिंह-मुख मनुष्य है — न यह, न वह; वह संध्या बेला में देहली पर राजा को गोद में लेकर नखों से चीर देता है। वरदान का हर खंड निभता है और राजा फिर भी मरता है।",
    },
    reading: {
      en: "It is usually read as showing that devotion is not inherited, since the boy's household is set against it, and that a protection claimed to be everywhere has to be everywhere or it is nothing. The pillar is the hinge of that second reading. The story is also, at its surface, a long account of a father trying to kill a child, and the tradition has never pretended otherwise.",
      kn: "ಭಕ್ತಿ ವಂಶಪಾರಂಪರ್ಯವಲ್ಲ — ಏಕೆಂದರೆ ಹುಡುಗನ ಮನೆ ಅದರ ವಿರುದ್ಧವಿದೆ — ಮತ್ತು ಎಲ್ಲೆಡೆ ಇದೆ ಎಂದು ಹೇಳಿಕೊಳ್ಳುವ ರಕ್ಷಣೆ ಎಲ್ಲೆಡೆ ಇರಲೇಬೇಕು, ಇಲ್ಲದಿದ್ದರೆ ಅದು ಏನೂ ಅಲ್ಲ — ಎಂದು ಸಾಮಾನ್ಯವಾಗಿ ಓದಲಾಗುತ್ತದೆ. ಕಂಬವೇ ಆ ಎರಡನೇ ಓದಿನ ತಿರುಗೋಲು. ಮೇಲ್ನೋಟಕ್ಕೆ ಇದು ಮಗುವನ್ನು ಕೊಲ್ಲಲು ಪ್ರಯತ್ನಿಸುವ ತಂದೆಯ ದೀರ್ಘ ವಿವರಣೆಯೂ ಹೌದು, ಮತ್ತು ಪರಂಪರೆ ಅದನ್ನು ಎಂದೂ ಮರೆಮಾಚಿಲ್ಲ.",
      hi: "इसे प्रायः इस रूप में पढ़ा जाता है कि भक्ति वंश से नहीं मिलती — क्योंकि बालक का घर उसके विरुद्ध है — और यह कि जो रक्षा सर्वत्र होने का दावा करती है उसे सर्वत्र होना ही होगा, अन्यथा वह कुछ नहीं। स्तंभ उसी दूसरे पाठ की धुरी है। ऊपरी तल पर यह एक पिता द्वारा पुत्र को मारने के प्रयत्नों का लंबा विवरण भी है, और परंपरा ने इसे कभी छिपाया नहीं।",
    },
    links: [L("/puranas/bhagavata", "The Bhāgavata", "ಭಾಗವತ", "भागवत")],
  },
  {
    slug: "samudra-manthana",
    name: { en: "The churning of the ocean", kn: "ಸಮುದ್ರ ಮಥನ", hi: "समुद्र मंथन" },
    sanskrit: "समुद्रमन्थनम्",
    order: 3,
    purana: "kurma",
    told: {
      en: "Kūrma Purāṇa; also the Matsya, the Viṣṇu and the Bhāgavata's eighth skandha.",
      kn: "ಕೂರ್ಮ ಪುರಾಣ; ಮತ್ಸ್ಯ, ವಿಷ್ಣು ಮತ್ತು ಭಾಗವತದ ಎಂಟನೇ ಸ್ಕಂಧದಲ್ಲೂ.",
      hi: "कूर्म पुराण; मत्स्य, विष्णु और भागवत के अष्टम स्कंध में भी।",
    },
    lede: {
      en: "Gods and demons work the same rope for the same prize, and what surfaces first is poison.",
      kn: "ದೇವತೆಗಳೂ ಅಸುರರೂ ಒಂದೇ ಬಹುಮಾನಕ್ಕಾಗಿ ಒಂದೇ ಹಗ್ಗ ಎಳೆಯುತ್ತಾರೆ, ಮತ್ತು ಮೊದಲು ಮೇಲೆ ಬರುವುದು ವಿಷ.",
      hi: "देव और असुर एक ही पुरस्कार के लिए एक ही रस्सी खींचते हैं, और सबसे पहले ऊपर आता है विष।",
    },
    story: {
      en: "The gods have lost their strength and are told that what will restore it lies dissolved in the sea, and that they cannot raise it alone. So they make terms with the asuras: churn together, share what comes up. A mountain is laid on its side for a churning staff and the serpent Vāsuki is wound round it for a rope. The mountain begins to sink and Viṣṇu goes under it as a tortoise and holds it. They pull. What the sea gives up first is not nectar but a poison dense enough to end everything, and the churning stops while the two sides look at it. Śiva drinks it and holds it in his throat, which is why he is painted with a blue throat. The churning resumes and the sea yields in turn a physician, a moon, a tree, a cow, a horse, an elephant, a goddess, and at last the nectar — at which the agreement collapses, as both sides had privately expected, and Viṣṇu takes a woman's form to distribute it and does not distribute it evenly.",
      kn: "ದೇವತೆಗಳು ಶಕ್ತಿ ಕಳೆದುಕೊಂಡಿದ್ದಾರೆ; ಅದನ್ನು ಮರಳಿಸುವುದು ಸಮುದ್ರದಲ್ಲಿ ಕರಗಿದೆ, ಮತ್ತು ಒಬ್ಬರೇ ಅದನ್ನು ಮೇಲೆತ್ತಲಾಗದು ಎಂದು ಅವರಿಗೆ ತಿಳಿಸಲಾಗುತ್ತದೆ. ಆದ್ದರಿಂದ ಅಸುರರೊಡನೆ ಒಪ್ಪಂದ: ಒಟ್ಟಿಗೆ ಕಡೆಯೋಣ, ಬಂದದ್ದನ್ನು ಹಂಚಿಕೊಳ್ಳೋಣ. ಕಡೆಗೋಲಿಗಾಗಿ ಒಂದು ಪರ್ವತವನ್ನು ಮಲಗಿಸಲಾಗುತ್ತದೆ, ಹಗ್ಗಕ್ಕಾಗಿ ವಾಸುಕಿಯನ್ನು ಸುತ್ತಲಾಗುತ್ತದೆ. ಪರ್ವತ ಮುಳುಗತೊಡಗಿದಾಗ ವಿಷ್ಣು ಕೂರ್ಮವಾಗಿ ಕೆಳಗೆ ಹೋಗಿ ಅದನ್ನು ಹೊರುತ್ತಾನೆ. ಎಳೆಯುತ್ತಾರೆ. ಸಮುದ್ರ ಮೊದಲು ಕೊಡುವುದು ಅಮೃತವಲ್ಲ, ಎಲ್ಲವನ್ನೂ ಮುಗಿಸುವಷ್ಟು ಗಾಢವಾದ ವಿಷ; ಅದನ್ನು ನೋಡುತ್ತ ಎರಡೂ ಕಡೆಯವರು ನಿಲ್ಲಿಸುತ್ತಾರೆ. ಶಿವ ಅದನ್ನು ಕುಡಿದು ಕಂಠದಲ್ಲಿ ಹಿಡಿದಿಡುತ್ತಾನೆ — ಆದ್ದರಿಂದಲೇ ಅವನ ಕೊರಳು ನೀಲಿ. ಮಥನ ಮತ್ತೆ ಆರಂಭವಾಗಿ ಸಮುದ್ರ ಸರದಿಯಲ್ಲಿ ಒಬ್ಬ ವೈದ್ಯ, ಒಂದು ಚಂದ್ರ, ಒಂದು ಮರ, ಒಂದು ಹಸು, ಒಂದು ಕುದುರೆ, ಒಂದು ಆನೆ, ಒಬ್ಬ ದೇವಿ, ಕೊನೆಗೆ ಅಮೃತ — ಆಗ ಒಪ್ಪಂದ ಮುರಿಯುತ್ತದೆ, ಎರಡೂ ಕಡೆಯವರು ಒಳಗೊಳಗೇ ನಿರೀಕ್ಷಿಸಿದಂತೆ; ಮತ್ತು ವಿಷ್ಣು ಹೆಣ್ಣಿನ ರೂಪ ತಾಳಿ ಅದನ್ನು ಹಂಚುತ್ತಾನೆ, ಸಮನಾಗಿ ಅಲ್ಲ.",
      hi: "देवता बल खो चुके हैं और उन्हें बताया जाता है कि जो उसे लौटाएगा वह समुद्र में घुला है, और वे अकेले उसे नहीं निकाल सकते। सो असुरों से शर्त होती है: साथ मथें, जो निकले बाँट लें। मथानी के लिए एक पर्वत लिटाया जाता है, रस्सी के लिए वासुकि लपेटा जाता है। पर्वत डूबने लगता है तो विष्णु कूर्म बनकर नीचे जाकर उसे थाम लेते हैं। वे खींचते हैं। समुद्र पहले अमृत नहीं, सब कुछ समाप्त कर देने योग्य गाढ़ा विष देता है, और उसे देखकर मंथन रुक जाता है। शिव उसे पीकर कंठ में रोक लेते हैं — इसीलिए उनका कंठ नीला चित्रित होता है। मंथन फिर चलता है और समुद्र क्रमशः एक वैद्य, एक चंद्र, एक वृक्ष, एक गौ, एक अश्व, एक गज, एक देवी, और अंत में अमृत देता है — तब वह समझौता टूट जाता है, जैसा दोनों पक्ष मन ही मन अपेक्षा कर रहे थे; और विष्णु स्त्री-रूप धारण कर उसे बाँटते हैं, समान रूप से नहीं।",
    },
    reading: {
      en: "The usual reading takes the churning as any sustained effort and the poison as what comes up first from one — the thing you were not working for and must deal with before anything else. That the gods needed the asuras to get what they wanted is read as part of it. All of this is interpretation laid over a story that is, on its face, about a treaty made in bad faith by both parties.",
      kn: "ಸಾಮಾನ್ಯ ಓದು ಮಥನವನ್ನು ಯಾವುದೇ ದೀರ್ಘ ಪ್ರಯತ್ನವೆಂದೂ, ವಿಷವನ್ನು ಅಂಥ ಪ್ರಯತ್ನದಿಂದ ಮೊದಲು ಮೇಲೆ ಬರುವುದೆಂದೂ ತೆಗೆದುಕೊಳ್ಳುತ್ತದೆ — ನೀವು ಬಯಸದ, ಆದರೆ ಬೇರೆ ಯಾವುದಕ್ಕೂ ಮೊದಲು ನಿಭಾಯಿಸಬೇಕಾದದ್ದು. ಬಯಸಿದ್ದನ್ನು ಪಡೆಯಲು ದೇವತೆಗಳಿಗೆ ಅಸುರರು ಬೇಕಾದರು ಎಂಬುದನ್ನೂ ಅದರ ಭಾಗವಾಗಿ ಓದಲಾಗುತ್ತದೆ. ಇವೆಲ್ಲವೂ, ಮೇಲ್ನೋಟಕ್ಕೆ ಎರಡೂ ಕಡೆಯವರು ಕೆಟ್ಟ ನಂಬಿಕೆಯಿಂದ ಮಾಡಿದ ಒಪ್ಪಂದದ ಕಥೆಯ ಮೇಲೆ ಹೊದಿಸಿದ ವ್ಯಾಖ್ಯಾನ.",
      hi: "सामान्य पाठ मंथन को किसी भी दीर्घ प्रयत्न के रूप में और विष को ऐसे प्रयत्न से सबसे पहले ऊपर आने वाली वस्तु के रूप में लेता है — जिसके लिए आप काम नहीं कर रहे थे और जिसे सबसे पहले सँभालना पड़ता है। जो चाहिए था उसे पाने के लिए देवों को असुर चाहिए थे, यह भी उसी का अंग माना जाता है। यह सब उस कथा पर चढ़ाई गई व्याख्या है जो ऊपरी तल पर दोनों पक्षों द्वारा कपट से की गई संधि की कथा है।",
    },
    differs: {
      en: "The lists of what came out of the sea do not agree. Fourteen is the commonest count, but the Purāṇas that give it do not name the same fourteen, and some tellings leave the goddess out of the sequence entirely.",
      kn: "ಸಮುದ್ರದಿಂದ ಬಂದವುಗಳ ಪಟ್ಟಿಗಳು ಹೊಂದುವುದಿಲ್ಲ. ಹದಿನಾಲ್ಕು ಅತಿ ಸಾಮಾನ್ಯ ಸಂಖ್ಯೆ, ಆದರೆ ಅದನ್ನು ಕೊಡುವ ಪುರಾಣಗಳು ಒಂದೇ ಹದಿನಾಲ್ಕನ್ನು ಹೆಸರಿಸುವುದಿಲ್ಲ, ಮತ್ತು ಕೆಲವು ಕಥನಗಳು ದೇವಿಯನ್ನು ಆ ಸರಣಿಯಿಂದಲೇ ಬಿಟ್ಟುಬಿಡುತ್ತವೆ.",
      hi: "समुद्र से निकली वस्तुओं की सूचियाँ मेल नहीं खातीं। चौदह सबसे प्रचलित संख्या है, पर जो पुराण उसे देते हैं वे एक ही चौदह के नाम नहीं लेते, और कुछ कथन देवी को उस क्रम से पूरी तरह छोड़ देते हैं।",
    },
    links: [
      L("/puranas/kurma", "The Kūrma Purāṇa", "ಕೂರ್ಮ ಪುರಾಣ", "कूर्म पुराण"),
      L("/rituals/pradosha", "Pradoṣa", "ಪ್ರದೋಷ", "प्रदोष"),
    ],
  },
  {
    slug: "vamana-bali",
    name: { en: "Vāmana and Bali", kn: "ವಾಮನ ಮತ್ತು ಬಲಿ", hi: "वामन और बलि" },
    sanskrit: "वामनावतारः",
    order: 4,
    purana: "vamana",
    told: {
      en: "Vāmana Purāṇa; also the Bhāgavata's eighth skandha.",
      kn: "ವಾಮನ ಪುರಾಣ; ಭಾಗವತದ ಎಂಟನೇ ಸ್ಕಂಧದಲ್ಲೂ.",
      hi: "वामन पुराण; भागवत के अष्टम स्कंध में भी।",
    },
    lede: {
      en: "A king is asked for three paces of ground by a dwarf, is warned what it is, and gives anyway.",
      kn: "ಒಬ್ಬ ಕುಬ್ಜ ರಾಜನಿಂದ ಮೂರು ಹೆಜ್ಜೆ ನೆಲ ಕೇಳುತ್ತಾನೆ; ಅದು ಏನೆಂದು ರಾಜನಿಗೆ ಎಚ್ಚರಿಕೆ ಸಿಗುತ್ತದೆ, ಮತ್ತು ಅವನು ಕೊಡುತ್ತಾನೆ.",
      hi: "एक वामन राजा से तीन पग भूमि माँगता है; राजा को चेताया जाता है कि वह कौन है, और वह फिर भी देता है।",
    },
    story: {
      en: "Bali, grandson of Prahlāda, has taken the three worlds and rules them well; the complaint against him is not that he is unjust but that he holds what is not his. At a sacrifice where he has undertaken to refuse nobody, a brāhmaṇa boy, very short, asks for as much ground as he can cover in three paces. Bali laughs and agrees. His own teacher Śukrācārya stops him: he has recognised the boy, and tells him the measure will not stay small. Bali answers that a man who has promised and then measures the cost has not promised. He pours the water that seals the gift. The boy grows. One step covers the earth, the second the sky, and there is no third place to put a foot. Bali offers his own head. The foot comes down on it and he is sent to the underworld — and given it, and given a yearly leave to come up and see the people he ruled.",
      kn: "ಪ್ರಹ್ಲಾದನ ಮೊಮ್ಮಗ ಬಲಿ ಮೂರು ಲೋಕಗಳನ್ನು ಗೆದ್ದು ಚೆನ್ನಾಗಿಯೇ ಆಳುತ್ತಿದ್ದಾನೆ; ಅವನ ಮೇಲಿನ ದೂರು ಅವನು ಅನ್ಯಾಯಿ ಎಂಬುದಲ್ಲ, ತನ್ನದಲ್ಲದ್ದನ್ನು ಹಿಡಿದಿದ್ದಾನೆ ಎಂಬುದು. ಯಾರಿಗೂ ಇಲ್ಲ ಎನ್ನುವುದಿಲ್ಲ ಎಂದು ಸಂಕಲ್ಪಿಸಿದ ಯಜ್ಞದಲ್ಲಿ, ಬಹಳ ಕುಳ್ಳಗಿನ ಒಬ್ಬ ಬ್ರಾಹ್ಮಣ ಹುಡುಗ ತಾನು ಮೂರು ಹೆಜ್ಜೆಯಲ್ಲಿ ಅಳೆಯಬಹುದಾದಷ್ಟು ನೆಲ ಕೇಳುತ್ತಾನೆ. ಬಲಿ ನಕ್ಕು ಒಪ್ಪುತ್ತಾನೆ. ಅವನ ಗುರು ಶುಕ್ರಾಚಾರ್ಯ ತಡೆಯುತ್ತಾನೆ: ಹುಡುಗನನ್ನು ಗುರುತಿಸಿದ್ದಾನೆ, ಮತ್ತು ಆ ಅಳತೆ ಚಿಕ್ಕದಾಗಿ ಉಳಿಯುವುದಿಲ್ಲ ಎನ್ನುತ್ತಾನೆ. ಮಾತು ಕೊಟ್ಟ ಮೇಲೆ ಬೆಲೆ ಲೆಕ್ಕ ಹಾಕುವವನು ಮಾತು ಕೊಟ್ಟಂತೆ ಅಲ್ಲ ಎಂದು ಬಲಿ ಉತ್ತರಿಸುತ್ತಾನೆ. ದಾನವನ್ನು ಮುದ್ರಿಸುವ ನೀರನ್ನು ಸುರಿಯುತ್ತಾನೆ. ಹುಡುಗ ಬೆಳೆಯುತ್ತಾನೆ. ಒಂದು ಹೆಜ್ಜೆ ಭೂಮಿಯನ್ನು, ಎರಡನೆಯದು ಆಕಾಶವನ್ನು ಆವರಿಸುತ್ತದೆ, ಮೂರನೆಯದನ್ನು ಇಡಲು ಜಾಗವಿಲ್ಲ. ಬಲಿ ತನ್ನ ತಲೆಯನ್ನೇ ಒಡ್ಡುತ್ತಾನೆ. ಪಾದ ಅದರ ಮೇಲೆ ಇಳಿಯುತ್ತದೆ, ಅವನನ್ನು ಪಾತಾಳಕ್ಕೆ ಕಳುಹಿಸಲಾಗುತ್ತದೆ — ಮತ್ತು ಅದನ್ನೇ ಅವನಿಗೆ ಕೊಡಲಾಗುತ್ತದೆ, ಜೊತೆಗೆ ತಾನು ಆಳಿದ ಜನರನ್ನು ನೋಡಲು ವರ್ಷಕ್ಕೊಮ್ಮೆ ಮೇಲೆ ಬರುವ ಅನುಮತಿಯೂ.",
      hi: "प्रह्लाद का पौत्र बलि तीनों लोक जीतकर अच्छा ही शासन कर रहा है; उस पर आरोप यह नहीं कि वह अन्यायी है, बल्कि यह कि जो उसका नहीं वह उसके पास है। जिस यज्ञ में उसने किसी को मना न करने का संकल्प लिया है, वहाँ एक अत्यंत ठिगना ब्राह्मण बालक उतनी भूमि माँगता है जितनी वह तीन पग में नाप ले। बलि हँसकर मान जाता है। उसके गुरु शुक्राचार्य रोकते हैं: उन्होंने बालक को पहचान लिया है, और कहते हैं कि वह नाप छोटी नहीं रहेगी। बलि उत्तर देता है कि जो वचन देकर मूल्य गिनने लगे उसने वचन दिया ही नहीं। वह दान को मुद्रित करने वाला जल डाल देता है। बालक बढ़ता है। एक पग पृथ्वी को, दूसरा आकाश को ढक लेता है, और तीसरा रखने को स्थान नहीं बचता। बलि अपना सिर आगे कर देता है। चरण उस पर उतरता है और उसे पाताल भेजा जाता है — और वही उसे दे भी दिया जाता है, साथ में वर्ष में एक बार ऊपर आकर अपनी प्रजा को देखने की छूट भी।",
    },
    reading: {
      en: "Bali is read as the measure of what a promise is worth when keeping it costs everything, and the story is unusual among demon-stories in that its demon is the one who behaves well. Kerala keeps his yearly return as Onam and the Deccan as Balipāḍyami at Dīpāvali, which is a people honouring the figure their scripture dispossesses.",
      kn: "ಪಾಲಿಸುವುದು ಎಲ್ಲವನ್ನೂ ಕಳೆಯುವಾಗ ಕೊಟ್ಟ ಮಾತಿನ ಬೆಲೆ ಎಷ್ಟು ಎಂಬುದರ ಅಳತೆಯಾಗಿ ಬಲಿಯನ್ನು ಓದಲಾಗುತ್ತದೆ; ಮತ್ತು ಅಸುರ ಕಥೆಗಳಲ್ಲಿ ಇದು ಅಸಾಮಾನ್ಯ — ಇಲ್ಲಿ ಚೆನ್ನಾಗಿ ನಡೆದುಕೊಳ್ಳುವವನು ಅಸುರನೇ. ಕೇರಳ ಅವನ ವಾರ್ಷಿಕ ಮರಳುವಿಕೆಯನ್ನು ಓಣಂ ಆಗಿ, ದಖ್ಖನ್ ದೀಪಾವಳಿಯಲ್ಲಿ ಬಲಿಪಾಡ್ಯಮಿಯಾಗಿ ಆಚರಿಸುತ್ತದೆ — ಅಂದರೆ ತಮ್ಮ ಗ್ರಂಥ ಯಾರನ್ನು ಪದಚ್ಯುತಗೊಳಿಸುತ್ತದೋ ಅವನನ್ನೇ ಜನ ಗೌರವಿಸುತ್ತಿದ್ದಾರೆ.",
      hi: "बलि को इस कसौटी के रूप में पढ़ा जाता है कि जब निभाना सब कुछ ले ले तब वचन का मूल्य क्या है; और असुर-कथाओं में यह असामान्य है — यहाँ भला आचरण असुर का ही है। केरल उसकी वार्षिक वापसी को ओणम और दक्कन दीपावली में बलिपाड्यमि के रूप में मनाता है — अर्थात् लोग उसी का सम्मान करते हैं जिसे उनका ग्रंथ पदच्युत करता है।",
    },
    links: [
      L("/puranas/vamana", "The Vāmana Purāṇa", "ವಾಮನ ಪುರಾಣ", "वामन पुराण"),
      L("/festivals/deepavali", "Dīpāvali", "ದೀಪಾವಳಿ", "दीपावली"),
    ],
  },
  {
    slug: "gajendra-moksha",
    name: { en: "The elephant and the crocodile", kn: "ಗಜೇಂದ್ರ ಮೋಕ್ಷ", hi: "गजेंद्र मोक्ष" },
    sanskrit: "गजेन्द्रमोक्षः",
    order: 5,
    purana: "bhagavata",
    told: {
      en: "Bhāgavata Purāṇa, eighth skandha.",
      kn: "ಭಾಗವತ ಪುರಾಣ, ಎಂಟನೇ ಸ್ಕಂಧ.",
      hi: "भागवत पुराण, अष्टम स्कंध।",
    },
    lede: {
      en: "An elephant is held under water by a crocodile for a very long time, and is let go only when he stops pulling.",
      kn: "ಒಂದು ಆನೆಯನ್ನು ಮೊಸಳೆ ಬಹುಕಾಲ ನೀರಿನೊಳಗೆ ಹಿಡಿದಿಡುತ್ತದೆ; ಅದು ಎಳೆಯುವುದನ್ನು ನಿಲ್ಲಿಸಿದಾಗಲಷ್ಟೇ ಬಿಡುಗಡೆ.",
      hi: "एक हाथी को मगर बहुत समय तक जल में पकड़े रखता है, और छूट तभी मिलती है जब वह खींचना छोड़ देता है।",
    },
    story: {
      en: "The leader of a herd goes into a lake to drink and a crocodile takes him by the foot. He is enormously strong and he uses all of it. The struggle is described as lasting a very long time — the text gives a figure in thousands of years, which is its way of saying that it went on past any reasonable hope. His herd stands on the bank and can do nothing. When his strength is finally gone, he lifts a lotus in his trunk with the last of it and calls out, no longer to anyone he knows. Viṣṇu arrives, cuts the crocodile, and pulls him out — and the crocodile, released, turns out to have been a gandharva under a curse, so that the thing holding him down was never quite what it looked like either.",
      kn: "ಒಂದು ಹಿಂಡಿನ ನಾಯಕ ನೀರು ಕುಡಿಯಲು ಕೆರೆಗೆ ಇಳಿಯುತ್ತದೆ, ಮೊಸಳೆ ಅದರ ಕಾಲನ್ನು ಹಿಡಿಯುತ್ತದೆ. ಅದು ಅಪಾರ ಬಲಶಾಲಿ, ಮತ್ತು ಆ ಬಲವನ್ನೆಲ್ಲ ಬಳಸುತ್ತದೆ. ಹೋರಾಟ ಬಹುಕಾಲ ನಡೆಯಿತೆಂದು ವರ್ಣನೆ — ಗ್ರಂಥ ಸಾವಿರಾರು ವರ್ಷಗಳ ಅಂಕಿ ಕೊಡುತ್ತದೆ; ಯಾವುದೇ ಸಮಂಜಸ ಆಸೆಯನ್ನೂ ಮೀರಿ ಅದು ಸಾಗಿತು ಎಂದು ಹೇಳುವ ಅದರ ರೀತಿ ಅದು. ಅದರ ಹಿಂಡು ದಡದಲ್ಲಿ ನಿಂತು ಏನೂ ಮಾಡಲಾರದು. ಕೊನೆಗೆ ಬಲ ಮುಗಿದಾಗ, ಉಳಿದ ಕೊನೆಯ ಅಂಶದಿಂದ ಸೊಂಡಿಲಲ್ಲಿ ಒಂದು ಕಮಲವನ್ನು ಎತ್ತಿ ಕೂಗುತ್ತದೆ — ಇನ್ನು ತನಗೆ ಗೊತ್ತಿರುವ ಯಾರನ್ನೂ ಅಲ್ಲ. ವಿಷ್ಣು ಬಂದು ಮೊಸಳೆಯನ್ನು ಕತ್ತರಿಸಿ ಅದನ್ನು ಮೇಲೆತ್ತುತ್ತಾನೆ — ಮತ್ತು ಬಿಡುಗಡೆಯಾದ ಮೊಸಳೆ ಶಾಪಗ್ರಸ್ತ ಗಂಧರ್ವನೆಂದು ತಿಳಿಯುತ್ತದೆ; ಹಾಗಾಗಿ ಅದನ್ನು ಕೆಳಗೆ ಹಿಡಿದಿದ್ದದ್ದೂ ಕಾಣುತ್ತಿದ್ದಂತೆ ಇರಲಿಲ್ಲ.",
      hi: "एक झुंड का नायक जल पीने सरोवर में उतरता है और मगर उसका पैर पकड़ लेता है। वह अत्यंत बलशाली है और अपना सारा बल लगाता है। संघर्ष बहुत लंबा चलता है — ग्रंथ हज़ारों वर्षों का अंक देता है, जो उसका यह कहने का ढंग है कि वह हर उचित आशा से आगे तक चला। उसका झुंड तट पर खड़ा कुछ नहीं कर सकता। जब अंततः बल चुक जाता है, तब बचे हुए अंतिम अंश से वह सूँड में एक कमल उठाकर पुकारता है — अब किसी परिचित को नहीं। विष्णु आते हैं, मगर को काटते हैं, और उसे बाहर खींच लेते हैं — और छूटा हुआ मगर शापग्रस्त गंधर्व निकलता है; अर्थात् जो उसे नीचे खींच रहा था वह भी वैसा नहीं था जैसा दिखता था।",
    },
    reading: {
      en: "It is read as the point at which effort ends and something else begins — the call is answered not when it is loudest but when it is last. The reading is old and the text invites it. What the story states is narrower: that he was strong, that strength was not enough, and that he was pulled out.",
      kn: "ಪ್ರಯತ್ನ ಮುಗಿದು ಬೇರೇನೋ ಆರಂಭವಾಗುವ ಬಿಂದುವಾಗಿ ಇದನ್ನು ಓದಲಾಗುತ್ತದೆ — ಕೂಗಿಗೆ ಉತ್ತರ ಸಿಗುವುದು ಅದು ಅತಿ ಜೋರಾಗಿದ್ದಾಗ ಅಲ್ಲ, ಕೊನೆಯದಾಗಿದ್ದಾಗ. ಈ ಓದು ಹಳೆಯದು ಮತ್ತು ಗ್ರಂಥವೇ ಅದಕ್ಕೆ ಆಹ್ವಾನಿಸುತ್ತದೆ. ಕಥೆ ಹೇಳುವುದು ಇನ್ನೂ ಕಿರಿದು: ಅದು ಬಲಶಾಲಿಯಾಗಿತ್ತು, ಬಲ ಸಾಲಲಿಲ್ಲ, ಮತ್ತು ಅದನ್ನು ಮೇಲೆತ್ತಲಾಯಿತು.",
      hi: "इसे उस बिंदु के रूप में पढ़ा जाता है जहाँ प्रयत्न समाप्त होता है और कुछ और आरंभ होता है — पुकार का उत्तर तब नहीं मिलता जब वह सबसे ऊँची हो, बल्कि तब जब वह अंतिम हो। यह पाठ पुराना है और ग्रंथ स्वयं उसे आमंत्रित करता है। कथा जो कहती है वह अधिक सीमित है: वह बलशाली था, बल पर्याप्त न हुआ, और उसे बाहर खींचा गया।",
    },
    links: [L("/puranas/bhagavata", "The Bhāgavata", "ಭಾಗವತ", "भागवत")],
  },
  {
    slug: "mahishasura-mardini",
    name: { en: "The goddess and the buffalo", kn: "ಮಹಿಷಾಸುರ ಮರ್ದಿನಿ", hi: "महिषासुर मर्दिनी" },
    sanskrit: "महिषासुरमर्दिनी",
    order: 6,
    purana: "markandeya",
    told: {
      en: "The Devī Māhātmya, thirteen chapters inside the Mārkaṇḍeya Purāṇa.",
      kn: "ದೇವೀ ಮಾಹಾತ್ಮ್ಯ — ಮಾರ್ಕಂಡೇಯ ಪುರಾಣದೊಳಗಿನ ಹದಿಮೂರು ಅಧ್ಯಾಯಗಳು.",
      hi: "देवी माहात्म्य — मार्कंडेय पुराण के भीतर तेरह अध्याय।",
    },
    lede: {
      en: "The gods, beaten, pool what is left of their power, and what it makes is not one of them.",
      kn: "ಸೋತ ದೇವತೆಗಳು ಉಳಿದ ಶಕ್ತಿಯನ್ನು ಒಟ್ಟುಗೂಡಿಸುತ್ತಾರೆ, ಮತ್ತು ಅದರಿಂದ ಹುಟ್ಟುವುದು ಅವರಲ್ಲಿ ಒಬ್ಬರಲ್ಲ.",
      hi: "पराजित देवता अपनी बची शक्ति एकत्र करते हैं, और उससे जो बनता है वह उनमें से कोई नहीं।",
    },
    story: {
      en: "Mahiṣa, who can take the form of a buffalo, has driven the gods out of heaven, and the boon he holds makes him safe from every male. Having no other move, the gods release their energies together; the combined light takes the form of a woman, and each god gives her the weapon he fights with, so that she is armed entirely with borrowed arms. She goes out alone. Mahiṣa changes shape repeatedly during the fight — buffalo, lion, man, elephant, buffalo again — and she kills him in the moment between two of the changes, when he is neither. The hymn the gods sing afterwards addresses her not as their creation but as what they were drawing on all along.",
      kn: "ಎಮ್ಮೆಯ ರೂಪ ತಾಳಬಲ್ಲ ಮಹಿಷ ದೇವತೆಗಳನ್ನು ಸ್ವರ್ಗದಿಂದ ಓಡಿಸಿದ್ದಾನೆ; ಅವನ ವರ ಅವನನ್ನು ಪ್ರತಿ ಪುರುಷನಿಂದಲೂ ಸುರಕ್ಷಿತನಾಗಿಸಿದೆ. ಬೇರೆ ದಾರಿಯಿಲ್ಲದೆ ದೇವತೆಗಳು ತಮ್ಮ ಶಕ್ತಿಗಳನ್ನು ಒಟ್ಟಿಗೆ ಬಿಡುಗಡೆ ಮಾಡುತ್ತಾರೆ; ಒಟ್ಟುಗೂಡಿದ ಬೆಳಕು ಹೆಣ್ಣಿನ ರೂಪ ತಾಳುತ್ತದೆ, ಮತ್ತು ಪ್ರತಿ ದೇವತೆ ತಾನು ಹೋರಾಡುವ ಆಯುಧವನ್ನು ಅವಳಿಗೆ ಕೊಡುತ್ತಾನೆ — ಹಾಗಾಗಿ ಅವಳ ಆಯುಧಗಳೆಲ್ಲವೂ ಎರವಲು. ಅವಳು ಒಬ್ಬಳೇ ಹೊರಡುತ್ತಾಳೆ. ಯುದ್ಧದಲ್ಲಿ ಮಹಿಷ ಪದೇ ಪದೇ ರೂಪ ಬದಲಿಸುತ್ತಾನೆ — ಎಮ್ಮೆ, ಸಿಂಹ, ಮನುಷ್ಯ, ಆನೆ, ಮತ್ತೆ ಎಮ್ಮೆ — ಮತ್ತು ಎರಡು ಬದಲಾವಣೆಗಳ ನಡುವಿನ ಕ್ಷಣದಲ್ಲಿ, ಅವನು ಯಾವುದೂ ಅಲ್ಲದಾಗ, ಅವಳು ಅವನನ್ನು ಕೊಲ್ಲುತ್ತಾಳೆ. ನಂತರ ದೇವತೆಗಳು ಹಾಡುವ ಸ್ತುತಿ ಅವಳನ್ನು ತಮ್ಮ ಸೃಷ್ಟಿಯೆಂದಲ್ಲ, ತಾವು ಮೊದಲಿನಿಂದಲೂ ಯಾವುದರಿಂದ ಪಡೆಯುತ್ತಿದ್ದರೋ ಅದೆಂದು ಸಂಬೋಧಿಸುತ್ತದೆ.",
      hi: "महिष, जो भैंसे का रूप ले सकता है, देवताओं को स्वर्ग से निकाल चुका है, और उसका वरदान उसे हर पुरुष से सुरक्षित रखता है। कोई चाल न बचने पर देवता अपनी शक्तियाँ एक साथ मुक्त करते हैं; संयुक्त तेज स्त्री का रूप लेता है, और हर देवता उसे वही शस्त्र देता है जिससे वह स्वयं लड़ता है — अर्थात् उसके सारे शस्त्र उधार के हैं। वह अकेली निकलती है। युद्ध में महिष बार-बार रूप बदलता है — भैंसा, सिंह, मनुष्य, गज, फिर भैंसा — और दो रूपों के बीच के क्षण में, जब वह कुछ भी नहीं होता, वह उसे मार देती है। उसके बाद देवता जो स्तुति गाते हैं वह उसे अपनी रचना नहीं, बल्कि वह कहकर संबोधित करती है जिससे वे आरंभ से ही लेते आ रहे थे।",
    },
    reading: {
      en: "The usual reading turns on the borrowed weapons and on the hymn: what the gods made turns out to be prior to them, so the story is read as saying that power was always hers and they were holding it on loan. That it is recited through all nine nights of Navarātri is the most direct link in this section between a text and a thing people do.",
      kn: "ಸಾಮಾನ್ಯ ಓದು ಎರವಲು ಆಯುಧಗಳ ಮೇಲೆ ಮತ್ತು ಆ ಸ್ತುತಿಯ ಮೇಲೆ ನಿಲ್ಲುತ್ತದೆ: ದೇವತೆಗಳು ಮಾಡಿದ್ದು ಅವರಿಗಿಂತಲೂ ಹಿಂದಿನದೆಂದು ತಿಳಿಯುತ್ತದೆ — ಹಾಗಾಗಿ ಶಕ್ತಿ ಸದಾ ಅವಳದೇ, ಅವರು ಅದನ್ನು ಎರವಲಾಗಿ ಹಿಡಿದಿದ್ದರು ಎಂದು ಓದಲಾಗುತ್ತದೆ. ನವರಾತ್ರಿಯ ಒಂಬತ್ತೂ ರಾತ್ರಿ ಇದನ್ನು ಪಾರಾಯಣ ಮಾಡುವುದು — ಈ ವಿಭಾಗದಲ್ಲಿ ಒಂದು ಗ್ರಂಥಕ್ಕೂ ಜನ ಮಾಡುವ ಕೆಲಸಕ್ಕೂ ಇರುವ ಅತಿ ನೇರ ಕೊಂಡಿ ಅದೇ.",
      hi: "सामान्य पाठ उधार के शस्त्रों पर और उस स्तुति पर टिकता है: देवताओं ने जो बनाया वह उनसे भी पूर्व निकलता है — इसलिए पढ़ा जाता है कि शक्ति सदा उसी की थी और वे उसे उधार लिए हुए थे। नवरात्रि की नौ रातों में इसका पाठ — इस अनुभाग में किसी ग्रंथ और लोगों के किए जाने वाले कर्म के बीच सबसे सीधा संबंध वही है।",
    },
    links: [
      L("/festivals/navaratri", "Navarātri", "ನವರಾತ್ರಿ", "नवरात्रि"),
      L("/puranas/markandeya", "The Mārkaṇḍeya Purāṇa", "ಮಾರ್ಕಂಡೇಯ ಪುರಾಣ", "मार्कंडेय पुराण"),
    ],
  },
  {
    slug: "jadabharata",
    name: { en: "Jaḍabharata", kn: "ಜಡಭರತ", hi: "जड़भरत" },
    sanskrit: "जडभरतोपाख्यानम्",
    order: 7,
    purana: "bhagavata",
    told: {
      en: "Bhāgavata Purāṇa, fifth skandha; also in the Viṣṇu Purāṇa.",
      kn: "ಭಾಗವತ ಪುರಾಣ, ಐದನೇ ಸ್ಕಂಧ; ವಿಷ್ಣು ಪುರಾಣದಲ್ಲೂ.",
      hi: "भागवत पुराण, पंचम स्कंध; विष्णु पुराण में भी।",
    },
    lede: {
      en: "A king gives everything up, and is undone by looking after a fawn.",
      kn: "ಒಬ್ಬ ರಾಜ ಎಲ್ಲವನ್ನೂ ಬಿಟ್ಟುಕೊಡುತ್ತಾನೆ, ಮತ್ತು ಒಂದು ಜಿಂಕೆ ಮರಿಯನ್ನು ನೋಡಿಕೊಳ್ಳುವುದರಿಂದ ಹಾಳಾಗುತ್ತಾನೆ.",
      hi: "एक राजा सब कुछ छोड़ देता है, और एक हिरण-शावक की देखभाल से चूक जाता है।",
    },
    story: {
      en: "Bharata, after whom the land is named in this telling, leaves his kingdom for the forest and lives there without attachment until a pregnant doe, startled by a lion, drops her fawn in the river and dies. He takes the fawn in. He feeds it, worries when it strays, and by the end is thinking of nothing else; the practice he went to the forest for has quietly stopped. He dies with the animal on his mind and is born a deer — knowing, in that birth, exactly why. Born human again, he refuses to be caught twice: he will not speak, will not work, lets himself be taken for an idiot, and is pressed into carrying a king's palanquin. He carries it badly, watching the ground for insects. The king abuses him, and he answers — and the answer, which is the point of the whole story, is the first and nearly the last thing he says.",
      kn: "ಈ ಕಥನದಲ್ಲಿ ನಾಡಿಗೆ ಹೆಸರಾದ ಭರತ ತನ್ನ ರಾಜ್ಯವನ್ನು ಬಿಟ್ಟು ಕಾಡಿಗೆ ಹೋಗಿ ಆಸಕ್ತಿಯಿಲ್ಲದೆ ಬದುಕುತ್ತಾನೆ — ಸಿಂಹದಿಂದ ಬೆಚ್ಚಿದ ಗರ್ಭಿಣಿ ಜಿಂಕೆ ನದಿಯಲ್ಲಿ ಮರಿ ಹಾಕಿ ಸಾಯುವವರೆಗೆ. ಅವನು ಮರಿಯನ್ನು ಒಳಗೆ ತೆಗೆದುಕೊಳ್ಳುತ್ತಾನೆ. ತಿನ್ನಿಸುತ್ತಾನೆ, ಅದು ದೂರ ಹೋದರೆ ಚಿಂತಿಸುತ್ತಾನೆ, ಕೊನೆಗೆ ಬೇರೇನನ್ನೂ ಯೋಚಿಸುವುದಿಲ್ಲ; ಯಾವುದಕ್ಕಾಗಿ ಕಾಡಿಗೆ ಬಂದನೋ ಆ ಸಾಧನೆ ಸದ್ದಿಲ್ಲದೆ ನಿಂತುಹೋಗಿದೆ. ಪ್ರಾಣಿಯ ನೆನಪಿನಲ್ಲೇ ಸತ್ತು ಜಿಂಕೆಯಾಗಿ ಹುಟ್ಟುತ್ತಾನೆ — ಆ ಜನ್ಮದಲ್ಲಿ ಏಕೆಂದು ನಿಖರವಾಗಿ ತಿಳಿದೇ. ಮತ್ತೆ ಮನುಷ್ಯನಾಗಿ ಹುಟ್ಟಿದಾಗ ಎರಡನೇ ಬಾರಿ ಸಿಕ್ಕಿಕೊಳ್ಳಲು ಒಪ್ಪುವುದಿಲ್ಲ: ಮಾತನಾಡುವುದಿಲ್ಲ, ಕೆಲಸ ಮಾಡುವುದಿಲ್ಲ, ದಡ್ಡನೆಂದು ಎಣಿಸಿಕೊಳ್ಳುತ್ತಾನೆ, ಮತ್ತು ರಾಜನ ಪಲ್ಲಕ್ಕಿ ಹೊರಲು ಒತ್ತಾಯಿಸಲ್ಪಡುತ್ತಾನೆ. ಹುಳುಗಳಿಗಾಗಿ ನೆಲ ನೋಡುತ್ತ ಅದನ್ನು ಕೆಟ್ಟದಾಗಿ ಹೊರುತ್ತಾನೆ. ರಾಜ ಬೈಯುತ್ತಾನೆ, ಮತ್ತು ಅವನು ಉತ್ತರಿಸುತ್ತಾನೆ — ಇಡೀ ಕಥೆಯ ತಿರುಳಾದ ಆ ಉತ್ತರವೇ ಅವನು ಹೇಳುವ ಮೊದಲ ಮತ್ತು ಬಹುತೇಕ ಕೊನೆಯ ಮಾತು.",
      hi: "इस कथन में जिसके नाम पर देश है, वह भरत अपना राज्य छोड़कर वन चला जाता है और अनासक्त रहता है — जब तक सिंह से चौंकी एक गर्भिणी हिरणी नदी में शावक जनकर मर नहीं जाती। वह शावक को ले लेता है। खिलाता है, वह दूर जाए तो चिंतित होता है, और अंत में और कुछ सोचता ही नहीं; जिसके लिए वन आया था वह साधना चुपचाप रुक चुकी है। वह उसी पशु के ध्यान में मरता है और हिरण होकर जन्मता है — उस जन्म में ठीक-ठीक जानते हुए कि क्यों। फिर मनुष्य होकर वह दूसरी बार फँसने से इनकार करता है: न बोलता है, न काम करता है, स्वयं को मूर्ख समझा जाने देता है, और राजा की पालकी ढोने के लिए पकड़ लिया जाता है। वह उसे बुरी तरह ढोता है, कीड़ों के लिए भूमि देखता हुआ। राजा उसे फटकारता है, और वह उत्तर देता है — और वही उत्तर, जो पूरी कथा का मर्म है, उसका पहला और लगभग अंतिम कथन है।",
    },
    reading: {
      en: "It is read as a warning that attachment does not need a large object — a kingdom was given up and a fawn was enough — and as a caution about the forest itself, since going somewhere quiet changes nothing on its own. Both are readings. The story's own interest is narrower and stranger: it is about a man who remembers.",
      kn: "ಆಸಕ್ತಿಗೆ ದೊಡ್ಡ ವಸ್ತು ಬೇಕಿಲ್ಲ ಎಂಬ ಎಚ್ಚರಿಕೆಯಾಗಿ ಇದನ್ನು ಓದಲಾಗುತ್ತದೆ — ರಾಜ್ಯ ಬಿಡಲಾಯಿತು, ಒಂದು ಜಿಂಕೆ ಮರಿ ಸಾಕಾಯಿತು — ಮತ್ತು ಕಾಡಿನ ಬಗೆಗೇ ಎಚ್ಚರಿಕೆಯಾಗಿ, ಏಕೆಂದರೆ ಸದ್ದಿಲ್ಲದ ಕಡೆ ಹೋಗುವುದರಿಂದಲೇ ಏನೂ ಬದಲಾಗುವುದಿಲ್ಲ. ಎರಡೂ ಓದುಗಳು. ಕಥೆಯ ತನ್ನದೇ ಆಸಕ್ತಿ ಹೆಚ್ಚು ಕಿರಿದು ಮತ್ತು ಹೆಚ್ಚು ವಿಚಿತ್ರ: ಇದು ನೆನಪಿಟ್ಟುಕೊಳ್ಳುವ ಒಬ್ಬ ಮನುಷ್ಯನ ಕಥೆ.",
      hi: "इसे इस चेतावनी के रूप में पढ़ा जाता है कि आसक्ति को बड़ी वस्तु नहीं चाहिए — राज्य छोड़ा गया, और एक हिरण-शावक पर्याप्त हुआ — और स्वयं वन के विषय में सावधानी के रूप में, क्योंकि किसी शांत स्थान पर चले जाने भर से कुछ नहीं बदलता। दोनों पाठ हैं। कथा की अपनी रुचि अधिक सीमित और अधिक विचित्र है: यह उस मनुष्य की कथा है जिसे स्मरण रहता है।",
    },
    links: [L("/concepts/vairagya", "Vairāgya", "ವೈರಾಗ್ಯ", "वैराग्य")],
  },
  {
    slug: "markandeya",
    name: { en: "Mārkaṇḍeya", kn: "ಮಾರ್ಕಂಡೇಯ", hi: "मार्कंडेय" },
    sanskrit: "मार्कण्डेयोपाख्यानम्",
    order: 8,
    purana: "skanda",
    told: {
      en: "Skanda Purāṇa, and the Śaiva Purāṇas generally.",
      kn: "ಸ್ಕಾಂದ ಪುರಾಣ, ಮತ್ತು ಸಾಮಾನ್ಯವಾಗಿ ಶೈವ ಪುರಾಣಗಳು.",
      hi: "स्कंद पुराण, और सामान्यतः शैव पुराण।",
    },
    lede: {
      en: "A boy is granted sixteen brilliant years instead of a long ordinary life, and his parents have to decide.",
      kn: "ಒಂದು ಹುಡುಗನಿಗೆ ದೀರ್ಘ ಸಾಮಾನ್ಯ ಬದುಕಿನ ಬದಲು ಹದಿನಾರು ಪ್ರಖರ ವರ್ಷಗಳು ದೊರೆಯುತ್ತವೆ, ಮತ್ತು ಅವನ ತಂದೆತಾಯಿ ನಿರ್ಧರಿಸಬೇಕು.",
      hi: "एक बालक को लंबे साधारण जीवन के बदले सोलह तेजस्वी वर्ष मिलते हैं, और उसके माता-पिता को निर्णय करना है।",
    },
    story: {
      en: "Mṛkaṇḍu and his wife are childless and are offered a choice: many sons who will be dull and live long, or one who will be remarkable and die at sixteen. They take the one. The boy is told nothing until the year arrives, and then he is told. He goes to a Śiva shrine and holds the liṅga. When Yama's noose comes it falls over both the boy and the stone. The story turns on that: Śiva comes out of the liṅga, not because a devotee called but because he has been physically included in the thing being taken away. Yama is driven off and the boy is left at sixteen, which is where the Purāṇas leave him — not given more years but held at that one.",
      kn: "ಮೃಕಂಡು ಮತ್ತು ಅವನ ಹೆಂಡತಿಗೆ ಮಕ್ಕಳಿಲ್ಲ; ಅವರಿಗೆ ಒಂದು ಆಯ್ಕೆ ಕೊಡಲಾಗುತ್ತದೆ: ಮಂದಬುದ್ಧಿಗಳಾಗಿ ಬಹುಕಾಲ ಬದುಕುವ ಹಲವು ಮಕ್ಕಳು, ಅಥವಾ ಅಸಾಧಾರಣನಾಗಿ ಹದಿನಾರಕ್ಕೆ ಸಾಯುವ ಒಬ್ಬ. ಅವರು ಒಬ್ಬನನ್ನೇ ಆರಿಸುತ್ತಾರೆ. ಆ ವರ್ಷ ಬರುವವರೆಗೆ ಹುಡುಗನಿಗೆ ಏನೂ ಹೇಳುವುದಿಲ್ಲ, ಆಮೇಲೆ ಹೇಳುತ್ತಾರೆ. ಅವನು ಶಿವನ ಗುಡಿಗೆ ಹೋಗಿ ಲಿಂಗವನ್ನು ತಬ್ಬಿಕೊಳ್ಳುತ್ತಾನೆ. ಯಮನ ಪಾಶ ಬಂದಾಗ ಅದು ಹುಡುಗನ ಮೇಲೂ ಕಲ್ಲಿನ ಮೇಲೂ ಬೀಳುತ್ತದೆ. ಕಥೆ ತಿರುಗುವುದು ಅಲ್ಲಿಯೇ: ಭಕ್ತ ಕರೆದನೆಂದಲ್ಲ, ಕಸಿದುಕೊಳ್ಳಲಾಗುತ್ತಿರುವ ವಸ್ತುವಿನಲ್ಲಿ ತಾನೂ ದೈಹಿಕವಾಗಿ ಸೇರಿಹೋದನೆಂದು ಶಿವ ಲಿಂಗದಿಂದ ಹೊರಬರುತ್ತಾನೆ. ಯಮ ಓಡಿಸಲ್ಪಡುತ್ತಾನೆ ಮತ್ತು ಹುಡುಗ ಹದಿನಾರರಲ್ಲೇ ಉಳಿಯುತ್ತಾನೆ — ಪುರಾಣಗಳು ಅವನನ್ನು ಬಿಡುವುದೂ ಅಲ್ಲಿಯೇ: ಹೆಚ್ಚು ವರ್ಷ ಕೊಟ್ಟಿಲ್ಲ, ಆ ಒಂದರಲ್ಲೇ ನಿಲ್ಲಿಸಲಾಗಿದೆ.",
      hi: "मृकंडु और उनकी पत्नी निःसंतान हैं और उन्हें एक चुनाव दिया जाता है: मंदबुद्धि किंतु दीर्घजीवी अनेक पुत्र, या एक जो असाधारण हो और सोलह वर्ष में मर जाए। वे एक को चुनते हैं। उस वर्ष के आने तक बालक को कुछ नहीं बताया जाता, फिर बताया जाता है। वह शिव के स्थान पर जाकर लिंग से लिपट जाता है। यम का पाश आता है तो वह बालक और पत्थर दोनों पर गिरता है। कथा वहीं मुड़ती है: शिव लिंग से इसलिए नहीं निकलते कि भक्त ने पुकारा, बल्कि इसलिए कि जो वस्तु ली जा रही है उसमें वे स्वयं भौतिक रूप से सम्मिलित हो गए हैं। यम भगा दिए जाते हैं और बालक सोलह पर ही रह जाता है — पुराण उसे वहीं छोड़ते हैं: अधिक वर्ष नहीं दिए, उसी एक पर रोक दिया।",
    },
    reading: {
      en: "It is read as a story about a protection that has to be taken hold of rather than asked for. The detail the retellings keep is the noose falling on the stone, which is also the detail that makes the Purāṇa's point about what a liṅga is: not an image of Śiva but Śiva, with the consequences that follow.",
      kn: "ಕೇಳುವುದಕ್ಕಿಂತ ಹಿಡಿದುಕೊಳ್ಳಬೇಕಾದ ರಕ್ಷಣೆಯ ಕಥೆಯಾಗಿ ಇದನ್ನು ಓದಲಾಗುತ್ತದೆ. ಮರುಕಥನಗಳು ಉಳಿಸಿಕೊಳ್ಳುವ ವಿವರವೆಂದರೆ ಪಾಶ ಕಲ್ಲಿನ ಮೇಲೆ ಬೀಳುವುದು — ಲಿಂಗವೆಂದರೇನು ಎಂಬ ಪುರಾಣದ ಮಾತನ್ನು ಹೇಳುವ ವಿವರವೂ ಅದೇ: ಅದು ಶಿವನ ಪ್ರತಿಮೆಯಲ್ಲ, ಶಿವನೇ — ಮತ್ತು ಅದರಿಂದ ಬರುವ ಪರಿಣಾಮಗಳ ಸಹಿತ.",
      hi: "इसे ऐसी रक्षा की कथा के रूप में पढ़ा जाता है जिसे माँगना नहीं, थाम लेना होता है। पुनःकथन जो विवरण बचाकर रखते हैं वह पाश का पत्थर पर गिरना है — और वही विवरण पुराण की यह बात कहता है कि लिंग क्या है: शिव की प्रतिमा नहीं, शिव स्वयं — और उसके परिणामों सहित।",
    },
    links: [L("/puranas/markandeya", "The Mārkaṇḍeya Purāṇa", "ಮಾರ್ಕಂಡೇಯ ಪುರಾಣ", "मार्कंडेय पुराण")],
  },
  {
    slug: "prithu",
    name: { en: "Pṛthu", kn: "ಪೃಥು", hi: "पृथु" },
    sanskrit: "पृथुचरितम्",
    order: 9,
    purana: "vishnu",
    told: {
      en: "Viṣṇu Purāṇa, book one; the Bhāgavata's fourth skandha.",
      kn: "ವಿಷ್ಣು ಪುರಾಣ, ಮೊದಲ ಅಂಶ; ಭಾಗವತದ ನಾಲ್ಕನೇ ಸ್ಕಂಧ.",
      hi: "विष्णु पुराण, प्रथम अंश; भागवत का चतुर्थ स्कंध।",
    },
    lede: {
      en: "The earth stops giving, a king takes up a bow against her, and what ends the quarrel is a bargain.",
      kn: "ಭೂಮಿ ಕೊಡುವುದನ್ನು ನಿಲ್ಲಿಸುತ್ತಾಳೆ, ಒಬ್ಬ ರಾಜ ಅವಳ ಮೇಲೆ ಬಿಲ್ಲು ಎತ್ತುತ್ತಾನೆ, ಮತ್ತು ಜಗಳ ಮುಗಿಯುವುದು ಒಂದು ಒಪ್ಪಂದದಿಂದ.",
      hi: "पृथ्वी देना बंद कर देती है, एक राजा उस पर धनुष उठाता है, और झगड़ा एक सौदे से समाप्त होता है।",
    },
    story: {
      en: "Pṛthu inherits a ruined kingdom: his predecessor was so bad a king that the earth withdrew her yield and nothing would grow. He takes up his bow and goes after her. She flees in the form of a cow and, cornered, makes an argument rather than a plea — that she has stopped because she was being plundered, and that a cow is milked by somebody who also feeds her. Pṛthu accepts it. He levels the ground, makes a calf of the first Manu, and milks her for grain; and the terms he agrees to are the terms the texts then treat as the definition of a king, who is owed a share and not the whole.",
      kn: "ಪೃಥುವಿಗೆ ಸಿಗುವುದು ಹಾಳಾದ ರಾಜ್ಯ: ಅವನ ಹಿಂದಿನವನು ಎಷ್ಟು ಕೆಟ್ಟ ರಾಜನೆಂದರೆ ಭೂಮಿ ತನ್ನ ಫಲವನ್ನು ಹಿಂತೆಗೆದುಕೊಂಡಳು ಮತ್ತು ಏನೂ ಬೆಳೆಯಲಿಲ್ಲ. ಅವನು ಬಿಲ್ಲು ಎತ್ತಿ ಅವಳ ಹಿಂದೆ ಹೋಗುತ್ತಾನೆ. ಅವಳು ಹಸುವಿನ ರೂಪದಲ್ಲಿ ಓಡುತ್ತಾಳೆ ಮತ್ತು ಸಿಕ್ಕಿಬಿದ್ದಾಗ ಬೇಡಿಕೊಳ್ಳುವ ಬದಲು ವಾದಿಸುತ್ತಾಳೆ — ತಾನು ನಿಲ್ಲಿಸಿದ್ದು ಲೂಟಿಗೊಳಗಾಗುತ್ತಿದ್ದ ಕಾರಣ, ಮತ್ತು ಹಸುವಿನ ಹಾಲು ಕರೆಯುವವನು ಅದಕ್ಕೆ ಮೇವೂ ಹಾಕುತ್ತಾನೆ. ಪೃಥು ಒಪ್ಪುತ್ತಾನೆ. ನೆಲವನ್ನು ಸಮಮಾಡಿ, ಮೊದಲ ಮನುವನ್ನು ಕರುವಾಗಿಸಿ, ಧಾನ್ಯಕ್ಕಾಗಿ ಅವಳನ್ನು ಕರೆಯುತ್ತಾನೆ; ಮತ್ತು ಅವನು ಒಪ್ಪುವ ಷರತ್ತುಗಳನ್ನೇ ಮುಂದೆ ಗ್ರಂಥಗಳು ರಾಜನ ವ್ಯಾಖ್ಯೆಯಾಗಿ ಪರಿಗಣಿಸುತ್ತವೆ — ಅವನಿಗೆ ಸಲ್ಲಬೇಕಾದದ್ದು ಒಂದು ಪಾಲು, ಇಡೀ ಅಲ್ಲ.",
      hi: "पृथु को उजड़ा राज्य मिलता है: उसका पूर्ववर्ती इतना बुरा राजा था कि पृथ्वी ने अपनी उपज खींच ली और कुछ नहीं उगा। वह धनुष उठाकर उसके पीछे जाता है। वह गौ के रूप में भागती है और घिर जाने पर याचना नहीं, तर्क करती है — कि उसने इसलिए रोका क्योंकि उसे लूटा जा रहा था, और गौ का दूध वही निकालता है जो उसे चारा भी देता है। पृथु मान लेता है। वह भूमि समतल करता है, प्रथम मनु को बछड़ा बनाता है, और अन्न के लिए उसे दुहता है; और जिन शर्तों पर वह सहमत होता है, ग्रंथ आगे उन्हीं को राजा की परिभाषा मानते हैं — जिसे एक भाग देय है, समूचा नहीं।",
    },
    reading: {
      en: "It is read as the oldest statement in the tradition that rule is conditional: the earth is not obliged to a king who takes without returning, and she argues her case rather than appealing to his mercy. The word pṛthivī is derived from his name in these texts, which is itself a claim about how old the arrangement is.",
      kn: "ಆಳ್ವಿಕೆ ಷರತ್ತುಬದ್ಧ ಎಂಬ ಪರಂಪರೆಯ ಅತಿ ಪ್ರಾಚೀನ ಹೇಳಿಕೆಯಾಗಿ ಇದನ್ನು ಓದಲಾಗುತ್ತದೆ: ಮರಳಿ ಕೊಡದೆ ತೆಗೆದುಕೊಳ್ಳುವ ರಾಜನಿಗೆ ಭೂಮಿ ಬದ್ಧಳಲ್ಲ, ಮತ್ತು ಅವಳು ಅವನ ಕರುಣೆಗೆ ಮೊರೆಯಿಡದೆ ತನ್ನ ಪಕ್ಷವನ್ನು ವಾದಿಸುತ್ತಾಳೆ. ಈ ಗ್ರಂಥಗಳಲ್ಲಿ ಪೃಥಿವೀ ಎಂಬ ಪದವನ್ನು ಅವನ ಹೆಸರಿನಿಂದ ಹುಟ್ಟಿಸಲಾಗಿದೆ — ಆ ವ್ಯವಸ್ಥೆ ಎಷ್ಟು ಹಳೆಯದು ಎಂಬುದರ ಬಗೆಗಿನ ಒಂದು ಹೇಳಿಕೆಯೇ ಅದು.",
      hi: "इसे परंपरा का यह प्राचीनतम कथन माना जाता है कि शासन सशर्त है: जो राजा लौटाए बिना लेता है उसके प्रति पृथ्वी बाध्य नहीं, और वह उसकी दया की याचना नहीं, अपना पक्ष रखती है। इन ग्रंथों में पृथिवी शब्द उसी के नाम से व्युत्पन्न किया गया है — जो स्वयं इस बात का दावा है कि यह व्यवस्था कितनी पुरानी है।",
    },
  },
];

export function storyBySlug(slug: string): Story | undefined {
  return STORIES.find((s) => s.slug === slug);
}

export function storiesInOrder(): Story[] {
  return [...STORIES].sort((a, b) => a.order - b.order);
}

export function storiesFromPurana(purana: string): Story[] {
  return storiesInOrder().filter((s) => s.purana === purana);
}
