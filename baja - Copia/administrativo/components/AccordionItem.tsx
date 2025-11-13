
import React from 'react';

interface AccordionItemProps {
  title: string;
  isOpen: boolean;
  onClick: () => void;
  children: React.ReactNode;
}

const ChevronDownIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={2}
    stroke="currentColor"
    className={className}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
  </svg>
);

const AccordionItem: React.FC<AccordionItemProps> = ({ title, isOpen, onClick, children }) => {
  return (
    <section className="border border-gray-200 rounded-xl shadow-sm bg-white overflow-hidden">
      <h2>
        <button
          type="button"
          className="flex justify-between items-center w-full p-5 font-bold text-left text-gray-800 hover:bg-gray-100/50 transition-colors duration-200"
          onClick={onClick}
          aria-expanded={isOpen}
        >
          <span className="text-lg">{title}</span>
          <ChevronDownIcon
            className={`w-6 h-6 transform transition-transform duration-300 ease-in-out ${
              isOpen ? 'rotate-180' : 'rotate-0'
            }`}
          />
        </button>
      </h2>
      <div
        className={`grid overflow-hidden transition-all duration-500 ease-in-out text-gray-600 ${
          isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
        }`}
      >
        <div className="overflow-hidden">
          <div className="p-5 border-t border-gray-200 leading-relaxed">
            {children}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AccordionItem;
