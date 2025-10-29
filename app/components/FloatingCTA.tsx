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
  const baseClasses = "relative flex items-center gap-[11px] px-6 py-4 rounded-[45px] font-syne font-bold text-xs leading-[14px] tracking-[0.15em] uppercase transition-all duration-300 hover:scale-105 shadow-[20px_30px_90px_rgba(225,172,70,0.25)]";
  
  const variantClasses = {
    blue: "bg-gradient-to-r from-[#002444] via-[#002444] to-[#003D8F] text-white",
    golden: "bg-[#E1AC46] text-[#1A2E47] border border-[#1A2E47]"
  };

  // Blue button (donker) gebruikt light icon
  // Golden button (licht) gebruikt dark icon
  const iconSrc = variant === 'blue' ? '/arrow-icon-light.svg' : '/arrow-icon-dark.svg';

  return (
    <button
      onClick={onClick}
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
    >
      <Image 
        src={iconSrc} 
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