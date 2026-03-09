import { motion } from 'framer-motion'
import heroImg from '@/assets/images/hero-distribution.jpg'
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
          Distribution Network
        </motion.span>
        <motion.h1
          className={styles.headline}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          Reliable Pharmaceutical Distribution Across the Maldives
        </motion.h1>
        <motion.p
          className={[styles.subtext, 'text-lead'].join(' ')}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
        >
          Ensuring medications reach healthcare facilities and pharmacies
          efficiently — wherever they are.
        </motion.p>
        </div>
        <div className={styles.imageHolder}>
          <img src={heroImg} alt="Delivery truck on a bridge" className={styles.heroImg} />
        </div>
      </div>
    </section>
  )
}
