"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ScrollReveal } from "@/components/animations/ScrollReveal";

const quotes = [
  {
    text: "The successful go-live affirmed our decision to modernize our entire banking infrastructure and positions us to deliver real, simple banking services to our customers faster and more efficiently than ever before.",
    author: "Thomas Senecal",
    title: "President & CEO, PeoplesBank",
    logoSrc: "/images/logos/peoplesbank-logo.svg",
    logoAlt: "PeoplesBank",
  },
  {
    text: "Aligning with Nymbus on this vital project is a strategic move for MSUFCU, as it allows us to enhance our product offerings and deliver top-tier services to small business owners. Through this collaboration, we're showing our dedication to the businesses that are the connectors of our communities.",
    author: "April Clobes",
    title: "President & CEO, MSUFCU",
    logoSrc: "/images/logos/msufcu-logo.svg",
    logoAlt: "MSUFCU",
  },
];

export function QuoteCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="py-10 md:py-14 bg-charcoal-dark">
      <div className="container-site">
        <ScrollReveal>
          <div className="max-w-3xl mx-auto text-center">
            {/* Quote */}
            <div className="min-h-[180px] flex items-center justify-center">
              <AnimatePresence initial={false} mode="wait">
                <motion.blockquote
                  key={activeIndex}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="text-white/80 text-xl md:text-2xl font-light leading-relaxed"
                >
                  &ldquo;{quotes[activeIndex].text}&rdquo;
                </motion.blockquote>
              </AnimatePresence>
            </div>

            {/* Author */}
            <AnimatePresence initial={false} mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3, delay: 0.1 }}
                className="mt-6"
              >
                <p className="text-white text-sm">
                  <strong>{quotes[activeIndex].author},</strong>{" "}
                  <span className="text-white/50">{quotes[activeIndex].title}</span>
                </p>
              </motion.div>
            </AnimatePresence>

            {/* Read story link */}
            <a
              href="/customers/"
              className="inline-block mt-4 text-sky-blue text-sm font-medium hover:text-blue-75 transition-colors no-underline"
            >
              Read the story &rsaquo;
            </a>
          </div>
        </ScrollReveal>

        {/* Clickable client logos to switch quotes */}
        <ScrollReveal delay={0.2}>
          <div className="mt-14 pt-10 border-t border-white/5">
            <div className="flex items-center justify-center gap-12 md:gap-16">
              {quotes.map((quote, index) => (
                <button
                  key={quote.logoAlt}
                  onClick={() => setActiveIndex(index)}
                  className={`relative min-h-[40px] min-w-[40px] flex items-center justify-center transition-opacity duration-300 ${
                    activeIndex === index ? "opacity-100" : "opacity-30 hover:opacity-60"
                  }`}
                  aria-label={`Show ${quote.logoAlt} quote`}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={quote.logoSrc}
                    alt={quote.logoAlt}
                    className="h-8 md:h-10 w-auto brightness-0 invert"
                  />
                </button>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
