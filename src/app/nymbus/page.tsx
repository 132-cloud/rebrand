"use client";

import { useEffect } from "react";
import { HeroNew } from "@/components/sections/home/HeroNew";
import { LogoBar } from "@/components/sections/home/LogoBar";
import { StatsBar } from "@/components/sections/home/StatsBar";
import { PlatformOverviewNew } from "@/components/sections/home/PlatformOverviewNew";
import { GovernedAIApproach } from "@/components/sections/home/GovernedAIApproach";
import { ActivationPathsNew } from "@/components/sections/home/ActivationPathsNew";
import { GovernedAISection } from "@/components/sections/home/GovernedAISection";
import { ArchitectureDiagram } from "@/components/sections/home/ArchitectureDiagram";
import { CustomerQuotes } from "@/components/sections/home/CustomerQuotes";
import { ResourcesSection } from "@/components/sections/home/ResourcesSection";
import { FooterCTAGuide } from "@/components/sections/home/guide/FooterCTAGuide";

export default function NymbusPage() {
  useEffect(() => {
    document.body.classList.add("is-nymbus-theme");
    return () => {
      document.body.classList.remove("is-nymbus-theme");
    };
  }, []);

  return (
    <div className="theme-nymbus">
      <HeroNew />
      <LogoBar />
      <StatsBar />
      <PlatformOverviewNew />
      <GovernedAIApproach />
      <ActivationPathsNew />
      <GovernedAISection />
      <ArchitectureDiagram />
      <CustomerQuotes />
      <ResourcesSection />
      <FooterCTAGuide />
    </div>
  );
}
