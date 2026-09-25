"use client";

import { useState } from "react";

/**
 * One song, whole, in one column — the shape the stotra reader
 * already uses.
 *
 * Two things differ from a stotra, and both follow from what these
 * texts are:
 *
 *  1. The song is Kannada, not Sanskrit stored in Devanagari, so it is
 *     never transliterated into the reader's script. It stays Kannada
 *     on every page and carries lang="kn" to say so.
 *  2. The stotras show a transliteration only on English pages,
 *     because there a reader who wants the sounds cannot read the
 *     Devanagari. Here the same reasoning points the other way round:
 *     it is the Kannada reader who does not need it, and the English
 *     *and* Hindi reader who cannot read the script at all. So the
 *     transliteration opens by default everywhere except Kannada, and
 *     stays a control rather than being forced on anyone.
 */
export function BhajanText({
  stanzas,
  transliteration,
  aligned,
  labels,
  openByDefault,
}: {
  stanzas: string[][];
  transliteration: string[][];
  aligned: boolean;
  labels: { show: string; hide: string; pending: string };
  openByDefault: boolean;
}) {
  const [open, setOpen] = useState(openByDefault);
  const has = transliteration.length > 0;

  return (
    <div className="stotra-text bh-text">
      {has && (
        <div className="stotra-text-bar">
          <button
            type="button"
            className="stotra-toggle"
            aria-pressed={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? labels.hide : labels.show}
          </button>
        </div>
      )}

      <div className="bh-stanzas" lang="kn">
        {stanzas.map((lines, i) => (
          <p key={i} className="bh-stanza kannada">
            {lines.map((line, j) => (
              <span key={j} className="bh-line">
                {line}
              </span>
            ))}
          </p>
        ))}
      </div>

      {has && open && (
        <div className="bh-roman" lang="en">
          {/* Where the source's transliteration does not run parallel
              to the Kannada — four songs in ten — it is shown as its
              own text rather than interleaved, because interleaving
              would assert a correspondence the source does not have. */}
          {!aligned && <p className="bh-roman-note" aria-hidden="true" />}
          {transliteration.map((lines, i) => (
            <p key={i} className="bh-stanza bh-stanza-roman">
              {lines.map((line, j) => (
                <span key={j} className="bh-line">
                  {line}
                </span>
              ))}
            </p>
          ))}
        </div>
      )}

      <p className="notice-uncited bh-pending">{labels.pending}</p>
    </div>
  );
}
