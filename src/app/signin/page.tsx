import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { getTranslations } from "@/i18n/server";
import { accountStrings } from "@/i18n/account";
import { isSupabaseConfigured } from "@/lib/supabase";
import { currentReader } from "@/lib/auth";
import { safeNext } from "@/lib/auth-paths";
import { GoogleMark } from "@/components/account/GoogleMark";
import { Caution } from "@/components/ui/Caution";

export const metadata: Metadata = {
  title: "Sign in",
  robots: { index: false, follow: false },
};

/** Laid out as Rights and About are: a page head, then one narrow column. */
export default async function SignInPage({
  searchParams,
}: {
  searchParams: { next?: string; error?: string };
}) {
  const { locale } = getTranslations();
  const s = accountStrings(locale);
  const next = safeNext(searchParams.next);

  if (await currentReader()) redirect(next);
  const configured = isSupabaseConfigured();

  return (
    <>
      <section className="pagehead">
        <div className="shell-narrow pagehead-inner">
          <h1 className="title">{s.signinTitle}</h1>
          <p className="lede">{s.signinLede}</p>
        </div>
      </section>

      <section className="shell-narrow stack-lg" style={{ paddingTop: 0 }}>
        <div className="account-card">
          {searchParams.error && (
            <p className="notice-uncited account-notice" role="alert">
              <Caution /> {s.failed}
            </p>
          )}
          {configured ? (
            // A plain <a>, not <Link>: the router must never prefetch
            // the start of a sign-in.
            <a className="btn btn-outline account-google" href={`/auth/google?next=${encodeURIComponent(next)}`}>
              <GoogleMark />
              {s.google}
            </a>
          ) : (
            <p className="notice-uncited account-notice">
              <Caution /> {s.unavailable}
            </p>
          )}

          <hr className="rule" />
          <h2 className="eyebrow">{s.keptTitle}</h2>
          <p className="prose account-kept">{s.kept}</p>
        </div>
      </section>
    </>
  );
}
