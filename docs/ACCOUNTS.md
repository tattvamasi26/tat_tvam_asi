# Readers' accounts

Readers can sign in with Google. A few reading pages are free without
an account; after that the reader signs in, free, to read on (the
reading meter, below). It is built so that payment can be added later.

## How it works

```
/signin ──link──▶ /auth/google ──302──▶ Supabase ──▶ Google
                                                       │
/account ◀──302── /auth/callback?code=… ◀──────────────┘
```

- **The whole flow runs on the server.**
  - `/auth/google` asks Supabase for the Google address, and leaves the
    PKCE verifier in a cookie.
  - `/auth/callback` exchanges Google's one-time code for a session.
  - There is no client component, no Supabase code in the browser and
    no CSP exception.
- **The start is a plain link, not a form.** Chrome applies
  `form-action 'self'` to a form's redirects too. A form posting to
  `/auth/google` would be stopped on its way to Google.
- **`next` is checked** (`src/lib/auth-paths.ts`). Only a path on this
  site is accepted. That rules out `//host`, a backslash, a control
  character and the sign-in routes themselves. Otherwise the sign-in
  would be an open redirect.
- **The server trusts `getUser()`, never `getSession()`.** The first
  asks Supabase to verify the token. The second only decodes a cookie,
  which anyone can write.
- **The middleware refreshes the session** on `/account`, `/signin`,
  `/auth/*` and `/admin`, and on a reading page that carries a
  session cookie (the meter must know who is signed in).
  - A Server Component cannot write cookies. A refresh there would be
    lost, and the spent token would fail the next time.
  - Elsewhere no page reads the session. So a reader on an ordinary
    page never costs the site a call to Supabase.
- **Sign-out is POST only**, from the account page. It refuses a request
  from another site's origin.
- The masthead's account button opens sign-in for a signed-out reader
  (returning them to the page they were on) and the account page for
  a signed-in one.
- **The sign-in page is set in the site's feature card**: a Rigveda
  manuscript on the left, the words on the right, a band above them on
  a phone. Sent by the meter (`?reason=limit`), it says the free pages
  are used and shows them as five filled pips.

## Staying signed in

A reader signs in once per browser. The session lives in Supabase's
cookies, kept for 400 days; the access token lasts an hour and the
middleware renews it with the refresh token on any reading page or
account page, so the reader never sees it expire. On the project,
`sessions_timebox` and `sessions_inactivity_timeout` are both 0 (no
forced sign-out). A reader is signed out only by pressing Sign out,
clearing the site's cookies, or a different browser or device. Signing
in again there is one click: Google remembers the account.

## The reading meter

A reader may open **five reading pages a month** without an account.
The sixth sends them to sign in, and sign-in brings them back to that
page. The code is `src/lib/security/reading-gate.ts` and step 6 of
`src/middleware.ts`.

- **A reading page is one item inside a section**: a text, a stotra, a
  hymn, a temple or acharya written up, a festival, a song. Indexes,
  section pages, the home page, search, `/rights` and `/practice` are
  never counted. Opening a page already read does not count again.
  The list of patterns is `GATED`; the unit test holds both sides.
- **The count is a cookie signed with HMAC** (`tta_meter`, httpOnly),
  so it cannot be edited. It holds the window's start and eight hex
  digits of each page's path hash. A reader who deletes it starts
  again; that is accepted. This is a door, not a vault.
- **A client that keeps no cookies** is counted by address instead,
  thirty reading pages a day, in memory.
- **Google's and Bing's crawlers read freely**, but only once their
  address is checked against the ranges each engine publishes. A
  client that merely says "Googlebot" is metered. Each metered page
  carries schema.org `isAccessibleForFree: false` markup, which is
  how Google asks a site to declare this, so it is not cloaking.
- **A router prefetch of a reading page gets an empty 204** for a
  signed-out reader. Otherwise the pages linked from a page would be
  read past the meter unseen.
- **It is on only where sign-in works.** The middleware checks
  `authStatus()`: if Supabase is down, or no way in is switched on,
  every page is open. `READING_GATE=off` switches it off by hand.
  The secret is `METER_SECRET`, written once by `npm run setup:auth`;
  changing it gives every reader a fresh allowance.
- **The reader is told before the wall.** With two or fewer free pages
  left, a small card at the foot of a reading page says so
  (`components/account/MeterNotice.tsx`). It reads `tta_meter_left`,
  a plain cookie that is only a hint. The masthead's account button
  reads `tta_signed_in` the same way, to choose between sign-in and
  the account page. Neither cookie grants anything.

