"use client";

import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { Button } from "@/components/ui/Button";
import Link from "next/link";

// ─── Press Kit Items ─────────────────────────────────────────────────────────

const pressKitItems = [
  { title: "Company boilerplate", description: "Approved description of Nymbus, its platform, and the institutions it serves." },
  { title: "Logo files", description: "Approved Nymbus logos for digital and print use." },
  { title: "Brand guidelines", description: "Correct logo, color, and brand usage." },
  { title: "Leadership assets", description: "Approved executive headshots and bios, where available." },
  { title: "Product overview", description: "A concise overview of the platform, capabilities, and operating model." },
];

// ─── Featured Coverage (Placeholders) ────────────────────────────────────────

const featuredCoverage = [
  { publication: "Publication", headline: "Coverage headline placeholder", href: "#" },
  { publication: "Publication", headline: "Coverage headline placeholder", href: "#" },
  { publication: "Publication", headline: "Coverage headline placeholder", href: "#" },
];

// ─── Press Releases (Placeholders) ───────────────────────────────────────────

const pressReleases = [
  { date: "2025", headline: "Press release headline placeholder", href: "#" },
  { date: "2025", headline: "Press release headline placeholder", href: "#" },
  { date: "2025", headline: "Press release headline placeholder", href: "#" },
];

// ─── Main Page ───────────────────────────────────────────────────────────────

