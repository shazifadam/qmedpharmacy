import PageTransition from '@/components/motion/PageTransition'
import Hero from './sections/Hero'
import PillarCards from './sections/PillarCards'
import AboutSnapshot from './sections/AboutSnapshot'
import MissionSnapshot from './sections/MissionSnapshot'
import WhoWeSupport from '@/pages/About/sections/WhoWeSupport'
import CTABanner from './sections/CTABanner'

export default function Home() {
  return (
    <PageTransition>
      <Hero />
      <PillarCards />
      <AboutSnapshot />
      <MissionSnapshot />
      <WhoWeSupport />
      <CTABanner />
    </PageTransition>
  )
}
