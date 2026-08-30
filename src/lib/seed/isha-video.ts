// ─────────────────────────────────────────────────────────
//  Swami Sarvapriyananda's Īśā Upaniṣad series.
//
//  Twelve talks given at the Vedanta Society of New York, mapped
//  onto the verses each one covers. Several talks cover a range
//  (9–11, 12–14, 15–16, 17–18), so more than one verse points at
//  the same video — that is correct, not a duplication bug.
//
//  Linked, never embedded. Nineteen YouTube iframes on one page
//  would each pull in the player bundle and set third-party
//  cookies before anyone has asked to watch anything. A thumbnail
//  and a link cost nothing until clicked.
//
//  Thumbnails come from i.ytimg.com, which next.config.js must
//  allow as a remote pattern.
// ─────────────────────────────────────────────────────────

export interface VerseVideo {
  /** YouTube id. */
  id: string;
  /** Talk number in the series, as the Society numbers them. */
  talk: number;
  /** Which mantras this talk covers, for the caption. */
  covers: string;
}

/** verse locator → the talk that treats it. */
export const ISHA_VIDEOS: Record<string, VerseVideo> = {
  invocation: { id: "CyCe-1E4MvM", talk: 1, covers: "Introduction · Mantra 1" },
  "1": { id: "elSA5oX15fY", talk: 2, covers: "Mantra 1, continued" },
  "2": { id: "t-Zw_XVUdLg", talk: 3, covers: "Mantra 2" },
  "3": { id: "UXeduym36ys", talk: 4, covers: "Mantra 3" },
  "4": { id: "Bggq7GQXV-Q", talk: 5, covers: "Mantras 4–5" },
  "5": { id: "Bggq7GQXV-Q", talk: 5, covers: "Mantras 4–5" },
  "6": { id: "iWEZmyfKOog", talk: 6, covers: "Mantra 6" },
  "7": { id: "jXvY630KDpI", talk: 7, covers: "Mantra 7" },
  "8": { id: "9ZGvYIa0OGY", talk: 8, covers: "Mantra 8" },
  "9": { id: "UkxjttpfFMo", talk: 9, covers: "Mantras 9–11" },
  "10": { id: "UkxjttpfFMo", talk: 9, covers: "Mantras 9–11" },
  "11": { id: "UkxjttpfFMo", talk: 9, covers: "Mantras 9–11" },
  "12": { id: "bQq6WmscMw4", talk: 10, covers: "Mantras 12–14" },
  "13": { id: "bQq6WmscMw4", talk: 10, covers: "Mantras 12–14" },
  "14": { id: "bQq6WmscMw4", talk: 10, covers: "Mantras 12–14" },
  "15": { id: "lRWGYTB9kgI", talk: 11, covers: "Mantras 15–16" },
  "16": { id: "lRWGYTB9kgI", talk: 11, covers: "Mantras 15–16" },
  "17": { id: "GQh2y62N3nE", talk: 12, covers: "Mantras 17–18" },
  "18": { id: "GQh2y62N3nE", talk: 12, covers: "Mantras 17–18" },
};

export const VIDEO_SERIES = {
  speaker: "Swami Sarvapriyananda",
  org: "Vedanta Society of New York",
  channel: "https://www.youtube.com/@VedantaNY",
};

export function watchUrl(id: string) {
  return `https://www.youtube.com/watch?v=${id}`;
}

export function thumbUrl(id: string) {
  return `https://i.ytimg.com/vi/${id}/mqdefault.jpg`;
}
