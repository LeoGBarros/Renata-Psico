'use client'

import { useEffect } from 'react'

const VISIBLE_THRESHOLD = 0.15
const BOTTOM_MARGIN_BEFORE_REVEAL = '0px 0px -8% 0px'

export function RevealOnScroll() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue
          entry.target.setAttribute('data-visible', '')
          observer.unobserve(entry.target)
        }
      },
      { threshold: VISIBLE_THRESHOLD, rootMargin: BOTTOM_MARGIN_BEFORE_REVEAL },
    )

    document.querySelectorAll('[data-reveal]').forEach((element) => observer.observe(element))
    return () => observer.disconnect()
  }, [])

  return null
}
