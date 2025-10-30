'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import PrimaryButton from './PrimaryButton';
import ProeflesPopup from './ProeflesPopup';

const GymOnlyBenefits = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const benefits = [
    'Dag en nacht onbeperkt toegang tot de gym',
    'Vrij sporten vanaf 40 euro p/m',
    'Een groot aanbod aan de nieuwste apparatuur',
    'Inclusief een training- en voedingsschema',
    'Maandelijks evalueren met een trainer'
  ];

  return (
    <>
      <section className="relative w-full bg-white py-20 lg:py-32">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Side - Image */}
            <div className="flex justify-center lg:justify-start">
              <div className="relative w-full max-w-[439px] h-[569px] rounded-[40px] overflow-hidden shadow-2xl">
                <Image
                  src="/gym only.png"
                  alt="Vrij trainen in de sportschool"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Right Side - Content */}
            <div className="space-y-6 lg:max-w-[600px]">
              <h2 
                className="text-gym-navy mb-8"
                style={{
                  fontFamily: 'Syne',
                  fontWeight: 700,
                  fontSize: '41px',
                  lineHeight: '100%'
                }}
              >
                Vrij trainen in de sportschool
              </h2>
              
              {/* Benefits List */}
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <Image 
                      src="/check-mark.svg" 
                      width={20} 
                      height={20} 
                      alt="" 
                      className="flex-shrink-0"
                    />
                    <p 
                      className="text-gym-navy/80"
                      style={{
                        fontFamily: 'Aeonik TRIAL, Inter, sans-serif',
                        fontWeight: 400,
                        fontSize: '18px',
                        lineHeight: '35px',
                        fontStyle: 'italic'
                      }}
                    >
                      {benefit}
                    </p>
                  </div>
                ))}
              </div>

              <div className="pt-2">
                <PrimaryButton 
                  variant="solid"
                  onClick={() => setIsPopupOpen(true)}
                >
                  GRATIS PROEFLES
                </PrimaryButton>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Proefles Popup */}
      <ProeflesPopup 
        isOpen={isPopupOpen} 
        onClose={() => setIsPopupOpen(false)} 
      />
    </>
  );
};

export default GymOnlyBenefits;