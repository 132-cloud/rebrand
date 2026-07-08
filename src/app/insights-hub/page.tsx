"use client";

import { useState } from "react";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import Link from "next/link";

// ─── Categories ──────────────────────────────────────────────────────────────

const CATEGORIES = ["All", "Article", "Blog", "Case Study", "Podcast", "Report", "Webinar", "Whitepaper"] as const;
type Category = (typeof CATEGORIES)[number];

// ─── Sample Content (placeholder) ────────────────────────────────────────────

const featuredStory = {
  category: "News",
  headline: "25 cores deployed, and counting.",
  subhead: "Nymbus crossed 25 live core and digital bank launches in 2026, here's what that milestone means for institutions still deciding when to move.",
  byline: "by David Barone, Chief Strategy & Marketing Officer",
  date: "2025",
  readTime: "6 min",
  href: "#",
};

const contentItems = [
  { category: "Webinar", headline: "How parallel cores are reshaping community banking growth", date: "2025", readTime: "45 min", href: "#" },
  { category: "Article", headline: "The governed AI approach to banking automation", date: "2025", readTime: "8 min", href: "#" },
  { category: "Case Study", headline: "PeoplesBank modernizes its core with Nymbus", date: "2025", readTime: "5 min", href: "#" },
  { category: "Blog", headline: "Why managed services are the unlock for digital brand launches", date: "2025", readTime: "4 min", href: "#" },
  { category: "Podcast", headline: "Building banking infrastructure for the next decade", date: "2025", readTime: "32 min", href: "#" },
  { category: "Whitepaper", headline: "The economics of parallel core deployment", date: "2025", readTime: "12 min", href: "#" },
  { category: "Report", headline: "State of digital banking: 2025 market data", date: "2025", readTime: "15 min", href: "#" },
  { category: "Case Study", headline: "MSUFCU expands business banking on Nymbus", date: "2025", readTime: "5 min", href: "#" },
  { category: "Article", headline: "From intent to funded: rethinking account opening", date: "2025", readTime: "6 min", href: "#" },
];

// ─── Main Page ───────────────────────────────────────────────────────────────

export default function InsightsHubPage() {
  const [activeFilter, setActiveFilter] = useState<Category>("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredItems = contentItems.filter((item) => {
    const matchesCategory = activeFilter === "All" || item.category === activeFilter;
    const matchesSearch = !searchQuery || item.headline.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="bg-white text-neutral-900">
      {/* ─── Featured Story ───────────────────────────────────────────────── */}
      <section className="pt-36 pb-16 md:pt-44 md:pb-20 bg-neutral-50 border-b border-neutral-100">
        <div className="container-site">
          <ScrollReveal>
            <div className="flex flex-col md:flex-row items-start gap-10 md:gap-16">
              {/* Text */}
              <div className="flex-1">
                <p className="text-[#697CB2] text-[11px] font-semibold uppercase tracking-wider mb-3">
                  {featuredStory.category}
                </p>
                <Link href={featuredStory.href} className="no-underline group">
                  <h1 className="text-[2.25rem] md:text-[3rem] font-bold leading-[1.1] tracking-[-0.02em] text-neutral-900 mb-4 group-hover:text-[#697CB2] transition-colors">
                    {featuredStory.headline}
                  </h1>
                </Link>
                <p className="text-neutral-500 text-base md:text-lg leading-relaxed mb-6 max-w-xl">
                  {featuredStory.subhead}
                </p>
                <p className="text-neutral-400 text-sm">
                  {featuredStory.byline}
                </p>
                <p className="text-neutral-400 text-xs mt-1">
                  {featuredStory.date} · {featuredStory.readTime}
                </p>
              </div>
              {/* Image placeholder */}
              <div className="flex-1 w-full md:max-w-[400px]">
                <div className="aspect-[4/3] rounded-2xl bg-neutral-200 border border-neutral-200/60" />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ─── Filter Bar ───────────────────────────────────────────────────── */}
      <section className="sticky top-[76px] md:top-[80px] z-30 bg-white border-b border-neutral-100 py-4">
        <div className="container-site">
          <div className="flex items-center justify-between gap-4">
            {/* Category tabs */}
            <div className="flex items-center gap-1 overflow-x-auto scrollbar-hide">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveFilter(cat)}
                  className={`px-3 py-1.5 text-xs font-semibold rounded-full whitespace-nowrap transition-colors ${
                    activeFilter === cat
                      ? "bg-neutral-900 text-white"
                      : "text-neutral-500 hover:text-neutral-900 hover:bg-neutral-100"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
            {/* Search */}
            <div className="hidden md:block relative">
              <input
                type="text"
                placeholder="Search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-48 px-3 py-1.5 text-sm border border-neutral-200 rounded-lg bg-neutral-50 text-neutral-900 outline-none focus:border-neutral-400 transition-colors"
              />
              <svg className="absolute right-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-neutral-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Content Grid ─────────────────────────────────────────────────── */}
      <section className="py-12 md:py-16">
        <div className="container-site">
          {filteredItems.length === 0 ? (
            <p className="text-neutral-400 text-sm text-center py-20">No results found.</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredItems.map((item, i) => (
                <Link key={i} href={item.href} className="group no-underline">
                  {/* Thumbnail */}
                  <div className="aspect-[16/10] rounded-xl bg-neutral-100 border border-neutral-200/60 mb-4 overflow-hidden">
                    <div className="w-full h-full group-hover:scale-[1.02] transition-transform duration-300" />
                  </div>
                  {/* Category */}
                  <p className="text-[#697CB2] text-[10px] font-semibold uppercase tracking-wider mb-1.5">
                    {item.category}
                  </p>
                  {/* Headline */}
                  <h3 className="text-neutral-900 text-sm font-bold leading-snug group-hover:text-[#697CB2] transition-colors mb-1.5">
                    {item.headline}
                  </h3>
                  {/* Meta */}
                  <p className="text-neutral-400 text-xs">
                    {item.date} · {item.readTime}
                  </p>
                </Link>
              ))}
            </div>
          )}

          {/* Load more */}
          <div className="mt-14 text-center">
            <button className="px-6 py-2.5 text-sm font-semibold text-neutral-900 border border-neutral-300 rounded-full hover:bg-neutral-50 transition-colors">
              Load more
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
