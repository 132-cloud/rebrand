"use client";

import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { Button } from "@/components/ui/Button";
import Image from "next/image";

const bentoItems = [
  {
    title: "Core processing",
    subtitle: "built for faster modernization",
    span: "col-span-2",
  },
  {
    title: "Digital banking",
    subtitle: "for consumer and business growth",
    span: "col-span-1",
  },
  {
    title: "Account opening",
    subtitle: "that gets customers moving faster",
    span: "col-span-1",
  },
  {
    title: "Insights",
    subtitle: "that turn data into faster decisions",
    span: "col-span-1",
  },
  {
    title: "Levels",
    subtitle: "that deepen engagement and relationships",
    span: "col-span-1",
  },
  {
    title: "Managed services",
    subtitle: "that reduce operational lift",
    span: "col-span-3",
  },
];

export function PlatformOverview() {
  return (
    <section className="section-padding bg-charcoal-dark">
      <div className="container-site">
        <ScrollReveal>
          <div className="max-w-5xl mb-12">
            <h4 className="text-[2rem] md:text-[2.15rem] mb-2 leading-tight">
              <span className="font-bold">Flexible solutions for every growth strategy.</span>{" "}
              <span className="font-normal text-white/60">Grow your bank or credit union with a unified platform of modern banking tools⁠ – designed to work individually or together.</span>
            </h4>
          </div>
        </ScrollReveal>

        {/* Bento Grid: 2/1 / 1/1 / 2 */}
        <ScrollReveal delay={0.1}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {bentoItems.map((item, index) => (
              <div
                key={item.title}
                className={`${item.span === "col-span-2" ? "md:col-span-2" : item.span === "col-span-3" ? "md:col-span-3" : "md:col-span-1"} 
                  relative rounded-2xl border border-white/5 bg-charcoal-medium/40 p-6 md:p-8 
                  min-h-[300px] md:min-h-[390px] flex flex-col justify-end
                  hover:border-white/15 transition-all duration-300 group overflow-hidden`}
              >
                {/* Subtle gradient background per card */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative z-10">
                  <p className="text-white text-lg md:text-xl leading-snug">
                    <strong>{item.title}</strong>{" "}
                    <span className="text-white/50">{item.subtitle}</span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>

        {/* Dashboard preview */}
        <ScrollReveal delay={0.3}>
          <div className="relative mt-12 rounded-2xl overflow-hidden group cursor-pointer">
            <Image
              src="/images/Dashboard.svg"
              alt="Nymbus banking platform dashboard"
              width={1920}
              height={1080}
              className="w-full h-auto"
              unoptimized
            />
            <div className="absolute bottom-0 left-0 right-0 h-[40%] bg-gradient-to-b from-transparent to-charcoal-dark/90 pointer-events-none" />
            {/* Hover overlay with button */}
            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <span className="px-6 py-3 bg-blue text-white text-sm font-semibold rounded-[4px] shadow-lg shadow-blue/30">
                Try the demo
              </span>
            </div>
          </div>
        </ScrollReveal>

        {/* Three-column value props */}
        <ScrollReveal delay={0.4}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div>
              <div className="w-10 h-10 mb-4 rounded-lg bg-blue/10 flex items-center justify-center">
                <svg className="w-5 h-5 text-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                </svg>
              </div>
              <p className="text-white text-sm leading-relaxed">
                <strong>Launch faster.</strong> Go from strategy to production with integrated core, digital, and operational services. No multi-vendor assembly required.
              </p>
              <a href="/products/" className="text-sky-blue text-sm font-medium mt-3 inline-block hover:text-blue-75 transition-colors no-underline">
                Explore the platform &rsaquo;
              </a>
            </div>
            <div>
              <div className="w-10 h-10 mb-4 rounded-lg bg-blue/10 flex items-center justify-center">
                <svg className="w-5 h-5 text-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
                </svg>
              </div>
              <p className="text-white text-sm leading-relaxed">
                <strong>Grow new lines of revenue.</strong> Stand up digital brands, vertical strategies, and private label programs that turn new markets into operating businesses.
              </p>
              <a href="/solutions/launch-digital-brand/" className="text-sky-blue text-sm font-medium mt-3 inline-block hover:text-blue-75 transition-colors no-underline">
                See growth strategies &rsaquo;
              </a>
            </div>
            <div>
              <div className="w-10 h-10 mb-4 rounded-lg bg-blue/10 flex items-center justify-center">
                <svg className="w-5 h-5 text-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                </svg>
              </div>
              <p className="text-white text-sm leading-relaxed">
                <strong>Reduce operational risk.</strong> Managed compliance, fraud operations, and back-office support built for banking. So your team can focus on growth.
              </p>
              <a href="/products/managed-services/" className="text-sky-blue text-sm font-medium mt-3 inline-block hover:text-blue-75 transition-colors no-underline">
                Explore managed services &rsaquo;
              </a>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
