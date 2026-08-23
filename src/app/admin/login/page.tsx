"use client";
import { useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { supabaseBrowser, isSupabaseConfiguredBrowser } from "@/lib/supabase-browser";

export default function AdminLoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const configured = isSupabaseConfiguredBrowser();

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError(null);
    const supabase = supabaseBrowser();
    const { error: signInError } = await supabase.auth.signInWithPassword({ email, password });
    setLoading(false);
    if (signInError) {
      setError(signInError.message);
      return;
    }
    router.replace("/admin/sources");
    router.refresh();
  }

  return (
    <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", background: "var(--bg-0)" }}>
      <form
        onSubmit={handleSubmit}
        style={{ width: 360, display: "flex", flexDirection: "column", gap: "1rem", padding: "2.5rem", background: "var(--bg-1)", border: "1px solid rgba(200,150,62,0.2)" }}
      >
        <h1 style={{ fontFamily: "var(--serif)", fontSize: "1.5rem", fontWeight: 300, color: "var(--ink-0)", marginBottom: "0.5rem" }}>Admin sign in</h1>

        {!configured && (
          <div style={{ borderLeft: "2px solid var(--saffron)", paddingLeft: "0.9rem", marginBottom: "0.5rem" }}>
            <p style={{ fontFamily: "var(--sans)", fontSize: "0.8rem", color: "var(--ink-2)", lineHeight: 1.6 }}>
              Supabase is not configured yet, so sign-in will fail. The public site runs without it —
              see README.md, Steps 2–4.
            </p>
            <Link href="/" style={{ fontFamily: "var(--sans)", fontSize: "0.75rem", color: "var(--gold)" }}>
              ← Back to the site
            </Link>
          </div>
        )}
        <input
          type="email"
          required
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{ padding: "0.75rem 1rem", background: "var(--bg-0)", border: "1px solid rgba(200,150,62,0.2)", color: "var(--ink-0)", fontFamily: "var(--sans)", fontSize: "0.85rem" }}
        />
        <input
          type="password"
          required
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{ padding: "0.75rem 1rem", background: "var(--bg-0)", border: "1px solid rgba(200,150,62,0.2)", color: "var(--ink-0)", fontFamily: "var(--sans)", fontSize: "0.85rem" }}
        />
        {error && <p style={{ color: "var(--saffron)", fontSize: "0.8rem" }}>{error}</p>}
        <button
          type="submit"
          disabled={loading}
          style={{ padding: "0.75rem 1rem", background: "var(--gold)", color: "#111", border: "none", cursor: "pointer", fontFamily: "var(--sans)", letterSpacing: "0.1em", textTransform: "uppercase", fontSize: "0.75rem" }}
        >
          {loading ? "Signing in…" : "Sign in"}
        </button>
      </form>
    </div>
  );
}
