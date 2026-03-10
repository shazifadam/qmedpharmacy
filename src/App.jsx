import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import { useEffect } from 'react'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import Home         from '@/pages/Home'
import About        from '@/pages/About'
import Distribution from '@/pages/Distribution'
import Partnerships from '@/pages/Partnerships'
import Contact      from '@/pages/Contact'
import NotFound     from '@/pages/NotFound'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo({ top: 0, behavior: 'instant' }) }, [pathname])
  return null
}

export default function App() {
  const location = useLocation()

  return (
    <>
      <ScrollToTop />
      <Navbar />
      <main style={{ paddingTop: '76px' }}>
        <AnimatePresence mode="wait" initial={false}>
          <Routes location={location} key={location.pathname}>
            <Route path="/"              element={<Home />} />
            <Route path="/about"         element={<About />} />
            <Route path="/distribution"  element={<Distribution />} />
            <Route path="/partnerships"  element={<Partnerships />} />
            <Route path="/contact"       element={<Contact />} />
            <Route path="*"              element={<NotFound />} />
          </Routes>
        </AnimatePresence>
      </main>
      <Footer />
    </>
  )
}
