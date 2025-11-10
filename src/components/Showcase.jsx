import { Section } from './Sections'

export default function Showcase() {
  return (
    <Section id="showcase" title="Motion that feels alive." subtitle="Glide between focus points, emphasize clicks, and keep audiences engaged.">
      <div className="grid md:grid-cols-2 gap-6">
        {[1,2,3,4].map((i) => (
          <div key={i} className="relative group rounded-2xl overflow-hidden border border-white/10 bg-zinc-900/40">
            <div className="aspect-video w-full bg-gradient-to-br from-fuchsia-500/15 via-indigo-500/15 to-sky-500/15" />
            <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/40 via-transparent" />
            <div className="absolute bottom-0 p-5">
              <p className="text-white font-medium">Zoom choreography #{i}</p>
              <p className="text-zinc-300 text-sm">A smooth focus sweep with tasteful cursor highlights</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}
