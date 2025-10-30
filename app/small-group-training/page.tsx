import React from 'react';
import HeroSmallGroup from '../components/HeroSmallGroup';
import SmallGroupIntro from '../components/SmallGroupIntro';
import SmallGroupBenefits from '../components/SmallGroupBenefits';
import SmallGroupFeatures from '../components/SmallGroupFeatures';
import SmallGroupCoaches from '../components/SmallGroupCoaches';
import Testimonials from '../components/Testimonials';
import CTABanner from '../components/CTABanner';

export default function SmallGroupTrainingPage() {
  return (
    <main>
      <HeroSmallGroup />
      <SmallGroupIntro />
      <SmallGroupFeatures />
      <SmallGroupBenefits />
      <SmallGroupCoaches />
      <Testimonials />
      <CTABanner />
    </main>
  );
}