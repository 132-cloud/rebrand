import { Metadata } from "next";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { Button } from "@/components/ui/Button";
import { CTAFooter } from "@/components/sections/CTAFooter";

export const metadata: Metadata = {
  title: "Core Banking Platform",
  description:
    "A modern, cloud-native core banking platform built to power your bank's strategy with APIs and microservices.",
};

const features = [
  {
    title: "Cloud-Native Architecture",
    description:
      "Built from the ground up on the world's largest public cloud for unmatched security, resilience, and disaster recovery.",
  },
  {
    title: "API-First Design",
    description:
      "Open APIs and microservices architecture enables seamless integration with your existing tech stack and third-party partners.",
  },
  {
    title: "Real-Time Processing",
    description:
      "Process transactions in real-time with instant posting, immediate balance updates, and live reporting.",
  },
  {
    title: "Multi-Entity Support",
    description:
      "Enable multiple account structures for a single entity, supporting both traditional and digital-only banking models.",
  },
  {
    title: "Compliance Built-In",
    description:
      "Fully compliant with BSA, AML, and KYC requirements. Navigate complex regulatory requirements with proactive tools.",
  },
  {
    title: "Parallel Deployment",
    description:
      "Stand up Core in parallel to your existing core and tech stack. No rip-and-replace required.",
  },
];

const approaches = [
  {
    title: "Full Core Conversion",
    description:
      "Replace your legacy core entirely with a modern, cloud-native platform that scales with your institution.",
  },
  {
    title: "Sidecar Core",
    description:
      "Run Nymbus Core alongside your existing system to power new digital brands and vertical strategies.",
  },
  {
    title: "Progressive Migration",
    description:
      "Migrate products and services incrementally, reducing risk while modernizing at your own pace.",
  },
];

export default function CorePage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal>
              <div>
                <h2 className="caption text-sky-blue mb-3">Nymbus Core</h2>
                <h1 className="text-[2.5rem] md:text-[3.5rem] font-bold mb-6">
                  Your Core,{" "}
                  <span className="text-sky-blue">Your Way.</span>
                </h1>
                <p className="text-white/60 text-lg leading-relaxed mb-8">
                  A sophisticated modern banking core that adapts to your
                  strategy with APIs and microservices for unmatched flexibility.
                  Whether it&apos;s creating a new digital bank or modernizing a
                  legacy infrastructure, Nymbus Core is your fast track to
                  growth.
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

      {/* Features */}
      <section className="section-padding bg-charcoal">
        <div className="container-site">
          <ScrollReveal>
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
              Built for Modern Banking
            </h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <ScrollReveal key={feature.title} delay={index * 0.05}>
                <div className="p-6 rounded-xl border border-white/5 bg-charcoal-dark/50">
                  <div className="w-10 h-10 mb-4 rounded-lg bg-gradient-to-br from-sky-blue/20 to-blue/20 flex items-center justify-center">
                    <svg
                      className="w-5 h-5 text-sky-blue"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <h3 className="text-white font-semibold mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-white/50 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Approaches */}
      <section id="approaches" className="section-padding scroll-mt-24">
        <div className="container-site">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Choose Your Approach
              </h2>
              <p className="text-white/60 max-w-2xl mx-auto">
                Every institution is different. Nymbus Core supports multiple
                deployment strategies to match your timeline, risk tolerance, and
                growth objectives.
              </p>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {approaches.map((approach, index) => (
              <ScrollReveal key={approach.title} delay={index * 0.1}>
                <div className="p-8 rounded-2xl border border-white/10 bg-charcoal/50 text-center">
                  <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-gradient-to-br from-sky-blue/20 to-blue/20 flex items-center justify-center">
                    <span className="text-sky-blue font-bold">
                      {index + 1}
                    </span>
                  </div>
                  <h3 className="text-white font-semibold text-lg mb-3">
                    {approach.title}
                  </h3>
                  <p className="text-white/50 text-sm leading-relaxed">
                    {approach.description}
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
