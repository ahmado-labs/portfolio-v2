"use client";
import { useState, useEffect } from "react";
import { User, Briefcase, Cpu, Package, Mail, Home } from "lucide-react";

const navItems = [
  { id: "hero",      label: "Home",      icon: Home },
  { id: "about",     label: "About",     icon: User },
  { id: "expertise", label: "Expertise", icon: Cpu },
  { id: "products",  label: "Products",  icon: Package },
  { id: "work",      label: "Work",      icon: Briefcase },
  { id: "contact",   label: "Contact",   icon: Mail },
];

export default function Navbar() {
  const [hoveredTab, setHoveredTab]   = useState<string | null>(null);
  const [activeSection, setActiveSection] = useState<string>("hero");

  /* ── IntersectionObserver: track active section ── */
  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    navItems.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return;

      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { threshold: 0.4 }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  /* ── Smooth scroll ── */
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.scrollY;
    window.scrollTo({ top, behavior: "smooth" });
  };

  const isActive = (id: string) => activeSection === id;

  return (
    <>
      {/* ── DESKTOP: Sidebar vertical nav ── */}
      <nav
        className="fixed left-6 top-1/2 -translate-y-1/2 z-[1000] hidden lg:flex flex-col gap-3"
        aria-label="Main navigation"
      >
        {navItems.map(({ id, label, icon: Icon }) => {
          const active  = isActive(id);
          const hovered = hoveredTab === id;

          return (
            <div key={id} className="relative flex items-center group">
              {/* Tooltip */}
              <div
                className={`absolute left-[3.8rem] px-3.5 py-1.5 rounded-lg text-[10px] font-bold uppercase tracking-[0.18em] pointer-events-none whitespace-nowrap transition-all duration-300 ${
                  hovered
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 -translate-x-2"
                } ${
                  active
                    ? "bg-[#e8e0d4] text-[#080808]"
                    : "bg-[#1a1a1a] text-[#e8e0d4] border border-white/10"
                }`}
              >
                {label}
                {/* Arrow */}
                <span
                  className={`absolute right-full top-1/2 -translate-y-1/2 border-4 border-transparent ${
                    active ? "border-r-[#e8e0d4]" : "border-r-[#1a1a1a]"
                  }`}
                />
              </div>

              {/* Button */}
              <button
                onMouseEnter={() => setHoveredTab(id)}
                onMouseLeave={() => setHoveredTab(null)}
                onClick={() => scrollTo(id)}
                aria-label={label}
                data-cursor
                className={`w-11 h-11 flex items-center justify-center rounded-2xl border transition-all duration-300 ${
                  active
                    ? "bg-[#e8e0d4] border-[#e8e0d4] text-[#080808] scale-110 shadow-lg shadow-[#e8e0d4]/10"
                    : hovered
                    ? "bg-white/8 border-white/16 text-[#e8e0d4]"
                    : "bg-white/[0.03] border-white/[0.06] text-[#3a3a3a] backdrop-blur-xl"
                }`}
              >
                <Icon size={16} strokeWidth={active ? 2.5 : 1.8} />
              </button>

              {/* Active dot indicator */}
              {active && (
                <span className="absolute -right-2 top-1/2 -translate-y-1/2 w-1 h-1 rounded-full bg-[#c9b99a]" />
              )}
            </div>
          );
        })}
      </nav>

      {/* ── MOBILE: Bottom pill nav ── */}
      <nav
        className="mobile-nav lg:hidden"
        aria-label="Mobile navigation"
      >
        <div className="flex items-center gap-1 px-3 py-2.5 rounded-[2rem] border border-white/[0.08] bg-[#0f0f0f]/90 backdrop-blur-2xl shadow-2xl shadow-black/60">
          {navItems.map(({ id, label, icon: Icon }) => {
            const active = isActive(id);
            return (
              <button
                key={id}
                onClick={() => scrollTo(id)}
                aria-label={label}
                className={`relative flex flex-col items-center justify-center w-11 h-10 rounded-[1.2rem] transition-all duration-300 ${
                  active
                    ? "bg-[#e8e0d4] text-[#080808]"
                    : "text-[#3a3a3a] hover:text-[#e8e0d4]"
                }`}
              >
                <Icon size={15} strokeWidth={active ? 2.5 : 1.8} />
              </button>
            );
          })}
        </div>
      </nav>
    </>
  );
}
