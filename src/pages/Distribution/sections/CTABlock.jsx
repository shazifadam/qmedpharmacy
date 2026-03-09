import { Link } from 'react-router-dom'
import FadeInUp from '@/components/motion/FadeInUp'
import Button from '@/components/ui/Button'
import styles from './CTABlock.module.css'

export default function CTABlock() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <FadeInUp delay={0}>
          <h2 className={styles.heading}>
            Need a reliable pharmaceutical supply partner in the Maldives?
          </h2>
        </FadeInUp>
        <FadeInUp delay={0.15}>
          <p className={styles.subtext}>
            Get in touch with our team to discuss how QMED Pharmacy can support
            your healthcare facility's pharmaceutical needs.
          </p>
        </FadeInUp>
        <FadeInUp delay={0.25}>
          <Link to="/contact">
            <Button variant="dark" size="lg">Contact Us →</Button>
          </Link>
        </FadeInUp>
      </div>
    </section>
  )
}
