"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, ExternalLink } from "lucide-react";

const microstockItems = [
  {
    title: "Digital Asset Library",
    category: "Vector · Illustration",
    platform: "Adobe Stock",
    href: "https://stock.adobe.com/uk/contributor/205709091/Ahmad",
    gradient: "from-[#1a1510] via-[#2a1f12] to-[#1a1a1a]",
    accent: "#c9b99a",
  },
  {
    title: "Digital Vector Assets",
    category: "Vector · Logo",
    platform: "Adobe Stock",
    href: "https://stock.adobe.com/uk/search?creator_id=205709091&filters%5Bcontent_type%3Aphoto%5D=1&filters%5Bcontent_type%3Aillustration%5D=1&filters%5Bcontent_type%3Azip_vector%5D=1&filters%5Bcontent_type%3Avideo%5D=1&filters%5Bcontent_type%3Atemplate%5D=1&filters%5Bcontent_type%3A3d%5D=1&filters%5Bcontent_type%3Aaudio%5D=0&filters%5Binclude_stock_enterprise%5D=0&filters%5Bis_editorial%5D=0&filters%5Bcontent_type%3Aimage%5D=1&filters%5Bfetch_excluded_assets%5D=1&order=relevance&search_page=2&get_facets=0&search_type=pagination",
    gradient: "from-[#0d1520] via-[#12202e] to-[#0a0a0a]",
    accent: "#8aa9c9",
  },
  {
    title: "Abstract Swoosh Logo",
    category: "Vector · Pattern",
    platform: "Adobe Stock",
    href: "https://stock.adobe.com/uk/search?creator_id=205709091&filters%5Bcontent_type%3Aphoto%5D=1&filters%5Bcontent_type%3Aillustration%5D=1&filters%5Bcontent_type%3Azip_vector%5D=1&filters%5Bcontent_type%3Avideo%5D=1&filters%5Bcontent_type%3Atemplate%5D=1&filters%5Bcontent_type%3A3d%5D=1&filters%5Bcontent_type%3Aaudio%5D=0&filters%5Binclude_stock_enterprise%5D=0&filters%5Bis_editorial%5D=0&filters%5Bcontent_type%3Aimage%5D=1&filters%5Bfetch_excluded_assets%5D=1&order=relevance&limit=100&search_page=3&search_type=pagination&get_facets=0",
    gradient: "from-[#150d1a] via-[#1a1025] to-[#0a0a0a]",
    accent: "#b99ac9",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeInOut" } },
} as any;

export default function Products() {
  const [activeTab, setActiveTab] = useState<"microstock" | "font">("microstock");

  return (
    <div className="w-full h-full flex items-center justify-center px-6 py-8">
      <div className="max-w-6xl w-full">
        {/* Header + Tab — satu baris */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
          className="mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4"
        >
          <div>
            <p className="section-label text-[#c9b99a] mb-2">Digital Products</p>

            <h2 className="text-display font-black text-[clamp(2rem,4vw,3.5rem)] text-[#f0ede8] leading-[0.9] mb-4">
              Produk <span className="text-[#3a3a3a]">Digital</span>
            </h2>

            {/* ⬇️ INI JSX YANG KITA TAMBAHKAN */}
            <AnimatePresence mode="wait">
              {activeTab === "microstock" && (
                <motion.div
                  key="microstock-desc"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4"
                >
                  <p className="text-[#5a5a5a] text-sm md:text-base leading-relaxed max-w-md">
                    Kumpulan aset digital yang dirancang dengan pendekatan strategis — siap digunakan untuk kebutuhan branding, konten, dan eksplorasi visual.
                    Tertarik untuk menggunakannya? Silakan eksplorasi.
                  </p>

                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Tab Switcher */}
          <div className="inline-flex p-1 bg-[#0f0f0f] border border-white/[0.06] rounded-full self-start sm:self-auto">
            {(["microstock", "font"] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                data-cursor
                className={`relative px-6 py-2 rounded-full text-xs font-bold uppercase tracking-[0.12em] transition-all duration-300 ${
                  activeTab === tab ? "text-[#080808]" : "text-[#3a3a3a] hover:text-[#6b6b6b]"
                }`}
              >
                {activeTab === tab && (
                  <motion.span
                    layoutId="tab-bg"
                    className="absolute inset-0 bg-[#e8e0d4] rounded-full"
                    style={{ zIndex: 0 }}
                    transition={{ type: "spring", stiffness: 400, damping: 35 }}
                  />
                )}
                <span className="relative z-10">
                  {tab === "microstock" ? "Microstock" : "Font"}
                </span>
              </button>
            ))}
          </div>
        </motion.div>

        {/* Content */}
        <AnimatePresence mode="wait">
          {activeTab === "microstock" ? (
            <motion.div
              key="microstock"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            >
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="grid md:grid-cols-3 gap-3"
              >
                {microstockItems.map((item, i) => (
                  <motion.a
                    key={i}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    variants={cardVariants}
                    data-cursor
                    className="group block rounded-[1.5rem] overflow-hidden border border-white/[0.05] hover:border-white/[0.12] bg-[#0f0f0f] card-glow transition-all duration-500"
                  >
                    {/* Visual Preview */}
                    <div className={`h-32 bg-gradient-to-br ${item.gradient} relative overflow-hidden`}>
                      <div
                        className="absolute inset-0 opacity-20"
                        style={{
                          backgroundImage: `radial-gradient(circle at 30% 50%, ${item.accent}40 0%, transparent 60%)`,
                        }}
                      />
                      <div className="absolute top-3 right-3 px-2.5 py-1 glass rounded-full">
                        <span className="text-[9px] font-bold uppercase tracking-[0.18em] text-[#6b6b6b]">
                          {item.platform}
                        </span>
                      </div>
                    </div>
                    <div className="p-5 flex items-end justify-between">
                      <div>
                        <p className="text-[9px] font-bold uppercase tracking-[0.14em] text-[#3a3a3a] mb-1.5">
                          {item.category}
                        </p>
                        <h3 className="font-bold text-[#e8e0d4] text-sm leading-tight tracking-tight">
                          {item.title}
                        </h3>
                      </div>
                      <div className="w-8 h-8 rounded-full border border-white/[0.06] flex items-center justify-center text-[#3a3a3a] group-hover:border-[#c9b99a]/40 group-hover:text-[#c9b99a] transition-all duration-300">
                        <ArrowUpRight size={13} />
                      </div>
                    </div>
                  </motion.a>
                ))}
              </motion.div>
            </motion.div>
          ) : (
            <motion.div
              key="font"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            >
              <div className="relative rounded-[2rem] overflow-hidden border border-white/[0.06] bg-[#0a0a0a] p-10 md:p-16 text-center group">
                {/* ✅ BACKGROUND LOGO (TAMBAHKAN DI SINI) */}
                <img
                  src="/Logoabda.png"
                  alt="logo"
                  className="absolute right-0 top-1/2 translate-x-[10%] -translate-y-[30%] w-[420px] opacity-[0.10]"
                />
                {/* EXISTING BACKGROUND */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#1a1510]/60 via-transparent to-[#0a0a0a]" />
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[150px] bg-[#c9b99a]/[0.04] blur-[60px] pointer-events-none" />
                {/* CONTENT */}
                <div className="relative z-10">
                  <p className="section-label text-[#3a3a3a] mb-4">Original Typeface Foundry</p>
                  <h3 className="font-black text-[clamp(3rem,8vw,6.5rem)] tracking-tighter leading-none text-gradient-warm">
                    Abda bil Qalam
                  </h3>
                  <p className="mt-5 text-[#4a4a4a] max-w-lg mx-auto text-sm leading-relaxed">
                    Artikulasi karakter melalui tipografi. Dirancang khusus untuk memberikan identitas unik dan dampak nyata bagi brand Anda. Dapatkan lisensi profesional dan mulai bangun identitas Anda
                  </p>
                  <div className="mt-6 flex justify-center gap-5 text-[#2a2a2a] text-3xl font-black tracking-tight">
                    {"ABCDEF".split("").map((c) => (
                      <span key={c} className="hover:text-[#c9b99a] transition-colors duration-200">{c}</span>
                    ))}
                  </div>
                  <a
                    href="https://www.myfonts.com/collections/abda-bil-qalam-foundry"
                    target="_blank"
                    rel="noopener noreferrer"
                    data-cursor
                    className="btn-shimmer inline-flex items-center gap-2 mt-8 px-8 py-3.5 bg-[#e8e0d4] text-[#080808] rounded-full font-bold text-sm hover:bg-white transition-colors duration-300"
                  >
                    View on MyFonts
                    <ExternalLink size={13} />
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
