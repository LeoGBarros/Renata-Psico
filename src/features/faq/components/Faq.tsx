import { faqItems } from '../faq.content'
import styles from './Faq.module.css'

export function Faq() {
  return (
    <section id="perguntas" className={styles.faq} aria-labelledby="perguntas-titulo">
      <div className={`page-width ${styles.inner}`}>
        <h2 id="perguntas-titulo" className={`display-heading ${styles.title}`}>
          Perguntas que <strong>costumam chegar</strong>
        </h2>
        <div className={styles.list}>
          {faqItems.map((item, index) => (
            <details key={item.question} className={styles.item} open={index === 0}>
              <summary className={styles.question}>
                {item.question}
                <span className={styles.toggle} aria-hidden="true" />
              </summary>
              <p className={styles.answer}>{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
