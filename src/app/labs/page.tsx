import { Metadata } from "next";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { Button } from "@/components/ui/Button";
import { CTAFooter } from "@/components/sections/CTAFooter";

export const metadata: Metadata = {
  title: "Nymbus Labs",
  description:
    "A marketing, research and strategy team with a comprehensive model for developing, launching, and scaling new vertical banking offerings.",
};

export default function LabsPage() {
  return (
    <>
      <section className="pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="container-site">
          <ScrollReveal>
            <div className="max-w-3xl">
              <h2 className="caption text-sky-blue mb-3">Nymbus Labs</h2>
              <h1 className="text-[2.5rem] md:text-[3.5rem] font-bold mb-6">
                Where Strategy Meets Execution
              </h1>
              <p className="text-white/60 text-lg leading-relaxed mb-8">
                A marketing, research and strategy team with a comprehensive
                model for developing, launching, and scaling new vertical
                banking offerings. We help you identify the right niche, build
                the brand, and go to market.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button href="/lp/request-demo/" variant="primary">
                  Get Started
                </Button>
                <Button href="/lp/contact-us/" variant="outline">
                  Learn More
                </Button>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <CTAFooter />
    </>
  );
}
