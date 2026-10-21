import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { getTranslations } from "@/i18n/server";
import { accountStrings } from "@/i18n/account";
import { LOCALE_META } from "@/i18n/config";
import { currentReader } from "@/lib/auth";

export const metadata: Metadata = {
  title: "Your account",
  robots: { index: false, follow: false },
};

export default async function AccountPage() {
  const { locale } = getTranslations();
  const s = accountStrings(locale);
  const reader = await currentReader();
  if (!reader) redirect("/signin?next=/account");

  const date = (iso: string | null) =>
    iso
      ? new Date(iso).toLocaleDateString(`${LOCALE_META[locale].htmlLang}-IN`, { dateStyle: "long" })
      : null;

  const rows = [
    { label: s.name, value: reader.name },
    { label: s.email, value: reader.email, latin: true },
    { label: s.joined, value: date(reader.joined) },
    { label: s.lastSignIn, value: date(reader.lastSignIn) },
  ].filter((r) => r.value);

  return (
    <>
      <section className="pagehead">
        <div className="shell-narrow pagehead-inner">
          <h1 className="title">{s.accountTitle}</h1>
          <p className="lede">{s.accountLede}</p>
        </div>
      </section>

      <section className="shell-narrow stack-lg" style={{ paddingTop: 0 }}>
        <div className="account-card">
          <dl className="account-list">
            {rows.map((r) => (
              <div key={r.label} className="account-row">
                <dt>{r.label}</dt>
                {/* An email address is Latin whatever the page's language. */}
                <dd lang={r.latin ? "en" : undefined}>{r.value}</dd>
              </div>
            ))}
          </dl>
          <form action="/auth/signout" method="post">
            <button type="submit" className="btn btn-outline">
              {s.signOut}
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
