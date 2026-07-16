"use client";

import { ScrollReveal } from "@/components/animations/ScrollReveal";

const bankingTech = [
  "Core",
  "Digital Banking",
  "Account Opening",
  "API & MCP",
  "Analytics",
  "Rewards",
  "Engagement",
];

const managedServices = [
  "Contact Center",
  "Onboarding",
  "Servicing",
  "Compliance",
  "Fraud",
  "Back Office",
  "Growth Support",
];

function DiagramPill({ label }: { label: string }) {
  return (
    <div className="group relative px-5 py-2.5 rounded-lg bg-[#0050CC] hover:bg-[#2684FF] border border-[#4C9AFF]/40 hover:border-[#4C9AFF] transition-all duration-200 cursor-pointer text-center hover:shadow-[0_0_20px_rgba(0,101,255,0.5)]">
      <span className="text-white text-[14px] font-medium" style={{ fontFamily: "proxima-nova, sans-serif" }}>
        {label}
      </span>
    </div>
  );
}

export function PlatformDiagram() {
  return (
    <section className="relative section-padding bg-[#0a0a1a] overflow-hidden">
      {/* Blueprint grid background */}
      <div className="absolute inset-0 opacity-15 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0,100,255,0.2) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,100,255,0.2) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
      />

      <div className="container-site relative z-10">
        <ScrollReveal>
          <div className="max-w-5xl mb-12">
            <h4 className="text-[2rem] md:text-[2.15rem] mb-4 leading-tight">
              <span className="font-bold">Unified banking infrastructure for every growth strategy.</span>{" "}
              <span className="font-normal text-white/60">Launch, operate, engage, and connect across core, digital, data, and third-party systems.</span>
            </h4>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="relative max-w-[950px] mx-auto">
            {/* Column headers */}
            <div className="grid grid-cols-[1fr_auto_1fr] gap-0 mb-4">
              <div className="text-center">
                <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#56c1ff]" style={{ fontFamily: "proxima-nova, sans-serif" }}>
                  Banking Technology
                </span>
              </div>
              <div className="text-center px-12">
                <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#56c1ff]" style={{ fontFamily: "proxima-nova, sans-serif" }}>
                  Integrations
                </span>
              </div>
              <div className="text-center">
                <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#56c1ff]" style={{ fontFamily: "proxima-nova, sans-serif" }}>
                  Managed Services
                </span>
              </div>
            </div>

            {/* Main diagram */}
            <div className="grid grid-cols-[1fr_auto_1fr] gap-0 items-start">
              {/* Left column - Banking Technology */}
              <div className="rounded-2xl border border-dashed border-[#56c1ff]/30 p-4 flex flex-col gap-2.5">
                {bankingTech.map((item) => (
                  <DiagramPill key={item} label={item} />
                ))}
              </div>

              {/* Center column - Integrations */}
              <div className="flex flex-col items-center justify-start px-5 pt-2 relative">
                {/* Horizontal dashed connectors from left column */}
                <div className="absolute left-0 top-[60px] w-5 border-t border-dashed border-[#56c1ff]/40" />
                <div className="absolute left-0 top-[105px] w-5 border-t border-dashed border-[#56c1ff]/40" />
                <div className="absolute left-0 top-[150px] w-5 border-t border-dashed border-[#56c1ff]/40" />
                <div className="absolute left-0 top-[195px] w-5 border-t border-dashed border-[#56c1ff]/40" />
                <div className="absolute left-0 top-[240px] w-5 border-t border-dashed border-[#56c1ff]/40" />
                <div className="absolute left-0 top-[285px] w-5 border-t border-dashed border-[#56c1ff]/40" />
                <div className="absolute left-0 top-[330px] w-5 border-t border-dashed border-[#56c1ff]/40" />

                {/* Horizontal dashed connectors to right column */}
                <div className="absolute right-0 top-[60px] w-5 border-t border-dashed border-[#56c1ff]/40" />
                <div className="absolute right-0 top-[105px] w-5 border-t border-dashed border-[#56c1ff]/40" />
                <div className="absolute right-0 top-[150px] w-5 border-t border-dashed border-[#56c1ff]/40" />
                <div className="absolute right-0 top-[195px] w-5 border-t border-dashed border-[#56c1ff]/40" />
                <div className="absolute right-0 top-[240px] w-5 border-t border-dashed border-[#56c1ff]/40" />
                <div className="absolute right-0 top-[285px] w-5 border-t border-dashed border-[#56c1ff]/40" />
                <div className="absolute right-0 top-[330px] w-5 border-t border-dashed border-[#56c1ff]/40" />

                {/* 2x4 integrations grid box */}
                <div className="w-[100px] h-[100px] rounded-xl bg-[#0a1628] border border-[#4C9AFF]/30 flex items-center justify-center mb-4">
                  <div className="grid grid-cols-4 grid-rows-2 gap-1.5">
                    {[...Array(8)].map((_, i) => (
                      <div key={i} className="w-4 h-4 rounded-[3px] bg-white" />
                    ))}
                  </div>
                </div>

                {/* Vertical dashed line */}
                <div className="h-8 border-l border-dashed border-[#56c1ff]/40" />

                {/* Nymbus box */}
                <div className="w-[120px] h-[120px] rounded-xl bg-[#0a1628] border border-[#4C9AFF]/30 flex flex-col items-center justify-center gap-2 mb-4">
                  {/* Diamond logo */}
                  <svg width="28" height="22" viewBox="0 0 29 22" fill="none">
                    <path d="M14.5 0L29 11L14.5 22L0 11L14.5 0Z" fill="#697CB2" />
                    <path d="M14.5 0L29 11L14.5 11L0 11L14.5 0Z" fill="#4C9AFF" />
                  </svg>
                  <span className="text-white text-[10px] font-bold tracking-[0.2em] uppercase" style={{ fontFamily: "proxima-nova, sans-serif" }}>
                    Nymbus
                  </span>
                </div>

                {/* Vertical dashed line down */}
                <div className="h-8 border-l border-dashed border-[#56c1ff]/40" />

                {/* Governed AI Workflows pill */}
                <DiagramPill label="Governed AI Workflows" />

                {/* Vertical connector to MCP */}
                <div className="h-4 border-l border-dashed border-[#56c1ff]/40" />

                {/* MCP pill */}
                <div className="group px-5 py-2 rounded-lg bg-[#0050CC] hover:bg-[#2684FF] border border-[#4C9AFF]/40 hover:border-[#4C9AFF] transition-all duration-200 cursor-pointer text-center hover:shadow-[0_0_20px_rgba(0,101,255,0.5)]">
                  <span className="text-white text-[13px] font-medium" style={{ fontFamily: "proxima-nova, sans-serif" }}>
                    MCP
                  </span>
                </div>
              </div>

              {/* Right column - Managed Services */}
              <div className="rounded-2xl border border-dashed border-[#56c1ff]/30 p-4 flex flex-col gap-2.5">
                {managedServices.map((item) => (
                  <DiagramPill key={item} label={item} />
                ))}
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
