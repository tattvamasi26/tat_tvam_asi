import Image from "next/image";
import type { ReactNode } from "react";

/**
 * The frame both sign-in and the account page are set in: the site's
 * feature block — a picture held on the left of a large rounded card,
 * the words on the right — so signing in looks like part of the site,
 * not a form bolted onto it. On a phone the picture becomes a short
 * band above the words.
 *
 * The picture is a Rigveda manuscript (public domain): reading is what
 * an account is for.
 */
export function AuthCard({ credit, children }: { credit: string; children: ReactNode }) {
  return (
    <section className="auth shell">
      <div className="auth-card">
        <figure className="auth-media">
          <Image
            src="/images/site/rigveda.jpg"
            alt=""
            fill
            priority
            sizes="(max-width: 860px) 100vw, 420px"
            style={{ objectFit: "cover", objectPosition: "50% 50%" }}
          />
          <figcaption className="auth-media-credit">{credit}</figcaption>
        </figure>
        <div className="auth-body">{children}</div>
      </div>
    </section>
  );
}

/** One of the three short reassurances, on the site's marigold circle. */
export function AuthPoint({ icon, title, note }: { icon: "free" | "open" | "kept"; title: string; note: string }) {
  return (
    <li className="auth-point">
      <span className="auth-point-icon" aria-hidden="true">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          {icon === "free" && (
            <>
              <path d="M20 12v8H4v-8" />
              <path d="M2 7h20v5H2z" />
              <path d="M12 22V7" />
              <path d="M12 7H7.5a2.5 2.5 0 1 1 0-5C11 2 12 7 12 7z" />
              <path d="M12 7h4.5a2.5 2.5 0 1 0 0-5C13 2 12 7 12 7z" />
            </>
          )}
          {icon === "open" && (
            <>
              <path d="M2 4h6a4 4 0 0 1 4 4v13a3 3 0 0 0-3-3H2z" />
              <path d="M22 4h-6a4 4 0 0 0-4 4v13a3 3 0 0 1 3-3h7z" />
            </>
          )}
          {icon === "kept" && (
            <>
              <rect x="4" y="11" width="16" height="10" rx="2" />
              <path d="M8 11V7a4 4 0 0 1 8 0v4" />
            </>
          )}
        </svg>
      </span>
      <span>
        <span className="auth-point-title">{title}</span>
        <span className="auth-point-note">{note}</span>
      </span>
    </li>
  );
}
