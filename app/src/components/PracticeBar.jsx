import { useEffect, useRef, useState } from 'react'
import { FREQ, startDrone, stopDrone, startMetronome, stopMetronome } from '../lib/audio.js'
import { isSyncConfigured, isPaired, pairDevice, unpairDevice } from '../lib/store.js'

/* Compact practice bar.

   Pitch and tempo are set once and rarely changed mid-session, so keeping full
   controls permanently on screen wasted width and forced extra scrolling. The
   bar shows the current settings at a glance; tapping one opens a small panel
   to change it, which closes again. Reading space wins. */

export default function PracticeBar ({ droneNote, setDroneNote, bpm, setBpm, onLog }) {
  const [open, setOpen] = useState(null)      // 'pitch' | 'tempo' | 'log' | null
  const [dronePlaying, setDronePlaying] = useState(false)
  const [metOn, setMetOn] = useState(false)
  const [note, setNote] = useState('')
  const [paired, setPaired] = useState(isPaired())
  const wrap = useRef(null)

  useEffect(() => { if (dronePlaying) startDrone(droneNote) }, [droneNote]) // eslint-disable-line
  useEffect(() => { if (metOn) startMetronome(bpm) }, [bpm]) // eslint-disable-line
  useEffect(() => () => { stopDrone(); stopMetronome() }, [])

  // click outside closes the panel
  useEffect(() => {
    function onDoc (e) { if (wrap.current && !wrap.current.contains(e.target)) setOpen(null) }
    document.addEventListener('mousedown', onDoc)
    return () => document.removeEventListener('mousedown', onDoc)
  }, [])

  const toggleDrone = () => {
    if (dronePlaying) { stopDrone(); setDronePlaying(false) } else { startDrone(droneNote); setDronePlaying(true) }
  }
  const toggleMet = () => {
    if (metOn) { stopMetronome(); setMetOn(false) } else { startMetronome(bpm); setMetOn(true) }
  }

  async function handlePair () {
    const phrase = window.prompt('Enter your sync passphrase.\n\nUse the same phrase on every device to share one practice history. It is never stored or sent — it only derives your private record id.')
    if (!phrase) return
    await pairDevice(phrase)
    setPaired(true)
  }

  return (
    <div className="pbar-wrap" ref={wrap}>
      <div className="pbar">
        <button className={`pchip${dronePlaying ? ' live' : ''}`} onClick={toggleDrone} title={dronePlaying ? 'Stop drone' : 'Play drone'}>
          {dronePlaying ? '■' : '▶'}
        </button>
        <button className={`pchip wide${open === 'pitch' ? ' open' : ''}`} onClick={() => setOpen(open === 'pitch' ? null : 'pitch')}>
          ♪ <strong>{droneNote}</strong> <span className="caret">▾</span>
        </button>

        <span className="pdiv" />

        <button className={`pchip${metOn ? ' live' : ''}`} onClick={toggleMet} title={metOn ? 'Stop metronome' : 'Start metronome'}>
          {metOn ? '■' : '▶'}
        </button>
        <button className={`pchip wide${open === 'tempo' ? ' open' : ''}`} onClick={() => setOpen(open === 'tempo' ? null : 'tempo')}>
          ♩ <strong>{bpm}</strong> <span className="caret">▾</span>
        </button>

        <span className="pdiv" />

        <button className={`pchip wide${open === 'log' ? ' open' : ''}`} onClick={() => setOpen(open === 'log' ? null : 'log')}>
          ＋ Log <span className="caret">▾</span>
        </button>
      </div>

      {open === 'pitch' && (
        <div className="ppanel">
          <div className="overline">Reference pitch</div>
          <div className="noterow">
            {Object.keys(FREQ).map(n => (
              <button key={n} className={`note${n === droneNote ? ' on' : ''}`} onClick={() => setDroneNote(n)}>{n}</button>
            ))}
          </div>
          <div className="tinynote">Exercises set this for you when you tap their reference pitch.</div>
        </div>
      )}

      {open === 'tempo' && (
        <div className="ppanel">
          <div className="overline">Metronome · {bpm} bpm</div>
          <input type="range" min="40" max="200" value={bpm} style={{ width: '100%' }} onChange={e => setBpm(+e.target.value)} />
          <div className="preset-row">
            {[60, 72, 84, 96, 120].map(v => (
              <button key={v} className={`note${v === bpm ? ' on' : ''}`} onClick={() => setBpm(v)}>{v}</button>
            ))}
          </div>
        </div>
      )}

      {open === 'log' && (
        <div className="ppanel">
          <div className="overline">Log this practice</div>
          <textarea value={note} placeholder="What did you work on? One specific fix…" onChange={e => setNote(e.target.value)} />
          <button
            className="logbtn"
            onClick={() => { if (note.trim()) { onLog({ notes: note.trim(), durationMins: 5 }); setNote(''); setOpen(null) } }}
          >＋ Log practice</button>

          <div className="tinynote" style={{ borderTop: '1px solid var(--line)', paddingTop: 8, marginTop: 10 }}>
            {!isSyncConfigured()
              ? <>Sync not configured — your log is stored on this device. See DEPLOY.md §4.</>
              : paired
                ? <>This device is paired; your log syncs. <button className="linkbtn" onClick={() => { unpairDevice(); setPaired(false) }}>Unpair</button></>
                : <>Not paired. <button className="linkbtn" onClick={handlePair}>Pair this device</button> to share one history across devices.</>}
          </div>
        </div>
      )}
    </div>
  )
}
