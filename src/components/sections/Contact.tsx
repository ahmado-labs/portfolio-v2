"use client";
import { motion } from "framer-motion";
import { ArrowUpRight, Mail, MessageCircle, Globe, Tv2 } from "lucide-react";
import { useRef, useState } from "react";
import { Variants } from "framer-motion";

function MagneticBtn({
  children,
  className,
  href,
}: {
  children: React.ReactNode;
  className?: string;
  href: string;
}) {
  const ref = useRef<HTMLAnchorElement>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const onMouseMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) * 0.28;
    const y = (e.clientY - rect.top - rect.height / 2) * 0.28;
    setPos({ x, y });
  };

  return (
    <motion.a
      ref={ref}
      href={href}
      onMouseMove={onMouseMove}
      onMouseLeave={() => setPos({ x: 0, y: 0 })}
      animate={{ x: pos.x, y: pos.y }}
      transition={{ type: "spring", stiffness: 300, damping: 25 }}
      data-cursor
      className={className}
    >
      {children}
    </motion.a>
  );
}

const socials = [
  { label: "Instagram", icon: Tv2,   href: "https://www.instagram.com/ahma_doee/" },
  { label: "LinkedIn",  icon: Globe, href: "#" },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
} as any;

export default function Contact() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center px-6 py-8 relative overflow-hidden">
      {/* Ambient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[250px] bg-[#c9b99a]/[0.04] blur-[100px] pointer-events-none" />

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="section-label text-[#c9b99a] mb-6"
      >
        Contact
      </motion.p>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="text-center"
      >
        {/* Heading — ukuran lebih compact */}
        <motion.h2
          variants={itemVariants}
          className="text-display font-black text-[clamp(3rem,8vw,7.5rem)] leading-[0.88] text-[#f0ede8]"
        >
          Let's <span className="text-gradient-warm">Connect.</span>
        </motion.h2>

        <motion.p
          variants={itemVariants}
          className="text-[#4a4a4a] text-base max-w-lg mx-auto leading-relaxed mt-5 mb-8"
        >
          Setiap ide memiliki potensi untuk menjadi karya. Melalui pendekatan yang tepat, gagasan dapat diterjemahkan menjadi visual yang bermakna.
        </motion.p>

        {/* CTAs */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row justify-center gap-3 mb-8"
        >
          <MagneticBtn
            href="mailto:widaahmat@gmail.com"
            className="btn-shimmer group inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-[#e8e0d4] text-[#080808] rounded-full font-bold text-sm shadow-xl shadow-[#e8e0d4]/8 hover:bg-white transition-all duration-300"
          >
            <Mail size={16} />
            Email Me
            <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </MagneticBtn>

          <MagneticBtn
            href="https://wa.me/62xxxxxxxxxx"
            className="group inline-flex items-center justify-center gap-2.5 px-8 py-4 border border-white/[0.1] text-[#f0ede8] rounded-full font-bold text-sm hover:bg-white/[0.04] hover:border-white/[0.2] transition-all duration-300"
          >
            <MessageCircle size={16} />
            WhatsApp
          </MagneticBtn>
        </motion.div>

        {/* Divider */}
        <motion.div variants={itemVariants} className="flex items-center gap-4 max-w-xs mx-auto mb-6">
          <div className="flex-1 h-px bg-white/[0.05]" />
          <span className="text-[#2a2a2a] text-xs font-mono whitespace-nowrap">atau temukan saya di</span>
          <div className="flex-1 h-px bg-white/[0.05]" />
        </motion.div>

        {/* Social links */}
        <motion.div variants={itemVariants} className="flex justify-center gap-3">
          {socials.map(({ label, icon: Icon, href }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor
              aria-label={label}
              className="group flex items-center gap-2 px-4 py-2 rounded-full border border-white/[0.06] text-[#3a3a3a] hover:text-[#e8e0d4] hover:border-white/[0.14] transition-all duration-300 text-sm font-bold"
            >
              <Icon size={14} />
              {label}
            </a>
          ))}
        </motion.div>
      </motion.div>

      {/* Footer */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="absolute bottom-6 text-[#2a2a2a] text-xs font-mono"
      >
        © {new Date().getFullYear()} Ahmad — Digital Heritage Designer
      </motion.p>
    </div>
  );
}
