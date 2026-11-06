import { fullAddress, site, whatsappLink } from '@/config/site'
import styles from './Contact.module.css'

export function Contact() {
  return (
    <footer id="contato" className={styles.contact}>
      <div className={`page-width ${styles.inner}`}>
        <div className={styles.call}>
          <h2 className={styles.title}>
            Vamos <strong>conversar?</strong>
          </h2>
          <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="button button--cream">
            Mandar mensagem no WhatsApp
          </a>
          <p className={styles.phone}>
            ou ligue: <a href={`tel:${site.phone.e164}`}>{site.phone.display}</a>
          </p>
        </div>

        <dl className={styles.details}>
          <div>
            <dt>Consultório</dt>
            <dd>
              <a href={site.mapsUrl} target="_blank" rel="noopener noreferrer">
                {fullAddress()}
              </a>
            </dd>
          </div>
          <div>
            <dt>Horários</dt>
            <dd>{site.hours.label}</dd>
          </div>
          <div>
            <dt>Instagram</dt>
            <dd>
              <a href={site.instagram.url} target="_blank" rel="noopener noreferrer">
                {site.instagram.handle}
              </a>
            </dd>
          </div>
        </dl>

        <div className={styles.legal}>
          <p>
            {site.professional.legalName} · Psicóloga · {site.professional.crp}
          </p>
          <p>
            Em caso de emergência, ligue <a href="tel:188">188</a> (CVV) ou <a href="tel:192">192</a> (SAMU).
          </p>
        </div>
      </div>
    </footer>
  )
}
