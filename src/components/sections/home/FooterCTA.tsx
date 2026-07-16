import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { Button } from "@/components/ui/Button";

export function FooterCTA() {
  return (
    <section
      className="relative py-32 md:py-44 lg:py-56 overflow-hidden"
      style={{
        background:
          "radial-gradient(ellipse 120% 110% at 50% 100%, #ffffff 0%, #697CB2 40%, #000000 80%)",
      }}
    >
      {/* White gradient overlay: 0% opacity at 50% down, 100% opacity at bottom */}
      <div
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{
          background: "linear-gradient(to bottom, transparent 50%, white 100%)",
        }}
      />

      <div className="container-site relative z-10">
        <ScrollReveal>
          <div className="max-w-5xl mx-auto text-center">
            <h2
              className="font-bold leading-[1.05] tracking-tight text-white whitespace-nowrap"
              style={{ fontSize: "clamp(3rem, 6vw, 85px)" }}
            >
              Built for a bigger platform.
            </h2>
            <p className="mt-6 text-lg md:text-xl text-white/70 max-w-3xl mx-auto">
              One platform for core processing, managed services, digital banking, account opening, data, engagement, and governed AI workflows.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-10">
              <Button href="/contact/" variant="primary" size="lg">
                Talk to Nymbus
              </Button>
              <Button href="/platform/" variant="outline" size="lg">
                Explore the platform
              </Button>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
