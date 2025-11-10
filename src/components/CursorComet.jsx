import { useEffect, useRef } from 'react'
import { useReducedMotion } from 'framer-motion'

// Lightweight cursor trail ("comet") that renders a few glow dots following the pointer.
// Perf: requestAnimationFrame loop, transforms only, reduced motion respected.
export default function CursorComet() {
  const prefersReduced = useReducedMotion()
  const hostRef = useRef(null)
  const pointsRef = useRef(
    Array.from({ length: 6 }).map(() => ({ x: window.innerWidth / 2, y: window.innerHeight / 2 }))
  )
  const targetRef = useRef({ x: window.innerWidth / 2, y: window.innerHeight / 2 })
  const rafRef = useRef(0)

  useEffect(() => {
    if (prefersReduced) return

    const onMove = (e) => {
      targetRef.current.x = e.clientX
      targetRef.current.y = e.clientY
    }
    window.addEventListener('pointermove', onMove, { passive: true })

    const loop = () => {
      const pts = pointsRef.current
      const t = targetRef.current
      // Ease first point to target
      pts[0].x += (t.x - pts[0].x) * 0.25
      pts[0].y += (t.y - pts[0].y) * 0.25
      // Each next point eases to previous
      for (let i = 1; i < pts.length; i++) {
        pts[i].x += (pts[i - 1].x - pts[i].x) * 0.35
        pts[i].y += (pts[i - 1].y - pts[i].y) * 0.35
      }
      // Render
      const host = hostRef.current
      if (host) {
        for (let i = 0; i < pts.length; i++) {
          const el = host.children[i]
          if (!el) continue
          const { x, y } = pts[i]
          el.style.transform = `translate3d(${x}px, ${y}px, 0)`
        }
      }
      rafRef.current = requestAnimationFrame(loop)
    }
    rafRef.current = requestAnimationFrame(loop)

    return () => {
      window.removeEventListener('pointermove', onMove)
      cancelAnimationFrame(rafRef.current)
    }
  }, [prefersReduced])

  if (prefersReduced) return null

  return (
    <div ref={hostRef} className="pointer-events-none fixed inset-0 z-[60] mix-blend-screen" aria-hidden>
      {/* Larger head */}
      <Dot size={14} opacity={0.35} blur={24} delay={0} />
      {/* Trail dots */}
      <Dot size={10} opacity={0.28} blur={22} delay={0.02} />
      <Dot size={8} opacity={0.22} blur={18} delay={0.04} />
      <Dot size={6} opacity={0.18} blur={16} delay={0.06} />
      <Dot size={5} opacity={0.14} blur={14} delay={0.08} />
      <Dot size={4} opacity={0.10} blur={12} delay={0.10} />
    </div>
  )
}

function Dot({ size, opacity, blur }) {
  return (
    <div
      style={{ width: size, height: size, marginLeft: -size / 2, marginTop: -size / 2, filter: `blur(${blur}px)` }}
      className="absolute rounded-full bg-cyan-400/90"
    />
  )
}
