"use client";
import { motion } from 'framer-motion';
export default function FinalCTA() {
  return (
      <section className="relative py-16 md:py-20 px-6 overflow-hidden">
        {/* Abstract shapes/gradient */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-slate-100 rounded-full mix-blend-multiply filter blur-[100px] opacity-70 -translate-y-1/2 translate-x-1/3"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-slate-100 rounded-full mix-blend-multiply filter blur-[100px] opacity-70 translate-y-1/3 -translate-x-1/3"></div>
        
        <div className="max-w-4xl mx-auto text-center relative z-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl lg:text-6xl font-bold text-[#0f2146] leading-tight tracking-tight mb-10"
          >
            Aquí no se trata de vender rápido,<br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0f2146] to-slate-400">se trata de hacerlo bien.</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-600 text-lg md:text-xl mb-12 font-light max-w-2xl mx-auto"
          >
            Si vas a mover tu patrimonio... hazlo con estrategia.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <button className="bg-[#0f2146] text-white px-10 py-5 rounded-full text-[15px] font-semibold tracking-wide hover:bg-[#1a3668] transition-all duration-200 shadow-[0_4px_14px_rgba(15,33,70,0.15)] hover:shadow-[0_6px_20px_rgba(15,33,70,0.25)] active:scale-[0.97]">
              Escríbenos
            </button>
          </motion.div>
        </div>
      </section>

  );
}
