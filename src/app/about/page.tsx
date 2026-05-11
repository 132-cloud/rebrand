import { Metadata } from "next";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { CTAFooter } from "@/components/sections/CTAFooter";

export const metadata: Metadata = {
  title: "About Nymbus",
  description:
    "Nymbus is a fintech company providing modern core banking and digital solutions for banks and credit unions.",
};

export default function AboutPage() {
  return (
    <>
      <section className="pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="container-site">
          <ScrollReveal>
            <div className="max-w-3xl">
              <h1 className="text-[2.5rem] md:text-[3.5rem] font-bold mb-6">
                About Nymbus
              </h1>
              <p className="text-white/60 text-lg leading-relaxed mb-6">
                Nymbus is a fintech company that provides a modern banking
                platform for banks and credit unions. Our cloud-native
                technology and managed services enable financial institutions to
                launch new digital brands, modernize their core, and grow
                without limits.
              </p>
              <p className="text-white/60 text-lg leading-relaxed">
                Headquartered in Jacksonville, Florida, Nymbus serves community
                banks and credit unions across the United States with a
                comprehensive suite of products including core banking, digital
                banking, onboarding, lending, and data analytics.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="section-padding bg-charcoal">
        <div className="container-site">
          <ScrollReveal>
            <h2 className="text-2xl md:text-3xl font-bold mb-8">Leadership</h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Placeholder leadership cards */}
            {[
              "Executive Team",
              "Board of Directors",
              "Advisory Board",
              "Investors",
            ].map((group, index) => (
              <ScrollReveal key={group} delay={index * 0.1}>
                <div className="p-6 rounded-xl border border-white/5 bg-charcoal-dark/50">
                  <h3 className="text-white font-semibold mb-2">{group}</h3>
                  <p className="text-white/50 text-sm">
                    View our {group.toLowerCase()}.
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <CTAFooter />
    </>
  );
}
