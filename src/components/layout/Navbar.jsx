import { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import logoNavbar from '@/assets/images/logo-navbar.svg'
import styles from './Navbar.module.css'

const navLinks = [
  { to: '/',              label: 'Home' },
  { to: '/about',         label: 'About' },
  { to: '/distribution',  label: 'Distribution' },
  { to: '/partnerships',  label: 'Partnerships' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  // Lock body scroll when drawer is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  const close = () => setIsOpen(false)

  return (
    <>
      <header className={styles.wrap}>
        <div className={styles.navbar}>
          <NavLink to="/" className={styles.logo} onClick={close}>
            <img src={logoNavbar} alt="Q Med Pharmacy" className={styles.logoImg} />
          </NavLink>

          {/* Desktop nav */}
          <nav className={styles.nav}>
            {navLinks.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                end={to === '/'}
                className={({ isActive }) =>
                  [styles.navLink, isActive ? styles.active : ''].join(' ')
                }
              >
                {label}
              </NavLink>
            ))}
          </nav>

          <NavLink to="/contact" className={[styles.cta, styles.ctaDesktop].join(' ')}>
            Contact Us
          </NavLink>

          {/* Hamburger — mobile only, toggles to X */}
          <button
            className={styles.hamburger}
            onClick={() => setIsOpen(o => !o)}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="backdrop"
            className={styles.backdrop}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={close}
          />
        )}
        {isOpen && (
          <motion.div
            key="drawer"
            className={styles.mobileDrawer}
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Nav links — content starts below the floating navbar pill */}
            <nav className={styles.drawerNav}>
              {navLinks.map(({ to, label }) => (
                <NavLink
                  key={to}
                  to={to}
                  end={to === '/'}
                  className={({ isActive }) =>
                    [styles.drawerLink, isActive ? styles.active : ''].join(' ')
                  }
                  onClick={close}
                >
                  {label}
                </NavLink>
              ))}
            </nav>

            {/* Contact Us pinned to bottom */}
            <div className={styles.drawerFooter}>
              <NavLink to="/contact" className={styles.ctaMobile} onClick={close}>
                Contact Us
              </NavLink>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
