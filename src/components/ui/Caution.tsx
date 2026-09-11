/**
 * A drawn caution mark for the "not yet cited" notice.
 *
 * Replaces the text glyph ⚠, which none of the site's fonts carry —
 * every device drew it from its own symbol font, in its own colour and
 * weight. This one takes the notice's colour and sits on its baseline.
 */
export function Caution({ className = "" }: { className?: string }) {
  return (
    <svg
      className={["caution", className].filter(Boolean).join(" ")}
      viewBox="0 0 24 24"
      width="1.05em"
      height="1.05em"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M12 3.6 2.7 19.6h18.6z" />
      <path d="M12 9.8v4.4" />
      <path d="M12 17.2h.01" />
    </svg>
  );
}
