import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <span className={styles.logo}>KJ<span className={styles.dot}>.</span></span>
        <p className={styles.copy}>
          Designed &amp; Built by <strong>Kalana Jayaweera</strong> · {new Date().getFullYear()}
        </p>
        <div className={styles.links}>
          <a href="https://github.com/KalanJayy" target="_blank" rel="noreferrer">GitHub</a>
          <a href="https://linkedin.com/kalanajayaweera/" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="mailto:kalana33471@gmail.com">Email</a>
        </div>
      </div>
      
    </footer>
  )
}
