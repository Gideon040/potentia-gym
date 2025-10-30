import React from 'react';
import HeroPersonalTraining from '../components/HeroPersonalTraining';
import IntroPersonalTraining from '../components/IntroPersonalTraining';
import PersonalTrainingCards from '../components/PersonalTrainingCards';
import CoachesSection from '../components/CoachesSection';
import Testimonials from '../components/Testimonials';
import CTABanner from '../components/CTABanner';

export default function PersonalTrainingPage() {
  return (
    <main>
      <HeroPersonalTraining />
      <IntroPersonalTraining />
      <PersonalTrainingCards />
      <CoachesSection />
      <Testimonials />
      <CTABanner />
    </main>
  );
}