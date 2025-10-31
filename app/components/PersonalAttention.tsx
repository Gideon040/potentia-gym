import React from 'react';
import Image from 'next/image';

const PersonalAttention = () => {
  return (
    <section className="relative w-full overflow-hidden py-16 lg:py-32">
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
        
        {/* Mobile Layout: Stacked */}
        <div className="block lg:hidden">
          {/* Image - Top */}
          <div className="flex justify-center mb-8">
            <div className="relative w-full max-w-[370px] h-[400px] rounded-[24px] overflow-hidden shadow-2xl">
              <Image
                src="/owners.png"
                alt="Potentia eigenaren"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Content - Bottom */}
          <div className="mx-auto" style={{ width: '370px', maxWidth: '100%' }}>
            <div className="space-y-[22px]">
              {/* Label */}
              <p 
                className="text-gym-gold uppercase"
                style={{
                  fontFamily: 'Syne',
                  fontWeight: 400,
                  fontSize: '16px',
                  lineHeight: '100%',
                  letterSpacing: '0.5em'
                }}
              >
                Meer dan alleen fitness
              </p>

              {/* Heading */}
              <h2 
                className="text-white"
                style={{
                  fontFamily: 'Syne',
                  fontWeight: 700,
                  fontSize: '35px',
                  lineHeight: '100%',
                  letterSpacing: '0%',
                  width: '370px',
                  maxWidth: '100%'
                }}
              >
                Persoonlijke aandacht staat bij ons voorop.
              </h2>
              
              {/* Paragraph */}
              <p 
                className="text-white/90"
                style={{
                  fontFamily: 'Aeonik TRIAL, Inter, sans-serif',
                  fontWeight: 400,
                  fontSize: '18px',
                  lineHeight: '35px',
                  letterSpacing: '0%',
                  width: '341px',
                  maxWidth: '100%'
                }}
              >
                Potentia staat voor het ontsluiten van je volledige potentieel. In ons geval betekent dit dat je een gezond, fit en zelfverzekerd leven kunt leiden. Goed voor jezelf zorgen is essentieel om je volledige potentieel te bereiken. Dit begint met een evenwichtig dieet, voldoende beweging en slaap. Potentia is een plek waar je volledig jezelf kunt zijn en waar je 100% aandacht krijgt. Met verschillende lessen, zoals small group training en personal training, is er altijd een geschikt trainingsprogramma voor jou om aan een gezond lichaam te werken.
              </p>

              {/* Signatures - Side by side */}
              <div className="flex gap-4 pt-4">
                <div className="relative w-[160px] h-[100px]">
                  <Image
                    src="/bram.png"
                    alt="Bram handtekening"
                    fill
                    className="object-contain object-left"
                  />
                </div>
                <div className="relative w-[160px] h-[100px]">
                  <Image
                    src="/bob.png"
                    alt="Bob handtekening"
                    fill
                    className="object-contain object-left"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Desktop Layout: Side by Side */}
        <div className="hidden lg:grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Side - Image */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative w-full max-w-[439px] h-[569px] rounded-[40px] overflow-hidden shadow-2xl">
              <Image
                src="/owners.png"
                alt="Potentia eigenaren"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Right Side - Text & Signatures */}
          <div className="space-y-6 lg:max-w-[600px]">
            {/* Small heading */}
            <p 
              className="text-gym-gold uppercase"
              style={{ 
                fontFamily: 'Syne',
                fontWeight: 400,
                fontSize: '16px',
                lineHeight: '100%',
                letterSpacing: '0.5em'
              }}
            >
              Meer dan alleen fitness
            </p>

            {/* Main heading */}
            <h2 
              className="text-white"
              style={{
                fontFamily: 'Syne',
                fontWeight: 700,
                fontSize: '41px',
                lineHeight: '100%'
              }}
            >
              Persoonlijke aandacht staat bij ons voorop.
            </h2>
            
            {/* Paragraph */}
            <p 
              className="text-white/90"
              style={{
                fontFamily: 'Aeonik TRIAL, Inter, sans-serif',
                fontWeight: 400,
                fontSize: '18px',
                lineHeight: '35px'
              }}
            >
              Potentia staat voor het ontsluiten van je volledige potentieel. In ons geval betekent dit dat je een gezond, fit en zelfverzekerd leven kunt leiden. Goed voor jezelf zorgen is essentieel om je volledige potentieel te bereiken. Dit begint met een evenwichtig dieet, voldoende beweging en slaap. Potentia is een plek waar je volledig jezelf kunt zijn en waar je 100% aandacht krijgt. Met verschillende lessen, zoals small group training en personal training, is er altijd een geschikt trainingsprogramma voor jou om aan een gezond lichaam te werken.
            </p>

            {/* Signatures - Side by side */}
            <div className="flex gap-6 sm:gap-8 pt-4">
              <div className="relative w-[160px] sm:w-[240px] h-[100px] sm:h-[160px]">
                <Image
                  src="/bram.png"
                  alt="Bram handtekening"
                  fill
                  className="object-contain object-left"
                />
              </div>
              <div className="relative w-[160px] sm:w-[240px] h-[100px] sm:h-[160px]">
                <Image
                  src="/bob.png"
                  alt="Bob handtekening"
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