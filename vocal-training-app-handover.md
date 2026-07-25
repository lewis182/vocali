# Vocal Training App — Content & Structure Handover

**Purpose.** A complete content and structure specification for a **personal, single-user** vocal-training app, to be handed to Claude Design for interface mock-ups and then used as the coding brief. It defines the information architecture, a fixed section template, the full learning content (**all eleven areas drilled to individual-exercise level**), a separate warm-up module, an owned-diagram layer, a data-model sketch, a register of verified video links, and a list of candidate enhancements.

**Context.** For the owner's own learning only — one user, not published or shared. This simplifies several decisions (no accounts, no multi-user data, no ad concerns).

**How to use it.**
1. Give the *Information Architecture*, *Section Template*, *Home Screen* and *Interface Notes* to Claude Design for mock-ups.
2. Keep the *Data Model* and *Link Register* for coding.
3. Build one area fully first (Registration) before replicating the pattern.

---

## 1. Design principles

- **Everything in one place.** Single home for learning, technique, exercises, warm-ups and logging.
- **Personal tool.** One user; no login, no sharing, no analytics beyond the owner's practice log.
- **Technique-first.** The core (Registration, Resonance, Range) is richest; stylisation is lighter.
- **Learn → See → Do → Track.** Every topic can be read, seen (diagram + embedded video), practised, and logged.
- **In-app teaching.** Coach videos play inside the card via the official embedded player — focus is not broken.
- **Owned visual layer.** AI-generated informational diagrams (general vocal science) accompany the teaching where a picture aids understanding.
- **Consistency over cleverness.** Every drill-down uses the same section template.
- **Open into action.** The Home screen offers a warm-up and a resume option, not a menu wall.

### Intellectual-property boundary

May do: **embed** coach videos via YouTube's official player (never download, re-host, or transcribe); include **AI-generated diagrams** of general vocal science; write **original, general exercise instructions**.

Must not: reproduce or repackage the **Estill** (13 Figures / 6 Qualities) or **CVT** (four modes) systems as the app's own curriculum — reference and link out only; copy or transcribe any coach's video.

**Accuracy rule for diagrams.** AI can render anatomy wrongly. Every diagram is verified against a reliable source before display and records what it was checked against. An attractive but wrong diagram is worse than none.

**Ads.** Not a concern — single user with the owner's own YouTube Premium.

---

## 2. Information architecture

The app has three layers: a **content library** (what you learn), a **session runner** (how you practise it), and a **stage plan** (the order you work through it over time). Sessions and the plan add no new content — they sequence and run the exercises already defined in the library.

**A. Sessions & routines** — timed guided runs you *do*, not topics you *learn*. Three kinds, all driven by one runner: **warm-ups** (5/10/20 min), **area sessions** (all of an area's exercises rolled into one guided run, for once you've learned them individually), and **custom sessions** (your own selection).

**B. Learning areas** — eleven, in progression:

| # | Area | Group |
|---|------|-------|
| 1 | Foundations & Vocal Health | Foundation |
| 2 | Breath & Support | Foundation |
| 3 | Onset & Phonation | Foundation |
| 4 | **Registration** | **Technical core** |
| 5 | **Resonance & Tone** | **Technical core** |
| 6 | **Range & Flexibility** | **Technical core** |
| 7 | Pitch & Ear | Control |
| 8 | Articulation & Diction | Control |
| 9 | Dynamics & Expression | Control |
| 10 | Stylisation (jazz / blues / country) | Application |
| 11 | Application & Practice | Application |

Cross-cutting throughout: **Practice Log** and **Progress**.

Recommended path: 1–3 → 4–6 → 7–9 → 10–11. The user may jump freely.

---

## 3. Fixed section template

Every section at the deepest level uses this identical structure; order never changes.

| Field | Content | Notes |
|-------|---------|-------|
| **Title** | Section name | |
| **Level** | Foundational / Core / Refinement | Drives ordering & "recommended next" |
| **Explain** | 1–3 sentences: what it is and why it matters | Original text |
| **Technique** | How it works + cues / common faults | Original text |
| **Diagram** | *(optional)* AI-generated informational visual | Owned; verified |
| **Exercise(s)** | Step-by-step, with duration & difficulty | Original; may be several. Some knowledge sections use a checklist rather than a vocal drill |
| **Watch** | Coach video, **embedded in the card** | Official player; "video unavailable" fallback; secondary "Open on YouTube" link |
| **Log** | Optional "log this practice" action | Feeds Practice Log |

