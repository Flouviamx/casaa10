"use client";
import { motion } from 'framer-motion';
export default function Philosophy() {
  return (
      <section className="py-16 md:py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20 max-w-4xl mx-auto">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-sm font-bold text-slate-400 tracking-[0.2em] uppercase mb-6"
            >
              ¿Qué es Casa A10?
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-5xl font-light text-[#0f2146] leading-tight"
            >
              No somos una inmobiliaria tradicional.<br className="hidden md:block"/> <span className="font-bold">Estructuramos patrimonio</span> con visión financiera.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {/* Card 1 */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex flex-col items-center text-center group"
            >
               <div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
                  <svg className="w-8 h-8 text-[#0f2146]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
               </div>
               <h3 className="text-xl font-bold text-[#0f2146] mb-4 tracking-tight">Operaciones Inteligentes</h3>
               <p className="text-slate-600 leading-relaxed font-light">No vendemos propiedades por vender. Analizamos, diseñamos y ejecutamos operaciones estratégicas basadas en el mercado y tus objetivos reales.</p>
            </motion.div>
            
            {/* Card 2 */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="flex flex-col items-center text-center group"
            >
               <div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
                  <svg className="w-8 h-8 text-[#0f2146]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
               </div>
               <h3 className="text-xl font-bold text-[#0f2146] mb-4 tracking-tight">Visión Financiera</h3>
               <p className="text-slate-600 leading-relaxed font-light">Antes de vender, entendemos la rentabilidad. Maximizamos el valor de tu patrimonio a través de una sólida estrategia fiscal y estructura financiera.</p>
            </motion.div>

            {/* Card 3 */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="flex flex-col items-center text-center group"
            >
               <div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
                  <svg className="w-8 h-8 text-[#0f2146]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" /></svg>
               </div>
               <h3 className="text-xl font-bold text-[#0f2146] mb-4 tracking-tight">Respaldo Jurídico</h3>
               <p className="text-slate-600 leading-relaxed font-light">Cada propiedad y terreno se analiza rigurosamente. Toda operación incluye análisis legal preventivo para garantizar un proceso completamente seguro.</p>
            </motion.div>
          </div>
        </div>
      </section>

  );
}
