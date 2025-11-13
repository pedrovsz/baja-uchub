
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeftIcon } from '../assets/Icons';

const RegulationsPage: React.FC = () => {
  return (
    <div className="min-h-screen w-full bg-blue-950 text-white flex flex-col items-center justify-center p-8 animate-fadeIn">
      <div className="max-w-4xl text-center">
        <h1 className="text-5xl font-bold mb-4">Regulamentos</h1>
        <p className="text-xl text-blue-300 mb-8">
          Consulte os PDFs de regras, avisos da SAE, mudanças anuais e o calendário oficial da competição.
        </p>
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 px-6 py-3 bg-gray-700 text-white font-semibold rounded-lg shadow-md hover:bg-gray-800 transition-colors"
        >
          <ArrowLeftIcon className="h-5 w-5" />
          Voltar à Homepage
        </Link>
      </div>
    </div>
  );
};

export default RegulationsPage;
