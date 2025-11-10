import { motion, useReducedMotion } from 'framer-motion'
import { useInView } from '../hooks/useInView'

export function Section({ id, title, subtitle, children }) {
  const { ref, inView } = useInView({ rootMargin: '0px 0px -10% 0px', threshold: 0.15 })
  const prefersReducedMotion = useReducedMotion()

  const variants = prefersReducedMotion ? {} : {
    hidden: { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }
  }

  return (
    <section id={id} ref={ref} className="relative py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        {(title || subtitle) && (
          <div className="max-w-2xl mb-10">
            {title && (
              <motion.h2
                initial="hidden"
                animate={inView ? 'show' : 'hidden'}
                variants={variants}
                className="text-3xl md:text-4xl font-semibold text-white tracking-tight"
              >
                {title}
              </motion.h2>
            )}
            {subtitle && (
              <motion.p
                initial="hidden"
                animate={inView ? 'show' : 'hidden'}
                variants={variants}
                className="mt-4 text-zinc-300"
              >
                {subtitle}
              </motion.p>
            )}
          </div>
        )}
        <motion.div
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
          variants={variants}
        >
          {children}
        </motion.div>
      </div>
    </section>
  )
}

export function Parallax({ amount = 20, children, className = '' }) {
  return (
    <div className={`will-change-transform ${className}`} style={{ transform: `translate3d(0,0,0)` }}>
      {children}
    </div>
  )
}
