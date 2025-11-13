
import React, { useState } from 'react';
import AccordionItem from './components/AccordionItem';
import { accordionData } from './constants';

const App: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <main className="bg-gray-50 min-h-screen text-gray-800 p-4 sm:p-6 md:p-8">
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900">
            REGULAMENTO ADMINISTRATIVO
          </h1>
        </header>
        <div className="space-y-4">
          {accordionData.map((item, index) => (
            <AccordionItem
              key={index}
              title={item.title}
              isOpen={openIndex === index}
              onClick={() => handleToggle(index)}
            >
              {item.content}
            </AccordionItem>
          ))}
        </div>
      </div>
    </main>
  );
};

export default App;
