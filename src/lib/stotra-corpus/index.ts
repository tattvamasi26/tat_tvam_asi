/**
 * The stotra collection: stotras taken from a printed edition and
 * checked against its pages, built by scripts/stotras/build.mjs.
 *
 * The hand-entered stotras (seed/stotras/) are written verse by verse
 * with a translation in three languages. These are the other kind: the
 * Sanskrit alone, as printed, every disputed syllable settled on the
 * scan of the page and the decision recorded in checked/. Their
 * translation has not been written, and the pages say so.
 *
 * Load one devata, never all: SPINE is small and imported directly;
 * textsOf(devata) loads a single file under data/texts/.
 *
 * docs/STOTRAS.md has the sources, the checking method and the record
 * of what was decided.
 */
import type { Locale } from "@/i18n/config";
import spineJson from "./data/spine.json";

/** A place where the text shown differs from the Wikisource transcription. */
export interface CorpusCorrection {
  verse: string;
  from: string;
  to: string;
  /** The printed page it was read on. */
  page: number;
  /** "transcription": the transcriber misread the print. "misprint": the book itself is wrong. */
  kind: "transcription" | "misprint";
}

/** A place where the book reads differently from the witness, and the book's reading is kept. */
export interface CorpusVariant {
  verse: string;
  /**
   * "reading": the book reads differently here. "absent": the witness
   * lacks this verse. "order": the witness has it in another place.
   * "extra": the witness adds text the book does not print.
   */
  kind: "reading" | "absent" | "order" | "extra";
  /** The book's reading, or null where the whole verse is the book's alone. */
  reading: string | null;
  /** What the witness has instead, or null where it has nothing. */
  witness: string | null;
  /** Text the witness adds that the book does not print at all. */
  extra: string | null;
  page: number;
}

export interface CorpusStotra {
  slug: string;
  devata: string;
  /** The book's heading, Devanagari. */
  title: string;
  /** Its name in English, as readers search for it. */
  name: string;
  /** A key into COMPOSERS. */
  composer: string | null;
  verseCount: number;
  edition: {
    book: keyof typeof EDITIONS;
    printedPages: number[];
    scans: { page: number; revid: number; wikisource: string }[];
  };
  /** The independent transcription the edition was checked against. */
  witness: string;
  checkedOn: string;
  /** The book abbreviates a repeated refrain; it is written out here. */
  refrainExpanded: boolean;
  corrections: CorpusCorrection[];
  variants: CorpusVariant[];
}

export interface CorpusVerse {
  /** The verse number to show: its place in the stotra. */
  n: string;
  lines: string[];
}

export const SPINE = spineJson as CorpusStotra[];

/** The printed editions the collection draws on. */
export const EDITIONS = {
  "bsr-1": {
    title: {
      en: "Bṛhat Stotra Ratnākara, vol. 1",
      kn: "ಬೃಹತ್ ಸ್ತೋತ್ರ ರತ್ನಾಕರ, ಸಂಪುಟ 1",
      hi: "बृहत् स्तोत्र रत्नाकर, खंड 1",
    },
    titleSa: "बृहत्स्तोत्ररत्नाकरः (प्रथमः भागः)",
    detail: {
      en: "ed. Rāmasvāmī Śāstrī, Vavilla Press, Madras, 1953",
      kn: "ಸಂ. ರಾಮಸ್ವಾಮಿ ಶಾಸ್ತ್ರೀ, ವಾವಿಳ್ಳ ಮುದ್ರಣಾಲಯ, ಮದ್ರಾಸ್, 1953",
      hi: "सं. रामस्वामी शास्त्री, वाविल्ला मुद्रणालय, मद्रास, 1953",
    },
    /** The scans and their page-by-page transcription. */
    index: "https://sa.wikisource.org/wiki/%E0%A4%85%E0%A4%A8%E0%A5%81%E0%A4%95%E0%A5%8D%E0%A4%B0%E0%A4%AE%E0%A4%A3%E0%A4%BF%E0%A4%95%E0%A4%BE:%E0%A4%AC%E0%A5%83%E0%A4%B9%E0%A4%A4%E0%A5%8D%E0%A4%B8%E0%A5%8D%E0%A4%A4%E0%A5%8B%E0%A4%A4%E0%A5%8D%E0%A4%B0%E0%A4%B0%E0%A4%A4%E0%A5%8D%E0%A4%A8%E0%A4%BE%E0%A4%95%E0%A4%B0%E0%A4%83_(%E0%A4%AA%E0%A5%8D%E0%A4%B0%E0%A4%A5%E0%A4%AE%E0%A4%83_%E0%A4%AD%E0%A4%BE%E0%A4%97%E0%A4%83).pdf",
  },
} as const;

/**
 * Who the book's colophon names. A stotra of Śaṅkara's is
 * "traditionally attributed", never "by" (docs/SHANKARA.md).
 */
export const COMPOSERS: Record<string, Record<Locale, string>> = {
  shankara: {
    en: "Traditionally attributed to Adi Shankaracharya",
    kn: "ಸಂಪ್ರದಾಯದಂತೆ ಆದಿ ಶಂಕರಾಚಾರ್ಯರ ಕೃತಿ",
    hi: "परंपरा से आदि शंकराचार्य की रचना मानी जाती है",
  },
  vasishtha: {
    en: "Traditionally attributed to the sage Vasishtha",
    kn: "ಸಂಪ್ರದಾಯದಂತೆ ವಸಿಷ್ಠ ಮಹರ್ಷಿಗಳ ಕೃತಿ",
    hi: "परंपरा से महर्षि वसिष्ठ की रचना मानी जाती है",
  },
  brahmananda: {
    en: "Composed by Paramahamsa Svami Brahmananda, as the book records",
    kn: "ಪರಮಹಂಸ ಸ್ವಾಮಿ ಬ್ರಹ್ಮಾನಂದರ ಕೃತಿ ಎಂದು ಪುಸ್ತಕ ದಾಖಲಿಸುತ್ತದೆ",
    hi: "पुस्तक के अनुसार परमहंस स्वामी ब्रह्मानंद की रचना",
  },
  ravana: {
    en: "Traditionally attributed to Ravana",
    kn: "ಸಂಪ್ರದಾಯದಂತೆ ರಾವಣನ ಕೃತಿ",
    hi: "परंपरा से रावण की रचना मानी जाती है",
  },
};

export function corpusStotra(slug: string): CorpusStotra | undefined {
  return SPINE.find((s) => s.slug === slug);
}

/** A devata's stotras from the collection, in the book's order. */
export function corpusStotrasOf(devata: string): CorpusStotra[] {
  return SPINE.filter((s) => s.devata === devata).sort(
    (a, b) => a.edition.printedPages[0] - b.edition.printedPages[0],
  );
}

/** One stotra's verses. Loads only its devata's file. */
export async function corpusVerses(s: CorpusStotra): Promise<CorpusVerse[]> {
  const texts = (await import(`./data/texts/${s.devata}.json`)).default as Record<string, CorpusVerse[]>;
  return texts[s.slug] ?? [];
}

/** The Wikisource page for one scan, where its transcription and image are. */
export function scanUrl(wikisource: string): string {
  return `https://sa.wikisource.org/wiki/${encodeURIComponent(wikisource.replace(/ /g, "_"))}`;
}
