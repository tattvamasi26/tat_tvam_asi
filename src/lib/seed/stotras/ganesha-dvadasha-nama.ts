import { registerStotra } from "../stotras";

// ─────────────────────────────────────────────────────────
//  Gaṇeśa Dvādaśa-nāma — the twelve names, spoken by Brahmā in
//  the Gaṇeśa Purāṇa (Upāsanā-khaṇḍa 92.36–38).
//
//  Checked against the Gaṇeśa Purāṇa text on Sanskrit Wikisource,
//  which is followed here, and against two other texts that quote the
//  verses — the Lakṣmīnārāyaṇa Saṃhitā and a Śaṅkarācārya pūjā-vidhi.
//  They agree except in the last name of the first verse: the Purāṇa
//  has विघ्ननाशो गणाधिपः, the Saṃhitā विघ्ननाशो विनायकः, the pūjā-vidhi
//  विघ्नराजो गणाधिपः. Recitations often use the second.
// ─────────────────────────────────────────────────────────

registerStotra({
  slug: "ganesha-dvadasha-nama",
  textId: "t-stuti-ganesha-dvadasha-nama",
  devata: "ganesha",
  group: "daily",
  order: 2,
  category: "smriti",
  metre: "anuṣṭubh",
  origin: { en: "Ganesha Purana", kn: "ಗಣೇಶ ಪುರಾಣ", hi: "गणेश पुराण" },
  composer: { en: "Brahma", kn: "ಬ್ರಹ್ಮ", hi: "ब्रह्मा" },
  // The twelve names as entered here; many videos titled "Sumukhascha"
  // sing the sixteen-name form instead.
  video: { id: "8ZPa4AgcXks", title: "Sumukhashcha Ekadantashcha, the twelve names", channel: "Reena Mishra" },
  verses: [
    {
      id: "ganesha-dvadasha-nama-1",
      locator: "1",
      sanskrit: ["सुमुखश्चैकदन्तश्च कपिलो गजकर्णकः ।", "लम्बोदरश्च विकटो विघ्ननाशो गणाधिपः ॥"],
      iast: ["sumukhaś caikadantaś ca kapilo gajakarṇakaḥ |", "lambodaraś ca vikaṭo vighnanāśo gaṇādhipaḥ ||"],
      readings: {
        en: { translation: "Sumukha, the fair-faced; Ekadanta, the one-tusked; Kapila, the tawny; Gajakarṇaka, the elephant-eared; Lambodara, the great-bellied; Vikaṭa, the formidable; Vighnanāśa, the destroyer of obstacles; Gaṇādhipa, lord of the gaṇas;" },
        kn: { translation: "ಸುಮುಖ (ಸುಂದರ ಮುಖದವನು), ಏಕದಂತ (ಒಂದೇ ದಂತದವನು), ಕಪಿಲ (ಕಂದು ಬಣ್ಣದವನು), ಗಜಕರ್ಣಕ (ಆನೆಯ ಕಿವಿಯವನು), ಲಂಬೋದರ (ದೊಡ್ಡ ಹೊಟ್ಟೆಯವನು), ವಿಕಟ (ಉಗ್ರರೂಪಿ), ವಿಘ್ನನಾಶ (ವಿಘ್ನಗಳನ್ನು ನಾಶಮಾಡುವವನು), ಗಣಾಧಿಪ (ಗಣಗಳ ಒಡೆಯ);" },
        hi: { translation: "सुमुख (सुंदर मुख वाले), एकदंत (एक दाँत वाले), कपिल (कपिल वर्ण वाले), गजकर्णक (हाथी जैसे कान वाले), लंबोदर (बड़े उदर वाले), विकट (विकराल रूप वाले), विघ्ननाश (विघ्नों का नाश करने वाले), गणाधिप (गणों के स्वामी);" },
      },
    },
    {
      id: "ganesha-dvadasha-nama-2",
      locator: "2",
      sanskrit: ["धूम्रकेतुर्गणाध्यक्षो भालचन्द्रो गजाननः ।", "द्वादशैतानि नामानि यः पठेच्छृणुयादपि ॥"],
      iast: ["dhūmraketur gaṇādhyakṣo bhālacandro gajānanaḥ |", "dvādaśaitāni nāmāni yaḥ paṭhec chṛṇuyād api ||"],
      readings: {
        en: { translation: "Dhūmraketu, of the smoke-coloured banner; Gaṇādhyakṣa, chief of the gaṇas; Bhālacandra, with the moon on his brow; Gajānana, the elephant-faced — whoever recites these twelve names, or even hears them," },
        kn: { translation: "ಧೂಮ್ರಕೇತು (ಹೊಗೆಯ ಬಣ್ಣದ ಧ್ವಜವುಳ್ಳವನು), ಗಣಾಧ್ಯಕ್ಷ (ಗಣಗಳ ಮುಖ್ಯಸ್ಥ), ಭಾಲಚಂದ್ರ (ಹಣೆಯಲ್ಲಿ ಚಂದ್ರನುಳ್ಳವನು), ಗಜಾನನ (ಆನೆಯ ಮುಖದವನು) — ಈ ಹನ್ನೆರಡು ನಾಮಗಳನ್ನು ಪಠಿಸುವವನು ಅಥವಾ ಕೇಳುವವನು ಕೂಡ," },
        hi: { translation: "धूम्रकेतु (धूम्र वर्ण की ध्वजा वाले), गणाध्यक्ष (गणों के अध्यक्ष), भालचंद्र (मस्तक पर चंद्र वाले), गजानन (हाथी के मुख वाले) — जो इन बारह नामों का पाठ करता है या इन्हें सुनता भी है," },
      },
    },
    {
      id: "ganesha-dvadasha-nama-3",
      locator: "3",
      sanskrit: ["विद्यारम्भे विवाहे च प्रवेशे निर्गमे तथा ।", "सङ्ग्रामे सङ्कटे चैव विघ्नस्तस्य न जायते ॥"],
      iast: ["vidyārambhe vivāhe ca praveśe nirgame tathā |", "saṅgrāme saṅkaṭe caiva vighnas tasya na jāyate ||"],
      readings: {
        en: { translation: "— at the start of learning, at a wedding, on entering a home or setting out on a journey, in battle and in any crisis — no obstacle arises for them." },
        kn: { translation: "— ವಿದ್ಯಾರಂಭದಲ್ಲಿ, ವಿವಾಹದಲ್ಲಿ, ಗೃಹಪ್ರವೇಶದಲ್ಲಿ ಅಥವಾ ಪ್ರಯಾಣ ಹೊರಡುವಾಗ, ಯುದ್ಧದಲ್ಲಿ ಮತ್ತು ಸಂಕಟದಲ್ಲಿ — ಅವನಿಗೆ ಯಾವ ವಿಘ್ನವೂ ಉಂಟಾಗುವುದಿಲ್ಲ." },
        hi: { translation: "— विद्या के आरंभ में, विवाह में, गृह-प्रवेश या यात्रा पर निकलते समय, युद्ध में और संकट में — उसे कोई विघ्न नहीं होता।" },
      },
    },
  ],
});
