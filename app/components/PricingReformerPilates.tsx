'use client';

import React from 'react';
import PrimaryButton from './PrimaryButton';

const PricingReformerPilates = () => {
  const regularPasses = [
    {
      title: '1x Credit',
      discount: null,
      originalPrice: null,
      price: '€30',
      pricePerLesson: '€30/les',
      description: 'Perfect om te proberen en kennis te maken met Reformer Pilates.'
    },
    {
      title: '5x Credit',
      discount: '9% korting per les',
      originalPrice: '€150',
      price: '€137.50',
      pricePerLesson: '€27.50/les',
      description: 'Ideaal voor regelmatige trainingen en zichtbare resultaten.'
    },
    {
      title: '10x Credit',
      discount: '17% korting per les',
      originalPrice: '€300',
      price: '€250',
      pricePerLesson: '€25/les',
      description: 'De beste deal voor toegewijde Pilates-liefhebbers.'
    }
  ];

  const privateLessons = [
    {
      title: '1:1 Privé Les',
      discount: null,
      price: '€75',
      pricePerLesson: 'Eenmalig',
      description: 'Één-op-één begeleiding, volledig afgestemd op jouw persoonlijke doelen en niveau.'
    },
    {
      title: '1:2 Privé Les',
      discount: '50% korting per persoon',
      originalPrice: '€150',
      price: '€112.50',
      pricePerLesson: 'Eenmalig',
      description: 'Train samen met een vriend(in) en profiteer van persoonlijke aandacht én korting.'
    }
  ];

  return (
    <section className="relative w-full bg-[#001427] py-20 lg:py-32">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-16">
        
        {/* Section 1: Reguliere Passen */}
        <div className="mb-16">
          <h2 
            className="text-white text-center mb-12"
            style={{
              fontFamily: 'Syne',
              fontWeight: 700,
              fontSize: '41px',
              lineHeight: '100%'
            }}
          >
            Reguliere passen
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {regularPasses.map((pass, index) => (
              <PricingCard key={index} {...pass} />
            ))}
          </div>
        </div>

        {/* Section 2: Privé Lessen */}
        <div>
          <h2 
            className="text-white text-center mb-12"
            style={{
              fontFamily: 'Syne',
              fontWeight: 700,
              fontSize: '41px',
              lineHeight: '100%'
            }}
          >
            Privé lessen
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-[900px] mx-auto">
            {privateLessons.map((lesson, index) => (
              <PricingCard key={index} {...lesson} />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

// Pricing Card Component
interface PricingCardProps {
  title: string;
  discount: string | null;
  originalPrice?: string | null;
  price: string;
  pricePerLesson: string;
  description: string;
}

const PricingCard: React.FC<PricingCardProps> = ({
  title,
  discount,
  originalPrice,
  price,
  pricePerLesson,
  description
}) => {
  return (
    <div 
      className="bg-white rounded-[24px] p-8 flex flex-col"
      style={{
        minHeight: '400px'
      }}
    >
      {/* Title */}
      <h3 
        className="text-gym-navy mb-3"
        style={{
          fontFamily: 'Syne',
          fontWeight: 700,
          fontSize: '28px',
          lineHeight: '100%'
        }}
      >
        {title}
      </h3>

      {/* Discount Label */}
      {discount && (
        <p 
          className="text-gym-gold mb-4"
          style={{
            fontFamily: 'Syne',
            fontWeight: 600,
            fontSize: '14px',
            lineHeight: '100%'
          }}
        >
          {discount}
        </p>
      )}

      {/* Price */}
      <div className="mb-6">
        {originalPrice && (
          <p 
            className="text-gray-400 line-through mb-1"
            style={{
              fontFamily: 'Syne',
              fontSize: '20px'
            }}
          >
            {originalPrice}
          </p>
        )}
        <p 
          className="text-gym-navy mb-1"
          style={{
            fontFamily: 'Syne',
            fontWeight: 700,
            fontSize: '48px',
            lineHeight: '100%'
          }}
        >
          {price}
        </p>
        <p 
          className="text-gym-navy/70"
          style={{
            fontFamily: 'Inter',
            fontSize: '16px'
          }}
        >
          {pricePerLesson}
        </p>
      </div>

      {/* Description */}
      <p 
        className="text-gym-navy/80 mb-8 flex-grow"
        style={{
          fontFamily: 'Inter',
          fontSize: '16px',
          lineHeight: '24px'
        }}
      >
        {description}
      </p>

      {/* Button */}
      <PrimaryButton 
        variant="solid"
        onClick={() => {}}
        className="w-full"
      >
        IK DOE MEE
      </PrimaryButton>
    </div>
  );
};

export default PricingReformerPilates;