"use client";

import { useState } from "react";
import { ScrollReveal } from "@/components/animations/ScrollReveal";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <div className="bg-white text-[#171216]" style={{ fontFamily: "'neue-haas-grotesk-text', 'proxima-nova', sans-serif" }}>
      <section className="relative pt-36 pb-20 md:pt-44 md:pb-28 overflow-hidden">
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover">
            <source src="/images/background-motion-rotated.webm" type="video/webm" />
          </video>
        </div>
        <div className="container-site relative z-10">
          <ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
              {/* Left: copy */}
              <div>
                <p className="text-neutral-400 text-[11px] font-semibold uppercase tracking-wider mb-4">Contact Nymbus</p>
                <h1 className="text-[2.25rem] md:text-[3rem] font-bold leading-[1.08] tracking-[-0.02em] text-[#171216] mb-6">
                  Talk to us about your next move.
                </h1>
                <p className="text-neutral-500 text-base md:text-lg leading-relaxed">
                  Contact Nymbus about platform, growth, modernization, partnership, or general business inquiries below.
                </p>
              </div>

              {/* Right: form */}
              <div className="bg-neutral-50 border border-neutral-200 rounded-2xl p-8">
                {submitted ? (
                  <div className="text-center py-12">
                    <h3 className="text-[#171216] text-xl font-bold mb-3">Thanks.</h3>
                    <p className="text-neutral-500 text-sm">We&apos;ve received your inquiry and will get back to you shortly.</p>
                  </div>
                ) : (
                  <>
                    <h3 className="text-[#171216] text-lg font-bold mb-2">Send us a message</h3>
                    <p className="text-neutral-500 text-sm mb-6">Share a few details and we&apos;ll follow up.</p>
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <input type="text" placeholder="First name" required className="w-full px-4 py-3 rounded-lg border border-neutral-200 bg-white text-[#171216] text-sm outline-none focus:border-neutral-400 transition-colors" />
                        <input type="text" placeholder="Last name" required className="w-full px-4 py-3 rounded-lg border border-neutral-200 bg-white text-[#171216] text-sm outline-none focus:border-neutral-400 transition-colors" />
                      </div>
                      <input type="email" placeholder="Work email" required className="w-full px-4 py-3 rounded-lg border border-neutral-200 bg-white text-[#171216] text-sm outline-none focus:border-neutral-400 transition-colors" />
                      <input type="tel" placeholder="Phone number" className="w-full px-4 py-3 rounded-lg border border-neutral-200 bg-white text-[#171216] text-sm outline-none focus:border-neutral-400 transition-colors" />
                      <input type="text" placeholder="Institution or company name" required className="w-full px-4 py-3 rounded-lg border border-neutral-200 bg-white text-[#171216] text-sm outline-none focus:border-neutral-400 transition-colors" />
                      <input type="text" placeholder="Role" className="w-full px-4 py-3 rounded-lg border border-neutral-200 bg-white text-[#171216] text-sm outline-none focus:border-neutral-400 transition-colors" />
                      <select className="w-full px-4 py-3 rounded-lg border border-neutral-200 bg-white text-[#171216] text-sm outline-none focus:border-neutral-400 transition-colors" defaultValue="">
                        <option value="" disabled>Inquiry type</option>
                        <option value="platform">Platform</option>
                        <option value="demo">Demo request</option>
                        <option value="partnership">Partnership</option>
                        <option value="growth">Growth strategy</option>
                        <option value="general">General inquiry</option>
                      </select>
                      <textarea placeholder="Message" rows={4} className="w-full px-4 py-3 rounded-lg border border-neutral-200 bg-white text-[#171216] text-sm outline-none focus:border-neutral-400 transition-colors resize-none" />
                      <button type="submit" className="w-full px-6 py-3 bg-[#171216] text-white text-sm font-semibold rounded-full hover:bg-[#2a2329] transition-colors">
                        Submit inquiry
                      </button>
                    </form>
                  </>
                )}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
