import type { Metadata } from "next";
import Link from "next/link";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://timilehin-shobande.vercel.app"),
  title: {
    default: "Timilehin Shobande — Software Engineer & Product Builder",
    template: "%s — Timilehin Shobande",
  },
  description:
    "Software engineer and founder of BossFx. I design, ship, and operate production software: Next.js, TypeScript, Supabase, PostgreSQL — plus algorithmic trading systems in MQL5.",
  openGraph: {
    title: "Timilehin Shobande — Software Engineer & Product Builder",
    description: "I build technology that solves meaningful real-world problems.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
    >
      <body className="flex min-h-full flex-col bg-zinc-950 font-sans text-zinc-300">
        <header className="sticky top-0 z-10 border-b border-zinc-800/80 bg-zinc-950/90 backdrop-blur">
          <nav
            aria-label="Main"
            className="mx-auto flex max-w-4xl items-center justify-between px-6 py-4"
          >
            <Link
              href="/"
              className="font-semibold tracking-tight text-zinc-100 hover:text-emerald-400"
            >
              Timilehin Shobande
            </Link>
            <div className="flex items-center gap-6 text-sm">
              <Link href="/#projects" className="hover:text-emerald-400">
                Projects
              </Link>
              <Link href="/case-studies/bossfx" className="hover:text-emerald-400">
                Case study
              </Link>
              <Link href="/#contact" className="hover:text-emerald-400">
                Contact
              </Link>
            </div>
          </nav>
        </header>
        <main className="mx-auto w-full max-w-4xl flex-1 px-6">{children}</main>
        <footer className="border-t border-zinc-800/80">
          <div className="mx-auto flex max-w-4xl flex-wrap items-center justify-between gap-4 px-6 py-8 text-sm text-zinc-500">
            <p>© 2026 Timilehin Shobande · Lagos, Nigeria</p>
            <div className="flex gap-5">
              <a href="https://github.com/Gabby-tech" className="hover:text-emerald-400">
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/shobande-timilehin-3386711a0"
                className="hover:text-emerald-400"
              >
                LinkedIn
              </a>
              <a href="https://bossfxcademy.com" className="hover:text-emerald-400">
                BossFx
              </a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
