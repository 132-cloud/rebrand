import { Metadata } from "next";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { Button } from "@/components/ui/Button";
import { CTAFooter } from "@/components/sections/CTAFooter";

export const metadata: Metadata = {
  title: "CUSO",
  description:
    "Nymbus CUSO provides credit unions with access to modern banking technology and shared services.",
};

export default function CUSOPage() {
  return (
    <>
      <section className="pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="container-site">
          <ScrollReveal>
            <div className="max-w-3xl">
              <h2 className="caption text-sky-blue mb-3">Nymbus CUSO</h2>
              <h1 className="text-[2.5rem] md:text-[3.5rem] font-bold mb-6">
                Credit Union Service Organization
              </h1>
              <p className="text-white/60 text-lg leading-relaxed mb-8">
                Nymbus CUSO provides credit unions with access to modern banking
                technology, shared services, and collaborative growth
                opportunities. Built by credit unions, for credit unions.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button href="/lp/contact-us/" variant="primary">
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
