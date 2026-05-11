import { Metadata } from "next";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Careers",
  description: "Join the Nymbus team and help shape the future of banking.",
};

export default function CareersPage() {
  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-24">
      <div className="container-site">
        <ScrollReveal>
          <div className="max-w-3xl">
            <h1 className="text-[2.5rem] md:text-[3.5rem] font-bold mb-6">
              Careers at Nymbus
            </h1>
            <p className="text-white/60 text-lg leading-relaxed mb-8">
              We&apos;re building the future of banking. Join a team of
              innovators, engineers, and strategists who are transforming how
              financial institutions serve their communities.
            </p>
            <Button
              href="https://www.glassdoor.com/Overview/Working-at-NYMBUS-EI_IE1910104.11,17.htm"
              variant="primary"
              external
            >
              View Open Positions
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
