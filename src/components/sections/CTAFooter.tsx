import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { Button } from "@/components/ui/Button";

export function CTAFooter() {
  return (
    <section className="section-padding">
      <div className="container-site">
        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto">
            <h1 className="text-[2rem] md:text-[2.5rem] font-bold mb-4">
              Get Started{" "}
              <em className="not-italic text-sky-blue">Now</em>
            </h1>
            <p className="text-white/60 text-lg mb-8">
              Request a demo or get in touch.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                href="https://www.nymbus.com/lp/request-demo/"
                variant="primary"
                size="lg"
              >
                Request A Demo
              </Button>
              <Button
                href="https://www.nymbus.com/lp/contact-us/"
                variant="outline"
                size="lg"
              >
                Contact Us
              </Button>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
