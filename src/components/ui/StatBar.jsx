import styles from './StatBar.module.css'

const stats = [
  { value: 'Est. 2019',       label: 'Founded' },
  { value: 'Nationwide',      label: 'Reach' },
  { value: 'Hospitals & Clinics', label: 'Clients' },
  { value: 'Quality Focused', label: 'Standard' },
]

export default function StatBar() {
  return (
    <div className={styles.statBar}>
      {stats.map((stat, i) => (
        <div key={stat.label} className={styles.stat}>
          <span className={styles.value}>{stat.value}</span>
          <span className={styles.label}>{stat.label}</span>
          {i < stats.length - 1 && <div className={styles.divider} aria-hidden="true" />}
        </div>
      ))}
    </div>
  )
}
