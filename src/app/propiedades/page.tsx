"use client";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Catalog from "@/components/propiedades/Catalog";

export default function PropiedadesPage() {
  return (
    <main className="min-h-screen bg-slate-50 font-sans selection:bg-[#0f2146] selection:text-white">
      <Navbar />
      
      {/* Spacer para que el catálogo no quede debajo de la navbar fija */}
      <div className="pt-[160px] md:pt-[180px]">
        {/* Catálogo Interactivo */}
        <Catalog />
      </div>

      <Footer />
    </main>
  );
}
