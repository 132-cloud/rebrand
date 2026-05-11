import { Metadata } from "next";
import Link from "next/link";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { Button } from "@/components/ui/Button";
import { CTAFooter } from "@/components/sections/CTAFooter";

export const metadata: Metadata = {
  title: "Digital Banking Solutions for Growth",
  description:
    "Scalable digital banking solutions to accelerate FI growth and innovation.",
};

const solutions = [
  {
    id: "core",
    title: "Core",
    tagline: "A modern core built to power your bank's strategy.",
    description:
      "A sophisticated modern banking core that adapts to your strategy with APIs and microservices for unmatched flexibility. Built on the cloud for security, resilience, and performance.",
    href: "/solutions/core/",
    features: [
      "Cloud-native architecture",
      "API-first design",
      "Real-time processing",
      "Multi-entity support",
    ],
  },
  {
    id: "launch",
    title: "Launch",
    tagline: "Launch vertical-focused retail strategies with ease.",
    description:
      "A complete solution for banks and credit unions to drive growth through secure, compliant, and cost-effective retail vertical strategies.",
    href: "/solutions/launch/",
    features: [
      "Pre-built vertical templates",
      "Managed compliance",
      "Full-service operations",
      "Rapid time-to-market",
    ],
  },
  {
    id: "connect",
    title: "Connect",
    tagline: "APIs to unify core system and partner integrations.",
    description:
      "Unlock new revenue opportunities and gain a deeper, real-time view of your institution with a fully connected data platform.",
    href: "/solutions/connect/",
    features: [
      "Unified data layer",
      "Real-time analytics",
      "Partner integrations",
      "Revenue insights",
    ],
  },
  {
    id: "digital",
    title: "Digital Banking",
    tagline: "Secure, scalable online banking with pre-built tools.",
    description:
      "Scalable and flexible web & mobile banking with seamless pre-integrated tools and responsive UI for consumer or business accounts.",
    href: "#digital",
    features: [
      "Responsive web & mobile",
      "Pre-integrated tools",
      "Consumer & business",
      "White-label ready",
    ],
  },
  {
    id: "onboard",
    title: "Onboard",
    tagline: "Expedite new account opening across mobile & web.",
    description:
      "Accelerate and simplify account openings with a fully digital and secure experience across web and mobile channels.",
    href: "#onboard",
    features: [
      "Digital KYC/KYB",
      "Multi-channel support",
      "Instant decisioning",
      "Compliance built-in",
    ],
  },
  {
    id: "levels",
    title: "Levels",
    tagline: "An enterprise-grade loyalty and rewards program.",
    description:
      "Level up with an enterprise-grade loyalty and rewards program that delivers meaningful achievements, gamified rewards, and earning tiers.",
    href: "/solutions/levels/",
    features: [
      "Gamified rewards",
      "Earning tiers",
      "Achievement system",
      "Engagement analytics",
    ],
  },
  {
    id: "smb",
    title: "Launch SMB",
    tagline: "SMB-focused vertical banking with digital solutions.",
    description:
      "SMB-focused vertical banking with a digital solution that combines onboarding, lending, and banking services.",
    href: "/solutions/smb/",
    features: [
      "SMB onboarding",
      "Business lending",
      "Cash flow tools",
      "Invoicing & payments",
    ],
  },
  {
    id: "operations",
    title: "Operations",
    tagline: "Offload back-office and support tasks at scale.",
    description:
      "Offload back-office, call center, and support tasks, enabling faster time to market with zero customer disruption.",
    href: "#operations",
    features: [
      "Call center support",
      "Back-office processing",
      "Fraud prevention",
      "Compliance monitoring",
    ],
  },
];

export default function SolutionsPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="container-site">
          <ScrollReveal>
            <div className="max-w-2xl">
              <h1 className="text-[2.5rem] md:text-[3.5rem] font-bold mb-4">
                Built for{" "}
                <span className="text-sky-blue">Growth.</span>
              </h1>
              <p className="text-white/60 text-lg leading-relaxed mb-8">
                Modern banking solutions designed to enable your financial
                institution&apos;s growth strategy.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button href="/lp/request-demo/" variant="primary">
                  Request a demo
                </Button>
                <Button href="/lp/contact-us/" variant="outline">
                  Contact us
                </Button>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="section-padding bg-charcoal">
        <div className="container-site">
          <div className="space-y-16">
            {solutions.map((solution, index) => (
              <ScrollReveal key={solution.id} delay={index * 0.05}>
                <div
                  id={solution.id}
                  className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center scroll-mt-24"
                >
                  <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                    <h2 className="text-2xl md:text-3xl font-bold mb-2">
                      {solution.title}
                    </h2>
                    <p className="text-sky-blue font-medium mb-4">
                      {solution.tagline}
                    </p>
                    <p className="text-white/60 leading-relaxed mb-6">
                      {solution.description}
                    </p>
                    <ul className="grid grid-cols-2 gap-3 mb-6">
                      {solution.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-center gap-2 text-white/50 text-sm"
                        >
                          <div className="w-1.5 h-1.5 bg-sky-blue rounded-full flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    {solution.href.startsWith("/") && (
                      <Link
                        href={solution.href}
                        className="text-sky-blue text-sm font-medium hover:text-blue-75 transition-colors"
                      >
                        Learn more →
                      </Link>
                    )}
                  </div>
                  <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                    <div className="aspect-[4/3] bg-gradient-to-br from-charcoal-medium to-charcoal-dark rounded-2xl border border-white/10 flex items-center justify-center">
                      <div className="w-16 h-16 bg-gradient-to-br from-sky-blue/20 to-blue/20 rounded-xl flex items-center justify-center">
                        <div className="w-8 h-8 bg-gradient-to-br from-sky-blue to-blue rounded-lg" />
                      </div>
                    </div>
                  </div>
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
