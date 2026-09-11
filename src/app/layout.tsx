import type { Metadata, Viewport } from "next";
import {
  Inter_Tight,
  Instrument_Serif,
  Tiro_Devanagari_Sanskrit,
  Tiro_Kannada,
  Noto_Sans_Devanagari,
  Noto_Sans_Kannada,
} from "next/font/google";
import "./globals.css";
import "@/styles/chrome.css";
import "@/styles/pages.css";
import "@/styles/home.css";
import "@/styles/reader.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { getLocale } from "@/i18n/server";
import { LOCALE_META } from "@/i18n/config";

// The interface face: a tight grotesk that holds together at display
// sizes with negative tracking, and stays plain at body sizes.
const interTight = Inter_Tight({
  subsets: ["latin", "latin-ext"],
  variable: "--font-inter-tight",
  display: "swap",
});

// The turn in a headline, and verse translations: one italic serif.
const instrument = Instrument_Serif({
  subsets: ["latin", "latin-ext"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-instrument",
  display: "swap",
});

// The mūla. Tiro's Devanagari was drawn for Sanskrit — full conjunct
// coverage, Vedic marks — and its Latin carries every IAST diacritic,
// so the transliteration line is set in the same family.
const tiroSanskrit = Tiro_Devanagari_Sanskrit({
  subsets: ["devanagari", "latin", "latin-ext"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-tiro-sa",
  display: "swap",
});

// The same verses in Kannada script, for readers who chose Kannada.
const tiroKannada = Tiro_Kannada({
  subsets: ["kannada"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-tiro-kn",
  display: "swap",
  preload: false,
});

// Interface text in Hindi and Kannada. These sit behind Inter Tight in
// the sans stack and are only fetched when a page contains their glyphs.
const notoDeva = Noto_Sans_Devanagari({
  subsets: ["devanagari"],
  variable: "--font-noto-deva",
  display: "swap",
  preload: false,
});

const notoKannada = Noto_Sans_Kannada({
  subsets: ["kannada"],
  variable: "--font-noto-kn",
  display: "swap",
  preload: false,
});

export const metadata: Metadata = {
  title: { default: "Tat Tvam Asi", template: "%s | Tat Tvam Asi" },
  description:
    "A reference for Sanatana Dharma — Vedic texts, Upanishads, the Gita, bhashyas, temples and their history, practices and traditions, stotras and recitations.",
  keywords: [
    "Sanatana Dharma", "Advaita Vedanta", "Upanishads", "Vedas", "Bhagavad Gita",
    "Hindu temples", "Shankaracharya", "Sanskrit", "Mahavakyas", "bhashya", "stotra",
  ],
  openGraph: { siteName: "Tat Tvam Asi", type: "website", locale: "en_IN" },
};

export const viewport: Viewport = {
  themeColor: "#fbf6ea",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const locale = getLocale();
  const fonts = [interTight, instrument, tiroSanskrit, tiroKannada, notoDeva, notoKannada]
    .map((f) => f.variable)
    .join(" ");

  return (
    <html lang={LOCALE_META[locale].htmlLang} className={fonts}>
      <body>
        <Navbar />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
