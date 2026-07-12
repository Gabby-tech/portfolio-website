import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Writing",
  description:
    "Engineering stories from building BossFx and learning software the hard way.",
};

const articles = [
  {
    slug: "building-a-trustworthy-ai-tutor",
    title:
      "Building a Trustworthy AI Tutor: An Engineering Case Study of the BossFx AI Platform",
    category: "Engineering",
    date: "July 2026",
    summary:
      "A production RAG learning assistant that refuses to guess — and publishes its own quality scores honestly. Why the first quality score was 35.7% on purpose, the bug 86 green tests couldn't see, and the governance rule that became the system's constitution.",
  },
  {
    slug: "the-website-i-rebuilt-ended-up-rebuilding-me",
    title: "The Website I Rebuilt Ended Up Rebuilding Me",
    category: "Engineering",
    date: "July 2026",
    summary:
      "I left a website builder to rebuild BossFx from scratch with Next.js and Supabase. What actually broke, the four debugging questions I ask now, and how the project rebuilt me.",
  },
];

export default function Writing() {
  return (
    <section className="py-20">
      <h1 className="text-3xl font-bold tracking-tight text-heading">
        Writing
      </h1>
      <p className="mt-3 max-w-xl text-secondary">
        Engineering stories from building real products. No tutorials, no
        hype, just what actually happened.
      </p>
      <div className="mt-12 space-y-8">
        {articles.map((article) => (
          <article
            key={article.slug}
            className="rounded-lg border border-subtle bg-raised p-6 transition-colors hover:border-strong"
          >
            <p className="font-mono text-sm text-accent">
              {article.category ? `${article.category} · ` : ""}
              {article.date}
            </p>
            <h2 className="mt-2 text-xl font-semibold text-heading">
              <Link
                href={`/writing/${article.slug}`}
                className="hover:text-accent"
              >
                {article.title}
              </Link>
            </h2>
            <p className="mt-3 leading-relaxed text-secondary">
              {article.summary}
            </p>
            <Link
              href={`/writing/${article.slug}`}
              className="mt-4 inline-block text-sm text-accent underline decoration-accent/40 underline-offset-2 hover:decoration-accent"
            >
              Read the article →
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}
