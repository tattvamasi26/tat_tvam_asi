// Set up readers' sign-in end to end, through Supabase's Management API.
//
//   npm run setup:auth
//
// Reads .env.setup (git-ignored; see .env.setup.example). Safe to run
// again: every step checks what is already there.
//
//   1. Finds the Supabase project named SUPABASE_PROJECT_NAME, or
//      creates it (Mumbai region), and waits until it is up.
//   2. Runs supabase/schema.sql in it (the schema is safe to re-run).
//   3. Configures sign-in: the site's address and the allowed return
//      addresses; Google, when GOOGLE_CLIENT_ID and GOOGLE_CLIENT_SECRET
//      are given; email codes, when SMTP_* are given (Supabase's own
//      mailer reaches only the project's team, so the public needs SMTP).
//   4. Writes the project's URL and keys into .env.local, keeping every
//      other line, and backs the old file up first.
//
// What it cannot do for you is in docs/ACCOUNTS.md: make the access
// token, and create the Google OAuth client (Google offers no API for
// that). The script prints the exact address Google needs.

import { readFileSync, writeFileSync, existsSync, copyFileSync } from "node:fs";
import { randomBytes } from "node:crypto";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const API = "https://api.supabase.com/v1";
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

// ── Settings ───────────────────────────────────────────────
function readEnvFile(file) {
  if (!existsSync(file)) return {};
  const out = {};
  for (const line of readFileSync(file, "utf8").split(/\r?\n/)) {
    const m = /^\s*([A-Z0-9_]+)\s*=\s*(.*)\s*$/.exec(line);
    if (m) out[m[1]] = m[2].replace(/^["']|["']$/g, "");
  }
  return out;
}
const cfg = { ...readEnvFile(join(ROOT, ".env.setup")), ...process.env };
const need = (k) => {
  if (!cfg[k]) {
    console.error(`\n  Missing ${k}. Put it in .env.setup (copy .env.setup.example) and run again.\n`);
    process.exit(1);
  }
  return cfg[k];
};

const TOKEN = need("SUPABASE_ACCESS_TOKEN");
const NAME = cfg.SUPABASE_PROJECT_NAME || "tat-tvam-asi";
const REGION = cfg.SUPABASE_REGION || "ap-south-1";
const SITE = (cfg.SITE_URL || "http://localhost:3000").replace(/\/$/, "");
const EXTRA_URLS = (cfg.EXTRA_SITE_URLS || "http://localhost:3000,http://localhost:3001")
  .split(",")
  .map((s) => s.trim().replace(/\/$/, ""))
  .filter(Boolean);

async function api(method, path, body) {
  for (let attempt = 0; attempt < 5; attempt++) {
    const res = await fetch(API + path, {
      method,
      headers: { Authorization: `Bearer ${TOKEN}`, "Content-Type": "application/json" },
      body: body ? JSON.stringify(body) : undefined,
    });
    const text = await res.text();
    if (res.status === 429 || res.status >= 500) {
      await sleep(3000 * (attempt + 1));
      continue;
    }
    if (!res.ok) throw new Error(`${method} ${path}: HTTP ${res.status} ${text.slice(0, 300)}`);
    return text ? JSON.parse(text) : null;
  }
  throw new Error(`${method} ${path}: Supabase kept refusing`);
}

const step = (n, s) => console.log(`\n${n}. ${s}`);

// ── 1. The project ─────────────────────────────────────────
step(1, `Supabase project "${NAME}"`);
const projects = await api("GET", "/projects");
// By its id when given (SUPABASE_PROJECT_REF), else by name, else the
// account's only project — a free project paused for inactivity is
// restored rather than replaced, so nothing in it is lost.
let project =
  projects.find((p) => p.id === cfg.SUPABASE_PROJECT_REF) ??
  projects.find((p) => p.name === NAME) ??
  (projects.length === 1 && !cfg.SUPABASE_PROJECT_NAME ? projects[0] : undefined);
if (project) {
  console.log(`   found: ${project.id} "${project.name}" (${project.region}), status ${project.status}`);
  if (["INACTIVE", "PAUSED"].includes(project.status)) {
    console.log("   it is paused; restoring it (this keeps its data)");
    await api("POST", `/projects/${project.id}/restore`, {});
  }
} else {
  const orgs = await api("GET", "/organizations");
  const org = cfg.SUPABASE_ORG_ID ? orgs.find((o) => o.id === cfg.SUPABASE_ORG_ID || o.slug === cfg.SUPABASE_ORG_ID) : orgs[0];
  if (!org) throw new Error("No Supabase organisation found for this token.");
  const dbPass = randomBytes(24).toString("base64url");
  project = await api("POST", "/projects", {
    name: NAME,
    organization_id: org.id,
    organization_slug: org.slug ?? org.id,
    db_pass: dbPass,
    region: REGION,
  });
  console.log(`   created: ${project.id} in ${REGION} (organisation ${org.name})`);
  console.log("   The database password was generated and is not needed again; reset it in the dashboard if you ever want it.");
}
const ref = project.id;
process.stdout.write("   waiting for it to come up");
for (let i = 0; i < 90; i++) {
  const p = await api("GET", `/projects/${ref}`);
  if (p.status === "ACTIVE_HEALTHY") break;
  if (i === 89) throw new Error(`Project still ${p.status} after 15 minutes.`);
  process.stdout.write(".");
  await sleep(10_000);
}
console.log(" up.");
const url = `https://${ref}.supabase.co`;

// ── 2. The schema ──────────────────────────────────────────
step(2, "Database schema (supabase/schema.sql)");
await api("POST", `/projects/${ref}/database/query`, { query: readFileSync(join(ROOT, "supabase", "schema.sql"), "utf8") });
console.log("   applied.");

// ── 3. Sign-in ─────────────────────────────────────────────
step(3, "Sign-in settings");
const google = Boolean(cfg.GOOGLE_CLIENT_ID && cfg.GOOGLE_CLIENT_SECRET);
const smtp = Boolean(cfg.SMTP_HOST && cfg.SMTP_USER && cfg.SMTP_PASS && cfg.SMTP_SENDER_EMAIL);
const codeEmail = (heading) => `<h2>${heading}</h2>
<p>Your sign-in code for Tat Tvam Asi is:</p>
<p style="font-size:28px;letter-spacing:6px;font-weight:700">{{ .Token }}</p>
<p>It works for one hour. If you did not ask for it, you can ignore this email.</p>`;

const auth = {
  site_url: SITE,
  uri_allow_list: [...new Set([SITE, ...EXTRA_URLS])].map((u) => `${u}/auth/callback`).join(","),
  disable_signup: false,
  external_email_enabled: true,
  // Email codes, not links: a code works on whichever device the reader
  // is signing in on.
  mailer_otp_exp: 3600,
  mailer_otp_length: 6,
  external_google_enabled: google,
  ...(google ? { external_google_client_id: cfg.GOOGLE_CLIENT_ID, external_google_secret: cfg.GOOGLE_CLIENT_SECRET } : {}),
  ...(smtp
    ? {
        smtp_host: cfg.SMTP_HOST,
        smtp_port: String(cfg.SMTP_PORT || "465"),
        smtp_user: cfg.SMTP_USER,
        smtp_pass: cfg.SMTP_PASS,
        smtp_admin_email: cfg.SMTP_SENDER_EMAIL,
        smtp_sender_name: cfg.SMTP_SENDER_NAME || "Tat Tvam Asi",
        // Supabase lets a free project change its email templates only
        // once it sends through its own SMTP.
        mailer_subjects_magic_link: "Your Tat Tvam Asi sign-in code",
        mailer_templates_magic_link_content: codeEmail("Sign in"),
        mailer_subjects_confirmation: "Your Tat Tvam Asi sign-in code",
        mailer_templates_confirmation_content: codeEmail("Welcome"),
      }
    : {}),
};
await api("PATCH", `/projects/${ref}/config/auth`, auth);
console.log(`   site: ${SITE}`);
console.log(`   Google: ${google ? "on" : "off (no GOOGLE_CLIENT_ID / GOOGLE_CLIENT_SECRET yet)"}`);
console.log(`   Email codes: ${smtp ? "on, through " + cfg.SMTP_HOST : "off (no SMTP_* yet)"}`);

// ── 4. The keys, into .env.local ───────────────────────────
step(4, "Writing .env.local");
const keys = await api("GET", `/projects/${ref}/api-keys?reveal=true`);
const anon = keys.find((k) => k.name === "anon")?.api_key;
const service = keys.find((k) => k.name === "service_role")?.api_key;
if (!anon || !service) throw new Error("Could not read the project's anon and service_role keys.");

const envFile = join(ROOT, ".env.local");
// The reading meter's signing secret: made once, then kept, so readers'
// free-page counts survive a re-run.
const existingSecret = readEnvFile(envFile).METER_SECRET;
const set = {
  METER_SECRET: existingSecret || randomBytes(32).toString("base64url"),
  NEXT_PUBLIC_SUPABASE_URL: url,
  NEXT_PUBLIC_SUPABASE_ANON_KEY: anon,
  SUPABASE_SERVICE_ROLE_KEY: service,
  NEXT_PUBLIC_SITE_URL: SITE,
  SIGNIN_EMAIL: smtp ? "on" : "off",
};
let lines = [];
if (existsSync(envFile)) {
  copyFileSync(envFile, envFile + ".bak");
  lines = readFileSync(envFile, "utf8").split(/\r?\n/).filter((l) => !Object.keys(set).some((k) => l.startsWith(k + "=")));
}
while (lines.length && !lines.at(-1).trim()) lines.pop();
lines.push(...Object.entries(set).map(([k, v]) => `${k}=${v}`));
writeFileSync(envFile, lines.join("\n") + "\n");
console.log(`   done (the previous file is at .env.local.bak).`);

// ── What is left ───────────────────────────────────────────
console.log("\n─────────────────────────────────────────────");
if (!google) {
  console.log(`To switch on "Continue with Google":
  In Google Cloud Console, create an OAuth client (type: Web application) with
    Authorised JavaScript origin:  ${SITE}
    Authorised redirect URI:       ${url}/auth/v1/callback
  then put GOOGLE_CLIENT_ID and GOOGLE_CLIENT_SECRET in .env.setup and run
  npm run setup:auth again.`);
}
if (!smtp) {
  console.log(`\nTo switch on sign-in by email code, add SMTP_* to .env.setup (see
.env.setup.example) and run npm run setup:auth again.`);
}
console.log("\nRestart the dev server so it reads the new .env.local.");
