"use client";

import { useState } from "react";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { Button } from "@/components/ui/Button";

// ─── FAQ Data ────────────────────────────────────────────────────────────────

const faqs = [
  {
    question: "What are Nymbus Managed Services?",
    answer: "A shared-services operation, built and run by Nymbus, covering six domains behind your brand: the Digital Experience Center (member and business support), Digital Onboarding, Digital Operations, Risk and Compliance, Fraud Operations, and Business-Specific Support.",
  },
  {
    question: "How does the shared-services model work?",
    answer: "Nymbus executes and manages the operational processes in alignment with the policies and procedures your institution defines. Your institution retains ultimate responsibility for regulatory compliance, risk management, and oversight of the work run on your behalf.",
  },
  {
    question: "Do we keep control of compliance and risk?",
    answer: "Yes. Your institution retains regulatory responsibility and program ownership. Nymbus executes the operational work under your policies and escalates anything requiring your decision.",
  },
  {
    question: "Can we set our own approval thresholds and decisioning rules?",
    answer: "Yes. Client-defined thresholds govern fee reimbursements, mobile deposit and payment limit increases, ACH exception decisioning, MRDC pay/return/refer criteria, and Positive Pay exception handling. Nymbus operates to those thresholds and escalates anything above them.",
  },
  {
    question: "How does application onboarding and decisioning work?",
    answer: "Every application is scored on intake by Socure ID+ and routed to one of three outcomes: auto-approve, auto-deny, or refer. Referred applicants receive a document and selfie verification link (Socure DocV) that expires in 72 hours, and referred cases are reviewed manually by the Onboarding team against your KYC rules.",
  },
  {
    question: "Can Nymbus support business and commercial accounts?",
    answer: "Yes. Business Digital Onboarding runs KYC on individual signers and beneficial owners through Socure ID+, and KYB verification through Socure and Middesk. Ongoing servicing includes ACH origination and Positive Pay enrollment (configurable as default-on or opt-in), wire transfer support, secondary-user access management, and business-account maintenance. Your institution retains underwriting, exposure limits, and Positive Pay exception decisioning.",
  },
  {
    question: "Is customer support provided under our brand?",
    answer: "Yes. The Digital Experience Center handles inbound and outbound calls, secure messaging through your online and mobile banking platform, and email during your business hours, all under your brand. Email is unsecure by design and is limited to non-account-specific inquiries.",
  },
  {
    question: "How are fraud disputes handled?",
    answer: "The Fraud team investigates ACH, P2P, Bill Pay, and debit card disputes under Regulation E and NACHA rules, coordinating with DXC on intake and Digital Operations on money movement. Suspicious or unusual activity of $5,000 or more (individually or combined) is escalated to your institution via a USA ticket with investigation details, so your team gets the case already built.",
  },
  {
    question: "What reporting do we receive?",
    answer: "Monthly reporting covers support statistics (phone, chat, email), complaints, and fraud. A quarterly report covers debit card disputes. Enhanced, client-specific reporting and QA visibility are available as an additional service.",
  },
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
      <div className="overflow-hidden transition-[max-height,opacity] duration-300" style={{ maxHeight: open ? "400px" : "0", opacity: open ? 1 : 0 }}>
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
                We don&apos;t just deploy it. We run it.
              </h1>
              <p className="text-neutral-500 text-lg md:text-xl leading-relaxed mb-8 max-w-2xl">
                The team that builds your operations runs them too. Problems get fixed by the people who built them, not forwarded.
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
                <p className="text-neutral-500 text-sm">Operational domains run behind your brand</p>
              </div>
              <div>
                <p className="text-[2.5rem] font-bold text-neutral-900 mb-1">TBD</p>
                <p className="text-neutral-500 text-sm">Placeholder stat</p>
              </div>
              <div>
                <p className="text-[2.5rem] font-bold text-neutral-900 mb-1">TBD</p>
                <p className="text-neutral-500 text-sm">Placeholder stat</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ─── 3. The Operating Model (shared-services) ─────────────────────── */}
      <section id="compliance" className="py-20 md:py-28">
        <div className="container-site">
          <ScrollReveal>
            <div className="max-w-3xl mb-14">
              <p className="text-neutral-400 text-[11px] font-semibold uppercase tracking-wider mb-4">The shared-services model</p>
              <h2 className="text-[2.5rem] md:text-[3.25rem] font-bold leading-[1.1] tracking-[-0.02em] text-neutral-900 mb-5">
                We run the work. You keep control.
              </h2>
              <p className="text-neutral-500 text-base md:text-lg leading-relaxed">
                Outsourcing the operation should not mean giving up oversight. You define the rules. Nymbus executes inside them.
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 md:p-8 rounded-2xl border border-neutral-200 bg-neutral-50">
                <h4 className="text-neutral-900 text-base font-bold mb-3">You set the thresholds.</h4>
                <p className="text-neutral-500 text-sm leading-relaxed">Define approval limits, decisioning criteria, and exception rules. Nymbus operates to them and escalates anything above your thresholds instead of acting alone.</p>
              </div>
              <div className="p-6 md:p-8 rounded-2xl border border-neutral-200 bg-neutral-50">
                <h4 className="text-neutral-900 text-base font-bold mb-3">You keep regulatory ownership.</h4>
                <p className="text-neutral-500 text-sm leading-relaxed">Nymbus executes and manages the operational controls. Your institution retains regulatory responsibility, risk management, and oversight of everything run on your behalf.</p>
              </div>
              <div className="p-6 md:p-8 rounded-2xl border border-neutral-200 bg-neutral-50">
                <h4 className="text-neutral-900 text-base font-bold mb-3">Automation runs inside your rules.</h4>
                <p className="text-neutral-500 text-sm leading-relaxed">Where Nymbus applies AI to operational work, it runs under the same permissions, approvals, and audit trail as everything else your team controls.</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ─── 4. The Team ──────────────────────────────────────────────────── */}
      <section id="meet-the-team" className="py-20 md:py-28 bg-neutral-50">
        <div className="container-site">
          <ScrollReveal>
            <div className="max-w-3xl mb-14">
              <h2 className="text-[2.5rem] md:text-[3.25rem] font-bold leading-[1.1] tracking-[-0.02em] text-neutral-900 mb-5">
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
                <div key={domain} className="p-5 rounded-xl border border-neutral-200 bg-white">
                  <p className="text-neutral-900 text-sm font-medium">{domain}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ─── 5. Proof Quote ───────────────────────────────────────────────── */}
      <section className="py-16 md:py-20 border-y border-neutral-100">
        <div className="container-site">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto text-center">
              <blockquote className="text-neutral-700 text-xl md:text-2xl font-light leading-relaxed italic mb-6">
                &ldquo;This is the most user-friendly banking system I&rsquo;ve ever trained on — fast, simple and intuitive.&rdquo;
              </blockquote>
              <p className="text-neutral-500 text-sm">— Aleda DeMaria, Executive VP, COO, PeoplesBank</p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ─── 6. Front-of-house: Digital Onboarding ────────────────────────── */}
      <section id="onboarding" className="py-20 md:py-28 bg-neutral-50">
        <div className="container-site">
          <ScrollReveal>
            <div className="max-w-3xl mb-14">
              <p className="text-neutral-400 text-[11px] font-semibold uppercase tracking-wider mb-4">Digital Onboarding</p>
              <h2 className="text-[2.5rem] md:text-[3.25rem] font-bold leading-[1.1] tracking-[-0.02em] text-neutral-900 mb-5">
                Every application, decisioned in seconds.
              </h2>
              <p className="text-neutral-500 text-base md:text-lg leading-relaxed">
                Nymbus scores every application the moment it is submitted and routes it automatically, so clean applicants get through fast and edge cases get worked by people, not left in a queue.
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 md:p-8 rounded-2xl border border-neutral-200 bg-white">
                <h4 className="text-neutral-900 text-base font-bold mb-3">Auto-approve, auto-deny, or refer.</h4>
                <p className="text-neutral-500 text-sm leading-relaxed">Socure ID+ scores each application on intake and routes it to one of three outcomes, so clean applicants are approved without anyone touching the file.</p>
              </div>
              <div className="p-6 md:p-8 rounded-2xl border border-neutral-200 bg-white">
                <h4 className="text-neutral-900 text-base font-bold mb-3">Every refer, worked end to end.</h4>
                <p className="text-neutral-500 text-sm leading-relaxed">The onboarding team runs manual review, document and selfie verification, and fraud coordination on flagged cases, so a referred application clears with a decision, not a delay.</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ─── 7. Ongoing Operations ────────────────────────────────────────── */}
      <section id="back-office" className="py-20 md:py-28">
        <div className="container-site">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto text-center mb-14">
              <h2 className="text-[2.5rem] md:text-[3.25rem] font-bold leading-[1.1] tracking-[-0.02em] text-neutral-900 mb-5">
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
                <p className="text-neutral-500 text-sm leading-relaxed">Digital Operations reconciles GLs daily, posts and matches every card transaction to Core, and works ACH files, Positive Pay, and exceptions, so nothing sits unbalanced.</p>
              </div>
              <div className="p-6 md:p-8 rounded-2xl border border-neutral-200 bg-neutral-50">
                <h4 className="text-neutral-900 text-base font-bold mb-3">Fraud is worked, not just flagged.</h4>
                <p className="text-neutral-500 text-sm leading-relaxed">The fraud team investigates disputes under Reg E and NACHA, works suspicious activity, and manages card rules and CAMS alerts, so cases close, not just open.</p>
              </div>
              <div className="p-6 md:p-8 rounded-2xl border border-neutral-200 bg-neutral-50">
                <h4 className="text-neutral-900 text-base font-bold mb-3">Compliance is monitored, not filed away.</h4>
                <p className="text-neutral-500 text-sm leading-relaxed">Compliance tracks regulatory change, handles complaints, subpoenas and levies, screens against OFAC, and shares findings on your program as they surface.</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ─── 8. Reporting ─────────────────────────────────────────────────── */}
      <section className="py-20 md:py-28 bg-neutral-50">
        <div className="container-site">
          <ScrollReveal>
            <div className="max-w-3xl">
              <p className="text-neutral-400 text-[11px] font-semibold uppercase tracking-wider mb-4">Reporting</p>
              <h2 className="text-[2.5rem] md:text-[3.25rem] font-bold leading-[1.1] tracking-[-0.02em] text-neutral-900 mb-5">
                Know what is running, every month.
              </h2>
              <p className="text-neutral-500 text-base md:text-lg leading-relaxed">
                Monthly reporting on support, complaints, and fraud, plus a quarterly dispute report, keeps you current on your program. Enhanced, client-specific reporting is available as an add-on.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ─── 9. Closing CTA ───────────────────────────────────────────────── */}
      <section className="py-20 md:py-28 bg-white border-t border-neutral-100">
        <div className="container-site">
          <ScrollReveal>
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-[2.5rem] md:text-[3.25rem] font-bold leading-[1.1] tracking-[-0.02em] text-neutral-900 mb-4">
                We build it. We run it.
              </h2>
              <p className="text-neutral-500 text-base leading-relaxed mb-8">
                See how Nymbus operates the back office behind your products, run by the team that built it.
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                <Button href="/contact/?topic=managed-services" variant="primary" size="lg" className="!bg-neutral-900 !text-white !shadow-none hover:!bg-neutral-800">
                  Talk to an expert
                </Button>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ─── 10. FAQ ──────────────────────────────────────────────────────── */}
      <section className="py-20 md:py-28 bg-neutral-50">
        <div className="container-site">
          <ScrollReveal>
            <h2 className="text-[1.75rem] md:text-[2.25rem] font-bold leading-tight tracking-[-0.02em] text-neutral-900 mb-10">
              FAQs
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="max-w-3xl">
              {faqs.map((faq) => (
                <FAQItem key={faq.question} question={faq.question} answer={faq.answer} />
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
