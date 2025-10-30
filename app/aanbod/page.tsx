import HeroAanbod from '../components/HeroAanbod';
import PakkettenGrid from '../components/PakkettenGrid';
import GezelligeSportschool from '../components/GezelligeSportschool';
import Testimonials from '../components/Testimonials';
import CTABanner from '../components/CTABanner';

export default function AanbodPage() {
  return (
    <main>
      <HeroAanbod />
      <GezelligeSportschool />
      <PakkettenGrid />
      <Testimonials />
      <CTABanner />
    </main>
  );
}