import { useState, useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import styles from './Contact.module.css'

export default function Contact() {
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const container = useRef<HTMLElement>(null)

  useGSAP(() => {
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

    gsap.from(`.${styles.form}, .${styles.success}`, {
      y: 40,
      opacity: 0,
      duration: 0.8,
      delay: 0.45,
      scrollTrigger: {
        trigger: container.current,
        start: 'top 80%',
      }
    })
  }, { scope: container })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <section className={styles.contact} id="contact" ref={container}>
      <div className={styles.container}>
        <div className={styles.eyebrow}>
          Contact
        </div>
        <h2 className={styles.heading}>
          <span>Let's Create</span>
        </h2>
        <p className={styles.sub}>
          Have a project in mind or just want to say hi?<br />
          Drop a message
        </p>

        {sent ? (
          <div className={styles.success}>
            <h3>Message sent!</h3>
            <p>Thanks for reaching out. I'll get back to you soon.</p>
          </div>
        ) : (
          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.row}>
              <label className={styles.field}>
                <span>Name</span>
                <input
                  name="name"
                  type="text"
                  placeholder=" "
                  required
                  value={form.name}
                  onChange={handleChange}
                />
              </label>
              <label className={styles.field}>
                <span>Email</span>
                <input
                  name="email"
                  type="email"
                  placeholder=""
                  required
                  value={form.email}
                  onChange={handleChange}
                />
              </label>
            </div>
            <label className={styles.field}>
              <span>Message</span>
              <textarea
                name="message"
                rows={5}
                placeholder=""
                required
                value={form.message}
                onChange={handleChange}
              />
            </label>
            <div className={styles.submitRow}>
              <button type="submit" className={styles.submit}>Send Message →</button>
            </div>
          </form>
        )}
      </div>
    </section>
  )
}
