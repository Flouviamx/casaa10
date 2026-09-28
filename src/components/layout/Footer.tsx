"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import { Plus, Minus, ArrowUpRight } from "lucide-react";

const directoryData: Record<string, { title: string, links: string[] }[]> = {
  "Ciudad de México": [
    {
      title: "Desarrollos en Benito Juárez",
      links: ["Álamos", "Ciudad de los deportes", "Del Carmen", "General Anaya", "Mixcoac", "Nápoles", "Narvarte"]
    },
    {
      title: "Desarrollos en Miguel Hidalgo",
      links: ["Polanco", "Lomas de Chapultepec", "Anzures", "Bosques de las Lomas", "Escandón"]
    },
    {
      title: "Desarrollos en Coyoacán",
      links: ["Centro Histórico", "Pedregal", "Chimalistac", "Paseos de Taxqueña"]
    },
    {
      title: "Desarrollos en Azcapotzalco",
      links: ["El Recreo", "Clavería", "Nueva Santa María"]
    },
    {
      title: "Desarrollos en Cuauhtémoc",
      links: ["Roma Norte", "Condesa", "Juárez", "Cuauhtémoc", "Hipódromo"]
    }
  ],
  "Estado de México": [
    {
      title: "Desarrollos en Huixquilucan",
      links: ["Interlomas", "Bosque Real", "Lomas Country Club"]
    },
    {
      title: "Desarrollos en Naucalpan",
      links: ["Satélite", "Lomas Verdes", "Tecamachalco"]
    }
  ],
  "Mérida": [
    {
      title: "Desarrollos en el Norte",
      links: ["Temozón", "Altabrisa", "Montecristo", "Cholul", "Dzityá"]
    }
  ]
};

