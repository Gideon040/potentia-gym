import React from 'react';
import Image from 'next/image';
import PrimaryButton from './PrimaryButton';
import OutlineButton from './OutlineButton';

const Hero = () => {
  return (
    <section className="relative w-full overflow-hidden rounded-b-[100px]" style={{ height: '789px' }}>
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
        <div className="max-w-[1440px] mx-auto w-full px-6 lg:px-16">
          
          {/* Left Side - Text & Buttons */}
          <div className="max-w-xl space-y-6">
            <h1 className="text-white">
              The best gym in<br />
              Maarheze
            </h1>
            
            <p className="hero-text text-white">
              Train in Cranendonck's most modern gym, with a certified coach. 
              We'll make sure you never have to worry about your progress again. 
              We'll help you with training, nutrition, and mindset.
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
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

      {/* Arrow - Right Bottom Corner */}
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