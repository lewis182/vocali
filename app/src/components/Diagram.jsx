/* Diagram block — sits between Technique and Exercise.
   Accuracy rule (handover §1): a diagram must be source-verified before it
   ships. Until `verified` is true the caption carries a visible flag, so an
   unchecked visual can never masquerade as authoritative. */

export default function Diagram ({ diagram }) {
  if (!diagram) return null
  return (
    <div className="diagram">
      <span className="overline">Diagram · {diagram.title}</span>
      <div dangerouslySetInnerHTML={{ __html: diagram.svg }} />
      <div className="caption">
        {diagram.caption}
        {!diagram.verified && (
          <> <span className="unverified">· awaiting source verification</span></>
        )}
      </div>
    </div>
  )
}
