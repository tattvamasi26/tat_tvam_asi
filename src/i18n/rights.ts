import type { Locale } from "./config";

// ─────────────────────────────────────────────────────────
//  Rights and reuse — the notice the site's opt-out signals point to
//  (robots.txt, the tdm-reservation header, /.well-known/tdmrep.json,
//  /ai.txt).
//
//  It claims only what the site made. The Vedas, the Upanishads, the
//  stotras and the old songs belong to no one, and the pictures belong
//  to the people credited beside them; a notice claiming those would
//  be false, and would weaken the claim that is true.
// ─────────────────────────────────────────────────────────

export interface RightsStrings {
  title: string;
  lede: string;
  sections: { heading: string; body: string[] }[];
  footerLink: string;
  /** Appended to a copied passage: "Source: Tat Tvam Asi, <url>". */
  copySource: string;
  /** "Reuse terms: <url>/rights". */
  copyTerms: string;
}

const en: RightsStrings = {
  title: "Rights and reuse",
  lede: "What on this site may be used, and how.",
  footerLink: "Rights and reuse",
  copySource: "Source",
  copyTerms: "Terms of reuse",
  sections: [
    {
      heading: "What belongs to the site",
      body: [
        "The translations, explanations and commentary, the longer studies of texts, temples and acharyas, the drawings made for the site, its design, and the way all of it is selected and arranged are the site's own work. They are protected by copyright, and all rights are reserved.",
      ],
    },
    {
      heading: "What does not",
      body: [
        "The texts themselves — the Vedas, the Upanishads, the Gita, the stotras and the old devotional songs — belong to no one, and nothing here claims them. What is reserved is this site's work on them.",
        "Each picture belongs to the person or institution credited beside it, under the licence named there.",
      ],
    },
    {
      heading: "What you may do",
      body: [
        "Read anything here, print a page for your own study, and quote a short passage with a link back to the page it came from.",
      ],
    },
    {
      heading: "What is not permitted",
      body: [
        "Copying pages or whole sections into another website, app, book or document.",
        "Collecting the site by automated means — scraping, bulk downloading, or crawling by anything other than a search engine indexing it.",
        "Using any part of it to train, fine-tune, evaluate or supply an artificial-intelligence or machine-learning system, or including it in a dataset. The site reserves its text-and-data-mining rights, as Article 4 of the European Union's Directive 2019/790 allows, and says so in a form machines read: robots.txt, the tdm-reservation header, /.well-known/tdmrep.json and /ai.txt.",
        "Anything beyond what is described above needs written permission from the site.",
      ],
    },
  ],
};

