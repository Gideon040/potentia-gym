'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import PrimaryButton from './PrimaryButton';
import OutlineButton from './OutlineButton';
import ProeflesPopup from './ProeflesPopup';

const GymOnlyIntro = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  return (
    <>
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
                Fitness 24/7 in de nieuwste sportschool in Maarheeze
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
                Bij Potentia Gym train je met de beste apparaten en is er altijd een trainer voor je om je te helpen. Ervaar het zelf en vraag je gratis proefles aan.
              </p>

              <div className="flex flex-wrap gap-4 pt-2">
                <PrimaryButton 
                  variant="solid"
                  onClick={() => setIsPopupOpen(true)}
                >
                  GRATIS PROEFLES
                </PrimaryButton>
                <Link href="/aanbod">
                  <OutlineButton variant="golden-outline">
                    ONZE DIENSTEN
                  </OutlineButton>
                </Link>
              </div>
            </div>

            {/* Right Side - Images Container */}
            <div className="flex justify-center lg:justify-end">
              <div 
                className="relative"
                style={{
                  width: '549px',
                  height: '570px'
                }}
              >
                {/* Large Image - Right */}
                <div 
                  className="absolute"
                  style={{
                    width: '308px',
                    height: '570px',
                    top: '0px',
                    right: '0px',
                    borderRadius: '24px',
                    overflow: 'hidden'
                  }}
                >
                  <Image
                    src="/gym only.png"
                    alt="Gym Only Fitness"
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Small Image 1 - Top Left */}
                <div 
                  className="absolute"
                  style={{
                    width: '229px',
                    height: '277px',
                    top: '0px',
                    left: '0px',
                    borderRadius: '24px',
                    overflow: 'hidden'
                  }}
                >
                  <Image
                    src="/section2.jpg"
                    alt="Gym Interior"
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Small Image 2 - Bottom Left */}
                <div 
                  className="absolute"
                  style={{
                    width: '229px',
                    height: '276px',
                    top: '294px',
                    left: '0px',
                    borderRadius: '24px',
                    overflow: 'hidden'
                  }}
                >
                  <Image
                    src="/1 op 12 group.png"
                    alt="Training Equipment"
                    fill
                    className="object-cover"
                  />
                </div>
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

export default GymOnlyIntro;