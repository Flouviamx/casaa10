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
    <main className="min-h-screen bg-slate-50 font-sans selection:bg-[#0f2146] selection:text-white flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-48 pb-20 px-6 md:px-12 overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-[600px] bg-gradient-to-bl from-blue-100/40 via-slate-50 to-transparent -z-10"></div>
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-blue-200/20 blur-[100px] -z-10"></div>
        
        <div className="max-w-[1400px] mx-auto">
          <span className="text-sm font-bold text-blue-600 uppercase tracking-widest mb-4 block">Contacto</span>
          <h1 className="text-5xl md:text-7xl font-bold text-[#0a152e] tracking-tighter leading-tight max-w-3xl mb-6">
            Estamos aquí para <br/>hacerlo realidad.
          </h1>
          <p className="text-xl text-slate-500 max-w-2xl leading-relaxed">
            Ya sea que busques el hogar de tus sueños o la mejor inversión, nuestros expertos están listos para guiarte en cada paso del camino.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-[1400px] mx-auto px-6 md:px-12 py-12 flex-1 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          
          {/* Columna Izquierda: Info de Contacto */}
          <div className="lg:col-span-5 flex flex-col gap-12">
            
            <div>
              <h2 className="text-2xl font-bold text-[#0a152e] mb-8">Información directa</h2>
              <div className="flex flex-col gap-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-white border border-slate-200 flex items-center justify-center shrink-0 shadow-sm">
                    <Mail className="w-5 h-5 text-[#0a152e]" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-[#0a152e] uppercase tracking-widest mb-1">Correo Electrónico</h3>
                    <p className="text-slate-500 text-lg hover:text-blue-600 transition-colors cursor-pointer">contacto@casaa10.com</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-white border border-slate-200 flex items-center justify-center shrink-0 shadow-sm">
                    <Phone className="w-5 h-5 text-[#0a152e]" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-[#0a152e] uppercase tracking-widest mb-1">Teléfono</h3>
                    <p className="text-slate-500 text-lg hover:text-blue-600 transition-colors cursor-pointer">+52 1 56 3358 5933</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-white border border-slate-200 flex items-center justify-center shrink-0 shadow-sm">
                    <MapPin className="w-5 h-5 text-[#0a152e]" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-[#0a152e] uppercase tracking-widest mb-1">Oficinas Centrales</h3>
                    <p className="text-slate-500 text-lg leading-relaxed">
                      Polanco, Miguel Hidalgo<br/>
                      Ciudad de México, CDMX
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Banner Asesor */}
            <div className="bg-[#0a152e] rounded-[32px] p-8 md:p-10 text-white relative overflow-hidden mt-auto shadow-2xl">
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/20 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/3"></div>
              <h3 className="text-2xl font-bold mb-3 relative z-10">¿Atención rápida?</h3>
              <p className="text-blue-100 mb-8 relative z-10 leading-relaxed text-sm">
                Escríbenos por WhatsApp y un asesor especializado te responderá en menos de 5 minutos.
              </p>
              <button 
                onClick={() => window.open(`https://wa.me/5215633585933?text=${encodeURIComponent("Hola, me gustaría recibir asesoría de Casa A10.")}`, "_blank")}
                className="w-full bg-white text-[#0a152e] py-4 rounded-xl font-bold text-[13px] hover:bg-slate-50 transition-all active:scale-[0.98] flex justify-center items-center gap-2 relative z-10 shadow-lg"
              >
                <MessageCircle className="w-4 h-4" />
                Abrir WhatsApp
              </button>
            </div>

          </div>

          {/* Columna Derecha: Formulario (Apple Style) */}
          <div className="lg:col-span-7">
            <div className="bg-white border border-slate-200/80 rounded-[40px] p-8 md:p-14 shadow-[0_30px_80px_rgba(0,0,0,0.04)] h-full flex flex-col justify-center">
              
              {!isSuccess ? (
                <>
                  <h2 className="text-2xl md:text-3xl font-bold text-[#0a152e] tracking-tight mb-2">Envíanos un mensaje</h2>
                  <p className="text-slate-500 text-sm mb-10">Completa el formulario y te contactaremos en breve.</p>
                  
                  <form onSubmit={handleFormSubmit} noValidate className="flex flex-col gap-6">
                    
                    {/* Nombre y Teléfono en dos columnas */}
                    <div className="flex flex-col md:flex-row gap-6">
                      <div className="flex flex-col gap-2 flex-1">
                        <label className="text-xs font-bold text-[#0a152e] uppercase tracking-widest">Nombre Completo</label>
                        <input 
                          type="text" 
                          value={formData.name}
                          onChange={e => {
                            setFormData({...formData, name: e.target.value});
                            if (formErrors.name) setFormErrors({...formErrors, name: false});
                          }}
                          className={`w-full px-5 py-4 bg-slate-50 border rounded-2xl text-[14px] text-slate-900 focus:outline-none focus:ring-1 focus:bg-white transition-all ${
                            formErrors.name ? 'border-red-400 focus:ring-red-500' : 'border-slate-200 focus:ring-[#0a152e]'
                          }`}
                        />
                        {formErrors.name && <span className="text-red-500 text-[10px] font-bold uppercase tracking-wider ml-2 animate-in fade-in">Requerido</span>}
                      </div>

                      <div className="flex flex-col gap-2 flex-1">
                        <label className="text-xs font-bold text-[#0a152e] uppercase tracking-widest">Teléfono (Opcional)</label>
                        <input 
                          type="tel" 
                          value={formData.phone}
                          onChange={e => setFormData({...formData, phone: e.target.value})}
                          className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl text-[14px] text-slate-900 focus:outline-none focus:ring-1 focus:ring-[#0a152e] focus:bg-white transition-all"
                        />
                      </div>
                    </div>

                    {/* Correo */}
                    <div className="flex flex-col gap-2">
                      <label className="text-xs font-bold text-[#0a152e] uppercase tracking-widest">Correo Electrónico</label>
                      <input 
                        type="email" 
                        value={formData.email}
                        onChange={e => {
                          setFormData({...formData, email: e.target.value});
                          if (formErrors.email) setFormErrors({...formErrors, email: false});
                        }}
                        className={`w-full px-5 py-4 bg-slate-50 border rounded-2xl text-[14px] text-slate-900 focus:outline-none focus:ring-1 focus:bg-white transition-all ${
                          formErrors.email ? 'border-red-400 focus:ring-red-500' : 'border-slate-200 focus:ring-[#0a152e]'
                        }`}
                      />
                      {formErrors.email && <span className="text-red-500 text-[10px] font-bold uppercase tracking-wider ml-2 animate-in fade-in">Requerido</span>}
                    </div>

                    {/* Mensaje */}
                    <div className="flex flex-col gap-2">
                      <label className="text-xs font-bold text-[#0a152e] uppercase tracking-widest">¿En qué podemos ayudarte?</label>
                      <textarea 
                        rows={4}
                        value={formData.message}
                        onChange={e => {
                          setFormData({...formData, message: e.target.value});
                          if (formErrors.message) setFormErrors({...formErrors, message: false});
                        }}
                        className={`w-full px-5 py-4 bg-slate-50 border rounded-2xl text-[14px] text-slate-900 focus:outline-none focus:ring-1 focus:bg-white transition-all resize-none ${
                          formErrors.message ? 'border-red-400 focus:ring-red-500' : 'border-slate-200 focus:ring-[#0a152e]'
                        }`}
                      ></textarea>
                      {formErrors.message && <span className="text-red-500 text-[10px] font-bold uppercase tracking-wider ml-2 animate-in fade-in">Requerido</span>}
                    </div>

                    <button type="submit" disabled={isSubmitting} className="w-full mt-4 bg-[#0a152e] text-white py-5 rounded-2xl font-bold text-[14px] hover:bg-[#1a3668] transition-all active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed flex justify-center items-center gap-2 shadow-[0_10px_30px_rgba(10,21,46,0.2)]">
                      {isSubmitting ? (
                        <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
                      ) : (
                        <>Enviar Mensaje <ArrowRight className="w-4 h-4"/></>
                      )}
                    </button>

                  </form>
                </>
              ) : (
                <div className="h-full flex flex-col items-center justify-center text-center animate-in zoom-in duration-500 py-20">
                  <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mb-8 shadow-sm">
                    <Check className="w-10 h-10 text-emerald-600" />
                  </div>
                  <h3 className="text-3xl font-bold text-[#0a152e] mb-4">¡Gracias por escribirnos!</h3>
                  <p className="text-slate-500 text-lg max-w-sm mx-auto mb-10">Hemos recibido tu mensaje correctamente. Un asesor de Casa A10 te contactará a la brevedad.</p>
                  <button onClick={() => { setIsSuccess(false); setFormData({name: "", email: "", phone: "", message: ""}); }} className="px-8 py-3 bg-slate-100 text-[#0a152e] rounded-full font-bold text-sm hover:bg-slate-200 transition-colors">
                    Enviar otro mensaje
                  </button>
                </div>
              )}
            </div>
          </div>

        </div>
      </section>

      {/* Mapa de Contacto */}
      <section className="w-full h-[500px] mt-12 bg-slate-200">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3762.661168128456!2d-99.20014022394142!3d19.432607181848523!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d202027e0a4f5d%3A0xc6fb694a5e01b7a4!2sPolanco%2C%20Miguel%20Hidalgo%2C%20Ciudad%20de%20M%C3%A9xico%2C%20CDMX!5e0!3m2!1ses-419!2smx!4v1700000000000!5m2!1ses-419!2smx" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen={true} 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>
      
      <Footer />
    </main>
  );
}
