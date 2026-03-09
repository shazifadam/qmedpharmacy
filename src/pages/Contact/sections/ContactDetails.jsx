import FadeInUp from '@/components/motion/FadeInUp'
import { StaggerChildren, StaggerItem } from '@/components/motion/StaggerChildren'
import styles from './ContactDetails.module.css'

const details = [
  {
    icon: '📍',
    label: 'Our Location',
    primary: 'QMED Pharmacy',
    secondary: 'Malé, Republic of Maldives',
    note: null,
  },
  {
    icon: '📧',
    label: 'Email Us',
    primary: 'info@qmedpharmacy.mv',
    secondary: null,
    note: 'We typically respond within 1–2 business days.',
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
          {details.map((d) => (
            <StaggerItem key={d.label}>
              <div className={styles.detailCard}>
                <span className={styles.icon}>{d.icon}</span>
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
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </section>
  )
}
