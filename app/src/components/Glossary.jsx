import { glossary } from '../content/glossary.js'

export default function Glossary () {
  const terms = Object.keys(glossary).sort((a, b) => a.localeCompare(b))
  return (
    <div>
      <div className="overline crumb">Reference</div>
      <h1 className="title">Glossary</h1>
      <p className="lede">
        Plain-English definitions of the technical terms used across the app.
        Throughout the lessons these terms are underlined — hover to see the
        definition without leaving the page.
      </p>
      <div className="gloss">
        {terms.map(t => (
          <div className="grow" key={t}>
            <div className="gt">{t}</div>
            <div className="gd">{glossary[t]}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
