import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getTranslations } from "@/i18n/server";
import { bhajanStrings } from "@/i18n/bhajans";
import { bhajan, bhajansIn, bhajanGroupExists, composerName, formName } from "@/lib/bhajans";
import { bhajanGroup, haridasa } from "@/lib/bhajans/groups";
import { BhajanText } from "@/components/bhajan/BhajanText";
import { StotraVideo } from "@/components/stotra/StotraVideo";
import { Arrow } from "@/components/ui/Arrow";

export async function generateMetadata({
  params,
}: {
  params: { devata: string; song: string };
}): Promise<Metadata> {
  const song = await bhajan(params.devata, params.song);
  return { title: song ? `${song.titleEn || song.titleKn} — Bhajans` : "Bhajans" };
}

/**
 * One song.
 *
 * Everything on this page serves the text. The head is quiet and
 * centred, the facts are one line rather than a table, and the song
 * itself gets the card, the measure and the only strong colour.
 *
 * What the page does not have is a meaning, and it says so where a
 * meaning would be rather than leaving the reader to notice.
 */
export default async function SongPage({ params }: { params: { devata: string; song: string } }) {
  const { devata, song: slug } = params;
  if (!bhajanGroupExists(devata)) notFound();

  const song = await bhajan(devata, slug);
  if (!song) notFound();

  const { locale, t } = getTranslations();
  const b = bhajanStrings(locale);
  const group = bhajanGroup(devata)!;
  const groupName = group.name[locale];
  const composer = composerName(song.composer, locale);
  const dasa = haridasa(song.composer);

  const siblings = bhajansIn(devata);
  const at = siblings.findIndex((s) => s.slug === slug);
  const prev = at > 0 ? siblings[at - 1] : null;
  const next = at >= 0 && at < siblings.length - 1 ? siblings[at + 1] : null;

  const facts: [string, string][] = [];
  if (composer) facts.push([b.labelComposer, composer]);
  if (song.form !== "song") facts.push([b.labelForm, formName(song.form, locale)]);
  if (song.raga) facts.push([b.labelRaga, song.raga]);
  if (song.tala) facts.push([b.labelTala, song.tala]);

  return (
    <>
      <header className="reader-head shell bh-reader-head">
        <Link href={`/bhajans/${devata}`} className="btn-ghost stutis-back">
          <Arrow dir="left" /> {b.backToGroup(groupName)}
        </Link>

        {/* A Kannada song keeps its own script on every page, and says
            so with lang, so the script audit knows it is deliberate. */}
        <h1 className="bh-song-title kannada" lang="kn">
          {song.titleKn}
        </h1>
        {song.titleEn && <p className="bh-title-roman">{song.titleEn}</p>}

        {facts.length > 0 && (
          <dl className="bh-facts">
            {facts.map(([label, value]) => (
              <div key={label}>
                <dt className="fact-label">{label}</dt>
                <dd>{value}</dd>
              </div>
            ))}
          </dl>
        )}

        {/* The signature inside the song — what makes the attribution
            checkable rather than asserted. */}
        {dasa && (
          <p className="bh-ankita">
            <span className="fact-label">{b.labelAnkita}</span>
            <span className="kannada" lang="kn">
              {dasa.ankita}
            </span>
          </p>
        )}
      </header>

      <section className="shell stack-lg" style={{ paddingTop: 0 }}>
        <BhajanText
          stanzas={song.stanzas}
          transliteration={song.transliteration}
          openByDefault={locale !== "kn"}
          labels={{
            show: b.showTransliteration,
            hide: b.hideTransliteration,
            roman: b.romanLabel,
          }}
        />

        <p className="notice-uncited bh-pending">{b.meaningPending}</p>

        {song.video && (
          <StotraVideo
            video={{
              id: song.video,
              title: song.titleEn || song.titleKn,
              channel: "",
              thumb: `https://i.ytimg.com/vi/${song.video}/hqdefault.jpg`,
              url: `https://www.youtube.com/watch?v=${song.video}`,
            }}
            labels={{ listen: b.labelListen, play: t.labelPlayVideo, watch: t.labelWatchOnYouTube }}
          />
        )}

        <nav className="stotra-pager">
          {prev ? (
            <Link href={`/bhajans/${devata}/${prev.slug}`} className="pager-link" data-dir="prev">
              <span className="pager-label">
                <Arrow dir="left" /> {b.previous}
              </span>
              <span className="pager-name kannada" lang="kn">
                {prev.titleKn}
              </span>
            </Link>
          ) : (
            <span />
          )}
          {next && (
            <Link href={`/bhajans/${devata}/${next.slug}`} className="pager-link" data-dir="next">
              <span className="pager-label">
                {b.next} <Arrow dir="right" />
              </span>
              <span className="pager-name kannada" lang="kn">
                {next.titleKn}
              </span>
            </Link>
          )}
        </nav>

        <p className="stutis-credit bh-source">
          {b.sourceLine} ·{" "}
          <a href={song.sourceUrl} target="_blank" rel="noopener noreferrer">
            bhakthilahari.com
          </a>
        </p>
      </section>
    </>
  );
}
