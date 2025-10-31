import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const CTABanner = () => {
  return (
    <section className="relative w-full bg-white py-12 lg:py-32">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-16">
        
        {/* Desktop Banner */}
        <div className="hidden lg:block">
          <div 
            className="relative overflow-hidden rounded-[80px] min-h-[450px]"
            style={{
              border: '2px solid transparent',
              background: `
                radial-gradient(circle at 85% 50%, rgba(225, 172, 70, 0.15) 0%, #002444 60%) padding-box,
                linear-gradient(265.64deg, #E1AC46 37.95%, rgba(225, 172, 70, 0) 78.68%) border-box
              `
            }}
          >
            {/* Team Image */}
            <div className="absolute inset-0">
              <div className="relative w-full h-full">
                <Image
                  src="/full team.png"
                  alt="Potentia Team"
                  fill
                  className="object-cover object-center opacity-40"
                  style={{ borderRadius: '78px' }}
                />
              </div>
              
              {/* Potentia Logo - Bottom Right */}
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

              {/* Arrow Icon - Bottom Right */}
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

            {/* Content */}
            <div className="relative z-10 px-20 py-16 max-w-2xl">
              <p 
                className="text-gym-gold text-sm tracking-[0.3em] uppercase mb-6"
                style={{ fontFamily: 'Inter', fontWeight: 400 }}
              >
                Unleash your potential
              </p>

              <h2 
                className="text-white mb-8 text-[48px] leading-[56px]"
                style={{
                  fontFamily: 'Syne',
                  fontWeight: 700,
                }}
              >
                Join Potentia gym to discover the strength within you!
              </h2>

              <Link href="/contact">
                <button
                  className="px-8 py-4 rounded-full bg-gym-gold text-gym-navy font-bold text-xs tracking-[0.15em] uppercase transition-all hover:scale-105"
                  style={{
                    fontFamily: 'Syne',
                    height: '52px',
                    minWidth: '160px'
                  }}
                >
                  Get Started
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* Mobile Banner */}
        <div className="block lg:hidden">
          <div 
            className="relative overflow-hidden rounded-[40px]"
            style={{
              background: '#002444'
            }}
          >
            {/* Content Section - Top */}
            <div className="relative z-10 px-8 pt-12 pb-8 text-center">
              <p 
                className="text-gym-gold text-xs tracking-[0.3em] uppercase mb-6"
                style={{ fontFamily: 'Inter', fontWeight: 400 }}
              >
                Unleash your potential
              </p>

              <h2 
                className="text-white mb-8 text-2xl leading-tight"
                style={{
                  fontFamily: 'Syne',
                  fontWeight: 700,
                }}
              >
                Join Potentia gym to discover the strength within you!
              </h2>

              <Link href="/contact">
                <button
                  className="w-full max-w-[280px] px-8 py-4 rounded-full bg-gym-gold text-gym-navy font-bold text-xs tracking-[0.15em] uppercase transition-all active:scale-95"
                  style={{
                    fontFamily: 'Syne',
                    height: '46px'
                  }}
                >
                  Get Started
                </button>
              </Link>
            </div>

            {/* Team Image Section - Bottom */}
            <div className="relative w-full" style={{ height: '360px' }}>
              <Image
                src="/full team.png"
                alt="Potentia Team"
                fill
                className="object-cover"
                style={{ 
                  objectPosition: 'center bottom',
                  borderRadius: '0 0 40px 40px'
                }}
              />
              
              {/* Potentia Logo - Over Image */}
              <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
                <div className="relative" style={{ width: '150px', height: '75px' }}>
                  <Image
                    src="/potentia logo wit.png"
                    alt="Potentia"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>

              {/* Arrow Icon - Over Image */}
              <div className="absolute top-4 right-4">
                <Image
                  src="/arrow-up.svg"
                  alt=""
                  width={80}
                  height={80}
                  className="opacity-60"
                />
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default CTABanner;