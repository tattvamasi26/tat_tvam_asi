import Link from "next/link";
import type { Metadata } from "next";
import { getTranslations } from "@/i18n/server";
import { sectionsFor } from "@/i18n/sections";
import { bhajanStrings } from "@/i18n/bhajans";
import { bhajanGroups, bhajanCount, composerCounts } from "@/lib/bhajans";
import { getBhajans } from "@/lib/data";
import { scriptClass } from "@/lib/script";

export const metadata: Metadata = {
  title: "Bhajans",
  description: "Kannada devotional songs — the padas of the Haridasas, arranged by devata.",
};

/**
 * The front door.
 *
 * Three things, in the order a reader needs them: what this corpus is
 * and what it lacks, the devatas the songs are addressed to, and the
 * Haridasas who signed them.
 *
 * The plain statement about the missing meanings comes first and is
 * not tucked away. 913 songs with no translation is a large claim to
 * make quietly, so the page makes it loudly instead.
 */
export default function BhajansPage() {
  const { locale, t } = getTranslations();
  const section = sectionsFor(locale).find((s) => s.id === "bhajans")!;
  const b = bhajanStrings(locale);
  const groups = bhajanGroups(locale);
  const composers = composerCounts(locale);
  const elsewhere = getBhajans(locale);
  const total = bhajanCount().toLocaleString("en-IN");

  const devatas = groups.filter((g) => g.kind === "devata");
  const others = groups.filter((g) => g.kind !== "devata");

  return (
    <>
      <section className="pagehead">
        <div className="shell pagehead-inner">
          <p className="eyebrow">{section.label}</p>
          <h1 className="title">{section.label}</h1>
          <p className="lede">{b.lede}</p>
        </div>
      </section>

      <section className="shell stack-lg" style={{ paddingTop: 0 }}>
        {/* What is here, and what is not. */}
        <div className="bh-standing">
          <p className="fact-label">{b.noMeaningTitle}</p>
          <p className="bh-standing-count">{b.corpusNote(total)}</p>
          <p className="bh-standing-text">{b.noMeaning}</p>
          <p className="bh-standing-source">{b.fromSource}</p>
        </div>

        <h2 className="stutis-h2">{b.byDevata}</h2>
        <ul className="bh-groups">
          {devatas.map((g) => (
            <li key={g.id}>
              <Link href={`/bhajans/${g.id}`} className="bh-group">
                <span className="bh-group-name">{g.name}</span>
                <span className="bh-group-count">{g.count.toLocaleString("en-IN")}</span>
              </Link>
            </li>
          ))}
        </ul>

        {others.length > 0 && (
          <ul className="bh-groups bh-groups-quiet">
            {others.map((g) => (
              <li key={g.id}>
                <Link href={`/bhajans/${g.id}`} className="bh-group" data-kind={g.kind}>
                  <span className="bh-group-name">{g.name}</span>
                  <span className="bh-group-count">{g.count.toLocaleString("en-IN")}</span>
                </Link>
              </li>
            ))}
          </ul>
        )}

        {/* The Haridasas. A song is filed under its devata, but it is
            signed by its composer, and the signature is inside the
            text — so this is the one attribution here that a reader
            can check for themselves. */}
        <h2 className="stutis-h2">{b.byComposer}</h2>
        <ul className="bh-dasas">
          {composers.map((c) => (
            <li key={c.id} className="bh-dasa">
              <span className="bh-dasa-name">{c.name}</span>
              <span className="bh-dasa-when">{c.when}</span>
              <span className={`bh-dasa-ankita kannada`} lang="kn">
                {c.ankita}
              </span>
              <span className="bh-dasa-count">
                {c.count.toLocaleString("en-IN")} {c.count === 1 ? b.songsOne : b.songsMany}
              </span>
            </li>
          ))}
        </ul>

        {/* The four bhajans that were here before this corpus arrived.
            They are not Kannada and not Haridasa, so they keep their
            own place rather than being folded in. */}
        {elsewhere.length > 0 && (
          <>
            <h2 className="stutis-h2">{b.alsoSung}</h2>
            <p className="bh-note">{b.alsoSungNote}</p>
            <ul className="bh-elsewhere">
              {elsewhere.map((x) => (
                <li key={x.id} className="bh-elsewhere-row">
                  <span className="bh-elsewhere-name">{x.name}</span>
                  <span className={`bh-elsewhere-sanskrit ${scriptClass(locale)}`}>{x.nameSanskrit}</span>
                  <span className="bh-elsewhere-summary">{x.summary}</span>
                </li>
              ))}
            </ul>
          </>
        )}
      </section>
    </>
  );
}
