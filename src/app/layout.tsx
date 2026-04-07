import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

/*
  Cabinet Grotesk — distinctive display font.
  Download dari: https://www.fontshare.com/fonts/cabinet-grotesk
  Letakkan di: /public/fonts/CabinetGrotesk-Variable.woff2
  
  Alternatif jika belum punya file: ganti dengan Google Fonts 'Syne'
  import { Syne } from "next/font/google"
  const cabinet = Syne({ variable: "--font-cabinet", subsets: ["latin"] })
*/
const cabinet = localFont({
  src: "../../public/fonts/CabinetGrotesk-Variable.woff2",
  variable: "--font-cabinet",
  display: "swap",
  // Jika file belum ada, hapus block ini dan gunakan Syne dari Google Fonts
});

export const metadata: Metadata = {
  title: "Ahmadu — Designer",
  description:
    "Brand & Digital Designer yang membantu brand dan personal creator membangun identitas visual yang strategis, konsisten, dan mudah diingat.",
  keywords: ["brand designer", "digital designer", "visual identity", "branding", "producer" , "portfolio"],
  authors: [{ name: "Wida Ahmad Hidayat" }],
  openGraph: {
    title: "Ahmad — Digital Heritage Designer",
    description:
      "Memadukan disiplin santri dengan strategi visual kreatif melalui desain, video, dan broadcasting.",
    type: "website",
    locale: "id_ID",
    // url: "https://yourwebsite.com",
    // images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ahmad — Digital Heritage Designer",
    description: "Brand & Digital Designer. Visual identity, digital design, content strategy.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${geistSans.variable} ${geistMono.variable} ${cabinet.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#080808]">
        {children}
      </body>
    </html>
  );
}

/*
  ============================================================
  CATATAN FONT:
  
  Opsi A — Cabinet Grotesk (Recommended, Fontshare - GRATIS):
    1. Download dari https://www.fontshare.com/fonts/cabinet-grotesk
    2. Letakkan CabinetGrotesk-Variable.woff2 di /public/fonts/
    3. Gunakan code di atas
  
  Opsi B — Syne dari Google Fonts (Simpler):
    import { Syne } from "next/font/google"
    const cabinet = Syne({
      variable: "--font-cabinet",
      subsets: ["latin"],
      display: "swap",
    })
  ============================================================
*/
