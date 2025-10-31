'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import GradientButton from './GradientButton';
import ProeflesPopup from './ProeflesPopup';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [popupOpen, setPopupOpen] = useState(false);
  const [megaMenuOpen, setMegaMenuOpen] = useState(false);
  const [mobileAanbodOpen, setMobileAanbodOpen] = useState(false);

  const navItems = [
    { label: 'Lesrooster', href: '/lesrooster' },
    { label: 'Aanbod', href: '/aanbod', hasMegaMenu: true },
    { label: 'Over ons', href: '/over-ons' },
    { label: 'Contact us', href: '/contact' }
  ];

  const aanbodItems = [
    { 
      label: 'Gym Only', 
      href: '/gym-only',
      image: '/gym only.png'
    },
    { 
      label: 'Small Group Training', 
      href: '/small-group-training',
      image: '/1 op 5 group.png'
    },
    { 
      label: '1 Op 12 Group Training', 
      href: '/1-op-12-group',
      image: '/1 op 12 group.png'
    },
    { 
      label: 'Personal / Duo Training', 
      href: '/personal-training',
      image: '/personal duo.png'
    },
    { 
      label: 'Reformer Pilates', 
      href: '/reformer-pilates',
      image: '/reformer pilates.png'
    }
  ];

  return (
    <>
      <header className="fixed top-[13px] left-0 right-0 z-50 px-4 lg:px-8">
        <div className="max-w-[1440px] mx-auto">
          <div 
            className="bg-[#001427] rounded-[45px]"
            style={{
              boxShadow: '30px 20px 99px 0px rgba(0, 36, 68, 0.25)'
            }}
          >
            <nav 
              className="flex items-center justify-between gap-3 px-4 lg:px-12"
              style={{
                height: '70px'
              }}
            >
              
              {/* Hamburger Menu - Left (Mobile Only) */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden text-white flex-shrink-0"
                aria-label="Toggle menu"
              >
                <Image 
                  src="/hamburger.svg" 
                  width={34} 
                  height={26} 
                  alt="Menu"
                  style={{ width: '34px', height: '26px' }}
                />
              </button>

              {/* Logo - Center on Mobile, Left on Desktop */}
              <Link href="/" className="flex items-center lg:flex-shrink-0">
                <Image 
                  src="/potentia logo wit.png" 
                  alt="Potentia" 
                  width={158} 
                  height={33}
                  className="w-auto h-[28px] lg:h-[33px]"
                  priority
                />
              </Link>

              {/* Mobile CTA Button - Styled like desktop but smaller */}
              <button
                onClick={() => setPopupOpen(true)}
                className="lg:hidden flex-shrink-0 px-4 py-2 rounded-[45px] border-2 border-gym-gold text-gym-gold uppercase font-bold whitespace-nowrap hover:bg-gym-gold hover:text-[#001427] transition-all duration-300"
                style={{
                  fontFamily: 'Syne',
                  fontSize: '9px',
                  letterSpacing: '0.12em',
                  height: '36px'
                }}
              >
                FREE TRIAL LESSON
              </button>

              {/* Desktop Navigation */}
              <div className="hidden lg:flex items-center gap-8">
                {navItems.map((item) => (
                  <div 
                    key={item.href}
                    className="relative h-full flex items-center"
                    onMouseEnter={() => item.hasMegaMenu && setMegaMenuOpen(true)}
                  >
                    <Link
                      href={item.href}
                      className="text-white uppercase hover:text-gym-gold transition-colors flex items-center gap-2"
                      style={{ 
                        fontFamily: 'Syne',
                        fontWeight: 700,
                        fontSize: '12px',
                        lineHeight: '100%',
                        letterSpacing: '0.15em'
                      }}
                    >
                      {item.label}
                      {item.hasMegaMenu && (
                        <svg 
                          className={`w-3 h-3 transition-transform duration-300 ${megaMenuOpen ? 'rotate-180' : ''}`}
                          fill="none" 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          strokeWidth="2" 
                          viewBox="0 0 24 24" 
                          stroke="currentColor"
                        >
                          <path d="M19 9l-7 7-7-7" />
                        </svg>
                      )}
                    </Link>
                  </div>
                ))}
              </div>

              {/* CTA Button - Desktop */}
              <div className="hidden lg:block">
                <GradientButton onClick={() => setPopupOpen(true)}>
                  Gratis Proefles
                </GradientButton>
              </div>

            </nav>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
              <div className="lg:hidden py-6 px-6 border-t border-gym-navy-light">
                <div className="flex flex-col space-y-4">
                  {navItems.map((item) => (
                    <div key={item.href}>
                      {/* Menu Item */}
                      {item.hasMegaMenu ? (
                        <button
                          onClick={() => setMobileAanbodOpen(!mobileAanbodOpen)}
                          className="text-white uppercase hover:text-gym-gold transition-colors py-2 flex items-center justify-between w-full"
                          style={{ 
                            fontFamily: 'Syne',
                            fontWeight: 700,
                            fontSize: '12px',
                            letterSpacing: '0.15em'
                          }}
                        >
                          {item.label}
                          <svg 
                            className={`w-4 h-4 transition-transform duration-300 ${mobileAanbodOpen ? 'rotate-180' : ''}`}
                            fill="none" 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            strokeWidth="2" 
                            viewBox="0 0 24 24" 
                            stroke="currentColor"
                          >
                            <path d="M19 9l-7 7-7-7" />
                          </svg>
                        </button>
                      ) : (
                        <Link
                          href={item.href}
                          className="text-white uppercase hover:text-gym-gold transition-colors py-2 block"
                          style={{ 
                            fontFamily: 'Syne',
                            fontWeight: 700,
                            fontSize: '12px',
                            letterSpacing: '0.15em'
                          }}
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {item.label}
                        </Link>
                      )}

                      {/* Aanbod Submenu */}
                      {item.hasMegaMenu && mobileAanbodOpen && (
                        <div className="mt-3 ml-4 space-y-3 pb-2">
                          {aanbodItems.map((service) => (
                            <Link
                              key={service.href}
                              href={service.href}
                              className="block text-gym-gold hover:text-white transition-colors py-2"
                              style={{ 
                                fontFamily: 'Syne',
                                fontWeight: 600,
                                fontSize: '11px',
                                letterSpacing: '0.1em'
                              }}
                              onClick={() => {
                                setMobileMenuOpen(false);
                                setMobileAanbodOpen(false);
                              }}
                            >
                              {service.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
          
          {/* Invisible hover area that extends below header */}
          {megaMenuOpen && (
            <div 
              className="hidden lg:block"
              style={{ height: '28px' }}
              onMouseEnter={() => setMegaMenuOpen(true)}
              onMouseLeave={() => setMegaMenuOpen(false)}
            />
          )}
        </div>

        {/* Mega Menu - Desktop Only */}
        {megaMenuOpen && (
          <div 
            className="hidden lg:block absolute left-0 right-0"
            style={{ top: '113px' }}
            onMouseEnter={() => setMegaMenuOpen(true)}
            onMouseLeave={() => setMegaMenuOpen(false)}
          >
            <div className="max-w-[1440px] mx-auto px-4 lg:px-8">
              <div 
                className="bg-white rounded-[24px] py-12 px-16"
                style={{
                  boxShadow: '20px 30px 90px rgba(225, 172, 70, 0.25)'
                }}
              >
                {/* Heading */}
                <h3 
                  className="text-gym-navy mb-8 flex items-center gap-3"
                  style={{
                    fontFamily: 'Syne',
                    fontWeight: 700,
                    fontSize: '24px',
                    lineHeight: '100%'
                  }}
                >
                  ONS AANBOD
                  <Image 
                    src="/wobbly-arrow.svg" 
                    width={32} 
                    height={32} 
                    alt="" 
                    className="flex-shrink-0"
                    style={{
                      filter: 'brightness(0) saturate(100%) invert(67%) sepia(52%) saturate(463%) hue-rotate(359deg) brightness(95%) contrast(90%)'
                    }}
                  />
                </h3>

                {/* Service Cards */}
                <div className="grid grid-cols-5 gap-6">
                  {aanbodItems.map((service) => (
                    <Link
                      key={service.href}
                      href={service.href}
                      className="group"
                    >
                      {/* Service Title */}
                      <p 
                        className="text-gym-navy mb-3 group-hover:text-gym-gold transition-colors"
                        style={{
                          fontFamily: 'Syne',
                          fontWeight: 600,
                          fontSize: '14px',
                          lineHeight: '120%'
                        }}
                      >
                        {service.label}
                      </p>

                      {/* Service Image */}
                      <div className="relative w-full h-[140px] rounded-[16px] overflow-hidden">
                        <Image
                          src={service.image}
                          alt={service.label}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Popup */}
      <ProeflesPopup 
        isOpen={popupOpen} 
        onClose={() => setPopupOpen(false)} 
      />
    </>
  );
};

export default Header;