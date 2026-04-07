"use client";
import { motion } from "framer-motion";
import { Variants } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

/* ─── Text Scramble Hook ─── */
const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%&";

function useTextScramble(finalText: string, trigger: boolean) {
  const [display, setDisplay] = useState(finalText);
  const frameRef = useRef<number>(0);

  useEffect(() => {
    if (!trigger) return;
    let frame = 0;
    const totalFrames = 28;

    const animate = () => {
      frame++;
      const progress = frame / totalFrames;
      const revealCount = Math.floor(progress * finalText.length);

      setDisplay(
        finalText
          .split("")
          .map((char, i) => {
            if (char === " ") return " ";
            if (i < revealCount) return char;
            return CHARS[Math.floor(Math.random() * CHARS.length)];
          })
          .join("")
      );

      if (frame < totalFrames) {
        frameRef.current = requestAnimationFrame(animate);
      } else {
        setDisplay(finalText);
      }
    };

    frameRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frameRef.current);
  }, [trigger, finalText]);

  return display;
}

/* ─── Stats ─── */
const stats = [
  { value: "11+", label: "Tahun Berkarya" },
  { value: "50+", label: "Project Dikerjakan" },
  { value: "1+", label: "Brand Dibangun" },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.85, ease: "easeInOut" },
  },
} as any;

export default function Hero() {
  const [triggered, setTriggered] = useState(false);
  const line1 = useTextScramble("DIGITAL", triggered);
  const line2 = useTextScramble("HERITAGE", triggered);

  useEffect(() => {
    const timer = setTimeout(() => setTriggered(true), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="w-full h-full flex items-center justify-center relative px-6 overflow-hidden">
      {/* Ambient glow blobs */}
      <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full bg-[#c9b99a]/[0.04] blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[10%] w-[400px] h-[400px] rounded-full bg-[#e8e0d4]/[0.03] blur-[100px] pointer-events-none" />

      {/* Decorative grid lines */}
      <div className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage: "linear-gradient(#e8e0d4 1px, transparent 1px), linear-gradient(90deg, #e8e0d4 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-6xl w-full grid md:grid-cols-[1fr_auto] gap-12 items-center"
      >
        {/* LEFT */}
        <div className="space-y-10">
          {/* Label */}
          <motion.div variants={itemVariants} className="flex items-center gap-3">
            <span className="w-6 h-[1.5px] bg-[#c9b99a]" />
            <span className="section-label text-[#c9b99a]">Ahmad Creative House  — 2026</span>
          </motion.div>

          {/* Kinetic Heading */}
          <div>
            <motion.h1
              variants={itemVariants}
              className="text-display font-black text-[clamp(3.5rem,9vw,7.5rem)] leading-[0.86] text-[#f0ede8] select-none"
            >
              {line1}
              <br />
              <span className="text-[#3a3a3a]">{line2}</span>
              <br />
              <span className="text-[clamp(2.8rem,7vw,6rem)]">DESIGNER</span>
            </motion.h1>
          </div>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="text-[#6b6b6b] text-base md:text-lg max-w-md leading-relaxed"
          >
            "Memadukan disiplin santri dengan strategi visual kreatif melalui desain, video, dan broadcasting."
          </motion.p>

          {/* CTA Buttons */}
          <motion.div variants={itemVariants} className="flex gap-4 flex-wrap">
            <a
              href="#products"
              data-cursor
              className="btn-shimmer magnetic group inline-flex items-center gap-2 px-8 py-4 bg-[#e8e0d4] text-[#080808] rounded-full text-sm font-bold shadow-xl shadow-[#e8e0d4]/8 hover:shadow-[#e8e0d4]/16 transition-all duration-300"
            >
              Lihat Produk
              <ArrowUpRight size={15} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
            <a
              href="#work"
              data-cursor
              className="magnetic inline-flex items-center gap-2 px-8 py-4 border border-white/[0.1] text-[#f0ede8] rounded-full text-sm font-bold hover:bg-white/[0.04] hover:border-white/[0.18] transition-all duration-300"
            >
              Lihat Portfolio
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div variants={itemVariants} className="flex gap-10 pt-4 border-t border-white/[0.05]">
            {stats.map(({ value, label }) => (
              <div key={label}>
                <p className="text-display font-black text-2xl text-[#e8e0d4]">{value}</p>
                <p className="text-[#3a3a3a] text-xs mt-1 leading-tight">{label}</p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* RIGHT — Photo / Preview Card */}
        <motion.div
          variants={itemVariants}
          className="hidden md:block"
        >
          <div className="relative w-[320px] aspect-[3/4] rounded-[2.5rem] overflow-hidden border border-white/[0.06] group animate-float">
            {/* Gradient placeholder jika belum ada foto */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a1a] via-[#111] to-[#0a0a0a]" />

            {/* Gambar Profil bebas: */}
            
            <Image
              src="/bitmap.png"
              alt="Multimedia production"
              fill
              className="object-cover opacity-85 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          

            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#080808]/80 via-transparent to-transparent" />

            {/* Badge */}
            <div className="absolute bottom-6 left-6 right-6">
              <div className="glass rounded-2xl px-4 py-3">
                <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#6b6b6b]">A santri dedicated to</p>
                <p className="text-sm font-bold text-[#e8e0d4] mt-0.5">ilm & multimedia production</p>
              </div>
            </div>

            {/* Decorative pattern inside card */}
            <div className="absolute inset-0 opacity-10"
              style={{
                backgroundImage: "radial-gradient(circle, #c9b99a 1px, transparent 1px)",
                backgroundSize: "24px 24px",
              }}
            />
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
