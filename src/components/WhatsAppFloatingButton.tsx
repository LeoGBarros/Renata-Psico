import { whatsappLink } from '@/config/site'
import styles from './WhatsAppFloatingButton.module.css'

export function WhatsAppFloatingButton() {
  return (
    <a
      className={styles.button}
      href={whatsappLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Conversar com Renata Sobral pelo WhatsApp"
    >
      <svg aria-hidden="true" viewBox="0 0 32 32" width="22" height="22" fill="currentColor">
        <path d="M16 .5C7.4.5.5 7.4.5 16c0 2.8.7 5.5 2.1 7.9L.5 31.5l7.8-2c2.3 1.3 4.9 2 7.7 2 8.6 0 15.5-6.9 15.5-15.5S24.6.5 16 .5zm0 28.4c-2.5 0-5-.7-7.1-2l-.5-.3-4.6 1.2 1.2-4.5-.3-.5A12.9 12.9 0 0 1 2.6 16C2.6 8.6 8.6 2.6 16 2.6S29.4 8.6 29.4 16 23.4 28.9 16 28.9zm7.6-9.7c-.4-.2-2.5-1.2-2.9-1.4-.4-.1-.7-.2-1 .2-.3.4-1.1 1.4-1.4 1.7-.3.3-.5.3-.9.1-.4-.2-1.8-.7-3.4-2.1-1.3-1.1-2.1-2.5-2.4-2.9-.2-.4 0-.6.2-.8l.6-.7c.2-.2.3-.4.4-.7.1-.3 0-.5 0-.7-.1-.2-.9-2.2-1.3-3-.3-.8-.7-.7-.9-.7h-.8c-.3 0-.7.1-1.1.5s-1.4 1.4-1.4 3.4 1.5 3.9 1.7 4.2c.2.3 2.9 4.4 7 6.1 1 .4 1.7.6 2.3.8 1 .3 1.8.3 2.5.2.8-.1 2.5-1 2.8-2 .3-1 .3-1.8.2-2-.1-.2-.4-.3-.8-.5z" />
      </svg>
      <span>WhatsApp</span>
    </a>
  )
}
