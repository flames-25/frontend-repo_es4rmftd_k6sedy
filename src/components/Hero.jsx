import { useEffect, useMemo, useRef, useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import MagneticButton from './MagneticButton'

// Orbital System Hero: asymmetric split with lens wall and orbital badges (placeholder for later)
export default function Hero() {
  const prefersReducedMotion = useReducedMotion()
  const { ref, inView } = useInView({ rootMargin: '0px 0px -20% 0px', threshold: 0.2 })

  return (
    <section ref={ref} className="relative min-h-[92vh] overflow-hidden bg-zinc-950">
      {/* Ambient background with cyber cyan accent */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-64 left-1/2 -translate-x-1/2 w-[1200px] h-[1200px] rounded-full bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.18),transparent_55%)] blur-xl" />
        <div className="absolute -bottom-72 left-1/3 w-[900px] h-[900px] rounded-full bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.14),transparent_60%)] blur-xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 lg:px-8 pt-28 grid lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-5">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-300">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 animate-pulse" />
            Visura • AI screen recording for storytellers
          </div>
          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, ease: 'easeOut', delay: 0.05 }}
            className="mt-6 text-4xl md:text-6xl font-semibold tracking-tight text-white"
          >
            Direct attention with cinematic clarity.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, ease: 'easeOut', delay: 0.15 }}
            className="mt-5 text-zinc-300 leading-relaxed max-w-xl"
          >
            Orchestrate zooms, emphasize clicks, and publish pixel-perfect walkthroughs. No clutter. No lag. Just smooth, precise motion.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, ease: 'easeOut', delay: 0.25 }}
            className="mt-8 flex flex-col sm:flex-row gap-3"
          >
            <MagneticButton href="#download" className="bg-white text-zinc-900 shadow-sm hover:bg-zinc-100">
              Add to Chrome
            </MagneticButton>
            <MagneticButton href="#showcase" className="bg-white/10 text-white border border-white/10 hover:bg-white/15">
              See it in motion
            </MagneticButton>
          </motion.div>
          <div className="mt-6 flex items-center gap-6 text-zinc-400 text-sm">
            <span>4K export</span>
            <span>AI silence cut</span>
            <span>Keyframe zooms</span>
          </div>
        </div>

        {/* Lens Wall Stage */}
        <div className="lg:col-span-7 relative h-[520px] rounded-2xl border border-white/10 bg-zinc-900/40 overflow-hidden">
          {prefersReducedMotion ? (
            <StaticStage />
          ) : (
            <LensWall inView={inView} />
          )}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-zinc-950/30 via-transparent to-transparent" />
        </div>
      </div>

      {/* diagonal divider hint */}
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-zinc-900 to-transparent" />
    </section>
  )
}

function StaticStage() {
  return (
    <div className="w-full h-full relative">
      <GridBackdrop subtle />
      <div className="absolute inset-0 grid place-items-center">
        <div className="h-40 w-40 rounded-2xl border border-white/10 bg-zinc-800/40 backdrop-blur-sm" />
      </div>
    </div>
  )
}

function LensWall({ inView }) {
  const containerRef = useRef(null)
  const [pos, setPos] = useState({ x: 0.5, y: 0.5 })

  useEffect(() => {
    const el = containerRef.current
    if (!el) return
    let raf = 0
    const onMove = (e) => {
      const rect = el.getBoundingClientRect()
      const x = (e.clientX - rect.left) / rect.width
      const y = (e.clientY - rect.top) / rect.height
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(() => setPos({ x: Math.max(0, Math.min(1, x)), y: Math.max(0, Math.min(1, y)) }))
    }
    el.addEventListener('mousemove', onMove)
    return () => {
      el.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(raf)
    }
  }, [])

  const float = inView
    ? { y: [0, -6, 0], transition: { duration: 6, repeat: Infinity, ease: 'easeInOut' } }
    : {}

  const layer = (factor) => ({
    transform: `translate3d(${(pos.x - 0.5) * factor}px, ${(pos.y - 0.5) * factor}px, 0)`
  })

  return (
    <div ref={containerRef} className="w-full h-full relative">
      <GridBackdrop />

      {/* Tile lenses */}
      <div className="absolute inset-8 grid grid-cols-3 gap-4">
        {Array.from({ length: 6 }).map((_, i) => (
          <motion.div key={i} animate={float} style={layer((i % 3 - 1) * 10)} className="relative rounded-xl overflow-hidden border border-white/10 bg-white/5">
            <div className="absolute inset-0 scale-[1.5] rotate-[6deg]">
              <GridBackdrop />
            </div>
            {/* cyan refraction edge */}
            <div className="absolute inset-0 rounded-xl ring-1 ring-cyan-400/10" />
            <div className="absolute inset-0 bg-[radial-gradient(180px_180px_at_30%_30%,rgba(34,211,238,0.14),transparent_55%)]" />
            {/* inner glass */}
            <div className="absolute inset-0 backdrop-blur-sm bg-white/5" />
          </motion.div>
        ))}
      </div>

      {/* Hero Lens */}
      <Lens x={pos.x} y={pos.y} />
    </div>
  )
}

function GridBackdrop({ subtle = false }) {
  const opacity = subtle ? '0.06' : '0.09'
  return (
    <div className="absolute inset-0">
      <div className={`absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,${opacity})_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,${opacity})_1px,transparent_1px)] bg-[size:24px_24px]`} />
      <div className="absolute inset-0 bg-[radial-gradient(1000px_400px_at_50%_120%,rgba(34,211,238,0.12),transparent)]" />
    </div>
  )
}

function Lens({ x, y }) {
  const size = useMemo(() => 260, [])
  const style = useMemo(() => ({
    left: `calc(${x * 100}% - ${size / 2}px)`,
    top: `calc(${y * 100}% - ${size / 2}px)`,
    width: `${size}px`,
    height: `${size}px`
  }), [x, y, size])

  return (
    <div style={style} className="absolute rounded-full overflow-hidden will-change-transform">
      <div className="absolute inset-0 scale-[1.6] rotate-[8deg]">
        <GridBackdrop />
      </div>
      <div className="absolute inset-0 rounded-full backdrop-blur-md bg-white/5 border border-white/20 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.6),inset_0_1px_0_0_rgba(255,255,255,0.08)]" />
      <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_30%_30%,rgba(34,211,238,0.12),transparent_55%)]" />
    </div>
  )
}
