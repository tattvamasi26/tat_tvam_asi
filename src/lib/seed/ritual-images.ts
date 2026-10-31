import type { Locale } from "@/i18n/config";

// ─────────────────────────────────────────────────────────
//  Pictures for the rites — and there are none.
//
//  **This section is drawn, not photographed.** Seventeen
//  licence-checked Commons photographs were fetched for it and all of
//  them were removed: documentary photographs of other people's
//  ceremonies are not what this site looks like, and a rite is not a
//  thing a stranger's snapshot explains. The pages were built to work
//  without them in the first place — a group opens with its own glyph
//  on a plate, a rite opens with its name on paper in the reader's
//  script — so removing them did not leave holes. It removed the
//  weakest thing on the page.
//
//  **Do not fill this in from an image search.** If a picture belongs
//  here it will be one the site's owner chose or supplied, credited
//  the way `seed/stuti-images.ts` credits theirs. There is deliberately
//  no `rituals` set in scripts/images/fetch-commons.mjs any more, so
//  this cannot be refilled by running a script.
//
//  The plumbing stays because the pages already handle a picture and
//  a missing one, and an owner-supplied photograph should be one entry
//  here rather than a re-wiring. Ids are ritual slugs, plus
//  `g-<group>` for the plate at the head of a group.
// ─────────────────────────────────────────────────────────

export interface RitualImage {
  src: string;
  width: number;
  height: number;
  /** Who it came from. An owner-supplied picture says so and links nowhere. */
  credit: string;
  sourceUrl?: string;
  /** What is in the frame, never what the rite means. */
  alt: Record<Locale, string>;
  /** Which part of the frame a crop must keep. */
  position?: string;
}

/** Empty on purpose. See the note above before adding to it. */
const IMAGES: Record<string, RitualImage> = {};

export function ritualImage(slug: string): RitualImage | undefined {
  return IMAGES[slug];
}

export function ritualGroupImage(group: string): RitualImage | undefined {
  return IMAGES[`g-${group}`];
}

export function allRitualImages(): [string, RitualImage][] {
  return Object.entries(IMAGES);
}
