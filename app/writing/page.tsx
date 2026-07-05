import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Writing",
  description:
    "Engineering stories from building BossFx and learning software the hard way.",
};

const articles = [
  {
    slug: "the-website-i-rebuilt-ended-up-rebuilding-me",
    title: "The Website I Rebuilt Ended Up Rebuilding Me",
    date: "July 2026",
    summary:
      "I left a website builder to rebuild BossFx from scratch with Next.js and Supabase. What actually broke, the four debugging questions I ask now, and how the project rebuilt me.",
  },
];

export default function Writing() {
  return (
    <section className="py-20">
      <h1 className="text-3xl font-bold tracking-tight text-zinc-100">
        Writing
      </h1>
      <p className="mt-3 max-w-xl text-zinc-400">
        Engineering stories from building real products. No tutorials, no
        hype, just what actually happened.
      </p>
      <div className="mt-12 space-y-8">
        {articles.map((article) => (
          <article
            key={article.slug}
            className="rounded-lg border border-zinc-800 bg-zinc-900/40 p-6 transition-colors hover:border-zinc-600"
          >
            <p className="font-mono text-sm text-emerald-400">{article.date}</p>
            <h2 className="mt-2 text-xl font-semibold text-zinc-100">
              <Link
                href={`/writing/${article.slug}`}
                className="hover:text-emerald-400"
              >
                {article.title}
              </Link>
            </h2>
            <p className="mt-3 leading-relaxed text-zinc-400">
              {article.summary}
            </p>
            <Link
              href={`/writing/${article.slug}`}
              className="mt-4 inline-block text-sm text-emerald-400 hover:underline"
            >
              Read the article →
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}
