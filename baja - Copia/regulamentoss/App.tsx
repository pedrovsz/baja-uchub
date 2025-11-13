import React from 'react';
import { RuleSection } from './components/RuleSection';
import { RULES_DATA } from './constants';
import { RuleSectionType } from './types';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-100 dark:bg-slate-900 text-slate-800 dark:text-slate-200 font-sans p-4 sm:p-6 lg:p-8">
      <main className="max-w-4xl mx-auto">
        <header className="text-center mb-10">
          <div className="inline-block bg-brand-primary text-white p-4 rounded-full mb-4 shadow-lg">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M4 2a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V4a2 2 0 00-2-2H4zm10.293 4.293a1 1 0 011.414 1.414l-5 5a1 1 0 01-1.414 0l-2-2a1 1 0 111.414-1.414L9 10.586l4.293-4.293z" clipRule="evenodd" />
            </svg>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Manual da Competição <span className="text-brand-primary">Baja SAE</span>
          </h1>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">
            Regulamento oficial e guia de procedimentos.
          </p>
        </header>

        <div className="space-y-8">
          {RULES_DATA.map((section: RuleSectionType) => (
            <RuleSection
              key={section.code}
              icon={section.icon}
              title={section.title}
              code={section.code}
              rules={section.rules}
            />
          ))}
        </div>
        
        <footer className="text-center mt-12 text-slate-500 dark:text-slate-400">
          <p>&copy; {new Date().getFullYear()} Baja SAE Competition. Todos os direitos reservados.</p>
        </footer>
      </main>
    </div>
  );
};

export default App;
