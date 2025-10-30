'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import PrimaryButton from './PrimaryButton';
import OutlineButton from './OutlineButton';
import ProeflesPopup from './ProeflesPopup';

const SmallGroupIntro = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  return (
    <>
      <section className="relative w-full bg-white py-20 lg:py-32">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Side - Content */}
            <div className="space-y-6 lg:max-w-[600px]">
              <h2 
                className="text-gym-navy"
                style={{
                  fontFamily: 'Syne',
                  fontWeight: 700,
                  fontSize: '41px',
                  lineHeight: '100%'
                }}
              >
                Persoonlijke small group training
              </h2>
              
              <div 
                className="space-y-4 text-gym-navy/80"
                style={{
                  fontFamily: 'Aeonik TRIAL, Inter, sans-serif',
                  fontSize: '18px',
                  lineHeight: '35px'
                }}
              >
                <p>
                  Sporten in een gemotiveerde groep met positieve energie? Dan is small group training echt iets voor jou! Bij Potentia werken we veel persoonlijker dan bij een normale sportschool.
                </p>
                
                <p>
                  De small group trainingen bestaan uit tussen de 4 en 8 personen, afhankelijk van de soort les. Onder begeleiding van de beste coaches in de omgeving. De perfecte combinatie tussen kracht, cardio en uithoudingsvermogen. En dankzij de groepsleden krijg je net wat extra kracht en doorzettingsvermogen!
                </p>
                
                <p>
                  De coaches zorgen ervoor dat de techniek juist is en dat er het maximale uit een les wordt gehaald! Wij geloven in functioneel trainen, zodat jij alle aspecten van je lichaam onder de knie krijgt! Tijdens deze sessies word je elke keer weer uitgedaagd om je doelstellingen te behalen binnen een groep van gelijkgestemden. Het maakt niet uit welk niveau je bezit, iedereen is welkom.
                </p>
              </div>

              <div className="flex flex-wrap gap-4 pt-2">
                <PrimaryButton 
                  variant="solid"
                  onClick={() => setIsPopupOpen(true)}
                >
                  GRATIS PROEFLES
                </PrimaryButton>
                <Link href="/contact">
                  <OutlineButton variant="golden-outline">
                    NEEM CONTACT OP
                  </OutlineButton>
                </Link>
              </div>
            </div>

            {/* Right Side - Image */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative w-full max-w-[439px] h-[569px] rounded-[40px] overflow-hidden shadow-2xl">
                <Image
                  src="/1 op 12 group.png"
                  alt="Small Group Training"
                  fill
                  className="object-cover"
                />
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

export default SmallGroupIntro;