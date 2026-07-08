"use client";

import { useState } from "react";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { Button } from "@/components/ui/Button";
import Link from "next/link";

// ─── FAQ Data ────────────────────────────────────────────────────────────────

const faqGeneral = [
  { question: "What are Nymbus Managed Services?", answer: "The operational functions behind a running bank, staffed and run by Nymbus: contact center, onboarding, back-office processing, risk and compliance support, fraud operations, and business banking support." },
  { question: "How does the shared-services model work?", answer: "Nymbus executes and manages operational processes against the policies and thresholds you define. Your institution retains regulatory responsibility, risk management, and oversight of all outsourced activity." },
  { question: "Do we keep control of compliance and risk?", answer: "Yes. Nymbus supports and executes controls; your institution holds ultimate responsibility for regulatory compliance and reporting. Findings specific to your program are shared with you." },
  { question: "Can we set our own approval thresholds and decisioning rules?", answer: "Yes. You define approval limits, KYC decisioning criteria, and exception rules. Nymbus operates within them and escalates anything above your thresholds." },
  { question: "What is included, and what is an enhanced add-on?", answer: "Standard reporting runs monthly by default. Dedicated support, client-specific QA and fraud reporting, and more frequent reporting are available as enhanced services." },
];

const faqOperations = [
  { question: "How does application onboarding and decisioning work?", answer: "Every application is scored by Socure ID+ on submission and routed to auto-approve, auto-deny, or refer. The onboarding team works all refer cases, including document verification and fraud review." },
  { question: "Can Nymbus support business and commercial accounts?", answer: "Yes. Business onboarding adds KYB verification through Socure and Middesk, plus ACH origination, Positive Pay, authorized signer, and secondary-user management." },
  { question: "Is customer support provided under our brand?", answer: "Yes. The Digital Experience Center handles calls, secure messages, and email during your business hours, under your brand, with quality scored on every interaction." },
  { question: "How are fraud disputes handled?", answer: "The fraud team processes ACH, P2P, bill pay, and debit card disputes under Reg E and NACHA rules, investigates each one, issues required notices, and coordinates any account credit." },
  { question: "What reporting do we receive?", answer: "Monthly support, complaint, and fraud reports, plus a quarterly debit card dispute report. Enhanced and more frequent reporting is available as an add-on." },
];

