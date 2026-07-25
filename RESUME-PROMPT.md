# Resume prompt — Vocali

Paste the block below at the start of a new session to pick up exactly where we left off. Everything important is saved in the project files; this points a fresh session at them and states the current state.

---

Resume the Vocali vocal-training app project in the folder E:\Vocal App.

First, read these files in order before doing anything:
1. README.md  (single source of truth — decisions, current stage, workflow)
2. vocal-training-app-handover.md  (full content & structure spec)
3. vocal-training-app-design-brief.md  (visual direction / screen briefs)
4. mockups/prototype.html  (the working prototype — open/read it)

Context so you're oriented:
- Vocali is a personal, single-user vocal-training app (technique-first: jazz,
  blues, light country). Deep "one-stop-shop" REFERENCE plus training programme —
  the written content must teach technique itself so it stands alone; videos only
  reinforce. Desktop/iPad-first, calm through structure not emptiness.
- Stack decided: React single-page PWA, hosted static on GitHub Pages, Supabase
  for cross-device sync with a one-time passphrase per device.
- Brand: name "Vocali", profile-head-with-open-mouth logo, "Vocal training" on a
  teal chip. Look = cool/unfussy editorial ledger: warm cream ground, deep teal
  for the current-focus element, burnt orange for the single primary action,
  Modernist serif display over clean sans. Owner is a TENOR/BARITONE
  (secondo passaggio ~E4-F4) — pitches are set for this.
- ALL work happens here (Cowork/Code), NOT the Design surface (it produced hollow
  frames). mockups/design-prompts.md is optional reference only.

Where we got to:
- mockups/prototype.html is a working desktop/iPad prototype: area-card Home,
  the COMPLETE Registration area (4.1-4.5) written to full reference depth
  (mechanism, step-by-step production, feel, cues, faults, self-check,
  troubleshooting, misconceptions, exercises with what-to-listen-for, and a
  labelled SVG diagram each), a twelve-week plan, a glossary (nav page + inline
  hover definitions), a working pitch-drone + metronome, and audible
  "Hear the pattern" playback on exercises.
- Section 4.4 "Building the mix" is the CONTENT STANDARD every section follows.
- Every technical claim and diagram is marked "to be source-verified" and must be
  checked against a reliable source before ship.

Open decision for you to help me with next (pick up here):
Either (a) extend the same full-depth treatment to the next area
(Resonance & Tone or Breath & Support), or (b) treat Registration as the proven
vertical slice and start the actual React build with Supabase sync.
Also still open: which areas get diagrams beyond the core, and choosing specific
verified videos for sections flagged "(to source specific)" in handover §5.

Confirm you've read the files and summarise the current state back to me before we continue.
