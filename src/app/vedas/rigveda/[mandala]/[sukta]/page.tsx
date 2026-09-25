import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getTranslations } from "@/i18n/server";
import { MANDALA_COUNT, devata as devataById, neighbours, plain, sukta as suktaSpine, verses as suktaVerses } from "@/lib/rigveda";
import { scriptFor, scriptClass } from "@/lib/script";
import { LanguageChoice } from "@/components/content/LanguageChoice";
import { Caution } from "@/components/ui/Caution";
import { Arrow } from "@/components/ui/Arrow";

/**
 * One sukta — the destination.
 *
 * A sukta is one continuous hymn and reads as one, so it is set the
 * way the stotras are set: the whole text in a single column on one
 * card, each verse numbered, in the reader's script. Two-thirds of the
 * collection is shorter than the Ganapati Atharvashirsha already on
 * this site, so nothing needs paginating.
 *
 * What is NOT here is a translation, because none exists yet. The page
 * says so where the reader is actually reading, rather than leaving a
 * complete-looking hymn to imply otherwise.
 *
 * There is deliberately no generateStaticParams: 1,028 prerendered
 * routes would cost more build time than they are worth on a page that
 * renders dynamically anyway, the locale being a cookie.
 */

const DEVA_DIGITS = "०१२३४५६७८९";
const toDeva = (n: number) =>
  String(n)
    .split("")
    .map((d) => DEVA_DIGITS[Number(d)])
    .join("");

export function generateMetadata({ params }: { params: { mandala: string; sukta: string } }): Metadata {
  return { title: `Rigveda ${params.mandala}.${params.sukta}` };
}

export default async function SuktaPage({ params }: { params: { mandala: string; sukta: string } }) {
  const { locale, t } = getTranslations();

  if (!/^\d+$/.test(params.mandala) || !/^\d+$/.test(params.sukta)) notFound();
  const m = Number(params.mandala);
  const n = Number(params.sukta);
  if (m < 1 || m > MANDALA_COUNT) notFound();

  const s = suktaSpine(`${m}.${n}`);
  if (!s) notFound();
  const lines = await suktaVerses(m, n);
  if (!lines) notFound();

  const d = devataById(s.devataId);
  const { previous, next } = neighbours(s.ref);
  const sc = scriptClass(locale);

  const samhitaPage = m <= 5 ? "ऋग्वेदः/संहिता/सस्वरपाठः/१-५" : "ऋग्वेदः/संहिता/सस्वरपाठः/६-१०";
  const suktaPage = `ऋग्वेदः सूक्तं ${toDeva(m)}.${toDeva(n)}`;
  const wiki = (title: string) => `https://sa.wikisource.org/wiki/${encodeURIComponent(title.replace(/ /g, "_"))}`;

  return (
    <div className="reader stotra-page">
      <header className="reader-head shell">
        <Link href={`/vedas/rigveda/${m}`} className="reader-kicker">
          <span className={sc}>{scriptFor("ऋग्वेदः", locale)}</span> · {t.rvMandala} {m.toLocaleString("en-IN")}
        </Link>

        <h1 className={`reader-title stotra-title ${sc}`}>{d ? scriptFor(d.sa, locale) : scriptFor(s.devata, locale)}</h1>
        <p className="reader-name">{`${m.toLocaleString("en-IN")}.${n.toLocaleString("en-IN")}`}</p>
        {locale === "en" && d && <p className="reader-lede">{d.en}</p>}

        <div className="reader-facts">
          <span>
            <i>{t.rvRishi}</i>
            <span className={`rv-fact ${sc}`}>{scriptFor(plain(s.rishi), locale)}</span>
          </span>
          <span>
            <i>{t.rvMetre}</i>
            <span className={`rv-fact ${sc}`}>{scriptFor(plain(s.metre), locale)}</span>
          </span>
          <span>
            <i>{t.rvVerses}</i>
            <span className="rv-fact rv-count-n">{s.verses}</span>
          </span>
        </div>

        <LanguageChoice current={locale} label={t.chooseLanguage} />

        {/* Decision 2 (docs/RIGVEDA-DESIGN.md §6): an untranslated sukta
            says so on its own page. */}
        <p className="reader-partial">
          <Caution /> <strong>{t.rvTextCompleteTitle}</strong> {t.rvTextCompleteBody}
        </p>
      </header>

      <section className="shell">
        <div className="stotra-text">
          <ol className="stotra-verses">
            {lines.map((v) => (
              <li key={v.n} id={`v${v.n}`} className="stotra-verse">
                <span className="stotra-verse-num">{v.n.toLocaleString("en-IN")}</span>
                <div className="stotra-verse-body">
                  <div className={`stotra-verse-mula ${sc}`}>
                    {v.lines.map((line, i) => (
                      <p key={i}>{scriptFor(line, locale)}</p>
                    ))}
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </div>

        {/* Filing a hymn under the devata of its first verse conceals
            nothing: where the Anukramani names others, it is printed. */}
        {(s.mixed || s.readByHand) && (
          <dl className="rv-attribution">
            {s.mixed && (
              <>
                <dt>{t.rvFullAttribution}</dt>
                <dd className={`rv-sa ${sc}`}>{scriptFor(plain(s.devata), locale)}</dd>
              </>
            )}
            {s.readByHand &&
              Object.entries(s.readByHand).map(([field, witness]) => (
                <div key={field}>
                  <dt>
                    {t.rvReadByHand} — {field === "devata" ? t.rvDevata : field === "rishi" ? t.rvRishi : t.rvMetre}
                  </dt>
                  <dd>
                    <span className={`rv-witness ${sc}`}>{witness}</span>
                  </dd>
                </div>
              ))}
          </dl>
        )}

        <div className="rv-sources">
          <h2>{t.rvSourcesTitle}</h2>
          <ul>
            <li>
              <a href={wiki(samhitaPage)} target="_blank" rel="noopener noreferrer">
                sa.wikisource — {samhitaPage}
              </a>{" "}
              · CC BY-SA 4.0
            </li>
            <li>
              <a href={wiki(suktaPage)} target="_blank" rel="noopener noreferrer">
                sa.wikisource — {suktaPage}
              </a>{" "}
              · CC BY-SA 4.0
            </li>
          </ul>
        </div>

        <nav className="stotra-pager">
          {previous ? (
            <Link href={`/vedas/rigveda/${previous.mandala}/${previous.sukta}`} className="pager-link" data-dir="prev">
              <span className="pager-label">
                <Arrow dir="left" /> {t.labelPrevious}
              </span>
              <span className="pager-name">{`${previous.mandala}.${previous.sukta}`}</span>
            </Link>
          ) : (
            <span />
          )}
          {next && (
            <Link href={`/vedas/rigveda/${next.mandala}/${next.sukta}`} className="pager-link">
              <span className="pager-label">
                {t.labelNext} <Arrow />
              </span>
              <span className="pager-name">{`${next.mandala}.${next.sukta}`}</span>
            </Link>
          )}
        </nav>
      </section>
    </div>
  );
}
