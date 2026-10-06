import type { Locale } from "@/i18n/config";
import type { TempleBlock } from "./temple-pages";

// ─────────────────────────────────────────────────────────
//  The four pieces of the scheme that need an argument rather than a
//  table.
//
//  The structured data in seed/cosmos.ts carries the figures and the
//  drawings carry the shape. What neither can carry is the part a
//  reader actually needs: that the texts disagree with each other,
//  that every number is a multiple of one number, that the famous
//  3102 BCE is a back-calculation, and that none of this is a claim
//  about the age of anything.
//
//  Written per language with the same section ids and the same block
//  kinds in each, the way the temple and acharya monographs are, so a
//  unit test can hold the three to each other. The renderer is the
//  shared ProseBlock.
// ─────────────────────────────────────────────────────────

export interface CosmosSection {
  id: string;
  eyebrow: string;
  title: string;
  blocks: TempleBlock[];
}

export interface CosmosTopic {
  slug: string;
  name: Record<Locale, string>;
  sanskrit: string;
  order: number;
  lede: Record<Locale, string>;
  content: Record<Locale, CosmosSection[]>;
}

const para = (text: string): TempleBlock => ({ kind: "para", text });
const sub = (title: string, ...paras: string[]): TempleBlock => ({ kind: "sub", title, paras });

