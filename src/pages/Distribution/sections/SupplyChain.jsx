import FadeInUp from '@/components/motion/FadeInUp'
import { StaggerChildren, StaggerItem } from '@/components/motion/StaggerChildren'
import checkmarkImg from '@/assets/icons/checkmark.png'
import styles from './SupplyChain.module.css'

const commitments = [
  { label: 'Regulatory Compliant' },
  { label: 'Consistent Availability' },
  { label: 'Nationwide Reach' },
]

export default function SupplyChain() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.content}>
            <FadeInUp delay={0}>
              <span className="text-overline">Supply Chain</span>
            </FadeInUp>
            <FadeInUp delay={0.1}>
              <h2 className={styles.heading}>A Supply Chain Built on Reliability</h2>
            </FadeInUp>
            <FadeInUp delay={0.2}>
              <p className={styles.body}>
                We aim to maintain a reliable supply chain that meets regulatory
                standards and ensures consistent product availability. Our commitment
                to quality extends from sourcing to final delivery — every step of the way.
              </p>
            </FadeInUp>
          </div>

          <div className={styles.badges}>
            <StaggerChildren className={styles.badgeList}>
              {commitments.map((c) => (
                <StaggerItem key={c.label}>
                  <div className={styles.badgeItem}>
                    <span className={styles.badgeIcon}>
                      <img src={checkmarkImg} alt="✓" className={styles.badgeIconImg} />
                    </span>
                    <span className={styles.badgeLabel}>{c.label}</span>
                  </div>
                </StaggerItem>
              ))}
            </StaggerChildren>
          </div>
        </div>
      </div>
    </section>
  )
}
