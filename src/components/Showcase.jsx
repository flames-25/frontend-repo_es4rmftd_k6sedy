export default function Showcase() {
  return (
    <section id="showcase" className="relative py-24 bg-gradient-to-b from-zinc-900 to-zinc-950">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight">Motion that feels alive.</h2>
          <p className="mt-4 text-zinc-300">Designed for modern storytelling — glide between focus points, emphasize clicks, and keep audiences engaged.</p>
        </div>

        <div className="mt-12 grid md:grid-cols-2 gap-6">
          {[1,2,3,4].map((i) => (
            <div key={i} className="relative group rounded-2xl overflow-hidden border border-white/10 bg-white/5">
              <div className="aspect-video w-full bg-gradient-to-br from-fuchsia-500/20 via-indigo-500/20 to-sky-500/20" />
              <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/50 via-transparent" />
              <div className="absolute bottom-0 p-5">
                <p className="text-white font-medium">Zoom choreography #{i}</p>
                <p className="text-zinc-300 text-sm">A smooth focus sweep with tasteful cursor highlights</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
