import Link from "next/link";
import type { Metadata } from "next";
import { getTranslations } from "@/i18n/server";
import { getAllVerses } from "@/lib/data";

export const metadata: Metadata = { title: "Sacred Verses" };

export default function VersesPage() {
  const { locale, t } = getTranslations();
  const verses = getAllVerses(locale);

  return (
    <>
      <section className="pagehead">
        <div className="shell pagehead-inner">
          <p className="eyebrow">{t.navVerses}</p>
          <h1 className="title">{t.versesTitle}</h1>
          <p className="lede">{t.versesBlurb}</p>
        </div>
      </section>

      <section className="shell stack-lg" style={{ paddingTop: 0 }}>
        <div style={{ display: "grid", gap: "1.25rem" }}>
          {verses.map((v) => (
            <Link
              key={v.id}
              href={`/verses/${v.id}`}
              className={`verse${v.isMahavakya ? " verse-mahavakya" : ""}`}
              style={{ display: "block" }}
            >
              {v.isMahavakya && (
                <span className="chip chip-gold" style={{ marginBottom: "1rem" }}>
                  {t.labelMahavakya}
                </span>
              )}
              <p className="sanskrit">{v.sanskrit}</p>
              <p className="translit" style={{ marginTop: "0.5rem", fontSize: "1.02rem" }}>
                {v.transliteration}
              </p>
              <p className="prose" style={{ marginTop: "1.15rem" }}>{v.translation}</p>
              <div className="card-foot">
                <span className="meta">
                  {v.source} · {v.locator}
                </span>
                <span className="btn-ghost">{t.readMore} →</span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
