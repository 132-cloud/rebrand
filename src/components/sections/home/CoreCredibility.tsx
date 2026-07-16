"use client";

import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { Button } from "@/components/ui/Button";

const coreCards = [
  {
    title: "Parallel core",
    description:
      "Launch digital brands, new lines of business, M&A acceleration, private-label banking, or sandbox innovation without disrupting current operations.",
  },
  {
    title: "Primary core",
    description:
      "Modernize the banking foundation with core processing, digital, data, operations, and support connected from the start.",
  },
  {
    title: "De novo launch",
    description:
      "Build a new institution or banking model with the infrastructure and operating support needed to move from plan to production.",
  },
];

export function CoreCredibility() {
  return (
    <section className="section-padding bg-white">
      <div className="container-site">
        <ScrollReveal>
          <div className="max-w-5xl mb-4">
            <h4 className="text-[2rem] md:text-[2.15rem] mb-2 leading-tight">
              <span className="font-bold text-[#171216]">A real core path, not just a launch layer.</span>{" "}
              <span className="font-normal text-neutral-500">
                Parallel-core deployments for new growth or primary-core paths for full modernization, with digital banking, account opening, data, engagement, managed services, and implementation support connected.
              </span>
            </h4>
          </div>
        </ScrollReveal>

        {/* Three-column cards */}
        <ScrollReveal delay={0.1}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-10">
            {coreCards.map((card) => (
              <div
                key={card.title}
                className="p-6 md:p-8 rounded-2xl border border-neutral-200 bg-neutral-50 hover:border-neutral-300 transition-all duration-300"
              >
                <h4 className="text-[#171216] font-bold text-lg mb-3">{card.title}</h4>
                <p className="text-neutral-500 text-sm leading-relaxed">{card.description}</p>
              </div>
            ))}
          </div>
        </ScrollReveal>

        {/* Proof callout */}
        <ScrollReveal delay={0.2}>
          <div className="mt-12 py-8 px-8 rounded-xl border border-neutral-200 bg-neutral-50 text-center">
            <p className="text-[48px] font-light text-[#171216] mb-2 tracking-tight">$4.4B</p>
            <p className="text-neutral-500 text-base">Largest community bank on a modern core with Nymbus</p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.3}>
          <div className="mt-8">
            <Button href="/core-banking/" variant="primary">
              Explore core banking
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
