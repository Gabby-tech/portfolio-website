import Image from "next/image";

/*
  Shared long-form typography components.
  All colors come from semantic tokens (globals.css) — never raw palette
  values — so every article and case study inherits theme, contrast and
  accessibility behavior automatically.
*/

export function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mt-14 text-2xl font-semibold tracking-tight text-heading">
      {children}
    </h2>
  );
}

export function CodeBlock({ children }: { children: string }) {
  return (
    <pre className="overflow-x-auto rounded-lg border border-subtle bg-code-bg p-4 font-mono text-sm leading-relaxed text-body">
      <code>{children}</code>
    </pre>
  );
}

export function ArticleFigure({
  src,
  alt,
  caption,
}: {
  src: string;
  alt: string;
  caption: string;
}) {
  return (
    <figure className="my-8">
      <Image
        src={src}
        alt={alt}
        width={2880}
        height={1800}
        className="rounded-lg border border-subtle"
      />
      <figcaption className="mt-2 text-sm text-muted">{caption}</figcaption>
    </figure>
  );
}

export function ProseLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      className="text-accent underline decoration-accent/40 underline-offset-2 hover:decoration-accent"
    >
      {children}
    </a>
  );
}