// ─── FAQ Accordion Item ──────────────────────────────────────────────────────

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-neutral-200">
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between py-5 text-left cursor-pointer">
        <span className="text-neutral-900 text-base font-semibold pr-4">{question}</span>
        <svg className={`w-5 h-5 text-neutral-400 flex-shrink-0 transition-transform duration-200 ${open ? "rotate-45" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
        </svg>
      </button>
      <div className="overflow-hidden transition-[max-height,opacity] duration-300" style={{ maxHeight: open ? "300px" : "0", opacity: open ? 1 : 0 }}>
        <p className="text-neutral-500 text-sm leading-relaxed pb-5 pr-12">{answer}</p>
      </div>
    </div>
  );
}

// ─── Operational Domains ─────────────────────────────────────────────────────

const domains = [
  "Contact center and member support",
  "Application onboarding, KYC and KYB",
  "Back-office processing and reconciliation",
  "Risk, compliance and BSA/AML support",
  "Fraud monitoring, disputes and response",
  "Business and commercial banking operations",
];

// ─── Main Page ───────────────────────────────────────────────────────────────

export default function ManagedServicesPage() {
  return (
    <div className="bg-white text-neutral-900">
      {/* ─── 1. Hero ──────────────────────────────────────────────────────── */}
      <section className="relative pt-36 pb-20 md:pt-44 md:pb-28 overflow-hidden">
        <div className="absolute inset-0 w-full h-full" style={{ backgroundImage: "url('/background---.png')", backgroundSize: "cover", backgroundPosition: "center" }} />
        <div className="container-site relative z-10">
          <ScrollReveal>
            <div className="max-w-3xl">
              <p className="text-neutral-400 text-[11px] font-semibold uppercase tracking-wider mb-4">Managed Services</p>
              <h1 className="text-[2.5rem] md:text-[3.5rem] font-bold leading-[1.08] tracking-[-0.02em] text-neutral-900 mb-6">
                We build it. We run it.
              </h1>
              <p className="text-neutral-500 text-lg md:text-xl leading-relaxed mb-8 max-w-2xl">
                The team that builds your operations runs them too. Problems get fixed by the people who built them, not forwarded. Your staff stays focused on the institution.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button href="/contact/?topic=managed-services" variant="primary" size="lg" className="!bg-neutral-900 !text-white !shadow-none hover:!bg-neutral-800">
                  Talk to an expert
                </Button>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ─── 2. Proof Strip ───────────────────────────────────────────────── */}
      <section className="py-12 border-y border-neutral-100">
        <div className="container-site">
          <ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <p className="text-[2.5rem] font-bold text-neutral-900 mb-1 tabular-nums">6</p>
                <p className="text-neutral-500 text-sm">Operational domains Nymbus staffs and runs</p>
              </div>
              <div>
                <p className="text-[2.5rem] font-bold text-neutral-900 mb-1 tabular-nums">24/7</p>
                <p className="text-neutral-500 text-sm">Monitoring and fraud response</p>
              </div>
              <div>
                <p className="text-[2.5rem] font-bold text-neutral-900 mb-1 tabular-nums">100%</p>
                <p className="text-neutral-500 text-sm">Interactions quality scored</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ─── 3. Meet the Team ─────────────────────────────────────────────── */}
      <section id="meet-the-team" className="py-20 md:py-28">
        <div className="container-site">
          <ScrollReveal>
            <div className="max-w-3xl mb-14">
              <h2 className="text-[1.75rem] md:text-[2.25rem] font-bold leading-tight tracking-[-0.02em] text-neutral-900 mb-5">
                Meet the team that runs your operations.
              </h2>
              <p className="text-neutral-500 text-base md:text-lg leading-relaxed">
                One team across every operation, staffed by Nymbus and running behind your brand, so you scale without standing up a back office.
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {domains.map((domain) => (
                <div key={domain} className="p-5 rounded-xl border border-neutral-200 bg-neutral-50">
                  <p className="text-neutral-900 text-sm font-medium">{domain}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ─── 4. Customer Proof ────────────────────────────────────────────── */}
      <section className="py-16 md:py-20 bg-neutral-50 border-y border-neutral-100">
        <div className="container-site">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto text-center">
              <blockquote className="text-neutral-700 text-xl md:text-2xl font-light leading-relaxed italic mb-6">
                &ldquo;Placeholder — requires written customer approval. Suggested angle: a credit union or bank that launched a digital brand and ran it without adding an operations team, citing how fast issues get resolved because the team that built the service runs it.&rdquo;
              </blockquote>
              <p className="text-neutral-500 text-sm">Name, Title, Institution — pending written approval</p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ─── 5. Digital Onboarding (dark section) ─────────────────────────── */}
      <section id="onboarding" className="py-20 md:py-28 bg-neutral-900">
        <div className="container-site">
          <ScrollReveal>
            <div className="max-w-3xl mb-14">
              <p className="text-white/40 text-[11px] font-semibold uppercase tracking-wider mb-4">Digital Onboarding</p>
              <h2 className="text-[1.75rem] md:text-[2.25rem] font-bold leading-tight tracking-[-0.02em] text-white mb-5">
                Every application, decisioned in seconds.
              </h2>
              <p className="text-white/60 text-base md:text-lg leading-relaxed">
                Nymbus scores every application the moment it is submitted and routes it automatically, so clean applicants get through fast and edge cases get worked by people, not left in a queue.
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 md:p-8 rounded-2xl border border-white/10 bg-white/5">
                <h4 className="text-white text-base font-bold mb-3">Auto-approve, auto-deny, or refer.</h4>
                <p className="text-white/60 text-sm leading-relaxed">Socure ID+ scores each application on intake and routes it to one of three outcomes. Clean applicants are approved without anyone touching the file.</p>
              </div>
              <div className="p-6 md:p-8 rounded-2xl border border-white/10 bg-white/5">
                <h4 className="text-white text-base font-bold mb-3">Every refer, worked end to end.</h4>
                <p className="text-white/60 text-sm leading-relaxed">The onboarding team runs manual review, document and selfie verification, and fraud coordination on flagged cases, deciding each one against your KYC rules. Business applications add KYB through Socure and Middesk.</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ─── 6. Operational Breadth (three columns) ───────────────────────── */}
      <section id="back-office" className="py-20 md:py-28">
        <div className="container-site">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto text-center mb-14">
              <h2 className="text-[1.75rem] md:text-[2.25rem] font-bold leading-tight tracking-[-0.02em] text-neutral-900 mb-5">
                Every operation, already handled.
              </h2>
              <p className="text-neutral-500 text-base md:text-lg leading-relaxed">
                Reconciliation, fraud response, and compliance monitoring run every day, behind your brand, without your team working the queue.
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 md:p-8 rounded-2xl border border-neutral-200 bg-neutral-50">
                <h4 className="text-neutral-900 text-base font-bold mb-3">Back office runs without you.</h4>
                <p className="text-neutral-500 text-sm leading-relaxed">Digital Operations reconciles GLs daily, posts and works ACH files, runs Positive Pay, and matches every card transaction to Core, so nothing sits unbalanced.</p>
              </div>
              <div className="p-6 md:p-8 rounded-2xl border border-neutral-200 bg-neutral-50">
                <h4 className="text-neutral-900 text-base font-bold mb-3">Fraud is worked, not just flagged.</h4>
                <p className="text-neutral-500 text-sm leading-relaxed">The fraud team investigates disputes under Reg E and NACHA, works suspicious activity, manages card rules and CAMS alerts, and reports what it finds.</p>
              </div>
              <div className="p-6 md:p-8 rounded-2xl border border-neutral-200 bg-neutral-50">
                <h4 className="text-neutral-900 text-base font-bold mb-3">Compliance is monitored, not filed away.</h4>
                <p className="text-neutral-500 text-sm leading-relaxed">Compliance tracks regulatory change, handles complaints, subpoenas and levies, screens against OFAC, and shares findings on your program as they surface.</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ─── 7. Shared-Services Model ─────────────────────────────────────── */}
      <section id="compliance" className="py-20 md:py-28 bg-neutral-50">
        <div className="container-site">
          <ScrollReveal>
            <div className="max-w-3xl mb-14">
              <p className="text-neutral-400 text-[11px] font-semibold uppercase tracking-wider mb-4">The shared-services model</p>
              <h2 className="text-[1.75rem] md:text-[2.25rem] font-bold leading-tight tracking-[-0.02em] text-neutral-900 mb-5">
                We run the work. You keep control.
              </h2>
              <p className="text-neutral-500 text-base md:text-lg leading-relaxed">
                Outsourcing the operation should not mean giving up oversight. You define the rules; Nymbus executes inside them.
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 md:p-8 rounded-2xl border border-neutral-200 bg-white">
                <h4 className="text-neutral-900 text-base font-bold mb-3">You set the thresholds.</h4>
                <p className="text-neutral-500 text-sm leading-relaxed">You define approval limits, decisioning criteria, and exception rules. Nymbus operates to them and escalates anything above your thresholds instead of acting alone.</p>
              </div>
              <div className="p-6 md:p-8 rounded-2xl border border-neutral-200 bg-white">
                <h4 className="text-neutral-900 text-base font-bold mb-3">You keep regulatory ownership.</h4>
                <p className="text-neutral-500 text-sm leading-relaxed">Nymbus executes and manages the operational controls. Your institution retains regulatory responsibility, risk management, and oversight of everything run on your behalf.</p>
              </div>
              <div className="p-6 md:p-8 rounded-2xl border border-neutral-200 bg-white">
                <h4 className="text-neutral-900 text-base font-bold mb-3">Automation runs inside your rules.</h4>
                <p className="text-neutral-500 text-sm leading-relaxed">Where Nymbus applies AI to operational work, it runs under the same permissions, approvals, and audit trail as everything else your team controls.</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ─── 8. Support and Business Banking ──────────────────────────────── */}
      <section id="contact-center" className="py-20 md:py-28">
        <div className="container-site">
          <ScrollReveal>
            <div className="max-w-3xl mb-14">
              <p className="text-neutral-400 text-[11px] font-semibold uppercase tracking-wider mb-4">Support and servicing</p>
              <h2 className="text-[1.75rem] md:text-[2.25rem] font-bold leading-tight tracking-[-0.02em] text-neutral-900 mb-5">
                Support that scales with your brand.
              </h2>
              <p className="text-neutral-500 text-base md:text-lg leading-relaxed">
                Members and business customers reach trained support under your name, and your commercial operations are covered without a specialist team.
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 md:p-8 rounded-2xl border border-neutral-200 bg-neutral-50">
                <h4 className="text-neutral-900 text-base font-bold mb-3">Support staffed under your brand.</h4>
                <p className="text-neutral-500 text-sm leading-relaxed">The Digital Experience Center handles calls, secure messages, and email during your hours, with quality scored against standardized scorecards on every interaction.</p>
              </div>
              <div id="business-banking" className="p-6 md:p-8 rounded-2xl border border-neutral-200 bg-neutral-50">
                <h4 className="text-neutral-900 text-base font-bold mb-3">Business banking, fully covered.</h4>
                <p className="text-neutral-500 text-sm leading-relaxed">KYB verification, ACH origination, Positive Pay, and signer and secondary-user management run behind your commercial accounts, so you serve businesses without new headcount.</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ─── 9. Reporting ─────────────────────────────────────────────────── */}
      <section className="py-20 md:py-28 bg-neutral-50">
        <div className="container-site">
          <ScrollReveal>
            <div className="max-w-3xl">
              <p className="text-neutral-400 text-[11px] font-semibold uppercase tracking-wider mb-4">Reporting</p>
              <h2 className="text-[1.75rem] md:text-[2.25rem] font-bold leading-tight tracking-[-0.02em] text-neutral-900 mb-5">
                Know what is running, every month.
              </h2>
              <p className="text-neutral-500 text-base md:text-lg leading-relaxed">
                Monthly reporting on support, complaints, and fraud, plus a quarterly dispute report, keeps you current on your program. Enhanced, client-specific reporting is available as an add-on.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ─── 10. Labs (closing band) ──────────────────────────────────────── */}
      <section className="py-20 md:py-28 bg-neutral-900">
        <div className="container-site">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-white/40 text-[11px] font-semibold uppercase tracking-wider mb-4">Nymbus Labs</p>
              <h2 className="text-[1.75rem] md:text-[2.25rem] font-bold leading-tight tracking-[-0.02em] text-white mb-5">
                The growth layer around launch.
              </h2>
              <p className="text-white/60 text-base md:text-lg leading-relaxed mb-8">
                Nymbus Labs embeds growth experts with your team to architect, launch, and optimize your digital brand, from the first account to the ten-thousandth.
              </p>
              <Link href="/labs/" className="inline-flex items-center text-white/70 text-sm font-semibold hover:text-white transition-colors no-underline">
                Explore Labs
                <svg className="w-4 h-4 ml-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ─── 11. Final CTA ────────────────────────────────────────────────── */}
      <section className="py-20 md:py-28 bg-white border-t border-neutral-100">
        <div className="container-site">
          <ScrollReveal>
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-[1.75rem] md:text-[2.25rem] font-bold leading-tight tracking-[-0.02em] text-neutral-900 mb-6">
                Launch it. Run it. Grow it.
              </h2>
              <div className="flex flex-wrap justify-center gap-3">
                <Button href="/contact/?topic=managed-services" variant="primary" size="lg" className="!bg-neutral-900 !text-white !shadow-none hover:!bg-neutral-800">
                  Talk to an expert
                </Button>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ─── 12. FAQ ──────────────────────────────────────────────────────── */}
      <section className="py-20 md:py-28 bg-neutral-50">
        <div className="container-site">
          <ScrollReveal>
            <h2 className="text-[1.75rem] md:text-[2.25rem] font-bold leading-tight tracking-[-0.02em] text-neutral-900 mb-10">
              FAQs
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="max-w-3xl">
              <h3 className="text-neutral-400 text-[11px] font-semibold uppercase tracking-wider mb-4">Nymbus Managed Services</h3>
              {faqGeneral.map((faq) => (
                <FAQItem key={faq.question} question={faq.question} answer={faq.answer} />
              ))}

              <h3 className="text-neutral-400 text-[11px] font-semibold uppercase tracking-wider mb-4 mt-10">Onboarding, Operations and Support</h3>
              {faqOperations.map((faq) => (
                <FAQItem key={faq.question} question={faq.question} answer={faq.answer} />
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
