import { useState } from 'react'
import Rich from './Glossify.jsx'
import Diagram from './Diagram.jsx'
import Videos from './Videos.jsx'
import { playPattern } from '../lib/audio.js'

/* The reusable section card — the destination of every drill-down.
   Field order is fixed by the content standard and never varies. */

function ListBlock ({ label, items, fault }) {
  if (!items?.length) return null
  return (
    <div className="block">
      <span className="overline">{label}</span>
      <ul className={`cues${fault ? ' fault' : ''}`}>
        {items.map((x, i) => <Rich key={i} tag="li" html={x} />)}
      </ul>
    </div>
  )
}

/* Secondary depth stays available but collapsed, so the page reads without a
   wall of text. Open it when you are diagnosing a problem. */
function Collapsible ({ label, items, fault, count }) {
  const [open, setOpen] = useState(false)
  if (!items?.length) return null
  return (
    <div className="block collapsible">
      <button className={`chead${open ? ' open' : ''}`} onClick={() => setOpen(o => !o)}>
        <span className="overline">{label}</span>
        <span className="cmeta">{count ?? items.length} · {open ? 'hide' : 'show'} <span className="caret">{open ? '▴' : '▾'}</span></span>
      </button>
      {open && (
        <ul className={`cues${fault ? ' fault' : ''}`}>
          {items.map((x, i) => <Rich key={i} tag="li" html={x} />)}
        </ul>
      )}
    </div>
  )
}

export default function Section ({ area, section, onBack, onSetDrone, onLog }) {
  const s = section
  return (
    <div>
      <button className="back" onClick={onBack}>‹ {area.title}</button>
      <div className="overline crumb">{area.title} · {s.num}</div>
      <h1 className="title">{s.title}</h1>
      <span className="tag-level">{s.level}</span>

      {/* quick recall — the aide-mémoire strip */}
      <div className="callout" style={{ marginTop: 16 }}>
        <span className="overline">Quick recall · at a glance</span>
        <Rich html={s.desc} />
        <ul className="cues" style={{ marginTop: 0 }}>
          {s.cues.slice(0, 2).map((c, i) => <Rich key={i} tag="li" html={c} />)}
        </ul>
        {s.exercises?.[0] && (
          <div className="tinynote">
            Drill: <strong>{s.exercises[0].name}</strong> · {s.exercises[0].durationMins} min. Read on for the full resource.
          </div>
        )}
      </div>

      <div className="block">
        <span className="overline">Explain</span>
        <Rich tag="p" html={s.explain} />
      </div>

      <div className="block">
        <span className="overline">Technique · how it works</span>
        {s.how.map((p, i) => <Rich key={i} tag="p" html={p} />)}
        <Diagram diagram={s.mechanismDiagram} />
        <div className="callout">
          <span className="overline">What to feel</span>
          <Rich html={s.feel} />
        </div>
        <span className="overline">Cues</span>
        <ul className="cues">{s.cues.map((c, i) => <Rich key={i} tag="li" html={c} />)}</ul>
        <div className="callout fault">
          <span className="overline">Common faults</span>
          <ul className="cues fault">{s.faults.map((c, i) => <Rich key={i} tag="li" html={c} />)}</ul>
        </div>
        <span className="overline">If it goes wrong</span>
        <Rich tag="p" html={s.fix} />
      </div>

      {s.produce?.length > 0 && (
        <div className="block">
          <span className="overline">How to produce it · step by step</span>
          <ol className="steps">{s.produce.map((p, i) => <Rich key={i} tag="li" html={p} />)}</ol>
        </div>
      )}

      <Diagram diagram={s.diagram} />

      <ListBlock label="Check you have got it" items={s.check} />

      <div className="block">
        <span className="overline">Exercises</span>
        {s.exercises.map(e => (
          <div className="ex" key={e.id}>
            <div className="exhead">
              <div className="exname">{e.name}</div>
              <div className="meta">{e.durationMins} min · {e.difficulty}</div>
            </div>
            <ol>{e.steps.map((st, i) => <Rich key={i} tag="li" html={st} />)}</ol>
            <div className="exfoot">
              <button className="ref" onClick={() => onSetDrone(e.ref)}>♪ Set reference pitch: {e.ref} →</button>
              {e.pattern && (
                <button className="hear" onClick={() => playPattern(e.pattern, e.ref)}>▶ Hear the pattern</button>
              )}
            </div>
          </div>
        ))}
      </div>

      <Collapsible label="Troubleshooting" items={s.troubleshoot} fault />
      <Collapsible label="Common misconceptions" items={s.myths} />

      <Videos videos={s.videos || (s.video ? [s.video] : [])} />

      {s.logEnabled && (
        <button
          className="btn"
          onClick={() => onLog({ areaId: area.id, sectionId: s.id, durationMins: 5, notes: s.title })}
        >
          ＋ Log this practice
        </button>
      )}
    </div>
  )
}
