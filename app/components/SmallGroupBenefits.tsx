import React from 'react';
import Image from 'next/image';

const SmallGroupBenefits = () => {
  const benefits = [
    'Samen met een groep, vliegt de tijd voorbij!',
    'Door onze ervaring, weten we wat bij jou past',
    'De juiste mix tussen cardio en kracht',
    'In een groep, maar toch privé',
    'Onbeperkt toegang tot alle groepslessen',
    'Grit, bodypump, yoga, HYROX, krachttraining, BBB, boksen, HIIT',
    '24/7 toegang tot de fitness'
  ];

  return (
    <section className="relative w-full bg-white py-20 lg:py-32">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Side - Image */}
          <div className="flex justify-center lg:justify-start order-2 lg:order-1">
            <div className="relative w-full max-w-[439px] h-[569px] rounded-[40px] overflow-hidden shadow-2xl">
              <Image
                src="/1 op 5 group.png"
                alt="Small Group Training Voordelen"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="space-y-6 lg:max-w-[600px] order-1 lg:order-2">
            <h2 
              className="text-gym-navy"
              style={{
                fontFamily: 'Syne',
                fontWeight: 700,
                fontSize: '41px',
                lineHeight: '100%'
              }}
            >
              Small Group Training
            </h2>
            
            {/* Benefits List */}
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <Image 
                    src="/check-mark.svg" 
                    width={20} 
                    height={20} 
                    alt="" 
                    className="flex-shrink-0 mt-2"
                  />
                  <p 
                    style={{ 
                      fontFamily: 'Aeonik TRIAL, Inter, sans-serif',
                      fontSize: '18px', 
                      lineHeight: '35px',
                      fontStyle: 'italic',
                      color: '#002444'
                    }}
                  >
                    {benefit}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default SmallGroupBenefits;