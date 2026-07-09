"use client";

import { useEffect } from "react";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { Button } from "@/components/ui/Button";
import { PortfolioCarousel } from "@/components/sections/labs/PortfolioCarousel";

// ─── Logo Strip ──────────────────────────────────────────────────────────────

const logos = [
  { src: "/images/logo bar logos/Vector.png", alt: "PILLUR" },
  { src: "/images/logo bar logos/FECU.png", alt: "ZYNLO" },
  { src: "/images/logo bar logos/Gesa.png", alt: "HUSTL" },
  { src: "/images/logo bar logos/VantageWest.png", alt: "VALORFI" },
  { src: "/images/logo bar logos/Vector-1.png", alt: "ALUMNIFI" },
  { src: "/images/logo bar logos/Vector.png", alt: "COLLEGIATE" },
];

// ─── Challenge Pillars ───────────────────────────────────────────────────────

const challengePillars = [
  {
    title: "The audience.",
    body: "Define who the brand is for and why they leave the incumbent to join it.",
  },
  {
    title: "The engine.",
    body: "Build the acquisition that turns a live product into funded, growing deposits.",
  },
  {
    title: "The runway.",
    body: "Connect strategy and operations so the model keeps growing long after launch day.",
  },
];

// ─── Labs Method ─────────────────────────────────────────────────────────────

const methods = [
  {
    title: "Strategy, embedded.",
    body: "We work inside your team to define the audience, the offer, and the growth model, then commit to the moves that move the numbers.",
  },
  {
    title: "Brand, built and shipped.",
    body: "We build the positioning, identity, and launch, then put the brand in market with the audience it was made for.",
  },
  {
    title: "Growth, run on live data.",
    body: "We plan and run paid, owned, and partner acquisition, then optimize on real performance after launch.",
  },
];

// ─── Paths to Growth ─────────────────────────────────────────────────────────

const paths = [
  {
    title: "Vertical banking brands.",
    body: "A brand built for a profession, community, or life stage your primary institution cannot reach.",
  },
  {
    title: "Deposit growth models.",
    body: "A focused offer and acquisition plan designed to pull in and fund deposits.",
  },
  {
    title: "New market entry.",
    body: "A dedicated brand and launch plan to enter a new geography, segment, or channel.",
  },
  {
    title: "Affinity banking.",
    body: "A brand and offer matched to a partner, employer, alumni, or community base.",
  },
  {
    title: "Product-led growth.",
    body: "A model led by one sharp offer: high-yield deposits, business banking, or a niche need.",
  },
];

// ─── Process Steps ───────────────────────────────────────────────────────────

