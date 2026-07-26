/* Vocali — Area 2: Breath & Support.
   Written to the content standard. Reference pitches suit a TENOR/BARITONE. */

export const breath = {
  id: 'breath',
  n: '02',
  title: 'Breath & Support',
  group: 'Foundation',
  order: 2,
  lede: 'The power supply. Not "more air" but steadier air — learning to meter a controlled stream of pressure so the folds can do their job without the throat interfering.',
  intro: 'Breathing for singing differs from breathing for life in one respect: the out-breath has to be long, even and controlled rather than a passive collapse. Everything in this area serves that single aim. The word <em>support</em> causes endless confusion, so it is worth stating plainly at the outset: support is not pushing. It is the balanced management of the recoil forces that want to empty your lungs, so that air leaves at the rate the note needs and no faster. Get this right and a surprising number of "throat problems" disappear, because the throat was compensating for unsteady air all along.',

  videos: [
    {
      id: 'vid-b-area-mech',
      role: 'mechanism',
      coach: 'Anatomy animation',
      title: 'Mechanism of Breathing, Animation',
      youtubeId: 'wc2K1Olt4Q8',
      displayMode: 'embed',
      available: true,
      lastChecked: '2026-07-25',
      topic: 'Orientation: what the diaphragm and ribs actually do on the in-breath and the out-breath.'
    },
    {
      id: 'vid-b-area-diaph',
      role: 'mechanism',
      coach: 'Anatomy animation',
      title: 'The Movement of the Diaphragm (3D Anatomy)',
      youtubeId: 'Y0W_sueD3Gc',
      displayMode: 'embed',
      available: true,
      lastChecked: '2026-07-25',
      topic: 'The dome flattening downward — the movement that produces the belly release you are asked to feel.'
    }
  ],

  diagram: {
    id: 'dia-b-area',
    title: 'Inhale and exhale — what moves',
    type: 'mechanism',
    verified: false,
    caption: 'Inhale: the diaphragm contracts and flattens downward while the ribs swing out, enlarging the chest so air is drawn in — the belly moves out because the descending diaphragm displaces the contents of the abdomen. Exhale: the diaphragm releases upward and elastic recoil drives air out. Singing means managing that recoil so it releases slowly and evenly. Informational diagram — to be source-verified before ship.',
    svg: `<svg viewBox="0 0 720 260" role="img" aria-label="Diaphragm and ribcage on inhalation compared with exhalation" font-family="Inter,sans-serif">
      <text x="180" y="30" text-anchor="middle" font-size="13" font-weight="700" fill="#1C6B85">INHALE</text>
      <path d="M110 60 L110 150 M250 60 L250 150" stroke="#8B8272" stroke-width="2"/>
      <path d="M105 75 Q180 60 255 75 M105 100 Q180 85 255 100 M105 125 Q180 110 255 125" stroke="#8B8272" stroke-width="2" fill="none"/>
      <path d="M110 155 Q180 178 250 155" fill="none" stroke="#1C6B85" stroke-width="4"/>
      <path d="M180 185 L180 210" stroke="#1C6B85" stroke-width="2" marker-end="url(#a2)"/>
      <text x="180" y="232" text-anchor="middle" font-size="11" fill="#8B8272">diaphragm flattens down</text>
      <text x="180" y="248" text-anchor="middle" font-size="11" fill="#8B8272">ribs swing out · belly releases</text>

      <text x="540" y="30" text-anchor="middle" font-size="13" font-weight="700" fill="#C05A24">EXHALE</text>
      <path d="M470 60 L470 150 M610 60 L610 150" stroke="#8B8272" stroke-width="2"/>
      <path d="M472 78 Q540 68 608 78 M472 103 Q540 93 608 103 M472 128 Q540 118 608 128" stroke="#8B8272" stroke-width="2" fill="none"/>
      <path d="M470 150 Q540 118 610 150" fill="none" stroke="#C05A24" stroke-width="4"/>
      <path d="M540 205 L540 180" stroke="#C05A24" stroke-width="2" marker-end="url(#a2)"/>
      <text x="540" y="232" text-anchor="middle" font-size="11" fill="#8B8272">diaphragm releases up</text>
      <text x="540" y="248" text-anchor="middle" font-size="11" fill="#8B8272">recoil drives air out — meter it</text>

      <defs><marker id="a2" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0 0 L8 4 L0 8 z" fill="#1C6B85"/></marker></defs>
    </svg>`
  },

  sections: [
    /* ---------------------------------------------------------------- 2.1 */
    {
      id: 'mechanics',
      num: '2.1',
      title: 'Breathing mechanics',
      level: 'Foundational',
      logEnabled: true,
      desc: 'A low, silent, unhurried breath that fills without lifting.',
      explain: 'A singer\'s breath is low, quiet and taken without visible effort. The ribs expand outward and the belly releases; the shoulders do not rise. This is not a special technique so much as the way you already breathe when lying asleep — the work is removing the habits that have replaced it.',
      how: [
        'The <strong>diaphragm</strong> is a dome of muscle separating the chest from the abdomen. When it contracts it flattens <em>downward</em>, enlarging the chest cavity and lowering the pressure inside so air flows in. Because the abdominal contents have to go somewhere, they move forward and outward — which is why the belly appears to expand. That is the whole of the mystery: your belly does not "fill with air".',
        'The <strong>external intercostals</strong> between the ribs swing them up and out, widening the ribcage front-to-back and side-to-side. A great deal of useful expansion happens at the <em>back</em> and sides of the lower ribs, which most people never notice.',
        'The <strong>accessory muscles</strong> in the neck and upper chest can also raise the ribcage. They are meant for gasping and exertion. When used habitually for singing they lift the shoulders, tighten the neck, and put load right next to the larynx — clavicular breathing, and the commonest fault of all.',
        'Crucially the diaphragm is an <em>inhaling</em> muscle. It cannot push air out. When people say "support from the diaphragm" what actually happens on the out-breath is a controlled resistance to its release, which is covered in 2.2.'
      ],
      feel: 'Cool air arriving low and easily, with a sense of the waist widening all the way round — front, sides and back. The shoulders stay still. There should be no sensation of grabbing or filling up.',
      cues: [
        'Breathe as though smelling something faintly pleasant — low and unhurried',
        'Let the belly release outward rather than pulling it in',
        'Feel the lower ribs widen at the sides and back, not just the front',
        'Keep the shoulders completely still — if they rise, the breath is too high'
      ],
      faults: [
        'Shoulders lifting on the in-breath (clavicular breathing) — puts tension beside the larynx',
        'Sucking the belly in while inhaling, which fights the diaphragm directly',
        'Taking a huge, noisy gasp — a full tank is neither necessary nor comfortable',
        'An audible in-breath, which means the throat is narrowed'
      ],
      fix: 'If the shoulders rise, lie on your back with a hand on the belly and breathe until the low pattern returns; the supine position makes clavicular breathing almost impossible. If the breath is noisy, open the throat as though beginning a yawn and let the air fall in rather than pulling it.',
      produce: [
        '<strong>Lie down first.</strong> On your back, knees bent, one hand on the belly and one on the ribs. Breathe normally and simply notice: the belly rises, the shoulders do not. This is the pattern you are after.',
        '<strong>Take it upright.</strong> Standing, keep the hands in place. Breathe in low and silently for four counts. The belly hand should move out; the shoulders should be still.',
        '<strong>Find the back and sides.</strong> Put your hands on your lower ribs, thumbs pointing backwards, and breathe into your hands. Feel the ribs widen sideways and behind — this is the expansion most singers miss.',
        '<strong>Silence it.</strong> If you can hear the in-breath, it is too fast or the throat is narrow. Think of the beginning of a yawn and let the air arrive rather than pulling it.',
        '<strong>Do not over-fill.</strong> Take a comfortable breath, not a maximum one. Over-filling creates pressure you then have to fight.'
      ],
      check: [
        'You can take a full breath with no shoulder movement at all.',
        'The in-breath is silent.',
        'You feel expansion at the sides and back of the lower ribs, not only the front.',
        'The breath feels unhurried even when the phrase is about to be long.',
        'You are not left feeling stuffed or braced after inhaling.'
      ],
      troubleshoot: [
        '<strong>Shoulders rise every time</strong> → practise lying down until the low pattern is automatic, then transfer to standing.',
        '<strong>In-breath is noisy</strong> → the throat is narrowed. Begin a yawn and let the air fall in.',
        '<strong>Feel tight after inhaling</strong> → over-filled. Take about three-quarters of what you think you need.',
        '<strong>Belly does not move</strong> → you may be holding the abdomen in. Release it deliberately; check it is not a postural habit.'
      ],
      myths: [
        '"Breathe into your belly." — Air only goes to the lungs. The belly moves because the descending diaphragm displaces the abdominal contents. The cue is useful, the anatomy is not literal.',
        '"Take the biggest breath you can before a long phrase." — Over-filling raises pressure and usually causes a rushed, pressed start. Steady beats full.',
        '"You breathe with your diaphragm when singing out." — The diaphragm is an inhaling muscle. On the out-breath you are managing its release, not driving with it.'
      ],
      mechanismDiagram: {
        id: 'dia-2-1b',
        title: 'Three breathing patterns',
        type: 'process',
        verified: false,
        caption: 'Clavicular (high): shoulders lift, little volume gained, tension delivered straight to the neck and larynx. Thoracic (mid): ribs only, moderate and common. Low/costal-diaphragmatic: ribs widen and the diaphragm descends, giving the largest, quietest and most controllable breath. The third is what singing wants. Informational diagram — to be source-verified before ship.',
        svg: `<svg viewBox="0 0 720 200" role="img" aria-label="Clavicular, thoracic and diaphragmatic breathing compared" font-family="Inter,sans-serif">
          <text x="120" y="28" text-anchor="middle" font-size="12" font-weight="700" fill="#C05A24">Clavicular</text>
          <rect x="80" y="45" width="80" height="26" rx="4" fill="#C05A24" fill-opacity="0.5"/>
          <rect x="80" y="76" width="80" height="26" rx="4" fill="#C05A24" fill-opacity="0.12"/>
          <rect x="80" y="107" width="80" height="26" rx="4" fill="#C05A24" fill-opacity="0.08"/>
          <text x="120" y="158" text-anchor="middle" font-size="10.5" fill="#8B8272">shoulders lift</text>
          <text x="120" y="174" text-anchor="middle" font-size="10.5" fill="#8B8272">tension at the neck</text>

          <text x="360" y="28" text-anchor="middle" font-size="12" font-weight="700" fill="#8B8272">Thoracic</text>
          <rect x="320" y="45" width="80" height="26" rx="4" fill="#1C6B85" fill-opacity="0.12"/>
          <rect x="320" y="76" width="80" height="26" rx="4" fill="#1C6B85" fill-opacity="0.45"/>
          <rect x="320" y="107" width="80" height="26" rx="4" fill="#1C6B85" fill-opacity="0.12"/>
          <text x="360" y="158" text-anchor="middle" font-size="10.5" fill="#8B8272">ribs only</text>
          <text x="360" y="174" text-anchor="middle" font-size="10.5" fill="#8B8272">workable, limited</text>

          <text x="600" y="28" text-anchor="middle" font-size="12" font-weight="700" fill="#1C6B85">Low / diaphragmatic</text>
          <rect x="560" y="45" width="80" height="26" rx="4" fill="#1C6B85" fill-opacity="0.1"/>
          <rect x="560" y="76" width="80" height="26" rx="4" fill="#1C6B85" fill-opacity="0.4"/>
          <rect x="560" y="107" width="80" height="26" rx="4" fill="#1C6B85" fill-opacity="0.7"/>
          <text x="600" y="158" text-anchor="middle" font-size="10.5" fill="#8B8272">ribs widen, belly releases</text>
          <text x="600" y="174" text-anchor="middle" font-size="10.5" fill="#1C6B85">quiet, large, controllable</text>
        </svg>`
      },
      exercises: [
        {
          id: 'ex-2-1-a',
          name: 'Silent low breath',
          durationMins: 4,
          difficulty: 'Easy',
          ref: 'C3',
          pattern: [0],
          steps: [
            'One hand on the belly, one on the lower ribs.',
            'Breathe in silently through a slightly open mouth for four slow counts. The belly hand moves out; the shoulders stay still.',
            'Let the air out on a quiet "fff" for eight counts, keeping the ribs wide as long as you can.',
            'Repeat six times. Listen for silence on the in-breath — noise means a narrowed throat.'
          ]
        },
        {
          id: 'ex-2-1-b',
          name: 'Hands on the back ribs',
          durationMins: 3,
          difficulty: 'Easy',
          ref: 'C3',
          pattern: [0],
          steps: [
            'Place your hands on the lower ribs with thumbs pointing backwards.',
            'Breathe in and aim the expansion into your hands — sideways and behind, not forward.',
            'Hold the width for a moment, then exhale slowly on "sss" while trying to keep the ribs wide.',
            'This rib-width-while-exhaling sensation is the beginning of support (2.2).'
          ]
        }
      ],
      videos: [
        {
          id: 'vid-2-1-nyvc',
          role: 'technique',
          coach: 'New York Vocal Coaching',
          title: 'NYVC Ep. 1 — 4 Breathing Types',
          youtubeId: 'mDQoMyPmg9s',
          displayMode: 'embed',
          available: true,
          lastChecked: '2026-07-25',
          topic: 'Compares the breathing patterns directly, including the clavicular fault described above.'
        },
        {
          id: 'vid-2-1-mech',
          role: 'mechanism',
          coach: 'Anatomy animation',
          title: 'What Happens When You Breathe? How The Lungs Work',
          youtubeId: 'HCoD0Pfq7B8',
          displayMode: 'embed',
          available: true,
          lastChecked: '2026-07-25',
          topic: 'The underlying mechanics — pressure, volume and why the belly moves at all.'
        }
      ]
    },

    /* ---------------------------------------------------------------- 2.2 */
    {
      id: 'support',
      num: '2.2',
      title: 'Breath management across a phrase',
      level: 'Foundational',
      logEnabled: true,
      desc: 'Support — metering the air so it lasts and stays steady.',
      explain: 'Support is the balanced management of the out-breath: resisting the natural collapse of the ribcage just enough that air leaves evenly and at the rate the note requires. It is a suspension, not a push. Done well it makes phrases longer, tone steadier and the throat redundant as a regulator.',
      how: [
        'After you inhale, elastic recoil in the lungs and ribcage wants to expel the air quickly. Left unmanaged that gives a strong start to a phrase and nothing at the end — which is why untrained singers run out of air and then squeeze at the throat to keep going.',
        '<strong>Support</strong> is the antagonistic balance between the muscles that keep the ribs expanded (chiefly the external intercostals) and the abdominal muscles that gradually control the diaphragm\'s return. The classical term is <em>appoggio</em>, meaning "to lean". The sensation is one of leaning against the out-breath rather than driving it.',
        'The practical target is <em>even subglottic pressure</em>. The folds vibrate best against a steady pressure; when pressure surges the tone goes loud and sharp, and when it collapses the tone goes breathy and flat. Almost all "wobbly tone" and "going flat at the end of phrases" is pressure management, not pitch perception.',
        'Notice what support is <em>not</em>: it is not pushing the belly out hard, nor gripping the abdomen, nor forcing more air. Any of those raise pressure and cause the very pressed tone you are trying to avoid.'
      ],
      feel: 'A gentle sense of the lower ribs staying wide as you sing, and the abdominal wall moving in slowly and steadily rather than collapsing at once. It should feel like restraint, not exertion — closer to easing a heavy door shut than pushing it open.',
      cues: [
        'Keep the ribs wide for as long as the phrase lasts',
        'Let the abdominal wall come in slowly and evenly — never snap it in',
        'Think of leaning against the breath rather than pushing it out',
        'Steady is the goal: same pressure at the end of the phrase as at the start'
      ],
      faults: [
        'Collapsing the ribs immediately, so all the air goes in the first two seconds',
        'Pushing or bearing down, which raises pressure and presses the tone',
        'Holding the breath rigidly rather than metering it — a locked, stiff sound',
        'Going flat and breathy at the end of long phrases as pressure fails'
      ],
      fix: 'If phrases die at the end, work the "sss" count exercise and extend it a little each week. If the tone is pressed, you are pushing rather than suspending — halve the effort and let the ribs do the work. If the tone is stiff, you are holding rather than flowing; keep the air genuinely moving.',
      produce: [
        '<strong>Establish the low breath.</strong> Take a comfortable, silent, low breath (2.1) — about three-quarters full.',
        '<strong>Suspend for a moment.</strong> At the top of the breath, pause briefly without closing the throat. Feel the ribs wide and the body poised.',
        '<strong>Meter it out.</strong> Exhale on a steady "sss", aiming for an absolutely unvarying hiss. Any wobble in the hiss is a wobble in the pressure.',
        '<strong>Keep the ribs wide.</strong> As you exhale, resist the ribcage collapsing. The abdominal wall moves in gradually; the ribs stay open much longer than feels natural.',
        '<strong>Transfer to voice.</strong> Do the same on a sustained "ah" at moderate volume. The tone should be as steady as the hiss was.',
        '<strong>Extend gradually.</strong> Count how long you can hold a steady "sss". Add a second or two each week — do not chase a big number by straining.'
      ],
      check: [
        'A "sss" can be held completely steadily for at least 15–20 seconds.',
        'The lower ribs stay wide well into the phrase, not collapsing at the start.',
        'A sustained note does not go flat or breathy at the end.',
        'You are not squeezing the throat to make the last words of a phrase.',
        'The effort feels like restraint, not exertion.'
      ],
      troubleshoot: [
        '<strong>Run out of air early</strong> → the ribs are collapsing at the start. Keep them wide; meter the release.',
        '<strong>Tone is pressed and harsh</strong> → you are pushing, not suspending. Reduce effort by half.',
        '<strong>Tone is stiff and inflexible</strong> → you are holding the breath. Keep the air genuinely flowing.',
        '<strong>Pitch drops at the end of phrases</strong> → pressure falling away. This is a support problem, not an ear problem.'
      ],
      myths: [
        '"Support means pushing hard from the stomach." — Pushing raises pressure and presses the tone. Support is controlled resistance to collapse.',
        '"You need a huge breath for a long phrase." — Efficiency matters far more than volume. A well-managed three-quarter breath beats a badly managed full one.',
        '"If you run out of air you have small lungs." — Almost always it is leak-rate, not capacity: air escaping faster than the note needs.'
      ],
      diagram: {
        id: 'dia-2-2',
        title: 'Air use across a phrase',
        type: 'process',
        verified: false,
        caption: 'Unsupported (orange): recoil dumps most of the air in the first seconds, so the phrase dies and the throat takes over to finish it. Supported (teal): the same breath is metered evenly, so pressure at the last word matches the first. The goal is the straight line, not the bigger breath. Informational diagram — to be source-verified before ship.',
        svg: `<svg viewBox="0 0 720 230" role="img" aria-label="Air remaining across a phrase, unsupported versus supported" font-family="Inter,sans-serif">
          <line x1="70" y1="180" x2="670" y2="180" stroke="#D6CDB8" stroke-width="1"/>
          <line x1="70" y1="40" x2="70" y2="180" stroke="#D6CDB8" stroke-width="1"/>
          <text x="62" y="46" text-anchor="end" font-size="11" fill="#8B8272">air</text>
          <text x="660" y="200" text-anchor="end" font-size="11" fill="#8B8272">time through the phrase →</text>
          <path d="M70 50 C 150 140, 260 172, 400 178" fill="none" stroke="#C05A24" stroke-width="3"/>
          <text x="250" y="130" font-size="11" fill="#C05A24">unsupported — gone early</text>
          <line x1="400" y1="178" x2="400" y2="40" stroke="#C05A24" stroke-width="1" stroke-dasharray="4 4"/>
          <text x="408" y="60" font-size="10.5" fill="#C05A24">throat takes over here</text>
          <path d="M70 50 L 640 176" fill="none" stroke="#1C6B85" stroke-width="3"/>
          <text x="470" y="140" font-size="11" fill="#1C6B85">supported — even release</text>
        </svg>`
      },
      exercises: [
        {
          id: 'ex-2-2-a',
          name: 'Steady "sss" count',
          durationMins: 5,
          difficulty: 'Easy',
          ref: 'C3',
          pattern: [0],
          steps: [
            'Set the metronome to 60 bpm in the practice bar.',
            'Take a comfortable low breath and exhale on "sss", counting the beats.',
            'The hiss must be perfectly even — a wobble means the pressure wobbled. Stop when it becomes unsteady, not when you are empty.',
            'Note the count. Repeat three times, then log the best. Add a beat or two per week rather than straining for a record.'
          ]
        },
        {
          id: 'ex-2-2-b',
          name: 'Ribs-wide sustain',
          durationMins: 4,
          difficulty: 'Moderate',
          ref: 'C3',
          pattern: [0],
          steps: [
            'Hands on the lower ribs. Breathe in low and feel them widen.',
            'Sing a sustained "ah" at moderate volume, deliberately keeping the ribs wide as long as you can.',
            'Let the abdominal wall come in slowly and evenly underneath.',
            'Listen for a tone that is as steady at the end as at the start, with no drop in pitch.'
          ]
        },
        {
          id: 'ex-2-2-c',
          name: 'Phrase to the end',
          durationMins: 4,
          difficulty: 'Moderate',
          ref: 'D3',
          pattern: [0, 2, 4, 5, 4, 2, 0],
          steps: [
            'Choose a phrase from a song that usually runs you out of air.',
            'Sing it on "ah" first, metering the breath so the last note is as strong as the first.',
            'Then sing it with the words, keeping the same management.',
            'If the end still fails, the problem is the first two seconds — you are spending too much there.'
          ]
        }
      ],
      videos: [
        {
          id: 'vid-2-2-nyvc',
          role: 'technique',
          coach: 'New York Vocal Coaching',
          title: 'NYVC Ep. 62 — Running Out Of Breath',
          youtubeId: 'Wd8tHaAruiw',
          displayMode: 'embed',
          available: true,
          lastChecked: '2026-07-25',
          topic: 'Directly addresses the leak-rate problem: it is rarely capacity, almost always management.'
        },
        {
          id: 'vid-2-2-mech',
          role: 'mechanism',
          coach: 'Anatomy animation',
          title: 'Diaphragm — 3D Medical Animation',
          youtubeId: '23-KAubf-js',
          displayMode: 'embed',
          available: true,
          lastChecked: '2026-07-25',
          topic: 'What the diaphragm is doing while you "support" — and why it cannot push air out.'
        }
      ]
    },

    /* ---------------------------------------------------------------- 2.3 */
    {
      id: 'airflow',
      num: '2.3',
      title: 'Airflow control',
      level: 'Foundational',
      logEnabled: true,
      desc: 'Matching the air to the note — no more, no less.',
      explain: 'Different notes and different volumes need different amounts of air. Too much and the tone is breathy and the folds are blown apart; too little and it is thin and pressed. Airflow control is the fine adjustment that sits on top of support, and semi-occluded exercises are the most efficient way to train it.',
      how: [
        'The folds vibrate best when airflow and closure are balanced. Excess air with insufficient closure produces a breathy tone and wastes breath. Excess closure with insufficient air produces a pressed, tight tone. The efficient middle is sometimes called <em>flow phonation</em>, and it produces the most sound for the least effort.',
        '<strong>Semi-occluded vocal tract (SOVT)</strong> exercises — lip trills, straw phonation, humming, "ng" — partially block the airway at the lips or a straw. This creates back-pressure above the folds, which reduces the pressure difference across them and helps them vibrate with less collision force. The result is that the balanced coordination happens largely by itself.',
        'SOVT work is therefore both a training tool and a repair tool: it is what to reach for when warming up, when tired, and when a coordination has gone wrong and you need to reset without adding load.',
        'Note the counter-intuitive part: higher and louder notes generally need <em>more closure</em> and only moderately more air, not simply "more air". Pushing air at a high note is one of the reliable ways to make it worse.'
      ],
      feel: 'A sense that the sound is being made easily, with air converting into tone rather than escaping past it. On a straw or a lip trill you should feel a gentle back-pressure at the lips and a buzzing that stays even.',
      cues: [
        'Aim for the most sound with the least air, not the most air',
        'Use lip trills or a straw to find the balance without forcing it',
        'For high notes think "more closure and brightness", not "more air"',
        'Keep the airflow constant — surges are heard as bumps in the tone'
      ],
      faults: [
        'Blowing air at the note, especially high ones — breathy, wasteful and unstable',
        'A breathy tone that empties the lungs long before the phrase ends',
        'Pressing to avoid breathiness, which swings too far the other way',
        'Uneven flow producing lumps and surges through a sustained note'
      ],
      fix: 'If the tone is breathy, add a gentle "g" or "b" onset to bring the folds together and reduce the air. If the tone is pressed, return to lip trills or a straw for a minute and then re-approach; the back-pressure re-balances it without you having to manage it consciously.',
      produce: [
        '<strong>Start on a straw.</strong> Phonate a comfortable note through a narrow straw (a stirrer is ideal). Feel the gentle back-pressure and the steady buzz.',
        '<strong>Glide on the straw.</strong> Slide gently up and down through your range. Note how easily the transitions happen when the pressure is balanced for you.',
        '<strong>Transfer to a lip trill.</strong> Same glides on a lip trill. If the trill stops, you are either using too much air or too little — adjust until it runs evenly.',
        '<strong>Open to a vowel.</strong> Start on the trill and open mid-note to "ah", trying to keep exactly the same ease and airflow.',
        '<strong>Test the extremes.</strong> Deliberately sing one note too breathy, then too pressed, then find the middle. Knowing both edges makes the centre obvious.'
      ],
      check: [
        'You can sustain a note with a clear, non-breathy tone that does not feel pressed.',
        'A lip trill runs evenly for the whole phrase without stopping.',
        'You can open from a trill to a vowel without the tone changing character.',
        'You can hear and reproduce the difference between breathy, balanced and pressed on demand.',
        'You are not running out of air on ordinary phrases.'
      ],
      troubleshoot: [
        '<strong>Lip trill keeps stopping</strong> → usually too little airflow or tense lips. Support the lips lightly with two fingers at the cheeks and keep the air moving.',
        '<strong>Tone breathy however hard you try</strong> → closure, not air. Use "g"/"b" onsets; see also 3.3.',
        '<strong>Tone pressed and hard</strong> → too much closure or pressure. Reset on the straw, then re-approach quieter.',
        '<strong>Fine on SOVT, bad on vowels</strong> → transfer gradually: alternate one bar of trill, one bar of vowel, and keep the sensation the same.'
      ],
      myths: [
        '"High notes need lots more air." — They need better closure and resonance. Extra air blows the folds apart and destabilises them.',
        '"A breathy tone is a stylistic choice, so it does not matter." — As a deliberate colour it is fine; as a default it wastes breath and reduces stamina.',
        '"Straws and lip trills are just silly warm-ups." — They are among the best-evidenced tools in voice training precisely because of the back-pressure effect.'
      ],
      diagram: {
        id: 'dia-2-3',
        title: 'The airflow–closure balance',
        type: 'process',
        verified: false,
        caption: 'Too much air with too little closure gives a breathy, wasteful tone; too much closure with too little air gives a pressed, tight one. The efficient middle produces the most sound for the least effort — and semi-occluded exercises steer you into it automatically. Informational diagram — to be source-verified before ship.',
        svg: `<svg viewBox="0 0 720 200" role="img" aria-label="Balance between airflow and vocal fold closure" font-family="Inter,sans-serif">
          <rect x="70" y="80" width="200" height="40" rx="4" fill="#C05A24" fill-opacity="0.22"/>
          <rect x="270" y="80" width="180" height="40" rx="4" fill="#1C6B85" fill-opacity="0.5"/>
          <rect x="450" y="80" width="200" height="40" rx="4" fill="#C05A24" fill-opacity="0.22"/>
          <text x="170" y="105" text-anchor="middle" font-size="12" font-weight="700" fill="#1E1B17">Breathy</text>
          <text x="360" y="105" text-anchor="middle" font-size="12" font-weight="700" fill="#fff">Balanced</text>
          <text x="550" y="105" text-anchor="middle" font-size="12" font-weight="700" fill="#1E1B17">Pressed</text>
          <text x="170" y="146" text-anchor="middle" font-size="10.5" fill="#8B8272">much air · little closure</text>
          <text x="360" y="146" text-anchor="middle" font-size="10.5" fill="#1C6B85">most sound, least effort</text>
          <text x="550" y="146" text-anchor="middle" font-size="10.5" fill="#8B8272">little air · much closure</text>
          <text x="360" y="52" text-anchor="middle" font-size="11" fill="#8B8272">SOVT (straw, lip trill, hum) pushes you towards the middle</text>
          <path d="M170 165 L340 128" stroke="#1C6B85" stroke-width="1.5" marker-end="url(#a3)"/>
          <path d="M550 165 L380 128" stroke="#1C6B85" stroke-width="1.5" marker-end="url(#a3)"/>
          <defs><marker id="a3" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0 0 L8 4 L0 8 z" fill="#1C6B85"/></marker></defs>
        </svg>`
      },
      exercises: [
        {
          id: 'ex-2-3-a',
          name: 'Straw phonation glides',
          durationMins: 5,
          difficulty: 'Easy',
          ref: 'C3',
          pattern: { type: 'glide', from: 0, to: 12, andBack: true },
          steps: [
            'Phonate through a narrow straw on a comfortable note.',
            'Glide gently up and down through your range, keeping the buzz even.',
            'Feel the back-pressure at the lips; notice how easily the transitions happen.',
            'Listen for a steady, unbroken sound — any bump means a surge of air.'
          ]
        },
        {
          id: 'ex-2-3-b',
          name: 'Trill-to-vowel transfer',
          durationMins: 4,
          difficulty: 'Moderate',
          ref: 'C3',
          pattern: [0, 4, 7, 4, 0],
          steps: [
            'Sing 1-3-5-3-1 on a lip trill.',
            'Repeat, but open to "ah" halfway up, keeping exactly the same airflow and ease.',
            'Alternate trill and vowel until the vowel version feels as effortless as the trill.',
            'Listen for the vowel version keeping the trill\'s steadiness rather than getting pushy.'
          ]
        },
        {
          id: 'ex-2-3-c',
          name: 'Three-way comparison',
          durationMins: 3,
          difficulty: 'Easy',
          ref: 'D3',
          pattern: [0, 0, 0],
          steps: [
            'On one comfortable pitch, sing "ah" deliberately breathy.',
            'Then deliberately pressed and tight.',
            'Then find the middle — clear but not squeezed.',
            'Learning both edges makes the balanced centre easy to locate later.'
          ]
        }
      ],
      videos: [
        {
          id: 'vid-2-3-nyvc',
          role: 'technique',
          coach: 'New York Vocal Coaching',
          title: 'NYVC Ep. 101 — The Greatest Vocal Exercise of All Time',
          youtubeId: 'h0SIEY_zNqU',
          displayMode: 'embed',
          available: true,
          lastChecked: '2026-07-25',
          topic: 'The case for semi-occluded work, and how to do it properly.'
        },
        {
          id: 'vid-2-3-mech',
          role: 'mechanism',
          coach: 'Stroboscopy / voice science',
          title: 'Vocal Folds in Action! Larynx Stroboscope Demo',
          youtubeId: 'vffHy6r7FlA',
          displayMode: 'embed',
          available: true,
          lastChecked: '2026-07-25',
          topic: 'Watch the closure itself — what "breathy" and "pressed" actually look like at the folds.'
        }
      ]
    },

    /* ---------------------------------------------------------------- 2.4 */
    {
      id: 'breath-volume',
      num: '2.4',
      title: 'Breath, volume & sustain',
      level: 'Foundational',
      logEnabled: true,
      desc: 'Changing loudness without losing steadiness — the messa di voce.',
      explain: 'Once the breath is steady, the next skill is changing volume deliberately while keeping pitch and quality constant. The classical test of this is the messa di voce: one note taken from soft to loud and back to soft on a single breath. It is demanding, diagnostic, and it exposes every weakness in support at once.',
      how: [
        'Loudness comes from two things working together: how firmly the folds close (which increases the strength of each vibration) and how well the tract above resonates. Air pressure rises somewhat as you get louder, but far less than most singers assume — which is why "blow harder" produces a worse loud note than "close and resonate better".',
        'The difficulty in a crescendo is that as pressure rises, the folds tend to be blown further apart and pitch tends to rise with it. Keeping the pitch dead steady while volume changes requires the closure and the pressure to increase <em>together</em>, in proportion.',
        'The messa di voce trains exactly that proportionality. It is also the reason it is such a good diagnostic: a voice that cannot crescendo without going sharp, or diminuendo without going breathy, has a support-and-closure balance that will fail elsewhere too — usually at the top of phrases and through the passaggio.',
        'Practise it in the middle of the range first. Attempting it on your break note is a 4.5 refinement, not a starting point.'
      ],
      feel: 'On the crescendo, a sense of leaning in slightly and letting the tone brighten and open, without any grab at the throat. On the diminuendo, of easing the pressure back while keeping the folds gently together, so it stays clear rather than dissolving into breath.',
      cues: [
        'Change loudness with closure and resonance, not with a shove of air',
        'Keep the pitch dead centre against a drone throughout',
        'On the way down, keep a little firmness so it stays clear rather than breathy',
        'Keep the ribs wide across the whole swell'
      ],
      faults: [
        'Pitch rising as you get louder — pressure increasing faster than closure',
        'The tone going breathy as you get quieter — closure released along with pressure',
        'A sudden jump in volume rather than a smooth ramp',
        'Ribs collapsing at the loud point, so the diminuendo has nothing left'
      ],
      fix: 'Use the drone in the practice bar and keep the note against it the whole way — the drone will tell you instantly if the pitch drifts. If soft singing goes breathy, practise soft notes with a gentle "g" onset first to establish closure at low volume.',
      produce: [
        '<strong>Choose an easy pitch.</strong> Mid-range, comfortable, nothing near your break.',
        '<strong>Set the drone.</strong> Turn on the reference pitch so you can hear any drift immediately.',
        '<strong>Start almost silently.</strong> Begin the note as softly as you can while keeping it clear — not breathy.',
        '<strong>Grow slowly.</strong> Over about four counts, let it grow. Brighten and open rather than pushing air; keep the ribs wide.',
        '<strong>Return.</strong> Over another four counts, come back down to almost nothing, keeping the folds gently together so it stays clear to the end.',
        '<strong>Check against the drone.</strong> The pitch should not have moved at all. Repeat on three or four different pitches.'
      ],
      check: [
        'You can swell soft–loud–soft on one breath with no pitch drift.',
        'The quietest part is still clear, not breathy.',
        'The loudest part is not pressed or shouty.',
        'The change is a smooth ramp, not a series of steps.',
        'Your ribs are still wide at the end of the swell.'
      ],
      troubleshoot: [
        '<strong>Pitch rises on the crescendo</strong> → pressure outpacing closure. Grow more slowly and brighten rather than push.',
        '<strong>Goes breathy on the diminuendo</strong> → closure released with the pressure. Add a light "g" onset to find quiet-but-closed.',
        '<strong>Volume jumps rather than grows</strong> → you are changing gear rather than ramping. Halve the range of the swell and build up.',
        '<strong>Run out of breath halfway</strong> → support, not volume. Return to 2.2 and the steady "sss".'
      ],
      myths: [
        '"Loud singing needs much more air." — It needs firmer closure and better resonance. Extra air mostly makes it breathy and unstable.',
        '"Singing quietly is easier than singing loudly." — Quiet singing with full clarity is harder; it requires closure without pressure.',
        '"The messa di voce is only for classical singers." — It is the cleanest diagnostic there is for breath-and-closure balance, whatever you sing.'
      ],
      diagram: {
        id: 'dia-2-4',
        title: 'Messa di voce — the target shape',
        type: 'process',
        verified: false,
        caption: 'Volume rises and falls smoothly across a single breath while pitch stays absolutely level. The two lines must stay independent: any coupling — pitch rising with volume, or clarity dropping as volume falls — shows where the balance between pressure and closure needs work. Informational diagram — to be source-verified before ship.',
        svg: `<svg viewBox="0 0 720 220" role="img" aria-label="Volume swelling and receding while pitch remains constant" font-family="Inter,sans-serif">
          <line x1="70" y1="185" x2="670" y2="185" stroke="#D6CDB8" stroke-width="1"/>
          <path d="M70 175 C 220 175, 260 55, 370 55 C 480 55, 520 175, 670 175" fill="none" stroke="#C05A24" stroke-width="3"/>
          <text x="370" y="42" text-anchor="middle" font-size="11" font-weight="700" fill="#C05A24">volume</text>
          <line x1="70" y1="120" x2="670" y2="120" stroke="#1C6B85" stroke-width="3"/>
          <text x="86" y="112" font-size="11" font-weight="700" fill="#1C6B85">pitch — dead level throughout</text>
          <text x="70" y="205" font-size="11" fill="#8B8272">soft</text>
          <text x="370" y="205" text-anchor="middle" font-size="11" fill="#8B8272">loud</text>
          <text x="670" y="205" text-anchor="end" font-size="11" fill="#8B8272">soft</text>
          <text x="370" y="220" text-anchor="middle" font-size="10.5" fill="#8B8272">all on one breath</text>
        </svg>`
      },
      exercises: [
        {
          id: 'ex-2-4-a',
          name: 'Messa di voce',
          durationMins: 5,
          difficulty: 'Moderate–hard',
          ref: 'D3',
          pattern: [0],
          steps: [
            'Turn on the drone at a comfortable mid-range pitch.',
            'Begin the note as softly as you can while keeping it clear.',
            'Grow over four counts — brighten and open, do not push air. Keep the ribs wide.',
            'Return over four counts to almost nothing, keeping it clear to the end.',
            'Check against the drone: the pitch should not have moved. Repeat on three or four pitches.'
          ]
        },
        {
          id: 'ex-2-4-b',
          name: 'Quiet but closed',
          durationMins: 3,
          difficulty: 'Moderate',
          ref: 'C3',
          pattern: [0, 0, 0],
          steps: [
            'Sing a very quiet note beginning with a gentle "g" — the "g" establishes closure at low volume.',
            'Sustain it as softly as possible while keeping it completely clear, with no breath escaping.',
            'Repeat on several pitches. This is the hardest half of the messa di voce.',
            'Listen for clarity, not volume — a quiet note should still have a core.'
          ]
        }
      ],
      videos: [
        {
          id: 'vid-2-4-nyvc',
          role: 'technique',
          coach: 'New York Vocal Coaching',
          title: 'NYVC Ep. 62 — Running Out Of Breath',
          youtubeId: 'Wd8tHaAruiw',
          displayMode: 'embed',
          available: true,
          lastChecked: '2026-07-25',
          topic: 'Sustain and management — the foundation the swell is built on.'
        },
        {
          id: 'vid-2-4-mech',
          role: 'mechanism',
          coach: 'Stroboscopy / voice science',
          title: 'Stroboscopy: Vocal cords at high and low pitch',
          youtubeId: 'UpOXecWC5Dw',
          displayMode: 'embed',
          available: true,
          lastChecked: '2026-07-25',
          topic: 'Shows closure changing with pitch and effort — the coupling the messa di voce trains you to control.'
        }
      ]
    }
  ]
}