## What is stored

`profiles` (in `supabase/schema.sql`) holds one row per account. A
database trigger makes the row when Supabase creates the user.

| column | from |
|---|---|
| `id` | the Supabase user id; deleting the user deletes the row |
| `email`, `full_name` | Google |
| `locale` | `en` by default |
| `created_at`, `updated_at` | the database |

Supabase itself keeps the login in `auth.users`. That includes the last
sign-in time the account page shows.

- **No public read.** `profiles` is the one table with no `using (true)`
  policy. A reader can read and update only their own row.
- **Column grants, not row policies, limit what a reader may change.**
  Only `full_name` and `locale` are granted.
  - A column added later for payments (a customer id, a plan, a
    paid-until date) is therefore writable only by the service role.
    That means behind `requireAdmin()` or a verified payment webhook.
  - Add such columns without granting them.
- The sign-in page says what is kept, in three languages. If anything
  else is ever collected, that sentence changes in the same commit.

## Switching it on

`npm run setup:auth` (`scripts/setup-auth.mjs`) does the Supabase side. It finds or creates the project, applies `supabase/schema.sql`, configures sign-in and writes the keys into `.env.local`. It is safe to run again. Only two things need a person, because neither has an API.

**Step 1: a Supabase access token (2 minutes).**

1. Sign in at supabase.com. Your old project there no longer exists, so a new one will be made.
2. Click your avatar (bottom left), then **Account preferences**, then **Access Tokens**, then **Generate new token**.
3. Copy `.env.setup.example` to `.env.setup` and paste the token as `SUPABASE_ACCESS_TOKEN`.
4. Run `npm run setup:auth`. It prints the address Google will need.

**Step 2: a Google OAuth client (5 minutes).**

1. Open console.cloud.google.com and choose or create a project.
2. Go to **APIs & Services**, then **OAuth consent screen**:
   - user type **External**;
   - app name "Tat Tvam Asi", with your email as the support and developer contact;
   - scopes: leave the defaults (`email`, `profile`, `openid`);
   - then **Publish app**, so anyone can sign in, not only test users.
3. Go to **APIs & Services**, then **Credentials**, then **Create credentials**, then **OAuth client ID**, with type **Web application**:
   - **Authorised JavaScript origins**: `http://localhost:3000`, and the live address once deployed.
   - **Authorised redirect URIs**: the address step 1 printed, `https://<project-ref>.supabase.co/auth/v1/callback`.
4. Paste the client ID and secret into `.env.setup` as `GOOGLE_CLIENT_ID` and `GOOGLE_CLIENT_SECRET`.
5. Run `npm run setup:auth` again, then restart the dev server.

"Continue with Google" now appears on `/signin` and works.

**Optional: sign-in by email code.** Supabase's own mailer only delivers to members of your Supabase team, so email codes for the public need an SMTP service.

1. Resend's free tier is enough: verify a domain there and create an API key.
2. Put the `SMTP_*` values in `.env.setup`, as described in the example file.
3. Run the script again.

The sign-in page offers the email form only once this is done (`SIGNIN_EMAIL=on`).

**When the site goes live.**

1. Set `SITE_URL` to the live address and run the script again.
2. Add the same `NEXT_PUBLIC_*`, `SUPABASE_SERVICE_ROLE_KEY`, `NEXT_PUBLIC_SITE_URL` and `SIGNIN_EMAIL` values to the host's environment.
3. Add the live address to the Google client's JavaScript origins.

**What readers see meanwhile.** The sign-in page checks Supabase before offering anything (`src/lib/auth-status.ts`). It shows Google only if Google is on, the email form only if email codes are on, and otherwise "Sign-in is not available right now". It never sends a reader to a project that does not answer.

## Before taking payment

- **Add a privacy notice** and link it from the sign-in page. It lists
  what is collected, why, and how to have an account deleted. India's
  DPDP Act 2023 expects one once personal data is collected.
- **Let a reader delete their own account.** Use a server action that
  calls `supabaseAdmin().auth.admin.deleteUser(id)`, for the signed-in
  user only. The cascade removes the profile.
- **Keep payment data with the provider.**
  - Store the provider's customer id on `profiles`, in a column with no
    grant to `authenticated`.
  - Never store card data.
  - Take every payment through the provider's hosted checkout.
  - Treat only the provider's signed webhook as proof of payment.