export default function PressPage() {
  return (
    <div className="bg-white text-neutral-900">
      {/* ─── Section 1: Hero ──────────────────────────────────────────────── */}
      <section className="relative pt-36 pb-20 md:pt-44 md:pb-28 overflow-hidden">
        <div className="absolute inset-0 w-full h-full" style={{ backgroundImage: "url('/background---.png')", backgroundSize: "cover", backgroundPosition: "center" }} />
        <div className="container-site relative z-10">
          <ScrollReveal>
            <div className="max-w-3xl">
              <p className="text-neutral-400 text-[11px] font-semibold uppercase tracking-wider mb-4">Press Room</p>
              <h1 className="text-[2.5rem] md:text-[3.5rem] font-bold leading-[1.08] tracking-[-0.02em] text-neutral-900 mb-6">
                News and resources from Nymbus.
              </h1>
              <p className="text-neutral-500 text-lg md:text-xl leading-relaxed mb-8 max-w-2xl">
                Press releases, approved brand assets, company information, and media resources, in one place.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button href="#press-kit" variant="primary" size="lg" className="!bg-neutral-900 !text-white !shadow-none hover:!bg-neutral-800">
                  Download press kit
                </Button>
                <Button href="#media-contact" variant="outline" size="lg" className="!text-neutral-900 !border-neutral-300 !bg-white/60 hover:!bg-white/80">
                  Contact media team
                </Button>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ─── Section 2: Media Strip ───────────────────────────────────────── */}
      <section className="py-12 border-y border-neutral-100">
        <div className="container-site">
          <ScrollReveal>
            <p className="text-neutral-400 text-[11px] font-semibold uppercase tracking-wider text-center mb-6">
              Nymbus in the Media
            </p>
            <div className="flex items-center justify-center gap-12 md:gap-16 flex-wrap">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="w-24 h-8 rounded bg-neutral-100 flex items-center justify-center">
                  <span className="text-neutral-300 text-[10px] font-medium">Logo</span>
                </div>
              ))}
            </div>
            <p className="text-neutral-400 text-xs text-center mt-4 italic">
              Use only approved publication logos with confirmed permissions.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ─── Section 3: Press Kit ─────────────────────────────────────────── */}
      <section id="press-kit" className="py-20 md:py-28">
        <div className="container-site">
          <ScrollReveal>
            <div className="max-w-3xl mb-12">
              <h2 className="text-[1.75rem] md:text-[2.25rem] font-bold leading-tight tracking-[-0.02em] text-neutral-900 mb-4">
                Press kit.
              </h2>
              <p className="text-neutral-500 text-base md:text-lg leading-relaxed">
                Company materials for media, analyst, partner, and industry use.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
              {pressKitItems.map((item) => (
                <div key={item.title} className="p-5 rounded-xl border border-neutral-200 bg-neutral-50 hover:border-neutral-300 transition-[border-color] duration-300">
                  <h4 className="text-neutral-900 text-sm font-bold mb-2">{item.title}</h4>
                  <p className="text-neutral-500 text-xs leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
            <Button href="#" variant="primary" size="md" className="!bg-neutral-900 !text-white !shadow-none hover:!bg-neutral-800">
              Download press kit
            </Button>
          </ScrollReveal>
        </div>
      </section>

      {/* ─── Section 4: Featured Coverage ─────────────────────────────────── */}
      <section className="py-20 md:py-28 bg-neutral-50">
        <div className="container-site">
          <ScrollReveal>
            <div className="max-w-3xl mb-12">
              <p className="text-neutral-400 text-[11px] font-semibold uppercase tracking-wider mb-4">Featured Coverage</p>
              <h2 className="text-[1.75rem] md:text-[2.25rem] font-bold leading-tight tracking-[-0.02em] text-neutral-900 mb-4">
                Nymbus in the news.
              </h2>
              <p className="text-neutral-500 text-base md:text-lg leading-relaxed">
                Selected media coverage, analyst mentions, and industry features.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="space-y-0 border-t border-neutral-200">
              {featuredCoverage.map((item, i) => (
                <Link
                  key={i}
                  href={item.href}
                  className="flex items-center justify-between py-5 border-b border-neutral-200 group no-underline hover:bg-white/50 transition-colors px-2 -mx-2 rounded"
                >
                  <div className="flex items-center gap-5">
                    <div className="w-20 h-6 rounded bg-neutral-200 flex items-center justify-center flex-shrink-0">
                      <span className="text-neutral-400 text-[9px] font-medium">{item.publication}</span>
                    </div>
                    <span className="text-neutral-900 text-sm font-medium group-hover:text-[#697CB2] transition-colors">{item.headline}</span>
                  </div>
                  <span className="text-[#697CB2] text-sm font-medium flex-shrink-0 ml-4">
                    Read coverage ›
                  </span>
                </Link>
              ))}
            </div>
            <p className="text-neutral-400 text-xs mt-4 italic">
              Use only approved publication logos, confirmed permissions, and live links.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ─── Section 5: Press Releases ────────────────────────────────────── */}
      <section className="py-20 md:py-28">
        <div className="container-site">
          <ScrollReveal>
            <div className="max-w-3xl mb-12">
              <p className="text-neutral-400 text-[11px] font-semibold uppercase tracking-wider mb-4">Press Releases</p>
              <h2 className="text-[1.75rem] md:text-[2.25rem] font-bold leading-tight tracking-[-0.02em] text-neutral-900 mb-4">
                Latest company news.
              </h2>
              <p className="text-neutral-500 text-base md:text-lg leading-relaxed">
                Announcements from Nymbus, including platform updates, customer news, partnerships, leadership, and company milestones.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="space-y-0 border-t border-neutral-200">
              {pressReleases.map((item, i) => (
                <Link
                  key={i}
                  href={item.href}
                  className="flex items-center justify-between py-5 border-b border-neutral-200 group no-underline hover:bg-neutral-50 transition-colors px-2 -mx-2 rounded"
                >
                  <div className="flex items-center gap-5">
                    <span className="text-neutral-400 text-xs font-medium w-16 flex-shrink-0">{item.date}</span>
                    <span className="text-neutral-900 text-sm font-medium group-hover:text-[#697CB2] transition-colors">{item.headline}</span>
                  </div>
                  <span className="text-[#697CB2] text-sm font-medium flex-shrink-0 ml-4">
                    Read release ›
                  </span>
                </Link>
              ))}
            </div>
            <p className="text-neutral-400 text-xs mt-4 italic">
              Feed behavior: Newest first. Include date, headline, category, and link to the full release.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ─── Section 6: Media Contact ─────────────────────────────────────── */}
      <section id="media-contact" className="py-20 md:py-28 bg-neutral-50">
        <div className="container-site">
          <ScrollReveal>
            <div className="max-w-2xl mx-auto text-center">
              <p className="text-neutral-400 text-[11px] font-semibold uppercase tracking-wider mb-4">Media Inquiries</p>
              <h2 className="text-[1.75rem] md:text-[2.25rem] font-bold leading-tight tracking-[-0.02em] text-neutral-900 mb-5">
                Contact the Nymbus media team.
              </h2>
              <p className="text-neutral-500 text-base md:text-lg leading-relaxed mb-3">
                For press, media, and communications inquiries, reach the Nymbus media team.
              </p>
              <a href="mailto:media@nymbus.com" className="text-neutral-700 text-base font-medium hover:text-neutral-900 transition-colors no-underline">
                media@nymbus.com
              </a>
              <div className="mt-8">
                <Button href="mailto:media@nymbus.com" variant="primary" size="lg" className="!bg-neutral-900 !text-white !shadow-none hover:!bg-neutral-800">
                  Contact media team
                </Button>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
