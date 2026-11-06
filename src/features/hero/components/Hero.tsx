import Image from 'next/image'
import { revealOrder } from '@/components/reveal/reveal-order'
import { site } from '@/config/site'
import styles from './Hero.module.css'

const credentials = [
  site.professional.crp,
  'Doutora em Psicologia · UNICAMP',
  'Formação em Psicanálise · SBPCamp',
  'Clínica desde 2004',
]

export function Hero() {
  return (
    <section id="inicio" className={`page-width ${styles.hero}`}>
      <div className={styles.text}>
        <h1 className={styles.title}>
          Um lugar para dizer o que{' '}
          <span className={styles.weightedWord} data-reveal="weight">
            pesa.
          </span>
        </h1>
        <p className={styles.lead} data-reveal="rise" style={revealOrder(1)}>
          Psicoterapia psicanalítica para adultos. Escuta sem pressa, no seu tempo, online ou no consultório em
          Campinas.
        </p>
        <div className={styles.actions} data-reveal="rise" style={revealOrder(2)}>
          <a href="#contato" className="button button--ink">
            Marcar uma primeira conversa
          </a>
          <a href="#sobre" className="text-link">
            Ler a carta da Renata
          </a>
        </div>
        <p className={styles.handNote} data-reveal="rise" style={revealOrder(3)}>
          <svg aria-hidden="true" width="64" height="34" viewBox="0 0 64 34" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
            <path d="M4 6c10 18 30 24 52 18" />
            <path d="M48 16l9 8-11 4" />
          </svg>
          <span className="handwriting">eu mesma respondo as mensagens</span>
        </p>
      </div>

      <div className={styles.portrait}>
        <div className={styles.archBackdrop} aria-hidden="true" />
        <Image
          src={site.professional.portrait}
          alt={`Retrato de ${site.professional.displayName}`}
          width={260}
          height={310}
          sizes="(max-width: 760px) 90vw, 440px"
          preload
          className={styles.photo}
          data-reveal="arch"
        />
        <span className={styles.sparkle} aria-hidden="true" data-twinkle="" />
      </div>

      <ul className={styles.credentials} aria-label="Formação e registro">
        {credentials.map((credential) => (
          <li key={credential}>{credential}</li>
        ))}
      </ul>
    </section>
  )
}
