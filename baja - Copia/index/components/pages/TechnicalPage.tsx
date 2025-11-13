
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeftIcon } from '../assets/Icons';

const TechnicalPage: React.FC = () => {
  return (
    <div className="min-h-screen w-full bg-blue-900 text-white flex flex-col items-center justify-center p-8 animate-fadeIn">
      <div className="max-w-4xl text-center">
        <h1 className="text-5xl font-bold mb-4">Área Técnica</h1>
        <p className="text-xl text-blue-200 mb-8">
          Acesso a arquivos CAD, tabelas de cálculo, atualizações de projeto e cronogramas técnicos.
        </p>
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition-colors"
        >
          <ArrowLeftIcon className="h-5 w-5" />
          Voltar à Homepage
        </Link>
      </div>
    </div>
  );
};

export default TechnicalPage;
