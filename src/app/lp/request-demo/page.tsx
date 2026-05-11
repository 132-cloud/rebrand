import { Metadata } from "next";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { HubSpotForm } from "@/components/ui/HubSpotForm";

export const metadata: Metadata = {
  title: "Request a Demo",
  description: "Request a demo of the Nymbus Banking Platform.",
};

export default function RequestDemoPage() {
  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-24">
      <div className="container-site">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <ScrollReveal>
            <div>
              <h2 className="caption text-sky-blue mb-3">Request a Demo</h2>
              <h1 className="text-[2rem] md:text-[2.5rem] font-bold mb-6">
                See the Nymbus Platform in Action
              </h1>
              <p className="text-white/60 text-lg leading-relaxed mb-6">
                Discover how Nymbus can help your institution grow with modern
                core banking, digital solutions, and managed services.
              </p>
              <ul className="space-y-3">
                {[
                  "Cloud-native core banking",
                  "Digital banking & onboarding",
                  "Vertical banking strategies",
                  "Managed operations & compliance",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-white/60 text-sm">
                    <div className="w-1.5 h-1.5 bg-sky-blue rounded-full" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="bg-charcoal rounded-2xl border border-white/10 p-8">
              <HubSpotForm formId="2cfe28d6-4f84-48c0-9576-46e7bbd1f9ed" />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
