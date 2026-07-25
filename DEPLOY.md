# Vocali — running, deploying and installing

Everything here is run from a terminal on your PC, in the project folder `E:\Vocal App`.
You need **Node.js 18+** installed (https://nodejs.org — take the LTS version).

---

## 1. Run it locally (first time)

```bash
cd "E:\Vocal App\app"
npm install          # once, downloads dependencies
npm run dev          # starts the dev server
```

Open the address it prints (usually `http://localhost:5173`). Edits reload instantly.

To check the content standard at any time:

```bash
npm run check:content
```

To produce the production build (this runs the content check first, and fails if a
section is incomplete):

```bash
npm run build        # output goes to app/dist/
npm run preview      # serve the built version locally to check it
```

---

## 2. Put it on GitHub (backup + hosting in one step)

Right now the project exists only on your E: drive. Getting it onto GitHub gives you
a backup **and** the hosting you already use.

**a. Create the repository.** On github.com, click **New repository**, name it
`vocali`, and do **not** add a README.

**Public or private?** This matters, because the two goals differ:

- **Backup only** → choose **Private**. Works on the free plan, and nobody can see your
  code or writing.
- **Backup + publish on GitHub Pages** → on the **free** plan, Pages only publishes from
  a **public** repository. Publishing from a private repo requires GitHub **Pro**. Note
  that either way the *published site itself is public* — the repo setting only controls
  whether the source is visible.
- **Want the repo private but still published, without paying?** Deploy via
  **Cloudflare Pages** or **Netlify** instead — both build from a private GitHub repo on
  their free tiers. The app is plain static output, so it works there unchanged (set the
  build command to `npm run build`, output directory `dist`, and `base: '/'` in
  `vite.config.js`).

If in doubt, start **Private** for the backup — you can switch a repo to public later in
Settings, or add Pages then.

**b. Push the project.** In the project folder:

```bash
cd "E:\Vocal App"
git init
git add .
git commit -m "Vocali: specs, prototype and React app scaffold"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/vocali.git
git push -u origin main
```

> **One-off note.** A partial `.git` folder was created during setup and could not be
> cleaned up remotely (Windows permissions). Before running the commands above, delete
> it: in File Explorer turn on **View → Hidden items**, then delete the `.git` folder
> inside `E:\Vocal App`. Or from PowerShell: `Remove-Item -Recurse -Force "E:\Vocal App\.git"`.
> Then `git init` starts cleanly. (If `git add .` runs without errors, you can skip this.)

From then on, saving your work is:

```bash
git add . && git commit -m "what changed" && git push
```

**c. Set the base path.** The app is served from `https://YOUR-USERNAME.github.io/vocali/`,
so `app/vite.config.js` has `base: '/vocali/'`. If you name the repo something else,
change that line to match, or set `VOCALI_BASE` when building.

**d. Publish.**

```bash
cd "E:\Vocal App\app"
npm run deploy       # builds and pushes app/dist to the gh-pages branch
```

Then in the repository on GitHub: **Settings → Pages → Source: Deploy from a branch
→ Branch: `gh-pages` / root → Save.** After a minute the app is live at
`https://YOUR-USERNAME.github.io/vocali/`.

Re-run `npm run deploy` whenever you want to publish changes.

---

## 3. Install it on the iPad

1. Open the published URL in **Safari** on the iPad.
2. Tap the **Share** button → **Add to Home Screen**.
3. It installs as "Vocali" with its own icon and opens full-screen, without Safari's
   chrome — because the app ships a web-app manifest and a service worker.

Offline behaviour: all owned content (technique text, exercise steps, diagrams,
glossary, the pitch tools) works with no connection. Only the YouTube videos need
one — by design, since they are embedded, never re-hosted.

Do the same on the desktop (any Chromium browser offers an install button in the
address bar).

---

## 4. Turn on cross-device sync (optional)

Without this the app still works fully, but the desktop and the iPad keep separate
practice logs.

**a. Create a Supabase project** at supabase.com (free tier is far more than enough).

**b. Create the table.** In the Supabase dashboard, open **SQL Editor** and run:

```sql
create table vocali_state (
  id text primary key,
  state jsonb not null,
  updated_at timestamptz not null default now()
);
alter table vocali_state enable row level security;
create policy "by id" on vocali_state for all using (true) with check (true);
```

**c. Add your keys.** Copy `app/.env.example` to `app/.env.local` and paste in the
Project URL and the `anon` public key from **Settings → API**. `.env.local` is
git-ignored and must never be committed.

**d. Pair each device.** Rebuild/redeploy, open the app, and in the **tools rail →
Sync** tap **Pair this device**. Enter a passphrase of your choosing. Use the *same*
passphrase on the iPad. That is the only time you will be asked.

**How the privacy works.** A static site cannot hide a key — anything in the bundle
is public. So the anon key is public by design, and your passphrase (which is never
stored or transmitted) is hashed to derive an unguessable record id. Without the
passphrase nobody can find your row.

If you would rather tighten this further later, the alternative is to enable Supabase
email magic-link auth and swap the policy to `auth.uid()`. That is a bigger change
and adds a login step; the passphrase approach was chosen to keep the app login-free.

---

## 5. Troubleshooting

**Blank page after deploying.** Almost always the `base` path. It must match the repo
name exactly, with leading and trailing slashes: `base: '/vocali/'`.

**`npm run build` fails with content errors.** That is the content checker doing its
job — a section is missing part of the standard. The message names the section and
the missing field.

**Audio does nothing on the iPad.** Browsers require a tap before any sound. Press a
play/drone button once; after that it works for the session.

**The app does not update after deploying.** The service worker caches aggressively.
Close the app fully and reopen, or pull to refresh in Safari.
