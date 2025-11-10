import { Zap, MousePointer2, Scissors, Focus, Wand2, Sparkles } from 'lucide-react'
import { Section } from './Sections'
import SpotlightCard from './SpotlightCard'

const features = [
  { title: 'Cinematic Zoom & Pan', desc: 'Guide attention with zooms and parallax pans — auto-timed or keyframed.', icon: Focus, glow: 'from-cyan-400 to-sky-400' },
  { title: 'Cursor Magic', desc: 'Accentuate clicks with pulses, trails, and spotlight modes.', icon: MousePointer2, glow: 'from-cyan-400 to-sky-400' },
  { title: 'Multi-Trim Editor', desc: 'Slice, reorder, and tighten your story in-browser with ripple edits.', icon: Scissors, glow: 'from-cyan-400 to-sky-400' },
  { title: 'AI Assist', desc: 'Auto-cut silence, suggest zoom moments, and generate captions.', icon: Wand2, glow: 'from-cyan-400 to-sky-400' },
  { title: 'Instant Export', desc: '4K MP4 or GIF. Crisp, compressed, social-ready.', icon: Zap, glow: 'from-cyan-400 to-sky-400' },
  { title: 'Pro Presets', desc: 'Save style packs for zoom curves, trails, and overlays.', icon: Sparkles, glow: 'from-cyan-400 to-sky-400' },
]

export default function Features() {
  return (
    <Section id="features" title="Craft with surgical clarity." subtitle="Elegance and speed that let you focus on story, not software.">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map(({ title, desc, icon: Icon, glow }) => (
          <SpotlightCard key={title} className="p-6">
            <div className="relative">
              <div className="h-10 w-10 rounded-lg bg-zinc-800/70 border border-white/10 grid place-items-center">
                <Icon className="h-5 w-5 text-white" />
              </div>
              <h3 className="mt-4 text-lg font-medium text-white">{title}</h3>
              <p className="mt-2 text-sm text-zinc-300 leading-relaxed">{desc}</p>
            </div>
          </SpotlightCard>
        ))}
      </div>
    </Section>
  )
}
