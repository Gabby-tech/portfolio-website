import type { Metadata } from "next";
import Link from "next/link";
import CopyEmailButton from "../../components/copy-email-button";
import { SectionHeading as H2 } from "../../components/typography";

export const metadata: Metadata = {
  title: "Engineering BossFx — Case Study",
  description:
    "How I designed, built, re-platformed, and operate a production fintech-education platform solo: architecture, decisions, trade-offs, and lessons.",
};

export default function BossFxCaseStudy() {
  return (
    <article className="py-20">
      <p className="font-mono text-sm text-accent">Engineering case study</p>
      <h1 className="mt-3 max-w-2xl text-3xl font-bold tracking-tight text-heading sm:text-4xl">
        BossFx: building and operating a fintech education platform, solo
      </h1>
      <p className="mt-4 max-w-2xl text-secondary">
        2024–present · Founder &amp; sole engineer ·{" "}
        <a href="https://bossfxcademy.com" className="text-accent underline decoration-accent/40 underline-offset-2 hover:decoration-accent">
          bossfxcademy.com
        </a>
      </p>

      <aside className="mt-8 max-w-2xl rounded-lg border border-accent-solid/30 bg-accent-solid/10 p-5">
        <p className="text-sm leading-relaxed text-body">
          <span className="font-semibold text-accent">
            The story behind this platform:
          </span>{" "}
          I wrote about what rebuilding BossFx actually felt like — the broken
          deploys, the debugging method it forced on me, and the trailing-space
          bug I&apos;ll never forget.{" "}
          <Link
            href="/writing/the-website-i-rebuilt-ended-up-rebuilding-me"
            className="font-medium text-accent underline decoration-accent/40 underline-offset-2 hover:decoration-accent"
          >
            Read &quot;The Website I Rebuilt Ended Up Rebuilding Me&quot; →
          </Link>
        </p>
      </aside>

      <div className="mt-12 max-w-prose space-y-5 leading-relaxed">
        <H2>The problem</H2>
        <p>
          Forex education in Nigeria is dominated by hype and scattered across
          Telegram screenshots. I founded BossFx in 2024 to offer the opposite:
          structured, honest trading education — delivered through real
          software rather than a link-in-bio. That meant one person had to be
          the engineering team, the product manager, and the business.
        </p>

        <H2>Constraints shape everything</H2>
        <p>
          The defining engineering constraint was that I am one person with a
          business to run. Every architectural decision follows from it: choose
          boring, managed infrastructure; minimize the number of systems that
          can wake me up; never build what can be integrated. That constraint
          is also why this case study talks about trade-offs more than
          features.
        </p>

        <H2>Architecture</H2>
        <p>The platform as it runs today:</p>
        <ul className="list-disc space-y-2 pl-5 text-secondary">
          <li>
            <span className="text-heading">Next.js (App Router) + TypeScript + Tailwind CSS</span>{" "}
            — one framework covering marketing pages, product pages, and API
            routes, deployed on Vercel with zero server management.
          </li>
          <li>
            <span className="text-heading">Supabase</span> — authentication and
            PostgreSQL. Managed Postgres with row-level security beats
            hand-rolled auth every time when you are the only engineer on call.
          </li>
          <li>
            <span className="text-heading">Flutterwave</span> — payment
            processing suited to Nigerian rails, wired to automated digital
            product delivery.
          </li>
          <li>
            <span className="text-heading">Brevo + Formspree</span> — email
            automation and form handling as services, not code I maintain.
          </li>
          <li>
            <span className="text-heading">Google Analytics + Microsoft Clarity</span>{" "}
            — quantitative funnels plus session-level behavior, used to decide
            what to build next instead of guessing.
          </li>
        </ul>

        <H2>The hardest project: re-platforming a live business</H2>
        <p>
          BossFx first shipped in mid-2025 on a legacy website stack. By early
          2026 it was limiting SEO, performance, and what I could build on top.
          The rebuild onto Next.js/TypeScript/Supabase had one hard rule:{" "}
          <em>the business keeps running</em>. Funnels, analytics, integrations,
          and search rankings all had to survive the migration. The rebuild
          shipped in early 2026 — new stack, preserved SEO, faster pages — and
          taught me more about production engineering than any tutorial could:
          migrations are risk management, not rewrites.
        </p>

        <H2>Trade-offs I&apos;d defend</H2>
        <ul className="list-disc space-y-2 pl-5 text-secondary">
          <li>
            <span className="text-heading">Managed services over control.</span>{" "}
            Supabase and Vercel cost flexibility, but they bought me the only
            resource that mattered: time. The wrong choice for a 50-engineer
            company is the right one for a one-engineer company.
          </li>
          <li>
            <span className="text-heading">Integration over implementation.</span>{" "}
            Payments, email, and forms are all vendors. My code is the glue and
            the product logic — the parts that differentiate.
          </li>
          <li>
            <span className="text-heading">Analytics before features.</span>{" "}
            Instrumentation went in early, so product decisions (which pages,
            which funnels, which products) came from behavior, not opinion.
          </li>
        </ul>

        <H2>What I&apos;d do differently</H2>
        <p>
          Start with TypeScript and the component architecture from day one
          instead of earning the re-platform the hard way; write architecture
          decisions down as I made them (I do now); and treat my own GitHub as
          part of the product from the start — running a real platform in
          private looks identical to not running one at all.
        </p>

        <H2>What&apos;s next</H2>
        <p>
          The BossFx Trading Journal — trade logging with AI-assisted
          performance analysis (Next.js, Supabase, Claude API) — moves BossFx
          from education toward fintech tooling, and is being engineered in the
          open.
        </p>
      </div>

      <div className="mt-16 flex gap-4">
        <Link
          href="/#projects"
          className="rounded-md border border-strong px-5 py-2.5 text-sm font-medium text-heading hover:border-accent hover:text-accent"
        >
          ← All projects
        </Link>
        <CopyEmailButton label="Get in touch" />
      </div>
    </article>
  );
}
