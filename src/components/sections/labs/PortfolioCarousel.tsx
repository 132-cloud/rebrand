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

  const scroll = (dir: "left" | "right") => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: dir === "left" ? -440 : 440, behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Header with arrows */}
      <div className="container-site mb-8">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="text-[1.75rem] md:text-[2.25rem] font-bold leading-tight tracking-[-0.02em] text-neutral-900 mb-3">
              The work.
            </h2>
            <p className="text-neutral-500 text-base md:text-lg leading-relaxed max-w-xl">
              Agencies pitch. We ship brands that grow. Here are a few.
            </p>
          </div>
          {/* Arrows */}
          <div className="flex gap-2 flex-shrink-0">
            <button
              aria-label="Previous"
              onClick={() => scroll("left")}
              className="w-10 h-10 rounded-full border border-neutral-200 flex items-center justify-center hover:bg-neutral-50 transition-colors"
            >
              <svg className="w-4 h-4 text-neutral-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
              </svg>
            </button>
            <button
              aria-label="Next"
              onClick={() => scroll("right")}
              className="w-10 h-10 rounded-full border border-neutral-200 flex items-center justify-center hover:bg-neutral-50 transition-colors"
            >
              <svg className="w-4 h-4 text-neutral-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Carousel track */}
      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto overflow-y-visible scrollbar-hide ml-[max(1.5rem,calc((100vw-1140px)/2-24px))] pl-6 pr-6 py-6 snap-x snap-mandatory"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        role="list"
        aria-label="Brand portfolio"
      >
        {brands.map((brand) => (
          <button
            key={brand.brandName}
            onClick={() => setModalBrand(brand)}
            className="flex-shrink-0 w-[340px] md:w-[400px] h-[480px] snap-start rounded-2xl flex flex-col overflow-hidden
              shadow-[0_0_20px_0_rgba(0,0,0,0.08)] hover:shadow-[0_0_32px_0_rgba(0,0,0,0.14)] hover:scale-[1.03]
              transition-all duration-200 text-left group cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-blue bg-white"
            role="listitem"
            aria-label={`${brand.brandName} — ${brand.descriptor}`}
          >
            {/* Image */}
            <div className="relative flex-1 overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={brand.image}
                alt={`${brand.brandName} website`}
                className="w-full h-full object-cover object-top"
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-150 flex flex-col justify-end p-5">
                <p className="text-white/60 text-xs uppercase tracking-wider mb-1">{brand.institution}</p>
                <p className="text-white text-sm font-medium mb-2">{brand.playLine}</p>
                <p className="text-white text-lg font-bold">{brand.resultStat}</p>
              </div>
            </div>

            {/* Bottom: brand info */}
            <div className="p-5 flex-shrink-0">
              <h3 className="text-neutral-900 text-lg font-bold tracking-[-0.01em] mb-1">
                {brand.brandName}
              </h3>
              <p className="text-neutral-500 text-sm">{brand.descriptor}</p>
            </div>
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
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />

          {/* Modal */}
          <div
            className="relative bg-white rounded-3xl max-w-lg w-full shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close */}
            <button
              onClick={() => setModalBrand(null)}
              className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full bg-white/90 flex items-center justify-center hover:bg-white transition-colors shadow-sm"
              aria-label="Close"
            >
              <svg className="w-4 h-4 text-neutral-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Brand hero image */}
            <div className="h-[200px] overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={modalBrand.image}
                alt={`${modalBrand.brandName} website`}
                className="w-full h-full object-cover object-top"
              />
            </div>

            <div className="p-8">
              {/* Brand name */}
              <h3 className="text-2xl font-bold text-neutral-900 mb-1">{modalBrand.brandName}</h3>
              <p className="text-neutral-500 text-sm mb-4">{modalBrand.descriptor}</p>

              {/* Institution */}
              <p className="text-neutral-400 text-xs uppercase tracking-wider mb-3">{modalBrand.institution}</p>

              {/* The play */}
              <p className="text-neutral-900 text-base font-medium mb-4">{modalBrand.playLine}</p>

              {/* Chips */}
              <div className="flex flex-wrap gap-2 mb-6">
                {["Strategy", "Brand", "Launch", "Growth"].map((chip) => (
                  <span key={chip} className="px-3 py-1 text-xs font-semibold rounded-full bg-neutral-100 text-neutral-700">
                    {chip}
                  </span>
                ))}
              </div>

              {/* Result */}
              <div className="p-4 rounded-xl bg-neutral-50 mb-6">
                <p className="text-neutral-400 text-xs uppercase tracking-wider mb-1">Headline result</p>
                <p className="text-neutral-900 text-xl font-bold">{modalBrand.resultStat}</p>
              </div>

              {/* CTA */}
              {modalBrand.caseUrl && (
                <a
                  href={modalBrand.caseUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sm font-semibold text-neutral-900 hover:text-blue transition-colors no-underline"
                >
                  Visit the brand
                  <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
