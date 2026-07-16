"use client";

import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { Button } from "@/components/ui/Button";

// ─── Leadership Team ─────────────────────────────────────────────────────────

const leadership = [
  { name: "Jeffery Kendall", title: "Chairman & CEO", image: "/images/leadership/jeffery_kendall_small-5.jpg" },
  { name: "Jeffrey Fonda", title: "Chief Financial Officer", image: "/images/leadership/jeffrey_fonda_small.jpg" },
  { name: "Ed Gross", title: "Chief Product Officer", image: "/images/leadership/ed_gross_small.jpg" },
  { name: "Michelle Prohaska", title: "Chief Banking & Risk Officer", image: "/images/leadership/michelle_prohaska_small-2.jpg" },
  { name: "David Barone", title: "Chief Strategy & Marketing Officer", image: "/images/leadership/david_barone_small-2.jpg" },
  { name: "Matthew Terry", title: "Chief Technology Officer", image: "/images/leadership/matthew_terry_small.jpg" },
  { name: "Meredythe Miles", title: "EVP, Client Consulting Services", image: "/images/leadership/meredythe_miles_small.jpg" },
  { name: "Ashlie Jenkins", title: "EVP, Development Services", image: "/images/leadership/ashlie_jenkins_small.jpg" },
  { name: "Matthew Flood", title: "EVP, Client Support", image: "/images/leadership/matt_flood_small-2.jpg" },
  { name: "Aimee Ford", title: "Chief Revenue Officer", image: "/images/leadership/Aimee_Ford2.png" },
];

// ─── Board of Directors ──────────────────────────────────────────────────────

const board = [
  { name: "Peter Sobiloff", title: "Insight Partners", image: "/images/leadership/peter_sobiloff_small.jpg" },
  { name: "Rilla Delorier", title: "Independent Board Director, Coastal Community Bank", image: "/images/leadership/rilla_delorier_small.jpg" },
  { name: "AJ Malhotra", title: "Insight Partners", image: "/images/leadership/aj_malhotra_small.jpg" },
  { name: "Rajiv Gihwala", title: "Insight Partners", image: "/images/leadership/rajiv_gihwala_small.jpg" },
  { name: "Casey Callinsky", title: "VyStar Credit Union", image: "/images/leadership/casey_callinsky_small.jpg" },
];

// ─── Investors ───────────────────────────────────────────────────────────────

const investors = [
  "Insight Partners",
  "Financial Services Capital",
  "VyStar Credit Union",
  "Michigan State University Federal Credit Union",
  "Curql",
  "ConnectOne Bank",
  "PeoplesBank",
  "The Banc Funds",
  "Mendon Venture Partners",
];

// ─── Main Page ───────────────────────────────────────────────────────────────

export default function AboutPage() {
  return (
    <div className="bg-white text-[#171216]">
      {/* ─── Section 1: About Hero ────────────────────────────────────────── */}
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
                Nymbus is banking built to move.
              </h1>
              <p className="text-neutral-500 text-lg md:text-xl leading-relaxed max-w-2xl">
                Legacy systems and vendor roadmaps turn movement into maintenance, so the plan on the whiteboard never reaches production. Nymbus closes that gap, bringing together the infrastructure to launch, the operations to run, and the growth strategy to make the model work in market.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ─── Section 3: Leadership ────────────────────────────────────────── */}
      <section className="py-20 md:py-28">
        <div className="container-site">
          <ScrollReveal>
            <div className="max-w-3xl mb-14">
              <p className="text-neutral-400 text-[11px] font-semibold uppercase tracking-wider mb-4">Leadership</p>
              <h2 className="text-[1.75rem] md:text-[2.25rem] font-bold leading-tight tracking-[-0.02em] text-[#171216] mb-5">
                Led by banking, product, and growth operators.
              </h2>
              <p className="text-neutral-500 text-base md:text-lg leading-relaxed">
                Nymbus leadership brings experience across banking, product, technology, risk, operations, revenue, and growth strategy.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
              {leadership.map((person) => (
                <div key={person.name} className="text-center">
                  <div className="relative w-full aspect-square rounded-2xl overflow-hidden mb-4 bg-neutral-100">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={person.image}
                      alt={person.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h4 className="text-[#171216] text-sm font-bold mb-0.5">{person.name}</h4>
                  <p className="text-neutral-500 text-xs leading-snug">{person.title}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ─── Section 4: Board of Directors ────────────────────────────────── */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container-site">
          <ScrollReveal>
            <div className="max-w-3xl mb-14">
              <p className="text-neutral-400 text-[11px] font-semibold uppercase tracking-wider mb-4">Board of Directors</p>
              <h2 className="text-[1.75rem] md:text-[2.25rem] font-bold leading-tight tracking-[-0.02em] text-[#171216] mb-5">
                Governed with banking and investor experience.
              </h2>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8">
              {board.map((person) => (
                <div key={person.name} className="text-center">
                  <div className="relative w-full aspect-square rounded-2xl overflow-hidden mb-4 bg-neutral-100">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={person.image}
                      alt={person.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h4 className="text-[#171216] text-sm font-bold mb-0.5">{person.name}</h4>
                  <p className="text-neutral-500 text-xs leading-snug">{person.title}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ─── Section 5: Investors ─────────────────────────────────────────── */}
      <section id="investors" className="py-20 md:py-28">
        <div className="container-site">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto text-center mb-12">
              <p className="text-neutral-400 text-[11px] font-semibold uppercase tracking-wider mb-4">Investors</p>
              <h2 className="text-[1.75rem] md:text-[2.25rem] font-bold leading-tight tracking-[-0.02em] text-[#171216]">
                Backed by leaders in banking, fintech, and financial services.
              </h2>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 max-w-3xl mx-auto">
              {investors.map((name) => (
                <span key={name} className="text-neutral-600 text-sm font-medium">
                  {name}
                </span>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ─── Section 6: Final CTA ─────────────────────────────────────────── */}
      <section className="py-20 md:py-28 bg-white border-t border-neutral-100">
        <div className="container-site">
          <ScrollReveal>
            <div className="max-w-2xl mx-auto text-center">
              <p className="text-neutral-400 text-[11px] font-semibold uppercase tracking-wider mb-4">Build on Nymbus</p>
              <h2 className="text-[1.75rem] md:text-[2.25rem] font-bold leading-tight tracking-[-0.02em] text-[#171216] mb-4">
                See the platform behind modern banking growth.
              </h2>
              <p className="text-neutral-500 text-base leading-relaxed mb-8">
                Explore how Nymbus connects platform, operations, and growth support for institutions ready to launch, modernize, and scale.
              </p>
              <Button href="/contact/" variant="primary" size="lg">
                Talk to an expert
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
