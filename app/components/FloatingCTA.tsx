'use client';

import React from 'react';
import Image from 'next/image';

interface FloatingCTAProps {
  variant?: 'blue' | 'golden';
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

const FloatingCTA: React.FC<FloatingCTAProps> = ({
  variant = 'blue',
  children,
  onClick,
  className = '',
}) => {
  return (
    <button
      onClick={onClick}
      className={`relative flex items-center gap-[11px] px-6 py-4 rounded-[45px] font-syne font-bold text-xs leading-[14px] tracking-[0.15em] uppercase transition-all duration-300 hover:scale-105 ${className}`}
      style={
        variant === 'blue'
          ? {
              background: 'linear-gradient(to right, #002444, #002444, #003D8F)',
              color: 'white',
              boxShadow: '20px 30px 90px rgba(225, 172, 70, 0.25)',
            }
          : {
              background: '#E1AC46',
              color: '#1A2E47',
              border: '2px solid #E1AC46',
              boxShadow: '0 0 30px rgba(225, 172, 70, 1), 0 0 60px rgba(225, 172, 70, 0.7), 0 0 90px rgba(225, 172, 70, 0.5)',
            }
      }
      onMouseEnter={(e) => {
        if (variant === 'golden') {
          e.currentTarget.style.boxShadow = '0 0 40px rgba(225, 172, 70, 1), 0 0 80px rgba(225, 172, 70, 0.8), 0 0 120px rgba(225, 172, 70, 0.6)';
        }
      }}
      onMouseLeave={(e) => {
        if (variant === 'golden') {
          e.currentTarget.style.boxShadow = '0 0 30px rgba(225, 172, 70, 1), 0 0 60px rgba(225, 172, 70, 0.7), 0 0 90px rgba(225, 172, 70, 0.5)';
        }
      }}
    >
      <Image 
        src={variant === 'blue' ? '/arrow-icon-light.svg' : '/arrow-icon-dark.svg'}
        width={30} 
        height={30} 
        alt="" 
        className="flex-shrink-0"
      />
      <span>{children}</span>
    </button>
  );
};

export default FloatingCTA;