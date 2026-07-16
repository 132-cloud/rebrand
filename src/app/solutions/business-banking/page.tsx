"use client";

import { useState } from "react";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { Button } from "@/components/ui/Button";
import { FooterCTAGuide } from "@/components/sections/home/guide/FooterCTAGuide";
import { LogoBarGuide } from "@/components/sections/home/guide/LogoBarGuide";
import Link from "next/link";

// ─── Three-Column Icons ──────────────────────────────────────────────────────

const iconFeatures = [
  {
    title: "Automated business onboarding",
    description: "Verify businesses and owners with integrated KYC, KYB, beneficial-ownership, and controlling-party workflows.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
      </svg>
    ),
  },
  {
    title: "Complete commercial money movement",
    description: "Originate ACH and wires, upload payment files, run Positive Pay, and deposit checks remotely.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z" />
      </svg>
    ),
  },
  {
    title: "Granular user controls",
    description: "Give employees, accountants, and operators the right access with account-level permissions, custom roles, transaction limits, and approval workflows.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
      </svg>
    ),
  },
];

// ─── Feature Blocks ──────────────────────────────────────────────────────────

const features = [
  {
    eyebrow: "ACCOUNT OPENING",
    headline: "From intent to funded.",
    body: "Open and fund business accounts in a single flow, with KYC, KYB, beneficial-ownership, and controlling-party verification decisioned on intake. From sole proprietors to complex commercial entities, the right applicants clear fast and the wrong ones never open.",
    link: { label: "Explore account opening", href: "/products/account-opening/" },
  },
  {
    eyebrow: "PAYMENTS",
    headline: "The money movement businesses run on.",
    body: "Originate ACH and wires, upload payment files, run Positive Pay, and deposit checks remotely. Payment depth scales with the relationship, so a solo operator and a commercial treasury team run on the same platform without a specialized build.",
    link: { label: "See business banking tools", href: "/products/digital-banking/" },
  },
  {
    eyebrow: "CONTROLS",
    headline: "Controls their finance team expects.",
    body: "Give employees, accountants, and operators the right access with account-level permissions, custom roles, transaction limits, and approval workflows. It\u2019s the control depth that turns a business account into a commercial relationship your institution can keep.",
    link: { label: "Explore the platform", href: "/platform/" },
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
    answer: "Nymbus Connect integrates your tools and partners through modern APIs and event streaming, so new integrations move in days, not through a custom rebuild.",
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

export default function BusinessBankingPage() {
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
            <div className="max-w-3xl">
              <h1 className="text-[2.5rem] md:text-[3.5rem] font-bold leading-[1.08] tracking-[-0.03em] text-[#171216] mb-6">
                Banking built for how businesses actually operate.
              </h1>
              <p className="text-neutral-500 text-lg md:text-xl leading-relaxed mb-8 max-w-2xl">
                Solo operators, micros, and small businesses are leaving for fintechs that move faster than your core. Launch the banking they expect on a platform built to move with you.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button href="https://nymbus-joy.nymbus.com/dashboard" variant="primary" size="lg" external>
                  Try the demo
                </Button>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ─── Platform Embed ───────────────────────────────────────────────── */}
      <section className="py-12 md:py-16 bg-white border-b border-neutral-100">
        <div className="mx-auto px-4" style={{ maxWidth: "1264px" }}>
          <ScrollReveal>
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <iframe
                src="/embeds/business-dashboard/index.html"
                title="Nymbus Business Banking Dashboard"
                className="w-full h-[500px] md:h-[650px]"
                loading="lazy"
              />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ─── Three-Column Icons ───────────────────────────────────────────── */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-site">
          <ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {iconFeatures.map((item) => (
                <div key={item.title} className="flex gap-4">
                  <div className="w-10 h-10 rounded-lg bg-neutral-100 flex items-center justify-center flex-shrink-0 text-neutral-600">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-[#171216] text-base font-bold mb-2">{item.title}</h4>
                    <p className="text-neutral-500 text-sm leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ─── Logo Strip (homepage scroll) ─────────────────────────────────── */}
      <LogoBarGuide />

      {/* ─── Thesis Statement ─────────────────────────────────────────────── */}
      <section className="py-20 md:py-28">
        <div className="container-site">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-[1.75rem] md:text-[2.25rem] font-bold leading-tight tracking-[-0.02em] text-[#171216] mb-5">
                Launch business banking around the customer, not the category.
              </h2>
              <p className="text-neutral-500 text-base md:text-lg leading-relaxed">
                Businesses are not one segment. Solo owners, growing operators, and established companies need different experiences, controls, and levels of support. Nymbus gives institutions the platform to serve them all, without building a separate product for each.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ─── Feature Blocks (alternating layout) ──────────────────────────── */}
      {features.map((feature, index) => (
        <section
          key={feature.headline}
          className="py-16 md:py-24 bg-white"
        >
          <div className="container-site">
            <ScrollReveal>
              <div className={`flex flex-col md:flex-row items-center gap-12 md:gap-16 ${index % 2 !== 0 ? "md:flex-row-reverse" : ""}`}>
                <div className="flex-1">
                  <p className="text-neutral-400 text-[11px] font-semibold uppercase tracking-wider mb-4">{feature.eyebrow}</p>
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
                <div className="flex-1 w-full">
                  <div className="aspect-[4/3] rounded-2xl bg-neutral-100 border border-neutral-200/60 flex items-center justify-center" />
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>
      ))}

      {/* ─── Segment Callout ──────────────────────────────────────────────── */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container-site">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto text-center mb-14">
              <h2 className="text-[1.75rem] md:text-[2.25rem] font-bold leading-tight tracking-[-0.02em] text-[#171216] mb-5">
                Built to serve businesses at every stage.
              </h2>
              <p className="text-neutral-500 text-base md:text-lg leading-relaxed">
                Nymbus supports differentiated business banking experiences across the lifecycle, from solo operators to complex commercial relationships, all on one platform.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {stages.map((stage) => (
                <div
                  key={stage.title}
                  className="p-6 md:p-8 rounded-2xl border border-neutral-200 bg-white hover:border-neutral-300 transition-[border-color] duration-300"
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
                href="/solutions/commercial-banking/"
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
      <section className="py-20 md:py-28 bg-white">
        <div className="container-site">
          <ScrollReveal>
            <h2 className="text-[1.75rem] md:text-[2.25rem] font-bold leading-tight tracking-[-0.02em] text-[#171216] text-center mb-14">
              Why institutions build business banking on Nymbus.
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 md:p-8 rounded-2xl border border-neutral-200 bg-white">
                <blockquote className="text-neutral-500 text-sm leading-relaxed mb-6 italic">
                  &ldquo;We recognized that business owners need digital banking tools and services that fit how they operate today. Partnering with Nymbus allowed us to make that vision a reality.&rdquo;
                </blockquote>
                <div>
                  <p className="text-[#171216] text-sm font-semibold">Sara Dolan</p>
                  <p className="text-neutral-400 text-xs">CFO, MSUFCU</p>
                </div>
              </div>
              <div className="p-6 md:p-8 rounded-2xl border border-neutral-200 bg-white">
                <blockquote className="text-neutral-500 text-sm leading-relaxed mb-6 italic">
                  &ldquo;Speed to market and cost to serve is what this business is all about — and Nymbus has nailed both.&rdquo;
                </blockquote>
                <div>
                  <p className="text-[#171216] text-sm font-semibold">Ami Iceman</p>
                  <p className="text-neutral-400 text-xs">CEO, MSUFCU</p>
                </div>
              </div>
              <div className="p-6 md:p-8 rounded-2xl border border-neutral-200 bg-white">
                <blockquote className="text-neutral-500 text-sm leading-relaxed mb-6 italic">
                  &ldquo;The number one reason I worked with Nymbus is the relationships, the brand work, and knowing they care as much as I do.&rdquo;
                </blockquote>
                <div>
                  <p className="text-[#171216] text-sm font-semibold">Jill Castilla</p>
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
      <FooterCTAGuide heading="Banking built for how businesses actually operate." buttonText="Try the demo" buttonHref="https://nymbus-joy.nymbus.com/dashboard" />
    </div>
  );
}
