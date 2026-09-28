"use client";
import { motion } from 'framer-motion';
import { useRef } from 'react';
import { useScroll, useTransform } from 'framer-motion';
export default function FeaturedProperties() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ['start center', 'end center'] });
  const height = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);
  return (
      <section className="py-32 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-bold text-[#0f2146] mb-6">Propiedades Exclusivas</h2>
            <p className="text-slate-600 text-lg">
              Una casa puede verse increíble, pero eso no significa que sea la indicada. 
              Encontramos el espacio correcto para ti en las mejores zonas.
            </p>
          </div>
          <button className="text-[#0f2146] font-semibold border-b-2 border-[#0f2146] pb-1 hover:text-slate-600 hover:border-slate-600 transition-colors">
            Ver catálogo completo &rarr;
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {[
            { zone: "Pedregal", type: "Casa en Venta", id: 1 },
            { zone: "Coyoacán", type: "Casa en Venta", id: 2 },
            { zone: "Juriquilla", type: "Departamento en Renta", id: 3 },
            { zone: "Del Valle", type: "Oficinas en Venta", id: 4 },
            { zone: "Chimalistac", type: "Casa en Venta", id: 5 },
            { zone: "Valle de Bravo", type: "Casa de Descanso", id: 6 },
          ].map((prop, i) => (
            <motion.div 
              key={prop.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="w-full h-[400px] bg-slate-200 rounded-2xl mb-6 relative overflow-hidden flex items-center justify-center">
                <span className="text-slate-400 text-xs font-medium tracking-widest uppercase z-10">[ Foto {prop.zone} ]</span>
                <div className="absolute inset-0 bg-slate-300 group-hover:scale-105 transition-transform duration-700 ease-in-out" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
              </div>
              <div className="px-2">
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">{prop.type}</p>
                <h3 className="text-2xl font-bold text-[#0f2146] mb-2">{prop.zone}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

  );
}
