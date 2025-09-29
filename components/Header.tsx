
import React from 'react';
import logoUrl from '../images/logo_1.png';

const Logo: React.FC = () => (
  <div className="flex items-center">
    <img
      src={logoUrl}
      alt="CRECEX"
      className="h-8 w-auto object-contain transform scale-[2.25] origin-left"
      loading="eager"
      decoding="async"
    />
  </div>
);

export const Header: React.FC = () => {
  const navLinks = ['Cómo funciona', 'Beneficios', 'Sectores', 'Contacto'];

  return (
    <header className="sticky top-0 z-50 bg-cresex-blue/80 backdrop-blur-sm border-b border-cresex-gray/20">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Logo />
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map(link => (
            <a key={link} href={`#${link.toLowerCase().replace(' ', '-')}`} className="text-cresex-light-gray hover:text-cresex-teal transition-colors duration-300">
              {link}
            </a>
          ))}
        </nav>
        <a href="#contacto" className="hidden md:inline-block bg-cresex-teal text-cresex-blue font-bold py-2 px-6 rounded-lg hover:bg-opacity-80 transition-all duration-300 transform hover:scale-105">
          Empezar a Invertir
        </a>
        <button className="md:hidden text-white">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>
    </header>
  );
};