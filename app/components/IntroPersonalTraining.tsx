'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import PrimaryButton from './PrimaryButton';
import OutlineButton from './OutlineButton';
import ProeflesPopup from './ProeflesPopup';

const IntroPersonalTraining = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  return (
    <>
      <section 
        className="relative w-full bg-white"
        style={{
          height: '765px'
        }}
      >
        <div className="max-w-[1440px] mx-auto h-full relative">
          
          {/* Content Container - Left Side */}
          <div 
            className="absolute"
            style={{
              width: '493px',
              height: '353px',
              top: '181px',
              left: '144px'
            }}
          >
            {/* Heading with Arrow */}
            <div 
              className="relative mb-8"
              style={{
                left: '9px'
              }}
            >
              <h2 
                className="text-gym-navy inline"
                style={{
                  fontFamily: 'Syne',
                  fontWeight: 700,
                  fontSize: '41px',
                  lineHeight: '100%'
                }}
              >
                Personal training van het hoogste niveau{' '}
              </h2>
              
              {/* Wobbly Arrow */}
              <Image
                src="/wobbly-arrow.svg"
                alt=""
                width={40}
                height={40}
                className="inline-block ml-2"
                style={{ 
                  transform: 'translateY(-8px)',
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
                Met de personal training bij Potentia in Maarheeze heb jij de stok achter de deur die je nodig hebt om te sporten en te werken aan je gezondheid. Gezonder en fitter dan ooit met de persoonlijke aandacht die jij nodig hebt.
              </p>
            </div>

            {/* Buttons */}
            <div 
              className="flex gap-4 mt-8"
              style={{
                marginLeft: '9px'
              }}
            >
              <PrimaryButton 
                variant="solid"
                onClick={() => setIsPopupOpen(true)}
              >
              PROEFLES 
              </PrimaryButton>
              <Link href="/lesrooster">
                <OutlineButton variant="golden-outline">
                  LESROOSTER
                </OutlineButton>
              </Link>
            </div>

          </div>

          {/* Images Container - Right Side */}
          <div 
            className="absolute hidden lg:block"
            style={{
              width: '549px',
              height: '570px',
              top: '102px',
              right: '144px'
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
                alt="Personal Training"
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
                alt="Personal Workout"
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
                alt="Training Equipment"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Mobile: Single Large Image */}
          <div 
            className="lg:hidden absolute"
            style={{
              width: '100%',
              maxWidth: '350px',
              height: '450px',
              top: '520px',
              left: '50%',
              transform: 'translateX(-50%)',
              borderRadius: '24px',
              overflow: 'hidden'
            }}
          >
            <Image
              src="/about-team-large.png"
              alt="Personal Training"
              fill
              className="object-cover"
            />
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

export default IntroPersonalTraining;