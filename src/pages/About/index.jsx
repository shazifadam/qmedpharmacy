import SEO from '@/components/seo/SEO'
import PageTransition from '@/components/motion/PageTransition'
import Hero from './sections/Hero'
import OurStory from './sections/OurStory'
import ValuesCards from './sections/ValuesCards'
import MissionPullQuote from './sections/MissionPullQuote'
import WhoWeSupport from './sections/WhoWeSupport'

export default function About() {
  return (
    <PageTransition>
      <SEO
        title="About Us | QMED Pharmacy"
        description="Learn about QMED Pharmacy — established in 2019 with a mission to deliver quality medicines and trusted pharmaceutical supply across the Maldives."
        canonical="/about"
        pageType="AboutPage"
      />
      <Hero />
      <OurStory />
      <ValuesCards />
      <MissionPullQuote />
      <WhoWeSupport />
    </PageTransition>
  )
}
