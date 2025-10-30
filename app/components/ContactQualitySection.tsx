'use client';

import React from 'react';
import Image from 'next/image';
import PrimaryButton from '../components/PrimaryButton';
import OutlineButton from '../components/OutlineButton';
import Link from 'next/link';

const ContactQualitySection = () => {
  return (
    <section 
      className="relative w-full bg-white"
      style={{
        height: '765px'
      }}
    >
      {/* Content Container - ZELFDE ALS ContactFormSection */}
      <div className="max-w-[1440px] mx-auto px-6 lg:px-16 h-full">
        <div className="relative h-full">
        
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
            {/* Heading */}
            <div 
              className="relative mb-8"
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
                Aan de slag
              </h2>
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
                Wij willen je graag helpen! Om jouw vraag in behandeling te kunnen nemen hebben we enkele gegevens van je nodig. De velden met een sterretje zijn verplicht.
              </p>
            </div>

{/* Buttons */}
            <div 
              className="flex gap-4 mt-8"
              style={{
                marginLeft: '9px'
              }}
            >
              <Link href="/aanbod">
                <PrimaryButton variant="solid">
                  MEER INFORMATIE
                </PrimaryButton>
              </Link>
              <Link href="/over-ons">
                <OutlineButton variant="golden-outline">
                  ONS TEAM
                </OutlineButton>
              </Link>
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

export default ContactQualitySection;