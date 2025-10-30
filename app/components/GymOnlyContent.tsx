'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import PrimaryButton from './PrimaryButton';
import ProeflesPopup from './ProeflesPopup';

const GymOnlyContent = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  return (
    <>
      {/* Section 1: Jouw fitness doelen behalen */}
      <section className="relative w-full bg-white py-20 lg:py-32">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Side - Content */}
            <div className="space-y-6 lg:max-w-[600px]">
              <h2 
                className="text-gym-navy mb-8"
                style={{
                  fontFamily: 'Syne',
                  fontWeight: 700,
                  fontSize: '41px',
                  lineHeight: '100%'
                }}
              >
                Jouw fitness doelen behalen in de sportschool
              </h2>
              
              <p 
                className="text-gym-navy/80"
                style={{
                  fontFamily: 'Aeonik TRIAL, Inter, sans-serif',
                  fontWeight: 400,
                  fontSize: '18px',
                  lineHeight: '35px'
                }}
              >
                Trainen in de modernste sportschool van Maarheeze in omgeving Cranendonck, samen met een gecertificeerde coach. Wij zorgen ervoor dat je nooit meer onzeker hoeft te zijn over jouw progressie. We helpen je op het gebied van training, voeding en mindset.
              </p>
            </div>

            {/* Right Side - Image */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative w-full max-w-[439px] h-[400px] rounded-[40px] overflow-hidden shadow-2xl">
                <Image
                  src="/gym only.png"
                  alt="Fitness doelen behalen"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Section 2: Dé fitness club van deze tijd */}
      <section className="relative w-full bg-[#002444] py-20 lg:py-32">
        {/* Background gradients */}
        <div className="absolute inset-0">
          <div 
            className="absolute inset-0"
            style={{
              background: `radial-gradient(60% 100% at 95% 10%, rgba(225, 172, 70, 0.55) 0%, transparent 70%)`
            }}
          />
          <div 
            className="absolute inset-0"
            style={{
              background: `radial-gradient(50% 80% at 5% 95%, rgba(225, 172, 70, 0.3) 0%, transparent 60%)`
            }}
          />
          <div 
            className="absolute inset-0 lg:hidden"
            style={{
              background: `radial-gradient(80% 40% at 50% 100%, rgba(225, 172, 70, 0.2) 0%, transparent 60%)`
            }}
          />
        </div>

        <div className="relative z-10 max-w-[1440px] mx-auto px-6 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Side - Image */}
            <div className="flex justify-center lg:justify-start">
              <div className="relative w-full max-w-[439px] h-[569px] rounded-[40px] overflow-hidden shadow-2xl">
                <Image
                  src="/section2.jpg"
                  alt="Potentia Gym interior"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Right Side - Content */}
            <div className="space-y-6 lg:max-w-[600px]">
              <h2 
                className="text-white mb-8"
                style={{
                  fontFamily: 'Syne',
                  fontWeight: 700,
                  fontSize: '41px',
                  lineHeight: '100%'
                }}
              >
                Dé fitness club van deze tijd
              </h2>
              
              <p 
                className="text-white/90"
                style={{
                  fontFamily: 'Aeonik TRIAL, Inter, sans-serif',
                  fontWeight: 400,
                  fontSize: '18px',
                  lineHeight: '35px'
                }}
              >
                Sportschool Potentia heeft in ruim aanbod aan de modernste apparaten van GymFit en TechnoGym. Met 700m² aan beschikbare ruimte voor krachttraining, wordt het behalen van jouw doelen steeds makkelijker.
              </p>

              <p 
                className="text-white/90"
                style={{
                  fontFamily: 'Aeonik TRIAL, Inter, sans-serif',
                  fontWeight: 400,
                  fontSize: '18px',
                  lineHeight: '35px'
                }}
              >
                Bij aanmelding krijg jij van ons een gratis training- en voedingsschema, zodat jij maximaal progressie kan maken.
              </p>

              <div className="pt-2">
                <PrimaryButton 
                  variant="solid"
                  onClick={() => setIsPopupOpen(true)}
                >
                  GRATIS PROEFLES
                </PrimaryButton>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Proefles Popup */}
      <ProeflesPopup 
        isOpen={isPopupOpen} 
        onClose={() => setIsPopupOpen(false)} 
      />
    </>
  );
};

export default GymOnlyContent;