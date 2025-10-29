'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import GradientButton from './GradientButton';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: 'Lesrooster', href: '/lesrooster' },
    { label: 'Aanbod', href: '/aanbod' },
    { label: 'Over ons', href: '/over-ons' },
    { label: 'Dagpas', href: '/dagpas' },
    { label: 'Contact us', href: '/contact' }
  ];

  return (
    <header className="fixed top-[13px] left-0 right-0 z-50 px-4 lg:px-8">
      <div className="max-w-[1440px] mx-auto">
        <div 
          className="bg-[#001427] rounded-[45px]"
          style={{
            boxShadow: '30px 20px 99px 0px rgba(0, 36, 68, 0.25)'
          }}
        >
          <nav 
            className="flex items-center justify-between px-6 lg:px-12"
            style={{
              height: '85px'
            }}
          >
            
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <Image 
                src="/potentia logo wit.png" 
                alt="Potentia" 
                width={158} 
                height={33}
                className="w-auto"
                style={{ height: '33px' }}
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-white uppercase hover:text-gym-gold transition-colors"
                  style={{ 
                    fontFamily: 'Syne',
                    fontWeight: 700,
                    fontSize: '12px',
                    lineHeight: '100%',
                    letterSpacing: '0.15em'
                  }}
                >
                  {item.label}
                </Link>
              ))}
            </div>

            {/* CTA Button - Desktop */}
            <div className="hidden lg:block">
              <GradientButton href="/gratis-proefles">
                Gratis Proefles
              </GradientButton>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden text-white p-2"
              aria-label="Toggle menu"
            >
              <svg 
                className="w-6 h-6" 
                fill="none" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth="2" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                {mobileMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </nav>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="lg:hidden py-6 px-6 border-t border-gym-navy-light">
              <div className="flex flex-col space-y-4">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="text-white uppercase hover:text-gym-gold transition-colors py-2"
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
                ))}
                
                {/* Mobile CTA Button */}
                <div className="pt-4">
                  <GradientButton href="/gratis-proefles">
                    Gratis Proefles
                  </GradientButton>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;