import { HeroNew } from "@/components/sections/home/HeroNew";
import { ProofStrip } from "@/components/sections/home/ProofStrip";
import { PlatformOverview } from "@/components/sections/home/PlatformOverview";
import { QuoteCarousel } from "@/components/sections/home/QuoteCarousel";
import { ArchitectureDiagram } from "@/components/sections/home/ArchitectureDiagram";
import { ManagedServices } from "@/components/sections/home/ManagedServices";
import { ActivationPaths } from "@/components/sections/home/ActivationPaths";
import { AISection } from "@/components/sections/home/AISection";
import { CustomerProof } from "@/components/sections/home/CustomerProof";
import { FinalCTA } from "@/components/sections/home/FinalCTA";

export default function HomePage() {
  return (
    <>
      <HeroNew />
      <ProofStrip />
      <PlatformOverview />
      <QuoteCarousel />
      <ArchitectureDiagram />
      <ManagedServices />
      <ActivationPaths />
      <AISection />
      <CustomerProof />
      <FinalCTA />
    </>
  );
}
