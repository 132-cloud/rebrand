"use client";

import { useState, useMemo } from "react";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import Image from "next/image";

// ─── Categories ──────────────────────────────────────────────────────────────

const categories = [
  { id: "all", label: "All", count: 73 },
  { id: "smb", label: "SMB", count: 21 },
  { id: "retail", label: "Retail", count: 52 },
];

// ─── Partner Data ────────────────────────────────────────────────────────────

const partners = [
  { name: "Abrigo", function: "BSA/AML", status: "available", category: "smb", logo: "/images/partners/abrigo.png" },
  { name: "Akuvo", function: "Collections Software", status: "available", category: "retail", logo: "/images/partners/akuvo.png" },
  { name: "Alkami", function: "Transaction Cleansing", status: "available", category: "smb", logo: "/images/partners/alkami.png" },
  { name: "Bud", function: "Cash Flow Insights", status: "available", category: "smb", logo: "/images/partners/bud.png" },
  { name: "Celero", function: "Debit Card Funding", status: "available", category: "smb", logo: "/images/partners/celero.png" },
  { name: "ContentStack", function: "Content Management", status: "available", category: "retail", logo: "/images/partners/contentstack.png" },
  { name: "CPI", function: "Card Issuance & Digital Provisioning", status: "available", category: "smb", logo: "/images/partners/cpi.png" },
  { name: "CSI", function: "OFAC Fraud Detection", status: "available", category: "smb", logo: "/images/partners/csi.png" },
  { name: "DataVisor", function: "Fraud Detection", status: "available", category: "smb", logo: "/images/partners/datavisor.png" },
  { name: "Deluxe", function: "Item Processing", status: "available", category: "smb", logo: "/images/partners/deluxe.png" },
  { name: "Digital Check", function: "Receipt Printer & ID Scanner (Branch)", status: "available", category: "retail", logo: "/images/partners/digital-check.png" },
  { name: "Digital Onboarding", function: "Digital Engagement Platform", status: "available", category: "smb", logo: "/images/partners/digital-onboarding.png" },
  { name: "DocuSign", function: "eSign", status: "available", category: "smb", logo: "/images/partners/docusign.png" },
  { name: "Eisen", function: "Escheatment", status: "available", category: "retail", logo: "/images/partners/eisen.png" },
  { name: "emerie.ai", function: "IVR/Telephone Banking", status: "available", category: "retail", logo: "/images/partners/emerie-ai.png" },
  { name: "Encompass", function: "Mortgage Origination", status: "available", category: "retail", logo: "/images/partners/encompass.png" },
  { name: "Fannie Mae", function: "Loan Investor Software", status: "available", category: "retail", logo: "/images/partners/fannie-mae.png" },
  { name: "FedReporter", function: "Asset Liability Mgmt & Spreading", status: "available", category: "retail", logo: "/images/partners/fedreporter.png" },
  { name: "Ficast Data", function: "Call Report Automation", status: "available", category: "retail", logo: "/images/partners/ficast-data.png" },
  { name: "Fiserv", function: "Debit/Credit Card Processing", status: "available", category: "retail", logo: "/images/partners/fiserv.png" },
  { name: "Fiserv", function: "Card Connect", status: "available", category: "retail", logo: "/images/partners/fiserv-2.png" },
  { name: "Flexi", function: "GL/Financials", status: "available", category: "smb", logo: "/images/partners/flexi.png" },
  { name: "Freddie Mac", function: "Loan Investor Software", status: "available", category: "retail", logo: "/images/partners/freddie-mac.png" },
  { name: "Harland Clarke", function: "Check Order", status: "available", category: "retail", logo: "/images/partners/harland-clarke.png" },
  { name: "HC3", function: "Paper Statements, Notices, Loan Bills", status: "available", category: "smb", logo: "/images/partners/hc3.png" },
  { name: "IBS", function: "Collections Software", status: "available", category: "retail", logo: "/images/partners/ibs.png" },
  { name: "IdentiFi", function: "Document Management/eSign", status: "available", category: "retail", logo: "/images/partners/identifi.png" },
  { name: "IntraFi", function: "External Sweeps", status: "available", category: "retail", logo: "/images/partners/intrafi.png" },
  { name: "Intuit", function: "Web/Express Web Connect", status: "available", category: "smb", logo: "/images/partners/intuit.png" },
  { name: "Intuit", function: "FDX/Open Banking", status: "available", category: "smb", logo: "/images/partners/intuit-2.png" },
  { name: "InvestiFi", function: "Business Intelligence", status: "available", category: "retail", logo: "/images/partners/investifi.png" },
  { name: "Kinsta", function: "Cash Recycler Integration", status: "available", category: "retail", logo: "/images/partners/kinsta.png" },
  { name: "Kinsta", function: "Hosting for Landing Page", status: "available", category: "retail", logo: "/images/partners/kinsta-2.png" },
  { name: "Klarivis", function: "Tax Escrow Payment", status: "available", category: "retail", logo: "/images/partners/klarivis.png" },
  { name: "Lereta", function: "Reporting", status: "available", category: "retail", logo: "/images/partners/lereta.png" },
  { name: "Lightico", function: "eSign", status: "available", category: "smb", logo: "/images/partners/lightico.png" },
  { name: "LoanPro", function: "Lithic Credit Card Processing", status: "available", category: "retail", logo: "/images/partners/loanpro.png" },
  { name: "LoanPro", function: "Retail & Business CC Origination", status: "available", category: "retail", logo: "/images/partners/loanpro-2.png" },
  { name: "LoanPro", function: "Loan Origination System", status: "available", category: "retail", logo: "/images/partners/loanpro-3.png" },
  { name: "LoanVantage", function: "Commercial Loan Origination", status: "available", category: "retail", logo: "/images/partners/loanvantage.png" },
  { name: "MeridianLink", function: "Deposit Account Opening", status: "available", category: "retail", logo: "/images/partners/meridianlink.png" },
  { name: "MicroBilt", function: "Consumer Credit Bureau Pull", status: "available", category: "retail", logo: "/images/partners/microbilt.png" },
  { name: "Middesk", function: "KYB Automation", status: "available", category: "smb", logo: "/images/partners/middesk.png" },
  { name: "Mitek", function: "Mobile Remote Deposit", status: "available", category: "smb", logo: "/images/partners/mitek.png" },
  { name: "NCR", function: "Interactive Teller Machines", status: "available", category: "retail", logo: "/images/partners/ncr.png" },
  { name: "Open Loyalty", function: "Loyalty Rewards Platform", status: "available", category: "retail", logo: "/images/partners/open-loyalty.png" },
  { name: "Parascript", function: "Check Fraud Solution", status: "available", category: "retail", logo: "/images/partners/parascript.png" },
  { name: "Pathfinder", function: "Wire Transfer System", status: "available", category: "retail", logo: "/images/partners/pathfinder.png" },
  { name: "Paymentus", function: "Bill Payment, P2P, A2A", status: "available", category: "smb", logo: "/images/partners/paymentus.png" },
  { name: "Payrailz", function: "Bill Payment, P2P, A2A", status: "available", category: "retail", logo: "/images/partners/payrailz.png" },
  { name: "Pinwheel", function: "Direct Deposit Switching", status: "available", category: "retail", logo: "/images/partners/pinwheel.png" },
  { name: "Plaid", function: "Account Aggregation & IAV", status: "available", category: "smb", logo: "/images/partners/plaid.png" },
  { name: "Q2", function: "Reg E Dispute", status: "available", category: "retail", logo: "/images/partners/q2.png" },
  { name: "Q2", function: "Commercial Digital Banking", status: "available", category: "retail", logo: "/images/partners/q2-2.png" },
  { name: "R&T Deposit", function: "External Sweeps for FDIC Insurance", status: "available", category: "retail", logo: "/images/partners/r-amp-t-deposit.png" },
  { name: "SavvyMoney", function: "Credit Score", status: "available", category: "retail", logo: "/images/partners/savvymoney.png" },
  { name: "Scienaptic", function: "AI Powered Loan Decisioning", status: "available", category: "retail", logo: "/images/partners/scienaptic.png" },
  { name: "Socure", function: "KYC/KYB Automation", status: "available", category: "smb", logo: "/images/partners/socure.png" },
  { name: "Spark", function: "SBA Loan Origination", status: "available", category: "retail", logo: "/images/partners/spark.png" },
  { name: "Spiral", function: "Impact Platform (Donations)", status: "available", category: "retail", logo: "/images/partners/spiral.png" },
  { name: "Thales", function: "Card Issuance", status: "available", category: "retail", logo: "/images/partners/thales.png" },
  { name: "Tight", function: "SMB Invoicing", status: "available", category: "smb", logo: "/images/partners/tight.png" },
  { name: "TMR", function: "Lockbox", status: "available", category: "retail", logo: "/images/partners/tmr.png" },
  { name: "Topaz", function: "Signature Pads", status: "available", category: "retail", logo: "/images/partners/topaz.png" },
  { name: "TransFund", function: "Debit Card Processing", status: "available", category: "retail", logo: "/images/partners/transfund.png" },
  { name: "TruStage", function: "Compliant Documents", status: "available", category: "retail", logo: "/images/partners/trustage.png" },
  { name: "Velera", function: "Shared Branching", status: "available", category: "retail", logo: "/images/partners/velera.png" },
  { name: "Verafin", function: "BSA/AML Software", status: "available", category: "retail", logo: "/images/partners/verafin.png" },
  { name: "Verant ID", function: "ID Scan", status: "available", category: "retail", logo: "/images/partners/verant-id.png" },
  { name: "Visa DPS", function: "Debit/Credit Card Processing", status: "available", category: "retail", logo: "/images/partners/visa-dps.png" },
  { name: "Wysh", function: "Insurance", status: "roadmap", category: "retail", logo: "/images/partners/wysh.png" },
];

