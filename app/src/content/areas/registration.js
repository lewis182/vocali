/* Vocali — Area 4: Registration (technical core).
   Written to the content standard: every section teaches the technique itself.
   Reference pitches are set for a TENOR/BARITONE voice
   (primo passaggio ~B3–C4, secondo ~E4–F4).

   Each `diagram` carries `verified: false` until its claims have been checked
   against a reliable source; the UI shows an "unverified" note while false. */

export const registration = {
  id: 'registration',
  n: '04',
  title: 'Registration',
  group: 'Technical core',
  order: 4,
  core: true,
  lede: 'The blend of chest and head function that lets you sing across your full range without a break. This is the technical heart of the instrument — get it working and power, ease and range all follow.',
  intro: 'Registration is about how the vocal folds change shape as you move through your range, and how you manage the transition. Low down, the folds are short and thick and vibrate along their full mass — that is <em>chest voice</em>, strong and speech-like. High up they stretch long and thin — <em>head voice</em>, lighter and cooler. Between them sits the <strong>passaggio</strong>, the zone where coordination has to shift and where most cracks, flips and strain happen. The <strong>mix</strong> is the learned coordination that blends the two so the change is inaudible. Work these five sections in order: understand chest and head as endpoints, learn to negotiate the passaggio, build the mix, then smooth the whole range into one connected instrument.',

  diagram: {
    id: 'dia-reg-area',
    title: 'Fold length and thickness across the range',
    type: 'mechanism',
    verified: false,
    caption: 'Chest: short, thick folds with a large vibrating depth. Head: long, thin folds vibrating at the edges. The passaggio is the zone between, where the balance shifts. Informational diagram — to be source-verified before ship.',
    svg: `<svg viewBox="0 0 720 240" role="img" aria-label="Chest and head fold posture with the passaggio between">
      <text x="120" y="34" font-family="Inter,sans-serif" font-size="12" font-weight="700" fill="#1E1B17">CHEST — short, thick</text>
      <text x="600" y="34" font-family="Inter,sans-serif" font-size="12" font-weight="700" fill="#1E1B17" text-anchor="end">HEAD — long, thin</text>
      <rect x="60" y="60" width="200" height="34" rx="4" fill="#1C6B85" fill-opacity="0.55"/>
      <rect x="460" y="68" width="200" height="18" rx="4" fill="#8FBAC8" fill-opacity="0.9"/>
      <line x1="290" y1="77" x2="430" y2="77" stroke="#C05A24" stroke-width="2" stroke-dasharray="7 6"/>
      <text x="360" y="112" font-family="Inter,sans-serif" font-size="12" font-weight="700" fill="#C05A24" text-anchor="middle">PASSAGGIO · blend zone</text>
      <text x="360" y="132" font-family="Inter,sans-serif" font-size="11" fill="#8B8272" text-anchor="middle">tenor/baritone: ~B3–C4 and ~E4–F4</text>
      <line x1="60" y1="170" x2="660" y2="170" stroke="#D6CDB8" stroke-width="1"/>
      <text x="60" y="192" font-family="Inter,sans-serif" font-size="11" fill="#8B8272">lower pitch</text>
      <text x="660" y="192" font-family="Inter,sans-serif" font-size="11" fill="#8B8272" text-anchor="end">higher pitch →</text>
    </svg>`
  },

  sections: [
    /* ---------------------------------------------------------------- 4.1 */
    {
      id: 'chest',
      num: '4.1',
      title: 'Chest voice',
      level: 'Core',
      logEnabled: true,
      desc: 'Your lower, speech-like register — strong and grounded.',
      explain: 'Chest voice is your lower, speech-like register and the foundation of power and warmth. The vocal folds are short and thick and vibrate through their full depth, giving a rich tone with strong low harmonics. In tenor/baritone territory it runs from your lowest notes up to around the first passaggio (~B3–C4). Used well it is strong and effortless; forced, it is the fastest route to strain.',
      how: [
        'The <strong>thyroarytenoid (TA)</strong> — the muscle forming the body of each fold — is dominant. It contracts to shorten and thicken the folds, so a large, deep portion of tissue vibrates and the closed phase of each cycle is long. That thickness is what gives chest its density, its loud low harmonics and its speech-like body.',
        'Because so much mass is in vibration, chest voice naturally resists being carried high: as pitch rises the folds must thin, and if the TA refuses to yield the sound strains or flips. Chest is therefore powerful but has a sensible ceiling — respect it and build the mix (4.4) above it rather than dragging chest upward.',
        'Practically, chest voice is your speaking voice put onto sung pitch. If your speech is healthy and resonant, chest already has the ingredients; the work is keeping it easy and connected rather than pushed.'
      ],
      feel: 'A spoken quality with clear sympathetic buzz in the sternum and upper chest. It should feel like an easy, resonant speaking voice on pitch — present but effortless, never a shout.',
      cues: [
        'Speak the vowel on pitch first, then sustain it — keep the spoken feel',
        'Aim for "resonant", not "loud" — let volume be a by-product of clean fold closure',
        'Keep the jaw released and the vowel open and comfortable',
        'Keep the breath moving steadily — support, do not press'
      ],
      faults: [
        'Pushing or pressing for volume — builds a hard ceiling at the passaggio and tires the voice fast',
        'Dragging heavy chest up past its comfortable limit instead of releasing into mix',
        'Breathiness from incomplete closure — a weak, airy, unfocused tone'
      ],
      fix: 'If it feels tight, drop the volume by half and let the vowel widen — the power returns once the squeeze goes. If it sounds breathy or weak, start the note with a gentle "g" (as in "go") to bring the folds together, then sustain.',
      produce: [
        '<strong>Speak, then sing.</strong> Say "one, two, three" in a comfortable, resonant speaking voice and notice the natural pitch and the chest buzz.',
        '<strong>Put it on a note.</strong> Carry that same voice onto an easy low-middle pitch (around A2–D3), keeping the spoken ease.',
        '<strong>Add a clean onset.</strong> Open to "gah" or "guh" — the "g" gives firm closure, the open vowel keeps it free.',
        '<strong>Move in small steps.</strong> Sing a short 1-3-5-3-1 on "gee" or "gah", up a semitone at a time, only while it stays easy and spoken.',
        '<strong>Respect the ceiling.</strong> Near your first passaggio (~B3–C4) do not push to keep it heavy — that is the signal to start blending (4.4), not to force chest higher.'
      ],
      check: [
        'It sounds and feels like a strong speaking voice on pitch, not a shout.',
        'You can hold a note steadily with a clear, focused (non-breathy) tone.',
        'You feel buzz in the chest but no tightness in the throat.',
        'You can get louder and softer without the tone cracking or pressing.',
        'It stays comfortable — you stop before the note wants to strain.'
      ],
      troubleshoot: [
        '<strong>Tight, pressed, tiring quickly</strong> → too much effort/volume. Halve the volume, release the jaw, open the vowel.',
        '<strong>Airy, weak, unfocused</strong> → incomplete closure. Add a firm "g"/"b" onset; think "speak", not "sigh".',
        '<strong>Cracks or flips going higher</strong> → you have hit the chest ceiling. Stop dragging chest up; move to 4.4 mix.',
        '<strong>Wobbles or spreads when louder</strong> → unsteady breath. Return to Area 2 support and keep the airflow even.'
      ],
      myths: [
        '"Chest voice comes from the chest." — The sound is made at the folds; the chest only resonates sympathetically. The name is a sensation, not a source.',
        '"Louder chest is better chest." — Past a point, more push only adds strain and lowers your ceiling. Easy, resonant chest is the goal.'
      ],
      diagram: {
        id: 'dia-4-1',
        title: 'Coronal view — chest posture',
        type: 'anatomy',
        verified: false,
        caption: 'Schematic front-on section: in chest, a deep, thick portion of each fold vibrates, giving density and strong low harmonics. Compare with head voice (4.2). Informational diagram — to be source-verified before ship.',
        svg: `<svg viewBox="0 0 640 200" role="img" aria-label="Coronal schematic of short thick chest-voice folds" font-family="Inter,sans-serif">
          <text x="320" y="26" text-anchor="middle" font-size="12" font-weight="700" fill="#1E1B17">Coronal view · chest — short, thick folds</text>
          <line x1="70" y1="160" x2="570" y2="160" stroke="#D6CDB8" stroke-width="1"/>
          <path d="M150 160 Q235 55 318 160 Z" fill="#1C6B85" fill-opacity="0.5"/>
          <path d="M322 160 Q405 55 490 160 Z" fill="#1C6B85" fill-opacity="0.5"/>
          <line x1="110" y1="70" x2="110" y2="160" stroke="#C05A24" stroke-width="1.5"/>
          <line x1="105" y1="70" x2="115" y2="70" stroke="#C05A24" stroke-width="1.5"/>
          <line x1="105" y1="160" x2="115" y2="160" stroke="#C05A24" stroke-width="1.5"/>
          <text x="100" y="120" text-anchor="end" font-size="11" fill="#C05A24">large vibrating depth</text>
          <text x="320" y="182" text-anchor="middle" font-size="11" fill="#8B8272">midline (glottis)</text>
        </svg>`
      },
      exercises: [
        {
          id: 'ex-4-1-a',
          name: 'Spoken "gee" on 1-3-5-3-1',
          durationMins: 5,
          difficulty: 'Easy',
          ref: 'C3',
          pattern: [0, 4, 7, 4, 0],
          steps: [
            'Set an easy low-mid reference pitch (drone in the tools rail).',
            'On "gee", sing 1-3-5-3-1 in a spoken, chatty feel — not sung and precious.',
            'Up a semitone each time, only while it stays easy. Stop the moment it wants to push.',
            'Come back down the same way to finish light. Listen for a clear, focused tone with no press.'
          ]
        },
        {
          id: 'ex-4-1-b',
          name: 'Chesty count',
          durationMins: 3,
          difficulty: 'Easy',
          ref: 'C3',
          pattern: [0],
          steps: [
            'On one comfortable pitch, count "1–2–3–4–5" in a strong speaking voice.',
            'Sustain the "5" for four beats, keeping the same spoken weight.',
            'Repeat a tone higher; keep it spoken, never shouted.'
          ]
        }
      ],
      video: {
        id: 'vid-nyvc-13',
        coach: 'New York Vocal Coaching',
        title: 'NYVC Ep. 13 — Healthy Belting',
        youtubeId: '21P-ci_Ie9Q',
        displayMode: 'embed',
        available: true,
        lastChecked: '2026-07-25'
      }
    },

    /* ---------------------------------------------------------------- 4.2 */
    {
      id: 'head',
      num: '4.2',
      title: 'Head voice',
      level: 'Core',
      logEnabled: true,
      desc: 'Your higher, lighter register — cool and flute-like.',
      explain: 'Head voice is your upper register: the folds stretch long and thin, so far less mass vibrates and the tone is lighter, cooler and more flute-like. It gives you range and is the upper ingredient of the mix. The goal is a <em>connected</em> head voice — clear and focused — not the breathy, disconnected falsetto many singers default to.',
      how: [
        'Here the <strong>cricothyroid (CT)</strong> muscle dominates. It tilts the thyroid cartilage forward, lengthening and thinning the folds so only their thin edges vibrate. Less mass means fewer low harmonics and much more ease up high.',
        'The catch is closure. Thin folds can vibrate with a gap left between them — that is breathy falsetto, pretty but weak. A trained head voice keeps light but complete closure, so the tone stays clear and carries. The difference between falsetto and connected head voice is almost entirely how firmly the folds meet.',
        'Head voice is not the same as "the top of your belt". It is a distinct coordination you can also use low down (a light "hoot") — learning it in isolation first makes it far easier to blend into the mix later.'
      ],
      feel: 'Resonance lifts behind the soft palate and up into the head. A gentle hooting or "oo" sensation; the note feels like it is already up there and you drop into it rather than reaching up for it.',
      cues: [
        'Call a soft "yoo-hoo" from above and let the voice release upward',
        'Think "oo" to keep the folds trim and the tone focused',
        'Imagine the pitch sits on a shelf above you — arrive at it lightly',
        'Keep a little firmness so it is clear, not breathy'
      ],
      faults: [
        'Pushing chest up instead of releasing into head — the voice cracks or strains at the break',
        'Collapsing into pure breathy falsetto with no closure — disconnected and weak',
        'Reaching or lifting the chin, which tightens rather than frees the top'
      ],
      fix: 'If it is breathy, add a light "g" or "ng" onset to bring the folds together. If it strains, lighten right down and switch the vowel to "oo" — ease first, strength later.',
      produce: [
        '<strong>Start from a call.</strong> Softly call "yoo-hoo" as if to someone upstairs. The second syllable naturally lands in head voice — notice how easy it is.',
        '<strong>Sigh down.</strong> From a comfortable high note on "oo", let the voice glide gently downward like a soft sigh, staying quiet and clear.',
        '<strong>Add closure.</strong> If it is airy, begin the note with "g" or "ng" to firm the folds, then open to "oo" keeping that focus.',
        '<strong>Keep it light and forward.</strong> Do not chase volume — a clear, connected head voice is quiet at first. Power comes later, through the mix.',
        '<strong>Explore the range.</strong> Once easy up high, try the same light coordination lower down; that "light hoot" low note is the seed of your mix.'
      ],
      check: [
        'The tone is clear and focused, not breathy or muffled.',
        'It feels easy and light — no reaching or squeezing.',
        'You can crescendo it slightly without it cutting out or flipping to a shout.',
        'A hand on the chest feels little vibration; the sensation is higher, in the head/face.',
        'You can slide down from head toward your break without a sudden change of weight.'
      ],
      troubleshoot: [
        '<strong>Breathy, airy, weak</strong> → folds not closing. Add "g"/"ng" onsets and a touch of "ee" brightness.',
        '<strong>Strains or cracks near the break</strong> → carrying too much chest weight up. Lighten first, then approach from above with "yoo-hoo".',
        '<strong>Sounds hooty and dull</strong> → too dark/covered. Brighten the vowel slightly toward "ee" for focus.',
        '<strong>Nothing but falsetto, no strength</strong> → normal at first. Build closure gradually; do not force volume, it will connect over weeks.'
      ],
      myths: [
        '"Head voice is falsetto." — Falsetto is head voice with the folds left slightly apart (breathy). Connected head voice closes them, so it is clear and usable.',
        '"Head voice is weak by nature." — Untrained it is quiet, but with closure and resonance it becomes strong; it is also the raw material of a powerful mix.'
      ],
      diagram: {
        id: 'dia-4-2',
        title: 'Coronal view — head posture',
        type: 'anatomy',
        verified: false,
        caption: 'Schematic front-on section: in head voice the folds are stretched long and thin, so only a shallow edge vibrates — light and easy, but it needs firm closure to stay clear rather than breathy. Compare with chest (4.1). Informational diagram — to be source-verified before ship.',
        svg: `<svg viewBox="0 0 640 200" role="img" aria-label="Coronal schematic of long thin head-voice folds" font-family="Inter,sans-serif">
          <text x="320" y="26" text-anchor="middle" font-size="12" font-weight="700" fill="#1E1B17">Coronal view · head — long, thin folds</text>
          <line x1="70" y1="160" x2="570" y2="160" stroke="#D6CDB8" stroke-width="1"/>
          <path d="M120 160 Q235 120 318 160 Z" fill="#8FBAC8" fill-opacity="0.85"/>
          <path d="M322 160 Q405 120 520 160 Z" fill="#8FBAC8" fill-opacity="0.85"/>
          <line x1="90" y1="128" x2="90" y2="160" stroke="#C05A24" stroke-width="1.5"/>
          <line x1="85" y1="128" x2="95" y2="128" stroke="#C05A24" stroke-width="1.5"/>
          <line x1="85" y1="160" x2="95" y2="160" stroke="#C05A24" stroke-width="1.5"/>
          <text x="80" y="150" text-anchor="end" font-size="11" fill="#C05A24">small depth</text>
          <text x="320" y="182" text-anchor="middle" font-size="11" fill="#8B8272">midline (glottis)</text>
        </svg>`
      },
      exercises: [
        {
          id: 'ex-4-2-a',
          name: '"Yoo-hoo" glides down',
          durationMins: 5,
          difficulty: 'Easy–moderate',
          ref: 'G4',
          pattern: { type: 'glide', from: 0, to: -7 },
          steps: [
            'From a comfortable high note on "oo", glide gently downward like a soft sigh.',
            'Keep it quiet and connected — clear, not airy. Listen for a focused tone, not breath.',
            'Repeat starting a semitone higher each time while it stays easy.'
          ]
        },
        {
          id: 'ex-4-2-b',
          name: '"Ng" sirens (upper)',
          durationMins: 4,
          difficulty: 'Moderate',
          ref: 'D4',
          pattern: { type: 'glide', from: 0, to: 9, andBack: true },
          steps: [
            'On "ng" (as in "sing"), siren from a mid note up to a high note and back.',
            'Keep the sound narrow and buzzy at the top — that buzz is closure.',
            'No push at the peak; let it float. Listen for an even, unbroken line.'
          ]
        }
      ],
      video: {
        id: 'vid-nyvc-113',
        coach: 'New York Vocal Coaching',
        title: 'NYVC Ep. 113 — Expand Your Vocal Range',
        youtubeId: 'UFVE9c0BJ64',
        displayMode: 'embed',
        available: true,
        lastChecked: '2026-07-25'
      }
    },

    /* ---------------------------------------------------------------- 4.3 */
    {
      id: 'passaggio',
      num: '4.3',
      title: 'The passaggio (the break)',
      level: 'Core',
      logEnabled: true,
      desc: 'The transition zone where coordination must shift.',
      explain: 'The passaggio is the transition zone — the "break" — between chest and head, where the folds must change coordination. It is the source of most cracks, flips and strain, and negotiating it smoothly is the single biggest step in registration. It is not a wall; it is a gear-change zone. For your tenor/baritone voice the first passaggio sits around B3–C4 and the second around E4–F4.',
      how: [
        'As pitch rises, the <strong>TA</strong> (which keeps the folds thick) must gradually yield to the <strong>CT</strong> (which stretches and thins them). Hold onto heavy chest and the system over-shoots, then cracks; grab to stop the crack and it pinches. The skill is a smooth, gradual handover of effort through the zone rather than a sudden switch.',
        'Two passaggi exist. The <em>primo passaggio</em> (~B3–C4 for you) is where chest first wants to lighten; the <em>secondo passaggio</em> (~E4–F4) is the more obvious "break" where you must commit to a lighter, mixed coordination. Knowing exactly where yours are lets you prepare a note or two early instead of being ambushed by them.',
        'Semi-occluded exercises are the great equaliser here: the gentle back-pressure of a lip trill or straw balances the air and the folds so the transition largely happens by itself — you train the coordination without muscling it.'
      ],
      feel: 'A wobble or an urge to push at specific notes. Map yours precisely (the diagram shows the likely zone) — that awareness is half the battle.',
      cues: [
        'Lighten slightly and narrow the vowel toward "oo" or "uh" as you approach the zone',
        'Keep airflow steady and even — no shove, no backing off',
        'Let semi-occluded sounds (lip trills, straw) carry you through hands-free',
        'Prepare early — begin easing a note or two before the break, not at it'
      ],
      faults: [
        'Pushing chest through the zone — strain, then a flip',
        'Squeezing to avoid the flip — a tight, pinched tone',
        'Backing off the breath — the note goes breathy and disconnected'
      ],
      fix: 'Lip trills or a straw remove the pressure so the transition happens on its own; do slow sirens straight through the zone daily until the seam disappears. If a specific note always breaks, isolate it and trill across it repeatedly.',
      produce: [
        '<strong>Find your break.</strong> Slide slowly up on an "ee" or "oo" and note where it wobbles or wants to flip — that is your secondo passaggio (likely ~E4–F4).',
        '<strong>Take the pressure off.</strong> Switch to a lip trill or straw. On that, siren slowly from low chest up through the break and into head.',
        '<strong>Keep the effort even.</strong> Do not change loudness or push at the break — the trill should sound identical the whole way through.',
        '<strong>Lighten and narrow.</strong> As you reach the zone, think "oo/uh" and let the tone get a shade smaller — this invites the folds to thin instead of jamming.',
        '<strong>Go both ways.</strong> Glide back down through the break just as smoothly, then gradually swap the trill for a real vowel once the seam is gone.'
      ],
      check: [
        'You can glide from chest to head and back with no audible click, flip or gap.',
        'The loudness stays roughly even across the break — no sudden surge or drop.',
        'On a lip trill the transition is already smooth before you try it on a vowel.',
        'You know, to the note, where your break is — and can prepare for it.',
        'The zone feels like a gentle gear-change, not a cliff edge.'
      ],
      troubleshoot: [
        '<strong>Cracks/flips up to head</strong> → too much chest weight held too long. Lighten earlier and narrow the vowel toward "oo".',
        '<strong>Pinched or tight through the zone</strong> → squeezing to avoid the flip. Return to lip trills/straw; let back-pressure do the work.',
        '<strong>Goes breathy at the break</strong> → you backed off the air/closure. Keep steady airflow and a light firm onset.',
        '<strong>Smooth on a trill but not on vowels</strong> → carry the trill coordination over gradually; alternate one bar trill, one bar "oo".'
      ],
      myths: [
        '"The break is a flaw to be hidden." — It is a normal feature of every voice; trained, it becomes an invisible transition, not a defect.',
        '"You must power through the passaggio." — The opposite: you ease and lighten through it. Power there comes later, from the mix, not from force.'
      ],
      diagram: {
        id: 'dia-4-3',
        title: 'Passaggio map — tenor/baritone',
        type: 'map',
        verified: false,
        caption: 'Approximate map for a tenor/baritone. The first passaggio sits around B3–C4 and the second around E4–F4: below it favour chest, through the shaded band blend into mix, above it head/mix. Your exact notes may sit a semitone or two either way. Informational diagram — to be source-verified before ship.',
        svg: `<svg viewBox="0 0 720 190" role="img" aria-label="Approximate passaggio map for a tenor-baritone voice" font-family="Inter,sans-serif">
          <rect x="60" y="66" width="300" height="48" fill="#1C6B85" fill-opacity="0.16"/>
          <rect x="360" y="66" width="150" height="48" fill="#C05A24" fill-opacity="0.18"/>
          <rect x="510" y="66" width="150" height="48" fill="#1C6B85" fill-opacity="0.42"/>
          <line x1="60" y1="114" x2="660" y2="114" stroke="#D6CDB8" stroke-width="1"/>
          <text x="210" y="56" text-anchor="middle" font-size="12" font-weight="700" fill="#1E1B17">Chest</text>
          <text x="435" y="56" text-anchor="middle" font-size="12" font-weight="700" fill="#C05A24">Passaggio · blend</text>
          <text x="585" y="56" text-anchor="middle" font-size="12" font-weight="700" fill="#1E1B17">Head / mix</text>
          <text x="70" y="134" font-size="11" fill="#8B8272">A2</text>
          <text x="170" y="134" font-size="11" fill="#8B8272">E3</text>
          <text x="300" y="134" font-size="11" fill="#8B8272">B3</text>
          <text x="360" y="134" font-size="11" fill="#8B8272">C4</text>
          <text x="500" y="134" font-size="11" fill="#8B8272">F4</text>
          <text x="590" y="134" font-size="11" fill="#8B8272">A4</text>
          <text x="648" y="134" font-size="11" fill="#8B8272">C5</text>
          <text x="360" y="176" text-anchor="middle" font-size="11" fill="#8B8272">lower pitch → higher pitch</text>
        </svg>`
      },
      exercises: [
        {
          id: 'ex-4-3-a',
          name: 'Lip-trill sirens through the break',
          durationMins: 5,
          difficulty: 'Moderate',
          ref: 'C3',
          pattern: { type: 'glide', from: 0, to: 14, andBack: true },
          steps: [
            'Set a slow metronome (tools rail) if you want a steady pace.',
            'On a lip trill, siren slowly from low chest up through your break and into head, then back down.',
            'Do not change effort at the break — keep the trill even the whole way.',
            'Only add speed once the seam is smooth. Listen for zero click at the transition.'
          ]
        },
        {
          id: 'ex-4-3-b',
          name: 'Straw glides',
          durationMins: 4,
          difficulty: 'Moderate',
          ref: 'C3',
          pattern: { type: 'glide', from: 0, to: 14, andBack: true },
          steps: [
            'Phonate through a narrow straw (or "oo" with pursed lips).',
            'Glide the same low-to-high-to-low path.',
            'Feel the back-pressure balancing the folds so the change happens by itself.'
          ]
        }
      ],
      video: {
        id: 'vid-nyvc-101',
        coach: 'New York Vocal Coaching',
        title: 'NYVC Ep. 101 — The Greatest Vocal Exercise of All Time',
        youtubeId: 'h0SIEY_zNqU',
        displayMode: 'embed',
        available: true,
        lastChecked: '2026-07-25'
      }
    },

    /* ------------------------------------------------- 4.4 (the standard) */
    {
      id: 'mix',
      num: '4.4',
      title: 'Building the mix',
      level: 'Core',
      logEnabled: true,
      desc: 'The learned coordination that carries strength through the break.',
      explain: 'The mix is not a third register but a balanced coordination of the same two muscle systems that make chest and head. You keep enough vocal-fold closure and thickness for a strong, connected tone, while allowing enough fold stretch for the pitch to rise without strain. In practice it is what lets you sing around F4–A4 with much of the strength of chest but the ease of head — the sound behind a belted chorus and an effortless jazz line alike.',
      how: [
        'Two intrinsic muscle groups set the shape of the folds. The <strong>thyroarytenoid (TA)</strong> — the body of the fold itself — shortens and thickens them, adding mass and the bright, harmonically rich quality we hear as "chest". The <strong>cricothyroid (CT)</strong> tilts the thyroid cartilage forward to stretch and thin the folds, giving the lighter "head" quality and easy height. In pure chest the TA dominates; in pure head the CT dominates.',
        'In a mix the two are held in <em>antagonistic balance</em>: the CT provides stretch so the pitch sits comfortably, while the TA keeps enough medial compression that the folds still close firmly — a longer closed phase of each vibration — so the tone stays connected and loud rather than breathy.',
        'Crucially, much of the perceived power in a good mix is <em>resonance, not muscular push</em>. A near-neutral larynx and a slightly narrowed vowel let your vocal-tract resonances reinforce the upper harmonics — the "ring" around 2.8–3.2 kHz (the singer\'s-formant / twang region). That ring is what makes a mixed note cut and feel powerful while the folds themselves work only moderately. If you take one idea from this page: up high, reach for brighter resonance before you reach for more effort.'
      ],
      feel: 'A tall, narrow, forward resonance that stays connected through the break — neither heavy and shouty nor light and breathy. The note should feel noticeably lighter than it sounds.',
      cues: [
        'Keep a tall, narrow mouth and a bright, forward "buzz"',
        'Use "mum" or "no" — their gentle semi-occlusion builds in closure and ease',
        'Keep the larynx still: a hand on the throat should feel no sudden jump upward',
        'Aim the sound forward into the mask rather than pushing it up and out'
      ],
      faults: [
        'Pushing chest weight up instead of blending — the mix turns into a shout, then cracks',
        'Over-lightening into breathy head voice — the power drains away',
        'A rising larynx and squeezed throat as you climb — muscling height instead of tuning resonance'
      ],
      fix: 'If it shouts, halve the volume, brighten and narrow the vowel, and let resonance carry it. If it thins out, add a firmer "g" or "b" onset for closure and a touch more twang. If the larynx jumps, do a couple of silent yawn-sigh releases and restart quieter on "ng".',
      produce: [
        '<strong>Find the ingredient first.</strong> Say "mum" in a slightly bratty, witch-cackle-bright tone. That edge is <em>twang</em> — it pre-tunes the resonance the mix needs. Keep it comfortable, not harsh.',
        '<strong>Anchor it low.</strong> Put that bright "mum" on an easy low-middle pitch (around C3–E3) and keep the forward buzz.',
        '<strong>Climb on a scale.</strong> Sing a slow 1-3-5-3-1 on the same bright "mum". Do not get louder going up — hold the volume level and let brightness do the climbing.',
        '<strong>Manage the break.</strong> Approaching your passaggio, narrow the vowel a shade toward "muh", and imagine the pitch travelling forward and up into the mask, not up-and-out of the mouth.',
        '<strong>Stay steady.</strong> Keep the larynx still and the airflow moderate — no extra shove of air at the top.',
        '<strong>Rise only when even.</strong> Move up a semitone only once the current key is easy and even. Even beats high — stop the moment it wants to push.'
      ],
      check: [
        'The note feels lighter than it sounds — clearly less effort than a full belt for similar power.',
        'You can swell it louder and softer without it flipping or cutting out.',
        'A hand on the chest still feels some buzz (connected), but less than full chest voice.',
        'There is no click or gear-change at the break — the timbre stays consistent across it.',
        'Recorded back, the tone above the break matches the tone below it, only higher.'
      ],
      troubleshoot: [
        '<strong>Turns into a shout then cracks</strong> → too much weight (TA). Halve the volume, brighten and narrow the vowel, let resonance work.',
        '<strong>Goes breathy or thin, loses power</strong> → too little closure (over-CT). Add a firm "g"/"b" onset and more twang.',
        '<strong>Larynx rises, throat squeezes</strong> → you are muscling height. Silent yawn-sigh to release, then restart quietly on "ng".',
        '<strong>Flips to falsetto on the same note every time</strong> → passaggio under-trained. Return to 4.3 lip-trill sirens on that exact note, then re-approach on "mum".'
      ],
      myths: [
        '"The mix is a separate register." — It is a balance of the same TA–CT system, not a new gear.',
        '"Belting is just loud chest pushed high." — Healthy belt is a bright, well-resonated mix; brute force is what damages voices.',
        '"More air gives more power up top." — Excess air blows the folds apart and thins the tone; steady, moderate air with firm closure gives power.'
      ],
      diagram: {
        id: 'dia-4-4',
        title: 'TA–CT balance across the range',
        type: 'mechanism',
        verified: false,
        caption: 'As pitch rises, chest-making muscle (TA) activity tapers while stretch muscle (CT) increases. The mix is the overlap where both stay active — enough closure for power, enough stretch for ease. The exact pitch of your passaggio depends on your voice type. Informational diagram — to be source-verified before ship.',
        svg: `<svg viewBox="0 0 720 300" role="img" aria-label="Chart of TA and CT muscle activity across pitch, with the mix as the overlap zone" font-family="Inter,sans-serif">
          <polygon points="60,250 60,72 660,214 660,250" fill="#1C6B85" fill-opacity="0.26"/>
          <polygon points="60,250 60,214 660,72 660,250" fill="#1C6B85" fill-opacity="0.5"/>
          <rect x="300" y="60" width="120" height="190" fill="#C05A24" fill-opacity="0.12"/>
          <line x1="360" y1="54" x2="360" y2="250" stroke="#C05A24" stroke-width="1.5" stroke-dasharray="6 5"/>
          <line x1="60" y1="250" x2="670" y2="250" stroke="#D6CDB8" stroke-width="1"/>
          <text x="78" y="112" font-size="13" fill="#1E1B17" font-weight="700">Chest</text>
          <text x="78" y="130" font-size="11" fill="#8B8272">TA dominant · thick, heavy folds</text>
          <text x="642" y="112" font-size="13" fill="#1E1B17" font-weight="700" text-anchor="end">Head</text>
          <text x="642" y="130" font-size="11" fill="#8B8272" text-anchor="end">CT dominant · long, thin folds</text>
          <text x="360" y="44" font-size="12" fill="#C05A24" font-weight="700" text-anchor="middle">MIX · both active</text>
          <text x="360" y="270" font-size="11" fill="#C05A24" text-anchor="middle">passaggio</text>
          <text x="60" y="290" font-size="11" fill="#8B8272">lower pitch</text>
          <text x="660" y="290" font-size="11" fill="#8B8272" text-anchor="end">higher pitch →</text>
        </svg>`
      },
      exercises: [
        {
          id: 'ex-4-4-a',
          name: '1-3-5-3-1 on "mum" / "no"',
          durationMins: 5,
          difficulty: 'Moderate',
          ref: 'C3',
          pattern: [0, 4, 7, 4, 0],
          steps: [
            'Set a comfortable low-middle start pitch on the drone and a moderate metronome (around 72 bpm).',
            'On a bright, forward "mum", sing 1-3-5-3-1 starting in easy chest.',
            'Hold the volume level for the whole scale — no crescendo upward. Listen for even <em>brightness</em>, not growing loudness.',
            'Narrow toward "muh" through the break; keep it connected, not flipped.',
            'Up a semitone each pass while it stays easy — aim for 5–8 keys, then come back down.'
          ]
        },
        {
          id: 'ex-4-4-b',
          name: 'Octave "wee" / "woo"',
          durationMins: 4,
          difficulty: 'Moderate',
          ref: 'G3',
          pattern: [0, 12, 0],
          steps: [
            'Leap an octave on "wee", then "woo".',
            'Keep the top note connected and bright — not a breathy falsetto flip.',
            'Listen for the two notes sounding like one instrument an octave apart.',
            'Repeat rising by semitone; 4–6 keys.'
          ]
        },
        {
          id: 'ex-4-4-c',
          name: 'Descending 5-4-3-2-1, mix to chest',
          durationMins: 3,
          difficulty: 'Moderate',
          ref: 'A3',
          pattern: [7, 5, 4, 2, 0],
          steps: [
            'Start in the mix on "5" and sing down to "1" on "no".',
            'Carry the lighter mix coordination downward — do not dump into heavy chest at the bottom.',
            'Keep the weight even all the way down. Listen for a bottom note that is strong but not thick.'
          ]
        }
      ],
      video: {
        id: 'vid-nyvc-40',
        coach: 'New York Vocal Coaching',
        title: 'NYVC Ep. 40 — The Mix Voice',
        youtubeId: 'CYEsGuldIQY',
        displayMode: 'embed',
        available: true,
        lastChecked: '2026-07-25'
      }
    },

    /* ---------------------------------------------------------------- 4.5 */
    {
      id: 'smoothing',
      num: '4.5',
      title: 'Smoothing transitions',
      level: 'Refinement',
      logEnabled: true,
      desc: 'One connected instrument, top to bottom.',
      explain: 'Once you can find chest, head and mix, the aim is to move between them with no audible seam — a single connected instrument from bottom to top. This is the refinement stage of registration: not a new sound, but the disappearance of the joins between the ones you already have. The listener should never hear a gear-change.',
      how: [
        'Seamlessness comes from <em>consistency</em> across three variables as you cross the range: airflow (steady, no surge), vowel shape (kept tall and constant), and resonance/weight (changing gradually, never in a step). Any sudden change in one of those is exactly what the ear labels a "break".',
        'Physiologically you are asking the TA-to-CT handover (from 4.3) to happen so gradually that no single note is where the switch "occurs". You already trained the transition on lip trills; here you transfer that smoothness onto real vowels and then onto words.',
        'The most efficient tool is the octave slide: it forces you through the whole transition in one gesture, so any unevenness is immediately obvious and immediately trainable. Slow is the operative word — speed hides seams; slow exposes and smooths them.'
      ],
      feel: 'An even thread of tone; the vowel stays tall and connected; no lurch in volume or weight through the middle. It should feel like one continuous surface, not two rooms with a door between them.',
      cues: [
        'Slide octaves on "wee"/"woo" and keep the vowel identical top and bottom',
        'Even the air — no surge or drop through the middle',
        'Let weight change gradually; never dump or grab at one note',
        'Isolate and rehearse the exact seam note until it stops announcing itself'
      ],
      faults: [
        'An audible flip at the same note each time — an under-practised passaggio (revisit 4.3)',
        'The vowel spreading wide up top, which breaks the resonance',
        'A volume surge through the middle of the range'
      ],
      fix: 'Slow the slide right down; drill the seam note in isolation with a messa di voce; return to lip trills whenever the coordination slips, to reset. If one vowel breaks but another does not, practise the smooth vowel and morph toward the difficult one.',
      produce: [
        '<strong>Pick one vowel.</strong> Start on "wee" or "woo" — narrow vowels blend most easily. You will generalise to others later.',
        '<strong>Slide, do not step.</strong> Glide slowly up an octave and back on that single vowel, as one unbroken gesture. No discrete notes, no gear-change.',
        '<strong>Keep the vowel fixed.</strong> The mouth shape and vowel colour should be identical at the bottom and the top — resist spreading wide as you rise.',
        '<strong>Hunt the seam.</strong> Record a slide and listen back for the exact point of unevenness. Take that note and do a soft-loud-soft swell on it, holding one coordination.',
        '<strong>Transfer outward.</strong> Once "wee/woo" is seamless, morph mid-slide toward "ah"/"oh", then sing a short phrase across the break keeping the same evenness.'
      ],
      check: [
        'An octave slide up and down sounds like one line, with no findable join.',
        'The same passage on different vowels is equally smooth.',
        'Loudness and tone-colour stay even across the middle of your range.',
        'On a recording you cannot point to the note where chest "becomes" head.',
        'You can sing a real phrase across the break without a listener noticing a transition.'
      ],
      troubleshoot: [
        '<strong>Same note always flips</strong> → the passaggio itself needs work. Go back to 4.3 and trill across that note, then return here.',
        '<strong>Smooth going up, breaks coming down</strong> → you are dropping weight too suddenly. Descend even more slowly, keeping a little head coordination low.',
        '<strong>Tone thins or spreads at the top</strong> → vowel is widening. Keep it tall and narrow; think "oo" to re-focus.',
        '<strong>Smooth on "wee" but not "ah"</strong> → open vowels are harder. Blend "wee → ah" gradually so the smoothness carries over.'
      ],
      myths: [
        '"A smooth voice means no registers." — The registers still exist; you have simply trained the transitions to be inaudible.',
        '"You smooth the break by singing louder through it." — Louder usually worsens seams. Slow, quiet, even slides are what dissolve them.'
      ],
      diagram: {
        id: 'dia-4-5',
        title: 'Blended versus broken line',
        type: 'process',
        verified: false,
        caption: 'Above: two register segments with a discontinuity — the audible break. Below: the same range trained so weight, air and vowel change gradually, giving one connected line. Smoothing does not remove the registers, it hides the join. Informational diagram — to be source-verified before ship.',
        svg: `<svg viewBox="0 0 720 230" role="img" aria-label="Comparison of an un-blended line with a break versus a blended connected line" font-family="Inter,sans-serif">
          <text x="60" y="30" font-size="12" fill="#8B8272">Un-blended — the ear hears a gear-change</text>
          <polyline points="60,72 170,62 290,54" fill="none" stroke="#C05A24" stroke-width="3"/>
          <polyline points="300,96 420,86 540,78 650,72" fill="none" stroke="#C05A24" stroke-width="3"/>
          <line x1="295" y1="54" x2="295" y2="96" stroke="#C05A24" stroke-width="1" stroke-dasharray="4 4"/>
          <text x="305" y="120" font-size="11" fill="#C05A24">flip / break</text>
          <text x="60" y="168" font-size="12" fill="#8B8272">Blended — one connected line, bottom to top</text>
          <path d="M60 210 C 250 168, 460 150, 660 140" fill="none" stroke="#1C6B85" stroke-width="3"/>
        </svg>`
      },
      exercises: [
        {
          id: 'ex-4-5-a',
          name: 'Octave slides on "wee" / "woo"',
          durationMins: 5,
          difficulty: 'Moderate–hard',
          ref: 'F3',
          pattern: { type: 'glide', from: 0, to: 12, andBack: true },
          steps: [
            'Slide slowly up and down an octave, keeping one vowel shape.',
            'Aim for a single unbroken line — no gear-change. Slow exposes seams; speed hides them.',
            'Record one and listen back for the seam (log it in the tools rail).'
          ]
        },
        {
          id: 'ex-4-5-b',
          name: 'Messa di voce on the seam note',
          durationMins: 3,
          difficulty: 'Hard',
          ref: 'E4',
          pattern: [0],
          steps: [
            'On your exact break note, swell soft → loud → soft on one breath.',
            'Hold the mix coordination steady the whole way — do not let it flip at the loud point.',
            'Keep the pitch dead centre against the drone.'
          ]
        }
      ],
      video: {
        id: 'vid-nyvc-115',
        coach: 'New York Vocal Coaching',
        title: 'NYVC Ep. 115 — Find Your Mix Voice (Part 2)',
        youtubeId: 'RVYvo44kMms',
        displayMode: 'embed',
        available: true,
        lastChecked: '2026-07-25'
      }
    }
  ]
}
