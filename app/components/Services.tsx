import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Services = () => {
  const services: Array<{
    title: string;
    image: string;
    size: 'large' | 'small';
    href: string;
  }> = [
    {
      title: 'GYM ONLY',
      image: '/gym only.png',
      size: 'large',
      href: '/aanbod/gym-only'
    },
    {
      title: '1 OP 5\nGROUP',
      image: '/1 op 5 group.png',
      size: 'large',
      href: '/aanbod/1-op-5-group'
    },
    {
      title: '1 OP 12\nGROUP',
      image: '/1 op 12 group.png',
      size: 'small',
      href: '/aanbod/1-op-12-group'
    },
    {
      title: 'PERSONAL/\nDUO',
      image: '/personal duo.png',
      size: 'small',
      href: '/aanbod/personal-duo'
    },
    {
      title: 'REFORMER\nPILATES',
      image: '/reformer pilates.png',
      size: 'small',
      href: '/aanbod/reformer-pilates'
    }
  ];

  // Mobile: alleen eerste 3 services
  const mobileServices = services.slice(0, 3);

  return (
    <section className="relative w-full bg-white py-12 lg:py-32">
      <div className="max-w-[1440px] mx-auto px-5 lg:px-16">
        
        {/* Header */}
        <div className="mb-6 lg:mb-12">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 mb-6">
            <div className="flex items-center gap-3 lg:gap-4">
              <h2 
                className="text-[#1A2E47] max-w-[530px]"
                style={{
                  fontFamily: 'Syne',
                  fontWeight: 700,
                  fontSize: '28px',
                  lineHeight: '34px'
                }}
              >
                <span className="lg:hidden">Hoe wij je helpen fit en gezond te worden</span>
                <span 
                  className="hidden lg:inline"
                  style={{
                    fontSize: '41px',
                    lineHeight: '100%',
                    letterSpacing: '0%'
                  }}
                >
                  Hoe wij je helpen fit en gezond te worden
                </span>
              </h2>
              <Image 
                src="/wobbly-arrow.svg" 
                width={40} 
                height={40} 
                alt="" 
                className="flex-shrink-0 lg:w-[60px] lg:h-[60px]"
              />
            </div>
            
            {/* Button - Desktop only (in header) */}
            <Link 
              href="/aanbod"
              className="hidden lg:inline-flex items-center justify-center px-8 rounded-[45px] border-2 border-gym-gold text-gym-navy font-bold text-xs tracking-[0.15em] uppercase transition-all hover:bg-gym-gold hover:text-white"
              style={{
                height: '46px',
                fontFamily: 'Syne',
                minWidth: '242px'
              }}
            >
              Bekijk alle trainingen
            </Link>
          </div>

          {/* Button - Mobile only (below header) */}
          <Link 
            href="/aanbod"
            className="flex lg:hidden w-full items-center justify-center text-center px-8 rounded-[45px] border-2 border-gym-gold text-gym-navy font-bold text-xs tracking-[0.15em] uppercase transition-all hover:bg-gym-gold hover:text-white active:scale-95"
            style={{
              height: '46px',
              fontFamily: 'Syne',
              lineHeight: '46px'
            }}
          >
            Bekijk alle trainingen
          </Link>
        </div>

        {/* Mobile: 3 services stacked */}
        <div className="block lg:hidden space-y-6">
          {mobileServices.map((service, index) => (
            <ServiceCard 
              key={index}
              title={service.title}
              image={service.image}
              size={service.size}
              href={service.href}
            />
          ))}
        </div>

        {/* Desktop: Original 5 services grid */}
        <div className="hidden lg:grid lg:grid-cols-12 gap-6">
          
          {/* Top Row - 2 Large Cards */}
          <div className="lg:col-span-7">
            <ServiceCard 
              title={services[0].title}
              image={services[0].image}
              size="large"
              href={services[0].href}
            />
          </div>
          <div className="lg:col-span-5">
            <ServiceCard 
              title={services[1].title}
              image={services[1].image}
              size="large"
              href={services[1].href}
            />
          </div>

          {/* Bottom Row - 3 Small Cards */}
          {services.slice(2).map((service, index) => (
            <div key={index} className="lg:col-span-4">
              <ServiceCard 
                title={service.title}
                image={service.image}
                size={service.size}
                href={service.href}
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

// Service Card Component
const ServiceCard = ({ 
  title, 
  image, 
  size, 
  href 
}: { 
  title: string; 
  image: string; 
  size: 'large' | 'small';
  href: string;
}) => {
  return (
    <Link 
      href={href}
      className={`
        relative block overflow-hidden rounded-[24px] lg:rounded-[25px] group cursor-pointer
        ${size === 'large' ? 'h-[350px] lg:h-[469px]' : 'h-[300px] lg:h-[469px]'} 
        ${size === 'small' ? 'border-4 border-[#FEFFFF]' : ''}
      `}
    >
      {/* Background Image */}
      <Image
        src={image}
        alt={title}
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-110"
      />

      {/* Gradient Overlay */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(0.12deg, rgba(0, 20, 39, 0.85) 8.82%, rgba(0, 20, 39, 0) 56.98%)'
        }}
      />

      {/* Arrow Icon - Top Right */}
      <div className="absolute top-4 right-4 lg:top-6 lg:right-6 w-6 h-6 lg:w-8 lg:h-8 opacity-80 group-hover:opacity-100 transition-opacity">
        <Image
          src="/arrow-right-up.png"
          alt=""
          fill
          className="object-contain"
        />
      </div>

      {/* Title - Bottom Left */}
      <div className="absolute bottom-6 left-6 lg:bottom-8 lg:left-8">
        <h3 
          className="text-white font-bold leading-tight whitespace-pre-line"
          style={{ 
            fontFamily: 'Syne',
            fontSize: '24px',
            lineHeight: '30px'
          }}
        >
          {title}
        </h3>
      </div>
    </Link>
  );
};

export default Services;