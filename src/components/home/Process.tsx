"use client";
import { motion } from 'framer-motion';
export default function Process() {
  return (
      <section className="py-16 md:py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-sm font-bold text-slate-400 tracking-[0.2em] uppercase mb-4">Nuestra Metodología</h2>
            <p className="text-4xl md:text-5xl font-bold text-[#0f2146] mb-8">Nuestro Proceso</p>
          </div>
          
          <div className="relative">
            {/* Línea conectora */}
            <div className="absolute left-[27px] md:left-1/2 top-0 bottom-0 w-px bg-slate-200 md:-translate-x-1/2 hidden md:block"></div>
            
            <div className="space-y-12 relative z-10">
              {[
                { title: "Diagnóstico estratégico", desc: "Evaluamos el potencial real de tu propiedad frente al mercado actual." },
                { title: "Análisis legal y fiscal", desc: "Revisamos a fondo el estatus jurídico para prevenir contratiempos." },
                { title: "Comercialización inteligente", desc: "Posicionamos tu patrimonio solo en los canales adecuados." },
                { title: "Negociación estructurada", desc: "Aseguramos las mejores condiciones para proteger tu rentabilidad." },
                { title: "Cierre notarial seguro", desc: "Te acompañamos hasta la firma, garantizando tranquilidad total." }
              ].map((step, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: i * 0.1 }}
                  className={`flex flex-col md:flex-row items-center gap-8 ${i % 2 === 0 ? "md:flex-row-reverse" : ""}`}
                >
                  <div className={`w-full md:w-1/2 ${i % 2 === 0 ? "md:text-left" : "md:text-right"}`}>
                    <h3 className="text-xl md:text-2xl font-bold text-[#0f2146] mb-2">{step.title}</h3>
                    <p className="text-slate-600">{step.desc}</p>
                  </div>
                  <div className="w-14 h-14 bg-[#0f2146] rounded-full border-4 border-white flex items-center justify-center text-white font-bold text-lg shadow-lg z-10 shrink-0">
                    {i + 1}
                  </div>
                  <div className="w-full md:w-1/2"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

  );
}
