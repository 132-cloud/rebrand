"use client";

import { useState } from "react";
import Link from "next/link";
import { ScrollReveal } from "@/components/animations/ScrollReveal";

// Sample insights data - in production this would come from markdown files
const insights = [
  {
    title: "The Strategic Advantage of a Next-Gen Core",
    type: "opinion piece",
    category: "Core Banking",
    excerpt:
      "Why core modernization amplifies your vision, not just your technology.",
    href: "/lp/next-gen-core-advantage/",
    featured: true,
  },
  {
    title: "Unlock Your Data, Unlock Your Vision",
    type: "whitepaper",
    category: "Data & Analytics",
    excerpt:
      "How connected data platforms drive revenue and operational efficiency.",
    href: "/lp/connect/",
    featured: false,
  },
  {
    title: "The Rise of Microbusinesses",
    type: "whitepaper",
    category: "SMB Banking",
    excerpt:
      "Understanding the opportunity in serving America's fastest-growing business segment.",
    href: "/lp/the-rise-of-microbusinesses/",
    featured: false,
  },
  {
    title: "2025 Belongs to Vertical Banking",
    type: "whitepaper",
    category: "Strategy",
    excerpt:
      "Why niche-focused banking strategies are outperforming traditional approaches.",
    href: "/lp/2025-belongs-to-vertical-banking/",
    featured: false,
  },
  {
    title: "Dashboards Won't Deliver",
    type: "article",
    category: "Data & Analytics",
    excerpt:
      "Moving beyond dashboards to actionable intelligence in banking.",
    href: "/lp/dashboards-wont-deliver/",
    featured: false,
  },
  {
    title: "Cornerstone Report 2025",
    type: "report",
    category: "Industry Research",
    excerpt:
      "New research reveals vertical banking strategies are fueling growth for credit unions and community banks.",
    href: "/lp/cornerstone-report-2025/",
    featured: false,
  },
];

const categories = ["All", "Core Banking", "Data & Analytics", "SMB Banking", "Strategy", "Industry Research"];

export function InsightsGrid() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredInsights =
    activeCategory === "All"
      ? insights
      : insights.filter((i) => i.category === activeCategory);

  return (
    <section id="all" className="section-padding scroll-mt-24">
      <div className="container-site">
        {/* Filter Bar */}
        <ScrollReveal>
          <div className="flex flex-wrap gap-2 mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === cat
                    ? "bg-blue text-white"
                    : "bg-white/5 text-white/60 hover:text-white hover:bg-white/10"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </ScrollReveal>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredInsights.map((insight, index) => (
            <ScrollReveal key={insight.title} delay={index * 0.05}>
              <Link
                href={insight.href}
                className="group block p-6 rounded-xl border border-white/5 hover:border-white/15 bg-charcoal/50 hover:bg-charcoal transition-all duration-300 h-full"
              >
                <span className="inline-block text-xs font-bold uppercase tracking-wider text-sky-blue mb-3">
                  {insight.type}
                </span>
                {insight.featured && (
                  <span className="inline-block ml-2 px-2 py-0.5 bg-blue/10 rounded text-xs text-blue font-medium">
                    Featured
                  </span>
                )}
                <h3 className="text-white font-semibold mb-2 group-hover:text-sky-blue transition-colors">
                  {insight.title}
                </h3>
                <p className="text-white/50 text-sm leading-relaxed">
                  {insight.excerpt}
                </p>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
