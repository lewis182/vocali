import { plan, areaById } from '../content/index.js'

export default function Plan ({ state, onOpenArea, onSetWeek }) {
  return (
    <div>
      <div className="overline crumb">Practise · training programme</div>
      <h1 className="title">Twelve-week plan</h1>
      <p className="lede">
        A followable, revisitable programme that sequences the areas over twelve weeks.
        Progress-based, not date-locked — advance when a week feels solid, and repeat
        or jump freely. It adds no new content; each week points at areas you already have.
      </p>
      <div className="planband" style={{ marginBottom: 8 }}>
        The shaded weeks are the <b>technical core</b> (Registration, Resonance, Range) —
        half the plan, reflecting the technique-first priority. Each week: a warm-up,
        the listed area session(s), and one focus goal.
      </div>

      {plan.weeks.map(w => {
        const first = w.areaIds[0]
        const isNow = w.weekNumber === state.plan.currentWeek
        return (
          <button
            className={`week${w.core ? ' core' : ''}`}
            key={w.weekNumber}
            onClick={() => { onSetWeek(w.weekNumber); onOpenArea(first) }}
          >
            <span className="wn">Wk {w.weekNumber}{isNow ? ' •' : ''}</span>
            <span>
              <span className="wf" style={{ display: 'block' }}>{w.focus}</span>
              <span className="wg" style={{ display: 'block' }}>{w.goal}</span>
              <span className="tinynote" style={{ display: 'block' }}>
                {w.areaIds.map(id => areaById(id)?.title).filter(Boolean).join(' · ')}
              </span>
            </span>
          </button>
        )
      })}

      <p className="tinynote">Opening a week sets it as current and takes you to its first area. "•" marks the current week.</p>
    </div>
  )
}
