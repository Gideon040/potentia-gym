import React from 'react';
import Image from 'next/image';

const FoundedSection = () => {
  const cards = [
    {
      image: '/left-image-about-us.png',
      icon: '/grafiek.png',
      title: 'Proven Guidance',
      description: 'Our methods have been proven time and again, resulting in over 300 successful transformations.',
      topOffset: '0px'
    },
    {
      image: '/middle-image-about-us.png',
      icon: '/hoofd.png',
      title: 'Training with Pleasure',
      description: 'Different and varied lessons every week, with energetic trainers, we ensure real results.',
      topOffset: '-100px'
    },
    {
      image: '/right-image-about-us.png',
      icon: '/dumbells.png',
      title: 'Personal Attention',
      description: 'You train in a small group, so we really pay attention to you. There\'s always time for a chat.',
      topOffset: '-200px'
    }
  ];

  return (
    <section className="relative w-full bg-[#001427] py-12 lg:py-32">
      <div className="max-w-[1440px] mx-auto px-5 lg:px-16">
        
        {/* ===== MOBILE TEXT ===== */}
        <div className="block lg:hidden mb-8">
          
          {/* "OVER ONS" Label */}
          <p 
            className="text-gym-gold uppercase mb-4"
            style={{
              fontFamily: 'Syne',
              fontWeight: 400,
              fontSize: '13px',
              lineHeight: '100%',
              letterSpacing: '0.5em'
            }}
          >
            Over ons
          </p>

          {/* Main Heading */}
          <h2 
            className="text-white mb-5"
            style={{
              fontFamily: 'Syne',
              fontWeight: 700,
              fontSize: '28px',
              lineHeight: '34px'
            }}
          >
            Founded out of love of sports
          </h2>

          {/* Body Text - Full Width op mobile */}
          <p 
            className="text-white"
            style={{
              fontFamily: 'Inter',
              fontWeight: 400,
              fontSize: '15px',
              lineHeight: '24px'
            }}
          >
            Two young guys with one goal in mind: to offer the highest quality of every service we offer. Why? Because for every unique goal, there should be a unique trainer available. Not one-size-fits-all, but truly personalized. We don't want to create a crowded "gym," but a second home for your health.
          </p>
        </div>

        {/* ===== DESKTOP TEXT: DRIEHOEK EFFECT ===== */}
        <div className="hidden lg:block mb-14">
          
          {/* "OVER ONS" Label */}
          <p 
            className="text-gym-gold uppercase mb-6"
            style={{
              fontFamily: 'Syne',
              fontWeight: 400,
              fontSize: '16px',
              lineHeight: '100%',
              letterSpacing: '0.5em'
            }}
          >
            Over ons
          </p>

          {/* Main Heading */}
          <h2 
            className="text-white mb-8"
            style={{
              fontFamily: 'Syne',
              fontWeight: 700,
              fontSize: '41px',
              lineHeight: '100%'
            }}
          >
            Founded out of love of sports
          </h2>

          {/* Body Text - 6 zinnen driehoek effect */}
          <div
            style={{
              fontFamily: 'Aeonik TRIAL, Inter, sans-serif',
              fontWeight: 400,
              fontSize: '18px',
              lineHeight: '35px'
            }}
          >
            {/* Zin 1 - Breedste */}
            <p className="text-white" style={{ maxWidth: '850px' }}>
              Two young guys with one goal in mind: to offer the highest quality of every service we offer.
            </p>
            {/* Zin 2 */}
            <p className="text-white" style={{ maxWidth: '750px' }}>
              Why? Because for every unique goal, there should be a unique trainer available.
            </p>
            {/* Zin 3 */}
            <p className="text-white" style={{ maxWidth: '650px' }}>
              Not one-size-fits-all, but truly personalized.
            </p>
            {/* Zin 4 */}
            <p className="text-white" style={{ maxWidth: '500px' }}>
              We don't want to create a crowded
            </p>
            {/* Zin 5 */}
            <p className="text-white" style={{ maxWidth: '350px' }}>
              "gym," but a second home
            </p>
            {/* Zin 6 - Smalste */}
            <p className="text-white" style={{ maxWidth: '200px' }}>
              for your health.
            </p>
          </div>
        </div>

        {/* ===== MOBILE CARDS ===== */}
        <div className="block lg:hidden space-y-6">
          {cards.map((card, index) => (
            <div 
              key={index}
              className="relative overflow-hidden rounded-[24px] mx-auto"
              style={{
                width: '370px',
                height: '450px'
              }}
            >
              {/* Background Image */}
              <div className="absolute inset-0">
                <Image
                  src={card.image}
                  alt={card.title}
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

              {/* Content */}
              <div className="relative z-10 h-full flex flex-col justify-end p-6">
                
                {/* Icon with white circle background */}
                <div 
                  className="w-[50px] h-[50px] rounded-full bg-white flex items-center justify-center mb-3"
                >
                  <Image
                    src={card.icon}
                    alt=""
                    width={25}
                    height={25}
                    className="object-contain"
                  />
                </div>

                {/* Title */}
                <h3 
                  className="text-white uppercase mb-2"
                  style={{
                    fontFamily: 'Syne',
                    fontWeight: 400,
                    fontSize: '20px',
                    lineHeight: '28px'
                  }}
                >
                  {card.title}
                </h3>

                {/* Description */}
                <p 
                  className="text-[#D2D2D2]"
                  style={{
                    fontFamily: 'Inter',
                    fontWeight: 400,
                    fontSize: '13px',
                    lineHeight: '20px'
                  }}
                >
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* ===== DESKTOP CARDS: MET TRAP EFFECT ===== */}
        <div className="hidden lg:flex gap-6 items-start">
          {cards.map((card, index) => (
            <div 
              key={index}
              className="relative overflow-hidden rounded-[24px] flex-1"
              style={{
                minWidth: '350px',
                maxWidth: '385px',
                height: '550px',
                marginTop: card.topOffset
              }}
            >
              {/* Background Image */}
              <div className="absolute inset-0">
                <Image
                  src={card.image}
                  alt={card.title}
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

              {/* Content */}
              <div className="relative z-10 h-full flex flex-col justify-end p-6">
                
                {/* Icon with white circle background */}
                <div 
                  className="w-[60px] h-[60px] rounded-full bg-white flex items-center justify-center mb-4"
                >
                  <Image
                    src={card.icon}
                    alt=""
                    width={30}
                    height={30}
                    className="object-contain"
                  />
                </div>

                {/* Title */}
                <h3 
                  className="text-white uppercase mb-3"
                  style={{
                    fontFamily: 'Syne',
                    fontWeight: 400,
                    fontSize: '22px',
                    lineHeight: '42px'
                  }}
                >
                  {card.title}
                </h3>

                {/* Description */}
                <p 
                  className="text-[#D2D2D2]"
                  style={{
                    fontFamily: 'Aeonik TRIAL, Inter, sans-serif',
                    fontWeight: 400,
                    fontSize: '14px',
                    lineHeight: '21px'
                  }}
                >
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default FoundedSection;