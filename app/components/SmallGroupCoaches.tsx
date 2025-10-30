'use client';

import React, { useState } from 'react';
import Image from 'next/image';

const SmallGroupCoaches = () => {
  const [hoveredCoach, setHoveredCoach] = useState<number | null>(null);

  const coaches = [
    {
      name: 'Anita van Ettinger',
      role: 'COACH - BODYPUMP, HYROX, HIIT',
      image: '/anita van ettinger.png',
      description: 'Kracht, groei, gevoel, eerlijkheid en verbinding. Deze woorden beschrijven Anita op haar best. Met haar jarenlange ervaring in de sport heeft ze haar stempel gedrukt in Cranendonck.'
    },
    {
      name: 'Nena van Veldhoven',
      role: 'COACH - HIIT',
      image: '/nena (2).png',
      description: 'Gecertificeerd diëtist & personal trainer. Gevarieerd van groepslessen tot personal training en begeleiding met voeding. Nena staat bekend om haar motiverende trainingen.'
    },
    {
      name: 'Jordy Ronken',
      role: 'COACH - BOKSEN',
      image: '/jordy.png',
      description: 'Een enthousiaste boksinstructeur met een passie voor de sport. Jordy begeleidt zowel beginners als gevorderde boksers, waarbij hij de nadruk legt op techniek, conditie en zelfvertrouwen.'
    },
    {
      name: 'Joanie de Laat',
      role: 'COACH - BBB',
      image: '/joanie.png',
      description: 'Of je nu op zoek bent naar strakkere billen, slankere benen of een sterke core, Joanie begeleidt je naar je doel. Met haar positieve energie en motiverende aanpak maakt ze van elke training een uitdaging.'
    },
    {
      name: 'Bram Kuppens',
      role: 'COACH - HYROX',
      image: '/bram kuppens.png',
      description: 'Met een grote passie voor training en gezondheid, werkt Bram al jaren aan het verbeteren van de gezondheid van klanten. Gespecialiseerd in het aanleveren van de juiste mindset en het fitter en energieker maken van je lichaam.'
    },
    {
      name: 'Evianne Beeren',
      role: 'COACH - KRACHTTRAINING',
      image: '/evianne.png',
      description: 'Evianne gelooft dat een gezond lichaam de basis vormt voor een gelukkig leven. Haar dynamische workouts zijn ontworpen om niet alleen fysieke kracht op te bouwen, maar ook zelfvertrouwen te vergroten.'
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
          Je krijgt les van één van deze trainers
        </h2>

        {/* Coaches Grid */}
        <div className="flex flex-col sm:flex-row lg:flex-row flex-wrap gap-5 lg:gap-6 items-start justify-center">
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

              {/* Content */}
              <div 
                className={`relative z-10 h-full flex flex-col justify-end p-6 transition-all duration-500 ease-in-out ${
                  hoveredCoach === index ? 'items-start' : 'items-center text-center'
                }`}
              >
                
                {/* Title */}
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

                {/* Role */}
                <p 
                  className={`text-gym-gold uppercase transition-all duration-500 ease-in-out ${
                    hoveredCoach === index ? 'mb-4' : 'mb-0'
                  }`}
                  style={{
                    fontFamily: 'Aeonik TRIAL, Inter, sans-serif',
                    fontWeight: 400,
                    fontSize: '14px',
                    lineHeight: '28px',
                    letterSpacing: '0.15em'
                  }}
                >
                  {coach.role}
                </p>

                {/* Description */}
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

export default SmallGroupCoaches;