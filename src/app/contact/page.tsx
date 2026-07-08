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
    <div className="bg-white text-neutral-900" style={{ fontFamily: "'Inter Tight', 'proxima-nova', sans-serif" }}>
      <section className="relative pt-36 pb-20 md:pt-44 md:pb-28 overflow-hidden">
        <div className="absolute inset-0 w-full h-full" style={{ backgroundImage: "url('/background---.png')", backgroundSize: "cover", backgroundPosition: "center" }} />
        <div className="container-site relative z-10">
          <ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
              {/* Left: copy */}
              <div>
                <p className="text-neutral-400 text-[11px] font-semibold uppercase tracking-wider mb-4">Contact Nymbus</p>
                <h1 className="text-[2.25rem] md:text-[3rem] font-bold leading-[1.08] tracking-[-0.02em] text-neutral-900 mb-6">
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
                    <h3 className="text-neutral-900 text-xl font-bold mb-3">Thanks.</h3>
                    <p className="text-neutral-500 text-sm">We&apos;ve received your inquiry and will get back to you shortly.</p>
                  </div>
                ) : (
                  <>
                    <h3 className="text-neutral-900 text-lg font-bold mb-2">Send us a message</h3>
                    <p className="text-neutral-500 text-sm mb-6">Share a few details and we&apos;ll follow up.</p>
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <input type="text" placeholder="First name" required className="w-full px-4 py-3 rounded-lg border border-neutral-200 bg-white text-neutral-900 text-sm outline-none focus:border-neutral-400 transition-colors" />
                        <input type="text" placeholder="Last name" required className="w-full px-4 py-3 rounded-lg border border-neutral-200 bg-white text-neutral-900 text-sm outline-none focus:border-neutral-400 transition-colors" />
                      </div>
                      <input type="email" placeholder="Work email" required className="w-full px-4 py-3 rounded-lg border border-neutral-200 bg-white text-neutral-900 text-sm outline-none focus:border-neutral-400 transition-colors" />
                      <input type="tel" placeholder="Phone number" className="w-full px-4 py-3 rounded-lg border border-neutral-200 bg-white text-neutral-900 text-sm outline-none focus:border-neutral-400 transition-colors" />
                      <input type="text" placeholder="Institution or company name" required className="w-full px-4 py-3 rounded-lg border border-neutral-200 bg-white text-neutral-900 text-sm outline-none focus:border-neutral-400 transition-colors" />
                      <input type="text" placeholder="Role" className="w-full px-4 py-3 rounded-lg border border-neutral-200 bg-white text-neutral-900 text-sm outline-none focus:border-neutral-400 transition-colors" />
                      <select className="w-full px-4 py-3 rounded-lg border border-neutral-200 bg-white text-neutral-900 text-sm outline-none focus:border-neutral-400 transition-colors" defaultValue="">
                        <option value="" disabled>Inquiry type</option>
                        <option value="platform">Platform</option>
                        <option value="demo">Demo request</option>
                        <option value="partnership">Partnership</option>
                        <option value="growth">Growth strategy</option>
                        <option value="general">General inquiry</option>
                      </select>
                      <textarea placeholder="Message" rows={4} className="w-full px-4 py-3 rounded-lg border border-neutral-200 bg-white text-neutral-900 text-sm outline-none focus:border-neutral-400 transition-colors resize-none" />
                      <button type="submit" className="w-full px-6 py-3 bg-neutral-900 text-white text-sm font-semibold rounded-lg hover:bg-neutral-800 transition-colors">
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
