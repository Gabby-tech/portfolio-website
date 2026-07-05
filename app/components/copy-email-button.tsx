"use client";

import { useState } from "react";

const EMAIL = "bossfx.official@gmail.com";

export default function CopyEmailButton({ label }: { label?: string }) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(EMAIL);
    } catch {
      // Clipboard API unavailable (older browsers, denied permission):
      // fall back to a hidden selectable textarea.
      const textarea = document.createElement("textarea");
      textarea.value = EMAIL;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <span className="inline-flex flex-wrap items-center gap-3">
      <button
        type="button"
        onClick={copy}
        aria-live="polite"
        className="rounded-md bg-accent-solid px-5 py-2.5 text-sm font-medium text-on-accent hover:bg-accent-hover"
      >
        {copied ? "Copied ✓" : (label ?? EMAIL)}
      </button>
      <a
        href={`mailto:${EMAIL}`}
        className="text-sm text-muted hover:text-accent"
      >
        or open in your mail app
      </a>
    </span>
  );
}
