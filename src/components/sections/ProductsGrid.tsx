"use client";

import Link from "next/link";
import { ScrollReveal } from "@/components/animations/ScrollReveal";

const products = [
  {
    title: "Core",
    description:
      "A sophisticated modern banking core that adapts to your strategy with APIs and microservices for unmatched flexibility.",
    href: "/solutions/core/",
  },
  {
    title: "Connect",
    description:
      "Unlock new revenue opportunities and gain a deeper, real-time view of your institution with a fully connected data platform.",
    href: "/solutions/connect/",
  },
  {
    title: "Launch",
    description:
      "A complete solution for banks and credit unions to drive growth through secure, compliant, and cost-effective retail vertical strategies.",
    href: "/solutions/launch/",
  },
  {
    title: "Launch SMB",
    description:
      "SMB-focused vertical banking with a digital solution that combines onboarding, lending, and banking services.",
    href: "/solutions/smb/",
  },
  {
    title: "Digital Banking",
    description:
      "Scalable and flexible web & mobile banking with seamless pre-integrated tools and responsive UI for consumer or business accounts.",
    href: "/solutions/#digital",
  },
  {
    title: "Labs",
    description:
      "A marketing, research and strategy team with a comprehensive model for developing, launching, and scaling new vertical banking offerings.",
    href: "/labs/",
  },
  {
    title: "Onboard",
    description:
      "Accelerate and simplify account openings with a fully digital and secure experience across web and mobile channels.",
    href: "/solutions/#onboard",
  },
  {
    title: "Operations",
    description:
      "Offload back-office, call center, and support tasks, enabling faster time to market with zero customer disruption.",
    href: "/solutions/#operations",
  },
  {
    title: "Levels",
    description:
      "Level up with an enterprise-grade loyalty and rewards program that delivers meaningful achievements, gamified rewards, and earning tiers.",
    href: "/solutions/levels/",
  },
];

export function ProductsGrid() {
  return (
    <section className="section-padding bg-charcoal">
      <div className="container-site">
        <ScrollReveal>
          <h1 className="text-[1.75rem] md:text-[2.25rem] font-bold text-center mb-12 max-w-3xl mx-auto">
            A Complete Set of Products, Solutions and Services Engineered for
            Growth
          </h1>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {products.map((product, index) => (
            <ScrollReveal key={product.title} delay={index * 0.05}>
              <Link
                href={product.href}
                className="group block p-6 rounded-xl border border-white/5 hover:border-white/15 bg-charcoal-dark/50 hover:bg-charcoal-dark transition-all duration-300"
              >
                {/* Icon placeholder */}
                <div className="w-12 h-12 mb-4 rounded-lg bg-gradient-to-br from-sky-blue/20 to-blue/20 flex items-center justify-center">
                  <div className="w-5 h-5 bg-gradient-to-br from-sky-blue to-blue rounded-sm" />
                </div>

                <h2 className="text-white text-lg font-semibold mb-2 group-hover:text-sky-blue transition-colors">
                  {product.title}{" "}
                  <span className="text-sky-blue opacity-0 group-hover:opacity-100 transition-opacity">
                    ›
                  </span>
                </h2>
                <p className="text-white/50 text-sm leading-relaxed">
                  {product.description}
                </p>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
