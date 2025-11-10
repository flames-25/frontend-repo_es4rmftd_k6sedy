import { useRef } from 'react'

// Spotlight card: a soft gradient light follows the pointer.
export default function SpotlightCard({ children, className = '' }) {
  const ref = useRef(null)

  const onMove = (e) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    el.style.setProperty('--x', `${x}px`)
    el.style.setProperty('--y', `${y}px`)
  }

  return (
    <div
      ref={ref}
      onPointerMove={onMove}
      className={`relative rounded-2xl border border-white/10 bg-zinc-900/60 overflow-hidden ${className}`}
    >
      {/* spotlight layer */}
      <div
        className="pointer-events-none absolute inset-0 opacity-0 hover:opacity-100 transition-opacity"
        style={{
          background:
            'radial-gradient(240px 240px at var(--x,50%) var(--y,50%), rgba(34,211,238,0.18), transparent 60%)'
        }}
      />
      {/* subtle inner border */}
      <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-white/5" />
      <div className="relative">{children}</div>
    </div>
  )
}
