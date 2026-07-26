/* Vocali — Area 3: Onset & Phonation.
   Written to the content standard. Reference pitches suit a TENOR/BARITONE. */

export const onset = {
  id: 'onset',
  n: '03',
  title: 'Onset & Phonation',
  group: 'Foundation',
  order: 3,
  lede: 'How a note begins, and how cleanly the folds meet to sustain it. Small, unglamorous, and responsible for a surprising amount of tone quality and vocal stamina.',
  intro: 'Every note has a beginning, and the way the folds come together at that instant sets the character of everything that follows. Start with too much air and the note is breathy and wastes breath; slam them together and you get a hard, clicking attack that is tiring and, repeated often enough, harmful. Between those sits the <strong>balanced onset</strong> — the folds arriving together at the same moment as the air. This area teaches you to hear the difference, produce the balanced version reliably, and use semi-occluded exercises to build the closure that makes it possible. It pairs directly with Area 2: onset is where breath management meets the vocal folds.',

  videos: [
    {
      id: 'vid-o-area-strobo',
      role: 'mechanism',
      coach: 'Stroboscopy / voice science',
      title: 'Vocal Folds in Action! Larynx Stroboscope Demo',
      youtubeId: 'vffHy6r7FlA',
      displayMode: 'embed',
      available: true,
      lastChecked: '2026-07-25',
      topic: 'Orientation: the folds coming together and parting — exactly what an onset is.'
    },
    {
      id: 'vid-o-area-mucosa',
      role: 'mechanism',
      coach: 'Anatomy animation',
      title: 'Mucosa of the Larynx and Vocal Cords (3D Anatomy)',
      youtubeId: 'fBHr1RjqLHA',
      displayMode: 'embed',
      available: true,
      lastChecked: '2026-07-25',
      topic: 'The soft tissue layer that ripples during vibration — and that a hard onset repeatedly slams together.'
    }
  ],

  diagram: {
    id: 'dia-o-area',
    title: 'The three onsets',
    type: 'process',
    verified: false,
    caption: 'Breathy: air starts before the folds close, so the note begins with escaping air. Hard (glottal): the folds close first and pressure builds behind them until they blow apart with a click. Balanced: air and closure arrive together — the aim. Informational diagram — to be source-verified before ship.',
    svg: `<svg viewBox="0 0 720 240" role="img" aria-label="Breathy, balanced and hard onsets compared over time" font-family="Inter,sans-serif">
      <text x="120" y="28" text-anchor="middle" font-size="12" font-weight="700" fill="#C05A24">Breathy</text>
      <text x="360" y="28" text-anchor="middle" font-size="12" font-weight="700" fill="#1C6B85">Balanced</text>
      <text x="600" y="28" text-anchor="middle" font-size="12" font-weight="700" fill="#C05A24">Hard / glottal</text>

      <text x="30" y="76" font-size="10.5" fill="#8B8272">air</text>
      <text x="30" y="126" font-size="10.5" fill="#8B8272">closure</text>

      <path d="M55 70 L185 70" stroke="#C05A24" stroke-width="6" stroke-linecap="round"/>
      <path d="M105 120 L185 120" stroke="#1C6B85" stroke-width="6" stroke-linecap="round"/>
      <text x="120" y="160" text-anchor="middle" font-size="10.5" fill="#8B8272">air first — "h" before the note</text>

      <path d="M295 70 L425 70" stroke="#C05A24" stroke-width="6" stroke-linecap="round"/>
      <path d="M295 120 L425 120" stroke="#1C6B85" stroke-width="6" stroke-linecap="round"/>
      <line x1="295" y1="58" x2="295" y2="132" stroke="#1C6B85" stroke-width="1.5" stroke-dasharray="4 4"/>
      <text x="360" y="160" text-anchor="middle" font-size="10.5" fill="#1C6B85">together — clean start</text>

      <path d="M585 70 L665 70" stroke="#C05A24" stroke-width="6" stroke-linecap="round"/>
      <path d="M535 120 L665 120" stroke="#1C6B85" stroke-width="6" stroke-linecap="round"/>
      <text x="600" y="160" text-anchor="middle" font-size="10.5" fill="#8B8272">closure first — pressure, then a click</text>

      <text x="360" y="205" text-anchor="middle" font-size="11" fill="#8B8272">time →</text>
      <text x="360" y="226" text-anchor="middle" font-size="10.5" fill="#8B8272">Both extremes are usable as colours; neither should be your default.</text>
    </svg>`
  },

  sections: [
    /* ---------------------------------------------------------------- 3.1 */
    {
      id: 'onset-types',
      num: '3.1',
      title: 'Onset types',
      level: 'Foundational',
      logEnabled: true,
      desc: 'Breathy, balanced and hard — hearing and feeling the difference.',
      explain: 'There are three ways a note can begin, defined by whether the air or the fold closure arrives first. Learning to produce all three deliberately is what gives you control over the fourth thing: which one you use by default. Most singers have a default they have never chosen.',
      how: [
        '<strong>Breathy (aspirate) onset.</strong> Air begins flowing before the folds come together, so the note starts with an audible "h". It is gentle on the folds and useful as a soft, intimate colour, but it wastes breath and gives a weak, unfocused start.',
        '<strong>Hard (glottal) onset.</strong> The folds close first and subglottic pressure builds behind them until they are forced apart — the small click at the start of an emphatic "uh-oh". It gives a decisive, punchy start, but because the folds are blown apart from a closed position the collision force is high. Occasionally it is a useful accent; habitually it is tiring and, over time, a risk factor for tissue damage.',
        '<strong>Balanced onset.</strong> Airflow and closure arrive at the same instant, so the note begins cleanly with neither breath nor click. This is the efficient default: least effort, least collision, most immediate tone.',
        'Both extremes have legitimate stylistic uses — a breathy onset for an intimate jazz line, a glottal one for a hard blues accent. The problem is never using one deliberately; it is only ever having one as an unchosen habit.'
      ],
      feel: 'Breathy: air moving before sound, a slight emptiness. Hard: a small catch or click in the throat, and a build of pressure before release. Balanced: the note is simply there, with nothing preceding it — no air, no click, no effort.',
      cues: [
        'Sing "ah" three ways in a row to feel the contrast directly',
        'Breathy = "hah", hard = "\'ah" (as in uh-oh), balanced = a clean "ah"',
        'Listen for what comes <em>before</em> the tone, not the tone itself',
        'Aim for balanced as the default; keep the others as deliberate colours'
      ],
      faults: [
        'A breathy default, which wastes air and gives no core to the tone',
        'A glottal default, which is tiring and raises collision force on every note',
        'Being unable to hear the difference — the commonest starting point',
        'Trying to fix a breathy onset by pushing harder, which produces a glottal one instead'
      ],
      fix: 'Record yourself singing the same phrase with each onset. Hearing them back-to-back on playback makes the distinction obvious far faster than trying to judge it from inside your own head.',
      produce: [
        '<strong>Make a breathy onset.</strong> On a comfortable pitch, sing "hah" and exaggerate the "h" — let a clear puff of air escape before the tone arrives.',
        '<strong>Make a hard onset.</strong> Say "uh-oh" with emphasis and notice the small catch before each syllable. Now sing "ah" starting with that same catch.',
        '<strong>Find the balanced one.</strong> Aim exactly between the two: no audible air, no click. It often helps to imagine the note is already sounding quietly and you simply join it.',
        '<strong>Cycle deliberately.</strong> Sing breathy — hard — balanced on the same pitch, three times through. The goal is conscious control of all three.',
        '<strong>Record and check.</strong> Play it back. Most people are surprised by which one their "normal" actually is.'
      ],
      check: [
        'You can produce all three onsets on demand and name which is which.',
        'You can hear the difference on a recording of yourself.',
        'You know which one is your unconscious default.',
        'The balanced onset feels like the easiest of the three.',
        'You can start a note without any preceding air or click.'
      ],
      troubleshoot: [
        '<strong>Cannot hear any difference</strong> → exaggerate both extremes much further, and record. Subtlety comes later.',
        '<strong>Balanced attempt keeps coming out breathy</strong> → add a light "g" to establish closure, then remove it gradually (see 3.3).',
        '<strong>Balanced attempt keeps clicking</strong> → you are closing before the air moves. Think of the air starting a fraction earlier, or approach on a gentle "h" and reduce it.',
        '<strong>Fine on single notes, breathy in songs</strong> → the habit lives in real singing. Practise onsets on the first word of actual phrases.'
      ],
      myths: [
        '"A glottal onset is always damaging." — Occasional use is a normal expressive tool. It is the habitual, forceful version repeated hundreds of times that carries risk.',
        '"Breathy singing is more relaxed and therefore healthier." — It is not especially harmful, but it wastes breath, reduces stamina and gives the tone no core.',
        '"Onset is a detail you can worry about later." — It sets the efficiency of every note you sing, so it pays back earlier than almost anything else.'
      ],
      exercises: [
        {
          id: 'ex-3-1-a',
          name: 'Three onsets on one pitch',
          durationMins: 5,
          difficulty: 'Easy',
          ref: 'C3',
          pattern: [0, 0, 0],
          steps: [
            'On a comfortable pitch, sing "ah" with a deliberately breathy start — a clear "h" first.',
            'Sing it again with a hard start — the small catch from "uh-oh".',
            'Sing it a third time aiming exactly between: no air, no click.',
            'Cycle through all three several times. Listen for what happens <em>before</em> the tone.'
          ]
        },
        {
          id: 'ex-3-1-b',
          name: 'Record and identify',
          durationMins: 4,
          difficulty: 'Easy',
          ref: 'C3',
          pattern: [0],
          steps: [
            'Record yourself singing a familiar phrase normally, without thinking about onset.',
            'Play it back and judge which onset you used on the first word.',
            'Record it again deliberately using each of the three.',
            'Note in the practice log which is your default — that is the habit to work with.'
          ]
        }
      ],
      videos: [
        {
          id: 'vid-3-1-nyvc',
          role: 'technique',
          coach: 'New York Vocal Coaching',
          title: 'NYVC Ep. 13 — Healthy Belting',
          youtubeId: '21P-ci_Ie9Q',
          displayMode: 'embed',
          available: true,
          lastChecked: '2026-07-25',
          topic: 'Clean, connected starts under load — onset quality is what makes strong singing sustainable.'
        },
        {
          id: 'vid-3-1-mech',
          role: 'mechanism',
          coach: 'Stroboscopy / voice science',
          title: 'Vibration of the Vocal Folds',
          youtubeId: 'kfkFTw3sBXQ',
          displayMode: 'embed',
          available: true,
          lastChecked: '2026-07-25',
          topic: 'Shows the collision at the heart of every onset — and why a hard one repeated is costly.'
        }
      ]
    },

    /* ---------------------------------------------------------------- 3.2 */
    {
      id: 'connected-onset',
      num: '3.2',
      title: 'Healthy connected onset',
      level: 'Foundational',
      logEnabled: true,
      desc: 'Making the balanced onset your reliable default.',
      explain: 'Knowing what a balanced onset is and producing one every time are different skills. This section builds it into a habit that survives contact with real singing — where consonants, high notes and emotion all conspire to pull you back towards your old default.',
      how: [
        'A balanced onset requires the folds to adduct (come together) at the same moment airflow begins. Neither leads. Physiologically this means the muscles that close the folds and the breath release must be coordinated in time — which is a timing skill, not a strength one.',
        'The reason it matters beyond aesthetics is <em>impact stress</em>. Every onset involves the folds colliding. A balanced onset starts them vibrating with the lowest collision force for a given loudness, which is why singers with clean onsets last longer through a rehearsal.',
        'Certain consonants help. Voiced continuants like "m", "n", "l", "v" and "z" begin the tone gently and inevitably balanced, because the voice is already sounding before the vowel arrives. This is why "mum" and "no" appear so often in exercises — they build the coordination for you.',
        'The difficulty is transfer. Onsets are easy to control in isolated exercises and easy to lose in a real phrase, particularly on a word starting with a vowel or on an emotionally charged line. Practise the transfer explicitly rather than hoping it happens.'
      ],
      feel: 'The note simply appears. There is no preparation, no catch, no puff — it is as though the sound was already there and you stepped into it. Effortless is the correct description, not "controlled".',
      cues: [
        'Start on "m" or "n" and let the vowel follow — the onset takes care of itself',
        'Imagine the note is already sounding quietly and you join it',
        'Keep the throat completely uninvolved in the start',
        'On vowel-initial words, think a silent "m" just before'
      ],
      faults: [
        'Preparing the note by closing the throat first, giving a click',
        'Starting with a puff of air out of nervousness or habit',
        'Losing the clean onset as soon as words are involved',
        'Attacking high or loud notes glottally because they feel like they need force'
      ],
      fix: 'Approach through a voiced consonant. Sing "muh–ah", then reduce the "m" until it is barely there, then remove it entirely — the balanced coordination usually survives. If it does not, go back a step and reduce more gradually.',
      produce: [
        '<strong>Begin with a hum.</strong> Hum a comfortable note on "m" until it is steady and easy.',
        '<strong>Open to the vowel.</strong> Without stopping, open the hum into "ah". Notice the tone is already balanced — the "m" did the work.',
        '<strong>Shorten the consonant.</strong> Repeat with a shorter and shorter "m" until it is a fraction of a second.',
        '<strong>Remove it.</strong> Now sing "ah" alone, aiming for exactly the same start. The memory of the hum usually carries the coordination across.',
        '<strong>Take it into words.</strong> Choose a phrase beginning with a vowel ("Every time…", "All of me…"). Sing it with a silent "m" thought just before, then without.',
        '<strong>Test under pressure.</strong> Try it loud, then high, then emotionally. Those are the three conditions that break the habit.'
      ],
      check: [
        'You can start a note on a vowel with no air and no click, on demand.',
        'The onset stays clean when you sing loudly.',
        'The onset stays clean on the first word of an actual song phrase.',
        'You can feel that a clean onset takes less effort than either alternative.',
        'You are less tired at the end of a session than you used to be.'
      ],
      troubleshoot: [
        '<strong>Clean in exercises, breathy in songs</strong> → practise the exact first words of your repertoire, not just scales.',
        '<strong>Clicks on loud or high notes</strong> → you are bracing. Approach those notes quieter, then add volume once the onset is clean.',
        '<strong>Cannot remove the "m" without losing it</strong> → reduce it more gradually; there is no hurry.',
        '<strong>Onset fine, but the tone dies immediately after</strong> → that is support, not onset. See 2.2.'
      ],
      myths: [
        '"A strong note needs a strong start." — A decisive sound comes from good closure and resonance, not from slamming the folds together.',
        '"Onset only matters for classical singing." — It determines efficiency and stamina in any style; blues and jazz simply use the deliberate variants more often.'
      ],
      mechanismDiagram: {
        id: 'dia-3-2b',
        title: 'Collision force across a session',
        type: 'process',
        verified: false,
        caption: 'Every onset involves fold collision. A habitually hard onset (orange) starts each note with high impact, and the accumulated load across hundreds of notes is what produces end-of-session hoarseness. A balanced onset (teal) achieves the same loudness with markedly lower impact per note. Informational diagram — to be source-verified before ship.',
        svg: `<svg viewBox="0 0 720 200" role="img" aria-label="Accumulated vocal fold impact over a session for hard versus balanced onsets" font-family="Inter,sans-serif">
          <line x1="70" y1="160" x2="670" y2="160" stroke="#D6CDB8" stroke-width="1"/>
          <line x1="70" y1="30" x2="70" y2="160" stroke="#D6CDB8" stroke-width="1"/>
          <text x="62" y="38" text-anchor="end" font-size="10.5" fill="#8B8272">accumulated impact</text>
          <text x="660" y="182" text-anchor="end" font-size="10.5" fill="#8B8272">notes sung across a session →</text>
          <path d="M70 158 L 640 45" fill="none" stroke="#C05A24" stroke-width="3"/>
          <text x="470" y="72" font-size="11" fill="#C05A24">habitual hard onset</text>
          <path d="M70 158 L 640 122" fill="none" stroke="#1C6B85" stroke-width="3"/>
          <text x="470" y="140" font-size="11" fill="#1C6B85">balanced onset</text>
        </svg>`
      },
      exercises: [
        {
          id: 'ex-3-2-a',
          name: 'Hum-to-vowel onset',
          durationMins: 5,
          difficulty: 'Easy',
          ref: 'C3',
          pattern: [0, 0, 0],
          steps: [
            'Hum "m" on a comfortable pitch until steady.',
            'Open it into "ah" without stopping. Note how clean the start of the vowel is.',
            'Repeat with progressively shorter hums, then with none at all.',
            'Listen for the vowel-alone version keeping the same clean, effortless start.'
          ]
        },
        {
          id: 'ex-3-2-b',
          name: '"Uh-oh" to clean sustain',
          durationMins: 4,
          difficulty: 'Easy–moderate',
          ref: 'C3',
          pattern: [0, 2, 0],
          steps: [
            'Say "uh-oh" naturally and feel the gentle catch — this is closure, deliberately felt.',
            'Now sing "uh-oh" on two notes, keeping the closure but removing all force.',
            'Sustain the second syllable, aiming for clean not pressed.',
            'Listen for a start with a core to it but no click.'
          ]
        },
        {
          id: 'ex-3-2-c',
          name: 'Transfer to a real phrase',
          durationMins: 4,
          difficulty: 'Moderate',
          ref: 'D3',
          pattern: [0, 4, 2, 0],
          steps: [
            'Choose a song phrase that begins with a vowel.',
            'Sing it thinking a silent "m" immediately before the first word.',
            'Repeat without the silent "m", keeping the same start.',
            'Then sing it louder, and higher, checking the onset survives both.'
          ]
        }
      ],
      videos: [
        {
          id: 'vid-3-2-nyvc',
          role: 'technique',
          coach: 'New York Vocal Coaching',
          title: 'NYVC Ep. 13 — Healthy Belting',
          youtubeId: '21P-ci_Ie9Q',
          displayMode: 'embed',
          available: true,
          lastChecked: '2026-07-25',
          topic: 'Connected onsets are the foundation of belting without damage.'
        },
        {
          id: 'vid-3-2-mech',
          role: 'mechanism',
          coach: 'Stroboscopy / voice science',
          title: 'Video Stroboscopy of the Vocal Cords',
          youtubeId: 'mJedwz_r2Pc',
          displayMode: 'embed',
          available: true,
          lastChecked: '2026-07-25',
          topic: 'Watch adduction happening — the coordination a balanced onset is timing precisely.'
        }
      ]
    },

    /* ---------------------------------------------------------------- 3.3 */
    {
      id: 'closure',
      num: '3.3',
      title: 'Reducing breathiness (cord closure)',
      level: 'Foundational',
      logEnabled: true,
      desc: 'Building the closure that gives tone its core.',
      explain: 'A breathy tone means the folds are not fully meeting during vibration, so air escapes continuously through the gap. That costs breath, reduces carrying power, and leaves the voice without a centre. Closure is trainable, and the fastest route is through consonants that encourage the folds together without you having to force them.',
      how: [
        'During healthy vibration the folds meet completely on each cycle, briefly stopping the airflow. If they do not fully approximate, a stream of unconverted air passes through alongside the tone — heard as breathiness and measurable as wasted breath.',
        'Some breathiness is anatomical: many voices have a slight posterior gap (a "chink") between the arytenoid cartilages, which is common and not a fault. Most breathiness, though, is habitual — a learned coordination, often from imitating a breathy singing style or from long-term under-use.',
        '<strong>Voiced plosives</strong> — "g", "b", "d" — briefly build pressure behind a closure and then release it into the vowel, which encourages the folds to meet firmly. "Gee" and "gug" are the classic tools. <strong>Nasals</strong> ("m", "n", "ng") work differently, keeping gentle continuous closure.',
        'The correction is a balance, not a maximum. Overshoot and you arrive at a pressed tone, which is the opposite error and no better. The target from 2.3 still applies: most sound for least effort.'
      ],
      feel: 'A tone with a core to it — focused, present, and continuing to sound as though it could carry across a room without being loud. There should be no sensation of squeezing at the throat; the extra firmness happens at the folds, below awareness.',
      cues: [
        'Start notes on "g" or "b" to bring the folds together',
        '"Gee" on a five-note scale is the standard closure builder',
        'Aim for clear and focused, not loud',
        'Stop short of pressed — clarity, not force'
      ],
      faults: [
        'Trying to fix breathiness by pushing more air, which makes it worse',
        'Overshooting into a pressed, squeezed tone',
        'Tensing the neck to create firmness the folds should supply',
        'Assuming a breathy voice is simply "your sound" and cannot change'
      ],
      fix: 'If "gee" produces tightness rather than clarity, halve the volume — closure work should be done quietly. If breathiness persists on high notes only, that is usually a head-voice closure issue; see 4.2.',
      produce: [
        '<strong>Start with "gee".</strong> On a comfortable pitch, sing "gee" — the "g" builds a moment of closure that the vowel inherits.',
        '<strong>Take it up a scale.</strong> Sing "gee" on 1-2-3-4-5-4-3-2-1, quietly. Listen for a tone with a clear centre rather than a haze of air.',
        '<strong>Try "gug".</strong> The repeated stops keep re-establishing closure through the scale — useful if "gee" alone is not enough.',
        '<strong>Remove the consonant.</strong> Sing the same scale on "ah", trying to keep the clarity the "g" gave you.',
        '<strong>Check against the wasteful version.</strong> Deliberately sing it breathy, then clear, then breathy. The difference in how long a breath lasts is usually striking.',
        '<strong>Stay quiet throughout.</strong> If the tone becomes tight, you have gone past balanced into pressed.'
      ],
      check: [
        'A sustained note has a clear centre with no continuous air escaping.',
        'A single breath lasts noticeably longer than it did with a breathy tone.',
        'The tone carries without being loud.',
        'There is no tightness or squeezing in the throat.',
        'You can move from "gee" to "ah" keeping the same clarity.'
      ],
      troubleshoot: [
        '<strong>Still breathy after "gee" work</strong> → try "gug" and reduce volume further; closure builds quietly, not loudly.',
        '<strong>Tone became tight instead of clear</strong> → overshot into pressed. Back off and revisit 2.3 for the balance point.',
        '<strong>Breathy only at the top</strong> → head-voice closure. Work 4.2 with "ng" onsets.',
        '<strong>Breathy only when quiet</strong> → see 2.4, "quiet but closed" — closure and volume are being released together.'
      ],
      myths: [
        '"Breathy just means you are relaxed." — It means air is escaping unconverted. Relaxation is good; leakage is not the same thing.',
        '"To reduce breathiness, push more air through." — More air through an incomplete closure produces more breathiness, not less.',
        '"Some voices are naturally breathy and cannot change." — A small posterior gap is common, but the habitual component almost always responds to training.'
      ],
      diagram: {
        id: 'dia-3-3',
        title: 'Complete versus incomplete closure',
        type: 'anatomy',
        verified: false,
        caption: 'Left: the folds meet fully on each cycle, so all the air is converted into tone — clear, efficient, carrying. Right: a persistent gap lets air escape continuously alongside the tone, producing breathiness and using far more breath for the same phrase. Informational diagram — to be source-verified before ship.',
        svg: `<svg viewBox="0 0 720 210" role="img" aria-label="Complete fold closure compared with a persistent gap" font-family="Inter,sans-serif">
          <text x="180" y="28" text-anchor="middle" font-size="12" font-weight="700" fill="#1C6B85">Complete closure</text>
          <path d="M120 55 C 172 100, 172 120, 120 165" fill="none" stroke="#1C6B85" stroke-width="7" stroke-linecap="round"/>
          <path d="M240 55 C 188 100, 188 120, 240 165" fill="none" stroke="#1C6B85" stroke-width="7" stroke-linecap="round"/>
          <line x1="180" y1="82" x2="180" y2="138" stroke="#1C6B85" stroke-width="3"/>
          <text x="180" y="192" text-anchor="middle" font-size="10.5" fill="#8B8272">clear, efficient, carries</text>

          <text x="540" y="28" text-anchor="middle" font-size="12" font-weight="700" fill="#C05A24">Incomplete — gap remains</text>
          <path d="M480 55 C 528 100, 528 120, 480 165" fill="none" stroke="#8FBAC8" stroke-width="7" stroke-linecap="round"/>
          <path d="M600 55 C 552 100, 552 120, 600 165" fill="none" stroke="#8FBAC8" stroke-width="7" stroke-linecap="round"/>
          <ellipse cx="540" cy="110" rx="9" ry="30" fill="#C05A24" fill-opacity="0.35"/>
          <text x="540" y="192" text-anchor="middle" font-size="10.5" fill="#8B8272">air escapes — breathy, wasteful</text>
        </svg>`
      },
      exercises: [
        {
          id: 'ex-3-3-a',
          name: '"Gee" on a five-note scale',
          durationMins: 5,
          difficulty: 'Easy',
          ref: 'C3',
          pattern: [0, 2, 4, 5, 7, 5, 4, 2, 0],
          steps: [
            'On a comfortable pitch, sing "gee" up and down a five-note scale — quietly.',
            'The "g" establishes closure; let the vowel inherit it.',
            'Move up by semitone for five or six keys while it stays easy.',
            'Listen for a tone with a clear centre, not a haze of air around it.'
          ]
        },
        {
          id: 'ex-3-3-b',
          name: '"Gug" repeated closure',
          durationMins: 4,
          difficulty: 'Easy–moderate',
          ref: 'C3',
          pattern: [0, 4, 7, 4, 0],
          steps: [
            'Sing "gug" on 1-3-5-3-1, one syllable per note.',
            'Each "g" re-establishes closure — useful when a single onset is not enough.',
            'Keep the volume low; closure builds quietly.',
            'Then sing the same pattern on "ah" and try to keep the clarity.'
          ]
        },
        {
          id: 'ex-3-3-c',
          name: 'Breathy–clear comparison',
          durationMins: 3,
          difficulty: 'Easy',
          ref: 'D3',
          pattern: [0, 0],
          steps: [
            'Sustain a note deliberately breathy and time how long the breath lasts.',
            'Sustain the same note clear and focused, and time it again.',
            'Note the difference — usually substantial.',
            'This is the practical case for closure: the same breath goes much further.'
          ]
        }
      ],
      videos: [
        {
          id: 'vid-3-3-nyvc',
          role: 'technique',
          coach: 'New York Vocal Coaching',
          title: 'NYVC Ep. 13 — Healthy Belting',
          youtubeId: '21P-ci_Ie9Q',
          displayMode: 'embed',
          available: true,
          lastChecked: '2026-07-25',
          topic: 'Closure under load, and the "gee"/"gug" family of exercises in practice.'
        },
        {
          id: 'vid-3-3-mech',
          role: 'mechanism',
          coach: 'Stroboscopy / voice science',
          title: 'Stroboscopy: Vocal cords at high and low pitch',
          youtubeId: 'UpOXecWC5Dw',
          displayMode: 'embed',
          available: true,
          lastChecked: '2026-07-25',
          topic: 'Complete and incomplete closure, visible — the difference this section trains.'
        }
      ]
    },

    /* ---------------------------------------------------------------- 3.4 */
    {
      id: 'sovt',
      num: '3.4',
      title: 'Semi-occluded warm-ups (SOVT)',
      level: 'Foundational',
      logEnabled: true,
      desc: 'The most useful tool in the box — lip trills, straws and hums.',
      explain: 'Semi-occluded vocal tract exercises partially narrow the airway at the lips or through a straw. That single change creates back-pressure which rebalances the whole system, letting the folds vibrate efficiently with less collision force. They are the best warm-up, the best reset when something has gone wrong, and the safest way to work when tired.',
      how: [
        'Narrowing the exit raises the air pressure <em>above</em> the folds. Because vibration is driven by the pressure difference across the folds, raising the pressure above them reduces that difference — so the folds are pushed apart less violently and collide with less force while still vibrating fully.',
        'The raised pressure above also interacts helpfully with the folds\' own oscillation, encouraging a more efficient, better-balanced vibration. In practice this means an SOVT exercise nudges you towards the balanced airflow-and-closure point from 2.3 <em>automatically</em>, without you having to manage it.',
        'The effects outlast the exercise. A minute or two of straw work typically leaves open singing easier and better balanced for a while afterwards — which is why it works as a warm-up and as a mid-session reset.',
        'The family includes lip trills, tongue trills, straw phonation (narrower straw, stronger effect), humming on "m" or "n", and "ng". Straws give the strongest and most controllable back-pressure; lip trills are the most portable.'
      ],
      feel: 'A gentle buzzing pressure at the lips or in the straw, and a distinct sense that the sound is being made for you rather than by you. Transitions through your range should feel noticeably smoother than on an open vowel.',
      cues: [
        'Keep the air steady — the trill or buzz should never falter',
        'Work quietly; SOVT is not about volume',
        'Glide through your whole range, including across the passaggio',
        'Use it to start every session, and any time something goes wrong'
      ],
      faults: [
        'Blowing too hard, which turns it into effort rather than balance',
        'Letting the trill stop and start — that means the airflow is uneven',
        'Doing it only as a token warm-up rather than using its reset power',
        'Tense lips or jaw, which stops a lip trill working at all'
      ],
      fix: 'If a lip trill will not run, support the cheeks lightly with two fingers and check the jaw is loose. If it still fails, use a straw instead — it is easier and the effect is stronger anyway.',
      produce: [
        '<strong>Choose your occlusion.</strong> A narrow straw (a coffee stirrer) for the strongest effect, a lip trill for convenience, or "ng" if neither is practical.',
        '<strong>Start on a comfortable note.</strong> Phonate steadily and feel the back-pressure build.',
        '<strong>Glide gently.</strong> Slide up and down through your range, slowly, including straight through your break. Do not change effort at the transition.',
        '<strong>Add patterns.</strong> Five-note scales, 1-3-5-3-1, octave slides — all on the occlusion.',
        '<strong>Open carefully.</strong> Finish by opening from the occlusion into a vowel mid-note, keeping the same ease. That transfer is the point.',
        '<strong>Use it as a reset.</strong> Any time a passage goes wrong, return to thirty seconds of SOVT before trying again.'
      ],
      check: [
        'A lip trill or straw runs evenly for a full phrase without faltering.',
        'You can glide across your break on SOVT with no audible seam.',
        'Open singing feels easier immediately after a minute of SOVT.',
        'You use it as a reset during practice, not just at the start.',
        'You can open from occlusion to vowel and keep the same ease.'
      ],
      troubleshoot: [
        '<strong>Lip trill will not start</strong> → lips or jaw too tense, or too little air. Support the cheeks with two fingers; loosen the jaw.',
        '<strong>Trill stops mid-glide</strong> → airflow dipped, usually at the passaggio. Keep the air constant through the transition.',
        '<strong>No benefit afterwards</strong> → probably working too loudly. SOVT should be quiet and easy.',
        '<strong>Great on the straw, lost on the vowel</strong> → transfer gradually, alternating a bar of each.'
      ],
      myths: [
        '"Lip trills are a beginner\'s warm-up." — They are used by professionals precisely because the physics helps at every level.',
        '"You should do SOVT loudly to get a real workout." — The benefit comes from the pressure balance, which quiet work provides. Loud SOVT just adds load.',
        '"A straw is a gimmick." — Straw phonation is one of the best-supported tools in voice training, used clinically as well as pedagogically.'
      ],
      diagram: {
        id: 'dia-3-4',
        title: 'How back-pressure helps',
        type: 'mechanism',
        verified: false,
        caption: 'Open vowel (left): pressure above the folds is low, so the pressure difference across them is large and each collision is forceful. Semi-occluded (right): narrowing the exit raises the pressure above the folds, shrinking the difference — the folds still vibrate fully but meet more gently, and the coordination self-balances. Informational diagram — to be source-verified before ship.',
        svg: `<svg viewBox="0 0 720 230" role="img" aria-label="Pressure above and below the vocal folds with an open versus semi-occluded tract" font-family="Inter,sans-serif">
          <text x="180" y="28" text-anchor="middle" font-size="12" font-weight="700" fill="#C05A24">Open vowel</text>
          <path d="M120 170 L120 90 Q180 60 240 90 L240 170" fill="none" stroke="#8B8272" stroke-width="2"/>
          <line x1="120" y1="140" x2="240" y2="140" stroke="#1C6B85" stroke-width="4"/>
          <text x="248" y="144" font-size="10" fill="#1C6B85">folds</text>
          <text x="180" y="112" text-anchor="middle" font-size="10.5" fill="#8B8272">low pressure above</text>
          <text x="180" y="164" text-anchor="middle" font-size="10.5" fill="#C05A24">high pressure below</text>
          <text x="180" y="200" text-anchor="middle" font-size="11" fill="#C05A24">large difference · forceful collision</text>

          <text x="540" y="28" text-anchor="middle" font-size="12" font-weight="700" fill="#1C6B85">Straw / lip trill</text>
          <path d="M480 170 L480 90 Q540 78 560 84 L590 84" fill="none" stroke="#8B8272" stroke-width="2"/>
          <path d="M600 170 L600 96 L590 96" fill="none" stroke="#8B8272" stroke-width="2"/>
          <line x1="480" y1="140" x2="600" y2="140" stroke="#1C6B85" stroke-width="4"/>
          <rect x="500" y="100" width="90" height="30" fill="#1C6B85" fill-opacity="0.2"/>
          <text x="540" y="120" text-anchor="middle" font-size="10.5" fill="#1C6B85">raised pressure above</text>
          <text x="540" y="164" text-anchor="middle" font-size="10.5" fill="#8B8272">pressure below</text>
          <text x="540" y="200" text-anchor="middle" font-size="11" fill="#1C6B85">small difference · gentle, efficient</text>
        </svg>`
      },
      exercises: [
        {
          id: 'ex-3-4-a',
          name: 'Lip-trill glides',
          durationMins: 5,
          difficulty: 'Easy',
          ref: 'C3',
          pattern: { type: 'glide', from: 0, to: 14, andBack: true },
          steps: [
            'Start a lip trill on a comfortable low note. If it will not run, support the cheeks with two fingers.',
            'Glide slowly up through your range and back down, keeping the trill perfectly even.',
            'Do not change effort at your break — the trill should sound identical throughout.',
            'Listen for any faltering: that marks where your airflow dips.'
          ]
        },
        {
          id: 'ex-3-4-b',
          name: 'Straw phonation scales',
          durationMins: 5,
          difficulty: 'Easy',
          ref: 'C3',
          pattern: [0, 2, 4, 5, 7, 5, 4, 2, 0],
          steps: [
            'Phonate through a narrow straw on a five-note scale, up and down.',
            'Keep it quiet — you are after balance, not volume.',
            'Move up by semitone for six or seven keys.',
            'Feel the back-pressure doing the balancing work for you.'
          ]
        },
        {
          id: 'ex-3-4-c',
          name: 'Occlusion-to-vowel transfer',
          durationMins: 4,
          difficulty: 'Moderate',
          ref: 'C3',
          pattern: [0, 4, 7, 4, 0],
          steps: [
            'Sing 1-3-5-3-1 on a lip trill or "ng".',
            'Repeat, opening to "ah" at the top note and keeping the same ease.',
            'Then sing the whole pattern on "ah", carrying the SOVT sensation across.',
            'This transfer is what turns a warm-up into technique.'
          ]
        }
      ],
      videos: [
        {
          id: 'vid-3-4-nyvc',
          role: 'technique',
          coach: 'New York Vocal Coaching',
          title: 'NYVC Ep. 101 — The Greatest Vocal Exercise of All Time',
          youtubeId: 'h0SIEY_zNqU',
          displayMode: 'embed',
          available: true,
          lastChecked: '2026-07-25',
          topic: 'The definitive case for SOVT, and how to use it properly.'
        },
        {
          id: 'vid-3-4-drdan',
          role: 'second opinion',
          coach: "Dr Dan's Voice Essentials",
          title: 'Warm Up the Singing Voice',
          youtubeId: 'Bontr0IqN0w',
          displayMode: 'embed',
          available: true,
          lastChecked: '2026-07-25',
          topic: 'A practical warm-up built around semi-occluded work.'
        }
      ]
    }
  ]
}
