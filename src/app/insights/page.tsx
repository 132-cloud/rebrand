import { Metadata } from "next";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { CTAFooter } from "@/components/sections/CTAFooter";
import { InsightsGrid } from "./InsightsGrid";

export const metadata: Metadata = {
  title: "Insights",
  description:
    "Explore insights, whitepapers, case studies, and thought leadership from Nymbus.",
};

export default function InsightsPage() {
  return (
    <>
      <section className="pt-32 pb-8 md:pt-40 md:pb-12">
        <div className="container-site">
          <ScrollReveal>
            <h1 className="text-[2.5rem] md:text-[3.5rem] font-bold mb-4">
              Insights
            </h1>
            <p className="text-white/60 text-lg max-w-2xl">
              Explore our latest thinking on banking innovation, digital
              transformation, and growth strategies for financial institutions.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <InsightsGrid />
      <CTAFooter />
    </>
  );
}
