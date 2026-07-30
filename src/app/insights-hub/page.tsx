"use client";

import { useState } from "react";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import Link from "next/link";
import Image from "next/image";

// ─── Categories ──────────────────────────────────────────────────────────────

const CATEGORIES = ["All", "Webinar", "Article", "Blog", "Podcast", "Whitepaper", "Report", "Case Study"] as const;
type Category = (typeof CATEGORIES)[number];

// ─── Sample Content (placeholder) ────────────────────────────────────────────

const featuredStory = {
  category: "News",
  headline: "25 CORES DEPLOYED, AND COUNTING.",
  subhead: "Nymbus crossed 25 live core and digital bank launches in 2026, here's what that milestone means for institutions still deciding when to move.",
  byline: "by Jamie Ellsworth, Chief Growth Officer",
  date: "Jul 14, 2026",
  readTime: "6 min read",
  href: "#",
  image: "/images/insights-hero.jpg",
};

const contentItems = [
  { category: "Webinar", headline: "How community banks compress core migration timelines without added risk", date: "Jul 14, 2026", readTime: "6 min read", href: "#", image: "/images/insights-card-1.jpg" },
  { category: "Podcast", headline: "Navigating regulatory challenges in fintech partnerships", date: "Sep 10, 2026", readTime: "22 min listen", href: "#", image: "/images/insights-card-2.jpg" },
  { category: "Article", headline: "Strategies for seamless digital transformation in traditional banks", date: "Aug 2, 2026", readTime: "8 min read", href: "#", image: "/images/insights-card-3.jpg" },
  { category: "Webinar", headline: "Why managed services are the unlock for digital brand launches", date: "Jul 14, 2026", readTime: "6 min read", href: "#", image: "/images/insights-card-4.jpg" },
  { category: "Podcast", headline: "Building banking infrastructure for the next decade", date: "Sep 10, 2026", readTime: "22 min listen", href: "#", image: "/images/insights-card-5.jpg" },
  { category: "Whitepaper", headline: "The economics of parallel core deployment", date: "Aug 2, 2026", readTime: "8 min read", href: "#", image: "/images/insights-card-6.jpg" },
  { category: "Blog", headline: "State of digital banking: 2025 market data", date: "Jul 14, 2026", readTime: "6 min read", href: "#", image: "/images/insights-card-7.jpg" },
  { category: "Case Study", headline: "MSUFCU expands business banking on Nymbus", date: "Sep 10, 2026", readTime: "22 min listen", href: "#", image: "/images/insights-card-8.jpg" },
  { category: "Article", headline: "From intent to funded: rethinking account opening", date: "Aug 2, 2026", readTime: "8 min read", href: "#", image: "/images/insights-card-9.jpg" },
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
    <div className="bg-white text-[#171216]">
      {/* ─── Featured Story ───────────────────────────────────────────────── */}
      <section className="relative pt-36 pb-16 md:pt-44 md:pb-20 border-b border-neutral-200 overflow-hidden bg-black">
        {/* Background gradient */}
        <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-br from-[#28283a] via-[#697cb2] to-[#fcfbfc] opacity-80" />
          <div className="absolute inset-0 bg-[url('/images/noise.png')] opacity-[0.03] mix-blend-overlay" />
        </div>
        
        <div className="container-site relative z-10">
          <ScrollReveal>
            <div className="flex flex-col md:flex-row items-start gap-10 md:gap-16">
              {/* Text */}
              <div className="flex-1 max-w-2xl">
                <div className="inline-block mb-4 px-5 py-2 bg-black/80 backdrop-blur-sm rounded-full">
                  <p className="text-white text-[11px] font-semibold uppercase tracking-wider">
                    {featuredStory.category}
                  </p>
                </div>
                <Link href={featuredStory.href} className="no-underline group">
                  <h1 className="text-[2.5rem] md:text-[3.5rem] font-bold leading-[1.1] tracking-tight text-[#171216] mb-6 group-hover:text-[#42526e] transition-colors uppercase">
                    {featuredStory.headline}
                  </h1>
                </Link>
                <p className="text-[#171216] text-base md:text-lg leading-relaxed mb-6 max-w-xl">
                  {featuredStory.subhead}
                </p>
                <div className="flex items-center gap-2 text-[#171216] text-sm">
                  <p className="font-bold">{featuredStory.byline}</p>
                  <span className="w-1 h-1 rounded-full bg-black" />
                  <p>{featuredStory.date}</p>
                  <span className="w-1 h-1 rounded-full bg-black" />
                  <p>{featuredStory.readTime}</p>
                </div>
              </div>
              {/* Image */}
              <div className="flex-1 w-full md:max-w-[500px] relative">
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src={featuredStory.image}
                    alt={featuredStory.headline}
                    fill
                    className="object-cover"
                  />
                  {/* Play button overlay */}
                  <div className="absolute inset-0 flex items-end justify-start p-6">
                    <button className="w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center hover:bg-white transition-colors group">
                      <svg width="14" height="16" viewBox="0 0 14 16" fill="none" className="ml-0.5">
                        <path d="M13 7.13397C13.6667 7.51887 13.6667 8.48112 13 8.86602L2 15.1962C1.33333 15.5811 0.5 15.0999 0.5 14.3301L0.5 1.66987C0.5 0.900066 1.33333 0.418947 2 0.803847L13 7.13397Z" fill="black"/>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ─── Filter Bar ───────────────────────────────────────────────────── */}
      <section className="sticky top-[87px] md:top-[87px] z-30 bg-white border-b border-neutral-200 py-4">
        <div className="container-site">
          <div className="flex items-center justify-between gap-4">
            {/* Category tabs */}
            <div className="flex items-center gap-2 overflow-x-auto scrollbar-hide">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveFilter(cat)}
                  className={`px-5 py-2 text-sm font-semibold rounded-full whitespace-nowrap transition-colors ${
                    activeFilter === cat
                      ? "bg-black/80 text-white"
                      : "bg-neutral-100/60 text-neutral-700 hover:text-black hover:bg-neutral-200/60"
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
                placeholder="Search Insights"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-80 px-5 py-2.5 text-sm border-none rounded-full bg-neutral-100/60 text-[#171216] outline-none focus:bg-neutral-200/60 transition-colors pl-12"
              />
              <svg className="absolute left-5 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Content Grid ─────────────────────────────────────────────────── */}
      <section className="py-16 md:py-20">
        <div className="container-site">
          {filteredItems.length === 0 ? (
            <p className="text-neutral-400 text-sm text-center py-20">No results found.</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
              {filteredItems.map((item, i) => (
                <Link key={i} href={item.href} className="group no-underline">
                  {/* Thumbnail */}
                  <div className="relative aspect-[16/10] rounded-xl bg-neutral-50 mb-4 overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.headline}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  {/* Category badge */}
                  <div className="inline-block mb-3 px-4 py-1.5 bg-black rounded-full">
                    <p className="text-white text-[11px] font-semibold uppercase tracking-wider">
                      {item.category}
                    </p>
                  </div>
                  {/* Headline */}
                  <h3 className="text-[#171216] text-xl md:text-2xl leading-snug font-bold group-hover:text-[#42526e] transition-colors mb-3">
                    {item.headline}
                  </h3>
                  {/* Meta */}
                  <div className="flex items-center gap-2 text-neutral-500 text-sm">
                    <p>{item.date}</p>
                    <span className="w-1 h-1 rounded-full bg-neutral-400" />
                    <p>{item.readTime}</p>
                  </div>
                </Link>
              ))}
            </div>
          )}

          {/* Pagination */}
          <div className="mt-16 flex items-center justify-center gap-2">
            <button className="w-9 h-9 rounded-full bg-neutral-100/60 hover:bg-neutral-200/60 transition-colors flex items-center justify-center">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-neutral-600">
                <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <button className="w-9 h-9 rounded-full bg-black text-white font-bold text-sm flex items-center justify-center">
              1
            </button>
            <button className="w-9 h-9 rounded-full hover:bg-neutral-100/60 transition-colors font-bold text-sm text-neutral-600 flex items-center justify-center">
              2
            </button>
            <button className="w-9 h-9 rounded-full hover:bg-neutral-100/60 transition-colors font-bold text-sm text-neutral-600 flex items-center justify-center">
              3
            </button>
            <button className="w-9 h-9 rounded-full hover:bg-neutral-100/60 transition-colors font-bold text-sm text-neutral-600 flex items-center justify-center">
              4
            </button>
            <button className="w-9 h-9 rounded-full hover:bg-neutral-100/60 transition-colors font-bold text-sm text-neutral-600 flex items-center justify-center">
              5
            </button>
            <button className="w-9 h-9 rounded-full bg-neutral-100/60 hover:bg-neutral-200/60 transition-colors flex items-center justify-center">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-neutral-600">
                <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
