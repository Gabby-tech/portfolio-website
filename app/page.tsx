import Link from "next/link";
import CopyEmailButton from "./components/copy-email-button";

const projects = [
  {
    name: "BossFx Platform",
    tagline: "Production fintech-education platform, built and operated solo",
    description:
      "Next.js + TypeScript frontend, Supabase auth and PostgreSQL backend, Flutterwave payments, full acquisition funnel with email automation and analytics. Serving real users with paid products since 2024; re-platformed to the modern stack in 2026 with the business running.",
    stack: ["Next.js", "TypeScript", "Supabase", "PostgreSQL", "Flutterwave", "Vercel"],
    links: [
      { label: "Live site", href: "https://bossfxcademy.com" },
      { label: "Engineering case study", href: "/case-studies/bossfx" },
    ],
  },
  {
    name: "BossFx SMA Pro Trend EA",
    tagline: "Automated trading system where bugs cost real money",
    description:
      "MetaTrader 5 Expert Advisor in MQL5: SMA trend signals wrapped in layered risk controls — percent-risk sizing with margin verification, daily-loss circuit breaker, spread and session filters, broker stop-level validation. Backtested across instruments and timeframes; open source with documented limitations.",
    stack: ["MQL5", "MetaTrader 5", "Risk engineering", "Backtesting"],
    links: [
      {
        label: "Source on GitHub",
        href: "https://github.com/Gabby-tech/bossfx-sma-pro-trend-ea",
      },
    ],
  },
  {
    name: "BossFx Trading Journal",
    tagline: "AI-assisted trade analysis — in development",
    description:
      "Trade logging with AI-generated performance analysis and pattern feedback, built on Next.js, Supabase, and the Claude API. The next BossFx product, engineered in the open.",
    stack: ["Next.js", "Supabase", "Claude API", "TypeScript"],
    links: [],
  },
  {
    name: "AI-Enabled NFT Marketplace",
    tagline: "Final-year project — architecture and working prototype",
    description:
      "Designed the complete system architecture — database, auth, marketplace flows, and an AI validation pipeline for fraud detection and authenticity — and built a working prototype demonstrating feasibility. Scope was cut explicitly and documented: the honest version of shipping under a deadline.",
    stack: ["System design", "React", "Node.js", "Polygon/IPFS concepts", "ML concepts"],
    links: [],
  },
];

const skills = [
  "TypeScript",
  "JavaScript",
  "React",
  "Next.js",
  "Tailwind CSS",
  "Node.js",
  "Supabase",
  "PostgreSQL",
  "SQL",
  "Python",
  "MQL5",
  "Git & GitHub",
  "Vercel",
];

export default function Home() {
  return (
    <>
      <section className="py-24 sm:py-32">
        <p className="mb-4 font-mono text-sm text-emerald-400">
          Software Engineer · Product Builder · Founder
        </p>
        <h1 className="max-w-2xl text-4xl font-bold tracking-tight text-zinc-100 sm:text-5xl">
          I build technology that solves meaningful real-world problems.
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed">
          I&apos;m a Computer Science graduate from the University of Lagos who
          chose to learn by building. Instead of waiting for my first
          engineering job, I founded{" "}
          <a href="https://bossfxcademy.com" className="text-emerald-400 hover:underline">
            BossFx
          </a>
          , where I design and ship the software, build the digital products,
          and run the systems that keep a one-person fintech education company
          working.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <Link
            href="/case-studies/bossfx"
            className="rounded-md bg-emerald-500 px-5 py-2.5 text-sm font-medium text-zinc-950 hover:bg-emerald-400"
          >
            Read the engineering case study
          </Link>
          <a
            href="https://github.com/Gabby-tech"
            className="rounded-md border border-zinc-700 px-5 py-2.5 text-sm font-medium text-zinc-200 hover:border-emerald-400 hover:text-emerald-400"
          >
            GitHub
          </a>
        </div>
      </section>

      <section id="projects" className="scroll-mt-20 border-t border-zinc-800/80 py-20">
        <h2 className="text-2xl font-semibold tracking-tight text-zinc-100">Projects</h2>
        <p className="mt-2 text-zinc-400">
          Shipped, operating, or honestly labeled as in progress.
        </p>
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.name}
              className="flex flex-col rounded-lg border border-zinc-800 bg-zinc-900/40 p-6 transition-colors hover:border-zinc-600"
            >
              <h3 className="text-lg font-semibold text-zinc-100">{project.name}</h3>
              <p className="mt-1 text-sm text-emerald-400">{project.tagline}</p>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-zinc-400">
                {project.description}
              </p>
              <ul className="mt-4 flex flex-wrap gap-2" aria-label="Tech stack">
                {project.stack.map((tech) => (
                  <li
                    key={tech}
                    className="rounded bg-zinc-800 px-2 py-0.5 font-mono text-xs text-zinc-300"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
              {project.links.length > 0 && (
                <div className="mt-4 flex gap-4 text-sm">
                  {project.links.map((link) =>
                    link.href.startsWith("/") ? (
                      <Link
                        key={link.href}
                        href={link.href}
                        className="text-emerald-400 hover:underline"
                      >
                        {link.label} →
                      </Link>
                    ) : (
                      <a
                        key={link.href}
                        href={link.href}
                        className="text-emerald-400 hover:underline"
                      >
                        {link.label} →
                      </a>
                    )
                  )}
                </div>
              )}
            </article>
          ))}
        </div>
      </section>

      <section className="border-t border-zinc-800/80 py-20">
        <h2 className="text-2xl font-semibold tracking-tight text-zinc-100">Stack</h2>
        <ul className="mt-6 flex flex-wrap gap-3" aria-label="Skills">
          {skills.map((skill) => (
            <li
              key={skill}
              className="rounded-md border border-zinc-800 px-3 py-1.5 font-mono text-sm"
            >
              {skill}
            </li>
          ))}
        </ul>
      </section>

      <section id="contact" className="scroll-mt-20 border-t border-zinc-800/80 py-20">
        <h2 className="text-2xl font-semibold tracking-tight text-zinc-100">Contact</h2>
        <p className="mt-4 max-w-xl leading-relaxed">
          I&apos;m open to remote software engineering roles, collaborations, and
          interesting problems. The fastest way to reach me:
        </p>
        <div className="mt-6 flex flex-wrap items-center gap-4">
          <CopyEmailButton />
          <a
            href="https://www.linkedin.com/in/shobande-timilehin-3386711a0"
            className="rounded-md border border-zinc-700 px-5 py-2.5 text-sm font-medium text-zinc-200 hover:border-emerald-400 hover:text-emerald-400"
          >
            LinkedIn
          </a>
        </div>
        <p className="mt-3 text-sm text-zinc-500">
          Clicking the email copies it to your clipboard.
        </p>
      </section>
    </>
  );
}
