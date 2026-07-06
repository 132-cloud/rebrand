"use client";

import { useRef } from "react";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import Link from "next/link";

const resources = [
  {
    title: "PeoplesBank modernizes its core",
    description: "The largest U.S. community bank to fully adopt a modern core with Nymbus.",
    image: "/images/peoples-bg.jpg",
    href: "/customers/peoplesbank/",
  },
  {
    title: "MSUFCU expands business banking",
    description: "A digital growth program built to support small business owners.",
    image: "/images/msu-bg.jpeg",
    href: "/customers/msufcu/",
  },
  {
    title: "The Nymbus AI approach",
    description: "How governed AI workflows connect to real banking work.",
    image: "/images/ai-approach-thumb.jpg",
    href: "/ai/",
  },
  {
    title: "Building AI-native managed services",
    description: "Operational support for onboarding, servicing, fraud, compliance, contact center, and back-office work.",
    image: "/images/managed-services-thumb.jpg",
    href: "/managed-services/",
  },
];

export function ResourcesSection() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const cardWidth = scrollRef.current.querySelector("a")?.offsetWidth || 300;
    const gap = 24;
    const scrollAmount = cardWidth + gap;
    scrollRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <section className="section-padding bg-black">
      <div className="container-site">
        <ScrollReveal>
          <h2 className="text-[2rem] md:text-[2.75rem] font-bold mb-16 leading-tight text-white text-center">
            Get the latest insights on financial innovation.
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div
            ref={scrollRef}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 overflow-x-auto scrollbar-hide"
            style={{ scrollSnapType: "x mandatory" }}
          >
            {resources.map((resource) => (
              <Link
                key={resource.title}
                href={resource.href}
                className="group flex flex-col no-underline min-w-[250px] scroll-snap-start"
                style={{ scrollSnapAlign: "start" }}
              >
                {/* Thumbnail */}
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden mb-5 bg-charcoal-medium/40">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={resource.image}
                    alt={resource.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = "none";
                    }}
                  />
                  {/* Subtle outline for depth */}
                  <div className="absolute inset-0 rounded-xl ring-1 ring-inset ring-white/10 pointer-events-none" />
                </div>

                {/* Title */}
                <h4 className="text-white font-bold text-base mb-2 leading-snug group-hover:text-sky-blue transition-colors">
                  {resource.title}
                </h4>

                {/* Description */}
                <p className="text-white/40 text-sm leading-relaxed">
                  {resource.description}
                </p>
              </Link>
            ))}
          </div>
        </ScrollReveal>

        {/* Navigation arrows */}
        <ScrollReveal delay={0.2}>
          <div className="flex items-center gap-3 mt-10">
            <button
              onClick={() => scroll("left")}
              className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/40 hover:text-white hover:border-white/40 transition-all duration-200"
              aria-label="Previous"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
              </svg>
            </button>
            <button
              onClick={() => scroll("right")}
              className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/40 hover:text-white hover:border-white/40 transition-all duration-200"
              aria-label="Next"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
