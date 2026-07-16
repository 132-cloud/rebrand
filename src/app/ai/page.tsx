"use client";

import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { Button } from "@/components/ui/Button";
import { FooterCTAGuide } from "@/components/sections/home/guide/FooterCTAGuide";

// ─── Supporting Points ───────────────────────────────────────────────────────

const supportingPoints = [
  {
    title: "Inside your rules.",
    body: "Every action runs under the permissions and approvals your institution already operates on.",
  },
  {
    title: "Explainable by default.",
    body: "Decisions are logged and auditable, built for the scrutiny a regulator brings.",
  },
  {
    title: "Routine handled, exceptions escalated.",
    body: "AI acts on the routine and hands the rest to a person.",
  },
];

// ─── Main Page ───────────────────────────────────────────────────────────────

export default function AIPage() {
  return (
    <div className="bg-white text-[#171216]">
      {/* ─── Hero ─────────────────────────────────────────────────────────── */}
      <section className="relative pt-36 pb-20 md:pt-44 md:pb-28 overflow-hidden">
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover">
            <source src="/images/footer-cta-bg.webm" type="video/webm" />
          </video>
        </div>
        <div className="container-site relative z-10">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-[2.5rem] md:text-[3.5rem] font-bold leading-[1.08] tracking-[-0.03em] text-[#171216] mb-6">
                AI that answers to permissions, approvals, and audit.
              </h1>
              <p className="text-neutral-500 text-lg md:text-xl leading-relaxed mb-8 max-w-2xl mx-auto">
                Governed and operational, built from within. AI that works inside the rules your institution already runs on, so automation moves the work without moving outside your controls.
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                <Button href="/request-demo/" variant="primary" size="lg">
                  Book a demo
                </Button>
                <Button href="/contact/?topic=ai" variant="outline" size="lg" className="!text-[#171216] !border-neutral-300 !bg-white/60 hover:!bg-white/80">
                  Talk to an expert
                </Button>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ─── Point-of-View Band ───────────────────────────────────────────── */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container-site">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-[1.75rem] md:text-[2.25rem] font-bold leading-tight tracking-[-0.02em] text-[#171216] mb-6">
                Agents are a task. Not a strategy.
              </h2>
              <p className="text-neutral-500 text-base md:text-lg leading-relaxed">
                A model that triages a fraud alert or summarizes a loan file is useful work. But a collection of agents is a collection of demos until something connects them to your data, your approvals, and your core in real time. The hard part of AI in banking is that connective tissue. It&apos;s the part Nymbus built.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ─── Section 1: Our Approach ──────────────────────────────────────── */}
      <section id="approach" className="py-20 md:py-28">
        <div className="container-site">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto text-center mb-14">
              <p className="text-neutral-400 text-[11px] font-semibold uppercase tracking-wider mb-4">Governed by Design</p>
              <h2 className="text-[1.75rem] md:text-[2.25rem] font-bold leading-tight tracking-[-0.02em] text-[#171216] mb-5">
                Governed from within, not bolted on.
              </h2>
              <p className="text-neutral-500 text-base md:text-lg leading-relaxed">
                Our approach brings AI into everyday banking workflows with the controls, consistency, and accountability regulated institutions need from day one. There&apos;s a difference between AI that builds software and AI that makes decisions inside it, and we hold that line, because our clients are regulated and precision matters.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {supportingPoints.map((point) => (
                <div
                  key={point.title}
                  className="p-6 md:p-8 rounded-2xl border border-neutral-200 bg-white"
                >
                  <h4 className="text-[#171216] text-base font-bold mb-3">{point.title}</h4>
                  <p className="text-neutral-500 text-sm leading-relaxed">{point.body}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ─── Section 2: Nymbus MCP ────────────────────────────────────────── */}
      <section id="nymbus-mcp" className="py-20 md:py-28 bg-white">
        <div className="container-site">
          <ScrollReveal>
            <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
              {/* Text — left */}
              <div className="flex-1">
                <p className="text-neutral-400 text-[11px] font-semibold uppercase tracking-wider mb-4">Permissioned Automation</p>
                <h2 className="text-[1.75rem] md:text-[2.25rem] font-bold leading-tight tracking-[-0.02em] text-[#171216] mb-5">
                  Nymbus MCP, permissioned end to end.
                </h2>
                <p className="text-neutral-500 text-base md:text-lg leading-relaxed">
                  Nymbus MCP connects AI to real banking data and workflows under permissions, approvals, and a full audit trail. Not a flat file from last night, a live path to the core, so automation acts on current data and nothing executes without the sign-off your policy requires.
                </p>
              </div>
              {/* Image placeholder — right */}
              <div className="flex-1 w-full">
                <div className="aspect-[4/3] rounded-2xl bg-neutral-100 border border-neutral-200/60" />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ─── Section 3: Applied AI ────────────────────────────────────────── */}
      <section id="applied" className="py-20 md:py-28">
        <div className="container-site">
          <ScrollReveal>
            <div className="flex flex-col md:flex-row-reverse items-center gap-12 md:gap-16">
              {/* Text — right */}
              <div className="flex-1">
                <p className="text-neutral-400 text-[11px] font-semibold uppercase tracking-wider mb-4">Building the Infrastructure for AI</p>
                <h2 className="text-[1.75rem] md:text-[2.25rem] font-bold leading-tight tracking-[-0.02em] text-[#171216] mb-5">
                  From model to banking outcome.
                </h2>
                <p className="text-neutral-500 text-base md:text-lg leading-relaxed">
                  Applied AI builds the infrastructure that makes AI usable in production, turning models into governed, operational workflows that drive real banking outcomes. It&apos;s the unglamorous integration work that separates AI that changes how a bank operates from AI that only demos well.
                </p>
              </div>
              {/* Image placeholder — left */}
              <div className="flex-1 w-full">
                <div className="aspect-[4/3] rounded-2xl bg-neutral-100 border border-neutral-200/60" />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ─── Closing CTA ──────────────────────────────────────────────────── */}
      <FooterCTAGuide heading="AI your institution can put into production." subtitle="See how Nymbus brings governed, operational AI to real banking workflows, inside the controls you already run on." buttonText="Book a demo" buttonHref="/request-demo/" />
    </div>
  );
}