**Embedded-player behaviour:** default `displayMode` = `embed`; graceful **"video unavailable"** state if removed/embedding disabled; a secondary **"Open on YouTube"** link always present.

---

## 4. Sessions, routines & the Stage Plan

All of these are powered by **one session runner** — a timed, guided player that steps through an ordered list of exercises. Only the list differs. This keeps the feature set small even as the ways to use it grow.

### 4a. Warm-ups
Home-screen action. Pick a length; the runner works through the routine, then offers a warm-**down**.
- **Quick — 5 min:** body/breath release → lip trills or straw → light sirens.
- **Standard — 10 min:** + hums on a five-note scale → light chest-to-head glides → gentle agility (1-3-5-3-1).
- **Full — 20 min:** + wider sirens → onset work → light twang/resonance → short agility run → brief style application.
- **Warm-down (2–3 min):** descending gentle sirens, soft hums, breath release.

### 4b. Area sessions
Each area has a **"Run this area" session** that chains its exercises into one guided run. Intended for *after* the individual techniques are understood: you stop reading and simply practise the whole area end-to-end. Auto-composed from the area's exercises (in section order), so it needs no separate authoring — it inherits whatever the area contains.

### 4c. The Stage Plan (multi-week programme)
A followable, revisitable programme that sequences areas and sessions across a number of weeks — the answer to "what should I do today". It stores no new content; each week references existing areas, sessions and exercises, plus a goal and notes. The user can follow it in order, jump to any week, repeat a week, or ignore it and free-practise. Progress is tracked so a revisit resumes where it makes sense.

**The confirmed twelve-week sequence** (progress-based, not date-locked — advance when a week feels solid; repeat or revisit any week, Registration especially). Weighting: brisk foundations, a deep core (half the plan), then refinement and a light touch of style.

| Week | Focus | Area session(s) | Goal |
|------|-------|-----------------|------|
| 1 | Foundations & breath (brisk) | Areas 1 & 2 | Reset posture, release tension, low supported breath |
| 2 | Onset & phonation | Area 3 | Clean, connected onset; SOVT warm-ups as a daily habit |
| 3 | Registration: chest & head | Area 4 (4.1–4.2) | Distinct, healthy chest and head voice |
| 4 | Registration: passaggio & mix | Area 4 (4.3–4.4) | Move through the break without pushing; find the mix |
| 5 | Registration: smoothing + consolidate | Area 4 (full session) | Seamless transitions, top to bottom |
| 6 | Resonance & tone | Area 5 | Forward ring, colour control, twang |
| 7 | Range & flexibility | Area 6 | Extend range safely; clean agility |
| 8 | Core consolidation | Areas 4–6 sessions | Run the whole core in one sitting; find weak spots |
| 9 | Pitch & ear | Area 7 | Accurate matching; stay in tune against a drone |
| 10 | Articulation & diction | Area 8 | Even vowels; clear consonants without breaking the line |
| 11 | Dynamics & expression | Area 9 | Swells, controlled vibrato, even sustain |
| 12 | Stylisation & application | Areas 10 & 11 | Swing phrasing, blue notes; one song, start to finish |

Each week: a warm-up (default 10-min), the listed area session(s), and one focus goal. The core (Registration, Resonance, Range) occupies weeks 3–8 — half the plan — reflecting the technique-first priority.

All three reuse exercise objects from §5. A guided warm-up video can be embedded on the warm-up routine screen (Dr Dan; see Register).

---

## 5. Learning content — all areas at exercise level

Each row uses the §3 template. "Watch" names the verified embed (URLs in §10). Where no exact video exists, the searchable NYVC episode archive is used and flagged.

### Area 1 — Foundations & Vocal Health *(Foundational)*
*Diagram (priority 2):* labelled vocal mechanism (lungs → folds → resonators).

