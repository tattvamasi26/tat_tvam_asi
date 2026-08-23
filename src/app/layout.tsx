import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans, Noto_Serif_Devanagari, Noto_Sans_Kannada } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { getLocale } from "@/i18n/server";
import { LOCALE_META } from "@/i18n/config";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-dm-sans",
  display: "swap",
});

// Sanskrit and Hindi both render in Devanagari; Kannada needs its own face.
// Without these, either script falls back to a system font and the page
// loses its typographic coherence the moment the language is switched.
const devanagari = Noto_Serif_Devanagari({
  subsets: ["devanagari"],
  weight: ["400", "500", "600"],
  variable: "--font-deva",
  display: "swap",
});

const kannada = Noto_Sans_Kannada({
  subsets: ["kannada"],
  weight: ["400", "500", "600"],
  variable: "--font-kannada",
  display: "swap",
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

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const locale = getLocale();

  return (
    <html
      lang={LOCALE_META[locale].htmlLang}
      className={`${cormorant.variable} ${dmSans.variable} ${devanagari.variable} ${kannada.variable}`}
    >
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
