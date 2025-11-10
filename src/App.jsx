import MinimalNav from './components/MinimalNav'
import CursorComet from './components/CursorComet'
import { motion } from 'framer-motion'

function App() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white selection:bg-cyan-400/20 selection:text-white">
      <CursorComet />
      <MinimalNav />
      <main className="pt-24">
        <ManifestoHero />
        <SegmentedShowcase />
        <StudioGrid />
        <CTA />
        <Footer />
      </main>
    </div>
  )
}

function ManifestoHero() {
  return (
    <section className="relative overflow-hidden">
      {/* Orbital gradient field */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 size-[1200px] rounded-full bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.18),transparent_55%)] blur-2xl" />
        <div className="absolute -bottom-64 left-1/3 size-[900px] rounded-full bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.14),transparent_60%)] blur-xl" />
      </div>
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8 py-24">
        <p className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-300">
          <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 animate-pulse" />
          Visura Labs • Orbit System
        </p>
        <h1 className="mt-6 text-4xl md:text-6xl font-semibold tracking-tight">Design for intent, not noise.</h1>
        <p className="mt-5 max-w-2xl text-zinc-300 leading-relaxed">We’re rebuilding the surface from first principles — kinetic interfaces that move with purpose, tools that stay silent until the moment matters, and an aesthetic that feels inevitable.</p>
      </div>
      <KineticBoard />
    </section>
  )
}

function KineticBoard() {
  return (
    <div className="relative mx-auto max-w-7xl px-4 md:px-6 lg:px-8 pb-20">
      {/* Split, asymmetric kinetic board */}
      <div className="grid lg:grid-cols-12 gap-6">
        <div className="lg:col-span-5">
          <Card title="Precision Cursor" subtitle="Motion that respects intention.">
            <div className="relative h-40 overflow-hidden rounded-lg border border-white/10 bg-zinc-900/50">
              <div className="absolute inset-0 bg-[repeating-linear-gradient(90deg,rgba(255,255,255,0.08)_0_1px,transparent_1px_24px),repeating-linear-gradient(0deg,rgba(255,255,255,0.08)_0_1px,transparent_1px_24px)]" />
              <div className="absolute inset-0 grid place-items-center">
                <div className="h-16 w-16 rounded-full border border-white/20 bg-white/5 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.6),inset_0_1px_0_0_rgba(255,255,255,0.08)]" />
              </div>
            </div>
          </Card>
        </div>
        <div className="lg:col-span-7">
          <Card title="Lens Wall" subtitle="Depth, without distraction.">
            <div className="grid grid-cols-3 gap-3">
              {Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="relative aspect-video rounded-lg overflow-hidden border border-white/10 bg-white/5">
                  <div className="absolute inset-0 scale-[1.6] rotate-[8deg] bg-[repeating-linear-gradient(90deg,rgba(255,255,255,0.08)_0_1px,transparent_1px_24px),repeating-linear-gradient(0deg,rgba(255,255,255,0.08)_0_1px,transparent_1px_24px)]" />
                  <div className="absolute inset-0 ring-1 ring-cyan-400/10" />
                  <div className="absolute inset-0 bg-[radial-gradient(180px_180px_at_30%_30%,rgba(34,211,238,0.14),transparent_55%)]" />
                  <div className="absolute inset-0 backdrop-blur-sm bg-white/5" />
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}

function SegmentedShowcase() {
  return (
    <section className="relative">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8 py-16">
        <h2 className="text-2xl md:text-3xl font-semibold">Studios, not pages.</h2>
        <p className="mt-3 text-zinc-300 max-w-2xl">Each surface is a studio designed for one intent. We cut the chrome, keep the muscle, and let the work carry the weight.</p>
      </div>
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8 pb-24 grid md:grid-cols-3 gap-6">
        <StudioCard title="Narrative" tag="Cuts & Cues" color="from-cyan-400 to-sky-400" />
        <StudioCard title="Capture" tag="Live Lens" color="from-fuchsia-400 to-violet-400" />
        <StudioCard title="Delivery" tag="4K Social" color="from-emerald-400 to-teal-400" />
      </div>
    </section>
  )
}

function StudioCard({ title, tag, color }) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-zinc-900/40 p-6">
      <div className={`pointer-events-none absolute -inset-1 rounded-2xl bg-gradient-to-r ${color} opacity-0 group-hover:opacity-100 blur-2xl transition-opacity`} />
      <div className="relative">
        <div className="inline-flex items-center gap-2 text-xs text-zinc-300">
          <span className="h-1.5 w-1.5 rounded-full bg-white/70" />
          {tag}
        </div>
        <h3 className="mt-4 text-xl font-semibold">{title}</h3>
        <p className="mt-2 text-zinc-300">Minimal tools, maximal signal. Built to get out of your way.</p>
      </div>
      <div className="mt-6 grid grid-cols-3 gap-2">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="aspect-[16/10] rounded-lg border border-white/10 bg-zinc-800/40" />
        ))}
      </div>
    </div>
  )
}

function StudioGrid() {
  return (
    <section className="relative">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-2xl border border-white/10">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.07)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.07)_1px,transparent_1px)] bg-[size:24px_24px]" />
          <div className="relative grid md:grid-cols-4 gap-0">
            {['Focus','Orbit','Magnet','Spotlight'].map((label) => (
              <div key={label} className="p-6 md:p-8 border-b md:border-b-0 md:border-r border-white/10 bg-zinc-900/40">
                <h4 className="text-lg font-medium">{label}</h4>
                <p className="mt-2 text-sm text-zinc-300">A refined micro-interaction tuned for clarity and delight.</p>
                <div className="mt-4 h-24 rounded-lg border border-white/10 bg-zinc-800/40" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function Card({ title, subtitle, children }) {
  return (
    <div className="relative rounded-2xl border border-white/10 bg-zinc-900/40 p-6">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-xl font-semibold text-white">{title}</h3>
          <p className="text-sm text-zinc-300">{subtitle}</p>
        </div>
        <div className="h-6 w-6 rounded-full bg-white/10" />
      </div>
      <div className="mt-4">{children}</div>
    </div>
  )
}

function CTA() {
  return (
    <section id="cta" className="relative py-20">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-zinc-900/60 p-8 md:p-10">
          <div className="absolute -inset-2 rounded-2xl bg-[conic-gradient(from_180deg_at_50%_50%,rgba(34,211,238,0.0),rgba(34,211,238,0.18),rgba(34,211,238,0.0))] blur-2xl" />
          <div className="relative flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <h3 className="text-2xl md:text-3xl font-semibold">Join the orbit.</h3>
              <p className="mt-2 text-zinc-300">Early access ships soon. We’ll reserve your seat.</p>
            </div>
            <button className="px-4 py-2 rounded-full bg-white text-zinc-900 font-medium hover:bg-zinc-100">Get Early Access</button>
          </div>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="py-12 text-center text-sm text-zinc-400">
      <p>© {new Date().getFullYear()} Visura Labs</p>
    </footer>
  )
}

export default App
