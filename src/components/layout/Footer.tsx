import Link from "next/link";
import { getTranslations } from "@/i18n/server";

export function Footer() {
  const { t } = getTranslations();
  const year = new Date().getFullYear();

  const explore = [
    { href: "/verses", label: t.navVerses },
    { href: "/upanishads", label: t.navUpanishads },
    { href: "/teachers", label: t.navTeachers },
    { href: "/temples", label: t.navTemples },
  ];

  const more = [
    { href: "/concepts", label: t.navConcepts },
    { href: "/mathas", label: t.navMathas },
    { href: "/search", label: t.navSearch },
    { href: "/about", label: t.navAbout },
  ];

  return (
    <footer className="footer">
      <div className="shell footer-grid">
        <div>
          <div className="wordmark" style={{ fontSize: "1.35rem", marginBottom: "0.85rem" }}>
            तत् त्वम् असि
          </div>
          <p className="card-text" style={{ maxWidth: "38ch" }}>
            {t.footerTagline}
          </p>
        </div>

        <nav aria-label={t.footerExplore}>
          <div className="footer-heading">{t.footerExplore}</div>
          {explore.map((l) => (
            <Link key={l.href} href={l.href} className="footer-link">
              {l.label}
            </Link>
          ))}
        </nav>

        <nav aria-label={t.footerAbout}>
          <div className="footer-heading">{t.footerAbout}</div>
          {more.map((l) => (
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
