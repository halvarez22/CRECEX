
import React from 'react';

// FIX: Replaced JSX.Element with React.ReactElement to resolve namespace issue.
const BenefitCard: React.FC<{ icon: React.ReactElement; title: string; description: string; }> = ({ icon, title, description }) => (
  <div className="bg-cresex-blue-light p-6 rounded-lg border border-cresex-gray/30 transform hover:-translate-y-2 transition-transform duration-300">
    <div className="flex items-center space-x-4">
      <div className="bg-cresex-gray/30 p-3 rounded-full text-cresex-teal">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-white">{title}</h3>
    </div>
    <p className="mt-4 text-cresex-light-gray">{description}</p>
  </div>
);

export const Benefits: React.FC = () => {
  const benefits = [
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v.01" /></svg>,
      title: 'Rendimientos Superiores',
      description: 'Nuestro modelo de inversión busca activamente oportunidades que superen los rendimientos de los mercados tradicionales.'
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>,
      title: 'Inversión con Impacto',
      description: 'Diversifica tu portafolio en sectores socialmente responsables que no solo generan ganancias, sino que también contribuyen al bienestar.'
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>,
      title: 'Transparencia Total',
      description: 'Accede a reportes detallados y sigue el rendimiento de tus inversiones en tiempo real a través de nuestra plataforma segura y fácil de usar.'
    }
  ];

  return (
    <section id="beneficios" className="py-20 bg-cresex-blue">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Por Qué Invertir con CRECEX</h2>
          <p className="mt-4 text-cresex-light-gray">Vamos más allá de las finanzas tradicionales. Te ofrecemos ventajas claras para maximizar tu potencial.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map(benefit => (
            <BenefitCard key={benefit.title} {...benefit} />
          ))}
        </div>
      </div>
    </section>
  );
};