import { StaggerChildren, StaggerItem } from '@/components/motion/StaggerChildren'
import FadeInUp from '@/components/motion/FadeInUp'
import Card, { CardIcon, CardTitle, CardBody } from '@/components/ui/Card'
import iconQuality from '@/assets/icons/quality.png'
import iconReliable from '@/assets/icons/reliable.png'
import iconInnovation from '@/assets/icons/innovation.png'
import iconPartnership from '@/assets/icons/partnership.png'
import styles from './ValuesCards.module.css'

const values = [
  {
    icon: iconQuality,
    iconAlt: 'Quality',
    title: 'Quality',
    body: 'Safe, effective, high-quality medicines only — never compromising the standards we uphold.',
  },
  {
    icon: iconReliable,
    iconAlt: 'Reliability',
    title: 'Reliability',
    body: 'Consistent supply and trusted service that healthcare providers across the Maldives can depend on.',
  },
  {
    icon: iconInnovation,
    iconAlt: 'Innovation',
    title: 'Innovation',
    body: 'Introducing new treatments and pharmaceutical solutions to strengthen the Maldivian healthcare system.',
  },
  {
    icon: iconPartnership,
    iconAlt: 'Partnership',
    title: 'Partnership',
    body: 'Building long-term strategic relationships with healthcare providers and international manufacturers.',
  },
]

export default function ValuesCards() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <FadeInUp delay={0}>
          <span className="text-overline">Our Values</span>
        </FadeInUp>
        <FadeInUp delay={0.1}>
          <h2 className={styles.heading}>What Guides Everything We Do</h2>
        </FadeInUp>

        <StaggerChildren className={['grid-4', styles.grid].join(' ')}>
          {values.map((v) => (
            <StaggerItem key={v.title}>
              <Card>
                <CardIcon>
                  <img src={v.icon} alt={v.iconAlt} className={styles.cardIconImg} />
                </CardIcon>
                <CardTitle>{v.title}</CardTitle>
                <CardBody>{v.body}</CardBody>
              </Card>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </section>
  )
}
