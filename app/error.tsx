"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/Button";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Application error:", error);
  }, [error]);

  return (
    <section className="relative flex h-[80svh] min-h-[500px] w-full flex-col items-center justify-center bg-[#14100d] px-5 text-center text-paper">
      <div className="max-w-md">
        <p className="eyebrow text-[#d9b17a]">System Error</p>
        <h1 className="display mt-4 text-4xl sm:text-5xl">Something went wrong</h1>
        <p className="mt-4 text-sm leading-6 text-paper/70">
          An unexpected error occurred while loading this page. Please try again.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <button
            onClick={() => reset()}
            className="rounded-full bg-paper px-6 py-3 text-xs font-semibold uppercase tracking-wider text-ink transition-colors hover:bg-paper/90"
          >
            Try Again
          </button>
          <Button href="/" variant="light">
            Back to Home →
          </Button>
        </div>
      </div>
    </section>
  );
}
