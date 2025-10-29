import React from 'react';
import Image from 'next/image';
import PrimaryButton from './PrimaryButton';

const CTABanner = () => {
  return (
    <section className="relative w-full bg-white py-20 lg:py-32">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-16">
        
        {/* Rounded Banner with Gradient Border */}
        <div 
          className="relative overflow-hidden flex items-center"
          style={{
            borderRadius: '80px',
            minHeight: '450px',
            border: '2px solid transparent',
            background: `
              radial-gradient(circle at 85% 50%, rgba(225, 172, 70, 0.3) 0%, #002444 60%) padding-box,
              linear-gradient(265.64deg, #E1AC46 37.95%, rgba(225, 172, 70, 0) 78.68%) border-box
            `
          }}
        >
          {/* Team Image - Right Side */}
          <div className="absolute right-0 top-0 bottom-0 w-3/5 lg:w-2/3">
            <Image
              src="/full team.png"
              alt="Potentia Team"
              fill
              className="object-cover object-center"
              style={{ borderRadius: '0 80px 80px 0' }}
            />
            
            {/* Potentia Logo Overlay */}
            <div className="absolute bottom-8 right-8">
              <div className="relative" style={{ width: '200px', height: '100px' }}>
                <Image
                  src="/potentia logo wit.png"
                  alt="Potentia"
                  fill
                  className="object-contain"
                />
              </div>
            </div>

            {/* Arrow Icon */}
            <div className="absolute bottom-6 right-52">
              <Image
                src="/arrow-up.svg"
                alt=""
                width={150}
                height={150}
                className="opacity-80"
              />
            </div>
          </div>

          {/* Content - Left Side */}
          <div className="relative z-10 px-12 lg:px-20 py-16 max-w-xl">
            {/* Small Title */}
            <p 
              className="text-gym-gold text-sm tracking-[0.3em] uppercase mb-6"
              style={{ fontFamily: 'Inter', fontWeight: 400 }}
            >
              Unleash your potential
            </p>

            {/* Main Heading */}
            <h2 
              className="text-white mb-8"
              style={{
                fontFamily: 'Syne',
                fontWeight: 700,
                fontSize: '48px',
                lineHeight: '56px'
              }}
            >
              Join Potentia gym to discover the strength within you!
            </h2>

            {/* CTA Button */}
            <PrimaryButton variant="solid">
              Get Started
            </PrimaryButton>
          </div>

        </div>

      </div>
    </section>
  );
};

export default CTABanner;