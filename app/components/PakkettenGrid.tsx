'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const PakkettenGrid = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [touchedIndex, setTouchedIndex] = useState<number | null>(null);

  const pakketten = [
    {
      title: '1-op-1 Personal Training',
      shortTitle: 'PERSONAL\nTRAINING',
      image: '/personal duo.png',
      description: 'Met de personal training bij Potentia in Maarheeze heb jij de stok achter de deur die je nodig hebt om te sporten en te werken aan je gezondheid. Gezonder en fitter dan ooit met de persoonlijke aandacht die jij nodig hebt.',
      features: ['Persoonlijke begeleiding', 'Aangepast trainingsschema', 'Maximale resultaten'],
      link: '/personal-training',
      size: 'large'
    },
    {
      title: 'Group Training',
      shortTitle: 'GROUP\nTRAINING',
      image: '/1 op 12 group.png',
      description: 'Sport je niet graag alleen? En zoek je gelijkgestemden waarmee je kunt werken aan je gezondheid? Dan nodigen we je graag uit voor de small group trainingen bij Potentia.',
      features: ['Motiverende groep', 'Professionele begeleiding', 'Gezellige sfeer'],
      link: '/1-op-12-group',
      size: 'medium'
    },
    {
      title: '1-op-5 Personal Group',
      shortTitle: '1 OP 5\nGROUP',
      image: '/1 op 5 group.png',
      description: 'Sport je niet graag alleen? En zoek je gelijkgestemden waarmee je kunt werken aan je gezondheid? Dan nodigen we je graag uit voor de small group trainingen bij Potentia.',
      features: ['Klein groepsverband', 'Persoonlijke aandacht', 'Betaalbaar'],
      link: '/small-group-training',
      size: 'medium'
    },
    {
      title: 'Reformer Pilates',
      shortTitle: 'REFORMER\nPILATES',
      image: '/reformer pilates.png',
      description: 'Reformer pilates is de workout die tal van voordelen biedt voor zowel je fysieke als mentale welzijn. Centraal tijdens de lessen staat het bouwen van een sterke core en krachtige buikspieren.',
      features: ['Sterke core', 'Flexibiliteit', 'Blessurepreventie'],
      link: '/reformer-pilates',
      size: 'medium'
    },
    {
      title: 'Fitness Only',
      shortTitle: 'FITNESS\nONLY',
      image: '/gym only.png',
      description: 'Fitness 24/7 in de nieuwste sportschool in Maarheeze. Bij Potentia Gym train je met de beste apparaten en is er altijd een trainer voor je om je te helpen. Ervaar het zelf en vraag je gratis proefles aan.',
      features: ['24/7 toegang', 'Moderne apparatuur', 'Altijd hulp beschikbaar'],
      link: '/gym-only',
      size: 'large'
    }
  ];

  return (
    <section className="relative w-full bg-[#001427] py-12 lg:py-32">
      <div className="max-w-[1440px] mx-auto px-5 lg:px-16">
        
        {/* Section Header */}
        <div className="text-center mb-8 lg:mb-16">
          <p 
            className="text-gym-gold uppercase mb-3 lg:mb-4"
            style={{
              fontFamily: 'Syne',
              fontWeight: 400,
              fontSize: '14px',
              lineHeight: '100%',
              letterSpacing: '0.3em'
            }}
          >
            ONZE PAKKETTEN
          </p>
          <h2 
            className="text-white"
            style={{
              fontFamily: 'Syne',
              fontWeight: 700,
              fontSize: '28px',
              lineHeight: '34px'
            }}
          >
            Bij onze sportschool bieden we diverse trainingsmogelijkheden aan
          </h2>
        </div>

        {/* Mobile Layout - Single Column */}
        <div className="block lg:hidden space-y-6 mb-8">
          {pakketten.map((pakket, index) => (
            <PakketCard 
              key={index}
              pakket={pakket} 
              index={index}
              hoveredIndex={hoveredIndex}
              setHoveredIndex={setHoveredIndex}
              touchedIndex={touchedIndex}
              setTouchedIndex={setTouchedIndex}
            />
          ))}
        </div>

        {/* Desktop Layout - Grid */}
        <div className="hidden lg:grid lg:grid-cols-12 gap-6 mb-12">
          
          {/* First Row - 2 Cards */}
          <div className="lg:col-span-7">
            <PakketCard 
              pakket={pakketten[0]} 
              index={0}
              hoveredIndex={hoveredIndex}
              setHoveredIndex={setHoveredIndex}
              touchedIndex={touchedIndex}
              setTouchedIndex={setTouchedIndex}
            />
          </div>
          <div className="lg:col-span-5">
            <PakketCard 
              pakket={pakketten[1]} 
              index={1}
              hoveredIndex={hoveredIndex}
              setHoveredIndex={setHoveredIndex}
              touchedIndex={touchedIndex}
              setTouchedIndex={setTouchedIndex}
            />
          </div>

          {/* Second Row - 3 Cards */}
          {pakketten.slice(2).map((pakket, index) => (
            <div key={index + 2} className="lg:col-span-4">
              <PakketCard 
                pakket={pakket} 
                index={index + 2}
                hoveredIndex={hoveredIndex}
                setHoveredIndex={setHoveredIndex}
                touchedIndex={touchedIndex}
                setTouchedIndex={setTouchedIndex}
              />
            </div>
          ))}
        </div>

        {/* Bottom Info Section */}
        <div className="max-w-[800px] mx-auto text-center mt-12 lg:mt-16">
          <p 
            className="text-white/90 mb-8"
            style={{
              fontFamily: 'Inter',
              fontWeight: 400,
              fontSize: '15px',
              lineHeight: '24px'
            }}
          >
            Kies de training die bij jou past en bereik jouw fitnessdoelen! 
            Heb je vragen of wil je meer informatie? Neem vrijblijvend contact met ons op.
          </p>
        </div>

      </div>
    </section>
  );
};

