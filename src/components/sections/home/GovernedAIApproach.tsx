"use client";

import { ScrollReveal } from "@/components/animations/ScrollReveal";
import Link from "next/link";

export function GovernedAIApproach() {
  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="container-site">
        <ScrollReveal>
          <div className="relative rounded-2xl bg-neutral-100 overflow-hidden">
            <div className="flex items-center justify-between p-8 md:p-10 gap-8">
              {/* Left: text */}
              <div className="flex-1">
                <h3 className="text-[#171216] text-lg md:text-xl font-bold mb-2 leading-snug">
                  See what AI can run inside your institution.
                </h3>
                <p className="text-neutral-500 text-sm leading-relaxed">
                  Get an inside look at the real banking work AI can take on, and the infrastructure we&apos;re building to keep it permissioned every step of the way.
                </p>
              </div>
              {/* Right: CTA */}
              <Link
                href="/ai/"
                className="flex-shrink-0 inline-flex items-center px-5 py-2.5 text-sm font-semibold rounded-full hover:bg-[#2a2329] transition-colors no-underline"
                style={{ backgroundColor: '#171216', color: '#ffffff' }}
              >
                Read our AI approach
                <svg className="w-4 h-4 ml-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
