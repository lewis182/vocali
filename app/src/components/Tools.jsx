import { useEffect, useState } from 'react'
import { FREQ, startDrone, stopDrone, startMetronome, stopMetronome } from '../lib/audio.js'
import { isSyncConfigured, isPaired, pairDevice, unpairDevice } from '../lib/store.js'

/* The tools rail: reference drone, metronome, quick log, and device pairing.
   These are core scope, not extras — several exercises need a reference pitch
   or a click, and "everything in one place" breaks the moment you leave to
   find a starting note. */

export default function Tools ({ droneNote, setDroneNote, onLog }) {
  const [dronePlaying, setDronePlaying] = useState(false)
  const [metOn, setMetOn] = useState(false)
  const [bpm, setBpm] = useState(72)
  const [note, setNote] = useState('')
  const [msg, setMsg] = useState('')
  const [paired, setPaired] = useState(isPaired())

  // restart the drone when the note changes while sounding
  useEffect(() => {
    if (dronePlaying) startDrone(droneNote)
  }, [droneNote]) // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (metOn) startMetronome(bpm)
  }, [bpm]) // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => () => { stopDrone(); stopMetronome() }, [])

  function toggleDrone () {
    if (dronePlaying) { stopDrone(); setDronePlaying(false) } else { startDrone(droneNote); setDronePlaying(true) }
  }
  function toggleMet () {
    if (metOn) { stopMetronome(); setMetOn(false) } else { startMetronome(bpm); setMetOn(true) }
  }

  async function handlePair () {
    const phrase = window.prompt(
      'Enter your sync passphrase.\n\nUse the same phrase on every device to share one practice history. It is never stored or sent — it only derives your private record id.'
    )
    if (!phrase) return
    await pairDevice(phrase)
    setPaired(true)
    setMsg('Device paired — your log will sync.')
  }

  return (
    <>
      <div className="tool">
        <h5>Reference pitch · drone</h5>
        <div className="noterow">
          {Object.keys(FREQ).map(n => (
            <button
              key={n}
              className={`note${n === droneNote ? ' on' : ''}`}
              onClick={() => setDroneNote(n)}
            >{n}</button>
          ))}
        </div>
        <div className="ctl">
          <button className={`play${dronePlaying ? ' active' : ''}`} onClick={toggleDrone}>
            {dronePlaying ? '■ Stop drone' : '▶ Play drone'}
          </button>
          <span className="tinynote" style={{ margin: 0 }}>{droneNote}</span>
        </div>
      </div>

      <div className="tool">
        <h5>Metronome</h5>
        <div className="ctl">
          <button className={`play${metOn ? ' active' : ''}`} onClick={toggleMet}>
            {metOn ? '■ Stop' : '▶ Start'}
          </button>
          <span className="bpmval">{bpm}</span>
        </div>
        <div className="bpm">
          <input type="range" min="40" max="200" value={bpm} onChange={e => setBpm(+e.target.value)} />
        </div>
      </div>

      <div className="tool">
        <h5>Log this practice</h5>
        <textarea
          value={note}
          placeholder="What did you work on? One specific fix…"
          onChange={e => setNote(e.target.value)}
        />
        <button
          className="logbtn"
          onClick={() => {
            if (!note.trim()) { setMsg('Add a note first.'); return }
            onLog({ notes: note.trim(), durationMins: 5 })
            setNote('')
            setMsg('Logged.')
          }}
        >＋ Log practice</button>
        {msg && <div className="tinynote">{msg}</div>}
      </div>

      <div className="tool">
        <h5>Sync</h5>
        {!isSyncConfigured()
          ? <div className="tinynote" style={{ marginTop: 0 }}>
              Cloud sync not configured. The app works fully offline and stores your
              log on this device. Add Supabase keys to <code>.env.local</code> to sync
              between desktop and iPad.
            </div>
          : paired
            ? <>
                <div className="tinynote" style={{ marginTop: 0 }}>This device is paired — your log syncs.</div>
                <button className="logbtn" style={{ background: 'transparent', color: 'var(--ink)', border: '1px solid var(--line)' }}
                  onClick={() => { unpairDevice(); setPaired(false); setMsg('Unpaired.') }}>
                  Unpair this device
                </button>
              </>
            : <>
                <div className="tinynote" style={{ marginTop: 0 }}>Pair once with your passphrase to share one history across devices.</div>
                <button className="logbtn" onClick={handlePair}>Pair this device</button>
              </>}
      </div>
    </>
  )
}
