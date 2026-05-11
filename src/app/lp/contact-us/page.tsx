import { Metadata } from "next";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { HubSpotForm } from "@/components/ui/HubSpotForm";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with the Nymbus team.",
};

export default function ContactUsPage() {
  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-24">
      <div className="container-site">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <ScrollReveal>
            <div>
              <h2 className="caption text-sky-blue mb-3">Contact Us</h2>
              <h1 className="text-[2rem] md:text-[2.5rem] font-bold mb-6">
                Let&apos;s Talk
              </h1>
              <p className="text-white/60 text-lg leading-relaxed mb-8">
                Whether you&apos;re ready to modernize your core, launch a new
                digital brand, or explore growth strategies, we&apos;re here to
                help.
              </p>
              <div className="space-y-4 text-white/50 text-sm">
                <p>
                  <strong className="text-white">Headquarters</strong>
                  <br />
                  208 N Laura St.
                  <br />
                  8th and 9th floor
                  <br />
                  Jacksonville, FL 32202
                </p>
                <p>
                  <strong className="text-white">Phone</strong>
                  <br />
                  <a href="tel:+18552107874" className="hover:text-white transition-colors">
                    +1 (855) 210-7874
                  </a>
                </p>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="bg-charcoal rounded-2xl border border-white/10 p-8">
              <HubSpotForm formId="ae6ef02e-4e24-456c-8694-bf55bfeb1a7a" />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