| Section | Exercise (original) | Watch |
|---------|---------------------|-------|
| 1.1 How the voice works | Hand on chest/belly; hum and feel where it vibrates (awareness, not a drill) | NYVC Ep. 1 "4 Breathing Types" |
| 1.2 Posture & alignment | "Rag-doll" roll-down and stack-up; sing a note before/after | NYVC episode archive *(to source specific)* |
| 1.3 Releasing tension (jaw/tongue/neck) | Gentle jaw massage + small chewing motion on a sustained "ah"; neck rolls | NYVC episode archive (vocal tension) *(to source specific)* |
| 1.4 Vocal hygiene | Build a hydration/rest/warm-up-&-down checklist for your week | Dr Dan channel (vocal health) |
| 1.5 Warning signs & when to stop | Learn the red flags; checklist, not a vocal drill | NYVC episode archive *(to source specific)* |

### Area 2 — Breath & Support *(Foundational)*
*Diagram (priority 2):* diaphragm/rib movement, inhale vs exhale.

| Section | Exercise (original) | Watch |
|---------|---------------------|-------|
| 2.1 Breathing mechanics | Silent low breath, hand on belly, ribs expand without shoulders rising | NYVC Ep. 1 "4 Breathing Types" |
| 2.2 Breath management across a phrase | Steady "sss" for a slow count; extend the count over days | NYVC Ep. 62 "Running Out Of Breath" |
| 2.3 Airflow control | "sss" steady vs deliberately tapering; then straw phonation | NYVC Ep. 101 "Greatest Vocal Exercise" |
| 2.4 Breath → volume & sustain | Messa di voce: one note soft → loud → soft on a single breath | NYVC Ep. 62 "Running Out Of Breath" |

### Area 3 — Onset & Phonation *(Foundational)*
*Diagram (priority 2):* folds open vs closed; the three onset types.

| Section | Exercise (original) | Watch |
|---------|---------------------|-------|
| 3.1 Onset types | Sing "ah" three ways — breathy, balanced, pressed — and feel the difference | NYVC episode archive *(to source specific)* |
| 3.2 Healthy connected onset | Gentle "uh-oh" then sustain, aiming for clean not pressed | NYVC Ep. 13 "Healthy Belting" |
| 3.3 Reducing breathiness (cord closure) | "gee/gug" on a five-note scale to encourage closure | NYVC Ep. 13 "Healthy Belting" |
| 3.4 Semi-occluded warm-ups | Lip trills, straw phonation, and hums up a scale | NYVC Ep. 101 "Greatest Vocal Exercise" |

### Area 4 — Registration *(Core — build first)*
*Diagram (priority 1):* fold length/thickness chest vs head; passaggio as a blend zone.

| Section | Exercise (original) | Watch |
|---------|---------------------|-------|
| 4.1 Chest voice | "gee" on 1-3-5-3-1 in a spoken feel; up by semitones while easy | NYVC Ep. 13 "Healthy Belting" |
| 4.2 Head voice | "Yoo-hoo" gliding gently down from a comfortable high note on "oo" | NYVC Ep. 113 "Expand Your Vocal Range" |
| 4.3 The passaggio | Slow lip-trill sirens through the break, no push | NYVC Ep. 101 "Greatest Vocal Exercise" |
| 4.4 Building the mix | 1-3-5-3-1 on "mum"/"no", tall narrow mouth, from easy chest through the break | NYVC Ep. 40 "The Mix Voice" |
| 4.5 Smoothing transitions | Octave slides on "wee"/"woo", no audible gear-change | NYVC Ep. 115 "Find Your Mix Voice Pt 2" |

### Area 5 — Resonance & Tone *(Core)*
*Diagram (priority 1):* resonating spaces (throat/mouth/nose); larynx height and colour.

| Section | Exercise (original) | Watch |
|---------|---------------------|-------|
| 5.1 Resonance & placement | Sustained "ng" then open to "ah", keeping the forward ring | NYVC episode archive (forward tone) |
| 5.2 Brightness vs darkness | One note on "ee", darken towards "aw" and back | NYVC episode archive (forward tone) |
| 5.3 Twang | Duck "quack" / witch cackle to find twang; carry the ring onto vowels | NYVC Ep. 77 "What is Vocal Twang?" |
| 5.4 Vowel shaping | Five-note scale keeping one vowel identical top to bottom | NYVC Ep. 117 "Singing Vowels & Formants" |
| 5.5 Controlling nasality | "mah–bah" alternation, adjusting the soft palate | NYVC Ep. 117 "Singing Vowels & Formants" |

### Area 6 — Range & Flexibility *(Core)*
*Diagram (priority 1):* range as a continuum with transition zones marked.

