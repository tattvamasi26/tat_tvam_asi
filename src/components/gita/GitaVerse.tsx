import type { Locale } from "@/i18n/config";
import type { GitaVerse as Verse } from "@/lib/gita";
import { translationParts } from "@/lib/gita";
import { devanagariToIast } from "@/lib/iast";
import { scriptFor, scriptClass } from "@/lib/script";

/**
 * One verse as the book sets it: the mūla in the reader's script, a
 * speaker line ("अर्जुन उवाच") set apart where the print has one, the
 * transliteration on English pages, and Besant and Bhagavan Das's
 * English beneath.
 *
 * The translation is English on every page, because it is the only one
 * there is; on Kannada and Hindi pages it carries lang="en" and the
 * chapter says once, above the verses, that it is not yet translated.
 *
 * Reuses the stotra reader's classes (stotra.css) rather than forking
 * them: a verse of the Gita reads like a verse of a stotra.
 */
// A daṇḍa never starts a line of its own on a narrow screen.
const bind = (s: string) => s.replace(/\s+([।॥|]+)/g, " $1");

export function GitaVerseBody({ verse, locale }: { verse: Verse; locale: Locale }) {
  const sc = scriptClass(locale);
  const verseLines = verse.lines.filter((l) => !l.speaker);
  return (
    <div className="stotra-verse-body">
      <div className={`stotra-verse-mula ${sc}`}>
        {verse.lines.map((l, i) =>
          l.speaker ? (
            <p key={i} className="gita-speaker">
              {scriptFor(l.t, locale)}
            </p>
          ) : (
            <p key={i}>{bind(scriptFor(l.t, locale))}</p>
          ),
        )}
      </div>
      {locale === "en" && (
        <div className="stotra-verse-iast translit">
          {verseLines.map((l, i) => (
            <p key={i}>{bind(devanagariToIast(l.t))}</p>
          ))}
        </div>
      )}
      <div className="stotra-verse-meaning gita-translation" lang={locale === "en" ? undefined : "en"}>
        {translationParts(verse.translation).map((p, i) => (
          <p key={i}>
            {p.speaker && <span className="gita-said">{p.speaker} said:</span>} {p.text}
          </p>
        ))}
      </div>
    </div>
  );
}
