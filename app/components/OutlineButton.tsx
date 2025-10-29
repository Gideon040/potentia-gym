import React from 'react';

interface OutlineButtonProps {
  variant?: 'white-outline' | 'white-filled' | 'golden-outline' | 'golden-filled';
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

const OutlineButton: React.FC<OutlineButtonProps> = ({
  variant = 'white-outline',
  children,
  onClick,
  className = '',
}) => {
  const baseClasses = "flex items-center justify-center px-[35px] py-5 rounded-full font-syne font-bold text-xs leading-[14px] tracking-[0.15em] uppercase transition-all duration-300 hover:scale-105";
  
  const variantClasses = {
    'white-outline': "border border-white text-white bg-transparent hover:bg-white/10",
    'white-filled': "bg-[#E1AC46] text-white border-none",
    'golden-outline': "border border-[#E1AC46] text-[#002444] bg-transparent hover:bg-[#E1AC46]/10",
    'golden-filled': "bg-white text-[#E1AC46] border-none"
  };

  return (
    <button
      onClick={onClick}
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
    >
      {children}
    </button>
  );
};

export default OutlineButton;