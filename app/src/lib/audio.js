/* Vocali — audio tools: reference drone, metronome, and audible target patterns.
   All synthesis is local (Web Audio), so these work offline. */

export const FREQ = {
  A2: 110.00, B2: 123.47,
  C3: 130.81, D3: 146.83, E3: 164.81, F3: 174.61, G3: 196.00, A3: 220.00, B3: 246.94,
  C4: 261.63, D4: 293.66, E4: 329.63, F4: 349.23, G4: 392.00, A4: 440.00, B4: 493.88,
  C5: 523.25
}

let ctx = null
export function audioCtx () {
  if (!ctx) ctx = new (window.AudioContext || window.webkitAudioContext)()
  if (ctx.state === 'suspended') ctx.resume()
  return ctx
}

/* ---------- drone ---------- */
let droneOsc = null
let droneGain = null

export function startDrone (note) {
  stopDrone()
  const c = audioCtx()
  droneOsc = c.createOscillator()
  droneGain = c.createGain()
  droneOsc.type = 'sine'
  droneOsc.frequency.value = FREQ[note] || FREQ.C3
  droneGain.gain.value = 0
  droneOsc.connect(droneGain).connect(c.destination)
  droneOsc.start()
  // short fade-in avoids a click
  droneGain.gain.linearRampToValueAtTime(0.12, c.currentTime + 0.05)
}

export function stopDrone () {
  if (!droneOsc) return
  try {
    const c = audioCtx()
    droneGain.gain.cancelScheduledValues(c.currentTime)
    droneGain.gain.linearRampToValueAtTime(0, c.currentTime + 0.04)
    droneOsc.stop(c.currentTime + 0.06)
  } catch { /* already stopped */ }
  droneOsc = null
  droneGain = null
}

/* ---------- metronome ---------- */
let metTimer = null

function tick (accent = false) {
  const c = audioCtx()
  const o = c.createOscillator()
  const g = c.createGain()
  o.frequency.value = accent ? 2000 : 1600
  o.connect(g).connect(c.destination)
  const t = c.currentTime
  g.gain.setValueAtTime(0.35, t)
  g.gain.exponentialRampToValueAtTime(0.0001, t + 0.05)
  o.start(t)
  o.stop(t + 0.06)
}

export function startMetronome (bpm) {
  stopMetronome()
  tick()
  metTimer = setInterval(tick, 60000 / bpm)
}

export function stopMetronome () {
  if (metTimer) clearInterval(metTimer)
  metTimer = null
}

/* ---------- audible target patterns ----------
   pattern is either:
     - an array of semitone offsets from the reference pitch, e.g. [0,4,7,4,0]
     - { type: 'glide', from, to, andBack? } for sirens and slides            */

export function playPattern (pattern, refNote) {
  if (!pattern) return
  const c = audioCtx()
  const base = FREQ[refNote] || FREQ.C3
  const f = semis => base * Math.pow(2, semis / 12)

  const o = c.createOscillator()
  const g = c.createGain()
  o.type = 'sine'
  o.connect(g).connect(c.destination)
  g.gain.value = 0.0001
  const t0 = c.currentTime + 0.06

  if (!Array.isArray(pattern) && pattern.type === 'glide') {
    const f1 = f(pattern.from || 0)
    const f2 = f(pattern.to || 0)
    const leg = 1.4
    let end = t0 + leg
    o.frequency.setValueAtTime(f1, t0)
    o.frequency.linearRampToValueAtTime(f2, t0 + leg)
    if (pattern.andBack) {
      o.frequency.linearRampToValueAtTime(f1, t0 + leg * 2)
      end = t0 + leg * 2
    }
    g.gain.exponentialRampToValueAtTime(0.16, t0 + 0.1)
    g.gain.setValueAtTime(0.16, end - 0.15)
    g.gain.exponentialRampToValueAtTime(0.0001, end)
    o.start(t0)
    o.stop(end + 0.05)
    return
  }

  const arr = Array.isArray(pattern) ? pattern : [0]
  const step = arr.length > 1 ? 0.55 : 1.2
  arr.forEach((semi, i) => {
    const t = t0 + i * step
    o.frequency.setValueAtTime(f(semi), t)
    g.gain.setValueAtTime(0.0001, t)
    g.gain.exponentialRampToValueAtTime(0.16, t + 0.05)
    g.gain.exponentialRampToValueAtTime(0.0001, t + step - 0.05)
  })
  o.start(t0)
  o.stop(t0 + arr.length * step + 0.1)
}
