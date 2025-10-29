'use client';

import React from 'react';
import Link from 'next/link';

interface GradientButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
}

const GradientButton = ({ children, href, onClick, className = '' }: GradientButtonProps) => {
  const baseStyles = `
    relative inline-flex items-center justify-center
    rounded-[45px] overflow-hidden
    font-bold text-[11px] leading-none tracking-[0.15em] uppercase
    transition-all duration-300
    px-[15px] py-[10px]
    cursor-pointer
  `;

  const content = (
    <span 
      className={`
        relative z-10
        ${baseStyles}
        ${className}
      `}
      style={{
        width: '198px',
        height: '45px',
        fontFamily: 'Syne'
      }}
    >
      {/* Gradient border - 2px thick */}
      <span 
        className="absolute inset-0 rounded-[45px] p-[2px]"
        style={{
          background: 'linear-gradient(90deg, #E1AC46 0%, rgba(225, 172, 70, 0.05) 51.92%, rgba(225, 172, 70, 0.85) 100%)',
          WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
          WebkitMaskComposite: 'xor',
          maskComposite: 'exclude'
        }}
      />
      
      {/* Background with states - inset by 2px */}
      <span className="absolute inset-[2px] rounded-[45px] bg-gym-navy group-hover:bg-gym-gold group-active:bg-gym-gold-light transition-all duration-300" />
      
      {/* Text */}
      <span className="relative z-10 text-gym-gold group-hover:text-gym-navy group-active:text-gym-navy transition-colors duration-300">
        {children}
      </span>
    </span>
  );

  if (href) {
    return (
      <Link href={href} className="group inline-block">
        {content}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className="group">
      {content}
    </button>
  );
};

export default GradientButton;