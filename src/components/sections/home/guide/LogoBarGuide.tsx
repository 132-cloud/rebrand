"use client";

import { useEffect, useRef } from "react";

const logos = [
  { src: "/images/logo bar logos/Vector.png", alt: "Client logo" },
  { src: "/images/logo bar logos/FECU.png", alt: "FECU" },
  { src: "/images/logo bar logos/Gesa.png", alt: "Gesa Credit Union" },
  { src: "/images/logo bar logos/VantageWest.png", alt: "Vantage West" },
  { src: "/images/logo bar logos/Vector-1.png", alt: "Client logo" },
];

export function LogoBarGuide() {
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let animationId: number;
    let offset = 0;
    const speed = 0.25; // px per frame

    function animate() {
      offset -= speed;
      const halfWidth = track!.scrollWidth / 2;
      if (Math.abs(offset) >= halfWidth) {
        offset = 0;
      }
      track!.style.transform = `translateX(${offset}px)`;
      animationId = requestAnimationFrame(animate);
    }

    animationId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationId);
  }, []);

  // Triple the logos for a wider seamless loop
  const allLogos = [...logos, ...logos, ...logos, ...logos];

  return (
    <section id="logo-bar" className="relative pt-[30px] pb-6 bg-white overflow-hidden -mt-1">
      {/* Tagline above logos */}
      <p className="text-center text-neutral-500 text-sm font-medium tracking-wide mt-0 mb-4 px-4">
        Trusted by top financial institutions
      </p>

      {/* Left fade */}
      <div className="absolute left-0 top-0 bottom-0 w-32 md:w-48 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
      {/* Right fade */}
      <div className="absolute right-0 top-0 bottom-0 w-32 md:w-48 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

      {/* Scrolling track */}
      <div ref={trackRef} className="flex will-change-transform" style={{ marginTop: "20px" }}>
        {allLogos.map((logo, i) => (
          <div
            key={`${logo.alt}-${i}`}
            className="flex-shrink-0 flex items-center justify-center px-10 md:px-14"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={logo.src}
              alt={logo.alt}
              className="h-4 md:h-5 w-auto opacity-60 grayscale"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
