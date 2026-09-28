"use client";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function NosotrosPage() {
  return (
    <main className="min-h-screen bg-white font-sans selection:bg-[#0f2146] selection:text-white">
      <Navbar />
      
      <section className="relative w-full pt-48 pb-32 px-6 bg-[#0a152e] flex flex-col items-center justify-center text-center">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6">
          Nosotros
        </h1>
        <p className="text-slate-400 max-w-2xl text-lg font-light">
          No somos una inmobiliaria tradicional. Estructuramos patrimonio.
        </p>
      </section>

      <section className="py-32 px-6 flex items-center justify-center min-h-[50vh]">
        <p className="text-slate-400 tracking-widest uppercase text-sm">[ Aquí irá la historia de la empresa y filosofía ]</p>
      </section>

      <Footer />
    </main>
  );
}
