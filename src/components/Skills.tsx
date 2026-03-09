import { useInView } from '../hooks/useInView'
import styles from './Skills.module.css'

const CDN = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons'

type Skill = { name: string; icon: string }

const categories: { title: string; skills: Skill[] }[] = [
  {
    title: 'Languages',
    skills: [
      { name: 'Java',       icon: `${CDN}/java/java-original.svg` },
      { name: 'JavaScript', icon: `${CDN}/javascript/javascript-original.svg` },
      { name: 'Python',     icon: `${CDN}/python/python-original.svg` },
    ],
  },
  {
    title: 'Frontend — Web / Mobile',
    skills: [
      { name: 'React',        icon: `${CDN}/react/react-original.svg` },
      { name: 'React Native', icon: `${CDN}/react/react-original.svg` },
      { name: 'TypeScript',   icon: `${CDN}/typescript/typescript-original.svg` },
      { name: 'Next.js',      icon: `${CDN}/nextjs/nextjs-original.svg` },
      { name: 'Tailwind CSS', icon: `${CDN}/tailwindcss/tailwindcss-original.svg` },
      { name: 'HTML / CSS',   icon: `${CDN}/html5/html5-original.svg` },
      { name: 'Vite',         icon: `${CDN}/vite/vite-original.svg` },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node.js',   icon: `${CDN}/nodejs/nodejs-original.svg` },
      { name: 'Express',   icon: `${CDN}/express/express-original.svg` },
      { name: 'REST APIs', icon: `${CDN}/fastapi/fastapi-original.svg` },
      { name: 'FastAPI',   icon: `${CDN}/fastapi/fastapi-original.svg` },
    ],
  },
  {
    title: 'Tools & Cloud',
    skills: [
      { name: 'Git & GitHub', icon: `${CDN}/github/github-original.svg` },
      { name: 'Docker',       icon: `${CDN}/docker/docker-original.svg` },
      { name: 'AWS',          icon: `${CDN}/amazonwebservices/amazonwebservices-original-wordmark.svg` },
      { name: 'Vercel',       icon: `${CDN}/vercel/vercel-original.svg` },
      { name: 'Linux',        icon: `${CDN}/linux/linux-original.svg` },
      { name: 'Figma',        icon: `${CDN}/figma/figma-original.svg` },
    ],
  },
]

export default function Skills() {
  const { ref, visible } = useInView()
  return (
    <section className={styles.skills} id="skills" ref={ref as React.RefObject<HTMLElement>}>
      <div className={styles.container}>
        <div className={`${styles.eyebrow} reveal ${visible ? 'visible' : ''}`}>
          Skills
        </div>
        <h2 className={`${styles.heading} reveal ${visible ? 'visible' : ''} reveal-d1`}>
          Technologies I work with
        </h2>
        <p className={`${styles.sub} reveal ${visible ? 'visible' : ''} reveal-d2`}>
          A curated set of tools I use to ship production-ready products.
        </p>

        <div className={styles.grid}>
          {categories.map((cat, i) => (
            <div
              className={`${styles.card} reveal ${visible ? 'visible' : ''}`}
              style={{ transitionDelay: `${0.15 + i * 0.1}s` }}
              key={cat.title}
            >
              <div className={styles.cardHeader}>
                <span className={styles.index}>0{i + 1}</span>
                <h3>{cat.title}</h3>
              </div>
              <div className={styles.tags}>
                {cat.skills.map(s => (
                  <span className={styles.tag} key={s.name}>
                    <img
                      src={s.icon}
                      alt={s.name}
                      className={styles.tagIcon}
                      loading="lazy"
                    />
                    {s.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
