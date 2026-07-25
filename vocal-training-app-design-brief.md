# Vocal Training App — Design Brief for Claude Design

A self-contained brief for mocking up the interface. It contains everything needed to design the screens; the fuller content and data spec live in the separate handover document, but you don't need it to produce the mock-ups.

---

## What this is

A personal, single-user vocal-training app that puts learning, practice and progress in one place. It combines short written explanations, AI-generated informational diagrams, embedded coach videos (played in-app), guided practice sessions, and a twelve-week plan. It is for one person's own use — no accounts, no social features, no sharing.

## The feel

A calm, focused **practice tool**, not a social or gamified app. Mobile-first, usable one-handed during practice, with a timer clearly visible when a session is running. Progress is present but understated — a quiet nudge, never a scoreboard. Aim for a distinctive, intentional look; avoid a generic template feel. Clean typography, generous spacing, restful colour. Nothing should shout.

## Visual direction (agreed steer)

**App name: Vocali.** Logo is a male head in profile with the mouth open (singing). The "Vocal training" wordmark sits on a **teal** background (not orange) for legibility.

The overall look is **cool and unfussy**: a calm, editorial "workshop-ledger" aesthetic. Considered, not templated; restful, not decorative. Nothing shouts. This complements — rather than replaces — everything under *The feel* above.

**Palette** (warm cream ground, teal + orange highlights). Starting tokens, to refine in build:

- **Ground / page** — warm cream `#E7E0CF`
- **Surface / cards** — lighter cream `#F1EBDB`
- **Ink / text** — near-black `#1E1B17`
- **Teal (feature)** — deep teal `#1C6B85`, used for the "now / current focus" element, poster/feature blocks, and diagram accents
- **Orange (action)** — burnt orange `#C05A24`, reserved for the **single primary action per screen** (start / approve / log) and small accents only
- **Muted label** — warm grey `#8B8272` for secondary text and overlines
- **Hairline / rule** — `#D6CDB8` for the thin dividing lines between rows

**Typography.** A **bold Modernist serif** for display and headings — sturdy and characterful (candidate: Fraunces or a similar transitional serif) — set against a **clean grotesque sans** for UI, body and labels (candidate: Inter). **Uppercase, letter-spaced overlines** label sections and steps (e.g. `WEEK 07 · SESSION 03`, `RANGE TODAY`). Self-host both faces for offline PWA use.

**Layout language.** Editorial ledger: **numbered steps and sections** (`01`, `02`…), generous spacing, thin horizontal rules dividing rows, and **data shown as labelled figures** (a small overline label above a large value — `STREAK · 12 days`) rather than charts or dials. Left-aligned throughout.

**Component cues** (from the steer, mapped to this app):

- A **teal feature block** carries the current focus (e.g. the session title, or "Today's focus").
- **Orange filled buttons** for the one primary action; everything else is quiet outline or text.
- **Quiet inline lists** with right-aligned meta — a session's steps with their durations on the right (`01 — Warm up … 6 min`).
- **Understated progress** as labelled figures (streak, minutes, per-area completion), never badges, points or confetti.

## What to design

Five **archetype screens**. These carry roughly 90% of the app because most of it is one card repeated. Please design these first and make them consistent with one another:

1. **Home**
2. **Area overview** (sample: Registration)
3. **Section card** — the reusable core; get this right and everything inherits it
4. **Session runner** — the timed guided player
5. **Plan view** — the twelve-week programme

---

## Screen 1 — Home

Opens into action, not a menu wall. Contains:

- **Warm-up chooser:** three prominent buttons — **5 / 10 / 20 min** — that start a guided warm-up immediately.
- **Resume:** "Continue where you left off" (last section or session).
- **Today's focus:** the current week's suggestion, drawn from the twelve-week plan (e.g. "Week 4 · Registration: passaggio & mix").
- **Quick nav:** the eleven learning areas and the Practice Log.

## Screen 2 — Area overview (sample: Registration)

Shown when the user taps an area. Contains:

- **Area title + one-line description.**
- **An AI-generated informational diagram** for the area (for Registration: fold length/thickness in chest vs head, and the passaggio as a blend zone). Clean and labelled; sits near the top.
- **A list of the area's sections** (each drills into a Section card):
  - 4.1 Chest voice
  - 4.2 Head voice
  - 4.3 The passaggio (the break)
  - 4.4 Building the mix
  - 4.5 Smoothing transitions
