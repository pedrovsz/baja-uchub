import React from 'react';

interface RuleSectionProps {
  icon: React.ReactElement;
  title: string;
  code: string;
  rules: string[];
}

export const RuleSection: React.FC<RuleSectionProps> = ({ icon, title, code, rules }) => {
  return (
    <section className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden border border-slate-200 dark:border-slate-700">
      <div className="p-6">
        <div className="flex items-center mb-5">
          <div className="w-12 h-12 flex-shrink-0 bg-brand-primary/10 dark:bg-brand-primary/20 text-brand-primary p-2.5 rounded-full mr-5">
            {icon}
          </div>
          <div>
            <span className="text-sm font-bold text-brand-primary uppercase tracking-wider">{code}</span>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">{title}</h2>
          </div>
        </div>
        
        <ul className="space-y-4">
          {rules.map((rule, index) => (
            <li key={index} className="flex items-start">
              <div className="flex-shrink-0 w-5 h-5 mt-1 mr-3 text-green-500">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="text-slate-600 dark:text-slate-300">{rule}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
