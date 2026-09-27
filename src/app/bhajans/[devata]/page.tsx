import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getTranslations } from "@/i18n/server";
import { bhajanStrings } from "@/i18n/bhajans";
import { bhajanGroups, bhajansIn, bhajanGroupExists, composerName, formName } from "@/lib/bhajans";
import { bhajanGroup } from "@/lib/bhajans/groups";
import { groupImage } from "@/lib/bhajans/images";
import { Arrow } from "@/components/ui/Arrow";
import { LOCALES } from "@/i18n/config";

export function generateStaticParams() {
  return bhajanGroups(LOCALES[0]).map((g) => ({ devata: g.id }));
}

export async function generateMetadata({ params }: { params: { devata: string } }): Promise<Metadata> {
  const g = bhajanGroup(params.devata);
  return { title: g ? `${g.name.en} — Bhajans` : "Bhajans" };
}

/**
 * One group.
 *
 * The head gives the god a face and a sentence. Then the songs, as a
 * grid of small cards rather than a numbered list — a hundred and
 * fifty rows is a wall, and the Kannada name is what a reader
 * actually recognises, so it leads each card.
 *
 * A card never repeats the devata it sits under. It carries what the
 * heading does not: who wrote it, what kind of text it is when that is
 * not the ordinary one, and whether there is a recitation.
 */
export default function GroupPage({ params }: { params: { devata: string } }) {
  const { devata } = params;
  if (!bhajanGroupExists(devata)) notFound();

  const { locale } = getTranslations();
  const b = bhajanStrings(locale);
  const group = bhajanGroup(devata)!;
  const songs = bhajansIn(devata);
  const name = group.name[locale];
  const local = group.name.kn;
  const pic = groupImage(devata);

  const blurb =
    group.kind === "devata"
      ? b.groupLede(name, songs.length.toLocaleString("en-IN"))
      : group.kind === "form"
        ? b.nitiNote
        : b.openNote;

  return (
    <>
      <section className="pagehead">
        <div className="shell pagehead-inner">
          <Link href="/bhajans" className="btn-ghost stutis-back">
            <Arrow dir="left" /> {b.backToAll}
          </Link>
          <h1 className="title">{name}</h1>
        </div>
      </section>

      <section className="shell stack-lg" style={{ paddingTop: 0 }}>
        <div className="bh-feature">
          <div className="bh-feature-media">
            {pic ? (
              <Image
                src={pic.src}
                alt={pic.alt[locale]}
                fill
                sizes="(max-width: 760px) 100vw, 40vw"
                style={{ objectFit: "cover", objectPosition: pic.position }}
                priority
              />
            ) : (
              <p className="bh-plate kannada" lang="kn">
                {local}
              </p>
            )}
          </div>
          <div className="bh-feature-body">
            {locale !== "kn" && (
              <p className="bh-feature-local kannada" lang="kn">
                {local}
              </p>
            )}
            <p className="lede">{blurb}</p>
            {pic && (
              <p className="stutis-credit">
                {pic.sourceUrl ? (
                  <a href={pic.sourceUrl} target="_blank" rel="noopener noreferrer">
                    {pic.credit}
                  </a>
                ) : (
                  pic.credit
                )}
              </p>
            )}
          </div>
        </div>

        <ul className="bh-songs">
          {songs.map((s) => {
            const composer = composerName(s.composer, locale);
            return (
              <li key={s.slug}>
                <Link href={`/bhajans/${devata}/${s.slug}`} className="bh-song">
                  {/* A Kannada song keeps its own script on every page
                      and says so with lang, so the script audit knows
                      it is deliberate and not a missed conversion. */}
                  <span className="bh-song-name kannada" lang="kn">
                    {s.titleKn}
                  </span>
                  {s.titleEn && <span className="bh-song-roman">{s.titleEn}</span>}
                  <span className="bh-song-meta">
                    {composer && <span className="chip">{composer}</span>}
                    {s.form !== "song" && s.form !== "pada" && (
                      <span className="chip">{formName(s.form, locale)}</span>
                    )}
                    {s.hasVideo && <span className="chip chip-gold">{b.labelListen}</span>}
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </section>
    </>
  );
}