| Section | Exercise (original) | Watch |
|---------|---------------------|-------|
| 6.1 Extending range safely | Semitone-by-semitone sirens, one new note at a time while easy | NYVC Ep. 113 "Expand Your Vocal Range" |
| 6.2 Sirens & glides | Lip-trill or "ng" sirens bottom-to-top and back, unbroken | NYVC Ep. 101 "Greatest Vocal Exercise" |
| 6.3 Agility (scales & arpeggios) | Descending 5-4-3-2-1 on "ah" at rising tempo; then arpeggios | NYVC Ep. 120 "5 Riffs & Runs" |
| 6.4 Riffs, runs & melisma | Slow pentatonic run on "ah", metronome slow, speed up only when clean | NYVC Ep. 120 "5 Riffs & Runs" |

### Area 7 — Pitch & Ear *(Refinement)*
*Diagram (priority 3):* a scale/keyboard reference showing intervals.

| Section | Exercise (original) | Watch |
|---------|---------------------|-------|
| 7.1 Pitch accuracy & matching | Match a played reference note; hold it steady | NYVC Ep. 9 "You're Not Tone Deaf" |
| 7.2 Interval recognition | Sing intervals from a root (do–mi, do–sol) against a reference | NYVC episode archive *(to source specific)* |
| 7.3 Staying in tune within a key | Scale up/down against a held drone; watch for drift | NYVC episode archive *(to source specific)* |
| 7.4 Self-checking | Record a phrase; compare to the reference; note the gap | NYVC Singing Dictionary Ep. 14 "Tone Deafness" |

### Area 8 — Articulation & Diction *(Refinement)*
*Diagram (priority 3):* the articulators (tongue, jaw, lips, soft palate).

| Section | Exercise (original) | Watch |
|---------|---------------------|-------|
| 8.1 Vowel consistency | Five-note scale on one vowel, kept identical throughout | NYVC Ep. 117 "Singing Vowels & Formants" |
| 8.2 Consonant clarity | Tongue-twisters on a single pitch, then on a scale | NYVC episode archive *(to source specific)* |
| 8.3 Clarity vs legato flow | Sing a phrase legato, then again with crisp consonants; balance | NYVC episode archive *(to source specific)* |
| 8.4 Text without breaking the line | Sustain vowels, place consonants quickly and late | NYVC Ep. 117 "Singing Vowels & Formants" |

### Area 9 — Dynamics & Expression *(Refinement)*
*Diagram (priority 3):* a dynamic swell shape; vibrato as a pitch wave.

| Section | Exercise (original) | Watch |
|---------|---------------------|-------|
| 9.1 Volume control (swells) | Messa di voce on several pitches | NYVC Ep. 62 "Running Out Of Breath" |
| 9.2 Developing vibrato | Deliberate slow pitch pulses, then let them even into vibrato | NYVC Ep. 30 "Vibrato 1 — Pitch Changes" |
| 9.3 Controlling vibrato speed | Practise straight tone → vibrato; vary the rate | NYVC Ep. 6 "Vibrato Speeds" |
| 9.4 Tone-colour & even sustain | Same phrase bright vs dark; hold a note steady, watch for wobble | NYVC episode archive (forward tone) |

### Area 10 — Stylisation: jazz / blues / country *(Application — light)*
*Diagram (priority 3):* a bar showing "on the beat" vs "behind the beat" phrasing.

| Section | Exercise (original) | Watch |
|---------|---------------------|-------|
| 10.1 Phrasing & timing (swing) | Sing a melody on the beat, then deliberately behind it | Nicola Milan / Singer's Secret archive |
| 10.2 Blue notes, bends & slides | Slide into thirds/fifths; flatten the blue notes | Nicola Milan / Singer's Secret archive |
| 10.3 Tasteful ornamentation | Add a single turn or grace note to a plain melody | Judy Rodman (country) |
| 10.4 Storytelling & interpretation | Speak the lyric for meaning, then sing with the same intent | NYVC episode archive *(to source specific)* |
| 10.5 Intro to improvisation | Simple scat over a I–IV–V; a few notes, in time | Nicola Milan / Singer's Secret archive |

### Area 11 — Application & Practice *(Application)*
*Diagram (priority 3):* a weekly practice-cycle loop.

