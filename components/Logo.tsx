import React from 'react';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className = "" }) => {
  return (
    <a href="#home" className={`group flex items-center transition-transform duration-300 active:scale-95 ${className}`}>
      <span className="flex items-baseline">
        <span className="text-2xl font-serif font-bold tracking-[0.1em] text-white">
          LU
        </span>
        <span className="text-2xl font-sans font-extrabold tracking-tighter text-[#6b4a9a] group-hover:text-white transition-colors duration-500 ml-0.5">
          GUERRA
        </span>
        <span className="text-[9px] align-top ml-1 opacity-40 font-sans tracking-normal text-white">®</span>
      </span>
    </a>
  );
};

export default Logo;