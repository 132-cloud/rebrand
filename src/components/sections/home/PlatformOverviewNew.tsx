"use client";

import React from "react";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import Link from "next/link";

const capabilities = [
  // Row 1: two half-width cards
  { title: "Modernize core infrastructure", href: "/solutions/primary-core/" },
  { title: "Activate managed services", href: "/managed-services/" },
  // Row 2: three third-width cards
  { title: "Connect data and operations", href: "/platform/#connect" },
  { title: "Accelerate with governed AI", href: "/ai/" },
  { title: "Build with Labs", href: "/labs/" },
];

export function PlatformOverviewNew() {
  return (
    <section className="section-padding bg-charcoal-dark">
      <div className="container-site">
        <ScrollReveal>
          <div className="max-w-5xl mx-auto text-center mb-10">
            <h4 className="text-[2rem] md:text-[2.15rem] font-bold mb-3 leading-tight">
              One connected platform
            </h4>
            <p className="text-white/60 text-lg md:text-xl mb-4">
              Technology to launch. Operations to run. Growth to scale.
            </p>
            <Link href="/platform/" className="text-sky-blue text-sm font-medium hover:text-blue-75 transition-colors no-underline inline-flex items-center gap-1">
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
                    hover:border-white/15 hover:shadow-[0_8px_32px_-4px_rgba(0,101,255,0.12)] hover:-translate-y-0.5
                    transition-all duration-300 ease-out group overflow-hidden no-underline"
                >
                  <div className="relative z-10 flex items-start justify-between">
                    <p className="text-white text-lg md:text-xl font-medium max-w-[80%]">
                      {cap.title}
                    </p>
                    <svg className="w-5 h-5 text-white/30 group-hover:text-white/70 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
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
                    hover:border-white/15 hover:shadow-[0_8px_32px_-4px_rgba(0,101,255,0.12)] hover:-translate-y-0.5
                    transition-all duration-300 ease-out group overflow-hidden no-underline"
                >
                  <div className="relative z-10 flex items-start justify-between">
                    <p className="text-white text-lg md:text-xl font-medium max-w-[80%]">
                      {cap.title}
                    </p>
                    <svg className="w-5 h-5 text-white/30 group-hover:text-white/70 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                    </svg>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-br from-blue/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </Link>
              ))}
            </div>

            {/* Row 3: full width — Launch intelligent digital banking with dashboard image */}
            <Link
              href="https://nymbus-joy.nymbus.com/dashboard"
              target="_blank"
              rel="noopener noreferrer"
              className="relative rounded-2xl border border-white/5 bg-charcoal-medium/40
                h-[530px] md:h-[600px] flex flex-col
                hover:border-white/15 hover:shadow-[0_8px_32px_-4px_rgba(0,101,255,0.12)] hover:-translate-y-0.5
                transition-all duration-300 ease-out group overflow-hidden no-underline"
            >
              {/* Top: title + link */}
              <div className="relative z-10 flex-shrink-0 p-6 md:p-8 pb-4 md:pb-4">
                <div>
                  <p className="text-white text-lg md:text-xl font-medium mb-3">
                    Launch intelligent digital banking
                  </p>
                  <span className="inline-flex items-center text-sky-blue text-sm font-medium group-hover:text-blue-75 transition-colors">
                    Try the demo
                    <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  </span>
                </div>
              </div>

              {/* Dashboard screenshot — cropped at bottom by overflow-hidden on parent */}
              <div className="relative flex-1 w-full hidden md:block min-h-0 px-6 md:px-8">
                <img
                  src="/images/Dashboard2.png"
                  alt="Nymbus digital banking platform"
                  className="w-full h-auto rounded-tl-2xl rounded-tr-2xl"
                />
              </div>

              {/* Arrow icon top-right */}
              <svg className="absolute top-6 right-6 md:top-8 md:right-8 w-5 h-5 text-white/30 group-hover:text-white/70 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300 z-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
              </svg>
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
