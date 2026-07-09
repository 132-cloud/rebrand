"use client";

import { useEffect, useRef } from "react";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { Button } from "@/components/ui/Button";
import Link from "next/link";

// ─── Blueprint Grid (light version for white background) ─────────────────────

function BlueprintGridLight() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0, y: 0, active: false });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    const gridSize = 40;

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.scale(dpr, dpr);
    };

    const handleMouseMove = (e: MouseEvent) => {
      const canvasRect = canvas.getBoundingClientRect();
      mouseRef.current = { x: e.clientX - canvasRect.left, y: e.clientY - canvasRect.top, active: true };
    };

    const handleMouseLeave = () => {
      mouseRef.current.active = false;
    };

    const draw = () => {
      const rect = canvas.getBoundingClientRect();
      const w = rect.width;
      const h = rect.height;
      ctx.clearRect(0, 0, w, h);

      const mouse = mouseRef.current;
      const fadeStart = h * 0.2;
      const fadeEnd = h * 0.8;

      for (let x = 0; x <= w; x += gridSize) {
        for (let y = 0; y <= h; y += gridSize) {
          let fadeOpacity = 1;
          if (y < fadeStart) fadeOpacity = y / fadeStart;
          else if (y > fadeEnd) fadeOpacity = (h - y) / (h - fadeEnd);

          let offsetX = 0;
          let offsetY = 0;
          if (mouse.active) {
            const dx = x - mouse.x;
            const dy = y - mouse.y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < 150) {
              const force = (1 - dist / 150) * 8;
              offsetX = (dx / dist) * force;
              offsetY = (dy / dist) * force;
            }
          }

          const baseOpacity = 0.12 * fadeOpacity;

          if (x + gridSize <= w) {
            ctx.beginPath();
            ctx.moveTo(x + offsetX, y + offsetY);
            let nextOffsetX = 0;
            let nextOffsetY = 0;
            if (mouse.active) {
              const dx2 = (x + gridSize) - mouse.x;
              const dy2 = y - mouse.y;
              const dist2 = Math.sqrt(dx2 * dx2 + dy2 * dy2);
              if (dist2 < 150) {
                const force2 = (1 - dist2 / 150) * 8;
                nextOffsetX = (dx2 / dist2) * force2;
                nextOffsetY = (dy2 / dist2) * force2;
              }
            }
            ctx.lineTo(x + gridSize + nextOffsetX, y + nextOffsetY);
            ctx.strokeStyle = `rgba(0, 0, 0, ${baseOpacity})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }

          if (y + gridSize <= h) {
            ctx.beginPath();
            ctx.moveTo(x + offsetX, y + offsetY);
            let nextOffsetX2 = 0;
            let nextOffsetY2 = 0;
            if (mouse.active) {
              const dx3 = x - mouse.x;
              const dy3 = (y + gridSize) - mouse.y;
              const dist3 = Math.sqrt(dx3 * dx3 + dy3 * dy3);
              if (dist3 < 150) {
                const force3 = (1 - dist3 / 150) * 8;
                nextOffsetX2 = (dx3 / dist3) * force3;
                nextOffsetY2 = (dy3 / dist3) * force3;
              }
            }
            let nextFade = 1;
            const ny = y + gridSize;
            if (ny < fadeStart) nextFade = ny / fadeStart;
            else if (ny > fadeEnd) nextFade = (h - ny) / (h - fadeEnd);
            ctx.lineTo(x + nextOffsetX2, y + gridSize + nextOffsetY2);
            ctx.strokeStyle = `rgba(0, 0, 0, ${0.12 * Math.min(fadeOpacity, nextFade)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }
      animationId = requestAnimationFrame(draw);
    };

    resize();
    animationId = requestAnimationFrame(draw);

    const parent = canvas.parentElement;
    if (parent) {
      parent.addEventListener("mousemove", handleMouseMove);
      parent.addEventListener("mouseleave", handleMouseLeave);
    }
    window.addEventListener("resize", resize);

    return () => {
      cancelAnimationFrame(animationId);
      if (parent) {
        parent.removeEventListener("mousemove", handleMouseMove);
        parent.removeEventListener("mouseleave", handleMouseLeave);
      }
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" />
  );
}

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
    id: "engage",
    eyebrow: "Engage",
    headline: "Nurture accounts into loyal relationships.",
    body: "Guide account holders from signup to first meaningful transaction with targeted, timely communications based on real account behavior, lifecycle stage, and engagement signals, instead of relying on broad campaigns that miss the moments that matter.",
    link: { label: "Explore Engage", href: "/products/engage/" },
  },
  {
    id: "levels",
    eyebrow: "Levels",
    headline: "Incentivize and reward profitable behaviors.",
    body: "Reward the behaviors that drive primacy, deposits, and deeper relationships, from direct deposit to recurring account activity, without the cost, complexity, or long build cycle of creating an enterprise-grade loyalty program from scratch.",
    link: { label: "Explore Levels", href: "/products/levels/" },
  },
];

