import React from 'react';

export const CTA: React.FC = () => {
  return (
    <section className="py-20 bg-cresex-blue">
      <div className="container mx-auto px-6">
        <div className="animated-gradient bg-gradient-to-r from-cresex-teal via-blue-600 to-purple-600 rounded-lg p-10 md:p-16 text-center shadow-2xl shadow-cresex-teal/30">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4">¿Listo para que tu dinero trabaje para ti?</h2>
          <p className="text-cresex-white/90 text-lg max-w-2xl mx-auto mb-8">
            Únete a la nueva generación de inversores en México. Abre tu cuenta hoy y da el primer paso hacia un futuro financiero más próspero y con propósito.
          </p>
          <a href="#contacto" className="bg-white text-cresex-blue font-bold py-3 px-10 rounded-lg text-lg hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105 shadow-lg">
            Crear Mi Cuenta
          </a>
        </div>
      </div>
    </section>
  );
};