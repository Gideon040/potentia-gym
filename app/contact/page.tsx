import React from 'react';
import HeroContact from '../components/HeroContact';
import ContactQualitySection from '../components/ContactQualitySection';
import ContactFormSection from '../components/ContactFormSection';

export default function ContactPage() {
  return (
    <main>
      <HeroContact />
      <ContactQualitySection />
      <ContactFormSection />
    </main>
  );
}