| Section | Exercise (original) | Watch |
|---------|---------------------|-------|
| 11.1 Warm-up & cool-down | Run a full warm-up, then a warm-down | Dr Dan 10-Minute Warm-Up |
| 11.2 Song-learning workflow | Break a song into sections; drill the hardest first | Dr Dan "Turbocharge Your Vocal Practice" |
| 11.3 Building a consistent habit | Schedule a realistic weekly plan; short and frequent | NYVC Ep. 111 "Singers: Practice THIS!" |
| 11.4 Recording & self-assessment | Record, listen, note one specific fix | NYVC episode archive *(to source specific)* |
| 11.5 Performance readiness | Mock run-through, start to finish, no stopping | NYVC episode archive *(to source specific)* |

---

## 6. Practice Log & Progress
- **Practice Log:** date, area/section, duration, notes, optional recording reference.
- **Progress:** simple streak and per-area completion. Lightweight, not a game.

## 7. Home screen
- **Warm-up chooser:** 5 / 10 / 20 min buttons that start a routine immediately.
- **Resume:** continue where you left off.
- **Today's focus (optional):** a suggested section from the path.
- **Quick nav:** the eleven areas + Practice Log.

---

## 8. Data model

**Corrected to match the proven content standard** (see §3a and the reference section 4.4 in `mockups/prototype.html`). The earlier sketch had a single flat `technique` string; the app requires the richer teaching fields below, because the written content must teach the technique on its own.

```
Area          { id, n, title, group, order, core (bool), lede, intro,
                sections[], diagram?, sessionId? }

Section       { id, num, title, level ("Foundational"|"Core"|"Refinement"),
                desc,                  // one line, used in lists + quick recall
                explain,               // 1-3 sentences: what it is, why it matters
                how[],                 // MECHANISM: paragraphs, the actual science
                feel,                  // what it should feel like
                cues[],                // do-this cues
                faults[],              // common faults
                fix,                   // if it goes wrong
                produce[],             // HOW TO PRODUCE IT: ordered steps
                check[],               // how to know you have got it
                troubleshoot[],        // symptom -> cause -> correction
                myths[],               // common misconceptions
                diagram?,              // VisualAsset (see below)
                exercises[],           // Exercise objects
                video,                 // VideoLink
                logEnabled }

Exercise      { id, name, steps[], durationMins, difficulty,
                ref,                   // reference pitch, e.g. "C3"
                pattern? }             // audible target pattern, see below

Pattern       // either an array of semitone offsets from `ref`  e.g. [0,4,7,4,0]
              // or { type:"glide", from, to, andBack? }        e.g. sirens

VisualAsset   { id, areaId?, sectionId?, title, type
                ("anatomy"|"mechanism"|"process"|"map"),
                svg,                   // inline SVG, themed with design tokens
                caption, sourceNotes, verified (bool) }

VideoLink     { id, coach, title, youtubeId, url, topic,
                displayMode ("embed"|"link"), lastChecked, available (bool) }

Session       { id, type ("warmup"|"area"|"custom"), title, areaId?,
                durationMins, steps[] }   // steps reference Exercise objects
Plan          { id, title, totalWeeks, weeks[] }
PlanWeek      { weekNumber, focus, goal, areaIds[], sessionIds[], core (bool), notes }
PlanProgress  { planId, currentWeek, weeksComplete[], startedDate }
LogEntry      { id, date, sectionId?, areaId?, sessionId?, durationMins, notes, recordingRef? }
Progress      { areaId, sectionsComplete[], streakCount, lastPractised }
GlossaryTerm  { term, definition }
```

Notes:
- **Content is data, not code.** Areas live as separate content modules (one per area) so writing content never touches app code, and the same files feed any front-end. A build-time checker validates every section against the required fields.
- **Sections embed their exercises, diagram and video** rather than holding ID references. Single-user app, content authored as a unit — embedding keeps a section readable and editable in one place. IDs remain for logging and progress.
- **`how`, `produce`, `check`, `troubleshoot`, `myths` are required** for a section to count as complete; they are what make the app a standalone reference rather than a video index.
- **One `Session` object** covers warm-up/area/custom — the runner takes any ordered `steps[]`. An **area session** is `type:"area"` with `areaId` set, auto-composed from that area's exercises.
- **`Plan` is a thin sequencing layer** — `PlanWeek` references existing areas/sessions; it stores no teaching content. `PlanProgress` makes it followable and revisitable.
- Single user: no `User` object, no auth. `VideoLink.available` + `lastChecked` drive the fallback; `VisualAsset.verified` must be true before a diagram ships.

