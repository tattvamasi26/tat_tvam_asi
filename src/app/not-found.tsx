import Link from "next/link";
import { getTranslations } from "@/i18n/server";

export default function NotFound() {
  const { t } = getTranslations();

  return (
    <section className="shell-narrow stack-xl" style={{ textAlign: "center" }}>
      <span className="om" style={{ fontSize: "2.5rem" }}>ॐ</span>
      <h1 className="title" style={{ marginTop: "1.5rem" }}>{t.notFoundTitle}</h1>
      <p className="lede" style={{ margin: "1rem auto 2.5rem" }}>{t.notFoundBody}</p>
      <Link href="/" className="btn">{t.backHome}</Link>
    </section>
  );
}
