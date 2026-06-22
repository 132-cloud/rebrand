"use client";

import { useEffect } from "react";
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

export default function V3GuidePage() {
  // Add theme class to body so header/footer outside main can also be styled
  useEffect(() => {
    document.body.classList.add("is-guide-theme");
    return () => {
      document.body.classList.remove("is-guide-theme");
    };
  }, []);

  return (
    <div className="theme-guide relative">
      {/* Floating chrome blob - right side, 30% down */}
      <div
        className="absolute right-0 z-20 pointer-events-none"
        style={{ top: "30%" }}
      >
        <img
          src="/images/17 - SPECTRA - 3D LIQUID METAL CHROME BLOB SHAPES COLLECTION 1.png"
          alt=""
          className="w-[300px] md:w-[400px] lg:w-[500px] translate-x-[50%]"
        />
      </div>

      {/* Floating chrome blob - left side, 60% down */}
      <div
        className="absolute left-0 z-20 pointer-events-none"
        style={{ top: "60%" }}
      >
        <img
          src="/images/13 - SPECTRA - 3D LIQUID METAL CHROME BLOB SHAPES COLLECTION 2.png"
          alt=""
          className="w-[150px] md:w-[200px] lg:w-[250px] -translate-x-[50%]"
        />
      </div>

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
