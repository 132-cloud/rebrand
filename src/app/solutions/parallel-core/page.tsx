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
    id: "vertical-brands",
    headline: "Launch a vertical brand.",
    body: "Stand up a distinct banking brand alongside your existing core, built for a specific segment, industry, or audience. Reach a market your primary brand cannot, without disrupting the institution you run today.",
    link: { label: "Explore vertical brands", href: "/solutions/vertical-brands/" },
  },
  {
    id: "new-lines",
    headline: "Add a new line of business.",
    body: "Launch new products or segments on a parallel core, then scale what works without disruption. Test a deposit line, a business offering, or a new audience with the technology and operations connected from the start.",
    link: { label: "Explore new lines", href: "/solutions/new-line-of-business/" },
  },
  {
    id: "ma-acceleration",
    headline: "Integrate acquisitions faster.",
    body: "Stand up a parallel core to onboard acquired portfolios quickly, shortening integration timelines and de-risking the transition. Bring an acquired book onto modern infrastructure without freezing the momentum of the deal.",
    link: { label: "See M&A acceleration", href: "/solutions/accelerate-ma/" },
  },
  {
    id: "private-label",
    headline: "Bank under your own brand.",
    body: "Offer banking under your own brand with Nymbus running the infrastructure, digital experience, and managed services underneath. Carry the relationship and the balances, with the operation run by the team behind the platform.",
    link: { label: "Explore private label", href: "/solutions/private-label/" },
  },
  {
    id: "sandbox",
    headline: "Test without risk.",
    body: "Innovate in a parallel environment to build and test new banking products safely, before promoting the ones that work to production. Prove the model in market before you commit the institution to it.",
    link: { label: "See sandbox innovation", href: "/solutions/sandbox/" },
  },
];

// ─── Path Callout Stages ─────────────────────────────────────────────────────

const stages = [
  {
    title: "New brands and segments",
    description: "A distinct brand or new line of business, launched for a market your primary institution cannot reach today.",
  },
  {
    title: "Acquisitions",
    description: "Acquired portfolios onboarded onto modern infrastructure, with integration timelines shortened and the transition de-risked.",
  },
  {
    title: "Innovation and testing",
    description: "A safe environment to build, test, and prove new banking products before promoting the ones that work to production.",
  },
];

// ─── FAQ ─────────────────────────────────────────────────────────────────────

const faqs = [
  {
    question: "What is a parallel core?",
    answer: "A parallel core runs alongside the system you operate today, so you can launch a new brand, segment, or acquisition without a full-core conversion or disruption to your primary experience.",
  },
  {
    question: "How fast can we launch on a parallel core?",
    answer: "A new brand or line can launch on a parallel core faster than a traditional core build, with technology, operations, and support connected from the start.",
  },
  {
    question: "Will this disrupt the core we run today?",
    answer: "No. The parallel core operates independently of your primary core, so you can launch and scale something new without touching the institution your existing members rely on.",
  },
  {
    question: "Do we have to staff the operation ourselves?",
    answer: "No. Nymbus Managed Services can run onboarding, servicing, back-office work, and compliance behind your brand, built and operated by the team behind the platform.",
  },
  {
    question: "Can we launch more than one brand or line?",
    answer: "Yes. Institutions can run multiple brands, segments, and portfolios on parallel cores, segmenting by size, audience, industry, or growth stage without disrupting the primary experience.",
  },
  {
    question: "How does M&A integration work on a parallel core?",
    answer: "An acquired portfolio can be stood up on a parallel core and onboarded onto modern infrastructure, shortening integration timelines and de-risking the transition off legacy systems.",
  },
  {
    question: "How does this connect to the systems we already use?",
    answer: "Nymbus Connect integrates your tools and partners through modern APIs, so integration does not require custom middleware for every connection.",
  },
  {
    question: "What makes Nymbus different from a traditional core project?",
    answer: "A parallel core gives you a second path to market, launching beside your core instead of through it, so new brands, segments, and acquisitions move without a full conversion.",
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

export default function ParallelCorePage() {
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
                Launch new growth alongside your core.
              </h1>
              <p className="text-neutral-500 text-lg md:text-xl leading-relaxed mb-8 max-w-2xl">
                Every new brand, segment, or acquisition seems to require touching the core you can&apos;t afford to disrupt. Stand up a parallel core and launch beside the institution you run today.
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
                One platform, two paths to market.
              </h2>
              <p className="text-neutral-500 text-base md:text-lg leading-relaxed">
                Modernizing the core is one path. Launching beside it is the other. A parallel core lets institutions stand up something new, a brand, a segment, an acquisition, without disrupting the primary experience they run today.
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
                Built for every way institutions launch.
              </h2>
              <p className="text-neutral-500 text-base md:text-lg leading-relaxed">
                Nymbus supports differentiated launch models on a parallel core, from a new vertical brand to an acquired portfolio, each running beside the primary core rather than through it.
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
                href="/solutions/core-replacement/"
                className="inline-flex items-center text-[#697CB2] text-sm font-semibold hover:text-[#4a5d8a] transition-colors no-underline"
              >
                Explore core replacement
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
              Why institutions launch parallel cores on Nymbus.
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="p-6 md:p-8 rounded-2xl border border-neutral-200 bg-white"
                >
                  <blockquote className="text-neutral-500 text-sm leading-relaxed mb-6 italic">
                    &ldquo;Testimonial placeholder — shortest quotable line, outcome first.&rdquo;
                  </blockquote>
                  <div>
                    <p className="text-neutral-900 text-sm font-semibold">Name Placeholder</p>
                    <p className="text-neutral-400 text-xs">Title, Institution</p>
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
                Launch new growth alongside your core.
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
