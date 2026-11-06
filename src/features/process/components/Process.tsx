import { revealOrder } from '@/components/reveal/reveal-order'
import { processSteps } from '../process.content'
import styles from './Process.module.css'

export function Process() {
  return (
    <section id="como-funciona" className={`page-width ${styles.process}`} aria-labelledby="como-funciona-titulo">
      <div className={styles.intro}>
        <p className="section-label">Como funciona</p>
        <h2 id="como-funciona-titulo" className="display-heading">
          Do primeiro contato às sessões, <strong>sem pressa.</strong>
        </h2>
        <p className={styles.introText}>
          Saber o que esperar diminui a ansiedade de começar. Este é o caminho, passo a passo.
        </p>
      </div>

      <ol className={styles.steps}>
        {processSteps.map((step, index) => (
          <li key={step.title} className={styles.step} data-reveal="rise" style={revealOrder(index)}>
            <span className={styles.number} aria-hidden="true">
              {String(index + 1).padStart(2, '0')}
            </span>
            <div className={styles.stepText}>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
            <span className={styles.tag} data-tone={index % 2 === 0 ? 'powder' : 'linen'}>
              {step.tag}
            </span>
          </li>
        ))}
      </ol>
    </section>
  )
}
