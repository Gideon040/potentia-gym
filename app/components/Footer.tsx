import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="relative w-full bg-white">
      {/* Main Footer Content */}
      <div className="max-w-[1440px] mx-auto px-6 lg:px-16 pt-12 lg:pt-20 pb-8 lg:pb-12">
        <div className="mx-auto max-w-[1200px]">
          
          {/* Content - Mobile: Stack, Desktop: Flex */}
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
            
            {/* Left: Logo + Tagline + Socials */}
            <div className="flex flex-col gap-8 lg:gap-[122px] w-full lg:w-[484px]">
              {/* Logo */}
              <Link href="/" className="inline-block">
                <Image 
                  src="/zwart potentia logo.png" 
                  alt="Potentia" 
                  width={180} 
                  height={50}
                  className="h-10 lg:h-12 w-auto"
                />
              </Link>

              {/* Tagline + Socials Container */}
              <div className="flex flex-col gap-6">
                {/* Tagline */}
                <div>
                  <p 
                    className="text-2xl lg:text-[30px] leading-tight lg:leading-none"
                    style={{
                      fontFamily: 'Syne',
                      fontWeight: 700,
                      color: '#000000'
                    }}
                  >
                    Train in a fun way with{' '}
                    <span style={{ color: '#96999E' }}>
                      personal attention
                    </span>
                  </p>
                </div>

                {/* Social Icons - Responsive sizing */}
                <div className="w-[200px] lg:w-auto">
                  <Image 
                    src="/icons socials.png" 
                    alt="Social Media" 
                    width={600} 
                    height={160}
                    className="h-auto w-full lg:w-auto"
                  />
                </div>
              </div>
            </div>

            {/* Links Container - Mobile: Stack, Desktop: Flex */}
            <div className="flex flex-col sm:flex-row gap-8 lg:gap-9 w-full lg:w-auto">
              
              {/* Menu Column */}
              <div className="w-full sm:w-[134px]">
                <h3 
                  className="text-gym-navy uppercase mb-4"
                  style={{
                    fontFamily: 'Syne',
                    fontWeight: 600,
                    fontSize: '16px',
                    lineHeight: '100%'
                  }}
                >
                  Menu
                </h3>
                <ul className="space-y-3">
                  {['Home', 'Offer', 'Contact', 'Trial lesson'].map((item) => (
                    <li key={item}>
                      <Link 
                        href={`/${item.toLowerCase().replace(' ', '-')}`}
                        className="text-gym-navy hover:text-gym-gold transition text-sm"
                        style={{ fontFamily: 'Inter' }}
                      >
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Services Column */}
              <div className="w-full sm:w-[121px]">
                <h3 
                  className="text-gym-navy uppercase mb-4"
                  style={{
                    fontFamily: 'Syne',
                    fontWeight: 600,
                    fontSize: '16px',
                    lineHeight: '100%'
                  }}
                >
                  Services
                </h3>
                <ul className="space-y-3">
                  {['Fitness', 'Personal Training', 'Duo Training', 'Small Group Training', 'Group training'].map((item) => (
                    <li key={item}>
                      <Link 
                        href={`/${item.toLowerCase().replace(/ /g, '-')}`}
                        className="text-gym-navy hover:text-gym-gold transition text-sm"
                        style={{ fontFamily: 'Inter' }}
                      >
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Location & Contact Column */}
            <div className="flex flex-col sm:flex-row lg:flex-col gap-8 w-full lg:w-auto">
              {/* Location */}
              <div className="w-full sm:w-1/2 lg:w-auto">
                <h3 
                  className="text-gym-navy uppercase mb-4"
                  style={{
                    fontFamily: 'Syne',
                    fontWeight: 600,
                    fontSize: '16px',
                    lineHeight: '100%'
                  }}
                >
                  Location
                </h3>
                <p className="text-gym-navy text-sm" style={{ fontFamily: 'Inter' }}>
                  Potentia Maarheeze<br />
                  Burgen 18 6026BX Maarheeze
                </p>
              </div>

              {/* Contact */}
              <div className="w-full sm:w-1/2 lg:w-auto">
                <h3 
                  className="text-gym-navy uppercase mb-4"
                  style={{
                    fontFamily: 'Syne',
                    fontWeight: 600,
                    fontSize: '16px',
                    lineHeight: '100%'
                  }}
                >
                  Contact
                </h3>
                <p className="text-gym-navy text-sm" style={{ fontFamily: 'Inter' }}>
                  +316 42 47 14 19<br />
                  info@potentiagym.nl
                </p>
              </div>
            </div>

          </div>

          {/* Copyright */}
          <div className="mt-8 lg:mt-12 pt-6 border-t border-gray-200">
            <p 
              className="text-gym-navy text-xs text-center lg:text-left"
              style={{ fontFamily: 'Inter' }}
            >
              Copyright © - 2022 Potentia Gym | All rights reserved
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Bars */}
      <div className="relative w-full">
        {/* Navy Bar */}
        <div 
          style={{
            width: '100%',
            height: '10px',
            background: '#002444'
          }}
        />
        {/* Gold Bar */}
        <div 
          style={{
            width: '100%',
            height: '10px',
            background: '#E1AC46'
          }}
        />
      </div>
    </footer>
  );
};

export default Footer;