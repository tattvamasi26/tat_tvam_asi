import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getTranslations } from "@/i18n/server";
import { bhajanStrings } from "@/i18n/bhajans";
import { bhajanGroups, bhajansIn, bhajanGroupExists, composerName, formName } from "@/lib/bhajans";
import { bhajanGroup } from "@/lib/bhajans/groups";
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
 * One group's songs.
 *
 * A row says what the heading does not: the composer, the form and
 * whether there is a recitation. It deliberately does not repeat the
 * devata, which is the heading it already sits under — the same rule
 * the Rigveda mandala pages follow.
 */
export default function GroupPage({ params }: { params: { devata: string } }) {
  const { devata } = params;
  if (!bhajanGroupExists(devata)) notFound();

  const { locale } = getTranslations();
  const b = bhajanStrings(locale);
  const group = bhajanGroup(devata)!;
  const songs = bhajansIn(devata);
  const name = group.name[locale];

  return (
    <>
      <section className="pagehead">
        <div className="shell pagehead-inner">
          <Link href="/bhajans" className="btn-ghost stutis-back">
            <Arrow dir="left" /> {bhajanGroups(locale).length > 0 ? b.byDevata : ""}
          </Link>
          <h1 className="title">{name}</h1>
          <p className="lede">
            {group.kind === "devata"
              ? b.groupLede(name, songs.length.toLocaleString("en-IN"))
              : group.kind === "form"
                ? b.nitiNote
                : b.unsortedNote}
          </p>
        </div>
      </section>

      <section className="shell stack-lg" style={{ paddingTop: 0 }}>
        <ol className="stotra-list bh-list">
          {songs.map((s, i) => {
            const composer = composerName(s.composer, locale);
            return (
              <li key={s.slug}>
                <Link href={`/bhajans/${devata}/${s.slug}`} className="stotra-row">
                  <span className="stotra-row-num" aria-hidden="true">
                    {(i + 1).toLocaleString("en-IN")}
                  </span>
                  <span className="stotra-row-body">
                    {/* The song's own name, in Kannada, on every page:
                        it is a Kannada text, not Sanskrit stored in
                        Devanagari, so it is not transliterated into the
                        reader's script. lang="kn" says so. */}
                    <span className="stotra-row-name kannada" lang="kn">
                      {s.titleKn}
                    </span>
                    {s.titleEn && <span className="bh-row-roman">{s.titleEn}</span>}
                  </span>
                  <span className="stotra-row-meta bh-row-meta">
                    {composer && <span className="chip">{composer}</span>}
                    {s.form !== "song" && s.form !== "pada" && (
                      <span className="chip">{formName(s.form, locale)}</span>
                    )}
                    {s.hasVideo && (
                      <span className="chip chip-gold">{b.labelListen}</span>
                    )}
                  </span>
                </Link>
              </li>
            );
          })}
        </ol>
      </section>
    </>
  );
}
