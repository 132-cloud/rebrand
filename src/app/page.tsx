import { HeroNew } from "@/components/sections/home/HeroNew";
import { LogoBar } from "@/components/sections/home/LogoBar";
import { GovernedAIApproach } from "@/components/sections/home/GovernedAIApproach";
import { ProofSection } from "@/components/sections/home/ProofSection";
import { PlatformOverviewNew } from "@/components/sections/home/PlatformOverviewNew";
import { PlatformSection } from "@/components/sections/home/PlatformSection";
import { BankingTechnology } from "@/components/sections/home/BankingTechnology";
import { ManagedServicesNew } from "@/components/sections/home/ManagedServicesNew";
import { CustomerSegments } from "@/components/sections/home/CustomerSegments";
import { GovernedAISection } from "@/components/sections/home/GovernedAISection";
import { CustomerProofNew } from "@/components/sections/home/CustomerProofNew";
import { ActivationPathsNew } from "@/components/sections/home/ActivationPathsNew";
import { LabsSection } from "@/components/sections/home/LabsSection";
import { ResourcesSection } from "@/components/sections/home/ResourcesSection";
import { FooterCTA } from "@/components/sections/home/FooterCTA";

export default function HomePage() {
  return (
    <>
      <HeroNew />
      <LogoBar />
      <GovernedAIApproach />
      <ProofSection />
      <PlatformOverviewNew />
      <PlatformSection />
      <BankingTechnology />
      <ManagedServicesNew />
      <CustomerSegments />
      <GovernedAISection />
      <CustomerProofNew />
      <ActivationPathsNew />
      <LabsSection />
      <ResourcesSection />
      <FooterCTA />
    </>
  );
}
