"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { ArrowUpRight } from "lucide-react";

const works = [
  {
    title: "Social Media Campaign",
    client: "Al-Furqon TV",
    desc: "Membangun visual konsisten untuk meningkatkan engagement dan brand recognition audiens.",
    category: "Digital Design",
    year: "2024",
    gradient: "from-[#0d1520] via-[#0a1a2a] to-[#080808]",
    accent: "#8aa9c9",
    tags: ["Social Media", "Brand Visual", "Campaign"],
  },
  {
    title: "Video Production",
    client: "Al-Furqon TV",
    desc: "Produksi video dari konsep, pre-production, hingga editing promosi dan distribusi.",
    href: "https://www.youtube.com/watch?v=8VJ8xalz5mA",
    category: "Creative Production",
    year: "2025",
    gradient: "from-[#1a1510] via-[#241a0a] to-[#080808]",
    accent: "#c9b99a",
    tags: ["Video Editing", "Motion", "Promosi"],
  },
  {
    title: "Live Stream Production",
    client: "Al-Furqon TV",
    desc: "Layanan siaran menyeluruh dari perencanaan teknis hingga on-air execution.",
    href: "https://www.youtube.com/@AlFurqonTVofficial",
    category: "Live Production",
    year: "2024-Now",
    gradient: "from-[#150d1a] via-[#1a1225] to-[#080808]",
    accent: "#b99ac9",
    tags: ["Live Stream", "Broadcast", "Production"],
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
};

export default function SelectedWork() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  return (
    <div className="w-full h-full flex items-center justify-center px-6 py-8">
      <div className="max-w-6xl w-full">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-6 flex items-end justify-between"
        >
          <div>
            <p className="section-label text-[#c9b99a] mb-2">Selected Work</p>
            <h2 className="text-display font-black text-[clamp(2rem,4vw,3.5rem)] text-[#f0ede8] leading-[0.9]">
              Arsip <span className="text-[#3a3a3a]">Visual</span>
            </h2>
          </div>
          <a
            href="#contact"
            data-cursor
            className="hidden md:flex items-center gap-1.5 text-[#3a3a3a] text-sm font-bold hover:text-[#e8e0d4] transition-colors duration-300 group"
          >
            Start a project
            <ArrowUpRight size={13} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </motion.div>

        {/* Work Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid md:grid-cols-3 gap-4"
        >
          {works.map((work, i) => (
            <motion.a
              key={i}
              href={work.href}
              target="_blank"
              rel="noopener noreferrer"
              variants={cardVariants}
              onMouseEnter={() => setHoveredIdx(i)}
              onMouseLeave={() => setHoveredIdx(null)}
              data-cursor
              className="group cursor-pointer"
            >
              {/* Image card — aspect dikecilkan agar muat di h-screen */}
              <div className="relative aspect-[4/3] rounded-[1.5rem] overflow-hidden border border-white/[0.05] group-hover:border-white/[0.12] transition-all duration-500">
                <div className={`absolute inset-0 bg-gradient-to-br ${work.gradient}`} />
                <div
                  className="absolute inset-0 opacity-20 transition-opacity duration-500 group-hover:opacity-40"
                  style={{
                    backgroundImage: `radial-gradient(circle at 40% 60%, ${work.accent}50 0%, transparent 55%)`,
                  }}
                />
                <div
                  className="absolute inset-0 opacity-[0.05]"
                  style={{
                    backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)",
                    backgroundSize: "24px 24px",
                  }}
                />
                {/* Badges */}
                <div className="absolute top-4 left-4">
                  <span className="px-2.5 py-1 glass rounded-full text-[9px] font-bold uppercase tracking-[0.16em] text-[#6b6b6b]">
                    {work.category}
                  </span>
                </div>
                <div className="absolute top-4 right-4">
                  <span className="font-mono text-xs text-[#3a3a3a]">{work.year}</span>
                </div>
                {/* Hover overlay */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hoveredIdx === i ? 1 : 0 }}
                  transition={{ duration: 0.25 }}
                  className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center gap-3"
                >
                  <div className="w-10 h-10 rounded-full bg-[#e8e0d4] flex items-center justify-center">
                    <ArrowUpRight size={16} className="text-[#080808]" />
                  </div>
                  <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#e8e0d4]">Explore</span>
                </motion.div>
              </div>

              {/* Info */}
              <div className="mt-4 px-1">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-sm font-bold text-[#e8e0d4] tracking-tight group-hover:text-white transition-colors duration-300">
                      {work.title}
                    </h3>
                    <p className="text-[#3a3a3a] text-xs mt-0.5 font-mono">
                      {work.client}
                    </p>
                    <p className="text-[#5a5a5a] text-xs leading-relaxed mt-2 line-clamp-2">
                      {work.desc}
                    </p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-1.5 mt-3">
                  {work.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded-full text-[9px] font-bold uppercase tracking-[0.1em] border border-white/[0.06] text-[#3a3a3a]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
