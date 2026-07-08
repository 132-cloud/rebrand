"use client";

import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { Button } from "@/components/ui/Button";
import Link from "next/link";

// ─── Feature Blocks ──────────────────────────────────────────────────────────

const bankingTechFeatures = [
  {
    id: "core-processing",
    eyebrow: "Core",
    headline: "The core, built to move.",
    body: "Run accounts, deposits, transactions, and servicing on modern core infrastructure built for primary or parallel deployment. Changing a product no longer means a multi-year vendor build.",
    link: { label: "Explore core processing", href: "/products/core-processing/" },
  },
  {
    id: "digital-banking",
    eyebrow: "Digital Banking",
    headline: "The experience customers expect.",
    body: "Give account holders the mobile banking they expect, launched as one connected experience across iOS, Android, and web, instead of a multi-year build across a patchwork of vendors.",
    link: { label: "Explore digital banking", href: "/products/digital-banking/" },
  },
  {
    id: "account-opening",
    eyebrow: "Account Opening",
    headline: "From intent to funded.",
    body: "Move applicants from intent to funded with onboarding flows built for consumer, business, and commercial banking, so accounts open and fund in a single flow.",
    link: { label: "Explore account opening", href: "/products/account-opening/" },
  },
  {
    id: "loyalty-engagement",
    eyebrow: "Loyalty and Engagement",
    headline: "Turn accounts into relationships.",
    body: "Levels builds rewards into the account itself, turning everyday balances and activity into loyalty. Engage reaches customers with targeted communication where they already bank, so a transactional account becomes a lasting relationship.",
    link: { label: "Explore engagement", href: "/products/engage/" },
  },
];

const intelligenceFeatures = [
  {
    id: "connect",
    eyebrow: "Connect",
    headline: "Your systems and data, connected.",
    body: "Connect integrates third-party partners and streams live data through modern APIs and event-driven architecture, so you onboard new vendors in days and put real-time data to work across the institution.",
    link: { label: "Explore Connect", href: "/products/connect/" },
  },
  {
    id: "insights",
    eyebrow: "Insights",
    headline: "Decisions on evidence, not guesswork.",
    body: "Turn platform data into analytics that show what is working across products and channels, so decisions run on evidence instead of month-end reports.",
    link: { label: "Explore Insights", href: "/products/insights/" },
  },
  {
    id: "nymbus-mcp",
    eyebrow: "Nymbus MCP",
    headline: "AI that stays governed.",
    body: "Nymbus MCP connects AI to your banking data and workflows under permissions, approvals, and a full audit trail, so automation acts on the routine and escalates the rest.",
    link: { label: "Explore Nymbus MCP", href: "/ai/#nymbus-mcp" },
  },
  {
    id: "fraud-intelligence",
    eyebrow: "Fraud Intelligence",
    headline: "Contain fraud in one pass.",
    body: "Customer data, case investigation, and enforcement live in one workspace, so analysts contain threats in one pass instead of chasing five systems.",
    link: { label: "Explore fraud intelligence", href: "/managed-services/#back-office" },
  },
];

// ─── Three-icon summary ──────────────────────────────────────────────────────

const summaryItems = [
  {
    title: "Run the bank.",
    body: "Core, digital banking, and account opening on modern infrastructure built for primary or parallel deployment.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21" />
      </svg>
    ),
  },
  {
    title: "See and automate.",
    body: "APIs, analytics, governed AI, and fraud intelligence connected across every product and channel.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
  },
  {
    title: "Operate at scale.",
    body: "Managed Services built and run by the same team, so what breaks gets fixed, not forwarded.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    ),
  },
];

// ─── Deploy options ──────────────────────────────────────────────────────────

const deployOptions = [
  {
    title: "Launch a primary core.",
    body: "Move your institution onto modern infrastructure, or stand up a new bank or credit union from charter to first account.",
    href: "/solutions/primary-core/",
  },
  {
    title: "Launch a parallel core.",
    body: "Stand up a new brand, segment, or acquisition beside your existing core, without disrupting the institution you run today.",
    href: "/solutions/parallel-core/",
  },
];

// ─── Main Page ───────────────────────────────────────────────────────────────

