'use client';

import React, { useState } from 'react';
import Image from 'next/image';

const CoachesSection = () => {
  const [hoveredCoach, setHoveredCoach] = useState<number | null>(null);

  const coaches = [
    {
      name: 'Bob Demarteau',
      role: 'FOUNDER AND COACH',
      image: '/bob demarteau.png',
      description: 'A true, no-nonsense coach. Bob is happy to help you build muscle mass, get fitter, and develop the right mindset. Thanks to his expertise and encouraging demeanor, he is a powerful, knowledgeable, expert, and outdoorsman.'
    },
    {
      name: 'Bram Kuppens',
      role: 'FOUNDER AND COACH',
      image: '/bob demarteau.png',
      description: 'A true, no-nonsense coach. Bram is happy to help you build muscle mass, get fitter, and develop the right mindset. Thanks to his expertise and encouraging demeanor, he is a powerful, knowledgeable, expert, and outdoorsman.'
    },
    {
      name: 'Frans Vossen',
      role: 'COACH',
      image: '/bob demarteau.png',
      description: 'A true, no-nonsense coach. Frans is happy to help you build muscle mass, get fitter, and develop the right mindset. Thanks to his expertise and encouraging demeanor, he is a powerful, knowledgeable, expert, and outdoorsman.'
    },
    {
      name: 'Aurora van Gennip',
      role: 'COACH',
      image: '/bob demarteau.png',
      description: 'A true, no-nonsense coach. Aurora is happy to help you build muscle mass, get fitter, and develop the right mindset. Thanks to her expertise and encouraging demeanor, she is a powerful, knowledgeable, expert, and outdoorsman.'
    },
    {
      name: 'Nena van Veldhoven',
      role: 'COACH',
      image: '/bob demarteau.png',
      description: 'A true, no-nonsense coach. Nena is happy to help you build muscle mass, get fitter, and develop the right mindset. Thanks to her expertise and encouraging demeanor, she is a powerful, knowledgeable, expert, and outdoorsman.'
    },
    {
      name: 'Anita van Ettinger',
      role: 'COACH',
      image: '/bob demarteau.png',
      description: 'A true, no-nonsense coach. Anita is happy to help you build muscle mass, get fitter, and develop the right mindset. Thanks to her expertise and encouraging demeanor, she is a powerful, knowledgeable, expert, and outdoorsman.'
    },
    {
      name: 'Jordy Ronken',
      role: 'COACH',
      image: '/bob demarteau.png',
      description: 'A true, no-nonsense coach. Jordy is happy to help you build muscle mass, get fitter, and develop the right mindset. Thanks to his expertise and encouraging demeanor, he is a powerful, knowledgeable, expert, and outdoorsman.'
    },
    {
      name: 'Evianne Beeren',
      role: 'COACH',
      image: '/bob demarteau.png',
      description: 'A true, no-nonsense coach. Evianne is happy to help you build muscle mass, get fitter, and develop the right mindset. Thanks to her expertise and encouraging demeanor, she is a powerful, knowledgeable, expert, and outdoorsman.'
    },
    {
      name: 'Joanie de Laat',
      role: 'COACH',
      image: '/bob demarteau.png',
      description: 'A true, no-nonsense coach. Joanie is happy to help you build muscle mass, get fitter, and develop the right mindset. Thanks to her expertise and encouraging demeanor, she is a powerful, knowledgeable, expert, and outdoorsman.'
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
          Our Coaches
        </h2>

        {/* Coaches Grid */}
        <div className="flex flex-col sm:flex-row lg:flex-row flex-wrap gap-5 lg:gap-6 items-start">
          {coaches.map((coach, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-[24px] cursor-pointer flex-1"
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
                
                {/* Title - Smooth move to left on hover */}
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

                {/* Role - Exact Figma specs with smooth margin transition */}
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

                {/* Description - Slide up from bottom and slide back down */}
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

export default CoachesSection;