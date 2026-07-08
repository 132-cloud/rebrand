"use client";

import { ScrollReveal } from "@/components/animations/ScrollReveal";
import Link from "next/link";

const paths = [
  {
    title: "Launch in parallel.",
    description:
      "Stand up a digital brand, vertical offering, or new line of business alongside your existing stack. Less disruption, faster to market.",
    href: "/solutions/parallel-core/",
  },
  {
    title: "Launch a primary core.",
    description:
      "Modernize from the foundation up. Nymbus becomes your core, with digital, onboarding, data, and operations connected around it.",
    href: "/solutions/primary-core/",
  },
];

export function ActivationPathsNew() {
  return (
    <section className="section-padding bg-white">
      <div className="container-site">
        <ScrollReveal>
          <h2 className="text-[2rem] md:text-[2.75rem] font-bold text-center mb-14 text-neutral-900 leading-tight">
            Launch alongside your core, or modernize from it.
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {paths.map((path) => (
              <Link
                key={path.title}
                href={path.href}
                className="group flex flex-col p-10 rounded-2xl border border-neutral-200 bg-neutral-50 hover:border-neutral-300 transition-[border-color] duration-300 no-underline"
              >
                {/* Placeholder image area */}
                <div className="aspect-[4/3] rounded-xl bg-neutral-100 border border-neutral-200/60 mb-8" />

                {/* Title */}
                <h4 className="text-neutral-900 font-bold text-xl md:text-2xl mb-3 group-hover:text-[#697CB2] transition-colors">{path.title}</h4>

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
