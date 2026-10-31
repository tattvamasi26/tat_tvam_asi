"use server";
import { z } from "zod";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { supabaseServer } from "@/lib/supabase";
import { authStatus } from "@/lib/auth-status";
import { EMAIL_COOKIE, safeNext } from "@/lib/auth-paths";

/**
 * Signing in by email: a six-digit code sent to the address, typed back
 * on the same page. The first sign-in creates the account, so this is
 * sign-up and sign-in in one. Supabase rate-limits how often a code can
 * be sent to an address; the address itself waits between the two steps
 * in a short-lived httpOnly cookie, never in the URL.
 */

const emailSchema = z.string().trim().toLowerCase().email().max(254);
const codeSchema = z.string().trim().regex(/^\d{6,10}$/);

function back(params: Record<string, string>, next: string): never {
  const q = new URLSearchParams({ ...params, ...(next !== "/account" ? { next } : {}) });
  redirect(`/signin?${q}`);
}

export async function sendCode(formData: FormData) {
  const next = safeNext(String(formData.get("next") ?? ""));
  const email = emailSchema.safeParse(formData.get("email"));
  if (!email.success) back({ error: "email" }, next);

  const status = await authStatus();
  if (status.state !== "ready" || !status.email) back({ error: "unavailable" }, next);

  const supabase = await supabaseServer();
  const { error } = await supabase.auth.signInWithOtp({
    email: email.data,
    options: { shouldCreateUser: true },
  });
  if (error) back({ error: error.status === 429 ? "wait" : "send" }, next);

  cookies().set(EMAIL_COOKIE, email.data, {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/signin",
    maxAge: 60 * 60,
  });
  back({ step: "code" }, next);
}

export async function verifyCode(formData: FormData) {
  const next = safeNext(String(formData.get("next") ?? ""));
  const email = emailSchema.safeParse(cookies().get(EMAIL_COOKIE)?.value);
  if (!email.success) back({ error: "expired" }, next);
  const code = codeSchema.safeParse(formData.get("code"));
  if (!code.success) back({ step: "code", error: "code" }, next);

  const supabase = await supabaseServer();
  const { error } = await supabase.auth.verifyOtp({ email: email.data, token: code.data, type: "email" });
  if (error) back({ step: "code", error: "code" }, next);

  cookies().delete({ name: EMAIL_COOKIE, path: "/signin" });
  redirect(next);
}

/** Back to the first step, to use another address. */
export async function startOver(formData: FormData) {
  const next = safeNext(String(formData.get("next") ?? ""));
  cookies().delete({ name: EMAIL_COOKIE, path: "/signin" });
  back({}, next);
}
