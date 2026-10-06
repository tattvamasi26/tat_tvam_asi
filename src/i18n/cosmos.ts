import type { Locale } from "./config";

// ─────────────────────────────────────────────────────────
//  Time and the cosmos — the section's own words.
//
//  `standing` is the one that matters, and it is the opposite of
//  what a page like this usually says. The kalpa's 4.32 billion years
//  sits close enough to the age of the earth that the comparison is
//  made constantly and always offered as a point in the tradition's
//  favour. This section refuses it, and says why.
// ─────────────────────────────────────────────────────────

export interface CosmosStrings {
  title: string;
  lede: string;
  standing: string;

  scaleTitle: string;
  scaleLede: string;
  scaleCaption: string;
  seconds: string;

  yugaTitle: string;
  yugaLede: string;
  yugaCaption: string;
  yugaCentreTop: string;
  yugaCentreBottom: string;
  /** Carries {n}. */
  yugaYears: string;
  parts: string;

  lokaTitle: string;
  lokaLede: string;
  lokaCaption: string;
  perishable: string;

  dvipaTitle: string;
  dvipaLede: string;
  dvipaCaption: string;
  meru: string;
  labelSea: string;

  pralayaTitle: string;
  pralayaLede: string;

  nowTitle: string;
  /** Carries {year} {manvantara} {manu} {mahayuga} {yuga}. */
  nowText: string;
  nowNote: string;

  topicsTitle: string;
  read: string;
  back: string;
  next: string;
  previous: string;
}

