'use client';

import React, { useState } from 'react';
import Image from 'next/image';

const GymOnlyCoaches = () => {
  const [hoveredCoach, setHoveredCoach] = useState<number | null>(null);

  const coaches = [
    {
      name: 'Bob Demarteau',
      role: 'FOUNDER AND COACH',
      image: '/bob demarteau.png',
      description: 'Bob is een personal trainer en lifestyle coach die bekend staat om zijn unieke en onderbouwde aanpak. Met een achtergrond in de diëtetiek en jaren lange trainingservaring, heeft hij nu honderden mensen geholpen met het verbeteren van hun gezondheid, en een sterk en fit lichaam gecreëerd.'
    },
    {
      name: 'Bram Kuppens',
      role: 'FOUNDER AND COACH',
      image: '/bram kuppens.png',
      description: 'Met een grote passie voor training en gezondheid, werkt Bram al jaren voor het verbeteren van de gezondheid van de klanten. Gespecialiseerd in het aanlever van de juiste mindset en het fitter energieker maken van je lichaam.'
    },
    {
      name: 'Frans Vossen',
      role: 'COACH',
      image: '/frans vossen.png',
      description: 'Een echte no-nonsense coach. Frans helpt je graag met het opbouwen van spiermassa, fitter worden en het aanleren van de juiste mindset. Door de vele studies en cursussen beschrijven zijn klanten hem als krachtig, onderbouwend, expert en meedenkend.'
    }
  ];

  return (
    <section className="relative w-full bg-[#001427] py-20 lg:py-32">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-16">
        
        {/* Heading */}
        <h2 
          className="text-white text-center mb-12 lg:mb-16"
          style={{
            fontFamily: 'Syne',
            fontWeight: 700,
            fontSize: '41px',
            lineHeight: '100%'
          }}
        >
          Onze coaches zijn altijd voor je beschikbaar
        </h2>

        {/* Coaches Grid - Centered with 3 cards */}
        <div className="flex flex-col sm:flex-row lg:flex-row flex-wrap gap-5 lg:gap-6 items-start justify-center">
          {coaches.map((coach, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-[24px] cursor-pointer flex-shrink-0"
              style={{
                minWidth: '350px',
                maxWidth: '385px',
                height: '550px'
              }}
              onMouseEnter={() => setHoveredCoach(index)}
              onMouseLeave={() => setHoveredCoach(null)}
            >
              {/* Background Image */}
              <div className="absolute inset-0">
                <Image
                  src={coach.image}
                  alt={coach.name}
                  fill
                  className="object-cover"
                />
                
                {/* Gradient Overlay */}
                <div 
                  className="absolute inset-0"
                  style={{
                    background: 'linear-gradient(0.12deg, rgba(0, 20, 39, 0.85) 8.82%, rgba(0, 20, 39, 0) 56.98%)'
                  }}
                />
              </div>

              {/* Content - Centered when not hovered, Left when hovered */}
              <div 
                className={`relative z-10 h-full flex flex-col justify-end p-6 transition-all duration-500 ease-in-out ${
                  hoveredCoach === index ? 'items-start' : 'items-center text-center'
                }`}
              >
                
                {/* Name */}
                <h3 
                  className="text-white uppercase mb-3 transition-all duration-500 ease-in-out"
                  style={{
                    fontFamily: 'Syne',
                    fontWeight: 700,
                    fontSize: '25px',
                    lineHeight: '42px'
                  }}
                >
                  {coach.name}
                </h3>

                {/* Role */}
                <p 
                  className={`text-gym-gold uppercase transition-all duration-500 ease-in-out ${
                    hoveredCoach === index ? 'mb-4' : 'mb-0'
                  }`}
                  style={{
                    fontFamily: 'Aeonik TRIAL, Inter, sans-serif',
                    fontWeight: 400,
                    fontSize: '16px',
                    lineHeight: '42px',
                    letterSpacing: '0.15em'
                  }}
                >
                  {coach.role}
                </p>

                {/* Description - Slide up from bottom */}
                <div 
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    hoveredCoach === index 
                      ? 'max-h-40 opacity-100 translate-y-0' 
                      : 'max-h-0 opacity-0 translate-y-8'
                  }`}
                >
                  <p 
                    className="text-[#D2D2D2]"
                    style={{
                      fontFamily: 'Aeonik TRIAL, Inter, sans-serif',
                      fontWeight: 400,
                      fontSize: '14px',
                      lineHeight: '21px',
                      maxWidth: '298px'
                    }}
                  >
                    {coach.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default GymOnlyCoaches;