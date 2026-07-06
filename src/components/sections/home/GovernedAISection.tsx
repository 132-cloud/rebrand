"use client";

import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { Button } from "@/components/ui/Button";
import { FlowFieldShader } from "@/components/animations/FlowFieldShader";

const aiCards = [
  {
    title: "Govern approved actions",
    description: "Connect AI workflows to defined banking actions, not open-ended automation.",
  },
  {
    title: "Control access and auditability",
    description: "Approve who can initiate, review, and complete sensitive work, plus clear records of AI-supported activity.",
  },
  {
    title: "Apply AI to real work",
    description: "Use AI inside onboarding, servicing, operations, growth, and core banking workflows.",
  },
];

export function GovernedAISection() {
  return (
    <section className="relative section-padding bg-black overflow-hidden">
      {/* FlowFieldShader background */}
      <div className="absolute inset-0 opacity-40 pointer-events-none">
        <FlowFieldShader />
      </div>

      <div className="container-site relative z-10">
        <ScrollReveal>
          <div className="max-w-5xl mb-4">
            <h4 className="text-[2rem] md:text-[2.15rem] mb-2 leading-tight">
              <span className="font-bold text-white">Governed AI connected to real banking work.</span>{" "}
              <span className="font-normal text-white/60">
                Deploy AI-enabled workflows inside a controlled operating model, with approved actions, role-based access, human review paths, and auditability.
              </span>
            </h4>
          </div>
        </ScrollReveal>

        {/* 4-column cards */}
        <ScrollReveal delay={0.1}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-10">
            {aiCards.map((card) => (
              <div
                key={card.title}
                className="p-6 rounded-xl border border-white/10 bg-black/60 backdrop-blur-sm hover:border-white/20 transition-[border-color] duration-300"
              >
                <h4 className="text-white font-semibold text-sm mb-2">{card.title}</h4>
                <p className="text-white/40 text-sm leading-relaxed">{card.description}</p>
              </div>
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="mt-8">
            <Button href="/ai/" variant="primary">
              Build with governed AI
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
