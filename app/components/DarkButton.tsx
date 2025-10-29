import React from 'react';

interface DarkButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

const DarkButton: React.FC<DarkButtonProps> = ({
  children,
  onClick,
  className = '',
}) => {
  const baseClasses = "flex items-center justify-center px-[15px] py-[10px] rounded-[45px] font-syne font-bold text-[11px] leading-[13px] tracking-[0.15em] uppercase transition-all duration-300";
  
  const stateClasses = "bg-[#002444] text-[#E1AC46] hover:bg-[#E1AC46] hover:text-[#002444] active:bg-[#FFCE71] active:text-[#002444]";

  return (
    <button
      onClick={onClick}
      className={`${baseClasses} ${stateClasses} ${className}`}
    >
      {children}
    </button>
  );
};

export default DarkButton;