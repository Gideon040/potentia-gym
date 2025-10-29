import React from 'react';
import Image from 'next/image';

const PersonalAttention = () => {
  return (
    <section className="relative w-full overflow-hidden py-20 lg:py-32">
      {/* Background with gradients */}
      <div className="absolute inset-0 bg-[#002444]">
        {/* Gradient rechtsboven - prominent */}
        <div 
          className="absolute inset-0"
          style={{
            background: `radial-gradient(60% 100% at 95% 10%, rgba(225, 172, 70, 0.55) 0%, transparent 70%)`
          }}
        />
        {/* Gradient linksonder - subtiel, mobile friendly */}
        <div 
          className="absolute inset-0"
          style={{
            background: `radial-gradient(50% 80% at 5% 95%, rgba(225, 172, 70, 0.3) 0%, transparent 60%)`
          }}
        />
        {/* Mobile: gradient center bottom voor betere zichtbaarheid */}
        <div 
          className="absolute inset-0 lg:hidden"
          style={{
            background: `radial-gradient(80% 40% at 50% 100%, rgba(225, 172, 70, 0.2) 0%, transparent 60%)`
          }}
        />
      </div>

      <div className="relative z-10 max-w-[1440px] mx-auto px-6 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Side - Image */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative w-full max-w-[439px] h-[569px] rounded-[40px] overflow-hidden shadow-2xl">
              <Image
                src="/owners.png"
                alt="Potentia owners"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Right Side - Text & Signatures */}
          <div className="space-y-6 lg:max-w-[600px]">
            {/* Small heading */}
            <p 
              className="text-[16px] font-normal tracking-[0.5em] uppercase text-gym-gold"
              style={{ fontFamily: 'Syne' }}
            >
              More than just fitness
            </p>

            {/* Main heading */}
            <h2 className="text-white">
              Personal attention is our top priority.
            </h2>
            
            {/* Paragraph */}
            <p className="text-white/90">
              Potentia stands for unlocking your full potential. In our case, that means you can live a healthy, fit, 
              and confident life. Taking care of yourself is essential for achieving your full potential. This starts 
              with a balanced diet, sufficient exercise, and sleep. Potentia is a place where you can be completely 
              yourself and where you receive 100% attention. With various classes, such as small group training and 
              personal training, there's always a suitable training program for you to work on a healthy body.
            </p>

{/* Signatures - Altijd naast elkaar */}
<div className="flex gap-6 sm:gap-8 pt-4">
  <div className="relative w-[160px] sm:w-[240px] h-[100px] sm:h-[160px]">
    <Image
      src="/bram.png"
      alt="Bram signature"
      fill
      className="object-contain object-left"
    />
  </div>
  <div className="relative w-[160px] sm:w-[240px] h-[100px] sm:h-[160px]">
    <Image
      src="/bob.png"
      alt="Bob signature"
      fill
      className="object-contain object-left"
    />
  </div>
</div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default PersonalAttention;