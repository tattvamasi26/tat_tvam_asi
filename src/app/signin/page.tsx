import type { Metadata } from "next";
import Link from "next/link";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { getTranslations } from "@/i18n/server";
import { accountStrings, fill, type AccountStrings } from "@/i18n/account";
import { authStatus } from "@/lib/auth-status";
import { currentReader } from "@/lib/auth";
import { EMAIL_COOKIE, safeNext } from "@/lib/auth-paths";
import { FREE_READS, LEFT_COOKIE } from "@/lib/security/reading-gate";
import { GoogleMark } from "@/components/account/GoogleMark";
import { AuthCard, AuthPoint } from "@/components/account/AuthCard";
import { Caution } from "@/components/ui/Caution";
import { Arrow } from "@/components/ui/Arrow";
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
 *
 * Reached two ways: from the masthead, or sent here by the reading meter
 * (`reason=limit`) when a reader's free pages are used — then the page
 * says so, shows the count, and returns them to the page they were on.
 * Each way in (Google, an emailed code) is offered only when it works
 * (lib/auth-status.ts).
 */
export default async function SignInPage({
  searchParams,
}: {
  searchParams: { next?: string; error?: string; step?: string; reason?: string };
}) {
  const { locale } = getTranslations();
  const s = accountStrings(locale);
  const next = safeNext(searchParams.next);
  const status = await authStatus();

  if (status.state === "ready" && (await currentReader())) redirect(next);

  const jar = cookies();
  const pending = jar.get(EMAIL_COOKIE)?.value ?? null;
  const onCodeStep = searchParams.step === "code" && Boolean(pending);
  const limit = searchParams.reason === "limit";
  const left = Number(jar.get(LEFT_COOKIE)?.value ?? FREE_READS);
  const used = limit ? FREE_READS : Math.max(0, Math.min(FREE_READS, FREE_READS - (Number.isFinite(left) ? left : FREE_READS)));
  const error = searchParams.error ? s[ERRORS[searchParams.error] ?? "failed"] : null;
  const ready = status.state === "ready" && (status.google || status.email);

  const [title, accent] = onCodeStep
    ? [s.codeTitle, s.codeTitleAccent]
    : limit
      ? [s.titleLimit, s.titleLimitAccent]
      : [s.title, s.titleAccent];
  const lede = onCodeStep
    ? fill(s.codeSent, { email: pending ?? "" })
    : limit
      ? fill(s.ledeLimit, { n: FREE_READS })
      : s.lede;

  return (
    <AuthCard credit={s.pictureCredit}>
      <p className="eyebrow">{limit ? s.chipLimit : s.chip}</p>
      <h1 className="title auth-title">
        {title} <span className="accent">{accent}</span>
      </h1>
      <p className="lede auth-lede">{lede}</p>

      {used > 0 && !onCodeStep && (
        <div className="auth-meter" role="img" aria-label={fill(s.meter, { used, n: FREE_READS })}>
          <span className="auth-meter-pips" aria-hidden="true">
            {Array.from({ length: FREE_READS }, (_, i) => (
              <span key={i} className="auth-meter-pip" data-on={i < used ? "" : undefined} />
            ))}
          </span>
          <span className="auth-meter-text">{fill(s.meter, { used, n: FREE_READS })}</span>
        </div>
      )}

      {error && (
        <p className="auth-alert" role="alert">
          <Caution /> {error}
        </p>
      )}

      {!ready ? (
        <p className="auth-alert">
          <Caution /> {status.state === "unreachable" ? s.unavailable : s.notSwitchedOn}
          {process.env.NODE_ENV !== "production" && <> Run npm run setup:auth (see docs/ACCOUNTS.md).</>}
        </p>
      ) : onCodeStep ? (
        <div className="auth-actions">
          <form action={verifyCode} className="auth-form">
            <input type="hidden" name="next" value={next} />
            <label className="auth-field">
              <span>{s.codeLabel}</span>
              <input
                className="auth-input auth-code"
                name="code"
                inputMode="numeric"
                autoComplete="one-time-code"
                pattern="[0-9]{6,10}"
                maxLength={10}
                required
                autoFocus
              />
            </label>
            <button type="submit" className="btn auth-submit">
              {s.verify} <Arrow />
            </button>
          </form>
          <form action={startOver}>
            <input type="hidden" name="next" value={next} />
            <button type="submit" className="auth-textbtn">
              {s.useAnotherEmail}
            </button>
          </form>
        </div>
      ) : (
        <div className="auth-actions">
          {status.google && (
            // A plain <a>, not <Link>: the router must never prefetch
            // the start of a sign-in.
            <a className="auth-google" href={`/auth/google?next=${encodeURIComponent(next)}`}>
              <GoogleMark />
              <span>{s.google}</span>
            </a>
          )}
          {status.google && status.email && (
            <p className="auth-or">
              <span>{s.or}</span>
            </p>
          )}
          {status.email && (
            <form action={sendCode} className="auth-form">
              <input type="hidden" name="next" value={next} />
              <label className="auth-field">
                <span>{s.emailLabel}</span>
                <input className="auth-input" type="email" name="email" autoComplete="email" required maxLength={254} />
              </label>
              <button type="submit" className="btn auth-submit">
                {s.sendCode}
              </button>
            </form>
          )}
        </div>
      )}

      <ul className="auth-points">
        <AuthPoint icon="free" title={s.pointFree} note={s.pointFreeNote} />
        <AuthPoint icon="open" title={s.pointOpen} note={s.pointOpenNote} />
        <AuthPoint icon="kept" title={s.pointKept} note={s.pointKeptNote} />
      </ul>

      <div className="auth-foot">
        <p>
          {s.rightsNote}{" "}
          <Link href="/rights" className="auth-link">
            {s.rightsLink}
          </Link>
        </p>
        {limit && (
          <Link href="/" className="btn-ghost">
            <Arrow dir="left" /> {s.notNow}
          </Link>
        )}
      </div>
    </AuthCard>
  );
}
