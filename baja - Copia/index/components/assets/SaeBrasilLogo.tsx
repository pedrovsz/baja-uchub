
import React from 'react';

const SaeBrasilLogo: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <svg 
      className={className}
      viewBox="0 0 300 100" 
      xmlns="http://www.w3.org/2000/svg" 
      fill="currentColor"
    >
      <rect width="300" height="100" fill="transparent"/>
      <text 
        x="150" 
        y="65" 
        fontFamily="Impact, Charcoal, sans-serif" 
        fontSize="70" 
        letterSpacing="5" 
        textAnchor="middle"
      >
        SAE
      </text>
       <text 
        x="150" 
        y="90" 
        fontFamily="Arial, sans-serif" 
        fontSize="20" 
        textAnchor="middle"
        fill="#64B5F6"
      >
        BRASIL
      </text>
    </svg>
  );
};

export default SaeBrasilLogo;
