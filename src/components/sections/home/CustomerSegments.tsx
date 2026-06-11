"use client";

import { ScrollReveal } from "@/components/animations/ScrollReveal";

const segments = [
  {
    title: "For institutions improving operations",
    description: "Activate managed services for onboarding, servicing, fraud, compliance, contact center, and back-office support.",
  },
  {
    title: "For institutions launching growth",
    description: "Stand up digital brands, vertical strategies, private-label programs, or new lines of business.",
  },
  {
    title: "For institutions modernizing infrastructure",
    description: "Deploy a parallel core for new growth or a primary core for full modernization.",
  },
  {
    title: "For institutions building with AI",
    description: "Connect governed AI workflows to approved data, actions, permissions, and review paths.",
  },
];

export function CustomerSegments() {
  return (
    <section className="section-padding bg-charcoal-dark">
      <div className="container-site">
        <ScrollReveal>
          <div className="max-w-5xl mb-4">
            <h4 className="text-[2rem] md:text-[2.15rem] mb-2 leading-tight">
              <span className="font-bold">Built for institutions ready to move.</span>{" "}
              <span className="font-normal text-white/60">
                From targeted operational support to full core modernization, Nymbus gives financial innovators a practical path to launch, operate, and scale.
              </span>
            </h4>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-10">
            {segments.map((seg) => (
              <div
                key={seg.title}
                className="p-6 md:p-8 rounded-2xl border border-white/5 bg-charcoal-medium/30 hover:border-white/15 transition-all duration-300 flex flex-col"
              >
                <h4 className="text-white font-bold text-base mb-3 leading-snug">{seg.title}</h4>
                <p className="text-white/40 text-sm leading-relaxed">{seg.description}</p>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
