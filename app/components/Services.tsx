import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Services = () => {
  const services = [
    {
      title: 'GYM ONLY',
      image: '/gym only.png',
      size: 'large',
      href: '/services/gym-only'
    },
    {
      title: '1 OP 5\nGROUP',
      image: '/1 op 5 group.png',
      size: 'large',
      href: '/services/1-op-5-group'
    },
    {
      title: '1 OP 12\nGROUP',
      image: '/1 op 12 group.png',
      size: 'small',
      href: '/services/1-op-12-group'
    },
    {
      title: 'PERSONAL/\nDUO',
      image: '/personal duo.png',
      size: 'small',
      href: '/services/personal-duo'
    },
    {
      title: 'REFORMER\nPILATES',
      image: '/reformer pilates.png',
      size: 'small',
      href: '/services/reformer-pilates'
    }
  ];

  return (
    <section className="relative w-full bg-white py-20 lg:py-32">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-16">
        
        {/* Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-12 gap-6">
          <div className="flex items-center gap-4">
            <h2 className="text-[#1A2E47] max-w-[530px]">
              How we welp you become fit and healthy
            </h2>
            <Image 
              src="/wobbly-arrow.svg" 
              width={60} 
              height={60} 
              alt="" 
              className="flex-shrink-0"
            />
          </div>
          
          {/* Custom Button met exacte specs */}
          <Link 
            href="/services"
            className="flex items-center justify-center px-8 rounded-[45px] border border-gym-gold text-gym-navy font-bold text-xs tracking-[0.15em] uppercase transition-all hover:bg-gym-gold hover:text-white"
            style={{
              width: '242px',
              height: '46px',
              fontFamily: 'Syne'
            }}
          >
            View all services
          </Link>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
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
                size="small"
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
        relative block overflow-hidden rounded-[25px] group cursor-pointer
        ${size === 'large' ? 'h-[469px]' : 'h-[469px] border-4 border-[#FEFFFF]'}
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
      <div className="absolute top-6 right-6 w-8 h-8 opacity-80 group-hover:opacity-100 transition-opacity">
        <Image
          src="/arrow-right-up.png"
          alt=""
          fill
          className="object-contain"
        />
      </div>

      {/* Title - Bottom Left */}
      <div className="absolute bottom-8 left-8">
        <h3 
          className="text-white text-2xl lg:text-3xl font-bold leading-tight whitespace-pre-line"
          style={{ fontFamily: 'Syne' }}
        >
          {title}
        </h3>
      </div>
    </Link>
  );
};

export default Services;