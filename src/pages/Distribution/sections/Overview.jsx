import FadeInUp from '@/components/motion/FadeInUp'
import styles from './Overview.module.css'

export default function Overview() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <FadeInUp delay={0}>
          <span className="text-overline">Distribution Overview</span>
        </FadeInUp>
        <FadeInUp delay={0.1}>
          <h2 className={styles.heading}>A Network Built for the Maldives</h2>
        </FadeInUp>
        <FadeInUp delay={0.2}>
          <p className={styles.body}>
            Q Med Pharmacy has the capacity to distribute pharmaceutical products
            throughout the Maldives, ensuring that medications reach healthcare
            facilities and pharmacies efficiently. Our distribution network allows
            us to maintain a reliable supply chain that meets regulatory standards
            and ensures consistent product availability.
          </p>
        </FadeInUp>
      </div>
    </section>
  )
}
