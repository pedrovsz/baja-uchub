
import React from 'react';
import { Link } from 'react-router-dom';

interface DiagonalLinkProps {
  to: string;
  title: string;
  className?: string;
  children: React.ReactNode;
}

const DiagonalLink: React.FC<DiagonalLinkProps> = ({ to, title, className, children }) => {
  return (
    <Link
      to={to}
      className={`
        group 
        relative flex-1 
        flex items-center justify-center 
        overflow-hidden 
        transition-all duration-700 ease-in-out 
        transform 
        lg:-skew-x-[16deg]
        lg:hover:flex-grow-[1.5]
        ${className}
      `}
    >
      <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-500"></div>
      <div className="relative transform lg:skew-x-[16deg] h-full w-full flex flex-col items-center justify-center p-4 text-center">
        <div className="transition-transform duration-500 ease-in-out group-hover:scale-110">
            {children}
        </div>
        <h2 className="
          absolute bottom-10 left-0 right-0
          font-extrabold text-2xl md:text-3xl lg:text-4xl uppercase tracking-wider
          opacity-0 group-hover:opacity-100 
          transform translate-y-4 group-hover:translate-y-0
          transition-all duration-500 ease-in-out
          text-shadow-lg
          pointer-events-none
        ">
          {title}
        </h2>
      </div>
    </Link>
  );
};

export default DiagonalLink;
