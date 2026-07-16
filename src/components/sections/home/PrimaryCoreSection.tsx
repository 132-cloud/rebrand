"use client";

import { ScrollReveal } from "@/components/animations/ScrollReveal";
import Link from "next/link";

export function PrimaryCoreSection() {
  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="container-site">
        <ScrollReveal>
          <div className="max-w-3xl">
            <h3 className="text-[2.25rem] md:text-[3rem] leading-tight mb-6">
              <span className="font-bold text-[#171216]">Transform your financial institution with modern banking infrastructure.</span>
            </h3>
            <Link
              href="/core-banking/"
              className="inline-flex items-center text-neutral-500 text-sm font-medium hover:text-[#171216] transition-colors no-underline"
            >
              Learn more
              <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
