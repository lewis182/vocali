/* Vocali — Area 5: Resonance & Tone (technical core).
   Written to the content standard. Reference pitches suit a TENOR/BARITONE. */

export const resonance = {
  id: 'resonance',
  n: '05',
  title: 'Resonance & Tone',
  group: 'Technical core',
  order: 5,
  core: true,
  lede: 'Where your sound actually comes from. The folds make a buzz; the spaces above them turn it into a voice with colour, carrying power and character.',
  intro: 'If Registration is about the source, Resonance is about the filter — and the filter is where most of what listeners call "your voice" lives. The throat, mouth and nose form a tube whose shape you change constantly, and that tube amplifies certain frequencies while damping others. Change the shape and you change the sound completely without altering pitch or effort. This is the single most efficient lever you have: <strong>resonance buys volume and character for free</strong>, where force only buys strain. This area covers finding forward resonance, controlling brightness and darkness, adding <em>twang</em> for carrying power, shaping vowels consistently, and managing nasality.',

  videos: [
    {
      id: 'vid-r-area-mri',
      role: 'mechanism',
      coach: 'Voice science',
      title: 'Singing in the MRI with Tyley Ross — Making the Voice Visible',
      youtubeId: 'J3TwTb-T044',
      displayMode: 'embed',
      available: true,
      lastChecked: '2026-07-25',
      topic: 'Orientation: the vocal tract changing shape in real time — this area made visible.'
    },
    {
      id: 'vid-r-area-tract',
      role: 'mechanism',
      coach: 'Voice science',
      title: 'The Vocal Tract — Vocal Resonance',
      youtubeId: '2N5q85G3ydk',
      displayMode: 'embed',
      available: true,
      lastChecked: '2026-07-25',
      topic: 'How the tube above the folds shapes the raw buzz into a recognisable voice.'
    }
  ],

  diagram: {
    id: 'dia-r-area',
    title: 'The resonating spaces',
    type: 'anatomy',
    verified: false,
    caption: 'Above the folds sit the pharynx (throat), the oral cavity (mouth) and the nasal cavity — together the vocal tract. Their combined shape sets the resonances (formants) that amplify some frequencies of the buzz and damp others. Larynx height, tongue position, jaw opening and soft-palate position are the four main controls. Informational diagram — to be source-verified before ship.',
    svg: `<svg viewBox="0 0 720 260" role="img" aria-label="The pharynx, oral and nasal cavities above the larynx" font-family="Inter,sans-serif">
      <path d="M300 220 L300 150 Q300 90 350 70 L470 55" fill="none" stroke="#8B8272" stroke-width="2"/>
      <path d="M355 225 L355 150 Q360 120 400 110 L470 100" fill="none" stroke="#8B8272" stroke-width="2"/>
      <path d="M350 70 Q420 62 470 78" fill="none" stroke="#8B8272" stroke-width="2"/>

      <ellipse cx="327" cy="185" rx="24" ry="36" fill="#1C6B85" fill-opacity="0.28"/>
      <text x="270" y="190" text-anchor="end" font-size="11.5" font-weight="700" fill="#1E1B17">Pharynx</text>
      <text x="270" y="206" text-anchor="end" font-size="10" fill="#8B8272">throat space</text>

      <ellipse cx="420" cy="108" rx="46" ry="20" fill="#1C6B85" fill-opacity="0.4"/>
      <text x="500" y="112" font-size="11.5" font-weight="700" fill="#1E1B17">Oral cavity</text>
      <text x="500" y="128" font-size="10" fill="#8B8272">tongue &amp; jaw shape the vowel</text>

      <ellipse cx="415" cy="70" rx="42" ry="14" fill="#C05A24" fill-opacity="0.3"/>
      <text x="500" y="66" font-size="11.5" font-weight="700" fill="#1E1B17">Nasal cavity</text>
      <text x="500" y="82" font-size="10" fill="#8B8272">soft palate gates it (5.5)</text>

      <line x1="303" y1="228" x2="352" y2="228" stroke="#1C6B85" stroke-width="4"/>
      <text x="250" y="232" text-anchor="end" font-size="11" fill="#1C6B85">larynx (source)</text>
      <text x="360" y="252" font-size="10.5" fill="#8B8272">shape above the folds = tone colour, without changing effort</text>
    </svg>`
  },

  sections: [
    /* ---------------------------------------------------------------- 5.1 */
    {
      id: 'placement',
      num: '5.1',
      title: 'Resonance & placement',
      level: 'Core',
      logEnabled: true,
      desc: 'Finding the forward ring that makes a voice carry.',
      explain: 'A voice that carries is not necessarily a loud one. Carrying power comes from energy concentrated in a band of high frequencies the human ear is unusually sensitive to — heard as "ring" or "ping". Finding it is a matter of tract shape, and the quickest route in is the humming consonant "ng".',
      how: [
        'The vocal tract has resonant frequencies called <em>formants</em>. When a formant lines up near a strong harmonic of the note you are singing, that harmonic is amplified substantially — you get more sound out for the same effort at the folds.',
        'Trained voices concentrate energy around <strong>2.8–3.2 kHz</strong>, sometimes called the <em>singer\'s formant</em> cluster. This band matters because human hearing is most sensitive there, and because orchestras and bands have relatively little energy in it — so a voice with ring cuts through a mix that would swallow a darker, duller tone of the same loudness.',
        '"Placement" is a useful fiction. You cannot literally aim sound at your cheekbones — the sensations you feel are sympathetic vibration in the bones and tissue of the face. But the sensation reliably <em>correlates</em> with an efficiently resonating tract, so as a training cue it works even though the physics is not what it seems.',
        '"Ng" is the shortcut. It closes the mouth at the back with the tongue, forcing sound through the nose and producing an unmistakable buzz — and the tongue position it uses is close to the one that generates ring on open vowels.'
      ],
      feel: 'A buzzing or tingling in the front of the face — around the nose, upper teeth and cheekbones. The sound feels forward and slightly "narrow" rather than spread and dull, and it should feel easier, not harder, than a dull tone.',
      cues: [
        'Sustain "ng" until you feel the buzz, then open to a vowel keeping it',
        'Think of the sound moving forward, not up or out',
        'Ring is a quality you listen for, not a volume you push for',
        'If it feels effortful, you are pushing rather than tuning'
      ],
      faults: [
        'Confusing ring with nasality — ring is bright and clear, nasality is honky (see 5.5)',
        'Losing the forward quality the instant the vowel opens',
        'Pushing for volume instead of tuning for ring',
        'A swallowed, backed tone from tongue-root retraction (see 1.3)'
      ],
      fix: 'If the ring vanishes when you open the vowel, shorten the journey: open only halfway to "ah" at first, then further each time. If the tone feels backed and dull, check the tongue root — the tip should rest at the lower teeth.',
      produce: [
        '<strong>Find the buzz.</strong> Sustain "ng" (as in "sing") on a comfortable pitch. Feel the vibration at the front of the face; the mouth can be open, the tongue does the closing.',
        '<strong>Keep it steady.</strong> Hold it for several seconds and let the buzz become obvious. Quiet is fine — this is not about volume.',
        '<strong>Open slowly.</strong> Without stopping the sound, open gradually into "ah". Aim to keep the forward buzz all the way through the change.',
        '<strong>Check the difference.</strong> Now sing a plain "ah" without the "ng" first. Alternate the two — the difference in ring, at the same effort, is the whole point.',
        '<strong>Take it up a scale.</strong> "Ng" to "ah" on 1-3-5-3-1, keeping the ring at every pitch.',
        '<strong>Test the carry.</strong> Sing a ringing note and a dull one at the same volume, and notice which feels like it would fill a room.'
      ],
      check: [
        'You can feel a clear buzz at the front of the face on "ng".',
        'You can open "ng" into "ah" and keep the ring.',
        'A ringing note sounds more present than a dull one at the same effort.',
        'The ring is bright and clear rather than honky or nasal.',
        'You can find it at several pitches, not just one.'
      ],
      troubleshoot: [
        '<strong>Ring disappears on the vowel</strong> → open more gradually; go halfway at first.',
        '<strong>Sound is honky rather than ringing</strong> → too much nasal port. See 5.5 and the "mah–bah" test.',
        '<strong>Tone is dull and backed</strong> → tongue-root retraction. Anchor the tip at the lower teeth (1.3).',
        '<strong>Can find ring low but not high</strong> → that is a mix/registration issue as much as resonance; revisit 4.4.'
      ],
      myths: [
        '"You can place your voice in the mask." — Sound is not steerable. The sensation is real and useful as a cue, but nothing is being aimed anywhere.',
        '"Ring means singing louder." — It means more energy where the ear is sensitive, which is a resonance change, not an effort change.',
        '"A dark, warm tone is more beautiful, so avoid brightness." — Without some ring the voice will not carry. Warmth and ring are not opposites; good voices have both.'
      ],
      exercises: [
        {
          id: 'ex-5-1-a',
          name: '"Ng" to "ah"',
          durationMins: 5,
          difficulty: 'Easy–moderate',
          ref: 'C3',
          pattern: [0, 4, 7, 4, 0],
          steps: [
            'Sustain "ng" on a comfortable pitch until you feel the buzz at the front of the face.',
            'Open gradually into "ah" without stopping the sound, keeping the buzz.',
            'Do the same on 1-3-5-3-1, starting each note on "ng" and opening.',
            'Listen for the ring persisting into the vowel — that is the skill.'
          ]
        },
        {
          id: 'ex-5-1-b',
          name: 'Ring versus dull comparison',
          durationMins: 3,
          difficulty: 'Easy',
          ref: 'D3',
          pattern: [0, 0],
          steps: [
            'Sing a sustained "ah" deliberately dull and backed.',
            'Then sing it forward and ringing, at exactly the same effort level.',
            'Alternate several times, recording if you can.',
            'Note that the ringing version sounds louder without being louder.'
          ]
        }
      ],
      videos: [
        {
          id: 'vid-5-1-nyvc',
          role: 'technique',
          coach: 'New York Vocal Coaching',
          title: 'NYVC Ep. 117 — Singing Vowels & Formants',
          youtubeId: 'KC6vNPLzftw',
          displayMode: 'embed',
          available: true,
          lastChecked: '2026-07-25',
          topic: 'Formants explained for singers — the mechanism behind "ring".'
        },
        {
          id: 'vid-5-1-mech',
          role: 'mechanism',
          coach: 'Voice science',
          title: 'Formants Explained and Demonstrated',
          youtubeId: 'jpbFnsusfp0',
          displayMode: 'embed',
          available: true,
          lastChecked: '2026-07-25',
          topic: 'Hear formants isolated and demonstrated — makes the abstract idea concrete.'
        }
      ]
    },

    /* ---------------------------------------------------------------- 5.2 */
    {
      id: 'brightness',
      num: '5.2',
      title: 'Brightness vs darkness',
      level: 'Core',
      logEnabled: true,
      desc: 'Controlling tone colour deliberately, without changing pitch.',
      explain: 'Two singers can sing the same note at the same volume and sound completely different. That difference is tone colour, and it is largely set by the size and shape of the resonating spaces — chiefly larynx height and mouth shape. Learning to move colour deliberately gives you an expressive range that has nothing to do with singing louder.',
      how: [
        'A <strong>longer, wider</strong> vocal tract lowers the formant frequencies, giving a darker, rounder, more covered sound. A lowered larynx and a taller mouth do exactly this. A <strong>shorter, narrower</strong> tract raises them, giving a brighter, more forward sound — a slightly raised larynx and a wider, more spread mouth.',
        'The main controls are <em>larynx height</em>, <em>tongue position</em>, <em>jaw and lip shape</em> and <em>pharyngeal width</em>. Small changes make large differences, which is why colour is such an efficient expressive tool.',
        'Neither extreme is correct. Jazz and blues generally sit brighter and more speech-like; a heavily covered tone can sound stiff in those styles. But a permanently bright, spread tone tires quickly and lacks warmth. The skill is a <em>comfortable middle you can move either side of at will</em>.',
        'One practical warning: darkening by pressing the larynx down with the tongue root produces a fake, swallowed "radio voice" that restricts range and tires the throat. Genuine darkening comes from a released low larynx and a taller space, not from pushing.'
      ],
      feel: 'Bright: sound feels forward and close to the front teeth, mouth slightly wider, an "ee"-like alertness. Dark: sound feels rounder and further back, more vertical space inside the mouth, a gentle yawn-like openness. Both should feel free — if either feels forced, it is being manufactured with muscle.',
      cues: [
        'Brighten towards "ee", darken towards "aw" — vowel colour is the easiest lever',
        'Let the larynx sit comfortably; do not shove it down for darkness',
        'Think taller for darker, wider for brighter',
        'Find a middle you can move either side of'
      ],
      faults: [
        'Forcing darkness by depressing the larynx with the tongue root — swallowed and tiring',
        'A permanently spread, bright tone that has no warmth and fatigues quickly',
        'Changing volume when you meant to change colour',
        'Losing the vowel identity entirely while adjusting colour'
      ],
      fix: 'Keep a hand lightly on your throat while practising colour changes; the larynx should move very little. If darkening makes the tone swallowed, you are pressing it down — release and get the space from a taller mouth instead.',
      produce: [
        '<strong>Set a steady note.</strong> Sing a comfortable mid-range "ah" and hold it.',
        '<strong>Move towards bright.</strong> Without changing pitch or volume, migrate the vowel towards "ee" — a shade wider, a shade more forward. Notice the tone brighten.',
        '<strong>Move towards dark.</strong> Now migrate towards "aw" — taller inside, rounder lips. Notice the tone darken.',
        '<strong>Return to the middle.</strong> Settle on a comfortable central colour. This is your default.',
        '<strong>Keep the larynx quiet.</strong> Hand on throat: it may move slightly but should not lurch. If it does, you are manufacturing colour rather than shaping it.',
        '<strong>Apply it musically.</strong> Sing a phrase brightly, then darkly, and decide which suits the lyric. That is the point of the control.'
      ],
      check: [
        'You can move from bright to dark and back on one sustained note.',
        'The pitch does not change while the colour does.',
        'The volume does not change while the colour does.',
        'Neither extreme feels forced or swallowed.',
        'You have a comfortable default you can return to.'
      ],
      troubleshoot: [
        '<strong>Dark tone sounds swallowed</strong> → you are pressing the larynx down. Release; get space from a taller mouth instead.',
        '<strong>Bright tone sounds shrill</strong> → too spread. Keep it tall and narrow rather than wide.',
        '<strong>Pitch drifts as colour changes</strong> → check against the drone; the two must stay independent.',
        '<strong>Colour changes only with volume</strong> → you are changing effort, not shape. Fix the volume and move only the vowel.'
      ],
      myths: [
        '"A darker voice is a more professional voice." — Style dictates. Jazz, blues and country generally want a speech-like, brighter tone.',
        '"You should always sing with a low larynx." — A comfortably low, released larynx is a good default; a forcibly depressed one restricts range and tires the throat.',
        '"Tone colour is fixed by your anatomy." — Anatomy sets your natural centre, but the usable range around it is far wider than most singers realise.'
      ],
      mechanismDiagram: {
        id: 'dia-5-2b',
        title: 'Tract length and tone colour',
        type: 'mechanism',
        verified: false,
        caption: 'A longer tract (lower larynx, taller mouth) lowers the resonant frequencies for a darker, rounder tone. A shorter tract (higher larynx, wider mouth) raises them for a brighter, more forward one. The note being sung is identical in both — only the filter has changed. Informational diagram — to be source-verified before ship.',
        svg: `<svg viewBox="0 0 720 200" role="img" aria-label="Longer versus shorter vocal tract and resulting tone colour" font-family="Inter,sans-serif">
          <text x="180" y="28" text-anchor="middle" font-size="12" font-weight="700" fill="#1C6B85">Longer tract — darker</text>
          <rect x="140" y="45" width="80" height="105" rx="8" fill="#1C6B85" fill-opacity="0.3" stroke="#1C6B85"/>
          <text x="180" y="170" text-anchor="middle" font-size="10.5" fill="#8B8272">low larynx · tall mouth</text>
          <text x="180" y="186" text-anchor="middle" font-size="10.5" fill="#8B8272">formants lower · round, warm</text>

          <text x="540" y="28" text-anchor="middle" font-size="12" font-weight="700" fill="#C05A24">Shorter tract — brighter</text>
          <rect x="500" y="80" width="80" height="70" rx="8" fill="#C05A24" fill-opacity="0.3" stroke="#C05A24"/>
          <text x="540" y="170" text-anchor="middle" font-size="10.5" fill="#8B8272">higher larynx · wider mouth</text>
          <text x="540" y="186" text-anchor="middle" font-size="10.5" fill="#8B8272">formants higher · forward, cutting</text>

          <line x1="300" y1="45" x2="420" y2="45" stroke="#D6CDB8" stroke-width="1"/>
          <text x="360" y="112" text-anchor="middle" font-size="11" fill="#8B8272">same pitch</text>
          <text x="360" y="130" text-anchor="middle" font-size="11" fill="#8B8272">same effort</text>
        </svg>`
      },
      exercises: [
        {
          id: 'ex-5-2-a',
          name: 'Colour slide on one note',
          durationMins: 5,
          difficulty: 'Moderate',
          ref: 'D3',
          pattern: [0],
          steps: [
            'Turn on the drone and sustain a comfortable "ah" against it.',
            'Without changing pitch or volume, migrate the vowel towards "ee" — hear it brighten.',
            'Migrate the other way towards "aw" — hear it darken.',
            'Keep a hand on your throat; the larynx should stay largely still. Return to a comfortable middle.'
          ]
        },
        {
          id: 'ex-5-2-b',
          name: 'Same phrase, two colours',
          durationMins: 4,
          difficulty: 'Moderate',
          ref: 'C3',
          pattern: [0, 2, 4, 2, 0],
          steps: [
            'Choose a short phrase from a song you know.',
            'Sing it deliberately bright and speech-like.',
            'Sing it again deliberately dark and round.',
            'Decide which suits the lyric — then find the version between them you would actually perform.'
          ]
        }
      ],
      videos: [
        {
          id: 'vid-5-2-nyvc',
          role: 'technique',
          coach: 'New York Vocal Coaching',
          title: 'NYVC Ep. 117 — Singing Vowels & Formants',
          youtubeId: 'KC6vNPLzftw',
          displayMode: 'embed',
          available: true,
          lastChecked: '2026-07-25',
          topic: 'Vowel and formant relationships — the machinery behind tone colour.'
        },
        {
          id: 'vid-5-2-mech',
          role: 'mechanism',
          coach: 'Voice science',
          title: 'Physics of Music — the human voice: vocal tract and formants',
          youtubeId: 'WOLhIHbMpbU',
          displayMode: 'embed',
          available: true,
          lastChecked: '2026-07-25',
          topic: 'Why tract length changes tone colour, from the acoustics up.'
        }
      ]
    },

    /* ---------------------------------------------------------------- 5.3 */
    {
      id: 'twang',
      num: '5.3',
      title: 'Twang',
      level: 'Core',
      logEnabled: true,
      desc: 'The narrowing that gives carrying power for almost no effort.',
      explain: 'Twang is a bright, ringing quality produced by narrowing a small space just above the vocal folds. It is the single most efficient way to make a voice carry: it can add substantial perceived loudness for almost no extra effort at the folds. It is also essential to a healthy belt and to the mix.',
      how: [
        'The <em>aryepiglottic sphincter</em> — a small ring of tissue just above the vocal folds — can narrow to form a resonating cavity roughly the size that resonates around 3 kHz. Narrowing it produces a marked boost in exactly the band the ear is most sensitive to.',
        'The result is dramatic efficiency: research on twang suggests it can roughly double perceived loudness without increasing the effort at the folds. That is why it makes belting sustainable — you get the carrying power from resonance rather than from pressing.',
        'Twang is separate from nasality, though they are frequently confused. Twang is made <em>above the larynx and below the soft palate</em>; nasality is air passing through the nose. You can have twang with the nose completely closed off — the "mah–bah" test in 5.5 will prove it.',
        'Used in a small amount, twang simply makes a voice bright and present, and the listener does not identify it as twang at all. In large amounts it is the sound of a duck quack, a witch cackle, or a country vocal — which is why those are the standard ways to find it.'
      ],
      feel: 'A bright, slightly "cheeky" narrowness in the sound, and a sensation of the tone concentrating and cutting rather than spreading. Crucially it should feel <em>easier</em>, not harder — if you feel effort or squeezing, you have added throat tension instead.',
      cues: [
        'Find it with a duck quack, a witch cackle or a bratty "nyah"',
        'Then keep the ring and lose the caricature',
        'Twang is a narrowing, not a push — it should reduce effort',
        'A little goes a long way; you rarely want the full cartoon version'
      ],
      faults: [
        'Confusing twang with nasality and producing a honky tone',
        'Adding throat tension in the attempt, which is the opposite of twang',
        'Using so much that the tone becomes harsh and cartoonish',
        'Abandoning it as "ugly" before learning to dial it back into normal singing'
      ],
      fix: 'If it sounds honky, test with 5.5\'s pinched-nose check: pinch the nose and sing — if the sound changes markedly, you have nasality rather than twang. If it feels tight, you are squeezing the throat; go back to the cackle, which produces twang without effort, and reduce from there.',
      produce: [
        '<strong>Find it caricatured.</strong> Make a duck quack, or a witch cackle "heh heh heh", or a bratty "nyah nyah". These all produce twang unmistakably.',
        '<strong>Sustain it.</strong> Hold the cackle sound on a pitch. Notice how loud it is for how little effort — that is the whole point.',
        '<strong>Carry it to a vowel.</strong> Start with the bratty "nyah" and open into "ah", keeping the brightness.',
        '<strong>Dial it back.</strong> Gradually reduce the caricature while keeping the ring. You are looking for the point where it stops sounding silly but still cuts.',
        '<strong>Test the efficiency.</strong> Sing a phrase with and without it at the same effort. The twanged version should sound noticeably more present.',
        '<strong>Apply to the mix.</strong> Use it on 4.4\'s "mum" exercise — twang is the ingredient that makes the mix strong without pushing.'
      ],
      check: [
        'You can produce an obvious twang on demand (quack or cackle).',
        'You can carry it into a normal vowel and dial it down to a usable amount.',
        'The twanged tone sounds louder at the same effort.',
        'It feels easier, not tighter.',
        'A pinched-nose test shows it is twang, not nasality.'
      ],
      troubleshoot: [
        '<strong>Sounds honky/nasal</strong> → nasality, not twang. Pinch-nose test; see 5.5.',
        '<strong>Throat feels tight</strong> → you are squeezing. Return to the cackle, which produces twang without effort.',
        '<strong>Cannot find it at all</strong> → try a baby cry, a seagull, or an exaggerated country accent — all reliable routes in.',
        '<strong>Too harsh to use</strong> → keep reducing while listening for the ring; the usable amount is much smaller than the finding version.'
      ],
      myths: [
        '"Twang is nasal singing." — It is made below the soft palate. You can twang with the nose entirely closed.',
        '"Twang is only for country music." — It is a component of almost all commercial singing, and of healthy belting in every style. Country simply uses more of it.',
        '"Twang sounds ugly." — The caricature does. The dialled-back version just sounds like a voice that carries.'
      ],
      diagram: {
        id: 'dia-5-3',
        title: 'The aryepiglottic narrowing',
        type: 'anatomy',
        verified: false,
        caption: 'Narrowing the small space just above the vocal folds creates a resonator tuned near 3 kHz — the band where human hearing is most sensitive. The result is a large gain in perceived loudness for no extra work at the folds. Note that this sits below the soft palate, which is why twang is not nasality. Informational diagram — to be source-verified before ship.',
        svg: `<svg viewBox="0 0 720 230" role="img" aria-label="Wide versus narrowed aryepiglottic space and resulting output" font-family="Inter,sans-serif">
          <text x="170" y="28" text-anchor="middle" font-size="12" font-weight="700" fill="#8B8272">Wide — no twang</text>
          <path d="M130 180 L130 110 Q170 82 210 110 L210 180" fill="none" stroke="#8B8272" stroke-width="2"/>
          <line x1="130" y1="180" x2="210" y2="180" stroke="#1C6B85" stroke-width="4"/>
          <text x="170" y="200" text-anchor="middle" font-size="10" fill="#8B8272">folds</text>
          <rect x="300" y="120" width="60" height="24" fill="#8B8272" fill-opacity="0.35"/>
          <text x="370" y="137" font-size="10.5" fill="#8B8272">output</text>

          <text x="170" y="60" text-anchor="middle" font-size="10.5" fill="#8B8272">open space above folds</text>

          <text x="530" y="28" text-anchor="middle" font-size="12" font-weight="700" fill="#C05A24">Narrowed — twang</text>
          <path d="M490 180 L490 110 Q530 96 570 110 L570 180" fill="none" stroke="#C05A24" stroke-width="2"/>
          <ellipse cx="530" cy="118" rx="16" ry="9" fill="#C05A24" fill-opacity="0.4"/>
          <line x1="490" y1="180" x2="570" y2="180" stroke="#1C6B85" stroke-width="4"/>
          <text x="530" y="200" text-anchor="middle" font-size="10" fill="#8B8272">folds — same effort</text>
          <text x="530" y="60" text-anchor="middle" font-size="10.5" fill="#C05A24">narrowed · resonates near 3 kHz</text>
          <rect x="620" y="105" width="60" height="54" fill="#C05A24" fill-opacity="0.55"/>
          <text x="650" y="176" text-anchor="middle" font-size="10.5" fill="#C05A24">much greater output</text>
        </svg>`
      },
      exercises: [
        {
          id: 'ex-5-3-a',
          name: 'Cackle to vowel',
          durationMins: 5,
          difficulty: 'Moderate',
          ref: 'D3',
          pattern: [0, 0, 0],
          steps: [
            'Make a witch cackle or duck quack — deliberately silly. This is twang.',
            'Sustain that sound on a comfortable pitch and notice how loud it is for the effort.',
            'Open it into "ah" keeping the brightness.',
            'Reduce the caricature step by step, keeping the ring, until it sounds like normal singing that carries.'
          ]
        },
        {
          id: 'ex-5-3-b',
          name: 'Twang on the mix scale',
          durationMins: 5,
          difficulty: 'Moderate',
          ref: 'C3',
          pattern: [0, 4, 7, 4, 0],
          steps: [
            'Sing 1-3-5-3-1 on a bright, slightly bratty "mum".',
            'Keep the volume level — let the brightness, not loudness, do the work.',
            'Move up by semitone; twang is what keeps this easy through the passaggio.',
            'Listen for a tone that cuts without any sense of pushing.'
          ]
        },
        {
          id: 'ex-5-3-c',
          name: 'With and without',
          durationMins: 3,
          difficulty: 'Easy–moderate',
          ref: 'D3',
          pattern: [0, 2, 4, 2, 0],
          steps: [
            'Sing a short phrase with no twang at all — plain and round.',
            'Sing it again with a moderate amount, at exactly the same effort.',
            'Record both and compare the presence and carrying power.',
            'This comparison is what makes twang worth persisting with.'
          ]
        }
      ],
      videos: [
        {
          id: 'vid-5-3-nyvc',
          role: 'technique',
          coach: 'New York Vocal Coaching',
          title: 'NYVC Ep. 117 — Singing Vowels & Formants',
          youtubeId: 'KC6vNPLzftw',
          displayMode: 'embed',
          available: true,
          lastChecked: '2026-07-25',
          topic: 'Resonance tuning in practice — the family twang belongs to.'
        },
        {
          id: 'vid-5-3-liepe',
          role: 'second opinion',
          coach: 'Chris Liepe',
          title: 'Easily Find Your MIXED VOICE With THIS Tip',
          youtubeId: '6lz8oo6WMZQ',
          displayMode: 'embed',
          available: true,
          lastChecked: '2026-07-25',
          topic: 'Twang is the usual ingredient behind a strong mix — a second route to the same coordination.'
        }
      ]
    },

    /* ---------------------------------------------------------------- 5.4 */
    {
      id: 'vowels',
      num: '5.4',
      title: 'Vowel shaping',
      level: 'Core',
      logEnabled: true,
      desc: 'Keeping vowels consistent — and modifying them where you must.',
      explain: 'Vowels are resonance shapes. Because the shape that makes a good "ee" low down is not the shape that works high up, singers have to shape vowels deliberately rather than simply speaking them on pitch. Consistency through a scale is the skill; sensible modification at the top is the refinement.',
      how: [
        'Each vowel is defined by the frequencies of its first two formants, set mainly by tongue position and jaw/lip shape. "Ee" has a low first formant and a very high second; "ah" has a high first formant; "oo" has both low. Those are the coordinates your tongue is navigating.',
        'The problem arises when the note you are singing rises above the vowel\'s first formant. Below it, everything works. As the pitch approaches and passes it, the vowel loses acoustic support, and the tone becomes shouty, strained or simply disappears. This is a resonance limit, not a strength limit.',
        '<strong>Vowel modification</strong> is the solution: as you ascend, migrate the vowel slightly towards a neighbouring one — typically "ah" towards "uh" or "aw", "ee" towards "ih". Classical tradition calls this <em>covering</em>. Done subtly, listeners hear the intended vowel; done too much, the words blur.',
        'The everyday version of this skill is simpler: keeping one vowel genuinely identical up and down a five-note scale, rather than letting it spread wider as you rise. Most singers spread without noticing, which is why their tone changes character mid-scale.'
      ],
      feel: 'A vowel that stays "the same shape" as the pitch changes — tall and consistent, not spreading wider as you go up. Where modification is needed it should feel like a slight rounding or narrowing, not like changing the word.',
      cues: [
        'Keep the vowel tall and consistent; resist spreading as you rise',
        'High notes: migrate slightly towards "uh" or "aw" rather than forcing the pure vowel',
        'Think of the vowel as a shape you hold, not a sound you make',
        'Modify subtly — the listener should still hear the word'
      ],
      faults: [
        'The vowel spreading wider as pitch rises, changing the tone\'s character',
        'Forcing an unmodified bright vowel at the top, producing shouting or strain',
        'Over-modifying so words become unintelligible',
        'Different vowels sounding like they come from different singers'
      ],
      fix: 'Sing a scale on one vowel while watching in a mirror — visible spreading is the fault. If a high note will not work on "ah", try it on "uh" and then colour it gradually back towards "ah" until it is as close as it can be while still working.',
      produce: [
        '<strong>Test for consistency.</strong> Sing a five-note scale up and down on "ah" alone, listening for the vowel changing character as you rise.',
        '<strong>Watch it.</strong> Repeat in front of a mirror. If the mouth widens as you ascend, that is the spread to eliminate — keep it tall instead.',
        '<strong>Anchor the tongue.</strong> Keep the tongue tip at the lower teeth so the vowel is shaped by the body of the tongue, not by retraction.',
        '<strong>Find your limit.</strong> Take "ee" upward until it becomes strained. Note the pitch — this is where modification becomes necessary.',
        '<strong>Modify.</strong> At that pitch, migrate "ee" slightly towards "ih". It should immediately ease. Do the same for "ah" towards "uh".',
        '<strong>Check intelligibility.</strong> Sing a phrase with the modification. Someone listening should still hear the correct words.'
      ],
      check: [
        'One vowel stays recognisably the same shape across a five-note scale.',
        'The mouth does not spread wider as pitch rises.',
        'You know roughly where each vowel needs modification in your range.',
        'A modified high note is easier than the unmodified version.',
        'Words remain intelligible despite the modification.'
      ],
      troubleshoot: [
        '<strong>Tone changes character mid-scale</strong> → the vowel is spreading. Mirror check; keep it tall.',
        '<strong>High notes shouty on "ah"</strong> → needs modification towards "uh"/"aw".',
        '<strong>Words unclear after modifying</strong> → over-modified. Reduce until intelligibility returns.',
        '<strong>Some vowels much harder than others</strong> → normal. Each has its own formant limit; learn where each one needs help.'
      ],
      myths: [
        '"You should sing vowels exactly as you speak them." — Speech vowels stop working above certain pitches. Singing requires deliberate shaping.',
        '"Vowel modification is a classical technique irrelevant to pop or jazz." — Every style uses it; commercial singers simply modify less and later, keeping speech quality longer.',
        '"If a high note is hard, you need more power." — More often you need a different vowel. Try that first.'
      ],
      diagram: {
        id: 'dia-5-4',
        title: 'Why vowels need modifying up high',
        type: 'process',
        verified: false,
        caption: 'Each vowel has a first formant at a particular frequency. While the sung pitch sits below it, the vowel is well supported. As pitch rises past it, support falls away and the tone strains — so you migrate the vowel towards a neighbour with a higher first formant, restoring the support. Informational diagram — to be source-verified before ship.',
        svg: `<svg viewBox="0 0 720 220" role="img" aria-label="Sung pitch rising past a vowel's first formant and the effect of modification" font-family="Inter,sans-serif">
          <line x1="70" y1="170" x2="670" y2="170" stroke="#D6CDB8" stroke-width="1"/>
          <text x="660" y="192" text-anchor="end" font-size="10.5" fill="#8B8272">rising pitch →</text>
          <line x1="70" y1="80" x2="420" y2="80" stroke="#1C6B85" stroke-width="2" stroke-dasharray="5 4"/>
          <text x="76" y="72" font-size="10.5" fill="#1C6B85">first formant of "ee"</text>
          <path d="M70 160 L 300 108 L 420 80" fill="none" stroke="#8B8272" stroke-width="3"/>
          <path d="M420 80 L 560 46" fill="none" stroke="#C05A24" stroke-width="3" stroke-dasharray="6 4"/>
          <text x="470" y="42" font-size="10.5" fill="#C05A24">unmodified — strains</text>
          <path d="M420 80 L 620 96" fill="none" stroke="#1C6B85" stroke-width="3"/>
          <text x="520" y="118" font-size="10.5" fill="#1C6B85">modified towards "ih" — supported again</text>
          <line x1="420" y1="40" x2="420" y2="170" stroke="#C05A24" stroke-width="1" stroke-dasharray="4 4"/>
          <text x="428" y="162" font-size="10" fill="#C05A24">modify here</text>
        </svg>`
      },
      exercises: [
        {
          id: 'ex-5-4-a',
          name: 'One vowel, five notes',
          durationMins: 5,
          difficulty: 'Moderate',
          ref: 'C3',
          pattern: [0, 2, 4, 5, 7, 5, 4, 2, 0],
          steps: [
            'Sing a five-note scale up and down on "ah" only.',
            'Keep the vowel identical throughout — do not let it spread as you rise.',
            'Check in a mirror: the mouth should stay tall, not widen.',
            'Repeat on "ee" and "oo". Listen for the vowel keeping its character at every pitch.'
          ]
        },
        {
          id: 'ex-5-4-b',
          name: 'Find your modification point',
          durationMins: 5,
          difficulty: 'Moderate–hard',
          ref: 'E3',
          pattern: { type: 'glide', from: 0, to: 12 },
          steps: [
            'Sing "ee" slowly upward until it becomes strained or shouty. Note the pitch.',
            'At that pitch, migrate the vowel slightly towards "ih". It should immediately ease.',
            'Repeat with "ah" migrating towards "uh".',
            'Write down roughly where each vowel needs help — this is personal map-making.'
          ]
        },
        {
          id: 'ex-5-4-c',
          name: 'Modified phrase',
          durationMins: 4,
          difficulty: 'Moderate',
          ref: 'D3',
          pattern: [0, 4, 7, 4, 0],
          steps: [
            'Take a phrase from a song that sits high and feels effortful.',
            'Apply the modifications you found, subtly.',
            'Record it and check the words are still clearly intelligible.',
            'If they are not, you have modified too far — reduce.'
          ]
        }
      ],
      videos: [
        {
          id: 'vid-5-4-nyvc',
          role: 'technique',
          coach: 'New York Vocal Coaching',
          title: 'NYVC Ep. 117 — Singing Vowels & Formants',
          youtubeId: 'KC6vNPLzftw',
          displayMode: 'embed',
          available: true,
          lastChecked: '2026-07-25',
          topic: 'The core reference for this section — vowels, formants and modification.'
        },
        {
          id: 'vid-5-4-mech',
          role: 'mechanism',
          coach: 'Voice science',
          title: 'Vocal Resonance: Speech vs Acoustical Vowels; Formant Tuning',
          youtubeId: 'Ln3y1Yo1i4c',
          displayMode: 'embed',
          available: true,
          lastChecked: '2026-07-25',
          topic: 'Why a spoken vowel stops working when sung high — the acoustics behind modification.'
        }
      ]
    },

    /* ---------------------------------------------------------------- 5.5 */
    {
      id: 'nasality',
      num: '5.5',
      title: 'Controlling nasality',
      level: 'Refinement',
      logEnabled: true,
      desc: 'Telling twang from honk, and closing the nasal port at will.',
      explain: 'Nasality is air resonating in the nasal cavity, and it is controlled by the soft palate. Too much gives a honky, pinched tone; deliberate use is a legitimate stylistic colour, particularly in country. The important skill is knowing which you are producing — because nasality is frequently mistaken for twang, and the two need opposite corrections.',
      how: [
        'The <strong>soft palate</strong> (velum) is the flexible tissue at the back of the roof of the mouth. Raised, it seals the nasal cavity off from the throat; lowered, it opens the passage and air resonates in the nose. Only "m", "n" and "ng" genuinely require it lowered in English.',
        'When the palate stays low on other sounds, some sound leaks into the nose and the tone acquires a honky quality — the classic "singing with a cold in reverse".',
        'The confusion with twang is worth stating plainly: <em>twang is made below the soft palate</em>, in the aryepiglottic space, and adds bright ring; <em>nasality is made above it</em>, in the nose, and adds honk. They both sound "bright" to an untrained ear, which is why singers trying to add twang so often add nasality instead.',
        'The pinched-nose test settles it every time. Sing a sustained vowel and pinch your nostrils shut. If the sound changes markedly, air was going through the nose — nasality. If it barely changes, the brightness is twang.'
      ],
      feel: 'A raised palate feels like the beginning of a yawn or a gentle lift at the back of the mouth; the sound feels like it is coming out of the mouth only. A lowered palate feels like the sound has moved up behind the nose.',
      cues: [
        'Think of the beginning of a yawn to lift the soft palate',
        'Alternate "mah–bah" to feel the palate dropping and lifting',
        'Use the pinched-nose test to diagnose, not guesswork',
        'A little nasality is a style choice; constant nasality is a fault'
      ],
      faults: [
        'A permanently honky tone from a habitually low palate',
        'Adding nasality when trying to add twang',
        'Over-lifting the palate into a stiff, hooty, "operatic" caricature',
        'Assuming any bright sound is nasal and darkening the whole voice to avoid it'
      ],
      fix: 'Run the pinched-nose test to identify what you actually have. If it is nasality, practise "mah–bah" alternation to feel the palate move, then sustain "bah" with the palate up. If the tone is too hooty, you have over-lifted — settle back towards neutral.',
      produce: [
        '<strong>Feel the palate move.</strong> Alternate "mah–bah–mah–bah" slowly. On "m" the palate drops; on "b" it lifts. That movement is what you are learning to control.',
        '<strong>Sustain with it up.</strong> Hold "bah" and keep the palate lifted — think of the start of a yawn at the back of the mouth.',
        '<strong>Test with the nose.</strong> Sustain the vowel and pinch your nostrils. If the sound barely changes, the palate is doing its job.',
        '<strong>Deliberately add nasality.</strong> Lower the palate on a vowel and hear the honk. Knowing how to produce it makes it much easier to avoid.',
        '<strong>Find neutral.</strong> Settle between the two — a comfortably raised palate, neither honky nor hooty.',
        '<strong>Distinguish from twang.</strong> Add twang (5.3) with the palate raised, and confirm with the pinch test that the brightness is not nasal.'
      ],
      check: [
        'You can feel the soft palate move on "mah–bah".',
        'A sustained vowel barely changes when you pinch your nose.',
        'You can add nasality deliberately and remove it again.',
        'You can tell twang from nasality on your own singing.',
        'Your default tone is neither honky nor hooty.'
      ],
      troubleshoot: [
        '<strong>Pinch test changes the sound a lot</strong> → nasality. Work "mah–bah" and sustain with the palate up.',
        '<strong>Tone hooty and stiff</strong> → over-lifted palate. Ease back towards neutral.',
        '<strong>Thought it was twang, turns out nasal</strong> → very common. Re-find twang from the cackle (5.3) with the nose pinched.',
        '<strong>Nasal only on certain vowels</strong> → usually "ee" and "ay". Practise those specifically with the pinch test.'
      ],
      myths: [
        '"Twang and nasality are the same thing." — They are made in different places and need opposite corrections. The pinch test separates them.',
        '"All nasality is bad." — Deliberate nasality is a legitimate colour, especially in country. Unintentional constant nasality is the problem.',
        '"Raising the soft palate as high as possible improves tone." — Over-lifting gives a stiff, hooty sound. Comfortably raised is the target.'
      ],
      diagram: {
        id: 'dia-5-5',
        title: 'Soft palate — raised and lowered',
        type: 'anatomy',
        verified: false,
        caption: 'Raised: the velum seals the nasal cavity, so sound leaves through the mouth only — clear and non-nasal. Lowered: the passage opens and sound resonates in the nose, giving the honky quality. Note that twang is produced well below this point, which is why the pinched-nose test can distinguish them. Informational diagram — to be source-verified before ship.',
        svg: `<svg viewBox="0 0 720 230" role="img" aria-label="Soft palate raised sealing the nose versus lowered opening it" font-family="Inter,sans-serif">
          <text x="180" y="26" text-anchor="middle" font-size="12" font-weight="700" fill="#1C6B85">Palate raised</text>
          <path d="M90 120 Q180 70 280 96" fill="none" stroke="#8B8272" stroke-width="2"/>
          <path d="M90 170 Q180 200 280 168" fill="none" stroke="#8B8272" stroke-width="2"/>
          <path d="M215 100 Q235 118 258 112" fill="none" stroke="#1C6B85" stroke-width="5"/>
          <text x="150" y="92" font-size="10" fill="#8B8272">nose</text>
          <path d="M120 145 L250 145" stroke="#1C6B85" stroke-width="2" marker-end="url(#a5)"/>
          <text x="180" y="212" text-anchor="middle" font-size="10.5" fill="#8B8272">sound out of the mouth only</text>

          <text x="540" y="26" text-anchor="middle" font-size="12" font-weight="700" fill="#C05A24">Palate lowered</text>
          <path d="M450 120 Q540 70 640 96" fill="none" stroke="#8B8272" stroke-width="2"/>
          <path d="M450 170 Q540 200 640 168" fill="none" stroke="#8B8272" stroke-width="2"/>
          <path d="M575 100 Q585 128 578 140" fill="none" stroke="#C05A24" stroke-width="5"/>
          <path d="M480 145 L610 145" stroke="#8B8272" stroke-width="2" marker-end="url(#a5)"/>
          <path d="M560 130 L600 100" stroke="#C05A24" stroke-width="2" marker-end="url(#a5)"/>
          <text x="540" y="212" text-anchor="middle" font-size="10.5" fill="#8B8272">sound leaks into the nose — honk</text>
          <defs><marker id="a5" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0 0 L8 4 L0 8 z" fill="#8B8272"/></marker></defs>
        </svg>`
      },
      exercises: [
        {
          id: 'ex-5-5-a',
          name: '"Mah–bah" palate alternation',
          durationMins: 4,
          difficulty: 'Easy–moderate',
          ref: 'C3',
          pattern: [0, 0, 0, 0],
          steps: [
            'Alternate "mah–bah–mah–bah" slowly on a comfortable pitch.',
            'Feel the palate drop on "m" and lift on "b".',
            'Then sustain "bah" keeping the palate lifted throughout.',
            'Listen for the honk disappearing on the sustained version.'
          ]
        },
        {
          id: 'ex-5-5-b',
          name: 'Pinched-nose test',
          durationMins: 3,
          difficulty: 'Easy',
          ref: 'D3',
          pattern: [0, 0],
          steps: [
            'Sustain "ah" and, halfway through, pinch your nostrils shut.',
            'If the sound changes markedly, air was going through the nose.',
            'Repeat on "ee" and "ay" — these are the usual offenders.',
            'Aim for a sound that barely changes when pinched.'
          ]
        },
        {
          id: 'ex-5-5-c',
          name: 'Twang without nasality',
          durationMins: 4,
          difficulty: 'Moderate',
          ref: 'D3',
          pattern: [0, 4, 2, 0],
          steps: [
            'Add twang from 5.3 — the bright cackle quality — on a sustained vowel.',
            'While holding it, pinch your nose. The brightness should remain.',
            'If it collapses, you have nasality; re-find the twang lower in the throat.',
            'This proves the two are separate, and is the fastest way to learn the difference.'
          ]
        }
      ],
      videos: [
        {
          id: 'vid-5-5-nyvc',
          role: 'technique',
          coach: 'New York Vocal Coaching',
          title: 'NYVC Ep. 117 — Singing Vowels & Formants',
          youtubeId: 'KC6vNPLzftw',
          displayMode: 'embed',
          available: true,
          lastChecked: '2026-07-25',
          topic: 'Vowel and resonance control, including the shaping the palate contributes.'
        },
        {
          id: 'vid-5-5-mech',
          role: 'mechanism',
          coach: 'Voice science',
          title: 'Learn more about Vocal Harmonics and Formants',
          youtubeId: 'UkNDBQmEMSY',
          displayMode: 'embed',
          available: true,
          lastChecked: '2026-07-25',
          topic: 'How tract resonances combine — useful for separating nasal resonance from twang.'
        }
      ]
    }
  ]
}
