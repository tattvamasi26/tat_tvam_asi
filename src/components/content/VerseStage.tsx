"use client";

import { useState } from "react";
import Image from "next/image";
import type { IshaVerseView } from "@/lib/data";

/**
 * One verse, given a full stage.
 *
 * The Sanskrit is the centrepiece and is set line by line, each line
 * animating in on its own delay so a śloka assembles pada by pada
 * rather than appearing as a block. That timing is the point: a verse
 * is a sequence in time when it is recited, and reading it should
 * carry some of that.
 *
 * There is no side-by-side language comparison here any more. The page
 * has one reading language, chosen at the top, and every word on it
 * follows that choice — a panel showing three languages at once put
 * English back on a Kannada page, which is exactly what the reader
 * asked not to happen.
 *
 * Client-side only for the commentary disclosure. Everything else is
 * server-rendered and present in the HTML whether or not the bundle
 * ever executes.
 */
export function VerseStage({
  verse,
  index,
  labels,
}: {
  verse: IshaVerseView;
  index: number;
  labels: {
    verse: string;
    invocation: string;
    explanation: string;
    hideExplanation: string;
    terms: string;
    uncited: string;
    watch: string;
    talk: string;
  };
}) {
  const [open, setOpen] = useState(false);
  const isInvocation = verse.locator === "invocation";

  return (
    <article className="vstage" id={verse.id} data-open={open ? "" : undefined}>
      <div className="vstage-rail" aria-hidden="true">
        <span className="vstage-rail-num">
          {isInvocation ? "॥" : verse.locator}
        </span>
        <span className="vstage-rail-line" />
      </div>

      <div className="vstage-body">
        <header className="vstage-head">
          <span className="vstage-num">
            {isInvocation ? labels.invocation : `${labels.verse} ${verse.locator}`}
          </span>
          <span className="vstage-handle">{verse.handle}</span>
        </header>

        {/* The mūla. Each line is its own element so it can be timed. */}
        <div className="vstage-mula">
          {verse.sanskrit.map((line, i) => (
            <p key={i} className="vstage-sanskrit deva" style={{ ["--line" as string]: i }}>
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
            aria-expanded={open}
            aria-controls={`${verse.id}-note`}
            onClick={() => setOpen((v) => !v)}
          >
            <span className="vbtn-dot" aria-hidden="true" />
            {open ? labels.hideExplanation : labels.explanation}
          </button>
        </div>

        {/* grid-rows 0fr → 1fr animates a panel of unknown height
            without measuring it, which max-height cannot do without
            guessing a number that either clips or opens slowly. */}
        <div className="vstage-drawer" id={`${verse.id}-note`} data-open={open ? "" : undefined}>
          <div className="vstage-drawer-inner">
            <div className="vstage-note">
              {verse.explanation.split("\n\n").map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>

            {verse.video && (
              <a
                className="vvideo"
                href={verse.video.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="vvideo-thumb">
                  <Image
                    src={verse.video.thumb}
                    alt=""
                    width={320}
                    height={180}
                    sizes="220px"
                    unoptimized
                  />
                  <span className="vvideo-play" aria-hidden="true">
                    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </span>
                </span>
                <span className="vvideo-meta">
                  <span className="vvideo-kicker">
                    {labels.talk} {verse.video.talk} · {verse.video.covers}
                  </span>
                  <span className="vvideo-title">{verse.video.speaker}</span>
                  <span className="vvideo-org">{verse.video.org}</span>
                  <span className="vvideo-cta">{labels.watch} ↗</span>
                </span>
              </a>
            )}

            {!verse.isCited && <p className="notice-uncited">⚠ {labels.uncited}</p>}
          </div>
        </div>
      </div>

      <span className="vstage-ghost" aria-hidden="true">
        {String(index).padStart(2, "0")}
      </span>
    </article>
  );
}
