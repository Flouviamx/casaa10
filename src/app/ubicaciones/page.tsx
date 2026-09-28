"use client";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function UbicacionesPage() {
  return (
    <main className="min-h-screen bg-white font-sans selection:bg-[#0f2146] selection:text-white">
      <Navbar />
      
      <section className="relative w-full pt-48 pb-32 px-6 bg-[#0a152e] flex flex-col items-center justify-center text-center">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-white mb-6">
          Ubicaciones
        </h1>
        <p className="text-slate-400 max-w-2xl text-lg font-light">
          Estratégicamente posicionados en las ciudades de mayor crecimiento y plusvalía.
        </p>
      </section>

      <section className="py-32 px-6 flex items-center justify-center min-h-[50vh]">
        <p className="text-slate-400 tracking-widest uppercase text-sm">[ Aquí irá el mapa y listado de zonas ]</p>
      </section>

      <Footer />
    </main>
  );
}
