import PageTransition from '@/components/motion/PageTransition'
import Hero from './sections/Hero'
import OurStory from './sections/OurStory'
import ValuesCards from './sections/ValuesCards'
import MissionPullQuote from './sections/MissionPullQuote'
import WhoWeSupport from './sections/WhoWeSupport'

export default function About() {
  return (
    <PageTransition>
      <Hero />
      <OurStory />
      <ValuesCards />
      <MissionPullQuote />
      <WhoWeSupport />
    </PageTransition>
  )
}