export default function Footer({ theme = 'dark' }: { theme?: 'dark' | 'light' }) {
  const [activeCity, setActiveCity] = useState("Ciudad de México");
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({});

  const toggleSection = (title: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [title]: !prev[title]
    }));
  };

  return (
    <footer className={`w-full relative z-20 mt-20 rounded-t-[40px] md:rounded-t-[80px] overflow-hidden font-sans transition-colors duration-500 ${theme === 'light' ? 'bg-white text-[#0a152e]' : 'bg-[#0a152e] text-white'}`}>
      
      {/* SECCIÓN DE DIRECTORIO SEO (Perfectamente integrada) */}
      <div className={`pt-24 pb-12 px-6 md:px-12 w-full max-w-[1400px] mx-auto relative z-10 border-b ${theme === 'light' ? 'border-slate-200' : 'border-[#1a2b4c]'}`}>
        <div className="max-w-6xl mx-auto">
          
          <h2 className="text-3xl md:text-5xl font-bold text-white text-center mb-10 tracking-tight">
            Desarrollos en Casa A10
          </h2>
          
          {/* Toggles de Ciudad */}
          <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-14">
            {Object.keys(directoryData).map(city => (
              <button 
                key={city}
                onClick={() => setActiveCity(city)}
                className={`px-6 py-3 rounded-full text-[13px] md:text-sm font-bold transition-all duration-300 ${
                  activeCity === city 
                    ? "bg-white text-[#0a152e] shadow-md scale-105" 
                    : "bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:bg-white/10"
                }`}
              >
                {city}
              </button>
            ))}
          </div>

          {/* Grid de Acordeones */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-4">
            {directoryData[activeCity].map((section) => {
              const isExpanded = expandedSections[section.title];
              
              return (
                <div key={section.title} className="border-b border-white/10 pb-2">
                  <button 
                    onClick={() => toggleSection(section.title)}
                    className="w-full flex items-center justify-between py-4 group"
                  >
                    <span className="text-sm md:text-[15px] font-medium text-slate-200 group-hover:text-white transition-colors">
                      {section.title}
                    </span>
                    <div className={`w-8 h-8 rounded-full border flex items-center justify-center transition-all duration-300 ${
                      isExpanded 
                        ? 'bg-white border-white text-[#0a152e]' 
                        : 'bg-transparent border-white/20 text-slate-400 group-hover:border-white group-hover:text-white'
                    }`}>
                      {isExpanded ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                    </div>
                  </button>
                  
                  {/* Contenido Expandible */}
                  <div 
                    className={`overflow-hidden transition-all duration-500 ease-in-out ${
                      isExpanded ? "max-h-[800px] opacity-100 mb-6 mt-2" : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="flex flex-col gap-1 mb-6">
                      {section.links.map(link => (
                        <a 
                          key={link} 
                          href="#" 
                          className="flex items-center justify-between py-2.5 text-[13px] text-slate-400 hover:text-white hover:bg-white/5 px-4 -mx-4 rounded-lg transition-colors group/link"
                        >
                          <span>Desarrollos en {link}</span>
                          <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover/link:opacity-100 transition-opacity" />
                        </a>
                      ))}
                    </div>
                    
                    <div className="flex flex-col gap-3">
                      <a href="/propiedades" className="w-full py-3.5 px-4 rounded-full border border-white/20 text-[13px] font-bold text-slate-300 text-center hover:bg-white/10 hover:text-white transition-colors">
                        Ver todos los desarrollos en {section.title.replace("Desarrollos en ", "")}
                      </a>
                      <a href="/propiedades" className="w-full py-3.5 px-4 rounded-full bg-white text-[13px] font-bold text-[#0a152e] text-center hover:bg-slate-200 transition-colors shadow-sm">
                        Ver todos los desarrollos en {activeCity}
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          
        </div>
      </div>

      {/* SECCIÓN PRINCIPAL DEL FOOTER */}
      <div className="px-6 md:px-12 pt-16 pb-12 max-w-[1400px] mx-auto">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 pb-20 border-b border-[#1a2b4c]">
          
          {/* LEFT SIDE (Logo, Big Text, Newsletter) - Spans 5 cols */}
          <div className="lg:col-span-5 flex flex-col gap-8 lg:pr-8">
            {/* Logo */}
            <div>
              <Image 
                src="/logo-transparent.png" 
                alt="CASA A10" 
                width={120} 
                height={120} 
                className="brightness-0 invert object-contain"
              />
            </div>
            
            {/* Big Question */}
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight text-white max-w-md leading-[1.1]">
              ¿Buscas estructurar tu patrimonio inmobiliario?
            </h3>

            {/* Newsletter (Kept as requested) */}
            <div className="flex flex-col gap-3 mt-4">
              <p className="text-sm text-slate-400">Déjanos tu correo para recibir oportunidades exclusivas.</p>
              <div className="relative flex items-center w-full max-w-md">
                <input 
                  type="email" 
                  placeholder="Correo electrónico"
                  className="w-full bg-white/5 hover:bg-white/10 transition-colors border border-white/10 rounded-full py-3.5 pl-6 pr-12 text-sm text-white focus:outline-none focus:ring-1 focus:ring-slate-400 placeholder:text-slate-400"
                />
                <button className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center bg-white/10 hover:bg-white/20 transition-colors rounded-full text-white">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                </button>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE (Links Columns) - Spans 7 cols */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-10 lg:pl-10 pt-4">
            
            {/* Col 1 */}
            <div className="flex flex-col gap-5">
              <h4 className="text-sm text-white font-semibold tracking-wide">Portafolio</h4>
              <div className="flex flex-col gap-3.5">
                <a href="#" className="text-sm text-slate-400 hover:text-white transition-colors">Desarrollos CDMX</a>
                <a href="#" className="text-sm text-slate-400 hover:text-white transition-colors">Desarrollos Mérida</a>
                <a href="#" className="text-sm text-slate-400 hover:text-white transition-colors">Residencial Premium</a>
                <a href="#" className="text-sm text-slate-400 hover:text-white transition-colors">Terrenos de Inversión</a>
              </div>
            </div>
            
            {/* Col 2 */}
            <div className="flex flex-col gap-5">
              <h4 className="text-sm text-white font-semibold tracking-wide">La Empresa</h4>
              <div className="flex flex-col gap-3.5">
                <a href="#" className="text-sm text-slate-400 hover:text-white transition-colors">Nuestra Filosofía</a>
                <a href="#" className="text-sm text-slate-400 hover:text-white transition-colors">Metodología A10</a>
                <a href="#" className="text-sm text-slate-400 hover:text-white transition-colors">Asesores Patrimoniales</a>
                <a href="#" className="text-sm text-slate-400 hover:text-white transition-colors">Alianzas Legales</a>
              </div>
            </div>

            {/* Col 3 */}
            <div className="flex flex-col gap-5">
              <h4 className="text-sm text-white font-semibold tracking-wide">Contacto</h4>
              <div className="flex flex-col gap-3.5">
                <a href="tel:+5215633585933" className="text-sm text-slate-400 hover:text-white transition-colors">+52 1 56 3358 5933</a>
                <a href="mailto:contacto@casaa10.com" className="text-sm text-slate-400 hover:text-white transition-colors">contacto@casaa10.com</a>
                <p className="text-sm text-slate-400 leading-relaxed pr-4">
                  Paseo de la Reforma 250.<br />
                  Col. Juárez, Cuauhtémoc,<br />
                  CDMX.
                </p>
                
                {/* Redes */}
                <div className="mt-2">
                  <h4 className="text-sm text-white font-semibold tracking-wide mb-3">Síguenos</h4>
                  <div className="flex gap-4">
                    <a href="#" className="text-slate-400 hover:text-white transition-colors">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" /></svg>
                    </a>
                    <a href="#" className="text-slate-400 hover:text-white transition-colors">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" /></svg>
                    </a>
                    <a href="#" className="text-slate-400 hover:text-white transition-colors">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" /></svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
          </div>
        </div>

        {/* BOTTOM COPYRIGHT */}
        <div className="pt-8 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4">
            <p className="text-xs text-slate-400">
              © 2026 CASA A10 Grupo Inmobiliario. Todos los derechos reservados.
            </p>
            <span className="hidden sm:inline text-[#1a2b4c]">|</span>
            <p className="text-[10px] text-slate-500 font-medium tracking-wide">
              Powered by <a href="https://flouvia.com" target="_blank" rel="noopener noreferrer" className="text-slate-400 font-bold hover:text-white transition-colors">flouvia</a>
            </p>
          </div>
          
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            <a href="#" className="text-[11px] text-slate-400 hover:text-white transition-colors font-medium underline underline-offset-4 decoration-slate-600">Política de privacidad</a>
            <a href="#" className="text-[11px] text-slate-400 hover:text-white transition-colors font-medium underline underline-offset-4 decoration-slate-600">Términos de servicio</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
