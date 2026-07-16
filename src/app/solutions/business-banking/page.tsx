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
    headline: "From intent to funded.",
    body: "Move applicants from intent to funded with onboarding flows built for business banking. Support sole proprietors, microbusinesses, and small businesses with digital account opening designed around how business customers apply, verify, and get started.",
    link: { label: "Explore account opening", href: "/products/account-opening/" },
  },
  {
    headline: "Give solopreneurs banking that fits how they work.",
    body: "Serve solopreneurs, freelancers, creators, and one-person businesses with accounts and tools built around everyday business activity, not oversized commercial workflows. Help them open, manage, move money, and stay focused on the work.",
    link: { label: "Explore the platform", href: "/platform/" },
  },
  {
    headline: "Support small businesses beyond the account.",
    body: "Give small businesses the accounts, payments, servicing, and digital experience they expect from a modern financial partner. Connect banking to the workflows that keep owners moving, from invoicing to accounting.",
    link: { label: "Explore the platform", href: "/platform/" },
  },
  {
    headline: "The tools businesses actually run on.",
    body: "Invoicing, wire and ACH origination, Positive Pay, Remote Deposit Capture, and secondary-user controls run behind your business accounts, so tailored capabilities reach smaller business customers without a specialized build.",
    link: { label: "See business banking tools", href: "/products/digital-banking/" },
  },
  {
    headline: "Run the operations behind business growth.",
    body: "Business banking creates operational load. Nymbus Managed Services can support onboarding, servicing, contact center, back-office work, compliance workflows, fraud operations, and business banking support, so your team can scale without carrying every function alone.",
    link: { label: "Explore managed services", href: "/managed-services/" },
  },
];

// ─── Business Stages ─────────────────────────────────────────────────────────

const stages = [
  {
    title: "Solopreneurs and sole operators",
    description: "Simple, business-ready banking for one-person businesses that need to open, manage, and move money without commercial complexity.",
  },
  {
    title: "Small businesses",
    description: "Accounts, payments, servicing, and digital workflows for owners managing growth, cash flow, and daily operations.",
  },
  {
    title: "Commercial businesses",
    description: "Deeper controls, permissions, treasury workflows, and operational depth for more complex finance teams.",
  },
];

// ─── FAQ ─────────────────────────────────────────────────────────────────────

