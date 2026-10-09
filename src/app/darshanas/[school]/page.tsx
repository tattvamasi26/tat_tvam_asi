import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getTranslations } from "@/i18n/server";
import { darshanaStrings } from "@/i18n/darshanas";
import {
  getDarshana,
  getDarshanas,
  getPramanas,
  getAvayavas,
  getTattvas,
} from "@/lib/data";
import { DARSHANAS } from "@/lib/seed/darshanas";
import { ProseBlock } from "@/components/content/ProseBlock";
import { AvayavaChain } from "@/components/darshanas/AvayavaChain";
import { TattvaCascade } from "@/components/darshanas/TattvaCascade";
import { scriptClass } from "@/lib/script";
import { Arrow } from "@/components/ui/Arrow";
import { LOCALES } from "@/i18n/config";

export function generateStaticParams() {
  return DARSHANAS.map((d) => ({ school: d.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { school: string };
}): Promise<Metadata> {
  const d = getDarshana(params.school, LOCALES[0]);
  return d
    ? { title: `${d.name} — the six darshanas`, description: d.question }
    : { title: "The six darshanas" };
}

/**
 * One school.
 *
 * The prose is a monograph and uses the shared renderer — the same
 * ProseBlock the temples, the acharyas and the cosmos arguments use.
 * What is added is a facts bar, the countable structure the school
 * posits, and for two of the six a drawing: Nyāya's five-membered
 * argument and Sāṅkhya's cascade of twenty-five. Those two are the
 * places where seeing the shape does work that a list cannot.
 *
 * The means-of-knowledge count is printed with its own note where the
 * school disagrees with itself about it, which is three of the six.
 * Printing a bare number there would be the tidy lie.
 */
export default function DarshanaPage({ params }: { params: { school: string } }) {
  const { locale } = getTranslations();
  const s = darshanaStrings(locale);
  const d = getDarshana(params.school, locale);
  if (!d) notFound();

  const sc = scriptClass(locale);
  const all = getDarshanas(locale);
  const at = all.findIndex((x) => x.slug === d.slug);
  const prev = at > 0 ? all[at - 1] : null;
  const next = at >= 0 && at < all.length - 1 ? all[at + 1] : null;

  const pramanas = getPramanas(locale);
  const accepted = pramanas.filter((p) => d.pramanas.includes(p.id as never));

  return (
    <>
      <section className="pu-hero">
        <div className="shell pu-hero-inner">
          <Link href="/darshanas" className="pu-hero-back">
            <Arrow dir="left" /> {s.back}
          </Link>
          <p className="pu-hero-kicker">{d.order.toLocaleString("en-IN")}</p>
          <h1 className="pu-hero-title">{d.name}</h1>
          <p className={`pu-hero-sanskrit ${sc}`}>{d.sanskrit}</p>
          <p className="pu-hero-lede">{d.lede}</p>
        </div>
      </section>

      <section className="shell pu-body">
        {/* ── the question, first ──────────────────────────── */}
        <div className="da-question">
          <p className="fact-label">{s.labelAsks}</p>
          <p className="da-question-text">{d.question}</p>
        </div>

        {/* ── the root text, and when ──────────────────────── */}
        <div className="da-root">
          <dl className="temple-list">
            <div className="temple-list-item">
              <dt>{s.labelRoot}</dt>
              <dd>
                {d.root.name} <span className={`da-root-sanskrit ${sc}`}>{d.root.sanskrit}</span>
              </dd>
            </div>
            <div className="temple-list-item">
              <dt>{s.labelAuthor}</dt>
              <dd>{d.root.author}</dd>
            </div>
            <div className="temple-list-item">
              <dt>{s.labelDating}</dt>
              <dd>{d.root.dating}</dd>
            </div>
            {d.root.extent && (
              <div className="temple-list-item">
                <dt>{s.labelExtent}</dt>
                <dd>{d.root.extent}</dd>
              </div>
            )}
          </dl>
        </div>

        {/* ── the means of knowledge it accepts ────────────── */}
        <div className="pu-section">
          <h2 className="pu-h2">{s.labelPramanas}</h2>
          <p className="da-count">
            {s.gridAccepts.replace("{n}", d.pramanas.length.toLocaleString("en-IN"))}
          </p>
          <ul className="da-pramana-chips">
            {accepted.map((p) => (
              <li key={p.id}>
                <span className="chip chip-gold" title={p.gloss}>
                  {p.name}
                </span>
              </li>
            ))}
          </ul>
          {/* Three of the six disagree with themselves about the
              count. Where they do, the page says so. */}
          {d.pramanaNote && <p className="da-pramana-note">{d.pramanaNote}</p>}
        </div>

        {/* ── what it says about God, which is not what astika means ── */}
        <div className="pu-aside">
          <p className="fact-label">{s.labelIshvara}</p>
          <p>{d.ishvara}</p>
        </div>

        {/* ── the argument ─────────────────────────────────── */}
        {d.sections.map((sec) => (
          <section key={sec.id} id={sec.id} className="temple-section">
            <p className="eyebrow">{sec.eyebrow}</p>
            <h2 className="temple-section-title">{sec.title}</h2>
            {sec.blocks.map((b, i) => (
              <ProseBlock key={i} block={b} />
            ))}
          </section>
        ))}

        {/* ── the countable structure ──────────────────────── */}
        {d.structure && (
          <div className="pu-section">
            <h2 className="pu-h2">{d.structure.label}</h2>
            <p className="da-structure-note">{d.structure.note}</p>
            <ol className="da-structure">
              {d.structure.items.map((i, n) => (
                <li key={i.id} className="da-structure-item">
                  <span className="da-structure-n">{(n + 1).toLocaleString("en-IN")}</span>
                  <span className="da-structure-body">
                    <span className="da-structure-name">{i.name}</span>
                    <span className={`da-structure-sanskrit ${sc}`}>{i.sanskrit}</span>
                    <span className="da-structure-gloss">{i.gloss}</span>
                  </span>
                </li>
              ))}
            </ol>
          </div>
        )}

        {/* ── the two drawings, where a drawing earns its place ── */}
        {d.slug === "nyaya" && (
          <div className="pu-section">
            <h2 className="pu-h2">{s.avayavaTitle}</h2>
            <p className="da-structure-note">{s.avayavaLede}</p>
            <AvayavaChain
              avayavas={getAvayavas(locale)}
              scriptClass={sc}
              strings={{ step: s.avayavaStep, example: s.avayavaExample }}
            />
          </div>
        )}

        {d.slug === "sankhya" &&
          (() => {
            const t = getTattvas(locale);
            return (
              <div className="pu-section">
                <h2 className="pu-h2">{s.tattvaTitle}</h2>
                <p className="da-structure-note">{s.tattvaLede}</p>
                <TattvaCascade
                  purusha={t.purusha}
                  tiers={t.tiers}
                  scriptClass={sc}
                  strings={{ count: s.tattvaCount, total: t.count, aside: s.tattvaAside }}
                />
              </div>
            );
          })()}

        {/* ── its pair ─────────────────────────────────────── */}
        {d.pair && (
          <div className="pu-section">
            <h2 className="pu-h2">{s.labelPairedWith}</h2>
            <p className="da-structure-note">{d.pair.note}</p>
            <ul className="da-pair-chips">
              {d.pair.members
                .filter((m) => m.slug !== d.slug)
                .map((m) => (
                  <li key={m.slug}>
                    <Link href={`/darshanas/${m.slug}`} className="chip chip-gold">
                      {m.name} — {m.role}
                    </Link>
                  </li>
                ))}
            </ul>
          </div>
        )}

        {d.links.length > 0 && (
          <div className="pu-section">
            <h2 className="pu-h2">{s.labelElsewhere}</h2>
            <ul className="pu-chips">
              {d.links.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="chip chip-gold">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}

        <nav className="stotra-pager">
          {prev ? (
            <Link href={`/darshanas/${prev.slug}`} className="pager-link" data-dir="prev">
              <span className="pager-label">
                <Arrow dir="left" /> {s.previous}
              </span>
              <span className="pager-name">{prev.name}</span>
            </Link>
          ) : (
            <span />
          )}
          {next && (
            <Link href={`/darshanas/${next.slug}`} className="pager-link" data-dir="next">
              <span className="pager-label">
                {s.next} <Arrow dir="right" />
              </span>
              <span className="pager-name">{next.name}</span>
            </Link>
          )}
        </nav>
      </section>
    </>
  );
}
