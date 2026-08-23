import type { CSSProperties } from "react";
import { getAllSources } from "@/lib/db";
import { createSource, deleteSource } from "./actions";

export const dynamic = "force-dynamic";

const COPYRIGHT_STATUSES = [
  "public_domain_pre_1928",
  "public_domain_other",
  "cc_by",
  "cc_by_sa",
  "licensed",
  "original_by_site_owner",
  "legacy_uncited_flagged",
  "pending_review",
];

const inputStyle: CSSProperties = {
  padding: "0.6rem 0.9rem",
  background: "var(--bg0)",
  border: "1px solid rgba(200,150,62,0.2)",
  color: "var(--text0)",
  fontFamily: "var(--sans)",
  fontSize: "0.85rem",
};

const buttonStyle: CSSProperties = {
  padding: "0.6rem 1.2rem",
  background: "var(--gold)",
  color: "#111",
  border: "none",
  cursor: "pointer",
  fontFamily: "var(--sans)",
  fontSize: "0.75rem",
  letterSpacing: "0.08em",
  textTransform: "uppercase",
  width: "fit-content",
};

export default async function SourcesAdminPage() {
  const sources = await getAllSources();

  return (
    <div style={{ maxWidth: 900, margin: "0 auto", color: "var(--text0)", fontFamily: "var(--sans)" }}>
      <h1 style={{ fontFamily: "var(--serif)", fontSize: "2rem", fontWeight: 300, marginBottom: "0.5rem" }}>Sources</h1>
      <p style={{ color: "var(--text2)", fontSize: "0.85rem", marginBottom: "2rem" }}>
        Every translation and commentary entry must cite one of these before it can be saved.
      </p>

      <form action={createSource} style={{ display: "grid", gap: "0.75rem", marginBottom: "3rem", padding: "1.5rem", background: "var(--bg1)", border: "1px solid rgba(200,150,62,0.15)" }}>
        <input name="work_title" placeholder="Work title (required)" required style={inputStyle} />
        <input name="translator_author" placeholder="Translator / author" style={inputStyle} />
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.75rem" }}>
          <input name="publisher" placeholder="Publisher" style={inputStyle} />
          <input name="publication_year" type="number" placeholder="Publication year" style={inputStyle} />
        </div>
        <input name="edition" placeholder="Edition" style={inputStyle} />
        <select name="copyright_status" defaultValue="pending_review" style={inputStyle}>
          {COPYRIGHT_STATUSES.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
        <input name="license_url" placeholder="License URL" style={inputStyle} />
        <input name="source_url" placeholder="Source URL (e.g. an archive.org scan)" style={inputStyle} />
        <textarea name="notes" placeholder="Notes" rows={2} style={inputStyle} />
        <button type="submit" style={buttonStyle}>
          Add source
        </button>
      </form>

      <div style={{ display: "flex", flexDirection: "column", gap: 2, background: "var(--bg3)" }}>
        {sources.map((s) => (
          <div key={s.id} style={{ background: "var(--bg0)", padding: "1.25rem 1.5rem", display: "flex", justifyContent: "space-between", gap: "1rem", alignItems: "center" }}>
            <div>
              <p style={{ fontWeight: 500 }}>{s.work_title}</p>
              <p style={{ fontSize: "0.8rem", color: "var(--text2)" }}>
                {s.translator_author ?? "—"}
                {s.publication_year ? ` · ${s.publication_year}` : ""} · {s.copyright_status}
              </p>
            </div>
            <form action={deleteSource.bind(null, s.id)}>
              <button type="submit" style={{ ...buttonStyle, background: "transparent", color: "var(--text2)", border: "1px solid rgba(200,150,62,0.3)" }}>
                Delete
              </button>
            </form>
          </div>
        ))}
        {sources.length === 0 && <p style={{ padding: "1.5rem", color: "var(--text2)" }}>No sources yet.</p>}
      </div>
    </div>
  );
}
