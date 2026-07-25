import type { Metadata } from "next";
import Link from "next/link";
import CopyEmailButton from "../../components/copy-email-button";
import { SectionHeading as H2 } from "../../components/typography";

export const metadata: Metadata = {
  title: "Building a Trustworthy AI Tutor, Part II: Shipping It to the Public",
  description:
    "What happened when a private, evaluation-gated RAG tutor met production — a no-login public launch, the humbling bugs, and why trust came from engineering process, not intelligence.",
  openGraph: {
    title: "Building a Trustworthy AI Tutor, Part II: Shipping It to the Public",
    description:
      "A private, evaluation-gated RAG tutor meets production: a no-login public launch, the ordinary bugs that humbled me, and why I finally trust it.",
    type: "article",
    publishedTime: "2026-07-25",
    authors: ["Timilehin Shobande"],
    images: ["/writing/ai-tutor-part2-quote.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Building a Trustworthy AI Tutor, Part II: Shipping It to the Public",
    description:
      "A trustworthy RAG tutor meets production — the no-login launch, the humbling bugs, and why trust came from process, not intelligence.",
    images: ["/writing/ai-tutor-part2-quote.png"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline:
    "Building a Trustworthy AI Tutor, Part II: Shipping It to the Public",
  description:
    "What happened when a private, evaluation-gated RAG tutor met production — a no-login public launch, the humbling bugs, and why trust came from engineering process, not intelligence.",
  datePublished: "2026-07-25",
  author: {
    "@type": "Person",
    name: "Timilehin Shobande",
    url: "https://timilehin-shobande.vercel.app",
  },
  publisher: {
    "@type": "Person",
    name: "Timilehin Shobande",
  },
  image: "https://timilehin-shobande.vercel.app/writing/ai-tutor-part2-quote.png",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id":
      "https://timilehin-shobande.vercel.app/writing/building-a-trustworthy-ai-tutor-part-2",
  },
  keywords:
    "RAG, retrieval-augmented generation, production AI, anonymous access, LLM evaluation, AI governance, shipping AI",
};

export default function Article() {
  return (
    <article className="py-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <p className="font-mono text-sm text-accent">
        Engineering · July 2026 · 4 min read
      </p>
      <h1 className="mt-3 max-w-2xl text-3xl font-bold tracking-tight text-heading sm:text-4xl">
        Building a Trustworthy AI Tutor, Part II: Shipping It to the Public
      </h1>
      <p className="mt-4 max-w-2xl text-secondary">
        By Timilehin Shobande · Part II of the BossFx AI Platform story — what
        happened when a tutor I could trust in private met production.
      </p>

      <aside className="mt-8 max-w-2xl rounded-lg border border-accent-solid/30 bg-accent-solid/10 p-5">
        <p className="text-sm leading-relaxed text-body">
          This continues{" "}
          <Link
            href="/writing/building-a-trustworthy-ai-tutor"
            className="text-accent underline decoration-accent/40 underline-offset-2 hover:decoration-accent"
          >
            Part I
          </Link>
          . Every figure below is drawn from the platform&apos;s frozen milestone
          records, immutable Architecture Decision Records, and archived
          evaluation reports — the same evidence trail Part I was built on.
        </p>
      </aside>

      <div className="mt-12 max-w-prose space-y-5 leading-relaxed">
        <p>
          Not long ago, the tutor from Part I lived behind a login and a feature
          flag — proven, but private.
        </p>
        <p>
          Today, anyone can open BossFx Academy, ask a trading question, and get
          a grounded answer with its sources, without ever creating an account.
        </p>
        <p>
          Part I was about building a tutor I could trust. Part II is about what
          happened when it met production.
        </p>

        <H2>The work I promised to do</H2>
        <p>
          Part I ended on a promise I didn&apos;t enjoy making. The tutor&apos;s
          first honest score was a bruising{" "}
          <strong className="text-heading">35.7%</strong>, and I said out loud
          that the number would only move after the work that justified it — no
          shortcuts, no quietly nudging the baseline to feel better.
        </p>
        <p>
          So I did the work in the order Part I named it: filled the gaps in the
          curriculum the baseline had exposed, calibrated the retrieval floor
          from real data instead of a hopeful guess, and wired the evaluation
          gate into CI so that nothing merges if quality slips. Only then did I
          let myself re-measure.
        </p>
        <p>
          It reached an{" "}
          <strong className="text-heading">80.0% gate pass</strong>, with
          grounding failures sitting at zero across every archived run. I care
          less about the number than about how it got there — earned in sequence,
          and impossible to fake past CI. That distinction turned out to matter
          more than the score itself.
        </p>

        <H2>Then I opened the doors</H2>
        <p>
          Here&apos;s the decision I&apos;m proudest of: for the first phase, the
          tutor is public with no login at all. That&apos;s a product choice, not
          a shortcut. The whole value of a trustworthy tutor collapses if a
          nervous beginner has to create an account before they can ask whether
          they&apos;ve misunderstood leverage.
        </p>
        <p>
          Opening it up safely meant treating access as a capability rather than
          an identity. Anonymous visitors reach only the public parts of the
          system, their requests are rate-limited, and nothing personal is
          stored. The authenticated path didn&apos;t change at all — anonymous
          mode is purely additive, and it sits behind a flag I can pull in a
          single move. It shipped as{" "}
          <span className="font-mono text-sm">v1.1.0</span>. The grounding
          guarantee from Part I didn&apos;t change a line; it just started
          answering strangers.
        </p>

        <H2>The humbling part</H2>
        <p>
          Getting it working on my machine was the easy 80%. Production was the
          other 80%, and it was humbling in the most ordinary ways.
        </p>
        <p>
          A <span className="font-mono text-sm">502</span> that looked like a
          catastrophe turned out to be a single wrong value in the deploy
          configuration — the code was fine. Rows silently failing to save traced
          back not to the database logic but to seed data that lived in a local
          file and had never been applied to production, with a foreign key
          quietly depending on it. A client SDK politely refused to send a
          request without a login token, breaking the exact feature I most wanted
          to show off. And a handful of public pages ran the tutor but had never
          loaded its script, so they fell back to the old engine without a word.
        </p>
        <p>
          None of these were clever bugs. I found every one the same way this
          project taught me to work: isolate a single variable, ask what changed
          since it last worked, and let the evidence — not my first, most
          flattering guess — pick the cause. Every fix was small and reversible,
          because I&apos;d built the system so that they could be.
        </p>

        <H2>What I actually built</H2>
        <p>
          The evaluation gate that made the private tutor trustworthy is the same
          thing that made the public launch uneventful. There was no launch-day
          scramble over answer quality, because quality had been a blocking part
          of every merge for months.
        </p>
        <blockquote className="my-8 border-l-4 border-accent-solid pl-5 text-xl font-semibold italic leading-snug text-heading">
          Boring launches are a feature you build long before launch day.
        </blockquote>

        <H2>Why I trust it</H2>
        <p>
          The code answering questions in production today isn&apos;t
          dramatically different from the code I had months ago. Same retrieval,
          the same grounding guarantee, much the same pipeline.
        </p>
        <p>
          What changed is that I trust it now — and, more than that, I know
          exactly why.
        </p>
        <p>
          Building the model was never the hard part. Building the engineering
          discipline around it was: the evaluation gate, the archived runs, the
          review that lets nothing reach a student unapproved, the habit of small
          reversible changes. Production trust didn&apos;t come from the system
          being clever. It came from the process being honest — and that&apos;s
          the part you can&apos;t bolt on at the end.
        </p>
        <p>
          I set out to build a tutor that sounds smart. I&apos;m happier that I
          built one that knows when to say{" "}
          <em>&quot;I don&apos;t know,&quot;</em> and that I understand well
          enough to explain why it does.
        </p>
      </div>

      <div className="mt-16 flex gap-4">
        <Link
          href="/writing/building-a-trustworthy-ai-tutor"
          className="rounded-md border border-strong px-5 py-2.5 text-sm font-medium text-heading hover:border-accent hover:text-accent"
        >
          Read Part I
        </Link>
        <CopyEmailButton label="Get in touch" />
      </div>
    </article>
  );
}
