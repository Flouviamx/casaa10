"use client";

import { use, useState, useRef } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { properties } from "@/data/properties";
import Link from "next/link";
import { Maximize, BedDouble, Bath, Car, Sparkles, CircleDollarSign, MapPin, MessageCircle, Map, Home, Droplets, ArrowDownToLine, Flame, Zap, Milestone, UtensilsCrossed, Coffee, TreePine, Shirt, Dog, Sun, ShieldCheck, Check, ChevronLeft, ChevronRight, ArrowUpRight } from "lucide-react";

export default function PropertyDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = use(params);
  const propertyId = parseInt(resolvedParams.id);
  const property = properties.find(p => p.id === propertyId) || properties[0];
  const similarProperties = properties.filter(p => p.id !== property.id).slice(0, 4);

  const [formData, setFormData] = useState({ name: "", email: "", phone: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [activeImageIndex, setActiveImageIndex] = useState<number | null>(null);
  
  const carouselRef = useRef<HTMLDivElement>(null);
  const [activeSlide, setActiveSlide] = useState(0);

  const handleCarouselScroll = () => {
    if (!carouselRef.current || !carouselRef.current.children[0]) return;
    const scrollLeft = carouselRef.current.scrollLeft;
    const slideWidth = carouselRef.current.children[0].clientWidth + 24; // 24px is gap-6
    const newIndex = Math.round(scrollLeft / slideWidth);
    if (newIndex !== activeSlide && newIndex >= 0 && newIndex < 4) {
      setActiveSlide(newIndex);
    }
  };

  const scrollToSlide = (index: number) => {
    if (!carouselRef.current || !carouselRef.current.children[0]) return;
    const slideWidth = carouselRef.current.children[0].clientWidth + 24;
    carouselRef.current.scrollTo({
      left: slideWidth * index,
      behavior: 'smooth'
    });
    setActiveSlide(index);
  };
  
  const propertyPhotos = [
    "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=2000",
    "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=1000",
    "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1000",
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1000",
    "https://images.unsplash.com/photo-1600047509807-ba8f99c2cdde?auto=format&fit=crop&q=80&w=1000"
  ];
  const totalImages = propertyPhotos.length;
  const [formErrors, setFormErrors] = useState({ name: false, phone: false });

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const errors = {
      name: !formData.name.trim(),
      phone: !formData.phone.trim()
    };
    
    if (errors.name || errors.phone) {
      setFormErrors(errors);
      return;
    }
    
    setFormErrors({ name: false, phone: false });
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      const text = `Hola, me interesa agendar una visita para la propiedad: *${property.title}*.\n\nMis datos:\nNombre: ${formData.name}\nTeléfono: ${formData.phone}\nCorreo: ${formData.email}`;
      window.open(`https://wa.me/5215633585933?text=${encodeURIComponent(text)}`, "_blank");
    }, 800);
  };


  const handleNextImage = () => {
    if (activeImageIndex !== null && activeImageIndex < totalImages - 1) {
      setActiveImageIndex(activeImageIndex + 1);
    }
  };

  const handlePrevImage = () => {
    if (activeImageIndex !== null && activeImageIndex > 0) {
      setActiveImageIndex(activeImageIndex - 1);
    }
  };

  return (

    <main className="min-h-screen bg-slate-50 font-sans selection:bg-[#0f2146] selection:text-white">
      <Navbar />
      
      {/* Grid de Imágenes Estilo Apple / Airbnb Premium */}
      <section className="w-full max-w-7xl mx-auto px-6 pt-48 pb-12">
        <div className="flex items-center gap-2 text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-6">
          <Link href="/" className="hover:text-[#0f2146] transition-colors">Inicio</Link>
          <span>/</span>
          <Link href="/propiedades" className="hover:text-[#0f2146] transition-colors">Propiedades</Link>
          <span>/</span>
          <span className="text-[#0a152e]">{property.title}</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-4 h-[50vh] md:h-[60vh] relative">
          
          {/* Main Image Placeholder */}
          <div onClick={() => setActiveImageIndex(0)} className="md:col-span-2 md:row-span-2 bg-slate-300 relative group cursor-pointer rounded-2xl overflow-hidden shadow-sm flex items-center justify-center">
            <span className={`absolute top-4 left-4 px-4 py-2 rounded-full text-[10px] font-bold text-white uppercase tracking-wider ${property.color} shadow-sm z-20`}>
              {property.tag}
            </span>
            <span className="text-slate-400 font-medium text-lg uppercase tracking-widest">Foto Principal</span>
            <div className="absolute inset-0 bg-black/5 group-hover:bg-black/0 transition-colors duration-500 z-10" />
          </div>
          
          {/* Secondary Images Placeholders */}
          <div onClick={() => setActiveImageIndex(1)} className="hidden md:flex bg-slate-200 relative group cursor-pointer rounded-2xl overflow-hidden shadow-sm items-center justify-center">
             <span className="text-slate-400 font-medium text-xs uppercase tracking-widest">Foto 2</span>
          </div>
          <div onClick={() => setActiveImageIndex(2)} className="hidden md:flex bg-slate-200 relative group cursor-pointer rounded-2xl overflow-hidden shadow-sm items-center justify-center">
             <span className="text-slate-400 font-medium text-xs uppercase tracking-widest">Foto 3</span>
          </div>
          <div onClick={() => setActiveImageIndex(3)} className="hidden md:flex bg-slate-200 relative group cursor-pointer rounded-2xl overflow-hidden shadow-sm items-center justify-center">
             <span className="text-slate-400 font-medium text-xs uppercase tracking-widest">Foto 4</span>
          </div>
          <div onClick={() => setActiveImageIndex(4)} className="hidden md:flex bg-slate-200 relative group cursor-pointer rounded-2xl overflow-hidden shadow-sm items-center justify-center">
             <span className="text-slate-400 font-medium text-xs uppercase tracking-widest">Foto 5</span>
             <div className="absolute inset-0 bg-[#0a152e]/40 flex items-center justify-center group-hover:bg-[#0a152e]/60 transition-colors z-10 backdrop-blur-[2px]">
               <span className="text-white font-semibold flex items-center gap-2">
                 <Maximize className="w-5 h-5" />
                 Ver todas
               </span>
             </div>
          </div>
        </div>
      </section>

      {/* Contenido Principal */}
      <section className="w-full max-w-7xl mx-auto px-6 pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Detalles a la izquierda */}
          <div className="lg:col-span-8 flex flex-col">
            <h1 className="text-4xl md:text-5xl font-bold text-[#0a152e] mb-4 tracking-tight">
              {property.title}
            </h1>
            <p className="text-lg text-slate-500 mb-8 flex items-center gap-2">
              <svg className="w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
              {property.location}
            </p>
            <div className="w-full h-px bg-slate-200 mb-8" />

            {/* Grid de Métricas Limpio (Estructura Apple Typographic) */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-10 mb-16">
              
              <div className="flex flex-col">
                <Maximize className="w-6 h-6 text-slate-400 mb-4 stroke-[1.5]" />
                <div className="flex items-baseline gap-1.5 mb-1">
                  <span className="text-2xl md:text-3xl font-bold tracking-tight text-[#0a152e]">{property.sqft}</span>
                  <span className="text-base font-medium text-slate-400">m²</span>
                </div>
                <span className="text-sm font-medium text-slate-500">Superficie total</span>
              </div>

              <div className="flex flex-col">
                <BedDouble className="w-6 h-6 text-slate-400 mb-4 stroke-[1.5]" />
                <div className="flex items-baseline gap-1.5 mb-1">
                  <span className="text-2xl md:text-3xl font-bold tracking-tight text-[#0a152e]">{property.beds}</span>
                </div>
                <span className="text-sm font-medium text-slate-500">Habitaciones</span>
              </div>

              <div className="flex flex-col">
                <Bath className="w-6 h-6 text-slate-400 mb-4 stroke-[1.5]" />
                <div className="flex items-baseline gap-1.5 mb-1">
                  <span className="text-2xl md:text-3xl font-bold tracking-tight text-[#0a152e]">{property.baths}</span>
                </div>
                <span className="text-sm font-medium text-slate-500">Baños completos</span>
              </div>

              <div className="flex flex-col">
                <Car className="w-6 h-6 text-slate-400 mb-4 stroke-[1.5]" />
                <div className="flex items-baseline gap-1.5 mb-1">
                  <span className="text-2xl md:text-3xl font-bold tracking-tight text-[#0a152e]">{property.parking}</span>
                </div>
                <span className="text-sm font-medium text-slate-500">Estacionamientos</span>
              </div>

              <div className="flex flex-col">
                <Sparkles className="w-6 h-6 text-slate-400 mb-4 stroke-[1.5]" />
                <div className="flex items-baseline gap-1.5 mb-1">
                  <span className="text-2xl md:text-3xl font-bold tracking-tight text-[#0a152e]">Nuevo</span>
                </div>
                <span className="text-sm font-medium text-slate-500">Antigüedad</span>
              </div>

              <div className="flex flex-col">
                <CircleDollarSign className="w-6 h-6 text-slate-400 mb-4 stroke-[1.5]" />
                <div className="flex items-baseline gap-1.5 mb-1">
                  <span className="text-2xl md:text-3xl font-bold tracking-tight text-[#0a152e]">$0</span>
                </div>
                <span className="text-sm font-medium text-slate-500">Mantenimiento mensual</span>
              </div>

            </div>

            <div className="w-full h-px bg-slate-200 mb-12" />

            <h3 className="text-2xl font-bold text-[#0a152e] mb-6">Descripción de la propiedad</h3>
            <div className="prose prose-slate max-w-none text-slate-600 leading-relaxed space-y-4">
              <p>
                Este espectacular {property.propertyType} ubicado en {property.location} es una joya arquitectónica que combina el lujo moderno con la calidez del hogar. Con acabados de ultra lujo, pisos de mármol importado y una iluminación natural inigualable.
              </p>
              <p>
                Diseñado para quienes buscan un estilo de vida premium, cuenta con amplios espacios sociales ideales para recibir invitados, una cocina de diseñador completamente equipada, y terrazas con vistas panorámicas increíbles.
              </p>
            </div>

                        {/* Secciones de Características (Superficies, Servicios, Espacios, Adicionales) */}
            <div className="flex flex-col gap-12 mb-16">
              
              {/* Superficies */}
              <div>
                <h3 className="text-xl font-bold text-[#0a152e] mb-4 uppercase tracking-wide">Superficies</h3>
                <div className="w-full h-px bg-slate-200 mb-6" />
                <div className="grid grid-cols-2 md:grid-cols-3 gap-y-4 gap-x-4">
                  <div className="flex items-center gap-2 text-slate-700 font-medium text-sm">
                    <Map className="w-4 h-4 text-[#0f2146]/70" />
                    Terreno: 200 m²
                  </div>
                  <div className="flex items-center gap-2 text-slate-700 font-medium text-sm">
                    <Home className="w-4 h-4 text-[#0f2146]/70" />
                    Total Construido: 180 m²
                  </div>
                </div>
              </div>

              {/* Servicios */}
              <div>
                <h3 className="text-xl font-bold text-[#0a152e] mb-4 uppercase tracking-wide">Servicios</h3>
                <div className="w-full h-px bg-slate-200 mb-6" />
                <div className="grid grid-cols-2 md:grid-cols-3 gap-y-4 gap-x-4">
                  <div className="flex items-center gap-2 text-slate-700 font-medium text-sm">
                    <Droplets className="w-4 h-4 text-[#0f2146]/70" /> Agua de grifo
                  </div>
                  <div className="flex items-center gap-2 text-slate-700 font-medium text-sm">
                    <ArrowDownToLine className="w-4 h-4 text-[#0f2146]/70" /> Alcantarilla
                  </div>
                  <div className="flex items-center gap-2 text-slate-700 font-medium text-sm">
                    <Flame className="w-4 h-4 text-[#0f2146]/70" /> Gas Natural
                  </div>
                  <div className="flex items-center gap-2 text-slate-700 font-medium text-sm">
                    <Zap className="w-4 h-4 text-[#0f2146]/70" /> Electricidad
                  </div>
                  <div className="flex items-center gap-2 text-slate-700 font-medium text-sm">
                    <Milestone className="w-4 h-4 text-[#0f2146]/70" /> Pavimento
                  </div>
                </div>
              </div>

              {/* Espacios */}
              <div>
                <h3 className="text-xl font-bold text-[#0a152e] mb-4 uppercase tracking-wide">Espacios</h3>
                <div className="w-full h-px bg-slate-200 mb-6" />
                <div className="grid grid-cols-2 md:grid-cols-3 gap-y-4 gap-x-4">
                  <div className="flex items-center gap-2 text-slate-700 font-medium text-sm">
                    <UtensilsCrossed className="w-4 h-4 text-[#0f2146]/70" /> Cocina
                  </div>
                  <div className="flex items-center gap-2 text-slate-700 font-medium text-sm">
                    <Coffee className="w-4 h-4 text-[#0f2146]/70" /> Antecomedor
                  </div>
                  <div className="flex items-center gap-2 text-slate-700 font-medium text-sm">
                    <TreePine className="w-4 h-4 text-[#0f2146]/70" /> Jardín
                  </div>
                  <div className="flex items-center gap-2 text-slate-700 font-medium text-sm">
                    <Shirt className="w-4 h-4 text-[#0f2146]/70" /> Lavandería
                  </div>
                </div>
              </div>

              {/* Adicionales */}
              <div>
                <h3 className="text-xl font-bold text-[#0a152e] mb-4 uppercase tracking-wide">Adicionales</h3>
                <div className="w-full h-px bg-slate-200 mb-6" />
                <div className="grid grid-cols-2 md:grid-cols-3 gap-y-4 gap-x-4">
                  <div className="flex items-center gap-2 text-slate-700 font-medium text-sm">
                    <Dog className="w-4 h-4 text-[#0f2146]/70" /> Apto mascotas
                  </div>
                  <div className="flex items-center gap-2 text-slate-700 font-medium text-sm">
                    <Sun className="w-4 h-4 text-[#0f2146]/70" /> Luminoso
                  </div>
                  <div className="flex items-center gap-2 text-slate-700 font-medium text-sm">
                    <ShieldCheck className="w-4 h-4 text-[#0f2146]/70" /> Seguridad 24Hs
                  </div>
                </div>
              </div>

            </div>

            {/* Ubicación (Google Maps) */}
            <h3 className="text-2xl font-bold text-[#0a152e] mb-6">Ubicación</h3>
            <div className="w-full h-[400px] bg-slate-200 rounded-3xl overflow-hidden shadow-sm border border-slate-100">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3762.661168128456!2d-99.20014022394142!3d19.432607181848523!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d202027e0a4f5d%3A0xc6fb694a5e01b7a4!2sPolanco%2C%20Miguel%20Hidalgo%2C%20Ciudad%20de%20M%C3%A9xico%2C%20CDMX!5e0!3m2!1ses-419!2smx!4v1700000000000!5m2!1ses-419!2smx" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

          </div>

          {/* Sidebar / Formulario de Contacto (Sticky) - Apple Level */}
          <div className="lg:col-span-4 relative">
            <div className="sticky top-48 bg-white rounded-3xl border border-slate-100/50 shadow-[0_8px_30px_rgba(0,0,0,0.04)] p-8">
              
              <div className="mb-8">
                <span className="block text-xs text-slate-400 font-semibold uppercase tracking-widest mb-1">Precio de {property.operationType}</span>
                <span className="text-[32px] tracking-tight font-bold text-[#0a152e]">${property.price.toLocaleString("es-MX")}</span>
              </div>

              <div className="w-full h-[1px] bg-slate-100 mb-8" />

              <h4 className="text-xl tracking-tight font-semibold text-[#0a152e] mb-6">Agendar visita</h4>
              
              {isSuccess ? (
                <div className="flex flex-col items-center justify-center py-6 text-center animate-in fade-in zoom-in duration-500">
                  <div className="w-16 h-16 bg-emerald-100 text-emerald-500 rounded-full flex items-center justify-center mb-4">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  </div>
                  <h5 className="text-[#0a152e] font-bold text-lg mb-2">¡Solicitud enviada!</h5>
                  <p className="text-slate-500 text-sm leading-relaxed">Te estamos redirigiendo a WhatsApp para confirmar los detalles de tu visita.</p>
                  <button onClick={() => setIsSuccess(false)} className="mt-6 text-xs text-slate-400 font-semibold hover:text-[#0a152e] uppercase tracking-wider transition-colors">Enviar otra solicitud</button>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} noValidate className="flex flex-col gap-3">
                  
                  <div className="flex flex-col">
                    <input 
                      type="text" 
                      value={formData.name}
                      onChange={e => {
                        setFormData({...formData, name: e.target.value});
                        if (formErrors.name) setFormErrors({...formErrors, name: false});
                      }}
                      placeholder="Nombre completo" 
                      className={`w-full px-4 py-3.5 border rounded-2xl text-[13px] text-slate-900 focus:outline-none focus:ring-1 focus:bg-white transition-all ${
                        formErrors.name 
                          ? 'bg-red-50/50 border-red-400/50 placeholder:text-red-300 focus:ring-red-500' 
                          : 'bg-slate-50/50 border-slate-200/50 placeholder:text-slate-400 focus:ring-[#0a152e]'
                      }`}
                    />
                    {formErrors.name && <span className="text-red-500 text-[10px] font-bold uppercase tracking-wider mt-1.5 ml-2 animate-in fade-in slide-in-from-top-1">Requerido</span>}
                  </div>

                  <input 
                    type="email" 
                    value={formData.email}
                    onChange={e => setFormData({...formData, email: e.target.value})}
                    placeholder="Correo electrónico (Opcional)" 
                    className="w-full px-4 py-3.5 bg-slate-50/50 border border-slate-200/50 rounded-2xl text-[13px] text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-1 focus:ring-[#0a152e] focus:bg-white transition-all"
                  />
                  
                  <div className="flex flex-col">
                    <input 
                      type="tel" 
                      value={formData.phone}
                      onChange={e => {
                        setFormData({...formData, phone: e.target.value});
                        if (formErrors.phone) setFormErrors({...formErrors, phone: false});
                      }}
                      placeholder="Teléfono" 
                      className={`w-full px-4 py-3.5 border rounded-2xl text-[13px] text-slate-900 focus:outline-none focus:ring-1 focus:bg-white transition-all ${
                        formErrors.phone 
                          ? 'bg-red-50/50 border-red-400/50 placeholder:text-red-300 focus:ring-red-500' 
                          : 'bg-slate-50/50 border-slate-200/50 placeholder:text-slate-400 focus:ring-[#0a152e]'
                      }`}
                    />
                    {formErrors.phone && <span className="text-red-500 text-[10px] font-bold uppercase tracking-wider mt-1.5 ml-2 animate-in fade-in slide-in-from-top-1">Requerido</span>}
                  </div>
                  
                  <button type="submit" disabled={isSubmitting} className="w-full mt-4 bg-[#0a152e] text-white py-4 rounded-full font-semibold text-[13px] hover:bg-black transition-all active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed flex justify-center items-center">
                    {isSubmitting ? (
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
                    ) : "Solicitar información"}
                  </button>
                </form>
              )}

              <div className="mt-8 pt-6 border-t border-slate-100 flex flex-col items-center gap-4">
                <span className="text-[11px] text-slate-400 font-medium uppercase tracking-widest">Atención Inmediata</span>
                <div className="flex gap-3">
                  <a target="_blank" rel="noopener noreferrer" href={`https://wa.me/5215633585933?text=${encodeURIComponent("Hola, quiero más información sobre " + property.title)}`} className="flex items-center justify-center w-12 h-12 bg-slate-50 text-slate-400 rounded-full hover:bg-slate-100 hover:text-[#0a152e] transition-all cursor-pointer">
                    <svg className="w-[22px] h-[22px]" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/></svg>
                  </a>
                  <a href={`mailto:contacto@casaa10.com?subject=Interés en ${property.title}`} className="flex items-center justify-center w-12 h-12 bg-slate-50 text-slate-400 rounded-full hover:bg-slate-100 hover:text-[#0a152e] transition-all cursor-pointer">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                  </a>
                  <a href="tel:+5215633585933" className="flex items-center justify-center w-12 h-12 bg-slate-50 text-slate-400 rounded-full hover:bg-slate-100 hover:text-[#0a152e] transition-all cursor-pointer">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                  </a>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* CTA Banner Flotante */}
      <section className="max-w-[1400px] mx-auto px-6 md:px-12 py-12">
        <div className="w-full bg-slate-100 rounded-[40px] overflow-hidden flex flex-col md:flex-row items-stretch border border-slate-200/60 shadow-sm">
          <div className="p-10 md:p-16 flex flex-col justify-center w-full md:w-1/2">
            <span className="text-xs font-bold text-[#0a152e]/50 uppercase tracking-widest mb-4">Atención Personalizada</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0a152e] tracking-tight leading-tight mb-8">
              ¿Te gustaría estar informado sobre nuevas opciones de desarrollos y departamentos?
            </h2>
            <button className="self-start px-8 py-4 bg-[#0a152e] text-white rounded-full font-bold text-[13px] hover:bg-[#1a3668] transition-all shadow-[0_8px_20px_rgba(10,21,46,0.2)] active:scale-95">
              Contactar a un asesor
            </button>
          </div>
          <div className="w-full md:w-1/2 h-[300px] md:h-auto relative bg-slate-200 flex items-center justify-center">
             <span className="text-slate-400 font-bold uppercase tracking-widest">Imagen del Desarrollo</span>
          </div>
        </div>
      </section>

      {/* Propiedades Similares */}
      <section className="max-w-[1400px] mx-auto px-6 md:px-12 py-12 mb-20">
        <div className="flex justify-between items-end mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-[#0a152e] tracking-tight">Otros desarrollos como este</h2>
          <div className="hidden md:flex gap-3">
            <button className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:text-[#0a152e] hover:border-[#0a152e] transition-colors active:scale-95"><ChevronLeft className="w-5 h-5"/></button>
            <button className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:text-[#0a152e] hover:border-[#0a152e] transition-colors active:scale-95"><ChevronRight className="w-5 h-5"/></button>
          </div>
        </div>

        <div ref={carouselRef} onScroll={handleCarouselScroll} className="flex overflow-x-auto gap-6 pb-8 hide-scrollbar snap-x snap-mandatory scroll-smooth">
          {similarProperties.map((prop, idx) => (
            <Link href={`/propiedades/${prop.id}`} key={prop.id} className="snap-start shrink-0 w-[85vw] md:w-[420px] h-[540px] rounded-[32px] overflow-hidden relative group cursor-pointer border border-slate-100 shadow-sm block">
              <div className="absolute inset-0 bg-slate-200 flex items-center justify-center"><span className="text-slate-400 font-bold uppercase tracking-widest text-sm text-center px-4">Foto de<br/>{prop.title}</span></div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a152e]/80 via-[#0a152e]/10 to-transparent opacity-80"></div>
              
              {/* Tarjeta interna estilo Apple */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-xl rounded-2xl p-6 shadow-xl transform transition-transform duration-500 group-hover:-translate-y-2 border border-white/50">
                <h3 className="font-bold text-lg text-[#0a152e] mb-1 truncate">{prop.title}</h3>
                <p className="text-xs text-slate-500 mb-5 truncate">{prop.location}</p>
                <div className="flex justify-between items-end">
                  <div>
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-0.5">Desde</span>
                    <span className="font-bold text-[#0a152e]">${prop.price.toLocaleString('en-US')}</span>
                  </div>
                  <span className="text-xs font-bold text-blue-600 flex items-center gap-1 hover:text-blue-700 transition-colors">
                    ver desarrollo <ArrowUpRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
        
        {/* Paginación Dinámica Nivel Apple */}
        <div className="flex justify-center items-center gap-6 mt-8">
           <button 
             onClick={() => scrollToSlide(Math.max(0, activeSlide - 1))}
             disabled={activeSlide === 0}
             className="w-10 h-10 rounded-full flex items-center justify-center text-slate-400 hover:bg-slate-100 hover:text-[#0a152e] transition-colors active:scale-95 disabled:opacity-30 disabled:hover:bg-transparent"
           >
             <ChevronLeft className="w-5 h-5"/>
           </button>
           
           <div className="flex gap-2.5 items-center">
             {[0, 1, 2, 3].map(index => (
               <div 
                 key={index}
                 onClick={() => scrollToSlide(index)}
                 className={`rounded-full transition-all duration-500 cursor-pointer ${
                   activeSlide === index 
                     ? 'w-6 h-1.5 bg-[#0a152e]' 
                     : 'w-1.5 h-1.5 bg-slate-300 hover:bg-slate-400'
                 }`}
               ></div>
             ))}
           </div>

           <button 
             onClick={() => scrollToSlide(Math.min(3, activeSlide + 1))}
             disabled={activeSlide === 3}
             className="w-10 h-10 rounded-full flex items-center justify-center text-slate-400 hover:bg-slate-100 hover:text-[#0a152e] transition-colors active:scale-95 disabled:opacity-30 disabled:hover:bg-transparent"
           >
             <ChevronRight className="w-5 h-5"/>
           </button>
        </div>
        
      </section>

      {/* Lightbox Minimalista (Imagen Solitaria Flotante) */}
      {activeImageIndex !== null && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center animate-in fade-in duration-300">
          
          {/* Fondo oscuro puro absoluto */}
          <div 
            className="absolute inset-0 bg-black/10 backdrop-blur-[50px]" 
            onClick={() => setActiveImageIndex(null)}
          ></div>
          
          {/* Botón Cerrar Flotante */}
          <button 
            onClick={() => setActiveImageIndex(null)}
            className="absolute top-8 right-8 z-50 flex items-center justify-center w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full text-white backdrop-blur-md transition-all active:scale-95"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
          </button>

          {/* Flecha Izquierda */}
          {activeImageIndex > 0 && (
            <button 
              onClick={handlePrevImage}
              className="absolute left-4 md:left-12 z-50 flex items-center justify-center w-14 h-14 bg-white/10 hover:bg-white/20 rounded-full text-white backdrop-blur-md transition-all active:scale-95"
            >
              <svg className="w-6 h-6 -ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" /></svg>
            </button>
          )}

          {/* Imagen Flotante Centrada (Sin Textos) */}
          <div className="relative z-10 w-full max-w-6xl px-4 md:px-0 h-[60vh] md:h-[80vh] flex items-center justify-center animate-in zoom-in-95 duration-300" key={activeImageIndex}>
            <div className="w-full h-full bg-slate-300 rounded-[24px] md:rounded-[40px] overflow-hidden relative shadow-[0_20px_60px_rgba(0,0,0,0.5)] border border-white/10 flex items-center justify-center">
               <span className="text-slate-400 text-3xl font-bold uppercase tracking-widest">Espacio para Foto {activeImageIndex !== null ? activeImageIndex + 1 : ''}</span>
            </div>
          </div>

          {/* Flecha Derecha */}
          {activeImageIndex < totalImages - 1 && (
            <button 
              onClick={handleNextImage}
              className="absolute right-4 md:right-12 z-50 flex items-center justify-center w-14 h-14 bg-white/10 hover:bg-white/20 rounded-full text-white backdrop-blur-md transition-all active:scale-95"
            >
              <svg className="w-6 h-6 -mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" /></svg>
            </button>
          )}

        </div>
      )}
      
      <Footer />
    </main>
  );
}
