'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const TrainingenGrid1op12 = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const trainingen = [
    {
      title: 'HIIT',
      shortTitle: 'HIIT',
      image: '/gym only.png',
      description: 'High-intensity interval training voor maximale calorieverbranding en verbetering van je conditie.',
      features: ['Maximale calorieverbranding', 'Verbeterde conditie', 'Korte intensieve workouts'],
      trainer: 'Anita & Nena',
      href: '/lesrooster'
    },
    {
      title: 'BODYPUMP',
      shortTitle: 'BODYPUMP',
      image: '/about-training-1.png',
      description: 'Les met gewichten gericht op kracht en uithoudingsvermogen voor een sterk en fit lichaam.',
      features: ['Verhoogde spierkracht', 'Vetverbranding', 'Verbeterde houding'],
      trainer: 'Anita',
      href: '/lesrooster'
    },
    {
      title: 'XCORE',
      shortTitle: 'XCORE',
      image: '/1 op 12 group.png',
      description: 'Intensieve core training voor een sterke romp en stabiele kern.',
      features: ['Sterke core', 'Betere balans', 'Blessurepreventie'],
      trainer: 'Diverse trainers',
      href: '/lesrooster'
    },
    {
      title: 'BOKSEN',
      shortTitle: 'BOKSEN',
      image: '/about-training-2.png',
      description: 'Bokstraining voor conditie, kracht en zelfvertrouwen met focus op techniek.',
      features: ['Verbeterde techniek', 'Kracht & conditie', 'Zelfvertrouwen'],
      trainer: 'Jordy',
      href: '/lesrooster'
    },
    {
      title: 'GRIT',
      shortTitle: 'GRIT',
      image: '/1 op 5 group.png',
      description: '30 minuten vol intensiteit voor snelle resultaten en maximale effectiviteit.',
      features: ['Snelle resultaten', 'Hoge intensiteit', 'Tijdbesparend'],
      trainer: 'Diverse trainers',
      href: '/lesrooster'
    },
    {
      title: 'HYROX',
      shortTitle: 'HYROX',
      image: '/full team.png',
      description: 'Functionele fitness race training die kracht en cardio combineert.',
      features: ['Functionele fitness', 'Race voorbereiding', 'Team spirit'],
      trainer: 'Anita & Bram',
      href: '/lesrooster'
    },
    {
      title: 'CROSSMAX',
      shortTitle: 'CROSSMAX',
      image: '/gym-background.png',
      description: 'Gevarieerde workout met kracht en cardio elementen voor totale body fitness.',
      features: ['Totale body workout', 'Gevarieerd', 'Kracht & cardio'],
      trainer: 'Diverse trainers',
      href: '/lesrooster'
    },
    {
      title: 'BBB',
      shortTitle: 'BBB',
      image: '/about-team-large.png',
      description: 'Booty Babes: gerichte training voor billen en benen met focus op resultaten.',
      features: ['Strakkere billen', 'Sterke benen', 'Zichtbare resultaten'],
      trainer: 'Joanie',
      href: '/lesrooster'
    },
    {
      title: 'YOGA',
      shortTitle: 'YOGA',
      image: '/intro video.png',
      description: 'Verbetering van flexibiliteit en mentale rust door ademhaling en meditatie.',
      features: ['Flexibiliteit', 'Mentale rust', 'Stress reductie'],
      trainer: 'Diverse trainers',
      href: '/lesrooster'
    },
    {
      title: 'KRACHT',
      shortTitle: 'KRACHT',
      image: '/section2.jpg',
      description: 'Krachttraining voor maximale spieropbouw en een sterker lichaam.',
      features: ['Spieropbouw', 'Verhoogde kracht', 'Verbeterd metabolisme'],
      trainer: 'Evianne',
      href: '/lesrooster'
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
          Onze Groepslessen
        </h2>

        {/* Trainingen Grid - Gevarieerde Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Row 1: Large + Medium (HIIT & Bodypump) */}
          <div className="lg:col-span-7">
            <TrainingCard 
              training={trainingen[0]}
              index={0}
              hoveredIndex={hoveredIndex}
              setHoveredIndex={setHoveredIndex}
            />
          </div>
          <div className="lg:col-span-5">
            <TrainingCard 
              training={trainingen[1]}
              index={1}
              hoveredIndex={hoveredIndex}
              setHoveredIndex={setHoveredIndex}
            />
          </div>

          {/* Row 2: 3 Small Cards (XCore, Boksen, GRIT) */}
          {trainingen.slice(2, 5).map((training, idx) => (
            <div key={idx + 2} className="lg:col-span-4">
              <TrainingCard 
                training={training}
                index={idx + 2}
                hoveredIndex={hoveredIndex}
                setHoveredIndex={setHoveredIndex}
              />
            </div>
          ))}

          {/* Row 3: Large + Medium (Hyrox & Crossmax) */}
          <div className="lg:col-span-7">
            <TrainingCard 
              training={trainingen[5]}
              index={5}
              hoveredIndex={hoveredIndex}
              setHoveredIndex={setHoveredIndex}
            />
          </div>
          <div className="lg:col-span-5">
            <TrainingCard 
              training={trainingen[6]}
              index={6}
              hoveredIndex={hoveredIndex}
              setHoveredIndex={setHoveredIndex}
            />
          </div>

          {/* Row 4: 3 Small Cards (BBB, Yoga, Kracht) */}
          {trainingen.slice(7, 10).map((training, idx) => (
            <div key={idx + 7} className="lg:col-span-4">
              <TrainingCard 
                training={training}
                index={idx + 7}
                hoveredIndex={hoveredIndex}
                setHoveredIndex={setHoveredIndex}
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

// Training Card Component met hover description
interface TrainingCardProps {
  training: {
    title: string;
    shortTitle: string;
    image: string;
    description: string;
    features: string[];
    trainer: string;
    href: string;
  };
  index: number;
  hoveredIndex: number | null;
  setHoveredIndex: (index: number | null) => void;
}

const TrainingCard: React.FC<TrainingCardProps> = ({ 
  training, 
  index, 
  hoveredIndex, 
  setHoveredIndex 
}) => {
  const isHovered = hoveredIndex === index;

  return (
    <Link 
      href={training.href}
      className="relative block overflow-hidden rounded-[25px] group cursor-pointer h-[469px]"
      onMouseEnter={() => setHoveredIndex(index)}
      onMouseLeave={() => setHoveredIndex(null)}
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={training.image}
          alt={training.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
      </div>

      {/* Gradient Overlay */}
      <div 
        className="absolute inset-0 transition-opacity duration-500"
        style={{
          background: isHovered 
            ? 'linear-gradient(0.12deg, rgba(0, 20, 39, 0.95) 0%, rgba(0, 20, 39, 0.3) 70%)' 
            : 'linear-gradient(0.12deg, rgba(0, 20, 39, 0.85) 8.82%, rgba(0, 20, 39, 0) 56.98%)'
        }}
      />

      {/* Arrow Icon - Top Right */}
      <div className="absolute top-6 right-6 w-8 h-8 opacity-80 group-hover:opacity-100 transition-opacity z-20">
        <Image
          src="/arrow-right-up.png"
          alt=""
          fill
          className="object-contain"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-end p-8">
        
        {/* Title */}
        <h3 
          className="text-white font-bold leading-tight mb-2 transition-all duration-500"
          style={{ 
            fontFamily: 'Syne',
            fontSize: isHovered ? '28px' : '26px'
          }}
        >
          {training.shortTitle}
        </h3>

        {/* Trainer - Always visible */}
        <p 
          className="text-gym-gold uppercase text-xs tracking-wider mb-3"
          style={{
            fontFamily: 'Aeonik TRIAL, Inter, sans-serif',
            letterSpacing: '0.15em'
          }}
        >
          {training.trainer}
        </p>

        {/* Description - Appears on hover */}
        <div 
          className={`overflow-hidden transition-all duration-500 ${
            isHovered 
              ? 'max-h-60 opacity-100 translate-y-0' 
              : 'max-h-0 opacity-0 translate-y-4'
          }`}
        >
          <p 
            className="text-[#D2D2D2] mb-4"
            style={{
              fontFamily: 'Aeonik TRIAL, Inter, sans-serif',
              fontWeight: 400,
              fontSize: '14px',
              lineHeight: '21px'
            }}
          >
            {training.description}
          </p>

          {/* Features List */}
          <ul className="space-y-2">
            {training.features.map((feature, idx) => (
              <li 
                key={idx}
                className="flex items-center gap-2 text-gym-gold"
                style={{
                  fontFamily: 'Aeonik TRIAL, Inter, sans-serif',
                  fontSize: '13px'
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
              fontSize: '14px',
              letterSpacing: '0.1em'
            }}
          >
            NAAR LESROOSTER
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </p>
        </div>

      </div>
    </Link>
  );
};

export default TrainingenGrid1op12;