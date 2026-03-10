import { Link } from 'react-router-dom'
import FadeInUp from '@/components/motion/FadeInUp'
import Button from '@/components/ui/Button'
import partnerImg from '@/assets/images/hero-partnership.jpg'
import styles from './PartnershipSnapshot.module.css'

export default function PartnershipSnapshot() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <FadeInUp delay={0.15}>
            <div className={styles.imageHolder}>
              <img
                src={partnerImg}
                alt="Handshake representing partnership"
                className={styles.sectionImg}
              />
            </div>
          </FadeInUp>

          <div className={styles.content}>
            <FadeInUp delay={0}>
              <span className="text-overline">International Partnerships</span>
            </FadeInUp>
            <FadeInUp delay={0.1}>
              <h2 className={styles.heading}>Partner With QMED Pharmacy</h2>
            </FadeInUp>
            <FadeInUp delay={0.2}>
              <p className={styles.body}>
                We are actively seeking international pharmaceutical manufacturers,
                distributors, and import partners interested in entering the Maldivian
                healthcare market.
              </p>
            </FadeInUp>
            <FadeInUp delay={0.3}>
              <Link to="/partnerships">
                <Button variant="primary" size="lg">Partner With Us</Button>
              </Link>
            </FadeInUp>
          </div>
        </div>
      </div>
    </section>
  )
}
