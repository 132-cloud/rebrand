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
    body: "Move applicants from intent to funded with digital account opening built for consumers. Identity verification, funding, and first deposit run in a single flow, so new customers clear the door in minutes instead of a branch visit.",
    link: { label: "Explore account opening", href: "/products/account-opening/" },
  },
  {
    headline: "The experience they'd switch for.",
    body: "Give account holders the mobile-first banking they already expect from a neobank, across iOS, Android, and responsive web, launched as one connected experience instead of a multi-year build across a patchwork of vendors.",
    link: { label: "Explore the platform", href: "/platform/" },
  },
  {
    headline: "Move money the way they expect.",
    body: "ACH transfers, bill pay, person-to-person payments, card controls, and mobile check deposit run behind your accounts, so daily banking works the way consumers already expect, without sending them to another app to get it.",
    link: { label: "Explore the platform", href: "/platform/" },
  },
  {
    headline: "Turn accounts into relationships.",
    body: "Cash flow insights, transaction categorization, alerts, credit monitoring, and rewards run inside the account, turning everyday balances and activity into loyalty, so the primary relationship deepens instead of drifting to a competitor.",
    link: { label: "See engagement tools", href: "/products/engage/" },
  },
  {
    headline: "Run the operations behind retail growth.",
    body: "Retail banking creates operational load. Nymbus Managed Services can support onboarding, servicing, contact center, back-office work, compliance workflows, and fraud operations, so your team can scale everyday banking without carrying every function alone.",
    link: { label: "Explore managed services", href: "/managed-services/" },
  },
];

// ─── Customer Stages ─────────────────────────────────────────────────────────

const stages = [
  {
    title: "New account holders",
    description: "Fast digital account opening and funding for consumers choosing where to start their banking relationship.",
  },
  {
    title: "Everyday banking customers",
    description: "Accounts, payments, cards, and money movement for consumers managing daily finances on mobile and web.",
  },
  {
    title: "Primary relationships",
    description: "Insights, engagement, rewards, and connected experiences for customers who make you their main financial home.",
  },
];

// ─── FAQ ─────────────────────────────────────────────────────────────────────

const faqs = [
  {
    question: "Can we launch a new retail experience without replacing our core?",
    answer: "Yes. Nymbus can run as a parallel core beside the system you operate today, so you can launch a modern retail brand or experience without touching your primary core.",
  },
  {
    question: "How fast can we get a retail product to market?",
    answer: "A retail brand or new experience can launch on a parallel core faster than a traditional core build, with technology, operations, and support connected from the start.",
  },
  {
    question: "Which channels does the platform support?",
    answer: "Consumers get one connected experience across iOS, Android, and responsive web, so daily banking looks and works the same everywhere they bank.",
  },
  {
    question: "Do we have to staff the operation ourselves?",
    answer: "No. Nymbus Managed Services can run onboarding, servicing, disputes, and back-office work behind your brand, built and operated by the team behind the platform.",
  },
  {
    question: "How does account opening handle identity and compliance?",
    answer: "Applications can be scored and screened through integrated identity verification and KYC, with referred cases reviewed against your rules. You keep regulatory ownership; execution runs underneath.",
  },
  {
    question: "Can we offer the money movement consumers expect?",
    answer: "Yes. ACH transfers, bill pay, person-to-person payments, and mobile check deposit can run behind your accounts, with the controls and limits your institution sets.",
  },
  {
    question: "How does this connect to the systems we already use?",
    answer: "Nymbus Connect integrates your tools and partners through modern APIs, so integration does not require custom middleware for every connection.",
  },
  {
    question: "What makes Nymbus different from a traditional core for retail banking?",
    answer: "The platform is designed from the ground up to deliver the everyday experience modern consumers expect, plus the engagement and insight tools that turn an open account into a primary relationship.",
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

export default function PersonalBankingPage() {
  return (
    <div className="bg-white text-neutral-900">
      {/* ─── Hero ─────────────────────────────────────────────────────────── */}
      <section className="relative pt-36 pb-20 md:pt-44 md:pb-28 overflow-hidden">
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
                Win the primary banking relationship.
              </h1>
              <p className="text-neutral-500 text-lg md:text-xl leading-relaxed mb-8 max-w-2xl">
                Consumers are moving their direct deposit and daily banking to apps that feel faster than your core. Launch the everyday experience they expect on a platform built to move with you.
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
                Earn primary, not just an open account.
              </h2>
              <p className="text-neutral-500 text-base md:text-lg leading-relaxed">
                Consumers keep their balances where the experience keeps up with their lives. Nymbus gives institutions the platform to deliver modern everyday banking, so the account becomes the relationship, and the relationship stays with you.
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

      {/* ─── Customer Stage Callout ───────────────────────────────────────── */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container-site">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto text-center mb-14">
              <h2 className="text-[1.75rem] md:text-[2.25rem] font-bold leading-tight tracking-[-0.02em] text-neutral-900 mb-5">
                Built to serve consumers across the relationship.
              </h2>
              <p className="text-neutral-500 text-base md:text-lg leading-relaxed">
                Nymbus supports differentiated retail banking experiences across the lifecycle, from the first account a customer opens to the full primary relationship they grow into.
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
        </div>
      </section>

      {/* ─── Why Band (Testimonials) ──────────────────────────────────────── */}
      <section className="py-20 md:py-28 bg-neutral-50">
        <div className="container-site">
          <ScrollReveal>
            <h2 className="text-[1.75rem] md:text-[2.25rem] font-bold leading-tight tracking-[-0.02em] text-neutral-900 text-center mb-14">
              Why institutions build retail banking on Nymbus.
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div
                  className="p-6 md:p-8 rounded-2xl border border-neutral-200 bg-white"
                >
                  <blockquote className="text-neutral-500 text-sm leading-relaxed mb-6 italic">
                    &ldquo;Our partnership with Nymbus has enabled us to create a truly digital-first experience that serves our community&rsquo;s specific needs wherever they may go for work.&rdquo;
                  </blockquote>
                  <div>
                    <p className="text-neutral-900 text-sm font-semibold">Stephen Owen</p>
                    <p className="text-neutral-400 text-xs">President and CEO, First Entertainment Credit Union and CineFi</p>
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
                <div
                  className="p-6 md:p-8 rounded-2xl border border-neutral-200 bg-white"
                >
                  <blockquote className="text-neutral-500 text-sm leading-relaxed mb-6 italic">
                    &ldquo;This is the most user-friendly banking system I&rsquo;ve ever trained on — fast, simple and intuitive.&rdquo;
                  </blockquote>
                  <div>
                    <p className="text-neutral-900 text-sm font-semibold">Aleda DeMaria</p>
                    <p className="text-neutral-400 text-xs">Executive VP, COO, PeoplesBank</p>
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
                Win the primary banking relationship.
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
