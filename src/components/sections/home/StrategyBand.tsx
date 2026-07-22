"use client";

import { ScrollReveal } from "@/components/animations/ScrollReveal";

export function StrategyBand() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="container-site">
        <ScrollReveal>
          <div className="flex flex-col md:flex-row items-start gap-12 md:gap-20">
            {/* Left — headline */}
            <div className="flex-1">
              <h2 className="text-[2rem] md:text-[2.75rem] leading-[1.1] tracking-[-0.02em]">
                <span className="text-neutral-400 font-light">Your vision is ready.</span>
                <br />
                <span className="text-[#171216] font-bold">Your stack is not.</span>
              </h2>
            </div>

            {/* Right — body */}
            <div className="flex-1">
              <p className="text-neutral-500 text-base md:text-lg leading-relaxed mb-6">
                Institutions do not stall for lack of ambition. Legacy systems, vendor roadmaps, and disconnected work have turned movement into maintenance.
              </p>
              <p className="text-neutral-600 text-base md:text-lg leading-relaxed">
                Nymbus turns that vision into a banking model in production, the strategy and the infrastructure to run it.
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
