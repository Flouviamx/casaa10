"use client";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Catalog from "@/components/propiedades/Catalog";

export default function PropiedadesPage() {
  return (
    <main className="min-h-screen bg-slate-50 font-sans selection:bg-[#0f2146] selection:text-white">
      <Navbar />
      
      {/* Navbar Background Placeholder */}
      <div className="w-full h-[100px] bg-[#0a152e]"></div>

      {/* Catálogo Interactivo */}
      <Catalog />

      <Footer />
    </main>
  );
}
