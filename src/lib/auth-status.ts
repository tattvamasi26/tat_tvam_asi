// Whether readers' sign-in works right now, and by which ways.
//
// The sign-in page asks this before it offers a button, so a reader is
// never sent off to a Supabase project that does not answer, or to a
// Google sign-in that was never switched on (the browser's
// ERR_NAME_NOT_RESOLVED page is what that looked like). Server-only.

export type AuthStatus =
  /** No Supabase URL and key in the environment. */
  | { state: "not-configured" }
  /** Configured, but the project does not answer (deleted, paused, offline). */
  | { state: "unreachable" }
  | { state: "ready"; google: boolean; email: boolean };

let cached: { at: number; value: AuthStatus } | null = null;
const TTL_MS = 60_000;

export async function authStatus(): Promise<AuthStatus> {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  if (!url || !key) return { state: "not-configured" };
  if (cached && Date.now() - cached.at < TTL_MS) return cached.value;

  let value: AuthStatus;
  try {
    // Supabase Auth's public settings: which providers are switched on.
    const res = await fetch(`${url.replace(/\/$/, "")}/auth/v1/settings`, {
      headers: { apikey: key },
      signal: AbortSignal.timeout(4000),
      cache: "no-store",
    });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const s = (await res.json()) as { external?: Record<string, boolean>; disable_signup?: boolean };
    value = {
      state: "ready",
      google: Boolean(s.external?.google),
      // A first sign-in by email creates the account, so it needs sign-ups
      // on — and a mail service that reaches the public. Supabase's own
      // mailer delivers only to the project's team, so the setup script
      // sets SIGNIN_EMAIL=on only once SMTP is configured.
      email: Boolean(s.external?.email) && !s.disable_signup && process.env.SIGNIN_EMAIL === "on",
    };
  } catch {
    value = { state: "unreachable" };
  }
  cached = { at: Date.now(), value };
  return value;
}
