import type { Metadata } from "next";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { getTranslations } from "@/i18n/server";
import { accountStrings, type AccountStrings } from "@/i18n/account";
import { authStatus } from "@/lib/auth-status";
import { currentReader } from "@/lib/auth";
import { EMAIL_COOKIE, safeNext } from "@/lib/auth-paths";
import { GoogleMark } from "@/components/account/GoogleMark";
import { Caution } from "@/components/ui/Caution";
import { sendCode, startOver, verifyCode } from "./actions";

export const metadata: Metadata = {
  title: "Sign in",
  robots: { index: false, follow: false },
};

const ERRORS: Record<string, keyof AccountStrings> = {
  "1": "failed",
  email: "badEmail",
  code: "badCode",
  send: "sendFailed",
  wait: "wait",
  expired: "expired",
  unavailable: "unavailable",
};

/**
 * Sign in, which is also sign up: the first sign-in makes the account.
 * Two ways in — Google, and a six-digit code sent by email — each shown
 * only when it actually works (lib/auth-status.ts), so a reader is never
 * sent to a provider that is switched off or a project that is down.
 * Laid out as Rights and About are: a page head, then one narrow column.
 */
export default async function SignInPage({
  searchParams,
}: {
  searchParams: { next?: string; error?: string; step?: string };
}) {
  const { locale } = getTranslations();
  const s = accountStrings(locale);
  const next = safeNext(searchParams.next);
  const status = await authStatus();

  if (status.state === "ready" && (await currentReader())) redirect(next);

  const pending = cookies().get(EMAIL_COOKIE)?.value ?? null;
  const onCodeStep = searchParams.step === "code" && pending;
  const error = searchParams.error ? s[ERRORS[searchParams.error] ?? "failed"] : null;

  return (
    <>
      <section className="pagehead">
        <div className="shell-narrow pagehead-inner">
          <h1 className="title">{onCodeStep ? s.codeTitle : s.signinTitle}</h1>
          <p className="lede">{onCodeStep ? s.codeSent.replace("{email}", pending) : s.signinLede}</p>
        </div>
      </section>

      <section className="shell-narrow stack-lg" style={{ paddingTop: 0 }}>
        <div className="account-card">
          {error && (
            <p className="notice-uncited account-notice" role="alert">
              <Caution /> {error}
            </p>
          )}

          {status.state !== "ready" || (!status.google && !status.email) ? (
            <p className="notice-uncited account-notice">
              <Caution /> {status.state === "unreachable" ? s.unavailable : s.notSwitchedOn}
              {process.env.NODE_ENV !== "production" && (
                // For the site's owner on their own machine, never shown live.
                <> Run npm run setup:auth (see docs/ACCOUNTS.md).</>
              )}
            </p>
          ) : onCodeStep ? (
            <>
              <form action={verifyCode} className="account-form">
                <input type="hidden" name="next" value={next} />
                <label className="account-field">
                  <span>{s.codeLabel}</span>
                  <input
                    className="account-input account-code"
                    name="code"
                    inputMode="numeric"
                    autoComplete="one-time-code"
                    pattern="[0-9]{6,10}"
                    maxLength={10}
                    required
                    autoFocus
                  />
                </label>
                <button type="submit" className="btn">
                  {s.verify}
                </button>
              </form>
              <form action={startOver}>
                <input type="hidden" name="next" value={next} />
                <button type="submit" className="btn-ghost account-link">
                  {s.useAnotherEmail}
                </button>
              </form>
            </>
          ) : (
            <>
              {status.google && (
                // A plain <a>, not <Link>: the router must never prefetch
                // the start of a sign-in.
                <a className="btn btn-outline account-google" href={`/auth/google?next=${encodeURIComponent(next)}`}>
                  <GoogleMark />
                  {s.google}
                </a>
              )}
              {status.google && status.email && (
                <p className="account-or">
                  <span>{s.or}</span>
                </p>
              )}
              {status.email && (
                <form action={sendCode} className="account-form">
                  <input type="hidden" name="next" value={next} />
                  <label className="account-field">
                    <span>{s.emailLabel}</span>
                    <input className="account-input" type="email" name="email" autoComplete="email" required maxLength={254} />
                  </label>
                  <button type="submit" className="btn">
                    {s.sendCode}
                  </button>
                </form>
              )}
            </>
          )}

          <hr className="rule" />
          <h2 className="eyebrow">{s.keptTitle}</h2>
          <p className="prose account-kept">{s.kept}</p>
        </div>
      </section>
    </>
  );
}
