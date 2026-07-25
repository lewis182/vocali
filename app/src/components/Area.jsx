import Rich from './Glossify.jsx'
import Diagram from './Diagram.jsx'

export default function Area ({ area, onOpenSection, onRunArea, onOpenArea }) {
  if (area.stub) {
    return (
      <div>
        <div className="overline crumb">Area {area.n} · {area.group}</div>
        <h1 className="title">{area.title}</h1>
        <div className="placeholder">
          This area is specced in the handover (sections, exercises and videos) and
          will be written to the same depth as Registration.
          <br /><br />
          <button className="btn ghost" onClick={() => onOpenArea('registration')}>
            See the fully-built Registration area →
          </button>
        </div>
      </div>
    )
  }

  return (
    <div>
      <div className="overline crumb">Area {area.n} · {area.group}</div>
      <h1 className="title">{area.title}</h1>
      <Rich tag="p" className="lede" html={area.lede} />
      <Diagram diagram={area.diagram} />
      <div className="block"><Rich tag="p" html={area.intro} /></div>

      <hr className="rule" />
      <div className="overline">The {area.sections.length} sections</div>
      <div className="sections">
        {area.sections.map(s => (
          <button className="row" key={s.id} onClick={() => onOpenSection(s.id)}>
            <span className="num">{s.num}</span>
            <span className="rt">
              <span className="st">{s.title}</span>
              <span className="sd" style={{ display: 'block' }}>{s.desc}</span>
            </span>
            <span className="lvl">{s.level}</span>
            <span className="chev">›</span>
          </button>
        ))}
      </div>

      <button className="btn" onClick={onRunArea}>Run this area →</button>
      <p className="tinynote">
        "Run this area" chains every exercise above into one guided session with the
        timer and reference tones — for once the individual techniques are understood.
      </p>
    </div>
  )
}
