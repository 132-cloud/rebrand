"use client";

import { useState } from "react";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { Button } from "@/components/ui/Button";
import Link from "next/link";

// ─── Logo Strip ──────────────────────────────────────────────────────────────

const logos = [
  { src: "/images/logo bar logos/Vector.png", alt: "Client logo" },
  { src: "/images/logo bar logos/FECU.png", alt: "FECU" },
  { src: "/images/logo bar logos/Gesa.png", alt: "Gesa Credit Union" },
  { src: "/images/logo bar logos/VantageWest.png", alt: "Vantage West" },
  { src: "/images/logo bar logos/Vector-1.png", alt: "Client logo" },
];

// ─── Feature Blocks ──────────────────────────────────────────────────────────

const features = [
  {
    headline: "Onboard the whole business.",
    body: "Multi-entity onboarding runs KYB, beneficial ownership, identity verification, and document capture in one flow. Complex business structures get onboarded with the same rigor a commercial relationship demands, without a manual back-and-forth that sends prospects to a larger bank.",
    link: { label: "Explore account opening", href: "/products/account-opening/" },
  },
  {
    headline: "Controls their finance team expects.",
    body: "Multi-user roles, per-account permissions, approval limits, and money-movement limits are configured out of the box. Give a treasury team the entitlements they run on today, so the relationship no longer outgrows what your institution can offer.",
    link: { label: "Explore the platform", href: "/platform/" },
  },
  {
    headline: "The payment depth commercial runs on.",
    body: "Real-time ACH, domestic and international wires, bulk templates, NACHA upload, and approval queues run behind your commercial accounts. Treasury reporting for returns, NOCs, and transfers gives finance teams the visibility they'd otherwise leave you to get.",
    link: { label: "See business banking tools", href: "/products/digital-banking/" },
  },
  {
    headline: "Protection built for business volume.",
    body: "ACH and Check Positive Pay run with exception review, quick-rule creation, and payee name recognition, backed by fraud monitoring and risk decisioning. Commercial-scale exposure gets contained before it posts, not chased after it clears.",
    link: { label: "See fraud and controls", href: "/managed-services/fraud/" },
  },
  {
    headline: "Run the operation behind commercial.",
    body: "Commercial banking carries deep operational load. Nymbus Managed Services can support onboarding, servicing, back-office processing, compliance workflows, and fraud operations, built and run by the team behind the platform, so you scale without staffing every function alone.",
    link: { label: "Explore managed services", href: "/managed-services/" },
  },
];

// ─── Business Stages ─────────────────────────────────────────────────────────

const stages = [
  {
    title: "Small business",
    description: "Accounts, payments, and cash flow tools for owners managing daily operations and early growth.",
  },
  {
    title: "Growth firms",
    description: "Role-based approvals, ACH and wire workflows, Positive Pay exceptions, and reporting for businesses that need stronger controls and speed.",
  },
  {
    title: "Commercial businesses",
    description: "Treasury workflows, multi-entity onboarding, account analysis, and sweep and IOLTA support for complex finance teams.",
  },
];

// ─── FAQ ─────────────────────────────────────────────────────────────────────

const faqs = [
  {
    question: "Can we launch commercial banking without replacing our core?",
    answer: "Yes. Nymbus runs as a parallel core beside the system you operate today, so you can enter or expand commercial banking without a full-core conversion.",
  },
  {
    question: "How fast can we get a commercial product to market?",
    answer: "A dedicated business banking brand or line can launch on a parallel core faster than a traditional core build, with technology, operations, and support connected from the start.",
  },
  {
    question: "Which business segments does the platform support?",
    answer: "Small businesses, growth firms, and commercial clients, each served with accounts, controls, and treasury depth matched to the segment and its stage.",
  },
  {
    question: "Do we have to staff the operation ourselves?",
    answer: "No. Nymbus Managed Services can run onboarding, servicing, back-office work, and fraud operations behind your brand, built and operated by the team behind the platform.",
  },
  {
    question: "How does commercial onboarding handle KYB and beneficial ownership?",
    answer: "Multi-entity onboarding runs KYB, identity verification, and beneficial ownership review through integrated solutions, with referred cases reviewed against your rules. You keep regulatory ownership; execution runs underneath.",
  },
  {
    question: "Can we offer treasury-grade controls and reporting?",
    answer: "Yes. Multi-user entitlements, approval limits, Positive Pay, and treasury reporting for returns, NOCs, and transfers run behind your commercial accounts, configured to how each client operates.",
  },
  {
    question: "How does this connect to the systems we already use?",
    answer: "Nymbus Connect integrates your tools and partners through modern APIs, so integration does not require custom middleware for every connection.",
  },
  {
    question: "What makes Nymbus different from a traditional core for commercial banking?",
    answer: "The platform is purpose-built for business banking, with the entitlements, payment depth, and treasury workflows complex operations require, delivered alongside your core instead of gated behind it.",
  },
];

