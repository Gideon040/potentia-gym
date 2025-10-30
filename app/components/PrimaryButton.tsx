'use client';

import React from 'react';

interface PrimaryButtonProps {
  variant?: 'solid' | 'gradient';
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({
  variant = 'solid',
  children,
  onClick,
  className = '',
  disabled = false,
}) => {
  const baseClasses = "flex items-center justify-center px-[35px] py-5 rounded-full font-syne font-bold text-xs leading-[14px] tracking-[0.15em] uppercase transition-all duration-300 hover:scale-105";
  
  const variantClasses = {
    solid: "bg-[#E1AC46] text-[#002444]",
    gradient: "bg-gradient-to-r from-[#E1AC46] to-[#FFCE71] text-white"
  };

  const disabledClasses = disabled ? "opacity-50 cursor-not-allowed hover:scale-100" : "";

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${baseClasses} ${variantClasses[variant]} ${disabledClasses} ${className}`}
    >
      {children}
    </button>
  );
};

export default PrimaryButton;