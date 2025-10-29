import React from 'react';
import Image from 'next/image';
import PrimaryButton from './PrimaryButton';
import OutlineButton from './OutlineButton';

const Hero = () => {
  return (
    <section 
      className="relative w-full overflow-hidden rounded-b-[50px] lg:rounded-b-[100px] h-[600px] lg:h-[789px]"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/gym-background.png"
          alt="Gym background"
          fill
          className="object-cover object-center"
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
        <div className="max-w-[1440px] mx-auto w-full px-6 lg:px-16">
          
          {/* Left Side - Text & Buttons */}
          <div className="max-w-xl space-y-4 lg:space-y-6 pt-20 lg:pt-0">
            <h1 
              className="text-white text-4xl sm:text-5xl lg:text-[65px] leading-tight lg:leading-[72px]"
              style={{
                fontFamily: 'Syne',
                fontWeight: 700
              }}
            >
              The best gym in<br />
              Maarheze
            </h1>
            
            <p 
              className="text-white text-base sm:text-lg lg:text-[22px] leading-relaxed lg:leading-[35px]"
              style={{
                fontFamily: 'Inter',
                fontWeight: 400
              }}
            >
              Train in Cranendonck's most modern gym, with a certified coach. 
              We'll make sure you never have to worry about your progress again. 
              We'll help you with training, nutrition, and mindset.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 lg:gap-4 pt-2">
              <PrimaryButton variant="solid">
                Gratis Proefles
              </PrimaryButton>
              <OutlineButton variant="white-outline">
                Onze Diensten
              </OutlineButton>
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
  );
};

export default Hero;