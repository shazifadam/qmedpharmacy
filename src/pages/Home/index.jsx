import SEO from '@/components/seo/SEO'
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
      <SEO
        title="QMED Pharmacy | Trusted Pharmaceutical Distributor, Maldives"
        description="QMED Pharmacy improves access to quality medicines across the Maldives. Trusted pharmaceutical supply to hospitals, clinics, and pharmacies nationwide since 2019."
        canonical="/"
        pageType="WebPage"
      />
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
