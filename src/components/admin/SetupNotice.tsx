import Link from "next/link";

/**
 * Shown wherever an admin surface needs Supabase and it is not configured
 * yet. The point is that a missing env var is a setup step, not a crash —
 * so this states exactly which steps are outstanding rather than throwing.
 */
export function SetupNotice({ missing }: { missing: string[] }) {
  return (
    <div className="shell-narrow stack-lg">
      <p className="eyebrow">Setup required</p>
      <h1 className="title" style={{ marginTop: "0.75rem" }}>
        Connect Supabase to use the admin
      </h1>
      <p className="lede" style={{ marginTop: "1rem" }}>
        The public site runs entirely from the local seed data in
        <code style={{ color: "var(--gold)" }}> src/lib/seed/</code> and needs no database.
        The admin writes content, so it needs a live project.
      </p>

      <div className="verse" style={{ marginTop: "2rem" }}>
        <div className="fact-label">Missing environment variables</div>
        <div className="chips" style={{ marginTop: "0.8rem" }}>
          {missing.map((k) => (
            <span key={k} className="chip chip-gold">
              {k}
            </span>
          ))}
        </div>
      </div>

      <ol className="prose" style={{ marginTop: "2rem", paddingLeft: "1.2rem" }}>
        <li>Create a free project at supabase.com.</li>
        <li>
          Run <code style={{ color: "var(--gold)" }}>supabase/schema.sql</code> in its SQL Editor.
        </li>
        <li>
          Copy <code style={{ color: "var(--gold)" }}>.env.local.example</code> to{" "}
          <code style={{ color: "var(--gold)" }}>.env.local</code> and fill in the values.
        </li>
        <li>
          Run <code style={{ color: "var(--gold)" }}>npm run seed</code> to push the local content up.
        </li>
      </ol>

      <p className="prose" style={{ marginTop: "1.5rem" }}>
        Full walkthrough is in <code style={{ color: "var(--gold)" }}>README.md</code>, Steps 2–4.
      </p>

      <div style={{ marginTop: "2.5rem" }}>
        <Link href="/" className="btn">
          Back to the site
        </Link>
      </div>
    </div>
  );
}

/** Which of the admin's required variables are absent right now. */
export function missingSupabaseEnv(): string[] {
  return (
    [
      ["NEXT_PUBLIC_SUPABASE_URL", process.env.NEXT_PUBLIC_SUPABASE_URL],
      ["NEXT_PUBLIC_SUPABASE_ANON_KEY", process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY],
      ["SUPABASE_SERVICE_ROLE_KEY", process.env.SUPABASE_SERVICE_ROLE_KEY],
      ["ADMIN_EMAIL", process.env.ADMIN_EMAIL],
    ] as const
  )
    .filter(([, value]) => !value)
    .map(([key]) => key);
}
