import Link from "next/link";
import { getTranslations } from "@/i18n/server";
import { sectionsFor } from "@/i18n/sections";
import { nameScriptClass } from "@/i18n/config";
import { Mark, Rosette } from "@/components/brand/Mark";
import { Arrow } from "@/components/ui/Arrow";

export function Footer() {
  const { locale, t } = getTranslations();
  const sections = sectionsFor(locale);
  const year = new Date().getFullYear();
  const nameClass = nameScriptClass(locale);

  // Reference pages, kept apart from the pillars.
  const reference = [
    { href: "/concepts", label: t.navConcepts },
    { href: "/mathas", label: t.navMathas },
    { href: "/verses", label: t.navVerses },
    { href: "/search", label: t.navSearch },
    { href: "/about", label: t.navAbout },
  ];

  return (
    <footer className="footer">
      <Rosette id="footer" size={480} className="footer-yantra" />

      <div className="shell footer-top">
        <div>
          <Link href="/" className="lockup" aria-label={t.siteName}>
            <Mark size={40} />
            <span className={`lockup-text ${nameClass}`.trim()}>{t.siteName}</span>
          </Link>
          <p className="footer-tagline">{t.footerTagline}</p>
          <Link href="/upanishads" className="btn footer-cta">
            {t.ctaStartReading} <Arrow />
          </Link>
        </div>

        {/* Driven by the same SECTIONS list as the nav, so a new pillar
            appears here without touching this file. */}
        <nav aria-label={t.navIndex}>
          <div className="footer-heading">{t.navIndex}</div>
          {sections.map((s) => (
            <Link key={s.id} href={s.href} className="footer-link">
              {s.label}
            </Link>
          ))}
        </nav>

        <nav aria-label={t.navMore}>
          <div className="footer-heading">{t.navMore}</div>
          {reference.map((l) => (
            <Link key={l.href} href={l.href} className="footer-link">
              {l.label}
            </Link>
          ))}
        </nav>
      </div>

      <div className="shell">
        <span className={`footer-wordmark ${nameClass}`.trim()} aria-hidden="true">
          {t.siteName}
        </span>
      </div>

      <div className="shell footer-base">
        <span>
          © {year} Tat tvam asi · {t.footerRights}
        </span>
        <span>{t.heroTagline}</span>
      </div>
    </footer>
  );
}
