"use client";

import { useState } from "react";

/**
 * One song, whole, in one column.
 *
 * The page has one job and this is it, so the card is given the width,
 * the air and the only strong colour on the page. A sung line needs
 * more leading than a read one, and a stanza is a unit of breath, so
 * the stanzas are separated by a rule rather than left to run
 * together.
 *
 * Two things differ from the stotra reader, and both follow from what
 * these texts are:
 *
 *  1. The song is Kannada, not Sanskrit stored in Devanagari, so it is
 *     never transliterated into the reader's script. It stays Kannada
 *     on every page and carries lang="kn" to say so.
 *  2. The stotras show a transliteration only on English pages,
 *     because there a reader who wants the sounds cannot read the
 *     Devanagari. Here the same reasoning points the other way round:
 *     it is the Kannada reader who does not need it, and the English
 *     *and* Hindi reader who cannot read the script at all. So it
 *     opens by default everywhere except Kannada, and stays a control
 *     rather than being forced on anyone.
 */
export function BhajanText({
  stanzas,
  transliteration,
  labels,
  openByDefault,
}: {
  stanzas: string[][];
  transliteration: string[][];
  labels: { show: string; hide: string; roman: string };
  openByDefault: boolean;
}) {
  const [open, setOpen] = useState(openByDefault);
  const has = transliteration.length > 0;

  return (
    <div className="bh-text">
      {has && (
        <div className="bh-text-bar">
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
          {/* The transliteration is a second reading of the same song,
              not a gloss on it. In four songs out of ten the source's
              version is abridged relative to the Kannada, so the two
              are set apart rather than interleaved: interleaving would
              assert a stanza-for-stanza correspondence the source does
              not have. */}
          <p className="bh-roman-label">{labels.roman}</p>
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
    </div>
  );
}
