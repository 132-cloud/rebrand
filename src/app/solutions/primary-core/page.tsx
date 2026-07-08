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
    id: "core-replacement",
    headline: "Replace your core.",
    body: "Move your institution onto modern core infrastructure built to move with your strategy. Run accounts, deposits, transactions, and servicing on a system where changing a product no longer means a multi-year vendor build.",
    link: { label: "Explore core replacement", href: "/solutions/core-replacement/" },
  },
  {
    id: "de-novo",
    headline: "Launch a new institution.",
    body: "Stand up a new bank or credit union on a modern core, with technology and operational support that compresses the path from charter to first account. Reach your first funded customer without building the stack from scratch.",
    link: { label: "Explore de novo launch", href: "/solutions/de-novo/" },
  },
  {
    id: "migration",
    headline: "A migration built on a plan.",
    body: "Configuration, integration, conversion, testing, training, and launch readiness run on a defined path, so the move off legacy infrastructure has a date you can plan around.",
    link: { label: "See implementation", href: "/platform/" },
  },
  {
    id: "managed-operations",
    headline: "Run the operation from day one.",
    body: "Nymbus Managed Services can support onboarding, servicing, back-office processing, compliance, and fraud operations, built and run by the team behind the platform, so you launch without staffing every function first.",
    link: { label: "Explore managed services", href: "/managed-services/" },
  },
];

// ─── Path Callout Stages ─────────────────────────────────────────────────────

const stages = [
  {
    title: "Core replacement",
    description: "An established institution moved onto modern core infrastructure, with the migration planned, supported, and de-risked from the start.",
  },
  {
    title: "De novo launch",
    description: "A new bank or credit union stood up on a modern core, with the path from charter to first funded account compressed.",
  },
];

// ─── FAQ ─────────────────────────────────────────────────────────────────────

const faqs = [
  {
    question: "What does moving to a modern core actually involve?",
    answer: "Implementation covers configuration, integration, conversion support, testing, training, and launch readiness, run on a planned path with the team behind the platform beside you.",
  },
  {
    question: "How long does a core conversion take?",
    answer: "A core migration on Nymbus runs faster than a traditional multi-year vendor build, with a defined timeline and technology, operations, and support connected from the start.",
  },
  {
    question: "Can we launch a brand-new institution on Nymbus?",
    answer: "Yes. A new bank or credit union can be stood up on a modern core, with technology and operational support that compresses the path from charter to first funded account.",
  },
  {
    question: "Do we have to staff the operation ourselves?",
    answer: "No. Nymbus Managed Services can run onboarding, servicing, back-office work, compliance, and fraud operations behind your brand, built and operated by the team behind the platform.",
  },
  {
    question: "How does this connect to the systems we already use?",
    answer: "Nymbus Connect integrates your tools and partners through modern APIs, so integration does not require custom middleware for every connection.",
  },
  {
    question: "What if we want to launch something new before replacing the core?",
    answer: "You can. A parallel core lets you launch a new brand or line alongside your existing system first, then modernize the primary core when the timing is right.",
  },
  {
    question: "What makes Nymbus different from a traditional core provider?",
    answer: "The core is built to move with your strategy, so changing a product, rate, or segment no longer waits on a vendor roadmap or a multi-year build.",
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

export default function PrimaryCorePage() {
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
                Start with a core built to move.
              </h1>
              <p className="text-neutral-500 text-lg md:text-xl leading-relaxed mb-8 max-w-2xl">
                When the foundation is rigid, every plan waits on a vendor roadmap. Move your institution onto a modern core built to move with your strategy.
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
              <h2 className="text-[1.75rem] md:text-[2.25rem] font-bold leading-tight tracking-[-0.02em] text-neutral-900 mb-5">
                Modernize the foundation, not just the front end.
              </h2>
              <p className="text-neutral-500 text-base md:text-lg leading-relaxed">
                A modern app on a rigid core still moves at the core&apos;s pace. Nymbus replaces the foundation itself, so accounts, deposits, servicing, and every product decision run on infrastructure built to move with your strategy.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ─── Feature Blocks (alternating layout) ──────────────────────────── */}
      {features.map((feature, index) => (
        <section
          key={feature.id}
          id={feature.id}
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

      {/* ─── Path Callout ─────────────────────────────────────────────────── */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container-site">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto text-center mb-14">
              <h2 className="text-[1.75rem] md:text-[2.25rem] font-bold leading-tight tracking-[-0.02em] text-neutral-900 mb-5">
                Built for every way institutions start.
              </h2>
              <p className="text-neutral-500 text-base md:text-lg leading-relaxed">
                Nymbus supports both paths to a modern primary core, whether you are moving an existing institution off legacy infrastructure or standing up an entirely new one.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
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
                href="/solutions/parallel-core/"
                className="inline-flex items-center text-[#697CB2] text-sm font-semibold hover:text-[#4a5d8a] transition-colors no-underline"
              >
                Explore parallel core launches
                <svg className="w-4 h-4 ml-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ─── Why Band (Testimonials) ──────────────────────────────────────── */}
      <section className="py-20 md:py-28 bg-neutral-900">
        <div className="container-site">
          <ScrollReveal>
            <h2 className="text-[1.75rem] md:text-[2.25rem] font-bold leading-tight tracking-[-0.02em] text-white text-center mb-14">
              Why institutions modernize their core on Nymbus.
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="p-6 md:p-8 rounded-2xl border border-white/10 bg-white/5"
                >
                  <blockquote className="text-white/70 text-sm leading-relaxed mb-6 italic">
                    &ldquo;Testimonial placeholder — shortest quotable line, outcome first.&rdquo;
                  </blockquote>
                  <div>
                    <p className="text-white text-sm font-semibold">Name Placeholder</p>
                    <p className="text-white/40 text-xs">Title, Institution</p>
                  </div>
                </div>
              ))}
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
                Start with a core built to move.
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
