import React from 'react';
import Image from 'next/image';
import PrimaryButton from './PrimaryButton';

const CTABanner = () => {
  return (
    <section className="relative w-full bg-white py-12 lg:py-32">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-16">
        
        {/* Rounded Banner with Gradient Border */}
        <div 
          className="relative overflow-hidden flex flex-col lg:flex-row items-center"
          style={{
            borderRadius: '40px',
            minHeight: '500px',
            border: '2px solid transparent',
            background: `
              radial-gradient(circle at 85% 50%, rgba(225, 172, 70, 0.3) 0%, #002444 60%) padding-box,
              linear-gradient(265.64deg, #E1AC46 37.95%, rgba(225, 172, 70, 0) 78.68%) border-box
            `
          }}
          // Desktop border radius override
          className="lg:!rounded-[80px] lg:!min-h-[450px]"
        >
          {/* Team Image - Background on mobile, Right side on desktop */}
          <div className="absolute inset-0 lg:right-0 lg:left-auto lg:top-0 lg:bottom-0 lg:w-2/3">
            <Image
              src="/full team.png"
              alt="Potentia Team"
              fill
              className="object-cover object-center lg:object-right"
              style={{ 
                borderRadius: '40px',
                opacity: 0.4 // Dimmed on mobile for text readability
              }}
              // Desktop: full opacity and different border radius
              className="lg:!opacity-100 lg:!rounded-r-[80px] lg:!rounded-l-none"
            />
            
            {/* Gradient Overlay - Mobile only for text readability */}
            <div 
              className="absolute inset-0 lg:hidden"
              style={{
                background: 'linear-gradient(180deg, rgba(0, 36, 68, 0.6) 0%, rgba(0, 36, 68, 0.9) 100%)'
              }}
            />

            {/* Potentia Logo Overlay - Desktop Only */}
            <div className="hidden lg:block absolute bottom-8 right-8">
              <div className="relative" style={{ width: '200px', height: '100px' }}>
                <Image
                  src="/potentia logo wit.png"
                  alt="Potentia"
                  fill
                  className="object-contain"
                />
              </div>
            </div>

            {/* Arrow Icon - Desktop Only */}
            <div className="hidden lg:block absolute bottom-6 right-52">
              <Image
                src="/arrow-up.svg"
                alt=""
                width={150}
                height={150}
                className="opacity-80"
              />
            </div>
          </div>

          {/* Content - Centered on mobile, Left side on desktop */}
          <div className="relative z-10 px-6 sm:px-8 lg:px-20 py-12 lg:py-16 w-full lg:max-w-xl text-center lg:text-left">
            {/* Small Title */}
            <p 
              className="text-gym-gold text-xs sm:text-sm tracking-[0.3em] uppercase mb-4 lg:mb-6"
              style={{ fontFamily: 'Inter', fontWeight: 400 }}
            >
              Unleash your potential
            </p>

            {/* Main Heading */}
            <h2 
              className="text-white mb-6 lg:mb-8 text-3xl sm:text-4xl lg:text-[48px] leading-tight lg:leading-[56px]"
              style={{
                fontFamily: 'Syne',
                fontWeight: 700,
              }}
            >
              Join Potentia gym to discover the strength within you!
            </h2>

            {/* CTA Button */}
            <div className="flex justify-center lg:justify-start">
              <PrimaryButton variant="solid">
                Get Started
              </PrimaryButton>
            </div>
          </div>

          {/* Mobile Logo - Bottom Center */}
          <div className="lg:hidden absolute bottom-6 left-1/2 transform -translate-x-1/2">
            <div className="relative" style={{ width: '150px', height: '75px' }}>
              <Image
                src="/potentia logo wit.png"
                alt="Potentia"
                fill
                className="object-contain"
              />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default CTABanner;