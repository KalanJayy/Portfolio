import styles from './Background.module.css'

export default function Background() {
  return (
    <div className={styles.root} aria-hidden="true">
      {/* iOS wallpaper-style ambient orbs */}
      <div className={`${styles.orb} ${styles.orb1}`} />
      <div className={`${styles.orb} ${styles.orb2}`} />
      <div className={`${styles.orb} ${styles.orb3}`} />
      <div className={`${styles.orb} ${styles.orb4}`} />
      {/* subtle grid mesh — like iOS depth grid */}
      <div className={styles.mesh} />
    </div>
  )
}
