"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const FAQ_DATA = [
  {
    question: "¿Cómo simplifica Casa A10 el proceso de compra de un inmueble?",
    answer: "Nos encargamos de toda la gestión burocrática, búsqueda filtrada según tus requerimientos exactos y negociación directa. Optimizamos tu tiempo para que tú solo tengas que concentrarte en tomar la decisión final."
  },
  {
    question: "¿Casa A10 ofrece asesoría para obtener un crédito hipotecario?",
    answer: "Sí, contamos con alianzas estratégicas con los principales bancos e instituciones financieras. Nuestros asesores te guiarán paso a paso para estructurar tu perfil y garantizarte las mejores tasas de interés del mercado."
  },
  {
    question: "¿Cómo garantiza Casa A10 la transparencia en las propiedades?",
    answer: "Realizamos una rigurosa auditoría legal, fiscal y estructural de cada propiedad antes de listarla en nuestro portafolio VIP. Nos aseguramos de que cada inmueble esté 100% libre de gravámenes y problemas legales."
  },
  {
    question: "¿Qué tipo de propiedades ofrece Casa A10?",
    answer: "Nos especializamos estrictamente en el sector residencial premium: desarrollos verticales de lujo, casas en las zonas más exclusivas y terrenos de inversión con la mayor proyección de plusvalía."
  },
  {
    question: "¿Por qué elegir Casa A10 sobre otras agencias inmobiliarias?",
    answer: "No somos un simple catálogo web. Somos una firma de consultoría patrimonial que te acompaña de principio a fin con un nivel de servicio ultra personalizado y confidencial, similar al estándar de la banca privada."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 md:py-24 px-6 max-w-4xl mx-auto w-full">
      <h2 className="text-3xl md:text-5xl font-bold text-[#0a152e] text-center mb-12 md:mb-16 tracking-tight">
        Preguntas frecuentes
      </h2>

      <div className="flex flex-col">
        {FAQ_DATA.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div key={index} className="border-b border-slate-200">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full py-6 flex items-center justify-between text-left group"
              >
                <span className="text-base md:text-lg font-bold text-[#0a152e] pr-8 group-hover:text-blue-600 transition-colors">
                  {faq.question}
                </span>
                <div className={`shrink-0 w-8 h-8 rounded-full border flex items-center justify-center transition-all duration-300 ${
                  isOpen 
                    ? 'bg-[#0a152e] border-[#0a152e] text-white' 
                    : 'bg-transparent border-slate-200 text-slate-400 group-hover:border-[#0a152e] group-hover:text-[#0a152e]'
                }`}>
                  {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                </div>
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  isOpen ? "max-h-96 opacity-100 pb-6" : "max-h-0 opacity-0"
                }`}
              >
                <p className="text-slate-500 text-sm md:text-base leading-relaxed pr-10">
                  {faq.answer}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
