import Link from "next/link";
import { getTranslations } from "@/i18n/server";
import { sectionsFor } from "@/i18n/sections";
import { nameScriptClass } from "@/i18n/config";
import { Mark } from "@/components/brand/Mark";

export function Footer() {
  const { locale, t } = getTranslations();
  const sections = sectionsFor(locale);
  const year = new Date().getFullYear();

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
      <div className="shell footer-grid">
        <div>
          <Link href="/" className="lockup" aria-label={t.siteName}>
            <Mark size={34} />
            <span
              className={`lockup-text ${nameScriptClass(locale)}`.trim()}
              style={{ fontSize: "1.25rem" }}
            >
              {t.siteName}
            </span>
          </Link>
          <p className="card-text" style={{ maxWidth: "38ch", marginTop: "1rem" }}>
            {t.footerTagline}
          </p>
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

      <div className="shell" style={{ marginTop: "2.5rem" }}>
        <hr className="rule" />
        <p className="meta" style={{ marginTop: "1.25rem" }}>
          © {year} Tat Tvam Asi · {t.footerRights}
        </p>
      </div>
    </footer>
  );
}
