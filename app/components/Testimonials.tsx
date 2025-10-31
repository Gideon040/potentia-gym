'use client';

import React, { useState } from 'react';
import Image from 'next/image';

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const testimonials = [
    {
      category: 'Small Group Training',
      text: 'Tijd terug een perosnal training traject aangegaan, en geen moment spijt gehad! Vanuit een intake mijn doelen besproken, en ze allemaal behaald. Fijne begeleiding, voeding en training op maat en trainers met kwaliteit!',
      name: 'Raymond',
      location: 'Maarheeze',
      image: '/raymond.jpg',
      featured: false
    },
    {
      category: 'Personal Training',
      text: 'Vanuit een fijn intake gesprek hebben we samen onze doelen besproken. Na lange tijd stil te hebben gestaan bij mijn vorige PT er heb ik eindelijk weer flinke stappen gemaakt. Ik ervaar weer veel zelfvertrouwen en ben klaar voor de volgende stap .',
      name: 'Spike',
      location: 'Heeze',
      image: '/spike.jpg',
      featured: true
    },
    {
      category: 'Crossmax',
      text: 'Ik ben begonnen bij Potentia voor mijn afvalproces. Ik had een stok achter de deur nodig en iemand die mij in een positieve zin wilde helpen met afvallen. Ik heb met Potentia al veel resultaat kunnen behalen binnen 2 maanden!',
      name: 'Karin',
      location: 'Eindhovenon',
      image: '/karin.png',
      featured: false
    },
    {
      category: 'Crossmax',
      text: 'In het leven draait veel wat we doen om de juiste mindset. Sinds ik bij Potentia train voel me fitter, energieker en sterker in mijn hoofd en lichaam!',
      name: 'Steve',
      location: 'Maarheeze',
      image: '/steve.jpg',
      featured: false
    }
  ];

  // Minimum swipe distance (in px)
  const minSwipeDistance = 50;

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(0);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }
    
    if (isRightSwipe) {
      setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
    }
  };

  return (
    <section className="relative w-full bg-white py-20 lg:py-32">
      {/* Header - Centered */}
      <div className="max-w-[1440px] mx-auto px-6 lg:px-16 mb-12">
        <div className="max-w-[687px] mx-auto text-center">
          <h2 className="text-[#1A2E47]">
            Meer weten?<br />
            Lees wat onze leden zeggen.
          </h2>
        </div>
      </div>

      {/* Testimonials - Desktop: all visible, Mobile: swipable */}
      <div className="relative">
        <div 
          className="overflow-hidden"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div className="max-w-[1440px] mx-auto px-6 lg:px-16">
            <div 
              className="flex gap-6 lg:gap-8 transition-transform duration-700 ease-out lg:transform-none"
              style={{
                transform: `translateX(-${activeIndex * 100}%)`,
              }}
            >
              
              {testimonials.map((testimonial, index) => (
                <div 
                  key={index}
                  className="relative flex-shrink-0 rounded-[45px] overflow-hidden w-full lg:w-auto"
                  style={{ 
                    width: testimonial.featured ? '580px' : '380px',
                    minWidth: 'calc(100vw - 48px)',
                    maxWidth: testimonial.featured ? '580px' : '380px',
                    height: '400px',
                    background: '#F7F7F7',
                    padding: testimonial.featured ? '44px' : '36px'
                  }}
                >
                  {/* Gradient overlay for featured card */}
                  {testimonial.featured && (
                    <div 
                      className="absolute inset-0 pointer-events-none"
                      style={{
                        background: 'radial-gradient(45% 70% at 85% 20%, rgba(225, 172, 70, 0.35) 0%, rgba(247, 247, 247, 0.1) 100%)'
                      }}
                    />
                  )}

                  {/* Quote mark */}
                  <div 
                    className="absolute flex items-center justify-center text-[#002444]"
                    style={{ 
                      fontFamily: 'Georgia, serif',
                      fontSize: '70px',
                      lineHeight: '32px',
                      width: '75px',
                      height: '38px',
                      top: testimonial.featured ? '36px' : '28px',
                      right: testimonial.featured ? '36px' : '28px',
                      fontWeight: 'bold'
                    }}
                  >
                    "
                  </div>

                  {/* Content */}
                  <div className="relative z-10 h-full flex flex-col">
                    {/* Category */}
                    <p 
                      className="text-[#96999E] text-[14px] leading-[42px] tracking-[0.15em] uppercase mb-2"
                      style={{ fontFamily: 'Inter' }}
                    >
                      {testimonial.category}
                    </p>

                    {/* Testimonial Text */}
                    <p 
                      className="text-gym-navy mb-auto pr-6"
                      style={{ 
                        fontFamily: 'Syne',
                        fontWeight: 600,
                        fontSize: testimonial.featured ? '20px' : '17px',
                        lineHeight: testimonial.featured ? '28px' : '25px'
                      }}
                    >
                      {testimonial.text}
                    </p>

                    {/* Author - Bottom */}
                    <div className="flex items-center gap-4 mt-6">
                      {/* Profile Image */}
                      <div className="relative w-[56px] h-[56px] rounded-full overflow-hidden bg-gym-navy flex-shrink-0">
                        <Image
                          src={testimonial.image}
                          alt={testimonial.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      
                      {/* Name & Location */}
                      <div>
                        <p 
                          className="text-black text-[14px] font-bold leading-tight"
                          style={{ fontFamily: 'Syne' }}
                        >
                          {testimonial.name}
                        </p>
                        <p 
                          className="text-[#96999E] text-[12px] leading-tight uppercase tracking-wider mt-1"
                          style={{ fontFamily: 'Inter' }}
                        >
                          {testimonial.location}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}

            </div>
          </div>
        </div>

        {/* Mobile Dots Indicator */}
        <div className="lg:hidden flex justify-center gap-2 mt-6">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === activeIndex ? 'bg-gym-gold w-6' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;