import FadeInUp from '@/components/motion/FadeInUp'
import styles from './SectionHeader.module.css'

export default function SectionHeader({ overline, heading, lead, align = 'left', maxWidth }) {
  const wrapStyle = maxWidth ? { maxWidth } : {}

  return (
    <div className={[styles.header, styles[align]].join(' ')} style={wrapStyle}>
      {overline && (
        <FadeInUp delay={0}>
          <span className="text-overline">{overline}</span>
        </FadeInUp>
      )}
      <FadeInUp delay={0.1}>
        <h2 className={styles.heading}>{heading}</h2>
      </FadeInUp>
      {lead && (
        <FadeInUp delay={0.2}>
          <p className={[styles.lead, 'text-lead'].join(' ')}>{lead}</p>
        </FadeInUp>
      )}
    </div>
  )
}
