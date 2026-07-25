import { useEffect, useRef, useState } from 'react'
import Rich from './Glossify.jsx'
import { playPattern } from '../lib/audio.js'

/* One reusable timed player. Warm-ups, area sessions and (later) plan-days all
   use it — only the ordered `steps` differ. Kept deliberately uncluttered:
   this is what you look at mid-practice, at arm's length. */

const fmt = secs => `${Math.floor(secs / 60)}:${String(Math.floor(secs % 60)).padStart(2, '0')}`

export default function Runner ({ session, onExit, onComplete }) {
  const [i, setI] = useState(0)
  const [elapsed, setElapsed] = useState(0)
  const [paused, setPaused] = useState(false)
  const tick = useRef(null)

  const steps = session.steps || []
  const step = steps[i]
  const stepSecs = Math.max(1, (step?.durationMins || 1) * 60)
  const totalSecs = steps.reduce((t, s) => t + (s.durationMins || 1) * 60, 0)
  const doneSecs = steps.slice(0, i).reduce((t, s) => t + (s.durationMins || 1) * 60, 0) + elapsed

  useEffect(() => {
    if (paused) return
    tick.current = setInterval(() => setElapsed(e => e + 1), 1000)
    return () => clearInterval(tick.current)
  }, [paused, i])

  useEffect(() => {
    if (elapsed >= stepSecs) next()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [elapsed, stepSecs])

  function next () {
    setElapsed(0)
    if (i + 1 >= steps.length) {
      onComplete?.({ sessionId: session.id, durationMins: Math.round(totalSecs / 60), notes: session.title })
      onExit()
    } else {
      setI(i + 1)
    }
  }

  if (!step) return null

  return (
    <div className="runner">
      <button className="back" onClick={onExit}>‹ Leave session</button>
      <div className="overline crumb">{session.title} · step {i + 1} of {steps.length}</div>

      <div className="timer">{fmt(Math.max(0, stepSecs - elapsed))}</div>
      <div className="track"><div className="fill" style={{ width: `${Math.min(100, (doneSecs / totalSecs) * 100)}%` }} /></div>
      <div className="tinynote" style={{ marginTop: -8 }}>
        {fmt(doneSecs)} elapsed of {fmt(totalSecs)} total
      </div>

      <div className="step-now">{step.name}</div>
      {step.sectionTitle && <div className="overline">from {step.sectionTitle}</div>}
      <ol className="steps">{(step.steps || []).map((s, k) => <Rich key={k} tag="li" html={s} />)}</ol>

      <div className="exfoot" style={{ marginTop: 12, display: 'flex', gap: 10 }}>
        {step.pattern && (
          <button className="hear" onClick={() => playPattern(step.pattern, step.ref)}>▶ Hear the pattern</button>
        )}
      </div>

      {steps[i + 1] && (
        <p className="tinynote" style={{ marginTop: 18 }}>
          Next: <strong>{steps[i + 1].name}</strong>
        </p>
      )}

      <div className="controls">
        <button onClick={() => setPaused(p => !p)}>{paused ? 'Resume' : 'Pause'}</button>
        <button onClick={next}>Skip</button>
        <button className="primary" onClick={next}>Done · next</button>
      </div>
    </div>
  )
}
