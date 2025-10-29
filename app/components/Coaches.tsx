'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Coaches = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const coaches = [
    {
      name: 'Bob Demarteau',
      role: 'Founder and Coach',
      image: '/bob demarteau.png',
      description: 'Bob is a personal trainer and lifestyle coach known for his unique and well-founded approach. With a background in nutrition and years of training experience, he has helped hundreds of people improve their health and create strong, fit bodies. His clients describe him as professional, dedicated, knowledgeable, and goal-oriented.'
    },
    {
      name: 'Bram Kuppens',
      role: 'Founder and Coach',
      image: '/bram kuppens.png',
      description: 'Bram is een gepassioneerde coach die zich inzet om cliënten te helpen hun fitnessdoelen te bereiken door middel van gepersonaliseerde trainingsprogramma\'s en voedingsadvies. Met jarenlange ervaring in de fitnessindustrie begrijpt hij de unieke uitdagingen waarmee zijn cliënten worden geconfronteerd.'
    },
    {
      name: 'Frans Vossen',
      role: 'Coach',
      image: '/bram kuppens.png',
      description: 'Frans brengt jarenlange coaching ervaring mee en een toewijding om cliënten te helpen hun volledige potentieel te bereiken door gestructureerde trainingsmethoden. Hij gelooft sterk in een holistische benadering van fitness en welzijn.'
    }
  ];

  const handleNext = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setActiveIndex((prev) => (prev + 1) % coaches.length);
    setTimeout(() => setIsTransitioning(false), 900);
  };

  const handlePrev = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setActiveIndex((prev) => (prev === 0 ? coaches.length - 1 : prev - 1));
    setTimeout(() => setIsTransitioning(false), 900);
  };

  // Get 3 visible coaches (desktop only)
  const getVisibleCoaches = () => {
    return [0, 1, 2].map(i => ({
      ...coaches[(activeIndex + i) % coaches.length],
      displayIndex: i
    }));
  };

  const visibleCoaches = getVisibleCoaches();

  return (
    <section className="relative w-full bg-white py-12 lg:py-32">
      {/* Header */}
      <div className="max-w-[1440px] mx-auto px-6 lg:px-16 mb-8 lg:mb-12">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 lg:gap-6">
          <div className="flex items-center gap-3 lg:gap-4">
            <h2 
              className="text-[#1A2E47] text-3xl lg:text-[41px]"
              style={{
                fontFamily: 'Syne',
                fontWeight: 700,
                lineHeight: '100%'
              }}
            >
              Our Coaches
            </h2>
            <Image 
              src="/wobbly-arrow.svg" 
              width={40} 
              height={40} 
              alt="" 
              className="flex-shrink-0 lg:w-[60px] lg:h-[60px]"
            />
          </div>
          
          <Link 
            href="/coaches"
            className="flex items-center justify-center px-6 lg:px-8 py-3 lg:py-0 rounded-[45px] border border-gym-gold text-gym-navy font-bold text-xs tracking-[0.15em] uppercase transition-all hover:bg-gym-gold hover:text-white w-full lg:w-[242px] lg:h-[46px]"
            style={{
              fontFamily: 'Syne'
            }}
          >
            View all coaches
          </Link>
        </div>
      </div>

      {/* Desktop: 3 cards carousel */}
      <div className="hidden lg:block relative overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-16">
          <div className="flex gap-8">
            
            {visibleCoaches.map((coach, index) => {
              const isActive = index === 0;
              
              return (
                <div 
                  key={`${coach.name}-${activeIndex}-${index}`}
                  className="relative flex-shrink-0 rounded-[25px] overflow-hidden cursor-pointer group"
                  style={{ 
                    width: isActive ? '850px' : '480px',
                    height: '620px',
                    transition: 'all 0.9s cubic-bezier(0.4, 0, 0.2, 1)'
                  }}
                  onClick={() => index === 1 && handleNext()}
                >
                  {/* Coach Image */}
                  <div className="absolute inset-0">
                    <Image
                      src={coach.image}
                      alt={coach.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>

                  {/* Gradient Overlay */}
                  <div 
                    className="absolute inset-0 transition-all duration-900"
                    style={{
                      background: isActive 
                        ? 'linear-gradient(87.43deg, rgba(0, 20, 39, 0.05) 32.84%, #001427 56.6%)'
                        : 'linear-gradient(0.12deg, rgba(0, 20, 39, 0.85) 8.82%, rgba(0, 20, 39, 0) 56.98%)'
                    }}
                  />

                  {/* Content - Only show for active */}
                  {isActive ? (
                    <div className="relative z-10 h-full flex flex-col justify-end items-end p-12">
                      <div className="max-w-[550px] space-y-3 text-right">
                        <h3 
                          className="text-white text-[32px] font-bold leading-[44px]"
                          style={{ fontFamily: 'Syne' }}
                        >
                          {coach.name}
                        </h3>
                        <p 
                          className="text-gym-gold text-[18px] leading-[42px] tracking-[0.15em] uppercase"
                          style={{ fontFamily: 'Inter' }}
                        >
                          {coach.role}
                        </p>
                        <p 
                          className="text-[#D2D2D2] text-[15px] leading-[26px] max-w-[400px]"
                          style={{ fontFamily: 'Inter' }}
                        >
                          {coach.description}
                        </p>
                      </div>

                      {/* Navigation Arrows */}
                      <div className="flex gap-3 mt-8">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            handlePrev();
                          }}
                          className="flex items-center justify-center w-[40px] h-[37px] rounded border-2 border-black transition-all hover:scale-110"
                          style={{ background: 'rgba(225, 172, 70, 0.35)' }}
                          disabled={isTransitioning}
                        >
                          <Image src="/arrow-left.svg" width={20} height={20} alt="Previous" />
                        </button>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            handleNext();
                          }}
                          className="flex items-center justify-center w-[40px] h-[37px] rounded border-2 border-black bg-gym-gold transition-all hover:scale-110"
                          disabled={isTransitioning}
                        >
                          <Image src="/arrow-right.svg" width={20} height={20} alt="Next" />
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div className="absolute bottom-10 left-10 z-10">
                      <h4 
                        className="text-white text-3xl font-bold"
                        style={{ fontFamily: 'Syne' }}
                      >
                        {coach.name}
                      </h4>
                      <p 
                        className="text-gym-gold text-base tracking-[0.15em] uppercase mt-2"
                        style={{ fontFamily: 'Inter' }}
                      >
                        {coach.role}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}

          </div>
        </div>
      </div>

      {/* Mobile: Single card with swipe */}
      <div className="lg:hidden relative">
        <div className="px-6">

          {/* Single Card */}
          <div 
            className="relative w-full rounded-[25px] overflow-hidden"
            style={{ 
              height: '500px',
              transition: 'all 0.5s ease'
            }}
          >
            {/* Coach Image */}
            <div className="absolute inset-0">
              <Image
                src={coaches[activeIndex].image}
                alt={coaches[activeIndex].name}
                fill
                className="object-cover"
              />
            </div>

            {/* Gradient Overlay */}
            <div 
              className="absolute inset-0"
              style={{
                background: 'linear-gradient(0deg, rgba(0, 20, 39, 0.9) 0%, rgba(0, 20, 39, 0.3) 50%, rgba(0, 20, 39, 0) 100%)'
              }}
            />

            {/* Content */}
            <div className="relative z-10 h-full flex flex-col justify-end p-6">
              <div className="space-y-2">
                <h3 
                  className="text-white text-2xl font-bold"
                  style={{ fontFamily: 'Syne' }}
                >
                  {coaches[activeIndex].name}
                </h3>
                <p 
                  className="text-gym-gold text-sm tracking-[0.15em] uppercase"
                  style={{ fontFamily: 'Inter' }}
                >
                  {coaches[activeIndex].role}
                </p>
                <p 
                  className="text-white text-sm leading-6 mt-3"
                  style={{ fontFamily: 'Inter' }}
                >
                  {coaches[activeIndex].description}
                </p>
              </div>
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-6">
            {coaches.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`transition-all ${
                  index === activeIndex 
                    ? 'bg-gym-gold w-8' 
                    : 'bg-gray-300 w-2'
                } h-2 rounded-full`}
              />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Coaches;