import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { Button } from "@/components/ui/Button";

interface FooterCTAGuideProps {
  heading?: string;
  subtitle?: string;
  buttonText?: string;
  buttonHref?: string;
}

export function FooterCTAGuide({
  heading,
  subtitle,
  buttonText = "Talk to Nymbus",
  buttonHref = "/contact/",
}: FooterCTAGuideProps) {
  const isExternal = buttonHref.startsWith("http");
  return (
    <section
      className="relative py-32 md:py-44 lg:py-56 overflow-hidden bg-black"
    >
      {/* Video background */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover">
          <source src="/images/footer-cta-bg.webm" type="video/webm" />
        </video>
      </div>

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
              className="font-bold leading-[1.05] tracking-tight text-center"
              style={{ fontSize: "clamp(3rem, 6vw, 85px)", color: "#171216" }}
            >
              {heading || "Built for a bigger platform."}
            </h2>
            {subtitle && (
              <p className="mt-6 text-lg md:text-xl text-neutral-500 max-w-3xl mx-auto">
                {subtitle}
              </p>
            )}
            <div className="flex flex-wrap justify-center gap-4 mt-10">
              <Button href={buttonHref} variant="primary" size="lg" className="footer-cta-btn" external={isExternal}>
                {buttonText}
              </Button>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
