import { useState } from 'react'
import { headerLinks, sections } from '../data'

type Props = { theme: 'dark' | 'light'; onToggleTheme: () => void; onOpenPalette: () => void }

export function Header({ theme, onToggleTheme, onOpenPalette }: Props) {
  const [open, setOpen] = useState(false)

  return (
    <header className="site-header">
      <div className="glass-card site-header__bar">
        <a className="brand" href="#home" onClick={() => setOpen(false)}>
          <div className="brand__tile">
            <span>NGI</span>
          </div>
          <span className="brand__name">
            NEXT GEN <em>INNOVATORS</em>
          </span>
        </a>

        <nav className="nav" aria-label="Primary">
          {sections
            .filter((s) => headerLinks.includes(s.href))
            .map((s) => (
              <a key={s.href} href={s.href}>
                {s.label}
              </a>
            ))}
        </nav>

        <div className="header-actions">
          <button type="button" className="search-btn" onClick={onOpenPalette}>
            <i className="fa-solid fa-magnifying-glass" aria-hidden="true" />
            <span>Search</span>
            <kbd>Ctrl K</kbd>
          </button>
          <button
            type="button"
            className="icon-btn"
            onClick={onToggleTheme}
            aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
            title="Toggle theme"
          >
            <i className={theme === 'dark' ? 'fa-solid fa-sun' : 'fa-solid fa-moon'} aria-hidden="true" />
          </button>
          <a className="btn btn--primary btn--sm header-cta" href="#contact">
            Contact Us
          </a>
          <button
            type="button"
            className="icon-btn menu-toggle"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
            onClick={() => setOpen((v) => !v)}
          >
            <i className={open ? 'fa-solid fa-xmark' : 'fa-solid fa-bars'} aria-hidden="true" />
          </button>
        </div>
      </div>

      {open ? (
        <nav id="mobile-menu" className="glass-card mobile-menu" aria-label="Mobile">
          {sections.map((s) => (
            <a key={s.href} href={s.href} onClick={() => setOpen(false)}>
              {s.label}
            </a>
          ))}
        </nav>
      ) : null}
    </header>
  )
}
