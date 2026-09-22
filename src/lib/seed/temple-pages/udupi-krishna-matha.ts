import { registerTemplePage } from "../temple-pages";

// ─────────────────────────────────────────────────────────
//  Udupi Sri Krishna Matha.
//
//  Written from the temple's Wikipedia article. Two things are said
//  plainly rather than smoothed over:
//    · the Kanakana Kindi legend was first written down by Hermann
//      Mogling in the 1860s, about two hundred years after the events
//      it tells of, and the older telling differs from today's.
//    · the daily pūjā times are the temple's own published order and
//      shift a little from day to day.
// ─────────────────────────────────────────────────────────

registerTemplePage({
  slug: "udupi-krishna-matha",
  region: "tulunadu",
  order: 2,
  name: { en: "Udupi Sri Krishna Matha", kn: "ಉಡುಪಿ ಶ್ರೀ ಕೃಷ್ಣ ಮಠ", hi: "उडुपी श्री कृष्ण मठ" },
  nameLocal: "ಉಡುಪಿ ಶ್ರೀ ಕೃಷ್ಣ ಮಠ",
  nameLocalLang: "kn",
  hero: {
    src: "/images/temples/udupi-krishna-matha/hero.jpg",
    width: 1200,
    height: 675,
    credit: "Udupi Sri Krishna Matha — photo by Ashok Prabhakaran, CC BY-SA 2.0, via Wikimedia Commons, cropped",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Udupi_Sri_Krishna_Matha_Temple.jpg",
    alt: {
      en: "The painted gateway of the Udupi Sri Krishna Matha.",
      kn: "ಉಡುಪಿ ಶ್ರೀ ಕೃಷ್ಣ ಮಠದ ಬಣ್ಣದ ಪ್ರವೇಶದ್ವಾರ.",
      hi: "उडुपी श्री कृष्ण मठ का रंगा हुआ प्रवेश द्वार।",
    },
  },
  gallery: [
    {
      src: "/images/temples/udupi-krishna-matha/gopura.jpg",
      width: 600,
      height: 800,
      credit: "Sri Krishna Matha, Udupi — photo by Ms Sarah Welch, CC BY-SA 4.0, via Wikimedia Commons, cropped",
      sourceUrl:
        "https://commons.wikimedia.org/wiki/File:Sri_Krishna_Matha_(Monastery)_and_temple,_Udupi_Karnataka.jpg",
      alt: {
        en: "The carved entrance hall of the Krishna Matha.",
        kn: "ಕೃಷ್ಣ ಮಠದ ಕೆತ್ತನೆಯ ಪ್ರವೇಶ ಮಂಟಪ.",
        hi: "कृष्ण मठ का नक्काशीदार प्रवेश मंडप।",
      },
      caption: {
        en: "The entrance on Car Street, where the Paryaya procession passes.",
        kn: "ರಥಬೀದಿಯ ಪ್ರವೇಶ — ಪರ್ಯಾಯ ಮೆರವಣಿಗೆ ಸಾಗುವ ದಾರಿ.",
        hi: "रथबीदी का प्रवेश, जहाँ से पर्याय की शोभायात्रा निकलती है।",
      },
    },
  ],
  sources: [
    { title: "Udupi Sri Krishna Matha — Wikipedia", url: "https://en.wikipedia.org/wiki/Udupi_Sri_Krishna_Matha" },
    { title: "Madhvacharya — Wikipedia", url: "https://en.wikipedia.org/wiki/Madhvacharya" },
  ],
  content: {
    en: {
      tagline: "The Krishna that Madhvacharya installed, seen through a window of nine holes.",
      place: "Udupi · Karnataka",
      facts: [
        ["Deity", "Krishna, as a child with the churning rope"],
        ["Founded by", "Madhvacharya, 13th century"],
        ["Tradition", "Dvaita Vedanta"],
        ["Run by", "The Ashta Mathas, two years each"],
        ["Darshan", "Through the Kanakana Kindi"],
        ["Open", "5:30 am to 9:00 pm"],
      ],
      quote:
        "The image faces west, and the wall in front of it is a silver window with nine holes. You do not walk up to this Krishna; you look through at him.",
      sections: [
        {
          id: "story",
          eyebrow: "How it began",
          title: "Madhvacharya and the image in gopichandana",
          blocks: [
            {
              kind: "para",
              text: "The Matha was founded in the thirteenth century by Madhvacharya, who taught Dvaita — that the self and God are distinct, and the distinction is real and permanent. Tradition holds that he found the image of Krishna inside a large ball of gopichandana, the pale clay used to mark the forehead, and installed it at Udupi.",
            },
            {
              kind: "para",
              text: "In his Tantrasara Sangraha, Madhvacharya says the image was first set facing east. It is worshipped today facing west, and the temples of the other Ashta Mathas face west with it.",
            },
            {
              kind: "sub",
              title: "What the image holds",
              paras: [
                "Krishna is shown as a child, holding a churning rope in one hand and a churning stick in the other — not the flute-player of the paintings, but the boy of the butter-house.",
              ],
            },
          ],
        },
        {
          id: "kindi",
          eyebrow: "The window",
          title: "Kanakana Kindi",
          blocks: [
            {
              kind: "para",
              text: "Darshan at Udupi is taken through two windows. The inner one, a silver plate pierced with nine holes, is the Navagraha Kindi. The outer one, framed by a carved arch, is the Kanakana Kindi — Kanaka's window.",
            },
            {
              kind: "sub",
              title: "Kanakadasa",
              paras: [
                "Kanakadasa was born Veera Nayaka, a chieftain of the Kuruba community in the Vijayanagara kingdom. After losing a battle he became a dasa, a singer of devotional songs. When he came to Udupi, he was not allowed inside the temple, and was given a hut behind it, separated from the image by the wall.",
                "The legend says the image turned west to meet his singing, and that a crack opened in the wall one night in an earthquake, through which he saw Krishna. Vadiraja Tirtha, told of it, widened the crack into a window rather than closing it.",
                "The oral traditions were written down by the German scholar Hermann Mogling in the 1860s, roughly two hundred years after Kanakadasa's time, and what he recorded differs in places from the story told today. It is best read as the tradition's own account of why the window is there.",
              ],
            },
          ],
        },
        {
          id: "mathas",
          eyebrow: "Who runs it",
          title: "The Ashta Mathas and the Paryaya",
          blocks: [
            {
              kind: "para",
              text: "The Matha is not run by a single line of priests. Eight monasteries founded by Madhvacharya's disciples take charge of it in turn, each for two years. The handover is the Paryaya festival, held in even years; the tradition completed five hundred years in 2021.",
            },
            {
              kind: "list",
              title: "The eight",
              items: [
                { label: "Palimaru", text: "One of the eight, each with its own presiding image, the Pattada Devaru." },
                { label: "Admaru", text: "The order of the Paryaya runs through the eight in turn." },
                { label: "Krishnapura", text: "Each matha's swami takes the Sarvajna Peetha for his two years." },
                { label: "Puttige", text: "The mathas also keep the daily worship when their turn comes." },
                { label: "Shirur", text: "Their upkeep is met by the mathas and by what devotees give." },
                { label: "Sodhe", text: "Udupi is also the home of Dasa Sahitya, the songs of the Haridasas." },
                { label: "Kaniyoor", text: "The Matha's lands were lost under the Land Reforms Act of 1975." },
                { label: "Pejavara", text: "The Pauli was renovated and reconsecrated in May 2017." },
              ],
            },
          ],
        },
        {
          id: "day",
          eyebrow: "The day",
          title: "Worship, from before dawn to the cradle at night",
          blocks: [
            {
              kind: "para",
              text: "The pontiff of the matha in charge performs the pujas himself. These are the temple's own times; they shift a little from day to day.",
            },
            {
              kind: "rows",
              rows: [
                { when: "5:00 am", name: "Nirmalya Visarjana", text: "The previous day's flowers are taken off and the day begins." },
                { when: "6:00 am", name: "Ushakala Puja", text: "The first worship of the morning." },
                { when: "6:20 am", name: "Vishwaroopa Darshana", text: "The first darshan of the day, through the windows." },
                { when: "6:30 am", name: "Panchamrita Abhisheka", text: "Bathing in milk, curd, ghee, honey and sugarcane juice." },
                { when: "8:30 am", name: "Alankara Puja", text: "The image is dressed and ornamented." },
                { when: "11:00 am", name: "Mahapuja", text: "The great worship of the day." },
                { when: "Noon", name: "Anna Brahma", text: "The prasada meal, served to everyone who comes." },
                { when: "7:30 pm", name: "Ratri Puja", text: "The night worship, followed by the Ranga Puja." },
                { when: "8:00 pm", name: "Utsava", text: "The procession, and then the cradle: Thottilu Puja." },
                { when: "8:50 pm", name: "Ekanta Seva", text: "The last service, alone, before the doors close." },
              ],
            },
          ],
        },
        {
          id: "festivals",
          eyebrow: "The year",
          title: "Paryaya and the festivals",
          blocks: [
            {
              kind: "rows",
              rows: [
                { when: "Every two years", name: "Paryaya", text: "The handover of the temple from one matha to the next, in January of even years." },
                { when: "Shravana", name: "Krishna Janmashtami", text: "Krishna's birth, the largest day of the year here." },
                { when: "Magha", name: "Madhva Navami", text: "The day Madhvacharya is held to have left for Badari." },
                { when: "Magha", name: "Ratha Saptami", text: "Kept with the other festivals of the Paryaya matha's year." },
                { when: "Ashwin", name: "Navaratri Mahotsava", text: "Nine nights, ending in Vijayadashami." },
              ],
            },
          ],
        },
        {
          id: "visit",
          eyebrow: "Going there",
          title: "Visiting",
          blocks: [
            {
              kind: "list",
              items: [
                { label: "Hours", text: "Open for darshan from 5:30 am to 9:00 pm." },
                { label: "Prasada", text: "The midday meal is served to all; the temple calls it Anna Brahma." },
                { label: "Dress", text: "A dress code has applied to those entering since January 2026." },
                { label: "Around it", text: "The Anantheshwara temple beside it is older than the Matha — more than a thousand years old." },
              ],
            },
          ],
        },
      ],
    },
    kn: {
      tagline: "ಮಧ್ವಾಚಾರ್ಯರು ಪ್ರತಿಷ್ಠಾಪಿಸಿದ ಕೃಷ್ಣ — ಒಂಬತ್ತು ರಂಧ್ರಗಳ ಕಿಂಡಿಯ ಮೂಲಕ ದರ್ಶನ.",
      place: "ಉಡುಪಿ · ಕರ್ನಾಟಕ",
      facts: [
        ["ದೇವರು", "ಕೃಷ್ಣ — ಕಡಗೋಲು ಹಗ್ಗ ಹಿಡಿದ ಬಾಲಕ"],
        ["ಸ್ಥಾಪಕರು", "ಮಧ್ವಾಚಾರ್ಯರು, 13ನೇ ಶತಮಾನ"],
        ["ಸಂಪ್ರದಾಯ", "ದ್ವೈತ ವೇದಾಂತ"],
        ["ನಿರ್ವಹಣೆ", "ಅಷ್ಟ ಮಠಗಳು, ತಲಾ ಎರಡು ವರ್ಷ"],
        ["ದರ್ಶನ", "ಕನಕನ ಕಿಂಡಿಯ ಮೂಲಕ"],
        ["ಸಮಯ", "ಬೆಳಿಗ್ಗೆ 5:30 ರಿಂದ ರಾತ್ರಿ 9:00"],
      ],
      quote:
        "ಮೂರ್ತಿ ಪಶ್ಚಿಮಾಭಿಮುಖವಾಗಿದೆ; ಎದುರಿನ ಗೋಡೆಯಲ್ಲಿ ಒಂಬತ್ತು ರಂಧ್ರಗಳ ಬೆಳ್ಳಿಯ ಕಿಂಡಿ. ಈ ಕೃಷ್ಣನ ಬಳಿಗೆ ನಡೆದು ಹೋಗುವುದಿಲ್ಲ; ಕಿಂಡಿಯ ಮೂಲಕ ನೋಡುತ್ತೀರಿ.",
      sections: [
        {
          id: "story",
          eyebrow: "ಆರಂಭ",
          title: "ಮಧ್ವಾಚಾರ್ಯರು ಮತ್ತು ಗೋಪಿಚಂದನದೊಳಗಿನ ಮೂರ್ತಿ",
          blocks: [
            {
              kind: "para",
              text: "ಹದಿಮೂರನೆಯ ಶತಮಾನದಲ್ಲಿ ಮಧ್ವಾಚಾರ್ಯರು ಈ ಮಠವನ್ನು ಸ್ಥಾಪಿಸಿದರು. ಜೀವ ಮತ್ತು ದೇವರು ಬೇರೆ ಬೇರೆ, ಆ ಭೇದ ನಿಜವಾದದ್ದು ಮತ್ತು ಶಾಶ್ವತವಾದದ್ದು ಎಂಬ ದ್ವೈತವನ್ನು ಅವರು ಬೋಧಿಸಿದರು. ಹಣೆಗೆ ಹಚ್ಚುವ ತಿಳಿಬಣ್ಣದ ಮಣ್ಣಾದ ಗೋಪಿಚಂದನದ ದೊಡ್ಡ ಉಂಡೆಯೊಳಗೆ ಕೃಷ್ಣನ ಮೂರ್ತಿಯನ್ನು ಅವರು ಕಂಡರು ಮತ್ತು ಉಡುಪಿಯಲ್ಲಿ ಪ್ರತಿಷ್ಠಾಪಿಸಿದರು ಎಂಬುದು ಪರಂಪರೆ.",
            },
            {
              kind: "para",
              text: "ತಂತ್ರಸಾರ ಸಂಗ್ರಹದಲ್ಲಿ ಮಧ್ವಾಚಾರ್ಯರು ಮೂರ್ತಿಯನ್ನು ಮೊದಲು ಪೂರ್ವಾಭಿಮುಖವಾಗಿ ಇರಿಸಿದ್ದಾಗಿ ಹೇಳುತ್ತಾರೆ. ಇಂದು ಪಶ್ಚಿಮಾಭಿಮುಖವಾಗಿ ಪೂಜಿಸಲಾಗುತ್ತದೆ; ಅಷ್ಟ ಮಠಗಳ ಉಳಿದ ದೇವರುಗಳೂ ಪಶ್ಚಿಮಕ್ಕೇ ಮುಖ ಮಾಡಿವೆ.",
            },
            {
              kind: "sub",
              title: "ಮೂರ್ತಿಯ ಕೈಯಲ್ಲಿ",
              paras: [
                "ಕೃಷ್ಣ ಇಲ್ಲಿ ಬಾಲಕ — ಒಂದು ಕೈಯಲ್ಲಿ ಕಡಗೋಲಿನ ಹಗ್ಗ, ಇನ್ನೊಂದರಲ್ಲಿ ಕಡಗೋಲು. ಚಿತ್ರಗಳಲ್ಲಿ ಕಾಣುವ ಕೊಳಲಿನವನಲ್ಲ, ಬೆಣ್ಣೆಮನೆಯ ಹುಡುಗ.",
              ],
            },
          ],
        },
        {
          id: "kindi",
          eyebrow: "ಕಿಂಡಿ",
          title: "ಕನಕನ ಕಿಂಡಿ",
          blocks: [
            {
              kind: "para",
              text: "ಉಡುಪಿಯಲ್ಲಿ ದರ್ಶನ ಎರಡು ಕಿಂಡಿಗಳ ಮೂಲಕ. ಒಳಗಿನದು ಒಂಬತ್ತು ರಂಧ್ರಗಳ ಬೆಳ್ಳಿಯ ಹಾಳೆ — ನವಗ್ರಹ ಕಿಂಡಿ. ಹೊರಗಿನದು ಕೆತ್ತನೆಯ ಕಮಾನಿನ ಕನಕನ ಕಿಂಡಿ.",
            },
            {
              kind: "sub",
              title: "ಕನಕದಾಸರು",
              paras: [
                "ಕನಕದಾಸರ ಮೊದಲ ಹೆಸರು ವೀರ ನಾಯಕ; ವಿಜಯನಗರ ಸಾಮ್ರಾಜ್ಯದ ಕುರುಬ ಸಮುದಾಯದ ನಾಯಕ. ಯುದ್ಧದಲ್ಲಿ ಸೋತ ನಂತರ ದಾಸರಾಗಿ ಹಾಡತೊಡಗಿದರು. ಉಡುಪಿಗೆ ಬಂದಾಗ ಅವರಿಗೆ ದೇವಾಲಯದೊಳಗೆ ಪ್ರವೇಶವಿರಲಿಲ್ಲ; ಗೋಡೆಯ ಆಚೆ, ಹಿಂಭಾಗದ ಗುಡಿಸಲಿನಲ್ಲಿ ಉಳಿದರು.",
                "ಅವರ ಹಾಡಿಗೆ ಮೂರ್ತಿ ಪಶ್ಚಿಮಕ್ಕೆ ತಿರುಗಿತು, ಒಂದು ರಾತ್ರಿ ಭೂಕಂಪದಲ್ಲಿ ಗೋಡೆಯಲ್ಲಿ ಬಿರುಕು ಮೂಡಿ ಅದರ ಮೂಲಕ ಕೃಷ್ಣನ ದರ್ಶನವಾಯಿತು ಎಂಬುದು ಕಥೆ. ವಿಷಯ ತಿಳಿದ ವಾದಿರಾಜ ತೀರ್ಥರು ಆ ಬಿರುಕನ್ನು ಮುಚ್ಚದೆ ಕಿಂಡಿಯಾಗಿ ಅಗಲಿಸಿದರು.",
                "ಈ ಮೌಖಿಕ ಕಥೆಗಳನ್ನು ಜರ್ಮನ್ ವಿದ್ವಾಂಸ ಹರ್ಮನ್ ಮೊಗ್ಲಿಂಗ್ 1860ರ ದಶಕದಲ್ಲಿ — ಕನಕದಾಸರ ಕಾಲದ ಸುಮಾರು ಇನ್ನೂರು ವರ್ಷಗಳ ನಂತರ — ಬರೆದಿಟ್ಟರು; ಅವರು ದಾಖಲಿಸಿದ ಕಥೆ ಇಂದಿನದಕ್ಕಿಂತ ಕೆಲವೆಡೆ ಭಿನ್ನ. ಕಿಂಡಿ ಏಕಿದೆ ಎಂಬುದಕ್ಕೆ ಪರಂಪರೆಯೇ ಹೇಳುವ ಉತ್ತರ ಇದು.",
              ],
            },
          ],
        },
        {
          id: "mathas",
          eyebrow: "ನಿರ್ವಹಣೆ",
          title: "ಅಷ್ಟ ಮಠಗಳು ಮತ್ತು ಪರ್ಯಾಯ",
          blocks: [
            {
              kind: "para",
              text: "ಈ ಮಠವನ್ನು ಒಂದೇ ಅರ್ಚಕ ಪರಂಪರೆ ನಡೆಸುವುದಿಲ್ಲ. ಮಧ್ವಾಚಾರ್ಯರ ಶಿಷ್ಯರು ಸ್ಥಾಪಿಸಿದ ಎಂಟು ಮಠಗಳು ಸರದಿಯಂತೆ, ತಲಾ ಎರಡು ವರ್ಷ ಇದರ ಉಸ್ತುವಾರಿ ವಹಿಸುತ್ತವೆ. ಈ ಹಸ್ತಾಂತರವೇ ಪರ್ಯಾಯ ಉತ್ಸವ; ಸಮ ವರ್ಷಗಳಲ್ಲಿ ನಡೆಯುತ್ತದೆ. 2021ಕ್ಕೆ ಈ ಪದ್ಧತಿಗೆ ಐನೂರು ವರ್ಷ ತುಂಬಿತು.",
            },
            {
              kind: "list",
              title: "ಎಂಟು ಮಠಗಳು",
              items: [
                { label: "ಪಲಿಮಾರು", text: "ಪ್ರತಿ ಮಠಕ್ಕೂ ತನ್ನದೇ ಪಟ್ಟದ ದೇವರು." },
                { label: "ಅದಮಾರು", text: "ಪರ್ಯಾಯ ಎಂಟೂ ಮಠಗಳಲ್ಲಿ ಸರದಿಯಂತೆ ಸಾಗುತ್ತದೆ." },
                { label: "ಕೃಷ್ಣಾಪುರ", text: "ಆಯಾ ಮಠದ ಸ್ವಾಮಿಗಳು ಎರಡು ವರ್ಷ ಸರ್ವಜ್ಞ ಪೀಠವನ್ನೇರುತ್ತಾರೆ." },
                { label: "ಪುತ್ತಿಗೆ", text: "ಸರದಿ ಬಂದಾಗ ನಿತ್ಯಪೂಜೆಯ ಹೊಣೆಯೂ ಆ ಮಠದ್ದೇ." },
                { label: "ಶಿರೂರು", text: "ವೆಚ್ಚವನ್ನು ಮಠಗಳೂ ಭಕ್ತರ ಕಾಣಿಕೆಯೂ ಭರಿಸುತ್ತವೆ." },
                { label: "ಸೋದೆ", text: "ದಾಸ ಸಾಹಿತ್ಯದ ನೆಲೆಯೂ ಉಡುಪಿಯೇ." },
                { label: "ಕಾಣಿಯೂರು", text: "1975ರ ಭೂಸುಧಾರಣಾ ಕಾಯ್ದೆಯಿಂದ ಮಠದ ಭೂಮಿ ಕೈತಪ್ಪಿತು." },
                { label: "ಪೇಜಾವರ", text: "ಪೌಳಿಯ ಜೀರ್ಣೋದ್ಧಾರ ಮತ್ತು ಬ್ರಹ್ಮಕಲಶೋತ್ಸವ 2017ರ ಮೇ ತಿಂಗಳಲ್ಲಿ ನಡೆಯಿತು." },
              ],
            },
          ],
        },
        {
          id: "day",
          eyebrow: "ದಿನಚರಿ",
          title: "ಮುಂಜಾನೆಯಿಂದ ರಾತ್ರಿಯ ತೊಟ್ಟಿಲ ಸೇವೆಯವರೆಗೆ",
          blocks: [
            {
              kind: "para",
              text: "ಪರ್ಯಾಯ ಮಠದ ಸ್ವಾಮಿಗಳೇ ಪೂಜೆಗಳನ್ನು ನೆರವೇರಿಸುತ್ತಾರೆ. ಇವು ದೇವಾಲಯವೇ ಪ್ರಕಟಿಸಿದ ಸಮಯಗಳು; ದಿನದಿಂದ ದಿನಕ್ಕೆ ಸ್ವಲ್ಪ ಬದಲಾಗಬಹುದು.",
            },
            {
              kind: "rows",
              rows: [
                { when: "ಬೆಳಿಗ್ಗೆ 5:00", name: "ನಿರ್ಮಾಲ್ಯ ವಿಸರ್ಜನೆ", text: "ಹಿಂದಿನ ದಿನದ ಹೂವುಗಳನ್ನು ತೆಗೆದು ದಿನ ಆರಂಭ." },
                { when: "ಬೆಳಿಗ್ಗೆ 6:00", name: "ಉಷಃಕಾಲ ಪೂಜೆ", text: "ಮುಂಜಾನೆಯ ಮೊದಲ ಪೂಜೆ." },
                { when: "ಬೆಳಿಗ್ಗೆ 6:20", name: "ವಿಶ್ವರೂಪ ದರ್ಶನ", text: "ದಿನದ ಮೊದಲ ದರ್ಶನ, ಕಿಂಡಿಗಳ ಮೂಲಕ." },
                { when: "ಬೆಳಿಗ್ಗೆ 6:30", name: "ಪಂಚಾಮೃತ ಅಭಿಷೇಕ", text: "ಹಾಲು, ಮೊಸರು, ತುಪ್ಪ, ಜೇನು, ಕಬ್ಬಿನ ರಸದಿಂದ ಅಭಿಷೇಕ." },
                { when: "ಬೆಳಿಗ್ಗೆ 8:30", name: "ಅಲಂಕಾರ ಪೂಜೆ", text: "ಮೂರ್ತಿಗೆ ವಸ್ತ್ರ, ಆಭರಣಗಳ ಅಲಂಕಾರ." },
                { when: "ಬೆಳಿಗ್ಗೆ 11:00", name: "ಮಹಾಪೂಜೆ", text: "ದಿನದ ಪ್ರಧಾನ ಪೂಜೆ." },
                { when: "ಮಧ್ಯಾಹ್ನ", name: "ಅನ್ನಬ್ರಹ್ಮ", text: "ಬಂದವರೆಲ್ಲರಿಗೂ ಪ್ರಸಾದ ಭೋಜನ." },
                { when: "ರಾತ್ರಿ 7:30", name: "ರಾತ್ರಿ ಪೂಜೆ", text: "ನಂತರ ರಂಗಪೂಜೆ." },
                { when: "ರಾತ್ರಿ 8:00", name: "ಉತ್ಸವ", text: "ಉತ್ಸವದ ನಂತರ ತೊಟ್ಟಿಲ ಪೂಜೆ." },
                { when: "ರಾತ್ರಿ 8:50", name: "ಏಕಾಂತ ಸೇವೆ", text: "ಬಾಗಿಲು ಮುಚ್ಚುವ ಮುನ್ನ ಕೊನೆಯ ಸೇವೆ." },
              ],
            },
          ],
        },
        {
          id: "festivals",
          eyebrow: "ವರ್ಷದ ಹಬ್ಬಗಳು",
          title: "ಪರ್ಯಾಯ ಮತ್ತು ಉತ್ಸವಗಳು",
          blocks: [
            {
              kind: "rows",
              rows: [
                { when: "ಎರಡು ವರ್ಷಕ್ಕೊಮ್ಮೆ", name: "ಪರ್ಯಾಯ", text: "ಸಮ ವರ್ಷಗಳ ಜನವರಿಯಲ್ಲಿ ಒಂದು ಮಠದಿಂದ ಮತ್ತೊಂದಕ್ಕೆ ಹಸ್ತಾಂತರ." },
                { when: "ಶ್ರಾವಣ", name: "ಕೃಷ್ಣ ಜನ್ಮಾಷ್ಟಮಿ", text: "ಇಲ್ಲಿನ ವರ್ಷದ ಅತಿ ದೊಡ್ಡ ದಿನ." },
                { when: "ಮಾಘ", name: "ಮಧ್ವ ನವಮಿ", text: "ಮಧ್ವಾಚಾರ್ಯರು ಬದರಿಗೆ ತೆರಳಿದ ದಿನವೆಂದು ನಂಬಿಕೆ." },
                { when: "ಮಾಘ", name: "ರಥಸಪ್ತಮಿ", text: "ಪರ್ಯಾಯ ಮಠದ ವರ್ಷದ ಉತ್ಸವಗಳಲ್ಲಿ ಒಂದು." },
                { when: "ಆಶ್ವಯುಜ", name: "ನವರಾತ್ರಿ ಮಹೋತ್ಸವ", text: "ಒಂಬತ್ತು ರಾತ್ರಿಗಳು, ವಿಜಯದಶಮಿಯಲ್ಲಿ ಸಮಾಪ್ತಿ." },
              ],
            },
          ],
        },
        {
          id: "visit",
          eyebrow: "ಭೇಟಿ",
          title: "ಹೋಗುವ ಮೊದಲು",
          blocks: [
            {
              kind: "list",
              items: [
                { label: "ಸಮಯ", text: "ಬೆಳಿಗ್ಗೆ 5:30 ರಿಂದ ರಾತ್ರಿ 9:00 ರವರೆಗೆ ದರ್ಶನ." },
                { label: "ಪ್ರಸಾದ", text: "ಮಧ್ಯಾಹ್ನದ ಊಟ ಎಲ್ಲರಿಗೂ; ದೇವಾಲಯ ಇದನ್ನು ಅನ್ನಬ್ರಹ್ಮ ಎನ್ನುತ್ತದೆ." },
                { label: "ಉಡುಗೆ", text: "2026ರ ಜನವರಿಯಿಂದ ಪ್ರವೇಶಕ್ಕೆ ಉಡುಗೆ ನಿಯಮ ಜಾರಿಯಲ್ಲಿದೆ." },
                { label: "ಸುತ್ತಮುತ್ತ", text: "ಪಕ್ಕದ ಅನಂತೇಶ್ವರ ದೇವಾಲಯ ಮಠಕ್ಕಿಂತಲೂ ಹಳೆಯದು — ಸಾವಿರ ವರ್ಷಗಳಿಗೂ ಮೀರಿದ್ದು." },
              ],
            },
          ],
        },
      ],
    },
    hi: {
      tagline: "मध्वाचार्य द्वारा प्रतिष्ठित कृष्ण — नौ छिद्रों वाली खिड़की से दर्शन।",
      place: "उडुपी · कर्नाटक",
      facts: [
        ["देवता", "कृष्ण — मथानी की रस्सी लिए बालक"],
        ["स्थापना", "मध्वाचार्य, 13वीं शताब्दी"],
        ["परंपरा", "द्वैत वेदांत"],
        ["व्यवस्था", "अष्ट मठ, दो-दो वर्ष"],
        ["दर्शन", "कनकन किंडी से"],
        ["समय", "प्रातः 5:30 से रात्रि 9:00"],
      ],
      quote:
        "प्रतिमा पश्चिम की ओर है, और सामने की दीवार में नौ छिद्रों वाली चाँदी की खिड़की। इस कृष्ण के पास चलकर नहीं जाते; खिड़की से देखते हैं।",
      sections: [
        {
          id: "story",
          eyebrow: "आरंभ",
          title: "मध्वाचार्य और गोपीचंदन के भीतर की प्रतिमा",
          blocks: [
            {
              kind: "para",
              text: "तेरहवीं शताब्दी में मध्वाचार्य ने इस मठ की स्थापना की। उन्होंने द्वैत सिखाया — जीव और ईश्वर भिन्न हैं, और यह भेद वास्तविक तथा नित्य है। परंपरा कहती है कि माथे पर लगाई जाने वाली हल्की मिट्टी, गोपीचंदन, के बड़े गोले के भीतर उन्हें कृष्ण की प्रतिमा मिली और उन्होंने उसे उडुपी में प्रतिष्ठित किया।",
            },
            {
              kind: "para",
              text: "अपने तंत्रसार संग्रह में मध्वाचार्य कहते हैं कि प्रतिमा पहले पूर्वाभिमुख रखी गई थी। आज उसकी पूजा पश्चिमाभिमुख होती है, और अष्ट मठों के अन्य देवता भी पश्चिम की ओर ही हैं।",
            },
            {
              kind: "sub",
              title: "हाथों में क्या है",
              paras: [
                "कृष्ण यहाँ बालक हैं — एक हाथ में मथानी की रस्सी, दूसरे में मथानी। चित्रों वाले बंसीधर नहीं, बल्कि मक्खन-घर का बालक।",
              ],
            },
          ],
        },
        {
          id: "kindi",
          eyebrow: "खिड़की",
          title: "कनकन किंडी",
          blocks: [
            {
              kind: "para",
              text: "उडुपी में दर्शन दो खिड़कियों से होते हैं। भीतर वाली नौ छिद्रों वाली चाँदी की पट्टी है — नवग्रह किंडी। बाहर वाली, तराशे हुए मेहराब से घिरी, कनकन किंडी है।",
            },
            {
              kind: "sub",
              title: "कनकदास",
              paras: [
                "कनकदास का पहला नाम वीर नायक था; विजयनगर राज्य के कुरुबा समुदाय के सरदार। युद्ध हारने के बाद वे दास बनकर भक्ति-गीत गाने लगे। उडुपी आने पर उन्हें मंदिर में प्रवेश नहीं मिला; दीवार के पीछे एक झोपड़ी में वे रहे।",
                "कथा है कि उनके गायन पर प्रतिमा पश्चिम की ओर मुड़ गई, और एक रात भूकंप में दीवार में दरार पड़ी जिससे उन्हें दर्शन हुए। यह जानकर वादिराज तीर्थ ने दरार को बंद करने के बजाय खिड़की बना दिया।",
                "इन मौखिक कथाओं को जर्मन विद्वान हरमन मोगलिंग ने 1860 के दशक में — कनकदास के समय के लगभग दो सौ वर्ष बाद — लिखा; उनका दर्ज किया रूप आज की कथा से कहीं-कहीं भिन्न है। खिड़की क्यों है, इसका उत्तर परंपरा स्वयं इसी रूप में देती है।",
              ],
            },
          ],
        },
        {
          id: "mathas",
          eyebrow: "व्यवस्था",
          title: "अष्ट मठ और पर्याय",
          blocks: [
            {
              kind: "para",
              text: "इस मठ को कोई एक पुरोहित-परंपरा नहीं चलाती। मध्वाचार्य के शिष्यों द्वारा स्थापित आठ मठ बारी-बारी से, दो-दो वर्ष इसका भार सँभालते हैं। यही हस्तांतरण पर्याय उत्सव है, जो सम वर्षों में होता है; 2021 में इस परंपरा के पाँच सौ वर्ष पूरे हुए।",
            },
            {
              kind: "list",
              title: "आठ मठ",
              items: [
                { label: "पलिमारु", text: "हर मठ का अपना पट्ट देवता है।" },
                { label: "अदमारु", text: "पर्याय आठों मठों में क्रम से चलता है।" },
                { label: "कृष्णापुर", text: "उस मठ के स्वामी दो वर्ष सर्वज्ञ पीठ पर रहते हैं।" },
                { label: "पुत्तिगे", text: "बारी आने पर नित्य पूजा का दायित्व भी उसी मठ का।" },
                { label: "शिरूरु", text: "व्यय मठ और भक्तों की भेंट से चलता है।" },
                { label: "सोदे", text: "दास साहित्य का उद्गम भी उडुपी ही है।" },
                { label: "काणियूरु", text: "1975 के भूमि सुधार अधिनियम से मठ की भूमि चली गई।" },
                { label: "पेजावर", text: "पौली का जीर्णोद्धार और ब्रह्मकलशोत्सव मई 2017 में हुआ।" },
              ],
            },
          ],
        },
        {
          id: "day",
          eyebrow: "दिनचर्या",
          title: "भोर से रात की झूला-सेवा तक",
          blocks: [
            {
              kind: "para",
              text: "पूजाएँ पर्याय मठ के स्वामी स्वयं करते हैं। ये मंदिर के अपने प्रकाशित समय हैं; दिन-प्रतिदिन थोड़े बदलते हैं।",
            },
            {
              kind: "rows",
              rows: [
                { when: "प्रातः 5:00", name: "निर्माल्य विसर्जन", text: "बीते दिन के फूल हटाकर दिन का आरंभ।" },
                { when: "प्रातः 6:00", name: "उषःकाल पूजा", text: "सुबह की पहली पूजा।" },
                { when: "प्रातः 6:20", name: "विश्वरूप दर्शन", text: "दिन के पहले दर्शन, खिड़कियों से।" },
                { when: "प्रातः 6:30", name: "पंचामृत अभिषेक", text: "दूध, दही, घी, शहद और गन्ने के रस से अभिषेक।" },
                { when: "प्रातः 8:30", name: "अलंकार पूजा", text: "प्रतिमा को वस्त्र और आभूषण।" },
                { when: "प्रातः 11:00", name: "महापूजा", text: "दिन की प्रधान पूजा।" },
                { when: "दोपहर", name: "अन्नब्रह्म", text: "आने वाले सबके लिए प्रसाद-भोजन।" },
                { when: "रात्रि 7:30", name: "रात्रि पूजा", text: "इसके बाद रंग पूजा।" },
                { when: "रात्रि 8:00", name: "उत्सव", text: "उत्सव के बाद झूला पूजा।" },
                { when: "रात्रि 8:50", name: "एकांत सेवा", text: "द्वार बंद होने से पहले अंतिम सेवा।" },
              ],
            },
          ],
        },
        {
          id: "festivals",
          eyebrow: "वर्ष के उत्सव",
          title: "पर्याय और त्योहार",
          blocks: [
            {
              kind: "rows",
              rows: [
                { when: "हर दो वर्ष", name: "पर्याय", text: "सम वर्षों की जनवरी में एक मठ से दूसरे को हस्तांतरण।" },
                { when: "श्रावण", name: "कृष्ण जन्माष्टमी", text: "यहाँ वर्ष का सबसे बड़ा दिन।" },
                { when: "माघ", name: "मध्व नवमी", text: "मध्वाचार्य के बदरी प्रस्थान का दिन माना जाता है।" },
                { when: "माघ", name: "रथसप्तमी", text: "पर्याय मठ के वर्ष के उत्सवों में से एक।" },
                { when: "आश्विन", name: "नवरात्रि महोत्सव", text: "नौ रातें, विजयादशमी पर समापन।" },
              ],
            },
          ],
        },
        {
          id: "visit",
          eyebrow: "यात्रा",
          title: "जाने से पहले",
          blocks: [
            {
              kind: "list",
              items: [
                { label: "समय", text: "प्रातः 5:30 से रात्रि 9:00 तक दर्शन।" },
                { label: "प्रसाद", text: "दोपहर का भोजन सबके लिए; मंदिर इसे अन्नब्रह्म कहता है।" },
                { label: "वेश", text: "जनवरी 2026 से प्रवेश के लिए वेश-नियम लागू है।" },
                { label: "आसपास", text: "पास का अनंतेश्वर मंदिर मठ से भी पुराना है — एक हज़ार वर्ष से अधिक।" },
              ],
            },
          ],
        },
      ],
    },
  },
});
