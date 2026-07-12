import type { Metadata } from "next";
import Link from "next/link";
import CopyEmailButton from "../../components/copy-email-button";
import { SectionHeading as H2 } from "../../components/typography";

export const metadata: Metadata = {
  title: "Building a Trustworthy AI Tutor",
  description:
    "How I engineered a production RAG tutor that refuses to guess — evaluation-first, human-governed, and honest about a 35.7% baseline. Solo-built.",
  openGraph: {
    title: "Building a Trustworthy AI Tutor: An Engineering Case Study",
    description:
      "A production RAG learning assistant that refuses to guess — and publishes its own quality scores honestly. Solo-built, evaluation-first, human-governed.",
    type: "article",
    publishedTime: "2026-07-12",
    authors: ["Timilehin Shobande"],
    images: ["/writing/bossfx-live-site.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Building a Trustworthy AI Tutor: An Engineering Case Study",
    description:
      "A production RAG tutor that refuses to guess — evaluation-first, human-governed, honest about a 35.7% baseline.",
    images: ["/writing/bossfx-live-site.png"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline:
    "Building a Trustworthy AI Tutor: An Engineering Case Study of the BossFx AI Platform",
  description:
    "How I engineered a production RAG tutor that refuses to guess — evaluation-first, human-governed, and honest about a 35.7% baseline. Solo-built.",
  datePublished: "2026-07-12",
  author: {
    "@type": "Person",
    name: "Timilehin Shobande",
    url: "https://timilehin-shobande.vercel.app",
  },
  publisher: {
    "@type": "Person",
    name: "Timilehin Shobande",
  },
  image: "https://timilehin-shobande.vercel.app/writing/bossfx-live-site.png",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id":
      "https://timilehin-shobande.vercel.app/writing/building-a-trustworthy-ai-tutor",
  },
  keywords:
    "RAG, retrieval-augmented generation, AI evaluation, pgvector, LLM engineering, AI governance, hallucination prevention",
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
        Engineering · July 2026 · 6 min read
      </p>
      <h1 className="mt-3 max-w-2xl text-3xl font-bold tracking-tight text-heading sm:text-4xl">
        Building a Trustworthy AI Tutor: An Engineering Case Study of the BossFx
        AI Platform
      </h1>
      <p className="mt-4 max-w-2xl text-secondary">
        By Timilehin Shobande · A production RAG learning assistant that refuses
        to guess — and publishes its own quality scores honestly. Solo-built,
        evaluation-first, human-governed.
      </p>

      <aside className="mt-8 max-w-2xl rounded-lg border border-accent-solid/30 bg-accent-solid/10 p-5">
        <p className="text-sm leading-relaxed text-body">
          This is a derived engineering narrative. Every metric, decision, and
          result below is drawn from the BossFx AI Platform&apos;s frozen
          milestone records, immutable Architecture Decision Records (ADRs), and
          archived evaluation reports. It describes a specific point in the
          platform&apos;s history — the first honest quality baseline.
        </p>
      </aside>

      <div className="mt-12 max-w-prose space-y-5 leading-relaxed">
        <H2>The problem</H2>
        <p>
          Retail forex education attracts exactly the people who can least afford
          a confident wrong answer. A beginner who is told the wrong thing about
          leverage or stop-losses can lose real money. So when I set out to build
          an AI learning assistant for BossFx students, the hardest requirement
          was not &quot;answer questions&quot; — it was{" "}
          <strong className="text-heading">
            &quot;never answer beyond what the curriculum actually teaches, and
            say so plainly when it doesn&apos;t know.&quot;
          </strong>
        </p>
        <p>
          That reframes the entire engineering problem. A chatbot optimizes for a
          good answer. A trustworthy tutor optimizes for the <em>right</em>{" "}
          answer — or an honest <em>&quot;I don&apos;t have material on that; ask
          your mentor.&quot;</em> In this domain, a confident hallucination is
          not a bug. It is a liability.
        </p>

        <H2>Constraints that shaped every decision</H2>
        <ul className="list-disc space-y-2 pl-5 text-secondary">
          <li>
            <span className="text-heading">Solo founder.</span> One engineer
            maintaining everything. &quot;Bus factor&quot; is a named risk, so
            the architecture favors boring, mainstream technology and the
            smallest structure that prevents drift — never the largest that looks
            impressive.
          </li>
          <li>
            <span className="text-heading">Real-money domain.</span> No output
            may read as personalized financial advice; the no-answer path is
            treated as the most important path in the system.
          </li>
          <li>
            <span className="text-heading">Honesty as a feature.</span> The
            system must be able to measure — and admit — what it cannot yet do.
          </li>
        </ul>

        <H2>Architecture in one paragraph</H2>
        <p>
          The platform is a TypeScript monorepo with a deliberately
          capability-agnostic core: a provider adapter layer (Anthropic and
          OpenAI behind one interface), a retrieval layer over Postgres +{" "}
          <span className="font-mono text-sm">pgvector</span>, a pipeline that
          orchestrates the retrieval-augmented generation (RAG) flow, and an
          evaluation harness that scores the whole thing. The &quot;Learning
          Assistant&quot; is simply the first capability riding on that
          substrate; future capabilities inherit the same retrieval, evaluation,
          and governance for free. Knowledge lives behind a{" "}
          <strong className="text-heading">
            dual-enforced editorial-review gate
          </strong>{" "}
          — nothing is retrievable until a human approves it.
        </p>

        <H2>Five engineering decisions worth defending</H2>
        <p>
          Each of these is an immutable Architecture Decision Record in the
          repository.
        </p>
        <ol className="list-decimal space-y-3 pl-5 text-body">
          <li>
            <span className="text-heading">
              <span className="font-mono text-sm">pgvector</span> over a
              dedicated vector database (ADR-001).
            </span>{" "}
            At the scale of a curriculum — hundreds to low-thousands of chunks —
            a separate vector store is operational weight a solo founder cannot
            justify. Cosine similarity through a{" "}
            <span className="font-mono text-sm">SECURITY DEFINER</span> Postgres
            function keeps retrieval, authorization, and data in one system.
          </li>
          <li>
            <span className="text-heading">
              A provider adapter, not an SDK dependency (ADR-002).
            </span>{" "}
            No capability code touches a vendor SDK directly. This looked like
            over-abstraction until a real model migration proved its worth
            (below).
          </li>
          <li>
            <span className="text-heading">
              The editorial-review gate, enforced twice (ADR-011).
            </span>{" "}
            Every knowledge document carries a{" "}
            <span className="font-mono text-sm">reviewed_at</span> timestamp.
            Retrieval filters on it in <strong>both</strong> the SQL function and
            the TypeScript retriever — defense in depth. Ingestion clears the flag
            on every re-ingest, so edited material must be re-approved by a human
            before it can ever be served again.
          </li>
          <li>
            <span className="text-heading">
              Evaluation as a first-class, blocking concern (ADR-004).
            </span>{" "}
            The golden-set harness was built <em>alongside</em> the pipeline, not
            bolted on afterward. Anything touching prompts, retrieval, or model
            configuration is expected to pass a scored evaluation before it ships.
          </li>
          <li>
            <span className="text-heading">
              Prompts as immutable, versioned files (ADR-007).
            </span>{" "}
            Prompts are production assets: versioned, snapshot-tested, and rolled
            back by <span className="font-mono text-sm">git revert</span>.
            Retrieved content and user input are always treated as untrusted
            data, never as instructions.
          </li>
        </ol>

        <H2>The centerpiece: why the first quality score was 35.7% — on purpose</H2>
        <p>
          The platform&apos;s first official evaluation against a 14-item
          hand-built golden set scored{" "}
          <strong className="text-heading">35.7% (5 of 14 passing)</strong>. It
          would have been trivial to make that number look better. I didn&apos;t,
          and that was the point.
        </p>
        <p>The evaluation decomposed the failures honestly:</p>
        <ul className="list-disc space-y-2 pl-5 text-secondary">
          <li>
            <span className="text-heading">Every fully-covered topic passed</span>{" "}
            — leverage, stop-loss, spread, drawdown, session nuance.
          </li>
          <li>
            <span className="text-heading">Six failures were content gaps</span>,
            not engineering faults: the assistant correctly declined to answer
            questions (pips, lot sizes, demo-vs-live, risk-reward, market
            structure, an FAQ item) that the ingested Wave A curriculum simply
            doesn&apos;t cover yet. The grounding discipline worked exactly as
            designed.
          </li>
          <li>
            <span className="text-heading">
              One failure exposed a real tuning need
            </span>{" "}
            in retrieval (below).
          </li>
        </ul>
        <p>
          A 35.7% baseline that <em>quantifies exactly which curriculum content
          is worth acquiring next</em> is far more useful than a 90% number that
          hides its own gaps. The score is the honest starting line the platform
          must beat — and it is now an immutable, archived artifact. Supporting
          metrics from the same run: grounding-failure rate 7.7%, retrieval
          precision/recall 22.6% / 42.9%, p50/p95 latency 4.5 s / 5.5 s, and a
          mean cost of <strong className="text-heading">$0.00225 per query</strong>{" "}
          against a hard per-query cost ceiling enforced in code.
        </p>

        <H2>A war story: the bug 86 green tests could not see</H2>
        <p>
          The evaluation&apos;s rubric judge — a Claude model that scores answers
          — failed on its very first real call: the Claude 5-family models{" "}
          <strong className="text-heading">
            reject a <span className="font-mono text-sm">temperature</span>{" "}
            parameter
          </strong>{" "}
          the adapter had always sent. Eighty-six passing unit tests never caught
          it, because unit tests mock the provider. Only a real API call could.
        </p>
        <p>
          Two things saved the run. First, the judge was built to{" "}
          <strong className="text-heading">fail closed</strong> — a broken judge
          scored items as incorrect rather than silently passing them, so the
          failure was loud, not invisible. Second, the provider-adapter boundary
          (ADR-002) meant the fix was one change in one file, applied uniformly to
          both providers. The lesson is now a standing rule: any new model family
          gets one real smoke call before it is trusted anywhere.
        </p>

        <H2>Measure before you optimize</H2>
        <p>
          The retrieval layer shipped with an uncalibrated similarity floor of
          0.25. The evaluation didn&apos;t just flag that it was wrong — it
          produced the <strong className="text-heading">distribution</strong>{" "}
          needed to fix it. Correct content matched at cosine similarities of
          0.56–0.65; irrelevant content on out-of-scope questions still cleared
          0.25 at up to ~0.47, because glossary chunks bundle many terms and
          dilute single-term matches. The two populations overlap in a 0.35–0.47
          band that no single global threshold can cleanly separate today.
        </p>
        <p>
          The recommendation — raise the floor to 0.35 now, then toward
          ~0.45–0.50 after content density improves — is deliberately{" "}
          <strong className="text-heading">not yet applied</strong>. Tuning a
          production threshold before the evidence justifies it is precisely the
          premature optimization the project&apos;s principles forbid.
        </p>

        <H2>The governance model: automation prepares, humans approve</H2>
        <p>
          The same discipline runs end to end. Automation ingests, chunks,
          embeds, retrieves, evaluates, and reports. A human performs every act
          that makes something official: editorial approval of knowledge,
          golden-set sign-off, prompt releases, and milestone freezes. This
          single principle — <em>automation prepares, humans approve</em> — began
          as one ingestion rule and became the constitution of the whole system.
        </p>

        <H2>Outcomes</H2>
        <ul className="list-disc space-y-2 pl-5 text-secondary">
          <li>
            A production-grade RAG platform validated against{" "}
            <span className="text-heading">real</span> Supabase, real{" "}
            <span className="font-mono text-sm">pgvector</span>, and both real
            model providers — not mocks.
          </li>
          <li>
            An <span className="text-heading">11-document / 106-chunk</span>{" "}
            curriculum corpus, every document human-approved before it could be
            retrieved, ingested for a total embedding cost of $0.00034.
          </li>
          <li>
            An honest, archived quality baseline and a five-milestone frozen
            history, built solo under CI gates, immutable ADRs, and 86 automated
            tests — with total model-provider spend across the whole
            knowledge-and-evaluation milestone of roughly{" "}
            <span className="text-heading">$0.10</span>.
          </li>
        </ul>

        <H2>What&apos;s next</H2>
        <p>
          The platform is intentionally gated behind honest readiness criteria:
          acquire the curriculum content the baseline proved is missing,
          calibrate the retrieval floor from the collected distribution, wire the
          evaluation gate into CI, then re-measure. The number only earns the
          right to go up after the work that justifies it is done.
        </p>
      </div>

      <div className="mt-16 flex gap-4">
        <Link
          href="/case-studies/bossfx"
          className="rounded-md border border-strong px-5 py-2.5 text-sm font-medium text-heading hover:border-accent hover:text-accent"
        >
          Read the BossFx case study
        </Link>
        <CopyEmailButton label="Get in touch" />
      </div>
    </article>
  );
}
