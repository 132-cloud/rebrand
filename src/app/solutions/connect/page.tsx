import { Metadata } from "next";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { Button } from "@/components/ui/Button";
import { CTAFooter } from "@/components/sections/CTAFooter";

export const metadata: Metadata = {
  title: "Connect | Data Platform",
  description:
    "Unlock new revenue opportunities and gain a deeper, real-time view of your institution with a fully connected data platform.",
};

export default function ConnectPage() {
  return (
    <>
      <section className="pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal>
              <div>
                <h2 className="caption text-sky-blue mb-3">Nymbus Connect</h2>
                <h1 className="text-[2.5rem] md:text-[3.5rem] font-bold mb-6">
                  Unlock Your{" "}
                  <span className="text-sky-blue">Data.</span>
                </h1>
                <p className="text-white/60 text-lg leading-relaxed mb-8">
                  Unlock new revenue opportunities and gain a deeper, real-time
                  view of your institution with a fully connected data platform.
                  APIs to unify core system and partner integrations.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button href="/lp/request-demo/" variant="primary" size="lg">
                    Request A Demo
                  </Button>
                  <Button href="/lp/contact-us/" variant="outline" size="lg">
                    Contact Us
                  </Button>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right" delay={0.2}>
              <div className="aspect-square bg-gradient-to-br from-charcoal-medium to-charcoal rounded-2xl border border-white/10 flex items-center justify-center">
                <div className="w-24 h-24 bg-gradient-to-br from-sky-blue/20 to-blue/20 rounded-2xl flex items-center justify-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-sky-blue to-blue rounded-xl" />
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
      <CTAFooter />
    </>
  );
}
