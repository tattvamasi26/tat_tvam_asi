"use client";

import { useState } from "react";
import type { IshaVerseView } from "@/lib/data";
import { Caution } from "@/components/ui/Caution";

type Verse = Pick<IshaVerseView, "id" | "locator" | "sanskrit" | "iast" | "translation" | "scriptClass">;

/**
 * A stotra set the way the stotra portals set one: the whole text in a
 * single column, verse after verse, each numbered, in the reader's
 * script.
 *
 * The meaning is closed until asked for. One button opens the
 * translation under every verse, together with the notice that the
 * translation is the site's own and not yet cited. Nothing else — no
 * word-by-word glosses, no commentary.
 */
export function StotraText({
  verses,
  showIast,
  labels,
}: {
  verses: Verse[];
  /** Transliteration under the mūla — for readers who chose English. */
  showIast: boolean;
  labels: {
    showMeaning: string;
    hideMeaning: string;
    verse: string;
    invocation: string;
    phala: string;
    uncited: string;
  };
}) {
  const [meaning, setMeaning] = useState(false);

  return (
    <section className="stotra-text" data-meaning={meaning ? "" : undefined}>
      <div className="stotra-text-bar">
        <button
          type="button"
          className="stotra-toggle"
          aria-pressed={meaning}
          onClick={() => setMeaning((m) => !m)}
        >
          {meaning ? labels.hideMeaning : labels.showMeaning}
        </button>
      </div>

      {meaning && (
        <p className="notice-uncited">
          <Caution /> {labels.uncited}
        </p>
      )}

      <ol className="stotra-verses">
        {verses.map((v) => {
          const numbered = /^\d+$/.test(v.locator);
          return (
            <li key={v.id} id={v.id} className="stotra-verse">
              <span className="stotra-verse-num" aria-label={numbered ? `${labels.verse} ${v.locator}` : undefined}>
                {numbered ? v.locator : ""}
              </span>
              <div className="stotra-verse-body">
                {!numbered && (
                  <span className="stotra-verse-label">
                    {v.locator === "phala" ? labels.phala : labels.invocation}
                  </span>
                )}
                <div className={`stotra-verse-mula ${v.scriptClass}`}>
                  {v.sanskrit.map((line, i) => (
                    <p key={i}>{line}</p>
                  ))}
                </div>
                {showIast && (
                  <div className="stotra-verse-iast translit">
                    {v.iast.map((line, i) => (
                      <p key={i}>{line}</p>
                    ))}
                  </div>
                )}
                {meaning && <p className="stotra-verse-meaning">{v.translation}</p>}
              </div>
            </li>
          );
        })}
      </ol>
    </section>
  );
}
