"use client";

import { useEffect, useRef, useState } from "react";
import { HeroGuide } from "@/components/sections/home/guide/HeroGuide";
import { LogoBarGuide } from "@/components/sections/home/guide/LogoBarGuide";
import { StatsBar } from "@/components/sections/home/StatsBar";
import { PlatformOverviewNew } from "@/components/sections/home/PlatformOverviewNew";
import { GovernedAIApproach } from "@/components/sections/home/GovernedAIApproach";
import { ActivationPathsNew } from "@/components/sections/home/ActivationPathsNew";
import { GovernedAISectionGuide } from "@/components/sections/home/guide/GovernedAISectionGuide";
import { ArchitectureDiagramGuide } from "@/components/sections/home/guide/ArchitectureDiagramGuide";
import { CustomerQuotes } from "@/components/sections/home/CustomerQuotes";
import { ResourcesSection } from "@/components/sections/home/ResourcesSection";
import { FooterCTAGuide } from "@/components/sections/home/guide/FooterCTAGuide";

// Floating blob with parallax scroll effect
function FloatingBlob({
  src,
  className,
  style,
  speed = 0.15,
}: {
  src: string;
  className?: string;
  style?: React.CSSProperties;
  speed?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setOffset(window.scrollY);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      ref={ref}
      className={`absolute z-20 pointer-events-none ${className || ""}`}
      style={{
        ...style,
        transform: `translateY(${offset * speed}px)`,
        transition: "transform 0.1s linear",
      }}
    >
      <img src={src} alt="" className="w-full h-auto" />
    </div>
  );
}

export default function HomePage() {
  // Add theme class to body so header/footer outside main can also be styled
  useEffect(() => {
    document.body.classList.add("is-guide-theme");
    return () => {
      document.body.classList.remove("is-guide-theme");
    };
  }, []);

  return (
    <div className="theme-guide relative">
      {/* Floating chrome blob - left side of hero, 50% size */}
      <FloatingBlob
        src="/images/13 - SPECTRA - 3D LIQUID METAL CHROME BLOB SHAPES COLLECTION 2.png"
        className="left-0 w-[100px] md:w-[125px] lg:w-[150px] -translate-x-[40%]"
        style={{ top: "5%" }}
        speed={-0.08}
      />

      {/* Floating chrome blob - right side of hero, 50% size, higher */}
      <FloatingBlob
        src="/images/17 - SPECTRA - 3D LIQUID METAL CHROME BLOB SHAPES COLLECTION 1.png"
        className="right-0 w-[100px] md:w-[125px] lg:w-[150px] translate-x-[40%]"
        style={{ top: "2%" }}
        speed={-0.06}
      />

      {/* Floating chrome blob - right side, 30% down */}
      <FloatingBlob
        src="/images/17 - SPECTRA - 3D LIQUID METAL CHROME BLOB SHAPES COLLECTION 1.png"
        className="right-0 w-[300px] md:w-[400px] lg:w-[500px] translate-x-[50%]"
        style={{ top: "30%" }}
        speed={-0.12}
      />

      {/* Floating chrome blob - left side, 60% down */}
      <FloatingBlob
        src="/images/13 - SPECTRA - 3D LIQUID METAL CHROME BLOB SHAPES COLLECTION 2.png"
        className="left-0 w-[150px] md:w-[200px] lg:w-[250px] -translate-x-[50%]"
        style={{ top: "60%" }}
        speed={-0.18}
      />

      <HeroGuide />
      <LogoBarGuide />
      <StatsBar />
      <PlatformOverviewNew />
      <GovernedAIApproach />
      <ActivationPathsNew />
      <GovernedAISectionGuide />
      <ArchitectureDiagramGuide />
      <CustomerQuotes />
      <ResourcesSection />
      <FooterCTAGuide heading="THE PLATFORM TO BUILD AGAIN." />
    </div>
  );
}
