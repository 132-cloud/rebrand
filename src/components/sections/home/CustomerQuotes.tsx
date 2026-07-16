"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ScrollReveal } from "@/components/animations/ScrollReveal";

const quotes = [
  {
    text: "Speed to market and cost to serve is what this business is all about - and Nymbus has nailed both.",
    author: "Stephen Owen",
    title: "CEO, First Entertainment Credit Union",
    logoSrc: "/images/logo bar logos/FECU.png",
    logoAlt: "First Entertainment CU",
  },
  {
    text: "This is the most user-friendly banking system I've ever trained on - fast, simple and intuitive.",
    author: "Aleda DeMaria",
    title: "Executive Vice President, Chief Operating Officer",
    logoSrc: "/images/logo bar logos/Vector.png",
    logoAlt: "Client",
  },
  {
    text: "All of the products necessary to run it. Online banking, core, marketing, service channel. It's a single source of entry.",
    author: "Ami Iceman",
    title: "CEO, MSUFCU",
    logoSrc: "/images/logos/msufcu-logo.svg",
    logoAlt: "MSUFCU",
  },
  {
    text: "The number one reason I worked with Nymbus is the relationships, the brand work, and knowing they care as much as I do.",
    author: "Jill Castilla",
    title: "President & CEO, Citizens Bank of Edmond",
    logoSrc: "/images/logo bar logos/Vector-1.png",
    logoAlt: "Citizens Bank of Edmond",
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
              <AnimatePresence initial={false} mode="wait">
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
            <AnimatePresence initial={false} mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3, delay: 0.1 }}
                className="mt-6"
              >
                <p className="text-[#171216] text-sm">
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
                  className={`relative min-h-[40px] min-w-[40px] flex items-center justify-center transition-opacity duration-300 cursor-pointer ${
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
