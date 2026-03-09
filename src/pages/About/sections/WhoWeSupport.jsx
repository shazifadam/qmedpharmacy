import FadeInUp from '@/components/motion/FadeInUp'
import { StaggerChildren, StaggerItem } from '@/components/motion/StaggerChildren'
import iconHospital from '@/assets/icons/hospital.png'
import iconClinic from '@/assets/icons/clinic.png'
import iconPharmacy from '@/assets/icons/pharmacy.png'
import iconIsland from '@/assets/icons/island.png'
import styles from './WhoWeSupport.module.css'

const supporters = [
  { icon: iconHospital, label: 'Hospitals' },
  { icon: iconClinic, label: 'Private Clinics' },
  { icon: iconPharmacy, label: 'Community Pharmacies' },
  { icon: iconIsland, label: 'Healthcare Providers Across Islands' },
]

export default function WhoWeSupport() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <FadeInUp delay={0}>
          <span className="text-overline">Who We Serve</span>
        </FadeInUp>
        <FadeInUp delay={0.1}>
          <h2 className={styles.heading}>Supporting Healthcare Across the Maldives</h2>
        </FadeInUp>
        <FadeInUp delay={0.2}>
          <p className={styles.lead}>
            Q Med Pharmacy is committed to supporting a wide range of healthcare
            stakeholders across the Maldives.
          </p>
        </FadeInUp>

        <StaggerChildren className={styles.supportGrid}>
          {supporters.map((s) => (
            <StaggerItem key={s.label}>
              <div className={styles.supportItem}>
                <span className={styles.supportIcon}>
                  <img src={s.icon} alt={s.label} className={styles.supportIconImg} />
                </span>
                <span className={styles.supportLabel}>{s.label}</span>
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </section>
  )
}
