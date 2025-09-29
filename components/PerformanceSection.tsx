import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { year: 'Inicio', cresex: 1200, tradicional: 1200 },
  { year: 'Año 1', cresex: 1380, tradicional: 1248 },
  { year: 'Año 2', cresex: 1587, tradicional: 1298 },
  { year: 'Año 3', cresex: 1825, tradicional: 1350 },
  { year: 'Año 4', cresex: 2100, tradicional: 1404 },
  { year: 'Año 5', cresex: 2415, tradicional: 1460 },
];

const CustomTooltip: React.FC<any> = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    const cresexValue = payload[0].value;
    const tradicionalValue = payload[1].value;

    return (
      <div className="bg-cresex-blue-light p-4 rounded-lg border border-cresex-gray/50 shadow-lg w-64 text-sm">
        <p className="label font-bold text-white text-base mb-2">{`Proyección para: ${label}`}</p>
        <div className="space-y-3">
            <div>
                <p className="flex justify-between items-center">
                    <span className="text-cresex-teal font-semibold">CRECEX</span>
                    <span className="text-white font-bold">{`$${cresexValue.toLocaleString('es-MX')}`}</span>
                </p>
                <p className="text-xs text-cresex-light-gray/80 mt-1">Proyección con rendimiento anual del 18%.</p>
            </div>
            <div>
                 <p className="flex justify-between items-center">
                    <span className="text-cresex-light-gray font-semibold">Ahorro Tradicional</span>
                    <span className="text-white font-bold">{`$${tradicionalValue.toLocaleString('es-MX')}`}</span>
                </p>
                <p className="text-xs text-cresex-light-gray/80 mt-1">Estimado con rendimiento anual del 7.20%.</p>
            </div>
        </div>
        {label !== 'Inicio' && (
             <div className="mt-3 pt-3 border-t border-cresex-gray/30">
                <p className="text-xs text-cresex-white flex justify-between">
                    <span>Diferencia de Rendimiento:</span>
                    <span className="font-bold text-cresex-teal ml-1">
                       +$${(cresexValue - tradicionalValue).toLocaleString('es-MX')}
                    </span>
                </p>
             </div>
        )}
      </div>
    );
  }
  return null;
};

export const PerformanceSection: React.FC = () => {
  return (
    <section id="rendimiento" className="py-20 bg-cresex-blue">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="md:pr-10">
            <h2 className="text-3xl md:text-4xl font-bold text-white">Observa el Potencial de Crecimiento</h2>
            <p className="mt-4 text-cresex-light-gray mb-6">
              Esta gráfica ilustra el rendimiento potencial de una inversión inicial de $1,200 MXN con CRECEX en comparación con una cuenta de ahorro tradicional. Los resultados se basan en proyecciones y no garantizan rendimientos futuros.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="w-2 h-2 bg-cresex-teal rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span className="text-cresex-white"><strong>CRECEX:</strong> Proyección basada en un rendimiento anual promedio del 18%.</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-cresex-gray rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span className="text-cresex-white"><strong>Ahorro Tradicional:</strong> Estimado con un rendimiento anual promedio del 7.20%.</span>
              </li>
            </ul>
          </div>
          <div className="w-full h-72 md:h-80 bg-cresex-blue-light p-4 rounded-xl border border-cresex-gray/30">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={data} margin={{ top: 5, right: 20, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#415A77" strokeOpacity={0.5} />
                <XAxis dataKey="year" stroke="#E0E1DD" />
                <YAxis stroke="#E0E1DD" tickFormatter={(value) => `$${value}`} />
                <Tooltip content={<CustomTooltip />} />
                <Legend />
                <Line type="monotone" dataKey="cresex" name="CRECEX" stroke="#00F5D4" strokeWidth={3} dot={{ r: 5 }} activeDot={{ r: 8 }} />
                <Line type="monotone" dataKey="tradicional" name="Ahorro Tradicional" stroke="#778DA9" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </section>
  );
};