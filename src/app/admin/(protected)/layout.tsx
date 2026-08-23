import { redirect } from "next/navigation";
import Link from "next/link";
import type { ReactNode } from "react";
import { supabaseServer, isSupabaseConfigured } from "@/lib/supabase";
import { SetupNotice, missingSupabaseEnv } from "@/components/admin/SetupNotice";

// Single-admin auth gate — no roles/permissions system, deliberately, per
// docs/ROADMAP.md. Authorization is just "is this the one admin account."
export default async function AdminProtectedLayout({ children }: { children: ReactNode }) {
  // Check before constructing a client: with no env vars, createServerClient
  // throws, and the admin would 500 rather than say what is missing.
  if (!isSupabaseConfigured()) {
    return <SetupNotice missing={missingSupabaseEnv()} />;
  }

  const supabase = await supabaseServer();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user || !process.env.ADMIN_EMAIL || user.email !== process.env.ADMIN_EMAIL) {
    redirect("/admin/login");
  }

  return (
    <div style={{ minHeight: "100vh", background: "var(--bg-0)" }}>
      <nav style={{ display: "flex", alignItems: "center", gap: "1.5rem", padding: "1.5rem 2rem", borderBottom: "1px solid rgba(200,150,62,0.15)" }}>
        <Link href="/admin/sources" style={{ color: "var(--gold)", fontFamily: "var(--sans)", fontSize: "0.75rem", letterSpacing: "0.1em", textTransform: "uppercase", textDecoration: "none" }}>
          Sources
        </Link>
        <span style={{ marginLeft: "auto", color: "var(--ink-2)", fontFamily: "var(--sans)", fontSize: "0.75rem" }}>{user.email}</span>
      </nav>
      <main style={{ padding: "2rem" }}>{children}</main>
    </div>
  );
}
