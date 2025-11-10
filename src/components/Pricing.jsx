export default function Pricing() {
  return (
    <section id="pricing" className="relative py-24 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight">Choose your flow.</h2>
          <p className="mt-4 text-zinc-300">Simple pricing that scales with your craft.</p>
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {[{
            name: 'Starter', price: 'Free', features: ['Unlimited recordings', 'Basic cursor effects', '720p export']
          }, {
            name: 'Pro', price: '$8/mo', features: ['AI assist', 'Multi-trim editor', '4K export', 'Custom presets']
          }, {
            name: 'Studio', price: '$18/mo', features: ['Team library', 'Brand kits', 'Priority rendering', 'Early features']
          }].map((tier) => (
            <div key={tier.name} className="relative rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="h-10 w-10 rounded-lg bg-zinc-800/70 border border-white/10 grid place-items-center text-white font-semibold">{tier.name[0]}</div>
              <h3 className="mt-4 text-xl font-medium text-white">{tier.name}</h3>
              <p className="mt-1 text-3xl font-semibold text-white">{tier.price}</p>
              <ul className="mt-4 space-y-2 text-zinc-300 text-sm">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-white/70" /> {f}</li>
                ))}
              </ul>
              <a href="#download" className="mt-6 inline-flex px-4 py-2 rounded-md bg-white text-zinc-900 font-medium">Get {tier.name}</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
