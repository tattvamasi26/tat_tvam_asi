// ─────────────────────────────────────────────────────────
//  The mark.
//
//  A yantra reduced to its essentials, not a "spiritual" glyph:
//
//    · the bindu at the exact centre — the undivided point
//    · two concentric enclosures — the mandala's boundary
//    · four cardinal strokes — the four Vedas, the four
//      directions, the four mathas Shankara set at the corners
//      of the land
//
//  Pure geometry: circles, lines, one dot. No gradients, no
//  raster, no text. It survives at 24px because there is nothing
//  in it that depends on fine detail, and it draws itself in the
//  same stroke weight as the site's hairlines.
// ─────────────────────────────────────────────────────────

export function Mark({
  size = 34,
  className = "",
  animated = false,
}: {
  size?: number;
  className?: string;
  /** Draws the enclosures on first paint. Used once, in the nav overlay. */
  animated?: boolean;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      className={`mark ${animated ? "mark-draw" : ""} ${className}`.trim()}
      aria-hidden="true"
      focusable="false"
    >
      {/* Outer enclosure */}
      <circle cx="24" cy="24" r="21" stroke="currentColor" strokeWidth="1" opacity="0.55" />
      {/* Inner enclosure */}
      <circle cx="24" cy="24" r="13" stroke="currentColor" strokeWidth="1" opacity="0.85" />

      {/* Four cardinal strokes, bridging the two enclosures */}
      <path
        d="M24 3v8M24 37v8M3 24h8M37 24h8"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
        opacity="0.75"
      />

      {/* The bindu */}
      <circle cx="24" cy="24" r="3.6" fill="currentColor" />
    </svg>
  );
}

/**
 * Mark + wordmark, the standard lockup used in the masthead.
 * The wordmark stays Devanagari in every language: it is the site's
 * name, not a string to be translated.
 */
export function Wordmark({ size = 30 }: { size?: number }) {
  return (
    <span className="lockup">
      <Mark size={size} />
      <span className="lockup-text deva">तत् त्वम् असि</span>
    </span>
  );
}
