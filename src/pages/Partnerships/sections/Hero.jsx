import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Button from '@/components/ui/Button'
import heroImg from '@/assets/images/hero-partnership.jpg'
import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.content}>
        <motion.span
          className="text-overline"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        >
          International Partnerships
        </motion.span>
        <motion.h1
          className={styles.headline}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          Partner With QMED Pharmacy
        </motion.h1>
        <motion.p
          className={[styles.subtext, 'text-lead'].join(' ')}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
        >
          We are actively seeking international pharmaceutical manufacturers,
          distributors, and import partners interested in entering the Maldivian
          healthcare market.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <Link to="#inquiry">
            <Button variant="primary" size="lg">Send an Inquiry</Button>
          </Link>
        </motion.div>
        </div>
        <div className={styles.imageHolder}>
          <img src={heroImg} alt="Handshake representing partnership" className={styles.heroImg} />
        </div>
      </div>
    </section>
  )
}
