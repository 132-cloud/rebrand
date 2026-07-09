"use client";

import { useRef, useState } from "react";

// ─── Brand Data ──────────────────────────────────────────────────────────────

interface Brand {
  brandName: string;
  institution: string;
  descriptor: string;
  playLine: string;
  resultStat: string;
  image: string;
  caseUrl?: string;
}

const brands: Brand[] = [
  {
    brandName: "PILLUR",
    institution: "MSU Federal Credit Union",
    descriptor: "Banking for small businesses",
    playLine: "Serve SMBs the primary brand cannot reach",
    resultStat: "10,000+ accounts in 12 months",
    image: "/images/labs/pillur.png",
    caseUrl: "https://pillur.org/",
  },
  {
    brandName: "HUSTL",
    institution: "Gesa Credit Union",
    descriptor: "Banking for gig workers",
    playLine: "Reach underserved freelancers and side-hustlers",
    resultStat: "Launched in under 6 months",
    image: "/images/labs/hustl.png",
    caseUrl: "https://hustlfinancial.com/",
  },
  {
    brandName: "ZYNLO",
    institution: "Vantage West Credit Union",
    descriptor: "Digital-first deposit growth",
    playLine: "Pull deposits from a younger digital audience",
    resultStat: "$50M+ in deposits",
    image: "/images/labs/zynlo.png",
    caseUrl: "https://zynlobank.com/",
  },
  {
    brandName: "VALORFI",
    institution: "Partner institution",
    descriptor: "Banking for veterans and military",
    playLine: "Serve a community with purpose-built banking",
    resultStat: "5,000+ accounts in first quarter",
    image: "/images/labs/valorfi.png",
    caseUrl: "https://valorfiheroes.com/",
  },
  {
    brandName: "ALUMNIFI",
    institution: "Partner institution",
    descriptor: "Alumni-powered banking",
    playLine: "Turn alumni networks into depositors",
    resultStat: "270% deposit growth YoY",
    image: "/images/labs/alumnifi.png",
    caseUrl: "https://alumnifi.org/",
  },
  {
    brandName: "COLLEGIATE",
    institution: "Partner institution",
    descriptor: "Banking built for students",
    playLine: "Enter the student market with a purpose-built brand",
    resultStat: "Fastest student acquisition in segment",
    image: "/images/labs/collegiate.png",
    caseUrl: "https://collegiatecu.org/",
  },
];

// ─── Component ───────────────────────────────────────────────────────────────

