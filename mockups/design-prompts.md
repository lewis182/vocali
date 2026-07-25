# TIMBRE — Design Prompts for the Design Surface

Paste-ready prompts for mocking up the five archetype screens in Design. **Order matters:** design the **Section card first** (everything inherits it), then Session runner, Home, Area overview, Plan view.

**How to use this file**
1. Paste the **House style** block once at the start of a Design session so the look is set.
2. Then paste one **Screen prompt** at a time. Design each screen to match the ones before it.
3. Iterate with short follow-ups ("show the video-unavailable state", "a dark variant", "more like the ledger layout, less poster").
4. Save chosen frames into this `mockups/` folder.

Content and states below come from `vocal-training-app-design-brief.md` and `vocal-training-app-handover.md` — keep them as the source of truth.

---

## House style (paste first)

You are designing screens for **TIMBRE**, a personal, single-user vocal-training app for one person's own practice — **no accounts, no login, no social features, no marketing pages**. Mobile-first, usable one-handed during practice.

**Feel:** cool and unfussy. A calm, editorial "workshop-ledger" aesthetic — considered, not templated; restful, not decorative. Nothing shouts. Progress is present but understated — a quiet nudge, never a scoreboard.

**Palette:**
- Ground / page: warm cream `#E7E0CF`
- Surface / cards: lighter cream `#F1EBDB`
- Ink / text: near-black `#1E1B17`
- Teal (feature): deep teal `#1C6B85` — for the "now / current focus" element, feature blocks, and diagram accents
- Orange (action): burnt orange `#C05A24` — the **single primary action per screen** and small accents only
- Muted label: warm grey `#8B8272` — secondary text and overlines
- Hairline / rule: `#D6CDB8` — thin dividing lines between rows

**Typography:**
- Display / headings: a bold Modernist serif, sturdy and characterful (e.g. Fraunces or similar transitional serif)
- UI / body / labels: a clean grotesque sans (e.g. Inter)
- Overlines: uppercase, letter-spaced sans for section and step labels (e.g. `WEEK 4 · REGISTRATION`, `THIS SESSION`)

**Layout language:** editorial ledger — numbered steps and sections (`01`, `02`, `4.1`, `4.2`…), generous spacing, thin horizontal rules between rows, left-aligned. Show data as **labelled figures** (a small overline label above a large value, e.g. `STREAK · 12 days`), not charts or dials.

**Rules:**
- One orange primary action per screen; everything else is quiet outline or text.
- A single teal element carries the current focus.
- Avoid clutter, dense dashboards, gamification (badges, points, confetti), generic templates, and any date pressure.
- Design a consistent, obvious back path for a three-level drill-down (Home → Area → Section → Session runner).

---

## Screen 1 — Section card (design this first; the reusable core)

Design **one card** that is the destination of every drill-down and repeats throughout the app. Fields appear **always in this order** (not every field is always filled):

1. **Title**
2. **Level** tag — Foundational / Core / Refinement
3. **Explain** — 1–3 sentences: what it is and why it matters
4. **Technique** — how it works, with cues and common faults
5. **Diagram** *(optional)* — an AI-generated informational visual, sits **between Technique and Exercise**
6. **Exercise(s)** — step-by-step, with a duration and difficulty
7. **Watch** — a coach video **embedded and playable in the card**
8. **Log** — an optional "log this practice" action

**Populate with this real sample (Registration 4.4 — Building the mix):**
- Level: **Core**
- Explain: "The mix is a blend of chest and head function — not a separate register — that lets you carry strength higher without strain."
- Technique: "Keep a tall, narrow mouth and let the sound stay connected through the break. Common fault: pushing chest voice up instead of blending."
- Diagram: a labelled **chest–mix–head continuum** (placeholder block, labelled).
- Exercise: "Sing 1-3-5-3-1 on 'mum' or 'no', starting in easy chest voice, moving up a semitone at a time through the break." — **5 min · moderate**
- Watch: embedded video titled **"NYVC Ep. 40: The Mix Voice"**
- Log: a **"Log this practice"** action

**Show all three video states as variants:** (1) normal in-card player; (2) a tidy **"video unavailable"** fallback; (3) a secondary **"Open on YouTube"** link that is **always present** in every state.

The diagram block should be clean, labelled and unobtrusive. The single orange action is **"Log this practice"**.

---

## Screen 2 — Session runner (the timed guided player)

One reusable player used by warm-ups, area sessions and (later) plan-days. It steps through an ordered list of exercises with a timer. Contains:

- **Current step** — exercise name + brief instruction, large and readable at arm's length
- **Next step** preview
- **Timer** — elapsed / remaining, plus total session progress
- **Controls** — skip, done/next, pause
- Optional embedded warm-up video (on warm-up routines)

**Populate with this sample:** a **10-minute warm-up**, showing **step 2 of 4**. The four steps are: **Lip trills → five-note hums → chest-to-head glides → gentle agility.** So the current step is "**Five-note hums**", with "**Chest-to-head glides**" previewed as next.

The single orange action is **Done / Next**. Keep it uncluttered — this is what the user looks at mid-practice.

---

## Screen 3 — Home (opens into action, not a menu wall)

Contains:
- **Warm-up chooser** — three prominent buttons, **5 / 10 / 20 min**, that start a guided warm-up immediately.
- **Resume** — "Continue where you left off" (last section or session).
- **Today's focus** — the current week's suggestion from the plan: **"Week 4 · Registration: passaggio & mix"** (carry this in the teal feature element).
- **Quick nav** — the eleven learning areas and the Practice Log.

Understated progress may appear (a gentle streak) but must not dominate. The single orange action is the primary warm-up start (or you may treat the three warm-up buttons as the focal action set).

---

## Screen 4 — Area overview (sample: Registration)

Shown when the user taps an area. Contains:
- **Area title + one-line description.**
- **An AI-generated informational diagram** near the top — for Registration: **fold length/thickness in chest vs head, and the passaggio as a blend zone.** Clean and labelled (placeholder block).
- **The area's sections**, each drilling into a Section card:
  - 4.1 Chest voice
  - 4.2 Head voice
  - 4.3 The passaggio (the break)
  - 4.4 Building the mix
  - 4.5 Smoothing transitions
- **A "Run this area" button** that launches the area session (all the area's exercises in one guided run).

Sections as a quiet numbered ledger list. The single orange action is **"Run this area"**.

---

## Screen 5 — Plan view (the twelve-week programme)

A followable, **revisitable** list of twelve weeks with progress. It must feel **progress-based, not date-locked** — the user advances when a week feels solid, and can repeat or jump. **No calendar, no dates, no pressure.** Tapping a week opens its goal and its sessions.

Show the real weeks:

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

**Weeks 3–8 (the core) are the heart of the plan — show that weighting visually** (e.g. a subtle teal emphasis across that band). Progress shown as understated completion, not a scoreboard. The single orange action is to continue / open the current week.

---

## Cross-screen states to make sure Design shows

- **Three-level drill-down** with a consistent, obvious back path.
- **Embedded video, three states:** normal player, "video unavailable" fallback, and an always-present secondary "Open on YouTube" link.
- **Timers** during any session.
- **Log action** on section cards and after sessions.
- **Progress:** a gentle streak and per-area completion, understated.

## What to avoid (repeat to Design if it drifts)

Clutter, dense dashboards, heavy gamification, generic templated layouts, a design that pushes the user out of the app to practise (video plays in-app), and any date pressure in the plan.
