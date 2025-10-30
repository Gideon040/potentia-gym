import React from 'react';
import Hero1op12 from '../components/Hero1op12';
import Intro1op12 from '../components/Intro1op12';
import TrainingenGrid1op12 from '../components/TrainingenGrid1op12';
import Coaches1op12 from '../components/Coaches1op12';
import Testimonials from '../components/Testimonials';
import CTABanner from '../components/CTABanner';

export default function OneOnTwelvePage() {
  return (
    <main>
      <Hero1op12 />
      <Intro1op12 />
      <TrainingenGrid1op12 />
      <Coaches1op12 />
      <Testimonials />
      <CTABanner />
    </main>
  );
}