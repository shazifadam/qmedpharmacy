import FadeInUp from '@/components/motion/FadeInUp'
import styles from './MissionPullQuote.module.css'

export default function MissionPullQuote() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <FadeInUp delay={0}>
          <div className={styles.quoteBlock}>
            <span className="text-overline">Our Mission</span>
            <blockquote className={styles.quote}>
              "Our mission is to enhance healthcare delivery in the Maldives by
              ensuring timely access to essential medications and innovative
              pharmaceutical products. We strive to build strong partnerships with
              international manufacturers, distributors, and pharmaceutical innovators
              to introduce new and effective treatments to the Maldivian healthcare system."
            </blockquote>
          </div>
        </FadeInUp>
      </div>
    </section>
  )
}
