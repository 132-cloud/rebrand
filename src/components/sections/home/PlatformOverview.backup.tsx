"use client";

import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { Button } from "@/components/ui/Button";
import Image from "next/image";

const platformModules = [
  {
    title: "Core Processing",
    description: "Modern core infrastructure built for flexibility, speed, and scale.",
  },
  {
    title: "Digital Banking",
    description: "Configurable digital experiences for consumer and business banking.",
  },
  {
    title: "Account Opening",
    description: "Fast onboarding across online, in-branch, consumer, and business use cases.",
  },
  {
    title: "Back Office",
    description: "Operational tools that help teams move faster with fewer manual steps.",
  },
  {
    title: "Front Office",
    description: "Modern interfaces for serving customers, members, and internal teams.",
  },
  {
    title: "Connect",
    description: "API, streaming, and MCP services for real-time access to data and integrations.",
  },
  {
    title: "Insights",
    description: "Analytics and intelligence that help leaders see, decide, and act faster.",
  },
  {
    title: "Levels",
    description: "Rewards, engagement, pricing, and segmentation tools that deepen relationships.",
  },
  {
    title: "Managed Services",
    description: "Operational support to help institutions launch, scale, and run with less risk.",
  },
];

export function PlatformOverview() {
  return (
    <section className="section-padding">
      <div className="container-site">
        <ScrollReveal>
          <div className="max-w-5xl mb-12">
            <h4 className="text-[2rem] md:text-[2.15rem] mb-2 leading-tight">
              <span className="font-bold">Flexible solutions for every growth strategy.</span>{" "}
              <span className="font-normal text-white/60">Grow your bank or credit union with a unified platform of modern banking tools⁠ – designed to work together or individually.</span>
            </h4>
            
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {platformModules.map((module, index) => (
            <ScrollReveal key={module.title} delay={index * 0.04}>
              <div className="p-6 rounded-xl border border-white/5 hover:border-white/15 bg-charcoal/40 hover:bg-charcoal/70 transition-all duration-300">
                <h3 className="text-white font-semibold mb-2">{module.title}</h3>
                <p className="text-white/45 text-sm leading-relaxed">
                  {module.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.3}>
          <div className="mt-10">
            <Button href="/products/" variant="primary">
              Explore the platform
            </Button>
          </div>
        </ScrollReveal>

        {/* Dashboard preview */}
        <ScrollReveal delay={0.4}>
          <div className="relative mt-12 rounded-2xl overflow-hidden">
            <Image
              src="/images/Dashboard.svg"
              alt="Nymbus banking platform dashboard"
              width={1920}
              height={1080}
              className="w-full h-auto"
              unoptimized
            />
          </div>
        </ScrollReveal>

        {/* Three-column value props */}
        <ScrollReveal delay={0.5}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div>
              <div className="w-10 h-10 mb-4 rounded-lg bg-blue/10 flex items-center justify-center">
                <svg className="w-5 h-5 text-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                </svg>
              </div>
              <p className="text-white text-sm leading-relaxed">
                <strong>Launch faster.</strong> Go from strategy to production with pre-integrated core, digital, and operational services — no multi-vendor assembly required.
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
                <strong>Reduce operational risk.</strong> Managed compliance, fraud operations, and back-office support built for banking — so your team can focus on growth.
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
