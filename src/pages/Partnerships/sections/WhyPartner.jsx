import FadeInUp from '@/components/motion/FadeInUp'
import { StaggerChildren, StaggerItem } from '@/components/motion/StaggerChildren'
import checkmarkImg from '@/assets/icons/checkmark.png'
import styles from './WhyPartner.module.css'

const reasons = [
  {
    label: 'Established since 2019',
    detail: 'A proven track record of operating in the Maldivian pharmaceutical sector.',
  },
  {
    label: 'Local expertise',
    detail: 'Strong understanding of the Maldivian healthcare system and regulatory environment.',
  },
  {
    label: 'Nationwide reach',
    detail: 'Distribution capability covering healthcare providers across the islands.',
  },
  {
    label: 'Quality commitment',
    detail: 'Dedicated to regulatory compliance and high-quality product standards.',
  },
  {
    label: 'Innovation-driven',
    detail: 'Dedicated to introducing new medicines and healthcare solutions to the Maldives.',
  },
]

export default function WhyPartner() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.content}>
          <FadeInUp delay={0}>
            <span className="text-overline">Why Choose Us</span>
          </FadeInUp>
          <FadeInUp delay={0.1}>
            <h2 className={styles.heading}>Why Choose Q Med Pharmacy as Your Partner?</h2>
          </FadeInUp>

          <StaggerChildren className={styles.list}>
            {reasons.map((r) => (
              <StaggerItem key={r.label}>
                <div className={styles.item}>
                  <span className={styles.check}>
                    <img src={checkmarkImg} alt="✓" className={styles.checkIcon} />
                  </span>
                  <div className={styles.itemContent}>
                    <span className={styles.itemLabel}>{r.label}</span>
                    <span className={styles.itemDetail}>{r.detail}</span>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
        <div className={styles.imageHolder} />
      </div>
    </section>
  )
}
