
import React from 'react';

const SectorCard: React.FC<{ 
  icon: React.ReactElement; 
  title: string; 
  description: string; 
  subsectors: string[];
  whyInvest: string;
}> = ({ icon, title, description, subsectors, whyInvest }) => (
  <div className="bg-cresex-blue rounded-xl p-6 border-2 border-transparent hover:border-cresex-teal transition-all duration-300 shadow-lg hover:shadow-xl">
    <div className="flex items-start space-x-4">
      <div className="text-cresex-teal bg-cresex-blue-light p-3 rounded-full flex-shrink-0">
        {icon}
      </div>
      <div className="flex-1">
        <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
        <p className="text-cresex-light-gray mb-4 leading-relaxed">{description}</p>
        
        <div className="mb-4">
          <h4 className="text-cresex-teal font-semibold mb-2">Subsectores clave:</h4>
          <ul className="text-sm text-cresex-light-gray space-y-1">
            {subsectors.map((subsector, index) => (
              <li key={index} className="flex items-center">
                <span className="w-1.5 h-1.5 bg-cresex-teal rounded-full mr-2 flex-shrink-0"></span>
                {subsector}
              </li>
            ))}
          </ul>
        </div>
        
        <div className="bg-cresex-blue-light/30 p-3 rounded-lg">
          <h4 className="text-cresex-teal font-semibold mb-1">Por qué invertir:</h4>
          <p className="text-sm text-cresex-white">{whyInvest}</p>
        </div>
      </div>
    </div>
  </div>
);

export const InvestmentSectors: React.FC = () => {
  const sectors = [
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>,
      title: '🧠 Tecnologías de la Información',
      description: 'El motor invisible del siglo XXI. La inversión en TI no es solo apostar por software o servidores: es invertir en la columna vertebral de la economía moderna.',
      subsectors: ['Inteligencia Artificial', 'Big Data', 'Ciberseguridad', 'Automatización', 'Servicios en la nube'],
      whyInvest: 'La digitalización es transversal a todos los sectores. Se espera un crecimiento compuesto anual superior al 20% en muchas áreas de TI.'
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>,
      title: '☀️ Energías Renovables',
      description: 'Donde el sol y el viento generan valor. La transición energética ya no es una opción, es una obligación. Las energías limpias están recibiendo apoyo masivo.',
      subsectors: ['Solar', 'Eólica', 'Almacenamiento energético', 'Hidrógeno verde'],
      whyInvest: 'La transición energética es irreversible. Gobiernos y empresas están comprometidos con la descarbonización.'
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>,
      title: '🏥 Salud y Bienestar',
      description: 'El único sector que nunca duerme. La salud es una necesidad permanente. Con el envejecimiento poblacional y la biotecnología, este sector ofrece estabilidad y crecimiento.',
      subsectors: ['Telemedicina', 'Biotecnología', 'Dispositivos médicos', 'Fisioterapia', 'Salud preventiva'],
      whyInvest: 'El envejecimiento poblacional y la cultura del autocuidado están impulsando una demanda creciente y constante.'
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
      </svg>,
      title: '🚚 Logística y Transporte Inteligente',
      description: 'El nuevo mapa del comercio global. La globalización está mutando. El nearshoring y la automatización están redefiniendo cómo se mueve el mundo.',
      subsectors: ['Infraestructura', 'Automatización de almacenes', 'Movilidad eléctrica', 'Drones de reparto'],
      whyInvest: 'El auge del comercio electrónico y el nearshoring están redefiniendo las cadenas de suministro.'
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>,
      title: '🌾 Agrotecnología',
      description: 'Sembrando innovación para alimentar al mundo. La seguridad alimentaria es uno de los mayores desafíos del siglo. La agrotecnología está revolucionando la producción.',
      subsectors: ['Agricultura vertical', 'Proteínas alternativas', 'Trazabilidad alimentaria'],
      whyInvest: 'La seguridad alimentaria y la eficiencia agrícola son prioridades globales.'
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>,
      title: '🎓 Educación Digital',
      description: 'El conocimiento como activo financiero. La educación ya no está confinada a aulas físicas. Plataformas de e-learning están creando un nuevo ecosistema de aprendizaje.',
      subsectors: ['Plataformas de e-learning', 'Certificaciones técnicas', 'Formación en habilidades digitales'],
      whyInvest: 'La reconfiguración del mercado laboral exige aprendizaje continuo y adaptabilidad.'
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>,
      title: '🏗️ Infraestructura Verde',
      description: 'Construyendo ciudades que respiran. La urbanización sostenible es una tendencia irreversible. Desde edificios inteligentes hasta materiales ecológicos.',
      subsectors: ['Vivienda sustentable', 'Urbanismo inteligente', 'Materiales ecológicos'],
      whyInvest: 'La urbanización y el cambio climático están impulsando soluciones más eficientes y resilientes.'
    }
  ];

  return (
    <section id="sectores" className="py-20 bg-cresex-blue-light/50">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Sectores con Alto Potencial de Crecimiento y Seguridad</h2>
          <p className="text-lg text-cresex-light-gray leading-relaxed">
            Diversificamos tu inversión en industrias estratégicas que combinan rentabilidad con impacto positivo. 
            Cada sector está respaldado por tendencias globales irreversibles y demanda creciente.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {sectors.map((sector, index) => (
            <SectorCard key={index} {...sector} />
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <div className="bg-cresex-blue rounded-xl p-8 border border-cresex-teal/20">
            <h3 className="text-2xl font-bold text-cresex-teal mb-4">💡 Tip para tu portafolio</h3>
            <p className="text-cresex-light-gray leading-relaxed max-w-3xl mx-auto">
              Puedes complementar tu análisis observando cómo estos sectores se manifiestan en el día a día: 
              desde el uso de apps médicas, paneles solares en negocios locales, hasta el crecimiento de servicios 
              de entrega y educación en línea. La clave está en identificar las empresas que lideran estas transformaciones.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
