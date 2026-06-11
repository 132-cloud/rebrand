"use client";

import React, { useState } from "react";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import Link from "next/link";

const capabilities = [
  { title: "Start with managed services", href: "/managed-services/", span: "md:col-span-2" },
  { title: "Modernize core infrastructure", href: "/core-banking/", span: "md:col-span-1" },
  { title: "Launch digital banking", href: "/products/digital-banking/", span: "md:col-span-1" },
  { title: "Improve account opening", href: "/account-opening/", span: "md:col-span-1" },
  { title: "Connect data and operations", href: "/products/connect/", span: "md:col-span-1" },
  { title: "Build with governed AI", href: "/ai/", span: "md:col-span-1" },
  { title: "Grow with Labs", href: "/labs/", span: "md:col-span-2" },
];

function DashboardEmbed() {
  const [showOverlay, setShowOverlay] = useState(false);
  const iframeRef = React.useRef<HTMLIFrameElement>(null);

  React.useEffect(() => {
    const handleBlur = () => {
      setTimeout(() => {
        if (document.activeElement === iframeRef.current) {
          setShowOverlay(true);
          window.focus();
        }
      }, 0);
    };

    window.addEventListener("blur", handleBlur);
    return () => window.removeEventListener("blur", handleBlur);
  }, []);

  return (
    <div
      className="relative mt-12 rounded-2xl overflow-hidden"
      style={{ height: "600px" }}
    >
      <iframe
        ref={iframeRef}
        src="/business-dashboard.html"
        title="Nymbus digital banking platform"
        className="w-full h-full border-0 rounded-2xl"
      />

      <div className="absolute bottom-0 left-0 right-0 h-[40%] bg-gradient-to-b from-transparent to-charcoal-dark/90 pointer-events-none z-20" />

      {showOverlay && (
        <div
          className="absolute inset-0 bg-black/60 z-30 flex items-center justify-center cursor-pointer transition-opacity duration-300"
          onClick={() => setShowOverlay(false)}
        >
          <div className="flex flex-col items-center gap-4" onClick={(e) => e.stopPropagation()}>
            <a
              href="https://nymbus-joy.nymbus.com/business-dashboard"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-blue text-white text-base font-semibold rounded-[4px] shadow-lg shadow-blue/30 hover:bg-blue/90 transition-colors no-underline"
            >
              Explore the live demo
            </a>
            <button
              onClick={() => setShowOverlay(false)}
              className="text-white/60 text-sm hover:text-white transition-colors mt-2"
            >
              Dismiss
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export function PlatformOverviewNew() {
  return (
    <section className="section-padding bg-charcoal-dark">
      <div className="container-site">
        <ScrollReveal>
          <div className="max-w-5xl mb-12">
            <h4 className="text-[2rem] md:text-[2.15rem] mb-2 leading-tight">
              <span className="font-bold">Flexible solutions for every starting point.</span>{" "}
              <span className="font-normal text-white/60">
                Start with managed services, onboarding, digital growth, a parallel core, or full modernization, then expand across one connected platform.
              </span>
            </h4>
          </div>
        </ScrollReveal>

        {/* Capability links — bento grid style */}
        <ScrollReveal delay={0.1}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {capabilities.map((cap) => (
              <Link
                key={cap.title}
                href={cap.href}
                className={`${cap.span}
                  relative rounded-2xl border border-white/5 bg-charcoal-medium/40 p-6 md:p-8
                  min-h-[180px] md:min-h-[220px] flex flex-col justify-end
                  hover:border-white/15 transition-all duration-300 group overflow-hidden no-underline`}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative z-10 flex items-center justify-between">
                  <p className="text-white text-lg md:text-xl font-medium">
                    {cap.title}
                  </p>
                  <svg className="w-5 h-5 text-white/40 group-hover:text-white/80 transition-colors flex-shrink-0 ml-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </ScrollReveal>

        {/* Digital Banking Platform Prototype */}
        <ScrollReveal delay={0.3}>
          <div id="dashboard-preview" style={{ scrollMarginTop: "120px" }}>
            <DashboardEmbed />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
