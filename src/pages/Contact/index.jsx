import PageTransition from '@/components/motion/PageTransition'
import Hero from './sections/Hero'
import ContactDetails from './sections/ContactDetails'
import InquiryForm from './sections/InquiryForm'

export default function Contact() {
  return (
    <PageTransition>
      <Hero />
      <ContactDetails />
      <InquiryForm />
    </PageTransition>
  )
}
