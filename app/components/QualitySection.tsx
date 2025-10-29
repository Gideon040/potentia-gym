import React from 'react';
import Image from 'next/image';
import PrimaryButton from '../components/PrimaryButton';
import OutlineButton from '../components/OutlineButton';

const QualitySection = () => {
  return (
    <section 
      className="relative w-full bg-white"
      style={{
        height: '765px'
      }}
    >
      <div className="max-w-[1440px] mx-auto h-full relative">
        
        {/* Images Container - Left Side */}
        <div 
          className="absolute"
          style={{
            width: '549px',
            height: '570px',
            top: '102px',
            left: '144px'
          }}
        >
          {/* Large Image - Left */}
          <div 
            className="absolute"
            style={{
              width: '308px',
              height: '570px',
              top: '0px',
              left: '0px',
              borderRadius: '24px',
              overflow: 'hidden'
            }}
          >
            <Image
              src="/about-team-large.png" // TODO: Replace with actual team photo
              alt="Potentia Team"
              fill
              className="object-cover"
            />
          </div>

          {/* Small Image 1 - Top Right */}
          <div 
            className="absolute"
            style={{
              width: '229px',
              height: '277px',
              top: '0px',
              left: '320px',
              borderRadius: '24px',
              overflow: 'hidden'
            }}
          >
            <Image
              src="/about-training-1.png" // TODO: Replace with training photo
              alt="Personal Training"
              fill
              className="object-cover"
            />
          </div>

          {/* Small Image 2 - Bottom Right */}
          <div 
            className="absolute"
            style={{
              width: '229px',
              height: '276px',
              top: '294px',
              left: '320px',
              borderRadius: '24px',
              overflow: 'hidden'
            }}
          >
            <Image
              src="/about-training-2.png" // TODO: Replace with training photo
              alt="Group Training"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Content Container - Right Side */}
        <div 
          className="absolute"
          style={{
            width: '493px',
            height: '353px',
            top: '181px',
            left: '744px'
          }}
        >
          {/* Heading with Arrow */}
          <div 
            className="relative mb-8"
            style={{
              width: '265px',
              height: '98px',
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
              Attention to quality{' '}
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
              height: '171px',
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
              Quality is our top priority. We understand better than anyone how important it is to give each individual personal attention. That's why we choose quality over quantity. A select group of coaches will work with you.
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
              I WANT A TRIAL LESSON
            </PrimaryButton>
            <OutlineButton variant="golden-outline">
              OUR OFFER
            </OutlineButton>
          </div>

        </div>

      </div>
    </section>
  );
};

export default QualitySection;