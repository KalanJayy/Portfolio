import { useInView } from '../hooks/useInView'
import styles from './Projects.module.css'

const projects = [
  {
    title: 'LiveCoach.AI',
    desc: 'A React Native Mobile platform that uses computer vision and machine learning to track player movements, analyze endurance, and evaluate performance directly from video input, without requiring any external accessories such as wearables or sensors.',
    tags: ['React Native', 'Node.js', 'Express.js', 'MongoDB', 'FastAPI', "Rest API"],
    num: '01',
    live: 'https://livecoach94.com',
    code: 'https://github.com/KalanJayy',
    featured: false,
    thumb: 'https://api.microlink.io/?url=https://livecoach94.com&screenshot=true&meta=false&embed=screenshot.url',
  },
  {
    title: 'TrailTalk',
    desc: 'A full stack React Native app for hikers to share trail experiences, ratings, and reviews, similar to a social platform for outdoor enthusiasts.',
    tags: ['React Native', 'Node.js', 'Express.js', 'MongoDB'],
    num: '02',
    live: 'https://drive.google.com/file/d/1V6-4GJbyKLahHuftV8SDjMgpzqd7yo3z/view?usp=drive_link&usp=embed_faceboo',
    code: 'https://github.com/KalanJayy',
    featured: false,
    thumb: null,
  },
  {
    title: 'Siri Kirula',
    desc: 'A full stack website for Siri Kirula Private Limited, a growing jewellery business in Sri Lanka..',
    tags: ['React','Node.js', 'Express.js', 'Tailwindcss'],
    num: '03',
    live: 'https://siri-kirula.vercel.app/',
    code: 'https://github.com/KalanJayy',
    featured: false,
    thumb: 'https://api.microlink.io/?url=https://siri-kirula.vercel.app/&screenshot=true&meta=false&embed=screenshot.url',
  },
]

export default function Projects() {
  const { ref, visible } = useInView()
  return (
    <section className={styles.projects} id="projects" ref={ref as React.RefObject<HTMLElement>}>
      <div className={styles.container}>
        <div
          className={`${styles.eyebrow} reveal ${visible ? 'visible' : ''}`}
        >
          Projects
        </div>
        <h2 className={`${styles.heading} reveal ${visible ? 'visible' : ''} reveal-d1`}>
          Things I&apos;ve built
        </h2>
        <p className={`${styles.sub} reveal ${visible ? 'visible' : ''} reveal-d2`}>
          A selection of personal &amp; freelance projects.
        </p>

        <div className={styles.grid}>
          {projects.map((p, i) => (
            <div
              className={`${styles.card} ${p.featured ? styles.featured : ''} reveal ${visible ? 'visible' : ''}`}
              style={{ transitionDelay: `${0.15 + i * 0.1}s` }}
              key={p.title}
            >
              {/* Thumbnail */}
              <a href={p.live} target="_blank" rel="noreferrer" className={styles.thumbLink}>
                {p.thumb ? (
                  <img src={p.thumb} alt={`${p.title} preview`} className={styles.thumb} />
                ) : (
                  <div className={styles.thumbPlaceholder}>
                    <PlaceholderIcon />
                    <span>{p.title}</span>
                  </div>
                )}
              </a>

              <div className={styles.cardTop}>
                <span className={styles.num}>{p.num}</span>
                {p.featured && <span className={styles.featuredBadge}>Featured</span>}
              </div>
              <h3 className={styles.cardTitle}>{p.title}</h3>
              <p className={styles.cardDesc}>{p.desc}</p>
              <div className={styles.tags}>
                {p.tags.map(t => <span className={styles.tag} key={t}>{t}</span>)}
              </div>
              <div className={styles.cardLinks}>
                <a href={p.live} target="_blank" rel="noreferrer" className={styles.linkBtn}>
                  Live Site ↗
                </a>
                <a href={p.code} target="_blank" rel="noreferrer" className={styles.linkGhost}>
                  <GithubIcon /> Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function GithubIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14">
      <path d="M12 2C6.477 2 2 6.484 2 12.021c0 4.428 2.865 8.184 6.839 9.504.5.092.682-.217.682-.482 0-.237-.009-.868-.013-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.154-1.11-1.461-1.11-1.461-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.026 2.747-1.026.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.021C22 6.484 17.522 2 12 2z"/>
    </svg>
  )
}

function PlaceholderIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="28" height="28">
      <rect x="3" y="3" width="18" height="18" rx="3" />
      <circle cx="8.5" cy="8.5" r="1.5" />
      <path d="M21 15l-5-5L5 21" />
    </svg>
  )
}
