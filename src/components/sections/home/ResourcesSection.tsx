"use client";

import { ScrollReveal } from "@/components/animations/ScrollReveal";
import Link from "next/link";

const resources = [
  {
    title: "PeoplesBank modernizes its core",
    description: "The largest U.S. community bank to fully adopt a modern core with Nymbus.",
    cta: "Read the story",
    href: "/customers/peoplesbank/",
    span: "md:col-span-2",
  },
  {
    title: "MSUFCU expands business banking",
    description: "A digital growth program built to support small business owners.",
    cta: "Read the story",
    href: "/customers/msufcu/",
    span: "md:col-span-1",
  },
  {
    title: "The Nymbus AI approach",
    description: "How governed AI workflows connect to real banking work.",
    cta: "Read the approach",
    href: "/ai/",
    span: "md:col-span-1",
  },
  {
    title: "Managed services overview",
    description: "Operational support for onboarding, servicing, fraud, compliance, contact center, and back-office work.",
    cta: "Explore managed services",
    href: "/managed-services/",
    span: "md:col-span-2",
  },
];

export function ResourcesSection() {
  return (
    <section className="section-padding bg-charcoal-dark">
      <div className="container-site">
        <ScrollReveal>
          <h2 className="text-[2rem] md:text-[2.75rem] font-bold mb-12 leading-tight text-white">
            See what financial innovators are building.
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {resources.map((resource) => (
              <Link
                key={resource.title}
                href={resource.href}
                className={`${resource.span} relative rounded-2xl border border-white/5 bg-charcoal-medium/30 p-6 md:p-8
                  min-h-[200px] flex flex-col justify-between
                  hover:border-white/15 transition-all duration-300 group no-underline`}
              >
                <div>
                  <h4 className="text-white font-bold text-lg mb-2">{resource.title}</h4>
                  <p className="text-white/40 text-sm leading-relaxed">{resource.description}</p>
                </div>
                <span className="inline-flex items-center mt-4 text-sky-blue text-sm font-medium group-hover:text-blue-75 transition-colors">
                  {resource.cta}
                  <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
