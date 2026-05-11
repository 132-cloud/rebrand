"use client";

import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { Button } from "@/components/ui/Button";

export function ActivationPaths() {
  return (
    <section className="section-padding bg-charcoal">
      <div className="container-site">
        <ScrollReveal>
          <div className="max-w-5xl mx-auto text-center mb-14">
            <h4 className="text-[2rem] md:text-[2.15rem] mb-4 leading-tight">
              <span className="font-bold">Choose an activation path.</span>{" "}
              <span className="font-normal text-white/60">With modern infrastructure, parallel or primary cores, operational, and implementation support, you can get started with the best option for your financial institution.</span>
            </h4>
          </div>
        </ScrollReveal>

        {/* Two-column layout with image boxes and text below */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Parallel Core */}
          <ScrollReveal delay={0.1}>
            <div>
              {/* Image placeholder */}
              <div className="aspect-[4/3] rounded-2xl bg-charcoal-medium mb-6" />

              {/* Text below */}
              <h3 className="text-xl md:text-2xl text-white mb-3">
                <span className="font-bold">Parallel core</span>{" "}
                <span className="font-normal text-white/60">to launch new growth without disrupting current operations.</span>
              </h3>
              <p className="text-white/50 text-sm leading-relaxed mb-4">
                Stand up a new brand, line of business, private label program, or
                acquisition strategy while your existing core continues to run.
              </p>
              <Button href="/solutions/parallel-core/" variant="outline" size="sm">
                Launch a parallel core
              </Button>
            </div>
          </ScrollReveal>

          {/* Primary Core */}
          <ScrollReveal delay={0.2}>
            <div>
              {/* Image placeholder */}
              <div className="aspect-[4/3] rounded-2xl bg-charcoal-medium mb-6" />

              {/* Text below */}
              <h3 className="text-xl md:text-2xl text-white mb-3">
                <span className="font-bold">Primary core</span>{" "}
                <span className="font-normal text-white/60">that replaces legacy infrastructure with a modern platform built to last.</span>
              </h3>
              <p className="text-white/50 text-sm leading-relaxed mb-4">
                Modernize the foundation of your bank or credit union with the
                core, digital, operational, and implementation support to execute
                with confidence.
              </p>
              <Button href="/solutions/modernize-core/" variant="outline" size="sm">
                Modernize your core
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