// ─── Status Badge ─────────────────────────────────────────────────────────────

function StatusBadge({ status }: { status: string }) {
  const config = {
    available: { label: "Available", className: "bg-emerald-50 text-emerald-700 border-emerald-200" },
    roadmap: { label: "Roadmap", className: "bg-amber-50 text-amber-700 border-amber-200" },
    evaluation: { label: "Evaluation", className: "bg-red-50 text-red-600 border-red-200" },
  };
  const { label, className } = config[status as keyof typeof config] || config.available;

  return (
    <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded border whitespace-nowrap ${className}`}>
      {label}
    </span>
  );
}

// ─── Partner Card ─────────────────────────────────────────────────────────────

function PartnerCard({ partner }: { partner: (typeof partners)[0] }) {
  const topBorderColor = {
    available: "border-t-emerald-500",
    roadmap: "border-t-amber-500",
    evaluation: "border-t-red-500",
  };

  return (
    <div
      className={`bg-white rounded-lg p-4 pb-6 flex flex-col gap-2.5 border-t-[3px] min-h-[110px] ${topBorderColor[partner.status as keyof typeof topBorderColor] || topBorderColor.available} shadow-[0_2px_12px_rgba(0,0,0,0.07)] hover:shadow-[0_4px_20px_rgba(0,0,0,0.11)] transition-shadow duration-200`}
    >
      {/* Logo area */}
      <div className="flex items-center justify-between gap-2 min-h-[40px]">
        <div className="relative h-8 w-[55%] flex-shrink-0">
          <Image
            src={partner.logo}
            alt={partner.name}
            fill
            className="object-contain object-left"
            sizes="120px"
          />
        </div>
        <StatusBadge status={partner.status} />
      </div>

      {/* Function description */}
      <p className="text-xs text-neutral-500 leading-snug">{partner.function}</p>
    </div>
  );
}

// ─── Search Icon ──────────────────────────────────────────────────────────────

function SearchIcon() {
  return (
    <svg className="w-4 h-4 text-neutral-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z" />
    </svg>
  );
}

// ─── Main Page ────────────────────────────────────────────────────────────────

export default function IntegrationsPage() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [search, setSearch] = useState("");

  const filteredPartners = useMemo(() => {
    let list = activeFilter === "all" ? partners : partners.filter((p) => p.category === activeFilter);
    if (search.trim()) {
      const q = search.toLowerCase();
      list = list.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.function.toLowerCase().includes(q)
      );
    }
    return list;
  }, [activeFilter, search]);

  return (
    <div className="bg-white text-neutral-900">
      {/* ─── Hero ─────────────────────────────────────────────────────────── */}
      <section className="relative pt-36 pb-20 md:pt-44 md:pb-28 overflow-hidden">
        <div
          className="absolute inset-0 w-full h-full"
          style={{
            backgroundImage: "url('/background---.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="container-site relative z-10">
          <ScrollReveal>
            <div className="max-w-3xl">
              <h1 className="text-[2.5rem] md:text-[3.5rem] font-bold leading-[1.08] tracking-[-0.02em] text-neutral-900 mb-6">
                Integrations
              </h1>
              <p className="text-neutral-500 text-lg md:text-xl leading-relaxed max-w-2xl">
                Our partner ecosystem extends the Nymbus platform with best-in-class integrations for identity, payments, compliance, and more.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ─── Filter + Partner Grid ─────────────────────────────────────────── */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-site">
          {/* Filter Bar + Search */}
          <ScrollReveal>
            <div className="flex flex-wrap items-center gap-2.5 mb-10">
              {/* Category pills */}
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveFilter(cat.id)}
                  className={`px-5 py-2 rounded-full text-sm font-bold tracking-wide border transition-all duration-200 cursor-pointer ${
                    activeFilter === cat.id
                      ? "bg-neutral-900 border-neutral-900 text-white"
                      : "bg-white border-neutral-200 text-neutral-500 hover:border-neutral-400 hover:text-neutral-900"
                  }`}
                >
                  {cat.label}
                  <span className="ml-1.5 opacity-60 font-semibold">{cat.count}</span>
                </button>
              ))}

              {/* Search box */}
              <div className="relative ml-auto flex items-center">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none">
                  <SearchIcon />
                </span>
                <input
                  type="text"
                  placeholder="Search integrations..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="pl-9 pr-4 py-2 rounded-full border border-neutral-200 bg-white text-sm text-neutral-900 placeholder-neutral-400 focus:outline-none focus:border-neutral-400 focus:ring-0 w-56 transition-colors"
                />
                {search && (
                  <button
                    onClick={() => setSearch("")}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-neutral-600 cursor-pointer"
                    aria-label="Clear search"
                  >
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                )}
              </div>
            </div>
          </ScrollReveal>

          {/* Partner Grid */}
          {filteredPartners.length > 0 ? (
            <ScrollReveal delay={0.05}>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {filteredPartners.map((partner, i) => (
                  <PartnerCard key={`${partner.name}-${partner.function}-${i}`} partner={partner} />
                ))}
              </div>
            </ScrollReveal>
          ) : (
            <p className="text-neutral-400 text-center py-16">
              No integrations found{search ? ` for "${search}"` : ""}.
            </p>
          )}
        </div>
      </section>

      {/* ─── CTA ──────────────────────────────────────────────────────────── */}
      <section className="py-20 md:py-28 bg-neutral-50 border-t border-neutral-100">
        <div className="container-site">
          <ScrollReveal>
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-[1.75rem] md:text-[2.25rem] font-bold leading-tight tracking-[-0.02em] text-neutral-900 mb-5">
                Don&apos;t see your integration?
              </h2>
              <p className="text-neutral-500 text-base md:text-lg leading-relaxed mb-8">
                We&apos;re always expanding our partner ecosystem. Reach out to discuss your integration needs.
              </p>
              <a
                href="/contact/"
                className="inline-flex items-center px-6 py-3 rounded-full bg-neutral-900 text-white text-sm font-semibold hover:bg-neutral-800 transition-colors"
              >
                Contact us
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
