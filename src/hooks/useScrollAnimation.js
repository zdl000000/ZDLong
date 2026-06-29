import { useEffect, useRef } from 'react'

function useScrollAnimation(options = {}) {
  const { threshold = 0.1, rootMargin = '0px' } = options
  const ref = useRef(null)
  const hasAnimated = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true
          el.classList.add('animate-in')

          // Also animate all descendant elements with animate-* classes
          const children = el.querySelectorAll('[class*="animate-el"], [class*="fade-in-up"]')
          children.forEach(child => child.classList.add('animate-in'))

          observer.unobserve(el)
        }
      },
      { threshold, rootMargin }
    )

    // Observe immediately; if the element is already in viewport,
    // IntersectionObserver won't fire a callback for the initial state.
    // We use a small timeout to let the browser paint first, then manually
    // check intersection to handle the "already visible" case.
    observer.observe(el)
    const checkInitial = () => {
      const bbox = el.getBoundingClientRect()
      const inView = bbox.top < window.innerHeight && bbox.bottom > 0
      if (inView && !hasAnimated.current) {
        hasAnimated.current = true
        el.classList.add('animate-in')
        const children = el.querySelectorAll('[class*="animate-el"], [class*="fade-in-up"]')
        children.forEach(child => child.classList.add('animate-in'))
        observer.unobserve(el)
      }
    }
    requestAnimationFrame(checkInitial)

    return () => observer.disconnect()
  }, [threshold, rootMargin])

  return ref
}

export default useScrollAnimation
