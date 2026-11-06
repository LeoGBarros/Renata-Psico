import { SiteHeader } from '@/components/SiteHeader'
import { Approach } from '@/features/approach'
import { Contact } from '@/features/contact'
import { Faq } from '@/features/faq'
import { Hero } from '@/features/hero'
import { Letter } from '@/features/letter'
import { Process } from '@/features/process'
import { Topics } from '@/features/topics'

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main id="conteudo">
        <Hero />
        <Approach />
        <Process />
        <Topics />
        <Letter />
        <Faq />
      </main>
      <Contact />
    </>
  )
}
