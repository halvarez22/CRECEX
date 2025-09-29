import React from 'react';
import logoUrl from '../images/logo_1.png';

export const HeroSection: React.FC = () => {
  return (
    <section id="hero" className="py-20 md:py-32 bg-cresex-blue">
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-center mb-8">
            <img
              src={logoUrl}
              alt="CRECEX"
              className="h-20 md:h-28 lg:h-32 w-auto object-contain drop-shadow-[0_8px_20px_rgba(0,245,212,0.15)]"
              loading="eager"
              decoding="async"
            />
          </div>
          <span className="text-cresex-teal font-semibold tracking-widest">LO QUE SÍ FUNCIONA</span>
          <h1 className="text-4xl md:text-6xl font-black text-white mt-4 mb-6 leading-tight">
            Inversiones de Alto Rendimiento para Profesionales como Tú.
          </h1>
          <p className="text-lg md:text-xl text-cresex-light-gray max-w-2xl mx-auto mb-8">
            Democratizamos el acceso a sectores estratégicos con potencial de crecimiento. Invierte en tu futuro desde <span className="text-cresex-teal font-bold">$1,200 MXN</span> y obtén rendimientos superiores al mercado.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
            <a href="#contacto" className="bg-cresex-teal text-cresex-blue font-bold py-3 px-8 rounded-lg text-lg hover:bg-opacity-80 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cresex-teal/20 w-full sm:w-auto">
              Empezar Ahora
            </a>
            <a href="#cómo-funciona" className="border-2 border-cresex-gray text-cresex-white font-bold py-3 px-8 rounded-lg text-lg hover:bg-cresex-gray hover:border-cresex-gray transition-colors duration-300 w-full sm:w-auto">
              Saber Más
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};