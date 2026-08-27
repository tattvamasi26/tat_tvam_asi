import Link from "next/link";
import { getTranslations } from "@/i18n/server";
import { sectionsFor } from "@/i18n/sections";
import { nameScriptClass } from "@/i18n/config";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { SiteNav } from "./SiteNav";
import { Wordmark } from "@/components/brand/Mark";

export function Navbar() {
  const { locale, t } = getTranslations();
  const sections = sectionsFor(locale);

  // Reference material, kept out of the seven pillars so the index reads
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
      <div className="shell masthead-inner">
        <Link href="/" aria-label={t.siteName}>
          <Wordmark name={t.siteName} scriptClass={nameScriptClass(locale)} />
        </Link>

        <div className="nav-actions">
          <Link href="/search" className="icon-btn" aria-label={t.navSearch}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" width="17" height="17">
              <circle cx="11" cy="11" r="7" />
              <path d="M20 20l-3.5-3.5" strokeLinecap="round" />
            </svg>
          </Link>

          <LanguageSwitcher current={locale} label={t.chooseLanguage} />

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
