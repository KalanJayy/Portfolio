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

        <div className={`${styles.eyebrow} reveal ${visible ? 'visible' : ''}`}>
          About Me
        </div>

        <h2 className={`${styles.heading} reveal ${visible ? 'visible' : ''} reveal-d1`}>
          Passionate about building <span>great software</span>
        </h2>

        <div className={styles.grid}>
          <div className={`${styles.text} reveal ${visible ? 'visible' : ''} reveal-d2`}>
            <p>
              I&apos;m a full-stack developer based in Sri Lanka, focused on creating
              elegant, performant web applications. I love turning complex problems
              into simple, beautiful, and intuitive designs.
            </p>
            <p>
              When I&apos;m not coding, you&apos;ll find me exploring new technologies,
              contributing to open-source, or enjoying a good cup of tea.
            </p>
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
