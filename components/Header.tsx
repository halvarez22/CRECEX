
import React from 'react';

const Logo: React.FC = () => (
  <div className="flex items-center space-x-2">
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-cresex-teal">
      <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
    <span className="text-2xl font-bold text-white tracking-wider">CRECEX</span>
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