import FadeInUp from '@/components/motion/FadeInUp'
import { StaggerChildren, StaggerItem } from '@/components/motion/StaggerChildren'
import Card, { CardIcon, CardTitle, CardBody } from '@/components/ui/Card'
import iconHospital from '@/assets/icons/hospital.png'
import iconClinic from '@/assets/icons/clinic.png'
import iconPharmacy from '@/assets/icons/pharmacy.png'
import iconIsland from '@/assets/icons/island.png'
import styles from './WhoWeServe.module.css'

const clients = [
  {
    icon: iconHospital,
    iconAlt: 'Hospitals',
    title: 'Hospitals',
    body: 'Supporting major healthcare institutions with consistent and timely pharmaceutical supply.',
  },
  {
    icon: iconClinic,
    iconAlt: 'Private Clinics',
    title: 'Private Clinics',
    body: 'Providing private healthcare providers with access to quality medications and pharmaceutical products.',
  },
  {
    icon: iconPharmacy,
    iconAlt: 'Community Pharmacies',
    title: 'Community Pharmacies',
    body: 'Supplying community pharmacies so that patients can access the medicines they need locally.',
  },
  {
    icon: iconIsland,
    iconAlt: 'Healthcare Providers Across Islands',
    title: 'Healthcare Providers Across Islands',
    body: 'Reaching healthcare providers across the islands of the Maldives, ensuring nationwide access.',
  },
]

export default function WhoWeServe() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <FadeInUp delay={0}>
          <span className="text-overline">Who We Serve</span>
        </FadeInUp>
        <FadeInUp delay={0.1}>
          <h2 className={styles.heading}>Reaching Every Corner of Maldivian Healthcare</h2>
        </FadeInUp>

        <StaggerChildren className={['grid-4', styles.grid].join(' ')}>
          {clients.map((c) => (
            <StaggerItem key={c.title}>
              <Card className={styles.centeredCard}>
                <CardIcon>
                  <img src={c.icon} alt={c.iconAlt} className={styles.cardIconImg} />
                </CardIcon>
                <CardTitle>{c.title}</CardTitle>
                <CardBody>{c.body}</CardBody>
              </Card>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </section>
  )
}
