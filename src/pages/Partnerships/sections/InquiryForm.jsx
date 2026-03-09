import { useState } from 'react'
import FadeInUp from '@/components/motion/FadeInUp'
import Button from '@/components/ui/Button'
import styles from './InquiryForm.module.css'

export default function InquiryForm() {
  const [form, setForm] = useState({ name: '', company: '', country: '', message: '' })
  const [status, setStatus] = useState('idle') // idle | sending | success | error

  function handleChange(e) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    setStatus('sending')

    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({ 'form-name': 'partnership', ...form }).toString(),
    })
      .then(() => {
        setStatus('success')
        setForm({ name: '', company: '', country: '', message: '' })
      })
      .catch(() => setStatus('error'))
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
          {status === 'success' ? (
            <p className={styles.successMsg}>
              ✓ Inquiry sent! We will be in touch shortly.
            </p>
          ) : (
            <form
              className={styles.form}
              name="partnership"
              method="POST"
              data-netlify="true"
              onSubmit={handleSubmit}
              noValidate
            >
              <input type="hidden" name="form-name" value="partnership" />

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

              {status === 'error' && (
                <p className={styles.errorMsg}>Something went wrong. Please try again.</p>
              )}

              <Button variant="primary" size="lg" type="submit" disabled={status === 'sending'}>
                {status === 'sending' ? 'Sending…' : 'Send Inquiry'}
              </Button>
            </form>
          )}
        </FadeInUp>
      </div>
    </section>
  )
}
