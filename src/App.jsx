import MinimalNav from './components/MinimalNav'
import CursorComet from './components/CursorComet'
import MagneticButton from './components/MagneticButton'
import { motion, useReducedMotion } from 'framer-motion'

function App() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white selection:bg-fuchsia-400/20 selection:text-white">
      <CursorComet />
      <MinimalNav />
      <main className="pt-24">
        <EditorialHero />
        <KineticCTA />
        <MasonryShowcase />
        <InkSpreadGallery />
        <PunchyFooter />
      </main>
    </div>
  )
}

function EditorialHero() {
  const prefersReduced = useReducedMotion()
  const line = (text, colorClasses = '') => (
    <motion.div
      key={text}
      initial={{ y: prefersReduced ? 0 : 40, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, amount: 0.6 }}
      transition={{ type: 'spring', stiffness: 140, damping: 18 }}
      className={`leading-[0.9] tracking-[-0.02em] ${colorClasses}`}
    >
      <span className="inline-block will-change-transform">{text}</span>
    </motion.div>
  )

  return (
    <section className="relative overflow-hidden">
      {/* brutalist color pops */}
      <div className="pointer-events-none absolute -top-24 -left-20 h-72 w-72 rotate-6 rounded-lg bg-fuchsia-500/20 blur-2xl" />
      <div className="pointer-events-none absolute top-40 -right-16 h-60 w-60 -rotate-6 rounded-lg bg-cyan-400/20 blur-2xl" />
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8 py-16 md:py-24">
        <p className="inline-flex items-center gap-2 rounded-sm border border-white/10 bg-white/5 px-2 py-1 text-[10px] uppercase tracking-wider text-zinc-300">
          Editorial Brutalism · Visura
        </p>
        <div className="mt-6 md:mt-10 font-black">
          <h1 className="text-[12vw] md:text-[8vw] lg:text-[6vw]">
            {line('Make it LOUD.', 'text-white')}
            {line('Make it CLEAR.', 'text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-cyan-400')}
            {line('Make it MOVE.', 'text-white')}
          </h1>
        </div>
        <div className="mt-6 max-w-2xl text-zinc-300 text-sm md:text-base">
          We’re shifting to an editorial, high-impact surface: oversized type, kinetic motion, and unapologetic color blocks that demand attention.
        </div>
      </div>
    </section>
  )
}

function KineticCTA() {
  return (
    <section className="relative py-10 md:py-14">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-xl border border-white/10 bg-zinc-900/60">
          {/* sharp split stripe */}
          <div className="absolute inset-y-0 left-1/2 w-px bg-gradient-to-b from-transparent via-white/20 to-transparent" />
          <div className="relative grid gap-6 md:grid-cols-2 p-6 md:p-10">
            <div>
              <h2 className="text-2xl md:text-4xl font-extrabold leading-tight">
                Headlines with bite.
              </h2>
              <p className="mt-3 text-zinc-300">
                Magnetic interactions with visible pull, designed for quick decisions.
              </p>
            </div>
            <div className="flex items-end md:items-center justify-start md:justify-end gap-4">
              <MagneticButton href="#" className="bg-white text-zinc-900 hover:bg-zinc-200 rounded-lg px-6 py-3">
                Start Now
              </MagneticButton>
              <MagneticButton href="#" as="button" className="rounded-lg px-6 py-3 bg-gradient-to-r from-fuchsia-500 to-cyan-400 text-zinc-950 font-semibold">
                Explore Demos
              </MagneticButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function MasonryShowcase() {
  const items = Array.from({ length: 10 }).map((_, i) => ({
    id: i,
    tall: i % 3 === 0,
    color:
      i % 4 === 0
        ? 'bg-fuchsia-500/20'
        : i % 4 === 1
        ? 'bg-cyan-400/20'
        : i % 4 === 2
        ? 'bg-amber-400/20'
        : 'bg-emerald-400/20',
  }))

  return (
    <section className="relative py-10 md:py-16">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <div className="flex items-baseline justify-between">
          <h3 className="text-xl md:text-2xl font-bold">Masonry Showcase</h3>
          <span className="text-xs text-zinc-400">Asymmetric, fast, editorial</span>
        </div>
        <div className="mt-6 columns-1 md:columns-2 lg:columns-3 gap-4 [column-fill:balance]"><div>
          {items.map((it) => (
            <motion.div
              key={it.id}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
              className={`mb-4 break-inside-avoid rounded-xl border border-white/10 bg-zinc-900/60 ${it.tall ? 'h-72' : 'h-48'} relative overflow-hidden`}
            >
              <div className={`absolute inset-0 ${it.color}`} />
              <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:22px_22px] opacity-30" />
              <div className="absolute bottom-3 left-3 text-[10px] uppercase tracking-wider text-zinc-300">Block #{it.id + 1}</div>
            </motion.div>
          ))}
        </div></div>
      </div>
    </section>
  )
}

function InkSpreadGallery() {
  const cards = [
    { title: 'Type Systems', color: 'from-fuchsia-500 to-rose-500' },
    { title: 'Motion Grammar', color: 'from-cyan-400 to-sky-500' },
    { title: 'Layout Engine', color: 'from-amber-400 to-yellow-500' },
    { title: 'Interaction Lab', color: 'from-emerald-400 to-teal-500' },
  ]

  return (
    <section className="relative py-10 md:py-16">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {cards.map((c) => (
            <InkCard key={c.title} title={c.title} color={c.color} />
          ))}
        </div>
      </div>
    </section>
  )
}

function InkCard({ title, color }) {
  return (
    <div className="group relative overflow-hidden rounded-xl border border-white/10 bg-zinc-900/60 p-6">
      {/* ink spread */}
      <span className={`pointer-events-none absolute -inset-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></span>
      <span className={`pointer-events-none absolute inset-0 scale-0 group-hover:scale-150 transition-transform duration-500 ease-out rounded-full bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.12),transparent_60%)]`} />
      <div className="relative">
        <div className="inline-flex items-center gap-2 text-[10px] uppercase tracking-wider text-zinc-400">
          <span className={`h-2 w-2 rounded-full bg-gradient-to-r ${color}`}></span>
          Module
        </div>
        <h4 className="mt-4 text-lg font-extrabold leading-none">{title}</h4>
        <p className="mt-2 text-sm text-zinc-300">Hover to see the ink spread. Bold color pops drive attention.</p>
        <div className={`mt-6 h-24 rounded-lg border border-white/10 bg-gradient-to-r ${color} opacity-70`} />
      </div>
    </div>
  )
}

function PunchyFooter() {
  return (
    <footer className="py-14">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-zinc-400 text-sm">© {new Date().getFullYear()} Visura Labs — Editorial Brutalism</p>
          <div className="flex items-center gap-3">
            <a className="text-xs px-3 py-1 rounded-md border border-white/10 hover:bg-white hover:text-zinc-900 transition-colors" href="#">Docs</a>
            <a className="text-xs px-3 py-1 rounded-md border border-white/10 hover:bg-white hover:text-zinc-900 transition-colors" href="#">Changelog</a>
            <a className="text-xs px-3 py-1 rounded-md border border-white/10 hover:bg-white hover:text-zinc-900 transition-colors" href="#">X</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default App
