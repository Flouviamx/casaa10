"use client";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Catalog from "@/components/propiedades/Catalog";

export default function PropiedadesPage() {
  return (
    <main className="min-h-screen bg-slate-50 font-sans selection:bg-[#0f2146] selection:text-white">
      <Navbar />
      
      {/* Hero Oscuro */}
      <section className="relative w-full pt-48 pb-32 px-6 bg-[#0a152e] flex flex-col items-center justify-center text-center">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-white mb-6">
          Propiedades
        </h1>
        <p className="text-slate-400 max-w-2xl text-lg font-light">
          Descubre nuestro portafolio de exclusivas propiedades en las mejores zonas.
        </p>
      </section>

      {/* Catálogo Interactivo */}
      <Catalog />

      <Footer />
    </main>
  );
}
