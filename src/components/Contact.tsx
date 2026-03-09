import { useState } from 'react'
import { useInView } from '../hooks/useInView'
import styles from './Contact.module.css'

export default function Contact() {
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const { ref, visible } = useInView()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <section className={styles.contact} id="contact" ref={ref as React.RefObject<HTMLElement>}>
      <div className={styles.container}>
        <div className={`${styles.eyebrow} reveal ${visible ? 'visible' : ''}`}>
          Contact
        </div>
        <h2 className={`${styles.heading} reveal ${visible ? 'visible' : ''} reveal-d1`}>
          Let&apos;s build something <span>together</span>
        </h2>
        <p className={`${styles.sub} reveal ${visible ? 'visible' : ''} reveal-d2`}>
          Have a project in mind or just want to say hi?<br />
          My inbox is always open.
        </p>

        {sent ? (
          <div className={`${styles.success} reveal visible`}>
            <span>🎉</span>
            <h3>Message sent!</h3>
            <p>Thanks for reaching out. I'll get back to you soon.</p>
          </div>
        ) : (
          <form className={`${styles.form} reveal ${visible ? 'visible' : ''} reveal-d3`} onSubmit={handleSubmit}>
            <div className={styles.row}>
              <label className={styles.field}>
                <span>Name</span>
                <input
                  name="name"
                  type="text"
                  placeholder="John Doe"
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
                  placeholder="john@example.com"
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
                placeholder="Tell me about your project..."
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
