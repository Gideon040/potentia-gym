import React from 'react';
import Image from 'next/image';

const GymOnlyUSP = () => {
  const features = [
    {
      icon: '/grafiek.png',
      title: 'Gecertificeerde coach',
      description: 'Wij zorgen dat er altijd een coach aanwezig is die jou kan helpen. Het aanleren van de juiste techniek is voor ons erg belangrijk'
    },
    {
      icon: '/dumbells.png',
      title: 'Moderne apparatuur',
      description: 'We kiezen voor hoge kwaliteit fitness apparatuur. Een ruim aanbod zorgt ervoor dat je nooit lang hoeft te wachten'
    },
    {
      icon: '/hoofd.png',
      title: 'Meetbare resultaten',
      description: 'Met het gebruik van onze eigen app kun je je eigen resultaten in kaart brengen, waardoor succes gegarandeerd is'
    }
  ];

  return (
    <section className="relative w-full bg-[#001427] py-20 lg:py-32">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-16">
        
        {/* Cards Grid */}
        <div className="flex flex-col sm:flex-row lg:flex-row gap-5 lg:gap-6 items-start">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="relative overflow-hidden rounded-[24px] flex-1"
              style={{
                minWidth: '350px',
                maxWidth: '385px',
                height: '400px',
                background: '#002444'
              }}
            >
              {/* Content */}
              <div className="relative z-10 h-full flex flex-col justify-start p-8">
                
                {/* Icon with white circle background */}
                <div 
                  className="w-[60px] h-[60px] rounded-full bg-white flex items-center justify-center mb-6"
                >
                  <Image
                    src={feature.icon}
                    alt=""
                    width={30}
                    height={30}
                    className="object-contain"
                  />
                </div>

                {/* Title */}
                <h3 
                  className="text-white uppercase mb-4"
                  style={{
                    fontFamily: 'Syne',
                    fontWeight: 400,
                    fontSize: '22px',
                    lineHeight: '42px'
                  }}
                >
                  {feature.title}
                </h3>

                {/* Description */}
                <p 
                  className="text-[#D2D2D2]"
                  style={{
                    fontFamily: 'Aeonik TRIAL, Inter, sans-serif',
                    fontWeight: 400,
                    fontSize: '14px',
                    lineHeight: '21px'
                  }}
                >
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default GymOnlyUSP;