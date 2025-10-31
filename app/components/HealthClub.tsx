'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ProeflesPopup from './ProeflesPopup';

const HealthClub = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  return (
    <>
      <section className="relative w-full bg-white py-12 lg:py-32">
        <div className="max-w-[1440px] mx-auto px-5 lg:px-16">
          
          {/* Mobile Layout: Stacked */}
          <div className="block lg:hidden">
            {/* Image - Top */}
            <div className="relative w-full h-[400px] rounded-[24px] overflow-hidden shadow-xl mb-6">
              <Image
                src="/section2.jpg"
                alt="Health club interior"
                fill
                className="object-cover"
              />
            </div>

            {/* Content - Bottom */}
            <div className="space-y-5 px-2">
              <h2 
                className="text-gym-navy text-left"
                style={{
                  fontFamily: 'Syne',
                  fontWeight: 700,
                  fontSize: '28px',
                  lineHeight: '34px'
                }}
              >
                De health club<br />
                van Cranendonck
              </h2>
              
              <p 
                className="text-gym-navy/80 text-left"
                style={{
                  fontFamily: 'Inter',
                  fontWeight: 400,
                  fontSize: '15px',
                  lineHeight: '24px'
                }}
              >
                Potentia biedt een ruime selectie van state-of-the-art apparatuur van 
                GymFit en TechnoGym, evenals de juiste trainers voor een breed scala aan 
                groepslessen. Met 700m² beschikbare ruimte voor krachttraining en groepslessen, 
                wordt het bereiken van je doelen makkelijker dan ooit. Bij inschrijving ontvang 
                je een gratis trainings- en voedingsplan, zodat je geen vooruitgang mist.
              </p>

              {/* Buttons */}
              <div className="space-y-3 pt-2">
                <button 
                  onClick={() => setIsPopupOpen(true)}
                  className="w-full max-w-[350px] bg-[#E1AC46] text-[#002444] rounded-[45px] font-bold uppercase transition-all duration-300 hover:bg-[#FFCE71] active:scale-95"
                  style={{
                    height: '46px',
                    fontFamily: 'Syne',
                    fontSize: '12px',
                    letterSpacing: '0.15em'
                  }}
                >
                  Ik wil een proefles
                </button>
                
                <Link href="/aanbod" className="block">
                  <button 
                    className="w-full max-w-[350px] border-2 border-[#E1AC46] text-[#002444] rounded-[45px] font-bold uppercase transition-all duration-300 hover:bg-[#E1AC46]/10 active:scale-95"
                    style={{
                      height: '46px',
                      fontFamily: 'Syne',
                      fontSize: '12px',
                      letterSpacing: '0.15em'
                    }}
                  >
                    Ons aanbod
                  </button>
                </Link>
              </div>
            </div>
          </div>

          {/* Desktop Layout: Side by Side */}
          <div className="hidden lg:grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Side - Text & Buttons */}
            <div className="space-y-6 lg:max-w-[522px]">
              <h2 
                className="text-gym-navy"
                style={{
                  fontFamily: 'Syne',
                  fontWeight: 700,
                  fontSize: '41px',
                  lineHeight: '100%'
                }}
              >
                De health club<br />
                van Cranendonck
              </h2>
              
              <p 
                className="text-gym-navy/80"
                style={{
                  fontFamily: 'Inter',
                  fontWeight: 400,
                  fontSize: '18px',
                  lineHeight: '35px'
                }}
              >
                Potentia biedt een ruime selectie van state-of-the-art apparatuur van 
                GymFit en TechnoGym, evenals de juiste trainers voor een breed scala aan 
                groepslessen. Met 700m² beschikbare ruimte voor krachttraining en groepslessen, 
                wordt het bereiken van je doelen makkelijker dan ooit. Bij inschrijving ontvang 
                je een gratis trainings- en voedingsplan, zodat je geen vooruitgang mist.
              </p>

              <div className="flex flex-wrap gap-4 pt-2">
                <button 
                  onClick={() => setIsPopupOpen(true)}
                  className="flex items-center justify-center px-[35px] py-5 rounded-full bg-[#E1AC46] text-[#002444] font-bold text-xs leading-[14px] tracking-[0.15em] uppercase transition-all duration-300 hover:scale-105"
                  style={{ fontFamily: 'Syne' }}
                >
                  Ik wil een proefles
                </button>
                <Link href="/aanbod">
                  <button 
                    className="flex items-center justify-center px-[35px] py-5 rounded-full border border-[#E1AC46] text-[#002444] bg-transparent font-bold text-xs leading-[14px] tracking-[0.15em] uppercase transition-all duration-300 hover:scale-105 hover:bg-[#E1AC46]/10"
                    style={{ fontFamily: 'Syne' }}
                  >
                    Ons aanbod
                  </button>
                </Link>
              </div>
            </div>

            {/* Right Side - Image */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative w-full max-w-[436px] h-[569px] rounded-[40px] overflow-hidden shadow-2xl">
                <Image
                  src="/section2.jpg"
                  alt="Health club interior"
                  fill
                  className="object-cover"
                />
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

export default HealthClub;