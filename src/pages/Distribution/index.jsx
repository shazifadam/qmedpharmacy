import SEO from '@/components/seo/SEO'
import PageTransition from '@/components/motion/PageTransition'
import Hero from './sections/Hero'
import Overview from './sections/Overview'
import WhoWeServe from './sections/WhoWeServe'
import SupplyChain from './sections/SupplyChain'
import CTABlock from './sections/CTABlock'

export default function Distribution() {
  return (
    <PageTransition>
      <SEO
        title="Pharmaceutical Distribution | QMED Pharmacy"
        description="QMED Pharmacy distributes pharmaceutical products to hospitals, private clinics, and pharmacies across the Maldives. Reliable supply chain. Nationwide coverage."
        canonical="/distribution"
        pageType="WebPage"
      />
      <Hero />
      <Overview />
      <WhoWeServe />
      <SupplyChain />
      <CTABlock />
    </PageTransition>
  )
}
