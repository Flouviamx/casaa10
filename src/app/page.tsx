"use client";

import { useState, useEffect } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/home/Hero";
import ZonesSelector from "@/components/home/ZonesSelector";

import Philosophy from "@/components/home/Philosophy";
import FeaturedProperties from "@/components/home/FeaturedProperties";
import Process from "@/components/home/Process";
import InstagramFeed from "@/components/home/InstagramFeed";

export default function Home() {
  const [isSearching, setIsSearching] = useState(false);

  useEffect(() => {
    if (isSearching) {
      const timer = setTimeout(() => setIsSearching(false), 1500);
      return () => clearTimeout(timer);
    }
  }, [isSearching]);

  return (
    <main className="min-h-screen bg-slate-50 selection:bg-[#0f2146] selection:text-white font-sans">
      <Navbar />
      <Hero isSearching={isSearching} setIsSearching={setIsSearching} />
      <ZonesSelector />
      <Philosophy />
      <FeaturedProperties />
      <Process />
      <InstagramFeed />
      <Footer />
    </main>
  );
}
