/**
 * A drawn arrow, used wherever the interface points somewhere.
 *
 * Replaces the text glyphs → ← ↗. None of the site's fonts carry the
 * Arrows block in the subsets Google serves, so every text arrow was
 * drawn by whatever system font the device fell back to — a different
 * weight, width and baseline on every OS, and visibly foreign next to
 * the letters around it. An inline SVG is the same everywhere, takes
 * its colour from the text, and sizes with it (1em).
 */
export function Arrow({
  dir = "right",
  className = "",
}: {
  dir?: "right" | "left" | "up-right";
  className?: string;
}) {
  const d =
    dir === "left"
      ? "M19 12H5M11 6l-6 6 6 6"
      : dir === "up-right"
        ? "M7 17L17 7M9 7h8v8"
        : "M5 12h14M13 6l6 6-6 6";

  return (
    <svg
      className={["arrow", `arrow-${dir}`, className].filter(Boolean).join(" ")}
      viewBox="0 0 24 24"
      width="1em"
      height="1em"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      <path d={d} />
    </svg>
  );
}
