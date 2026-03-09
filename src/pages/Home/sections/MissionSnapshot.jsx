import FadeInUp from '@/components/motion/FadeInUp'
import styles from './MissionSnapshot.module.css'

export default function MissionSnapshot() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <FadeInUp delay={0}>
          <span className="text-overline">Our Mission</span>
        </FadeInUp>
        <FadeInUp delay={0.1}>
          <blockquote className={styles.quote}>
            "Our mission is to enhance healthcare delivery in the Maldives by
            ensuring timely access to essential medications and innovative
            pharmaceutical products."
          </blockquote>
        </FadeInUp>
        <FadeInUp delay={0.2}>
          <p className={styles.attribution}>— QMED Pharmacy</p>
        </FadeInUp>
      </div>
    </section>
  )
}
