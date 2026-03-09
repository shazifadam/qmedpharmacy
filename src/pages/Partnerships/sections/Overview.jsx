import FadeInUp from '@/components/motion/FadeInUp'
import styles from './Overview.module.css'

export default function Overview() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <FadeInUp delay={0}>
          <span className="text-overline">About Our Partnerships</span>
        </FadeInUp>
        <FadeInUp delay={0.1}>
          <h2 className={styles.heading}>Built for Long-Term Collaboration</h2>
        </FadeInUp>
        <FadeInUp delay={0.2}>
          <p className={styles.body}>
            QMED Pharmacy is eager to collaborate with partners to introduce new
            and innovative medications, expand access to high-quality pharmaceutical
            products, and strengthen healthcare supply within the Maldives. We are
            committed to building long-term strategic partnerships that benefit both
            our partners and the communities we serve.
          </p>
        </FadeInUp>
      </div>
    </section>
  )
}
