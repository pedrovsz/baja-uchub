
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeftIcon } from '../assets/Icons';

const AdminPage: React.FC = () => {
  return (
    <div className="min-h-screen w-full bg-gray-100 text-gray-800 flex flex-col items-center justify-center p-8 animate-fadeIn">
      <div className="max-w-4xl text-center">
        <h1 className="text-5xl font-bold text-blue-900 mb-4">Painel de Administração</h1>
        <p className="text-xl text-gray-600 mb-8">
          Gerenciamento de equipes, documentos internos e status de cadastros.
        </p>
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 px-6 py-3 bg-blue-800 text-white font-semibold rounded-lg shadow-md hover:bg-blue-900 transition-colors"
        >
          <ArrowLeftIcon className="h-5 w-5" />
          Voltar à Homepage
        </Link>
      </div>
    </div>
  );
};

export default AdminPage;
