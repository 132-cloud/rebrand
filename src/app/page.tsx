"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { HeroGuide } from "@/components/sections/home/guide/HeroGuide";
import { LogoBarGuide } from "@/components/sections/home/guide/LogoBarGuide";
import { StatsBar } from "@/components/sections/home/StatsBar";
import { PlatformOverviewNew } from "@/components/sections/home/PlatformOverviewNew";
import { GovernedAIApproach } from "@/components/sections/home/GovernedAIApproach";
import { ActivationPathsNew } from "@/components/sections/home/ActivationPathsNew";
import { GovernedAISectionGuide } from "@/components/sections/home/guide/GovernedAISectionGuide";
import { CustomerQuotes } from "@/components/sections/home/CustomerQuotes";
import { ResourcesSection } from "@/components/sections/home/ResourcesSection";
import { FooterCTAGuide } from "@/components/sections/home/guide/FooterCTAGuide";
import { StrategyBand } from "@/components/sections/home/StrategyBand";
import { ManagedServicesBand } from "@/components/sections/home/ManagedServicesBand";

// Floating blob with parallax scroll effect
function FloatingBlob({
  src,
  className,
  style,
  speed = 0.15,
}: {
  src: string;
  className?: string;
  style?: React.CSSProperties;
  speed?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setOffset(window.scrollY);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      ref={ref}
      className={`absolute z-20 pointer-events-none ${className || ""}`}
      style={{
        ...style,
        transform: `translateY(${offset * speed}px)`,
        transition: "transform 0.1s linear",
      }}
    >
      <img src={src} alt="" className="w-full h-auto" />
    </div>
  );
}

export default function HomePage() {
  // Add theme class to body so header/footer outside main can also be styled
  useEffect(() => {
    document.body.classList.add("is-guide-theme");
    return () => {
      document.body.classList.remove("is-guide-theme");
    };
  }, []);

  return (
    <div className="theme-guide relative overflow-x-clip">
      {/* Floating chrome blob - left side of hero, 50% size */}
      <FloatingBlob
        src="/images/13 - SPECTRA - 3D LIQUID METAL CHROME BLOB SHAPES COLLECTION 2.png"
        className="left-0 w-[100px] md:w-[125px] lg:w-[150px] -translate-x-[40%]"
        style={{ top: "5%" }}
        speed={-0.08}
      />

      {/* Floating chrome blob - right side of hero, 50% size, higher */}
      <FloatingBlob
        src="/images/17 - SPECTRA - 3D LIQUID METAL CHROME BLOB SHAPES COLLECTION 1.png"
        className="right-0 w-[100px] md:w-[125px] lg:w-[150px] translate-x-[40%]"
        style={{ top: "2%" }}
        speed={-0.06}
      />

      {/* Floating chrome blob - right side, 30% down */}
      <FloatingBlob
        src="/images/17 - SPECTRA - 3D LIQUID METAL CHROME BLOB SHAPES COLLECTION 1.png"
        className="right-0 w-[300px] md:w-[400px] lg:w-[500px] translate-x-[50%]"
        style={{ top: "30%" }}
        speed={-0.12}
      />

      {/* Floating chrome blob - left side, 60% down */}
      <FloatingBlob
        src="/images/13 - SPECTRA - 3D LIQUID METAL CHROME BLOB SHAPES COLLECTION 2.png"
        className="left-0 w-[150px] md:w-[200px] lg:w-[250px] -translate-x-[50%]"
        style={{ top: "60%" }}
        speed={-0.18}
      />

      <HeroGuide />
      <LogoBarGuide />
      <StatsBar />
      <StrategyBand />
      <PlatformOverviewNew />
      <GovernedAIApproach />
      <ActivationPathsNew />
      <ManagedServicesBand />
      {/* Operations + Labs feature blocks */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-site">
          <ScrollReveal>
            <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
              {/* Text — left */}
              <div className="flex-1">
                <p className="text-neutral-400 text-[11px] font-semibold uppercase tracking-wider mb-4">Run the operations</p>
                <h3 className="text-[1.5rem] md:text-[1.875rem] font-bold leading-tight tracking-[-0.01em] text-neutral-900 mb-4">
                  We do not just deploy the model. We help you run it.
                </h3>
                <p className="text-neutral-500 text-base leading-relaxed mb-6">
                  Contact center, onboarding, servicing, compliance workflows, fraud operations, and back office, built and operated by Nymbus. Ship the model without standing up an operation behind it.
                </p>
                <Link
                  href="/managed-services/"
                  className="inline-flex items-center text-[#697CB2] text-sm font-semibold hover:text-[#4a5d8a] transition-colors no-underline"
                >
                  Learn about Managed Services
                  <svg className="w-4 h-4 ml-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </Link>
              </div>
              {/* Image placeholder — right */}
              <div className="flex-1 w-full">
                <div className="aspect-[4/3] rounded-2xl bg-neutral-100 border border-neutral-200/60" />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-neutral-50">
        <div className="container-site">
          <ScrollReveal>
            <div className="flex flex-col md:flex-row-reverse items-center gap-12 md:gap-16">
              {/* Text — right */}
              <div className="flex-1">
                <p className="text-neutral-400 text-[11px] font-semibold uppercase tracking-wider mb-4">Nymbus Labs</p>
                <h3 className="text-[1.5rem] md:text-[1.875rem] font-bold leading-tight tracking-[-0.01em] text-neutral-900 mb-4">
                  Experts that drive banking growth.
                </h3>
                <p className="text-neutral-500 text-base leading-relaxed mb-6">
                  Nymbus Labs embeds growth experts with your team to architect, launch, and optimize your digital brand from launch through scale.
                </p>
                <Link
                  href="/labs/"
                  className="inline-flex items-center text-[#697CB2] text-sm font-semibold hover:text-[#4a5d8a] transition-colors no-underline"
                >
                  Learn about Nymbus Labs
                  <svg className="w-4 h-4 ml-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </Link>
              </div>
              {/* Image placeholder — left */}
              <div className="flex-1 w-full">
                <div className="aspect-[4/3] rounded-2xl bg-neutral-100 border border-neutral-200/60" />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <GovernedAISectionGuide />
      <CustomerQuotes />
      <ResourcesSection />
      <FooterCTAGuide heading="READY TO MOVE?" />
    </div>
  );
}
