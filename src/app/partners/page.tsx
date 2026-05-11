import { Metadata } from "next";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { CTAFooter } from "@/components/sections/CTAFooter";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Partners",
  description: "Explore the Nymbus partner ecosystem.",
};

const partners = [
  { name: "Plaid", category: "Data & Connectivity", slug: "plaid" },
  { name: "Socure", category: "Identity Verification", slug: "socure" },
  { name: "i2c", category: "Card Processing", slug: "i2c" },
  { name: "Middesk", category: "Business Verification", slug: "middesk" },
  { name: "Lightico", category: "Digital Completion", slug: "lightico" },
  { name: "Payrailz", category: "Payments", slug: "payrailz" },
  { name: "SavvyMoney", category: "Credit Score", slug: "savvymoney" },
  { name: "Segmint", category: "Data Analytics", slug: "segmint" },
  { name: "DataVisor", category: "Fraud Prevention", slug: "datavisor" },
  { name: "Deluxe", category: "Check & Payments", slug: "deluxe" },
  { name: "ChexSystems", category: "Risk Management", slug: "chexsystems" },
  { name: "ComplianceSystems", category: "Compliance", slug: "compliancesystems" },
];

export default function PartnersPage() {
  return (
    <>
      <section className="pt-32 pb-8 md:pt-40 md:pb-12">
        <div className="container-site">
          <ScrollReveal>
            <h1 className="text-[2.5rem] md:text-[3.5rem] font-bold mb-4">
              Partners
            </h1>
            <p className="text-white/60 text-lg max-w-2xl">
              Our partner ecosystem extends the Nymbus platform with
              best-in-class integrations for identity, payments, compliance, and
              more.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-site">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {partners.map((partner, index) => (
              <ScrollReveal key={partner.slug} delay={index * 0.03}>
                <Link
                  href={`/partners/${partner.slug}/`}
                  className="group block p-6 rounded-xl border border-white/5 hover:border-white/15 bg-charcoal/30 hover:bg-charcoal/60 transition-all duration-300"
                >
                  <div className="w-12 h-12 mb-4 bg-white/5 rounded-lg flex items-center justify-center">
                    <span className="text-white/40 text-xs font-bold">
                      {partner.name.charAt(0)}
                    </span>
                  </div>
                  <h3 className="text-white font-semibold mb-1 group-hover:text-sky-blue transition-colors">
                    {partner.name}
                  </h3>
                  <p className="text-white/40 text-sm">{partner.category}</p>
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
