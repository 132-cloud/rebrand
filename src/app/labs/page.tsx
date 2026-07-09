"use client";

import { useEffect } from "react";
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
  { src: "/images/logo bar logos/Vector.png", alt: "Client logo" },
];

// ─── Challenge Cards ─────────────────────────────────────────────────────────

const challenges = [
  {
    title: "No audience.",
    body: "A new brand launches without a defined segment, a clear need, or a reason for the right customer to choose it over the bank they already have.",
  },
  {
    title: "No growth engine.",
    body: "The platform goes live, but nothing drives acquisition. Deposits arrive slowly, the model underperforms, and the launch never reaches scale.",
  },
  {
    title: "No operating path.",
    body: "Strategy and infrastructure sit in separate plans, so the brand that looked ready on the whiteboard has no path to run and grow after launch.",
  },
];

// ─── Labs Method ─────────────────────────────────────────────────────────────

const methods = [
  {
    title: "Growth strategy, embedded.",
    body: "Labs experts partner with your team to define the audience, offer, and growth strategy behind the model, then prioritize the moves that drive measurable outcomes.",
  },
  {
    title: "Brand and go-to-market, built.",
    body: "Positioning, identity, and comprehensive launch plans are built and activated for the new brand, so it reaches its audience with clarity and credibility.",
  },
  {
    title: "Performance, optimized.",
    body: "Paid, owned, and partner campaigns are planned and run against acquisition, retention, and portfolio growth, then refined on live data after launch.",
  },
];

// ─── Active Solutions ────────────────────────────────────────────────────────

const solutions = [
  {
    title: "Vertical banking brands.",
    body: "A digital brand built around a defined audience, profession, life stage, or community, launched to reach a market your primary institution cannot.",
  },
  {
    title: "Deposit growth models.",
    body: "A targeted model designed to attract and grow deposits through a focused offer and an acquisition plan built to fund it.",
  },
  {
    title: "New market entry.",
    body: "A dedicated brand and launch strategy to enter a new geography, customer segment, or digital market.",
  },
  {
    title: "Affinity banking.",
    body: "A model built for a partner, employer group, alumni base, or shared-interest community, with the brand and offer matched to the audience.",
  },
  {
    title: "Product-led growth.",
    body: "A model built around a specific need, high-yield deposits, business banking, or niche financial services, with the offer leading acquisition.",
  },
];

// ─── Process Steps ───────────────────────────────────────────────────────────

const steps = [
  { num: "1", title: "Define the audience.", body: "Identify who the model is for, why the segment matters, and what banking need your institution is positioned to serve." },
  { num: "2", title: "Shape the offer.", body: "Translate the opportunity into product, experience, pricing, and positioning decisions that make the model commercially relevant." },
  { num: "3", title: "Build the brand.", body: "Create the name, message, identity, and market approach needed to reach the audience with credibility." },
  { num: "4", title: "Plan the launch.", body: "Connect acquisition, operations, platform deployment, and internal readiness before the model goes to market." },
  { num: "5", title: "Improve performance.", body: "Use launch data and customer activity to refine acquisition, engagement, and growth after the model is live." },
];

// ─── Parallel Core Benefits ──────────────────────────────────────────────────

const parallelBenefits = [
  { title: "Platform connected.", body: "Labs connects to the Nymbus platform behind the model, including core, digital banking, account opening, data, engagement, and managed operations." },
  { title: "Operations aligned.", body: "Growth strategy is planned with the operational support required to onboard, serve, and scale the model after it launches." },
  { title: "Performance focused.", body: "Every launch includes acquisition, measurement, and optimization, so teams can see what is working once the model is live." },
];

// ─── Main Page ───────────────────────────────────────────────────────────────

