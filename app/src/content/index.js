/* Vocali — content entry point.

   CONTENT IS DATA, NOT CODE. Each area lives in its own module under
   ./areas/. To add an area written to the content standard, create the file,
   import it here, and replace its stub below. Nothing in the app code needs to
   change. Run `npm run check:content` to validate against the standard.

   Content standard (see vocal-training-app-handover.md §3a / §8):
   explain → how[] → feel → cues[] → faults[] → fix → produce[] → diagram →
   check[] → exercises[] → troubleshoot[] → myths[] → video
*/

import { registration } from './areas/registration.js'

/** Areas not yet written to full depth appear as stubs (no `sections`). */
const stub = (id, n, title, group, order, core = false) => ({ id, n, title, group, order, core, stub: true })

export const areas = [
  stub('foundations', '01', 'Foundations & Vocal Health', 'Foundation', 1),
  stub('breath', '02', 'Breath & Support', 'Foundation', 2),
  stub('onset', '03', 'Onset & Phonation', 'Foundation', 3),
  registration,
  stub('resonance', '05', 'Resonance & Tone', 'Technical core', 5, true),
  stub('range', '06', 'Range & Flexibility', 'Technical core', 6, true),
  stub('pitch', '07', 'Pitch & Ear', 'Control', 7),
  stub('diction', '08', 'Articulation & Diction', 'Control', 8),
  stub('dynamics', '09', 'Dynamics & Expression', 'Control', 9),
  stub('style', '10', 'Stylisation', 'Application', 10),
  stub('apply', '11', 'Application & Practice', 'Application', 11)
].sort((a, b) => a.order - b.order)

export const areaById = id => areas.find(a => a.id === id)

export const sectionById = (areaId, sectionId) =>
  areaById(areaId)?.sections?.find(s => s.id === sectionId)

/** An area session chains every exercise in the area, in section order. */
export const areaSession = area => ({
  id: `session-${area.id}`,
  type: 'area',
  areaId: area.id,
  title: `${area.title} — full run`,
  steps: (area.sections || []).flatMap(s =>
    (s.exercises || []).map(e => ({ ...e, sectionId: s.id, sectionTitle: s.title }))
  )
})

/** Warm-up routines (Area 11 / handover §4a). Male default (Dr Dan). */
export const warmups = {
  5: {
    id: 'warmup-5', type: 'warmup', title: 'Quick warm-up · 5 min',
    steps: [
      { id: 'w5-1', name: 'Body & breath release', durationMins: 1, ref: 'C3', steps: ['Roll the shoulders, release the jaw, sigh out twice.', 'Three silent low breaths, ribs wide, shoulders still.'] },
      { id: 'w5-2', name: 'Lip trills', durationMins: 2, ref: 'C3', pattern: { type: 'glide', from: 0, to: 12, andBack: true }, steps: ['Gentle lip trills on a comfortable pitch.', 'Slow sirens up and back, no push.'] },
      { id: 'w5-3', name: 'Light sirens', durationMins: 2, ref: 'C3', pattern: { type: 'glide', from: 0, to: 14, andBack: true }, steps: ['On "ng", siren bottom to top and back.', 'Keep it quiet and even through the break.'] }
    ]
  },
  10: {
    id: 'warmup-10', type: 'warmup', title: 'Standard warm-up · 10 min',
    steps: [
      { id: 'w10-1', name: 'Body & breath release', durationMins: 1, ref: 'C3', steps: ['Roll-down and stack up. Release jaw and tongue.', 'Three silent low breaths.'] },
      { id: 'w10-2', name: 'Lip trills', durationMins: 2, ref: 'C3', pattern: { type: 'glide', from: 0, to: 12, andBack: true }, steps: ['Trill slow sirens, low to high and back.'] },
      { id: 'w10-3', name: 'Five-note hums', durationMins: 2, ref: 'C3', pattern: [0, 2, 4, 2, 0], steps: ['Hum 1-2-3-2-1, easy and forward.', 'Up by semitone while comfortable.'] },
      { id: 'w10-4', name: 'Chest-to-head glides', durationMins: 3, ref: 'C3', pattern: { type: 'glide', from: 0, to: 14, andBack: true }, steps: ['Glide through the passaggio on "oo".', 'No change of effort at the break.'] },
      { id: 'w10-5', name: 'Gentle agility', durationMins: 2, ref: 'C3', pattern: [0, 4, 7, 4, 0], steps: ['1-3-5-3-1 on "mum", light and even.'] }
    ]
  },
  20: {
    id: 'warmup-20', type: 'warmup', title: 'Full warm-up · 20 min',
    steps: [
      { id: 'w20-1', name: 'Body & breath release', durationMins: 2, ref: 'C3', steps: ['Roll-down, neck rolls, jaw massage.', 'Silent low breaths; "sss" for a slow count.'] },
      { id: 'w20-2', name: 'Lip trills & straw', durationMins: 3, ref: 'C3', pattern: { type: 'glide', from: 0, to: 12, andBack: true }, steps: ['Trills, then straw phonation on the same glides.'] },
      { id: 'w20-3', name: 'Five-note hums', durationMins: 2, ref: 'C3', pattern: [0, 2, 4, 2, 0], steps: ['Hums up a five-note scale, forward and easy.'] },
      { id: 'w20-4', name: 'Wider sirens', durationMins: 3, ref: 'C3', pattern: { type: 'glide', from: 0, to: 17, andBack: true }, steps: ['Full-range sirens on "ng", unbroken.'] },
      { id: 'w20-5', name: 'Onset work', durationMins: 3, ref: 'C3', pattern: [0, 0, 0], steps: ['"uh-oh" then sustain — clean, not pressed.', 'Balanced onsets on "ah".'] },
      { id: 'w20-6', name: 'Twang & resonance', durationMins: 3, ref: 'D3', pattern: [0, 4, 7, 4, 0], steps: ['Bright "mum" on 1-3-5-3-1, forward ring.'] },
      { id: 'w20-7', name: 'Agility run', durationMins: 2, ref: 'C3', pattern: [7, 5, 4, 2, 0], steps: ['Descending 5-4-3-2-1 on "ah", clean and even.'] },
      { id: 'w20-8', name: 'Style application', durationMins: 2, ref: 'C3', steps: ['Sing a phrase of a song, on the beat then behind it.'] }
    ]
  }
}

export { plan } from './plan.js'
export { glossary } from './glossary.js'
