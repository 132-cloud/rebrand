import Link from "next/link";
import { ScrollReveal } from "@/components/animations/ScrollReveal";

const featuredInsight = {
  type: "opinion piece",
  title: "Jeffery Kendall: The Strategic Advantage of a Next-Gen Core",
  subtitle:
    "Why core modernization amplifies your vision, not just your technology.",
  excerpt:
    "Rapid transformations in how we interact with markets are revealing new opportunities for growth and demanding a historical reevaluation of our banking and financial strategies. The core banking modernization market is expected to grow at an average annual rate of…",
  href: "/lp/2026-next-gen-core-advantage/",
};

const secondaryInsights = [
  {
    type: "whitepaper",
    title: "Unlock Your Data, Unlock Your Vision",
    cta: "Download whitepaper ›",
    href: "/lp/connect/",
  },
  {
    type: "video series",
    title: "Missions, Milestones, and Moonshots: Stories of Community Banking",
    cta: "Watch Now ›",
    href: "/lp/client-stories/",
  },
];

export function InsightsPreview() {
  return (
    <section className="section-padding">
      <div className="container-site">
        {/* Section Header */}
        <ScrollReveal>
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-white text-lg font-semibold">Insights</h3>
            <Link
              href="/insights/#all"
              className="text-sky-blue text-sm font-medium hover:text-blue-75 transition-colors"
            >
              See All ›
            </Link>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Featured Article */}
          <ScrollReveal className="lg:col-span-2" delay={0.1}>
            <Link
              href={featuredInsight.href}
              className="group block h-full p-6 md:p-8 rounded-2xl border border-white/5 hover:border-white/15 bg-charcoal/50 transition-all duration-300"
            >
              <span className="inline-block text-xs font-bold uppercase tracking-wider text-sky-blue mb-3">
                {featuredInsight.type}
              </span>
              <h2 className="text-xl md:text-2xl font-bold text-white mb-3 group-hover:text-sky-blue transition-colors">
                {featuredInsight.title}
              </h2>
              <p className="text-white/60 italic text-sm mb-4">
                {featuredInsight.subtitle}
              </p>
              <p className="text-white/50 text-sm leading-relaxed mb-4">
                {featuredInsight.excerpt}
              </p>
              <span className="text-sky-blue text-sm font-medium">
                Read More ›
              </span>
              <div className="mt-4 inline-block px-3 py-1 bg-blue/10 rounded-full text-xs text-blue font-medium">
                Featured
              </div>
            </Link>
          </ScrollReveal>

          {/* Secondary Insights */}
          <div className="space-y-6">
            {secondaryInsights.map((insight, index) => (
              <ScrollReveal key={insight.title} delay={0.2 + index * 0.1}>
                <Link
                  href={insight.href}
                  className="group block p-6 rounded-2xl border border-white/5 hover:border-white/15 bg-charcoal/50 transition-all duration-300"
                >
                  <span className="inline-block text-xs font-bold uppercase tracking-wider text-sky-blue mb-3">
                    {insight.type}
                  </span>
                  <h3 className="text-white font-semibold mb-3 group-hover:text-sky-blue transition-colors leading-snug">
                    {insight.title}
                  </h3>
                  <span className="text-sky-blue text-sm font-medium">
                    {insight.cta}
                  </span>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
