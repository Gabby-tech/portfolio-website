# timilehin-shobande.dev — Portfolio

Personal portfolio of **Timilehin Shobande** — software engineer, product builder, and founder of [BossFx](https://bossfxcademy.com). This repo is itself part of the portfolio: the commit history, structure, and decisions are on display, deliberately.

**Live:** https://timilehin-shobande.vercel.app

## Stack

- [Next.js 16](https://nextjs.org) (App Router, Turbopack) + React + TypeScript
- [Tailwind CSS](https://tailwindcss.com) v4
- Deployed on [Vercel](https://vercel.com)

## Structure

```
app/
├── layout.tsx                  # Shared shell: nav, footer, metadata (OG, title template)
├── page.tsx                    # Home: hero, projects, stack, contact
└── case-studies/
    └── bossfx/page.tsx         # Engineering case study: architecture, trade-offs, lessons
```

## Principles

- **Content over chrome** — dark, typography-first design; no animation for its own sake.
- **Honest labeling** — in-development projects say so; no invented metrics anywhere.
- **Server components by default** — zero client-side JavaScript beyond what Next.js ships; every page is static.
- **Semantic HTML** — landmarks, labeled nav and lists, accessible link text.

## Running locally

```bash
npm ci
npm run dev      # http://localhost:3000
npm run build    # production build
```

## Roadmap

- Writing section (first article: August 2026)
- BossFx Trading Journal case study when it ships (October 2026)
- Analytics (GA4 + Microsoft Clarity)

---

© 2026 Timilehin Shobande · [GitHub](https://github.com/Gabby-tech) · [LinkedIn](https://www.linkedin.com/in/shobande-timilehin-3386711a0)
