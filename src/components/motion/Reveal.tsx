import type { ReactNode, CSSProperties } from "react";

/**
 * Scroll reveal — with no JavaScript at all.
 *
 * This was originally a client component driving an IntersectionObserver.
 * That made the content's *visibility* depend on hydration completing: if
 * the bundle was slow, errored, or simply had not run yet, everything
 * inside stayed at opacity 0 and the page looked empty. Content that is
 * present in the HTML should never be invisible because a script did not
 * run.
 *
 * So the animation is now CSS scroll-driven (`animation-timeline: view()`),
 * gated behind `@supports`. Browsers with support animate the element as it
 * enters the scrollport; browsers without it — and anyone with reduced
 * motion — simply see the content, which is the correct fallback.
 *
 * Being a Server Component, this also ships zero JS for the effect.
 */
export function Reveal({
  children,
  delay = 0,
  as: Tag = "div",
  className = "",
  style,
}: {
  children: ReactNode;
  /** Staggers siblings by nudging where in the scroll range the animation starts. */
  delay?: number;
  as?: "div" | "section" | "li" | "article";
  className?: string;
  style?: CSSProperties;
}) {
  return (
    <Tag
      className={`reveal-item ${className}`.trim()}
      style={{ ["--reveal-stagger" as string]: `${Math.min(delay / 12, 12)}%`, ...style }}
    >
      {children}
    </Tag>
  );
}
