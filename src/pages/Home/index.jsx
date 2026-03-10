import PageTransition from '@/components/motion/PageTransition'
import Hero from './sections/Hero'
import PillarCards from './sections/PillarCards'
import DistributionSnapshot from './sections/DistributionSnapshot'
import PartnershipSnapshot from './sections/PartnershipSnapshot'
import AboutSnapshot from './sections/AboutSnapshot'
import MissionSnapshot from './sections/MissionSnapshot'
import WhoWeSupport from '@/pages/About/sections/WhoWeSupport'
import CTABanner from './sections/CTABanner'

export default function Home() {
  return (
    <PageTransition>
      <Hero />
      <PillarCards />
      <DistributionSnapshot />
      <PartnershipSnapshot />
      <AboutSnapshot />
      <MissionSnapshot />
      <WhoWeSupport />
      <CTABanner />
    </PageTransition>
  )
}
