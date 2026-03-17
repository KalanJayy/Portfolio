import { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import styles from './About.module.css'

const stats = [
  { value: '2+', label: 'Years Experience' },
  { value: '10+', label: 'Projects Built' },
]

export default function About() {
  const container = useRef<HTMLElement>(null)

  useGSAP(() => {
    gsap.from(`.${styles.eyebrow}, .${styles.heading}, .${styles.text}, .${styles.statsCol}`, {
      y: 40,
      opacity: 0,
      duration: 0.8,
      stagger: 0.15,
      scrollTrigger: {
        trigger: container.current,
        start: 'top 80%',
      }
    })
  }, { scope: container })

  return (
    <section className={styles.about} id="about" ref={container}>
      <div className={styles.container}>

        <div className={styles.eyebrow}>
          About Me
        </div>

        <h2 className={styles.heading}>
          Passionate about building <span>great software</span>
        </h2>

        <div className={styles.grid}>
          <div className={styles.text}>
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

          <div className={styles.statsCol}>
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
