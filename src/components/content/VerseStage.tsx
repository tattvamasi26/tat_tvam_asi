"use client";

import { useState } from "react";
import type { IshaVerseView } from "@/lib/data";
import { LOCALE_META, type Locale } from "@/i18n/config";

/**
 * One verse, given a full stage.
 *
 * The Sanskrit is the centrepiece and is set line by line, each line
 * animating in on its own delay so a śloka assembles pada by pada
 * rather than appearing as a block. That timing is the whole point:
 * a verse is a sequence in time when it is recited, and reading it
 * should carry some of that.
 *
 * Client-side only for the two disclosures — the explanation and the
 * language comparison. Everything else is rendered on the server and
 * is present in the HTML whether or not the bundle ever runs.
 */
export function VerseStage({
  verse,
  index,
  labels,
  locale,
}: {
  verse: IshaVerseView;
  index: number;
  locale: Locale;
  labels: {
    verse: string;
    invocation: string;
    explanation: string;
    hideExplanation: string;
    compare: string;
    hideCompare: string;
    terms: string;
    uncited: string;
  };
}) {
  const [openNote, setOpenNote] = useState(false);
  const [openCompare, setOpenCompare] = useState(false);

  const isInvocation = verse.locator === "invocation";

  return (
    <article className="vstage" id={verse.id}>
      <header className="vstage-head">
        <span className="vstage-num">
          {isInvocation ? labels.invocation : `${labels.verse} ${verse.locator}`}
        </span>
        <span className="vstage-handle">{verse.handle}</span>
      </header>

      {/* The mūla. Each line is its own element so it can be timed. */}
      <div className="vstage-mula">
        {verse.sanskrit.map((line, i) => (
          <p
            key={i}
            className="vstage-sanskrit deva"
            style={{ ["--line" as string]: i }}
          >
            {line}
          </p>
        ))}
      </div>

      <div className="vstage-iast">
        {verse.iast.map((line, i) => (
          <p key={i} className="translit" style={{ ["--line" as string]: i }}>
            {line}
          </p>
        ))}
      </div>

      <p className="vstage-translation">{verse.translation}</p>

      {verse.keywords.length > 0 && (
        <div className="vstage-terms">
          <span className="vstage-terms-label">{labels.terms}</span>
          <dl>
            {verse.keywords.map((k) => (
              <div key={k.term} className="vterm">
                <dt>
                  <span className="deva">{k.term}</span>
                  <span className="translit">{k.iast}</span>
                </dt>
                <dd>{k.gloss}</dd>
              </div>
            ))}
          </dl>
        </div>
      )}

      <div className="vstage-actions">
        <button
          type="button"
          className="vbtn"
          aria-expanded={openNote}
          onClick={() => setOpenNote((v) => !v)}
        >
          {openNote ? labels.hideExplanation : labels.explanation}
          <span className="vbtn-chev" data-open={openNote ? "" : undefined} aria-hidden="true">
            ↓
          </span>
        </button>

        <button
          type="button"
          className="vbtn vbtn-quiet"
          aria-expanded={openCompare}
          onClick={() => setOpenCompare((v) => !v)}
        >
          {openCompare ? labels.hideCompare : labels.compare}
        </button>
      </div>

      {/* Grid-rows 0fr → 1fr animates a panel of unknown height without
          measuring it, which max-height cannot do without guessing. */}
      <div className="vstage-drawer" data-open={openNote ? "" : undefined}>
        <div className="vstage-drawer-inner">
          <p className="vstage-note">{verse.explanation}</p>
          {!verse.isCited && (
            <p className="notice-uncited">⚠ {labels.uncited}</p>
          )}
        </div>
      </div>

      <div className="vstage-drawer" data-open={openCompare ? "" : undefined}>
        <div className="vstage-drawer-inner">
          <div className="vcompare">
            {verse.allTranslations.map((t) => (
              <div key={t.locale} className="vcompare-cell" data-active={t.locale === locale ? "" : undefined}>
                <span className="vcompare-lang">{LOCALE_META[t.locale].native}</span>
                <p
                  className={
                    t.locale === "kn" ? "kannada" : t.locale === "hi" ? "deva" : undefined
                  }
                >
                  {t.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <span className="vstage-index" aria-hidden="true">
        {String(index).padStart(2, "0")}
      </span>
    </article>
  );
}
