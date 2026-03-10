import FadeInUp from '@/components/motion/FadeInUp'
import { StaggerChildren, StaggerItem } from '@/components/motion/StaggerChildren'
import styles from './ContactDetails.module.css'

const details = [
  {
    label: 'Our Location',
    primary: 'QMED Pharmacy',
    secondary: 'Malé, Republic of Maldives',
    note: null,
    href: null,
  },
  {
    label: 'Email Us',
    primary: 'info@qmedpharmacy.mv',
    secondary: null,
    note: 'We typically respond within 1–2 business days.',
    href: 'mailto:info@qmedpharmacy.mv',
  },
  {
    label: 'Call Us',
    primary: '+960 777 7777',
    secondary: null,
    note: 'We are here to answer your call.',
    href: 'tel:+9607777777',
  },
]

export default function ContactDetails() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <FadeInUp delay={0}>
          <span className="text-overline">Our Details</span>
        </FadeInUp>
        <FadeInUp delay={0.1}>
          <h2 className={styles.heading}>How to Reach Us</h2>
        </FadeInUp>

        <StaggerChildren className={styles.grid}>
          {details.map((d) => {
            const cardClass = `${styles.detailCard}${d.href ? ` ${styles.clickable}` : ''}`
            const inner = (
              <div className={styles.detailContent}>
                <span className={styles.detailLabel}>{d.label}</span>
                <span className={styles.detailPrimary}>{d.primary}</span>
                {d.secondary && (
                  <span className={styles.detailSecondary}>{d.secondary}</span>
                )}
                {d.note && (
                  <span className={styles.detailNote}>{d.note}</span>
                )}
              </div>
            )
            return (
              <StaggerItem key={d.label}>
                {d.href ? (
                  <a href={d.href} className={cardClass}>{inner}</a>
                ) : (
                  <div className={cardClass}>{inner}</div>
                )}
              </StaggerItem>
            )
          })}
        </StaggerChildren>
      </div>
    </section>
  )
}
