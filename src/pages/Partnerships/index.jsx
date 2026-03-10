import SEO from '@/components/seo/SEO'
import PageTransition from '@/components/motion/PageTransition'
import Hero from './sections/Hero'
import Overview from './sections/Overview'
import WhatWeOffer from './sections/WhatWeOffer'
import WhyPartner from './sections/WhyPartner'
import InquiryForm from './sections/InquiryForm'

export default function Partnerships() {
  return (
    <PageTransition>
      <SEO
        title="International Partnerships | QMED Pharmacy"
        description="Partner with QMED Pharmacy to enter the Maldivian pharmaceutical market. We connect international manufacturers and distributors with local healthcare providers."
        canonical="/partnerships"
        pageType="WebPage"
      />
      <Hero />
      <Overview />
      <WhatWeOffer />
      <WhyPartner />
      <InquiryForm />
    </PageTransition>
  )
}
