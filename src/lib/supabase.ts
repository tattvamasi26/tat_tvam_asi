// ─────────────────────────────────────────────────────────
//  Server-only Supabase clients. Importing `next/headers` makes this module
//  unusable from client components — use lib/supabase-browser.ts there
//  (e.g. the admin login form) instead.
//
//  - `supabaseServer()` — cookie-aware client for Server
//    Components / Route Handlers that need to read the admin's
//    auth session (used by the /admin auth gate).
//  - `getSupabasePublic()` — anonymous, public-read client used
//    by every query in lib/db.ts. Safe to share across requests;
//    it only ever operates under the anon key's public-read RLS
//    policies (see supabase/schema.sql).
//  - `supabaseAdmin()` — service-role client that bypasses RLS.
//    Must only ever be instantiated inside server actions/route
//    handlers that have already verified the caller is the
//    admin. Never import this into a client component.
// ─────────────────────────────────────────────────────────
import { createServerClient, type CookieOptions } from "@supabase/ssr";
import { createClient, type SupabaseClient } from "@supabase/supabase-js";
import { cookies } from "next/headers";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL ?? "";
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? "";

export async function supabaseServer() {
  const cookieStore = await cookies();
  return createServerClient(supabaseUrl, supabaseAnonKey, {
    cookies: {
      getAll: () => cookieStore.getAll(),
      setAll: (cookiesToSet: { name: string; value: string; options: CookieOptions }[]) => {
        try {
          cookiesToSet.forEach(({ name, value, options }) => cookieStore.set(name, value, options));
        } catch {
          // Called from a context without a mutable cookie jar (e.g. a
          // Server Component render) — safe to ignore here since we only
          // ever read the session in those contexts, never refresh it.
        }
      },
    },
  });
}

// Typed as the plain (ungenerated-schema) SupabaseClient explicitly — letting
// TS infer this from createClient()'s return value produces bogus `never`
// row types several calls downstream once no Database generic is supplied.
// We don't have generated Database types yet (a future improvement once the
// schema stabilizes); until then every query in lib/db.ts maps rows into our
// own hand-written view interfaces, which is where the real type safety is.
let _supabasePublic: SupabaseClient<any, any, any> | undefined;

// Lazily constructed so that merely importing this module (or lib/db.ts)
// never throws — only actually running a query does, and only once
// NEXT_PUBLIC_SUPABASE_URL/ANON_KEY are missing, which is expected until
// Phase 0's Supabase project is created (see docs/ROADMAP.md).
export function getSupabasePublic(): SupabaseClient<any, any, any> {
  if (!_supabasePublic) {
    if (!supabaseUrl || !supabaseAnonKey) {
      throw new Error(
        "NEXT_PUBLIC_SUPABASE_URL / NEXT_PUBLIC_SUPABASE_ANON_KEY are not set. " +
          "Create a Supabase project, run supabase/schema.sql, and set these in .env.local — see README.md."
      );
    }
    _supabasePublic = createClient(supabaseUrl, supabaseAnonKey);
  }
  return _supabasePublic;
}

export function supabaseAdmin(): SupabaseClient<any, any, any> {
  const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!serviceKey) throw new Error("SUPABASE_SERVICE_ROLE_KEY is not set");
  return createClient(supabaseUrl, serviceKey, {
    auth: { autoRefreshToken: false, persistSession: false },
  });
}
