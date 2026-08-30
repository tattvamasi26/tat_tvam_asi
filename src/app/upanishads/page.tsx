import type { Metadata } from "next";
import { getTranslations } from "@/i18n/server";
import Link from "next/link";
import { getAllUpanishads, getReadableSlugs } from "@/lib/data";

export const metadata: Metadata = { title: "The Upanishads" };

export default function UpanishadsPage() {
  const { locale, t } = getTranslations();
  const texts = getAllUpanishads(locale);
  // Only texts entered verse-by-verse get a Read link; the rest
  // stay summary cards until their content exists.
  const readable = new Set(getReadableSlugs());

  return (
    <>
      <section className="pagehead">
        <div className="shell pagehead-inner">
          <p className="eyebrow">{t.navUpanishads}</p>
          <h1 className="title">{t.upanishadsTitle}</h1>
          <p className="lede">{t.upanishadsBlurb}</p>
        </div>
      </section>

      <section className="shell stack-lg" style={{ paddingTop: 0 }}>
        <div className="grid-cards">
          {texts.map((u) => (
            <article key={u.id} className="card">
              <div className="card-body">
                <p className="sanskrit" style={{ fontSize: "1.9rem" }}>{u.nameSanskrit}</p>
                <h2 className="card-title" style={{ marginTop: "0.35rem" }}>{u.name}</h2>
                <p className="translit">{u.nameIast}</p>

                <p className="card-text" style={{ marginTop: "0.85rem" }}>{u.summary}</p>

                <div style={{ marginTop: "1.1rem" }}>
                  <div className="fact-label">{t.labelKeyTeaching}</div>
                  <p className="lede" style={{ fontSize: "1rem", marginTop: "0.35rem" }}>
                    {u.keyTeaching}
                  </p>
                </div>

                {readable.has(u.slug) && (
                  <Link href={`/upanishads/${u.slug}`} className="btn" style={{ marginTop: "1.1rem" }}>
                    {t.readWork} →
                  </Link>
                )}

                <div className="card-foot">
                  <div className="chips">
                    {u.veda && <span className="chip">{u.veda}</span>}
                    {u.verseCount != null && (
                      <span className="chip chip-gold">
                        {u.verseCount} {t.labelVerseCount}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
