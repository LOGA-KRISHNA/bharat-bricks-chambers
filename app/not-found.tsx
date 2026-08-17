import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="relative flex h-[80svh] min-h-[500px] w-full flex-col items-center justify-center bg-[#14100d] px-5 text-center text-paper">
      <div className="max-w-md">
        <p className="eyebrow text-[#d9b17a]">404 Error</p>
        <h1 className="display mt-4 text-5xl sm:text-6xl">Page Not Found</h1>
        <p className="mt-4 text-sm leading-6 text-paper/70">
          The architectural page or resource you are looking for does not exist or has been moved.
        </p>
        <div className="mt-8 flex justify-center">
          <Button href="/" variant="light" className="gap-2">
            <ArrowLeft size={16} />
            <span>Back to Home →</span>
          </Button>
        </div>
      </div>
    </section>
  );
}
