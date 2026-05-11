import { Metadata } from "next";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { CTAFooter } from "@/components/sections/CTAFooter";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Press",
  description: "Latest news and press releases from Nymbus.",
};

// Sample press data - in production parsed from _press/*.md files
const pressReleases = [
  {
    date: "2025-11-20",
    title:
      "Nymbus Wins Credit Union Times Luminaries Award for Innovative Core Conversion with MSUFCU",
    slug: "2025-11-20-nymbus-wins-credit-union-times-luminaries-award",
  },
  {
    date: "2025-11-18",
    title:
      "CPI and Nymbus Announce Seamless Instant Card Issuance Integration",
    slug: "2025-11-18-cpi-and-nymbus-announce-seamless-instant-card-issuance-integration",
  },
  {
    date: "2025-10-16",
    title:
      "Nymbus Named Finalist for Four Prestigious Awards for Its Modern Core Banking Platform",
    slug: "2025-10-16-nymbus-named-finalist-for-four-prestigious-awards",
  },
  {
    date: "2025-09-10",
    title:
      "PeoplesBank Becomes Largest U.S. Community Bank to Fully Adopt a Modern Core with Nymbus",
    slug: "2025-09-10-peoplesbank-becomes-largest-us-community-bank",
  },
  {
    date: "2025-07-29",
    title:
      "New Report from Cornerstone Advisors Reveals Vertical Banking Strategies Are Fueling Growth",
    slug: "2025-07-29-new-report-from-cornerstone-advisors",
  },
  {
    date: "2025-07-08",
    title:
      "Nymbus Agreement with Bud Financial to Launch AI-Powered Personal Finance",
    slug: "2025-07-08-nymbus-agreement-bud-financial",
  },
  {
    date: "2025-05-28",
    title:
      "Nymbus Launches Levels: A Powerful Loyalty and Rewards Framework for Community Banks and Credit Unions",
    slug: "2025-05-28-nymbus-launches-levels",
  },
  {
    date: "2025-03-18",
    title:
      "Nymbus Chief People Officer Crina Pupaza Named to 2025 List of Top Women in HR",
    slug: "2025-03-18-nymbus-chief-people-officer-crina-pupaza",
  },
];

export default function PressPage() {
  return (
    <>
      <section className="pt-32 pb-8 md:pt-40 md:pb-12">
        <div className="container-site">
          <ScrollReveal>
            <h1 className="text-[2.5rem] md:text-[3.5rem] font-bold mb-4">
              Press
            </h1>
            <p className="text-white/60 text-lg max-w-2xl">
              The latest news and announcements from Nymbus.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-site">
          <div className="space-y-4">
            {pressReleases.map((release, index) => (
              <ScrollReveal key={release.slug} delay={index * 0.03}>
                <Link
                  href={`/press/${release.slug}/`}
                  className="group block p-6 rounded-xl border border-white/5 hover:border-white/15 bg-charcoal/30 hover:bg-charcoal/60 transition-all duration-300"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center gap-3">
                    <time className="text-white/40 text-sm font-mono flex-shrink-0 w-28">
                      {new Date(release.date).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </time>
                    <h3 className="text-white font-medium group-hover:text-sky-blue transition-colors">
                      {release.title}
                    </h3>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <CTAFooter />
    </>
  );
}
