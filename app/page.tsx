import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Services from '@/components/Services'
import IVF from '@/components/IVF'
import Doctors from '@/components/Doctors'
import WhyUs from '@/components/WhyUs'
import Facilities from '@/components/Facilities'
import Gallery from '@/components/Gallery'
import Testimonials from '@/components/Testimonials'
import VideoSection from '@/components/VideoSection'
import CTABanner from '@/components/CTABanner'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <IVF />
      <Doctors />
      <Facilities />
      <WhyUs />
      <Gallery />
      <Testimonials />
      <VideoSection />
      <CTABanner />
      <Contact />
      <Footer />
    </main>
  )
}