export default function PlatformPage() {
  return (
    <div className="bg-white text-neutral-900">
      {/* ─── Hero ─────────────────────────────────────────────────────────── */}
      <section className="relative pt-36 pb-20 md:pt-44 md:pb-28 overflow-hidden">
        <div className="absolute inset-0 w-full h-full" style={{ backgroundImage: "url('/background---.png')", backgroundSize: "cover", backgroundPosition: "center" }} />
        <div className="container-site relative z-10">
          <ScrollReveal>
            <div className="max-w-3xl">
              <p className="text-neutral-400 text-[11px] font-semibold uppercase tracking-wider mb-4">Modern Banking Platform</p>
              <h1 className="text-[2.5rem] md:text-[3.5rem] font-bold leading-[1.08] tracking-[-0.02em] text-neutral-900 mb-6">
                One connected platform.
              </h1>
              <p className="text-neutral-500 text-lg md:text-xl leading-relaxed mb-8 max-w-2xl">
                Core processing, digital banking, account opening, managed operations, and governed AI built to work separately or together.
              </p>
              <Button href="/request-demo/" variant="primary" size="lg" className="!bg-neutral-900 !text-white !shadow-none hover:!bg-neutral-800">
                Book a demo
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ─── Three-Icon Summary Row ───────────────────────────────────────── */}
      <section className="py-16 border-b border-neutral-100">
        <div className="container-site">
          <ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {summaryItems.map((item) => (
                <div key={item.title} className="flex gap-4">
                  <div className="w-10 h-10 rounded-lg bg-neutral-100 flex items-center justify-center flex-shrink-0 text-neutral-600">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-neutral-900 text-sm font-bold mb-1">{item.title}</h4>
                    <p className="text-neutral-500 text-sm leading-relaxed">{item.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ─── Thesis Band ──────────────────────────────────────────────────── */}
      <section className="py-20 md:py-28">
        <div className="container-site">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-[1.75rem] md:text-[2.25rem] font-bold leading-tight tracking-[-0.02em] text-neutral-900 mb-5">
                Every capability required to run a modern bank. Connected.
              </h2>
              <p className="text-neutral-500 text-base md:text-lg leading-relaxed">
                Most institutions run banking across a patchwork of vendors, each with its own roadmap, its own data, and its own integration debt. Nymbus brings core, digital, onboarding, intelligence, and operations onto one platform, so the pieces work together instead of against each other.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ─── Banking Technology Feature Blocks ─────────────────────────────── */}
      {bankingTechFeatures.map((feature, index) => (
        <section key={feature.headline} id={feature.id} className={`py-16 md:py-24 ${index % 2 === 0 ? "bg-white" : "bg-neutral-50"}`}>
          <div className="container-site">
            <ScrollReveal>
              <div className={`flex flex-col md:flex-row items-center gap-12 md:gap-16 ${index % 2 !== 0 ? "md:flex-row-reverse" : ""}`}>
                <div className="flex-1">
                  <p className="text-neutral-400 text-[11px] font-semibold uppercase tracking-wider mb-3">{feature.eyebrow}</p>
                  <h3 className="text-[1.5rem] md:text-[1.875rem] font-bold leading-tight tracking-[-0.01em] text-neutral-900 mb-4">
                    {feature.headline}
                  </h3>
                  <p className="text-neutral-500 text-base leading-relaxed mb-6">{feature.body}</p>
                  <Link href={feature.link.href} className="inline-flex items-center text-[#697CB2] text-sm font-semibold hover:text-[#4a5d8a] transition-colors no-underline">
                    {feature.link.label}
                    <svg className="w-4 h-4 ml-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  </Link>
                </div>
                <div className="flex-1 w-full">
                  <div className="aspect-[4/3] rounded-2xl bg-neutral-100 border border-neutral-200/60" />
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>
      ))}

      {/* ─── Platform Diagram (Centerpiece) ───────────────────────────────── */}
      <section className="py-20 md:py-28 bg-neutral-900">
        <div className="container-site">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto text-center mb-14">
              <h2 className="text-[1.75rem] md:text-[2.25rem] font-bold leading-tight tracking-[-0.02em] text-white mb-5">
                Build on a connected platform.
              </h2>
              <p className="text-white/60 text-base md:text-lg leading-relaxed mb-6">
                Unify banking workflows, simplify vendor management, and connect existing systems through APIs, extensible integrations, and Nymbus MCP.
              </p>
              <Link href="/products/connect/" className="inline-flex items-center text-white/70 text-sm font-semibold hover:text-white transition-colors no-underline">
                Explore integrations
                <svg className="w-4 h-4 ml-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <div className="relative w-full max-w-5xl mx-auto">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/Platform Diagram.svg" alt="Nymbus platform architecture diagram" className="w-full h-auto" />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ─── Intelligence Feature Blocks ───────────────────────────────────── */}
      {intelligenceFeatures.map((feature, index) => (
        <section key={feature.headline} id={feature.id} className={`py-16 md:py-24 ${index % 2 === 0 ? "bg-white" : "bg-neutral-50"}`}>
          <div className="container-site">
            <ScrollReveal>
              <div className={`flex flex-col md:flex-row items-center gap-12 md:gap-16 ${index % 2 !== 0 ? "md:flex-row-reverse" : ""}`}>
                <div className="flex-1">
                  <p className="text-neutral-400 text-[11px] font-semibold uppercase tracking-wider mb-3">{feature.eyebrow}</p>
                  <h3 className="text-[1.5rem] md:text-[1.875rem] font-bold leading-tight tracking-[-0.01em] text-neutral-900 mb-4">
                    {feature.headline}
                  </h3>
                  <p className="text-neutral-500 text-base leading-relaxed mb-6">{feature.body}</p>
                  <Link href={feature.link.href} className="inline-flex items-center text-[#697CB2] text-sm font-semibold hover:text-[#4a5d8a] transition-colors no-underline">
                    {feature.link.label}
                    <svg className="w-4 h-4 ml-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  </Link>
                </div>
                <div className="flex-1 w-full">
                  <div className="aspect-[4/3] rounded-2xl bg-neutral-100 border border-neutral-200/60" />
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>
      ))}

      {/* ─── Proof Quote ──────────────────────────────────────────────────── */}
      <section className="py-16 md:py-20 bg-neutral-50 border-y border-neutral-100">
        <div className="container-site">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto text-center">
              <blockquote className="text-neutral-700 text-xl md:text-2xl font-light leading-relaxed italic mb-6">
                &ldquo;Placeholder — shortest quotable line, outcome first, on running the whole institution on one platform.&rdquo;
              </blockquote>
              <p className="text-neutral-500 text-sm">Name, Title, Institution — pending written approval</p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ─── Managed Services Band ────────────────────────────────────────── */}
      <section className="py-20 md:py-28 bg-neutral-900">
        <div className="container-site">
          <ScrollReveal>
            <div className="max-w-3xl">
              <p className="text-white/40 text-[11px] font-semibold uppercase tracking-wider mb-4">Services</p>
              <h2 className="text-[1.75rem] md:text-[2.25rem] font-bold leading-tight tracking-[-0.02em] text-white mb-5">
                We don&apos;t just build the platform. We run it.
              </h2>
              <p className="text-white/60 text-base md:text-lg leading-relaxed mb-6">
                Nymbus Managed Services operates the back office behind your products, onboarding, servicing, compliance, fraud, and more, built and run by the same team that built the platform, so what breaks gets fixed, not forwarded.
              </p>
              <Link href="/managed-services/" className="inline-flex items-center text-white/70 text-sm font-semibold hover:text-white transition-colors no-underline">
                Explore Managed Services
                <svg className="w-4 h-4 ml-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ─── Deploy Your Way Band ─────────────────────────────────────────── */}
      <section className="py-20 md:py-28">
        <div className="container-site">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto text-center mb-14">
              <h2 className="text-[1.75rem] md:text-[2.25rem] font-bold leading-tight tracking-[-0.02em] text-neutral-900 mb-5">
                One platform. Primary or parallel.
              </h2>
              <p className="text-neutral-500 text-base md:text-lg leading-relaxed">
                Deploy Nymbus as your system of record, or run it as a parallel core beside the system you operate today. Launch alongside your core, or modernize from it.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
              {deployOptions.map((option) => (
                <Link
                  key={option.title}
                  href={option.href}
                  className="p-6 md:p-8 rounded-2xl border border-neutral-200 bg-neutral-50 hover:border-neutral-300 transition-[border-color] duration-300 no-underline group"
                >
                  <h4 className="text-neutral-900 text-base font-bold mb-3 group-hover:text-[#697CB2] transition-colors">{option.title}</h4>
                  <p className="text-neutral-500 text-sm leading-relaxed">{option.body}</p>
                </Link>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="mt-10 text-center">
              <Link href="/solutions/" className="inline-flex items-center text-[#697CB2] text-sm font-semibold hover:text-[#4a5d8a] transition-colors no-underline">
                Explore solutions
                <svg className="w-4 h-4 ml-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ─── Closing CTA ──────────────────────────────────────────────────── */}
      <section className="py-20 md:py-28 bg-neutral-50 border-t border-neutral-100">
        <div className="container-site">
          <ScrollReveal>
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-[1.75rem] md:text-[2.25rem] font-bold leading-tight tracking-[-0.02em] text-neutral-900 mb-4">
                One connected platform.
              </h2>
              <p className="text-neutral-500 text-base leading-relaxed mb-8">
                See how core, digital banking, onboarding, intelligence, and managed operations run together on one platform built to move with your strategy.
              </p>
              <Button href="/request-demo/" variant="primary" size="lg" className="!bg-neutral-900 !text-white !shadow-none hover:!bg-neutral-800">
                Book a demo
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
