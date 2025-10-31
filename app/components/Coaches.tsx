'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Coaches = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const coaches = [
    {
      name: 'Bob Demarteau',
      role: 'Oprichter & Coach',
      image: '/bob demarteau.png',
      description: 'Bob is een personal trainer en lifestyle coach die bekend staat om zijn unieke en onderbouwde aanpak. Met een achtergrond in de diëtetiek en jaren lange trainingservaring, heeft hij nu honderden mensen geholpen met het verbeteren van hun gezondheid, en een sterk en fit lichaam gecreëerd.'
    },
    {
      name: 'Bram Kuppens',
      role: 'Oprichter & Coach',
      image: '/bram kuppens.png',
      description: 'Met een grote passie voor training en gezondheid, werkt Bram al jaren voor het verbeteren van de gezondheid van de klanten. Gespecialiseerd in het aanlever van de juiste mindset en het fitter energieker maken van je lichaam.'
    },
    {
      name: 'Frans Vossen',
      role: 'Coach',
      image: '/frans vossen.jpg',
      description: 'Een echte no-nonsense coach. Frans helpt je graag met het opbouwen van spiermassa, fitter worden en het aanleren van de juiste mindset. Door de vele studies en cursussen beschrijven zijn klanten hem als krachtig, onderbouwend, expert en meedenkend.'
    },
    {
      name: 'Aurora van Gennip',
      role: 'Coach',
      image: '/aurora van gennip.png',
      description: 'Aurora onderscheidt zich met een unieke aanpak in krachttraining voor vrouwen. Met haar deskundigheid in fitness en haar toewijding, biedt Aurora coaching op maat gemaakt om kracht te bevorderen en doelen te behalen.'
    },
    {
      name: 'Nena van Veldhoven',
      role: 'Coach',
      image: '/nena (2).png',
      description: 'Gecertificeerd diëtist & personal trainster. Gevarieerd van groepslessen tot personal training en begeleiding met voeding. Nena staat bekend om haar motiverende trainingen.'
    },
    {
      name: 'Anita van Ettinger',
      role: 'Coach',
      image: '/anita van ettinger.png',
      description: 'Kracht, groei, gevoel, eerlijkheid en verbinding. Deze woorden beschrijven Anita op haar best. Met haar jaren lange ervaring in de sport heeft ze haar stempel gedrukt in Cranendonck.'
    },
    {
      name: 'Jordy Ronken',
      role: 'Coach',
      image: '/jordy.png',
      description: 'Een enthousiaste boksinstructeur met een passie voor de sport. Jordy begeleidt zowel beginners als gevorderde boksers, waarbij hij de nadruk legt op techniek, conditie en zelfvertrouwen.'
    },
    {
      name: 'Evianne Beeren',
      role: 'Coach',
      image: '/evianne.png',
      description: 'Evianne gelooft dat een gezond lichaam de basis vormt voor een gelukkig leven. Haar dynamische workouts zijn ontworpen om niet alleen fysieke kracht op te bouwen, maar ook zelfvertrouwen te vergroten.'
    },
    {
      name: 'Joanie de Laat',
      role: 'Coach',
      image: '/joanie.png',
      description: 'Of je nu op zoek bent naar strakkere billen, slankere benen of een sterke core, Joanie begeleid je naar je doel. Met haar positieve energie en motiverende aanpak maakt ze van elke training een uitdaging.'
    }
  ];

  // Minimum swipe distance
  const minSwipeDistance = 50;

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

  // Touch handlers for mobile swipe
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
      handleNext();
    }
    
    if (isRightSwipe) {
      handlePrev();
    }
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
              Onze Coaches
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
            Bekijk coaches
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
        <div 
          className="px-6"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >

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