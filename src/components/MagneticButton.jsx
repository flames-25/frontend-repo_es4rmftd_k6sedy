import { useRef } from 'react'

// Magnetic button: subtly pulls toward the cursor within its container. Transform-only.
export default function MagneticButton({ children, className = '', as: As = 'a', href = '#', ...props }) {
  const ref = useRef(null)
  const wrapRef = useRef(null)

  const onMove = (e) => {
    const wrap = wrapRef.current
    const el = ref.current
    if (!wrap || !el) return
    const rect = wrap.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const cx = rect.width / 2
    const cy = rect.height / 2
    const dx = (x - cx) / cx
    const dy = (y - cy) / cy
    el.style.transform = `translate3d(${dx * 8}px, ${dy * 8}px, 0)`
  }

  const onLeave = () => {
    const el = ref.current
    if (el) el.style.transform = 'translate3d(0,0,0)'
  }

  return (
    <div ref={wrapRef} onPointerMove={onMove} onPointerLeave={onLeave} className="inline-block">
      <As ref={ref} href={href} className={`relative inline-flex items-center justify-center rounded-md px-5 py-3 font-medium transition-colors will-change-transform ${className}`} {...props} />
    </div>
  )
}