export function PortfolioCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [modalBrand, setModalBrand] = useState<Brand | null>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const scroll = (dir: "left" | "right") => {
    if (scrollRef.current) {
      const cardWidth = 300;
      scrollRef.current.scrollBy({ left: dir === "left" ? -cardWidth * 2 : cardWidth * 2, behavior: "smooth" });
    }
  };

  return (
    <div className="bg-[#141414] py-16 md:py-24 -mx-[calc((100vw-100%)/2)] px-[calc((100vw-100%)/2)]">
      {/* Header */}
      <div className="container-site mb-6">
        <p className="text-[#e5e5e5] text-xs font-semibold uppercase tracking-widest mb-3">
          Live banking brands
        </p>
        <div className="flex items-end justify-between gap-6">
          <h2 className="text-[1.5rem] md:text-[2rem] font-bold leading-tight tracking-[-0.02em] text-white max-w-xl">
            Agencies pitch. We ship brands that grow. Here are a few.
          </h2>
          {/* Navigation arrows */}
          <div className="flex gap-2 flex-shrink-0">
            <button
              aria-label="Previous"
              onClick={() => scroll("left")}
              className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 hover:border-white/40 transition-colors"
            >
              <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
              </svg>
            </button>
            <button
              aria-label="Next"
              onClick={() => scroll("right")}
              className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 hover:border-white/40 transition-colors"
            >
              <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Netflix-style carousel track */}
      <div
        ref={scrollRef}
        className="flex gap-2 overflow-x-auto overflow-y-visible scrollbar-hide px-[calc(max(1.5rem,(100vw-1140px)/2))] py-8 snap-x snap-mandatory"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        role="list"
        aria-label="Brand portfolio"
      >
        {brands.map((brand, index) => (
          <button
            key={brand.brandName}
            onClick={() => setModalBrand(brand)}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            className={`
              relative flex-shrink-0 w-[260px] md:w-[300px] aspect-[16/9] snap-start rounded-md overflow-hidden
              transition-all duration-300 ease-out text-left group cursor-pointer
              focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50
              ${hoveredIndex === index ? "scale-[1.3] z-30 shadow-2xl shadow-black/80 rounded-t-md rounded-b-none" : "z-10"}
              ${hoveredIndex !== null && hoveredIndex !== index ? "opacity-60" : ""}
            `}
            role="listitem"
            aria-label={`${brand.brandName} — ${brand.descriptor}`}
            style={{ transformOrigin: index === 0 ? "left center" : index === brands.length - 1 ? "right center" : "center center" }}
          >
            {/* Card image */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={brand.image}
              alt={`${brand.brandName} website`}
              className="w-full h-full object-cover object-top"
            />

            {/* Dark gradient overlay (always visible, stronger on hover) */}
            <div className={`absolute inset-0 transition-opacity duration-300 ${
              hoveredIndex === index
                ? "bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-100"
                : "bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-100"
            }`} />

            {/* Bottom info (always visible) */}
            <div className="absolute bottom-0 left-0 right-0 p-3">
              <h3 className="text-white text-sm font-bold tracking-wide">
                {brand.brandName}
              </h3>
              <p className={`text-white/70 text-xs transition-opacity duration-200 ${
                hoveredIndex === index ? "opacity-100" : "opacity-0"
              }`}>
                {brand.descriptor}
              </p>
            </div>

            {/* Expanded info panel (Netflix-style bottom dropdown on hover) */}
            {hoveredIndex === index && (
              <div className="absolute top-full left-0 right-0 bg-[#1a1a1a] p-3 rounded-b-md shadow-2xl shadow-black/80 z-40">
                <div className="flex items-center gap-2 mb-2">
                  {/* Play-style button */}
                  <span className="w-7 h-7 rounded-full bg-white flex items-center justify-center flex-shrink-0">
                    <svg className="w-3.5 h-3.5 text-[#141414] ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </span>
                  {/* Info circle */}
                  <span className="w-7 h-7 rounded-full border-2 border-white/40 flex items-center justify-center flex-shrink-0 hover:border-white transition-colors">
                    <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>
                  </span>
                  <span className="ml-auto text-[10px] text-green-400 font-semibold border border-white/20 px-1.5 py-0.5 rounded">
                    LIVE
                  </span>
                </div>
                <p className="text-white/80 text-[11px] leading-relaxed mb-1.5">{brand.playLine}</p>
                <div className="flex items-center gap-2">
                  <span className="text-white text-[11px] font-bold">{brand.resultStat}</span>
                  <span className="text-white/40 text-[11px]">·</span>
                  <span className="text-white/50 text-[11px]">{brand.institution}</span>
                </div>
              </div>
            )}
          </button>
        ))}
      </div>

      {/* Case Modal */}
      {modalBrand && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
          onClick={() => setModalBrand(null)}
          role="dialog"
          aria-modal="true"
          aria-label={`${modalBrand.brandName} case study`}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />

          {/* Modal */}
          <div
            className="relative bg-[#1a1a1a] rounded-xl max-w-lg w-full shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close */}
            <button
              onClick={() => setModalBrand(null)}
              className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full bg-black/60 flex items-center justify-center hover:bg-black/80 transition-colors"
              aria-label="Close"
            >
              <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Brand hero image */}
            <div className="h-[220px] overflow-hidden relative">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={modalBrand.image}
                alt={`${modalBrand.brandName} website`}
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] via-transparent to-transparent" />
              <div className="absolute bottom-4 left-6">
                <h3 className="text-3xl font-bold text-white tracking-wide">{modalBrand.brandName}</h3>
              </div>
            </div>

            <div className="p-6 pt-2">
              {/* Meta row */}
              <div className="flex items-center gap-3 mb-4">
                <span className="text-green-400 text-sm font-bold">LIVE</span>
                <span className="text-white/50 text-sm">{modalBrand.institution}</span>
              </div>

              {/* Description */}
              <p className="text-white/90 text-sm leading-relaxed mb-4">{modalBrand.playLine}</p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-5">
                {["Strategy", "Brand", "Launch", "Growth"].map((chip) => (
                  <span key={chip} className="px-3 py-1 text-xs font-medium rounded-full bg-white/10 text-white/80 border border-white/10">
                    {chip}
                  </span>
                ))}
              </div>

              {/* Result stat */}
              <div className="p-4 rounded-lg bg-white/5 border border-white/10 mb-5">
                <p className="text-white/40 text-xs uppercase tracking-wider mb-1">Headline result</p>
                <p className="text-white text-xl font-bold">{modalBrand.resultStat}</p>
              </div>

              {/* CTA */}
              {modalBrand.caseUrl && (
                <a
                  href={modalBrand.caseUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-white text-[#141414] text-sm font-bold rounded-md hover:bg-white/90 transition-colors no-underline"
                >
                  Visit the brand
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