const faqs = [
  {
    question: "Can we launch business banking without replacing our core?",
    answer: "Yes. Nymbus can run as a parallel core beside the system you operate today, so you can launch a business offering without touching your primary core.",
  },
  {
    question: "How fast can we get a business product to market?",
    answer: "A vertical brand or new line can launch on a parallel core faster than a traditional core build, with technology, operations, and support connected from the start.",
  },
  {
    question: "Which business segments does the platform support?",
    answer: "Solo operators, microbusinesses, small businesses, and commercial clients, each served with accounts, controls, and operational depth matched to the segment.",
  },
  {
    question: "Do we have to staff the operation ourselves?",
    answer: "No. Nymbus Managed Services can run onboarding, servicing, disputes, and back-office work behind your brand, built and operated by the team behind the platform.",
  },
  {
    question: "How does business account opening handle KYB and compliance?",
    answer: "Applications can be scored and screened through integrated KYB and identity verification, with referred cases reviewed against your rules. You keep regulatory ownership; execution runs underneath.",
  },
  {
    question: "Can we offer commercial-grade payment tools?",
    answer: "Yes. Wire and ACH origination, Positive Pay, and Remote Deposit Capture can run behind your business accounts, with your team setting underwriting and exposure limits.",
  },
  {
    question: "How does this connect to the systems we already use?",
    answer: "Nymbus Connect integrates your tools and partners through modern APIs, so integration does not require custom middleware for every connection.",
  },
  {
    question: "What makes Nymbus different from a traditional core for business banking?",
    answer: "The platform is designed from the ground up to support business banking with the tools and experiences modern businesses expect, plus the differentiated controls and support each segment needs.",
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
        <span className="text-neutral-900 text-base font-semibold pr-4">{question}</span>
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

export default function BusinessBankingPage() {
  return (
    <div className="bg-white text-neutral-900">
      {/* ─── Hero ─────────────────────────────────────────────────────────── */}
      <section className="relative pt-36 pb-20 md:pt-44 md:pb-28 overflow-hidden">
        {/* Background image from Guide v5 */}
        <div
          className="absolute inset-0 w-full h-full"
          style={{
            backgroundImage: "url('/background---.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="container-site relative z-10">
          <ScrollReveal>
            <div className="max-w-3xl">
              <h1 className="text-[2.5rem] md:text-[3.5rem] font-bold leading-[1.08] tracking-[-0.02em] text-neutral-900 mb-6">
                Banking built for how businesses actually operate.
              </h1>
              <p className="text-neutral-500 text-lg md:text-xl leading-relaxed mb-8 max-w-2xl">
                Solo operators, micros, and small businesses are leaving for fintechs that move faster than your core. Launch the banking they expect on a platform built to move with you.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button href="/request-demo/" variant="primary" size="lg" className="!bg-neutral-900 !text-white !shadow-none hover:!bg-neutral-800">
                  Book a demo
                </Button>
                <Button href="/platform/" variant="outline" size="lg" className="!text-neutral-900 !border-neutral-300 !bg-white/60 hover:!bg-white/80">
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
            <p className="text-neutral-400 text-[11px] font-semibold uppercase tracking-wider text-center mb-6">
              Trusted by top financial institutions
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
              <h2 className="text-[1.75rem] md:text-[2.25rem] font-bold leading-tight tracking-[-0.02em] text-neutral-900 mb-5">
                Launch business banking around the customer, not the category.
              </h2>
              <p className="text-neutral-500 text-base md:text-lg leading-relaxed">
                Small businesses are not one segment. Solo owners, growing operators, and established companies need different experiences, controls, and levels of support. Nymbus gives institutions the platform to serve them with more precision.
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
                  <h3 className="text-[1.5rem] md:text-[1.875rem] font-bold leading-tight tracking-[-0.01em] text-neutral-900 mb-4">
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
                    <div className="text-neutral-300 text-sm font-medium">
                      {/* Placeholder for future imagery */}
                    </div>
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
              <h2 className="text-[1.75rem] md:text-[2.25rem] font-bold leading-tight tracking-[-0.02em] text-neutral-900 mb-5">
                Built to serve businesses at every stage.
              </h2>
              <p className="text-neutral-500 text-base md:text-lg leading-relaxed">
                Nymbus supports differentiated business banking experiences across the lifecycle, from solo operators and small businesses to more complex commercial relationships.
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
                  <h4 className="text-neutral-900 text-base font-bold mb-3">{stage.title}</h4>
                  <p className="text-neutral-500 text-sm leading-relaxed">{stage.description}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="mt-10 text-center">
              <Link
                href="/solutions/business-banking/#commercial"
                className="inline-flex items-center text-[#697CB2] text-sm font-semibold hover:text-[#4a5d8a] transition-colors no-underline"
              >
                Explore commercial banking
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
            <h2 className="text-[1.75rem] md:text-[2.25rem] font-bold leading-tight tracking-[-0.02em] text-neutral-900 text-center mb-14">
              Why institutions build business banking on Nymbus.
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div
                  className="p-6 md:p-8 rounded-2xl border border-neutral-200 bg-white"
                >
                  <blockquote className="text-neutral-500 text-sm leading-relaxed mb-6 italic">
                    &ldquo;We recognized that business owners need digital banking tools and services that fit how they operate today. Partnering with Nymbus allowed us to make that vision a reality.&rdquo;
                  </blockquote>
                  <div>
                    <p className="text-neutral-900 text-sm font-semibold">Sara Dolan</p>
                    <p className="text-neutral-400 text-xs">CFO, MSUFCU</p>
                  </div>
                </div>
                <div
                  className="p-6 md:p-8 rounded-2xl border border-neutral-200 bg-white"
                >
                  <blockquote className="text-neutral-500 text-sm leading-relaxed mb-6 italic">
                    &ldquo;Speed to market and cost to serve is what this business is all about — and Nymbus has nailed both.&rdquo;
                  </blockquote>
                  <div>
                    <p className="text-neutral-900 text-sm font-semibold">Ami Iceman</p>
                    <p className="text-neutral-400 text-xs">CEO, MSUFCU</p>
                  </div>
                </div>
                <div
                  className="p-6 md:p-8 rounded-2xl border border-neutral-200 bg-white"
                >
                  <blockquote className="text-neutral-500 text-sm leading-relaxed mb-6 italic">
                    &ldquo;The number one reason I worked with Nymbus is the relationships, the brand work, and knowing they care as much as I do.&rdquo;
                  </blockquote>
                  <div>
                    <p className="text-neutral-900 text-sm font-semibold">Jill Castilla</p>
                    <p className="text-neutral-400 text-xs">President &amp; CEO, Citizens Bank of Edmond</p>
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

      {/* ─── Closing CTA ──────────────────────────────────────────────────── */}
      <section className="py-20 md:py-28 bg-neutral-50 border-t border-neutral-100">
        <div className="container-site">
          <ScrollReveal>
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-[1.75rem] md:text-[2.25rem] font-bold leading-tight tracking-[-0.02em] text-neutral-900 mb-6">
                Banking built for how businesses actually operate.
              </h2>
              <div className="flex flex-wrap justify-center gap-3">
                <Button href="/request-demo/" variant="primary" size="lg" className="!bg-neutral-900 !text-white !shadow-none hover:!bg-neutral-800">
                  Book a demo
                </Button>
                <Button href="/platform/" variant="outline" size="lg" className="!text-neutral-900 !border-neutral-300 hover:!bg-neutral-100">
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
