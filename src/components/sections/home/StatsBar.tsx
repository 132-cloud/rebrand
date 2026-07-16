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

export function StatsBar() {
  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="container-site">
        <ScrollReveal>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 lg:divide-x divide-neutral-200">
            {stats.map((stat) => (
              <div
                key={stat.value}
                className="group text-center px-6 opacity-60 hover:opacity-100 transition-opacity duration-300"
              >
                <p className="text-[48px] font-light text-[#171216] mb-2 tracking-tight tabular-nums">
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
