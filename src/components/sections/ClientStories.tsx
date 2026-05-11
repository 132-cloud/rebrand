"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { Button } from "@/components/ui/Button";

const stories = [
  {
    client: "ZYNLO Bank",
    headline:
      "Digital-First ZYNLO Delivers $163M+ in Deposits for PeoplesBank",
    summary:
      "ZYNLO broke even in two years, affirming PeoplesBank's decision to transition fully to a Nymbus Core in 2025.",
    challenge:
      "Growing deposits beyond existing markets and personalizing customer offerings post-acquisition—all while constrained by an outdated core.",
    solution:
      "PeoplesBank partnered with Nymbus to launch ZYNLO, a digital-only bank built on a sidecar core. This approach allowed the bank to innovate outside the constraints of its legacy system.",
    outcome:
      "The sidecar core became a testing ground for innovation, delivering superior customer experiences and setting the stage for long-term transformation.",
    quote:
      '"Only Nymbus provided us a comprehensive strategy to quickly introduce a new digital-only effort."',
    quotee: "Brian Canina, Chief Financial Officer, PeoplesBank",
  },
  {
    client: "Peoples Bank",
    headline:
      "PeoplesBank Becomes Largest U.S. Community Bank to Fully Adopt a Modern Core with Nymbus",
    summary:
      "The Nymbus Banking Platform delivers a faster, easier, and more secure solution that enhances customers' in-branch and digital experiences.",
    challenge:
      "Headquartered in Holyoke, Massachusetts with assets exceeding $4.4 billion, PeoplesBank required a fintech partner to best serve the institution's customers and support continued growth.",
    solution:
      "The Nymbus Banking Platform was built to empower community banks with enterprise-grade technology while maintaining their competitive advantages.",
    outcome:
      "In June 2025, PeoplesBank successfully converted its core banking system to Nymbus' single, cloud-native, API-first solution—the largest modern core conversion by a U.S. community bank.",
    quote:
      '"The successful go-live affirmed our decision to modernize our entire banking infrastructure."',
    quotee: "Thomas Senecal, President & CEO, PeoplesBank",
  },
  {
    client: "Locality Bank",
    headline:
      "Building from Scratch: Locality Bank Reaches $120M in Assets in Year One",
    summary:
      "Partnership enables Locality to offer robust solutions founded on speed, flexibility, and meaningful growth.",
    challenge:
      "South Florida's small businesses were underserved. Access to funding was slow, and traditional banks weren't structured to solve their day-to-day challenges.",
    solution:
      "Instead of forcing a legacy system to adapt, Locality Bank started fresh. They partnered with Nymbus to build a bank focused entirely on the needs of local entrepreneurs.",
    outcome:
      "$120 Million in Assets achieved in just one year. $70 Million in Loans delivered. 4.4x Lower CAC through focused efforts.",
    quote:
      '"In just one year, Locality accomplished incredible milestones."',
    quotee: "Keith Costello, CEO, Locality Bank",
  },
  {
    client: "Inspire",
    headline:
      "How Inspire Credit Union Turned Digital Banking Into a 5-Star Experience",
    summary:
      "Through Nymbus partnership, Inspire Federal Credit Union continuously provides best-in-class online and mobile banking experiences.",
    challenge:
      "In a competitive landscape dominated by larger regional players, Inspire Credit Union needed to stand out with digital tools to match their relationship-first approach.",
    solution:
      "Inspire partnered with Nymbus to rebuild its foundation. By adopting the Nymbus Core in 2019, Inspire aligned its operations with evolving member needs.",
    outcome:
      "Inspire's partnership with Nymbus has enabled the credit union to compete effectively with larger institutions by offering best-in-class digital tools.",
    quote:
      '"Our goal is to provide a member experience that\'s simple, consistent, and intuitive—wherever they interact with us."',
    quotee: "Inspire Federal Credit Union",
  },
];

export function ClientStories() {
  const [activeStory, setActiveStory] = useState(0);

  return (
    <section className="section-padding bg-charcoal">
      <div className="container-site">
        <ScrollReveal>
          <h3 className="text-white text-lg font-semibold text-center mb-8">
            Client Stories
          </h3>
        </ScrollReveal>

        {/* Tab Navigation */}
        <ScrollReveal delay={0.1}>
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {stories.map((story, index) => (
              <button
                key={story.client}
                onClick={() => setActiveStory(index)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeStory === index
                    ? "bg-white/10 text-white border border-white/20"
                    : "text-white/50 hover:text-white hover:bg-white/5"
                }`}
              >
                {story.client}
              </button>
            ))}
          </div>
        </ScrollReveal>

        {/* Story Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeStory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="max-w-5xl mx-auto"
          >
            <div className="bg-charcoal-dark rounded-2xl border border-white/10 overflow-hidden">
              <div className="p-8 md:p-12">
                {/* Headline */}
                <h2 className="text-xl md:text-2xl font-bold text-white mb-4">
                  {stories[activeStory].headline}
                </h2>
                <p className="text-white/60 mb-8">
                  {stories[activeStory].summary}
                </p>

                {/* Challenge / Solution / Outcome */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  <div>
                    <h4 className="text-sky-blue text-sm font-bold uppercase tracking-wider mb-2">
                      Challenge
                    </h4>
                    <p className="text-white/50 text-sm leading-relaxed">
                      {stories[activeStory].challenge}
                    </p>
                  </div>
                  <div>
                    <h4 className="text-sky-blue text-sm font-bold uppercase tracking-wider mb-2">
                      Solution
                    </h4>
                    <p className="text-white/50 text-sm leading-relaxed">
                      {stories[activeStory].solution}
                    </p>
                  </div>
                  <div>
                    <h4 className="text-sky-blue text-sm font-bold uppercase tracking-wider mb-2">
                      Outcome
                    </h4>
                    <p className="text-white/50 text-sm leading-relaxed">
                      {stories[activeStory].outcome}
                    </p>
                  </div>
                </div>

                {/* Quote */}
                <div className="border-l-2 border-sky-blue pl-6 mb-6">
                  <p className="text-white/70 italic text-lg leading-relaxed">
                    {stories[activeStory].quote}
                  </p>
                  <p className="text-white/40 text-sm mt-2">
                    — {stories[activeStory].quotee}
                  </p>
                </div>

                {/* CTA */}
                <div className="pt-4">
                  <Button href="/lp/contact-us/" variant="outline" size="sm">
                    Contact Us
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
