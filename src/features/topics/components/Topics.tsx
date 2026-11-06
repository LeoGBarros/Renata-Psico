import { tiltedRevealOrder } from '@/components/reveal/reveal-order'
import { topics } from '../topics.content'
import styles from './Topics.module.css'

export function Topics() {
  return (
    <section id="temas" className={styles.topics} aria-labelledby="temas-titulo">
      <div className={`page-width ${styles.inner}`}>
        <div className={styles.header}>
          <h2 id="temas-titulo" className={`display-heading ${styles.title}`}>
            Temas que costumam <strong>chegar ao consultório</strong>
          </h2>
          <p className={styles.headerText}>
            Ninguém precisa de um diagnóstico para começar. Mas, se ajuda a se reconhecer, estes são alguns deles.
          </p>
        </div>

        <ul className={styles.tiles}>
          {topics.map((topic, index) => (
            <li
              key={topic.name}
              className={styles.tile}
              data-tone={topic.tone}
              data-reveal="settle"
              style={tiltedRevealOrder(index, topic.tiltDegrees)}
            >
              <h3>{topic.name}</h3>
              <p>{topic.description}</p>
              {topic.personalNote && <span className={`handwriting ${styles.note}`}>{topic.personalNote}</span>}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
