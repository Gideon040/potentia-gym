import React from 'react';
import Image from 'next/image';

const SmallGroupFeatures = () => {
  const features = [
    {
      image: '/left-image-about-us.png',
      icon: '/grafiek.png',
      title: 'Bewezen begeleiding',
      description: 'Onze methoden zijn keer op keer bewezen. Dit heeft geresulteerd in 300+ succesvolle transformaties.'
    },
    {
      image: '/middle-image-about-us.png',
      icon: '/hoofd.png',
      title: 'Meetbare resultaten',
      description: 'Niks is zo vervelend als geen resultaat zien. Wij zorgen ervoor dat we jouw resultaten in kaart brengen.'
    },
    {
      image: '/right-image-about-us.png',
      icon: '/dumbells.png',
      title: 'Levenslang rendement',
      description: 'Tijdens het traject zorgen we ervoor dat je de handvatten meekrijgt waardoor je het zelf ook kunt.'
    }
  ];

  return (
    <section className="relative w-full bg-[#001427] py-12 lg:py-32">
      <div className="max-w-[1440px] mx-auto px-5 lg:px-16">
        
        {/* ===== MOBILE LAYOUT ===== */}
        <div className="block lg:hidden space-y-6">
          {features.map((feature, index) => (
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
                  src={feature.image}
                  alt={feature.title}
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
                    src={feature.icon}
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
                  {feature.title}
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
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* ===== DESKTOP LAYOUT: EXACT ORIGINEEL ===== */}
        <div className="hidden lg:flex gap-6 items-start justify-center">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="relative overflow-hidden rounded-[24px] flex-1"
              style={{
                minWidth: '350px',
                maxWidth: '385px',
                height: '550px'
              }}
            >
              {/* Background Image */}
              <div className="absolute inset-0">
                <Image
                  src={feature.image}
                  alt={feature.title}
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
                    src={feature.icon}
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
                  {feature.title}
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
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default SmallGroupFeatures;