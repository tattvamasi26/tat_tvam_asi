import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { getTranslations } from "@/i18n/server";
import { sectionsFor } from "@/i18n/sections";
import { bhajanStrings } from "@/i18n/bhajans";
import { bhajanGroups, bhajanCount, composerCounts } from "@/lib/bhajans";
import { bhajanGroup } from "@/lib/bhajans/groups";
import { groupImage } from "@/lib/bhajans/images";
import { getBhajans } from "@/lib/data";
import { scriptClass } from "@/lib/script";

export const metadata: Metadata = {
  title: "Bhajans",
  description: "Kannada devotional songs — the padas of the Haridasas, arranged by devata.",
};

/** A heading with a hairline running out to the count. */
function Head({ title, count }: { title: string; count?: string }) {
  return (
    <div className="bh-head">
      <h2>{title}</h2>
      <span className="bh-head-rule" aria-hidden="true" />
      {count && <span className="bh-head-count">{count}</span>}
    </div>
  );
}

/**
 * The front door.
 *
 * What this corpus is and what it lacks, then the gods the songs are
 * sung to, then the men who wrote them. The devata cards carry the
 * page: a reader who knows nothing about Haridasa poetry still knows
 * what Krishna and Ganesha are, and can start there.
 */
export default function BhajansPage() {
  const { locale } = getTranslations();
  const section = sectionsFor(locale).find((s) => s.id === "bhajans")!;
  const b = bhajanStrings(locale);
  const groups = bhajanGroups(locale);
  const composers = composerCounts(locale);
  const elsewhere = getBhajans(locale);
  const total = bhajanCount().toLocaleString("en-IN");

  const devatas = groups.filter((g) => g.kind === "devata");
  const others = groups.filter((g) => g.kind !== "devata");

  const card = (g: (typeof groups)[number]) => {
    const pic = groupImage(g.id);
    const local = bhajanGroup(g.id)!.name.kn;
    return (
      <li key={g.id}>
        <Link href={`/bhajans/${g.id}`} className="bh-card" data-kind={g.kind}>
          <div className="bh-card-frame">
            {pic ? (
              <Image
                src={pic.src}
                alt={pic.alt[locale]}
                fill
                sizes="(max-width: 700px) 50vw, 210px"
                style={{ objectFit: "cover", objectPosition: pic.position }}
              />
            ) : (
              /* No picture is a designed state, not an empty frame:
                 the name stands in its place, as it does for a temple
                 with no free photograph. */
              <p className="bh-plate kannada" lang="kn">
                {local}
              </p>
            )}
          </div>
          <div className="bh-card-body">
            <p className="bh-card-name">{g.name}</p>
            {locale !== "kn" && (
              <span className="bh-card-local kannada" lang="kn">
                {local}
              </span>
            )}
            <span className="bh-card-count">
              {g.count.toLocaleString("en-IN")} {g.count === 1 ? b.songsOne : b.songsMany}
            </span>
          </div>
        </Link>
      </li>
    );
  };

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
        <div className="bh-standing">
          <p className="bh-standing-count">{b.corpusNote(total)}</p>
          <p className="bh-standing-text">{b.noMeaning}</p>
          <p className="bh-standing-source">{b.fromSource}</p>
        </div>

        <Head title={b.byDevata} count={`${devatas.length}`} />
        <ul className="bh-grid">{devatas.map(card)}</ul>

        {others.length > 0 && <ul className="bh-grid">{others.map(card)}</ul>}

        {/* The Haridasas. A song is filed under its devata, but it is
            signed by its composer — and the signature sits inside the
            text, which makes it the one attribution here a reader can
            check for themselves. */}
        <Head title={b.byComposer} count={`${composers.length}`} />
        <ul className="bh-dasas">
          {composers.map((c) => (
            <li key={c.id} className="bh-dasa">
              <span className="bh-dasa-name">{c.name}</span>
              <span className="bh-dasa-when">{c.when}</span>
              <span className="bh-dasa-ankita kannada" lang="kn">
                {c.ankita}
              </span>
              <span className="bh-dasa-count">
                {c.count.toLocaleString("en-IN")} {c.count === 1 ? b.songsOne : b.songsMany}
              </span>
            </li>
          ))}
        </ul>

        {/* The four bhajans that were here before this corpus arrived.
            Not Kannada and not Haridasa, so they keep their own place
            rather than being folded in. */}
        {elsewhere.length > 0 && (
          <>
            <Head title={b.alsoSung} />
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