- **A "Run this area" button** that launches the area session — all the area's exercises in one guided run, for once the individual techniques are understood.

## Screen 3 — Section card (the reusable core)

This is the most important screen; it is the destination of every drill-down and repeats throughout the app. Design **one card** that holds these fields, always in this order (not every field is always filled):

1. **Title**
2. **Level** tag (Foundational / Core / Refinement)
3. **Explain** — 1–3 sentences on what it is and why it matters
4. **Technique** — how it works, with cues and common faults
5. **Diagram** *(optional)* — an AI-generated informational visual, between Technique and Exercise
6. **Exercise(s)** — step-by-step, with a duration and difficulty
7. **Watch** — a coach video **embedded and playable in the card** (see states below)
8. **Log** — an optional "log this practice" action

**Populated sample to design against (Registration 4.4 — Building the mix):**
- *Level:* Core
- *Explain:* "The mix is a blend of chest and head function — not a separate register — that lets you carry strength higher without strain."
- *Technique:* "Keep a tall, narrow mouth and let the sound stay connected through the break. Common fault: pushing chest voice up instead of blending."
- *Diagram:* labelled chest–mix–head continuum.
- *Exercise:* "Sing 1-3-5-3-1 on 'mum' or 'no', starting in easy chest voice, moving up a semitone at a time through the break. 5 min · moderate."
- *Watch:* embedded video — "NYVC Ep. 40: The Mix Voice".
- *Log:* "Log this practice."

## Screen 4 — Session runner

One reusable player used by warm-ups, area sessions and (later) plan-days. It steps through an ordered list of exercises with a timer. Contains:

- **Current step** (exercise name + brief instruction), large and readable at arm's length.
- **Next step** preview.
- **Timer:** elapsed / remaining, with the total session progress.
- **Controls:** skip, done/next, pause.
- Optional embedded warm-up video on warm-up routines.

Sample: a 10-minute warm-up running "Lip trills → five-note hums → chest-to-head glides → gentle agility", showing step 2 of 4.

## Screen 5 — Plan view (the twelve-week programme)

A followable, **revisitable** list of twelve weeks with progress. Tapping a week opens its goal and its sessions. It must feel progress-based, not date-locked — the user advances when a week feels solid, and can repeat or jump. Show the real weeks:

| Week | Focus | Goal |
|------|-------|------|
| 1 | Foundations & breath (brisk) | Reset posture, release tension, low supported breath |
| 2 | Onset & phonation | Clean, connected onset; daily SOVT warm-ups |
| 3 | Registration: chest & head | Distinct, healthy chest and head voice |
| 4 | Registration: passaggio & mix | Through the break without pushing; find the mix |
| 5 | Registration: smoothing + consolidate | Seamless transitions, top to bottom |
| 6 | Resonance & tone | Forward ring, colour control, twang |
| 7 | Range & flexibility | Extend range safely; clean agility |
| 8 | Core consolidation | Run the whole core in one sitting |
| 9 | Pitch & ear | Accurate matching; in tune against a drone |
| 10 | Articulation & diction | Even vowels; clear consonants |
| 11 | Dynamics & expression | Swells, controlled vibrato, even sustain |
| 12 | Stylisation & application | Swing phrasing, blue notes; a full song |

Weeks 3–8 (the core) are the heart of the plan — consider showing that weighting visually.

---

## Interactions & states to show

- **Three-level drill-down:** Home/Area → Section → (Session runner). Consistent, obvious back path.
- **Embedded video, three states:** (1) normal in-card player; (2) a tidy **"video unavailable"** fallback if a video is removed; (3) a secondary **"Open on YouTube"** link always present. The fallback matters — a broken embed looks worse than a clean placeholder.
- **Timers** during any session.
- **Log action** on section cards and after sessions.
- **Progress:** a gentle streak and per-area completion, understated.

## What to avoid

- Clutter, dense dashboards, or heavy gamification (badges, points, confetti).
- A design that makes the user feel they must leave the app to practise — video plays in-app.
- Generic, templated layouts. This should feel considered and calm.
- Date pressure in the plan — it's stages to complete, not a calendar.

## Priorities if time is short

Design the **Section card** first (Screen 3) — everything inherits it — then the **Session runner** (Screen 4) and **Home** (Screen 1). Area overview and Plan view follow.
