import { useState } from 'react'
import FadeInUp from '@/components/motion/FadeInUp'
import Button from '@/components/ui/Button'
import styles from './InquiryForm.module.css'

export default function InquiryForm() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })

  function handleChange(e) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    alert('Thank you for your message! We will respond within 1–2 business days.')
    setForm({ name: '', email: '', subject: '', message: '' })
  }

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <FadeInUp delay={0}>
          <span className="text-overline">Quick Inquiry</span>
        </FadeInUp>
        <FadeInUp delay={0.1}>
          <h2 className={styles.heading}>Send Us a Message</h2>
        </FadeInUp>
        <FadeInUp delay={0.15}>
          <p className={styles.note}>
            For partnership inquiries, please mention your company and country.
          </p>
        </FadeInUp>

        <FadeInUp delay={0.25}>
          <form className={styles.form} onSubmit={handleSubmit} noValidate>
            <div className={styles.row}>
              <div className={styles.formGroup}>
                <label className={styles.label} htmlFor="c-name">Name</label>
                <input
                  id="c-name"
                  name="name"
                  type="text"
                  className={styles.input}
                  placeholder="Your full name"
                  value={form.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className={styles.formGroup}>
                <label className={styles.label} htmlFor="c-email">Email</label>
                <input
                  id="c-email"
                  name="email"
                  type="email"
                  className={styles.input}
                  placeholder="your@email.com"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className={styles.formGroup}>
              <label className={styles.label} htmlFor="c-subject">Subject</label>
              <input
                id="c-subject"
                name="subject"
                type="text"
                className={styles.input}
                placeholder="What is this regarding?"
                value={form.subject}
                onChange={handleChange}
                required
              />
            </div>

            <div className={styles.formGroup}>
              <label className={styles.label} htmlFor="c-message">Message</label>
              <textarea
                id="c-message"
                name="message"
                className={[styles.input, styles.textarea].join(' ')}
                placeholder="Write your message here..."
                value={form.message}
                onChange={handleChange}
                required
              />
            </div>

            <Button variant="primary" size="lg" type="submit">Send Message</Button>
          </form>
        </FadeInUp>

        <FadeInUp delay={0.35}>
          <p className={styles.bottomNote}>
            QMED Pharmacy is committed to responding to all inquiries promptly and professionally.
          </p>
        </FadeInUp>
      </div>
    </section>
  )
}
