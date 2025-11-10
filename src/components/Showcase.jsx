import { Section } from './Sections'
import { motion, useReducedMotion } from 'framer-motion'

export default function Showcase() {
  const prefersReducedMotion = useReducedMotion()
  const variants = prefersReducedMotion ? {} : {
    hidden: { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
  }

  // Unique concept: a single, continuous "editor timeline" that scrubs on hover
  // Super lightweight: no heavy media, just transforms
  return (
    <Section id="showcase" title="A tactile timeline." subtitle="Scrub across frames to preview motion.">
      <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-zinc-900/40">
        {/* Track */}
        <div className="relative h-[300px] md:h-[360px]">
          {/* Background grid + stripe accents */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:24px_24px]" />
          <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-white/5 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/40 to-transparent" />

          {/* Timeline frames */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-10%' }}
            variants={variants}
            className="absolute inset-6 grid grid-cols-12 gap-3"
          >
            {Array.from({ length: 24 }).map((_, i) => (
              <Frame key={i} index={i} />
            ))}
          </motion.div>

          {/* Scrubber */}
          <Scrubber />
        </div>

        {/* Caption */}
        <div className="flex items-center justify-between px-6 py-4 text-sm text-zinc-300">
          <span>Hover to scrub • Click a frame to focus</span>
          <span className="text-zinc-400">Non-destructive • 120fps preview • GPU-light</span>
        </div>
      </div>
    </Section>
  )
}

function Frame({ index }) {
  // Generate subtle variation per frame using CSS gradients
  const hue = (index * 17) % 360
  return (
    <button
      className="aspect-[16/10] w-full rounded-lg border border-white/10 overflow-hidden group relative focus:outline-none focus:ring-2 focus:ring-fuchsia-400/40"
      style={{
        background:
          `radial-gradient(800px_200px_at_50%_120%, rgba(168,85,247,0.10), transparent), ` +
          `conic-gradient(from 90deg, hsl(${hue} 95% 65% / 0.15), transparent 60%)`
      }}
    >
      {/* Inner panel */}
      <div className="absolute inset-0 bg-zinc-800/30" />
      {/* Cursor sparkle */}
      <div className="absolute right-3 bottom-3 h-2 w-2 rounded-full bg-white/70 shadow-[0_0_12px_4px_rgba(255,255,255,0.35)] opacity-0 group-hover:opacity-100 transition-opacity" />
    </button>
  )
}

function Scrubber() {
  // Pure CSS-powered scrubber: follows mouse via group-hover and pointer position with JS-less trick
  // For simplicity, we implement a JS scrubber with requestAnimationFrame for smoothness
  return (
    <div className="absolute inset-0" aria-hidden>
      <ScriptedScrubber />
    </div>
  )
}

function ScriptedScrubber() {
  // Keep state local and very light
  const line = typeof document !== 'undefined' ? document.createElement('div') : null
  return (
    <motion.div
      onMouseMove={(e) => {
        const host = e.currentTarget
        const rect = host.getBoundingClientRect()
        const x = Math.max(0, Math.min(rect.width, e.clientX - rect.left))
        host.style.setProperty('--x', `${x}px`)
      }}
      className="absolute inset-0"
    >
      <div className="pointer-events-none absolute top-6 bottom-6" style={{ left: 'var(--x, 50%)' }}>
        <div className="h-full w-px bg-white/50 shadow-[0_0_0_1px_rgba(255,255,255,0.12)]" />
        <div className="absolute -top-3 -translate-x-1/2 px-2 py-0.5 rounded bg-white/10 text-[10px] text-white/80 border border-white/10">SCRUB</div>
      </div>
    </motion.div>
  )
}
