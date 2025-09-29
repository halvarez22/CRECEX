
import React, { useState } from 'react';

export const ContactForm: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    // Simulate API call
    setTimeout(() => {
      if (name && email) {
        setStatus('success');
        setName('');
        setEmail('');
        setMessage('');
      } else {
        setStatus('error');
      }
      setTimeout(() => setStatus('idle'), 3000);
    }, 1500);
  };

  return (
    <section id="contacto" className="py-20 bg-cresex-blue-light/50">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white">Contáctanos</h2>
            <p className="mt-4 text-cresex-light-gray mb-8">
              ¿Tienes preguntas? Nuestro equipo está listo para ayudarte. Déjanos tus datos y nos pondremos en contacto a la brevedad.
            </p>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-cresex-light-gray mb-2">Nombre Completo</label>
                <input type="text" id="name" value={name} onChange={e => setName(e.target.value)} required className="w-full bg-cresex-blue-light border border-cresex-gray rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-cresex-teal focus:outline-none transition" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-cresex-light-gray mb-2">Correo Electrónico</label>
                <input type="email" id="email" value={email} onChange={e => setEmail(e.target.value)} required className="w-full bg-cresex-blue-light border border-cresex-gray rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-cresex-teal focus:outline-none transition" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-cresex-light-gray mb-2">Mensaje (Opcional)</label>
                <textarea id="message" value={message} onChange={e => setMessage(e.target.value)} rows={4} className="w-full bg-cresex-blue-light border border-cresex-gray rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-cresex-teal focus:outline-none transition"></textarea>
              </div>
              <div>
                <button type="submit" disabled={status === 'submitting'} className="w-full bg-cresex-teal text-cresex-blue font-bold py-3 px-6 rounded-lg hover:bg-opacity-80 transition-all duration-300 disabled:bg-cresex-gray disabled:cursor-not-allowed">
                  {status === 'submitting' ? 'Enviando...' : 'Solicitar Información'}
                </button>
              </div>
              {status === 'success' && <p className="text-green-400 text-center">¡Gracias! Hemos recibido tu mensaje.</p>}
              {status === 'error' && <p className="text-red-400 text-center">Por favor, completa los campos requeridos.</p>}
            </form>
          </div>
          <div className="bg-cresex-blue-light p-8 rounded-lg border border-cresex-gray/30">
            <h3 className="text-2xl font-bold text-white mb-4">Seguridad y Transparencia</h3>
            <p className="text-cresex-light-gray mb-6">
              Tu confianza es nuestra prioridad. Operamos con los más altos estándares de seguridad y cumplimiento normativo.
            </p>
            <ul className="space-y-4 text-cresex-white">
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 mt-1 text-cresex-teal flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                <span>Tus datos están protegidos con encriptación de grado bancario.</span>
              </li>
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 mt-1 text-cresex-teal flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                <span>Información clara y accesible sobre cada oportunidad de inversión.</span>
              </li>
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 mt-1 text-cresex-teal flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                <span>Cumplimos con la regulación financiera aplicable en México.</span>
              </li>
            </ul>
            <div className="mt-8 border-t border-cresex-gray/30 pt-6">
              <p className="font-semibold text-white">¿Prefieres hablar con alguien?</p>
              <p className="text-cresex-light-gray">Llámanos al <a href="tel:+525512345678" className="text-cresex-teal hover:underline">+52 55 1234 5678</a></p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
