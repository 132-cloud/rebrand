"use client";

import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { Button } from "@/components/ui/Button";

const serviceAreas = [
  { title: "Contact center", description: "Customer and member support capacity for launch, scale, and daily service." },
  { title: "Onboarding", description: "Operational support for applicant onboarding, documentation, setup, and activation." },
  { title: "Servicing", description: "Support for the customer workflows that shape day-to-day banking." },
  { title: "Fraud operations", description: "Monitoring, review, escalation, and response support." },
  { title: "Compliance workflows", description: "Operational support for KYC, KYB, AML, and regulated processes." },
  { title: "Back office", description: "Processing and operations support for the work behind banking programs." },
  { title: "Business banking support", description: "Operational support for business account workflows." },
  { title: "Labs", description: "Strategy, creative, acquisition, and performance support for growth programs." },
];

const smallCards = [
  {
    title: "Faster execution",
    description: "Move from strategy to live banking model with managed services and Labs growth support.",
  },
  {
    title: "Speed to value with AI",
    description: "Apply AI inside governed workflows built into the operating model, not bolted on top.",
  },
];

export function ManagedServicesNew() {
  return (
    <section className="section-padding bg-white">
      <div className="container-site">
        <ScrollReveal>
          <div className="max-w-5xl mb-12">
            <p className="text-[#0065ff] text-sm font-medium uppercase tracking-wider mb-3">Managed Services</p>
            <h4 className="text-[2rem] md:text-[2.15rem] mb-2 leading-tight">
              <span className="font-bold text-neutral-900">Operational capacity without more vendor drag.</span>{" "}
              <span className="font-normal text-neutral-500">
                Use managed services to support the work behind onboarding, servicing, fraud, compliance, contact center, and back-office operations.
              </span>
            </h4>
          </div>
        </ScrollReveal>

        {/* Service areas grid */}
        <ScrollReveal delay={0.1}>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {serviceAreas.map((service) => (
              <div
                key={service.title}
                className="p-5 md:p-6 rounded-xl border border-neutral-200 bg-neutral-50 hover:border-neutral-300 transition-all duration-300"
              >
                <h4 className="text-neutral-900 font-semibold text-sm mb-1.5">{service.title}</h4>
                <p className="text-neutral-500 text-sm leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="mt-8">
            <Button href="/managed-services/" variant="primary">
              Explore managed services
            </Button>
          </div>
        </ScrollReveal>

        {/* Two-column small cards */}
        <ScrollReveal delay={0.3}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-14 pt-14 border-t border-neutral-200">
            {smallCards.map((card) => (
              <div key={card.title}>
                <h5 className="text-neutral-900 font-semibold text-sm mb-2">{card.title}</h5>
                <p className="text-neutral-500 text-sm leading-relaxed">{card.description}</p>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
