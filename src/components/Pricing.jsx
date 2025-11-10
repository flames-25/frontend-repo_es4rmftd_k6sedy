import { Section } from './Sections'

export default function Pricing() {
  const tiers = [
    { name: 'Starter', price: 'Free', features: ['Unlimited recordings', 'Basic cursor effects', '720p export'] },
    { name: 'Pro', price: '$8/mo', features: ['AI assist', 'Multi-trim editor', '4K export', 'Custom presets'] },
    { name: 'Studio', price: '$18/mo', features: ['Team library', 'Brand kits', 'Priority rendering', 'Early features'] },
  ]

  return (
    <Section id="pricing" title="Choose your flow." subtitle="Simple pricing that scales with your craft.">
      <div className="grid md:grid-cols-3 gap-6">
        {tiers.map((tier) => (
          <div key={tier.name} className="relative rounded-2xl border border-white/10 bg-zinc-900/40 p-6">
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
    </Section>
  )
}
