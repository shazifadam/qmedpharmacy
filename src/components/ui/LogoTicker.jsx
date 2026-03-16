import { useState } from 'react'
import styles from './LogoTicker.module.css'

import logo1 from '@/assets/logos/logo-1.png'
import logo2 from '@/assets/logos/logo-2.png'
import logo3 from '@/assets/logos/logo-3.png'
import logo4 from '@/assets/logos/logo-4.png'
import logo5 from '@/assets/logos/logo-5.png'

const logos = [
  { src: logo1, alt: 'Neuro Endocrine Medical Facility', url: 'https://www.facebook.com/Neuro.Endocrine.Medical.Facility' },
  { src: logo2, alt: 'IGMH', url: 'https://www.igmh.gov.mv/' },
  { src: logo3, alt: 'Kulunu Medical Clinic', url: 'https://www.facebook.com/kulunumed' },
  { src: logo4, alt: 'Hulhumalé Hospital', url: 'https://hmh.gov.mv/' },
  { src: logo5, alt: 'Villimalé Hospital', url: 'https://www.facebook.com/villimalehospital/' },
]

function TickerRow({ items, direction = 'left', paused, slow, delay = 0 }) {
  const animClass = direction === 'left'
    ? (slow ? styles.scrollLeftSlow : styles.scrollLeft)
    : (slow ? styles.scrollRightSlow : styles.scrollRight)

  return (
    <div className={styles.tickerTrack}>
      <div
        className={`${styles.tickerInner} ${animClass} ${paused ? styles.paused : ''}`}
        style={delay ? { animationDelay: `${delay}s` } : undefined}
      >
        {[...items, ...items].map((logo, i) => (
          <a
            key={i}
            href={logo.url}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.logoLink}
          >
            <img src={logo.src} alt={logo.alt} className={styles.logoImg} />
          </a>
        ))}
      </div>
    </div>
  )
}

export default function LogoTicker() {
  const [paused, setPaused] = useState(false)
  const desktopRow = logos
  const mobileRow1 = [logos[0], logos[1], logos[2]]
  const mobileRow2 = [logos[2], logos[3], logos[4]]

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <p className={styles.heading}>
          Trusted by Hospitals and Clinics Throughout the Nation
        </p>
      </div>
      <div
        className={styles.tickerWrap}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <div className={styles.desktopOnly}>
          <TickerRow items={desktopRow} direction="left" paused={paused} />
        </div>
        <div className={styles.mobileOnly}>
          <TickerRow items={mobileRow1} direction="left" paused={paused} />
          <TickerRow items={mobileRow2} direction="right" paused={paused} slow delay={-18} />
        </div>
      </div>
    </section>
  )
}
