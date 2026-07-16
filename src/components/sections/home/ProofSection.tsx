"use client";

import { ScrollReveal } from "@/components/animations/ScrollReveal";

export function ProofSection() {
  return (
    <section className="relative py-16 md:py-20 bg-white">
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />
      <div className="container-site">
        <ScrollReveal>
          <h2 className="text-3xl md:text-[2.75rem] font-bold text-center mb-0 text-[#171216] leading-tight">
            Proven infrastructure for financial innovators.
          </h2>
        </ScrollReveal>
      </div>
    </section>
  );
}
