import React from 'react';
import HeroReformerPilates from '../components/HeroReformerPilates';
import IntroReformerPilates from '../components/IntroReformerPilates';
import PricingReformerPilates from '../components/PricingReformerPilates';
import Testimonials from '../components/Testimonials';
import CTABanner from '../components/CTABanner';

export default function ReformerPilatesPage() {
  return (
    <main>
      <HeroReformerPilates />
      <IntroReformerPilates />
      <PricingReformerPilates />
      <Testimonials />
      <CTABanner />
    </main>
  );
}