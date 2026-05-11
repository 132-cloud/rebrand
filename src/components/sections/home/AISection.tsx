"use client";

import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { Button } from "@/components/ui/Button";
import { FlowFieldShader } from "@/components/animations/FlowFieldShader";

export function AISection() {
  return (
    <section className="section-padding bg-charcoal overflow-hidden">
      <div className="container-site">
        {/* Heading and button above */}
        <ScrollReveal>
          <div className="max-w-5xl mb-10">
            <h4 className="text-[2rem] md:text-[2.15rem] mb-6 leading-tight">
              <span className="font-bold">AI that works inside banking operations.</span>{" "}
              <span className="font-normal text-white/60">Connect AI-powered experiences to approved core actions through a secure MCP Server with role-based access, approvals, and audit controls.</span>
            </h4>
            <Button href="/ai/" variant="primary">
              Learn more about AI-powered banking
            </Button>
          </div>
        </ScrollReveal>

        {/* Full-width shader */}
        <ScrollReveal delay={0.2}>
          <div className="overflow-hidden">
            <FlowFieldShader />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
