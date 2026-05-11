"use client";

import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { Button } from "@/components/ui/Button";

const features = [
  {
    title: "Holistic Integration",
    description:
      "Core banking, digital services, lending, onboarding, and analytics in one unified, scalable platform.",
  },
  {
    title: "Data-Driven Decisions",
    description:
      "Leverage real-time insights and advanced reporting tools to make smarter, faster choices.",
  },
  {
    title: "Managed Services That Scale",
    description:
      "Offload operational burdens with expert support for compliance, back-office tasks, and operational efficiency.",
  },
  {
    title: "Cloud-Powered Performance",
    description:
      "Built on the world's largest public cloud for unmatched security, resilience, and disaster recovery.",
  },
  {
    title: "Compliance Made Simple",
    description:
      "Navigate complex regulatory requirements with proactive tools and expert support, ensuring you stay protected.",
  },
];

export function PlatformSection() {
  return (
    <section className="section-padding">
      <div className="container-site">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text Content */}
          <ScrollReveal direction="up">
            <div>
              <h2 className="caption text-sky-blue mb-3">Banking Platform</h2>
              <h1 className="text-[2rem] md:text-[2.5rem] font-bold mb-6">
                Built for What&apos;s Next
              </h1>
              <p className="text-white/60 text-lg mb-8 leading-relaxed">
                Legacy systems weren&apos;t built for today&apos;s challenges. Nymbus was.
                With real-time data, built-in support, and the power of the cloud,
                we give U.S. banks and credit unions the tools to move faster,
                serve better, and grow without limits.
              </p>

              <ul className="space-y-5 mb-8">
                {features.map((feature) => (
                  <li key={feature.title} className="flex items-start gap-3">
                    <div className="w-5 h-5 mt-0.5 rounded-full bg-gradient-to-br from-sky-blue to-blue flex items-center justify-center flex-shrink-0">
                      <svg
                        className="w-3 h-3 text-white"
                        fill="none"
                        viewBox="0 0 12 12"
                      >
                        <path
                          d="M2 6l3 3 5-5"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <div>
                      <strong className="text-white text-sm font-semibold">
                        {feature.title}
                      </strong>
                      <span className="text-white/50 text-sm ml-1">
                        {feature.description}
                      </span>
                    </div>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-4">
                <Button href="/lp/request-demo/" variant="primary">
                  Request A Demo
                </Button>
                <Button href="/lp/contact-us/" variant="outline">
                  Learn more
                </Button>
              </div>
            </div>
          </ScrollReveal>

          {/* Visual */}
          <ScrollReveal direction="right" delay={0.2}>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-charcoal-medium to-charcoal rounded-2xl border border-white/10 overflow-hidden">
                {/* Code snippet visual */}
                <div className="p-6">
                  <div className="font-mono text-xs text-white/40 leading-relaxed">
                    <pre className="overflow-hidden">
{`{
  "ruleType": "BankingCORE",
  "actions": ["request", "commitTransaction"],
  "beans": [
    {
      "type": "bank.data.transaction.header",
      "rootid": 12345,
      "reference": {
        "transactioncustomerid": {
          "type": "customer",
          "ref": 4223
        }
      }
    }
  ]
}`}
                    </pre>
                  </div>
                </div>
                {/* Teller screen overlay */}
                <div className="absolute bottom-4 right-4 w-2/3 aspect-[4/3] bg-charcoal-dark rounded-lg border border-white/10 p-3">
                  <div className="h-2 w-20 bg-white/10 rounded mb-2" />
                  <div className="h-2 w-16 bg-white/5 rounded mb-4" />
                  <div className="grid grid-cols-3 gap-2">
                    {[...Array(6)].map((_, i) => (
                      <div key={i} className="h-6 bg-white/5 rounded" />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
