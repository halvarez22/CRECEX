import React from 'react';

const Logo: React.FC = () => (
    <div className="flex items-center space-x-2">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-cresex-teal">
        <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
      <span className="text-xl font-bold text-white tracking-wider">CRECEX</span>
    </div>
  );

export const Footer: React.FC = () => {
  return (
    <footer className="bg-cresex-blue border-t border-cresex-gray/20">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <Logo />
            <p className="mt-4 text-sm text-cresex-light-gray">Invirtiendo en el futuro de México. Lo que sí funciona.</p>
          </div>
          <div>
            <h4 className="font-bold text-white mb-4">Navegación</h4>
            <ul className="space-y-2 text-sm text-cresex-light-gray">
              <li><a href="#cómo-funciona" className="hover:text-cresex-teal">Cómo Funciona</a></li>
              <li><a href="#beneficios" className="hover:text-cresex-teal">Beneficios</a></li>
              <li><a href="#sectores" className="hover:text-cresex-teal">Sectores de Inversión</a></li>
              <li><a href="#contacto" className="hover:text-cresex-teal">Contacto</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-white mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-cresex-light-gray">
              <li><a href="#" className="hover:text-cresex-teal">Términos y Condiciones</a></li>
              <li><a href="#" className="hover:text-cresex-teal">Aviso de Privacidad</a></li>
              <li><a href="#" className="hover:text-cresex-teal">Información de Riesgos</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-white mb-4">Síguenos</h4>
            <div className="flex space-x-4">
              <a href="#" aria-label="LinkedIn" className="text-cresex-light-gray hover:text-cresex-teal transition-colors duration-300">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a href="#" aria-label="Twitter" className="text-cresex-light-gray hover:text-cresex-teal transition-colors duration-300">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616v.064c0 2.296 1.634 4.208 3.801 4.649-.623.169-1.282.23-1.954.23-.298 0-.588-.028-.875-.083.618 1.932 2.413 3.337 4.543 3.374-1.749 1.371-3.956 2.185-6.36 2.185-.414 0-.82-.024-1.22-.072 2.26 1.448 4.953 2.292 7.82 2.292 9.256 0 14.307-7.794 14.01-14.735.981-.703 1.83-1.575 2.508-2.592z"/>
                </svg>
              </a>
              <a href="#" aria-label="Instagram" className="text-cresex-light-gray hover:text-cresex-teal transition-colors duration-300">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85s-.012 3.584-.07 4.85c-.148 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.584-.012-4.85-.07c-3.252-.148-4.771-1.691-4.919-4.919-.058-1.265-.069-1.645-.069-4.85s.012-3.584.07-4.85c.148-3.225 1.664-4.771 4.919-4.919 1.266-.057 1.644-.069 4.85-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948s.014 3.667.072 4.947c.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072s3.667-.014 4.947-.072c4.358-.2 6.78-2.618 6.98-6.98.059-1.281.073-1.689.073-4.948s-.014-3.667-.072-4.947c-.2-4.358-2.618-6.78-6.98-6.98-1.281-.059-1.689-.073-4.948-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4s1.791-4 4-4 4 1.79 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44 1.441-.645 1.441-1.44-.645-1.44-1.441-1.44z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-cresex-gray/20 pt-8 text-center text-sm text-cresex-gray">
          <p>&copy; {new Date().getFullYear()} CRECEX. Todos los derechos reservados.</p>
          <p className="mt-2 max-w-3xl mx-auto">
            CRECEX no es una institución bancaria y no garantiza rendimientos. Las inversiones conllevan riesgos, incluyendo la posible pérdida de capital. La información presentada es para fines ilustrativos y no constituye una recomendación de inversión.
          </p>
        </div>
      </div>
    </footer>
  );
};