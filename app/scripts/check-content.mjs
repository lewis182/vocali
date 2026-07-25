#!/usr/bin/env node
/* Vocali — content standard checker.

   Guards the single most valuable asset in the project: the written content.
   Every non-stub section must carry the full teaching set, so the app can never
   quietly drift back to being a thin video index. Runs as part of `npm run build`.

   Usage:  npm run check:content            (fails the build on error)
           node scripts/check-content.mjs   (same)
*/

import { areas } from '../src/content/index.js'
import { plan } from '../src/content/plan.js'
import { glossary } from '../src/content/glossary.js'

const REQUIRED_TEXT = ['desc', 'explain', 'feel', 'fix']
const REQUIRED_LISTS = ['how', 'cues', 'faults', 'produce', 'check', 'troubleshoot', 'myths']
const MIN = { how: 2, cues: 3, faults: 2, produce: 4, check: 3, troubleshoot: 3, myths: 2 }

const errors = []
const warnings = []
let sectionCount = 0
let exerciseCount = 0
let unverified = 0

for (const area of areas) {
  if (area.stub) {
    warnings.push(`Area ${area.n} "${area.title}" is a stub — not yet written to the content standard.`)
    continue
  }

  if (!area.lede) errors.push(`Area ${area.id}: missing lede.`)
  if (!area.intro) errors.push(`Area ${area.id}: missing intro.`)
  if (!area.sections?.length) errors.push(`Area ${area.id}: no sections.`)

  for (const s of area.sections || []) {
    sectionCount++
    const where = `${area.id}/${s.num} ${s.title}`

    for (const f of REQUIRED_TEXT) {
      if (!s[f] || String(s[f]).trim().length < 10) errors.push(`${where}: "${f}" missing or too short.`)
    }
    for (const f of REQUIRED_LISTS) {
      const v = s[f]
      if (!Array.isArray(v) || v.length === 0) { errors.push(`${where}: "${f}" missing.`); continue }
      if (v.length < (MIN[f] || 1)) warnings.push(`${where}: "${f}" has ${v.length} item(s); standard suggests ${MIN[f]}+.`)
    }

    if (!['Foundational', 'Core', 'Refinement'].includes(s.level)) errors.push(`${where}: level must be Foundational/Core/Refinement (got "${s.level}").`)

    if (!s.exercises?.length) errors.push(`${where}: no exercises.`)
    for (const e of s.exercises || []) {
      exerciseCount++
      if (!e.id) errors.push(`${where}: an exercise is missing an id.`)
      if (!e.steps?.length) errors.push(`${where} / ${e.name}: no steps.`)
      if (!e.ref) errors.push(`${where} / ${e.name}: no reference pitch.`)
      if (!e.durationMins) errors.push(`${where} / ${e.name}: no duration.`)
      if (!e.difficulty) errors.push(`${where} / ${e.name}: no difficulty.`)
    }

    if (!s.video?.youtubeId) errors.push(`${where}: no video.`)
    if (s.video && !s.video.lastChecked) warnings.push(`${where}: video has no lastChecked date.`)

    if (s.diagram) {
      if (!s.diagram.svg) errors.push(`${where}: diagram present but has no svg.`)
      if (!s.diagram.caption) errors.push(`${where}: diagram has no caption.`)
      if (!s.diagram.verified) { unverified++; warnings.push(`${where}: diagram "${s.diagram.title}" is not yet source-verified.`) }
    } else {
      warnings.push(`${where}: no diagram.`)
    }
  }
}

/* plan + glossary sanity */
if (plan.weeks.length !== plan.totalWeeks) errors.push(`Plan: totalWeeks=${plan.totalWeeks} but ${plan.weeks.length} weeks defined.`)
const areaIds = new Set(areas.map(a => a.id))
for (const w of plan.weeks) {
  for (const id of w.areaIds) if (!areaIds.has(id)) errors.push(`Plan week ${w.weekNumber}: unknown area "${id}".`)
}
if (Object.keys(glossary).length < 5) warnings.push('Glossary looks sparse.')

/* ---------- report ---------- */
const c = { r: '\x1b[31m', y: '\x1b[33m', g: '\x1b[32m', d: '\x1b[2m', x: '\x1b[0m' }
console.log(`\n${c.d}Vocali content check${c.x}`)
console.log(`  areas: ${areas.length}  ·  written: ${areas.filter(a => !a.stub).length}  ·  sections: ${sectionCount}  ·  exercises: ${exerciseCount}`)

if (warnings.length) {
  console.log(`\n${c.y}Warnings (${warnings.length})${c.x}`)
  warnings.forEach(w => console.log(`  ${c.y}·${c.x} ${w}`))
}
if (unverified) {
  console.log(`\n${c.y}${unverified} diagram(s) awaiting source verification — required before ship.${c.x}`)
}
if (errors.length) {
  console.log(`\n${c.r}Errors (${errors.length}) — content standard not met${c.x}`)
  errors.forEach(e => console.log(`  ${c.r}✗${c.x} ${e}`))
  console.log('')
  process.exit(1)
}

console.log(`\n${c.g}✓ All written sections meet the content standard.${c.x}\n`)
