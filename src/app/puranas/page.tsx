import Link from "next/link";
import type { Metadata } from "next";
import { getTranslations } from "@/i18n/server";
import { puranaStrings } from "@/i18n/puranas";
import { getPuranas, getPuranasByGuna, getTraditionalVerseTotal } from "@/lib/data";
import { scriptClass } from "@/lib/script";
import { Arrow } from "@/components/ui/Arrow";

export const metadata: Metadata = {
  title: "The Puranas",
  description:
    "Eighteen Mahapuranas — what each one is, what is in it, and what came out of it into practice.",
};

/**
 * The eighteen, in the order the lists give them.
 *
 * Order first and grading second, deliberately. The famous three-way
 * sort into sāttvika, rājasa and tāmasa is quoted everywhere, and it
 * comes from inside the Padma Purāṇa — a Vaiṣṇava text that puts the
 * Vaiṣṇava Purāṇas top and the Śaiva ones bottom. Leading with it
 * would be repeating a partisan ranking as though it were a neutral
 * classification, so it sits below the list with its provenance
 * attached.
 *
 * The verse counts are printed because the tradition gives them and
 * because the scale is the point — four hundred thousand verses, of
 * which Skanda alone claims a fifth. They are labelled as figures
 * rather than counts.
 */
export default function PuranasPage() {
  const { locale } = getTranslations();
  const s = puranaStrings(locale);
  const puranas = getPuranas(locale);
  const graded = getPuranasByGuna(locale);
  const sc = scriptClass(locale);

  const gunaLabel: Record<string, string> = {
    sattvika: s.gunaSattvika,
    rajasa: s.gunaRajasa,
    tamasa: s.gunaTamasa,
  };

  return (
    <>
      <section className="pagehead">
        <div className="shell pagehead-inner">
          <p className="eyebrow">
            {s.count(
              puranas.length.toLocaleString("en-IN"),
              getTraditionalVerseTotal().toLocaleString("en-IN"),
            )}
          </p>
          <h1 className="title">{s.title}</h1>
          <p className="lede">{s.lede}</p>
        </div>
      </section>

      <section className="shell stack-lg" style={{ paddingTop: 0 }}>
        <div className="pu-standing">
          <p className="pu-standing-text">{s.standing}</p>
        </div>

        <ol className="pu-grid">
          {puranas.map((p) => (
            <li key={p.slug}>
              <Link href={`/puranas/${p.slug}`} className="pu-card">
                <span className="pu-n">{p.order.toLocaleString("en-IN")}</span>
                <span className="pu-body">
                  <span className="pu-name">{p.name}</span>
                  <span className={`pu-sanskrit ${sc}`}>{p.sanskrit}</span>
                  <span className="pu-lede">{p.lede}</span>
                  <span className="pu-meta">
                    <span className="pu-deity">{p.deity}</span>
                    {/* A figure the tradition gives, not a count. The
                        note under the list says so. */}
                    <span className="pu-verses">
                      {s.verseUnit(p.verses.toLocaleString("en-IN"))}
                    </span>
                  </span>
                </span>
                <span className="pu-more">
                  {s.read} <Arrow />
                </span>
              </Link>
            </li>
          ))}
        </ol>

        <p className="pu-note">{s.verseNote}</p>
      </section>

      {/* The grading, with its provenance attached. */}
      <section className="pu-guna" aria-labelledby="pu-guna">
        <div className="shell pu-guna-inner">
          <h2 className="pu-guna-title" id="pu-guna">
            {`${s.gunaSattvika} · ${s.gunaRajasa} · ${s.gunaTamasa}`}
          </h2>
          <p className="pu-guna-note">{s.gunaNote}</p>

          <div className="pu-guna-cols">
            {graded.map((g) => (
              <div key={g.guna} className="pu-guna-col" data-guna={g.guna}>
                <h3 className="pu-guna-head">{gunaLabel[g.guna]}</h3>
                <ul className="pu-guna-list">
                  {g.puranas.map((p) => (
                    <li key={p.slug}>
                      <Link href={`/puranas/${p.slug}`}>{p.name}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
