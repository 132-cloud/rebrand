import { HeroNew } from "@/components/sections/home/HeroNew";
import { LogoBar } from "@/components/sections/home/LogoBar";
import { GovernedAIApproach } from "@/components/sections/home/GovernedAIApproach";
import { PlatformOverviewNew } from "@/components/sections/home/PlatformOverviewNew";
import { PrimaryCoreSection } from "@/components/sections/home/PrimaryCoreSection";
import { GrowthSection } from "@/components/sections/home/GrowthSection";
import { ManagedServicesSection } from "@/components/sections/home/ManagedServicesSection";
import { GovernedAISection } from "@/components/sections/home/GovernedAISection";
import { ArchitectureDiagram } from "@/components/sections/home/ArchitectureDiagram";
import { ActivationPathsNew } from "@/components/sections/home/ActivationPathsNew";
import { ProofSection } from "@/components/sections/home/ProofSection";
import { CustomerQuotes } from "@/components/sections/home/CustomerQuotes";
import { ResourcesSection } from "@/components/sections/home/ResourcesSection";
import { FooterCTA } from "@/components/sections/home/FooterCTA";

export default function V4Page() {
  return (
    <>
      <HeroNew />
      <LogoBar />
      <GovernedAIApproach />
      <PlatformOverviewNew />
      <PrimaryCoreSection />
      <GrowthSection />
      <ManagedServicesSection />
      <GovernedAISection />
      <ArchitectureDiagram />
      <ActivationPathsNew />
      <ProofSection />
      <CustomerQuotes />
      <ResourcesSection />
      <FooterCTA />
    </>
  );
}