### 3a note — the content standard (authoring contract)
Every section is written in this fixed order: **Explain → Mechanism (`how`) → What to feel → Cues → Faults → Fix → How to produce it (`produce`) → Diagram → Check you've got it → Exercises (with what to listen for) → Troubleshooting → Misconceptions → Watch.** Section 4.4 "Building the mix" is the reference example. Videos reinforce; they never carry the teaching.

---

## 9. Interface notes for Claude Design
- **Mobile-first**; single-hand use; timer visible during routines.
- **One reusable section card** from §3 — text, optional diagram, **embedded player**, exercise steps, log action.
- **Embedded player in-card** by default, with the **"video unavailable"** fallback and secondary **"Open on YouTube"** link designed in from the start.
- **Diagram block** sits between Technique and Exercise; clean, labelled, unobtrusive.
- **Three-level drill-down:** Area → Section → Exercise, consistent back path.
- **Session runner** (one screen, reused by warm-ups, area sessions and plan-days): current step, next step, elapsed/remaining, a "skip" and "done" control.
- **Plan view**: weeks as a followable list with progress; tap a week to see its goal and sessions; clearly revisitable.
- **Five archetype screens carry ~90% of the app** — design these first: (1) section card, (2) session runner, (3) home, (4) area overview, (5) plan view.
- **Calm, focused aesthetic**; progress visible but understated.

---

## 10. Link register (verified, current at handover)

**New York Vocal Coaching / Voice Lessons To The World (Justin Stoney) — primary technique**
- Channel: https://www.youtube.com/user/NewYorkVocalCoaching
- Complete episode playlist: https://www.youtube.com/playlist?list=PLpcARcDSTR0I6_riQPFwsiem3FDg0pQQw
- Searchable episode archive (tagged): https://voicelessonstotheworld.com/episodes
- Ep. 1 "4 Breathing Types": https://www.youtube.com/watch?v=mDQoMyPmg9s
- Ep. 6 "Vibrato Speeds": https://www.youtube.com/watch?v=mzJ-tZSrhjg
- Ep. 9 "You're Not Tone Deaf": https://www.youtube.com/watch?v=ZDWSTJSbbXM
- Ep. 13 "Healthy Belting": https://www.youtube.com/watch?v=21P-ci_Ie9Q
- Ep. 30 "Vibrato 1 — Pitch Changes": https://www.youtube.com/watch?v=KN5368Aoxlk
- Ep. 40 "The Mix Voice": https://www.youtube.com/watch?v=CYEsGuldIQY
- Ep. 62 "Running Out Of Breath": https://www.youtube.com/watch?v=Wd8tHaAruiw
- Ep. 77 "What is Vocal Twang?" (episode page): https://voicelessonstotheworld.com/episodes/ep-77-what-is-vocal-twang
- Ep. 101 "The Greatest Vocal Exercise of All Time": https://www.youtube.com/watch?v=h0SIEY_zNqU
- Ep. 111 "Singers: Practice THIS!": https://www.youtube.com/watch?v=LauVoXN7iwY
- Ep. 113 "Expand Your Vocal Range": https://www.youtube.com/watch?v=UFVE9c0BJ64
- Ep. 115 "Find Your Mix Voice (Part 2)": https://www.youtube.com/watch?v=RVYvo44kMms
- Ep. 117 "Singing Vowels & Formants": https://www.youtube.com/watch?v=KC6vNPLzftw
- Ep. 120 "5 Riffs & Runs Every Singer Needs To Know": https://www.youtube.com/watch?v=YOJTjSm7gvE
- Ep. 129 "Top 7 Vocal Exercises": https://www.youtube.com/watch?v=KfnxccMdi-A
- Singing Dictionary Ep. 14 "Tone Deafness (Amusia)": https://www.youtube.com/watch?v=Hm27cPOo4k4

**Dr Dan's Voice Essentials — practical technique & warm-ups**
- Channel: https://www.youtube.com/channel/UCIBFIha83xPR50EwE_qIkCA
- 10-Minute Singing Warm-Up (Male): https://www.youtube.com/watch?v=zHwCIIDmXrg
- 10-Minute Singing Warm-Up (Female): https://www.youtube.com/watch?v=h5d-9KNnOgY
- 10-Minute Singing Warm-up (alt): https://www.youtube.com/watch?v=EnP-yHiTI9Q
- "Warm Up the Singing Voice": https://www.youtube.com/watch?v=Bontr0IqN0w
- "Turbocharge Your Vocal Practice": https://www.youtube.com/watch?v=aI_r-yUvMd8

