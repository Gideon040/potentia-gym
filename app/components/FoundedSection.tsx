import React from 'react';
import Image from 'next/image';

const FoundedSection = () => {
  const cards = [
    {
      image: '/left-image-about-us.png',
      icon: '/grafiek.png',
      title: 'Proven Guidance',
      description: 'Our methods have been proven time and again, resulting in over 300 successful transformations.',
      topOffset: '0px'  // Laagste (links)
    },
    {
      image: '/middle-image-about-us.png',
      icon: '/hoofd.png',
      title: 'Training with Pleasure',
      description: 'Different and varied lessons every week, with energetic trainers, we ensure real results.',
      topOffset: '-100px'  // Midden
    },
    {
      image: '/right-image-about-us.png',
      icon: '/dumbells.png',
      title: 'Personal Attention',
      description: 'You train in a small group, so we really pay attention to you. There\'s always time for a chat.',
      topOffset: '-200px'  // Hoogste (rechts)
    }
  ];

  return (
    <section className="relative w-full bg-[#001427] py-20 lg:py-32">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-16">
        
        {/* Text Content - Driehoek vorm */}
        <div className="mb-10 lg:mb-14">
          
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

        {/* 3 Cards - Met trap effect */}
        <div className="flex flex-col sm:flex-row lg:flex-row gap-5 lg:gap-6 items-start">

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
