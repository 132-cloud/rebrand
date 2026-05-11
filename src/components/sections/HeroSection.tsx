"use client";

import { Button } from "@/components/ui/Button";
import { WordFlip } from "@/components/animations/WordFlip";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import Image from "next/image";

const heroWords = [
  { text: "Thinking", colorClass: "text-yellow-300" },
  { text: "Growth", colorClass: "text-green-300" },
  { text: "Opportunity", colorClass: "text-purple-300" },
  { text: "Starts Now", colorClass: "text-blue" },
];

export function HeroSection() {
  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 lg:pt-44 lg:pb-32 overflow-hidden">
      <div className="container-site">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <ScrollReveal direction="up" delay={0.1}>
            <div className="max-w-xl lg:mt-8">
              <h1 className="text-[2.5rem] md:text-[3.5rem] lg:text-[4rem] font-bold leading-[0.95] tracking-tight mb-6">
                New{" "}
                <WordFlip words={heroWords} />
              </h1>
              <h3 className="text-lg md:text-xl text-white/70 font-normal leading-relaxed mb-8">
                We provide a fresh perspective on growth for banks and credit
                unions with the technology and support to make it happen.
              </h3>
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

          {/* Hero Image - Locality Bank App */}
          <ScrollReveal direction="right" delay={0.3}>
            <div className="relative flex justify-center">
              <div className="relative w-[300px] md:w-[360px]">
                <Image
                  src="/images/loc-app-cropped.svg"
                  alt="Locality Bank app screen"
                  width={414}
                  height={795}
                  className="w-full h-auto"
                  priority
                />
                {/* Notification card overlay */}
                <div className="absolute bottom-16 -left-8 right-4 bg-charcoal-dark/95 backdrop-blur-md rounded-xl p-4 border border-white/10 shadow-2xl">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-green-300/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <div className="w-3 h-3 bg-green-300 rounded-full" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h4 className="text-white text-sm font-semibold">
                          Account Update
                        </h4>
                        <span className="text-white/30 text-xs">now</span>
                      </div>
                      <p className="text-white/50 text-xs mt-1 leading-relaxed">
                        Your average revenue is 10% above other businesses like
                        yours in South Florida. View lending options to invest in
                        growing your company.
                      </p>
                    </div>
                  </div>
                </div>
                {/* Small locality image */}
                <div className="absolute -bottom-4 -right-12 w-[180px] rounded-lg overflow-hidden border border-white/10 shadow-xl">
                  <Image
                    src="/images/locality-sm.jpg"
                    alt="Locality Bank – SMB banking"
                    width={498}
                    height={320}
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
