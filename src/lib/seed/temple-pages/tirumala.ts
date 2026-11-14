import { registerTemplePage } from "../temple-pages";

// ─────────────────────────────────────────────────────────
//  Tirumala Sri Venkateswara.
//
//  Written from notes the owner supplied, checked against the temple's
//  and the god's Wikipedia articles, the Ananthazhwar article, and the
//  TTD's own pages. Three things in the notes were corrected:
//    · it is Padmavati, not her father Akasa Raja, who is held to be
//      Vedavati reborn;
//    · the Surya Katari is a sword worn at the waist, not a jewel of
//      the crown;
//    · accounts differ on which side of the chest Lakshmi rests (the
//      notes said right, Wikipedia's Venkateswara article says left),
//      so the side is not given.
//  The legend is the Venkatachala Mahatmya's, written down long after
//  the temple began, and is told as tradition. The booking rules
//  change; they are dated, and the portal is named as the authority.
// ─────────────────────────────────────────────────────────

registerTemplePage({
  slug: "tirumala-venkateswara",
  region: "andhra",
  order: 1,
  name: {
    en: "Tirumala Sri Venkateswara Swamy Temple",
    kn: "ತಿರುಮಲ ಶ್ರೀ ವೆಂಕಟೇಶ್ವರ ಸ್ವಾಮಿ ದೇವಸ್ಥಾನ",
    hi: "तिरुमला श्री वेंकटेश्वर स्वामी मंदिर",
  },
  nameLocal: "తిరుమల శ్రీ వేంకటేశ్వర స్వామి ఆలయం",
  nameLocalLang: "te",
  hero: {
    src: "/images/temples/tirumala/hero.jpg",
    width: 1920,
    height: 1540,
    credit: "Sri Venkateswara Temple, Tirumala — photo by Nikhilb239, CC BY-SA 4.0, via Wikimedia Commons",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Tirumala_Venkateswara_temple_entrance_09062015.JPG",
    alt: {
      en: "The white gopura at the entrance of the Tirumala temple, with the hills behind it.",
      kn: "ಹಿಂದೆ ಬೆಟ್ಟಗಳಿರುವ, ತಿರುಮಲ ದೇವಾಲಯದ ಪ್ರವೇಶದ ಬಿಳಿಯ ಗೋಪುರ.",
      hi: "पीछे पहाड़ियों के साथ तिरुमला मंदिर के प्रवेश का श्वेत गोपुर।",
    },
  },
  gallery: [
    {
      src: "/images/temples/tirumala/ananda-nilayam.jpg",
      width: 1280,
      height: 854,
      credit: "Ananda Nilayam, Tirumala — photo by Phanidharvaranasi, CC BY-SA 4.0, via Wikimedia Commons",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Tirumala_Anand_nilayam4653.jpg",
      alt: {
        en: "The gilded Ananda Nilayam vimana in front of the white gopura, at dusk.",
        kn: "ಸಂಜೆಯ ಬೆಳಕಿನಲ್ಲಿ ಬಿಳಿಯ ಗೋಪುರದ ಮುಂದೆ ಚಿನ್ನದ ಆನಂದ ನಿಲಯ ವಿಮಾನ.",
        hi: "संध्या के प्रकाश में श्वेत गोपुर के आगे स्वर्णमंडित आनंद निलय विमान।",
      },
      caption: {
        en: "The Ananda Nilayam, the gilded tower over the sanctum.",
        kn: "ಆನಂದ ನಿಲಯ — ಗರ್ಭಗುಡಿಯ ಮೇಲಿನ ಚಿನ್ನದ ವಿಮಾನ.",
        hi: "आनंद निलय — गर्भगृह के ऊपर का स्वर्णमंडित विमान।",
      },
    },
  ],
  sources: [
    { title: "Venkateswara Temple, Tirumala — Wikipedia", url: "https://en.wikipedia.org/wiki/Venkateswara_Temple,_Tirumala" },
    { title: "Venkateswara — Wikipedia", url: "https://en.wikipedia.org/wiki/Venkateswara" },
    { title: "Ananthazhwar — Wikipedia", url: "https://en.wikipedia.org/wiki/Ananthazhwar" },
    { title: "Tirumala Tirupati Devasthanams", url: "https://www.tirumala.org/" },
    { title: "TTD online booking", url: "https://ttdevasthanams.ap.gov.in/" },
    {
      title: "TTD to issue Arjitha seva tickets through lucky dip — The Hans India",
      url: "https://www.thehansindia.com/news/cities/tirupathi/ttd-to-issue-arjitha-seva-tickets-through-lucky-dip-from-april-1-734626",
    },
  ],
  content: {
    en: {
      tagline: "Where Vishnu is held to have come down to stand by the world through the Kali Yuga.",
      place: "Tirumala · Tirupati · Andhra Pradesh",
      facts: [
        ["Deity", "Venkateswara — also Srinivasa, Balaji, Govinda"],
        ["Hill", "Venkatadri, one of the seven hills of Seshachalam"],
        ["Worship follows", "The Vaikhanasa Agama"],
        ["Kept by", "Tirumala Tirupati Devasthanams (TTD)"],
        ["Prasada", "The Tirupati laddu"],
        ["Style", "Dravidian"],
      ],
      quote:
        "He borrowed for his wedding and promised to repay by the end of the age. The money in the hundi is given towards that debt.",
      sections: [
        {
          id: "story",
          eyebrow: "Why here",
          title: "Why Vishnu stands on the hill",
          blocks: [
            {
              kind: "para",
              text: "The story is told in the Venkatachala Mahatmya, the hill's own collection of legends, gathered under the Puranas and written down long after the temple began. Its tellings differ in detail. What follows is the version most pilgrims hear.",
            },
            {
              kind: "sub",
              title: "Bhrigu's test",
              paras: [
                "The sage Bhrigu set out to learn which of the three — Brahma, Vishnu or Shiva — was most fit to receive the offering of a great sacrifice. Brahma and Shiva paid him no attention. At Vaikuntha he found Vishnu lying on the serpent Shesha, took the silence as an insult, and kicked him on the chest.",
                "Vishnu did not take offence. He pressed the sage's foot and asked whether it was hurt. Bhrigu declared him the greatest of the three.",
              ],
            },
            {
              kind: "sub",
              title: "Lakshmi leaves Vaikuntha",
              paras: [
                "Lakshmi was not appeased. Vishnu's chest, the Srivatsa, is her dwelling, and her husband had let it be struck. She left Vaikuntha and went down to the earth, to Karavirapura, which is Kolhapur.",
              ],
            },
            {
              kind: "sub",
              title: "The anthill on Venkatadri",
              paras: [
                "Vishnu followed her to the earth and sat in an anthill on the Venkata hill, without food or water. Brahma and Shiva, the legend says, became a cow and its calf, and the cow gave its milk to him there. A cowherd of the local king, finding the cow's milk going into the anthill, struck at it, and the blow fell on Vishnu.",
                "Vishnu then lived on the hill as Srinivasa, raised by Vakula Devi, held to be Yashoda reborn.",
              ],
            },
            {
              kind: "sub",
              title: "Padmavati, and Kubera's loan",
              paras: [
                "Srinivasa met Padmavati, the daughter of the king Akasa Raja, and asked to marry her. Padmavati is held to be Vedavati reborn, a devotee Vishnu had promised to marry in an earlier age.",
                "To pay for the wedding he borrowed from Kubera, the god of wealth, and promised to repay the loan, with interest, by the end of the Kali Yuga.",
              ],
            },
            {
              kind: "sub",
              title: "Into stone",
              paras: [
                "When Lakshmi learned of the marriage she came to Srinivasa, and Padmavati was there too. Caught between the two, he became stone, to stay on the hill for those who would come to him. In most tellings both goddesses then took their place with him, on his chest.",
              ],
            },
            {
              kind: "para",
              text: "This is why the hundi is filled. Pilgrims give money and gold towards the Lord's debt to Kubera, and believe he returns the gift as protection and prosperity through the trials of the age.",
            },
          ],
        },
        {
          id: "image",
          eyebrow: "The image",
          title: "The Moolavirat",
          blocks: [
            {
              kind: "para",
              text: "The image in the sanctum, the Moolavirat, is of dark stone, about eight feet tall, standing on a lotus and facing east. It is held to be svayambhu — self-manifested, not carved — and the sanctum around it is called the Ananda Nilayam.",
            },
            {
              kind: "list",
              title: "The four hands",
              items: [
                { label: "Upper right", text: "The Sudarshana chakra, the discus." },
                { label: "Upper left", text: "The Panchajanya shankha, the conch." },
                { label: "Lower right", text: "Varada hasta, the hand that gives, pointing down to his feet: refuge is at the feet." },
                { label: "Lower left", text: "Katyavalambita, resting on the hip — read as saying the ocean of samsara is only hip-deep for those who take refuge in him." },
              ],
            },
            {
              kind: "list",
              title: "The marks",
              items: [
                { label: "The namam", text: "A broad white namam of camphor covers the eyes, and only the lower edge of them shows. Tradition says his direct gaze would be too strong to bear. On Thursdays the namam is made smaller." },
                { label: "Lakshmi on the chest", text: "Lakshmi rests on his chest as Vyuha Lakshmi, which is why he is Srinivasa, the one in whom Sri dwells. Accounts differ on which side." },
                { label: "The chin", text: "A dab of camphor is put on the chin each day. The story is that Ananthalwar, a disciple of Ramanuja, struck a boy who kept spoiling his garden, and found the Lord's chin bleeding. The crowbar is kept inside the temple's entrance." },
              ],
            },
            {
              kind: "list",
              title: "Ornaments",
              items: [
                { label: "Surya Katari", text: "A sword worn at the waist, said to have been given by the sun god." },
                { label: "Sahasranama haram", text: "A chain of 1,008 gold coins, each engraved with one of his names." },
                { label: "Pitambara", text: "Yellow silk, in which the image is always dressed." },
              ],
            },
          ],
        },
        {
          id: "sevas",
          eyebrow: "Worship",
          title: "The day and the week",
          blocks: [
            {
              kind: "para",
              text: "Worship follows the Vaikhanasa Agama. Ramanuja is held to have set the order of the rituals and brought in the recitation of the Divya Prabandham, the Tamil hymns of the Alvars.",
            },
            {
              kind: "rows",
              title: "Each day",
              rows: [
                { when: "Before dawn", name: "Suprabhatam", text: "The hymn that wakes the Lord, sung at the sanctum door." },
                { when: "Early morning", name: "Thomala Seva", text: "The image is dressed in garlands of flowers." },
                { when: "Morning", name: "Archana", text: "His thousand names are recited." },
                { when: "Night", name: "Ekanta Seva", text: "The last rite of the day, when the Lord is laid to rest." },
              ],
            },
            {
              kind: "rows",
              title: "Each week",
              rows: [
                { when: "Thursday", name: "Tiruppavada", text: "The ornaments are taken off and the namam made small, so the eyes can be seen — the Netra Darshanam. Rice is heaped before the Lord." },
                { when: "Friday", name: "Abhishekam", text: "The image is bathed in water from Akasa Ganga, then milk and fragrant things, while the Pancha Suktas are chanted." },
              ],
            },
          ],
        },
        {
          id: "booking",
          eyebrow: "Going",
          title: "Booking a seva",
          blocks: [
            {
              kind: "para",
              text: "The paid sevas, the Arjitha sevas, are booked only through TTD's online portal, and each month's tickets are released about three months ahead. What follows is how it stood in November 2026. TTD changes the dates from time to time, and its portal is the authority.",
            },
            {
              kind: "list",
              items: [
                { label: "Electronic lucky dip", text: "Suprabhatam, Thomala, Archana and Ashtadala Pada Padmaradhana cannot be booked directly. Pilgrims register on the portal between the 18th and the 20th of the month, and tickets go by an automated draw." },
                { label: "First come, first served", text: "Kalyanotsavam, Unjal Seva and Sahasra Deepalankara Seva are opened for direct booking around the 21st of the month." },
                { label: "Dress code", text: "Traditional dress is required at every Arjitha seva: dhoti and uttariya for men; sari, or salwar kameez with a dupatta, for women." },
              ],
            },
          ],
        },
        {
          id: "history",
          eyebrow: "Who kept it",
          title: "Kings, a reformer and a trust",
          blocks: [
            {
              kind: "para",
              text: "The temple grew over many centuries, in the Dravidian style. Its first recorded endowment was made by the Pallava queen Samavai in 966 CE. The Cholas gave after the Pallavas, and the temple took most of its present size and wealth under Vijayanagara. Krishnadevaraya's gifts paid for the gilding of the Ananda Nilayam, and his statue has stood in the temple since 1517.",
            },
            {
              kind: "para",
              text: "Today the temple is kept by Tirumala Tirupati Devasthanams, an independent trust under the Government of Andhra Pradesh. The Tirupati laddu carries a Geographical Indication, so only TTD may make it. Many pilgrims give their hair at Tirumala, often in fulfilment of a vow.",
            },
          ],
        },
      ],
    },
    kn: {
      tagline: "ಕಲಿಯುಗದಲ್ಲಿ ಲೋಕಕ್ಕೆ ಆಸರೆಯಾಗಲು ವಿಷ್ಣು ಇಳಿದು ಬಂದ ಸ್ಥಳವೆಂದು ನಂಬಿಕೆ.",
      place: "ತಿರುಮಲ · ತಿರುಪತಿ · ಆಂಧ್ರ ಪ್ರದೇಶ",
      facts: [
        ["ದೇವರು", "ವೆಂಕಟೇಶ್ವರ — ಶ್ರೀನಿವಾಸ, ಬಾಲಾಜಿ, ಗೋವಿಂದ"],
        ["ಬೆಟ್ಟ", "ವೆಂಕಟಾದ್ರಿ — ಶೇಷಾಚಲದ ಏಳು ಬೆಟ್ಟಗಳಲ್ಲಿ ಒಂದು"],
        ["ಪೂಜಾ ವಿಧಾನ", "ವೈಖಾನಸ ಆಗಮ"],
        ["ಆಡಳಿತ", "ತಿರುಮಲ ತಿರುಪತಿ ದೇವಸ್ಥಾನಂ (ಟಿಟಿಡಿ)"],
        ["ಪ್ರಸಾದ", "ತಿರುಪತಿ ಲಡ್ಡು"],
        ["ಶೈಲಿ", "ದ್ರಾವಿಡ"],
      ],
      quote:
        "ಮದುವೆಗಾಗಿ ಅವನು ಸಾಲ ಮಾಡಿದ, ಯುಗಾಂತ್ಯದೊಳಗೆ ತೀರಿಸುವೆನೆಂದು ಮಾತು ಕೊಟ್ಟ. ಹುಂಡಿಗೆ ಬೀಳುವ ಹಣ ಆ ಸಾಲಕ್ಕೆ.",
      sections: [
        {
          id: "story",
          eyebrow: "ಏಕೆ ಇಲ್ಲಿ",
          title: "ವಿಷ್ಣು ಬೆಟ್ಟದ ಮೇಲೆ ನಿಂತದ್ದೇಕೆ",
          blocks: [
            {
              kind: "para",
              text: "ಈ ಕಥೆ ವೆಂಕಟಾಚಲ ಮಾಹಾತ್ಮ್ಯದಲ್ಲಿದೆ — ಪುರಾಣಗಳ ಹೆಸರಿನಲ್ಲಿ ಸಂಗ್ರಹಗೊಂಡ ಈ ಬೆಟ್ಟದ್ದೇ ಆದ ಕಥಾಸಂಕಲನ; ದೇವಾಲಯ ಆರಂಭವಾದ ಎಷ್ಟೋ ಕಾಲದ ನಂತರ ಬರಹಕ್ಕಿಳಿದದ್ದು. ಅದರ ನಿರೂಪಣೆಗಳು ವಿವರಗಳಲ್ಲಿ ಬೇರೆ ಬೇರೆ. ಇಲ್ಲಿರುವುದು ಹೆಚ್ಚಿನ ಯಾತ್ರಿಕರು ಕೇಳುವ ರೂಪ.",
            },
            {
              kind: "sub",
              title: "ಭೃಗುವಿನ ಪರೀಕ್ಷೆ",
              paras: [
                "ಬ್ರಹ್ಮ, ವಿಷ್ಣು, ಶಿವ — ಈ ಮೂವರಲ್ಲಿ ಮಹಾಯಜ್ಞದ ಹವಿಸ್ಸಿಗೆ ಯಾರು ಅತ್ಯಂತ ಯೋಗ್ಯರು ಎಂದು ತಿಳಿಯಲು ಭೃಗು ಮಹರ್ಷಿ ಹೊರಟರು. ಬ್ರಹ್ಮ ಮತ್ತು ಶಿವ ಅವರನ್ನು ಗಮನಿಸಲೇ ಇಲ್ಲ. ವೈಕುಂಠದಲ್ಲಿ ಶೇಷನ ಮೇಲೆ ಮಲಗಿದ್ದ ವಿಷ್ಣುವನ್ನು ಕಂಡು, ಆ ಮೌನವನ್ನು ಅವಮಾನವೆಂದು ತಿಳಿದು, ಅವನ ಎದೆಗೆ ಒದ್ದರು.",
                "ವಿಷ್ಣು ಕೋಪಿಸಲಿಲ್ಲ. ಮಹರ್ಷಿಯ ಪಾದವನ್ನು ಒತ್ತುತ್ತಾ, ನೋವಾಯಿತೇ ಎಂದು ಕೇಳಿದನು. ಮೂವರಲ್ಲಿ ಅವನೇ ಶ್ರೇಷ್ಠನೆಂದು ಭೃಗು ಘೋಷಿಸಿದರು.",
              ],
            },
            {
              kind: "sub",
              title: "ಲಕ್ಷ್ಮಿ ವೈಕುಂಠ ಬಿಟ್ಟಳು",
              paras: [
                "ಲಕ್ಷ್ಮಿಗೆ ಸಮಾಧಾನವಾಗಲಿಲ್ಲ. ವಿಷ್ಣುವಿನ ಎದೆ — ಶ್ರೀವತ್ಸ — ಅವಳ ನೆಲೆ; ಅದಕ್ಕೆ ಒದೆ ಬೀಳಲು ಪತಿ ಬಿಟ್ಟಿದ್ದ. ಅವಳು ವೈಕುಂಠ ಬಿಟ್ಟು ಭೂಮಿಗೆ, ಕರವೀರಪುರಕ್ಕೆ — ಇಂದಿನ ಕೊಲ್ಹಾಪುರಕ್ಕೆ — ಬಂದಳು.",
              ],
            },
            {
              kind: "sub",
              title: "ವೆಂಕಟಾದ್ರಿಯ ಹುತ್ತ",
              paras: [
                "ವಿಷ್ಣು ಅವಳನ್ನು ಹುಡುಕುತ್ತಾ ಭೂಮಿಗೆ ಬಂದು, ವೆಂಕಟ ಬೆಟ್ಟದ ಹುತ್ತವೊಂದರಲ್ಲಿ ಅನ್ನ ನೀರಿಲ್ಲದೆ ಕುಳಿತನು. ಬ್ರಹ್ಮ ಮತ್ತು ಶಿವ ಹಸು ಮತ್ತು ಕರುವಾಗಿ ಬಂದರು, ಹಸು ಅಲ್ಲೇ ಅವನಿಗೆ ಹಾಲು ಕೊಟ್ಟಿತು ಎನ್ನುತ್ತದೆ ಕಥೆ. ಹಸುವಿನ ಹಾಲು ಹುತ್ತಕ್ಕೆ ಹೋಗುವುದನ್ನು ಕಂಡ ಆ ನಾಡಿನ ಅರಸನ ಗೋಪಾಲಕ ಹುತ್ತಕ್ಕೆ ಹೊಡೆದನು; ಆ ಏಟು ವಿಷ್ಣುವಿಗೆ ಬಿತ್ತು.",
                "ಆಮೇಲೆ ವಿಷ್ಣು ಶ್ರೀನಿವಾಸನಾಗಿ ಬೆಟ್ಟದಲ್ಲಿ ನೆಲೆಸಿದನು; ಯಶೋದೆಯ ಮರುಜನ್ಮವೆಂದು ನಂಬಲಾಗುವ ವಕುಳಾದೇವಿ ಅವನನ್ನು ಸಾಕಿದಳು.",
              ],
            },
            {
              kind: "sub",
              title: "ಪದ್ಮಾವತಿ ಮತ್ತು ಕುಬೇರನ ಸಾಲ",
              paras: [
                "ಶ್ರೀನಿವಾಸ ಆಕಾಶರಾಜನ ಮಗಳಾದ ಪದ್ಮಾವತಿಯನ್ನು ಕಂಡು, ಅವಳ ಕೈ ಹಿಡಿಯಲು ಕೇಳಿದನು. ಹಿಂದಿನ ಯುಗದಲ್ಲಿ ವಿಷ್ಣು ಮದುವೆಯಾಗುವೆನೆಂದು ಮಾತು ಕೊಟ್ಟಿದ್ದ ಭಕ್ತೆ ವೇದವತಿಯ ಮರುಜನ್ಮವೇ ಪದ್ಮಾವತಿ ಎಂದು ನಂಬಿಕೆ.",
                "ಮದುವೆಯ ಖರ್ಚಿಗಾಗಿ ಅವನು ಧನಾಧಿಪತಿ ಕುಬೇರನಿಂದ ಸಾಲ ಪಡೆದು, ಕಲಿಯುಗದ ಕೊನೆಯೊಳಗೆ ಬಡ್ಡಿ ಸಹಿತ ತೀರಿಸುವೆನೆಂದು ಮಾತು ಕೊಟ್ಟನು.",
              ],
            },
            {
              kind: "sub",
              title: "ಶಿಲೆಯಾದನು",
              paras: [
                "ಮದುವೆಯ ಸುದ್ದಿ ತಿಳಿದ ಲಕ್ಷ್ಮಿ ಶ್ರೀನಿವಾಸನ ಬಳಿ ಬಂದಳು; ಪದ್ಮಾವತಿಯೂ ಅಲ್ಲಿದ್ದಳು. ಇಬ್ಬರ ನಡುವೆ ಸಿಲುಕಿದ ಅವನು, ತನ್ನನ್ನು ಅರಸಿ ಬರುವವರಿಗಾಗಿ ಬೆಟ್ಟದಲ್ಲೇ ಉಳಿಯಲು ಶಿಲೆಯಾದನು. ಬಹುತೇಕ ನಿರೂಪಣೆಗಳಲ್ಲಿ ಇಬ್ಬರು ದೇವಿಯರೂ ಅವನ ಎದೆಯಲ್ಲಿ ನೆಲೆಸಿದರು.",
              ],
            },
            {
              kind: "para",
              text: "ಹುಂಡಿ ತುಂಬುವುದು ಇದಕ್ಕಾಗಿಯೇ. ಕುಬೇರನಿಗಿರುವ ದೇವರ ಸಾಲಕ್ಕೆಂದು ಯಾತ್ರಿಕರು ಹಣ, ಚಿನ್ನ ಅರ್ಪಿಸುತ್ತಾರೆ; ಅವನು ಅದಕ್ಕೆ ಪ್ರತಿಯಾಗಿ ಈ ಯುಗದ ಕಷ್ಟಗಳಲ್ಲಿ ರಕ್ಷಣೆ, ಸಮೃದ್ಧಿ ನೀಡುತ್ತಾನೆಂದು ನಂಬುತ್ತಾರೆ.",
            },
          ],
        },
        {
          id: "image",
          eyebrow: "ಮೂರ್ತಿ",
          title: "ಮೂಲವಿರಾಟ್",
          blocks: [
            {
              kind: "para",
              text: "ಗರ್ಭಗುಡಿಯ ಮೂರ್ತಿ — ಮೂಲವಿರಾಟ್ — ಕಪ್ಪು ಶಿಲೆಯದು, ಸುಮಾರು ಎಂಟು ಅಡಿ ಎತ್ತರ, ಕಮಲದ ಮೇಲೆ ಪೂರ್ವಾಭಿಮುಖವಾಗಿ ನಿಂತಿದೆ. ಇದು ಸ್ವಯಂಭು — ಕೆತ್ತಿದ್ದಲ್ಲ, ತಾನಾಗಿ ಪ್ರಕಟವಾದದ್ದು — ಎಂದು ನಂಬಿಕೆ; ಅದರ ಸುತ್ತಲಿನ ಗರ್ಭಗೃಹಕ್ಕೆ ಆನಂದ ನಿಲಯ ಎಂದು ಹೆಸರು.",
            },
            {
              kind: "list",
              title: "ನಾಲ್ಕು ಕೈಗಳು",
              items: [
                { label: "ಮೇಲಿನ ಬಲಗೈ", text: "ಸುದರ್ಶನ ಚಕ್ರ." },
                { label: "ಮೇಲಿನ ಎಡಗೈ", text: "ಪಾಂಚಜನ್ಯ ಶಂಖ." },
                { label: "ಕೆಳಗಿನ ಬಲಗೈ", text: "ವರದ ಹಸ್ತ — ಪಾದಗಳತ್ತ ತೋರಿಸುವ ಕೈ: ಆಶ್ರಯ ಪಾದಗಳಲ್ಲಿ." },
                { label: "ಕೆಳಗಿನ ಎಡಗೈ", text: "ಕಟ್ಯವಲಂಬಿತ — ಸೊಂಟದ ಮೇಲಿಟ್ಟ ಕೈ; ಶರಣಾದವರಿಗೆ ಸಂಸಾರಸಾಗರ ಸೊಂಟದಷ್ಟೇ ಆಳ ಎಂಬ ಅರ್ಥದಲ್ಲಿ ಓದಲಾಗುತ್ತದೆ." },
              ],
            },
            {
              kind: "list",
              title: "ಗುರುತುಗಳು",
              items: [
                { label: "ನಾಮ", text: "ಕರ್ಪೂರದ ಅಗಲವಾದ ಬಿಳಿಯ ನಾಮ ಕಣ್ಣುಗಳನ್ನು ಮುಚ್ಚುತ್ತದೆ; ಕಣ್ಣಿನ ಕೆಳ ಅಂಚು ಮಾತ್ರ ಕಾಣುತ್ತದೆ. ಅವನ ನೇರ ದೃಷ್ಟಿ ಸಹಿಸಲಾಗದಷ್ಟು ತೀಕ್ಷ್ಣ ಎಂದು ಪರಂಪರೆ ಹೇಳುತ್ತದೆ. ಗುರುವಾರ ನಾಮವನ್ನು ಚಿಕ್ಕದಾಗಿಸಲಾಗುತ್ತದೆ." },
                { label: "ಎದೆಯಲ್ಲಿ ಲಕ್ಷ್ಮಿ", text: "ಅವನ ಎದೆಯಲ್ಲಿ ಲಕ್ಷ್ಮಿ ವ್ಯೂಹಲಕ್ಷ್ಮಿಯಾಗಿ ನೆಲೆಸಿದ್ದಾಳೆ — ಅದಕ್ಕೇ ಅವನು ಶ್ರೀನಿವಾಸ, ಶ್ರೀ ನೆಲೆಸಿದವನು. ಯಾವ ಬದಿಯಲ್ಲಿ ಎಂಬುದರಲ್ಲಿ ಹೇಳಿಕೆಗಳು ಬೇರೆ ಬೇರೆ." },
                { label: "ಗಲ್ಲ", text: "ಪ್ರತಿದಿನ ಗಲ್ಲಕ್ಕೆ ಪಚ್ಚ ಕರ್ಪೂರ ಹಚ್ಚಲಾಗುತ್ತದೆ. ರಾಮಾನುಜರ ಶಿಷ್ಯ ಅನಂತಾಳ್ವಾರ್ ತಮ್ಮ ತೋಟ ಹಾಳುಮಾಡುತ್ತಿದ್ದ ಹುಡುಗನಿಗೆ ಹಾರೆಯಿಂದ ಹೊಡೆದರು, ಮತ್ತು ದೇವರ ಗಲ್ಲದಿಂದ ರಕ್ತ ಸುರಿಯುತ್ತಿರುವುದನ್ನು ಕಂಡರು ಎಂಬುದು ಕಥೆ. ಆ ಹಾರೆಯನ್ನು ದೇವಾಲಯದ ಪ್ರವೇಶದ ಒಳಗೆ ಇಡಲಾಗಿದೆ." },
              ],
            },
            {
              kind: "list",
              title: "ಆಭರಣಗಳು",
              items: [
                { label: "ಸೂರ್ಯ ಕಠಾರಿ", text: "ಸೊಂಟದಲ್ಲಿ ಧರಿಸುವ ಖಡ್ಗ; ಸೂರ್ಯದೇವ ಕೊಟ್ಟದ್ದೆಂದು ಹೇಳಲಾಗುತ್ತದೆ." },
                { label: "ಸಹಸ್ರನಾಮ ಹಾರ", text: "1,008 ಚಿನ್ನದ ನಾಣ್ಯಗಳ ಸರ; ಪ್ರತಿಯೊಂದರಲ್ಲೂ ಅವನ ಒಂದು ನಾಮ ಕೆತ್ತಿದೆ." },
                { label: "ಪೀತಾಂಬರ", text: "ಮೂರ್ತಿಗೆ ಸದಾ ಉಡಿಸುವ ಹಳದಿ ರೇಷ್ಮೆ." },
              ],
            },
          ],
        },
        {
          id: "sevas",
          eyebrow: "ಪೂಜೆ",
          title: "ದಿನ ಮತ್ತು ವಾರ",
          blocks: [
            {
              kind: "para",
              text: "ಪೂಜೆ ವೈಖಾನಸ ಆಗಮದಂತೆ ನಡೆಯುತ್ತದೆ. ಆಚರಣೆಗಳ ಕ್ರಮವನ್ನು ರಾಮಾನುಜರು ನಿಗದಿಪಡಿಸಿದರು, ಆಳ್ವಾರರ ತಮಿಳು ಸ್ತೋತ್ರಗಳಾದ ದಿವ್ಯಪ್ರಬಂಧದ ಪಠಣವನ್ನು ತಂದರು ಎಂದು ನಂಬಿಕೆ.",
            },
            {
              kind: "rows",
              title: "ಪ್ರತಿದಿನ",
              rows: [
                { when: "ಬೆಳಗಾಗುವ ಮುನ್ನ", name: "ಸುಪ್ರಭಾತ", text: "ಗರ್ಭಗುಡಿಯ ಬಾಗಿಲಲ್ಲಿ ಹಾಡುವ, ದೇವರನ್ನು ಎಬ್ಬಿಸುವ ಸ್ತೋತ್ರ." },
                { when: "ಮುಂಜಾನೆ", name: "ತೋಮಾಲ ಸೇವೆ", text: "ಮೂರ್ತಿಗೆ ಹೂಮಾಲೆಗಳ ಅಲಂಕಾರ." },
                { when: "ಬೆಳಿಗ್ಗೆ", name: "ಅರ್ಚನೆ", text: "ಅವನ ಸಹಸ್ರ ನಾಮಗಳ ಪಠಣ." },
                { when: "ರಾತ್ರಿ", name: "ಏಕಾಂತ ಸೇವೆ", text: "ದಿನದ ಕೊನೆಯ ಸೇವೆ; ದೇವರನ್ನು ಮಲಗಿಸುವುದು." },
              ],
            },
            {
              kind: "rows",
              title: "ಪ್ರತಿ ವಾರ",
              rows: [
                { when: "ಗುರುವಾರ", name: "ತಿರುಪ್ಪಾವಡ", text: "ಆಭರಣಗಳನ್ನು ತೆಗೆದು ನಾಮವನ್ನು ಚಿಕ್ಕದಾಗಿಸುವುದರಿಂದ ಕಣ್ಣುಗಳು ಕಾಣುತ್ತವೆ — ನೇತ್ರ ದರ್ಶನ. ದೇವರ ಮುಂದೆ ಅನ್ನದ ರಾಶಿ ಇಡಲಾಗುತ್ತದೆ." },
                { when: "ಶುಕ್ರವಾರ", name: "ಅಭಿಷೇಕ", text: "ಪಂಚಸೂಕ್ತಗಳ ಪಠಣದೊಡನೆ, ಆಕಾಶಗಂಗೆಯ ನೀರು, ನಂತರ ಹಾಲು ಮತ್ತು ಸುಗಂಧ ದ್ರವ್ಯಗಳಿಂದ ಮೂರ್ತಿಗೆ ಅಭಿಷೇಕ." },
              ],
            },
          ],
        },
        {
          id: "booking",
          eyebrow: "ಯಾತ್ರೆ",
          title: "ಸೇವೆಯ ಬುಕಿಂಗ್",
          blocks: [
            {
              kind: "para",
              text: "ಹಣ ಕೊಟ್ಟು ಮಾಡಿಸುವ ಆರ್ಜಿತ ಸೇವೆಗಳನ್ನು ಟಿಟಿಡಿಯ ಆನ್‌ಲೈನ್ ಪೋರ್ಟಲ್ ಮೂಲಕ ಮಾತ್ರ ಬುಕ್ ಮಾಡಬಹುದು; ಪ್ರತಿ ತಿಂಗಳ ಟಿಕೆಟ್‌ಗಳು ಸುಮಾರು ಮೂರು ತಿಂಗಳು ಮುಂಚಿತವಾಗಿ ಬಿಡುಗಡೆಯಾಗುತ್ತವೆ. ಕೆಳಗಿನದು 2026ರ ನವೆಂಬರ್‌ನಲ್ಲಿದ್ದ ಕ್ರಮ. ಟಿಟಿಡಿ ಆಗಾಗ ದಿನಾಂಕಗಳನ್ನು ಬದಲಿಸುತ್ತದೆ; ಅದರ ಪೋರ್ಟಲ್‌ನಲ್ಲಿರುವುದೇ ಅಂತಿಮ.",
            },
            {
              kind: "list",
              items: [
                { label: "ಎಲೆಕ್ಟ್ರಾನಿಕ್ ಲಕ್ಕಿ ಡಿಪ್", text: "ಸುಪ್ರಭಾತ, ತೋಮಾಲ, ಅರ್ಚನೆ ಮತ್ತು ಅಷ್ಟದಳ ಪಾದಪದ್ಮಾರಾಧನೆಯನ್ನು ನೇರವಾಗಿ ಬುಕ್ ಮಾಡಲಾಗದು. ಯಾತ್ರಿಕರು ತಿಂಗಳ 18ರಿಂದ 20ರೊಳಗೆ ಪೋರ್ಟಲ್‌ನಲ್ಲಿ ನೋಂದಾಯಿಸುತ್ತಾರೆ; ಟಿಕೆಟ್‌ಗಳು ಸ್ವಯಂಚಾಲಿತ ಡ್ರಾ ಮೂಲಕ ಹಂಚಿಕೆಯಾಗುತ್ತವೆ." },
                { label: "ಮೊದಲು ಬಂದವರಿಗೆ ಮೊದಲು", text: "ಕಲ್ಯಾಣೋತ್ಸವ, ಊಂಜಲ್ ಸೇವೆ ಮತ್ತು ಸಹಸ್ರ ದೀಪಾಲಂಕಾರ ಸೇವೆ ತಿಂಗಳ ಸುಮಾರು 21ರಂದು ನೇರ ಬುಕಿಂಗ್‌ಗೆ ತೆರೆಯುತ್ತವೆ." },
                { label: "ಉಡುಪು", text: "ಪ್ರತಿ ಆರ್ಜಿತ ಸೇವೆಗೂ ಸಾಂಪ್ರದಾಯಿಕ ಉಡುಪು ಕಡ್ಡಾಯ: ಪುರುಷರಿಗೆ ಧೋತಿ ಮತ್ತು ಉತ್ತರೀಯ; ಮಹಿಳೆಯರಿಗೆ ಸೀರೆ, ಅಥವಾ ದುಪಟ್ಟಾ ಸಹಿತ ಸಲ್ವಾರ್ ಕಮೀಜ್." },
              ],
            },
          ],
        },
        {
          id: "history",
          eyebrow: "ಪರಂಪರೆ",
          title: "ಅರಸರು, ಆಚಾರ್ಯರು, ಒಂದು ಟ್ರಸ್ಟ್",
          blocks: [
            {
              kind: "para",
              text: "ದ್ರಾವಿಡ ಶೈಲಿಯ ಈ ದೇವಾಲಯ ಅನೇಕ ಶತಮಾನಗಳಲ್ಲಿ ಬೆಳೆಯಿತು. ಇದರ ಮೊದಲ ದಾಖಲಿತ ದತ್ತಿಯನ್ನು ಕ್ರಿ.ಶ. 966ರಲ್ಲಿ ಪಲ್ಲವ ರಾಣಿ ಸಾಮವೈ ನೀಡಿದಳು. ಪಲ್ಲವರ ನಂತರ ಚೋಳರು ದತ್ತಿ ನೀಡಿದರು; ಇಂದಿನ ಗಾತ್ರ ಮತ್ತು ಸಂಪತ್ತಿನ ಬಹುಭಾಗ ವಿಜಯನಗರದ ಕಾಲದ್ದು. ಕೃಷ್ಣದೇವರಾಯನ ದಾನದಿಂದ ಆನಂದ ನಿಲಯಕ್ಕೆ ಚಿನ್ನದ ಹೊದಿಕೆಯಾಯಿತು; 1517ರಿಂದ ಅವನ ಪ್ರತಿಮೆ ದೇವಾಲಯದಲ್ಲಿದೆ.",
            },
            {
              kind: "para",
              text: "ಇಂದು ದೇವಾಲಯವನ್ನು ಆಂಧ್ರ ಪ್ರದೇಶ ಸರ್ಕಾರದಡಿಯ ಸ್ವತಂತ್ರ ಟ್ರಸ್ಟ್ ಆದ ತಿರುಮಲ ತಿರುಪತಿ ದೇವಸ್ಥಾನಂ ನಡೆಸುತ್ತದೆ. ತಿರುಪತಿ ಲಡ್ಡುವಿಗೆ ಭೌಗೋಳಿಕ ಸೂಚಕ (ಜಿಐ) ಮಾನ್ಯತೆ ಇದೆ; ಹಾಗಾಗಿ ಟಿಟಿಡಿ ಮಾತ್ರ ಅದನ್ನು ತಯಾರಿಸಬಹುದು. ಹಲವು ಯಾತ್ರಿಕರು ಹರಕೆ ತೀರಿಸಲು ತಿರುಮಲದಲ್ಲಿ ಮುಡಿ ಕೊಡುತ್ತಾರೆ.",
            },
          ],
        },
      ],
    },
    hi: {
      tagline: "जहाँ माना जाता है कि विष्णु कलियुग भर संसार का साथ देने उतरे।",
      place: "तिरुमला · तिरुपति · आंध्र प्रदेश",
      facts: [
        ["देवता", "वेंकटेश्वर — श्रीनिवास, बालाजी, गोविंद"],
        ["पर्वत", "वेंकटाद्रि — शेषाचलम की सात पहाड़ियों में एक"],
        ["पूजा-विधान", "वैखानस आगम"],
        ["प्रबंधन", "तिरुमला तिरुपति देवस्थानम (टीटीडी)"],
        ["प्रसाद", "तिरुपति लड्डू"],
        ["शैली", "द्रविड़"],
      ],
      quote:
        "विवाह के लिए उन्होंने ऋण लिया और युग के अंत तक चुकाने का वचन दिया। हुंडी में पड़ने वाला धन उसी ऋण के लिए है।",
      sections: [
        {
          id: "story",
          eyebrow: "यहीं क्यों",
          title: "विष्णु पर्वत पर क्यों खड़े हैं",
          blocks: [
            {
              kind: "para",
              text: "यह कथा वेंकटाचल माहात्म्य में है — पुराणों के नाम से संकलित इस पर्वत की अपनी कथाओं का संग्रह, जो मंदिर के आरंभ के बहुत बाद लिखा गया। इसके रूप विवरण में अलग-अलग हैं। यहाँ वह रूप है जो अधिकतर तीर्थयात्री सुनते हैं।",
            },
            {
              kind: "sub",
              title: "भृगु की परीक्षा",
              paras: [
                "महर्षि भृगु यह जानने निकले कि ब्रह्मा, विष्णु और शिव में महायज्ञ की आहुति का सबसे योग्य कौन है। ब्रह्मा और शिव ने उन पर ध्यान ही नहीं दिया। वैकुंठ में शेषनाग पर लेटे विष्णु को देखकर, उस मौन को अपमान समझकर, उन्होंने विष्णु की छाती पर पैर से प्रहार किया।",
                "विष्णु क्रोधित नहीं हुए। वे महर्षि का पैर दबाते हुए पूछने लगे कि कहीं चोट तो नहीं लगी। भृगु ने उन्हें तीनों में श्रेष्ठ घोषित किया।",
              ],
            },
            {
              kind: "sub",
              title: "लक्ष्मी ने वैकुंठ छोड़ा",
              paras: [
                "लक्ष्मी शांत नहीं हुईं। विष्णु की छाती — श्रीवत्स — उनका निवास है, और पति ने उस पर प्रहार होने दिया था। वे वैकुंठ छोड़कर पृथ्वी पर करवीरपुर, आज के कोल्हापुर, चली आईं।",
              ],
            },
            {
              kind: "sub",
              title: "वेंकटाद्रि की बाँबी",
              paras: [
                "विष्णु उन्हें खोजते हुए पृथ्वी पर आए और वेंकट पर्वत की एक बाँबी में बिना अन्न-जल के बैठ गए। कथा कहती है कि ब्रह्मा और शिव गाय और बछड़ा बनकर आए, और गाय वहीं उन्हें दूध देने लगी। गाय का दूध बाँबी में जाते देख वहाँ के राजा के ग्वाले ने बाँबी पर प्रहार किया, और वह चोट विष्णु को लगी।",
                "फिर विष्णु श्रीनिवास के रूप में पर्वत पर रहे; उन्हें वकुला देवी ने पाला, जिन्हें यशोदा का पुनर्जन्म माना जाता है।",
              ],
            },
            {
              kind: "sub",
              title: "पद्मावती, और कुबेर का ऋण",
              paras: [
                "श्रीनिवास ने राजा आकाशराज की पुत्री पद्मावती को देखा और उनसे विवाह का प्रस्ताव रखा। पद्मावती को वेदवती का पुनर्जन्म माना जाता है — वह भक्त जिससे विष्णु ने पिछले युग में विवाह का वचन दिया था।",
                "विवाह के खर्च के लिए उन्होंने धन के देवता कुबेर से ऋण लिया, और कलियुग के अंत तक ब्याज सहित चुकाने का वचन दिया।",
              ],
            },
            {
              kind: "sub",
              title: "शिला बन गए",
              paras: [
                "विवाह का समाचार पाकर लक्ष्मी श्रीनिवास के पास आईं; पद्मावती भी वहीं थीं। दोनों के बीच फँसे वे, अपने पास आने वालों के लिए पर्वत पर ही रहने को, शिला बन गए। अधिकतर रूपों में दोनों देवियाँ भी उनकी छाती पर विराजमान हुईं।",
              ],
            },
            {
              kind: "para",
              text: "हुंडी इसीलिए भरी जाती है। तीर्थयात्री कुबेर के प्रति भगवान के ऋण के लिए धन और सोना चढ़ाते हैं, और मानते हैं कि बदले में वे इस युग के संकटों में रक्षा और समृद्धि देते हैं।",
            },
          ],
        },
        {
          id: "image",
          eyebrow: "मूर्ति",
          title: "मूलविराट",
          blocks: [
            {
              kind: "para",
              text: "गर्भगृह की मूर्ति — मूलविराट — काले पत्थर की है, लगभग आठ फुट ऊँची, कमल पर पूर्वाभिमुख खड़ी। इसे स्वयंभू — तराशी हुई नहीं, स्वयं प्रकट — माना जाता है, और इसके चारों ओर के गर्भगृह को आनंद निलय कहते हैं।",
            },
            {
              kind: "list",
              title: "चार हाथ",
              items: [
                { label: "ऊपरी दायाँ", text: "सुदर्शन चक्र।" },
                { label: "ऊपरी बायाँ", text: "पांचजन्य शंख।" },
                { label: "निचला दायाँ", text: "वरद हस्त — चरणों की ओर संकेत करता हाथ: शरण चरणों में है।" },
                { label: "निचला बायाँ", text: "कट्यवलंबित — कमर पर टिका हाथ; इसका अर्थ यह लिया जाता है कि शरणागत के लिए संसार-सागर केवल कमर भर गहरा है।" },
              ],
            },
            {
              kind: "list",
              title: "चिह्न",
              items: [
                { label: "नामम", text: "कपूर का चौड़ा श्वेत नामम आँखों को ढकता है; आँखों का केवल निचला किनारा दिखता है। परंपरा कहती है कि उनकी सीधी दृष्टि सहन न हो सकेगी। गुरुवार को नामम छोटा किया जाता है।" },
                { label: "छाती पर लक्ष्मी", text: "उनकी छाती पर लक्ष्मी व्यूह लक्ष्मी के रूप में विराजती हैं — इसीलिए वे श्रीनिवास हैं, जिनमें श्री का निवास है। किस ओर, इस पर विवरण अलग-अलग हैं।" },
                { label: "ठुड्डी", text: "हर दिन ठुड्डी पर कपूर लगाया जाता है। कथा है कि रामानुज के शिष्य अनंताळ्वार ने अपना बगीचा बिगाड़ते एक बालक को सब्बल से मारा, और फिर भगवान की ठुड्डी से रक्त बहता पाया। वह सब्बल मंदिर के प्रवेश के भीतर रखा है।" },
              ],
            },
            {
              kind: "list",
              title: "आभूषण",
              items: [
                { label: "सूर्य कटारी", text: "कमर पर धारण की जाने वाली तलवार; कहा जाता है कि इसे सूर्यदेव ने दिया।" },
                { label: "सहस्रनाम हारम", text: "1,008 स्वर्ण मुद्राओं की माला, हर मुद्रा पर उनका एक नाम अंकित।" },
                { label: "पीतांबर", text: "पीला रेशम, जो मूर्ति को सदा पहनाया जाता है।" },
              ],
            },
          ],
        },
        {
          id: "sevas",
          eyebrow: "पूजा",
          title: "दिन और सप्ताह",
          blocks: [
            {
              kind: "para",
              text: "पूजा वैखानस आगम के अनुसार होती है। माना जाता है कि अनुष्ठानों का क्रम रामानुज ने तय किया और आळ्वारों के तमिल स्तोत्र, दिव्य प्रबंधम, का पाठ आरंभ कराया।",
            },
            {
              kind: "rows",
              title: "प्रतिदिन",
              rows: [
                { when: "भोर से पहले", name: "सुप्रभातम", text: "गर्भगृह के द्वार पर गाया जाने वाला, भगवान को जगाने वाला स्तोत्र।" },
                { when: "प्रातःकाल", name: "तोमाला सेवा", text: "मूर्ति का पुष्पमालाओं से श्रृंगार।" },
                { when: "सुबह", name: "अर्चना", text: "उनके सहस्र नामों का पाठ।" },
                { when: "रात", name: "एकांत सेवा", text: "दिन की अंतिम सेवा, जब भगवान को शयन कराया जाता है।" },
              ],
            },
            {
              kind: "rows",
              title: "प्रति सप्ताह",
              rows: [
                { when: "गुरुवार", name: "तिरुप्पावाडा", text: "आभूषण उतारे जाते हैं और नामम छोटा किया जाता है, जिससे आँखें दिखती हैं — नेत्र दर्शन। भगवान के आगे अन्न का ढेर रखा जाता है।" },
                { when: "शुक्रवार", name: "अभिषेकम", text: "पंचसूक्तों के पाठ के साथ, आकाशगंगा के जल से, फिर दूध और सुगंधित द्रव्यों से मूर्ति का स्नान।" },
              ],
            },
          ],
        },
        {
          id: "booking",
          eyebrow: "यात्रा",
          title: "सेवा की बुकिंग",
          blocks: [
            {
              kind: "para",
              text: "सशुल्क सेवाएँ, आर्जित सेवाएँ, केवल टीटीडी के ऑनलाइन पोर्टल से बुक होती हैं, और हर महीने के टिकट लगभग तीन महीने पहले जारी होते हैं। नीचे नवंबर 2026 की व्यवस्था है। टीटीडी समय-समय पर तिथियाँ बदलता है; उसका पोर्टल ही प्रमाण है।",
            },
            {
              kind: "list",
              items: [
                { label: "इलेक्ट्रॉनिक लकी डिप", text: "सुप्रभातम, तोमाला, अर्चना और अष्टदल पाद पद्माराधना सीधे बुक नहीं हो सकतीं। तीर्थयात्री महीने की 18 से 20 तारीख के बीच पोर्टल पर पंजीकरण करते हैं, और टिकट स्वचालित ड्रॉ से मिलते हैं।" },
                { label: "पहले आओ, पहले पाओ", text: "कल्याणोत्सवम, ऊंजल सेवा और सहस्र दीपालंकार सेवा महीने की लगभग 21 तारीख को सीधी बुकिंग के लिए खुलती हैं।" },
                { label: "वेशभूषा", text: "हर आर्जित सेवा में पारंपरिक वेश अनिवार्य है: पुरुषों के लिए धोती और उत्तरीय; स्त्रियों के लिए साड़ी, या दुपट्टे के साथ सलवार कमीज़।" },
              ],
            },
          ],
        },
        {
          id: "history",
          eyebrow: "परंपरा",
          title: "राजा, आचार्य और एक न्यास",
          blocks: [
            {
              kind: "para",
              text: "द्रविड़ शैली का यह मंदिर कई शताब्दियों में बढ़ा। इसका पहला अभिलिखित दान 966 ई. में पल्लव रानी सामवै ने दिया। पल्लवों के बाद चोलों ने दान दिए, और आज के आकार और संपदा का अधिकांश विजयनगर काल का है। कृष्णदेवराय के दान से आनंद निलय पर सोना चढ़ाया गया, और 1517 से उनकी प्रतिमा मंदिर में है।",
            },
            {
              kind: "para",
              text: "आज मंदिर का प्रबंधन आंध्र प्रदेश सरकार के अधीन एक स्वतंत्र न्यास, तिरुमला तिरुपति देवस्थानम, करता है। तिरुपति लड्डू को भौगोलिक संकेत (जीआई) प्राप्त है, इसलिए केवल टीटीडी इसे बना सकता है। अनेक तीर्थयात्री तिरुमला में मन्नत पूरी करने के लिए केश अर्पित करते हैं।",
            },
          ],
        },
      ],
    },
  },
});
