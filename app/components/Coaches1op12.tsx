'use client';

import React, { useState } from 'react';
import Image from 'next/image';

const Coaches1op12 = () => {
  const [hoveredCoach, setHoveredCoach] = useState<number | null>(null);

  const coaches = [
    {
      name: 'Anita van Ettinger',
      role: 'COACH',
      specialisatie: 'Bodypump, Hyrox, HIIT',
      image: '/anita van ettinger.png',
      description: 'Kracht, groei, gevoel, eerlijkheid en verbinding. Deze woorden beschrijven Anita op haar best. Met haar jaren lange ervaring in de sport heeft ze haar stempel gedrukt in Cranendonck.'
    },
    {
      name: 'Nena van Veldhoven',
      role: 'COACH',
      specialisatie: 'HIIT, Reformer Pilates',
      image: '/nena (2).png',
      description: 'Gecertificeerd diëtist & personal trainster. Gevarieerd van groepslessen tot personal training en begeleiding met voeding. Nena staat bekend om haar motiverende trainingen.'
    },
    {
      name: 'Jordy Ronken',
      role: 'COACH',
      specialisatie: 'Boksen',
      image: '/jordy.png',
      description: 'Een enthousiaste boksinstructeur met een passie voor de sport. Jordy begeleidt zowel beginners als gevorderde boksers, waarbij hij de nadruk legt op techniek, conditie en zelfvertrouwen.'
    },
    {
      name: 'Joanie de Laat',
      role: 'COACH',
      specialisatie: 'BBB (Booty Babes)',
      image: '/joanie.png',
      description: 'Of je nu op zoek bent naar strakkere billen, slankere benen of een sterke core, Joanie begeleid je naar je doel. Met haar positieve energie en motiverende aanpak maakt ze van elke training een uitdaging.'
    },
    {
      name: 'Bram Kuppens',
      role: 'FOUNDER AND COACH',
      specialisatie: 'Hyrox',
      image: '/bram kuppens.png',
      description: 'Met een grote passie voor training en gezondheid, werkt Bram al jaren voor het verbeteren van de gezondheid van de klanten. Gespecialiseerd in het aanlever van de juiste mindset en het fitter energieker maken van je lichaam.'
    },
    {
      name: 'Evianne Beeren',
      role: 'COACH',
      specialisatie: 'Krachttraining',
      image: '/evianne.png',
      description: 'Evianne gelooft dat een gezond lichaam de basis vormt voor een gelukkig leven. Haar dynamische workouts zijn ontworpen om niet alleen fysieke kracht op te bouwen, maar ook zelfvertrouwen te vergroten.'
    }
  ];

  return (
    <section className="relative w-full bg-white py-20 lg:py-32">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-16">
        
        {/* Heading */}
        <h2 
          className="text-gym-navy text-center mb-12 lg:mb-16"
          style={{
            fontFamily: 'Syne',
            fontWeight: 700,
            fontSize: '41px',
            lineHeight: '100%'
          }}
        >
          Onze Groepsles Coaches
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

                {/* Specialisatie - Shows instead of role */}
                <p 
                  className={`text-gym-gold uppercase transition-all duration-500 ease-in-out ${
                    hoveredCoach === index ? 'mb-4' : 'mb-0'
                  }`}
                  style={{
                    fontFamily: 'Aeonik TRIAL, Inter, sans-serif',
                    fontWeight: 400,
                    fontSize: '14px',
                    lineHeight: '42px',
                    letterSpacing: '0.15em'
                  }}
                >
                  {coach.specialisatie}
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

export default Coaches1op12;