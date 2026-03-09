import { Link } from 'react-router-dom'
import FadeInUp from '@/components/motion/FadeInUp'
import Button from '@/components/ui/Button'
import ourStoryImg from '@/assets/images/home-ourstory.jpg'
import styles from './AboutSnapshot.module.css'

export default function AboutSnapshot() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.content}>
            <FadeInUp delay={0}>
              <span className="text-overline">Our Story</span>
            </FadeInUp>
            <FadeInUp delay={0.1}>
              <h2 className={styles.heading}>A Pharmacy Built on Trust</h2>
            </FadeInUp>
            <FadeInUp delay={0.2}>
              <p className={styles.body}>
                QMED Pharmacy was established in 2019 with the vision of improving
                access to quality medications and healthcare products across the Maldives.
                Since our inception, we have focused on providing reliable pharmaceutical
                supply, professional service, and trusted partnerships within the
                healthcare sector.
              </p>
            </FadeInUp>
            <FadeInUp delay={0.3}>
              <Link to="/about">
                <Button variant="ghost" size="lg">Read Our Full Story →</Button>
              </Link>
            </FadeInUp>
          </div>

          <FadeInUp delay={0.15}>
            <div className={styles.imageHolder}>
              <img src={ourStoryImg} alt="Pills on a table" className={styles.sectionImg} />
            </div>
          </FadeInUp>
        </div>
      </div>
    </section>
  )
}
