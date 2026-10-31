import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getTranslations } from "@/i18n/server";
import { DEVATAS, devata as devataById, plain, suktasFor } from "@/lib/rigveda";
import { scriptFor, scriptClass } from "@/lib/script";

/**
 * Every hymn addressed to one devata, mandala by mandala.
 *
 * This is the axis that lets someone ask for the Agni hymns without
 * knowing a number. A hymn appears here when its FIRST verse addresses
 * this devata; hymns that turn to it later are not listed, because
 * every hymn has exactly one home and the counts have to keep adding
 * up to 1,028.
 */

export function generateStaticParams() {
  return DEVATAS.map((d) => ({ devata: d.id }));
}

export function generateMetadata({ params }: { params: { devata: string } }): Metadata {
  const d = devataById(params.devata);
  return d ? { title: `Rigveda — ${d.iast}` } : {};
}

export default function DevataPage({ params }: { params: { devata: string } }) {
  const { locale, t } = getTranslations();
  const d = devataById(params.devata);
  if (!d) notFound();

  const hymns = suktasFor(d.id);
  if (hymns.length === 0) notFound();

  const sc = scriptClass(locale);

  const byMandala = new Map<number, typeof hymns>();
  for (const s of hymns) {
    if (!byMandala.has(s.mandala)) byMandala.set(s.mandala, []);
    byMandala.get(s.mandala)!.push(s);
  }

  return (
    <>
      <section className="pagehead">
        <div className="shell pagehead-inner">
          <span className={`${sc} pagehead-glyph`} aria-hidden="true">
            {scriptFor(d.sa.slice(0, 1), locale)}
          </span>
          <Link href="/vedas/rigveda" className="reader-kicker">
            <span className={sc}>{scriptFor("ऋग्वेदः", locale)}</span>
          </Link>
          <h1 className={`title ${sc}`}>{scriptFor(d.sa, locale)}</h1>
          {locale === "en" && <p className="translit">{d.iast}</p>}
          <p className="lede">{d.en}</p>
          <div className="reader-facts">
            <span>
              <i>{t.rvSuktas}</i>
              <span className="rv-fact rv-count-n">{hymns.length.toLocaleString("en-IN")}</span>
            </span>
            <span>
              <i>{t.rvVerses}</i>
              <span className="rv-fact rv-count-n">
                {hymns.reduce((n, s) => n + s.verses, 0).toLocaleString("en-IN")}
              </span>
            </span>
          </div>
        </div>
      </section>

      <section className="shell stack-lg" style={{ paddingTop: 0 }}>
        {[...byMandala.entries()].map(([mandala, list]) => (
          <div key={mandala} className="rv-group">
            <div className="rv-group-head">
              <Link href={`/vedas/rigveda/${mandala}`} className="rv-group-name">
                {t.rvMandala} {mandala.toLocaleString("en-IN")}
              </Link>
              <span className="rv-group-n">
                {list.length.toLocaleString("en-IN")} {t.rvSuktas}
              </span>
            </div>

            <ol className="rv-list">
              {list.map((s) => (
                <li key={s.ref}>
                  <Link href={`/vedas/rigveda/${s.mandala}/${s.sukta}`} className="rv-row">
                    <span className="rv-row-num">
                      {s.mandala.toLocaleString("en-IN")}.{s.sukta.toLocaleString("en-IN")}
                    </span>
                    <span className="rv-row-body">
                      {s.mixed && (
                        <span className={`rv-row-sa ${sc}`}>{scriptFor(plain(s.devata), locale)}</span>
                      )}
                      <span className="rv-row-meta">
                        <span className={sc}>{scriptFor(plain(s.rishi), locale)}</span>
                        {s.metre && (
                          <>
                            {" · "}
                            <span className={sc}>{scriptFor(plain(s.metre), locale)}</span>
                          </>
                        )}
                      </span>
                    </span>
                    <span className="rv-row-verses">
                      {s.verses.toLocaleString("en-IN")} {t.rvVerses}
                    </span>
                  </Link>
                </li>
              ))}
            </ol>
          </div>
        ))}
      </section>
    </>
  );
}
