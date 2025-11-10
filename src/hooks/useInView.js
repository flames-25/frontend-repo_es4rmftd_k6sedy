import { useEffect, useRef, useState } from 'react'

export function useInView(options = { rootMargin: '0px', threshold: 0.1 }) {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setInView(true)
        observer.disconnect()
      }
    }, options)
    observer.observe(node)
    return () => observer.disconnect()
  }, [options])

  return { ref, inView }
}
