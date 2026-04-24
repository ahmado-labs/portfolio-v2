"use client";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Palette, Globe, Sparkles } from "lucide-react";

function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 1400;
          const startTime = performance.now();
          const tick = (now: number) => {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(2, -10 * progress);
            setCount(Math.floor(eased * to));
            if (progress < 1) requestAnimationFrame(tick);
            else setCount(to);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.5 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [to]);

  return <span ref={ref}>{count}{suffix}</span>;
}

const bentoItems = [
  {
    title: "Brand Identity",
    icon: Palette,
    span: "col-span-1",
    desc: "Sistem visual yang konsisten dan relevan.",
    accent: "#c9b99a",
  },
  {
    title: "Digital First",
    icon: Globe,
    span: "col-span-1",
    desc: "Dioptimalkan untuk semua platform digital.",
    accent: "#8a9aa9",
  },
  {
    title: "Strategic",
    icon: Sparkles,
    span: "col-span-2",
    desc: "Setiap keputusan desain punya alasan dan arah yang jelas.",
    accent: "#a9b99a",
  },
];

export default function About() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  const scrollTo = (dir: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;
    const width = el.clientWidth;
    el.scrollBy({
      left: dir === "right" ? width : -width,
      behavior: "smooth",
    });
  };

  // detect active slide
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const handleScroll = () => {
      const index = Math.round(el.scrollLeft / el.clientWidth);
      setActive(index);
    };

    el.addEventListener("scroll", handleScroll);
    return () => el.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="w-full h-full flex flex-col items-center justify-center px-6 py-8 overflow-hidden relative">
      
      <div className="max-w-6xl w-full">
        <div
          ref={scrollRef}
          className="flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory scroll-smooth cursor-grab active:cursor-grabbing"
          style={{ WebkitOverflowScrolling: "touch" }}
        >

          {/* SLIDE 1 */}
          <div className="min-w-full snap-start flex items-center">
            <div className="grid md:grid-cols-2 gap-10 items-center w-full">
              
              <div>
                <p className="section-label text-[#c9b99a] mb-4">
                  About Me
                </p>

                <h2 className="text-display font-black text-[clamp(2rem,4vw,3.5rem)] text-[#f0ede8] leading-[0.9] mb-5">
                  Desain adalah bahasa, <span className="text-[#3a3a3a]">bukan dekorasi.</span>
                </h2>

                <p className="text-[#5a5a5a] text-base leading-relaxed italic border-l-2 border-[#c9b99a]/30 pl-5 mb-6">
                  "Saya percaya desain bukan hanya soal estetika, tapi tentang bagaimana sebuah brand bisa terasa dan diingat."
                </p>

                <div className="flex gap-8 pt-5 border-t border-white/[0.05]">
                  {[{ to: 11, suffix: "+", label: "Tahun" }, { to: 50, suffix: "+", label: "Project" }, { to: 1, suffix: "+", label: "Brand" }].map(({ to, suffix, label }) => (
                    <div key={label}>
                      <p className="text-display font-black text-2xl text-[#e8e0d4]">
                        <Counter to={to} suffix={suffix} />
                      </p>
                      <p className="text-[#3a3a3a] text-xs mt-0.5">{label}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <div className="grid grid-cols-2 gap-2.5">
                  <div className="col-span-2 p-5 rounded-[1.5rem] bg-[#0f0f0f] border border-white/[0.05]">
                    <p className="text-[#6b6b6b] text-sm leading-relaxed">
                      Seorang <span className="text-[#e8e0d4] font-medium">Santri & Multimedia Producer</span> yang berfokus pada solusi multimedia dan identitas visual.
                    </p>
                  </div>

                  {bentoItems.map(({ title, icon: Icon, span, desc, accent }) => (
                    <div key={title} className={`${span} p-4 rounded-[1.5rem] bg-[#0f0f0f] border border-white/[0.05]`}>
                      <Icon size={14} style={{ color: accent }} />
                      <h3 className="font-bold text-[#e8e0d4] text-xs mt-2">{title}</h3>
                      <p className="text-[#4a4a4a] text-xs">{desc}</p>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>

          {/* SLIDE 2 */}
          <div className="min-w-full snap-start flex items-center">
            <div className="max-w-4xl px-6 md:px-0">

              <h2 className="text-display font-black text-[clamp(2rem,4vw,3.5rem)] text-[#f0ede8] leading-[0.9] mb-5">
                Esensi <span className="text-[#3a3a3a]">Diri.</span>
              </h2>

              <p className="text-[#5a5a5a] text-base leading-relaxed italic border-l-2 border-[#c9b99a]/30 pl-5">
                Seorang penuntut ilmu yang mendedikasikan diri pada perancangan visual berbasis makna dan pesan...
              </p>
            </div>
          </div>

          {/* SLIDE 3 */}
          <div className="min-w-full snap-start flex items-center">
            <div className="max-w-4xl px-6 md:px-0">

              <h2 className="text-display font-black text-[clamp(2rem,4vw,3.5rem)] text-[#f0ede8] leading-[0.9] mb-5">
                Esensi <span className="text-[#3a3a3a]">Diri.</span>
              </h2>

              <p className="text-[#5a5a5a] text-base leading-relaxed italic border-l-2 border-[#c9b99a]/30 pl-5">
                Bagi saya, desain adalah bahasa sunyi yang berbicara tanpa suara, lahir dari rasa, tumbuh dalam imajinasi, lalu menjelma menjadi bentuk yang dapat ditangkap oleh mata dan dirasakan oleh hati...
              </p>
            </div>
          </div>

          {/* SLIDE 4 */}
          <div className="min-w-full snap-start flex items-center">
            <div className="max-w-4xl px-6 md:px-0">

              <h2 className="text-display font-black text-[clamp(2rem,4vw,3.5rem)] text-[#f0ede8] leading-[0.9] mb-5">
                Esensi <span className="text-[#3a3a3a]">Diri.</span>
              </h2>

              <p className="text-[#5a5a5a] text-base leading-relaxed italic border-l-2 border-[#c9b99a]/30 pl-5">
                Perjalanan kreatif ini bermula dari perancangan desain grafis dan aset visual untuk pasar digital,
                serta pengembangan berbagai media publikasi digital maupun cetak yang kemudian berkembang ke ranah produksi video secara utuh, dari tahap pra hingga pascaproduksi,
                bersamaan dengan pengelolaan operasional live streaming serta strategi konten dan branding di media sosial.
              </p>
            </div>
          </div>

          {/* SLIDE 5 */}
          <div className="min-w-full snap-start flex items-center">
            <div className="max-w-4xl px-6 md:px-0">

              <h2 className="text-display font-black text-[clamp(2rem,4vw,3.5rem)] text-[#f0ede8] leading-[0.9] mb-5">
                Esensi <span className="text-[#3a3a3a]">Diri.</span>
              </h2>

              <p className="text-[#5a5a5a] text-base leading-relaxed italic border-l-2 border-[#c9b99a]/30 pl-5">
                Dalam setiap prosesnya, saya menempatkan konsistensi, presisi, dan perhatian terhadap detail sebagai dasar. 
                Setiap karya berangkat dari pengolahan ide dan referensi, dengan pendekatan yang menekankan kejelasan pesan dan kedalaman makna. 
                Saat ini, saya banyak mengeksplorasi tipografi sebagai medium utama dalam pengembangan typeface, 
                sekaligus terus memperkuat kapasitas diri dalam membangun narasi visual yang berdampak.
              </p>
            </div>
          </div>

          {/* SLIDE 6 */}
          <div className="min-w-full snap-start flex items-center">
            <div className="max-w-4xl px-6 md:px-0">

              <h2 className="text-display font-black text-[clamp(2rem,4vw,3.5rem)] text-[#f0ede8] leading-[0.9] mb-5">
                Esensi <span className="text-[#3a3a3a]">Diri.</span>
              </h2>

              <p className="text-[#5a5a5a] text-base leading-relaxed italic border-l-2 border-[#c9b99a]/30 pl-5">
                Berangkat dari latar belakang sebagai santri, saya memandang media dan teknologi sebagai sarana untuk menyampaikan nilai dan pesan kepada generasi masa depan.
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* INDICATOR + ARROW */}
      <div className="flex flex-col items-center gap-4 mt-6">
        
        {/* DOT INDICATOR & SLide */}
        <div className="flex gap-2">
          {[0,1,2,3,4,5].map((i) => (
            <div
              key={i}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                active === i ? "bg-white scale-110" : "bg-white/30"
              }`}
            />
          ))}
        </div>

        {/* ARROW */}
        <div className="flex gap-3">
          <button
            onClick={() => scrollTo("left")}
            className="w-10 h-10 rounded-full bg-white/10 backdrop-blur border border-white/10 text-white hover:bg-white/20 transition"
          >
            ←
          </button>

          <button
            onClick={() => scrollTo("right")}
            className="w-10 h-10 rounded-full bg-white/10 backdrop-blur border border-white/10 text-white hover:bg-white/20 transition"
          >
            →
          </button>
        </div>

      </div>
    </div>
  );
}