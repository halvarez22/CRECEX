
import React from 'react';

// FIX: Replaced JSX.Element with React.ReactElement to resolve namespace issue.
const SectorCard: React.FC<{ icon: React.ReactElement; title: string; description: string }> = ({ icon, title, description }) => (
  <div className="bg-cresex-blue rounded-xl p-6 flex flex-col items-center text-center border-2 border-transparent hover:border-cresex-teal transition-colors duration-300 shadow-md">
    <div className="text-cresex-teal bg-cresex-blue-light p-4 rounded-full mb-4">
      {icon}
    </div>
    <h3 className="text-lg font-bold text-white mb-2">{title}</h3>
    <p className="text-sm text-cresex-light-gray">{description}</p>
  </div>
);

export const InvestmentSectors: React.FC = () => {
  const sectors = [
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>,
      title: 'Generación Eléctrica Verde',
      description: 'Invertimos en proyectos de energía solar y eólica, impulsando un futuro sostenible y rentable.'
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.477 0 8.268 2.943 9.542 7-1.274 4.057-5.065 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: 'Agricultura Hidropónica',
      description: 'Apoyamos la agricultura del futuro: eficiente, local y con menor impacto ambiental para alimentar a México.'
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /><path d="M12 18.5V22" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/><path d="M15 14l4.5 4.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/><path d="M9 14l-4.5 4.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>,
      title: 'Servicios Médicos',
      description: 'Financiamos clínicas y tecnología médica para mejorar la calidad y el acceso a la salud en el país.'
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>,
      title: 'Industria de Seguros',
      description: 'Participamos en el crecimiento del sector asegurador, un pilar de estabilidad y protección financiera.'
    }
  ];

  return (
    <section id="sectores" className="py-20 bg-cresex-blue-light/50">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Invierte en Sectores del Futuro</h2>
          <p className="mt-4 text-cresex-light-gray">Diversificamos tu dinero en industrias de alto crecimiento y con un impacto positivo en la sociedad y el medio ambiente.</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          {sectors.map(sector => (
            <SectorCard key={sector.title} {...sector} />
          ))}
        </div>
      </div>
    </section>
  );
};
