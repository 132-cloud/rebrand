"use client";

import { ScrollReveal } from "@/components/animations/ScrollReveal";

export function StrategyBand() {
  return (
    <section className="py-20 md:py-28 bg-[#1a1a1a]">
      <div className="container-site">
        <ScrollReveal>
          <div className="flex flex-col md:flex-row items-start gap-12 md:gap-20">
            {/* Left — headline */}
            <div className="flex-1">
              <h2 className="text-[2rem] md:text-[2.75rem] leading-[1.1] tracking-[-0.02em]">
                <span className="text-white/50 font-light">The strategy is ready.</span>
                <br />
                <span className="text-white font-bold">Your stack is not.</span>
              </h2>
            </div>

            {/* Right — body */}
            <div className="flex-1">
              <p className="text-white/50 text-base md:text-lg leading-relaxed mb-6">
                Institutions do not stall for lack of ambition. Legacy systems, vendor roadmaps, and disconnected work have turned movement into maintenance.
              </p>
              <p className="text-white/70 text-base md:text-lg leading-relaxed">
                Nymbus is banking built to move with you, so the plan on the whiteboard becomes a banking model in production.
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