export const COSMOS_TOPICS: CosmosTopic[] = [
  // ── 1 ────────────────────────────────────────────────────
  {
    slug: "reckoning",
    name: { en: "How the time is counted", kn: "ಕಾಲವನ್ನು ಹೇಗೆ ಎಣಿಸಲಾಗಿದೆ", hi: "काल की गणना कैसे है" },
    sanskrit: "कालगणना",
    order: 1,
    lede: {
      en: "One continuous ladder from a blink to three hundred trillion years — and two texts that build its bottom rungs differently.",
      kn: "ಒಂದು ರೆಪ್ಪೆ ಮಿಟುಕಿನಿಂದ ಮುನ್ನೂರು ಲಕ್ಷ ಕೋಟಿ ವರ್ಷದವರೆಗೆ ಒಂದೇ ಸತತ ಏಣಿ — ಮತ್ತು ಅದರ ಕೆಳಗಿನ ಮೆಟ್ಟಿಲುಗಳನ್ನು ಬೇರೆಯಾಗಿ ಕಟ್ಟುವ ಎರಡು ಗ್ರಂಥಗಳು.",
      hi: "एक पलक से तीन सौ लाख करोड़ वर्ष तक एक ही सतत सीढ़ी — और उसकी निचली पैड़ियाँ भिन्न ढंग से बनाने वाले दो ग्रंथ।",
    },
    content: {
      en: [
        {
          id: "ladder",
          eyebrow: "The scale",
          title: "One ladder, end to end",
          blocks: [
            para(
              "The striking thing about this scheme is not how large its numbers are but that they sit on a single ladder with the small ones. A blink and the lifetime of Brahmā are rungs of the same construction, each defined as a multiple of the one below it, and you can walk from one to the other without leaving the system. Very few cosmologies do this. Most have a vocabulary for ordinary duration and a separate, vaguer one for cosmic duration; here there is one.",
            ),
            para(
              "The chain Manu and the Viṣṇu Purāṇa give runs: eighteen nimeṣas make a kāṣṭhā, thirty kāṣṭhās a kalā, thirty kalās a muhūrta, and thirty muhūrtas a day and a night together. Work it backwards from a day and the nimeṣa comes out at about a fifth of a second, which is roughly how long a blink takes. That the chain closes exactly on a day, and that its smallest unit is something a person can check against their own eye, is the part worth noticing.",
            ),
          ],
        },
        {
          id: "disagreement",
          eyebrow: "Where the texts differ",
          title: "Two chains that do not meet",
          blocks: [
            para(
              "The Bhāgavata builds the bottom of the ladder differently. It starts below the nimeṣa, at a paramāṇu, and works up through aṇu and trasareṇu to a truṭi — famously defining the trasareṇu as the size of a mote of dust visible in a shaft of sunlight, and the truṭi as the time such a mote takes to cross a certain distance. It is a finer scale and a more physical one.",
            ),
            para(
              "The two do not reconcile. They are not two descriptions of one system but two systems, and the usual way of handling this is to quote whichever is more impressive and not mention the other. Both are given here because the disagreement is itself informative: it shows that the small end of the scale was being worked out by different schools at different times, which is not what a scheme handed down whole would look like.",
            ),
          ],
        },
        {
          id: "ratio",
          eyebrow: "The number underneath",
          title: "Everything is a multiple of 432,000",
          blocks: [
            para(
              "Kali is 432,000 years. Dvāpara is twice that, Tretā three times, Kṛta four. A mahāyuga is ten times it, a kalpa ten thousand times a mahāyuga. The whole scheme can be generated from one number and a ratio of 4:3:2:1, and once that is seen the figures stop looking like measurements and start looking like what they are — a structure built outwards from a proportion.",
            ),
            para(
              "This matters for how the numbers should be read. A scheme built from a ratio is making a claim about shape, not about duration: that the ages decline in a fixed proportion, that the good one is four times the bad one, that the whole thing repeats. Comparing the kalpa to the age of the earth, which happens often and is always offered as a point in the tradition's favour, mistakes the kind of statement being made and does the tradition no service.",
            ),
          ],
        },
        {
          id: "divine",
          eyebrow: "The factor of 360",
          title: "Divine years and human ones",
          blocks: [
            para(
              "Several texts give the yuga lengths in divine years rather than human ones, where one divine year is three hundred and sixty human years. Kṛta is then 4,800 divine years, Tretā 3,600, Dvāpara 2,400, Kali 1,200 — the same 4:3:2:1, in much smaller figures.",
            ),
            para(
              "Which reckoning is meant changes every number on this page by a factor of 360, and both are in circulation. The large figures given here are the human-year readings, which is the commoner modern convention; a reader who meets Kali given as 1,200 years somewhere else has not found an error but a different unit.",
            ),
          ],
        },
      ],
      kn: [
        {
          id: "ladder",
          eyebrow: "ಅಳತೆ",
          title: "ಒಂದೇ ಏಣಿ, ತುದಿಯಿಂದ ತುದಿಗೆ",
          blocks: [
            para(
              "ಈ ಯೋಜನೆಯಲ್ಲಿ ಗಮನ ಸೆಳೆಯುವುದು ಅದರ ಅಂಕಿಗಳ ದೊಡ್ಡತನವಲ್ಲ, ಅವು ಚಿಕ್ಕವುಗಳ ಜೊತೆಗೇ ಒಂದೇ ಏಣಿಯ ಮೇಲೆ ಕೂತಿರುವುದು. ಒಂದು ರೆಪ್ಪೆ ಮಿಟುಕು ಮತ್ತು ಬ್ರಹ್ಮನ ಆಯುಷ್ಯ ಒಂದೇ ರಚನೆಯ ಮೆಟ್ಟಿಲುಗಳು — ಪ್ರತಿಯೊಂದೂ ತನ್ನ ಕೆಳಗಿನದರ ಗುಣಕವಾಗಿ ವ್ಯಾಖ್ಯಾನಿತ; ವ್ಯವಸ್ಥೆಯಿಂದ ಹೊರಬರದೆಯೇ ಒಂದರಿಂದ ಇನ್ನೊಂದಕ್ಕೆ ನಡೆಯಬಹುದು. ಬಹು ಕಡಿಮೆ ವಿಶ್ವಶಾಸ್ತ್ರಗಳು ಹೀಗೆ ಮಾಡುತ್ತವೆ.",
            ),
            para(
              "ಮನು ಮತ್ತು ವಿಷ್ಣು ಪುರಾಣ ಕೊಡುವ ಸರಪಳಿ: ಹದಿನೆಂಟು ನಿಮೇಷಗಳು ಒಂದು ಕಾಷ್ಠಾ, ಮೂವತ್ತು ಕಾಷ್ಠಾಗಳು ಒಂದು ಕಲಾ, ಮೂವತ್ತು ಕಲೆಗಳು ಒಂದು ಮುಹೂರ್ತ, ಮೂವತ್ತು ಮುಹೂರ್ತಗಳು ಹಗಲು-ರಾತ್ರಿ ಸೇರಿ ಒಂದು ದಿನ. ದಿನದಿಂದ ಹಿಂದಕ್ಕೆ ಲೆಕ್ಕ ಹಾಕಿದರೆ ನಿಮೇಷ ಸುಮಾರು ಕಾಲು ಸೆಕೆಂಡಿಗಿಂತ ಕಡಿಮೆ ಬರುತ್ತದೆ — ರೆಪ್ಪೆ ಮಿಟುಕಲು ತಗಲುವಷ್ಟೇ ಹೊತ್ತು. ಸರಪಳಿ ನಿಖರವಾಗಿ ದಿನದ ಮೇಲೆ ಮುಚ್ಚುವುದು, ಮತ್ತು ಅದರ ಅತಿ ಚಿಕ್ಕ ಏಕಮಾನ ತನ್ನ ಕಣ್ಣಿನಿಂದಲೇ ಪರೀಕ್ಷಿಸಬಹುದಾದದ್ದಾಗಿರುವುದು — ಗಮನಿಸಬೇಕಾದ ಭಾಗ ಅದೇ.",
            ),
          ],
        },
        {
          id: "disagreement",
          eyebrow: "ಗ್ರಂಥಗಳು ಎಲ್ಲಿ ಭಿನ್ನ",
          title: "ಸೇರದ ಎರಡು ಸರಪಳಿಗಳು",
          blocks: [
            para(
              "ಭಾಗವತ ಏಣಿಯ ಕೆಳಭಾಗವನ್ನು ಬೇರೆಯಾಗಿ ಕಟ್ಟುತ್ತದೆ. ಅದು ನಿಮೇಷದ ಕೆಳಗೆ, ಪರಮಾಣುವಿನಿಂದ ಆರಂಭಿಸಿ ಅಣು ಮತ್ತು ತ್ರಸರೇಣುವಿನ ಮೂಲಕ ತ್ರುಟಿಗೆ ಏರುತ್ತದೆ — ಬಿಸಿಲ ಕೋಲಿನಲ್ಲಿ ಕಾಣುವ ಧೂಳಿನ ಕಣದ ಗಾತ್ರವೇ ತ್ರಸರೇಣು ಎಂದು ಪ್ರಸಿದ್ಧವಾಗಿ ವ್ಯಾಖ್ಯಾನಿಸಿ. ಅದು ಹೆಚ್ಚು ಸೂಕ್ಷ್ಮ ಮತ್ತು ಹೆಚ್ಚು ಭೌತಿಕ ಅಳತೆ.",
            ),
            para(
              "ಈ ಎರಡು ಹೊಂದುವುದಿಲ್ಲ. ಇವು ಒಂದೇ ವ್ಯವಸ್ಥೆಯ ಎರಡು ವರ್ಣನೆಗಳಲ್ಲ, ಎರಡು ವ್ಯವಸ್ಥೆಗಳು; ಮತ್ತು ಇದನ್ನು ನಿಭಾಯಿಸುವ ಸಾಮಾನ್ಯ ವಿಧಾನವೆಂದರೆ ಯಾವುದು ಹೆಚ್ಚು ಪ್ರಭಾವಶಾಲಿಯೋ ಅದನ್ನು ಉಲ್ಲೇಖಿಸಿ ಇನ್ನೊಂದನ್ನು ಹೇಳದಿರುವುದು. ಎರಡನ್ನೂ ಇಲ್ಲಿ ಕೊಡಲಾಗಿದೆ, ಏಕೆಂದರೆ ಆ ಭಿನ್ನತೆಯೇ ಮಾಹಿತಿಪೂರ್ಣ: ಅಳತೆಯ ಚಿಕ್ಕ ತುದಿಯನ್ನು ಬೇರೆ ಬೇರೆ ಶಾಖೆಗಳು ಬೇರೆ ಬೇರೆ ಕಾಲದಲ್ಲಿ ರೂಪಿಸುತ್ತಿದ್ದವು ಎಂದು ಅದು ತೋರಿಸುತ್ತದೆ — ಪೂರ್ಣವಾಗಿ ಹಸ್ತಾಂತರವಾದ ಯೋಜನೆ ಹೀಗೆ ಕಾಣುವುದಿಲ್ಲ.",
            ),
          ],
        },
        {
          id: "ratio",
          eyebrow: "ಕೆಳಗಿರುವ ಅಂಕಿ",
          title: "ಎಲ್ಲವೂ ೪,೩೨,೦೦೦ದ ಗುಣಕ",
          blocks: [
            para(
              "ಕಲಿ ೪,೩೨,೦೦೦ ವರ್ಷ. ದ್ವಾಪರ ಅದರ ಎರಡರಷ್ಟು, ತ್ರೇತಾ ಮೂರರಷ್ಟು, ಕೃತ ನಾಲ್ಕರಷ್ಟು. ಮಹಾಯುಗ ಅದರ ಹತ್ತರಷ್ಟು, ಕಲ್ಪ ಮಹಾಯುಗದ ಹತ್ತು ಸಾವಿರದಷ್ಟು. ಇಡೀ ಯೋಜನೆಯನ್ನು ಒಂದು ಅಂಕಿ ಮತ್ತು ೪:೩:೨:೧ ಅನುಪಾತದಿಂದ ಹುಟ್ಟಿಸಬಹುದು; ಅದು ಕಂಡ ಮೇಲೆ ಈ ಅಂಕಿಗಳು ಅಳತೆಗಳಂತೆ ಕಾಣುವುದನ್ನು ನಿಲ್ಲಿಸಿ ನಿಜವಾಗಿ ಏನೋ ಅದರಂತೆ ಕಾಣತೊಡಗುತ್ತವೆ — ಒಂದು ಅನುಪಾತದಿಂದ ಹೊರಕ್ಕೆ ಕಟ್ಟಿದ ರಚನೆ.",
            ),
            para(
              "ಅಂಕಿಗಳನ್ನು ಹೇಗೆ ಓದಬೇಕೆಂಬುದಕ್ಕೆ ಇದು ಮುಖ್ಯ. ಅನುಪಾತದಿಂದ ಕಟ್ಟಿದ ಯೋಜನೆ ಅವಧಿಯ ಬಗ್ಗೆ ಅಲ್ಲ, ಆಕಾರದ ಬಗ್ಗೆ ಹೇಳಿಕೆ ನೀಡುತ್ತಿದೆ: ಯುಗಗಳು ನಿಗದಿತ ಅನುಪಾತದಲ್ಲಿ ಇಳಿಯುತ್ತವೆ, ಒಳ್ಳೆಯದು ಕೆಟ್ಟದ್ದರ ನಾಲ್ಕರಷ್ಟು, ಮತ್ತು ಇಡೀ ಚಕ್ರ ಪುನರಾವರ್ತನೆಯಾಗುತ್ತದೆ. ಕಲ್ಪವನ್ನು ಭೂಮಿಯ ವಯಸ್ಸಿಗೆ ಹೋಲಿಸುವುದು — ಆಗಾಗ ನಡೆಯುತ್ತದೆ ಮತ್ತು ಸದಾ ಪರಂಪರೆಯ ಪರವಾದ ಅಂಶವಾಗಿ ಮಂಡಿಸಲಾಗುತ್ತದೆ — ಯಾವ ಬಗೆಯ ಹೇಳಿಕೆ ನೀಡಲಾಗುತ್ತಿದೆ ಎಂಬುದನ್ನೇ ತಪ್ಪಾಗಿ ಗ್ರಹಿಸುತ್ತದೆ ಮತ್ತು ಪರಂಪರೆಗೆ ಯಾವ ಉಪಕಾರವನ್ನೂ ಮಾಡುವುದಿಲ್ಲ.",
            ),
          ],
        },
        {
          id: "divine",
          eyebrow: "೩೬೦ರ ಗುಣಕ",
          title: "ದಿವ್ಯ ವರ್ಷ ಮತ್ತು ಮಾನವ ವರ್ಷ",
          blocks: [
            para(
              "ಹಲವು ಗ್ರಂಥಗಳು ಯುಗಗಳ ಉದ್ದವನ್ನು ಮಾನವ ವರ್ಷದಲ್ಲಲ್ಲ, ದಿವ್ಯ ವರ್ಷದಲ್ಲಿ ಕೊಡುತ್ತವೆ; ಒಂದು ದಿವ್ಯ ವರ್ಷ ಮುನ್ನೂರ ಅರವತ್ತು ಮಾನವ ವರ್ಷ. ಆಗ ಕೃತ ೪,೮೦೦ ದಿವ್ಯ ವರ್ಷ, ತ್ರೇತಾ ೩,೬೦೦, ದ್ವಾಪರ ೨,೪೦೦, ಕಲಿ ೧,೨೦೦ — ಅದೇ ೪:೩:೨:೧, ಬಹಳ ಚಿಕ್ಕ ಅಂಕಿಗಳಲ್ಲಿ.",
            ),
            para(
              "ಯಾವ ಲೆಕ್ಕ ಉದ್ದೇಶಿತ ಎಂಬುದು ಈ ಪುಟದ ಪ್ರತಿ ಅಂಕಿಯನ್ನೂ ೩೬೦ರ ಗುಣಕದಿಂದ ಬದಲಿಸುತ್ತದೆ, ಮತ್ತು ಎರಡೂ ಪ್ರಚಲಿತದಲ್ಲಿವೆ. ಇಲ್ಲಿ ಕೊಟ್ಟ ದೊಡ್ಡ ಅಂಕಿಗಳು ಮಾನವ ವರ್ಷದ ಓದು — ಆಧುನಿಕ ಬಳಕೆಯಲ್ಲಿ ಹೆಚ್ಚು ಸಾಮಾನ್ಯವಾದದ್ದು; ಬೇರೆಡೆ ಕಲಿಯನ್ನು ೧,೨೦೦ ವರ್ಷವೆಂದು ಕಂಡ ಓದುಗ ತಪ್ಪನ್ನು ಕಂಡಿಲ್ಲ, ಬೇರೊಂದು ಏಕಮಾನವನ್ನು ಕಂಡಿದ್ದಾರೆ.",
            ),
          ],
        },
      ],
      hi: [
        {
          id: "ladder",
          eyebrow: "मापक्रम",
          title: "एक ही सीढ़ी, छोर से छोर तक",
          blocks: [
            para(
              "इस व्यवस्था में ध्यान खींचने वाली बात उसके अंकों का बड़ा होना नहीं, बल्कि यह है कि वे छोटे अंकों के साथ एक ही सीढ़ी पर बैठे हैं। एक पलक और ब्रह्मा की आयु एक ही रचना की पैड़ियाँ हैं — प्रत्येक अपने नीचे वाली का गुणक; व्यवस्था से बाहर निकले बिना एक से दूसरी तक चला जा सकता है। बहुत कम विश्व-व्यवस्थाएँ ऐसा करती हैं।",
            ),
            para(
              "मनु और विष्णु पुराण की शृंखला इस प्रकार है: अठारह निमेष एक काष्ठा, तीस काष्ठा एक कला, तीस कला एक मुहूर्त, और तीस मुहूर्त मिलकर एक दिन-रात। दिन से पीछे गिनें तो निमेष लगभग पाँचवें हिस्से सेकंड का निकलता है — जितने में पलक झपकती है। शृंखला का ठीक दिन पर बंद होना, और उसकी सबसे छोटी इकाई का ऐसा होना जिसे कोई अपनी आँख से जाँच सके — यही ध्यान देने योग्य है।",
            ),
          ],
        },
        {
          id: "disagreement",
          eyebrow: "ग्रंथ कहाँ भिन्न हैं",
          title: "दो शृंखलाएँ जो मिलती नहीं",
          blocks: [
            para(
              "भागवत सीढ़ी का निचला भाग भिन्न ढंग से बनाता है। वह निमेष से नीचे, परमाणु से आरंभ कर अणु और त्रसरेणु से होता हुआ त्रुटि तक जाता है — त्रसरेणु को प्रसिद्ध रूप से सूर्य-किरण में दिखते धूलिकण के बराबर बताते हुए। वह अधिक सूक्ष्म और अधिक भौतिक मापक्रम है।",
            ),
            para(
              "ये दोनों मेल नहीं खाते। ये एक व्यवस्था के दो वर्णन नहीं, दो व्यवस्थाएँ हैं; और इसे सँभालने का सामान्य ढंग यह है कि जो अधिक प्रभावी हो उसे उद्धृत कर दिया जाए और दूसरे का उल्लेख न हो। यहाँ दोनों दिए गए हैं, क्योंकि वह भेद स्वयं सूचनाप्रद है: वह दिखाता है कि मापक्रम का छोटा सिरा भिन्न शाखाएँ भिन्न समय में गढ़ रही थीं — पूरी की पूरी सौंपी गई व्यवस्था ऐसी नहीं दिखती।",
            ),
          ],
        },
        {
          id: "ratio",
          eyebrow: "नीचे का अंक",
          title: "सब कुछ ४,३२,००० का गुणक",
          blocks: [
            para(
              "कलि ४,३२,००० वर्ष। द्वापर उसका दुगुना, त्रेता तिगुना, कृत चौगुना। महायुग उसका दस गुना, कल्प महायुग का दस हज़ार गुना। पूरी व्यवस्था एक अंक और ४:३:२:१ के अनुपात से उत्पन्न की जा सकती है; और यह दिख जाने पर ये अंक मापों जैसे दिखना बंद कर देते हैं और वही दिखने लगते हैं जो वे हैं — एक अनुपात से बाहर की ओर बनाई गई संरचना।",
            ),
            para(
              "अंकों को कैसे पढ़ा जाए, इसके लिए यह महत्त्वपूर्ण है। अनुपात से बनी व्यवस्था अवधि के विषय में नहीं, आकार के विषय में दावा कर रही है: युग नियत अनुपात में घटते हैं, अच्छा युग बुरे का चौगुना है, और पूरा चक्र दोहराता है। कल्प की तुलना पृथ्वी की आयु से करना — जो प्रायः होता है और सदा परंपरा के पक्ष में एक बिंदु के रूप में रखा जाता है — इस बात को ही गलत समझ लेता है कि किस प्रकार का कथन किया जा रहा है, और परंपरा का कोई उपकार नहीं करता।",
            ),
          ],
        },
        {
          id: "divine",
          eyebrow: "३६० का गुणक",
          title: "दिव्य वर्ष और मानव वर्ष",
          blocks: [
            para(
              "कई ग्रंथ युगों की लंबाई मानव वर्षों में नहीं, दिव्य वर्षों में देते हैं, जहाँ एक दिव्य वर्ष तीन सौ साठ मानव वर्ष है। तब कृत ४,८०० दिव्य वर्ष, त्रेता ३,६००, द्वापर २,४००, कलि १,२०० — वही ४:३:२:१, कहीं छोटे अंकों में।",
            ),
            para(
              "कौन-सी गणना अभिप्रेत है, यह इस पृष्ठ के हर अंक को ३६० के गुणक से बदल देता है, और दोनों प्रचलित हैं। यहाँ दिए बड़े अंक मानव-वर्ष वाला पाठ हैं, जो आधुनिक प्रयोग में अधिक सामान्य है; जिस पाठक को अन्यत्र कलि १,२०० वर्ष का मिले उसे त्रुटि नहीं, एक भिन्न इकाई मिली है।",
            ),
          ],
        },
      ],
    },
  },

  // ── 2 ────────────────────────────────────────────────────
  {
    slug: "yugas",
    name: { en: "The four ages", kn: "ನಾಲ್ಕು ಯುಗಗಳು", hi: "चार युग" },
    sanskrit: "चतुर्युगम्",
    order: 2,
    lede: {
      en: "A decline in fixed proportion, a date that was calculated backwards, and a concession at the bottom.",
      kn: "ನಿಗದಿತ ಅನುಪಾತದಲ್ಲಿ ಇಳಿತ, ಹಿಂದಕ್ಕೆ ಲೆಕ್ಕ ಹಾಕಿದ ಒಂದು ದಿನಾಂಕ, ಮತ್ತು ತಳದಲ್ಲಿ ಒಂದು ರಿಯಾಯಿತಿ.",
      hi: "नियत अनुपात में एक ह्रास, पीछे की ओर गिनी गई एक तिथि, और तल पर एक छूट।",
    },
    content: {
      en: [
        {
          id: "legs",
          eyebrow: "The shape",
          title: "Dharma on four legs, then three, then two, then one",
          blocks: [
            para(
              "The image the texts use for the four ages is a bull standing on four legs and losing one each age. It is a precise image rather than a vague one: what is lost is not goodness in general but a quarter of dharma's support, so that the last age is not evil but unstable — a thing standing on one leg can be knocked over by very little.",
            ),
            para(
              "What each age is said to be like follows from that. In Kṛta nothing has to be taught because nothing has been forgotten, and there is no ritual, because a rite is a repair and nothing is broken. Sacrifice appears in Tretā, which is the tradition admitting that ritual begins after something has already gone. In Dvāpara the one Veda is divided into four because nobody can hold it whole any longer. Each age's defining feature is a workaround for the previous age's loss.",
            ),
          ],
        },
        {
          id: "date",
          eyebrow: "3102 BCE",
          title: "A date arrived at by working backwards",
          blocks: [
            para(
              "Kali is usually said to have begun in 3102 BCE, on a particular February day. The figure is precise, widely repeated, and not given by the early texts. It comes from astronomical calculation — most influentially Āryabhaṭa's in the fifth or sixth century CE — working back to a moment when the planets were taken to have been in conjunction, and then identified with the death of Kṛṣṇa.",
            ),
            para(
              "This is worth knowing rather than worth minding. A back-calculated epoch is a normal thing for an astronomical tradition to produce and the Indian one produced several. What is not accurate is to present 3102 BCE as something the Purāṇas record, or to treat the precision of the date as evidence that it was observed.",
            ),
          ],
        },
        {
          id: "concession",
          eyebrow: "The odd part",
          title: "The worst age is the easiest one",
          blocks: [
            para(
              "The texts are bleak about Kali and then say something that does not follow: that what took a thousand years of effort in Kṛta can be had here by saying a name. The Bhāgavata puts it almost as a joke at the earlier ages' expense — there is one good thing about this age, and it is that the standard has been dropped.",
            ),
            para(
              "The whole of the devotional tradition stands in that gap. If the age is poor and the requirement has been lowered to match, then singing, repeating a name and simply remembering are not lesser practices but the ones fitted to the time — which is the argument the Bhāgavata, the bhakti poets and the songs on this site are all making.",
            ),
          ],
        },
      ],
      kn: [
        {
          id: "legs",
          eyebrow: "ಆಕಾರ",
          title: "ಧರ್ಮ ನಾಲ್ಕು ಕಾಲಿನ ಮೇಲೆ, ಆಮೇಲೆ ಮೂರು, ಎರಡು, ಒಂದು",
          blocks: [
            para(
              "ನಾಲ್ಕು ಯುಗಗಳಿಗೆ ಗ್ರಂಥಗಳು ಬಳಸುವ ಚಿತ್ರ — ನಾಲ್ಕು ಕಾಲಿನ ಮೇಲೆ ನಿಂತ ಎತ್ತು, ಪ್ರತಿ ಯುಗಕ್ಕೂ ಒಂದು ಕಾಲು ಕಳೆದುಕೊಳ್ಳುತ್ತದೆ. ಅದು ಅಸ್ಪಷ್ಟವಲ್ಲ, ನಿಖರ ಚಿತ್ರ: ಕಳೆದುಹೋಗುವುದು ಸಾಮಾನ್ಯ ಒಳಿತಲ್ಲ, ಧರ್ಮದ ಆಧಾರದ ಕಾಲು ಭಾಗ. ಆದ್ದರಿಂದ ಕೊನೆಯ ಯುಗ ದುಷ್ಟವಲ್ಲ, ಅಸ್ಥಿರ — ಒಂದೇ ಕಾಲಿನ ಮೇಲೆ ನಿಂತದ್ದನ್ನು ಬಹಳ ಕಡಿಮೆಯಿಂದಲೇ ಉರುಳಿಸಬಹುದು.",
            ),
            para(
              "ಪ್ರತಿ ಯುಗದ ಸ್ವರೂಪ ಅದರಿಂದಲೇ ಬರುತ್ತದೆ. ಕೃತದಲ್ಲಿ ಏನನ್ನೂ ಕಲಿಸಬೇಕಿಲ್ಲ, ಏಕೆಂದರೆ ಏನೂ ಮರೆತಿಲ್ಲ; ಕರ್ಮಕಾಂಡವಿಲ್ಲ, ಏಕೆಂದರೆ ಕರ್ಮವೆಂದರೆ ದುರಸ್ತಿ ಮತ್ತು ಏನೂ ಮುರಿದಿಲ್ಲ. ತ್ರೇತಾದಲ್ಲಿ ಯಜ್ಞ ಕಾಣಿಸಿಕೊಳ್ಳುತ್ತದೆ — ಅಂದರೆ ಏನೋ ಈಗಾಗಲೇ ಹೋದ ಮೇಲೆಯೇ ಕರ್ಮಕಾಂಡ ಆರಂಭವಾಗುತ್ತದೆ ಎಂದು ಪರಂಪರೆಯೇ ಒಪ್ಪಿಕೊಳ್ಳುತ್ತಿದೆ. ದ್ವಾಪರದಲ್ಲಿ ಒಂದೇ ಇದ್ದ ವೇದ ನಾಲ್ಕಾಗುತ್ತದೆ, ಏಕೆಂದರೆ ಅದನ್ನು ಪೂರ್ಣವಾಗಿ ಹಿಡಿದಿಡಲು ಈಗ ಯಾರಿಗೂ ಆಗುವುದಿಲ್ಲ. ಪ್ರತಿ ಯುಗದ ಲಕ್ಷಣವೂ ಹಿಂದಿನ ಯುಗದ ನಷ್ಟಕ್ಕೆ ಕಂಡುಕೊಂಡ ಪರಿಹಾರ.",
            ),
          ],
        },
        {
          id: "date",
          eyebrow: "ಕ್ರಿ.ಪೂ. ೩೧೦೨",
          title: "ಹಿಂದಕ್ಕೆ ಲೆಕ್ಕ ಹಾಕಿ ತಲುಪಿದ ದಿನಾಂಕ",
          blocks: [
            para(
              "ಕಲಿಯುಗ ಕ್ರಿ.ಪೂ. ೩೧೦೨ರಲ್ಲಿ, ಒಂದು ನಿರ್ದಿಷ್ಟ ಫೆಬ್ರವರಿ ದಿನದಂದು ಆರಂಭವಾಯಿತೆಂದು ಸಾಮಾನ್ಯವಾಗಿ ಹೇಳಲಾಗುತ್ತದೆ. ಆ ಅಂಕಿ ನಿಖರ, ವ್ಯಾಪಕವಾಗಿ ಪುನರುಕ್ತ, ಮತ್ತು ಆರಂಭಿಕ ಗ್ರಂಥಗಳು ಕೊಡದ್ದು. ಅದು ಖಗೋಳ ಗಣನೆಯಿಂದ ಬಂದದ್ದು — ಮುಖ್ಯವಾಗಿ ಐದು ಅಥವಾ ಆರನೇ ಶತಮಾನದ ಆರ್ಯಭಟರ ಗಣನೆ — ಗ್ರಹಗಳು ಒಂದೆಡೆ ಸೇರಿದ್ದವೆಂದು ಭಾವಿಸಿದ ಕ್ಷಣದವರೆಗೆ ಹಿಂದಕ್ಕೆ ಲೆಕ್ಕ ಹಾಕಿ, ಅದನ್ನು ಕೃಷ್ಣನ ನಿರ್ಯಾಣದೊಂದಿಗೆ ಗುರುತಿಸಿ.",
            ),
            para(
              "ಇದು ತಿಳಿಯಬೇಕಾದದ್ದೇ ಹೊರತು ಬೇಸರಪಡಬೇಕಾದದ್ದಲ್ಲ. ಹಿಂದಕ್ಕೆ ಲೆಕ್ಕ ಹಾಕಿದ ಯುಗಾರಂಭ ಯಾವುದೇ ಖಗೋಳ ಪರಂಪರೆ ಉತ್ಪಾದಿಸುವ ಸಾಮಾನ್ಯ ವಸ್ತು, ಮತ್ತು ಭಾರತೀಯ ಪರಂಪರೆ ಹಲವನ್ನು ಉತ್ಪಾದಿಸಿತು. ನಿಖರವಲ್ಲದ್ದು ಇಷ್ಟೇ: ಕ್ರಿ.ಪೂ. ೩೧೦೨ ಅನ್ನು ಪುರಾಣಗಳು ದಾಖಲಿಸಿದ ಸಂಗತಿಯಾಗಿ ಮಂಡಿಸುವುದು, ಅಥವಾ ದಿನಾಂಕದ ನಿಖರತೆಯನ್ನೇ ಅದನ್ನು ವೀಕ್ಷಿಸಲಾಗಿತ್ತು ಎಂಬುದಕ್ಕೆ ಸಾಕ್ಷಿಯೆಂದು ತೆಗೆದುಕೊಳ್ಳುವುದು.",
            ),
          ],
        },
        {
          id: "concession",
          eyebrow: "ವಿಚಿತ್ರ ಭಾಗ",
          title: "ಅತಿ ಕೆಟ್ಟ ಯುಗವೇ ಅತಿ ಸುಲಭ",
          blocks: [
            para(
              "ಗ್ರಂಥಗಳು ಕಲಿಯ ಬಗ್ಗೆ ಕಠೋರವಾಗಿ ಹೇಳಿ, ನಂತರ ಅದಕ್ಕೆ ಹೊಂದದ ಒಂದು ಮಾತು ಹೇಳುತ್ತವೆ: ಕೃತದಲ್ಲಿ ಸಾವಿರ ವರ್ಷದ ಪ್ರಯತ್ನ ಬೇಡುತ್ತಿದ್ದದ್ದು ಇಲ್ಲಿ ಒಂದು ಹೆಸರು ಹೇಳುವುದರಿಂದ ಸಿಗುತ್ತದೆ. ಭಾಗವತ ಅದನ್ನು ಹಿಂದಿನ ಯುಗಗಳ ಖರ್ಚಿನಲ್ಲಿ ಬಹುತೇಕ ತಮಾಷೆಯಾಗಿಯೇ ಹೇಳುತ್ತದೆ — ಈ ಯುಗದಲ್ಲಿ ಒಂದು ಒಳ್ಳೆಯ ಸಂಗತಿಯಿದೆ, ಅದೆಂದರೆ ಮಟ್ಟವನ್ನೇ ಇಳಿಸಲಾಗಿದೆ.",
            ),
            para(
              "ಇಡೀ ಭಕ್ತಿ ಪರಂಪರೆ ನಿಂತಿರುವುದು ಆ ಬಿರುಕಿನಲ್ಲೇ. ಯುಗ ಕೆಟ್ಟದ್ದಾಗಿದ್ದು, ಅದಕ್ಕೆ ತಕ್ಕಂತೆ ಅಗತ್ಯವನ್ನೂ ಇಳಿಸಲಾಗಿದ್ದರೆ, ಹಾಡುವುದು, ನಾಮಸ್ಮರಣೆ ಮತ್ತು ಕೇವಲ ನೆನೆಯುವುದು ಕೀಳು ಸಾಧನೆಗಳಲ್ಲ, ಕಾಲಕ್ಕೆ ಹೊಂದಿದವು — ಭಾಗವತ, ಭಕ್ತಿ ಕವಿಗಳು ಮತ್ತು ಈ ತಾಣದ ಹಾಡುಗಳು ಎಲ್ಲವೂ ಮಂಡಿಸುತ್ತಿರುವ ವಾದ ಅದೇ.",
            ),
          ],
        },
      ],
      hi: [
        {
          id: "legs",
          eyebrow: "आकार",
          title: "धर्म चार पैरों पर, फिर तीन, दो, एक",
          blocks: [
            para(
              "चार युगों के लिए ग्रंथ जो चित्र प्रयोग करते हैं वह चार पैरों पर खड़ा वृषभ है, जो हर युग एक पैर खोता है। यह अस्पष्ट नहीं, सटीक चित्र है: जो खोता है वह सामान्य भलाई नहीं, धर्म के आधार का एक चौथाई। इसलिए अंतिम युग दुष्ट नहीं, अस्थिर है — एक पैर पर खड़ी वस्तु बहुत थोड़े से गिराई जा सकती है।",
            ),
            para(
              "हर युग का स्वरूप इसी से निकलता है। कृत में कुछ सिखाना नहीं पड़ता क्योंकि कुछ भूला नहीं; कर्मकांड नहीं, क्योंकि कर्म एक मरम्मत है और कुछ टूटा नहीं। त्रेता में यज्ञ प्रकट होता है — अर्थात् परंपरा स्वयं मान रही है कि कर्मकांड तभी आरंभ होता है जब कुछ जा चुका हो। द्वापर में एक वेद चार में बँटता है क्योंकि अब उसे पूरा कोई धारण नहीं कर सकता। हर युग का लक्षण पिछले युग की हानि का उपाय है।",
            ),
          ],
        },
        {
          id: "date",
          eyebrow: "३१०२ ईसा पूर्व",
          title: "पीछे की ओर गणना से निकली तिथि",
          blocks: [
            para(
              "कलि का आरंभ प्रायः ३१०२ ईसा पूर्व की एक विशेष फरवरी-तिथि को बताया जाता है। वह अंक सटीक है, व्यापक रूप से दोहराया जाता है, और आरंभिक ग्रंथों का दिया हुआ नहीं। वह खगोलीय गणना से आता है — सबसे प्रभावी रूप से पाँचवीं या छठी शताब्दी में आर्यभट की गणना से — उस क्षण तक पीछे गिनकर जब ग्रह एक साथ माने गए, और फिर उसे कृष्ण के निर्याण से जोड़कर।",
            ),
            para(
              "यह जानने योग्य है, खिन्न होने योग्य नहीं। पीछे गिनकर निकाला गया युगारंभ किसी भी खगोलीय परंपरा की सामान्य उपज है और भारतीय परंपरा ने कई निकाले। जो सही नहीं वह इतना है: ३१०२ ईसा पूर्व को पुराणों का दर्ज किया हुआ बताना, या तिथि की सटीकता को ही इस बात का प्रमाण मानना कि उसका अवलोकन हुआ था।",
            ),
          ],
        },
        {
          id: "concession",
          eyebrow: "विचित्र भाग",
          title: "सबसे बुरा युग ही सबसे सहज है",
          blocks: [
            para(
              "ग्रंथ कलि के विषय में कठोर हैं और फिर ऐसी बात कहते हैं जो उससे नहीं निकलती: कृत में जो हज़ार वर्ष के प्रयत्न से मिलता था वह यहाँ एक नाम लेने से मिल जाता है। भागवत इसे पिछले युगों की कीमत पर लगभग परिहास की तरह रखता है — इस युग में एक अच्छी बात है, और वह यह कि मानदंड ही गिरा दिया गया है।",
            ),
            para(
              "पूरी भक्ति-परंपरा उसी दरार में खड़ी है। यदि युग हीन है और आवश्यकता भी उसी के अनुरूप घटा दी गई है, तो गाना, नाम लेना और केवल स्मरण करना निम्न साधनाएँ नहीं, समय के अनुकूल साधनाएँ हैं — यही तर्क भागवत, भक्त कवि और इस साइट के गीत सब कर रहे हैं।",
            ),
          ],
        },
      ],
    },
  },

  // ── 3 ────────────────────────────────────────────────────
  {
    slug: "worlds",
    name: { en: "The worlds and the islands", kn: "ಲೋಕಗಳು ಮತ್ತು ದ್ವೀಪಗಳು", hi: "लोक और द्वीप" },
    sanskrit: "लोकद्वीपविन्यासः",
    order: 3,
    lede: {
      en: "Fourteen worlds stacked on an axis, seven islands in rings, and seas of milk and ghee — which is how you can tell it is not a map.",
      kn: "ಒಂದು ಅಕ್ಷದ ಮೇಲೆ ಜೋಡಿಸಿದ ಹದಿನಾಲ್ಕು ಲೋಕಗಳು, ಉಂಗುರಗಳಲ್ಲಿ ಏಳು ದ್ವೀಪಗಳು, ಮತ್ತು ಹಾಲು-ತುಪ್ಪದ ಸಮುದ್ರಗಳು — ಇದು ನಕ್ಷೆ ಅಲ್ಲ ಎಂದು ತಿಳಿಯುವುದು ಅದರಿಂದಲೇ.",
      hi: "एक अक्ष पर सजे चौदह लोक, वलयों में सात द्वीप, और दूध तथा घी के समुद्र — इसी से पता चलता है कि यह नक्शा नहीं है।",
    },
    content: {
      en: [
        {
          id: "axis",
          eyebrow: "The fourteen",
          title: "Seven above and seven below",
          blocks: [
            para(
              "The worlds are arranged on a vertical axis with ours in the middle: bhūḥ at the centre, then bhuvaḥ and svaḥ above it, then mahaḥ, janaḥ, tapaḥ and satya; and below, seven more ending at pātāla. The three lowest of the upper set are the ones that burn at the end of a kalpa, which is why the gāyatrī's three words — bhūr bhuvaḥ svaḥ — name exactly the part of the structure that is perishable.",
            ),
            para(
              "The lower seven are not hells. The Bhāgavata describes them as better lit and more pleasant than this world, full of gardens and palaces, and puts the actual places of punishment elsewhere again. A reader who expects an inferno under the earth has brought the expectation with them.",
            ),
          ],
        },
        {
          id: "karmabhumi",
          eyebrow: "Why we are here",
          title: "The one world where anything can be done",
          blocks: [
            para(
              "Of the fourteen, only this one is a karma-bhūmi — ground where action accrues. Everywhere else is a place where the results of action are spent: heaven is a long stay funded by merit, and it ends when the merit does, after which the resident returns here. Birth in the lower worlds works the same way with the sign reversed.",
            ),
            para(
              "This is the structural reason the tradition treats a human birth as rare and valuable, and it is a stranger claim than it looks. It means the gods are, in the long run, worse off: they have more to enjoy and nothing to do that changes anything, and must come back here to get anywhere at all.",
            ),
          ],
        },
        {
          id: "islands",
          eyebrow: "The seven rings",
          title: "Not a map, and it tells you so",
          blocks: [
            para(
              "The horizontal scheme is concentric: Mount Meru at the centre, around it Jambūdvīpa, and around that six more islands in rings, each separated from the next by a sea. The seas are of salt, sugarcane juice, wine, ghee, curd, milk and fresh water. Each ring is twice the width of the one inside it.",
            ),
            para(
              "Attempts to map the seven onto real continents are modern, and they have to treat the ghee as a metaphor and the doubling as approximate, which leaves nothing of the scheme intact. The text is not trying to describe the surface of the earth; it is describing a cosmos arranged around a centre, in which Bhārata — the southern part of the innermost island — is the only ground where karma can be made. That is a claim about significance, not about longitude.",
            ),
          ],
        },
      ],
      kn: [
        {
          id: "axis",
          eyebrow: "ಹದಿನಾಲ್ಕು",
          title: "ಏಳು ಮೇಲೆ, ಏಳು ಕೆಳಗೆ",
          blocks: [
            para(
              "ಲೋಕಗಳನ್ನು ಲಂಬ ಅಕ್ಷದ ಮೇಲೆ ಜೋಡಿಸಲಾಗಿದೆ, ನಮ್ಮದು ಮಧ್ಯದಲ್ಲಿ: ಮಧ್ಯದಲ್ಲಿ ಭೂಃ, ಅದರ ಮೇಲೆ ಭುವಃ ಮತ್ತು ಸ್ವಃ, ಆಮೇಲೆ ಮಹಃ, ಜನಃ, ತಪಃ ಮತ್ತು ಸತ್ಯ; ಕೆಳಗೆ ಇನ್ನೇಳು, ಪಾತಾಳದಲ್ಲಿ ಕೊನೆ. ಮೇಲಿನ ಗುಂಪಿನ ಕೆಳಗಿನ ಮೂರೇ ಕಲ್ಪದ ಕೊನೆಯಲ್ಲಿ ಸುಡುವುದು — ಆದ್ದರಿಂದಲೇ ಗಾಯತ್ರಿಯ ಮೂರು ಪದಗಳು, ಭೂರ್ ಭುವಃ ಸ್ವಃ, ರಚನೆಯ ನಾಶವಾಗುವ ಭಾಗವನ್ನೇ ನಿಖರವಾಗಿ ಹೆಸರಿಸುತ್ತವೆ.",
            ),
            para(
              "ಕೆಳಗಿನ ಏಳು ನರಕಗಳಲ್ಲ. ಭಾಗವತ ಅವನ್ನು ಈ ಲೋಕಕ್ಕಿಂತ ಹೆಚ್ಚು ಪ್ರಕಾಶಮಾನವೂ ಹೆಚ್ಚು ಸುಖಕರವೂ ಎಂದು, ಉದ್ಯಾನ ಮತ್ತು ಅರಮನೆಗಳಿಂದ ತುಂಬಿದವೆಂದು ವರ್ಣಿಸುತ್ತದೆ, ಮತ್ತು ಶಿಕ್ಷೆಯ ನಿಜವಾದ ಸ್ಥಳಗಳನ್ನು ಮತ್ತೆಲ್ಲೋ ಇಡುತ್ತದೆ. ಭೂಮಿಯ ಕೆಳಗೆ ನರಕಾಗ್ನಿಯನ್ನು ನಿರೀಕ್ಷಿಸುವ ಓದುಗ ಆ ನಿರೀಕ್ಷೆಯನ್ನು ತಾನೇ ಹೊತ್ತು ತಂದಿದ್ದಾರೆ.",
            ),
          ],
        },
        {
          id: "karmabhumi",
          eyebrow: "ನಾವು ಇಲ್ಲಿ ಏಕೆ",
          title: "ಏನನ್ನಾದರೂ ಮಾಡಬಹುದಾದ ಏಕೈಕ ಲೋಕ",
          blocks: [
            para(
              "ಹದಿನಾಲ್ಕರಲ್ಲಿ ಇದೊಂದೇ ಕರ್ಮಭೂಮಿ — ಕರ್ಮ ಸಂಚಯವಾಗುವ ನೆಲ. ಉಳಿದೆಲ್ಲವೂ ಕರ್ಮದ ಫಲವನ್ನು ಖರ್ಚು ಮಾಡುವ ಸ್ಥಳಗಳು: ಸ್ವರ್ಗ ಪುಣ್ಯದಿಂದ ಹಣ ಹಾಕಿದ ದೀರ್ಘ ವಾಸ, ಪುಣ್ಯ ಮುಗಿದಾಗ ಅದೂ ಮುಗಿಯುತ್ತದೆ, ಮತ್ತು ವಾಸಿ ಇಲ್ಲಿಗೇ ಮರಳುತ್ತಾನೆ. ಕೆಳಗಿನ ಲೋಕಗಳ ಜನ್ಮವೂ ಅದೇ ರೀತಿ, ಚಿಹ್ನೆ ತಿರುಗಿಸಿ.",
            ),
            para(
              "ಮಾನವ ಜನ್ಮವನ್ನು ಅಪರೂಪ ಮತ್ತು ಅಮೂಲ್ಯವೆಂದು ಪರಂಪರೆ ಪರಿಗಣಿಸುವುದಕ್ಕೆ ಇದೇ ರಚನಾತ್ಮಕ ಕಾರಣ, ಮತ್ತು ಇದು ಕಾಣುವುದಕ್ಕಿಂತ ವಿಚಿತ್ರವಾದ ಹೇಳಿಕೆ. ಅಂದರೆ ದೀರ್ಘಾವಧಿಯಲ್ಲಿ ದೇವತೆಗಳೇ ಕೆಟ್ಟ ಸ್ಥಿತಿಯಲ್ಲಿದ್ದಾರೆ: ಅನುಭವಿಸಲು ಹೆಚ್ಚು ಇದೆ, ಆದರೆ ಏನನ್ನಾದರೂ ಬದಲಿಸುವ ಕೆಲಸವಿಲ್ಲ, ಮತ್ತು ಎಲ್ಲಿಗಾದರೂ ತಲುಪಲು ಇಲ್ಲಿಗೇ ಮರಳಬೇಕು.",
            ),
          ],
        },
        {
          id: "islands",
          eyebrow: "ಏಳು ಉಂಗುರಗಳು",
          title: "ನಕ್ಷೆ ಅಲ್ಲ, ಮತ್ತು ಅದನ್ನೇ ಹೇಳುತ್ತದೆ",
          blocks: [
            para(
              "ಸಮತಲ ಯೋಜನೆ ಕೇಂದ್ರೀಕೃತ: ಮಧ್ಯದಲ್ಲಿ ಮೇರು ಪರ್ವತ, ಅದರ ಸುತ್ತ ಜಂಬೂದ್ವೀಪ, ಅದರ ಸುತ್ತ ಉಂಗುರಗಳಲ್ಲಿ ಇನ್ನಾರು ದ್ವೀಪಗಳು, ಪ್ರತಿಯೊಂದನ್ನೂ ಮುಂದಿನದರಿಂದ ಒಂದು ಸಮುದ್ರ ಬೇರ್ಪಡಿಸುತ್ತದೆ. ಸಮುದ್ರಗಳು ಉಪ್ಪು, ಕಬ್ಬಿನ ರಸ, ಸುರೆ, ತುಪ್ಪ, ಮೊಸರು, ಹಾಲು ಮತ್ತು ಸಿಹಿ ನೀರಿನವು. ಪ್ರತಿ ಉಂಗುರವೂ ಒಳಗಿನದರ ಎರಡರಷ್ಟು ಅಗಲ.",
            ),
            para(
              "ಈ ಏಳನ್ನು ನಿಜವಾದ ಖಂಡಗಳಿಗೆ ಹೊಂದಿಸುವ ಪ್ರಯತ್ನಗಳು ಆಧುನಿಕ, ಮತ್ತು ಅವು ತುಪ್ಪವನ್ನು ರೂಪಕವೆಂದೂ ದ್ವಿಗುಣವನ್ನು ಸ್ಥೂಲವೆಂದೂ ಪರಿಗಣಿಸಬೇಕಾಗುತ್ತದೆ — ಆಗ ಯೋಜನೆಯಲ್ಲಿ ಏನೂ ಉಳಿಯುವುದಿಲ್ಲ. ಗ್ರಂಥ ಭೂಮಿಯ ಮೇಲ್ಮೈಯನ್ನು ವರ್ಣಿಸಲು ಹೊರಟಿಲ್ಲ; ಒಂದು ಕೇಂದ್ರದ ಸುತ್ತ ಜೋಡಿಸಿದ ವಿಶ್ವವನ್ನು ವರ್ಣಿಸುತ್ತಿದೆ — ಅದರಲ್ಲಿ ಭಾರತ, ಅಂದರೆ ಒಳಗಿನ ದ್ವೀಪದ ದಕ್ಷಿಣ ಭಾಗ, ಕರ್ಮ ಮಾಡಬಹುದಾದ ಏಕೈಕ ನೆಲ. ಅದು ರೇಖಾಂಶದ ಬಗೆಗಿನ ಹೇಳಿಕೆಯಲ್ಲ, ಮಹತ್ವದ ಬಗೆಗಿನ ಹೇಳಿಕೆ.",
            ),
          ],
        },
      ],
      hi: [
        {
          id: "axis",
          eyebrow: "चौदह",
          title: "सात ऊपर, सात नीचे",
          blocks: [
            para(
              "लोक एक ऊर्ध्व अक्ष पर सजे हैं और हमारा बीच में है: मध्य में भूः, उसके ऊपर भुवः और स्वः, फिर महः, जनः, तपः और सत्य; नीचे सात और, पाताल पर समाप्त। ऊपरी समूह के निचले तीन ही कल्प के अंत में जलते हैं — इसीलिए गायत्री के तीन शब्द, भूर् भुवः स्वः, ठीक उसी भाग का नाम लेते हैं जो नाशवान है।",
            ),
            para(
              "नीचे के सात नरक नहीं हैं। भागवत उन्हें इस लोक से अधिक प्रकाशमान और अधिक सुखद बताता है, उद्यानों और प्रासादों से भरा, और दंड के वास्तविक स्थान कहीं और रखता है। जो पाठक पृथ्वी के नीचे नरकाग्नि की अपेक्षा रखता है वह अपेक्षा स्वयं लेकर आया है।",
            ),
          ],
        },
        {
          id: "karmabhumi",
          eyebrow: "हम यहाँ क्यों हैं",
          title: "एकमात्र लोक जहाँ कुछ किया जा सकता है",
          blocks: [
            para(
              "चौदह में केवल यही कर्मभूमि है — वह भूमि जहाँ कर्म संचित होता है। शेष सब कर्म के फल खर्च करने के स्थान हैं: स्वर्ग पुण्य से वित्तपोषित एक लंबा निवास है, और पुण्य चुकते ही वह समाप्त हो जाता है, जिसके बाद निवासी यहीं लौटता है। निचले लोकों का जन्म भी उसी तरह चलता है, चिह्न उलटकर।",
            ),
            para(
              "मनुष्य-जन्म को परंपरा दुर्लभ और मूल्यवान क्यों मानती है, इसका संरचनात्मक कारण यही है, और यह दिखने से अधिक विचित्र दावा है। इसका अर्थ है कि दीर्घ अवधि में देवता ही अधिक अभागे हैं: भोगने को अधिक है और ऐसा कुछ करने को नहीं जो कुछ बदले, और कहीं भी पहुँचने के लिए उन्हें यहीं लौटना पड़ता है।",
            ),
          ],
        },
        {
          id: "islands",
          eyebrow: "सात वलय",
          title: "नक्शा नहीं, और वह स्वयं यही कहता है",
          blocks: [
            para(
              "क्षैतिज व्यवस्था संकेंद्रित है: मध्य में मेरु पर्वत, उसके चारों ओर जंबूद्वीप, और उसके चारों ओर वलयों में छह और द्वीप, हर एक अगले से एक समुद्र द्वारा अलग। समुद्र लवण, इक्षुरस, सुरा, घृत, दधि, क्षीर और स्वादु जल के हैं। हर वलय भीतर वाले से दुगुना चौड़ा है।",
            ),
            para(
              "इन सातों को वास्तविक महाद्वीपों पर बिठाने के प्रयत्न आधुनिक हैं, और उन्हें घी को रूपक और दुगुनेपन को स्थूल मानना पड़ता है — जिसके बाद व्यवस्था का कुछ शेष नहीं रहता। ग्रंथ पृथ्वी की सतह का वर्णन नहीं कर रहा; वह एक केंद्र के चारों ओर सजा विश्व वर्णित कर रहा है, जिसमें भारत — भीतरी द्वीप का दक्षिण भाग — एकमात्र भूमि है जहाँ कर्म किया जा सकता है। यह देशांतर का नहीं, महत्त्व का दावा है।",
            ),
          ],
        },
      ],
    },
  },

  // ── 4 ────────────────────────────────────────────────────
  {
    slug: "dissolution",
    name: { en: "Dissolution, and the circle", kn: "ಪ್ರಳಯ ಮತ್ತು ಚಕ್ರ", hi: "प्रलय और चक्र" },
    sanskrit: "प्रलयः",
    order: 4,
    lede: {
      en: "Four endings of four sizes — and the reason none of them is the end.",
      kn: "ನಾಲ್ಕು ಗಾತ್ರಗಳ ನಾಲ್ಕು ಅಂತ್ಯಗಳು — ಮತ್ತು ಅವುಗಳಲ್ಲಿ ಯಾವುದೂ ಕೊನೆಯಲ್ಲದಿರುವುದಕ್ಕೆ ಕಾರಣ.",
      hi: "चार आकारों के चार अंत — और उनमें से कोई अंत क्यों नहीं है, इसका कारण।",
    },
    content: {
      en: [
        {
          id: "four",
          eyebrow: "The four",
          title: "An ending at every scale",
          blocks: [
            para(
              "The scheme names four dissolutions. The daily one is the continual ending of things, and sleep. The occasional one comes at the end of a kalpa, when the three lower worlds burn and flood and the higher ones are emptied but kept. The elemental one comes at the end of Brahmā's hundred years, when everything made returns into what it was made of, element by element, until only unmanifest nature is left. The absolute one is liberation.",
            ),
            para(
              "Putting all four on one list is the most interesting move in the whole construction. It means the end of a day and the end of a universe are the same kind of event at different scales, and that a person's liberation belongs on the same list as the destruction of everything — not as a metaphor for it, but as a fourth item of the same kind.",
            ),
          ],
        },
        {
          id: "circle",
          eyebrow: "The shape of it",
          title: "A circle, not a line",
          blocks: [
            para(
              "There is no first moment in this scheme and no last one. Brahmā's hundred years end and another Brahmā begins; the kalpas have no numbering that starts anywhere. The texts say plainly that the series is beginningless, and they mean it as a description rather than as a way of avoiding the question.",
            ),
            para(
              "This changes what a cosmology is for. A time with a beginning and an end can carry a story — a creation, a fall, a judgement — and the events in it matter because they happen once. Circular time cannot carry that, and the Purāṇas do not try to make it. What they put in its place is a scheme in which the only thing that does not repeat is somebody getting out, which is why mokṣa is counted among the dissolutions and why it is the only one anybody can bring about.",
            ),
          ],
        },
        {
          id: "misuse",
          eyebrow: "What this is not",
          title: "Not an account of the age of the universe",
          blocks: [
            para(
              "The kalpa figure of 4.32 billion years is close enough to the age of the earth to invite a comparison, and the comparison is made often. It does not survive contact with the rest of the scheme: the same construction gives Brahmā a lifetime of 311 trillion years, puts seven worlds under the ground, and separates its islands with seas of ghee. Taking one number out of that and treating it as a measurement, while treating the others as symbol, is not reading the text; it is shopping in it.",
            ),
            para(
              "The scheme is worth more than that. What it has to say is about shape — that time is deep, that it is cyclical, that decline is built in and is not a catastrophe, and that the only exit is sideways. None of that needs to be true of the physical universe to be worth understanding, and none of it is improved by being made to agree with a textbook.",
            ),
          ],
        },
      ],
      kn: [
        {
          id: "four",
          eyebrow: "ನಾಲ್ಕು",
          title: "ಪ್ರತಿ ಮಟ್ಟದಲ್ಲೂ ಒಂದು ಅಂತ್ಯ",
          blocks: [
            para(
              "ಯೋಜನೆ ನಾಲ್ಕು ಪ್ರಳಯಗಳನ್ನು ಹೆಸರಿಸುತ್ತದೆ. ನಿತ್ಯ ಪ್ರಳಯವೆಂದರೆ ವಸ್ತುಗಳ ನಿರಂತರ ಅಂತ್ಯ, ಮತ್ತು ನಿದ್ರೆ. ನೈಮಿತ್ತಿಕ ಕಲ್ಪದ ಕೊನೆಯಲ್ಲಿ ಬರುತ್ತದೆ — ಕೆಳಗಿನ ಮೂರು ಲೋಕಗಳು ಸುಟ್ಟು ಮುಳುಗುತ್ತವೆ, ಮೇಲಿನವು ಖಾಲಿಯಾಗಿ ಉಳಿಯುತ್ತವೆ. ಪ್ರಾಕೃತಿಕ ಬ್ರಹ್ಮನ ನೂರು ವರ್ಷಗಳ ಕೊನೆಯಲ್ಲಿ — ಮಾಡಲ್ಪಟ್ಟ ಎಲ್ಲವೂ ತಾನು ಯಾವುದರಿಂದ ಆಯಿತೋ ಅದಕ್ಕೆ, ಭೂತದಿಂದ ಭೂತಕ್ಕೆ ಮರಳಿ, ಕೊನೆಗೆ ಅವ್ಯಕ್ತ ಪ್ರಕೃತಿ ಮಾತ್ರ ಉಳಿಯುವವರೆಗೆ. ಆತ್ಯಂತಿಕವೆಂದರೆ ಮೋಕ್ಷ.",
            ),
            para(
              "ಈ ನಾಲ್ಕನ್ನೂ ಒಂದೇ ಪಟ್ಟಿಯಲ್ಲಿ ಇಡುವುದೇ ಇಡೀ ರಚನೆಯ ಅತಿ ಕುತೂಹಲಕರ ನಡೆ. ಅಂದರೆ ಒಂದು ದಿನದ ಕೊನೆ ಮತ್ತು ಒಂದು ವಿಶ್ವದ ಕೊನೆ ಬೇರೆ ಬೇರೆ ಮಟ್ಟದ ಒಂದೇ ಬಗೆಯ ಘಟನೆ; ಮತ್ತು ಒಬ್ಬ ವ್ಯಕ್ತಿಯ ಮೋಕ್ಷ ಎಲ್ಲದರ ನಾಶದ ಅದೇ ಪಟ್ಟಿಗೆ ಸೇರುತ್ತದೆ — ಅದರ ರೂಪಕವಾಗಿ ಅಲ್ಲ, ಅದೇ ಬಗೆಯ ನಾಲ್ಕನೇ ಸಂಗತಿಯಾಗಿ.",
            ),
          ],
        },
        {
          id: "circle",
          eyebrow: "ಅದರ ಆಕಾರ",
          title: "ವೃತ್ತ, ಗೆರೆಯಲ್ಲ",
          blocks: [
            para(
              "ಈ ಯೋಜನೆಯಲ್ಲಿ ಮೊದಲ ಕ್ಷಣವೂ ಇಲ್ಲ, ಕೊನೆಯ ಕ್ಷಣವೂ ಇಲ್ಲ. ಬ್ರಹ್ಮನ ನೂರು ವರ್ಷ ಮುಗಿದು ಇನ್ನೊಬ್ಬ ಬ್ರಹ್ಮ ಆರಂಭವಾಗುತ್ತಾನೆ; ಕಲ್ಪಗಳಿಗೆ ಎಲ್ಲಿಂದಲೋ ಆರಂಭವಾಗುವ ಸಂಖ್ಯೆಯಿಲ್ಲ. ಈ ಸರಣಿ ಅನಾದಿ ಎಂದು ಗ್ರಂಥಗಳು ನೇರವಾಗಿ ಹೇಳುತ್ತವೆ, ಮತ್ತು ಅದನ್ನು ಪ್ರಶ್ನೆಯಿಂದ ತಪ್ಪಿಸಿಕೊಳ್ಳುವ ದಾರಿಯಾಗಿ ಅಲ್ಲ, ವರ್ಣನೆಯಾಗಿ ಹೇಳುತ್ತವೆ.",
            ),
            para(
              "ಇದು ವಿಶ್ವಶಾಸ್ತ್ರ ಯಾವುದಕ್ಕಾಗಿ ಎಂಬುದನ್ನೇ ಬದಲಿಸುತ್ತದೆ. ಆರಂಭ ಮತ್ತು ಅಂತ್ಯವಿರುವ ಕಾಲ ಒಂದು ಕಥೆಯನ್ನು ಹೊರಬಲ್ಲದು — ಸೃಷ್ಟಿ, ಪತನ, ತೀರ್ಪು — ಮತ್ತು ಅದರಲ್ಲಿನ ಘಟನೆಗಳು ಒಮ್ಮೆ ಮಾತ್ರ ನಡೆಯುವುದರಿಂದ ಮುಖ್ಯವಾಗುತ್ತವೆ. ಚಕ್ರೀಯ ಕಾಲ ಅದನ್ನು ಹೊರಲಾರದು, ಮತ್ತು ಪುರಾಣಗಳು ಹೊರಿಸಲು ಪ್ರಯತ್ನಿಸುವುದಿಲ್ಲ. ಅದರ ಜಾಗದಲ್ಲಿ ಅವು ಇಡುವುದು ಇದನ್ನು: ಪುನರಾವರ್ತನೆಯಾಗದ ಏಕೈಕ ಸಂಗತಿ ಯಾರಾದರೂ ಹೊರಬರುವುದು — ಆದ್ದರಿಂದಲೇ ಮೋಕ್ಷವನ್ನು ಪ್ರಳಯಗಳಲ್ಲಿ ಎಣಿಸಲಾಗಿದೆ, ಮತ್ತು ಯಾರಾದರೂ ತರಬಹುದಾದ ಏಕೈಕ ಪ್ರಳಯ ಅದೇ.",
            ),
          ],
        },
        {
          id: "misuse",
          eyebrow: "ಇದು ಏನಲ್ಲ",
          title: "ವಿಶ್ವದ ವಯಸ್ಸಿನ ಲೆಕ್ಕವಲ್ಲ",
          blocks: [
            para(
              "ಕಲ್ಪದ ೪೩೨ ಕೋಟಿ ವರ್ಷ ಭೂಮಿಯ ವಯಸ್ಸಿಗೆ ಸಾಕಷ್ಟು ಹತ್ತಿರವಿದ್ದು ಹೋಲಿಕೆಗೆ ಆಹ್ವಾನಿಸುತ್ತದೆ, ಮತ್ತು ಆ ಹೋಲಿಕೆ ಆಗಾಗ ಮಾಡಲ್ಪಡುತ್ತದೆ. ಯೋಜನೆಯ ಉಳಿದ ಭಾಗದೊಂದಿಗೆ ಅದು ಉಳಿಯುವುದಿಲ್ಲ: ಅದೇ ರಚನೆ ಬ್ರಹ್ಮನಿಗೆ ೩೧೧ ಲಕ್ಷ ಕೋಟಿ ವರ್ಷದ ಆಯುಷ್ಯ ಕೊಡುತ್ತದೆ, ನೆಲದ ಕೆಳಗೆ ಏಳು ಲೋಕಗಳನ್ನು ಇಡುತ್ತದೆ, ಮತ್ತು ತನ್ನ ದ್ವೀಪಗಳನ್ನು ತುಪ್ಪದ ಸಮುದ್ರಗಳಿಂದ ಬೇರ್ಪಡಿಸುತ್ತದೆ. ಅದರಿಂದ ಒಂದು ಅಂಕಿಯನ್ನು ಎತ್ತಿ ಅದನ್ನು ಅಳತೆಯೆಂದೂ ಉಳಿದವನ್ನು ಸಂಕೇತವೆಂದೂ ಪರಿಗಣಿಸುವುದು ಗ್ರಂಥವನ್ನು ಓದುವುದಲ್ಲ, ಅದರಲ್ಲಿ ಆರಿಸಿ ಕೊಳ್ಳುವುದು.",
            ),
            para(
              "ಈ ಯೋಜನೆ ಅದಕ್ಕಿಂತ ಹೆಚ್ಚು ಬೆಲೆಬಾಳುತ್ತದೆ. ಅದು ಹೇಳುವುದು ಆಕಾರದ ಬಗ್ಗೆ — ಕಾಲ ಆಳವಾದದ್ದು, ಚಕ್ರೀಯವಾದದ್ದು, ಇಳಿತ ಅದರೊಳಗೇ ಕಟ್ಟಲ್ಪಟ್ಟಿದೆ ಮತ್ತು ಅದು ವಿಪತ್ತಲ್ಲ, ಮತ್ತು ಹೊರಹೋಗುವ ದಾರಿ ಪಕ್ಕಕ್ಕೆ ಮಾತ್ರ. ಇವುಗಳಲ್ಲಿ ಯಾವುದೂ ಭೌತಿಕ ವಿಶ್ವದ ಬಗ್ಗೆ ಸತ್ಯವಾಗಬೇಕಿಲ್ಲ ಅರ್ಥಮಾಡಿಕೊಳ್ಳಲು ಯೋಗ್ಯವಾಗಲು, ಮತ್ತು ಪಠ್ಯಪುಸ್ತಕದೊಂದಿಗೆ ಹೊಂದಿಸುವುದರಿಂದ ಯಾವುದೂ ಉತ್ತಮವಾಗುವುದಿಲ್ಲ.",
            ),
          ],
        },
      ],
      hi: [
        {
          id: "four",
          eyebrow: "चार",
          title: "हर स्तर पर एक अंत",
          blocks: [
            para(
              "व्यवस्था चार प्रलय गिनाती है। नित्य प्रलय वस्तुओं का निरंतर अंत है, और निद्रा। नैमित्तिक कल्प के अंत में आता है, जब नीचे के तीन लोक जलते और डूबते हैं और ऊपर के रिक्त होकर बने रहते हैं। प्राकृतिक ब्रह्मा के सौ वर्षों के अंत में, जब रचा हुआ सब कुछ जिससे बना था उसी में, भूत दर भूत लौटता है, जब तक केवल अव्यक्त प्रकृति न बचे। आत्यंतिक है मोक्ष।",
            ),
            para(
              "चारों को एक सूची में रखना ही पूरी रचना की सबसे रोचक चाल है। इसका अर्थ है कि एक दिन का अंत और एक विश्व का अंत भिन्न स्तरों पर एक ही प्रकार की घटना हैं; और किसी व्यक्ति का मोक्ष सब कुछ के नाश की उसी सूची में आता है — उसके रूपक के रूप में नहीं, बल्कि उसी प्रकार की चौथी वस्तु के रूप में।",
            ),
          ],
        },
        {
          id: "circle",
          eyebrow: "उसका आकार",
          title: "वृत्त, रेखा नहीं",
          blocks: [
            para(
              "इस व्यवस्था में न पहला क्षण है न अंतिम। ब्रह्मा के सौ वर्ष समाप्त होते हैं और दूसरा ब्रह्मा आरंभ होता है; कल्पों की ऐसी कोई गिनती नहीं जो कहीं से आरंभ होती हो। ग्रंथ स्पष्ट कहते हैं कि यह शृंखला अनादि है, और वे इसे प्रश्न से बचने का उपाय नहीं, वर्णन मानकर कहते हैं।",
            ),
            para(
              "इससे यह बदल जाता है कि विश्व-व्यवस्था किस काम की है। जिस काल का आरंभ और अंत हो वह एक कथा उठा सकता है — सृष्टि, पतन, निर्णय — और उसमें घटनाएँ इसलिए महत्त्व रखती हैं कि वे एक बार होती हैं। चक्रीय काल वह नहीं उठा सकता, और पुराण उठवाने का प्रयत्न भी नहीं करते। उसकी जगह वे यह रखते हैं: जो एक वस्तु नहीं दोहराती वह है किसी का बाहर निकल जाना — इसीलिए मोक्ष प्रलयों में गिना गया है, और इसीलिए वही एक है जिसे कोई ला सकता है।",
            ),
          ],
        },
        {
          id: "misuse",
          eyebrow: "यह क्या नहीं है",
          title: "विश्व की आयु का लेखा नहीं",
          blocks: [
            para(
              "कल्प का ४३२ करोड़ वर्ष का अंक पृथ्वी की आयु के इतना निकट है कि तुलना को आमंत्रित करता है, और वह तुलना प्रायः की जाती है। व्यवस्था के शेष भाग के साथ वह टिकती नहीं: वही रचना ब्रह्मा को ३११ लाख करोड़ वर्ष की आयु देती है, भूमि के नीचे सात लोक रखती है, और अपने द्वीपों को घी के समुद्रों से अलग करती है। उसमें से एक अंक उठाकर उसे माप मानना और शेष को प्रतीक — यह ग्रंथ पढ़ना नहीं, उसमें से चुन लेना है।",
            ),
            para(
              "यह व्यवस्था इससे अधिक मूल्य रखती है। उसे जो कहना है वह आकार के विषय में है — कि काल गहरा है, चक्रीय है, ह्रास उसमें निर्मित है और विपत्ति नहीं, और बाहर निकलने का मार्ग केवल बगल से है। इनमें से किसी को समझने योग्य होने के लिए भौतिक विश्व के विषय में सत्य होना आवश्यक नहीं, और किसी पाठ्यपुस्तक से मिलाने से इनमें से कोई बेहतर नहीं होता।",
            ),
          ],
        },
      ],
    },
  },
];

export function topicBySlug(slug: string): CosmosTopic | undefined {
  return COSMOS_TOPICS.find((t) => t.slug === slug);
}

export function topicsInOrder(): CosmosTopic[] {
  return [...COSMOS_TOPICS].sort((a, b) => a.order - b.order);
}
