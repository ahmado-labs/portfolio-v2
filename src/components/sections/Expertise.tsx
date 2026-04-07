"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { Variants } from "framer-motion";

const expertiseData = [
  {
    number: "01",
    title: "Brand Identity & Visual System",
    desc: "Membangun identitas visual yang konsisten, mudah dikenali, dan punya karakter kuat — dari logo, color palette, typography, hingga brand guideline.",
    tags: ["Logo Design", "Brand Guidelines", "Typography", "Color System"],
  },
  {
    number: "02",
    title: "Digital Design",
    desc: "Desain untuk social media, campaign digital, dan kebutuhan konten visual lainnya yang disesuaikan dengan platform dan target audiens.",
    tags: ["Social Media", "Digital Campaign", "Motion Graphics", "Content Design"],
  },
  {
    number: "03",
    title: "Content & Strategy",
    desc: "Membantu merancang arah visual dan strategi konten yang kohesif — memastikan setiap output punya tujuan yang jelas.",
    tags: ["Visual Strategy", "Content Planning", "Brand Voice", "Art Direction"],
  },
  {
    number: "04",
    title: "Creative Production",
    desc: "Produksi visual komprehensif — dari sinematografi dan editing hingga manajemen broadcasting.",
    tags: ["Video Production", "Broadcasting", "Motion Design", "Visual Branding"],
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const rowVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut", // ✅ FIX
    },
  },
} as any;

export default function Expertise() {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <div className="w-full h-full flex items-center justify-center px-6 py-8">
      <div className="max-w-6xl w-full">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
          className="mb-6 flex items-end justify-between"
        >
          <div>
            <p className="section-label text-[#c9b99a] mb-2">Expertise</p>
            <h2 className="text-display font-black text-[clamp(2rem,4vw,3.5rem)] text-[#f0ede8] leading-[0.9]">
              Bidang <span className="text-[#3a3a3a]">Spesialisasi</span>
            </h2>
          </div>
          <p className="hidden md:block text-[#3a3a3a] text-sm max-w-[180px] text-right leading-relaxed">
            Membantu brand tumbuh lewat desain yang punya tujuan
          </p>
        </motion.div>

        {/* List */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="divide-y divide-white/[0.04]"
        >
          {expertiseData.map((item) => {
            const isHovered = hovered === item.number;
            return (
              <motion.div
                key={item.number}
                variants={rowVariants}
                onMouseEnter={() => setHovered(item.number)}
                onMouseLeave={() => setHovered(null)}
                className="group py-4 grid grid-cols-[40px_1fr] md:grid-cols-[60px_1fr_auto] gap-3 md:gap-8 items-start md:items-center"
                data-cursor
              >
                {/* Number */}
                <span className={`text-display font-black text-xl transition-colors duration-300 ${isHovered ? "text-[#c9b99a]" : "text-[#222]"}`}>
                  {item.number}
                </span>

                {/* Content */}
                <div className="min-w-0">
                  <h3 className={`text-base md:text-lg font-bold tracking-tight transition-colors duration-300 md:truncate ${isHovered ? "text-[#f0ede8]" : "text-[#6b6b6b]"}`}>
                    {item.title}
                  </h3>
                  <p className={`mt-1 text-sm leading-relaxed max-w-lg transition-all duration-300 ${isHovered ? "text-[#4a4a4a] opacity-100 max-h-[80px]" : "text-[#2a2a2a] opacity-0 max-h-0 overflow-hidden md:opacity-100 md:max-h-[48px]"}`}>
                    {item.desc}
                  </p>
                </div>

                {/* Tags */}
                <div className={`hidden md:flex flex-wrap gap-1.5 justify-end max-w-[220px] transition-opacity duration-300 ${isHovered ? "opacity-100" : "opacity-0"}`}>
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-full text-[9px] font-bold uppercase tracking-[0.12em] border border-white/[0.08] text-[#4a4a4a]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
}
