'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import PrimaryButton from './PrimaryButton';
import OutlineButton from './OutlineButton';
import ProeflesPopup from './ProeflesPopup';

const Intro1op12 = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  return (
    <>
      <section className="relative w-full bg-white py-12 lg:py-32">
        <div className="max-w-[1440px] mx-auto px-5 lg:px-16">
          
          {/* ===== MOBILE LAYOUT ===== */}
          <div className="block lg:hidden">
            {/* Image - Top */}
            <div className="w-full mb-6">
              <div 
                className="relative overflow-hidden shadow-xl mx-auto"
                style={{
                  width: 'calc(100vw - 40px)',
                  maxWidth: '350px',
                  height: '378px',
                  borderRadius: '24px'
                }}
              >
                <Image
                  src="/1 op 12 group.png"
                  alt="Group Training"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Content - Bottom */}
            <div className="space-y-5">
              
              {/* Heading */}
              <h2 
                className="text-gym-navy"
                style={{
                  fontFamily: 'Syne',
                  fontWeight: 700,
                  fontSize: '28px',
                  lineHeight: '34px'
                }}
              >
                Onze groepslessen
              </h2>
              
              {/* Body Text - KORTER */}
              <p 
                className="text-gym-navy/80"
                style={{
                  fontFamily: 'Inter',
                  fontSize: '15px',
                  lineHeight: '24px'
                }}
              >
                Bij Potentia Gym bieden we groepslessen voor alle niveaus. Van HYROX tot Pilates en boksles – er is altijd een les die bij jou past! Onze ervaren trainers zorgen voor motiverende workouts, zodat jij het maximale uit jezelf kunt halen.
              </p>

              {/* Buttons - Full Width */}
              <div className="space-y-3 pt-2">
                <button 
                  onClick={() => setIsPopupOpen(true)}
                  className="w-full bg-[#E1AC46] text-[#002444] rounded-[45px] font-bold uppercase transition-all duration-300 hover:bg-[#FFCE71] active:scale-95"
                  style={{
                    height: '46px',
                    fontFamily: 'Syne',
                    fontSize: '12px',
                    letterSpacing: '0.15em'
                  }}
                >
                  PROEFLES INPLANNEN
                </button>
                
                <Link href="/contact" className="block">
                  <button 
                    className="w-full border-2 border-[#E1AC46] text-[#002444] rounded-[45px] font-bold uppercase transition-all duration-300 hover:bg-[#E1AC46]/10 active:scale-95"
                    style={{
                      height: '46px',
                      fontFamily: 'Syne',
                      fontSize: '12px',
                      letterSpacing: '0.15em'
                    }}
                  >
                    NEEM CONTACT OP
                  </button>
                </Link>
              </div>
              
            </div>
          </div>

          {/* ===== DESKTOP LAYOUT ===== */}
          <div className="hidden lg:grid lg:grid-cols-2 gap-12 items-center">
            
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
                Onze groepslessen
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
                Bij Potentia Gym bieden we een breed scala aan groepslessen voor alle niveaus. Of je nu je kracht en uithoudingsvermogen wilt verbeteren met HYROX, je core wilt versterken met XCORE, ontspanning en flexibiliteit zoekt in Pilates, of je energie kwijt wilt tijdens een intensieve boksles – er is altijd een les die bij jou past!
              </p>

              <p 
                className="text-gym-navy/80"
                style={{
                  fontFamily: 'Aeonik TRIAL, Inter, sans-serif',
                  fontWeight: 400,
                  fontSize: '18px',
                  lineHeight: '35px'
                }}
              >
                Onze ervaren trainers zorgen voor motiverende en effectieve workouts, zodat jij het maximale uit jezelf kunt halen. Sluit je aan en ervaar de kracht van samen trainen!
              </p>

              <div className="flex flex-wrap gap-4 pt-2">
                <PrimaryButton 
                  variant="solid"
                  onClick={() => setIsPopupOpen(true)}
                >
                  PROEFLES INPLANNEN
                </PrimaryButton>
                <Link href="/contact">
                  <OutlineButton variant="golden-outline">
                    NEEM CONTACT OP
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
                    src="/1 op 12 group.png"
                    alt="Group Training"
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
                    src="/1 op 5 group.png"
                    alt="Group Workout"
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
                    src="/gym only.png"
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

export default Intro1op12;