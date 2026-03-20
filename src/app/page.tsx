import Navbar from '@/components/sections/Navbar'
import Hero from '@/components/sections/Hero'
import Sectors from '@/components/sections/Sectors'
import HowItWorks from '@/components/sections/HowItWorks'
import Philosophy from '@/components/sections/Philosophy'
import Testimonial from '@/components/sections/Testimonial'
import Blog from '@/components/sections/Blog'
import Contact from '@/components/sections/Contact'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Sectors />
      <HowItWorks />
      <Philosophy />
      <Testimonial />
      <Blog />
      <Contact />
    </main>
  )
}