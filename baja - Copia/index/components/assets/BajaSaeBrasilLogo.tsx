
import React from 'react';

const BajaSaeBrasilLogo: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <svg 
      className={className}
      viewBox="0 0 200 50" 
      xmlns="http://www.w3.org/2000/svg" 
      fill="currentColor"
    >
      <text 
        x="100" 
        y="20" 
        fontFamily="Arial, sans-serif" 
        fontSize="24" 
        fontWeight="bold" 
        textAnchor="middle" 
        fill="#0D47A1"
      >
        BAJA
      </text>
      <text 
        x="100" 
        y="45" 
        fontFamily="Arial, sans-serif" 
        fontSize="16" 
        fontWeight="normal" 
        textAnchor="middle" 
        fill="#1E88E5"
      >
        SAE BRASIL
      </text>
    </svg>
  );
};

export default BajaSaeBrasilLogo;
