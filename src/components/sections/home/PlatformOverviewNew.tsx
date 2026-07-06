"use client";

import React from "react";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import Link from "next/link";

const capabilities = [
  // Row 1: two half-width cards
  { title: "Modernize core infrastructure", href: "/core-banking/" },
  { title: "Activate managed services", href: "/managed-services/" },
  // Row 2: three third-width cards
  { title: "Connect data and operations", href: "/products/connect/" },
  { title: "Accelerate with governed AI", href: "/ai/" },
  { title: "Build with Labs", href: "/labs/" },
];

export function PlatformOverviewNew() {
  return (
    <section className="section-padding bg-charcoal-dark">
      <div className="container-site">
        <ScrollReveal>
          <div className="max-w-5xl mb-4">
            <h4 className="text-[2rem] md:text-[2.15rem] mb-2 leading-tight">
              <span className="font-bold">One platform for core processing, managed services, digital banking, account opening, data, engagement, and governed AI workflows</span>{" "}
              <span className="font-normal text-white/60">— built to work seperately or together.</span>
            </h4>
            <Link href="/platform/" className="text-sky-blue text-sm font-medium hover:text-blue-75 transition-colors no-underline inline-flex items-center gap-1 mt-3">
              Explore the platform
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </div>
        </ScrollReveal>

        {/* Bento grid */}
        <ScrollReveal delay={0.1}>
          <div className="flex flex-col gap-4">
            {/* Row 1: 1/2 + 1/2 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {capabilities.slice(0, 2).map((cap) => (
                <Link
                  key={cap.title}
                  href={cap.href}
                  className="relative rounded-2xl border border-white/5 bg-charcoal-medium/40 p-6 md:p-8
                    min-h-[280px] md:min-h-[340px] flex flex-col justify-between
                    hover:border-white/15 transition-[border-color,transform] duration-300 group overflow-hidden no-underline"
                >
                  <div className="relative z-10 flex items-start justify-between">
                    <p className="text-white text-lg md:text-xl font-medium max-w-[80%]">
                      {cap.title}
                    </p>
                    <svg className="w-5 h-5 text-white/30 group-hover:text-white/70 transition-colors flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                    </svg>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-br from-blue/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </Link>
              ))}
            </div>

            {/* Row 2: 1/3 + 1/3 + 1/3 */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {capabilities.slice(2, 5).map((cap) => (
                <Link
                  key={cap.title}
                  href={cap.href}
                  className="relative rounded-2xl border border-white/5 bg-charcoal-medium/40 p-6 md:p-8
                    min-h-[280px] md:min-h-[340px] flex flex-col justify-between
                    hover:border-white/15 transition-[border-color,transform] duration-300 group overflow-hidden no-underline"
                >
                  <div className="relative z-10 flex items-start justify-between">
                    <p className="text-white text-lg md:text-xl font-medium max-w-[80%]">
                      {cap.title}
                    </p>
                    <svg className="w-5 h-5 text-white/30 group-hover:text-white/70 transition-colors flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                    </svg>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-br from-blue/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </Link>
              ))}
            </div>

            {/* Row 3: full width — Launch intelligent digital banking with embedded dashboard */}
            <div
              className="relative rounded-2xl border border-white/5 bg-charcoal-medium/40 p-6 md:p-8
                min-h-[300px] md:min-h-[360px] flex flex-col md:flex-row items-start
                hover:border-white/15 transition-[border-color,transform] duration-300 group overflow-hidden"
            >
              {/* Left: title + arrow */}
              <div className="relative z-10 flex items-start justify-between md:w-[30%] flex-shrink-0">
                <div>
                  <p className="text-white text-lg md:text-xl font-medium mb-3">
                    Launch intelligent digital banking
                  </p>
                  <Link
                    href="/products/digital-banking/"
                    className="inline-flex items-center text-sky-blue text-sm font-medium hover:text-blue-75 transition-colors no-underline"
                  >
                    Learn more
                    <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  </Link>
                </div>
              </div>

              {/* Right: interactive dashboard preview, offset right */}
              <div className="absolute top-6 right-0 bottom-0 w-[75%] md:w-[65%] hidden md:block">
                <div className="relative w-full h-full rounded-tl-xl overflow-hidden">
                  <iframe
                    src="/business-dashboard.html"
                    title="Nymbus digital banking platform"
                    className="w-full h-full border-0"
                  />
                  {/* Fade edges */}
                  <div className="absolute bottom-0 left-0 right-0 h-[20%] bg-gradient-to-b from-transparent to-charcoal-medium/80 pointer-events-none" />
                  <div className="absolute top-0 left-0 bottom-0 w-[15%] bg-gradient-to-r from-charcoal-medium/60 to-transparent pointer-events-none" />
                </div>
              </div>

              {/* Arrow icon top-right */}
              <svg className="absolute top-6 right-6 md:top-8 md:right-8 w-5 h-5 text-white/30 group-hover:text-white/70 transition-colors z-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
              </svg>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
