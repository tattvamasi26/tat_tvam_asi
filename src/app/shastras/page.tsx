import Link from "next/link";
import type { Metadata } from "next";
import { getTranslations } from "@/i18n/server";
import { shastraStrings } from "@/i18n/shastras";
import { shastraUi } from "@/i18n/shastra-ui";
// The count of rites a branch lays down is the rites section's own
// sentence, so it is kept with the rest of that vocabulary.
import { ritualStrings } from "@/i18n/rituals";
import { getShastraTiers } from "@/lib/data";
import { shastraProgress } from "@/lib/seed/shastras";
import { JumpBar } from "@/components/rf/RfHead";
import { scriptClass } from "@/lib/script";
import { Arrow } from "@/components/ui/Arrow";

export const metadata: Metadata = {
  title: "Shastras & Puranas",
  description:
    "The whole tradition in one place — what is heard, what is remembered, and what is built on them: Veda, Upaniṣads, Vedāṅga, Dharma, Itihāsa, Purāṇa, Vedānta, Darśana, Āgama and the teaching texts.",
};

/**
 * Shastras and Puranas — the map of the whole tradition.
 *
 * Arranged by the distinction the tradition itself draws first: what
 * is heard (śruti), what is remembered (smṛti), and what is built on
 * both. Each tier is a band in the shape the rest of the site now
 * uses, and each branch a card in the site's own palette — the pastel
 * art panels it replaced were the one place the site's colours went
 * off.
 *
 * Every branch now leads somewhere. Four have sections of their own;
 * the other six have a page here that says what the branch is and
 * gives a paragraph on each of its texts. Neither ever holds a second
 * copy of a text that lives elsewhere: a readable text's chip still
 * links to the section that holds it.
 */
export default function ShastrasPage() {
  const { locale } = getTranslations();
  const s = shastraStrings(locale);
  const u = shastraUi(locale);
  const r = ritualStrings(locale);
  const tiers = getShastraTiers(locale);
  const { live, partial, total } = shastraProgress();
  const sc = scriptClass(locale);
  const branchCount = tiers.reduce((n, t) => n + t.branches.length, 0);

  return (
    <>
      <section className="pagehead">
        <div className="shell pagehead-inner">
          <p className="eyebrow">{u.countBranches.replace("{n}", branchCount.toLocaleString("en-IN"))}</p>
          <h1 className="title">{s.title}</h1>
          <p className="lede">{s.lede}</p>
          <p className="sh2-progress">
            {s.progress((live + partial).toLocaleString("en-IN"), total.toLocaleString("en-IN"))}
          </p>
        </div>
      </section>

      <JumpBar
        label={u.labelTier}
        items={tiers.map((t) => ({ id: t.id, name: t.name, count: t.branches.length }))}
      />

      {tiers.map((tier, ti) => (
        <section key={tier.id} id={tier.id} className="rf-band" aria-labelledby={`h-${tier.id}`}>
          <div className="shell rf-band-inner">
            <header className="rf-band-head">
              <span className="rf-band-n">{String(ti + 1).padStart(2, "0")}</span>
              <h2 className="rf-band-title" id={`h-${tier.id}`}>
                {tier.name}
              </h2>
              {tier.sanskrit && <p className={`rf-band-sanskrit ${sc}`}>{tier.sanskrit}</p>}
              <p className="rf-band-lede">{tier.lede}</p>
            </header>

            <ul className="sh2-cards">
              {tier.branches.map((b) => (
                <li key={b.id} id={b.id}>
                  <article className="sh2-card">
                    <div className="sh2-card-head">
                      <span className={`sh2-glyph ${sc}`} aria-hidden="true">
                        {b.glyph}
                      </span>
                      <h3 className="sh2-name">
                        {b.page ? <Link href={b.page}>{b.name}</Link> : b.name}
                      </h3>
                      <p className={`sh2-sanskrit ${sc}`}>{b.sanskrit}</p>
                    </div>

                    <p className="sh2-lede">{b.lede}</p>

                    <ul className="sh2-chips">
                      {b.texts.map((t) =>
                        t.href ? (
                          <li key={t.id}>
                            <Link href={t.href} className="chip chip-gold" title={t.note}>
                              {t.name}
                            </Link>
                          </li>
                        ) : (
                          <li key={t.id}>
                            <span className="chip sh-chip-quiet" title={t.note}>
                              {t.name}
                            </span>
                          </li>
                        ),
                      )}
                    </ul>

                    {/* The return leg of the bridge into the rites. */}
                    {b.rites > 0 && (
                      <Link href="/rituals" className="sh2-rites">
                        {r.doneBecause(b.rites.toLocaleString("en-IN"))} <Arrow />
                      </Link>
                    )}

                    <div className="sh2-foot">
                      <span className="sh2-count">
                        {b.readable > 0
                          ? s.readableOf(b.readable.toLocaleString("en-IN"), b.total.toLocaleString("en-IN"))
                          : s.noneYet}
                      </span>
                      {b.page && (
                        <Link href={b.page} className="sh2-open">
                          {u.open} <Arrow />
                        </Link>
                      )}
                    </div>
                  </article>
                </li>
              ))}
            </ul>
          </div>
        </section>
      ))}

      <section className="shell rf-closing">
        <p className="rf-closing-text">{s.standing}</p>
      </section>
    </>
  );
}
