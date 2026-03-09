import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Button from '@/components/ui/Button'
import StatBar from '@/components/ui/StatBar'
import heroImg from '@/assets/images/hero-home.jpg'
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
          Trusted Pharmaceutical Distribution
        </motion.span>

        <motion.h1
          className={styles.headline}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          Quality Medicines.<br />Trusted Supply.<br />Nationwide.
        </motion.h1>

        <motion.p
          className={[styles.subtext, 'text-lead'].join(' ')}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
        >
          QMED Pharmacy has been improving access to quality medications and
          healthcare products across the Maldives <br />since 2019.
        </motion.p>

        <motion.div
          className={styles.actions}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <Link to="/about">
            <Button variant="secondary" size="lg">Learn About Us</Button>
          </Link>
          <Link to="/partnerships">
            <Button variant="primary" size="lg">Partner With Us</Button>
          </Link>
        </motion.div>

        </div>
        <div className={styles.imageHolder}>
          <img src={heroImg} alt="Pharmacist serving a customer" className={styles.heroImg} />
        </div>

        <motion.div
          className={styles.statBarRow}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.65, ease: [0.16, 1, 0.3, 1] }}
        >
          <StatBar />
        </motion.div>
      </div>
    </section>
  )
}
