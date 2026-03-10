import SEO from '@/components/seo/SEO'
import PageTransition from '@/components/motion/PageTransition'
import Hero from './sections/Hero'
import ContactDetails from './sections/ContactDetails'
import InquiryForm from './sections/InquiryForm'

export default function Contact() {
  return (
    <PageTransition>
      <SEO
        title="Contact Us | QMED Pharmacy"
        description="Contact QMED Pharmacy for pharmaceutical supply enquiries, partnership opportunities, or general questions. Serving the Maldives from Malé since 2019."
        canonical="/contact"
        pageType="ContactPage"
      />
      <Hero />
      <ContactDetails />
      <InquiryForm />
    </PageTransition>
  )
}
