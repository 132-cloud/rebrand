"use client";

import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { Button } from "@/components/ui/Button";

const tracks = [
  {
    title: "Banking technology",
    description:
      "Core processing, digital banking, account opening, data, analytics, connectivity, rewards, and engagement for primary-core or parallel-core paths.",
  },
  {
    title: "Managed services",
    description:
      "Contact center, onboarding, servicing, fraud, compliance workflows, back-office support, business banking support, Labs, and governed AI built into the work.",
  },
];

export function PlatformSection() {
  return (
    <section className="section-padding bg-white">
      <div className="container-site">
        <ScrollReveal>
          <div className="max-w-5xl mb-12">
            <h4 className="text-[2rem] md:text-[2.15rem] mb-2 leading-tight">
              <span className="font-bold text-[#171216]">One platform for core processing, managed services, digital banking, account opening, data, engagement, and governed AI workflows</span>{" "}
              <span className="font-normal text-neutral-500">— designed to work individually or together.</span>
            </h4>
          </div>
        </ScrollReveal>

        {/* Product Tracks */}
        <ScrollReveal delay={0.1}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            {tracks.map((track) => (
              <div
                key={track.title}
                className="p-8 rounded-2xl border border-neutral-200 bg-neutral-50 hover:border-neutral-300 transition-all duration-300"
              >
                <h4 className="text-[#171216] text-lg font-bold mb-3">{track.title}</h4>
                <p className="text-neutral-500 text-sm leading-relaxed">{track.description}</p>
              </div>
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <Button href="/platform/" variant="primary">
            Explore the platform
          </Button>
        </ScrollReveal>
      </div>
    </section>
  );
}
