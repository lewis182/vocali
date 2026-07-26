/* Vocali — Area 6: Range & Flexibility (technical core).
   Written to the content standard. Reference pitches suit a TENOR/BARITONE. */

export const range = {
  id: 'range',
  n: '06',
  title: 'Range & Flexibility',
  group: 'Technical core',
  order: 6,
  core: true,
  lede: 'Extending what you can reach, and making the voice quick and accurate once you get there. Range is largely a by-product of good coordination — flexibility is what makes it musical.',
  intro: 'Most singers want more range, and most attempts to get it by force make it smaller. Range grows when the coordination underneath it is good: balanced onset (Area 3), an even passaggio and a reliable mix (Area 4), and resonance that supports the top rather than fighting it (Area 5). This area assumes those and adds the specific work — safe, incremental extension, unbroken sirens, agility on scales and arpeggios, and the riffs and runs that make jazz and blues phrasing possible. The governing principle throughout: <strong>ease first, then speed, then range</strong>. Anything gained by pushing is borrowed, and the interest is expensive.',

  videos: [
    {
      id: 'vid-rg-area-strobo',
      role: 'mechanism',
      coach: 'Stroboscopy / voice science',
      title: 'Stroboscopy: Vocal cords at high and low pitch',
      youtubeId: 'UpOXecWC5Dw',
      displayMode: 'embed',
      available: true,
      lastChecked: '2026-07-25',
      topic: 'Orientation: the folds lengthening and thinning for high pitch — what "range" physically means.'
    },
    {
      id: 'vid-rg-area-mri',
      role: 'mechanism',
      coach: 'Voice science',
      title: 'Singing in the MRI with Tyley Ross — Making the Voice Visible',
      youtubeId: 'J3TwTb-T044',
      displayMode: 'embed',
      available: true,
      lastChecked: '2026-07-25',
      topic: 'The tract adjusting as pitch rises — the resonance half of range extension.'
    }
  ],

  diagram: {
    id: 'dia-rg-area',
    title: 'Range as a continuum',
    type: 'map',
    verified: false,
    caption: 'Your usable range is not a fixed box but a continuum with a comfortable middle, workable extremes, and a frontier that moves outward as coordination improves. Extension happens at the edges, a semitone at a time, and only while the note stays easy. Approximate positions for a tenor/baritone. Informational diagram — to be source-verified before ship.',
    svg: `<svg viewBox="0 0 720 210" role="img" aria-label="Range shown as a continuum from comfortable middle to frontier" font-family="Inter,sans-serif">
      <rect x="60" y="80" width="90" height="46" fill="#8B8272" fill-opacity="0.18"/>
      <rect x="150" y="80" width="120" height="46" fill="#1C6B85" fill-opacity="0.3"/>
      <rect x="270" y="80" width="200" height="46" fill="#1C6B85" fill-opacity="0.55"/>
      <rect x="470" y="80" width="120" height="46" fill="#1C6B85" fill-opacity="0.3"/>
      <rect x="590" y="80" width="80" height="46" fill="#8B8272" fill-opacity="0.18"/>

      <text x="105" y="70" text-anchor="middle" font-size="10.5" fill="#8B8272">frontier</text>
      <text x="210" y="70" text-anchor="middle" font-size="10.5" fill="#8B8272">workable low</text>
      <text x="370" y="70" text-anchor="middle" font-size="11.5" font-weight="700" fill="#1C6B85">comfortable middle</text>
      <text x="530" y="70" text-anchor="middle" font-size="10.5" fill="#8B8272">workable high</text>
      <text x="630" y="70" text-anchor="middle" font-size="10.5" fill="#8B8272">frontier</text>

      <text x="105" y="148" text-anchor="middle" font-size="10" fill="#8B8272">F2–A2</text>
      <text x="210" y="148" text-anchor="middle" font-size="10" fill="#8B8272">A2–C3</text>
      <text x="370" y="148" text-anchor="middle" font-size="10" fill="#8B8272">C3–E4</text>
      <text x="530" y="148" text-anchor="middle" font-size="10" fill="#8B8272">E4–A4</text>
      <text x="630" y="148" text-anchor="middle" font-size="10" fill="#8B8272">A4+</text>

      <path d="M600 168 L668 168" stroke="#C05A24" stroke-width="2" marker-end="url(#a6)"/>
      <path d="M130 168 L62 168" stroke="#C05A24" stroke-width="2" marker-end="url(#a6)"/>
      <text x="360" y="176" text-anchor="middle" font-size="10.5" fill="#C05A24">extension happens here — one semitone at a time, only while easy</text>
      <defs><marker id="a6" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0 0 L8 4 L0 8 z" fill="#C05A24"/></marker></defs>
    </svg>`
  },

  sections: [
    /* ---------------------------------------------------------------- 6.1 */
    {
      id: 'extending',
      num: '6.1',
      title: 'Extending range safely',
      level: 'Core',
      logEnabled: true,
      desc: 'Adding notes at the edges without borrowing against your voice.',
      explain: 'Range extends when coordination improves, not when effort increases. The method is unglamorous: work at the edge of what is comfortable, add one semitone at a time, and stop the moment ease disappears. Done this way the gains are permanent; done by forcing, they vanish by the next day and cost you tissue health.',
      how: [
        'The upper limit of a voice is set mainly by how far the folds can stretch and thin (the CT function from 4.2), and by whether the resonance above supports the note. Both improve with training, which is why range grows — but neither improves by being forced.',
        'The lower limit is set by how thick and slack the folds can become while still closing consistently. Low notes require more relaxation, not more push; forcing downward produces a rattly, unfocused tone and achieves nothing.',
        'The reliable training principle is <em>progressive overload at the boundary of ease</em>. You spend most of your time in the comfortable middle, touch the frontier briefly and lightly, then retreat. The frontier moves outward over weeks. Trying to spend a whole session at your limit produces swelling, which reduces your range — the exact opposite of the aim.',
        'A practical note: range measured on a good day after a proper warm-up is your real range. Range on a cold voice is not, and neither is the extra semitone you can shout out once.'
      ],
      feel: 'At the top: light, easy, slightly "smaller" than the notes below — never strained or grabbed. At the bottom: relaxed and released, with the tone still focused rather than crumbling. The new note should feel like an extension of the same instrument, not a different, harder one.',
      cues: [
        'One semitone at a time, and only while it stays easy',
        'Lighten as you rise; do not carry weight upward',
        'For low notes, release rather than push',
        'Stop the session at the frontier, do not live there'
      ],
      faults: [
        'Forcing high notes, which causes swelling and reduces range the next day',
        'Carrying heavy chest weight upward instead of blending (see 4.4)',
        'Pushing for low notes, producing a rattly, unusable tone',
        'Judging your range on a cold or tired voice and concluding it has shrunk'
      ],
      fix: 'If the top note strains, lighten and narrow the vowel towards "oo" — almost always the note is available with less weight. If it still fails, it is not yours yet; work the semitone below until that is genuinely easy.',
      produce: [
        '<strong>Warm up first.</strong> Range work on a cold voice is pointless and risky. Do SOVT (3.4) and sirens before anything else.',
        '<strong>Start comfortably.</strong> Begin a siren or a five-note pattern well inside your easy range.',
        '<strong>Rise by semitone.</strong> Move up one semitone at a time, staying quiet and light.',
        '<strong>Watch for the tell.</strong> The moment you feel a grab, a push, or the urge to get louder to reach — that is your frontier today. Do one more attempt gently, then stop.',
        '<strong>Retreat and finish low.</strong> Come back down through the middle and finish in comfortable territory. Never end a session at the extreme.',
        '<strong>Repeat over weeks.</strong> Return the next day. The frontier moves outward gradually — expect months, not days.'
      ],
      check: [
        'Your highest comfortable note is easy and unforced, not a shout.',
        'You can sing the top of your range quietly as well as loudly.',
        'Your range on a warmed-up day is stable or slowly growing.',
        'Low notes are still focused rather than rattly.',
        'You finish practice in the comfortable middle, not at the extreme.'
      ],
      troubleshoot: [
        '<strong>Top note strains</strong> → too much weight. Lighten, narrow towards "oo", revisit 4.4.',
        '<strong>Range smaller than last week</strong> → likely swelling from over-work. Rest, then return with light SOVT.',
        '<strong>Can shout the note but not sing it</strong> → it is not yours yet. Work the semitone below quietly.',
        '<strong>Low notes rattly and unfocused</strong> → pushing down. Release instead; accept the natural floor.'
      ],
      myths: [
        '"You can add an octave in a few weeks with the right exercise." — Real extension is slow. Rapid claims usually mean shouting or falsetto counted as range.',
        '"If you can hit it once, it is in your range." — Range means notes you can sing musically, repeatedly, at various volumes.',
        '"Straining builds strength like the gym." — Vocal folds are not skeletal muscle in this respect; repeated over-load causes swelling, not growth.'
      ],
      exercises: [
        {
          id: 'ex-6-1-a',
          name: 'Semitone-by-semitone sirens',
          durationMins: 6,
          difficulty: 'Moderate',
          ref: 'C3',
          pattern: { type: 'glide', from: 0, to: 12, andBack: true },
          steps: [
            'Warm up with SOVT first. Then siren gently on "ng" or a lip trill from a comfortable low note to a comfortable high one.',
            'Move the whole siren up a semitone each pass.',
            'Stay quiet and light — this is not a volume exercise.',
            'Stop the moment you feel a grab or an urge to get louder. Then come back down and finish in the middle.'
          ]
        },
        {
          id: 'ex-6-1-b',
          name: 'One new note',
          durationMins: 4,
          difficulty: 'Moderate–hard',
          ref: 'E4',
          pattern: [0, 1, 0],
          steps: [
            'Identify your highest genuinely easy note today.',
            'Sing it lightly on "oo", then touch the semitone above it just once, quietly.',
            'Return to the easy note. Do not repeat the new one more than two or three times.',
            'Log which note it was. Compare over weeks — that is where progress shows.'
          ]
        }
      ],
      videos: [
        {
          id: 'vid-6-1-nyvc',
          role: 'technique',
          coach: 'New York Vocal Coaching',
          title: 'NYVC Ep. 113 — Expand Your Vocal Range',
          youtubeId: 'UFVE9c0BJ64',
          displayMode: 'embed',
          available: true,
          lastChecked: '2026-07-25',
          topic: 'The core reference for safe extension — and realistic expectations about pace.'
        },
        {
          id: 'vid-6-1-mech',
          role: 'mechanism',
          coach: 'Stroboscopy / voice science',
          title: 'Stroboscopy: Vocal cords at high and low pitch',
          youtubeId: 'UpOXecWC5Dw',
          displayMode: 'embed',
          available: true,
          lastChecked: '2026-07-25',
          topic: 'The stretching and thinning that high notes require — and why force cannot produce it.'
        }
      ]
    },

    /* ---------------------------------------------------------------- 6.2 */
    {
      id: 'sirens',
      num: '6.2',
      title: 'Sirens & glides',
      level: 'Core',
      logEnabled: true,
      desc: 'One unbroken line from bottom to top — the best diagnostic you have.',
      explain: 'A siren is a continuous glide through your whole range on a single sound. It is simultaneously the best warm-up, the best diagnostic and the best repair tool in singing: it trains smooth transitions, reveals exactly where problems live, and does so at low impact on the folds.',
      how: [
        'Because a siren moves continuously rather than in steps, it requires the fold-stretching mechanism to change smoothly and constantly. There is no note at which you can "reset" — so any unevenness in the coordination shows up immediately as a bump, a break or a change in tone.',
        'That makes it diagnostic. A siren that wobbles at the same pitch every time has located your passaggio precisely (4.3). One that thins suddenly has found a closure problem. One that stops has found a place where airflow collapses.',
        'It is also low-impact. Done on a semi-occluded sound (lip trill, straw, "ng"), the back-pressure keeps collision forces low while the coordination gets a thorough workout across the whole range — which is why it is safe to do daily and safe when tired.',
        'The key discipline is <em>slow</em>. Fast sirens skate over problems; slow ones expose them. If a siren sounds perfect, do it at half the speed and it usually will not.'
      ],
      feel: 'A continuous, connected thread of sound with no gear-changes, no jumps in volume, and no sense of effort changing as you move through your range. It should feel like one gesture rather than a series of notes.',
      cues: [
        'Slow is the whole point — speed hides seams',
        'Keep the volume even throughout, especially through the break',
        'Use a lip trill, straw or "ng" to keep it low-impact',
        'Go both ways: down is usually harder than up'
      ],
      faults: [
        'Sirening too fast, which hides the problems you are trying to find',
        'Getting louder as you rise, which loads the transition',
        'Breaking or flipping at the passaggio rather than gliding through',
        'Only ever sirening upward and never practising the descent'
      ],
      fix: 'If the siren breaks at a particular point, slow right down and work just the few semitones around it, repeatedly, on a lip trill. If it will not glide at all on a vowel, do it on a straw first and transfer gradually.',
      produce: [
        '<strong>Choose the sound.</strong> Lip trill, straw or "ng" — all keep the impact low. Save open vowels for later.',
        '<strong>Start low and quiet.</strong> Begin at a comfortable low note at modest volume.',
        '<strong>Glide slowly upward.</strong> Take at least three or four seconds to reach the top. Keep the volume constant.',
        '<strong>Do not change effort at the break.</strong> The sound should be identical either side of your passaggio.',
        '<strong>Come back down.</strong> Descend just as slowly — most singers find this harder, because weight has to be released gradually rather than dumped.',
        '<strong>Then open it.</strong> Once smooth on the occlusion, try the same glide on "oo", then "ah". Any seam that reappears shows the transfer is incomplete.'
      ],
      check: [
        'A slow siren has no audible bump, break or jump anywhere.',
        'The volume stays even from bottom to top.',
        'Descending is as smooth as ascending.',
        'It works on an open vowel, not just on a lip trill.',
        'You can identify from the siren exactly where your passaggio sits.'
      ],
      troubleshoot: [
        '<strong>Breaks at the same pitch every time</strong> → passaggio work. Slow down and drill just that area (4.3).',
        '<strong>Smooth up, breaks coming down</strong> → releasing weight too suddenly. Descend more slowly still.',
        '<strong>Fine on a trill, breaks on a vowel</strong> → transfer gradually; alternate a bar of each.',
        '<strong>Sounds perfect but feels effortful</strong> → probably going too fast. Halve the speed and reassess.'
      ],
      myths: [
        '"Sirens are just a warm-up." — They are a complete diagnostic and training tool; many professionals use little else for maintenance.',
        '"A faster siren is more advanced." — Slow is harder and more revealing. Speed is not the goal.',
        '"If it breaks, push through it." — Pushing entrenches the break. Ease and slowness dissolve it.'
      ],
      mechanismDiagram: {
        id: 'dia-6-2b',
        title: 'What a siren reveals',
        type: 'process',
        verified: false,
        caption: 'A smooth siren (teal) shows even coordination across the range. The faults each have a signature: a break or flip at one pitch marks the passaggio; a sudden thinning marks a closure failure; a stop marks collapsing airflow. Because the glide is continuous, the location of the problem is exact. Informational diagram — to be source-verified before ship.',
        svg: `<svg viewBox="0 0 720 220" role="img" aria-label="Smooth siren compared with break, thinning and stop faults" font-family="Inter,sans-serif">
          <line x1="70" y1="185" x2="670" y2="185" stroke="#D6CDB8" stroke-width="1"/>
          <text x="660" y="205" text-anchor="end" font-size="10.5" fill="#8B8272">pitch rising →</text>
          <path d="M70 165 C 250 130, 450 80, 650 50" fill="none" stroke="#1C6B85" stroke-width="3"/>
          <text x="470" y="52" font-size="10.5" fill="#1C6B85">smooth — even coordination</text>

          <path d="M70 172 C 200 152, 300 128, 360 118" fill="none" stroke="#C05A24" stroke-width="2.5"/>
          <path d="M370 92 C 460 78, 560 66, 650 58" fill="none" stroke="#C05A24" stroke-width="2.5"/>
          <line x1="365" y1="118" x2="365" y2="92" stroke="#C05A24" stroke-width="1" stroke-dasharray="3 3"/>
          <text x="300" y="146" font-size="10" fill="#C05A24">break / flip → passaggio</text>

          <path d="M70 178 C 220 166, 340 152, 430 146" fill="none" stroke="#8B8272" stroke-width="2" stroke-dasharray="5 4"/>
          <text x="440" y="150" font-size="10" fill="#8B8272">thins out → closure fails</text>
        </svg>`
      },
      exercises: [
        {
          id: 'ex-6-2-a',
          name: 'Slow full-range siren',
          durationMins: 6,
          difficulty: 'Moderate',
          ref: 'C3',
          pattern: { type: 'glide', from: 0, to: 17, andBack: true },
          steps: [
            'On a lip trill or "ng", glide from your comfortable bottom to your comfortable top.',
            'Take at least three or four seconds each way — slow is the point.',
            'Keep the volume constant; do not get louder as you rise.',
            'Listen for any bump. Where it happens is your work for the week.'
          ]
        },
        {
          id: 'ex-6-2-b',
          name: 'Descending siren focus',
          durationMins: 4,
          difficulty: 'Moderate–hard',
          ref: 'G4',
          pattern: { type: 'glide', from: 0, to: -17 },
          steps: [
            'Start at a comfortable high note and glide slowly down to the bottom.',
            'Release weight gradually — resist dumping into heavy chest at the bottom.',
            'Keep the volume even the whole way.',
            'Listen for the point where the tone suddenly thickens; that is where to slow down further.'
          ]
        },
        {
          id: 'ex-6-2-c',
          name: 'Occlusion to vowel siren',
          durationMins: 4,
          difficulty: 'Moderate–hard',
          ref: 'C3',
          pattern: { type: 'glide', from: 0, to: 14, andBack: true },
          steps: [
            'Siren the full range on a lip trill until it is smooth.',
            'Repeat on "oo", then on "ah".',
            'Any seam that reappears on the vowel shows the coordination has not fully transferred.',
            'Alternate trill and vowel until the vowel matches.'
          ]
        }
      ],
      videos: [
        {
          id: 'vid-6-2-nyvc',
          role: 'technique',
          coach: 'New York Vocal Coaching',
          title: 'NYVC Ep. 101 — The Greatest Vocal Exercise of All Time',
          youtubeId: 'h0SIEY_zNqU',
          displayMode: 'embed',
          available: true,
          lastChecked: '2026-07-25',
          topic: 'The case for the siren as the single most valuable exercise.'
        },
        {
          id: 'vid-6-2-liepe',
          role: 'second opinion',
          coach: 'Chris Liepe',
          title: 'Fix Your Vocal Break | Navigate Passaggio',
          youtubeId: 'ZDoQ8OdtWxE',
          displayMode: 'embed',
          available: true,
          lastChecked: '2026-07-25',
          topic: 'Another approach to the break a siren exposes.'
        }
      ]
    },

    /* ---------------------------------------------------------------- 6.3 */
    {
      id: 'agility',
      num: '6.3',
      title: 'Agility — scales & arpeggios',
      level: 'Core',
      logEnabled: true,
      desc: 'Speed and accuracy: clean first, fast second.',
      explain: 'Agility is the ability to move between notes quickly and accurately without the tone smearing or the throat tightening. It is built exactly like instrumental technique: slowly, with a metronome, increasing speed only once the slow version is genuinely clean.',
      how: [
        'Fast passages require the fold-tensioning mechanism to change rapidly and precisely, and the resonance to follow. If either lags, notes blur together, pitches go approximate, and singers compensate by adding a glottal bump on each note to force definition — which is fast, tiring and inaccurate.',
        'The efficient approach keeps the airflow completely steady and lets the pitch changes happen <em>on top</em> of it, with no re-articulation. Each note should be distinct because the pitch changed cleanly, not because you punched it.',
        'Training speed follows the same rule as every other motor skill: <em>accuracy first, speed second</em>. Practising fast and sloppy trains fast and sloppy. The metronome is not optional here — it is the only reliable way to know whether you are actually getting faster or merely getting more approximate.',
        'Descending patterns are usually easier than ascending, and both should be practised. Arpeggios (1-3-5-8) are harder than scales because the jumps are larger, which is precisely why they are useful.'
      ],
      feel: 'A light, bubbling ease with the air flowing steadily underneath. Each note distinct but connected, with no bump in the throat between them. If it feels effortful you are almost certainly too fast for your current accuracy.',
      cues: [
        'Steady air underneath — let the pitches ride on top of it',
        'Do not re-articulate each note with a glottal bump',
        'Metronome always; raise the tempo only when clean',
        'Practise descending as well as ascending'
      ],
      faults: [
        'Adding a glottal push to each note to force definition',
        'Increasing speed before accuracy is established, entrenching sloppiness',
        'Tightening the jaw or throat as the tempo rises',
        'Smearing notes so the pattern becomes a slide rather than distinct pitches'
      ],
      fix: 'Halve the tempo. If it is not clean slowly, it will never be clean fast. If notes are blurring, articulate very lightly on "ha-ha-ha" to define them, then remove the "h" once the definition is internal.',
      produce: [
        '<strong>Set the metronome.</strong> Start slow — around 60 bpm, one note per beat. Use the practice bar.',
        '<strong>Descend first.</strong> Sing 5-4-3-2-1 on "ah". Keep the air steady and the notes distinct without punching them.',
        '<strong>Check accuracy against the drone.</strong> Every note should be dead centre, not approximate.',
        '<strong>Raise the tempo in small steps.</strong> Only once the current tempo is completely clean — four or five bpm at a time.',
        '<strong>Add arpeggios.</strong> 1-3-5-8-5-3-1, which demands larger jumps and more precise coordination.',
        '<strong>Retreat when it degrades.</strong> The moment accuracy drops, go back to the last clean tempo and stay there.'
      ],
      check: [
        'A five-note descending scale is clean and in tune at a moderate tempo.',
        'Notes are distinct without any glottal punching.',
        'The jaw and throat stay relaxed as tempo increases.',
        'Ascending patterns are as clean as descending ones.',
        'You know your current clean tempo and it is rising over weeks.'
      ],
      troubleshoot: [
        '<strong>Notes blur together</strong> → too fast. Halve the tempo; define lightly with "ha-ha" then remove the "h".',
        '<strong>Throat tightens as speed rises</strong> → you are forcing. Return to the clean tempo and build more slowly.',
        '<strong>Pitches approximate</strong> → check against the drone. Accuracy before speed, always.',
        '<strong>Clean descending, messy ascending</strong> → normal. Practise ascending at a lower tempo than descending.'
      ],
      myths: [
        '"Agility is a natural gift you either have or you do not." — It is a trainable motor skill, and it responds to metronome work like any other.',
        '"Practise fast to get fast." — You get whatever you practise. Practising fast and inaccurate makes you fast and inaccurate.',
        '"Agility only matters for classical or R&B singers." — Jazz phrasing and blues ornament both need it, if less densely.'
      ],
      exercises: [
        {
          id: 'ex-6-3-a',
          name: 'Descending 5-4-3-2-1',
          durationMins: 6,
          difficulty: 'Moderate',
          ref: 'C3',
          pattern: [7, 5, 4, 2, 0],
          steps: [
            'Set the metronome to 60 bpm, one note per beat.',
            'Sing 5-4-3-2-1 on "ah", steady air, no glottal punching.',
            'Check each note against the drone for accuracy.',
            'Raise by four or five bpm only when a pass is completely clean. Log your clean tempo.'
          ]
        },
        {
          id: 'ex-6-3-b',
          name: 'Arpeggio 1-3-5-8',
          durationMins: 5,
          difficulty: 'Moderate–hard',
          ref: 'C3',
          pattern: [0, 4, 7, 12, 7, 4, 0],
          steps: [
            'Same metronome discipline, starting slow.',
            'Sing 1-3-5-8-5-3-1 on "ah" or "mum".',
            'The larger jumps demand more precision — accuracy matters more than speed here.',
            'Move up by semitone through several keys while it stays clean.'
          ]
        },
        {
          id: 'ex-6-3-c',
          name: 'Nine-note run',
          durationMins: 4,
          difficulty: 'Hard',
          ref: 'C3',
          pattern: [0, 2, 4, 5, 7, 5, 4, 2, 0],
          steps: [
            'A full nine-note scale up and down, one note per beat.',
            'Keep the air completely steady; the pitches ride on top of it.',
            'If any note blurs, drop the tempo immediately.',
            'Listen for evenness — every note the same length and weight.'
          ]
        }
      ],
      videos: [
        {
          id: 'vid-6-3-nyvc',
          role: 'technique',
          coach: 'New York Vocal Coaching',
          title: 'NYVC Ep. 120 — 5 Riffs & Runs Every Singer Needs To Know',
          youtubeId: 'YOJTjSm7gvE',
          displayMode: 'embed',
          available: true,
          lastChecked: '2026-07-25',
          topic: 'Practical agility patterns, and how to build them cleanly.'
        },
        {
          id: 'vid-6-3-agility',
          role: 'second opinion',
          coach: 'Vocal coaching',
          title: 'Vocal Agility Exercises | Runs and Riffs for Beginners',
          youtubeId: 'g9ApIS6mgF4',
          displayMode: 'embed',
          available: true,
          lastChecked: '2026-07-25',
          topic: 'A beginner-level route into agility work — useful if the NYVC patterns feel too quick at first.'
        }
      ]
    },

    /* ---------------------------------------------------------------- 6.4 */
    {
      id: 'riffs',
      num: '6.4',
      title: 'Riffs, runs & melisma',
      level: 'Refinement',
      logEnabled: true,
      desc: 'Turning agility into musical ornament — the jazz and blues application.',
      explain: 'A riff is agility used musically: several notes sung on a single syllable, shaped to fit the harmony and the feel of the song. Technically it is 6.3 applied; musically it needs a scale vocabulary and a sense of taste, because a run that does not serve the song is just decoration.',
      how: [
        'Melisma means multiple notes on one syllable. The technical requirement is the agility from 6.3 — steady air, clean pitch changes, no glottal punching — plus the ability to place those notes accurately within a scale rather than sliding vaguely between them.',
        'For jazz and blues the vocabulary that matters most is the <strong>pentatonic</strong> (five-note) scale and the <strong>blues scale</strong> (pentatonic plus the flattened fifth). Most idiomatic runs in these styles are built from those notes, which is why practising runs within them sounds stylish while chromatic noodling does not.',
        'Rhythm matters as much as pitch. A run has to land somewhere — usually resolving onto a strong beat or a chord tone. Runs that drift without landing sound aimless however clean the notes are.',
        'Taste is the final constraint, and in jazz and blues it usually means restraint. A single well-placed bend or three-note turn communicates more than a cascade. The technical ability to run should expand your options, not obligate you.'
      ],
      feel: 'Light and fluid, with the notes clearly defined but connected, and a clear sense of where the run is heading. It should feel like a musical gesture with a destination, not a display of speed.',
      cues: [
        'Learn runs inside the pentatonic and blues scales, not chromatically',
        'Every run needs a landing note — know where it resolves',
        'Slow with a metronome first; speed comes last',
        'In jazz and blues, less is usually more'
      ],
      faults: [
        'Running without landing, so the phrase drifts',
        'Sliding vaguely between pitches instead of articulating them',
        'Using runs everywhere because you can, regardless of the song',
        'Practising at full speed and never achieving clean pitches'
      ],
      fix: 'Slow the run to half speed with the metronome and check each note against the drone. If it still smears, reduce it to three notes and build up. If it sounds unmusical rather than unclean, the problem is the landing note or the scale choice, not the technique.',
      produce: [
        '<strong>Learn the scale first.</strong> Sing a minor pentatonic slowly up and down until it is automatic. Then add the flattened fifth for the blues scale.',
        '<strong>Build a three-note run.</strong> Take three adjacent scale notes and sing them on one syllable, slowly, with the metronome. Land on the lowest.',
        '<strong>Extend gradually.</strong> Four notes, then five, keeping every pitch accurate against the drone.',
        '<strong>Add the rhythm.</strong> Decide where the run lands — usually on a strong beat — and practise arriving there exactly.',
        '<strong>Speed up last.</strong> Raise the tempo only when the slow version is completely clean.',
        '<strong>Apply with restraint.</strong> Put one run into a song, at one moment where it serves the line. Resist adding more.'
      ],
      check: [
        'You can sing a pentatonic scale accurately up and down without thinking.',
        'A four-note run is clean and in tune at a moderate tempo.',
        'Your runs land deliberately on a chosen note rather than drifting.',
        'You can choose not to run — restraint is available to you.',
        'A recorded run sounds intentional rather than decorative.'
      ],
      troubleshoot: [
        '<strong>Notes smear together</strong> → too fast. Halve the tempo; reduce to three notes and rebuild.',
        '<strong>Run sounds unmusical though clean</strong> → wrong scale or no landing note. Work inside the pentatonic and choose a resolution.',
        '<strong>Pitches drift sharp or flat</strong> → check against the drone at slow tempo before adding speed.',
        '<strong>Runs feel tiring</strong> → you are re-articulating each note. Keep the air steady and let pitch do the work.'
      ],
      myths: [
        '"Riffs are just fast singing." — They are shaped musical gestures within a scale, with a destination. Speed alone is not a riff.',
        '"You need runs to sound impressive." — In jazz and blues, restraint and phrasing carry far more weight than melisma.',
        '"Learn them by copying recordings note for note." — Useful as a start, but without the underlying scale vocabulary you can only ever reproduce, never invent.'
      ],
      diagram: {
        id: 'dia-6-4',
        title: 'The blues scale — where riffs live',
        type: 'map',
        verified: false,
        caption: 'The minor pentatonic (teal) plus the flattened fifth (orange) gives the blues scale. Idiomatic jazz and blues runs are built almost entirely from these degrees, which is why practising ornament inside this set sounds stylistically right while chromatic runs often do not. Informational diagram — to be source-verified before ship.',
        svg: `<svg viewBox="0 0 720 200" role="img" aria-label="Degrees of the minor pentatonic and blues scale" font-family="Inter,sans-serif">
          <line x1="60" y1="130" x2="670" y2="130" stroke="#D6CDB8" stroke-width="1"/>
          <g font-size="12" font-weight="700">
            <rect x="70" y="88" width="70" height="42" rx="5" fill="#1C6B85" fill-opacity="0.45"/><text x="105" y="115" text-anchor="middle" fill="#1E1B17">1</text>
            <rect x="165" y="88" width="70" height="42" rx="5" fill="#1C6B85" fill-opacity="0.45"/><text x="200" y="115" text-anchor="middle" fill="#1E1B17">♭3</text>
            <rect x="260" y="88" width="70" height="42" rx="5" fill="#1C6B85" fill-opacity="0.45"/><text x="295" y="115" text-anchor="middle" fill="#1E1B17">4</text>
            <rect x="355" y="88" width="70" height="42" rx="5" fill="#C05A24" fill-opacity="0.5"/><text x="390" y="115" text-anchor="middle" fill="#1E1B17">♭5</text>
            <rect x="450" y="88" width="70" height="42" rx="5" fill="#1C6B85" fill-opacity="0.45"/><text x="485" y="115" text-anchor="middle" fill="#1E1B17">5</text>
            <rect x="545" y="88" width="70" height="42" rx="5" fill="#1C6B85" fill-opacity="0.45"/><text x="580" y="115" text-anchor="middle" fill="#1E1B17">♭7</text>
          </g>
          <text x="390" y="76" text-anchor="middle" font-size="10.5" fill="#C05A24">the blue note</text>
          <text x="360" y="164" text-anchor="middle" font-size="11" fill="#8B8272">minor pentatonic + ♭5 = blues scale</text>
          <text x="360" y="184" text-anchor="middle" font-size="10.5" fill="#8B8272">build runs here; land on 1, ♭3 or 5</text>
        </svg>`
      },
      exercises: [
        {
          id: 'ex-6-4-a',
          name: 'Pentatonic run, slow',
          durationMins: 6,
          difficulty: 'Moderate–hard',
          ref: 'C3',
          pattern: [0, 3, 5, 7, 10, 7, 5, 3, 0],
          steps: [
            'Set the metronome slow. Sing the minor pentatonic up and down on "ah".',
            'Keep every pitch accurate against the drone — no sliding between notes.',
            'Once clean, sing the whole pattern on a single syllable as one run.',
            'Raise the tempo only when the slow version is completely clean.'
          ]
        },
        {
          id: 'ex-6-4-b',
          name: 'Three-note turn with a landing',
          durationMins: 4,
          difficulty: 'Moderate',
          ref: 'D3',
          pattern: [3, 5, 3, 0],
          steps: [
            'Sing ♭3–4–♭3 and land firmly on 1.',
            'Practise arriving on the landing note exactly on the beat.',
            'This small ornament is more useful in jazz and blues than any long cascade.',
            'Try it on a plain melody note in a song you know.'
          ]
        },
        {
          id: 'ex-6-4-c',
          name: 'Blue-note bend',
          durationMins: 4,
          difficulty: 'Moderate',
          ref: 'C3',
          pattern: { type: 'glide', from: 6, to: 7 },
          steps: [
            'Sing the flattened fifth and slide gently up to the fifth.',
            'Keep the slide controlled — a deliberate bend, not a scoop.',
            'Then approach the ♭3 from below in the same way.',
            'These bends are the core blues ornament; a single one can define the style.'
          ]
        }
      ],
      videos: [
        {
          id: 'vid-6-4-nyvc',
          role: 'technique',
          coach: 'New York Vocal Coaching',
          title: 'NYVC Ep. 120 — 5 Riffs & Runs Every Singer Needs To Know',
          youtubeId: 'YOJTjSm7gvE',
          displayMode: 'embed',
          available: true,
          lastChecked: '2026-07-25',
          topic: 'Specific, learnable riff patterns and how to practise them.'
        },
        {
          id: 'vid-6-4-agility',
          role: 'second opinion',
          coach: 'Vocal coaching',
          title: 'Vocal Agility Exercises | Runs and Riffs for Beginners',
          youtubeId: 'g9ApIS6mgF4',
          displayMode: 'embed',
          available: true,
          lastChecked: '2026-07-25',
          topic: 'A gentler on-ramp to the same material.'
        }
      ]
    }
  ]
}