**Stylisation (light)**
- Nicola Milan / Singer's Secret archive (jazz & blues): https://www.youtube.com/c/Singerssecret
  *Channel repurposed towards public-speaking; singing tutorials remain as an archive. Higher risk of moving — check nicolamilan.com.*
- Judy Rodman (country vocal coaching, Nashville): https://www.youtube.com/channel/UCdtKnKekk7haPJlfD0wsqag

**Framework references (link out only)**
- Estill Voice International: https://estillvoice.com/
- Complete Vocal Institute (CVT): https://completevocalinstitute.com/complete-vocal-technique/

> Items marked *(to source specific)* in §5 need a specific verified video chosen during the build; the episode archive covers them in the meantime. Store all links with `displayMode: embed` and a `lastChecked` date.

---

## 11. Candidate enhancements (for your decision — not yet in the core build)

These would strengthen the app; listed so they're captured, not silently assumed.

1. **Built-in pitch/drone + metronome tool.** *(Highest value.)* Many exercises need a reference pitch, a held drone, or a metronome (agility, pitch, tuning, riffs). A simple in-app tone generator and metronome make the exercises self-contained — otherwise "everything in one place" quietly breaks the moment you need a starting note.
2. **Record & compare.** In-app record + playback, ideally against a reference tone. This is the single feature that most mimics a coach's ear and reinforces learning; the log already references recordings, so the object exists.
3. **Repertoire / "my songs".** A place to store songs you're working on — key, notes, target sections. Area 11 teaches song-learning but has nowhere to keep the songs.
4. **Search.** As the app grows to 11 areas × several exercises plus sessions and a plan, a search box earns its place.
5. **Offline note.** Embeds need a connection; owned text, diagrams and exercise steps still work offline. Decide whether offline practice matters to you.

*Now covered by confirmed features:* the earlier "start here" and "today's focus" gaps are answered by the **Stage Plan** (§4c); the "custom routine builder" is the **custom `Session`** type (§4, §8).

---

## 12. Build plan

### 12a. Modules (build in dependency order)
The app is large, so it is built as five modules rather than all at once. Each depends only on those before it.

1. **Content library** — areas → sections → exercises, the section card, embeds, diagrams. The knowledge base.
2. **Session runner** — the timed guided player; powers warm-ups, area sessions and (later) plan-days.
3. **Stage Plan** — the multi-week programme that sequences sessions.
4. **Tracking** — practice log, streaks, per-area completion.
5. **Tools** *(enhancements)* — pitch/drone/metronome, then record-and-compare.

### 12b. Recommended approach
1. **Full brief** — this document.
2. **Design the 5 archetype screens** in Claude Design (section card, session runner, home, area overview, plan view) — not every screen; the app is mostly one card repeated.
3. **Build Registration as a working vertical slice** — its UI *and* its data/logic together, including its area session — to validate the template against real constraints before going wide.
4. **Build outward, module by module**, in the order above: finish the content library (rest of the areas), then generalise the session runner, then the Stage Plan, then Tracking, then Tools.

This keeps your instinct (brief → mock-up → staged backend) but adds two safeguards: design *archetypes* not every screen, and prove one *vertical slice* end-to-end before separating UI from backend.

## 13. Open items
- **Warm-up voice type:** **resolved — male** (Dr Dan 10-minute male warm-up as the default).
- **Diagram scope:** priority-1 diagrams are the core (4–6); 2 for foundations (1–3); 3 for the rest. Each verified before display. *(Still open: confirm the exact set.)*
- **`(to source specific)` videos:** choose specific verified clips during the build for the sections flagged in §5.
- **Stage Plan:** confirmed at **twelve weeks** (sequence in §4c). Revisit/repeat weeks freely.
- **§11 enhancements:** **pitch/drone + metronome tool resolved — in early scope** (part of the core build). Record-and-compare and the other §11 items remain candidates for later.

*Platform decisions (recorded in README):* React PWA on GitHub Pages; Supabase sync with one-time passphrase pairing; cool/unfussy "TIMBRE" visual direction.