export default function LabsPage() {
  useEffect(() => {
    document.body.classList.add("is-guide-theme");
    return () => {
      document.body.classList.remove("is-guide-theme");
    };
  }, []);

  return (
    <div className="bg-white text-neutral-900" style={{ fontFamily: "'Inter Tight', 'proxima-nova', sans-serif" }}>
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
                Growth layer that drives the launch.
              </h1>
              <p className="text-neutral-500 text-lg md:text-xl leading-relaxed mb-8 max-w-2xl">
                A cross-functional growth team embeds with yours to architect, launch, and scale a digital banking brand, from launch through scale.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button href="/contact/?topic=labs" variant="primary" size="lg" className="!bg-neutral-900 !text-white !shadow-none hover:!bg-neutral-800">
                  Talk to a Labs expert
                </Button>
                <Button href="#labs-method" variant="outline" size="lg" className="!text-neutral-900 !border-neutral-300 !bg-white/60 hover:!bg-white/80">
                  Explore Nymbus Labs
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
              Digital brands launched with Nymbus
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

      {/* ─── The Challenge ────────────────────────────────────────────────── */}
      <section className="py-20 md:py-28">
        <div className="container-site">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto text-center mb-14">
              <h2 className="text-[1.75rem] md:text-[2.25rem] font-bold leading-tight tracking-[-0.02em] text-neutral-900 mb-5">
                The challenge.
              </h2>
              <p className="text-neutral-500 text-base md:text-lg leading-relaxed">
                A parallel core gives you the platform. It does not give you a market. Most new digital brands stall for lack of a growth model, not technology.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {challenges.map((item) => (
                <div
                  key={item.title}
                  className="p-6 md:p-8 rounded-2xl border border-neutral-200 bg-neutral-50"
                >
                  <h4 className="text-neutral-900 text-base font-bold mb-3">{item.title}</h4>
                  <p className="text-neutral-500 text-sm leading-relaxed">{item.body}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ─── The Labs Method ──────────────────────────────────────────────── */}
      <section id="labs-method" className="py-20 md:py-28 bg-neutral-900">
        <div className="container-site">
          <ScrollReveal>
            <h2 className="text-[1.75rem] md:text-[2.25rem] font-bold leading-tight tracking-[-0.02em] text-white text-center mb-14">
              The Labs method.
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {methods.map((item) => (
                <div
                  key={item.title}
                  className="p-6 md:p-8 rounded-2xl border border-white/10 bg-white/5"
                >
                  <h4 className="text-white text-base font-bold mb-3">{item.title}</h4>
                  <p className="text-white/60 text-sm leading-relaxed">{item.body}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ─── Active Solutions ─────────────────────────────────────────────── */}
      <section className="py-20 md:py-28">
        <div className="container-site">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto text-center mb-14">
              <h2 className="text-[1.75rem] md:text-[2.25rem] font-bold leading-tight tracking-[-0.02em] text-neutral-900 mb-5">
                Paths to growth.
              </h2>
              <p className="text-neutral-500 text-base md:text-lg leading-relaxed">
                Digital banking models you can launch with Labs.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {solutions.map((item) => (
                <div
                  key={item.title}
                  className="p-6 rounded-2xl border border-neutral-200 bg-white hover:border-neutral-300 transition-[border-color] duration-300"
                >
                  <h4 className="text-neutral-900 text-sm font-bold mb-2">{item.title}</h4>
                  <p className="text-neutral-500 text-sm leading-relaxed">{item.body}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ─── From Concept to Launch (Process Steps) ───────────────────────── */}
      <section className="py-20 md:py-28 bg-neutral-50">
        <div className="container-site">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto text-center mb-14">
              <h2 className="text-[1.75rem] md:text-[2.25rem] font-bold leading-tight tracking-[-0.02em] text-neutral-900 mb-5">
                From concept to launch, one connected process.
              </h2>
              <p className="text-neutral-500 text-base md:text-lg leading-relaxed">
                Labs brings structure to growth, from identifying the audience to improving performance after the model is live.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="max-w-3xl mx-auto space-y-6">
              {steps.map((step) => (
                <div key={step.num} className="flex gap-5 items-start">
                  <div className="w-8 h-8 rounded-full bg-neutral-900 text-white text-sm font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                    {step.num}
                  </div>
                  <div>
                    <h4 className="text-neutral-900 text-base font-bold mb-1">{step.title}</h4>
                    <p className="text-neutral-500 text-sm leading-relaxed">{step.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ─── Built for Parallel-Core Growth ───────────────────────────────── */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container-site">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto text-center mb-14">
              <h2 className="text-[1.75rem] md:text-[2.25rem] font-bold leading-tight tracking-[-0.02em] text-neutral-900 mb-5">
                Built for parallel-core growth.
              </h2>
              <p className="text-neutral-500 text-base md:text-lg leading-relaxed">
                Build and launch a new brand, vertical, or market entry strategy alongside your core, with Labs.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {parallelBenefits.map((item) => (
                <div
                  key={item.title}
                  className="p-6 md:p-8 rounded-2xl border border-neutral-200 bg-neutral-50 hover:border-neutral-300 transition-[border-color] duration-300"
                >
                  <h4 className="text-neutral-900 text-base font-bold mb-3">{item.title}</h4>
                  <p className="text-neutral-500 text-sm leading-relaxed">{item.body}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ─── Proof Strip ──────────────────────────────────────────────────── */}
      <section className="py-16 md:py-20 border-y border-neutral-100">
        <div className="container-site">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto text-center mb-10">
              <h2 className="text-[1.5rem] md:text-[1.75rem] font-bold leading-tight tracking-[-0.02em] text-neutral-900">
                Launching and building successful digital brands.
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <p className="text-[2.5rem] font-bold text-neutral-900 mb-1">#1</p>
                <p className="text-neutral-500 text-sm">in live digital brand launches</p>
              </div>
              <div>
                <p className="text-[2.5rem] font-bold text-neutral-900 mb-1">270%</p>
                <p className="text-neutral-500 text-sm">deposit growth across digital brands in 2025</p>
              </div>
              <div>
                <p className="text-[2.5rem] font-bold text-neutral-900 mb-1 tabular-nums">25+</p>
                <p className="text-neutral-500 text-sm">digital banks launched and cores deployed</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ─── Final CTA ────────────────────────────────────────────────────── */}
      <section className="py-20 md:py-28 bg-neutral-50">
        <div className="container-site">
          <ScrollReveal>
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-[1.75rem] md:text-[2.25rem] font-bold leading-tight tracking-[-0.02em] text-neutral-900 mb-4">
                Build the growth model behind the launch.
              </h2>
              <p className="text-neutral-500 text-base mb-8">
                Enter your information below to book a strategy session.
              </p>
              <form className="max-w-md mx-auto space-y-4 text-left">
                <div>
                  <input
                    type="text"
                    placeholder="Name"
                    className="w-full px-4 py-3 rounded-lg border border-neutral-200 bg-white text-neutral-900 text-sm outline-none focus:border-neutral-400 transition-colors"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full px-4 py-3 rounded-lg border border-neutral-200 bg-white text-neutral-900 text-sm outline-none focus:border-neutral-400 transition-colors"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Company"
                    className="w-full px-4 py-3 rounded-lg border border-neutral-200 bg-white text-neutral-900 text-sm outline-none focus:border-neutral-400 transition-colors"
                  />
                </div>
                <div>
                  <textarea
                    placeholder="What do you want to grow?"
                    rows={3}
                    className="w-full px-4 py-3 rounded-lg border border-neutral-200 bg-white text-neutral-900 text-sm outline-none focus:border-neutral-400 transition-colors resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-neutral-900 text-white text-sm font-semibold rounded-lg hover:bg-neutral-800 transition-colors"
                >
                  Submit
                </button>
              </form>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
