"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const CITIES = ["Ciudad de México", "Mérida", "Querétaro"] as const;
type City = typeof CITIES[number];

interface Zone {
  name: string;
  imageLabel: string;
}

const ZONES_DATA: Record<City, Zone[]> = {
  "Ciudad de México": [
    { name: "Coyoacán", imageLabel: "Centro Histórico" },
    { name: "Pedregal", imageLabel: "Arquitectura Moderna" },
    { name: "Del Valle", imageLabel: "Parques y Vida" },
    { name: "Chimalistac", imageLabel: "Calles Empedradas" },
    { name: "Polanco", imageLabel: "Lujo y Exclusividad" },
  ],
  "Mérida": [
    { name: "Norte", imageLabel: "Alta Plusvalía" },
    { name: "Temozón", imageLabel: "Residencial Premium" },
    { name: "Altabrisa", imageLabel: "Conectividad" },
  ],
  "Querétaro": [
    { name: "Juriquilla", imageLabel: "Vida Exclusiva" },
    { name: "Zibatá", imageLabel: "Comunidad Planeada" },
    { name: "El Campanario", imageLabel: "Golf y Lujo" },
  ],
};

function ZoneCard({ zone }: { zone: Zone }) {
  return (
    <div className="w-[260px] md:w-[280px] h-[360px] rounded-2xl relative group shrink-0 snap-center md:snap-start cursor-pointer overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-500 mr-4">
      {/* Background Layer */}
      <div className="absolute inset-0 bg-slate-300 flex items-center justify-center p-4 text-center">
        <span className="text-slate-400/50 text-xs font-bold uppercase tracking-widest">
          [ {zone.imageLabel} ]
        </span>
      </div>
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Floating Info Box */}
      <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg transform group-hover:-translate-y-1 transition-transform duration-500 ease-out">
        <h3 className="text-lg font-bold text-[#0a152e] tracking-tight">{zone.name}</h3>
        <div className="flex items-center gap-1.5 mt-1.5 text-[#0f2146] group-hover:text-[#1a3668] transition-colors">
          <span className="text-[11px] font-bold uppercase tracking-wider">Ver desarrollos</span>
          <svg className="w-3 h-3 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 19L19 5M19 5v10M19 5H9" />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default function ZonesSelector() {
  const [activeCity, setActiveCity] = useState<City>("Ciudad de México");

  // Cálculo preciso del padding para alinear con el contenedor max-w-7xl
  // 50vw - 640px (mitad de 1280px) + 24px de padding = 50vw - 616px
  const paddingFormula = "max(24px, calc(50vw - 616px))";

  return (
    <section className="py-16 overflow-hidden">
      
      {/* Header Section */}
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-bold text-[#0f2146] mb-8 text-center tracking-tight"
        >
          Elige la zona de tu próximo patrimonio
        </motion.h2>

        {/* Tab Selector */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="w-full max-w-[100vw] px-6 flex justify-center mb-12"
        >
          <div className="bg-white border border-slate-200 rounded-full p-1 md:p-1.5 flex overflow-x-auto hide-scrollbar shadow-sm snap-x snap-mandatory">
            {CITIES.map(city => (
              <button 
                key={city}
                onClick={() => setActiveCity(city)}
                className={`shrink-0 whitespace-nowrap px-4 md:px-6 py-2 md:py-2.5 rounded-full text-[10px] md:text-xs font-bold uppercase tracking-wider md:tracking-[0.15em] transition-all duration-300 snap-center ${
                  activeCity === city
                    ? "bg-slate-100 text-[#0a152e] shadow-sm"
                    : "text-slate-400 hover:text-[#0a152e] hover:bg-slate-50"
                }`}
              >
                {city}
              </button>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Full Bleed Carousel Container */}
      <div className="w-full">
        <motion.div 
          key={activeCity}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          className="flex overflow-x-auto pb-12 pt-4 snap-x snap-mandatory hide-scrollbar"
          style={{ scrollPaddingLeft: paddingFormula }}
        >
          {/* Este div vacío simula el padding izquierdo pero permitiendo que el contenido flote visualmente al hacer scroll */}
          <div className="shrink-0" style={{ width: paddingFormula }}></div>

          {/* Cards */}
          {ZONES_DATA[activeCity].map((zone, idx) => (
            <ZoneCard key={idx} zone={zone} />
          ))}
          
          {/* Espaciador Derecho */}
          <div className="shrink-0" style={{ width: paddingFormula }}></div>
        </motion.div>

        {/* Action Button */}
        <div className="flex justify-center mt-6">
           <a href="/propiedades" className="px-8 py-3.5 rounded-full border border-[#0f2146] text-[#0f2146] font-semibold text-sm hover:bg-[#0f2146] hover:text-white transition-colors duration-300 shadow-sm active:scale-95">
             Ver todos los desarrollos
           </a>
        </div>
      </div>
      
      {/* Utils: Ocultar scrollbar pero mantener funcionalidad */}
      <style dangerouslySetInnerHTML={{__html: `
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}} />
    </section>
  );
}
