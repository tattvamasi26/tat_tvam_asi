import { registerStotra } from "../stotras";

// ─────────────────────────────────────────────────────────
//  Gaṇānāṃ tvā — Ṛgveda 2.23.1.
//
//  Mūla checked against the Ṛgveda text of 2.23 on Sanskrit
//  Wikisource (ऋग्वेदः सूक्तं २.२३), split into its four jagatī
//  pādas. Svara marks left out, as elsewhere on the site.
//
//  In the Ṛgveda this verse addresses Brahmaṇaspati, lord of the
//  sacred word; ritual tradition hears Gaṇapati in it and opens
//  with it. The commentary says so rather than smoothing it over.
// ─────────────────────────────────────────────────────────

registerStotra({
  slug: "gananam-tva",
  textId: "t-stuti-gananam-tva",
  devata: "ganesha",
  group: "vedic",
  order: 5,
  category: "shruti",
  metre: "jagatī",
  origin: { en: "Rigveda 2.23.1", kn: "ಋಗ್ವೇದ 2.23.1", hi: "ऋग्वेद 2.23.1" },
  composer: { en: "Rishi Gritsamada", kn: "ಋಷಿ ಗೃತ್ಸಮದ", hi: "ऋषि गृत्समद" },
  // From the Ramakrishna Mission's Vedamantrah recording.
  video: { id: "3ErdStnFmos", title: "Gananam Tva, Vedic chanting by Swami Sarvagananda", channel: "Inside The Globe" },
  verses: [
    {
      id: "gananam-tva-1",
      locator: "1",
      handle: {
        en: "Lord of the hosts, we call you",
        kn: "ಗಣಗಳ ಒಡೆಯನೇ, ನಿನ್ನನ್ನು ಕರೆಯುತ್ತೇವೆ",
        hi: "गणों के स्वामी, हम तुम्हें पुकारते हैं",
      },
      sanskrit: [
        "गणानां त्वा गणपतिं हवामहे",
        "कविं कवीनामुपमश्रवस्तमम् ।",
        "ज्येष्ठराजं ब्रह्मणां ब्रह्मणस्पत",
        "आ नः शृण्वन्नूतिभिः सीद सादनम् ॥",
      ],
      iast: [
        "gaṇānāṃ tvā gaṇapatiṃ havāmahe",
        "kaviṃ kavīnām upamaśravastamam |",
        "jyeṣṭharājaṃ brahmaṇāṃ brahmaṇas pata",
        "ā naḥ śṛṇvann ūtibhiḥ sīda sādanam ||",
      ],
      keywords: [
        { term: "गणपतिम्", iast: "gaṇapatim", gloss: { en: "lord of the hosts", kn: "ಗಣಗಳ ಒಡೆಯನನ್ನು", hi: "गणों के स्वामी को" } },
        { term: "हवामहे", iast: "havāmahe", gloss: { en: "we call, we invoke", kn: "ಆಹ್ವಾನಿಸುತ್ತೇವೆ", hi: "हम आह्वान करते हैं" } },
        { term: "कविं कवीनाम्", iast: "kaviṃ kavīnām", gloss: { en: "seer among seers", kn: "ಕವಿಗಳಲ್ಲಿ ಕವಿ, ದ್ರಷ್ಟಾರರಲ್ಲಿ ದ್ರಷ್ಟಾರ", hi: "कवियों में कवि, द्रष्टाओं में द्रष्टा" } },
        { term: "उपमश्रवस्तमम्", iast: "upamaśravastamam", gloss: { en: "highest in renown", kn: "ಅತ್ಯುನ್ನತ ಕೀರ್ತಿಯುಳ್ಳವನು", hi: "सर्वोच्च कीर्ति वाले" } },
        { term: "ज्येष्ठराजम्", iast: "jyeṣṭharājam", gloss: { en: "eldest king, first sovereign", kn: "ಜ್ಯೇಷ್ಠ ರಾಜ, ಮೊದಲ ಅಧಿಪತಿ", hi: "ज्येष्ठ राजा, प्रथम अधिपति" } },
        { term: "ऊतिभिः", iast: "ūtibhiḥ", gloss: { en: "with your protections, your help", kn: "ನಿನ್ನ ರಕ್ಷಣೆಗಳೊಂದಿಗೆ", hi: "अपनी रक्षाओं के साथ" } },
        { term: "सीद सादनम्", iast: "sīda sādanam", gloss: { en: "sit on the seat", kn: "ಆಸನದಲ್ಲಿ ಕುಳಿತುಕೋ", hi: "आसन पर विराजो" } },
      ],
      readings: {
        en: {
          translation:
            "We call on you, lord of the hosts among the hosts — seer of seers, highest in renown, eldest king of sacred words, O Brahmaṇaspati. Hear us, and come with your protection to sit in your seat.",
          explanation:
            "In the Ṛgveda this verse, seen by Gṛtsamada, opens a hymn to Brahmaṇaspati — the lord of brahman, the sacred word that makes a rite work. The 'hosts' are the companies of gods and singers, and the one called gaṇapati is their leader in prayer. It is the same title, lord of the gaṇas, that later belongs to the elephant-headed son of Śiva, and ritual tradition hears him in it: this is the verse with which a Vedic rite, or a household pūjā, opens in Gaṇapati's name.\n\nThe request at the end is plain hospitality. The god is called by name, praised, and asked to come and take his seat — the sādana laid out for him — so that what follows can begin in his presence.",
        },
        kn: {
          translation:
            "ಗಣಗಳಲ್ಲಿ ಗಣಪತಿಯಾದ ನಿನ್ನನ್ನು ಕರೆಯುತ್ತೇವೆ — ಕವಿಗಳಲ್ಲಿ ಕವಿ, ಅತ್ಯುನ್ನತ ಕೀರ್ತಿಯುಳ್ಳವನು, ಮಂತ್ರಗಳ ಜ್ಯೇಷ್ಠ ರಾಜ, ಓ ಬ್ರಹ್ಮಣಸ್ಪತಿ. ನಮ್ಮ ಮಾತನ್ನು ಕೇಳುತ್ತಾ ನಿನ್ನ ರಕ್ಷಣೆಯೊಂದಿಗೆ ಬಂದು ನಿನ್ನ ಆಸನದಲ್ಲಿ ಕುಳಿತುಕೋ.",
          explanation:
            "ಋಗ್ವೇದದಲ್ಲಿ ಗೃತ್ಸಮದರು ದರ್ಶಿಸಿದ ಈ ಋಕ್ಕು ಬ್ರಹ್ಮಣಸ್ಪತಿಯ ಸೂಕ್ತವನ್ನು ಆರಂಭಿಸುತ್ತದೆ — ಯಜ್ಞವನ್ನು ಫಲಿಸುವಂತೆ ಮಾಡುವ ಪವಿತ್ರ ವಾಕ್ಕಾದ ಬ್ರಹ್ಮದ ಒಡೆಯನ ಸೂಕ್ತ. 'ಗಣಗಳು' ಎಂದರೆ ದೇವತೆಗಳ ಮತ್ತು ಸ್ತೋತೃಗಳ ಸಮೂಹಗಳು; ಗಣಪತಿ ಎಂದು ಕರೆಯಲ್ಪಡುವವನು ಪ್ರಾರ್ಥನೆಯಲ್ಲಿ ಅವರ ನಾಯಕ. ಮುಂದೆ ಶಿವನ ಗಜಮುಖ ಪುತ್ರನಿಗೆ ಸೇರುವುದೂ ಇದೇ ಬಿರುದು — ಗಣಗಳ ಒಡೆಯ — ಮತ್ತು ಪರಂಪರೆ ಈ ಋಕ್ಕಿನಲ್ಲಿ ಅವನನ್ನೇ ಕೇಳುತ್ತದೆ: ವೈದಿಕ ಯಜ್ಞವಾಗಲಿ ಮನೆಯ ಪೂಜೆಯಾಗಲಿ, ಗಣಪತಿಯ ಹೆಸರಿನಲ್ಲಿ ಆರಂಭವಾಗುವುದು ಈ ಋಕ್ಕಿನಿಂದಲೇ.\n\nಕೊನೆಯ ಬೇಡಿಕೆ ಸರಳ ಆತಿಥ್ಯ. ದೇವನನ್ನು ಹೆಸರಿಡಿದು ಕರೆದು, ಸ್ತುತಿಸಿ, ಅವನಿಗಾಗಿ ಹಾಸಿದ ಆಸನದಲ್ಲಿ ಬಂದು ಕುಳಿತುಕೊಳ್ಳಲು ಕೇಳಲಾಗುತ್ತದೆ — ಮುಂದಿನದೆಲ್ಲವೂ ಅವನ ಸಾನ್ನಿಧ್ಯದಲ್ಲಿ ಆರಂಭವಾಗಲೆಂದು.",
        },
        hi: {
          translation:
            "गणों में गणपति, हम तुम्हें पुकारते हैं — कवियों में कवि, सर्वोच्च कीर्ति वाले, मंत्रों के ज्येष्ठ राजा, हे ब्रह्मणस्पति। हमारी सुनते हुए अपनी रक्षाओं के साथ आओ और अपने आसन पर विराजो।",
          explanation:
            "ऋग्वेद में गृत्समद द्वारा दृष्ट यह ऋचा ब्रह्मणस्पति के सूक्त का आरंभ करती है — ब्रह्म, अर्थात् यज्ञ को सफल करने वाली पवित्र वाणी, के स्वामी का सूक्त। 'गण' देवताओं और स्तोताओं के समूह हैं, और गणपति कहलाने वाला प्रार्थना में उनका नायक है। यही उपाधि — गणों का स्वामी — आगे चलकर शिव के गजमुख पुत्र की होती है, और परंपरा इस ऋचा में उन्हीं को सुनती है: वैदिक यज्ञ हो या घर की पूजा, गणपति के नाम से आरंभ इसी ऋचा से होता है।\n\nअंत की याचना सीधा आतिथ्य है। देवता को नाम लेकर बुलाया जाता है, उनकी स्तुति होती है, और उनसे उनके लिए बिछाए आसन पर आकर बैठने को कहा जाता है — ताकि आगे का सब कुछ उनकी उपस्थिति में आरंभ हो।",
        },
      },
    },
  ],
});
