import styles from './SiteHeader.module.css'

const navigation = [
  { href: '#como-funciona', label: 'Como funciona' },
  { href: '#temas', label: 'Temas' },
  { href: '#sobre', label: 'Sobre mim' },
  { href: '#perguntas', label: 'Perguntas' },
]

export function SiteHeader() {
  return (
    <header className={styles.header}>
      <div className={`page-width ${styles.bar}`}>
        <a href="#inicio" className={styles.brand}>
          <span className={styles.brandName}>Renata Sobral</span>
          <span className={styles.brandRole}>psicóloga · psicanalista</span>
        </a>
        <nav aria-label="Seções da página" className={styles.navigation}>
          {navigation.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
        <a href="#contato" className="button button--ink">
          Marcar conversa
        </a>
      </div>
    </header>
  )
}
