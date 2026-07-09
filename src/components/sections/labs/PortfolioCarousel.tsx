"use client";

import { useState } from "react";

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
  const [activeIndex, setActiveIndex] = useState(0);
  const [modalBrand, setModalBrand] = useState<Brand | null>(null);

  const goLeft = () => {
    setActiveIndex((prev) => (prev === 0 ? brands.length - 1 : prev - 1));
  };

  const goRight = () => {
    setActiveIndex((prev) => (prev === brands.length - 1 ? 0 : prev + 1));
  };

  // Get visible cards: active + up to 3 to the right
  const getVisibleIndices = () => {
    const indices: number[] = [];
    for (let i = 0; i < Math.min(4, brands.length); i++) {
      indices.push((activeIndex + i) % brands.length);
    }
    return indices;
  };

  const visibleIndices = getVisibleIndices();

  return (
    <div className="bg-[#141414] py-16 md:py-24 -mx-[calc((100vw-100%)/2)] px-[calc((100vw-100%)/2)]">
      {/* Header */}
      <div className="container-site mb-8">
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
              onClick={goLeft}
              className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 hover:border-white/40 transition-colors"
            >
              <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
              </svg>
            </button>
            <button
              aria-label="Next"
              onClick={goRight}
              className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 hover:border-white/40 transition-colors"
            >
              <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Carousel */}
      <div className="container-site">
        <div
          className="flex gap-3 items-stretch h-[420px] md:h-[480px]"
          role="list"
          aria-label="Brand portfolio"
        >
          {visibleIndices.map((brandIndex, posIndex) => {
            const brand = brands[brandIndex];
            const isActive = posIndex === 0;

            return (
              <button
                key={brand.brandName}
                onClick={() => {
                  if (isActive) {
                    setModalBrand(brand);
                  } else {
                    setActiveIndex(brandIndex);
                  }
                }}
                className={`
                  relative overflow-hidden rounded-lg transition-all duration-500 ease-out
                  text-left cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50
                  ${isActive
                    ? "flex-[2.2] md:flex-[2.5]"
                    : "flex-[0.6] md:flex-[0.7]"
                  }
                `}
                role="listitem"
                aria-label={`${brand.brandName} — ${brand.descriptor}`}
              >
                {/* Image */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={brand.image}
                  alt={`${brand.brandName} website`}
                  className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 ${
                    isActive ? "object-top" : "object-center"
                  }`}
                />

                {/* Gradient overlay */}
                <div className={`absolute inset-0 transition-opacity duration-500 ${
                  isActive
                    ? "bg-gradient-to-t from-black/90 via-black/20 to-transparent"
                    : "bg-gradient-to-t from-black/80 via-black/30 to-black/10"
                }`} />

                {/* Active card content (bottom) */}
                {isActive && (
                  <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                    {/* Badges row */}
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-green-400 text-[11px] font-bold border border-green-400/40 px-2 py-0.5 rounded">
                        LIVE
                      </span>
                      <span className="text-white/50 text-[11px]">{brand.institution}</span>
                    </div>

                    {/* Brand name */}
                    <h3 className="text-white text-2xl md:text-3xl font-bold tracking-wide mb-2">
                      {brand.brandName}
                    </h3>

                    {/* Description */}
                    <p className="text-white/80 text-sm leading-relaxed mb-3 max-w-md">
                      {brand.playLine}
                    </p>

                    {/* Stat + action row */}
                    <div className="flex items-center gap-4">
                      <span className="text-white text-sm font-bold">{brand.resultStat}</span>
                      {brand.caseUrl && (
                        <a
                          href={brand.caseUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="inline-flex items-center gap-1.5 text-xs font-semibold text-white/70 hover:text-white transition-colors no-underline"
                        >
                          Visit brand
                          <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                          </svg>
                        </a>
                      )}
                    </div>
                  </div>
                )}

                {/* Inactive card: just brand name vertically or at bottom */}
                {!isActive && (
                  <div className="absolute bottom-0 left-0 right-0 p-3 md:p-4">
                    <h3 className="text-white text-xs md:text-sm font-bold tracking-wide text-center">
                      {brand.brandName}
                    </h3>
                  </div>
                )}
              </button>
            );
          })}
        </div>

        {/* Dots indicator */}
        <div className="flex items-center justify-center gap-1.5 mt-6">
          {brands.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIndex(idx)}
              className={`rounded-full transition-all duration-300 ${
                idx === activeIndex
                  ? "w-6 h-2 bg-white"
                  : "w-2 h-2 bg-white/30 hover:bg-white/50"
              }`}
              aria-label={`Go to brand ${idx + 1}`}
            />
          ))}
        </div>
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
