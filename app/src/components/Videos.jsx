import { useState } from 'react'

/* Videos carry a role so a section can show more than a single coach clip:
     technique      — a coach demonstrating the skill
     mechanism      — what physically happens (stroboscopy, MRI, animation)
     second opinion — another coach on the same thing
   Each keeps the in-card player, the tidy "unavailable" fallback, and an
   always-present link out. Nothing is ever downloaded or re-hosted. */

export function VideoCard ({ video }) {
  const [broken, setBroken] = useState(!video.available)
  const url = video.url || `https://www.youtube.com/watch?v=${video.youtubeId}`
  return (
    <div className="video">
      {video.role && <span className={`vrole r-${video.role.replace(' ', '-')}`}>{video.role}</span>}
      <div className="vframe">
        {broken
          ? (
            <div className="vfallback">
              <strong>Video unavailable</strong>
              <span className="tinynote">This clip has been removed or embedding is disabled. Use the link below.</span>
            </div>
            )
          : (
            <iframe
              src={`https://www.youtube-nocookie.com/embed/${video.youtubeId}`}
              title={video.title}
              allow="accelerometer; encrypted-media; picture-in-picture"
              allowFullScreen
            />
            )}
      </div>
      <div className="vmeta">
        <span>{video.title}{video.coach ? ` · ${video.coach}` : ''}</span>
        <span style={{ whiteSpace: 'nowrap' }}>
          <a href={url} target="_blank" rel="noopener noreferrer">YouTube ↗</a>
          {' · '}
          <button className="toggle" onClick={() => setBroken(b => !b)}>fallback</button>
        </span>
      </div>
      {video.topic && <div className="tinynote">{video.topic}</div>}
      {video.note && <div className="tinynote vnote">⚑ {video.note}</div>}
    </div>
  )
}

export default function Videos ({ videos, label = 'Watch — plays in the card' }) {
  if (!videos?.length) return null
  return (
    <div className="block">
      <span className="overline">{label}</span>
      <div className={videos.length > 1 ? 'vgrid' : ''}>
        {videos.map(v => <VideoCard key={v.id} video={v} />)}
      </div>
    </div>
  )
}
