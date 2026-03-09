import PageTransition from '@/components/motion/PageTransition'
import Hero from './sections/Hero'
import Overview from './sections/Overview'
import WhatWeOffer from './sections/WhatWeOffer'
import WhyPartner from './sections/WhyPartner'
import InquiryForm from './sections/InquiryForm'

export default function Partnerships() {
  return (
    <PageTransition>
      <Hero />
      <Overview />
      <WhatWeOffer />
      <WhyPartner />
      <InquiryForm />
    </PageTransition>
  )
}
