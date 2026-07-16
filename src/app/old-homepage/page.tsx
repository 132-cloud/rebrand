import { HeroSection } from "@/components/sections/HeroSection";
import { ClientLogos } from "@/components/sections/ClientLogos";
import { PlatformSection } from "@/components/sections/PlatformSection";
import { ProductsGrid } from "@/components/sections/ProductsGrid";
import { CoreSection } from "@/components/sections/CoreSection";
import { DigitalBankingSection } from "@/components/sections/DigitalBankingSection";
import { InsightsPreview } from "@/components/sections/InsightsPreview";
import { ClientStories } from "@/components/sections/ClientStories";
import { FooterCTAGuide } from "@/components/sections/home/guide/FooterCTAGuide";

export default function OldHomePage() {
  return (
    <>
      <HeroSection />
      <ClientLogos />
      <PlatformSection />
      <ProductsGrid />
      <CoreSection />
      <DigitalBankingSection />
      <InsightsPreview />
      <ClientStories />
      <FooterCTAGuide heading="Get Started Now" buttonText="Request A Demo" buttonHref="/request-demo/" />
    </>
  );
}
