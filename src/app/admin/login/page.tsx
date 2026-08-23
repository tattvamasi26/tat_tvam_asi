"use client";
import { useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import { supabaseBrowser } from "@/lib/supabase-browser";

export default function AdminLoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

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
    <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", background: "var(--bg0)" }}>
      <form
        onSubmit={handleSubmit}
        style={{ width: 360, display: "flex", flexDirection: "column", gap: "1rem", padding: "2.5rem", background: "var(--bg1)", border: "1px solid rgba(200,150,62,0.2)" }}
      >
        <h1 style={{ fontFamily: "var(--serif)", fontSize: "1.5rem", fontWeight: 300, color: "var(--text0)", marginBottom: "0.5rem" }}>Admin sign in</h1>
        <input
          type="email"
          required
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{ padding: "0.75rem 1rem", background: "var(--bg0)", border: "1px solid rgba(200,150,62,0.2)", color: "var(--text0)", fontFamily: "var(--sans)", fontSize: "0.85rem" }}
        />
        <input
          type="password"
          required
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{ padding: "0.75rem 1rem", background: "var(--bg0)", border: "1px solid rgba(200,150,62,0.2)", color: "var(--text0)", fontFamily: "var(--sans)", fontSize: "0.85rem" }}
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
