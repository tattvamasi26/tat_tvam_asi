import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getTranslations } from "@/i18n/server";
import { practiceStrings } from "@/i18n/practice";
import { getPractice } from "@/lib/data";
import { PRACTICES } from "@/lib/seed/practice";
import { scriptClass } from "@/lib/script";
import { Sitting } from "@/components/practice/Sitting";
import { StotraVideo } from "@/components/stotra/StotraVideo";
import { Arrow } from "@/components/ui/Arrow";
import { LOCALES } from "@/i18n/config";

export function generateStaticParams() {
  return PRACTICES.map((p) => ({ session: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { session: string };
}): Promise<Metadata> {
  const p = getPractice(params.session, LOCALES[0]);
  return p ? { title: `${p.name} — Practice`, description: p.lede } : { title: "Practice" };
}

/**
 * One sitting.
 *
 * The timer is the point of the page, so it sits directly under the
 * hero rather than at the bottom of the instructions — a reader who
 * already knows the practice should not have to scroll past it to
 * start.
 *
 * The recitation uses the stotras' own player, which loads nothing
 * from YouTube until it is pressed. That keeps the site's privacy
 * rule intact: opening a sitting contacts nobody.
 */
export default function SessionPage({ params }: { params: { session: string } }) {
  const { locale, t } = getTranslations();
  const s = practiceStrings(locale);
  const p = getPractice(params.session, locale);
  if (!p) notFound();

  const sc = scriptClass(locale);

  return (
    <>
      <section className="pr-hero">
        {p.image && (
          <Image
            src={p.image.src}
            alt={p.image.alt}
            fill
            sizes="100vw"
            priority
            style={{ objectFit: "cover", objectPosition: p.image.position }}
          />
        )}
        <div className="pr-hero-scrim" aria-hidden="true" />

        <div className="shell pr-hero-inner">
          <Link href="/practice" className="pr-hero-back">
            <Arrow dir="left" /> {s.back}
          </Link>
          <h1 className="pr-hero-title">{p.name}</h1>
          {p.sanskrit && <p className={`pr-hero-sanskrit ${sc}`}>{p.sanskrit}</p>}
          <p className="pr-hero-lede">{p.lede}</p>
        </div>
      </section>

      <section className="shell pr-body">
        {/* The timer first: someone who knows the practice should not
            have to read past it to begin. The recitation goes inside
            it rather than further down, so the sound and the clock
            are started from the same place — which is how the sitting
            is actually done. */}
        <Sitting
          slug={p.slug}
          name={p.name}
          durations={p.durations}
          labels={{
            chooseLength: s.chooseLength,
            minutes: s.minutes,
            open: s.open,
            openNote: s.openNote,
            begin: s.begin,
            pause: s.pause,
            resume: s.resume,
            reset: s.reset,
            finish: s.finish,
            done: s.done,
            doneNote: s.doneNote,
            bell: s.bell,
            halfwayBell: s.halfwayBell,
            focus: s.focus,
            leaveFocus: s.leaveFocus,
            awake: s.awake,
            streak: s.streak,
            streakNote: s.streakNote,
            sittings: s.sittings,
          }}
        >
          {p.track && (
            <StotraVideo
              video={{
                id: p.track.id,
                title: p.track.title,
                channel: p.track.channel,
                thumb: `https://i.ytimg.com/vi/${p.track.id}/hqdefault.jpg`,
                url: `https://www.youtube.com/watch?v=${p.track.id}`,
              }}
              labels={{
                listen: s.labelListen,
                play: t.labelPlayVideo,
                watch: t.labelWatchOnYouTube,
              }}
            />
          )}
        </Sitting>

        <div className="pr-section">
          <h2 className="pr-h2">{s.labelHowTo}</h2>
          <ol className="pr-steps">
            {p.howTo.map((step, i) => (
              <li key={i}>
                <span className="pr-step-n" aria-hidden="true">
                  {(i + 1).toLocaleString("en-IN")}
                </span>
                <span>{step}</span>
              </li>
            ))}
          </ol>
        </div>

        {p.text && (
          <div className="pr-section">
            <h2 className="pr-h2">{s.labelText}</h2>
            <Link href={p.text.href} className="chip chip-gold">
              {p.text.label}
            </Link>
          </div>
        )}

        {/* The recitation itself now sits in the timer panel above. All
            that is left here is the case where there is none, which
            still has to be said rather than left as a blank. */}
        {!p.track && (
          <div className="pr-section">
            <h2 className="pr-h2">{s.labelListen}</h2>
            <p className="pr-no-track">{s.noTrack}</p>
          </div>
        )}

        <div className="pr-section">
          <h2 className="pr-h2">{s.labelOrigin}</h2>
          <p className="pr-origin">{p.origin}</p>
        </div>

        {p.links.length > 0 && (
          <div className="pr-section">
            <h2 className="pr-h2">{s.labelElsewhere}</h2>
            <ul className="pr-links">
              {p.links.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="chip">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}

        {p.image && (
          <p className="stutis-credit pr-credit">
            <a href={p.image.sourceUrl} target="_blank" rel="noopener noreferrer">
              {p.image.credit}
            </a>
          </p>
        )}
      </section>
    </>
  );
}
