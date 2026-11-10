import { useEffect, useRef } from 'react'

export function ParticleCanvas() {
  const ref = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = ref.current
    const ctx = canvas?.getContext('2d')
    if (!canvas || !ctx) return

    let width = 0
    let height = 0
    let frame = 0
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    const resize = () => {
      width = canvas.width = window.innerWidth
      height = canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    const particles = Array.from({ length: 45 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5,
      radius: Math.random() * 2 + 1,
    }))

    const draw = () => {
      ctx.clearRect(0, 0, width, height)
      const styles = getComputedStyle(document.documentElement)
      const dot = styles.getPropertyValue('--canvas-dot').trim() || '#f59e0b'
      const line = styles.getPropertyValue('--canvas-line').trim() || '11, 43, 107'

      particles.forEach((p, i) => {
        if (!reduced) {
          p.x += p.vx
          p.y += p.vy
          if (p.x < 0 || p.x > width) p.vx *= -1
          if (p.y < 0 || p.y > height) p.vy *= -1
        }
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2)
        ctx.fillStyle = dot
        ctx.fill()

        for (let j = i + 1; j < particles.length; j++) {
          const q = particles[j]
          const dist = Math.hypot(p.x - q.x, p.y - q.y)
          if (dist < 120) {
            ctx.beginPath()
            ctx.moveTo(p.x, p.y)
            ctx.lineTo(q.x, q.y)
            ctx.strokeStyle = `rgba(${line}, ${1 - dist / 120})`
            ctx.stroke()
          }
        }
      })
      if (!reduced) frame = requestAnimationFrame(draw)
    }
    draw()

    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return <canvas ref={ref} className="canvas-bg" aria-hidden="true" />
}
