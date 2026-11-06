import type { CSSProperties } from 'react'

export function revealOrder(position: number): CSSProperties {
  return { '--reveal-order': position } as CSSProperties
}

export function tiltedRevealOrder(position: number, tiltDegrees: number): CSSProperties {
  return { '--reveal-order': position, '--tile-tilt': `${tiltDegrees}deg` } as CSSProperties
}
