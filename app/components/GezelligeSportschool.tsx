'use client';

import React from 'react';
import Image from 'next/image';
import PrimaryButton from './PrimaryButton';
import OutlineButton from './OutlineButton';

const GezelligeSportschool = () => {
  return (
    <section 
      className="relative w-full bg-white lg:h-[765px]"
    >
      <div className="max-w-[1440px] mx-auto px-6 lg:px-16 h-full">
        
        {/* ===== MOBILE LAYOUT ===== */}
        <div className="block lg:hidden py-12">
          
          {/* Image */}
          <div 
            className="relative overflow-hidden shadow-xl mb-6 mx-auto"
            style={{
              width: '370px',
              height: '378px',
              borderRadius: '24px'
            }}
          >
            <Image
              src="/about-team-large.png"
              alt="Potentia Team"
              fill
              className="object-cover"
            />
          </div>

          {/* Content */}
          <div className="space-y-5 max-w-[370px] mx-auto">
            
            {/* Heading with Arrow */}
            <div className="flex items-center gap-3">
              <h2 
                className="text-gym-navy"
                style={{
                  fontFamily: 'Syne',
                  fontWeight: 700,
                  fontSize: '28px',
                  lineHeight: '34px'
                }}
              >
                Niet je standaard sportschool
              </h2>
              <Image 
                src="/wobbly-arrow.svg" 
                width={32} 
                height={32} 
                alt="" 
                className="flex-shrink-0"
                style={{
                  filter: 'brightness(0) saturate(100%) invert(67%) sepia(52%) saturate(463%) hue-rotate(359deg) brightness(95%) contrast(90%)'
                }}
              />
            </div>
            
            {/* Body Text */}
            <p 
              className="text-gym-navy/80"
              style={{
                fontFamily: 'Inter',
                fontWeight: 400,
                fontSize: '15px',
                lineHeight: '24px'
              }}
            >
              Maar wel de gezelligste en leukste in Cranendonck. We willen geen drukke 
              sportschool meer, maar een plek waar je als tweede 'thuis' kan werken aan je gezondheid.
            </p>

            {/* Buttons - Standard components met full width */}
            <div className="space-y-3 pt-2">
              <div className="w-full">
                <PrimaryButton variant="solid" className="w-full">
                  GRATIS PROEFLES
                </PrimaryButton>
              </div>
              
              <div className="w-full">
                <OutlineButton variant="golden-outline" className="w-full">
                  NEEM CONTACT OP
                </OutlineButton>
              </div>
            </div>
            
          </div>
        </div>

        {/* ===== DESKTOP LAYOUT: EXACT ORIGINEEL ===== */}
        <div className="relative h-full hidden lg:block">
        
          {/* Content Container - Left Side */}
          <div 
            className="absolute"
            style={{
              width: '493px',
              height: '353px',
              top: '181px',
              left: '0px'
            }}
          >
            {/* Heading with Arrow */}
            <div 
              className="relative mb-8 flex items-center gap-3"
              style={{
                left: '9px'
              }}
            >
              <h2 
                className="text-gym-navy"
                style={{
                  fontFamily: 'Syne',
                  fontWeight: 700,
                  fontSize: '41px',
                  lineHeight: '100%'
                }}
              >
                Niet je standaard sportschool
              </h2>
              <Image 
                src="/wobbly-arrow.svg" 
                width={40} 
                height={40} 
                alt="" 
                className="flex-shrink-0"
                style={{
                  filter: 'brightness(0) saturate(100%) invert(67%) sepia(52%) saturate(463%) hue-rotate(359deg) brightness(95%) contrast(90%)'
                }}
              />
            </div>

            {/* Paragraph */}
            <div 
              style={{
                width: '484px',
                marginTop: '19px',
                marginLeft: '9px'
              }}
            >
              <p 
                className="text-gym-navy"
                style={{
                  fontFamily: 'Aeonik TRIAL, Inter, sans-serif',
                  fontWeight: 400,
                  fontSize: '19px',
                  lineHeight: '35px'
                }}
              >
                Maar wel de gezelligste en leukste in Cranendonck. We willen geen drukke 
                sportschool meer, maar een plek waar je als tweede 'thuis' kan werken aan je gezondheid.
              </p>
            </div>

            {/* Buttons */}
            <div 
              className="flex gap-4 mt-8"
              style={{
                marginLeft: '9px'
              }}
            >
              <PrimaryButton variant="solid">
                GRATIS PROEFLES
              </PrimaryButton>
              <OutlineButton variant="golden-outline">
                NEEM CONTACT OP
              </OutlineButton>
            </div>

          </div>

          {/* Images Container - Right Side */}
          <div 
            className="absolute"
            style={{
              width: '549px',
              height: '570px',
              top: '102px',
              right: '0px'
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
                src="/about-team-large.png"
                alt="Potentia Team"
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
                src="/about-training-1.png"
                alt="Personal Training"
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
                src="/about-training-2.png"
                alt="Group Training"
                fill
                className="object-cover"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default GezelligeSportschool;