"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Mail, Phone, MapPin, ArrowRight, Check } from "lucide-react";
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
    <main className="min-h-screen bg-[#0a152e] font-sans selection:bg-white selection:text-[#0a152e] flex flex-col relative overflow-hidden">
      <Navbar />

      {/* Subtle Glow Backgrounds */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none -translate-y-1/2 translate-x-1/3"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-indigo-500/10 rounded-full blur-[100px] pointer-events-none translate-y-1/3 -translate-x-1/3"></div>
      
      {/* Main Content */}
      <section className="max-w-[1400px] mx-auto px-6 md:px-12 pt-[160px] md:pt-[180px] pb-32 flex-1 w-full relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
          
          {/* Columna Izquierda: Copy y Beneficios */}
          <div className="lg:col-span-5 flex flex-col pt-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.1] mb-6">
              Comienza a construir<br/>tu patrimonio
            </h1>
            <p className="text-lg text-slate-300 leading-relaxed font-light mb-12 max-w-lg">
              Nuestros asesores patrimoniales están listos para brindarte una experiencia a la altura de tus expectativas. Contáctanos hoy para descubrir:
            </p>

            <div className="flex flex-col gap-8 mb-16">
              <div className="flex items-start gap-5">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0 mt-1">
                  <MapPin className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1">Atención personalizada</h4>
                  <p className="text-slate-400 text-sm leading-relaxed">Visítanos en nuestras oficinas en Polanco, Ciudad de México, para una asesoría discreta y privada.</p>
                </div>
              </div>
              <div className="flex items-start gap-5">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0 mt-1">
                  <Phone className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1">Comunicación directa</h4>
                  <p className="text-slate-400 text-sm leading-relaxed">Habla directamente con un experto inmobiliario sin intermediarios ni tiempos de espera (+52 1 56 3358 5933).</p>
                </div>
              </div>
              <div className="flex items-start gap-5">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0 mt-1">
                  <Mail className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1">Información detallada</h4>
                  <p className="text-slate-400 text-sm leading-relaxed">Recibe brochures técnicos, corridas financieras y disponibilidad en tiempo real (contacto@casaa10.com).</p>
                </div>
              </div>
            </div>


          </div>

          {/* Columna Derecha: Formulario Blanco Flotante */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-[40px] p-8 md:p-12 shadow-2xl h-full flex flex-col justify-center relative overflow-hidden">
              
              {!isSuccess ? (
                <div className="relative z-10 animate-in fade-in duration-700">
                  <h2 className="text-3xl font-bold text-[#0a152e] tracking-tight mb-2">Envíanos un mensaje</h2>
                  <p className="text-slate-500 text-sm mb-10 font-light">Nos pondremos en contacto contigo lo antes posible.</p>
                  
                  <form onSubmit={handleFormSubmit} noValidate className="flex flex-col gap-5">
                    
                    <div className="flex flex-col gap-2 relative group">
                      <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest pl-1">Nombre Completo *</label>
                      <input 
                        type="text" 
                        value={formData.name}
                        onChange={e => {
                          setFormData({...formData, name: e.target.value});
                          if (formErrors.name) setFormErrors({...formErrors, name: false});
                        }}
                        className={`w-full px-5 py-4 bg-white border rounded-xl text-[14px] text-[#0a152e] focus:outline-none transition-all duration-300 shadow-sm ${
                          formErrors.name ? 'border-red-400 focus:border-red-500 focus:ring-1 focus:ring-red-500/20' : 'border-slate-200 focus:border-[#0a152e] hover:border-slate-300'
                        }`}
                      />
                      {formErrors.name && <span className="absolute -bottom-5 left-2 text-red-500 text-[10px] font-bold uppercase tracking-wider animate-in fade-in slide-in-from-top-1">Requerido</span>}
                    </div>

                    <div className="flex flex-col gap-2 relative group mt-2">
                      <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest pl-1">Correo Electrónico *</label>
                      <input 
                        type="email" 
                        value={formData.email}
                        onChange={e => {
                          setFormData({...formData, email: e.target.value});
                          if (formErrors.email) setFormErrors({...formErrors, email: false});
                        }}
                        className={`w-full px-5 py-4 bg-white border rounded-xl text-[14px] text-[#0a152e] focus:outline-none transition-all duration-300 shadow-sm ${
                          formErrors.email ? 'border-red-400 focus:border-red-500 focus:ring-1 focus:ring-red-500/20' : 'border-slate-200 focus:border-[#0a152e] hover:border-slate-300'
                        }`}
                      />
                      {formErrors.email && <span className="absolute -bottom-5 left-2 text-red-500 text-[10px] font-bold uppercase tracking-wider animate-in fade-in slide-in-from-top-1">Requerido</span>}
                    </div>

                    <div className="flex flex-col gap-2 flex-1 relative group mt-2">
                      <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest pl-1">Teléfono (Opcional)</label>
                      <input 
                        type="tel" 
                        value={formData.phone}
                        onChange={e => setFormData({...formData, phone: e.target.value})}
                        className="w-full px-5 py-4 bg-white border border-slate-200 rounded-xl text-[14px] text-[#0a152e] focus:outline-none focus:border-[#0a152e] hover:border-slate-300 transition-all duration-300 shadow-sm"
                      />
                    </div>

                    <div className="flex flex-col gap-2 relative group mt-2">
                      <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest pl-1">¿En qué podemos ayudarte? *</label>
                      <textarea 
                        rows={4}
                        value={formData.message}
                        onChange={e => {
                          setFormData({...formData, message: e.target.value});
                          if (formErrors.message) setFormErrors({...formErrors, message: false});
                        }}
                        className={`w-full px-5 py-4 bg-white border rounded-xl text-[14px] text-[#0a152e] focus:outline-none transition-all duration-300 resize-none shadow-sm ${
                          formErrors.message ? 'border-red-400 focus:border-red-500 focus:ring-1 focus:ring-red-500/20' : 'border-slate-200 focus:border-[#0a152e] hover:border-slate-300'
                        }`}
                      ></textarea>
                      {formErrors.message && <span className="absolute -bottom-5 left-2 text-red-500 text-[10px] font-bold uppercase tracking-wider animate-in fade-in slide-in-from-top-1">Requerido</span>}
                    </div>

                    <p className="text-[11px] text-slate-400 mt-2 font-light">
                      Al enviar este formulario aceptas nuestra Política de Privacidad y Términos de Servicio.
                    </p>

                    <button type="submit" disabled={isSubmitting} className="w-full mt-4 bg-[#0a152e] text-white py-4 rounded-xl font-bold text-[13px] hover:bg-black transition-all active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed flex justify-center items-center gap-2 shadow-[0_8px_20px_rgba(10,21,46,0.15)] group/btn">
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
