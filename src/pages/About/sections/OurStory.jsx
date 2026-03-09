import FadeInUp from '@/components/motion/FadeInUp'
import styles from './OurStory.module.css'

export default function OurStory() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <FadeInUp delay={0}>
          <span className="text-overline">Our Story</span>
        </FadeInUp>
        <FadeInUp delay={0.1}>
          <h2 className={styles.heading}>Built to Serve Maldivian Healthcare</h2>
        </FadeInUp>
        <FadeInUp delay={0.2}>
          <p className={styles.body}>
            Q Med Pharmacy was established in 2019 with the vision of improving
            access to quality medications and healthcare products across the Maldives.
            Since our inception, we have focused on providing reliable pharmaceutical
            supply, professional service, and trusted partnerships within the
            healthcare sector.
          </p>
        </FadeInUp>
        <FadeInUp delay={0.3}>
          <p className={styles.body}>
            Located in the Maldives, Q Med Pharmacy is committed to supporting
            healthcare providers, clinics, hospitals, and patients by ensuring the
            availability of safe, effective, and high-quality medicines.
          </p>
        </FadeInUp>
      </div>
    </section>
  )
}
