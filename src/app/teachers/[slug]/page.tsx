import { getAllTeachers, getTeacherBySlug } from "@/lib/db";
import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";

export async function generateStaticParams() {
  const teachers = await getAllTeachers();
  return teachers.map(t => ({ slug: t.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const t = await getTeacherBySlug(params.slug);
  if (!t) return { title: "Teacher Not Found" };
  return { title: t.name, description: t.biography?.slice(0, 160) };
}

export default async function TeacherPage({ params }: { params: { slug: string } }) {
  const teacher = await getTeacherBySlug(params.slug);
  if (!teacher) notFound();

  return (
    <div style={{ background: "var(--bg0)", minHeight: "100vh", paddingTop: 100 }}>
      <div style={{ borderBottom: "1px solid rgba(200,150,62,0.1)", padding: "60px 2rem 50px" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <Link href="/teachers" style={{ fontFamily: "var(--sans)", fontSize: "0.65rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--text2)", textDecoration: "none", display: "block", marginBottom: "2rem" }}>← All Teachers</Link>
          <p style={{ fontFamily: "var(--sans)", fontSize: "0.65rem", letterSpacing: "0.3em", textTransform: "uppercase", color: "var(--saffron)", marginBottom: "1rem" }}>{teacher.era} · {teacher.tradition}</p>
          <h1 style={{ fontFamily: "var(--serif)", fontSize: "clamp(2.5rem,5vw,4.5rem)", fontWeight: 300, color: "var(--text0)", lineHeight: 1.1, marginBottom: "0.5rem" }}>{teacher.name}</h1>
          {teacher.name_sanskrit && <p style={{ fontFamily: "var(--serif)", fontSize: "1.8rem", color: "var(--text2)", fontWeight: 300 }}>{teacher.name_sanskrit}</p>}
        </div>
      </div>
      <div style={{ maxWidth: 900, margin: "0 auto", padding: "60px 2rem" }}>
        {teacher.quote && <blockquote style={{ fontFamily: "var(--serif)", fontSize: "1.4rem", fontStyle: "italic", fontWeight: 300, color: "var(--text0)", borderLeft: "2px solid var(--gold)", paddingLeft: "2rem", lineHeight: 1.7, marginBottom: "4rem", opacity: 0.9 }}>"{teacher.quote}"</blockquote>}
        <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr", gap: "4rem" }}>
          <div>
            <p style={{ fontFamily: "var(--sans)", fontSize: "0.65rem", letterSpacing: "0.3em", textTransform: "uppercase", color: "var(--saffron)", marginBottom: "1.2rem" }}>Life & Teaching</p>
            <p style={{ fontFamily: "var(--sans)", fontSize: "0.95rem", color: "var(--text1)", lineHeight: 2, fontWeight: 300 }}>{teacher.biography}</p>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
            {teacher.key_works?.length > 0 && (
              <div>
                <p style={{ fontFamily: "var(--sans)", fontSize: "0.65rem", letterSpacing: "0.3em", textTransform: "uppercase", color: "var(--saffron)", marginBottom: "1rem" }}>Key Works</p>
                <div style={{ display: "flex", flexDirection: "column", gap: 2, background: "var(--bg3)" }}>
                  {teacher.key_works.map(work => (
                    <div key={work} style={{ background: "var(--bg1)", padding: "1rem 1.5rem" }}>
                      <p style={{ fontFamily: "var(--serif)", fontSize: "0.95rem", fontStyle: "italic", color: "var(--text0)", fontWeight: 300 }}>{work}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
            <div style={{ display: "flex", flexDirection: "column", gap: 2, background: "var(--bg3)" }}>
              {[["Tradition", teacher.tradition], ["Era", teacher.era], teacher.birth_year ? ["Born", `${teacher.birth_year} CE`] : null, teacher.death_year ? ["Mahasamadhi", `${teacher.death_year} CE`] : null].filter(Boolean).map(pair => (
                <div key={pair![0]} style={{ background: "var(--bg1)", padding: "1.2rem 1.5rem" }}>
                  <p style={{ fontFamily: "var(--sans)", fontSize: "0.6rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--text2)", marginBottom: "0.3rem" }}>{pair![0]}</p>
                  <p style={{ fontFamily: "var(--serif)", fontSize: "1rem", fontWeight: 300, color: "var(--text0)" }}>{pair![1]}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
