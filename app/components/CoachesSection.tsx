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
      image: '/frans vossen.jpg',
      description: 'Een echte no-nonsense coach. Frans helpt je graag met het opbouwen van spiermassa, fitter worden en het aanleren van de juiste mindset. Door de vele studies en cursussen beschrijven zijn klanten hem als krachtig, onderbouwend, expert en meedenkend. '
    },
    {
      name: 'Aurora van Gennip',
      role: 'COACH',
      image: '/aurora van gennip.png',
      description: 'Aurora onderscheidt zich met een unieke aanpak in krachttraining voor vrouwen. Met haar deskundigheid in fitness en haar toewijding, biedt Aurora coaching op maat gemaakt om kracht te bevorderen en doelen te behalen.'
    },
    {
      name: 'Nena van Veldhoven',
      role: 'COACH',
      image: '/nena (2).png',
      description: 'Gecertificeerd diëtist & personal trainster. Gevarieerd van groepslessen tot personal training en begeleiding met voeding. Nena staat bekend om haar motiverende trainingen.'
    },
    {
      name: 'Anita van Ettinger',
      role: 'COACH',
      image: '/anita van ettinger.png',
      description: 'Kracht, groei, gevoel, eerlijkheid en verbinding. Deze woorden beschrijven Anita op haar best. Met haar jaren lange ervaring in de sport heeft ze haar stempel gedrukt in Cranendonck.'
    },
    {
      name: 'Jordy Ronken',
      role: 'COACH',
      image: '/jordy.png',
      description: 'Een enthousiaste boksinstructeur met een passie voor de sport. Jordy begeleidt zowel beginners als gevorderde boksers, waarbij hij de nadruk legt op techniek, conditie en zelfvertrouwen.'
    },
    {
      name: 'Evianne Beeren',
      role: 'COACH',
      image: '/evianne.png',
      description: 'Evianne gelooft dat een gezond lichaam de basis vormt voor een gelukkig leven. Haar dynamische workouts zijn ontworpen om niet alleen fysieke kracht op te bouwen, maar ook zelfvertrouwen te vergroten.'
    },
    {
      name: 'Joanie de Laat',
      role: 'COACH',
      image: '/joanie.png',
      description: 'Of je nu op zoek bent naar strakkere billen, slankere benen of een sterke core, Joanie begeleid je naar je doel. Met haar positieve energie en motiverende aanpak maakt ze van elke training een uitdaging.'
    }
  ];

  return (
    <section className="relative w-full bg-[#001427] py-12 lg:py-32">
      <div className="max-w-[1440px] mx-auto px-5 lg:px-16">
        
        {/* Heading - MOBILE */}
        <h2 
          className="block lg:hidden text-white text-center mb-8"
          style={{
            fontFamily: 'Syne',
            fontWeight: 700,
            fontSize: '28px',
            lineHeight: '34px'
          }}
        >
          Our Coaches
        </h2>

        {/* Heading - DESKTOP */}
        <h2 
          className="hidden lg:block text-white text-center mb-16"
          style={{
            fontFamily: 'Syne',
            fontWeight: 700,
            fontSize: '41px',
            lineHeight: '100%'
          }}
        >
          Our Coaches
        </h2>

        {/* ===== MOBILE LAYOUT ===== */}
        <div className="block lg:hidden space-y-6">
          {coaches.map((coach, index) => (
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
                  src={coach.image}
                  alt={coach.name}
                  fill
                  className="object-cover"
                />
                
                {/* Gradient Overlay */}
                <div 
                  className="absolute inset-0"
                  style={{
                    background: 'linear-gradient(0.12deg, rgba(0, 20, 39, 0.9) 0%, rgba(0, 20, 39, 0.3) 60%)'
                  }}
                />
              </div>

              {/* Content */}
              <div className="relative z-10 h-full flex flex-col justify-end p-6">
                
                {/* Name */}
                <h3 
                  className="text-white uppercase mb-2"
                  style={{
                    fontFamily: 'Syne',
                    fontWeight: 700,
                    fontSize: '22px',
                    lineHeight: '28px'
                  }}
                >
                  {coach.name}
                </h3>

                {/* Role */}
                <p 
                  className="text-gym-gold uppercase mb-3"
                  style={{
                    fontFamily: 'Inter',
                    fontWeight: 400,
                    fontSize: '13px',
                    lineHeight: '20px',
                    letterSpacing: '0.15em'
                  }}
                >
                  {coach.role}
                </p>

                {/* Description - Always visible on mobile */}
                <p 
                  className="text-[#D2D2D2]"
                  style={{
                    fontFamily: 'Inter',
                    fontWeight: 400,
                    fontSize: '13px',
                    lineHeight: '20px'
                  }}
                >
                  {coach.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* ===== DESKTOP LAYOUT: MET HOVER ===== */}
        <div className="hidden lg:flex flex-wrap gap-6 items-start">
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