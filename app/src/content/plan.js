/* Vocali — the twelve-week Stage Plan.
   A thin sequencing layer: it stores no teaching content, only references to
   areas plus a focus and a goal. Progress-based, never date-locked. */

export const plan = {
  id: 'plan-12',
  title: 'Twelve-week plan',
  totalWeeks: 12,
  weeks: [
    { weekNumber: 1, focus: 'Foundations & breath', goal: 'Reset posture, release tension, low supported breath', areaIds: ['foundations', 'breath'] },
    { weekNumber: 2, focus: 'Onset & phonation', goal: 'Clean, connected onset; daily SOVT warm-ups', areaIds: ['onset'] },
    { weekNumber: 3, focus: 'Registration: chest & head', goal: 'Distinct, healthy chest and head voice', areaIds: ['registration'], core: true },
    { weekNumber: 4, focus: 'Registration: passaggio & mix', goal: 'Through the break without pushing; find the mix', areaIds: ['registration'], core: true },
    { weekNumber: 5, focus: 'Registration: smoothing', goal: 'Seamless transitions, top to bottom', areaIds: ['registration'], core: true },
    { weekNumber: 6, focus: 'Resonance & tone', goal: 'Forward ring, colour control, twang', areaIds: ['resonance'], core: true },
    { weekNumber: 7, focus: 'Range & flexibility', goal: 'Extend range safely; clean agility', areaIds: ['range'], core: true },
    { weekNumber: 8, focus: 'Core consolidation', goal: 'Run the whole core in one sitting; find weak spots', areaIds: ['registration', 'resonance', 'range'], core: true },
    { weekNumber: 9, focus: 'Pitch & ear', goal: 'Accurate matching; in tune against a drone', areaIds: ['pitch'] },
    { weekNumber: 10, focus: 'Articulation & diction', goal: 'Even vowels; clear consonants', areaIds: ['diction'] },
    { weekNumber: 11, focus: 'Dynamics & expression', goal: 'Swells, controlled vibrato, even sustain', areaIds: ['dynamics'] },
    { weekNumber: 12, focus: 'Stylisation & application', goal: 'Swing phrasing, blue notes; a full song', areaIds: ['style', 'apply'] }
  ]
}
