import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import { Geist, Geist_Mono } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
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
      <body className="flex min-h-full flex-col bg-surface font-sans text-body">
        <header className="sticky top-0 z-10 border-b border-subtle bg-surface/90 backdrop-blur">
          <nav
            aria-label="Main"
            className="mx-auto flex max-w-4xl flex-wrap items-center justify-between gap-y-2 px-6 py-4"
          >
            <Link
              href="/"
              className="whitespace-nowrap font-semibold tracking-tight text-heading hover:text-accent"
            >
              Timilehin Shobande
            </Link>
            <div className="flex items-center gap-4 text-sm sm:gap-6">
              <Link href="/#projects" className="hover:text-accent">
                Projects
              </Link>
              <Link href="/case-studies/bossfx" className="hover:text-accent">
                Case study
              </Link>
              <Link href="/writing" className="hover:text-accent">
                Writing
              </Link>
              <Link href="/#contact" className="hover:text-accent">
                Contact
              </Link>
            </div>
          </nav>
        </header>
        <main className="mx-auto w-full max-w-4xl flex-1 px-6">{children}</main>
        <footer className="border-t border-subtle">
          <div className="mx-auto flex max-w-4xl flex-wrap items-center justify-between gap-4 px-6 py-8 text-sm text-muted">
            <p>© 2026 Timilehin Shobande · Lagos, Nigeria</p>
            <div className="flex gap-5">
              <a href="https://github.com/Gabby-tech" className="hover:text-accent">
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/shobande-timilehin"
                className="hover:text-accent"
              >
                LinkedIn
              </a>
              <a href="https://bossfxcademy.com" className="hover:text-accent">
                BossFx
              </a>
            </div>
          </div>
        </footer>
        <GoogleAnalytics gaId="G-KK2105DYW1" />
        <Script id="microsoft-clarity" strategy="afterInteractive">
          {`(function(c,l,a,r,i,t,y){
            c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
            t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
            y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
          })(window, document, "clarity", "script", "xhefwr646q");`}
        </Script>
      </body>
    </html>
  );
}