// Individual Pakket Card Component
interface PakketCardProps {
  pakket: {
    title: string;
    shortTitle: string;
    image: string;
    description: string;
    features: string[];
    link: string;
    size: string;
  };
  index: number;
  hoveredIndex: number | null;
  setHoveredIndex: (index: number | null) => void;
  touchedIndex: number | null;
  setTouchedIndex: (index: number | null) => void;
}

const PakketCard: React.FC<PakketCardProps> = ({ 
  pakket, 
  index, 
  hoveredIndex, 
  setHoveredIndex,
  touchedIndex,
  setTouchedIndex
}) => {
  const isHovered = hoveredIndex === index;
  const isTouched = touchedIndex === index;
  const isActive = isHovered || isTouched;

  const handleTouch = (e: React.TouchEvent) => {
    e.preventDefault();
    setTouchedIndex(isTouched ? null : index);
  };

  const handleClick = (e: React.MouseEvent) => {
    // Op mobiel: eerste klik toont info, tweede klik gaat naar link
    if (window.innerWidth < 1024) {
      if (!isTouched) {
        e.preventDefault();
        setTouchedIndex(index);
      }
      // Als al touched, laat de link gewoon werken
    }
  };

  return (
    <Link 
      href={pakket.link}
      className="relative block overflow-hidden rounded-[25px] group cursor-pointer h-[400px] lg:h-[469px]"
      onMouseEnter={() => setHoveredIndex(index)}
      onMouseLeave={() => setHoveredIndex(null)}
      onTouchStart={handleTouch}
      onClick={handleClick}
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={pakket.image}
          alt={pakket.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
      </div>

      {/* Gradient Overlay */}
      <div 
        className="absolute inset-0 transition-opacity duration-500"
        style={{
          background: isActive 
            ? 'linear-gradient(0.12deg, rgba(0, 20, 39, 0.95) 0%, rgba(0, 20, 39, 0.3) 70%)' 
            : 'linear-gradient(0.12deg, rgba(0, 20, 39, 0.85) 8.82%, rgba(0, 20, 39, 0) 56.98%)'
        }}
      />

      {/* Arrow Icon - Top Right */}
      <div className="absolute top-4 right-4 lg:top-6 lg:right-6 w-6 h-6 lg:w-8 lg:h-8 opacity-80 group-hover:opacity-100 transition-opacity z-20">
        <Image
          src="/arrow-right-up.png"
          alt=""
          fill
          className="object-contain"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-end p-6 lg:p-8">
        
        {/* Title */}
        <h3 
          className="text-white font-bold leading-tight whitespace-pre-line mb-3 transition-all duration-500"
          style={{ 
            fontFamily: 'Syne',
            fontSize: isActive ? '26px' : '22px'
          }}
        >
          {pakket.shortTitle}
        </h3>

        {/* Description - Shows on hover (desktop) or touch (mobile) */}
        <div 
          className={`overflow-hidden transition-all duration-500 ${
            isActive 
              ? 'max-h-60 opacity-100 translate-y-0' 
              : 'max-h-0 opacity-0 translate-y-4'
          }`}
        >
          <p 
            className="text-[#D2D2D2] mb-4"
            style={{
              fontFamily: 'Inter',
              fontWeight: 400,
              fontSize: '13px',
              lineHeight: '20px'
            }}
          >
            {pakket.description}
          </p>

          {/* Features List */}
          <ul className="space-y-2">
            {pakket.features.map((feature, idx) => (
              <li 
                key={idx}
                className="flex items-center gap-2 text-gym-gold"
                style={{
                  fontFamily: 'Inter',
                  fontSize: '12px'
                }}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-gym-gold"></span>
                {feature}
              </li>
            ))}
          </ul>

          {/* CTA Text */}
          <p 
            className="text-gym-gold mt-4 flex items-center gap-2 font-bold"
            style={{
              fontFamily: 'Syne',
              fontSize: '13px',
              letterSpacing: '0.1em'
            }}
          >
            MEER INFORMATIE
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </p>
        </div>

      </div>
    </Link>
  );
};

export default PakkettenGrid;