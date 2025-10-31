import React from 'react';
import Image from 'next/image';

const PersonalTrainingCards = () => {
  const cards = [
    {
      image: '/left-image-about-us.png',
      icon: '/grafiek.png',
      title: 'Bewezen begeleiding',
      description: 'Onze methoden is keer op keer bewezen. Resulteert in 300+ succesvolle transformaties'
    },
    {
      image: '/middle-image-about-us.png',
      icon: '/hoofd.png',
      title: 'Leading by Example',
      description: 'Jouw doelen zijn uniek. Daarom zorgen wij voor een coach die hier perfect op aansluit'
    },
    {
      image: '/right-image-about-us.png',
      icon: '/dumbells.png',
      title: 'Waarde voor Kwaliteit',
      description: 'Wij hechten waarde aan kwaliteit. Dit onderbouwen wij met onze coaches en apparatuur'
    }
  ];

  return (
    <section className="relative w-full bg-[#001427] py-12 lg:py-32">
      <div className="max-w-[1440px] mx-auto px-5 lg:px-16">
        
        {/* ===== MOBILE LAYOUT ===== */}
        <div className="block lg:hidden space-y-6">
          {cards.map((card, index) => (
            <div 
              key={index}
              className="relative overflow-hidden rounded-[24px] mx-auto"
              style={{
                width: 'calc(100vw - 40px)',
                maxWidth: '350px',
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

        {/* ===== DESKTOP LAYOUT ===== */}
        <div className="hidden lg:flex gap-6 items-stretch justify-center">
          {cards.map((card, index) => (
            <div 
              key={index}
              className="relative overflow-hidden rounded-[24px] flex-1"
              style={{
                minWidth: '300px',
                maxWidth: '385px',
                height: '550px'
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

export default PersonalTrainingCards;