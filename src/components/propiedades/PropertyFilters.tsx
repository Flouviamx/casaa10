"use client";

import { FilterState } from "./Catalog";
import DualRangeSlider from "../ui/DualRangeSlider";

interface PropertyFiltersProps {
  filters: FilterState;
  setFilters: React.Dispatch<React.SetStateAction<FilterState>>;
  onClear: () => void;
}

export default function PropertyFilters({ filters, setFilters, onClear }: PropertyFiltersProps) {
  
  const updateFilter = (key: keyof FilterState, value: any) => {
    setFilters(prev => ({ ...prev, [key]: value }));
  };

  const formatPrice = (value: number) => {
    if (value >= 1000000) {
      return `$${(value / 1000000).toFixed(1)}M`;
    }
    return `$${(value / 1000).toFixed(0)}k`;
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-6 py-12">
      <h2 className="text-3xl md:text-4xl font-bold text-[#0a152e] mb-12 tracking-tight">
        Encuentra tu próximo patrimonio
      </h2>
      
      <div className="w-full h-px bg-slate-200 mb-8"></div>

      <div className="flex flex-col gap-6">
        
        {/* ROW 1: Operación, Tipo, Estado, Búsqueda */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-5 items-end">
          
          <div className="lg:col-span-2 flex flex-col gap-2">
            <label className="text-[11px] font-bold text-slate-500 uppercase tracking-widest">Operación</label>
            <div className="relative">
              <select 
                value={filters.operationType}
                onChange={(e) => updateFilter("operationType", e.target.value)}
                className="w-full appearance-none bg-white border border-slate-200 rounded-xl px-4 py-3 text-slate-700 focus:outline-none focus:border-[#0f2146] focus:ring-1 focus:ring-[#0f2146] transition-all text-sm font-medium shadow-sm cursor-pointer"
              >
                <option value="">Cualquiera</option>
                <option value="venta">Venta</option>
                <option value="renta">Renta</option>
              </select>
              <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2 flex flex-col gap-2">
            <label className="text-[11px] font-bold text-slate-500 uppercase tracking-widest">Tipo de inmueble</label>
            <div className="relative">
              <select 
                value={filters.propertyType}
                onChange={(e) => updateFilter("propertyType", e.target.value)}
                className="w-full appearance-none bg-white border border-slate-200 rounded-xl px-4 py-3 text-slate-700 focus:outline-none focus:border-[#0f2146] focus:ring-1 focus:ring-[#0f2146] transition-all text-sm font-medium shadow-sm cursor-pointer"
              >
                <option value="">Todos</option>
                <option value="casa">Casa</option>
                <option value="departamento">Departamento</option>
                <option value="terreno">Terreno</option>
                <option value="oficina">Oficina / Local</option>
              </select>
              <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3 flex flex-col gap-2">
            <label className="text-[11px] font-bold text-slate-500 uppercase tracking-widest">Estado</label>
            <div className="relative">
              <select 
                value={filters.stateId}
                onChange={(e) => updateFilter("stateId", e.target.value)}
                className="w-full appearance-none bg-white border border-slate-200 rounded-xl px-4 py-3 text-slate-700 focus:outline-none focus:border-[#0f2146] focus:ring-1 focus:ring-[#0f2146] transition-all text-sm font-medium shadow-sm cursor-pointer"
              >
                <option value="">Todo México</option>
                <option value="cdmx">Ciudad de México</option>
                <option value="merida">Mérida, Yucatán</option>
                <option value="queretaro">Querétaro, Qro.</option>
              </select>
              <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 flex flex-col gap-2">
            <label className="text-[11px] font-bold text-slate-500 uppercase tracking-widest">Búsqueda libre</label>
            <input 
              type="text" 
              value={filters.query}
              onChange={(e) => updateFilter("query", e.target.value)}
              placeholder="Escribe colonia, desarrollo o código postal..."
              className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-slate-700 focus:outline-none focus:border-[#0f2146] focus:ring-1 focus:ring-[#0f2146] transition-all text-sm font-medium shadow-sm placeholder:text-slate-300 placeholder:font-normal"
            />
          </div>

        </div>

        {/* ROW 2: Detalles y Precio */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-5 items-end">
          
          <div className="lg:col-span-2 flex flex-col gap-2">
            <label className="text-[11px] font-bold text-slate-500 uppercase tracking-widest">Recámaras</label>
            <div className="relative">
              <select 
                value={filters.beds}
                onChange={(e) => updateFilter("beds", e.target.value)}
                className="w-full appearance-none bg-white border border-slate-200 rounded-xl px-4 py-3 text-slate-700 focus:outline-none focus:border-[#0f2146] focus:ring-1 focus:ring-[#0f2146] transition-all text-sm font-medium shadow-sm cursor-pointer"
              >
                <option value="">Cualquiera</option>
                <option value="1">1 o más</option>
                <option value="2">2 o más</option>
                <option value="3">3 o más</option>
                <option value="4">4 o más</option>
              </select>
              <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2 flex flex-col gap-2">
            <label className="text-[11px] font-bold text-slate-500 uppercase tracking-widest">Baños</label>
            <div className="relative">
              <select 
                value={filters.baths}
                onChange={(e) => updateFilter("baths", e.target.value)}
                className="w-full appearance-none bg-white border border-slate-200 rounded-xl px-4 py-3 text-slate-700 focus:outline-none focus:border-[#0f2146] focus:ring-1 focus:ring-[#0f2146] transition-all text-sm font-medium shadow-sm cursor-pointer"
              >
                <option value="">Cualquiera</option>
                <option value="1">1 o más</option>
                <option value="2">2 o más</option>
                <option value="3">3 o más</option>
                <option value="4">4 o más</option>
              </select>
              <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 flex flex-col gap-3">
            <div className="flex justify-between items-center">
              <label className="text-[11px] font-bold text-slate-500 uppercase tracking-widest">Precio</label>
              <span className="text-xs text-[#0f2146] font-bold">
                {formatPrice(filters.minPrice)} - {filters.maxPrice >= 50000000 ? "$50M+" : formatPrice(filters.maxPrice)}
              </span>
            </div>
            
            <DualRangeSlider 
              min={0}
              max={50000000}
              step={500000} // Pasos de 500k
              value={[filters.minPrice, filters.maxPrice]}
              onChange={(val) => {
                updateFilter("minPrice", val[0]);
                updateFilter("maxPrice", val[1]);
              }}
            />
          </div>

          <div className="lg:col-span-4 flex gap-3 mt-4 lg:mt-0 lg:pl-4 justify-end h-full items-end">
            <button 
              onClick={onClear}
              className="px-6 py-3 bg-white border border-slate-300 text-slate-600 rounded-xl text-sm font-semibold hover:bg-slate-50 transition-colors"
            >
              Borrar
            </button>
            <button className="flex-1 lg:flex-none px-6 py-3 bg-[#0f2146] text-white rounded-xl text-sm font-semibold hover:bg-[#1a3668] transition-colors shadow-md active:scale-95 flex items-center justify-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
              Buscar
            </button>
          </div>

        </div>

      </div>

    </div>
  );
}
