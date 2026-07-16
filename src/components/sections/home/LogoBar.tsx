"use client";

import { useEffect, useRef } from "react";

const logos = [
  { src: "/images/logo bar logos/Vector.png", alt: "MSUFCU", url: "https://www.msufcu.org" },
  { src: "/images/logo bar logos/FECU.png", alt: "First Entertainment Credit Union", url: "https://www.firstent.org" },
  { src: "/images/logo bar logos/Gesa.png", alt: "Gesa Credit Union", url: "https://www.gesa.com" },
  { src: "/images/logo bar logos/VantageWest.png", alt: "Vantage West Credit Union", url: "https://www.vantagewest.org" },
  { src: "/images/logo bar logos/Vector-1.png", alt: "PeoplesBank", url: "https://www.bankatpeoples.com" },
];

export function LogoBar() {
  const trackRef = useRef<HTMLDivElement>(null);
  const pausedRef = useRef(false);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let animationId: number;
    let offset = 0;
    const speed = 0.25; // px per frame

    function animate() {
      if (!pausedRef.current) {
        offset -= speed;
        const halfWidth = track!.scrollWidth / 2;
        if (Math.abs(offset) >= halfWidth) {
          offset = 0;
        }
        track!.style.transform = `translateX(${offset}px)`;
      }
      animationId = requestAnimationFrame(animate);
    }

    const handleMouseEnter = () => { pausedRef.current = true; };
    const handleMouseLeave = () => { pausedRef.current = false; };

    track.addEventListener("mouseenter", handleMouseEnter);
    track.addEventListener("mouseleave", handleMouseLeave);

    animationId = requestAnimationFrame(animate);
    return () => {
      cancelAnimationFrame(animationId);
      track.removeEventListener("mouseenter", handleMouseEnter);
      track.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  // Triple the logos for a wider seamless loop
  const allLogos = [...logos, ...logos, ...logos, ...logos];

  return (
    <section className="relative pt-0 pb-6 bg-white overflow-hidden -mt-1">
      {/* Tagline above logos */}
      <p className="text-center text-neutral-500 text-sm font-medium tracking-wide mt-0 mb-4 px-4">
        Trusted by top financial institutions
      </p>

      {/* Left fade */}
      <div className="absolute left-0 top-0 bottom-0 w-32 md:w-48 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
      {/* Right fade */}
      <div className="absolute right-0 top-0 bottom-0 w-32 md:w-48 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

      {/* Scrolling track */}
      <div ref={trackRef} className="relative z-20 flex will-change-transform cursor-pointer" style={{ marginTop: "20px" }}>
        {allLogos.map((logo, i) => (
          <a
            key={`${logo.alt}-${i}`}
            href={logo.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 flex items-center justify-center px-10 md:px-14 transition-opacity hover:opacity-80"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={logo.src}
              alt={logo.alt}
              className="h-4 md:h-5 w-auto opacity-60 grayscale pointer-events-none"
            />
          </a>
        ))}
      </div>
    </section>
  );
}
