# Vocal Training App — Project Status & Handoff

**Read this first.** This file is the single source of truth for the project. Whichever surface you open — Cowork, Code, or Chat — start by reading this, then the two spec documents below. It carries the context that a project import does *not*.

---

## What this project is
A personal, single-user vocal-training app that puts learning, practice and progress in one place: short written explanations, AI-generated informational diagrams, embedded coach videos (played in-app), guided practice sessions, and a twelve-week plan. For the owner's own use only — no accounts, no sharing. Focus is jazz, blues and light country, weighted towards **technique**.

## Files in this folder
- `README.md` — this status & handoff file.
- `HANDOVER.md` — full handover for resuming in a fresh session.
- `RESUME-PROMPT.md` — paste-ready prompt to resume.
- `DEPLOY.md` — how to run, push to GitHub, publish to Pages, install on the iPad, and enable Supabase sync.
- `vocal-training-app-handover.md` — the full content & structure specification (areas, exercises, sessions, plan, **corrected data model §8**, verified video links, build plan).
- `vocal-training-app-design-brief.md` — visual direction and the five archetype screens.
- `mockups/prototype.html` — standalone design/content reference (no build step).
- `app/` — **the application**. Content lives in `app/src/content/areas/` as data, separate from code.

## Current stage
**React app scaffolded; Registration migrated to content-as-data.** The real application now lives in `app/` — a Vite + React PWA with the Registration area (4.1–4.5) written to full reference depth, a session runner, twelve-week plan, glossary, working pitch-drone/metronome/pattern playback, Supabase sync layer and a content-standard checker that fails the build if a section is incomplete.

**To run it:** see `DEPLOY.md` (`cd app`, `npm install`, `npm run dev`). Not yet installed/built — that must be done on the PC.

`mockups/prototype.html` remains as the standalone design reference (no build step). The app supersedes it.

**Backed up:** the project is on GitHub at `https://github.com/lewis182/vocali` (branch `main`). Save future work with `git add .` → `git commit -m "…"` → `git push` from `E:\Vocal App`.

**Content progress:** Areas **1–6 are complete** — Foundations & Vocal Health, Breath & Support, Onset & Phonation, Registration, Resonance & Tone, and Range & Flexibility. That is **27 sections, 67 exercises, 40+ diagrams and a 31-term glossary**, every section carrying a technique video plus a mechanism or second-opinion clip. This covers the whole of the twelve-week plan's weeks 1–8, including the entire technical core.

**Paused here deliberately for user testing** — lessons from practising with areas 1–6 will be folded into the remaining areas (7 Pitch & Ear, 8 Articulation & Diction, 9 Dynamics & Expression, 10 Stylisation, 11 Application & Practice) before they are written.

**Next:** (1) run `cd app`, `npm install`, `npm run dev` to see the app; (2) write the remaining ten areas into `app/src/content/areas/`; (3) source-verify the five Registration diagrams; (4) when ready to put it on the iPad, publish via GitHub Pages (needs the repo to be **public** on the free plan) or Cloudflare Pages (works from a private repo) — see `DEPLOY.md`.

**Workflow decision:** all build work happens **here (Cowork/Code), not the Design surface** — the Design surface produced hollow frames and added cross-surface confusion. `mockups/design-prompts.md` is retained only as optional reference; it is no longer the active route.