const intelligenceFeatures = [
  {
    id: "fraud-intelligence",
    eyebrow: "Fraud Intelligence",
    headline: "Contain fraud in one pass.",
    body: "Customer data, case investigation, and enforcement live in one workspace, so analysts contain threats in one pass instead of chasing five systems.",
    link: { label: "Explore fraud intelligence", href: "/managed-services/#back-office" },
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
    id: "connect",
    eyebrow: "Connect",
    headline: "Your systems and data, connected.",
    body: "Integrate third-parties and stream live data through modern APIs and event-driven architecture, so you onboard new vendors in days and put real-time data to work across the institution.",
    link: { label: "Explore Connect", href: "/products/connect/" },
  },
];

// ─── Three-icon summary ──────────────────────────────────────────────────────

const summaryItems = [
  {
    title: "Real-time where it matters.",
    body: "Live transaction processing, event-driven services, and modern APIs power banking that responds in the moment, not just at the end of it.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
  },
  {
    title: "API-first by design.",
    body: "Modern APIs connect Core, Digital, Onboarding, payments, and partner ecosystems, so integration takes days, not a proprietary rebuild.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
      </svg>
    ),
  },
  {
    title: "One platform, deployed your way.",
    body: "Run Nymbus as your primary banking platform, or modernize alongside the system you run today, on your timeline.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21" />
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
                Core processing, digital banking, account opening, managed operations, and governed AI, running as one system, not five vendor contracts stitched together.
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

      {/* ─── Banking Technology Carousel ─────────────────────────────────── */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-site">
          <ScrollReveal>
            <div className="flex items-center justify-between mb-10">
              <div>
                <p className="text-neutral-400 text-[11px] font-semibold uppercase tracking-wider mb-3">Banking Technology</p>
                <h2 className="text-[2.5rem] md:text-[3.25rem] font-bold leading-[1.1] tracking-[-0.02em] text-neutral-900">
                  Modern banking. Built without limits.
                </h2>
              </div>
              <div className="flex gap-2">
                <button
                  aria-label="Previous"
                  className="w-10 h-10 rounded-full border border-neutral-200 flex items-center justify-center hover:bg-neutral-50 transition-colors"
                  onClick={() => {
                    const el = document.getElementById('banking-carousel');
                    if (el) el.scrollBy({ left: -420, behavior: 'smooth' });
                  }}
                >
                  <svg className="w-4 h-4 text-neutral-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                  </svg>
                </button>
                <button
                  aria-label="Next"
                  className="w-10 h-10 rounded-full border border-neutral-200 flex items-center justify-center hover:bg-neutral-50 transition-colors"
                  onClick={() => {
                    const el = document.getElementById('banking-carousel');
                    if (el) el.scrollBy({ left: 420, behavior: 'smooth' });
                  }}
                >
                  <svg className="w-4 h-4 text-neutral-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                  </svg>
                </button>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Carousel track — first card aligns with container left edge, scrolls right */}
        <ScrollReveal delay={0.1}>
          <div
            id="banking-carousel"
            className="flex gap-6 overflow-x-auto overflow-y-visible scrollbar-hide pl-[max(1.5rem,calc((100vw-1140px)/2+2rem))] pr-6 py-6 snap-x snap-proximity"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none', scrollPaddingLeft: 'max(1.5rem, calc((100vw - 1140px) / 2 + 2rem))' }}
          >
            {bankingTechFeatures.map((feature) => (
              <Link
                key={feature.headline}
                href={feature.link.href}
                id={feature.id}
                className="flex-shrink-0 w-[380px] md:w-[500px] h-[650px] snap-start rounded-2xl bg-white shadow-[0_0_20px_0_rgba(0,0,0,0.08)] p-4 flex flex-col
                  hover:shadow-[0_0_32px_0_rgba(0,101,255,0.12)] hover:-translate-y-0.5
                  transition-all duration-300 no-underline group"
              >
                {/* Top: placeholder visual */}
                <div className="h-[320px] rounded-xl bg-neutral-50 mb-4 flex-shrink-0" />

                {/* Bottom: text content */}
                <div className="px-2 pb-2 pt-4">
                  <p className="text-neutral-400 text-[11px] font-semibold uppercase tracking-wider mb-2">{feature.eyebrow}</p>
                  <h3 className="text-neutral-900 text-[1.5rem] md:text-[1.75rem] font-bold leading-tight mb-3">
                    {feature.headline}
                  </h3>
                  <p className="text-neutral-500 text-base leading-relaxed">{feature.body}</p>
                </div>
              </Link>
            ))}
          </div>
        </ScrollReveal>
      </section>

      {/* ─── Platform Diagram (Centerpiece) ───────────────────────────────── */}
      <section className="relative py-20 md:py-28 bg-white overflow-hidden">
        {/* Interactive blueprint grid on white */}
        <BlueprintGridLight />

        <div className="container-site relative z-10">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto text-center mb-14">
              <h2 className="text-[2.5rem] md:text-[3.25rem] font-bold leading-[1.1] tracking-[-0.02em] text-neutral-900 mb-5">
                Move faster with a flexible, modern platform built for growth
              </h2>
              <p className="text-neutral-500 text-base md:text-lg leading-relaxed mb-6">
                Unify banking workflows, simplify vendor management, and connect existing systems through APIs, extensible integrations, and Nymbus MCP.
              </p>
              <Link href="/products/connect/" className="inline-flex items-center text-[#697CB2] text-sm font-semibold hover:text-[#4a5d8a] transition-colors no-underline">
                Explore integrations
                <svg className="w-4 h-4 ml-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <div className="relative w-full max-w-5xl mx-auto overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/Platform v3.svg" alt="Nymbus platform architecture diagram" className="w-full h-auto scale-[1.6] origin-center" />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ─── Intelligence Feature Carousel ──────────────────────────────── */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-site">
          <ScrollReveal>
            <div className="flex items-center justify-between mb-10">
              <div>
                <p className="text-neutral-400 text-[11px] font-semibold uppercase tracking-wider mb-3">Intelligence</p>
                <h2 className="text-[2.5rem] md:text-[3.25rem] font-bold leading-[1.1] tracking-[-0.02em] text-neutral-900">
                  One layer. Every signal.
                </h2>
              </div>
              <div className="flex gap-2">
                <button
                  aria-label="Previous"
                  className="carousel-prev-intel w-10 h-10 rounded-full border border-neutral-200 flex items-center justify-center hover:bg-neutral-50 transition-colors"
                  onClick={() => {
                    const el = document.getElementById('intel-carousel');
                    if (el) el.scrollBy({ left: -420, behavior: 'smooth' });
                  }}
                >
                  <svg className="w-4 h-4 text-neutral-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                  </svg>
                </button>
                <button
                  aria-label="Next"
                  className="carousel-next-intel w-10 h-10 rounded-full border border-neutral-200 flex items-center justify-center hover:bg-neutral-50 transition-colors"
                  onClick={() => {
                    const el = document.getElementById('intel-carousel');
                    if (el) el.scrollBy({ left: 420, behavior: 'smooth' });
                  }}
                >
                  <svg className="w-4 h-4 text-neutral-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                  </svg>
                </button>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Carousel track — first card aligns with container left edge, scrolls right */}
        <ScrollReveal delay={0.1}>
          <div
            id="intel-carousel"
            className="flex gap-6 overflow-x-auto overflow-y-visible scrollbar-hide pl-[max(1.5rem,calc((100vw-1140px)/2+2rem))] pr-6 py-6 snap-x snap-proximity"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none', scrollPaddingLeft: 'max(1.5rem, calc((100vw - 1140px) / 2 + 2rem))' }}
          >
            {intelligenceFeatures.map((feature) => (
              <Link
                key={feature.headline}
                href={feature.link.href}
                id={feature.id}
                className="flex-shrink-0 w-[380px] md:w-[500px] h-[650px] snap-start rounded-2xl bg-white shadow-[0_0_20px_0_rgba(0,0,0,0.08)] p-4 flex flex-col
                  hover:shadow-[0_0_32px_0_rgba(0,101,255,0.12)] hover:-translate-y-0.5
                  transition-all duration-300 no-underline group"
              >
                {/* Top: placeholder visual */}
                <div className="h-[320px] rounded-xl bg-neutral-50 mb-4 flex-shrink-0" />

                {/* Bottom: text content */}
                <div className="px-2 pb-2 pt-4">
                  <p className="text-neutral-400 text-[11px] font-semibold uppercase tracking-wider mb-2">{feature.eyebrow}</p>
                  <h3 className="text-neutral-900 text-[1.5rem] md:text-[1.75rem] font-bold leading-tight mb-3">
                    {feature.headline}
                  </h3>
                  <p className="text-neutral-500 text-base leading-relaxed">{feature.body}</p>
                </div>
              </Link>
            ))}
          </div>
        </ScrollReveal>
      </section>

      {/* ─── Proof Quote ──────────────────────────────────────────────────── */}
      <section className="py-16 md:py-20 bg-neutral-50 border-y border-neutral-100">
        <div className="container-site">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto text-center">
              <blockquote className="text-neutral-700 text-xl md:text-2xl font-light leading-relaxed italic mb-6">
                &ldquo;The successful go-live affirmed our decision to modernize our entire banking infrastructure and positions us to deliver real, simple banking services to our customers faster and more efficiently than ever before.&rdquo;
              </blockquote>
              <p className="text-neutral-500 text-sm">Thomas Senecal, CEO and Chairman, PeoplesBank</p>
            </div>
          </ScrollReveal>
        </div>
      </section>



      {/* ─── Deploy Your Way Band ─────────────────────────────────────────── */}
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
