import { glossary } from '../content/glossary.js'

/* Underlines the first occurrence of each glossary term per page and attaches
   the definition as a tooltip. SVG blocks are protected from substitution. */

const TERMS = Object.keys(glossary).sort((a, b) => b.length - a.length)
const escapeRe = s => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')

export function glossifyHtml (html) {
  if (!html) return html
  const svgs = []
  let out = String(html).replace(/<svg[\s\S]*?<\/svg>/g, m => {
    svgs.push(m)
    return `⁣${svgs.length - 1}⁣`
  })

  const used = new Set()
  out = out.split(/(<[^>]+>)/).map(seg => {
    if (seg.startsWith('<')) return seg
    TERMS.forEach(t => {
      if (used.has(t)) return
      const re = new RegExp(`\\b(${escapeRe(t)})\\b`)
      if (re.test(seg)) {
        const def = glossary[t].replace(/"/g, '&quot;')
        seg = seg.replace(re, `<span class="gl" title="${def}">$1</span>`)
        used.add(t)
      }
    })
    return seg
  }).join('')

  return out.replace(/⁣(\d+)⁣/g, (_, i) => svgs[+i])
}

/** Renders trusted, authored content HTML with glossary terms linked. */
export default function Rich ({ html, tag: Tag = 'div', className, glossify = true }) {
  const content = glossify ? glossifyHtml(html) : html
  return <Tag className={className} dangerouslySetInnerHTML={{ __html: content }} />
}
