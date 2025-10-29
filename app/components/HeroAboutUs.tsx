'use client';

import React from 'react';
import Image from 'next/image';

const HeroAboutUs = () => {
  return (
    <section 
      className="relative w-full overflow-hidden"
      style={{
        height: '384px'
      }}
    >
      {/* Background - Navy color */}
      <div 
        className="absolute inset-0"
        style={{
          background: '#001427'
        }}
      />

      {/* Background Image - Focus iets boven top */}
      <div 
        className="absolute top-0 w-full lg:w-4/5 h-full" 
        style={{ 
          right: '-20%'
        }}
      >
        <Image
          src="/about-hero-team.png"
          alt="Potentia Gym Team"
          fill
          className="object-cover"
          style={{
            objectPosition: 'center -50px'  // 20px verder omhoog
          }}
          priority
        />
      </div>

      {/* Gradient Overlay */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(269.84deg, rgba(0, 20, 39, 0.05) 11.49%, #001427 52.14%)'
        }}
      />

      {/* Content Container */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-[1440px] w-full mx-auto px-6 lg:px-16">
          <div className="max-w-[440px]">
            
            {/* "ABOUT US" Label */}
            <p 
              className="text-gym-gold uppercase mb-4"
              style={{
                fontFamily: 'Syne',
                fontWeight: 400,
                fontSize: '14px',
                lineHeight: '100%',
                letterSpacing: '0.5em'
              }}
            >
              ABOUT US
            </p>

            {/* Main Heading */}
            <h1 
              className="text-white"
              style={{
                fontFamily: 'Syne',
                fontWeight: 700,
                fontSize: '35px',
                lineHeight: '100%'
              }}
            >
              A team of dedicated professionals
            </h1>

          </div>
        </div>
      </div>

      {/* Mobile: Extra dark overlay */}
      <div className="absolute inset-0 lg:hidden bg-gradient-to-b from-black/30 via-transparent to-black/30" />
    </section>
  );
};

export default HeroAboutUs;