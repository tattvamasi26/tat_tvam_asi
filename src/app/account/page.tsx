import type { Metadata } from "next";
import Link from "next/link";
import { redirect } from "next/navigation";
import { getTranslations } from "@/i18n/server";
import { accountStrings } from "@/i18n/account";
import { LOCALE_META } from "@/i18n/config";
import { currentReader } from "@/lib/auth";
import { AuthCard } from "@/components/account/AuthCard";
import { Arrow } from "@/components/ui/Arrow";

export const metadata: Metadata = {
  title: "Your account",
  robots: { index: false, follow: false },
};

/** The signed-in reader's page, set in the same card as sign-in. */
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
    { label: s.reading, value: s.readingValue },
    { label: s.joined, value: date(reader.joined) },
    { label: s.lastSignIn, value: date(reader.lastSignIn) },
  ].filter((r) => r.value);

  const initial = (reader.name || reader.email || "?").trim().charAt(0).toUpperCase();

  return (
    <AuthCard credit={s.pictureCredit}>
      <div className="auth-who">
        <span className="auth-avatar" aria-hidden="true">
          {initial}
        </span>
        <p className="eyebrow">{s.yourAccount}</p>
      </div>
      <h1 className="title auth-title">
        {s.accountTitle} <span className="accent">{s.accountTitleAccent}</span>
      </h1>
      <p className="lede auth-lede">{s.accountLede}</p>

      <dl className="auth-rows">
        {rows.map((r) => (
          <div key={r.label} className="auth-row">
            <dt>{r.label}</dt>
            {/* An email address is Latin whatever the page's language. */}
            <dd lang={r.latin ? "en" : undefined}>{r.value}</dd>
          </div>
        ))}
      </dl>

      <div className="auth-buttons">
        <Link href="/" className="btn">
          {s.keepReading} <Arrow />
        </Link>
        <form action="/auth/signout" method="post">
          <button type="submit" className="btn btn-outline">
            {s.signOut}
          </button>
        </form>
      </div>
    </AuthCard>
  );
}
