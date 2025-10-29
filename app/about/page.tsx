import React from 'react';
import HeroAboutUs from '../components/HeroAboutUs';  // ← Van ./  naar ../components/
import QualitySection from '../components/QualitySection';  // ← Van ./  naar ../components/

export default function AboutPage() {
  return (
    <main>
      <HeroAboutUs />
      <QualitySection />
      
      {/* TODO: Add more About Us sections below */}
    </main>
  );
}