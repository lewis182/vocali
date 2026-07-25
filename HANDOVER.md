# Vocali — Handover (for continuing with a fresh session, e.g. Opus 5)

**Purpose.** Everything a new session needs to resume this project with zero loss of context. Conversation memory does not carry across sessions or models — these project files do. Read them, confirm understanding, then continue.

> To resume: paste the block in `RESUME-PROMPT.md`, or simply say "read HANDOVER.md and resume". Opus 5 is a fine choice for the next phase (deeper content + the React build); nothing here is model-specific.

---

## 1. Read these first, in order
1. `README.md` — single source of truth: locked decisions, current stage, workflow.
2. `vocal-training-app-handover.md` — full content & structure spec (11 areas to exercise level, data model, verified video links, build plan).
3. `vocal-training-app-design-brief.md` — visual direction and the five archetype screens.
4. `mockups/prototype.html` — the working prototype. Open it in a browser and read the source.

Optional: `mockups/design-prompts.md` — retained for reference only; the Design surface is **not** the active route.

---

## 2. What Vocali is
A personal, single-user vocal-training app for the owner's own use (no accounts, no sharing). Technique-first, focused on jazz, blues and light country. It is a deep **one-stop-shop reference _and_ a training programme**: the written content must teach the technique itself (mechanism, how to produce the sound, how to self-diagnose and fix) so the app stands alone — embedded coach videos only reinforce, never replace. Desktop/iPad-first; calm through good structure, not through emptiness.

Three levels: (1) **Home** with a card per area + the twelve-week plan overview + warm-up quick-start; (2) **Areas**, each a self-contained resource whose sub-sections give the full write-up, a quick-recall summary and exercises, plus a "run this area" session; (3) the **twelve-week plan** that sequences the areas.

---

## 3. Locked decisions
- **Name/brand:** "Vocali". Logo = male head in profile, mouth open (singing). "Vocal training" wordmark on a **teal** background.
- **Voice type:** owner is **tenor/baritone** (secondo passaggio ~E4–F4). All reference pitches are set for this.
- **Visual direction:** cool/unfussy editorial "ledger". Warm cream ground, deep **teal** for the current-focus element, burnt **orange** for the single primary action per screen; Modernist serif display over clean sans; numbered steps, thin rules, data as labelled figures. Tokens in the design brief's *Visual direction* section.
- **Stack:** React single-page **PWA** (manifest + service worker), hosted as static files on **GitHub Pages** (built on PC, opened in Safari on iPad, added to home screen). Owned content works offline; only YouTube embeds need a connection.
- **Data & sync:** **Supabase** (free tier) syncs practice log, streaks and progress across devices; access via a **one-time passphrase pairing per device** (a static site can't hide a key, so security comes from the pairing).
- **Warm-up default:** male (Dr Dan 10-minute).
- **Pitch/drone + metronome tool:** in early scope (not deferred).
- **Workflow:** all build work happens **here (Cowork/Code), not the Design surface**.
- **Content standard:** every section follows a fixed depth — Explain → Mechanism → What to feel → Cues → Faults → Fix → How to produce it (steps) → Diagram → Check you've got it → Exercises (with what to listen for) → Troubleshooting → Misconceptions → Watch. Section **4.4 Building the mix** is the reference example.
- **Accuracy rule:** every technical claim and every diagram must be source-verified before ship (`VisualAsset.verified`, `sourceNotes`). Diagrams currently say "to be source-verified".

---

## 3a. The application (`app/`) — current build target

The real app is a **Vite + React PWA** in `app/`. Run it with `cd app && npm install && npm run dev` (see `DEPLOY.md`).

```
app/
  package.json  vite.config.js  index.html  .env.example
  public/            favicon.svg, icon-192.png, icon-512.png
  scripts/
    check-content.mjs        enforces the content standard; runs on every build
  src/
    main.jsx  App.jsx  styles.css        (design tokens live in styles.css)
    content/                 CONTENT AS DATA — never mixed with code
      index.js               area registry, area sessions, warm-up routines
      areas/registration.js  Area 4, complete, to the content standard
      plan.js  glossary.js
    components/              Home, Area, Section, Plan, Glossary, Runner, Tools, Diagram, Glossify
    lib/
      audio.js               drone, metronome, audible target patterns
      store.js               local-first state + optional Supabase sync
```

**Key principle: content is data.** To write a new area, add `src/content/areas/<area>.js`
and register it in `src/content/index.js`. No app code changes. `npm run check:content`
validates every section against the standard and **fails the build** if a section is
missing `how`, `produce`, `check`, `troubleshoot`, `myths`, exercises or a video.

**Verification is enforced in the UI**: a diagram with `verified: false` renders with a
visible "awaiting source verification" flag, so an unchecked visual cannot pass as authoritative.

---

## 4. What is built (also in `mockups/prototype.html`, the earlier standalone reference)
A working, self-contained HTML prototype (desktop/iPad-first, responsive), in the Vocali look:
- **Home** — card per area (core areas teal-numbered), warm-up quick-start, resume, twelve-week plan overview with the core weeks (3–8) shaded.
- **Registration area, complete (4.1–4.5)** written to full reference depth, each with mechanism, step-by-step production, feel, cues, faults, fix, self-check, troubleshooting, misconceptions, exercises (with what to listen for) and a labelled **SVG diagram**.
- **Twelve-week plan** view; **Glossary** (nav page + inline hover definitions on key terms).
- **Right-rail tools that actually work:** pitch-drone (selectable note), metronome, quick log box.
- **"Hear the pattern"** buttons on exercises synthesise the drill (scale/glide) from its reference pitch via Web Audio.
- **In-card video** (YouTube embed) with a "video unavailable" fallback (toggle) and an always-present "Open on YouTube" link.

Other 10 areas appear on Home/nav as specced placeholders, ready to be built to the same depth.

---

## 5. How to preview
Open `mockups/prototype.html` in any modern browser (double-click). No build step. Audio needs a click first (browser autoplay policy).

---

## 6. Open items / immediate next steps
In priority order:
1. **Back the project up.** Delete the partial `.git` folder (see the note in `DEPLOY.md` §2b), then `git init` and push to GitHub. Nothing is backed up yet.
2. **Run the app** — `cd app && npm install && npm run dev` — and review Registration in the real application.
3. **Write the remaining ten areas** into `app/src/content/areas/`, to the content standard, starting with Resonance & Tone or Breath & Support.
4. **Source-verify the five Registration diagrams** and set `verified: true` with `sourceNotes`.
5. **Videos:** choose specific verified clips for sections flagged "(to source specific)" in the content spec §5.
6. **Optional:** enable Supabase sync (`DEPLOY.md` §4); until then the log is per-device.

---

## 7. File map
```
E:\Vocal App\
  README.md                          status & decisions (source of truth)
  HANDOVER.md                        this file
  RESUME-PROMPT.md                   paste-ready resume prompt
  DEPLOY.md                          run / GitHub / Pages / iPad install / Supabase
  .gitignore  .gitattributes
  vocal-training-app-handover.md     full content & structure spec (data model §8)
  vocal-training-app-design-brief.md visual direction + screen briefs
  app\                               THE APPLICATION (see §3a)
  mockups\
    prototype.html                   standalone content reference (superseded by app/)
    design-prompts.md                optional reference (Design surface, not used)
```

When you finish a working session, update **README.md → Current stage / Open items** so the next session resumes cleanly.
