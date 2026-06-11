"use client";

import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { Button } from "@/components/ui/Button";

const points = [
  {
    title: "Build the offer",
    description: "Define the audience, product, positioning, and value story behind the banking model.",
  },
  {
    title: "Activate the market",
    description: "Launch the brand, campaigns, channels, and conversion paths needed to reach the audience.",
  },
  {
    title: "Optimize performance",
    description: "Use performance insight to improve adoption, funding, engagement, and relationship depth.",
  },
];

export function LabsSection() {
  return (
    <section className="section-padding bg-charcoal-dark">
      <div className="container-site">
        <ScrollReveal>
          <div className="max-w-5xl mb-4">
            <h4 className="text-[2rem] md:text-[2.15rem] mb-2 leading-tight">
              <span className="font-bold">Launch with a growth model.</span>{" "}
              <span className="font-normal text-white/60">
                Use Nymbus Labs to shape, launch, and optimize banking models with strategy, brand, acquisition, and performance support.
              </span>
            </h4>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
            {points.map((point) => (
              <div key={point.title} className="p-6 md:p-8 rounded-xl border border-white/5 bg-charcoal-medium/30 hover:border-white/15 transition-all duration-300">
                <h4 className="text-white font-semibold text-base mb-2">{point.title}</h4>
                <p className="text-white/40 text-sm leading-relaxed">{point.description}</p>
              </div>
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="mt-8">
            <Button href="/labs/" variant="outline">
              Explore Labs
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
