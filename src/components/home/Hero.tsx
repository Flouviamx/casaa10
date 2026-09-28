"use client";
import { motion } from "framer-motion";

interface HeroProps {
  isSearching: boolean;
  setIsSearching: (val: boolean) => void;
}

export default function Hero({ isSearching, setIsSearching }: HeroProps) {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden pt-28 pb-10">
      {/* Background Image Placeholder */}
      <div className="absolute inset-0 bg-slate-400 z-0 flex items-end justify-start p-6 md:p-12">
        <span className="text-slate-200/50 font-medium tracking-widest uppercase text-xs md:text-sm">[ Espacio para fotografía arquitectónica ]</span>
      </div>
      {/* Overlay oscuro */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a152e]/95 via-[#0f2146]/80 to-[#142d5e]/70 z-10" />
      
      <div className="relative z-20 w-full max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-8 mt-12 lg:mt-0">
        
        {/* Texto Principal (Izquierda) */}
        <div className="text-center lg:text-left text-white flex-1 w-full lg:max-w-2xl">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl md:text-7xl lg:text-[80px] font-bold tracking-tighter mb-8 text-white leading-[1.05]"
          >
            Construimos<br className="hidden lg:block"/> Patrimonios
          </motion.h1>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="flex flex-col md:flex-row items-center lg:items-center justify-center lg:justify-start gap-3 md:gap-5 text-[11px] md:text-xs text-slate-300 font-semibold tracking-[0.2em] uppercase"
          >
            <span>Estrategia</span>
            <span className="hidden md:inline text-slate-500">•</span>
            <span>Respaldo legal</span>
            <span className="hidden md:inline text-slate-500">•</span>
            <span>Visión financiera</span>
          </motion.div>
        </div>

        {/* Tarjeta de Búsqueda (Derecha) */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="w-full max-w-[380px] bg-white rounded-[24px] p-8 shadow-[0_20px_40px_rgba(0,0,0,0.2)] text-slate-900 mx-auto lg:mx-0 shrink-0 hover:-translate-y-2 hover:shadow-[0_40px_80px_rgba(0,0,0,0.3)] transition-all duration-700 ease-out"
        >
          <p className="text-[#0f2146] font-medium text-[11px] uppercase tracking-wider mb-3">Desarrollos en CDMX y Mérida</p>
          <h2 className="text-2xl md:text-[26px] font-bold mb-6 leading-tight text-[#1a1a1a] tracking-tight">
            Encuentra tu nuevo hogar donde siempre soñaste
          </h2>
          
          <div className="space-y-3.5">
            {/* Select Ciudad */}
            <div className="relative group/select">
              <select className="w-full appearance-none border border-slate-200 rounded-lg px-4 py-3 text-slate-700 focus:outline-none focus:border-[#0f2146] focus:ring-1 focus:ring-[#0f2146] transition-all duration-300 bg-white font-medium text-sm group-hover/select:border-slate-400 group-hover/select:shadow-sm cursor-pointer">
                <option>Ciudad de México</option>
                <option>Estado de México</option>
                <option>Querétaro</option>
              </select>
              <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none transition-transform duration-300 group-hover/select:translate-x-0.5">
                <svg className="w-4 h-4 text-slate-400 group-hover/select:text-[#0f2146] transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
              </div>
            </div>

            {/* Separador O */}
            <div className="flex items-center justify-center gap-4 py-1">
              <div className="h-px bg-slate-200 flex-1"></div>
              <span className="text-[9px] text-slate-400 font-bold uppercase tracking-widest">O</span>
              <div className="h-px bg-slate-200 flex-1"></div>
            </div>

            {/* Select Desarrollo */}
            <div className="relative group/select">
              <select className="w-full appearance-none border border-slate-200 rounded-lg px-4 py-3 text-slate-700 focus:outline-none focus:border-[#0f2146] focus:ring-1 focus:ring-[#0f2146] transition-all duration-300 bg-white font-medium text-sm group-hover/select:border-slate-400 group-hover/select:shadow-sm cursor-pointer">
                <option>Selecciona un desarrollo</option>
                <option>Desarrollo Pedregal</option>
                <option>Torre Coyoacán</option>
              </select>
              <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none transition-transform duration-300 group-hover/select:translate-x-0.5">
                <svg className="w-4 h-4 text-slate-400 group-hover/select:text-[#0f2146] transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
              </div>
            </div>

            {/* Select Zona */}
            <div className="relative group/select">
              <select className="w-full appearance-none border border-slate-200 rounded-lg px-4 py-3 text-slate-700 focus:outline-none focus:border-[#0f2146] focus:ring-1 focus:ring-[#0f2146] transition-all duration-300 bg-white font-medium text-sm group-hover/select:border-slate-400 group-hover/select:shadow-sm cursor-pointer">
                <option>Selecciona una zona</option>
                <option>Pedregal</option>
                <option>Coyoacán</option>
                <option>Juriquilla</option>
                <option>Del Valle</option>
              </select>
              <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none transition-transform duration-300 group-hover/select:translate-x-0.5">
                <svg className="w-4 h-4 text-slate-400 group-hover/select:text-[#0f2146] transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
              </div>
            </div>

            {/* Boton */}
            <button 
              onClick={() => setIsSearching(true)}
              className="w-full flex justify-center items-center h-[52px] bg-[#032b43] hover:bg-[#043654] text-white rounded-[14px] font-semibold text-[15px] transition-all duration-200 mt-2 shadow-[0_4px_14px_rgba(3,43,67,0.15)] hover:shadow-[0_6px_20px_rgba(3,43,67,0.25)] active:scale-[0.97]"
            >
              {isSearching ? (
                <svg className="animate-spin h-5 w-5 text-white/70" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
              ) : (
                "Buscar"
              )}
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