const kn: RightsStrings = {
  title: "ಹಕ್ಕುಗಳು ಮತ್ತು ಮರುಬಳಕೆ",
  lede: "ಈ ತಾಣದಲ್ಲಿರುವ ಯಾವುದನ್ನು, ಹೇಗೆ ಬಳಸಬಹುದು.",
  footerLink: "ಹಕ್ಕುಗಳು ಮತ್ತು ಮರುಬಳಕೆ",
  copySource: "ಮೂಲ",
  copyTerms: "ಮರುಬಳಕೆಯ ನಿಯಮಗಳು",
  sections: [
    {
      heading: "ತಾಣಕ್ಕೆ ಸೇರಿದ್ದು",
      body: [
        "ಅನುವಾದಗಳು, ವಿವರಣೆಗಳು ಮತ್ತು ವ್ಯಾಖ್ಯಾನ, ಗ್ರಂಥಗಳು, ದೇವಾಲಯಗಳು ಮತ್ತು ಆಚಾರ್ಯರ ಕುರಿತ ವಿಸ್ತೃತ ಅಧ್ಯಯನಗಳು, ತಾಣಕ್ಕಾಗಿ ರಚಿಸಿದ ಚಿತ್ರಗಳು, ಅದರ ವಿನ್ಯಾಸ ಮತ್ತು ಇವೆಲ್ಲವನ್ನೂ ಆಯ್ದು ಜೋಡಿಸಿರುವ ಕ್ರಮ — ಇವು ತಾಣದ ಸ್ವಂತ ಕೆಲಸ. ಇವು ಕೃತಿಸ್ವಾಮ್ಯದಿಂದ ರಕ್ಷಿತವಾಗಿವೆ; ಎಲ್ಲ ಹಕ್ಕುಗಳನ್ನೂ ಕಾಯ್ದಿರಿಸಲಾಗಿದೆ.",
      ],
    },
    {
      heading: "ತಾಣಕ್ಕೆ ಸೇರದ್ದು",
      body: [
        "ಮೂಲ ಗ್ರಂಥಗಳು — ವೇದಗಳು, ಉಪನಿಷತ್ತುಗಳು, ಗೀತೆ, ಸ್ತೋತ್ರಗಳು ಮತ್ತು ಹಳೆಯ ಭಕ್ತಿಗೀತೆಗಳು — ಯಾರ ಸ್ವತ್ತೂ ಅಲ್ಲ; ಇಲ್ಲಿ ಯಾವುದೂ ಅವುಗಳ ಮೇಲೆ ಹಕ್ಕು ಸಾಧಿಸುವುದಿಲ್ಲ. ಕಾಯ್ದಿರಿಸಿರುವುದು ಅವುಗಳ ಮೇಲೆ ಈ ತಾಣ ಮಾಡಿರುವ ಕೆಲಸ ಮಾತ್ರ.",
        "ಪ್ರತಿಯೊಂದು ಚಿತ್ರವೂ ಅದರ ಪಕ್ಕದಲ್ಲಿ ಹೆಸರಿಸಿರುವ ವ್ಯಕ್ತಿ ಅಥವಾ ಸಂಸ್ಥೆಗೆ, ಅಲ್ಲಿ ಹೇಳಿರುವ ಪರವಾನಗಿಯಡಿ ಸೇರಿದೆ.",
      ],
    },
    {
      heading: "ನೀವು ಮಾಡಬಹುದಾದದ್ದು",
      body: [
        "ಇಲ್ಲಿರುವ ಯಾವುದನ್ನಾದರೂ ಓದಬಹುದು, ನಿಮ್ಮ ಸ್ವಂತ ಅಧ್ಯಯನಕ್ಕಾಗಿ ಪುಟವನ್ನು ಮುದ್ರಿಸಬಹುದು, ಮತ್ತು ಚಿಕ್ಕ ಭಾಗವನ್ನು ಅದು ಬಂದ ಪುಟದ ಕೊಂಡಿಯೊಂದಿಗೆ ಉಲ್ಲೇಖಿಸಬಹುದು.",
      ],
    },
    {
      heading: "ಅನುಮತಿ ಇಲ್ಲದ್ದು",
      body: [
        "ಪುಟಗಳನ್ನು ಅಥವಾ ಇಡೀ ವಿಭಾಗಗಳನ್ನು ಬೇರೆ ಜಾಲತಾಣ, ಆ್ಯಪ್, ಪುಸ್ತಕ ಅಥವಾ ದಾಖಲೆಗೆ ನಕಲು ಮಾಡುವುದು.",
        "ತಾಣವನ್ನು ಯಂತ್ರಗಳ ಮೂಲಕ ಸಂಗ್ರಹಿಸುವುದು — ಸ್ಕ್ರೇಪಿಂಗ್, ಒಟ್ಟಾಗಿ ಡೌನ್‌ಲೋಡ್ ಮಾಡುವುದು, ಅಥವಾ ಸೂಚಿಕೆ ಮಾಡುವ ಶೋಧಯಂತ್ರವಲ್ಲದ ಯಾವುದರಿಂದಾದರೂ ಕ್ರಾಲ್ ಮಾಡುವುದು.",
        "ಇದರ ಯಾವುದೇ ಭಾಗವನ್ನು ಕೃತಕ ಬುದ್ಧಿಮತ್ತೆ ಅಥವಾ ಯಂತ್ರ ಕಲಿಕೆಯ ವ್ಯವಸ್ಥೆಯ ತರಬೇತಿ, ಸೂಕ್ಷ್ಮ ಹೊಂದಾಣಿಕೆ, ಮೌಲ್ಯಮಾಪನ ಅಥವಾ ಪೂರೈಕೆಗೆ ಬಳಸುವುದು, ಅಥವಾ ಯಾವುದೇ ದತ್ತಾಂಶ ಸಂಗ್ರಹದಲ್ಲಿ ಸೇರಿಸುವುದು. ಯುರೋಪಿಯನ್ ಒಕ್ಕೂಟದ ನಿರ್ದೇಶನ 2019/790ರ ಅನುಚ್ಛೇದ 4 ಅನುಮತಿಸುವಂತೆ ತಾಣವು ತನ್ನ ಪಠ್ಯ ಮತ್ತು ದತ್ತಾಂಶ ಗಣಿಗಾರಿಕೆಯ ಹಕ್ಕುಗಳನ್ನು ಕಾಯ್ದಿರಿಸಿದೆ, ಮತ್ತು ಅದನ್ನು ಯಂತ್ರಗಳು ಓದುವ ರೂಪದಲ್ಲೂ ಹೇಳಿದೆ: robots.txt, tdm-reservation ಹೆಡರ್, /.well-known/tdmrep.json ಮತ್ತು /ai.txt.",
        "ಮೇಲೆ ಹೇಳಿದ್ದಕ್ಕಿಂತ ಹೆಚ್ಚಿನ ಯಾವುದಕ್ಕೂ ತಾಣದಿಂದ ಲಿಖಿತ ಅನುಮತಿ ಬೇಕು.",
      ],
    },
  ],
};

