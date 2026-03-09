import { NavLink } from 'react-router-dom'
import logoFooter from '@/assets/images/logo-footer.svg'
import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>

      {/* ── Dark columns ── */}
      <div className={styles.columns}>
        <div className={styles.brandCol}>
          <img src={logoFooter} alt="Q Med Pharmacy" className={styles.logoImg} />
          <p className={styles.tagline}>Quality Medicines. Trusted Supply. Nationwide.</p>
        </div>

        <div className={styles.linksCol}>
          <span className={styles.colHeading}>Pages</span>
          <nav className={styles.links}>
            <NavLink to="/"             className={styles.link}>Home</NavLink>
            <NavLink to="/about"        className={styles.link}>About</NavLink>
            <NavLink to="/distribution" className={styles.link}>Distribution</NavLink>
            <NavLink to="/partnerships" className={styles.link}>Partnerships</NavLink>
            <NavLink to="/contact"      className={styles.link}>Contact</NavLink>
          </nav>
        </div>

        <div className={styles.contactCol}>
          <span className={styles.colHeading}>Get in Touch</span>
          <div className={styles.contactList}>
            <p className={styles.contactItem}>
              <span className={styles.contactLabel}>Location</span>
              Malé, Republic of Maldives
            </p>
            <p className={styles.contactItem}>
              <span className={styles.contactLabel}>Email</span>
              info@qmedpharmacy.com
            </p>
          </div>
        </div>
      </div>

      <div className={styles.bottom}>
        <p className={styles.copy}>
          © {new Date().getFullYear()} QMED Pharmacy. All rights reserved.
        </p>
      </div>

    </footer>
  )
}
