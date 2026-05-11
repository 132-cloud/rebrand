"use client";

import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { Button } from "@/components/ui/Button";

const coreFeatures = [
  "Modern cloud-native platform with an intuitive interface",
  "Enable multiple account structures for a single entity",
  "Built to support traditional and digital-only retail and business banking",
  "Deliver embedded banking products and services",
  "Stand up Core in parallel to your existing core and tech stack",
  "Fully compliant – BSA, AML, and KYC",
];

export function CoreSection() {
  return (
    <section className="section-padding">
      <div className="container-site">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text Content */}
          <ScrollReveal direction="up">
            <div>
              <h2 className="caption text-sky-blue mb-3">
                Your Core, Your Way.
              </h2>
              <h1 className="text-[2rem] md:text-[2.5rem] font-bold mb-4">
                Modern Core Banking
              </h1>
              <p className="text-white font-bold text-lg mb-2">
                Modern, flexible, fast.
              </p>
              <p className="text-white/60 mb-8 leading-relaxed">
                Whether it&apos;s creating a new digital bank or modernizing a legacy
                infrastructure, Nymbus Core is your fast track to reaching new
                growth and new opportunities.
              </p>

              <ul className="space-y-4 mb-8">
                {coreFeatures.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <div className="w-5 h-5 mt-0.5 rounded-full bg-gradient-to-br from-sky-blue to-blue flex items-center justify-center flex-shrink-0">
                      <svg
                        className="w-3 h-3 text-white"
                        fill="none"
                        viewBox="0 0 12 12"
                      >
                        <path
                          d="M2 6l3 3 5-5"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <span className="text-white/70 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-4">
                <Button href="/lp/request-demo/" variant="primary">
                  Request A Demo
                </Button>
                <Button href="/solutions/core/" variant="outline">
                  Learn more
                </Button>
              </div>
            </div>
          </ScrollReveal>

          {/* Visual */}
          <ScrollReveal direction="right" delay={0.2}>
            <div className="relative">
              {/* Core dashboard mockup */}
              <div className="aspect-[4/3] bg-gradient-to-br from-charcoal-medium to-charcoal rounded-2xl border border-white/10 overflow-hidden p-6">
                <div className="h-full flex flex-col">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-3 h-3 rounded-full bg-red-300/60" />
                    <div className="w-3 h-3 rounded-full bg-yellow-300/60" />
                    <div className="w-3 h-3 rounded-full bg-green-300/60" />
                  </div>
                  <div className="flex-1 grid grid-cols-3 gap-3">
                    <div className="col-span-1 space-y-2">
                      {[...Array(5)].map((_, i) => (
                        <div
                          key={i}
                          className="h-4 bg-white/5 rounded"
                          style={{ width: `${60 + Math.random() * 40}%` }}
                        />
                      ))}
                    </div>
                    <div className="col-span-2 bg-white/5 rounded-lg p-3">
                      <div className="h-3 w-24 bg-white/10 rounded mb-3" />
                      <div className="grid grid-cols-2 gap-2">
                        {[...Array(4)].map((_, i) => (
                          <div key={i} className="h-16 bg-white/5 rounded" />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Floating document card */}
              <div className="absolute -bottom-4 -left-4 w-32 bg-charcoal-dark border border-white/10 rounded-lg p-3 shadow-xl">
                <div className="w-6 h-6 bg-blue/20 rounded mb-2 flex items-center justify-center">
                  <svg className="w-3 h-3 text-blue" fill="currentColor" viewBox="0 0 12 12">
                    <path d="M2 1h5l3 3v7H2V1z" />
                  </svg>
                </div>
                <div className="h-2 w-16 bg-white/10 rounded mb-1" />
                <div className="h-2 w-12 bg-white/5 rounded" />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
