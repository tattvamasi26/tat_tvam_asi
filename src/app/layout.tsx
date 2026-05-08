import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: { default: "Tat Tvam Asi", template: "%s | Tat Tvam Asi" },
  description: "A sanctuary for Advaita Vedanta — Upanishads, sacred verses, Acharyas, temples, and the eternal wisdom of Sanatana Dharma.",
  keywords: ["Advaita Vedanta","Upanishads","Vedas","Hindu temples","Shankaracharya","Sanskrit","Mahavakyas"],
  openGraph: {
    siteName: "Tat Tvam Asi",
    type: "website",
    locale: "en_IN",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${cormorant.variable} ${dmSans.variable}`}>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
