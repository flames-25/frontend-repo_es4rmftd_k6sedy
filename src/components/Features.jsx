import { Zap, MousePointer2, Scissors, Focus, Wand2, Sparkles } from 'lucide-react'

const features = [
  {
    title: 'Cinematic Zoom & Pan',
    desc: 'Guide attention with buttery-smooth zooms and parallax pans — automatically timed or manually keyframed.',
    icon: Focus,
    glow: 'from-fuchsia-500 to-violet-500',
  },
  {
    title: 'Cursor Magic',
    desc: 'Accentuate clicks with pulses, trails, and spotlight modes that feel tactile yet tasteful.',
    icon: MousePointer2,
    glow: 'from-sky-500 to-cyan-400',
  },
  {
    title: 'Multi-Trim Editor',
    desc: 'Slice, reorder, and tighten your story without leaving the browser. Precision control with ripple edits.',
    icon: Scissors,
    glow: 'from-emerald-500 to-lime-400',
  },
  {
    title: 'AI Assist',
    desc: 'Auto-cut silence, remove hesitations, suggest zoom moments, and generate clean captions.',
    icon: Wand2,
    glow: 'from-indigo-500 to-blue-400',
  },
  {
    title: 'Instant Export',
    desc: 'Share in 4K web-optimized MP4 or GIF. Crisp, compressed, and ready for socials or docs.',
    icon: Zap,
    glow: 'from-amber-400 to-orange-500',
  },
  {
    title: 'Pro Presets',
    desc: 'Create your own style packs for zoom curves, cursor trails, and overlays. Swap looks in one click.',
    icon: Sparkles,
    glow: 'from-pink-500 to-rose-500',
  },
]

export default function Features() {
  return (
    <section id="features" className="relative py-24 bg-zinc-900">
      <div className="absolute inset-0 pointer-events-none [mask-image:radial-gradient(70%_60%_at_50%_0%,black,transparent)]">
        <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[900px] h-[900px] rounded-full bg-[radial-gradient(circle_at_center,rgba(244,244,245,0.06),transparent_60%)]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight">Craft with surgical clarity.</h2>
          <p className="mt-4 text-zinc-300">Every interaction is designed for elegance and speed, letting you focus on the story, not the software.</p>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map(({ title, desc, icon: Icon, glow }) => (
            <div key={title} className="relative group rounded-2xl border border-white/10 bg-white/5 p-6 overflow-hidden">
              <div className={`absolute -inset-1 opacity-0 group-hover:opacity-100 blur-xl bg-gradient-to-tr ${glow} transition-opacity`} />
              <div className="relative">
                <div className="h-10 w-10 rounded-lg bg-zinc-800/70 border border-white/10 grid place-items-center">
                  <Icon className="h-5 w-5 text-white" />
                </div>
                <h3 className="mt-4 text-lg font-medium text-white">{title}</h3>
                <p className="mt-2 text-sm text-zinc-300 leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
