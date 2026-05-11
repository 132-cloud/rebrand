"use client";

import { useState } from "react";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { motion, AnimatePresence } from "framer-motion";

const tabs = [
  {
    title: "Onboarding",
    description: "Streamlined digital account opening experience",
  },
  {
    title: "Deposits",
    description: "Full deposit and transaction management",
  },
  {
    title: "Spending Folders",
    description: "Organize spending into custom categories",
  },
  {
    title: "Savings Goals",
    description: "Set and track personalized savings targets",
  },
  {
    title: "Small Business Banking",
    description: "Complete SMB banking tools and services",
  },
];

export function DigitalBankingSection() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="section-padding bg-charcoal">
      <div className="container-site">
        <ScrollReveal>
          <div className="text-center mb-12">
            <h2 className="caption text-sky-blue mb-3">
              Modernize Your Tech Stack
            </h2>
            <h1 className="text-[2rem] md:text-[2.5rem] font-bold mb-4">
              Deliver Next Level Digital
            </h1>
            <p className="text-white/60 max-w-2xl mx-auto leading-relaxed">
              Digital banking is more than an extension of your branch – digital
              is the default. Modernize your existing banking channels with
              best-in-class experiences built on our proven platform.
            </p>
          </div>
        </ScrollReveal>

        {/* Tab Navigation */}
        <ScrollReveal delay={0.1}>
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {tabs.map((tab, index) => (
              <button
                key={tab.title}
                onClick={() => setActiveTab(index)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeTab === index
                    ? "bg-blue text-white"
                    : "bg-white/5 text-white/60 hover:text-white hover:bg-white/10"
                }`}
              >
                {tab.title}
              </button>
            ))}
          </div>
        </ScrollReveal>

        {/* Tab Content */}
        <ScrollReveal delay={0.2}>
          <div className="relative max-w-4xl mx-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="aspect-[16/9] bg-gradient-to-br from-charcoal-medium to-charcoal-dark rounded-2xl border border-white/10 overflow-hidden"
              >
                {/* Phone mockup for the active tab */}
                <div className="h-full flex items-center justify-center p-8">
                  <div className="w-64 h-[480px] bg-charcoal-dark rounded-[2rem] border-2 border-white/10 overflow-hidden shadow-2xl">
                    {/* Phone status bar */}
                    <div className="h-6 bg-black/30 flex items-center justify-center">
                      <div className="w-16 h-1 bg-white/20 rounded-full" />
                    </div>
                    {/* Phone content */}
                    <div className="p-4">
                      <div className="h-3 w-20 bg-white/10 rounded mb-4" />
                      <h3 className="text-white text-sm font-semibold mb-2">
                        {tabs[activeTab].title}
                      </h3>
                      <p className="text-white/40 text-xs mb-4">
                        {tabs[activeTab].description}
                      </p>
                      <div className="space-y-3">
                        {[...Array(4)].map((_, i) => (
                          <div
                            key={i}
                            className="flex items-center gap-3 p-2 bg-white/5 rounded-lg"
                          >
                            <div className="w-8 h-8 bg-blue/20 rounded-full flex-shrink-0" />
                            <div className="flex-1">
                              <div className="h-2 w-16 bg-white/10 rounded mb-1" />
                              <div className="h-2 w-10 bg-white/5 rounded" />
                            </div>
                            <div className="text-xs text-white/40">
                              ${(Math.random() * 500).toFixed(0)}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
