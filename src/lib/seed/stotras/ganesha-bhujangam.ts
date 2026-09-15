import { registerStotra } from "../stotras";

// ─────────────────────────────────────────────────────────
//  Gaṇeśa Bhujaṅgam — nine verses in bhujaṅgaprayāta ("the
//  serpent's gait"), ascribed to Śaṅkara.
//
//  Checked against two printed editions on Sanskrit Wikisource:
//  Śaṅkarācāryavircitāni Stotrāṇi (1910) and the Bṛhat Stotra
//  Ratnākara (1953), which names Śaṅkara in its colophon. Where one
//  edition has a printing slip the other settles it:
//    · v3 रक्तरत्नप्रसून (1953) — the 1910 text prints रत्करत्न
//    · v4 किरीटोल्लसच्चन्द्र (1953) — the 1910 text prints सञ्चन्द्र
//  Elsewhere the 1910 text is followed (v9 सुस्तवं, सिध्यन्ति).
// ─────────────────────────────────────────────────────────

const REFRAIN = "गणाधीशमीशानसूनुं तमीडे ॥";
const REFRAIN_IAST = "gaṇādhīśam īśānasūnuṃ tam īḍe ||";

registerStotra({
  slug: "ganesha-bhujangam",
  textId: "t-stuti-ganesha-bhujangam",
  devata: "ganesha",
  group: "stotra",
  order: 9,
  category: "smriti",
  metre: "bhujaṅgaprayāta",
  origin: { en: "Brihat Stotra Ratnakara", kn: "ಬೃಹತ್ ಸ್ತೋತ್ರ ರತ್ನಾಕರ", hi: "बृहत् स्तोत्र रत्नाकर" },
  composer: { en: "Adi Shankaracharya", kn: "ಆದಿ ಶಂಕರಾಚಾರ್ಯರು", hi: "आदि शंकराचार्य" },
  video: {
    id: "UGfJxXPTttk",
    title: "Ganesha Bhujangam, with lyrics and meaning, sung by Gayathri Girish",
    channel: "Gayathri Girish",
  },
  verses: [
    {
      id: "ganesha-bhujangam-1",
      locator: "1",
      sanskrit: ["रणत्क्षुद्रघण्टानिनादाभिरामं", "चलत्ताण्डवोद्दण्डवत्पद्मतालम् ।", "लसत्तुन्दिलाङ्गोपरिव्यालहारं", REFRAIN],
      iast: ["raṇatkṣudraghaṇṭāninādābhirāmaṃ", "calattāṇḍavoddaṇḍavatpadmatālam |", "lasattundilāṅgoparivyālahāraṃ", REFRAIN_IAST],
      readings: {
        en: { translation: "I praise him, lord of the gaṇas, son of Īśāna: lovely with the ringing of small bells, his lotus feet keeping time in a vigorous dance, a serpent garland shining on his round body." },
        kn: { translation: "ಝಣಝಣಿಸುವ ಕಿರುಗಂಟೆಗಳ ನಾದದಿಂದ ಮನೋಹರನಾದ, ಉದ್ದಂಡ ತಾಂಡವದಲ್ಲಿ ಪದ್ಮಪಾದಗಳಿಂದ ತಾಳ ಹಾಕುವ, ದುಂಡು ದೇಹದ ಮೇಲೆ ಸರ್ಪಹಾರ ಹೊಳೆಯುವ ಗಣಾಧೀಶನನ್ನು, ಈಶಾನಪುತ್ರನನ್ನು ಸ್ತುತಿಸುತ್ತೇನೆ." },
        hi: { translation: "छोटी घंटियों की रुनझुन से मनोहर, प्रचंड तांडव में कमल-चरणों से ताल देते, गोल देह पर सर्प का हार धारण किए उन गणाधीश, ईशान-पुत्र की मैं स्तुति करता हूँ।" },
      },
    },
    {
      id: "ganesha-bhujangam-2",
      locator: "2",
      sanskrit: ["ध्वनिध्वंसवीणालयोल्लासिवक्त्रं", "स्फुरच्छुण्डदण्डोल्लसद्बीजपूरम् ।", "गलद्दर्पसौगन्ध्यलोलालिमालं", REFRAIN],
      iast: ["dhvanidhvaṃsavīṇālayollāsivaktraṃ", "sphuracchuṇḍadaṇḍollasadbījapūram |", "galaddarpasaugandhyalolālimālaṃ", REFRAIN_IAST],
      readings: {
        en: { translation: "I praise him, lord of the gaṇas, son of Īśāna: his face alight with the rhythm of the vīṇā, a citron gleaming in his upraised trunk, rows of bees hovering, drawn by the fragrance of his flowing ichor." },
        kn: { translation: "ವೀಣೆಯ ಲಯಕ್ಕೆ ಮುಖ ಅರಳುವ, ಎತ್ತಿದ ಸೊಂಡಿಲಿನಲ್ಲಿ ಮಾದಳ ಹಣ್ಣು ಹೊಳೆಯುವ, ಸುರಿಯುವ ಮದಜಲದ ಪರಿಮಳಕ್ಕೆ ಮರುಳಾದ ದುಂಬಿಗಳ ಸಾಲು ಸುತ್ತುವ ಗಣಾಧೀಶನನ್ನು, ಈಶಾನಪುತ್ರನನ್ನು ಸ್ತುತಿಸುತ್ತೇನೆ." },
        hi: { translation: "वीणा की लय पर जिनका मुख खिल उठता है, उठी सूँड में बिजौरा चमकता है, बहते मदजल की सुगंध से खिंचे भौंरों की पंक्तियाँ जिनके चारों ओर मँडराती हैं — उन गणाधीश, ईशान-पुत्र की मैं स्तुति करता हूँ।" },
      },
    },
    {
      id: "ganesha-bhujangam-3",
      locator: "3",
      sanskrit: ["प्रकाशज्जपारक्तरत्नप्रसून-", "प्रवालप्रभातारुणज्योतिरेकम् ।", "प्रलम्बोदरं वक्रतुण्डैकदन्तं", REFRAIN],
      iast: ["prakāśajjapāraktaratnaprasūna-", "pravālaprabhātāruṇajyotir ekam |", "pralambodaraṃ vakratuṇḍaikadantaṃ", REFRAIN_IAST],
      readings: {
        en: { translation: "I praise him, lord of the gaṇas, son of Īśāna: one light, red as the bright hibiscus, as rubies and coral, as the sky at dawn — great of belly, curved of trunk, with a single tusk." },
        kn: { translation: "ಹೊಳೆಯುವ ದಾಸವಾಳ ಹೂವಿನಂತೆ, ರತ್ನ, ಹವಳ ಮತ್ತು ಉಷಃಕಾಲದಂತೆ ಕೆಂಬಣ್ಣದ ಏಕಜ್ಯೋತಿ; ಲಂಬೋದರ, ವಕ್ರತುಂಡ, ಏಕದಂತ — ಆ ಗಣಾಧೀಶನನ್ನು, ಈಶಾನಪುತ್ರನನ್ನು ಸ್ತುತಿಸುತ್ತೇನೆ." },
        hi: { translation: "चमकते जपा-पुष्प, रत्न, प्रवाल और प्रभात की तरह अरुण वह एक ज्योति; लंबोदर, वक्रतुंड, एकदंत — उन गणाधीश, ईशान-पुत्र की मैं स्तुति करता हूँ।" },
      },
    },
    {
      id: "ganesha-bhujangam-4",
      locator: "4",
      sanskrit: ["विचित्रस्फुरद्रत्नमालाकिरीटं", "किरीटोल्लसच्चन्द्ररेखाविभूषम् ।", "विभूषैकभूषं भवध्वंसहेतुं", REFRAIN],
      iast: ["vicitrasphuradratnamālākirīṭaṃ", "kirīṭollasaccandrarekhāvibhūṣam |", "vibhūṣaikabhūṣaṃ bhavadhvaṃsahetuṃ", REFRAIN_IAST],
      readings: {
        en: { translation: "I praise him, lord of the gaṇas, son of Īśāna: his crown strung with many-coloured, glittering jewels and adorned by the crescent moon shining on it; the one ornament of all ornaments, the cause of release from worldly bondage." },
        kn: { translation: "ಬಗೆಬಗೆಯ ಹೊಳೆಯುವ ರತ್ನಮಾಲೆಗಳ ಕಿರೀಟವುಳ್ಳ, ಕಿರೀಟದ ಮೇಲೆ ಹೊಳೆಯುವ ಚಂದ್ರರೇಖೆಯಿಂದ ಅಲಂಕೃತನಾದ, ಆಭರಣಗಳಿಗೂ ಆಭರಣನಾದ, ಸಂಸಾರಬಂಧನದ ನಾಶಕ್ಕೆ ಕಾರಣನಾದ ಗಣಾಧೀಶನನ್ನು, ಈಶಾನಪುತ್ರನನ್ನು ಸ್ತುತಿಸುತ್ತೇನೆ." },
        hi: { translation: "रंग-बिरंगी चमकती रत्नमालाओं का मुकुट धारण किए, मुकुट पर शोभित चंद्ररेखा से अलंकृत, आभूषणों के भी आभूषण, संसार-बंधन के नाश के कारण — उन गणाधीश, ईशान-पुत्र की मैं स्तुति करता हूँ।" },
      },
    },
    {
      id: "ganesha-bhujangam-5",
      locator: "5",
      sanskrit: ["उदञ्चद्भुजावल्लरीदृश्यमूलो-", "च्चलद्भ्रूलताविभ्रमभ्राजदक्षम् ।", "मरुत्सुन्दरीचामरैः सेव्यमानं", REFRAIN],
      iast: ["udañcadbhujāvallarīdṛśyamūlo-", "ccaladbhrūlatāvibhramabhrājadakṣam |", "marutsundarīcāmaraiḥ sevyamānaṃ", REFRAIN_IAST],
      readings: {
        en: { translation: "I praise him, lord of the gaṇas, son of Īśāna: his eyes bright with the play of his brows as his creeper-like arms are raised; fanned with chowries by the lovely maidens of the gods." },
        kn: { translation: "ಬಳ್ಳಿಗಳಂತಹ ಭುಜಗಳನ್ನು ಮೇಲೆತ್ತಿದಾಗ ಕುಣಿಯುವ ಹುಬ್ಬುಗಳ ವಿಲಾಸದಿಂದ ಕಣ್ಣುಗಳು ಹೊಳೆಯುವ, ದೇವಕನ್ಯೆಯರಿಂದ ಚಾಮರಗಳ ಸೇವೆ ಪಡೆಯುವ ಗಣಾಧೀಶನನ್ನು, ಈಶಾನಪುತ್ರನನ್ನು ಸ್ತುತಿಸುತ್ತೇನೆ." },
        hi: { translation: "लता-सी भुजाएँ उठाते समय थिरकती भौंहों के विलास से जिनके नेत्र चमकते हैं, देवकन्याएँ जिन पर चँवर डुलाती हैं — उन गणाधीश, ईशान-पुत्र की मैं स्तुति करता हूँ।" },
      },
    },
    {
      id: "ganesha-bhujangam-6",
      locator: "6",
      sanskrit: ["स्फुरन्निष्ठुरालोलपिङ्गाक्षितारं", "कृपाकोमलोदारलीलावतारम् ।", "कलाबिन्दुगं गीयते योगिवर्यै-", "र्गणाधीशमीशानसूनुं तमीडे ॥"],
      iast: ["sphuranniṣṭhurālolapiṅgākṣitāraṃ", "kṛpākomalodāralīlāvatāram |", "kalābindugaṃ gīyate yogivaryair", "gaṇādhīśam īśānasūnuṃ tam īḍe ||"],
      readings: {
        en: { translation: "I praise him, lord of the gaṇas, son of Īśāna: the pupils of his tawny eyes flashing fierce and restless, yet gentle and generous with compassion in the forms he takes in play — he whom the best of yogis sing of as dwelling in the kalā and the bindu of his mantra." },
        kn: { translation: "ಉಗ್ರವಾಗಿ, ಚಂಚಲವಾಗಿ ಮಿನುಗುವ ಪಿಂಗಳ ಕಣ್ಣುಗುಡ್ಡೆಗಳುಳ್ಳ, ಆದರೂ ಕರುಣೆಯಿಂದ ಮೃದುವಾದ ಉದಾರ ಲೀಲಾವತಾರನಾದ, ಕಲೆ ಮತ್ತು ಬಿಂದುವಿನಲ್ಲಿ ನೆಲೆಸಿರುವನೆಂದು ಯೋಗಿಶ್ರೇಷ್ಠರು ಹಾಡುವ ಗಣಾಧೀಶನನ್ನು, ಈಶಾನಪುತ್ರನನ್ನು ಸ್ತುತಿಸುತ್ತೇನೆ." },
        hi: { translation: "जिनकी पिंगल आँखों की पुतलियाँ प्रचंड और चंचल चमकती हैं, फिर भी जिनका लीलावतार करुणा से कोमल और उदार है, जिन्हें श्रेष्ठ योगी कला और बिंदु में स्थित बताकर गाते हैं — उन गणाधीश, ईशान-पुत्र की मैं स्तुति करता हूँ।" },
      },
    },
    {
      id: "ganesha-bhujangam-7",
      locator: "7",
      sanskrit: ["यमेकाक्षरं निर्मलं निर्विकल्पं", "गुणातीतमानन्दमाकारशून्यम् ।", "परं पारमोङ्कारमाम्नायगर्भं", "वदन्ति प्रगल्भं पुराणं तमीडे ॥"],
      iast: ["yam ekākṣaraṃ nirmalaṃ nirvikalpaṃ", "guṇātītam ānandam ākāraśūnyam |", "paraṃ pāram oṅkāram āmnāyagarbhaṃ", "vadanti pragalbhaṃ purāṇaṃ tam īḍe ||"],
      readings: {
        en: { translation: "I praise him whom they call the one syllable — stainless, beyond all division, beyond the guṇas, bliss without form; the highest, the farther shore, Oṃkāra, the womb of the Vedas, the mighty, the ancient." },
        kn: { translation: "ಏಕಾಕ್ಷರ, ನಿರ್ಮಲ, ನಿರ್ವಿಕಲ್ಪ, ಗುಣಾತೀತ, ಆಕಾರವಿಲ್ಲದ ಆನಂದ, ಪರಮ, ಪಾರ, ಓಂಕಾರ, ವೇದಗಳ ಗರ್ಭ, ಸಮರ್ಥ, ಪುರಾತನ ಎಂದು ಯಾರನ್ನು ಹೇಳುತ್ತಾರೋ ಅವನನ್ನು ಸ್ತುತಿಸುತ್ತೇನೆ." },
        hi: { translation: "जिन्हें एकाक्षर, निर्मल, निर्विकल्प, गुणातीत, निराकार आनंद, परम, पार, ओंकार, वेदों का गर्भ, समर्थ और पुरातन कहा जाता है — उनकी मैं स्तुति करता हूँ।" },
      },
    },
    {
      id: "ganesha-bhujangam-8",
      locator: "8",
      sanskrit: ["चिदानन्दसान्द्राय शान्ताय तुभ्यं", "नमो विश्वकर्त्रे च हर्त्रे च तुभ्यम् ।", "नमोऽनन्तलीलाय कैवल्यभासे", "नमो विश्वबीज प्रसीदेशसूनो ॥"],
      iast: ["cidānandasāndrāya śāntāya tubhyaṃ", "namo viśvakartre ca hartre ca tubhyam |", "namo 'nantalīlāya kaivalyabhāse", "namo viśvabīja prasīdeśasūno ||"],
      readings: {
        en: { translation: "Salutations to you, dense with consciousness and bliss, the peaceful one; to you, maker and dissolver of the world. Salutations to the one of endless play, the light of liberation; salutations, seed of the universe — be gracious, son of Īśa." },
        kn: { translation: "ಚಿದಾನಂದಘನನಾದ, ಶಾಂತನಾದ ನಿನಗೆ ನಮಸ್ಕಾರ; ಜಗತ್ತಿನ ಸೃಷ್ಟಿಕರ್ತನೂ ಸಂಹಾರಕನೂ ಆದ ನಿನಗೆ ನಮಸ್ಕಾರ. ಅನಂತ ಲೀಲೆಯವನೇ, ಕೈವಲ್ಯದ ಬೆಳಕೇ, ನಮಸ್ಕಾರ; ವಿಶ್ವದ ಬೀಜವೇ, ನಮಸ್ಕಾರ — ಈಶಪುತ್ರನೇ, ಪ್ರಸನ್ನನಾಗು." },
        hi: { translation: "चिदानंद से घनीभूत, शांत — तुम्हें नमस्कार; विश्व के कर्ता और हर्ता — तुम्हें नमस्कार। अनंत लीला वाले, कैवल्य के प्रकाश — नमस्कार; विश्व के बीज — नमस्कार; हे ईश-पुत्र, प्रसन्न हो।" },
      },
    },
    {
      id: "ganesha-bhujangam-phala",
      locator: "phala",
      sanskrit: ["इमं सुस्तवं प्रातरुत्थाय भक्त्या", "पठेद्यस्तु मर्त्यो लभेत्सर्वकामान् ।", "गणेशप्रसादेन सिध्यन्ति वाचो", "गणेशे विभौ दुर्लभं किं प्रसन्ने ॥"],
      iast: ["imaṃ sustavaṃ prātar utthāya bhaktyā", "paṭhed yas tu martyo labhet sarvakāmān |", "gaṇeśaprasādena sidhyanti vāco", "gaṇeśe vibhau durlabhaṃ kiṃ prasanne ||"],
      readings: {
        en: { translation: "Whoever rises at dawn and recites this fine hymn with devotion gains all they desire. By Gaṇeśa's grace their words come true — when the all-pervading Gaṇeśa is pleased, what is hard to attain?" },
        kn: { translation: "ಮುಂಜಾನೆ ಎದ್ದು ಭಕ್ತಿಯಿಂದ ಈ ಸುಂದರ ಸ್ತೋತ್ರವನ್ನು ಪಠಿಸುವವನು ಎಲ್ಲ ಬಯಕೆಗಳನ್ನು ಪಡೆಯುತ್ತಾನೆ. ಗಣೇಶನ ಪ್ರಸಾದದಿಂದ ಅವನ ಮಾತುಗಳು ಸಿದ್ಧಿಸುತ್ತವೆ — ಸರ್ವವ್ಯಾಪಿ ಗಣೇಶನು ಪ್ರಸನ್ನನಾದರೆ ಯಾವುದು ದುರ್ಲಭ?" },
        hi: { translation: "जो प्रातः उठकर भक्ति से इस सुंदर स्तोत्र का पाठ करता है, वह सब कामनाएँ पाता है। गणेश की कृपा से उसकी वाणी सिद्ध होती है — सर्वव्यापी गणेश प्रसन्न हों तो क्या दुर्लभ है?" },
      },
    },
  ],
});
