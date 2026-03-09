import { useInView } from '../hooks/useInView'
import styles from './About.module.css'

const stats = [
  { value: '2+', label: 'Years Experience' },
  { value: '10+', label: 'Projects Built' },
]

export default function About() {
  const { ref, visible } = useInView()
  return (
    <section className={styles.about} id="about" ref={ref as React.RefObject<HTMLElement>}>
      <div className={styles.container}>
        <div className={`reveal ${visible ? 'visible' : ''}`}
          style={{ display:'inline-block', fontSize:'0.72rem', fontWeight:700, letterSpacing:'0.08em',
            textTransform:'uppercase', color:'var(--ios-blue)', marginBottom:'0.75rem' }}>
          About Me
        </div>
        <h2 className={`${styles.heading} reveal ${visible ? 'visible' : ''} reveal-d1`}>
          Passionate about building <span>great software</span>
        </h2>

        <div className={styles.grid}>
          <div className={`${styles.text} reveal ${visible ? 'visible' : ''} reveal-d2`}>
            <p>
              I'm a full-stack developer based in Sri Lanka, focused on creating
              elegant, performant web applications. I love turning complex problems
              into simple, beautiful, and intuitive designs.
            </p>
            <p>
              When I'm not coding, you'll find me exploring new technologies,
              contributing to open-source, or enjoying a good cup of tea ☕.
            </p>

            {/* <div className={styles.infoGrid}>
              <div><span>📍</span> Sri Lanka</div>
              <div><span>🎓</span> CS Graduate</div>
              <div><span>💼</span> Open to Work</div>
              <div><span>🌐</span> Remote Friendly</div>
            </div> */}
          </div>

          <div className={`${styles.statsCol} reveal ${visible ? 'visible' : ''} reveal-d3`}>
            {stats.map(s => (
              <div className={styles.statCard} key={s.label}>
                <span className={styles.statValue}>{s.value}</span>
                <span className={styles.statLabel}>{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
