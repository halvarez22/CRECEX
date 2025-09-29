
import React from 'react';

const TestimonialCard: React.FC<{ quote: string; name: string; title: string; image: string }> = ({ quote, name, title, image }) => (
  <div className="bg-cresex-blue-light p-8 rounded-lg border border-cresex-gray/30 h-full flex flex-col justify-between">
    <p className="text-cresex-white italic mb-6">"{quote}"</p>
    <div className="flex items-center">
      <img src={image} alt={name} className="w-12 h-12 rounded-full mr-4 object-cover" />
      <div>
        <p className="font-bold text-white">{name}</p>
        <p className="text-sm text-cresex-teal">{title}</p>
      </div>
    </div>
  </div>
);

export const Testimonials: React.FC = () => {
  const testimonials = [
    {
      quote: 'Por fin una plataforma que me permite invertir en lo que creo. Ver mi dinero crecer mientras apoyo la energía limpia en México es increíble. La transparencia es total.',
      name: 'Sofía L.',
      title: 'Diseñadora UX, 29 años',
      image: 'https://picsum.photos/id/237/100/100'
    },
    {
      quote: 'Empecé con el monto mínimo por curiosidad y ya he invertido más. La plataforma es muy fácil de usar y los reportes son claros. Supera por mucho al banco.',
      name: 'Carlos M.',
      title: 'Ingeniero de Software, 34 años',
      image: 'https://picsum.photos/id/238/100/100'
    },
    {
      quote: 'Como médico, invertir en el sector salud con CRECEX tiene un doble significado para mí. Siento que mi capital realmente está trabajando para un bien mayor.',
      name: 'Dr. Ricardo G.',
      title: 'Médico General, 38 años',
      image: 'https://picsum.photos/id/239/100/100'
    }
  ];
  return (
    <section id="testimonios" className="py-20 bg-cresex-blue-light/50">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Historias de Éxito de Inversores</h2>
          <p className="mt-4 text-cresex-light-gray">Profesionales como tú ya están construyendo su futuro financiero con nosotros.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map(testimonial => (
            <TestimonialCard key={testimonial.name} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};