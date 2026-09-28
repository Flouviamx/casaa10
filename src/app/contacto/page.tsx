"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Mail, Phone, MapPin, MessageCircle, ArrowRight, Check } from "lucide-react";
import { useState } from "react";

export default function ContactoPage() {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });
  const [formErrors, setFormErrors] = useState({ name: false, email: false, message: false });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const errors = {
      name: !formData.name.trim(),
      email: !formData.email.trim(),
      message: !formData.message.trim()
    };
    
    if (errors.name || errors.email || errors.message) {
      setFormErrors(errors);
      return;
    }
    
    setFormErrors({ name: false, email: false, message: false });
    setIsSubmitting(true);
    
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1000);
  };

  return (
    <main className="min-h-screen bg-slate-50 font-sans selection:bg-[#0a152e] selection:text-white flex flex-col">
      <Navbar />
      
      {/* Main Content */}
      <section className="max-w-[1400px] mx-auto px-6 md:px-12 pt-[160px] md:pt-[180px] pb-20 flex-1 w-full">
        
        <div className="mb-16 md:mb-24">
          <span className="text-xs font-bold text-[#0a152e]/50 uppercase tracking-widest mb-4 block">Hablemos</span>
          <h1 className="text-4xl md:text-6xl font-bold text-[#0a152e] tracking-tight leading-tight max-w-3xl">
            Comienza a construir tu patrimonio.
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          
          {/* Columna Izquierda: Info de Contacto */}
          <div className="lg:col-span-5 flex flex-col gap-12">
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-8">
              <div className="flex flex-col gap-4 bg-white p-8 rounded-[32px] shadow-sm border border-slate-100 hover:shadow-lg transition-shadow duration-500">
                <div className="w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center shrink-0 mb-2">
                  <Mail className="w-5 h-5 text-[#0a152e]" />
                </div>
                <div>
                  <h3 className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-1">Correo</h3>
                  <a href="mailto:contacto@casaa10.com" className="text-[#0a152e] text-lg font-medium hover:text-slate-600 transition-colors">contacto@casaa10.com</a>
                </div>
              </div>
              
              <div className="flex flex-col gap-4 bg-white p-8 rounded-[32px] shadow-sm border border-slate-100 hover:shadow-lg transition-shadow duration-500">
                <div className="w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center shrink-0 mb-2">
                  <Phone className="w-5 h-5 text-[#0a152e]" />
                </div>
                <div>
                  <h3 className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-1">Teléfono</h3>
                  <a href="tel:+5215633585933" className="text-[#0a152e] text-lg font-medium hover:text-slate-600 transition-colors">+52 1 56 3358 5933</a>
                </div>
              </div>

              <div className="flex flex-col gap-4 bg-white p-8 rounded-[32px] shadow-sm border border-slate-100 hover:shadow-lg transition-shadow duration-500 sm:col-span-2 lg:col-span-1">
                <div className="w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center shrink-0 mb-2">
                  <MapPin className="w-5 h-5 text-[#0a152e]" />
                </div>
                <div>
                  <h3 className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-1">Oficinas Centrales</h3>
                  <p className="text-[#0a152e] text-lg font-medium leading-relaxed">
                    Polanco, Miguel Hidalgo<br/>Ciudad de México, CDMX
                  </p>
                </div>
              </div>
            </div>

            {/* Banner Asesor */}
            <div className="bg-gradient-to-br from-[#0a152e] to-[#142a5c] rounded-[32px] p-10 text-white relative overflow-hidden shadow-2xl hover:scale-[1.02] transition-transform duration-500">
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-400/20 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/3"></div>
              <h3 className="text-2xl font-bold mb-3 relative z-10 tracking-tight">¿Atención rápida?</h3>
              <p className="text-blue-100 mb-8 relative z-10 leading-relaxed text-sm font-light">
                Contáctanos vía WhatsApp y un asesor especializado te responderá en minutos.
              </p>
              <button 
                onClick={() => window.open(`https://wa.me/5215633585933?text=${encodeURIComponent("Hola, me gustaría recibir asesoría de Casa A10.")}`, "_blank")}
                className="w-full bg-white text-[#0a152e] py-4 rounded-2xl font-bold text-[13px] hover:bg-slate-50 transition-all active:scale-[0.98] flex justify-center items-center gap-2 relative z-10 shadow-lg"
              >
                <MessageCircle className="w-4 h-4" />
                Contactar por WhatsApp
              </button>
            </div>

          </div>

          {/* Columna Derecha: Formulario (Apple Style Masterpiece) */}
          <div className="lg:col-span-7">
            <div className="bg-white border border-slate-100 rounded-[40px] p-8 md:p-14 shadow-xl shadow-slate-200/50 h-full flex flex-col justify-center relative overflow-hidden">
              
              {!isSuccess ? (
                <div className="relative z-10 animate-in fade-in duration-700">
                  <h2 className="text-3xl md:text-4xl font-bold text-[#0a152e] tracking-tight mb-3">Envíanos un mensaje</h2>
                  <p className="text-slate-500 text-sm md:text-base mb-12 font-light">Nos pondremos en contacto contigo lo antes posible.</p>
                  
                  <form onSubmit={handleFormSubmit} noValidate className="flex flex-col gap-6">
                    
                    <div className="flex flex-col md:flex-row gap-6">
                      <div className="flex flex-col gap-2 flex-1 relative group">
                        <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest pl-1">Nombre Completo</label>
                        <input 
                          type="text" 
                          value={formData.name}
                          onChange={e => {
                            setFormData({...formData, name: e.target.value});
                            if (formErrors.name) setFormErrors({...formErrors, name: false});
                          }}
                          className={`w-full px-5 py-4 bg-slate-50/50 border rounded-2xl text-[14px] text-[#0a152e] focus:outline-none focus:ring-4 transition-all duration-300 ${
                            formErrors.name ? 'border-red-400 focus:ring-red-500/20' : 'border-slate-200 focus:border-[#0a152e] focus:ring-[#0a152e]/10 hover:border-slate-300'
                          }`}
                        />
                        {formErrors.name && <span className="absolute -bottom-5 left-2 text-red-500 text-[10px] font-bold uppercase tracking-wider animate-in fade-in slide-in-from-top-1">Requerido</span>}
                      </div>

                      <div className="flex flex-col gap-2 flex-1 relative group">
                        <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest pl-1">Teléfono (Opcional)</label>
                        <input 
                          type="tel" 
                          value={formData.phone}
                          onChange={e => setFormData({...formData, phone: e.target.value})}
                          className="w-full px-5 py-4 bg-slate-50/50 border border-slate-200 rounded-2xl text-[14px] text-[#0a152e] focus:outline-none focus:ring-4 focus:border-[#0a152e] focus:ring-[#0a152e]/10 hover:border-slate-300 transition-all duration-300"
                        />
                      </div>
                    </div>

                    <div className="flex flex-col gap-2 relative group mt-2">
                      <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest pl-1">Correo Electrónico</label>
                      <input 
                        type="email" 
                        value={formData.email}
                        onChange={e => {
                          setFormData({...formData, email: e.target.value});
                          if (formErrors.email) setFormErrors({...formErrors, email: false});
                        }}
                        className={`w-full px-5 py-4 bg-slate-50/50 border rounded-2xl text-[14px] text-[#0a152e] focus:outline-none focus:ring-4 transition-all duration-300 ${
                          formErrors.email ? 'border-red-400 focus:ring-red-500/20' : 'border-slate-200 focus:border-[#0a152e] focus:ring-[#0a152e]/10 hover:border-slate-300'
                        }`}
                      />
                      {formErrors.email && <span className="absolute -bottom-5 left-2 text-red-500 text-[10px] font-bold uppercase tracking-wider animate-in fade-in slide-in-from-top-1">Requerido</span>}
                    </div>

                    <div className="flex flex-col gap-2 relative group mt-2">
                      <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest pl-1">¿En qué podemos ayudarte?</label>
                      <textarea 
                        rows={4}
                        value={formData.message}
                        onChange={e => {
                          setFormData({...formData, message: e.target.value});
                          if (formErrors.message) setFormErrors({...formErrors, message: false});
                        }}
                        className={`w-full px-5 py-4 bg-slate-50/50 border rounded-2xl text-[14px] text-[#0a152e] focus:outline-none focus:ring-4 transition-all duration-300 resize-none ${
                          formErrors.message ? 'border-red-400 focus:ring-red-500/20' : 'border-slate-200 focus:border-[#0a152e] focus:ring-[#0a152e]/10 hover:border-slate-300'
                        }`}
                      ></textarea>
                      {formErrors.message && <span className="absolute -bottom-5 left-2 text-red-500 text-[10px] font-bold uppercase tracking-wider animate-in fade-in slide-in-from-top-1">Requerido</span>}
                    </div>

                    <button type="submit" disabled={isSubmitting} className="w-full mt-6 bg-[#0a152e] text-white py-4 md:py-5 rounded-2xl font-bold text-[13px] hover:bg-[#1a3668] transition-all active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed flex justify-center items-center gap-2 shadow-[0_10px_30px_rgba(10,21,46,0.2)] group/btn">
                      {isSubmitting ? (
                        <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
                      ) : (
                        <>Enviar Mensaje <ArrowRight className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform"/></>
                      )}
                    </button>

                  </form>
                </div>
              ) : (
                <div className="h-full flex flex-col items-center justify-center text-center animate-in zoom-in duration-700 py-20 relative z-10">
                  <div className="w-24 h-24 bg-emerald-50 rounded-full flex items-center justify-center mb-8 shadow-inner">
                    <Check className="w-12 h-12 text-emerald-600" />
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold text-[#0a152e] mb-4 tracking-tight">Mensaje enviado</h3>
                  <p className="text-slate-500 text-lg md:text-xl max-w-sm mx-auto mb-12 font-light">Un asesor de Casa A10 se pondrá en contacto contigo muy pronto.</p>
                  <button onClick={() => { setIsSuccess(false); setFormData({name: "", email: "", phone: "", message: ""}); }} className="px-8 py-4 bg-slate-50 text-[#0a152e] rounded-full font-bold text-[13px] hover:bg-slate-100 transition-colors active:scale-95 shadow-sm border border-slate-200">
                    Enviar otro mensaje
                  </button>
                </div>
              )}
            </div>
          </div>

        </div>
      </section>
      
      <Footer />
    </main>
  );
}