## Decisions locked
- **Content:** 11 learning areas, all drilled to individual-exercise level, + a separate warm-up module. See handover §5.
- **Teaching videos:** embedded via the official YouTube player, in-card, with a "video unavailable" fallback and a secondary "Open on YouTube" link. Never downloaded, re-hosted or transcribed. Verified links in handover §10.
- **Diagrams:** AI-generated informational visuals of *general* vocal science only (not any coach's proprietary material). Each must be verified against a reliable source before display (`VisualAsset.verified = true`).
- **IP boundary:** do not reproduce the Estill or CVT systems as the app's own curriculum — reference/link out only.
- **Sessions:** one runner powers warm-ups (5/10/20 min), per-area sessions ("run this area"), and plan-days.
- **Stage plan:** twelve weeks, progress-based (not date-locked), revisitable. Core (Registration, Resonance, Range) occupies weeks 3–8. Sequence in handover §4c.
- **Build approach:** design the ~5 archetype screens first (section card is top priority), then build Registration as a vertical slice, then module by module (content → session runner → plan → tracking → tools).
- **Platform & stack:** a **React single-page web app**, mobile-first, delivered as an **installable PWA** (web-app manifest + service worker) and hosted as static files on **GitHub Pages** — built on PC, opened in Safari on iPad, added to the home screen as an app icon. Owned content (text, exercise steps, diagrams) works offline; only YouTube embeds need a connection.
- **Name & brand:** app name is **Vocali**. Logo is a **male head in profile with the mouth open** (singing). The "Vocal training" wordmark sits on a **teal** background (not orange) for legibility.
- **Voice type:** owner is **tenor/baritone** — reference pitches and passaggio locations in the content are set for this (secondo passaggio ~E4–F4).
- **Visual direction:** **cool and unfussy** — a calm editorial "workshop-ledger" look. Warm cream ground, deep teal for the current-focus/feature element, burnt orange reserved for the single primary action per screen; bold Modernist serif display over a clean sans; numbered steps, thin rules, data as labelled figures. Full tokens & type notes in the design brief's *Visual direction* section.
- **Layout:** the permanent tools rail was removed — pitch, tempo and log now sit in a **compact practice bar** at the top of the content, expanding on tap. This widened the reading column and cut scrolling. Secondary blocks (troubleshooting, misconceptions) are **collapsed by default**: full depth retained, less wall of text.
- **Videos:** sections carry **multiple videos with roles** — `technique` (coach demo), `mechanism` (what physically happens: MRI/endoscopy/animation), `second opinion` (another coach). Aim for at least a technique clip plus a mechanism clip per section; the content checker warns when only one is present.
- **Content standard:** every section is written to a fixed depth — Explain → Mechanism → What to feel → Cues → Faults → Fix → How to produce it (steps) → Diagram → Check you've got it → Exercises (with what to listen for) → Troubleshooting → Misconceptions → Watch. The written text must teach the technique so the app stands alone; videos reinforce, not replace. Every technical claim and diagram is source-verified before ship (`VisualAsset.verified`). See `mockups/prototype.html` §4.4 for the reference standard.
- **Data & sync:** practice log, streaks and progress **sync across devices via Supabase** (free tier; no server to maintain). Access uses a **one-time passphrase pairing per device** — login-free after first launch, and keeps the data genuinely private (a static site can't hide a sync key, so security comes from the pairing, not the client).
- **Warm-up default:** **male** (Dr Dan 10-minute male warm-up).
- **Pitch/drone + metronome tool:** **in early scope** (not deferred to enhancements) — several Registration, Range and Pitch exercises need a reference pitch, drone or metronome, so it's part of the core build.

## Open items to decide
- Which areas get a diagram (priority: core 4–6, then foundations 1–3).
- Choose specific verified videos for the sections flagged `(to source specific)` in handover §5.

*Resolved (see Decisions locked):* platform & stack (React PWA on GitHub Pages); cross-device data sync (Supabase, one-time passphrase pairing); visual direction (cool/unfussy TIMBRE); default warm-up (male); pitch/drone + metronome tool (in early scope).

## How to work across the three surfaces (all share this folder)
- **Cowork / Chat (scoping & docs):** open the Cowork project pointed at this folder; use the Chat/Cowork toggle. Edit the spec here; keep decisions updated in this README.
- **Design (interface):** mock up the five archetype screens from `vocal-training-app-design-brief.md`; save exports into `mockups/`.
- **Code (build):** point Code at this folder; read the handover doc's data model (§8) and build into `app/`. Build order in handover §12.

## Notes for continuity
- This project is stored **locally** (no cloud sync) — back up this folder.
- Memory is per-surface; this README + the two specs are the real handoff. Keep this file current as decisions change.
- When finishing a session, update **Current stage** and **Open items** above so the next session resumes cleanly.
