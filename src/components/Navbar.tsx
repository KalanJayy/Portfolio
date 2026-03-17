import { useState, useEffect } from 'react'
import styles from './Navbar.module.css'

const links = ['About', 'Skills', 'Projects', 'Contact']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNav = (id: string) => {
    setOpen(false)
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.inner}>
        <span className={styles.logo} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          KJ<span className={styles.dot}>.</span>
        </span>

        <nav className={`${styles.links} ${open ? styles.open : ''}`}>
          {links.map(l => (
            <button key={l} className={styles.link} onClick={() => handleNav(l)}>
              {l}
            </button>
          ))}
          <a
            className={styles.cta}
            href="https://drive.google.com/file/d/1UG8u_VI2-yR3yuhs7jwXiwqDrB0UoOLJ/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
          >
            Resume ↗
          </a>
        </nav>

        <button className={styles.hamburger} onClick={() => setOpen(o => !o)} aria-label="menu">
          <span className={open ? styles.x1 : ''} />
          <span className={open ? styles.x2 : ''} />
          <span className={open ? styles.x3 : ''} />
        </button>
      </div>
    </header>
  )
}
