import { useEffect, useState } from 'react'
import { areas, areaById, sectionById, areaSession, warmups } from './content/index.js'
import { loadState, saveState, addLogEntry, emptyState } from './lib/store.js'
import Home from './components/Home.jsx'
import Area from './components/Area.jsx'
import Section from './components/Section.jsx'
import Plan from './components/Plan.jsx'
import Glossary from './components/Glossary.jsx'
import Runner from './components/Runner.jsx'
import PracticeBar from './components/PracticeBar.jsx'

const Logo = () => (
  <div className="mark">
    <svg viewBox="0 0 40 40" fill="none" stroke="#F1EBDB" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 21 C9 11 15 5 22 5 C28 5 32 9 32 14 L35 15 C36 15.3 36 16.7 35 17 L32 18 C31.5 20 30.3 21.2 28 21.8" />
      <path d="M28 26 C27 28.6 24.5 30 21 30 L16 30 L16 35" />
    </svg>
  </div>
)

export default function App () {
  const [state, setState] = useState(emptyState())
  const [view, setView] = useState({ name: 'home' })
  const [session, setSession] = useState(null)
  const [droneNote, setDroneNote] = useState('C3')
  const [bpm, setBpm] = useState(72)

  useEffect(() => { loadState().then(setState) }, [])

  const update = next => { setState(next); saveState(next) }
  const log = entry => update(addLogEntry(state, entry))

  /* Any navigation also leaves a running session — otherwise the runner keeps
     rendering and the nav appears dead. */
  function openArea (id) {
    setSession(null)
    setView({ name: 'area', areaId: id })
    window.scrollTo(0, 0)
  }
  function openSection (areaId, sectionId) {
    const a = areaById(areaId)
    const s = sectionById(areaId, sectionId)
    setSession(null)
    setView({ name: 'section', areaId, sectionId })
    update({ ...state, lastVisited: { areaId, sectionId, label: `${a.title} · ${s.num} ${s.title}` } })
    window.scrollTo(0, 0)
  }
  function go (name) { setSession(null); setView({ name }); window.scrollTo(0, 0) }

  const current = view.areaId ? areaById(view.areaId) : null

  /* ---------- session runner takes over the whole main column ---------- */
  if (session) {
    return (
      <Shell droneNote={droneNote} setDroneNote={setDroneNote} bpm={bpm} setBpm={setBpm} onLog={log} view={view} go={go} openArea={openArea}>
        <Runner
          session={session}
          onExit={() => setSession(null)}
          onComplete={entry => log(entry)}
        />
      </Shell>
    )
  }

  return (
    <Shell droneNote={droneNote} setDroneNote={setDroneNote} bpm={bpm} setBpm={setBpm} onLog={log} view={view} go={go} openArea={openArea}>
      {view.name === 'home' && (
        <Home
          state={state}
          onOpenArea={openArea}
          onOpenPlan={() => go('plan')}
          onWarmup={m => setSession(warmups[m])}
          onResume={() => state.lastVisited && openSection(state.lastVisited.areaId, state.lastVisited.sectionId)}
        />
      )}

      {view.name === 'area' && (
        <Area
          area={current}
          onOpenSection={sid => openSection(current.id, sid)}
          onRunArea={() => setSession(areaSession(current))}
          onOpenArea={openArea}
        />
      )}

      {view.name === 'section' && (
        <Section
          area={current}
          section={sectionById(view.areaId, view.sectionId)}
          onBack={() => openArea(view.areaId)}
          onSetDrone={setDroneNote}
          onLog={log}
        />
      )}

      {view.name === 'plan' && (
        <Plan
          state={state}
          onOpenArea={openArea}
          onSetWeek={n => update({ ...state, plan: { ...state.plan, currentWeek: n } })}
        />
      )}

      {view.name === 'glossary' && <Glossary />}
    </Shell>
  )
}

function Shell ({ children, droneNote, setDroneNote, bpm, setBpm, onLog, view, go, openArea }) {
  return (
    <div className="app">
      <header className="topbar">
        {/* The whole brand is a home button — the expected behaviour everywhere. */}
        <button className="brand" onClick={() => go('home')} aria-label="Go to home">
          <Logo />
          <span className="name">Vocali</span>
        </button>
        <div className="topright">
          {view.name !== 'home' && (
            <button className="homebtn" onClick={() => go('home')}>‹ Home</button>
          )}
          <span className="tag">VOCAL TRAINING</span>
        </div>
      </header>

      <nav className="nav">
        <button className={`item${view.name === 'home' ? ' active' : ''}`} onClick={() => go('home')}>
          <span className="n">→</span><span>Home</span>
        </button>

        <h4>Learning areas</h4>
        {areas.map(a => (
          <button
            key={a.id}
            className={`item${a.core ? ' core' : ''}${view.areaId === a.id ? ' active' : ''}`}
            onClick={() => openArea(a.id)}
          >
            <span className="n">{a.n}</span><span>{a.title}</span>
          </button>
        ))}

        <h4>Practise</h4>
        <button className={`item${view.name === 'plan' ? ' active' : ''}`} onClick={() => go('plan')}>
          <span className="n">▦</span><span>Twelve-week plan</span>
        </button>
        <button className={`item${view.name === 'glossary' ? ' active' : ''}`} onClick={() => go('glossary')}>
          <span className="n">A–Z</span><span>Glossary</span>
        </button>
      </nav>

      <main>
        <PracticeBar
          droneNote={droneNote} setDroneNote={setDroneNote}
          bpm={bpm} setBpm={setBpm}
          onLog={onLog}
        />
        {children}
      </main>
    </div>
  )
}
