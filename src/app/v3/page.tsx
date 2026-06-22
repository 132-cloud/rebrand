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
import { FooterCTA } from "@/components/sections/home/FooterCTA";

export default function V3GuidePage() {
  return (
    <div className="theme-guide">
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
      <FooterCTA />
    </div>
  );
}
