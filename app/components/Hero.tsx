'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ProeflesPopup from './ProeflesPopup';

const Hero = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  return (
    <>
      <section className="relative w-full overflow-hidden rounded-b-[40px] lg:rounded-b-[100px] min-h-[680px] lg:h-[789px]">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/gym-background.png"
            alt="Gym background"
            fill
            className="object-cover"
            priority
          />
          
          {/* Gradient Overlays */}
          <div 
            className="absolute inset-0" 
            style={{
              background: `
                linear-gradient(0deg, rgba(0, 20, 39, 0.4), rgba(0, 20, 39, 0.4)),
                linear-gradient(180deg, rgba(22, 25, 27, 0) 0%, rgba(22, 25, 27, 0.3) 50%, rgba(22, 25, 27, 0.6) 100%)
              `
            }}
          />
        </div>

        {/* Golden Glow - Top Right */}
        <div 
          className="absolute z-[5] pointer-events-none w-full h-full"
          style={{
            background: `radial-gradient(circle at 85% 15%, rgba(225, 172, 70, 0.35) 0%, rgba(225, 172, 70, 0.15) 25%, transparent 50%)`,
          }}
        />

        {/* Content */}
        <div className="relative z-10 h-full flex items-center">
          {/* Mobile Layout: Fixed positioning */}
          <div className="block lg:hidden absolute" style={{ top: '167px', left: '20px' }}>
            <div className="space-y-6" style={{ width: '350px', maxHeight: '441px' }}>
              <h1 
                className="text-white leading-tight"
                style={{
                  fontFamily: 'Syne',
                  fontWeight: 700,
                  fontSize: '42px',
                  lineHeight: '48px'
                }}
              >
                De beste gym<br />
                van Maarheeze
              </h1>
              
              <p 
                className="text-white"
                style={{
                  fontFamily: 'Inter',
                  fontWeight: 400,
                  fontSize: '16px',
                  lineHeight: '26px'
                }}
              >
                Train in Cranendonck's modernste sportschool, met een gecertificeerde coach. 
                Wij zorgen ervoor dat je je nooit meer zorgen hoeft te maken over je vooruitgang.
              </p>

              <div className="space-y-3 pt-2">
                {/* Gratis Proefles Button */}
                <button 
                  onClick={() => setIsPopupOpen(true)}
                  className="w-full bg-[#E1AC46] text-[#002444] rounded-[45px] font-bold uppercase transition-all duration-300 hover:bg-[#FFCE71] active:scale-95"
                  style={{
                    width: '349.92px',
                    height: '46px',
                    fontFamily: 'Syne',
                    fontSize: '12px',
                    letterSpacing: '0.15em'
                  }}
                >
                  Gratis Proefles
                </button>
                
                {/* Lessen Button */}
                <Link href="/aanbod" className="block">
                  <button 
                    className="w-full border-2 border-white text-white rounded-[45px] font-bold uppercase transition-all duration-300 hover:bg-white/10 active:scale-95"
                    style={{
                      width: '349.92px',
                      height: '46px',
                      fontFamily: 'Syne',
                      fontSize: '12px',
                      letterSpacing: '0.15em'
                    }}
                  >
                    Lessen
                  </button>
                </Link>
              </div>
            </div>
          </div>

          {/* Desktop Layout: Centered in container */}
          <div className="hidden lg:block max-w-[1440px] mx-auto w-full px-16">
            <div className="max-w-xl space-y-6">
              <h1 className="text-white">
                De beste gym van<br />
                Maarheeze
              </h1>
              
              <p className="hero-text text-white">
                Train in Cranendonck's modernste sportschool, met een gecertificeerde coach. 
                Wij zorgen ervoor dat je je nooit meer zorgen hoeft te maken over je vooruitgang. 
                Wij helpen je met training, voeding en mindset.
              </p>

              <div className="flex flex-wrap gap-4 pt-2">
                <button 
                  onClick={() => setIsPopupOpen(true)}
                  className="flex items-center justify-center px-[35px] py-5 rounded-full bg-[#E1AC46] text-[#002444] font-bold text-xs leading-[14px] tracking-[0.15em] uppercase transition-all duration-300 hover:scale-105"
                  style={{ fontFamily: 'Syne' }}
                >
                  Gratis Proefles
                </button>
                <Link href="/aanbod">
                  <button 
                    className="flex items-center justify-center px-[35px] py-5 rounded-full border border-white text-white bg-transparent font-bold text-xs leading-[14px] tracking-[0.15em] uppercase transition-all duration-300 hover:scale-105 hover:bg-white/10"
                    style={{ fontFamily: 'Syne' }}
                  >
                    Lessen
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Arrow - Right Bottom Corner - Desktop Only */}
        <div className="absolute z-20 hidden lg:block" style={{ 
          width: '608px', 
          height: '374px',
          top: '415px',
          right: '50px'
        }}>
          <Image
            src="/arrow-up.svg"
            alt="Arrow"
            fill
            className="object-contain drop-shadow-2xl"
            priority
          />
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

export default Hero;