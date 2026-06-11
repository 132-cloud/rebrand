"use client";

import { ScrollReveal } from "@/components/animations/ScrollReveal";
import Link from "next/link";

export function GovernedAIApproach() {
  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="container-site">
        <ScrollReveal>
          {/* Outer wrapper with animated pulse border */}
          <div className="relative rounded-2xl">
            {/* Static subtle border */}
            <div
              className="absolute -inset-[1px] rounded-[17px]"
              style={{ background: "rgba(76, 154, 255, 0.2)", zIndex: 0 }}
            />
            {/* Animated pulse that travels along the perimeter */}
            <div className="absolute -inset-[1px] rounded-[17px] overflow-hidden" style={{ zIndex: 0 }}>
              <div
                className="absolute inset-[-50%] animate-[borderPulse_4s_linear_infinite]"
                style={{
                  background: "conic-gradient(from 0deg, transparent 0%, transparent 70%, rgba(76, 154, 255, 0.9) 75%, rgba(179, 212, 255, 1) 80%, rgba(76, 154, 255, 0.9) 85%, transparent 90%, transparent 100%)",
                }}
              />
            </div>

            {/* Card content */}
            <Link
              href="/ai/"
              className="relative block rounded-2xl p-8 md:p-12 transition-all duration-300 hover:scale-[1.003] no-underline"
              style={{
                background: "linear-gradient(135deg, #0052CC 0%, #0065FF 50%, #4C9AFF 100%)",
                zIndex: 1,
              }}
            >
              <p className="text-white/70 text-sm font-medium uppercase tracking-wider mb-3">
                Built from within. Not bolted on top.
              </p>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 leading-tight">
                Building the banking infrastructure for governed AI
              </h3>
              <p className="text-white/70 text-base leading-relaxed max-w-3xl mb-6">
                AI only creates value in banking when it is governed by design, connected to approved data and actions, and built into the workflows that move the institution forward.
              </p>
              <span className="inline-flex items-center text-white text-sm font-semibold">
                Read our AI approach
                <svg className="w-4 h-4 ml-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </span>
            </Link>
          </div>
        </ScrollReveal>
      </div>

      <style jsx>{`
        @keyframes borderPulse {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </section>
  );
}
