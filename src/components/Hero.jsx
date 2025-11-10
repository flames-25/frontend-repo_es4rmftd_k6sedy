import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] overflow-hidden bg-gradient-to-b from-zinc-950 via-zinc-950 to-zinc-900">
      <div className="absolute inset-0 [mask-image:radial-gradient(80%_70%_at_50%_20%,black,transparent)]">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[1200px] h-[1200px] rounded-full bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.35),transparent_60%)] blur-3xl" />
        <div className="absolute -bottom-40 left-0 right-0 mx-auto w-[900px] h-[900px] rounded-full bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.25),transparent_60%)] blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 lg:px-8 pt-28 grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-300">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
            AI-powered screen recording
          </div>
          <h1 className="mt-6 text-4xl md:text-6xl font-semibold tracking-tight text-white">
            Precision. Motion. Intelligence. Clarity.
          </h1>
          <p className="mt-5 text-zinc-300 leading-relaxed max-w-xl">
            Visura is a professional screen recording extension with cinematic zoom, cursor trails, multi-trim, and AI-assisted edits. Built for creators who demand gorgeous output with zero friction.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#download" className="px-5 py-3 rounded-md bg-white text-zinc-900 font-medium shadow-sm hover:bg-zinc-100">Add to Chrome</a>
            <a href="#showcase" className="px-5 py-3 rounded-md bg-white/10 text-white border border-white/10 hover:bg-white/15">Watch Showcase</a>
          </div>
        </div>

        <div className="relative h-[520px] rounded-2xl border border-white/10 bg-white/5 overflow-hidden">
          <Spline scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-zinc-950/30 via-transparent to-transparent" />
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-zinc-900 to-transparent" />
    </section>
  )
}
