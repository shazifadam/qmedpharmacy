import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

export default function FadeInUp({
  children,
  delay = 0,
  duration = 0.8,
  yOffset = 24,
  className
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px 0px' })

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: yOffset }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration,
        delay,
        ease: [0.4, 0, 0.2, 1]
      }}
    >
      {children}
    </motion.div>
  )
}