const steps = [
  { num: "1", title: "Define the audience and offer.", body: "Who it is for, why the segment matters, and how to turn the opportunity into product, pricing, and positioning that sells." },
  { num: "2", title: "Build the brand.", body: "Name, identity, message, and market approach that earn trust." },
  { num: "3", title: "Plan the launch.", body: "Acquisition, operations, and platform readiness before day one." },
  { num: "4", title: "Grow the model.", body: "Refine acquisition, engagement, and growth on live data after launch." },
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
    <div className="bg-white text-neutral-900">
      {/* ─── 1. Hero ──────────────────────────────────────────────────────── */}
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
                Growth team that drives the launch.
              </h1>
              <p className="text-neutral-500 text-lg md:text-xl leading-relaxed mb-8 max-w-2xl">
                Embed growth experts with your team to architect, launch, and optimize your digital brand from launch through scale.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button href="/contact/?topic=labs" variant="primary" size="lg" className="!bg-neutral-900 !text-white !shadow-none hover:!bg-neutral-800">
                  Talk to a Labs expert
                </Button>
                <Button href="#portfolio" variant="outline" size="lg" className="!text-neutral-900 !border-neutral-300 !bg-white/60 hover:!bg-white/80">
                  See the work
                </Button>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ─── 2. Proof Strip ───────────────────────────────────────────────── */}
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

      {/* ─── 3. The Challenge ─────────────────────────────────────────────── */}
      <section className="py-20 md:py-28">
        <div className="container-site">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto text-center mb-14">
              <h2 className="text-[1.75rem] md:text-[2.25rem] font-bold leading-tight tracking-[-0.02em] text-neutral-900 mb-5">
                The platform launches the bank. We grow it.
              </h2>
              <p className="text-neutral-500 text-base md:text-lg leading-relaxed">
                Your core is live and the brand works. But a platform does not hand you customers. Growth takes an audience, an offer, and a plan to fund it, built as deliberately as the tech was.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {challengePillars.map((item) => (
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

      {/* ─── 4. The Work (Portfolio Carousel) ─────────────────────────────── */}
      <section id="portfolio" className="py-0">
        <ScrollReveal>
          <PortfolioCarousel />
        </ScrollReveal>
      </section>

      {/* ─── 5. The Labs Method (dark) ────────────────────────────────────── */}
      <section id="labs-method" className="py-20 md:py-28 bg-neutral-900">
        <div className="container-site">
          <ScrollReveal>
            <h2 className="text-[2.5rem] md:text-[3.25rem] font-bold leading-[1.1] tracking-[-0.02em] text-white text-center mb-14">
              The Labs method.
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
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

          <ScrollReveal delay={0.2}>
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-white/80 text-base md:text-lg leading-relaxed">
                <span className="font-bold text-white">One difference: we are wired into the platform.</span>{" "}
                An agency hands you a deck. We build on the same core, digital banking, onboarding, and operations that run the brand, so strategy becomes a live, growing bank instead of a slide.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ─── 6. Paths to Growth ───────────────────────────────────────────── */}
      <section className="py-20 md:py-28">
        <div className="container-site">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto text-center mb-14">
              <h2 className="text-[2.5rem] md:text-[3.25rem] font-bold leading-[1.1] tracking-[-0.02em] text-neutral-900 mb-5">
                Paths to growth.
              </h2>
              <p className="text-neutral-500 text-base md:text-lg leading-relaxed">
                Models we have launched, and can launch with you.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {paths.map((item) => (
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

      {/* ─── 7. From First Idea to Live Brand ─────────────────────────────── */}
      <section className="py-20 md:py-28 bg-neutral-50">
        <div className="container-site">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto text-center mb-14">
              <h2 className="text-[2.5rem] md:text-[3.25rem] font-bold leading-[1.1] tracking-[-0.02em] text-neutral-900 mb-5">
                From first idea to live brand.
              </h2>
              <p className="text-neutral-500 text-base md:text-lg leading-relaxed">
                One team brings structure to growth, from the audience to the numbers after go-live.
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

      {/* ─── 8. The Numbers ───────────────────────────────────────────────── */}
      <section className="py-16 md:py-20 border-y border-neutral-100">
        <div className="container-site">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto text-center mb-10">
              <h2 className="text-[1.5rem] md:text-[1.75rem] font-bold leading-tight tracking-[-0.02em] text-neutral-900">
                The numbers behind the brands.
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <p className="text-[2.5rem] font-bold text-neutral-900 mb-1">+459%</p>
                <p className="text-neutral-500 text-sm">Deposits growth across the Labs portfolio YoY 2025</p>
              </div>
              <div>
                <p className="text-[2.5rem] font-bold text-neutral-900 mb-1">$50M</p>
                <p className="text-neutral-500 text-sm">In deposits in as little as 1.4 months</p>
              </div>
              <div>
                <p className="text-[2.5rem] font-bold text-neutral-900 mb-1">97%</p>
                <p className="text-neutral-500 text-sm">12-month customer retention</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ─── 9. Final CTA (Form) ──────────────────────────────────────────── */}
      <section className="py-20 md:py-28 bg-neutral-50">
        <div className="container-site">
          <ScrollReveal>
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-[1.75rem] md:text-[2.25rem] font-bold leading-tight tracking-[-0.02em] text-neutral-900 mb-4">
                Build the growth model behind your launch.
              </h2>
              <p className="text-neutral-500 text-base mb-8">
                Book a strategy session. Tell us what you want to grow.
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
                  Book a session
                </button>
              </form>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
