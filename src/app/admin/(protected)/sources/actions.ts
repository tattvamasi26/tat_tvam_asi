"use server";
import { z } from "zod";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { supabaseServer, supabaseAdmin } from "@/lib/supabase";

const COPYRIGHT_STATUSES = [
  "public_domain_pre_1928",
  "public_domain_other",
  "cc_by",
  "cc_by_sa",
  "licensed",
  "original_by_site_owner",
  "legacy_uncited_flagged",
  "pending_review",
] as const;

const sourceSchema = z.object({
  work_title: z.string().min(1, "Work title is required"),
  translator_author: z.string().optional(),
  publisher: z.string().optional(),
  publication_year: z.coerce.number().int().optional(),
  edition: z.string().optional(),
  copyright_status: z.enum(COPYRIGHT_STATUSES),
  license_url: z.string().url().optional().or(z.literal("")),
  source_url: z.string().url().optional().or(z.literal("")),
  notes: z.string().optional(),
});

// Every write action re-verifies the admin session server-side — the
// service-role client below bypasses RLS, so this check is the only gate.
async function requireAdmin() {
  const supabase = await supabaseServer();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user || !process.env.ADMIN_EMAIL || user.email !== process.env.ADMIN_EMAIL) {
    redirect("/admin/login");
  }
}

export async function createSource(formData: FormData) {
  await requireAdmin();

  const parsed = sourceSchema.safeParse(Object.fromEntries(formData));
  if (!parsed.success) {
    throw new Error(parsed.error.issues.map((i) => i.message).join(", "));
  }

  const { error } = await supabaseAdmin()
    .from("sources")
    .insert({
      ...parsed.data,
      translator_author: parsed.data.translator_author || null,
      publisher: parsed.data.publisher || null,
      edition: parsed.data.edition || null,
      license_url: parsed.data.license_url || null,
      source_url: parsed.data.source_url || null,
      notes: parsed.data.notes || null,
    });
  if (error) throw new Error(error.message);

  revalidatePath("/admin/sources");
}

export async function deleteSource(id: string) {
  await requireAdmin();
  const { error } = await supabaseAdmin().from("sources").delete().eq("id", id);
  if (error) throw new Error(error.message);
  revalidatePath("/admin/sources");
}
