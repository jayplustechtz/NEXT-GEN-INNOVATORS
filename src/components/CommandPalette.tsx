import { useEffect, useMemo, useRef, useState } from 'react'
import { sections } from '../data'

type Props = { open: boolean; onClose: () => void }

export function CommandPalette({ open, onClose }: Props) {
  return open ? <PaletteDialog onClose={onClose} /> : null
}

function PaletteDialog({ onClose }: { onClose: () => void }) {
  const [query, setQuery] = useState('')
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    inputRef.current?.focus()
  }, [])

  const results = useMemo(() => {
    const q = query.trim().toLowerCase()
    return q ? sections.filter((s) => s.label.toLowerCase().includes(q)) : sections
  }, [query])

  return (
    <div
      className="palette"
      role="dialog"
      aria-modal="true"
      aria-label="Quick navigation"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) onClose()
      }}
    >
      <div className="palette__box">
        <div className="palette__top">
          <input
            ref={inputRef}
            type="text"
            placeholder="Type a command or search..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' && results[0]) {
                window.location.hash = results[0].href
                onClose()
              }
            }}
          />
          <button type="button" onClick={onClose}>
            ESC
          </button>
        </div>
        <div className="palette__list">
          {results.length === 0 ? <p className="palette__empty">No results found.</p> : null}
          {results.map((s) => (
            <a key={s.href} href={s.href} onClick={onClose}>
              <i className={`fa-solid ${s.icon}`} aria-hidden="true" />
              {s.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}
