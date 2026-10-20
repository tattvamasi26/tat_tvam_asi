import Link from "next/link";
import { getTranslations } from "@/i18n/server";
import { topLevelSectionsFor } from "@/i18n/sections";
import { nameScriptClass } from "@/i18n/config";
import { Mark, Rosette } from "@/components/brand/Mark";
import { Arrow } from "@/components/ui/Arrow";
import { rightsStrings } from "@/i18n/rights";
import { TRAP_PATH } from "@/lib/security/bots";
import { CopyAttribution } from "@/components/security/CopyAttribution";

export function Footer() {
  const { locale, t } = getTranslations();
  const sections = topLevelSectionsFor(locale);
  const year = new Date().getFullYear();
  const nameClass = nameScriptClass(locale);
  const rights = rightsStrings(locale);

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
          © {year} Tat tvam asi · {t.footerRights} ·{" "}
          <Link href="/rights" className="footer-base-link">
            {rights.footerLink}
          </Link>
        </span>
        <span>{t.heroTagline}</span>
      </div>
      {/* The trap (lib/security/bots.ts). Hidden from people and from
          assistive technology, disallowed in robots.txt, and a plain
          <a> so the router never prefetches it: only a copier that
          harvests every href and ignores robots.txt ever requests it. */}
      <a href={TRAP_PATH} rel="nofollow" tabIndex={-1} aria-hidden="true" hidden lang="en">
        Archive index
      </a>
      <CopyAttribution sourceLabel={rights.copySource} termsLabel={rights.copyTerms} />
    </footer>
  );
}
