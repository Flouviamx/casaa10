"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => { document.body.style.overflow = 'auto'; }
  }, [mobileMenuOpen]);

  const isDetail = pathname === '/propiedades' || pathname.startsWith('/propiedades/');
  const isLightNav = pathname === '/contacto';
  
  const navLinks = [
    { name: "Inicio", path: "/" },
    { 
      name: "Desarrollos", 
      path: "/propiedades",
      dropdown: [
        { name: "Todos los desarrollos", path: "/propiedades" },
        { name: "Últimos departamentos", path: "/propiedades" },
        { name: "Entrega inmediata", path: "/propiedades" },
        { name: "Preventa", path: "/propiedades" },
        { name: "Renta", path: "/propiedades" }
      ]
    },
    { name: "Nosotros", path: "/nosotros" }
  ];

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ease-out ${
          mobileMenuOpen ? "bg-[#0a152e] text-white" :
          isLightNav
            ? "bg-white text-slate-900 shadow-sm border-b border-slate-100"
            : isDetail 
              ? "bg-[#0a152e] text-white shadow-md"
              : isScrolled 
                ? "bg-white/95 backdrop-blur-md text-slate-900 shadow-sm border-b border-slate-100" 
                : "bg-transparent text-white"
        }`}
      >
        {/* Desktop Top Bar (Hidden on Mobile) */}
        <div className="hidden md:grid grid-cols-3 items-center px-6 py-2 max-w-7xl mx-auto">
          {/* Izquierda: Redes/Contacto */}
          <div className="flex items-center justify-start gap-5">
            <a href="tel:+5215633585933" className="group p-2 -ml-2 rounded-full transition-colors hover:bg-slate-200/20">
              <svg className="w-[18px] h-[18px] transition-transform group-active:scale-95" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
              </svg>
            </a>
            <a href="mailto:contacto@casaa10.com" className="group p-2 rounded-full transition-colors hover:bg-slate-200/20">
              <svg className="w-[19px] h-[19px] transition-transform group-active:scale-95" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="4.5" width="20" height="15" rx="3" />
                <path d="M2 5.5l9.2 6.5a1.5 1.5 0 001.6 0L22 5.5" />
              </svg>
            </a>
          </div>

          {/* Centro: Logo */}
          <div className="flex justify-center">
            <Link href="/">
              <Image 
                src="/logo-transparent.png" 
                alt="CASA A10" 
                width={70} 
                height={70} 
                className="transition-all duration-200 object-contain cursor-pointer"
                style={{
                  filter: (!mobileMenuOpen && isScrolled && !isDetail) ? 'none' : 'brightness(0) invert(1)'
                }}
                priority
              />
            </Link>
          </div>

          {/* Derecha: Contacto */}
          <div className="flex justify-end">
            <Link href="/contacto" className={`group flex items-center gap-2.5 px-5 py-2.5 rounded-full text-[10px] font-bold tracking-[0.2em] uppercase transition-all duration-300 shadow-sm active:scale-95 ${
              (!mobileMenuOpen && isScrolled && !isDetail)
                ? "bg-[#0f2146] text-white hover:bg-[#1a3668] shadow-[0_4px_10px_rgba(15,33,70,0.15)]" 
                : "bg-white text-[#0f2146] hover:bg-white/90 shadow-[0_4px_10px_rgba(0,0,0,0.1)]"
            }`}>
              Contáctanos
              <svg className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>

        {/* Desktop Bottom Bar (Hidden on Mobile) */}
        <div className={`hidden md:block border-t border-b transition-colors duration-200 ${(!mobileMenuOpen && (isLightNav || (isScrolled && !isDetail))) ? "border-slate-100" : "border-white/10"} py-1.5 px-2`}>
          <div className="flex justify-center gap-2 text-xs font-medium tracking-[0.15em] uppercase max-w-7xl mx-auto">
            {navLinks.map((item) => {
              const isActive = pathname === item.path;
              const isLightBackground = !mobileMenuOpen && (isLightNav || (isScrolled && !isDetail));
              const linkClasses = `px-6 py-2.5 rounded-full transition-all duration-300 ${
                isActive 
                  ? isLightBackground
                      ? "bg-slate-100 text-[#0f2146] shadow-sm font-bold" 
                      : "bg-white/20 text-white font-bold backdrop-blur-md" 
                  : isLightBackground
                      ? "hover:bg-slate-50 text-slate-500 hover:text-[#0f2146]" 
                      : "hover:bg-white/10 text-white/70 hover:text-white" 
              }`;

              if (item.dropdown) {
                return (
                  <div key={item.name} className="relative group">
                    <Link href={item.path} className={`${linkClasses} flex items-center gap-2`}>
                      {item.name}
                      <svg className="w-4 h-4 transition-transform duration-300 group-hover:-rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" /></svg>
                    </Link>
                    
                    <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-300 z-50">
                      <div className="bg-white rounded-3xl shadow-[0_20px_40px_rgba(0,0,0,0.15)] border border-slate-100 overflow-hidden w-64 py-2 flex flex-col normal-case tracking-normal">
                        {item.dropdown.map((sub, i) => (
                          <Link 
                            key={sub.name}
                            href={sub.path}
                            className={`px-6 py-3 text-[14px] font-medium transition-colors hover:bg-slate-50 flex items-center relative ${i === 0 ? "text-[#0f2146]" : "text-slate-600 hover:text-[#0f2146]"}`}
                          >
                            
                            {sub.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              }

              return (
                <Link key={item.name} href={item.path} className={linkClasses}>
                  {item.name}
                </Link>
              );
            })}
          </div>
        </div>

        {/* Mobile Header */}
        <div className="md:hidden flex items-center justify-between px-6 py-3">
          <Link href="/" onClick={() => setMobileMenuOpen(false)}>
            <Image 
              src="/logo-transparent.png" 
              alt="CASA A10" 
              width={60} 
              height={60} 
              className="object-contain"
              style={{
                filter: (!mobileMenuOpen && isScrolled && !isDetail) ? 'none' : 'brightness(0) invert(1)'
              }}
              priority
            />
          </Link>
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 -mr-2 rounded-full transition-colors active:scale-95"
          >
            {mobileMenuOpen ? (
              <X className="w-7 h-7" />
            ) : (
              <Menu className="w-7 h-7" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-[#0a152e] z-[90] flex flex-col pt-28 px-8 pb-12 transition-transform duration-500 ease-out md:hidden ${
          mobileMenuOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="flex flex-col gap-6 flex-1 mt-4">
          {navLinks.map((item, idx) => {
            const isActive = pathname === item.path;
            return (
              <Link 
                key={item.name} 
                href={item.path} 
                onClick={() => setMobileMenuOpen(false)}
                className={`text-4xl font-bold tracking-tight transition-all duration-300 transform ${
                  mobileMenuOpen ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
                } ${
                  isActive ? "text-white" : "text-white/40 hover:text-white/80"
                }`}
                style={{ transitionDelay: `${idx * 100}ms` }}
              >
                {item.name}
              </Link>
            );
          })}
        </div>

        <div 
          className={`flex flex-col gap-6 mt-auto transition-all duration-500 delay-300 ${
            mobileMenuOpen ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
          }`}
        >
          <div className="h-px w-full bg-white/10"></div>
          
          <div className="flex justify-between items-center">
             <div className="flex gap-4">
               <a href="tel:+5215633585933" className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white active:bg-white/20">
                 <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" /></svg>
               </a>
               <a href="mailto:contacto@casaa10.com" className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white active:bg-white/20">
                 <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4.5" width="20" height="15" rx="3" /><path d="M2 5.5l9.2 6.5a1.5 1.5 0 001.6 0L22 5.5" /></svg>
               </a>
             </div>
             
             <Link 
               href="/contacto" 
               onClick={() => setMobileMenuOpen(false)}
               className="bg-white text-[#0a152e] px-6 py-3.5 rounded-full font-bold text-xs uppercase tracking-widest active:scale-95 transition-transform"
             >
               Contáctanos
             </Link>
          </div>
        </div>
      </div>
    </>
  );
}
