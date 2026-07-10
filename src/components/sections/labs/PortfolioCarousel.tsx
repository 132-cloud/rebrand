"use client";

import { useState, useCallback } from "react";

// ─── Brand Data ──────────────────────────────────────────────────────────────

interface Brand {
  brandName: string;
  logo: string;
  logoScale?: number;
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
    logo: "/images/logos/Pillur.svg",
    logoScale: 3,
    institution: "MSU Federal Credit Union",
    descriptor: "Banking for small businesses",
    playLine: "Serving growing small businesses",
    resultStat: "10,000+ accounts in 12 months",
    image: "/images/labs/pillur.png",
    caseUrl: "https://pillur.org/",
  },
  {
    brandName: "HUSTL",
    logo: "/images/logos/Cinefi.svg",
    institution: "Gesa Credit Union",
    descriptor: "Banking for gig workers",
    playLine: "Reach underserved freelancers and side-hustlers",
    resultStat: "Launched in under 6 months",
    image: "/images/labs/hustl.png",
    caseUrl: "https://hustlfinancial.com/",
  },
  {
    brandName: "ZYNLO",
    logo: "/images/logos/Zynlo.svg",
    institution: "Vantage West Credit Union",
    descriptor: "Digital-first deposit growth",
    playLine: "Pull deposits from a younger digital audience",
    resultStat: "$50M+ in deposits",
    image: "/images/labs/zynlo.png",
    caseUrl: "https://zynlobank.com/",
  },
  {
    brandName: "VALORFI",
    logo: "/images/logos/ValorFi.svg",
    institution: "Partner institution",
    descriptor: "Banking for veterans and military",
    playLine: "Serve a community with purpose-built banking",
    resultStat: "5,000+ accounts in first quarter",
    image: "/images/labs/valorfi.png",
    caseUrl: "https://valorfiheroes.com/",
  },
  {
    brandName: "ALUMNIFI",
    logo: "/images/logos/AlumniFi.svg",
    institution: "Partner institution",
    descriptor: "Alumni-powered banking",
    playLine: "Turn alumni networks into depositors",
    resultStat: "270% deposit growth YoY",
    image: "/images/labs/alumnifi.png",
    caseUrl: "https://alumnifi.org/",
  },
  {
    brandName: "COLLEGIATE",
    logo: "/images/logos/Collegiate.svg",
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
  const [isAnimating, setIsAnimating] = useState(false);
  const [modalBrand, setModalBrand] = useState<Brand | null>(null);

  const navigate = useCallback((newIndex: number) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveIndex(newIndex);
    setTimeout(() => setIsAnimating(false), 600);
  }, [isAnimating]);

  const goLeft = () => {
    navigate(activeIndex === 0 ? brands.length - 1 : activeIndex - 1);
  };

  const goRight = () => {
    navigate(activeIndex === brands.length - 1 ? 0 : activeIndex + 1);
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
          <h2 className="text-[2.5rem] md:text-[3.25rem] font-bold leading-[1.1] tracking-[-0.02em] text-white max-w-xl">
            We ship brands that grow. Here are a few.
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
              <div
                key={`pos-${posIndex}`}
                className={`
                  relative overflow-hidden rounded-lg
                  transition-[flex] duration-[600ms] cubic-bezier(0.4, 0, 0.2, 1)
                  ${isActive ? "flex-[2.2] md:flex-[2.5]" : "flex-[0.6] md:flex-[0.7]"}
                `}
              >
                {/* Inner content wrapper with fade animation */}
                <button
                  onClick={() => {
                    if (isActive) {
                      setModalBrand(brand);
                    } else {
                      navigate(brandIndex);
                    }
                  }}
                  className="absolute inset-0 w-full h-full text-left cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
                  aria-label={`${brand.brandName} — ${brand.descriptor}`}
                  role="listitem"
                >
                  {/* Image */}
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={brand.image}
                    alt={`${brand.brandName} website`}
                    className={`
                      absolute inset-0 w-full h-full object-cover
                      transition-[object-position,transform] duration-[600ms] cubic-bezier(0.4, 0, 0.2, 1)
                      ${isActive ? "object-top scale-100" : "object-center scale-105"}
                    `}
                  />

                  {/* Gradient overlay */}
                  <div className={`
                    absolute inset-0
                    transition-opacity duration-[600ms] cubic-bezier(0.4, 0, 0.2, 1)
                    ${isActive
                      ? "bg-gradient-to-t from-black/90 via-black/20 to-transparent"
                      : "bg-gradient-to-t from-black/80 via-black/40 to-black/20"
                    }
                  `} />

                  {/* Active card content */}
                  <div className={`
                    absolute bottom-0 left-0 right-0 p-6 md:p-8
                    transition-[opacity,transform] duration-[600ms] cubic-bezier(0.4, 0, 0.2, 1)
                    ${isActive ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"}
                  `}>
                    <span className="text-white/50 text-[11px] block mb-2">{brand.institution}</span>

                    <h3 className="text-white text-2xl md:text-3xl font-bold tracking-wide mb-2">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={brand.logo} alt={brand.brandName} className="w-auto brightness-0 invert" style={{ height: `${(brand.logoScale || 1) * 28}px` }} />
                    </h3>

                    <p className="text-white/80 text-sm leading-relaxed mb-3 max-w-md">
                      {brand.playLine}
                    </p>

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

                  {/* Inactive card label */}
                  <div className={`
                    absolute bottom-0 left-0 right-0 p-3 md:p-4
                    transition-[opacity,transform] duration-[600ms] cubic-bezier(0.4, 0, 0.2, 1)
                    ${!isActive ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2 pointer-events-none"}
                  `}>
                    <h3 className="text-white text-xs md:text-sm font-bold tracking-wide text-center">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={brand.logo} alt={brand.brandName} className="w-auto mx-auto brightness-0 invert" style={{ height: `${(brand.logoScale || 1) * 16}px` }} />
                    </h3>
                  </div>
                </button>
              </div>
            );
          })}
        </div>

        {/* Dots indicator */}
        <div className="flex items-center justify-center gap-1.5 mt-6">
          {brands.map((_, idx) => (
            <button
              key={idx}
              onClick={() => navigate(idx)}
              className={`
                rounded-full
                transition-all duration-[400ms] cubic-bezier(0.4, 0, 0.2, 1)
                ${idx === activeIndex
                  ? "w-6 h-2 bg-white"
                  : "w-2 h-2 bg-white/30 hover:bg-white/50"
                }
              `}
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
          <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />

          <div
            className="relative bg-[#1a1a1a] rounded-xl max-w-lg w-full shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setModalBrand(null)}
              className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full bg-black/60 flex items-center justify-center hover:bg-black/80 transition-colors"
              aria-label="Close"
            >
              <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="h-[220px] overflow-hidden relative">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={modalBrand.image}
                alt={`${modalBrand.brandName} website`}
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] via-transparent to-transparent" />
              <div className="absolute bottom-4 left-6">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={modalBrand.logo} alt={modalBrand.brandName} className="h-8 w-auto brightness-0 invert" />
              </div>
            </div>

            <div className="p-6 pt-2">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-white/50 text-sm">{modalBrand.institution}</span>
              </div>

              <p className="text-white/90 text-sm leading-relaxed mb-4">{modalBrand.playLine}</p>

              <div className="flex flex-wrap gap-2 mb-5">
                {["Strategy", "Brand", "Launch", "Growth"].map((chip) => (
                  <span key={chip} className="px-3 py-1 text-xs font-medium rounded-full bg-white/10 text-white/80 border border-white/10">
                    {chip}
                  </span>
                ))}
              </div>

              <div className="p-4 rounded-lg bg-white/5 border border-white/10 mb-5">
                <p className="text-white/40 text-xs uppercase tracking-wider mb-1">Headline result</p>
                <p className="text-white text-xl font-bold">{modalBrand.resultStat}</p>
              </div>

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
