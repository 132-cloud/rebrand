import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { Button } from "@/components/ui/Button";

const services = [
  { title: "Call center support", description: "Customer service capacity when your institution needs to move faster.", span: "col-span-1" },
  { title: "Onboarding", description: "Operational support to help customers and members get started.", span: "col-span-2" },
  { title: "Fraud operations", description: "Support for fraud monitoring, review, and response.", span: "col-span-1" },
  { title: "KYC, KYB, and AML", description: "Compliance operations built for banking workflows.", span: "col-span-1" },
  { title: "Back-office operations", description: "Hands-on support for the work behind the experience.", span: "col-span-1" },
  { title: "Nymbus Labs", description: "Strategy and marketing support to help launch, grow, and optimize new banking models.", span: "col-span-3" },
];

export function ManagedServices() {
  return (
    <section className="section-padding">
      <div className="container-site">
        <ScrollReveal>
          <div className="max-w-5xl mb-12">
            <h4 className="text-[2rem] md:text-[2.15rem] mb-4 leading-tight">
              <span className="font-bold">Operations support built for faster launches.</span>{" "}
              <span className="font-normal text-white/60">Launch, scale, and run new banking programs with managed services that reduce vendor coordination, operational drag, and internal staffing burden.</span>
            </h4>
          </div>
        </ScrollReveal>

        {/* Bento grid: 1/2, 1/1/1, 3 */}
        <ScrollReveal delay={0.1}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {services.map((service) => (
              <div
                key={service.title}
                className={`${service.span === "col-span-2" ? "md:col-span-2" : service.span === "col-span-3" ? "md:col-span-3 min-h-[240px]" : "md:col-span-1"}
                  p-6 md:p-8 rounded-xl border border-white/5 bg-charcoal/30 hover:border-white/15 transition-all duration-300`}
              >
                <h4 className={`text-white font-semibold mb-1.5 ${service.span === "col-span-3" ? "text-[20px]" : "text-sm"}`}>
                  {service.title}
                </h4>
                <p className={`text-white/40 leading-relaxed ${service.span === "col-span-3" ? "text-[20px]" : "text-sm"}`}>
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.3}>
          <div className="mt-10">
            <Button href="/products/managed-services/" variant="outline">
              Explore managed services
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
