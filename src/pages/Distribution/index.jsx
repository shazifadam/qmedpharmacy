import PageTransition from '@/components/motion/PageTransition'
import Hero from './sections/Hero'
import Overview from './sections/Overview'
import WhoWeServe from './sections/WhoWeServe'
import SupplyChain from './sections/SupplyChain'
import CTABlock from './sections/CTABlock'

export default function Distribution() {
  return (
    <PageTransition>
      <Hero />
      <Overview />
      <WhoWeServe />
      <SupplyChain />
      <CTABlock />
    </PageTransition>
  )
}
