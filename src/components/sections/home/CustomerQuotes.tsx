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
  {
    text: "Our partnership with Nymbus allows us to deliver the modern banking experience our members expect while maintaining the personal service that sets us apart.",
    author: "Placeholder Name",
    title: "SVP & Chief Digital Officer, First Entertainment CU",
    logoSrc: "/images/logo bar logos/FECU.png",
    logoAlt: "First Entertainment CU",
  },
];

export function CustomerQuotes() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container-site">
        <ScrollReveal>
          <div className="max-w-3xl mx-auto text-center">
            {/* Quote */}
            <div className="min-h-[180px] flex items-center justify-center">
              <AnimatePresence mode="wait">
                <motion.blockquote
                  key={activeIndex}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.35 }}
                  className="text-neutral-700 text-xl md:text-2xl font-light leading-relaxed"
                >
                  &ldquo;{quotes[activeIndex].text}&rdquo;
                </motion.blockquote>
              </AnimatePresence>
            </div>

            {/* Author */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3, delay: 0.1 }}
                className="mt-6"
              >
                <p className="text-neutral-900 text-sm">
                  <strong>{quotes[activeIndex].author},</strong>{" "}
                  <span className="text-neutral-500">{quotes[activeIndex].title}</span>
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
        </ScrollReveal>

        {/* Clickable client logos to switch quotes */}
        <ScrollReveal delay={0.2}>
          <div className="mt-14 pt-10 border-t border-neutral-200">
            <div className="flex items-center justify-center gap-12 md:gap-16">
              {quotes.map((quote, index) => (
                <button
                  key={quote.logoAlt}
                  onClick={() => setActiveIndex(index)}
                  className={`transition-opacity duration-300 cursor-pointer ${
                    activeIndex === index ? "opacity-100" : "opacity-30 hover:opacity-60"
                  }`}
                  aria-label={`Show ${quote.logoAlt} quote`}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={quote.logoSrc}
                    alt={quote.logoAlt}
                    className="h-8 md:h-10 w-auto"
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
