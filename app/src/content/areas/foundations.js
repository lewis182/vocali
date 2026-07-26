/* Vocali — Area 1: Foundations & Vocal Health.
   Written to the content standard. Reference pitches suit a TENOR/BARITONE.
   Knowledge sections use `kind: 'checklist'` exercises rather than vocal drills. */

export const foundations = {
  id: 'foundations',
  n: '01',
  title: 'Foundations & Vocal Health',
  group: 'Foundation',
  order: 1,
  lede: 'How the instrument actually works, how to set the body up so it can work, and how to keep it healthy enough to keep working. Everything else in the app rests on this.',
  intro: 'Singing is a physical act performed by an instrument you cannot see. This area makes it visible: what produces the sound (the vocal folds), what powers it (the breath), what shapes it (the resonating spaces), and what interferes with it (tension, dehydration, misuse). None of it takes long to learn, and it is deliberately brisk in the twelve-week plan — but skipping it is why many singers spend years fighting problems that are postural or habitual rather than technical. Work through it once properly, then return to <strong>1.5</strong> whenever something feels wrong.',

  videos: [
    {
      id: 'vid-f-larynx-anim',
      role: 'mechanism',
      coach: 'Anatomy animation',
      title: 'Larynx Animation',
      youtubeId: 'BGX2dc75J_s',
      displayMode: 'embed',
      available: true,
      lastChecked: '2026-07-25',
      topic: 'Orientation: the larynx as a moving structure — the housing for everything this area describes.'
    },
    {
      id: 'vid-f-mri-tyley',
      role: 'mechanism',
      coach: 'Voice science',
      title: 'Singing in the MRI with Tyley Ross — Making the Voice Visible',
      youtubeId: 'J3TwTb-T044',
      displayMode: 'embed',
      available: true,
      lastChecked: '2026-07-25',
      topic: 'The whole instrument working at once — breath, folds and resonators, seen from the inside.'
    }
  ],

  diagram: {
    id: 'dia-f-area',
    title: 'The vocal mechanism — power, source, filter',
    type: 'mechanism',
    verified: false,
    caption: 'Three stages: the lungs and breathing muscles supply moving air (power), the vocal folds turn that air into a buzzing tone (source), and the throat, mouth and nose shape that buzz into a voice with a recognisable colour and vowel (filter). Almost every vocal problem sits in one of these three. Informational diagram — to be source-verified before ship.',
    svg: `<svg viewBox="0 0 720 250" role="img" aria-label="Power, source and filter stages of the vocal mechanism" font-family="Inter,sans-serif">
      <rect x="50" y="120" width="160" height="70" rx="8" fill="#1C6B85" fill-opacity="0.18" stroke="#1C6B85"/>
      <text x="130" y="150" text-anchor="middle" font-size="13" font-weight="700" fill="#1E1B17">POWER</text>
      <text x="130" y="170" text-anchor="middle" font-size="11" fill="#8B8272">lungs · ribs · diaphragm</text>

      <rect x="280" y="120" width="160" height="70" rx="8" fill="#1C6B85" fill-opacity="0.42" stroke="#1C6B85"/>
      <text x="360" y="150" text-anchor="middle" font-size="13" font-weight="700" fill="#1E1B17">SOURCE</text>
      <text x="360" y="170" text-anchor="middle" font-size="11" fill="#8B8272">vocal folds (larynx)</text>

      <rect x="510" y="120" width="160" height="70" rx="8" fill="#C05A24" fill-opacity="0.18" stroke="#C05A24"/>
      <text x="590" y="150" text-anchor="middle" font-size="13" font-weight="700" fill="#1E1B17">FILTER</text>
      <text x="590" y="170" text-anchor="middle" font-size="11" fill="#8B8272">throat · mouth · nose</text>

      <path d="M215 155 L272 155" stroke="#8B8272" stroke-width="2" marker-end="url(#ar)"/>
      <path d="M445 155 L502 155" stroke="#8B8272" stroke-width="2" marker-end="url(#ar)"/>
      <defs><marker id="ar" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto">
        <path d="M0 0 L8 4 L0 8 z" fill="#8B8272"/></marker></defs>

      <text x="130" y="215" text-anchor="middle" font-size="11" fill="#8B8272">moving air</text>
      <text x="360" y="215" text-anchor="middle" font-size="11" fill="#8B8272">raw buzz</text>
      <text x="590" y="215" text-anchor="middle" font-size="11" fill="#8B8272">your voice</text>
      <text x="360" y="60" text-anchor="middle" font-size="12" font-weight="700" fill="#1C6B85">Every sound you make passes through all three</text>
    </svg>`
  },

  sections: [
    /* ---------------------------------------------------------------- 1.1 */
    {
      id: 'how-voice-works',
      num: '1.1',
      title: 'How the voice works',
      level: 'Foundational',
      logEnabled: true,
      desc: 'Power, source and filter — the three-stage instrument.',
      explain: 'Your voice is a three-stage instrument. Air from the lungs sets the vocal folds vibrating, and the spaces above them shape that vibration into a recognisable voice. Understanding these three stages tells you where a problem actually lives — which is usually not where it feels like it lives.',
      how: [
        '<strong>Power.</strong> The lungs, ribs and diaphragm supply a stream of moving air. Air pressure below the folds (subglottic pressure) is what drives them; how steadily you manage that pressure determines how steady the tone is.',
        '<strong>Source.</strong> The vocal folds — two small bands of layered tissue in the larynx — close across the airway. Air pressure blows them apart, they snap back together through elasticity and airflow (the Bernoulli effect), and this repeats hundreds of times per second. Each open-and-close cycle is one pitch cycle: around 110 times per second for a low A2, around 330 for E4. That rapid buzzing is the raw sound, and on its own it is thin and unmusical.',
        '<strong>Filter.</strong> Above the folds, the throat, mouth and nose form a tube whose shape you change constantly with the tongue, jaw, lips and soft palate. That tube has resonances (<em>formants</em>) which amplify some frequencies of the buzz and damp others. This is what turns a buzz into an "ah" or an "ee", and what makes one voice sound bright and another dark. Most of what listeners call "tone" is filter, not source.',
        'The practical consequence: <em>volume and carrying power are mostly resonance, not force</em>. A well-shaped filter makes a moderately-worked source sound large. Pushing harder at the source to get louder is the single most common route to strain.'
      ],
      feel: 'Put a hand flat on your sternum and hum. The buzz you feel there is sympathetic vibration — the sound is being made at your throat, not your chest. Now hum and slowly change from "mm" to "ah" to "ee" without changing pitch or effort: that changing colour is the filter at work.',
      cues: [
        'Think of it as breath → buzz → shape, in that order',
        'When something sounds wrong, ask which of the three stages it belongs to',
        'Reach for a better shape (resonance) before more effort (power)',
        'The larynx should feel like it is doing less than you expect'
      ],
      faults: [
        'Assuming "support" means pushing more air — more pressure usually makes the tone harsher, not stronger',
        'Trying to fix a resonance problem (dull, muffled tone) with force at the folds',
        'Believing the chest "produces" chest voice, and so pushing down into it'
      ],
      fix: 'When a note is not working, diagnose by stage. Breathy or unsteady → power/source. Harsh, pressed or tiring → too much power for the source. Dull, muffled, not carrying → filter; change the vowel and the space before you change the effort.',
      produce: [
        '<strong>Feel the source.</strong> Hum a comfortable note with fingers lightly on your throat. That vibration under your fingers is the folds themselves.',
        '<strong>Feel the power.</strong> Hum again and let it fade to nothing. Notice you ran out of pressure, not out of "voice" — the tone stops when the air stops driving it.',
        '<strong>Feel the filter.</strong> Hold one steady note and move slowly through "ee — eh — ah — oh — oo". Pitch and effort stay constant; only the shape changes, and yet the sound changes completely.',
        '<strong>Prove resonance beats force.</strong> Sing a comfortable "ah" at moderate volume. Now, without pushing any harder, brighten it towards a slightly bratty "nyah". It should sound louder and more present while feeling no harder. That is the filter earning volume for free.'
      ],
      check: [
        'You can name which stage a problem belongs to: power, source or filter.',
        'You can change the vowel on one held note without changing pitch or effort.',
        'You can make a note more present by brightening it rather than pushing it.',
        'You understand that the chest and head "resonance" you feel are sensations, not sound sources.'
      ],
      troubleshoot: [
        '<strong>Everything feels effortful</strong> → you are working the source and ignoring the filter. Brighten and shape before pushing.',
        '<strong>Tone stops abruptly mid-phrase</strong> → power ran out. Area 2 covers breath management.',
        '<strong>Sound is present but ugly</strong> → almost always filter. Adjust vowel, jaw and tongue before anything else.',
        '<strong>Throat tires quickly</strong> → too much pressure at the source for the resonance you are getting.'
      ],
      myths: [
        '"You sing from the diaphragm." — The diaphragm is an inhaling muscle; it does not push air out. It is part of the power stage, but you do not consciously drive it while singing.',
        '"Chest voice comes from the chest and head voice from the head." — Both are made at the folds. The names describe where you feel sympathetic vibration, nothing more.',
        '"A bigger voice means bigger effort." — Carrying power comes largely from resonance tuning. The loudest professional singers are usually working less hard than the strained amateur beside them.'
      ],
      diagram: {
        id: 'dia-1-1',
        title: 'One cycle of vocal fold vibration',
        type: 'process',
        verified: false,
        caption: 'A single vibration cycle, repeated 100–400+ times a second depending on pitch: pressure builds below the closed folds, blows them apart, the air rushes through, and elasticity plus falling pressure snaps them shut again. Pitch is how fast this repeats; loudness is largely how firmly they close and how well the tract above resonates. Informational diagram — to be source-verified before ship.',
        svg: `<svg viewBox="0 0 720 200" role="img" aria-label="Four stages of one vocal fold vibration cycle" font-family="Inter,sans-serif">
          <g>
            <text x="90" y="30" text-anchor="middle" font-size="11" font-weight="700" fill="#1E1B17">1 · closed</text>
            <path d="M60 60 C 85 90, 85 110, 60 140" fill="none" stroke="#1C6B85" stroke-width="6" stroke-linecap="round"/>
            <path d="M120 60 C 95 90, 95 110, 120 140" fill="none" stroke="#1C6B85" stroke-width="6" stroke-linecap="round"/>
            <text x="90" y="168" text-anchor="middle" font-size="10" fill="#8B8272">pressure builds</text>
          </g>
          <g>
            <text x="255" y="30" text-anchor="middle" font-size="11" font-weight="700" fill="#1E1B17">2 · blown open</text>
            <path d="M215 60 C 235 90, 235 110, 215 140" fill="none" stroke="#1C6B85" stroke-width="6" stroke-linecap="round"/>
            <path d="M295 60 C 275 90, 275 110, 295 140" fill="none" stroke="#1C6B85" stroke-width="6" stroke-linecap="round"/>
            <ellipse cx="255" cy="100" rx="12" ry="30" fill="#C05A24" fill-opacity="0.35"/>
            <text x="255" y="168" text-anchor="middle" font-size="10" fill="#8B8272">air escapes</text>
          </g>
          <g>
            <text x="420" y="30" text-anchor="middle" font-size="11" font-weight="700" fill="#1E1B17">3 · closing</text>
            <path d="M385 60 C 408 90, 408 110, 385 140" fill="none" stroke="#1C6B85" stroke-width="6" stroke-linecap="round"/>
            <path d="M455 60 C 432 90, 432 110, 455 140" fill="none" stroke="#1C6B85" stroke-width="6" stroke-linecap="round"/>
            <ellipse cx="420" cy="100" rx="5" ry="26" fill="#C05A24" fill-opacity="0.25"/>
            <text x="420" y="168" text-anchor="middle" font-size="10" fill="#8B8272">pressure drops</text>
          </g>
          <g>
            <text x="590" y="30" text-anchor="middle" font-size="11" font-weight="700" fill="#1E1B17">4 · shut · repeat</text>
            <path d="M560 60 C 585 90, 585 110, 560 140" fill="none" stroke="#1C6B85" stroke-width="6" stroke-linecap="round"/>
            <path d="M620 60 C 595 90, 595 110, 620 140" fill="none" stroke="#1C6B85" stroke-width="6" stroke-linecap="round"/>
            <text x="590" y="168" text-anchor="middle" font-size="10" fill="#8B8272">one pitch cycle</text>
          </g>
        </svg>`
      },
      exercises: [
        {
          id: 'ex-1-1-a',
          name: 'Find the three stages',
          durationMins: 4,
          difficulty: 'Easy',
          ref: 'C3',
          pattern: [0],
          steps: [
            'Hum a comfortable note with fingertips resting lightly on your throat — feel the source vibrating.',
            'Let it fade until it stops. Notice the sound ends because pressure ran out, not because the voice "gave up".',
            'Hold one steady note and move through "ee — eh — ah — oh — oo" without changing pitch or effort.',
            'Listen for how much the sound changes when only the filter changes. That range of colour is free — it costs no extra effort.'
          ]
        },
        {
          id: 'ex-1-1-b',
          name: 'Resonance beats force',
          durationMins: 3,
          difficulty: 'Easy',
          ref: 'D3',
          pattern: [0, 0],
          steps: [
            'Sing a moderate "ah" on a comfortable note. Note the effort level.',
            'Keeping exactly the same effort, brighten it towards a slightly bratty "nyah".',
            'Listen: it should sound more present and carrying while feeling no harder.',
            'Alternate the two several times so the difference between "louder" and "brighter" becomes obvious.'
          ]
        }
      ],
      videos: [
        {
          id: 'vid-1-1-strobo',
          role: 'mechanism',
          coach: 'Stroboscopy / voice science',
          title: 'Vocal Folds in Action! Larynx Stroboscope Demo [Singing/Speaking]',
          youtubeId: 'vffHy6r7FlA',
          displayMode: 'embed',
          available: true,
          lastChecked: '2026-07-25',
          topic: 'The source stage, filmed: the folds opening and closing while speaking and singing.'
        },
        {
          id: 'vid-1-1-nyvc',
          role: 'technique',
          coach: 'New York Vocal Coaching',
          title: 'NYVC Ep. 1 — 4 Breathing Types',
          youtubeId: 'mDQoMyPmg9s',
          displayMode: 'embed',
          available: true,
          lastChecked: '2026-07-25',
          topic: 'The power stage in practice, and how differently singers manage it.'
        }
      ]
    },

    /* ---------------------------------------------------------------- 1.2 */
    {
      id: 'posture',
      num: '1.2',
      title: 'Posture & alignment',
      level: 'Foundational',
      logEnabled: true,
      desc: 'Setting the body up so the breath and larynx can work freely.',
      explain: 'Posture is not about standing smartly; it is about giving the ribs room to move and letting the larynx sit without interference. A collapsed chest restricts the breath, and a jutting chin puts tension straight into the muscles around the voice box. Good alignment makes technique easier before you have sung a note.',
      how: [
        'Breathing depends on the ribcage expanding. If the chest collapses and the spine rounds, rib movement is mechanically limited, so you take shallower breaths and compensate by squeezing at the throat to control what little air you have.',
        'The larynx is suspended in a sling of muscles running to the jaw, skull and sternum. Push the head forward — the near-universal screen posture — and those muscles are put under constant load. That directly restricts how freely the larynx can move for pitch, and adds a background tension you may have stopped noticing.',
        'The aim is a <em>balanced, buoyant</em> alignment rather than a rigid, military one. Rigid is as bad as collapsed: locked knees, a clenched backside and a held-up chest all interfere with the free rib movement that easy singing needs.'
      ],
      feel: 'Tall but soft. Weight even through both feet, knees unlocked, ribs feeling open and roomy rather than lifted and held, and the head balanced on top of the spine — not pushed forward. It should feel like less effort than slouching, not more.',
      cues: [
        'Imagine a thread lifting the crown of your head, letting the spine lengthen beneath it',
        'Let the shoulders be wide and low — not pulled back and pinned',
        'Feel the breastbone buoyant but not braced upward',
        'Bring the chin gently back so the ears sit over the shoulders'
      ],
      faults: [
        'Collapsing the chest as the phrase goes on — the ribs sink and the air disappears',
        'A forward head or lifted chin, especially reaching for high notes',
        'A rigid, "military" posture that locks the ribs and stops them moving',
        'Locked knees, which quietly builds whole-body tension'
      ],
      fix: 'Do the roll-down (below) whenever you notice yourself stiff or collapsed. If you catch the chin lifting on high notes, practise them looking very slightly downward until the habit clears.',
      produce: [
        '<strong>Roll down.</strong> Standing, feet hip-width and knees soft, let the head drop forward and roll slowly down the spine until you hang loosely from the hips. Let the arms and neck be completely slack.',
        '<strong>Breathe there.</strong> Take three easy breaths hanging down. You will feel the back of the ribs expanding — a movement most people never notice upright.',
        '<strong>Stack back up.</strong> Roll up slowly, one vertebra at a time, letting the head arrive last. Do not "pull yourself up straight".',
        '<strong>Check the head.</strong> Nod a small yes and no, then let the head settle balanced. The ears should sit roughly over the shoulders.',
        '<strong>Test it.</strong> Sing a comfortable note before and after. Most people find the after version freer and slightly louder for no extra effort.'
      ],
      check: [
        'Standing tall feels easier than slouching, not like work you are holding.',
        'Your ribs still feel open at the end of a long phrase, not sunk.',
        'You can sing a comfortable high note without the chin lifting.',
        'Someone watching from the side would see your ears roughly over your shoulders.',
        'A note sung after the roll-down is freer than the one before it.'
      ],
      troubleshoot: [
        '<strong>Chest sinks through the phrase</strong> → keep the breastbone buoyant as you exhale; do not let it ride down with the air.',
        '<strong>Chin rises on high notes</strong> → practise them looking slightly down until the reflex disappears.',
        '<strong>Posture feels tiring to hold</strong> → you are bracing, not balancing. Soften knees and shoulders; it should cost almost nothing.',
        '<strong>Neck and shoulders ache after singing</strong> → likely a forward head. Roll-downs plus attention at the desk, not just at the mic.'
      ],
      myths: [
        '"Stand up straight and pull your shoulders back." — Pinning the shoulders back locks the ribcage. Wide and low is what you want.',
        '"Posture is just about looking confident on stage." — It measurably changes how much air you can move and how freely the larynx sits.'
      ],
      mechanismDiagram: {
        id: 'dia-1-2b',
        title: 'Forward head posture and laryngeal load',
        type: 'anatomy',
        verified: false,
        caption: 'Balanced (left): the head sits over the spine and the muscles suspending the larynx carry little load. Forward head (right): the same muscles work continuously to hold the head up, adding constant tension around the voice box and limiting free laryngeal movement. Informational diagram — to be source-verified before ship.',
        svg: `<svg viewBox="0 0 720 220" role="img" aria-label="Balanced head position compared with forward head posture" font-family="Inter,sans-serif">
          <text x="180" y="26" text-anchor="middle" font-size="12" font-weight="700" fill="#1C6B85">Balanced</text>
          <line x1="180" y1="70" x2="180" y2="185" stroke="#8B8272" stroke-width="3"/>
          <circle cx="180" cy="55" r="20" fill="none" stroke="#1E1B17" stroke-width="3"/>
          <line x1="180" y1="40" x2="180" y2="195" stroke="#1C6B85" stroke-width="1" stroke-dasharray="4 4"/>
          <text x="180" y="208" text-anchor="middle" font-size="10" fill="#8B8272">low load</text>

          <text x="540" y="26" text-anchor="middle" font-size="12" font-weight="700" fill="#C05A24">Forward head</text>
          <line x1="540" y1="70" x2="540" y2="185" stroke="#8B8272" stroke-width="3"/>
          <circle cx="588" cy="58" r="20" fill="none" stroke="#1E1B17" stroke-width="3"/>
          <line x1="545" y1="72" x2="578" y2="66" stroke="#C05A24" stroke-width="3"/>
          <line x1="540" y1="40" x2="540" y2="195" stroke="#8B8272" stroke-width="1" stroke-dasharray="4 4"/>
          <text x="600" y="100" font-size="10" fill="#C05A24">muscles hold constantly</text>
          <text x="540" y="208" text-anchor="middle" font-size="10" fill="#8B8272">constant tension at the larynx</text>
        </svg>`
      },
      diagram: {
        id: 'dia-1-2',
        title: 'Alignment checkpoints',
        type: 'process',
        verified: false,
        caption: 'Five checkpoints, from the ground up. The aim is balance rather than rigidity — every joint stacked and soft, so the ribs can move freely and the larynx hangs without load. Informational diagram — to be source-verified before ship.',
        svg: `<svg viewBox="0 0 720 240" role="img" aria-label="Five postural checkpoints from feet to head" font-family="Inter,sans-serif">
          <line x1="300" y1="30" x2="300" y2="215" stroke="#D6CDB8" stroke-width="2" stroke-dasharray="5 5"/>
          <circle cx="300" cy="45" r="7" fill="#1C6B85"/><text x="325" y="49" font-size="12" fill="#1E1B17">Head balanced, ears over shoulders</text>
          <circle cx="300" cy="90" r="7" fill="#1C6B85"/><text x="325" y="94" font-size="12" fill="#1E1B17">Shoulders wide and low, not pinned</text>
          <circle cx="300" cy="135" r="7" fill="#1C6B85"/><text x="325" y="139" font-size="12" fill="#1E1B17">Breastbone buoyant, ribs free to move</text>
          <circle cx="300" cy="180" r="7" fill="#1C6B85"/><text x="325" y="184" font-size="12" fill="#1E1B17">Knees unlocked</text>
          <circle cx="300" cy="212" r="7" fill="#1C6B85"/><text x="325" y="216" font-size="12" fill="#1E1B17">Weight even through both feet</text>
        </svg>`
      },
      exercises: [
        {
          id: 'ex-1-2-a',
          name: 'Rag-doll roll-down and stack-up',
          durationMins: 4,
          difficulty: 'Easy',
          ref: 'C3',
          pattern: [0],
          steps: [
            'Feet hip-width, knees soft. Drop the head forward and roll slowly down the spine until hanging loosely from the hips.',
            'Take three easy breaths hanging down — feel the back of the ribs expand.',
            'Roll up one vertebra at a time, head arriving last. Do not haul yourself upright.',
            'Sing a comfortable sustained note before and after. Listen for the after version being freer and slightly fuller for the same effort.'
          ]
        },
        {
          id: 'ex-1-2-b',
          name: 'Wall check',
          durationMins: 2,
          difficulty: 'Easy',
          ref: 'C3',
          pattern: [0],
          steps: [
            'Stand with your back to a wall, heels a few inches away, so the backside and shoulder blades touch it.',
            'Bring the back of the head towards the wall without lifting the chin. If it will not reach comfortably, that is a forward-head habit to work on.',
            'Step away keeping the feeling, and sing a phrase.',
            'Repeat daily; the point is recalibration, not holding the position while you sing.'
          ]
        }
      ],
      videos: [
        {
          id: 'vid-1-2-nyvc',
          role: 'technique',
          coach: 'New York Vocal Coaching',
          title: 'NYVC Ep. 129 — Top 7 Vocal Exercises',
          youtubeId: 'KfnxccMdi-A',
          displayMode: 'embed',
          available: true,
          lastChecked: '2026-07-25',
          topic: 'General set-up and warm-up practice; posture and release run through all of it.'
        },
        {
          id: 'vid-1-2-mech',
          role: 'mechanism',
          coach: 'Anatomy animation',
          title: 'Larynx Pharynx — Muscles that move the vocal cords (3D)',
          youtubeId: 'RdZRsCH_e5g',
          displayMode: 'embed',
          available: true,
          lastChecked: '2026-07-25',
          topic: 'Shows the muscular sling the larynx hangs in — why head position affects the voice directly.'
        }
      ]
    },

    /* ---------------------------------------------------------------- 1.3 */
    {
      id: 'tension',
      num: '1.3',
      title: 'Releasing tension (jaw, tongue, neck)',
      level: 'Foundational',
      logEnabled: true,
      desc: 'Removing the interference that masquerades as lack of technique.',
      explain: 'Most singers do not need to add effort; they need to remove interference. The jaw, tongue and neck are the three places tension collects, and because they sit directly around and above the larynx, tension there restricts both the free movement of the voice box and the shaping of the resonating space. Much of what feels like a technical limit is simply held tension.',
      how: [
        'The <strong>tongue</strong> is a large muscle whose root forms the front wall of the throat, and it attaches to the hyoid bone from which the larynx is suspended. A retracted or bunched tongue root therefore pulls directly on the larynx and narrows the pharynx — muffling the tone and restricting range at the same time.',
        'The <strong>jaw</strong> shares muscular attachments with the floor of the mouth and, indirectly, with the laryngeal sling. Clenching adds load to that system and forces the tongue to compensate for vowel shapes the jaw should be helping with.',
        'The <strong>neck</strong> — sternocleidomastoid and the strap muscles — can grip and hold the larynx high, particularly when reaching upward. That produces the strangled quality of pushed high notes, and it is a habit rather than a necessity.',
        'The important principle: these muscles are <em>not</em> supposed to be involved in making pitch. When they engage, they are compensating for something else, usually poor breath support or an attempt to force volume. Release them and the underlying problem becomes visible.'
      ],
      feel: 'A loose, slightly heavy jaw; a tongue lying forward and flat with its tip resting at the lower front teeth; a neck that feels long and uninvolved. Singing should not produce any sensation of gripping above the collarbones.',
      cues: [
        'Let the jaw hang rather than opening it deliberately',
        'Keep the tongue tip touching the bottom front teeth so the root cannot retract',
        'Sing as though the neck has nothing to do with it',
        'Yawn-sigh whenever you notice gripping — it releases the whole area at once'
      ],
      faults: [
        'Clenching or thrusting the jaw to make space, instead of letting it release',
        'A tongue that pulls back and bunches, giving a swallowed, muffled tone',
        'Neck muscles standing out visibly on higher or louder notes',
        'Raising the shoulders on inhalation, which loads the whole neck'
      ],
      fix: 'When something feels tight, stop and do a silent yawn-sigh, then restart quietly on "ng" or a lip trill. If tension returns immediately at the same pitch, the cause is usually elsewhere — check breath support (Area 2) and whether you are pushing for volume.',
      produce: [
        '<strong>Release the jaw.</strong> Massage the muscle at the back of the jaw hinge with two fingers in small circles. Then let the jaw hang loose and make small chewing motions while sustaining an easy "ah" — the tone will wobble; that is fine, it proves the jaw is free.',
        '<strong>Free the tongue.</strong> Stick the tongue gently out and back a few times. Then sustain "ah" with the tongue tip resting against the lower front teeth throughout.',
        '<strong>Release the neck.</strong> Slow half-circles: ear towards one shoulder, roll the chin down across the chest, up to the other side. Never roll backwards.',
        '<strong>Yawn-sigh.</strong> Begin a real yawn, then let it turn into a soft descending sigh on voice. This releases jaw, tongue and larynx together and is the fastest reset there is.',
        '<strong>Re-test.</strong> Sing the phrase that felt tight. If it is now easier, the problem was interference, not capability.'
      ],
      check: [
        'You can sustain a note while gently wobbling the jaw with your hand — the pitch continues unaffected.',
        'Your tongue tip stays at the lower teeth through a five-note scale on "ah".',
        'No neck muscles visibly stand out when you sing at a comfortable volume.',
        'A yawn-sigh noticeably changes how open and easy the next note feels.',
        'Your jaw is not tired after twenty minutes of singing.'
      ],
      troubleshoot: [
        '<strong>Jaw aches after singing</strong> → you are opening with muscle rather than letting it drop. Chewing exercise, and think "release" not "open wide".',
        '<strong>Tone is swallowed or muffled</strong> → tongue root retraction. Keep the tip anchored at the lower teeth; practise on "ee" and "ah" alternately.',
        '<strong>Neck grips on high notes</strong> → almost always pushing. Halve the volume and approach the note from above with a light "yoo-hoo".',
        '<strong>Tension returns immediately after release</strong> → it is compensating for something. Look at breath support and volume, not at the neck.'
      ],
      myths: [
        '"Open your mouth as wide as possible for high notes." — Over-opening drags the jaw down, loads the tongue root and often makes things worse. Tall and released beats wide.',
        '"Tension means you need to strengthen those muscles." — The opposite: those muscles should not be involved at all. The work is release, not strength.'
      ],
      diagram: {
        id: 'dia-1-3',
        title: 'Where tension collects',
        type: 'anatomy',
        verified: false,
        caption: 'Three sites, all sitting directly around the larynx: jaw hinge, tongue root, and the neck strap muscles. Because the larynx is suspended from the hyoid bone and the jaw, tension at any of these transfers straight to the voice. None of them should be working to make pitch. Informational diagram — to be source-verified before ship.',
        svg: `<svg viewBox="0 0 720 230" role="img" aria-label="Three sites where tension affects the larynx" font-family="Inter,sans-serif">
          <path d="M330 40 C 250 40, 225 105, 250 150 L 250 200" fill="none" stroke="#8B8272" stroke-width="3"/>
          <circle cx="300" cy="70" r="16" fill="#C05A24" fill-opacity="0.25" stroke="#C05A24"/>
          <text x="330" y="66" font-size="12" font-weight="700" fill="#1E1B17">Jaw hinge</text>
          <text x="330" y="82" font-size="10.5" fill="#8B8272">clenching loads the whole sling</text>

          <ellipse cx="272" cy="118" rx="26" ry="12" fill="#C05A24" fill-opacity="0.25" stroke="#C05A24"/>
          <text x="330" y="114" font-size="12" font-weight="700" fill="#1E1B17">Tongue root</text>
          <text x="330" y="130" font-size="10.5" fill="#8B8272">retraction pulls the larynx and narrows the throat</text>

          <rect x="238" y="150" width="26" height="46" rx="6" fill="#C05A24" fill-opacity="0.25" stroke="#C05A24"/>
          <text x="330" y="166" font-size="12" font-weight="700" fill="#1E1B17">Neck straps</text>
          <text x="330" y="182" font-size="10.5" fill="#8B8272">gripping holds the larynx high</text>

          <circle cx="251" cy="160" r="9" fill="#1C6B85" fill-opacity="0.5"/>
          <text x="150" y="164" font-size="10.5" fill="#1C6B85" text-anchor="end">larynx</text>
          <line x1="155" y1="160" x2="240" y2="160" stroke="#1C6B85" stroke-width="1"/>
        </svg>`
      },
      exercises: [
        {
          id: 'ex-1-3-a',
          name: 'Jaw release with chewing "ah"',
          durationMins: 3,
          difficulty: 'Easy',
          ref: 'C3',
          pattern: [0],
          steps: [
            'Massage the jaw hinge with two fingers in small circles for 30 seconds each side.',
            'Let the jaw hang. Sustain an easy "ah" while making small chewing motions.',
            'The tone will wobble — that is the point; it proves the jaw is not gripping.',
            'Stop chewing and sustain again. Listen for a freer, more open sound.'
          ]
        },
        {
          id: 'ex-1-3-b',
          name: 'Yawn-sigh reset',
          durationMins: 2,
          difficulty: 'Easy',
          ref: 'G3',
          pattern: { type: 'glide', from: 7, to: -5 },
          steps: [
            'Begin a genuine yawn and feel the throat open and the larynx drop.',
            'Let the yawn turn into a soft, descending sigh on voice — high to low, completely unforced.',
            'Repeat three times, then sing the phrase that felt tight.',
            'Use this any time in practice when you notice gripping.'
          ]
        },
        {
          id: 'ex-1-3-c',
          name: 'Tongue-anchored scale',
          durationMins: 3,
          difficulty: 'Easy–moderate',
          ref: 'C3',
          pattern: [0, 2, 4, 2, 0],
          steps: [
            'Rest the tongue tip lightly against the back of the lower front teeth.',
            'Sing 1-2-3-2-1 on "ah", keeping the tip in contact the whole time.',
            'If the tip pulls away or the root bunches, slow down and reduce volume.',
            'Listen for the tone becoming clearer and less swallowed as the root stays free.'
          ]
        }
      ],
      videos: [
        {
          id: 'vid-1-3-nyvc',
          role: 'technique',
          coach: 'New York Vocal Coaching',
          title: 'NYVC Ep. 101 — The Greatest Vocal Exercise of All Time',
          youtubeId: 'h0SIEY_zNqU',
          displayMode: 'embed',
          available: true,
          lastChecked: '2026-07-25',
          topic: 'Semi-occluded work is the most reliable route to releasing tension without thinking about it.'
        },
        {
          id: 'vid-1-3-mech',
          role: 'mechanism',
          coach: 'Anatomy animation',
          title: 'Larynx — Ligaments, Membranes, Vocal Cords (3D Anatomy)',
          youtubeId: 'jqTKSorDRJo',
          displayMode: 'embed',
          available: true,
          lastChecked: '2026-07-25',
          topic: 'Shows how the larynx is suspended — making clear why jaw and tongue tension transfers to it.'
        }
      ]
    },

    /* ---------------------------------------------------------------- 1.4 */
    {
      id: 'hygiene',
      num: '1.4',
      title: 'Vocal hygiene',
      level: 'Foundational',
      logEnabled: true,
      desc: 'Keeping the instrument in working order — a knowledge section.',
      explain: 'The vocal folds are soft tissue that depends on being well hydrated, adequately rested and sensibly used. Vocal hygiene is unglamorous and makes more practical difference to your day-to-day voice than most technical work. This section is a checklist rather than a drill.',
      how: [
        '<strong>Hydration.</strong> The folds are covered in a thin mucous layer that lets the surface ripple freely during vibration. When you are dehydrated that layer thickens and the folds need noticeably more pressure to start and sustain a note — measurably so. Systemic hydration (drinking water over hours) is what matters; sipping immediately before singing does not reach the tissue in time. Steam inhalation is the one thing that hydrates the surface directly.',
        '<strong>Rest.</strong> Vocal fold tissue recovers from load during rest and sleep. Consecutive heavy days without recovery are how singers accumulate swelling and hoarseness.',
        '<strong>Load management.</strong> Total daily voice use matters, not just singing. A day of heavy talking, a noisy pub, or teaching all day leaves less capacity for practice than a quiet day does.',
        '<strong>Irritants.</strong> Smoking and vaping are the significant ones. Alcohol dehydrates and reduces the judgement that stops you over-singing. Reflux is a common and under-recognised cause of persistent morning hoarseness.',
        '<strong>Warm up and down.</strong> Warming up prepares the tissue for load; a brief warm-down after heavy use helps it return to baseline.'
      ],
      feel: 'A well-maintained voice feels ready — clear within a few notes in the morning, stable through a session, and recovered the next day. Needing a long "clearing" period each morning is a signal, not a normal state.',
      cues: [
        'Drink steadily through the day, not just before singing',
        'Steam for direct surface hydration when the voice feels tired or dry',
        'Treat total voice use as a daily budget, including speech',
        'Warm up before load and warm down after it'
      ],
      faults: [
        'Throat-clearing habitually — it slams the folds together and perpetuates the irritation that causes it',
        'Whispering to "rest" the voice — for many people this is more effortful than quiet speech',
        'Singing hard on consecutive days with no recovery',
        'Judging hydration by how the throat feels rather than by intake over hours'
      ],
      fix: 'Instead of clearing your throat, take a firm swallow or a silent sip of water. If the voice is tired, prefer genuine quiet or steam over whispering. If hoarseness is present most mornings, consider reflux and speak to a GP.',
      produce: [
        '<strong>Set a hydration baseline.</strong> Aim for steady water through the day so that urine is pale. Note that caffeine and alcohol work against this.',
        '<strong>Add steam when needed.</strong> A bowl of hot (not boiling) water, a towel over the head, five to ten minutes of easy breathing. Good after heavy use or in dry, heated rooms.',
        '<strong>Budget your voice.</strong> Look at the day ahead: heavy talking, a loud environment, a cold? Reduce the practice load accordingly rather than pushing through.',
        '<strong>Bookend practice.</strong> Warm up before, warm down after (descending sirens, soft hums, breath release for two to three minutes).',
        '<strong>Break the throat-clearing habit.</strong> Substitute a swallow or a sip each time you notice the urge; it usually fades within a fortnight.'
      ],
      check: [
        'Your voice is clear within a few notes of starting in the morning.',
        'You are not habitually clearing your throat.',
        'You can complete a normal practice session without progressive hoarseness.',
        'The voice has recovered by the next day after a heavy session.',
        'You know what your total voice load looks like on a given day, not just your singing.'
      ],
      troubleshoot: [
        '<strong>Persistent morning hoarseness</strong> → consider reflux, dehydration, or overnight mouth-breathing in a dry room. Worth a GP conversation if it continues.',
        '<strong>Voice tires quickly despite good technique</strong> → look at total daily load and sleep before adding more technical work.',
        '<strong>Constant need to clear the throat</strong> → often reflux or post-nasal drip. Substitute a swallow, and get it checked if it persists.',
        '<strong>Hoarseness lasting more than two weeks</strong> → stop guessing and see a doctor, ideally one who sees singers. See 1.5.'
      ],
      myths: [
        '"Sipping water while you sing lubricates the vocal folds." — Nothing you swallow touches them; it goes down the oesophagus. Hydration works systemically, over hours. Steam is the exception.',
        '"Whispering rests your voice." — For many people whispering involves as much or more laryngeal effort than quiet speech. Genuine silence rests the voice.',
        '"Honey and lemon heal the vocal folds." — Pleasant and soothing to the throat lining, but it does not reach or repair the folds.'
      ],
      diagram: {
        id: 'dia-1-4',
        title: 'The weekly load budget',
        type: 'process',
        verified: false,
        caption: 'Voice use is cumulative and includes speech, not just singing. A heavy day needs a lighter one after it; recovery is when tissue returns to baseline. Planning the week this way prevents the slow accumulation of swelling that presents as "my voice just is not working lately". Informational diagram — to be source-verified before ship.',
        svg: `<svg viewBox="0 0 720 200" role="img" aria-label="A week of vocal load with recovery days" font-family="Inter,sans-serif">
          <line x1="60" y1="150" x2="670" y2="150" stroke="#D6CDB8" stroke-width="1"/>
          <rect x="70" y="90" width="60" height="60" fill="#1C6B85" fill-opacity="0.5"/><text x="100" y="168" text-anchor="middle" font-size="11" fill="#8B8272">Mon</text>
          <rect x="155" y="60" width="60" height="90" fill="#C05A24" fill-opacity="0.55"/><text x="185" y="168" text-anchor="middle" font-size="11" fill="#8B8272">Tue</text>
          <rect x="240" y="125" width="60" height="25" fill="#1C6B85" fill-opacity="0.25"/><text x="270" y="168" text-anchor="middle" font-size="11" fill="#8B8272">Wed</text>
          <rect x="325" y="95" width="60" height="55" fill="#1C6B85" fill-opacity="0.5"/><text x="355" y="168" text-anchor="middle" font-size="11" fill="#8B8272">Thu</text>
          <rect x="410" y="55" width="60" height="95" fill="#C05A24" fill-opacity="0.55"/><text x="440" y="168" text-anchor="middle" font-size="11" fill="#8B8272">Fri</text>
          <rect x="495" y="130" width="60" height="20" fill="#1C6B85" fill-opacity="0.25"/><text x="525" y="168" text-anchor="middle" font-size="11" fill="#8B8272">Sat</text>
          <rect x="580" y="100" width="60" height="50" fill="#1C6B85" fill-opacity="0.5"/><text x="610" y="168" text-anchor="middle" font-size="11" fill="#8B8272">Sun</text>
          <text x="270" y="118" text-anchor="middle" font-size="10" fill="#1C6B85">recover</text>
          <text x="525" y="123" text-anchor="middle" font-size="10" fill="#1C6B85">recover</text>
          <text x="60" y="40" font-size="11" font-weight="700" fill="#1E1B17">Total voice load (speech + singing)</text>
          <text x="440" y="45" text-anchor="middle" font-size="10" fill="#C05A24">heavy day</text>
        </svg>`
      },
      exercises: [
        {
          id: 'ex-1-4-a',
          kind: 'checklist',
          name: 'Build your weekly hygiene checklist',
          durationMins: 10,
          difficulty: 'Knowledge',
          steps: [
            'Write down your typical week and mark each day as heavy, moderate or light for <em>total</em> voice use — including work, teaching, phone calls and social noise.',
            'Place your intended practice sessions where there is capacity, and put a genuinely light day after each heavy one.',
            'Set a hydration habit you will actually keep (a bottle on the desk, refilled a set number of times).',
            'Decide your warm-down: two to three minutes of descending sirens, soft hums and breath release after any heavy use.',
            'Note any current irritants — reflux, a dry bedroom, smoking, heavy caffeine — and pick one to address this month.'
          ]
        },
        {
          id: 'ex-1-4-b',
          kind: 'checklist',
          name: 'Replace the throat-clear',
          durationMins: 5,
          difficulty: 'Knowledge',
          steps: [
            'For one day, simply count how often you clear your throat.',
            'Each time you notice the urge, take a firm swallow or a silent sip of water instead.',
            'Note whether the urge is worse at particular times — mornings suggest reflux, evenings suggest accumulated load.',
            'Repeat for a fortnight; in most people the habit fades substantially.'
          ]
        }
      ],
      videos: [
        {
          id: 'vid-1-4-drdan',
          role: 'technique',
          coach: "Dr Dan's Voice Essentials",
          title: 'Warm Up the Singing Voice',
          youtubeId: 'Bontr0IqN0w',
          displayMode: 'embed',
          available: true,
          lastChecked: '2026-07-25',
          topic: 'Practical warm-up habit — the bookend that protects the voice under load.'
        },
        {
          id: 'vid-1-4-mech',
          role: 'mechanism',
          coach: 'Stroboscopy / voice science',
          title: 'Video Stroboscopy of the Vocal Cords',
          youtubeId: 'mJedwz_r2Pc',
          displayMode: 'embed',
          available: true,
          lastChecked: '2026-07-25',
          topic: 'Seeing healthy fold tissue and its mucosal wave makes clear why hydration matters so much.'
        }
      ]
    },

    /* ---------------------------------------------------------------- 1.5 */
    {
      id: 'warning-signs',
      num: '1.5',
      title: 'Warning signs & when to stop',
      level: 'Foundational',
      logEnabled: true,
      desc: 'Knowing the difference between normal fatigue and a red flag.',
      explain: 'Muscles ache after unfamiliar work, and mild vocal tiredness after a long session is normal. Certain signs are not, and knowing which is which protects you from doing real damage while practising diligently. This is a knowledge section: a checklist, not a drill.',
      how: [
        '<strong>Normal.</strong> Mild tiredness after a long or unaccustomed session that clears with rest and is gone by the next morning. Slight breathiness at the very top of your range when tired. A bit of muscular fatigue when learning a new coordination.',
        '<strong>Not normal — stop and reassess.</strong> Pain while singing (the folds themselves have limited pain sensation, so pain usually means you are recruiting muscles that should not be involved). A sudden loss of range or the ability to sing softly at pitch. Hoarseness that persists rather than clearing overnight.',
        '<strong>Red flags — seek medical advice.</strong> Hoarseness lasting more than two weeks without an obvious cold. Sudden voice loss. Pain on swallowing that persists. Coughing up blood. A lump in the neck. These warrant an ENT referral, not more practice.',
        'The mechanism behind most trouble is simple: repeated high-impact fold collision, usually from pushing volume or singing over illness, causes swelling. Swollen folds cannot vibrate freely at their edges, which is why the first casualty is quiet high singing — a useful early warning that appears before hoarseness does.'
      ],
      feel: 'Healthy effort feels like coordination. Unhealthy effort feels like force, gripping, rawness or pain. If you find yourself pushing to reach something you had yesterday, that is information, not a challenge.',
      cues: [
        'Losing quiet high notes first is the classic early sign of swelling',
        'Pain is never a normal part of singing — stop and diagnose',
        'Persistent hoarseness beyond two weeks needs a doctor, not more practice',
        'If in doubt, sing less today rather than more'
      ],
      faults: [
        'Pushing through hoarseness because a performance or a practice target is looming',
        'Singing hard during or straight after a cold, when the folds are already swollen',
        'Treating vocal pain as a sign of effort well spent',
        'Assuming any problem is technical when it may be tissue health'
      ],
      fix: 'If you notice the warning signs, reduce load immediately: no singing, minimal speech, no whispering, good hydration, and rest. Most mild swelling settles within a few days. If it does not, or if any red flag is present, see a doctor — ideally one with experience of singers.',
      produce: [
        '<strong>Run a daily check.</strong> At the start of practice, sing a quiet high note you know well. If it will not speak cleanly today but did yesterday, treat that as an early warning.',
        '<strong>Classify what you find.</strong> Normal tiredness (clears with rest), a caution (persists through the session, still there tomorrow), or a red flag (from the list above).',
        '<strong>Act on the category.</strong> Normal: carry on but lighten. Caution: stop singing for the day, rest the voice properly. Red flag: book a doctor.',
        '<strong>Do not whisper or throat-clear while recovering.</strong> Both add load precisely when you are trying to remove it.',
        '<strong>Return gradually.</strong> Come back with SOVT work (lip trills, straw) at low volume before anything demanding.'
      ],
      check: [
        'You can state the difference between normal fatigue and a caution sign.',
        'You know the red flags that mean "see a doctor" rather than "practise more".',
        'You have a daily quiet-high-note check you actually use.',
        'You are willing to stop a session early when the signs say so.',
        'You know not to whisper when resting the voice.'
      ],
      troubleshoot: [
        '<strong>Voice tired but no pain, clears overnight</strong> → normal load. Manage the weekly budget (1.4).',
        '<strong>Quiet high notes gone, tone still fine loud</strong> → likely mild swelling. Rest a day or two, return via SOVT.',
        '<strong>Pain or rawness during singing</strong> → stop now. This is not a technique to push through.',
        '<strong>Hoarse for more than two weeks</strong> → see a GP or ENT. Do not keep training through it.'
      ],
      myths: [
        '"No pain, no gain applies to singing." — It does not. Vocal pain signals misuse or injury, never productive training.',
        '"You can sing through a cold if you warm up properly." — Infected folds are already swollen and more vulnerable to injury. Light SOVT at most.',
        '"Losing your voice occasionally is just part of being a singer." — Repeated episodes are a pattern worth investigating, not a badge of honour.'
      ],
      diagram: {
        id: 'dia-1-5',
        title: 'Traffic-light check',
        type: 'process',
        verified: false,
        caption: 'A simple triage. Green: carry on. Amber: stop singing today, rest properly, reassess tomorrow. Red: seek medical advice rather than continuing to train. The single most useful early indicator is the loss of quiet high notes, which appears before obvious hoarseness. Informational diagram — to be source-verified before ship.',
        svg: `<svg viewBox="0 0 720 250" role="img" aria-label="Green amber and red vocal warning signs" font-family="Inter,sans-serif">
          <rect x="50" y="50" width="190" height="160" rx="8" fill="#1C6B85" fill-opacity="0.14" stroke="#1C6B85"/>
          <circle cx="75" cy="75" r="9" fill="#1C6B85"/>
          <text x="95" y="80" font-size="13" font-weight="700" fill="#1E1B17">Carry on</text>
          <text x="66" y="112" font-size="11" fill="#8B8272">mild tiredness after</text>
          <text x="66" y="130" font-size="11" fill="#8B8272">a long session</text>
          <text x="66" y="152" font-size="11" fill="#8B8272">clears with rest</text>
          <text x="66" y="174" font-size="11" fill="#8B8272">gone by morning</text>

          <rect x="265" y="50" width="190" height="160" rx="8" fill="#C05A24" fill-opacity="0.14" stroke="#C05A24"/>
          <circle cx="290" cy="75" r="9" fill="#C05A24" fill-opacity="0.6"/>
          <text x="310" y="80" font-size="13" font-weight="700" fill="#1E1B17">Stop today</text>
          <text x="281" y="112" font-size="11" fill="#8B8272">quiet high notes gone</text>
          <text x="281" y="130" font-size="11" fill="#8B8272">hoarse through session</text>
          <text x="281" y="152" font-size="11" fill="#8B8272">still hoarse next day</text>
          <text x="281" y="174" font-size="11" fill="#8B8272">gripping to make sound</text>

          <rect x="480" y="50" width="190" height="160" rx="8" fill="#C05A24" fill-opacity="0.3" stroke="#C05A24"/>
          <circle cx="505" cy="75" r="9" fill="#C05A24"/>
          <text x="525" y="80" font-size="13" font-weight="700" fill="#1E1B17">See a doctor</text>
          <text x="496" y="112" font-size="11" fill="#8B8272">hoarse over 2 weeks</text>
          <text x="496" y="130" font-size="11" fill="#8B8272">pain when singing</text>
          <text x="496" y="152" font-size="11" fill="#8B8272">sudden voice loss</text>
          <text x="496" y="174" font-size="11" fill="#8B8272">lump / blood / swallowing pain</text>

          <text x="360" y="235" text-anchor="middle" font-size="11" fill="#8B8272">Loss of quiet high notes is the earliest reliable warning</text>
        </svg>`
      },
      exercises: [
        {
          id: 'ex-1-5-a',
          kind: 'checklist',
          name: 'Daily voice check',
          durationMins: 3,
          difficulty: 'Knowledge',
          steps: [
            'Pick one quiet high note you can normally sing easily — this is your reference.',
            'At the start of each practice, sing it softly. Note whether it speaks cleanly.',
            'If it will not speak today but did yesterday, treat that as early swelling: lighten or stop.',
            'Record the result in your practice log so you can see patterns over weeks.'
          ]
        },
        {
          id: 'ex-1-5-b',
          kind: 'checklist',
          name: 'Know your red flags',
          durationMins: 5,
          difficulty: 'Knowledge',
          steps: [
            'Write the three categories somewhere you will see them: carry on, stop today, see a doctor.',
            'Learn the red flags specifically: hoarseness beyond two weeks, sudden voice loss, persistent pain on swallowing, coughing blood, a neck lump.',
            'Decide in advance what you will do if you hit an amber day during a busy week — the decision is easier made now than in the moment.',
            'Find out where your nearest ENT service is, so you are not researching it while worried.'
          ]
        }
      ],
      videos: [
        {
          id: 'vid-1-5-drdan',
          role: 'technique',
          coach: "Dr Dan's Voice Essentials",
          title: 'Turbocharge Your Vocal Practice',
          youtubeId: 'aI_r-yUvMd8',
          displayMode: 'embed',
          available: true,
          lastChecked: '2026-07-25',
          topic: 'Sensible practice structure — the best protection against overload is a well-planned session.'
        },
        {
          id: 'vid-1-5-mech',
          role: 'mechanism',
          coach: 'Stroboscopy / voice science',
          title: 'Vibration of the Vocal Folds',
          youtubeId: 'kfkFTw3sBXQ',
          displayMode: 'embed',
          available: true,
          lastChecked: '2026-07-25',
          topic: 'Seeing the delicate mucosal wave shows why swelling stops quiet high singing first.'
        }
      ]
    }
  ]
}
