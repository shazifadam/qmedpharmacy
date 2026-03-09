import { Link } from 'react-router-dom'
import { StaggerChildren, StaggerItem } from '@/components/motion/StaggerChildren'
import FadeInUp from '@/components/motion/FadeInUp'
import Card, { CardIcon, CardTitle, CardBody } from '@/components/ui/Card'
import iconDistribution from '@/assets/icons/distribution.png'
import iconPartnership from '@/assets/icons/partnership.png'
import iconQuality from '@/assets/icons/quality.png'
import styles from './PillarCards.module.css'

const pillars = [
  {
    icon: iconDistribution,
    iconAlt: 'Distribution icon',
    title: 'Distribution',
    body: 'Our distribution network supports hospitals, private clinics, community pharmacies, and healthcare providers across islands.',
    link: '/distribution',
  },
  {
    icon: iconPartnership,
    iconAlt: 'Partnership icon',
    title: 'Partnerships',
    body: 'We are actively seeking international pharmaceutical manufacturers and distributors interested in entering the Maldivian healthcare market.',
    link: '/partnerships',
  },
  {
    icon: iconQuality,
    iconAlt: 'Quality assurance icon',
    title: 'Quality Assurance',
    body: 'We are committed to ensuring the availability of safe, effective, and high-quality medicines across the Maldives.',
    link: '/about',
  },
]

export default function PillarCards() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <FadeInUp delay={0}>
          <h2 className={styles.heading}>How We Serve Healthcare in the Maldives</h2>
        </FadeInUp>

        <StaggerChildren className={['grid-3', styles.grid].join(' ')}>
          {pillars.map((card) => (
            <StaggerItem key={card.title}>
              <Link to={card.link} className={styles.cardLink}>
                <Card>
                  <CardIcon>
                    <img src={card.icon} alt={card.iconAlt} className={styles.pillarIcon} />
                  </CardIcon>
                  <CardTitle>{card.title}</CardTitle>
                  <CardBody>{card.body}</CardBody>
                </Card>
              </Link>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </section>
  )
}
