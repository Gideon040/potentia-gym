import React from 'react';
import HeroGymOnly from '../components/HeroGymOnly';
import GymOnlyIntro from '../components/GymOnlyIntro';
import GymOnlyContent from '../components/GymOnlyContent';
import Testimonials from '../components/Testimonials';
import CTABanner from '../components/CTABanner';
import GymOnlyCoaches from '../components/GymOnlyCoaches';


export default function GymOnlyPage() {
  return (
    <main>
      <HeroGymOnly />
      <GymOnlyIntro />
      <GymOnlyCoaches />
      <GymOnlyContent />
      <Testimonials />
      <CTABanner />
    </main>
  );
}