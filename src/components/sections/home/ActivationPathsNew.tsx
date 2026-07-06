"use client";

import { ScrollReveal } from "@/components/animations/ScrollReveal";
import Link from "next/link";

const paths = [
  {
    title: "Modernize core infrastructure",
    description:
      "Deploy Nymbus as a primary core or parallel core to support modernization, new growth, or digital brand expansion.",
    href: "/core-banking/",
    image: "/images/peoples-bg.jpg",
  },
  {
    title: "Activate managed services",
    description:
      "Add operating capacity across onboarding, servicing, fraud, compliance, contact center, and back-office workflows.",
    href: "/managed-services/",
    image: "/images/msu-bg.jpeg",
  },
  {
    title: "Grow deposits",
    description:
      "Embed growth, product, and marketing expertise into your launch motion, from strategy and offer design to acquisition and optimization.",
    href: "/labs/",
    image: "/images/zynlo-bg.jpg",
  },
];

export function ActivationPathsNew() {
  return (
    <section className="section-padding bg-white">
      <div className="container-site">
        <ScrollReveal>
          <h2 className="text-[2rem] md:text-[2.75rem] font-bold text-center mb-14 text-neutral-900 leading-tight">
            Choose the path that fits your growth strategy.
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {paths.map((path) => (
              <div key={path.title} className="flex flex-col">
                {/* Image */}
                <div className="relative aspect-[3/2] rounded-2xl overflow-hidden mb-6 bg-neutral-200">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={path.image}
                    alt={path.title}
                    className="w-full h-full object-cover"
                  />
                  {/* Subtle outline for depth */}
                  <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-black/10 pointer-events-none" />
                </div>

                {/* Title */}
                <h4 className="text-neutral-900 font-bold text-lg mb-2">{path.title}</h4>

                {/* Description */}
                <p className="text-neutral-500 text-sm leading-relaxed mb-4 flex-1">
                  {path.description}
                </p>

                {/* Learn more link */}
                <Link
                  href={path.href}
                  className="inline-flex items-center text-sky-blue text-sm font-medium hover:text-blue-75 transition-colors no-underline"
                >
                  Learn more
                  <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </Link>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
