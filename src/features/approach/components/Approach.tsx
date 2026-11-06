import styles from './Approach.module.css'

export function Approach() {
  return (
    <section className={styles.approach} aria-labelledby="como-eu-trabalho">
      <div className={`page-width ${styles.inner}`}>
        <h2 id="como-eu-trabalho" className={styles.rule}>
          <span className={styles.ruleLineStart} data-reveal="rule" aria-hidden="true" />
          <span>Como eu trabalho</span>
          <span className={styles.ruleLineEnd} data-reveal="rule" aria-hidden="true" />
        </h2>
        <p className={styles.statement} data-reveal="rise">
          Na psicanálise não há respostas prontas. Há <strong>escuta</strong>, tempo e palavra. Aquilo que parece
          confuso costuma{' '}
          <span className={styles.highlight} data-reveal="ink">
            <span className={styles.ink} data-ink="" aria-hidden="true" />
            <span className={styles.highlightText}>fazer sentido</span>
          </span>{' '}
          quando finalmente é dito para alguém que escuta sem julgar.
        </p>
      </div>
    </section>
  )
}
