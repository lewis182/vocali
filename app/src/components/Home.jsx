import { areas, plan } from '../content/index.js'
import { minutesThisWeek, streak } from '../lib/store.js'

export default function Home ({ state, onOpenArea, onOpenPlan, onWarmup, onResume }) {
  const mins = minutesThisWeek(state)
  const days = streak(state)
  const last = state.lastVisited

  return (
    <div>
      <div className="overline crumb">Home</div>
      <h1 className="title">Vocali.</h1>

      <div className="warmups">
        {[5, 10, 20].map(m => (
          <button className="w" key={m} onClick={() => onWarmup(m)}>
            <div className="big">{m}</div>
            <div className="u">min warm-up</div>
          </button>
        ))}
      </div>

      {last && (
        <button className="resume" onClick={onResume}>
          <span>
            <span className="overline" style={{ display: 'block' }}>Resume where you left off</span>
            <strong>{last.label}</strong>
          </span>
          <span style={{ color: 'var(--muted)' }}>›</span>
        </button>
      )}

      {(mins > 0 || days > 0) && (
        <p className="tinynote">
          {days > 0 && <>Streak: <strong>{days} day{days === 1 ? '' : 's'}</strong>. </>}
          {mins > 0 && <>Practised <strong>{mins} min</strong> this week.</>}
        </p>
      )}

      <hr className="rule" />
      <div className="overline">The eleven areas</div>
      <p className="sublede">
        Each is a self-contained resource — open one for the write-up, quick recall
        and exercises. Teal-numbered areas are the technical core.
      </p>
      <div className="areagrid">
        {areas.map(a => (
          <button className={`acard${a.core ? ' core' : ''}`} key={a.id} onClick={() => onOpenArea(a.id)}>
            <span className="an">{a.n}</span>
            <span>
              <span className="at" style={{ display: 'block' }}>{a.title}</span>
              <span className="ag" style={{ display: 'block' }}>{a.group}</span>
              <span className="secs" style={{ display: 'block' }}>
                {a.sections
                  ? `${a.sections.length} sections · resource, recall & exercises`
                  : 'Specced — coming to full depth'}
              </span>
            </span>
          </button>
        ))}
      </div>

      <hr className="rule" />
      <div className="overline">Twelve-week plan · the whole programme at a glance</div>
      <p className="sublede">
        The training thread that sequences the areas above. Use it as a route, or
        ignore it and free-practise — it is progress-based, never date-locked.
      </p>
      <div className="planstrip">
        {plan.weeks.map(w => (
          <button
            className={`pw${w.core ? ' core' : ''}${w.weekNumber === state.plan.currentWeek ? ' now' : ''}`}
            key={w.weekNumber}
            onClick={onOpenPlan}
          >
            <div className="pwn">Wk {w.weekNumber}</div>
            <div className="pwf">{w.focus}</div>
          </button>
        ))}
      </div>
      <div className="planband">
        Shaded band = the <b>technical core</b> (weeks 3–8, half the plan).
        Orange outline = where you are now. Open any week for its goal and sessions.
      </div>
    </div>
  )
}
