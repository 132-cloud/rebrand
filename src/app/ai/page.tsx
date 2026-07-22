"use client";

import { useState } from "react";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { Button } from "@/components/ui/Button";
import { FooterCTAGuide } from "@/components/sections/home/guide/FooterCTAGuide";

// ─── Governed by Design accordion data ───────────────────────────────────────

const governedCards = [
  {
    id: "rules",
    title: "Inside your rules.",
    body: "Start with answers, not actions. AI surfaces what your team needs, and acts only within your permissions.",
    visual: (
      <div className="w-full h-full rounded-2xl bg-neutral-50 border border-neutral-200/60 p-8 flex flex-col justify-center">
        {/* Permissions/approvals view */}
        <div className="space-y-4">
          <div className="flex items-center gap-3 p-4 rounded-xl bg-white border border-neutral-200 shadow-sm">
            <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
              <svg className="w-4 h-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
            </div>
            <div className="flex-1">
              <p className="text-xs font-semibold text-[#171216]">Action: Waive overdraft fee</p>
              <p className="text-[11px] text-neutral-400">Role: Tier 1 Support &middot; Policy: Auto-approve under $35</p>
            </div>
            <span className="text-[10px] font-medium text-green-600 bg-green-50 px-2 py-0.5 rounded-full">Approved</span>
          </div>
          <div className="flex items-center gap-3 p-4 rounded-xl bg-white border border-neutral-200 shadow-sm">
            <div className="w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0">
              <svg className="w-4 h-4 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01M12 3a9 9 0 110 18 9 9 0 010-18z" /></svg>
            </div>
            <div className="flex-1">
              <p className="text-xs font-semibold text-[#171216]">Action: Increase wire limit to $50K</p>
              <p className="text-[11px] text-neutral-400">Role: Tier 1 Support &middot; Policy: Requires manager sign-off</p>
            </div>
            <span className="text-[10px] font-medium text-amber-600 bg-amber-50 px-2 py-0.5 rounded-full">Escalated</span>
          </div>
          <div className="flex items-center gap-3 p-4 rounded-xl bg-white border border-neutral-200 shadow-sm opacity-60">
            <div className="w-8 h-8 rounded-full bg-neutral-100 flex items-center justify-center flex-shrink-0">
              <svg className="w-4 h-4 text-neutral-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728L5.636 5.636" /></svg>
            </div>
            <div className="flex-1">
              <p className="text-xs font-semibold text-[#171216]">Action: Close account</p>
              <p className="text-[11px] text-neutral-400">Role: Tier 1 Support &middot; Policy: Not permitted</p>
            </div>
            <span className="text-[10px] font-medium text-red-600 bg-red-50 px-2 py-0.5 rounded-full">Blocked</span>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "audit",
    title: "Explainable by default.",
    body: "Every decision is logged, searchable, and auditable, built for the scrutiny a regulator brings.",
    visual: (
      <div className="w-full h-full rounded-2xl bg-neutral-50 border border-neutral-200/60 p-8 flex flex-col justify-center">
        {/* Audit trail graphic */}
        <div className="mb-4 flex items-center gap-2">
          <div className="flex-1 bg-white border border-neutral-200 rounded-lg px-3 py-2 flex items-center gap-2">
            <svg className="w-4 h-4 text-neutral-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z" /></svg>
            <span className="text-xs text-neutral-400">Search audit log...</span>
          </div>
        </div>
        <div className="space-y-3">
          <div className="p-3 rounded-lg bg-white border border-neutral-200 shadow-sm">
            <div className="flex items-center justify-between mb-1">
              <span className="text-[11px] font-semibold text-[#171216]">Fee reversal approved</span>
              <span className="text-[10px] text-neutral-400">Jul 18, 2026 &middot; 10:42 AM</span>
            </div>
            <p className="text-[11px] text-neutral-500 mb-1">Reasoning: Fee charged in error; account within 30-day grace period. Amount: $29.00</p>
            <div className="flex items-center gap-3 text-[10px] text-neutral-400">
              <span>Approver: <span className="text-neutral-600 font-medium">AI (auto)</span></span>
              <span>Policy: <span className="text-neutral-600 font-medium">Grace-period waiver</span></span>
              <span>Ref: <span className="text-neutral-600 font-medium">#AUD-2847</span></span>
            </div>
          </div>
          <div className="p-3 rounded-lg bg-white border border-neutral-200 shadow-sm">
            <div className="flex items-center justify-between mb-1">
              <span className="text-[11px] font-semibold text-[#171216]">Wire transfer escalated</span>
              <span className="text-[10px] text-neutral-400">Jul 18, 2026 &middot; 9:17 AM</span>
            </div>
            <p className="text-[11px] text-neutral-500 mb-1">Reasoning: Amount exceeds Tier 1 limit ($25K). Routed to Ops Manager queue.</p>
            <div className="flex items-center gap-3 text-[10px] text-neutral-400">
              <span>Approver: <span className="text-neutral-600 font-medium">Pending (human)</span></span>
              <span>Policy: <span className="text-neutral-600 font-medium">Wire-limit governance</span></span>
              <span>Ref: <span className="text-neutral-600 font-medium">#AUD-2846</span></span>
            </div>
          </div>
          <div className="p-3 rounded-lg bg-white border border-neutral-200 shadow-sm opacity-70">
            <div className="flex items-center justify-between mb-1">
              <span className="text-[11px] font-semibold text-[#171216]">Dispute case auto-filed</span>
              <span className="text-[10px] text-neutral-400">Jul 17, 2026 &middot; 3:51 PM</span>
            </div>
            <p className="text-[11px] text-neutral-500 mb-1">Reasoning: Reg E provisional credit issued; merchant notified. Amount: $142.50</p>
            <div className="flex items-center gap-3 text-[10px] text-neutral-400">
              <span>Approver: <span className="text-neutral-600 font-medium">AI (auto)</span></span>
              <span>Policy: <span className="text-neutral-600 font-medium">Reg-E fast-track</span></span>
              <span>Ref: <span className="text-neutral-600 font-medium">#AUD-2845</span></span>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "routing",
    title: "Routine handled, exceptions escalated.",
    body: "AI handles the routine and escalates the rest, always with a person on exceptions.",
    visual: (
      <div className="w-full h-full rounded-2xl bg-neutral-50 border border-neutral-200/60 p-8 flex flex-col justify-center">
        {/* Routing/triage graphic */}
        <div className="space-y-3">
          <p className="text-[11px] font-semibold text-neutral-400 uppercase tracking-wider mb-2">Incoming queue</p>
          <div className="flex items-center gap-3 p-3 rounded-lg bg-white border border-green-200 shadow-sm">
            <div className="w-2 h-2 rounded-full bg-green-500 flex-shrink-0" />
            <div className="flex-1">
              <p className="text-[11px] font-semibold text-[#171216]">Address change request</p>
              <p className="text-[10px] text-neutral-400">Verified identity &middot; Policy match</p>
            </div>
            <span className="text-[10px] font-medium text-green-600 bg-green-50 px-2 py-0.5 rounded-full">Auto-cleared</span>
          </div>
          <div className="flex items-center gap-3 p-3 rounded-lg bg-white border border-green-200 shadow-sm">
            <div className="w-2 h-2 rounded-full bg-green-500 flex-shrink-0" />
            <div className="flex-1">
              <p className="text-[11px] font-semibold text-[#171216]">Card replacement — lost</p>
              <p className="text-[10px] text-neutral-400">Standard request &middot; No flags</p>
            </div>
            <span className="text-[10px] font-medium text-green-600 bg-green-50 px-2 py-0.5 rounded-full">Auto-cleared</span>
          </div>
          <div className="flex items-center gap-3 p-3 rounded-lg bg-white border border-green-200 shadow-sm">
            <div className="w-2 h-2 rounded-full bg-green-500 flex-shrink-0" />
            <div className="flex-1">
              <p className="text-[11px] font-semibold text-[#171216]">Fee inquiry — monthly maintenance</p>
              <p className="text-[10px] text-neutral-400">Auto-explain &middot; No action needed</p>
            </div>
            <span className="text-[10px] font-medium text-green-600 bg-green-50 px-2 py-0.5 rounded-full">Auto-cleared</span>
          </div>
          <div className="flex items-center gap-3 p-3 rounded-lg bg-white border border-amber-300 shadow-sm ring-1 ring-amber-200">
            <div className="w-2 h-2 rounded-full bg-amber-500 flex-shrink-0 animate-pulse" />
            <div className="flex-1">
              <p className="text-[11px] font-semibold text-[#171216]">Large ACH return — $12,400</p>
              <p className="text-[10px] text-neutral-400">Exceeds auto-clear threshold &middot; Manual review required</p>
            </div>
            <span className="text-[10px] font-medium text-amber-700 bg-amber-50 px-2 py-0.5 rounded-full">→ Human</span>
          </div>
        </div>
      </div>
    ),
  },
];

// ─── Main Page ───────────────────────────────────────────────────────────────

export default function AIPage() {
  const [activeCard, setActiveCard] = useState(0);

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
                Governed and operational, built from within. AI that works inside the rules your institution already runs on, from surfacing answers to acting on the routine.
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                <Button href="/request-demo/" variant="primary" size="lg">
                  Get a demo
                </Button>
                <Button href="/contact/?topic=ai" variant="outline" size="lg" className="!text-[#171216] !border-neutral-300 !bg-white/60 hover:!bg-white/80">
                  Talk to an expert
                </Button>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ─── Agents vs. Strategy (two-column like StrategyBand) ────────────── */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container-site">
          <ScrollReveal>
            <div className="flex flex-col md:flex-row items-start gap-12 md:gap-20">
              {/* Left — headline */}
              <div className="flex-1">
                <h2 className="text-[2rem] md:text-[2.75rem] leading-[1.1] tracking-[-0.02em]">
                  <span className="text-neutral-400">Agents are a task.</span>
                  <br />
                  <span className="text-[#171216] font-bold">Not a strategy.</span>
                </h2>
              </div>

              {/* Right — body */}
              <div className="flex-1">
                <p className="text-neutral-500 text-base md:text-lg leading-relaxed">
                  A model that triages a fraud alert or summarizes a loan file is useful work. But a collection of agents is a collection of demos until something connects them to your data, your approvals, and your core. That connective tissue is the hard part of AI in banking, and it&apos;s the part Nymbus built.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ─── Governed by Design (accordion + visual panel) ────────────────── */}
      <section id="approach" className="py-20 md:py-28 bg-white">
        <div className="container-site">
          <ScrollReveal>
            <div className="mb-14">
              <p className="text-neutral-400 text-[11px] font-semibold uppercase tracking-wider mb-4">Governed by Design</p>
              <h2 className="text-[1.75rem] md:text-[2.25rem] font-bold leading-tight tracking-[-0.02em] text-[#171216] mb-5 max-w-3xl">
                Governed from within, not bolted on.
              </h2>
              <p className="text-neutral-500 text-base md:text-lg leading-relaxed max-w-3xl">
                Our approach brings AI into everyday banking workflows with the controls and accountability regulated institutions need, whether AI is informing, assisting, or acting on your team&apos;s behalf. AI that builds software is different from AI that makes decisions inside it, and we hold that line.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="flex flex-col md:flex-row gap-8 md:gap-12">
              {/* Left — accordion */}
              <div className="flex-1 flex flex-col justify-center">
                {governedCards.map((card, idx) => (
                  <div key={card.id}>
                    {idx > 0 && <div className="h-px bg-neutral-200" />}
                    <button
                      onClick={() => setActiveCard(idx)}
                      className="w-full text-left py-5 cursor-pointer group"
                    >
                      <h4
                        className={`text-base md:text-lg font-bold transition-colors ${
                          activeCard === idx ? "text-[#171216]" : "text-neutral-400 group-hover:text-neutral-600"
                        }`}
                      >
                        {card.title}
                      </h4>
                      <div
                        className="overflow-hidden transition-[max-height,opacity] duration-300"
                        style={{
                          maxHeight: activeCard === idx ? "200px" : "0",
                          opacity: activeCard === idx ? 1 : 0,
                        }}
                      >
                        <p className="text-neutral-500 text-sm leading-relaxed mt-2 pr-4">
                          {card.body}
                        </p>
                      </div>
                    </button>
                  </div>
                ))}
              </div>

              {/* Right — visual panel */}
              <div className="flex-1 min-h-[400px] md:min-h-[480px]">
                {governedCards[activeCard].visual}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ─── Adopt AI at your pace ────────────────────────────────────────── */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container-site">
          <ScrollReveal>
            <div className="max-w-3xl mb-14">
              <p className="text-neutral-400 text-[11px] font-semibold uppercase tracking-wider mb-4">Adopt at Your Pace</p>
              <h2 className="text-[1.75rem] md:text-[2.25rem] font-bold leading-tight tracking-[-0.02em] text-[#171216] mb-5">
                Inform. Assist. Do. You set the line.
              </h2>
              <p className="text-neutral-500 text-base md:text-lg leading-relaxed">
                AI adoption isn&apos;t all or nothing. Every institution moves at its own pace, and Nymbus works the same at every stage, under the same controls.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 md:p-8 rounded-2xl border border-neutral-200 bg-white">
                <p className="text-neutral-400 text-[11px] font-semibold uppercase tracking-wider mb-3">Inform</p>
                <h4 className="text-[#171216] text-base font-bold mb-3">AI surfaces the answer. Your team decides.</h4>
                <p className="text-neutral-500 text-sm leading-relaxed">
                  Ask a question or research a transaction. AI explains, and takes no action on its own.
                </p>
              </div>
              <div className="p-6 md:p-8 rounded-2xl border border-neutral-200 bg-white">
                <p className="text-neutral-400 text-[11px] font-semibold uppercase tracking-wider mb-3">Assist</p>
                <h4 className="text-[#171216] text-base font-bold mb-3">AI drafts the work. Your team approves.</h4>
                <p className="text-neutral-500 text-sm leading-relaxed">
                  AI prepares the case and recommends a decision, then routes it for sign-off. A person still owns the outcome.
                </p>
              </div>
              <div className="p-6 md:p-8 rounded-2xl border border-neutral-200 bg-white">
                <p className="text-neutral-400 text-[11px] font-semibold uppercase tracking-wider mb-3">Do</p>
                <h4 className="text-[#171216] text-base font-bold mb-3">AI acts on the routine. Exceptions come to you.</h4>
                <p className="text-neutral-500 text-sm leading-relaxed">
                  For the work you&apos;ve cleared it to handle, AI acts on routine cases and escalates the rest, under the permissions your team already controls.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ─── Nymbus MCP ───────────────────────────────────────────────────── */}
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
                  Nymbus MCP connects AI to real banking data and workflows, under permissions, approvals, and a full audit trail. Not a flat file from last night, but a live path to the core, so nothing executes without the sign-off your policy requires.
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

      {/* ─── Applied AI ───────────────────────────────────────────────────── */}
      <section id="applied" className="py-20 md:py-28 bg-white">
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
                  Applied AI builds the infrastructure that turns models into governed, operational workflows, and drives real banking outcomes. It&apos;s the integration work that separates AI that changes how a bank operates from AI that only demos well.
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
      <FooterCTAGuide
        heading="AI your institution can put into production."
        subtitle="See how Nymbus brings governed AI to real banking workflows, inside the controls you already run on."
        buttonText="Get a demo"
        buttonHref="/request-demo/"
      />
    </div>
  );
}
