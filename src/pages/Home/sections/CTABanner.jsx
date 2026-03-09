import { Link } from 'react-router-dom'
import FadeInUp from '@/components/motion/FadeInUp'
import Button from '@/components/ui/Button'
import styles from './CTABanner.module.css'

export default function CTABanner() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <FadeInUp delay={0}>
          <h2 className={styles.heading}>
            Looking to bring your pharmaceutical products to the Maldivian market?
          </h2>
        </FadeInUp>
        <FadeInUp delay={0.15}>
          <p className={styles.subtext}>
            We partner with international manufacturers, distributors, and innovators
            to expand access to quality healthcare across the Maldives.
          </p>
        </FadeInUp>
        <FadeInUp delay={0.25}>
          <Link to="/partnerships">
            <Button variant="dark" size="lg">Explore Partnership Opportunities →</Button>
          </Link>
        </FadeInUp>
      </div>
    </section>
  )
}
