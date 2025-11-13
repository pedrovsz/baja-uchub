
import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import HomePage from './components/pages/HomePage';
import AdminPage from './components/pages/AdminPage';
import TechnicalPage from './components/pages/TechnicalPage';
import RegulationsPage from './components/pages/RegulationsPage';

const App: React.FC = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/tecnico" element={<TechnicalPage />} />
        <Route path="/regulamento" element={<RegulationsPage />} />
      </Routes>
    </HashRouter>
  );
};

export default App;
