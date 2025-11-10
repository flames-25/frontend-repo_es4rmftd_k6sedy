import { lazy, Suspense } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { useInView } from '../hooks/useInView'

const Spline = lazy(() => import('@splinetool/react-spline'))

export default function Hero() {
  const prefersReducedMotion = useReducedMotion()
  const { ref, inView } = useInView({ rootMargin: '0px 0px -20% 0px', threshold: 0.2 })

  return (
    <section ref={ref} className="relative min-h-[92vh] overflow-hidden bg-zinc-950">
      {/* Background gradients (lighter blur for performance) */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[900px] rounded-full bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.22),transparent_60%)] blur-2xl" />
        <div className="absolute -bottom-40 left-0 right-0 mx-auto w-[720px] h-[720px] rounded-full bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.18),transparent_60%)] blur-2xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 lg:px-8 pt-28 grid lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-5">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-300">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Visura • AI screen recording for storytellers
          </div>
          <h1 className="mt-6 text-4xl md:text-6xl font-semibold tracking-tight text-white">
            Capture. Orchestrate. Publish.
          </h1>
          <p className="mt-5 text-zinc-300 leading-relaxed max-w-xl">
            Direct the viewer’s eye with precision zooms, tactile cursor design, and AI that trims the noise. Gorgeous output, frictionless flow.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#download" className="px-5 py-3 rounded-md bg-white text-zinc-900 font-medium shadow-sm hover:bg-zinc-100">Add to Chrome</a>
            <a href="#showcase" className="px-5 py-3 rounded-md bg-white/10 text-white border border-white/10 hover:bg-white/15">See it in motion</a>
          </div>
          <div className="mt-6 flex items-center gap-6 text-zinc-400 text-sm">
            <span>4K export</span>
            <span>AI silence cut</span>
            <span>Keyframe zooms</span>
          </div>
        </div>

        {/* Performance-friendly stage */}
        <div className="lg:col-span-7 relative h-[520px] rounded-2xl border border-white/10 bg-zinc-900/40 overflow-hidden">
          {/* Only mount Spline when in view and user doesn’t prefer reduced motion */}
          {inView && !prefersReducedMotion ? (
            <Suspense fallback={<StageFallback />}> 
              <Spline scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
            </Suspense>
          ) : (
            <StageFallback />
          )}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-zinc-950/30 via-transparent to-transparent" />
        </div>
      </div>

      {/* Soft floor gradient */}
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-zinc-900 to-transparent" />
    </section>
  )
}

function StageFallback() {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="w-full h-full relative bg-[radial-gradient(1200px_400px_at_50%_120%,rgba(168,85,247,0.12),transparent)]"
    >
      <div className="absolute inset-0 grid place-items-center">
        <div className="h-40 w-40 rounded-2xl border border-white/10 bg-zinc-800/40 backdrop-blur-sm" />
      </div>
    </motion.div>
  )
}
