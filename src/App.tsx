import { useCallback, useEffect, useState } from 'react'
import { About } from './components/About'
import { CommandPalette } from './components/CommandPalette'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { InnovationProcess } from './components/InnovationProcess'
import { ParticleCanvas } from './components/ParticleCanvas'
import { Projects } from './components/Projects'
import { Values } from './components/Values'
import { VisionMission } from './components/VisionMission'
import { WhatWeDo } from './components/WhatWeDo'

type Theme = 'dark' | 'light'

function initialTheme(): Theme {
  try {
    const saved = localStorage.getItem('ngi-theme')
    if (saved === 'light' || saved === 'dark') return saved
  } catch {
    /* storage unavailable */
  }
  return 'dark'
}

function App() {
  const [theme, setTheme] = useState<Theme>(initialTheme)
  const [paletteOpen, setPaletteOpen] = useState(false)

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    try {
      localStorage.setItem('ngi-theme', theme)
    } catch {
      /* storage unavailable */
    }
  }, [theme])

  const togglePalette = useCallback(() => setPaletteOpen((v) => !v), [])

  // Keyboard shortcuts: Ctrl/Cmd+K, Esc, and "g" then "h" to go home
  useEffect(() => {
    let gPressed = false
    let timer = 0
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault()
        setPaletteOpen((v) => !v)
        return
      }
      if (e.key === 'Escape') setPaletteOpen(false)
      const target = e.target as HTMLElement
      if (['INPUT', 'TEXTAREA'].includes(target.tagName)) return
      if (e.key === 'g') {
        gPressed = true
        window.clearTimeout(timer)
        timer = window.setTimeout(() => (gPressed = false), 800)
      } else if (e.key === 'h' && gPressed) {
        window.scrollTo({ top: 0, behavior: 'smooth' })
        gPressed = false
      }
    }
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('keydown', onKey)
      window.clearTimeout(timer)
    }
  }, [])

  // Cursor spotlight for every .spotlight-card
  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      const card = (e.target as HTMLElement).closest<HTMLElement>('.spotlight-card')
      if (!card) return
      const rect = card.getBoundingClientRect()
      card.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`)
      card.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`)
    }
    document.addEventListener('mousemove', onMove)
    return () => document.removeEventListener('mousemove', onMove)
  }, [])

  return (
    <>
      <ParticleCanvas />
      <Header
        theme={theme}
        onToggleTheme={() => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))}
        onOpenPalette={togglePalette}
      />
      <main id="main">
        <Hero />
        <About />
        <WhatWeDo />
        <VisionMission />
        <InnovationProcess />
        <Values />
        <Projects />
        <Contact />
      </main>
      <Footer />

      <button type="button" className="glass-card float-btn" onClick={togglePalette} aria-label="Open quick navigation">
        <span className="float-btn__icon">
          <i className="fa-solid fa-comments" aria-hidden="true" />
        </span>
        <span className="float-btn__text">
          <strong>Connect with NGI</strong>
          <span>Click to open shortcuts</span>
        </span>
      </button>

      <CommandPalette open={paletteOpen} onClose={() => setPaletteOpen(false)} />
    </>
  )
}

export default App
