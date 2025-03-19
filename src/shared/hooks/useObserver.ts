import { useEffect, useRef } from 'react'

export const useObserver = <T extends HTMLElement>(fn: (v: boolean) => void) => {
  const ref = useRef<T | null>(null)

  useEffect(() => {
    if (!ref.current) return

    const observer = new IntersectionObserver(([entry]) => fn(entry.isIntersecting), { threshold: 0.2
    })

    observer.observe(ref.current)

    return () => observer.disconnect()
  }, [])

  return ref
}
