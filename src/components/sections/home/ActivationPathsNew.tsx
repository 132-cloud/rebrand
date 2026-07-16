"use client";

import { ScrollReveal } from "@/components/animations/ScrollReveal";
import Link from "next/link";

const paths = [
  {
    title: "Launch in parallel.",
    description:
      "Stand up a digital brand, vertical offering, or new line of business alongside your existing stack.",
    href: "/solutions/parallel-core/",
  },
  {
    title: "Replace your core.",
    description:
      "Move onto a modern core, with digital, onboarding, data, and operations connected around it, so every decision runs at your pace, not a legacy vendor\u2019s.",
    href: "/solutions/primary-core/",
  },
];

export function ActivationPathsNew() {
  return (
    <section className="relative section-padding overflow-hidden bg-black">
      {/* Video background — same as footer CTA */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover">
          <source src="/images/footer-cta-bg.webm" type="video/webm" />
        </video>
      </div>

      {/* White gradient overlay: transparent at top, white at bottom */}
      <div
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{
          background: "linear-gradient(to bottom, transparent 50%, white 100%)",
        }}
      />

      <div className="container-site relative z-10">
        <ScrollReveal>
          <h2 className="text-[2rem] md:text-[2.75rem] font-bold text-center mb-14 text-[#171216] leading-tight">
            Launch beside your core, or replace the one holding you back.
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {paths.map((path) => (
              <Link
                key={path.title}
                href={path.href}
                className="group flex flex-col p-10 rounded-2xl bg-white no-underline"
              >
                {/* Placeholder image area */}
                <div className="aspect-[4/3] rounded-xl bg-neutral-100 mb-8" />

                {/* Title */}
                <h4 className="text-[#171216] font-bold text-xl md:text-2xl mb-3 group-hover:text-[#697CB2] transition-colors">{path.title}</h4>

                {/* Description */}
                <p className="text-neutral-500 text-base leading-relaxed">
                  {path.description}
                </p>
              </Link>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
