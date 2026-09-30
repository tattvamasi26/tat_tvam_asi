/**
 * Finding a Gregorian date in prose that should not have one.
 *
 * Both halves of Rituals & Festivals keep the same rule: an occasion
 * is a tithi, an hour or a stage of life, never a calendar date.
 * "Ganesha Chaturthi is in August" is wrong every other year.
 *
 * The naive version of this check — a case-insensitive list of the
 * twelve month names — reports the English modal verb in "before it he
 * may not study the Veda". So months are matched as prose actually
 * writes them, capitalised, and "May" additionally has to sit next to
 * something date-shaped before it counts.
 *
 * Only Latin-script month names are checked. The Kannada and Hindi
 * strings are covered by the year pattern, and the festivals' standing
 * note deliberately prints ಆಗಸ್ಟ್ while explaining why no date is
 * given — catching that would be catching the site making the point.
 */

const MONTHS =
  "January|February|March|April|June|July|August|September|October|November|December";

// A year, an unambiguous month, or "May" with a date-shaped neighbour:
// "in May", "May 2026", "3 May". Deliberately case-sensitive.
const GREGORIAN = new RegExp(
  [
    "\\b(?:19|20)\\d{2}\\b",
    `\\b(?:${MONTHS})\\b`,
    "\\b(?:in|of|by|on|around|during|early|late|mid|from|until)\\s+May\\b",
    "\\bMay\\s+\\d",
    "\\b\\d{1,2}\\s+May\\b",
  ].join("|"),
);

/** The offending text, or null when the prose is clean. */
export function gregorianDateIn(prose: string): string | null {
  return prose.match(GREGORIAN)?.[0] ?? null;
}
