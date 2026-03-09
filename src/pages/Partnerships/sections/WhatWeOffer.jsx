import FadeInUp from '@/components/motion/FadeInUp'
import { StaggerChildren, StaggerItem } from '@/components/motion/StaggerChildren'
import Card, { CardIcon, CardTitle, CardBody } from '@/components/ui/Card'
import iconMarketEntry from '@/assets/icons/marketentry.png'
import iconNationwide from '@/assets/icons/nationwide.png'
import iconPartnership from '@/assets/icons/partnership.png'
import iconInnovation from '@/assets/icons/innovation.png'
import styles from './WhatWeOffer.module.css'

const offerings = [
  {
    icon: iconMarketEntry,
    iconAlt: 'Market Entry',
    title: 'Market Entry',
    body: 'We provide a trusted gateway into the Maldivian pharmaceutical market, helping international partners navigate the local healthcare landscape.',
  },
  {
    icon: iconNationwide,
    iconAlt: 'Nationwide Distribution',
    title: 'Nationwide Distribution',
    body: 'Leverage our established distribution network to reach hospitals, clinics, and pharmacies across the Maldives.',
  },
  {
    icon: iconPartnership,
    iconAlt: 'Long-Term Collaboration',
    title: 'Long-Term Collaboration',
    body: 'We are committed to building lasting strategic partnerships built on trust, collaboration, and shared long-term value, not just one-time transactions.',
  },
  {
    icon: iconInnovation,
    iconAlt: 'Access to Innovation',
    title: 'Access to Innovation',
    body: 'Together, we can introduce new and effective treatments that strengthen and advance the Maldivian healthcare system, improving access to better care for communities.',
  },
]

export default function WhatWeOffer() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <FadeInUp delay={0}>
          <span className="text-overline">What We Offer</span>
        </FadeInUp>
        <FadeInUp delay={0.1}>
          <h2 className={styles.heading}>What We Offer Our Partners</h2>
        </FadeInUp>

        <StaggerChildren className={['grid-4', styles.grid].join(' ')}>
          {offerings.map((o) => (
            <StaggerItem key={o.title}>
              <Card>
                <CardIcon>
                  <img src={o.icon} alt={o.iconAlt} className={styles.cardIconImg} />
                </CardIcon>
                <CardTitle>{o.title}</CardTitle>
                <CardBody>{o.body}</CardBody>
              </Card>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </section>
  )
}
