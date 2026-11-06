import type { Metadata, Viewport } from 'next'
import { Kalnia, Onest, Playwrite_BR } from 'next/font/google'
import { RevealOnScroll } from '@/components/reveal/RevealOnScroll'
import { WhatsAppFloatingButton } from '@/components/WhatsAppFloatingButton'
import { site } from '@/config/site'
import { serializeJsonLd } from '@/features/seo'
import '@/styles/globals.css'

const displayFont = Kalnia({ subsets: ['latin'], variable: '--font-display', display: 'swap' })
const bodyFont = Onest({ subsets: ['latin'], variable: '--font-body', display: 'swap' })
const handwritingFont = Playwrite_BR({ variable: '--font-handwriting', display: 'swap' })

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: site.title, template: `%s | ${site.professional.displayName}` },
  description: site.description,
  alternates: { canonical: '/' },
  robots: { index: true, follow: true, 'max-image-preview': 'large' },
  openGraph: {
    type: 'website',
    locale: site.locale,
    url: '/',
    siteName: site.professional.displayName,
    title: site.title,
    description: site.description,
  },
  twitter: { card: 'summary_large_image' },
}

export const viewport: Viewport = {
  themeColor: '#fcf8f3',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${displayFont.variable} ${bodyFont.variable} ${handwritingFont.variable}`}>
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeJsonLd() }} />
        <a href="#conteudo" className="skip-link">
          Pular para o conteúdo
        </a>
        {children}
        <WhatsAppFloatingButton />
        <RevealOnScroll />
      </body>
    </html>
  )
}
