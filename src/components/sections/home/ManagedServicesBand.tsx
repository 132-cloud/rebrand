"use client";

import { ScrollReveal } from "@/components/animations/ScrollReveal";
import Link from "next/link";

export function ManagedServicesBand() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="container-site">
        <ScrollReveal>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-[1.75rem] md:text-[2.5rem] leading-tight tracking-[-0.02em] mb-4">
              <span className="text-[#171216] font-bold">Run by the people who built the platform.</span>
              <br />
              <span className="text-neutral-400 font-normal">The operating layer behind modern banking.</span>
            </h2>
            <Link
              href="/managed-services/"
              className="inline-flex items-center mt-4 px-5 py-2.5 text-sm font-semibold text-[#171216] border border-neutral-300 rounded-full hover:bg-neutral-50 transition-colors no-underline"
            >
              Explore Managed Services
              <svg className="w-4 h-4 ml-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
