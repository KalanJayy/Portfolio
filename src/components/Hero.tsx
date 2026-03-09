// import { useEffect, useState } from 'react'
import styles from './Hero.module.css'

const ROLES = ['Full-Stack Developer']

// function useTyping(words: string[], speed = 80, pause = 1800) {
//   const [display, setDisplay] = useState('')
//   const [wordIdx, setWordIdx] = useState(0)
//   const [charIdx, setCharIdx] = useState(0)
//   const [deleting, setDeleting] = useState(false)

//   useEffect(() => {
//     const current = words[wordIdx]
//     const delay = deleting ? speed / 2 : charIdx === current.length ? pause : speed
//     const t = setTimeout(() => {
//       if (!deleting && charIdx < current.length) {
//         setDisplay(current.slice(0, charIdx + 1)); setCharIdx(c => c + 1)
//       } else if (!deleting && charIdx === current.length) {
//         setDeleting(true)
//       } else if (deleting && charIdx > 0) {
//         setDisplay(current.slice(0, charIdx - 1)); setCharIdx(c => c - 1)
//       } else {
//         setDeleting(false); setWordIdx(i => (i + 1) % words.length)
//       }
//     }, delay)
//     return () => clearTimeout(t)
//   }, [charIdx, deleting, wordIdx, words, speed, pause])

//   return display
// }

export default function Hero() {
  const role = (ROLES)

  return (
    <section className={styles.hero} id="hero">
      <div className={styles.grid}>
        {/* ── Left ── */}
        <div className={styles.content}>
          <div className={`${styles.availability} ${styles.fadeUp}`} style={{ animationDelay: '0ms' }}>
            <span className={styles.dot} />
            Available for work
          </div>

          <h1 className={`${styles.name} ${styles.fadeUp}`} style={{ animationDelay: '80ms' }}>
            Kalana<br />
            <em>Jayaweera</em>
          </h1>

          <p className={`${styles.roleTag} ${styles.fadeUp}`} style={{ animationDelay: '160ms' }}>
            <span>{role}</span>
          </p>

          <p className={`${styles.tagline} ${styles.fadeUp}`} style={{ animationDelay: '220ms' }}>
            Building precise, high-performance web products with clean
            architecture and sharp attention to detail.
          </p>

          <div className={`${styles.actions} ${styles.fadeUp}`} style={{ animationDelay: '300ms' }}>
            <button
              className={styles.btnPrimary}
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View Work
            </button>
            <button
              className={styles.btnSecondary}
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get In Touch
            </button>
          </div>

          <div className={`${styles.socials} ${styles.fadeUp}`} style={{ animationDelay: '380ms' }}>
            <a href="https://github.com/KalanJayy" target="_blank" rel="noreferrer" aria-label="GitHub">
              <GithubIcon />
            </a>
            <a href="https://linkedin.com/kalanajayaweera/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <LinkedinIcon />
            </a>
            <a href="mailto:kalana33471@gmail.com" aria-label="Email">
              <MailIcon />
            </a>
          </div>
        </div>

        {/* ── Right — code card ── */}
        <div className={`${styles.codeCard} ${styles.slideLeft}`}>
          <div className={styles.codeBar}>
            <span /><span /><span />
            <p>kalana.ts</p>
          </div>
          <pre className={styles.codePre}><code>{`const developer = {
  name:     "Kalana Jayaweera",
  role:     "Full-Stack Developer",
  location: "Sri Lanka",
  stack:    ["React","React Native","TypeScript",
             "Node.js","Express.js"],
  available: true,
}`}</code></pre>
          <div className={styles.codeGlow} />
        </div>
      </div>

      <button
        className={styles.scrollHint}
        onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
        aria-label="Scroll down"
      >
        <ArrowDown />
      </button>
    </section>
  )
}

function GithubIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
      <path d="M12 2C6.477 2 2 6.484 2 12.021c0 4.428 2.865 8.184 6.839 9.504.5.092.682-.217.682-.482 0-.237-.009-.868-.013-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.154-1.11-1.461-1.11-1.461-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.026 2.747-1.026.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.021C22 6.484 17.522 2 12 2z"/>
    </svg>
  )
}

function LinkedinIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14zm-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79zM6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68zm1.39 9.94v-8.37H5.5v8.37h2.77z"/>
    </svg>
  )
}

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="18" height="18">
      <rect x="2" y="4" width="20" height="16" rx="2"/>
      <path d="M2 7l10 7 10-7"/>
    </svg>
  )
}

function ArrowDown() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="20" height="20">
      <path d="M12 5v14M5 12l7 7 7-7"/>
    </svg>
  )
}
