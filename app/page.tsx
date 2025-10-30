import Hero from './components/Hero'
import Stats from './components/Stats'
import HealthClub from './components/HealthClub'
import PersonalAttention from './components/PersonalAttention'
import Services from './components/Services'
import Coaches from './components/Coaches'
import Testimonials from './components/Testimonials'
import IntroVideo from './components/IntroVideo'
import CTABanner from './components/CTABanner'

export default function Home() {
  return (
    <main>
      <Hero />
      <Stats />
      <HealthClub />
      <PersonalAttention />
      <Services />
      <Coaches />
      <IntroVideo />
      <Testimonials />
      <CTABanner />
    </main>
  )
}