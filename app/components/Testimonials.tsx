'use client';

import React, { useState } from 'react';
import Image from 'next/image';

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      category: 'Small Group Training',
      text: 'The coach is lorem ipsum dolor sit amet. This is fill in text. This will be replaced with proper text shortly.',
      name: 'Name Here',
      location: 'Location',
      image: '/bram kuppens.png',
      featured: false
    },
    {
      category: 'Personal Training',
      text: 'Great help! A team you can rely on. Excellent guidance, a personalized schedule, and top-notch service. I\'m feeling confident again and I\'m thrilled with it. I would recommend it to everyone.',
      name: 'Name Here',
      location: 'Location',
      image: '/bram kuppens.png',
      featured: true
    },
    {
      category: 'Crossmax',
      text: 'Frans is a great friend and coach! He listens attentively to your needs and carefully considers what best suits your goals.',
      name: 'Romano',
      location: 'Location',
      image: '/bram kuppens.png',
      featured: false
    },
    {
      category: 'Boxing',
      text: 'The coach is lorem ipsum dolor sit amet. This is fill in text. This will be replaced with proper text shortly.',
      name: 'Name Here',
      location: 'Location',
      image: '/bram kuppens.png',
      featured: false
    }
  ];

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  return (
    <section className="relative w-full bg-white py-20 lg:py-32">
      {/* Header - Centered */}
      <div className="max-w-[1440px] mx-auto px-6 lg:px-16 mb-12">
        <div className="max-w-[687px] mx-auto text-center">
          <h2 className="text-[#1A2E47]">
            Curious to know more?<br />
            Read what our members say.
          </h2>
        </div>
      </div>

      {/* Testimonials - Desktop: all visible, Mobile: swipable */}
      <div className="relative">
        {/* Mobile Navigation Arrows */}
        <div className="lg:hidden flex justify-center gap-3 mb-6">
          <button
            onClick={handlePrev}
            className="flex items-center justify-center w-[40px] h-[37px] rounded border-2 border-black bg-gym-gold/35 transition-all hover:scale-110"
          >
            <span className="text-xl">←</span>
          </button>
          <button
            onClick={handleNext}
            className="flex items-center justify-center w-[40px] h-[37px] rounded border-2 border-black bg-gym-gold transition-all hover:scale-110"
          >
            <span className="text-xl">→</span>
          </button>
        </div>

        <div className="overflow-hidden">
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