const hi: RightsStrings = {
  title: "अधिकार और पुनः उपयोग",
  lede: "इस साइट पर क्या, और कैसे, उपयोग किया जा सकता है।",
  footerLink: "अधिकार और पुनः उपयोग",
  copySource: "स्रोत",
  copyTerms: "पुनः उपयोग की शर्तें",
  sections: [
    {
      heading: "साइट का अपना",
      body: [
        "अनुवाद, व्याख्याएँ और टीका, ग्रंथों, मंदिरों और आचार्यों पर विस्तृत अध्ययन, साइट के लिए बनाए गए चित्र, इसकी रूपरेखा, और इन सबको चुनने और सजाने का क्रम — ये साइट का अपना काम हैं। ये कॉपीराइट से सुरक्षित हैं, और सर्वाधिकार सुरक्षित हैं।",
      ],
    },
    {
      heading: "जो साइट का नहीं है",
      body: [
        "मूल ग्रंथ — वेद, उपनिषद, गीता, स्तोत्र और पुराने भक्ति-गीत — किसी की संपत्ति नहीं हैं, और यहाँ कुछ भी उन पर दावा नहीं करता। सुरक्षित केवल वह है जो इस साइट ने उन पर काम किया है।",
        "हर चित्र उस व्यक्ति या संस्था का है जिसका नाम उसके पास दिया गया है, वहाँ बताए गए लाइसेंस के अंतर्गत।",
      ],
    },
    {
      heading: "आप क्या कर सकते हैं",
      body: [
        "यहाँ की कोई भी चीज़ पढ़ सकते हैं, अपने अध्ययन के लिए पृष्ठ छाप सकते हैं, और किसी छोटे अंश को उस पृष्ठ की कड़ी के साथ उद्धृत कर सकते हैं जहाँ से वह लिया गया है।",
      ],
    },
    {
      heading: "जिसकी अनुमति नहीं है",
      body: [
        "पृष्ठों या पूरे खंडों की प्रतिलिपि किसी दूसरी वेबसाइट, ऐप, पुस्तक या दस्तावेज़ में बनाना।",
        "साइट को स्वचालित साधनों से इकट्ठा करना — स्क्रेपिंग, थोक में डाउनलोड, या अनुक्रमण करने वाले सर्च इंजन के अलावा किसी भी चीज़ से क्रॉल करना।",
        "इसके किसी भी भाग का उपयोग किसी कृत्रिम बुद्धि या मशीन-लर्निंग प्रणाली को प्रशिक्षित करने, परिष्कृत करने, परखने या सामग्री देने के लिए करना, या उसे किसी डेटासेट में शामिल करना। यूरोपीय संघ के निर्देश 2019/790 का अनुच्छेद 4 जैसा अनुमति देता है, साइट अपने पाठ-और-डेटा खनन के अधिकार सुरक्षित रखती है, और यह बात मशीनों के पढ़ने योग्य रूप में भी कहती है: robots.txt, tdm-reservation हेडर, /.well-known/tdmrep.json और /ai.txt।",
        "ऊपर बताई गई बातों से आगे किसी भी उपयोग के लिए साइट की लिखित अनुमति चाहिए।",
      ],
    },
  ],
};

const ALL: Record<Locale, RightsStrings> = { en, kn, hi };

export function rightsStrings(locale: Locale): RightsStrings {
  return ALL[locale] ?? en;
}
