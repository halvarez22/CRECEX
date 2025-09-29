
import React from 'react';

// FIX: Replaced JSX.Element with React.ReactElement to resolve namespace issue.
const StepCard: React.FC<{ icon: React.ReactElement; title: string; description: string; stepNumber: number }> = ({ icon, title, description, stepNumber }) => (
  <div className="relative p-8 bg-cresex-blue-light rounded-xl border border-cresex-gray/30 shadow-lg">
    <div className="absolute top-4 left-4 w-10 h-10 flex items-center justify-center bg-cresex-gray text-cresex-teal font-bold text-xl rounded-full">
      {stepNumber}
    </div>
    <div className="text-cresex-teal mb-4">{icon}</div>
    <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
    <p className="text-cresex-light-gray">{description}</p>
  </div>
);

export const HowItWorks: React.FC = () => {
  const steps = [
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002 2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" /></svg>,
      title: 'Regístrate Fácilmente',
      description: 'Crea tu cuenta en minutos. Nuestro proceso es rápido, seguro y 100% digital para tu comodidad.'
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>,
      title: 'Elige Tu Sector',
      description: 'Explora nuestros portafolios en energía verde, agricultura, salud y seguros. Invierte donde generes impacto.'
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>,
      title: 'Invierte y Crece',
      description: 'Comienza tu inversión desde $1,200 MXN y sigue el crecimiento de tu portafolio en tiempo real desde nuestra plataforma.'
    }
  ];

  return (
    <section id="cómo-funciona" className="py-20 bg-cresex-blue-light/50">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Tu Futuro Financiero en 3 Simples Pasos</h2>
          <p className="mt-4 text-cresex-light-gray">Invertir nunca fue tan accesible. Diseñamos un proceso intuitivo para que tomes el control de tu dinero.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <StepCard key={step.title} {...step} stepNumber={index + 1} />
          ))}
        </div>
      </div>
    </section>
  );
};
