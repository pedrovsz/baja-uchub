
import React from 'react';
import DiagonalLink from '../ui/DiagonalLink';
import BajaSaeBrasilLogo from '../assets/BajaSaeBrasilLogo';
import SaeBrasilLogo from '../assets/SaeBrasilLogo';
import BlueprintBackground from '../assets/BlueprintBackground';

const HomePage: React.FC = () => {
  return (
    <main className="h-screen w-screen bg-gray-900 text-white overflow-hidden">
      <div className="flex flex-col lg:flex-row h-full w-full">
        <DiagonalLink to="/admin" title="Administração" className="bg-white text-gray-800">
          <BajaSaeBrasilLogo className="h-20 md:h-24 lg:h-32" />
        </DiagonalLink>

        <DiagonalLink to="/tecnico" title="Área Técnica" className="relative text-white">
          <div className="absolute inset-0 bg-blue-800/80 backdrop-blur-sm"></div>
          <BlueprintBackground />
          <div className="relative z-10 text-xl font-bold tracking-widest uppercase">
            Engenharia
          </div>
        </DiagonalLink>

        <DiagonalLink to="/regulamento" title="Regulamentos" className="bg-blue-950 text-white">
          <SaeBrasilLogo className="h-24 md:h-32 lg:h-48 opacity-75" />
        </DiagonalLink>
      </div>
    </main>
  );
};

export default HomePage;
