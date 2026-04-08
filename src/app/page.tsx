"use client";
import { useEffect } from "react";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Expertise from "@/components/sections/Expertise";
import Products from "@/components/sections/Products";
import SelectedWork from "@/components/sections/SelectedWork";
import Contact from "@/components/sections/Contact";
import Navbar from "@/components/Navbar";
import ScrollProgress from "@/components/ScrollProgress";
import CustomCursor from "@/components/CustomCursor";

export default function Home() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <CustomCursor />
      <ScrollProgress />

      <main className="bg-[#080808] relative">
        <Navbar />

        {/* HERO — normal flow, tidak sticky */}
        <section id="hero" className="relative h-screen w-full z-[1] overflow-hidden">
          <Hero />
        </section>

        {/* ABOUT */}
        <section
          id="about"
          className="relative lg:sticky lg:top-0 h-auto lg:h-screen w-full z-[2] overflow-hidden bg-[#080808] border-t border-white/[0.04] shadow-[0_-40px_80px_rgba(0,0,0,0.9)] py-20 lg:py-0"
        >
          <About />
        </section>

        {/* EXPERTISE */}
        <section
          id="expertise"
          className="sticky top-0 h-screen w-full z-[3] overflow-hidden bg-[#080808] border-t border-white/[0.04] shadow-[0_-40px_80px_rgba(0,0,0,0.9)]"
        >
          <Expertise />
        </section>

        {/* PRODUCTS */}
        <section
          id="products"
          className="relative lg:sticky lg:top-0 h-auto lg:h-screen w-full z-[5] bg-[#080808] border-t border-white/[0.04] shadow-[0_-40px_80px_rgba(0,0,0,0.9)] overflow-visible lg:overflow-hidden py-20 lg:py-0"
        >
          <Products />
        </section>

        {/* SELECTED WORK */}
        <section
          id="work"
          className="relative lg:sticky lg:top-0 h-auto lg:h-screen w-full z-[4] bg-[#080808] border-t border-white/[0.04] shadow-[0_-40px_80px_rgba(0,0,0,0.9)] overflow-visible lg:overflow-hidden py-20 lg:py-0"
        >
          <SelectedWork />
        </section>

        {/* CONTACT */}
        <section
          id="contact"
          className="sticky top-0 h-screen w-full z-[6] overflow-hidden bg-[#080808] border-t border-white/[0.04] shadow-[0_-40px_80px_rgba(0,0,0,0.9)]"
        >
          <Contact />
        </section>
      </main>
    </>
  );
}
