import { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import styles from './Projects.module.css'
import livecoachthumb from '../assets/livecoach.png'
import sirikirulathumb from '../assets/sirikirulathumb.png'
import trailtalkthumb from '../assets/trailtalk.png'
import parkinglot from '../assets/Parkinglot.jpeg'

const projects = [
  {
    title: 'LiveCoach.AI',
    desc: 'A React Native Mobile platform that uses computer vision and machine learning to track player movements, analyze endurance, and evaluate performance directly from video input, without requiring any external accessories such as wearables or sensors.',
    tags: ['React Native', 'Node.js', 'Express.js', 'MongoDB', 'FastAPI', "Rest API"],
    num: '01',
    live: 'https://livecoach94.com',
    code: 'https://github.com/KalanJayy',
    featured: true,
    thumb: livecoachthumb ,
  },
  {
    title: 'Siri Kirula',
    desc: 'A full stack website for Siri Kirula Private Limited, a growing jewellery business in Sri Lanka..',
    tags: ['React','Node.js', 'Express.js', 'Tailwindcss'],
    num: '02',
    live: 'https://siri-kirula.vercel.app/',
    code: 'https://github.com/KalanJayy',
    featured: true,
    thumb: sirikirulathumb,
  },
  {
    title: 'TrailTalk',
    desc: 'A full stack React Native app for hikers to share trail experiences, ratings, and reviews, similar to a social platform for outdoor enthusiasts.',
    tags: ['React Native', 'Node.js', 'Express.js', 'MongoDB'],
    num: '03',
    live: 'https://drive.google.com/file/d/1V6-4GJbyKLahHuftV8SDjMgpzqd7yo3z/view?usp=drive_link&usp=embed_faceboo',
    code: 'https://github.com/KalanJayy',
    featured: false,
    thumb: trailtalkthumb,
  },
  {
    title: 'Parking Management System',
    desc: 'a robust Parking Lot Management System using the MERN stack ',
    tags: ['React', 'Node.js', 'Express.js', 'MongoDB'],
    num: '03',
    live: 'https://aluthgama-parking.vercel.app/',
    code: '',
    featured: false,
    thumb: parkinglot,
  },
  
]

export default function Projects() {
  const container = useRef<HTMLElement>(null)
  const wrapper = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    // 1. Enter animation for the header
    gsap.from(`.${styles.eyebrow}, .${styles.heading}, .${styles.sub}`, {
      y: 40,
      opacity: 0,
      duration: 0.8,
      stagger: 0.15,
      scrollTrigger: {
        trigger: container.current,
        start: 'top 80%',
      }
    })

    // 2. Pinning & Layering sequence
    const cards = gsap.utils.toArray(`.${styles.card}`) as HTMLElement[]
    
    // We don't animate the first card, it's already visible at the bottom of the track.
    // We animate the subsequent cards to slide up over the previous ones.
    if (cards.length > 1) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: wrapper.current,
          start: 'top 15%', // Pin when the cards wrapper hits near top of screen
          end: `+=${cards.length * 100}%`, // Scroll distance based on number of cards
          pin: true,
          scrub: 1, // Smooth scrubbing
        }
      })

      cards.forEach((card, i) => {
        if (i === 0) return // Skip first card

        // Current card slides up from bottom
        tl.fromTo(card, 
          { y: '100%', scale: 0.9 }, 
          { y: '0%', scale: 1, ease: 'none' }
        )

        // Previous card scales down slightly and darkens for a 3D stacking effect
        if (i > 0) {
          tl.to(cards[i - 1], { 
            scale: 0.92, 
            opacity: 0.4, 
            ease: 'none' 
          }, "<") // Trigger at the same time as the card sliding up
        }
      })
    }
  }, { scope: container })

  return (
    <section className={styles.projects} id="projects" ref={container}>
      <div className={styles.container}>
        <div className={styles.eyebrow}>
          Projects
        </div>
        <h2 className={styles.heading}>
          Things I&apos;ve built
        </h2>
        <p className={styles.sub}>
          A selection of personal &amp; freelance projects.
        </p>

        <div className={styles.grid} ref={wrapper}>
          {projects.map((p, i) => (
            <div
              className={`${styles.card} ${styles[`card${i+1}`]}`}
              key={p.title}
              style={{ zIndex: i }}
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
