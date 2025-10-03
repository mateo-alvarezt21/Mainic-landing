import { useState, useEffect } from 'react'
import { debounce } from '@/lib/utils'

interface UseScrollStateOptions {
  threshold?: number
  debounceMs?: number
}

export function useScrollState(options: UseScrollStateOptions = {}) {
  const { threshold = 50, debounceMs = 10 } = options
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = debounce(() => {
      setIsScrolled(window.scrollY > threshold)
    }, debounceMs)

    // Set initial state
    handleScroll()

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [threshold, debounceMs])

  return isScrolled
}
