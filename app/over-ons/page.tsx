import React from 'react';
import HeroAboutUs from '../components/HeroAboutUs';
import QualitySection from '../components/QualitySection';
import FoundedSection from '../components/FoundedSection';
import CoachesSection from '../components/CoachesSection';
import CTABanner from '../components/CTABanner'
import Testimonials from '../components/Testimonials'; 

export default function AboutPage() {
  return (
    <main>
      <HeroAboutUs />
      <QualitySection />
      <FoundedSection />
      <CoachesSection />
       <Testimonials />
       <CTABanner />
    </main>
  );
}