export const COSMOS_STRINGS: Record<Locale, CosmosStrings> = {
  en: {
    title: "Time and the cosmos",
    lede: "The scheme of ages, worlds and dissolutions the Puranas work out in more detail than almost anything else they contain.",
    standing:
      "This is a cosmology, and the section will not pretend it is a cosmogony in the modern sense. The figures are not claims about the age of the universe and do not become more respectable by being compared to one. Every number in the scheme is a multiple of 432,000, which is the surest sign that it was built outwards from a ratio rather than measured — and a ratio is a claim about shape, which is a more interesting thing to have than a wrong measurement.",

    scaleTitle: "The ladder",
    scaleLede:
      "A blink and the lifetime of Brahma are rungs of one construction, each defined as a multiple of the one below it. Very few cosmologies manage a single scale from end to end.",
    scaleCaption:
      "A logarithmic scale — twenty-three orders of magnitude, from a fifth of a second to the lifetime of Brahma. Marked as decades, because on a linear axis everything below a kalpa would sit on the zero.",
    seconds: "seconds",

    yugaTitle: "The four ages",
    yugaLede:
      "Krita, Treta, Dvapara, Kali — in the proportion 4:3:2:1, which is the whole of the scheme in four numbers. Drawn as a ring, because the four repeat.",
    yugaCaption:
      "The mahayuga as one turn. Each arc is sized to its share; the figure in each is its number of parts. No starting point is marked, because the scheme has none.",
    yugaCentreTop: "Mahayuga",
    yugaCentreBottom: "4,320,000 years",
    yugaYears: "{n} years",
    parts: "parts",

    lokaTitle: "The fourteen worlds",
    lokaLede:
      "Seven above and seven below, with this one in the middle rather than at the bottom — which is the structural fact most popular diagrams get backwards.",
    lokaCaption:
      "The axis, read downwards from Satya to Patala. The three marked are the ones that burn at the end of a kalpa, and they are exactly the three the Gayatri names.",
    perishable: "burns at a kalpa's end",

    dvipaTitle: "Meru and the seven islands",
    dvipaLede:
      "A centre, and alternating land and sea outwards from it, the seas made of salt, sugarcane juice, wine, ghee, curd, milk and water.",
    dvipaCaption:
      "Drawn with equal rings, which the texts are not: each island is twice the width of the one inside it, so to scale the inner six would vanish. The arrangement is true; the proportion is not drawn.",
    meru: "Meru",
    labelSea: "The sea beyond it",

    pralayaTitle: "The four dissolutions",
    pralayaLede:
      "An ending at every scale, from the end of a day to the end of everything made — and liberation counted among them as a fourth of the same kind.",

    nowTitle: "Where the Puranas place us",
    nowText:
      "The {year}st year of Brahma, the {manvantara}th manvantara — that of {manu} — and the {mahayuga}th mahayuga of it. Within that, {yuga}.",
    nowNote:
      "Kali is usually said to have begun in 3102 BCE. That figure comes from astronomical back-calculation, most influentially Aryabhata's, and is not given by the early texts.",

    topicsTitle: "In detail",
    read: "Read",
    back: "Time and the cosmos",
    next: "Next",
    previous: "Previous",
  },

  kn: {
    title: "ಕಾಲ ಮತ್ತು ವಿಶ್ವ",
    lede: "ಯುಗ, ಲೋಕ ಮತ್ತು ಪ್ರಳಯಗಳ ಯೋಜನೆ — ಪುರಾಣಗಳು ತಮ್ಮಲ್ಲಿನ ಬಹುತೇಕ ಯಾವುದಕ್ಕಿಂತಲೂ ಹೆಚ್ಚು ವಿವರವಾಗಿ ರೂಪಿಸಿದ್ದು.",
    standing:
      "ಇದು ವಿಶ್ವಶಾಸ್ತ್ರ, ಮತ್ತು ಇದು ಆಧುನಿಕ ಅರ್ಥದಲ್ಲಿ ಸೃಷ್ಟಿವಿಜ್ಞಾನವೆಂದು ಈ ವಿಭಾಗ ನಟಿಸುವುದಿಲ್ಲ. ಈ ಅಂಕಿಗಳು ವಿಶ್ವದ ವಯಸ್ಸಿನ ಬಗೆಗಿನ ಹೇಳಿಕೆಗಳಲ್ಲ, ಮತ್ತು ಅದಕ್ಕೆ ಹೋಲಿಸುವುದರಿಂದ ಹೆಚ್ಚು ಗೌರವಾರ್ಹವಾಗುವುದಿಲ್ಲ. ಈ ಯೋಜನೆಯ ಪ್ರತಿ ಅಂಕಿಯೂ ೪,೩೨,೦೦೦ದ ಗುಣಕ — ಇದನ್ನು ಅಳೆಯಲಾಗಿಲ್ಲ, ಒಂದು ಅನುಪಾತದಿಂದ ಹೊರಕ್ಕೆ ಕಟ್ಟಲಾಗಿದೆ ಎಂಬುದಕ್ಕೆ ಅದೇ ಅತಿ ಖಚಿತ ಸಾಕ್ಷಿ. ಅನುಪಾತವೆಂದರೆ ಆಕಾರದ ಬಗೆಗಿನ ಹೇಳಿಕೆ, ಮತ್ತು ತಪ್ಪಾದ ಅಳತೆಗಿಂತ ಅದು ಹೆಚ್ಚು ಕುತೂಹಲಕರ ವಸ್ತು.",

    scaleTitle: "ಏಣಿ",
    scaleLede:
      "ಒಂದು ರೆಪ್ಪೆ ಮಿಟುಕು ಮತ್ತು ಬ್ರಹ್ಮನ ಆಯುಷ್ಯ ಒಂದೇ ರಚನೆಯ ಮೆಟ್ಟಿಲುಗಳು, ಪ್ರತಿಯೊಂದೂ ಕೆಳಗಿನದರ ಗುಣಕ. ತುದಿಯಿಂದ ತುದಿಗೆ ಒಂದೇ ಅಳತೆಯನ್ನು ಕಾಯ್ದುಕೊಳ್ಳುವ ವಿಶ್ವಶಾಸ್ತ್ರಗಳು ಬಹು ಕಡಿಮೆ.",
    scaleCaption:
      "ಲಾಗರಿದಮಿಕ್ ಅಳತೆ — ಇಪ್ಪತ್ತಮೂರು ಪರಿಮಾಣ ಕ್ರಮಗಳು, ಸೆಕೆಂಡಿನ ಐದನೇ ಒಂದು ಭಾಗದಿಂದ ಬ್ರಹ್ಮನ ಆಯುಷ್ಯದವರೆಗೆ. ದಶಕಗಳಾಗಿ ಗುರುತಿಸಲಾಗಿದೆ, ಏಕೆಂದರೆ ಸರಳ ರೇಖೀಯ ಅಕ್ಷದಲ್ಲಿ ಕಲ್ಪಕ್ಕಿಂತ ಕೆಳಗಿನ ಎಲ್ಲವೂ ಸೊನ್ನೆಯ ಮೇಲೆ ಕೂರುತ್ತಿತ್ತು.",
    seconds: "ಸೆಕೆಂಡು",

    yugaTitle: "ನಾಲ್ಕು ಯುಗಗಳು",
    yugaLede:
      "ಕೃತ, ತ್ರೇತಾ, ದ್ವಾಪರ, ಕಲಿ — ೪:೩:೨:೧ ಅನುಪಾತದಲ್ಲಿ; ನಾಲ್ಕು ಅಂಕಿಗಳಲ್ಲಿ ಇಡೀ ಯೋಜನೆ. ಚಕ್ರವಾಗಿ ಚಿತ್ರಿಸಲಾಗಿದೆ, ಏಕೆಂದರೆ ಆ ನಾಲ್ಕು ಪುನರಾವರ್ತನೆಯಾಗುತ್ತವೆ.",
    yugaCaption:
      "ಒಂದು ಸುತ್ತಾಗಿ ಮಹಾಯುಗ. ಪ್ರತಿ ಕಮಾನೂ ತನ್ನ ಪಾಲಿಗೆ ತಕ್ಕ ಗಾತ್ರದ್ದು; ಒಳಗಿನ ಅಂಕಿ ಅದರ ಭಾಗಗಳ ಸಂಖ್ಯೆ. ಆರಂಭ ಬಿಂದು ಗುರುತಿಸಿಲ್ಲ, ಏಕೆಂದರೆ ಯೋಜನೆಗೆ ಅದಿಲ್ಲ.",
    yugaCentreTop: "ಮಹಾಯುಗ",
    yugaCentreBottom: "೪೩,೨೦,೦೦೦ ವರ್ಷ",
    yugaYears: "{n} ವರ್ಷ",
    parts: "ಭಾಗ",

    lokaTitle: "ಹದಿನಾಲ್ಕು ಲೋಕಗಳು",
    lokaLede:
      "ಏಳು ಮೇಲೆ, ಏಳು ಕೆಳಗೆ; ಮತ್ತು ಈ ಲೋಕ ತಳದಲ್ಲಲ್ಲ, ಮಧ್ಯದಲ್ಲಿ — ಜನಪ್ರಿಯ ಚಿತ್ರಗಳು ಬಹುತೇಕ ತಲೆಕೆಳಗಾಗಿ ತೋರಿಸುವ ರಚನಾತ್ಮಕ ಸತ್ಯ ಅದೇ.",
    lokaCaption:
      "ಅಕ್ಷ, ಸತ್ಯದಿಂದ ಪಾತಾಳದವರೆಗೆ ಕೆಳಮುಖವಾಗಿ. ಗುರುತಿಸಿದ ಮೂರು ಕಲ್ಪದ ಕೊನೆಯಲ್ಲಿ ಸುಡುವವು, ಮತ್ತು ಅವೇ ಗಾಯತ್ರಿ ಹೆಸರಿಸುವ ಮೂರು.",
    perishable: "ಕಲ್ಪಾಂತ್ಯದಲ್ಲಿ ಸುಡುತ್ತದೆ",

    dvipaTitle: "ಮೇರು ಮತ್ತು ಏಳು ದ್ವೀಪಗಳು",
    dvipaLede:
      "ಒಂದು ಕೇಂದ್ರ, ಮತ್ತು ಅದರಿಂದ ಹೊರಕ್ಕೆ ಪರ್ಯಾಯವಾಗಿ ನೆಲ ಮತ್ತು ಸಮುದ್ರ — ಸಮುದ್ರಗಳು ಉಪ್ಪು, ಕಬ್ಬಿನ ರಸ, ಸುರೆ, ತುಪ್ಪ, ಮೊಸರು, ಹಾಲು ಮತ್ತು ನೀರಿನವು.",
    dvipaCaption:
      "ಸಮಾನ ಉಂಗುರಗಳಿಂದ ಚಿತ್ರಿಸಲಾಗಿದೆ, ಆದರೆ ಗ್ರಂಥಗಳು ಹಾಗೆ ಹೇಳುವುದಿಲ್ಲ: ಪ್ರತಿ ದ್ವೀಪವೂ ಒಳಗಿನದರ ಎರಡರಷ್ಟು ಅಗಲ, ಹಾಗಾಗಿ ಪ್ರಮಾಣಬದ್ಧವಾಗಿ ಚಿತ್ರಿಸಿದರೆ ಒಳಗಿನ ಆರು ಮಾಯವಾಗುತ್ತವೆ. ಜೋಡಣೆ ಸತ್ಯ; ಪ್ರಮಾಣ ಚಿತ್ರಿಸಿಲ್ಲ.",
    meru: "ಮೇರು",
    labelSea: "ಆಚೆಗಿನ ಸಮುದ್ರ",

    pralayaTitle: "ನಾಲ್ಕು ಪ್ರಳಯಗಳು",
    pralayaLede:
      "ಪ್ರತಿ ಮಟ್ಟದಲ್ಲೂ ಒಂದು ಅಂತ್ಯ — ಒಂದು ದಿನದ ಕೊನೆಯಿಂದ ಮಾಡಲ್ಪಟ್ಟ ಎಲ್ಲದರ ಕೊನೆಯವರೆಗೆ; ಮತ್ತು ಮೋಕ್ಷವನ್ನೂ ಅದೇ ಬಗೆಯ ನಾಲ್ಕನೆಯದಾಗಿ ಎಣಿಸಲಾಗಿದೆ.",

    nowTitle: "ಪುರಾಣಗಳು ನಮ್ಮನ್ನು ಎಲ್ಲಿ ಇಡುತ್ತವೆ",
    nowText:
      "ಬ್ರಹ್ಮನ {year}ನೇ ವರ್ಷ, {manvantara}ನೇ ಮನ್ವಂತರ — {manu}ನದ್ದು — ಮತ್ತು ಅದರ {mahayuga}ನೇ ಮಹಾಯುಗ. ಅದರೊಳಗೆ, {yuga}.",
    nowNote:
      "ಕಲಿಯುಗ ಕ್ರಿ.ಪೂ. ೩೧೦೨ರಲ್ಲಿ ಆರಂಭವಾಯಿತೆಂದು ಸಾಮಾನ್ಯವಾಗಿ ಹೇಳಲಾಗುತ್ತದೆ. ಆ ಅಂಕಿ ಖಗೋಳ ಗಣನೆಯಿಂದ ಹಿಂದಕ್ಕೆ ಲೆಕ್ಕ ಹಾಕಿದ್ದು — ಮುಖ್ಯವಾಗಿ ಆರ್ಯಭಟರದ್ದು — ಮತ್ತು ಆರಂಭಿಕ ಗ್ರಂಥಗಳು ಅದನ್ನು ಕೊಡುವುದಿಲ್ಲ.",

    topicsTitle: "ವಿವರವಾಗಿ",
    read: "ಓದಿ",
    back: "ಕಾಲ ಮತ್ತು ವಿಶ್ವ",
    next: "ಮುಂದೆ",
    previous: "ಹಿಂದೆ",
  },

  hi: {
    title: "काल और विश्व",
    lede: "युग, लोक और प्रलय की वह व्यवस्था जिसे पुराण अपने भीतर की लगभग हर वस्तु से अधिक विस्तार से गढ़ते हैं।",
    standing:
      "यह विश्व-व्यवस्था है, और यह अनुभाग यह नहीं जताएगा कि वह आधुनिक अर्थ में सृष्टि-विज्ञान है। ये अंक विश्व की आयु के विषय में दावे नहीं हैं और उससे तुलना करने से अधिक सम्मान्य नहीं हो जाते। इस व्यवस्था का हर अंक ४,३२,००० का गुणक है — यही सबसे पक्का संकेत कि इसे मापा नहीं, एक अनुपात से बाहर की ओर बनाया गया। और अनुपात आकार के विषय में दावा है, जो किसी गलत माप से कहीं अधिक रोचक वस्तु है।",

    scaleTitle: "सीढ़ी",
    scaleLede:
      "एक पलक और ब्रह्मा की आयु एक ही रचना की पैड़ियाँ हैं, प्रत्येक अपने नीचे वाली की गुणक। छोर से छोर तक एक ही मापक्रम निभाने वाली विश्व-व्यवस्थाएँ बहुत कम हैं।",
    scaleCaption:
      "लघुगणकीय मापक्रम — तेईस परिमाण-क्रम, सेकंड के पाँचवें भाग से ब्रह्मा की आयु तक। दशकों में चिह्नित, क्योंकि रैखिक अक्ष पर कल्प से नीचे का सब कुछ शून्य पर बैठ जाता।",
    seconds: "सेकंड",

    yugaTitle: "चार युग",
    yugaLede:
      "कृत, त्रेता, द्वापर, कलि — ४:३:२:१ के अनुपात में, जो चार अंकों में पूरी व्यवस्था है। वलय के रूप में, क्योंकि चारों दोहराते हैं।",
    yugaCaption:
      "एक चक्कर के रूप में महायुग। हर चाप अपने हिस्से के अनुपात में; भीतर का अंक उसके भागों की संख्या। आरंभ-बिंदु चिह्नित नहीं, क्योंकि व्यवस्था का कोई है ही नहीं।",
    yugaCentreTop: "महायुग",
    yugaCentreBottom: "४३,२०,००० वर्ष",
    yugaYears: "{n} वर्ष",
    parts: "भाग",

    lokaTitle: "चौदह लोक",
    lokaLede:
      "सात ऊपर और सात नीचे, और यह लोक तल पर नहीं, मध्य में — वही संरचनात्मक तथ्य जिसे अधिकांश प्रचलित चित्र उलटा दिखाते हैं।",
    lokaCaption:
      "अक्ष, सत्य से पाताल तक नीचे की ओर। चिह्नित तीन वे हैं जो कल्प के अंत में जलते हैं, और वही तीन गायत्री नाम लेती है।",
    perishable: "कल्पांत में जलता है",

    dvipaTitle: "मेरु और सात द्वीप",
    dvipaLede:
      "एक केंद्र, और उससे बाहर की ओर क्रमशः भूमि और समुद्र — समुद्र लवण, इक्षुरस, सुरा, घृत, दधि, क्षीर और जल के।",
    dvipaCaption:
      "समान वलयों में बनाया गया, जबकि ग्रंथ ऐसा नहीं कहते: हर द्वीप भीतर वाले से दुगुना चौड़ा है, इसलिए अनुपात में बनाने पर भीतर के छह लुप्त हो जाते। विन्यास सत्य है; अनुपात नहीं बनाया गया।",
    meru: "मेरु",
    labelSea: "आगे का समुद्र",

    pralayaTitle: "चार प्रलय",
    pralayaLede:
      "हर स्तर पर एक अंत — एक दिन के अंत से लेकर रचे हुए सब कुछ के अंत तक; और मोक्ष भी उन्हीं में उसी प्रकार का चौथा गिना गया।",

    nowTitle: "पुराण हमें कहाँ रखते हैं",
    nowText:
      "ब्रह्मा का {year}वाँ वर्ष, {manvantara}वाँ मन्वंतर — {manu} का — और उसका {mahayuga}वाँ महायुग। उसके भीतर, {yuga}।",
    nowNote:
      "कलि का आरंभ प्रायः ३१०२ ईसा पूर्व बताया जाता है। वह अंक खगोलीय पश्च-गणना से आता है, सबसे प्रभावी रूप से आर्यभट की, और आरंभिक ग्रंथ उसे नहीं देते।",

    topicsTitle: "विस्तार से",
    read: "पढ़ें",
    back: "काल और विश्व",
    next: "आगे",
    previous: "पीछे",
  },
};

export function cosmosStrings(locale: Locale): CosmosStrings {
  return COSMOS_STRINGS[locale];
}
