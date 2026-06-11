"use client";

import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { Button } from "@/components/ui/Button";

const paths = [
  {
    title: "Managed services",
    description: "Add operational support for servicing, onboarding, fraud, compliance workflows, contact center, and back-office work.",
    cta: "Start with managed services",
    href: "/managed-services/",
  },
  {
    title: "Digital growth",
    description: "Launch a digital brand, vertical strategy, private-label program, or new line of business.",
    cta: "Launch digital growth",
    href: "/solutions/digital-brand/",
  },
  {
    title: "Parallel core",
    description: "Deploy a parallel core to support new growth without disrupting current operations.",
    cta: "Launch a parallel core",
    href: "/core-banking/#parallel",
  },
  {
    title: "Primary core",
    description: "Modernize the core foundation with digital, data, operations, and implementation support connected.",
    cta: "Modernize the core",
    href: "/core-banking/",
  },
];

export function ActivationPathsNew() {
  return (
    <section className="section-padding bg-white">
      <div className="container-site">
        <ScrollReveal>
          <div className="max-w-5xl mx-auto text-center mb-12">
            <h4 className="text-[2rem] md:text-[2.15rem] mb-2 leading-tight">
              <span className="font-bold text-neutral-900">Choose the path that fits your strategy.</span>{" "}
              <span className="font-normal text-neutral-500">
                Start with managed services, onboarding, digital growth, a parallel core, or full modernization, then expand across one connected platform.
              </span>
            </h4>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {paths.map((path) => (
              <div
                key={path.title}
                className="p-6 md:p-8 rounded-2xl border border-neutral-200 bg-neutral-50 hover:border-neutral-300 transition-all duration-300 flex flex-col"
              >
                <h4 className="text-neutral-900 font-bold text-lg mb-3">{path.title}</h4>
                <p className="text-neutral-500 text-sm leading-relaxed mb-6 flex-1">{path.description}</p>
                <Button href={path.href} variant="primary" size="sm">
                  {path.cta}
                </Button>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
