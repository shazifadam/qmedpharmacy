import styles from './Button.module.css'

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  type = 'button',
  ...props
}) {
  const classes = [styles.btn, styles[variant], styles[size]].join(' ')

  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {children}
      </a>
    )
  }

  return (
    <button className={classes} onClick={onClick} type={type} {...props}>
      {children}
    </button>
  )
}
