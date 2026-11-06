import { ImageResponse } from 'next/og'
import { site } from '@/config/site'

export const alt = site.title
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '80px',
          background: '#fcf8f3',
          color: '#23404a',
          fontFamily: 'serif',
        }}
      >
        <div style={{ fontSize: 26, letterSpacing: 6, color: '#b9503d', textTransform: 'uppercase' }}>
          Psicóloga e psicanalista · Campinas e online
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ fontSize: 112, lineHeight: 1 }}>{site.professional.displayName}</div>
          <div style={{ fontSize: 40, marginTop: 28, color: '#4a5c61' }}>Um lugar para dizer o que pesa.</div>
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            fontSize: 28,
            borderTop: '1px solid #e8ddd0',
            paddingTop: 28,
          }}
        >
          <span>{site.professional.crp}</span>
          <span>{site.phone.display}</span>
        </div>
      </div>
    ),
    size,
  )
}
