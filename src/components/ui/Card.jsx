import styles from './Card.module.css'

export default function Card({
  children,
  variant = 'default',
  className = '',
  ...props
}) {
  const classes = [styles.card, styles[variant], className].filter(Boolean).join(' ')

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  )
}

export function CardIcon({ children }) {
  return <div className={styles.cardIcon}>{children}</div>
}

export function CardTitle({ children }) {
  return <h4 className={styles.cardTitle}>{children}</h4>
}

export function CardBody({ children }) {
  return <p className={styles.cardBody}>{children}</p>
}
