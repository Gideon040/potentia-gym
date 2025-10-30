import React from 'react';
import Image from 'next/image';

const IntroVideo = () => {
  const features = [
    'Certified trainers',
    'Pleasant social environment',
    'Unlimited fitness and group lessons',
    'Eindhoven/Maarheeze area'
  ];

  return (
    <section 
      className="relative w-full overflow-hidden py-12 lg:py-20"
      style={{
        background: `
          radial-gradient(48.81% 90.44% at 94.44% 9.56%, rgba(225, 172, 70, 0.55) 0%, #002444 50%),
          radial-gradient(31.08% 115.56% at 9.48% 98.36%, rgba(225, 172, 70, 0.25) 16.85%, rgba(45, 56, 62, 0.25) 100%),
          radial-gradient(35% 50% at 5% 95%, rgba(225, 172, 70, 0.2) 0%, transparent 60%)
        `,
      }}
    >
      <div className="max-w-[1440px] mx-auto px-6 lg:px-16">
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-20">
          
          {/* Left: Video Container */}
          <div className="relative flex-shrink-0 w-full lg:w-auto">
            {/* Video with Gradient Border */}
            <div 
              className="relative overflow-hidden mx-auto h-[500px] lg:h-[650px]"
              style={{
                width: '100%',
                maxWidth: '364px',
                borderRadius: '25px',
                border: '3px solid transparent',
                background: 'linear-gradient(#002444, #002444) padding-box, linear-gradient(177.23deg, #E1AC46 2.31%, rgba(225, 172, 70, 0) 26.02%, #E1AC46 50.64%, rgba(225, 172, 70, 0.05) 77.09%, rgba(225, 172, 70, 0.65) 97.15%) border-box',
                boxShadow: '30px 5px 99px 0px rgba(225, 172, 70, 0.35)',
              }}
            >
              <video
                controls
                playsInline
                className="w-full h-full object-cover rounded-[22px]"
              >
                <source src="/Potentia-Mashup-Draft.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>

            {/* Handwritten Text + Arrow - Desktop Only */}
            <div 
              className="absolute hidden lg:block"
              style={{
                bottom: '120px',
                right: '-140px',
                transform: 'rotate(-0.78deg)',
              }}
            >
              <p 
                className="text-white whitespace-nowrap"
                style={{
                  fontFamily: 'Caveat, cursive',
                  fontWeight: 700,
                  fontSize: '22px',
                  lineHeight: '20px',
                }}
              >
                Watch our<br />intro video!
              </p>
              
              {/* White Arrow */}
              <div className="absolute" style={{ left: '-50px', top: '15px', transform: 'rotate(180deg)' }}>
                <Image src="/white arrow.png" width={40} height={40} alt="" />
              </div>
            </div>
          </div>

          {/* Right: Content */}
          <div 
            className="relative flex-1 text-white w-full"
          >
            <div className="space-y-4 lg:space-y-6">
              {/* Heading */}
              <h2 
                className="text-gym-gold text-2xl sm:text-3xl lg:text-[41px] leading-tight lg:leading-[52px]"
                style={{
                  fontFamily: 'Syne',
                  fontWeight: 700,
                }}
              >
                Ervaar de kracht van onze community – echte resultaten, echte verhalen
              </h2>

              {/* Body Text */}
              <p 
                className="text-sm sm:text-base lg:text-[18px] leading-relaxed lg:leading-[27px]"
                style={{
                  fontFamily: 'Inter',
                  fontWeight: 400,
                }}
              >
                Bij ons draait het om meer dan alleen fitness. Het gaat om motivatie, 
                doorzettingsvermogen en resultaten. Lees de ervaringen van onze leden 
                en ontdek hoe onze trainingen hen hebben geholpen hun doelen te bereiken
              </p>

              {/* Features with Checkmarks */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-6 lg:gap-y-4 lg:gap-x-12 mt-6 lg:mt-8">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-2 lg:gap-3">
                    <Image 
                      src="/check-mark.svg" 
                      width={18} 
                      height={18} 
                      alt="" 
                      className="flex-shrink-0 w-[18px] h-[18px] lg:w-[20px] lg:h-[20px]"
                    />
                    <p 
                      className="text-sm lg:text-[18px] leading-relaxed lg:leading-[35px]"
                      style={{
                        fontFamily: 'Inter',
                        fontWeight: 400,
                        fontStyle: 'italic',
                      }}
                    >
                      {feature}
                    </p>
                  </div>
                ))}
              </div>

              {/* Google Reviews Badge */}
              <div 
                className="flex flex-col items-center text-center mt-8 mx-auto lg:absolute lg:right-0"
                style={{
                  width: '138px',
                  top: '518px'
                }}
              >
                {/* Google Logo */}
                <Image 
                  src="/google.png" 
                  width={70} 
                  height={24} 
                  alt="Google" 
                  className="mb-2" 
                />
                
                {/* Review Text */}
                <p 
                  className="text-white text-sm"
                  style={{
                    fontFamily: 'Inter',
                    fontWeight: 700,
                    lineHeight: '21px',
                  }}
                >
                  We score <span className="text-gym-gold">5/5</span>
                </p>
                <p 
                  className="text-white text-sm"
                  style={{
                    fontFamily: 'Inter',
                    fontWeight: 400,
                    lineHeight: '21px',
                  }}
                >
                  based on 130 reviews!
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default IntroVideo;