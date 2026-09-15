import type { DevataImage } from "./devatas";

// ─────────────────────────────────────────────────────────
//  Pictures for the stutis beyond each devata's own portrait: the
//  festival band, the sections of a devata's page, and a stotra that
//  has a picture of its own.
//
//  These four were supplied by the site's owner for the Gaṇeśa pages,
//  and cropped here from the owner's files. Their original source and
//  licence are not recorded, so they carry no source link; the credit
//  says who supplied them. Declared sizes are the files' real ones.
// ─────────────────────────────────────────────────────────

const OWNER = "Supplied by the site owner, cropped";

/** A temple Gaṇeśa between lit brass lamps. */
export const GANESHA_LAMPS: DevataImage = {
  src: "/images/stutis/ganesha-lamps-idol.jpg",
  width: 820,
  height: 1025,
  position: "50% 38%",
  credit: OWNER,
  alt: {
    en: "Ganesha in a temple shrine, dressed in flowers, with brass lamps lit on either side.",
    kn: "ಎರಡೂ ಬದಿಗಳಲ್ಲಿ ಹಿತ್ತಾಳೆಯ ದೀಪಗಳು ಬೆಳಗುತ್ತಿರುವ, ಹೂವುಗಳಿಂದ ಅಲಂಕೃತನಾದ ದೇವಾಲಯದ ಗಣೇಶ.",
    hi: "दोनों ओर जलते पीतल के दीपों के बीच, फूलों से सजे मंदिर के गणेश।",
  },
};

/** A temple Gaṇeśa with a golden face, in garlands. */
export const GANESHA_GARLANDS: DevataImage = {
  src: "/images/stutis/ganesha-garlanded-idol.jpg",
  width: 690,
  height: 920,
  position: "50% 32%",
  credit: OWNER,
  alt: {
    en: "Ganesha in a temple, with a golden face and silver arms, dressed in garlands of red, yellow and white flowers.",
    kn: "ಚಿನ್ನದ ಮುಖ ಮತ್ತು ಬೆಳ್ಳಿಯ ಕೈಗಳ, ಕೆಂಪು, ಹಳದಿ, ಬಿಳಿ ಹೂವಿನ ಹಾರಗಳಿಂದ ಅಲಂಕೃತನಾದ ದೇವಾಲಯದ ಗಣೇಶ.",
    hi: "सुनहरे मुख और चाँदी की भुजाओं वाले, लाल, पीले और सफ़ेद फूलों की मालाओं से सजे मंदिर के गणेश।",
  },
};

/** Gaṇeśa inside rings of his mūla-mantra. */
export const GANESHA_MANTRA: DevataImage = {
  src: "/images/stutis/ganesha-mantra-circle.jpg",
  width: 684,
  height: 912,
  position: "50% 45%",
  credit: OWNER,
  alt: {
    en: "A painting of Ganesha inside rings of the mantra Om Gam Ganapataye Namah.",
    kn: "ಓಂ ಗಂ ಗಣಪತಯೇ ನಮಃ ಮಂತ್ರದ ವೃತ್ತಗಳ ನಡುವೆ ಗಣೇಶನ ಚಿತ್ರ.",
    hi: "ॐ गं गणपतये नमः मंत्र के वृत्तों के बीच गणेश का चित्र।",
  },
};

/** Gaṇeśa's face in brush strokes. */
export const GANESHA_BRUSH: DevataImage = {
  src: "/images/stutis/ganesha-brush-art.jpg",
  width: 417,
  height: 556,
  position: "50% 45%",
  credit: OWNER,
  alt: {
    en: "Ganesha's face in black brush strokes on yellow, with a red tilaka.",
    kn: "ಹಳದಿಯ ಮೇಲೆ ಕಪ್ಪು ಕುಂಚದ ಗೆರೆಗಳಲ್ಲಿ, ಕೆಂಪು ತಿಲಕದೊಂದಿಗೆ ಗಣೇಶನ ಮುಖ.",
    hi: "पीले पर काली कूची के स्ट्रोक में, लाल तिलक के साथ गणेश का मुख।",
  },
};
