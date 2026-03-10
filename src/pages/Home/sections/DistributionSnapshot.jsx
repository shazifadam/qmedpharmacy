import { Link } from 'react-router-dom'
import FadeInUp from '@/components/motion/FadeInUp'
import Button from '@/components/ui/Button'
import distImg from '@/assets/images/hero-distribution.jpg'
import styles from './DistributionSnapshot.module.css'

export default function DistributionSnapshot() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.content}>
            <FadeInUp delay={0}>
              <span className="text-overline">Distribution Network</span>
            </FadeInUp>
            <FadeInUp delay={0.1}>
              <h2 className={styles.heading}>
                Reliable Pharmaceutical Distribution Across the Maldives
              </h2>
            </FadeInUp>
            <FadeInUp delay={0.2}>
              <p className={styles.body}>
                Ensuring medications reach healthcare facilities and pharmacies
                efficiently — wherever they are.
              </p>
            </FadeInUp>
            <FadeInUp delay={0.3}>
              <Link to="/distribution">
                <Button variant="primary" size="lg">Explore Our Distribution</Button>
              </Link>
            </FadeInUp>
          </div>

          <FadeInUp delay={0.15} className={styles.imageWrapper}>
            <div className={styles.imageHolder}>
              <img
                src={distImg}
                alt="Delivery truck on a bridge"
                className={styles.sectionImg}
              />
            </div>
          </FadeInUp>
        </div>
      </div>
    </section>
  )
}
