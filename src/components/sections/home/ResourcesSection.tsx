"use client";

import { useRef } from "react";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import Link from "next/link";

const resources = [
  {
    category: "Webinar",
    title: "How parallel cores are reshaping community banking growth",
    date: "2025",
    readTime: "45 min",
    href: "/insights-hub/",
  },
  {
    category: "Article",
    title: "The governed AI approach to banking automation",
    date: "2025",
    readTime: "8 min",
    href: "/insights-hub/",
  },
  {
    category: "Case Study",
    title: "PeoplesBank modernizes its core with Nymbus",
    date: "2025",
    readTime: "5 min",
    href: "/insights-hub/",
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
    <section className="section-padding bg-white">
      <div className="container-site">
        <ScrollReveal>
          <h2 className="text-[2rem] md:text-[2.75rem] font-bold mb-16 leading-tight text-[#171216] text-center">
            Get the latest insights on financial innovation.
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div
            ref={scrollRef}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 overflow-x-auto scrollbar-hide"
            style={{ scrollSnapType: "x mandatory" }}
          >
            {resources.map((resource, i) => (
              <Link
                key={`${resource.title}-${i}`}
                href={resource.href}
                className="group flex flex-col no-underline min-w-[280px] scroll-snap-start"
                style={{ scrollSnapAlign: "start" }}
              >
                {/* Thumbnail */}
                <div className="relative aspect-[16/10] rounded-xl overflow-hidden mb-4 bg-neutral-100">
                  <div className="w-full h-full bg-neutral-50 group-hover:bg-neutral-200/60 transition-colors duration-300" />
                  <div className="absolute inset-0 rounded-xl ring-1 ring-inset ring-black/5 pointer-events-none" />
                </div>

                {/* Category */}
                <p className="text-[#697CB2] text-[10px] font-semibold uppercase tracking-wider mb-1.5">
                  {resource.category}
                </p>

                {/* Title */}
                <h4 className="text-[#171216] font-bold text-xl md:text-2xl mb-2 leading-snug group-hover:text-[#697CB2] transition-colors">
                  {resource.title}
                </h4>

                {/* Meta */}
                <p className="text-neutral-400 text-xs">
                  {resource.date} · {resource.readTime}
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
              className="w-10 h-10 rounded-full border border-neutral-200 flex items-center justify-center text-neutral-400 hover:text-[#171216] hover:border-neutral-400 transition-[color,border-color] duration-200"
              aria-label="Previous"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
              </svg>
            </button>
            <button
              onClick={() => scroll("right")}
              className="w-10 h-10 rounded-full border border-neutral-200 flex items-center justify-center text-neutral-400 hover:text-[#171216] hover:border-neutral-400 transition-[color,border-color] duration-200"
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
