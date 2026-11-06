import { revealOrder } from '@/components/reveal/reveal-order'
import { educationMilestones } from '../education.content'
import styles from './Letter.module.css'

export function Letter() {
  return (
    <section id="sobre" className={`page-width ${styles.letterSection}`} aria-labelledby="carta-titulo">
      <article className={styles.letter} data-reveal="rise">
        <p className="section-label">Uma carta</p>
        <h2 id="carta-titulo" className={styles.greeting}>
          Para você, que chegou até aqui,
        </h2>
        <p>
          Me formei em Psicologia em 2004 e, desde então, nunca deixei a clínica. Passei dez anos estudando a relação
          entre trabalho e saúde mental, do mestrado na UEL ao doutorado na UNICAMP.
        </p>
        <p>
          Em 2021 aprofundei minha escuta no curso de Psicanálise da SBPCamp. Aprendi, nesse tempo todo, que sair da
          faculdade com a certeza de que sabemos pouco é o começo de tudo.
        </p>
        <p>Se algo te trouxe até esta página, talvez seja hora de falar sobre isso. Estou por aqui.</p>
        <p className={`handwriting ${styles.signature}`}>Renata</p>
      </article>

      <div className={styles.education}>
        <h3 className="section-label">Formação</h3>
        <ol>
          {educationMilestones.map((milestone, index) => (
            <li key={milestone.year} className={styles.milestone} data-reveal="rise" style={revealOrder(index)}>
              <span className={styles.year}>{milestone.year}</span>
              <span>
                {milestone.title} · {milestone.institution}
              </span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
