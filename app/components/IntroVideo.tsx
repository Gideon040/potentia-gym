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
      className="relative w-full overflow-hidden"
      style={{
        background: `
          radial-gradient(48.81% 90.44% at 94.44% 9.56%, rgba(225, 172, 70, 0.55) 0%, #002444 50%),
          radial-gradient(31.08% 115.56% at 9.48% 98.36%, rgba(225, 172, 70, 0.25) 16.85%, rgba(45, 56, 62, 0.25) 100%),
          radial-gradient(35% 50% at 5% 95%, rgba(225, 172, 70, 0.2) 0%, transparent 60%)
        `,
        paddingTop: '80px',
        paddingBottom: '80px',
      }}
    >
      <div className="max-w-[1440px] mx-auto px-6 lg:px-16">
        <div className="flex flex-col lg:flex-row items-start" style={{ gap: '80px' }}>
          
          {/* Left: Video Container */}
          <div className="relative flex-shrink-0">
            {/* Video with Gradient Border */}
            <div 
              className="relative overflow-hidden"
              style={{
                width: '364px',
                height: '650px',
                borderRadius: '25px',
                border: '3px solid transparent',
                background: 'linear-gradient(#002444, #002444) padding-box, linear-gradient(177.23deg, #E1AC46 2.31%, rgba(225, 172, 70, 0) 26.02%, #E1AC46 50.64%, rgba(225, 172, 70, 0.05) 77.09%, rgba(225, 172, 70, 0.65) 97.15%) border-box',
                boxShadow: '30px 5px 99px 0px rgba(225, 172, 70, 0.35)',
              }}
            >
              <Image
                src="/intro video.png"
                alt="Intro video"
                fill
                className="object-cover rounded-[22px]"
              />
            </div>

            {/* Handwritten Text + Arrow - RECHTS VAN VIDEO */}
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
              
              {/* White Arrow - pointing left naar video */}
              <div className="absolute" style={{ left: '-50px', top: '15px', transform: 'rotate(180deg)' }}>
                <Image src="/white arrow.png" width={40} height={40} alt="" />
              </div>
            </div>
          </div>

          {/* Right: Content - With absolute positioned Google badge */}
          <div 
            className="relative flex-shrink-0 text-white"
            style={{
              width: '743px',
              maxWidth: '743px',
              paddingTop: '46px'
            }}
          >
            <div className="space-y-6">
              {/* Heading */}
              <h2 
                className="text-gym-gold"
                style={{
                  fontFamily: 'Syne',
                  fontWeight: 700,
                  fontSize: '41px',
                  lineHeight: '52px',
                  marginBottom: '24px'
                }}
              >
                Ervaar de kracht van onze community – echte resultaten, echte verhalen
              </h2>

              {/* Body Text */}
              <p 
                style={{
                  fontFamily: 'Inter',
                  fontWeight: 400,
                  fontSize: '18px',
                  lineHeight: '27px',
                  marginBottom: '32px'
                }}
              >
                Bij ons draait het om meer dan alleen fitness. Het gaat om motivatie, 
                doorzettingsvermogen en resultaten. Lees de ervaringen van onze leden 
                en ontdek hoe onze trainingen hen hebben geholpen hun doelen te bereiken
              </p>

              {/* Features with Checkmarks */}
              <div className="grid grid-cols-2 gap-y-4 gap-x-12">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <Image src="/check-mark.svg" width={20} height={20} alt="" />
                    <p 
                      style={{
                        fontFamily: 'Inter',
                        fontWeight: 400,
                        fontStyle: 'italic',
                        fontSize: '18px',
                        lineHeight: '35px',
                      }}
                    >
                      {feature}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Google Reviews Badge - ABSOLUTE POSITIONED */}
            <div 
              className="absolute flex flex-col items-center text-center"
              style={{
                width: '138px',
                height: '91px',
                top: '518px',
                right: '0'
              }}
            >
              {/* Google Logo BOVEN */}
              <Image src="/google.png" width={70} height={24} alt="Google" className="mb-2" />
              
              {/* Review Text ONDER (waar sterren waren) */}
              <p 
                className="text-white"
                style={{
                  fontFamily: 'Inter',
                  fontWeight: 700,
                  fontSize: '14px',
                  lineHeight: '21px',
                }}
              >
                We score <span className="text-gym-gold">5/5</span>
              </p>
              <p 
                className="text-white"
                style={{
                  fontFamily: 'Inter',
                  fontWeight: 400,
                  fontSize: '14px',
                  lineHeight: '21px',
                }}
              >
                based on 130 reviews!
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default IntroVideo;