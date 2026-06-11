"use client";

import Link from "next/link";
import Image from "next/image";
import { ScrollReveal } from "@/components/animations/ScrollReveal";

const stories = [
  {
    client: "PeoplesBank",
    image: "/images/peoples-bg.jpg",
    imagePosition: "object-right",
    logo: "/images/logos/peoplesbank-logo-wht.svg",
    quote: "The consensus is this is the best core we've ever worked on.",
    author: "Aleda DeMaria, EVP & COO",
    summary: "The largest U.S. community bank to fully adopt a modern core with Nymbus.",
    href: "/customers/peoplesbank/",
  },
  {
    client: "MSUFCU",
    image: "/images/msu-bg.jpeg",
    imagePosition: "object-center",
    logo: "/images/logos/msufcu-logo.svg",
    quote: "Aligning with Nymbus on this vital project is a strategic move for MSUFCU, as it allows us to enhance our product offerings and deliver top-tier services to small business owners.",
    author: "April Clobes, President & CEO",
    summary: "A digital growth program built to support small business owners.",
    href: "/customers/msufcu/",
  },
  {
    client: "ZYNLO Bank",
    image: "/images/zynlo-bg.jpg",
    imagePosition: "object-center",
    logo: "/images/Zynlo Logo.svg",
    quote: null,
    author: null,
    summary: "$163M+ in deposits for PeoplesBank through a digital-first sidecar brand.",
    href: "/customers/zynlo/",
  },
];

export function CustomerProofNew() {
  return (
    <section className="relative section-padding pb-0 bg-charcoal-dark">
      {/* Bottom fade for seamless transition */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-charcoal-dark pointer-events-none z-10" />

      <div className="container-site">
        <ScrollReveal>
          <h2 className="text-[2rem] md:text-[2.75rem] font-bold mb-12 leading-tight text-white">
            Trusted for real banking work.
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pb-24">
          {stories.map((story, index) => (
            <ScrollReveal key={story.client} delay={index * 0.1}>
              <div className="flex flex-col">
                {/* Image card */}
                <div className="relative aspect-[4/5] rounded-2xl overflow-hidden mb-5">
                  <Image
                    src={story.image}
                    alt={story.client}
                    fill
                    className={`object-cover ${story.imagePosition}`}
                  />
                  {/* Client logo overlay at bottom */}
                  <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-black/70 to-transparent">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={story.logo} alt={story.client} className="h-6 w-auto brightness-0 invert" />
                  </div>
                </div>

                {/* Quote if available */}
                {story.quote && (
                  <blockquote className="text-white/70 text-sm leading-relaxed mb-2 italic">
                    &ldquo;{story.quote}&rdquo;
                  </blockquote>
                )}
                {story.author && (
                  <p className="text-white/40 text-xs mb-3">{story.author}</p>
                )}

                {/* Description */}
                <p className="text-white/60 text-sm leading-relaxed mb-3">
                  {story.summary}
                </p>

                {/* Link */}
                <Link
                  href={story.href}
                  className="text-sky-blue text-sm font-medium hover:text-blue-75 transition-colors no-underline"
                >
                  Read the story &rsaquo;
                </Link>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
