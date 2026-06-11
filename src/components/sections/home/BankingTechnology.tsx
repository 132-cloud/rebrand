"use client";

import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { Button } from "@/components/ui/Button";

const cards = [
  {
    title: "Core processing",
    description: "Run deposits, accounts, transactions, and servicing workflows on modern banking infrastructure.",
  },
  {
    title: "Digital banking",
    description: "Launch consumer, business, and niche banking experiences across web and mobile.",
  },
  {
    title: "Account opening",
    description: "Move applicants from intent to funded accounts with connected onboarding workflows.",
  },
  {
    title: "Data and connectivity",
    description: "Connect banking data, third-party systems, and operational workflows across the institution.",
  },
  {
    title: "Engagement and rewards",
    description: "Build deeper relationships through loyalty, nurturing, rewards, and customer engagement.",
  },
];

const smallCards = [
  {
    title: "Deeper relationships",
    description: "Use loyalty, nurturing, rewards, and engagement to grow customer and member relationships after launch.",
  },
  {
    title: "Better decisions",
    description: "Connect real-time data, analytics, and performance insight across banking activity and growth programs.",
  },
  {
    title: "Connected operations",
    description: "Link banking systems, third-party tools, workflows, and teams through governed connectivity.",
  },
];

export function BankingTechnology() {
  return (
    <section className="section-padding bg-charcoal-dark">
      <div className="container-site">
        <ScrollReveal>
          <div className="max-w-5xl mb-4">
            <p className="text-sky-blue text-sm font-medium uppercase tracking-wider mb-3">Banking Technology</p>
            <h4 className="text-[2rem] md:text-[2.15rem] mb-2 leading-tight">
              <span className="font-bold">Core, digital, data, and engagement built together.</span>{" "}
              <span className="font-normal text-white/60">
                Use Nymbus banking technology to launch new banking models, support digital growth, or modernize core infrastructure with connected capabilities.
              </span>
            </h4>
          </div>
        </ScrollReveal>

        {/* Main capability cards */}
        <ScrollReveal delay={0.1}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-10">
            {cards.map((card, i) => (
              <div
                key={card.title}
                className={`${i === 0 ? "md:col-span-2" : i === cards.length - 1 ? "md:col-span-2" : "md:col-span-1"}
                  p-6 md:p-8 rounded-xl border border-white/5 bg-charcoal-medium/40 hover:border-white/15 transition-all duration-300`}
              >
                <h4 className="text-white font-semibold text-base mb-2">{card.title}</h4>
                <p className="text-white/40 text-sm leading-relaxed">{card.description}</p>
              </div>
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="mt-8">
            <Button href="/products/" variant="outline">
              Explore banking technology
            </Button>
          </div>
        </ScrollReveal>

        {/* Three-column small cards */}
        <ScrollReveal delay={0.3}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-14 pt-14 border-t border-white/5">
            {smallCards.map((card) => (
              <div key={card.title}>
                <h5 className="text-white font-semibold text-sm mb-2">{card.title}</h5>
                <p className="text-white/40 text-sm leading-relaxed">{card.description}</p>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
