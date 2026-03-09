import { useState } from 'react'
import FadeInUp from '@/components/motion/FadeInUp'
import Button from '@/components/ui/Button'
import styles from './InquiryForm.module.css'

export default function InquiryForm() {
  const [form, setForm] = useState({ name: '', company: '', country: '', message: '' })

  function handleChange(e) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    // Form submission handled by client — integrate with backend/email service as needed
    alert('Thank you for your inquiry! We will be in touch shortly.')
    setForm({ name: '', company: '', country: '', message: '' })
  }

  return (
    <section className={styles.section} id="inquiry">
      <div className={styles.container}>
        <FadeInUp delay={0}>
          <span className="text-overline">Get In Touch</span>
        </FadeInUp>
        <FadeInUp delay={0.1}>
          <h2 className={styles.heading}>Ready to Enter the Maldivian Market?</h2>
        </FadeInUp>
        <FadeInUp delay={0.2}>
          <p className={styles.subtext}>
            Reach out to explore how QMED Pharmacy can support your entry into the Maldives.
          </p>
        </FadeInUp>

        <FadeInUp delay={0.3}>
          <form className={styles.form} onSubmit={handleSubmit} noValidate>
            <div className={styles.row}>
              <div className={styles.formGroup}>
                <label className={styles.label} htmlFor="p-name">Name</label>
                <input
                  id="p-name"
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
                <label className={styles.label} htmlFor="p-company">Company</label>
                <input
                  id="p-company"
                  name="company"
                  type="text"
                  className={styles.input}
                  placeholder="Your company name"
                  value={form.company}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className={styles.formGroup}>
              <label className={styles.label} htmlFor="p-country">Country</label>
              <input
                id="p-country"
                name="country"
                type="text"
                className={styles.input}
                placeholder="Your country"
                value={form.country}
                onChange={handleChange}
                required
              />
            </div>

            <div className={styles.formGroup}>
              <label className={styles.label} htmlFor="p-message">Message</label>
              <textarea
                id="p-message"
                name="message"
                className={[styles.input, styles.textarea].join(' ')}
                placeholder="Tell us about your products and how you'd like to partner..."
                value={form.message}
                onChange={handleChange}
                required
              />
            </div>

            <Button variant="primary" size="lg" type="submit">Send Inquiry</Button>
          </form>
        </FadeInUp>
      </div>
    </section>
  )
}
