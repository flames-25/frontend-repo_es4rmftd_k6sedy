import { Zap, MousePointer2, Scissors, Focus, Wand2, Sparkles } from 'lucide-react'
import { Section } from './Sections'

const features = [
  { title: 'Cinematic Zoom & Pan', desc: 'Guide attention with zooms and parallax pans — auto-timed or keyframed.', icon: Focus, glow: 'from-fuchsia-500 to-violet-500' },
  { title: 'Cursor Magic', desc: 'Accentuate clicks with pulses, trails, and spotlight modes.', icon: MousePointer2, glow: 'from-sky-500 to-cyan-400' },
  { title: 'Multi-Trim Editor', desc: 'Slice, reorder, and tighten your story in-browser with ripple edits.', icon: Scissors, glow: 'from-emerald-500 to-lime-400' },
  { title: 'AI Assist', desc: 'Auto-cut silence, suggest zoom moments, and generate captions.', icon: Wand2, glow: 'from-indigo-500 to-blue-400' },
  { title: 'Instant Export', desc: '4K MP4 or GIF. Crisp, compressed, social-ready.', icon: Zap, glow: 'from-amber-400 to-orange-500' },
  { title: 'Pro Presets', desc: 'Save style packs for zoom curves, trails, and overlays.', icon: Sparkles, glow: 'from-pink-500 to-rose-500' },
]

export default function Features() {
  return (
    <Section id="features" title="Craft with surgical clarity." subtitle="Elegance and speed that let you focus on story, not software.">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map(({ title, desc, icon: Icon, glow }) => (
          <div key={title} className="relative group rounded-2xl border border-white/10 bg-zinc-900/40 p-6 overflow-hidden will-change-transform">
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
    </Section>
  )
}
