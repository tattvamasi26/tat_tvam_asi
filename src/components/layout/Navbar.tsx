import Link from "next/link";
import { getTranslations } from "@/i18n/server";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { MobileNav } from "./MobileNav";

export function Navbar() {
  const { locale, t } = getTranslations();

  const links = [
    { href: "/verses", label: t.navVerses },
    { href: "/upanishads", label: t.navUpanishads },
    { href: "/teachers", label: t.navTeachers },
    { href: "/temples", label: t.navTemples },
    { href: "/concepts", label: t.navConcepts },
    { href: "/mathas", label: t.navMathas },
  ];

  return (
    <header className="masthead">
      <div className="shell masthead-inner">
        <Link href="/" className="wordmark" aria-label="Tat Tvam Asi">
          तत् त्वम् असि
        </Link>

        <nav className="navlinks" aria-label="Primary">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="navlink">
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="nav-actions">
          <Link href="/search" className="navtoggle" aria-label={t.navSearch}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" width="17" height="17">
              <circle cx="11" cy="11" r="7" />
              <path d="M20 20l-3.5-3.5" strokeLinecap="round" />
            </svg>
          </Link>
          <LanguageSwitcher current={locale} label={t.chooseLanguage} />
          <MobileNav links={links} searchLabel={t.navSearch} aboutLabel={t.navAbout} />
        </div>
      </div>
    </header>
  );
}
