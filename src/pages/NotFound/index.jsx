import { Link } from 'react-router-dom'
import PageTransition from '@/components/motion/PageTransition'
import FadeInUp from '@/components/motion/FadeInUp'
import SEO from '@/components/seo/SEO'
import styles from './index.module.css'

export default function NotFound() {
  return (
    <PageTransition>
      <SEO
        title="Page Not Found | QMED Pharmacy"
        description="The page you are looking for doesn't exist. Return to QMED Pharmacy's homepage."
        canonical="/404"
      />
      <section className={styles.section}>
        <div className={styles.container}>
          <FadeInUp delay={0}>
            <p className={styles.code}>404</p>
          </FadeInUp>
          <FadeInUp delay={0.1}>
            <h1 className={styles.heading}>Page Not Found</h1>
          </FadeInUp>
          <FadeInUp delay={0.2}>
            <p className={styles.body}>
              The page you're looking for doesn't exist or has been moved.
            </p>
          </FadeInUp>
          <FadeInUp delay={0.3}>
            <Link to="/" className={styles.homeLink}>Back to Home</Link>
          </FadeInUp>
        </div>
      </section>
    </PageTransition>
  )
}
