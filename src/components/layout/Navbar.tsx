import Link from "next/link";
import { getTranslations } from "@/i18n/server";
import { sectionsFor } from "@/i18n/sections";
import { nameScriptClass } from "@/i18n/config";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { SiteNav } from "./SiteNav";
import { MastheadLinks } from "./MastheadLinks";
import { Wordmark } from "@/components/brand/Mark";

/**
 * The floating masthead.
 *
 * The bar carries only the few destinations people reach for most; the
 * full list — which will keep growing — lives in the index overlay
 * behind the menu button, so the bar never has to decide what to drop.
 */
export function Navbar() {
  const { locale, t } = getTranslations();
  const sections = sectionsFor(locale);

  const primary = [
    { href: "/upanishads", label: t.navUpanishads },
    { href: "/gita", label: t.navGita },
    { href: "/temples", label: t.navTemples },
    { href: "/acharyas", label: t.navTeachers },
  ];

  // Reference material, kept out of the pillars so the index reads
  // as a table of contents rather than a sitemap.
  const secondary = [
    { href: "/concepts", label: t.navConcepts },
    { href: "/mathas", label: t.navMathas },
    { href: "/verses", label: t.navVerses },
    { href: "/search", label: t.navSearch },
    { href: "/about", label: t.navAbout },
  ];

  return (
    <header className="masthead">
      <div className="masthead-inner">
        <Link href="/" aria-label={t.siteName}>
          <Wordmark name={t.siteName} scriptClass={nameScriptClass(locale)} />
        </Link>

        <MastheadLinks links={primary} label={t.navIndex} />

        <div className="nav-actions">
          <Link href="/search" className="icon-btn" aria-label={t.navSearch}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="17" height="17" aria-hidden="true">
              <circle cx="11" cy="11" r="7" />
              <path d="M20 20l-3.5-3.5" strokeLinecap="round" />
            </svg>
          </Link>

          <LanguageSwitcher current={locale} label={t.chooseLanguage} />

          <Link href="/upanishads" className="btn masthead-cta">
            {t.ctaStartReading}
          </Link>

          <SiteNav
            sections={sections}
            secondary={secondary}
            siteName={t.siteName}
            nameClass={nameScriptClass(locale)}
            labels={{
              open: t.navOpenMenu,
              close: t.navCloseMenu,
              index: t.navIndex,
              more: t.navMore,
            }}
          />
        </div>
      </div>
    </header>
  );
}