// ─── FAQ Accordion Item ──────────────────────────────────────────────────────

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-neutral-200">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-5 text-left cursor-pointer"
      >
        <span className="text-[#171216] text-base font-semibold pr-4">{question}</span>
        <svg
          className={`w-5 h-5 text-neutral-400 flex-shrink-0 transition-transform duration-200 ${open ? "rotate-45" : ""}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
        </svg>
      </button>
      <div
        className="overflow-hidden transition-[max-height,opacity] duration-300"
        style={{ maxHeight: open ? "300px" : "0", opacity: open ? 1 : 0 }}
      >
        <p className="text-neutral-500 text-sm leading-relaxed pb-5 pr-12">
          {answer}
        </p>
      </div>
    </div>
  );
}

// ─── Main Page ───────────────────────────────────────────────────────────────

export default function CommercialBankingPage() {
  return (
    <div className="bg-white text-[#171216]">
      {/* ─── Hero ─────────────────────────────────────────────────────────── */}
      <section className="relative pt-36 pb-20 md:pt-44 md:pb-28 overflow-hidden">
        {/* Background image from Guide v5 */}
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover">
            <source src="/images/background-motion-rotated.webm" type="video/webm" />
          </video>
        </div>
        <div className="container-site relative z-10">
          <ScrollReveal>
            <div className="max-w-3xl">
              <h1 className="text-[2.5rem] md:text-[3.5rem] font-bold leading-[1.08] tracking-[-0.03em] text-[#171216] mb-6">
                Commercial banking, without core disruption.
              </h1>
              <p className="text-neutral-500 text-lg md:text-xl leading-relaxed mb-8 max-w-2xl">
                Treasury and cash management relationships move to larger banks because your tools were built for retail, not business. Launch commercial-grade banking on a parallel core, without touching the one you run today.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button href="/request-demo/" variant="primary" size="lg">
                  Book a demo
                </Button>
                <Button href="/platform/" variant="outline" size="lg" className="!text-[#171216] !border-neutral-300 !bg-white/60 hover:!bg-white/80">
                  See the platform
                </Button>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ─── Logo Strip ───────────────────────────────────────────────────── */}
      <section className="py-10 border-y border-neutral-100">
        <div className="container-site">
          <ScrollReveal>
            <p className="text-neutral-400 text-[11px] font-semibold uppercase tracking-wider text-center mb-2">
              Trusted by top financial institutions
            </p>
            <p className="text-neutral-400 text-xs text-center mb-6">
              25 digital banks launched and cores deployed on Nymbus
            </p>
            <div className="flex items-center justify-center gap-10 md:gap-14 flex-wrap">
              {logos.map((logo, i) => (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  key={i}
                  src={logo.src}
                  alt={logo.alt}
                  className="h-5 md:h-6 w-auto opacity-50 grayscale"
                />
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ─── Thesis Statement ─────────────────────────────────────────────── */}
      <section className="py-20 md:py-28">
        <div className="container-site">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-[1.75rem] md:text-[2.25rem] font-bold leading-tight tracking-[-0.02em] text-[#171216] mb-5">
                Win the commercial relationship, not just the account.
              </h2>
              <p className="text-neutral-500 text-base md:text-lg leading-relaxed">
                Complex businesses need depth retail cores were never built for. Multi-user controls, treasury workflows, real-time payment rails, and operating confidence. Nymbus gives institutions a purpose-built commercial platform, delivered without a core replacement.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ─── Feature Blocks (alternating layout) ──────────────────────────── */}
      {features.map((feature, index) => (
        <section
          key={feature.headline}
          className={`py-16 md:py-24 ${index % 2 === 0 ? "bg-white" : "bg-neutral-50"}`}
        >
          <div className="container-site">
            <ScrollReveal>
              <div className={`flex flex-col md:flex-row items-center gap-12 md:gap-16 ${index % 2 !== 0 ? "md:flex-row-reverse" : ""}`}>
                {/* Text */}
                <div className="flex-1">
                  <h3 className="text-[1.5rem] md:text-[1.875rem] font-bold leading-tight tracking-[-0.01em] text-[#171216] mb-4">
                    {feature.headline}
                  </h3>
                  <p className="text-neutral-500 text-base leading-relaxed mb-6">
                    {feature.body}
                  </p>
                  <Link
                    href={feature.link.href}
                    className="inline-flex items-center text-[#697CB2] text-sm font-semibold hover:text-[#4a5d8a] transition-colors no-underline"
                  >
                    {feature.link.label}
                    <svg className="w-4 h-4 ml-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  </Link>
                </div>
                {/* Placeholder image area */}
                <div className="flex-1 w-full">
                  <div className="aspect-[4/3] rounded-2xl bg-neutral-100 border border-neutral-200/60 flex items-center justify-center">
                    <div className="text-neutral-300 text-sm font-medium" />
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>
      ))}

      {/* ─── Business Stage Callout ───────────────────────────────────────── */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container-site">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto text-center mb-14">
              <h2 className="text-[1.75rem] md:text-[2.25rem] font-bold leading-tight tracking-[-0.02em] text-[#171216] mb-5">
                Serve every business, from SMB to commercial.
              </h2>
              <p className="text-neutral-500 text-base md:text-lg leading-relaxed">
                Nymbus supports differentiated experiences across the business lifecycle, so one platform grows the relationship from a small business account to a full commercial and treasury partnership.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {stages.map((stage) => (
                <div
                  key={stage.title}
                  className="p-6 md:p-8 rounded-2xl border border-neutral-200 bg-neutral-50 hover:border-neutral-300 transition-[border-color] duration-300"
                >
                  <h4 className="text-[#171216] text-base font-bold mb-3">{stage.title}</h4>
                  <p className="text-neutral-500 text-sm leading-relaxed">{stage.description}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="mt-10 text-center">
              <Link
                href="/solutions/business-banking/"
                className="inline-flex items-center text-[#697CB2] text-sm font-semibold hover:text-[#4a5d8a] transition-colors no-underline"
              >
                Explore small business banking
                <svg className="w-4 h-4 ml-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ─── Why Band (Testimonials) ──────────────────────────────────────── */}
      <section className="py-20 md:py-28 bg-neutral-50">
        <div className="container-site">
          <ScrollReveal>
            <h2 className="text-[1.75rem] md:text-[2.25rem] font-bold leading-tight tracking-[-0.02em] text-[#171216] text-center mb-14">
              Why institutions build commercial banking on Nymbus.
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div
                  className="p-6 md:p-8 rounded-2xl border border-neutral-200 bg-white"
                >
                  <blockquote className="text-neutral-500 text-sm leading-relaxed mb-6 italic">
                    &ldquo;This represents the future of specialized banking – combining deep industry knowledge with innovative technology.&rdquo;
                  </blockquote>
                  <div>
                    <p className="text-[#171216] text-sm font-semibold">Stephen Owen</p>
                    <p className="text-neutral-400 text-xs">President and CEO, First Entertainment Credit Union and CineFi</p>
                  </div>
                </div>
                <div
                  className="p-6 md:p-8 rounded-2xl border border-neutral-200 bg-white"
                >
                  <blockquote className="text-neutral-500 text-sm leading-relaxed mb-6 italic">
                    &ldquo;The successful go-live affirmed our decision to modernize our entire banking infrastructure and positions us to deliver real, simple banking services to our customers faster and more efficiently than ever before.&rdquo;
                  </blockquote>
                  <div>
                    <p className="text-[#171216] text-sm font-semibold">Thomas Senecal</p>
                    <p className="text-neutral-400 text-xs">CEO and Chairman, PeoplesBank</p>
                  </div>
                </div>
                <div
                  className="p-6 md:p-8 rounded-2xl border border-neutral-200 bg-white"
                >
                  <blockquote className="text-neutral-500 text-sm leading-relaxed mb-6 italic">
                    &ldquo;Speed to market and cost to serve is what this business is all about — and Nymbus has nailed both.&rdquo;
                  </blockquote>
                  <div>
                    <p className="text-[#171216] text-sm font-semibold">Ami Iceman</p>
                    <p className="text-neutral-400 text-xs">CEO, MSUFCU</p>
                  </div>
                </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ─── FAQ ──────────────────────────────────────────────────────────── */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container-site">
          <ScrollReveal>
            <h2 className="text-[1.75rem] md:text-[2.25rem] font-bold leading-tight tracking-[-0.02em] text-[#171216] mb-10">
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

      {/* ─── Closing CTA ──────────────────────────────────────────────────── */}
      <section className="py-20 md:py-28 bg-neutral-50 border-t border-neutral-100">
        <div className="container-site">
          <ScrollReveal>
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-[1.75rem] md:text-[2.25rem] font-bold leading-tight tracking-[-0.02em] text-[#171216] mb-6">
                Commercial banking, without core disruption.
              </h2>
              <div className="flex flex-wrap justify-center gap-3">
                <Button href="/request-demo/" variant="primary" size="lg">
                  Book a demo
                </Button>
                <Button href="/platform/" variant="outline" size="lg" className="!text-[#171216] !border-neutral-300 hover:!bg-neutral-100">
                  See the platform
                </Button>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
