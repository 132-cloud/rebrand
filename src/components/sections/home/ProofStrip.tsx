"use client";

import { ScrollReveal } from "@/components/animations/ScrollReveal";

const stats = [
  {
    value: "#1",
    label: "in live digital brand launches",
  },
  {
    value: "270%",
    label: "deposit growth across digital brands in 2025",
  },
  {
    value: "$4.4B",
    label: "largest community bank on a modern core",
  },
  {
    value: "AI-native",
    label: "governed MCP server for core banking actions",
  },
];

export function ProofStrip() {
  return (
    <section className="relative py-16 md:py-20 bg-white">
      {/* Film grain overlay continuing from hero */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />
      <div className="container-site">
        <ScrollReveal>
          <h2 className="text-3xl md:text-[2.75rem] font-bold text-center mb-14 text-neutral-900 leading-tight">
            Powering community financial institutions at scale.
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 lg:divide-x divide-neutral-200">
            {stats.map((stat) => (
              <div
                key={stat.value}
                className="group text-center px-6 opacity-60 hover:opacity-100 transition-opacity duration-300"
              >
                <p className="text-[48px] font-light text-[#0065ff] mb-2 tracking-tight">
                  {stat.value}
                </p>
                <p className="text-[16px] text-neutral-500 leading-relaxed">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
