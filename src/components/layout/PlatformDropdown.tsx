"use client";

import { useRef, useEffect } from "react";
import Link from "next/link";

interface PlatformDropdownProps {
  isActive: boolean;
  onOpen: () => void;
  onClose: () => void;
}

export function PlatformDropdown({ isActive, onOpen, onClose }: PlatformDropdownProps) {
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    onOpen();
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(onClose, 100);
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  return (
    <div
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button
        className={`px-4 py-2 text-sm font-medium transition-colors rounded-lg flex items-center gap-1.5 ${
          isActive ? "text-white bg-white/5" : "text-white/70 hover:text-white hover:bg-white/5"
        }`}
        aria-expanded={isActive}
        aria-haspopup="true"
      >
        Platform
        <svg
          className={`w-3.5 h-3.5 transition-transform duration-200 ${isActive ? "rotate-180" : ""}`}
          fill="none"
          viewBox="0 0 14 14"
        >
          <path d="M3 5l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      {isActive && (
        <div className="fixed top-16 md:top-20 left-0 right-0 pt-0 z-50">
          <div className="bg-white border-b border-neutral-200 shadow-2xl shadow-black/10 px-8 py-10">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-4 gap-10">
                {/* Column 1: PLATFORM intro */}
                <div>
                  <h4 className="text-neutral-400 text-[11px] font-semibold uppercase tracking-wider mb-4">
                    Platform
                  </h4>
                  <h3 className="text-neutral-900 text-[1.65rem] font-bold leading-tight mb-4">
                    One connected platform.
                  </h3>
                  <p className="text-neutral-500 text-sm leading-relaxed">
                    Core processing, digital banking, account opening, and managed operations, built to work separately or together.
                  </p>
                  <div className="mt-6">
                    <Link
                      href="/platform/"
                      onClick={onClose}
                      className="inline-block px-5 py-2.5 text-sm font-semibold text-white bg-neutral-900 rounded-full hover:bg-neutral-800 transition-colors no-underline"
                    >
                      Platform overview
                    </Link>
                  </div>
                </div>

                {/* Column 2: BANKING TECHNOLOGY */}
                <div>
                  <h4 className="text-neutral-400 text-[11px] font-semibold uppercase tracking-wider mb-4">
                    Banking Technology
                  </h4>
                  <ul className="space-y-0.5">
                    <li>
                      <Link href="/platform/#core-processing" onClick={onClose} className="block py-2 group no-underline">
                        <span className="text-neutral-900 text-sm font-semibold group-hover:text-blue transition-colors">Core Processing</span>
                        <span className="block text-neutral-500 text-xs mt-0.5">Banking system of record</span>
                      </Link>
                    </li>
                    <li>
                      <Link href="/platform/#digital-banking" onClick={onClose} className="block py-2 group no-underline">
                        <span className="text-neutral-900 text-sm font-semibold group-hover:text-blue transition-colors">Digital Banking</span>
                        <span className="block text-neutral-500 text-xs mt-0.5">Modern experience customers demand</span>
                      </Link>
                    </li>
                    <li>
                      <Link href="/platform/#account-opening" onClick={onClose} className="block py-2 group no-underline">
                        <span className="text-neutral-900 text-sm font-semibold group-hover:text-blue transition-colors">Account Opening</span>
                        <span className="block text-neutral-500 text-xs mt-0.5">From intent to funded</span>
                      </Link>
                    </li>
                  </ul>

                  <h4 className="text-neutral-400 text-[11px] font-semibold uppercase tracking-wider mb-4 mt-6">
                    Loyalty and Engagement
                  </h4>
                  <ul className="space-y-0.5">
                    <li>
                      <Link href="/platform/#loyalty-engagement" onClick={onClose} className="block py-2 group no-underline">
                        <span className="text-neutral-900 text-sm font-semibold group-hover:text-blue transition-colors">Levels</span>
                        <span className="block text-neutral-500 text-xs mt-0.5">Rewards program built into the account</span>
                      </Link>
                    </li>
                    <li>
                      <Link href="/platform/#loyalty-engagement" onClick={onClose} className="block py-2 group no-underline">
                        <span className="text-neutral-900 text-sm font-semibold group-hover:text-blue transition-colors">Engage</span>
                        <span className="block text-neutral-500 text-xs mt-0.5">Turn accounts into relationships</span>
                      </Link>
                    </li>
                  </ul>
                </div>

                {/* Column 3: INTELLIGENCE */}
                <div>
                  <h4 className="text-neutral-400 text-[11px] font-semibold uppercase tracking-wider mb-4">
                    Intelligence
                  </h4>
                  <ul className="space-y-0.5">
                    <li>
                      <Link href="/platform/#connect" onClick={onClose} className="block py-2 group no-underline">
                        <span className="text-neutral-900 text-sm font-semibold group-hover:text-blue transition-colors">Connect</span>
                        <span className="block text-neutral-500 text-xs mt-0.5">APIs and streaming</span>
                      </Link>
                    </li>
                    <li>
                      <Link href="/platform/#insights" onClick={onClose} className="block py-2 group no-underline">
                        <span className="text-neutral-900 text-sm font-semibold group-hover:text-blue transition-colors">Insights</span>
                        <span className="block text-neutral-500 text-xs mt-0.5">Analytics that show what&apos;s working</span>
                      </Link>
                    </li>
                    <li>
                      <Link href="/platform/#nymbus-mcp" onClick={onClose} className="block py-2 group no-underline">
                        <span className="text-neutral-900 text-sm font-semibold group-hover:text-blue transition-colors">Nymbus MCP</span>
                        <span className="block text-neutral-500 text-xs mt-0.5">AI that drives real banking workflows</span>
                      </Link>
                    </li>
                  </ul>

                  {/* SERVICES sub-section */}
                  <h4 className="text-neutral-400 text-[11px] font-semibold uppercase tracking-wider mb-4 mt-8">
                    Services
                  </h4>
                  <ul className="space-y-0.5">
                    <li>
                      <Link href="/managed-services/" onClick={onClose} className="block py-2 group no-underline">
                        <span className="text-neutral-900 text-sm font-semibold group-hover:text-blue transition-colors">Managed Services</span>
                        <span className="block text-neutral-500 text-xs mt-0.5">Add operational capacity</span>
                      </Link>
                    </li>
                  </ul>
                </div>

                {/* Column 4: FEATURED card */}
                <div>
                  <h4 className="text-neutral-400 text-[11px] font-semibold uppercase tracking-wider mb-4">
                    Featured
                  </h4>
                  <Link
                    href="/ai/#nymbus-mcp"
                    onClick={onClose}
                    className="block rounded-2xl overflow-hidden no-underline group"
                  >
                    {/* Hub diagram area */}
                    <div className="bg-[#0f1019] p-6 flex items-center justify-center">
                      <MCPHubDiagram />
                    </div>
                    {/* Card text */}
                    <div className="bg-[#0f1019] px-5 pb-5 pt-2">
                      <h5 className="text-white text-sm font-bold mb-1.5 group-hover:text-blue-100 transition-colors">
                        Nymbus MCP
                      </h5>
                      <p className="text-white/50 text-xs leading-relaxed">
                        Connect AI to your banking data and workflows, under permissions, approvals, and a full audit trail.
                      </p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

/* ─── Nymbus MCP Hub Diagram ──────────────────────────────────────────────────
   A central "N+" logo surrounded by 8 icon nodes connected by lines on a
   dashed orbit circle. Matches the reference screenshot.
─────────────────────────────────────────────────────────────────────────────── */

function MCPHubDiagram() {
  // 8 icons positioned around a circle
  const icons = [
    { angle: 0, icon: "database" },      // top
    { angle: 45, icon: "bank" },          // top-right
    { angle: 90, icon: "code" },          // right
    { angle: 135, icon: "shield" },       // bottom-right
    { angle: 180, icon: "user" },         // bottom
    { angle: 225, icon: "document" },     // bottom-left
    { angle: 270, icon: "chart" },        // left
    { angle: 315, icon: "cloud" },        // top-left
  ];

  const cx = 100;
  const cy = 100;
  const orbitR = 62;
  const nodeR = 16;

  return (
    <svg viewBox="0 0 200 200" className="w-[160px] h-[160px]" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Dashed orbit circle */}
      <circle cx={cx} cy={cy} r={orbitR - 14} stroke="rgba(100,120,255,0.3)" strokeWidth="1" strokeDasharray="3 3" fill="none" />

      {/* Connection lines + glow dots on orbit */}
      {icons.map(({ angle }, i) => {
        const rad = ((angle - 90) * Math.PI) / 180;
        const orbitX = cx + (orbitR - 14) * Math.cos(rad);
        const orbitY = cy + (orbitR - 14) * Math.sin(rad);
        const nodeX = cx + orbitR * Math.cos(rad);
        const nodeY = cy + orbitR * Math.sin(rad);
        return (
          <g key={i}>
            {/* Line from orbit to node */}
            <line x1={orbitX} y1={orbitY} x2={nodeX} y2={nodeY} stroke="rgba(100,120,255,0.4)" strokeWidth="0.75" />
            {/* Glow dot on orbit */}
            <circle cx={orbitX} cy={orbitY} r="2.5" fill="#6366f1" />
            <circle cx={orbitX} cy={orbitY} r="1.5" fill="#a5b4fc" />
            {/* Node circle background */}
            <circle cx={nodeX} cy={nodeY} r={nodeR} fill="#1e1f2e" stroke="rgba(255,255,255,0.08)" strokeWidth="0.75" />
          </g>
        );
      })}

      {/* Center logo circle */}
      <circle cx={cx} cy={cy} r="18" fill="url(#centerGradient)" />
      <text x={cx} y={cy + 1} textAnchor="middle" dominantBaseline="middle" fontSize="11" fontWeight="bold" fill="white" fontFamily="sans-serif">
        N<tspan fontSize="7" dy="-3">+</tspan>
      </text>

      {/* Node icons */}
      {icons.map(({ angle, icon }, i) => {
        const rad = ((angle - 90) * Math.PI) / 180;
        const nodeX = cx + orbitR * Math.cos(rad);
        const nodeY = cy + orbitR * Math.sin(rad);
        return (
          <g key={`icon-${i}`} transform={`translate(${nodeX - 7}, ${nodeY - 7})`}>
            <NodeIcon type={icon} />
          </g>
        );
      })}

      {/* Gradient defs */}
      <defs>
        <radialGradient id="centerGradient" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#7c3aed" />
          <stop offset="100%" stopColor="#4f46e5" />
        </radialGradient>
      </defs>
    </svg>
  );
}

function NodeIcon({ type }: { type: string }) {
  const s = "14"; // icon viewport size
  const strokeProps = { stroke: "rgba(255,255,255,0.7)", strokeWidth: "1.2", strokeLinecap: "round" as const, strokeLinejoin: "round" as const, fill: "none" };

  switch (type) {
    case "database":
      return (
        <svg width={s} height={s} viewBox="0 0 14 14" fill="none">
          <ellipse cx="7" cy="3.5" rx="4.5" ry="1.8" {...strokeProps} />
          <path d="M2.5 3.5v7c0 1 2 1.8 4.5 1.8s4.5-.8 4.5-1.8v-7" {...strokeProps} />
          <path d="M2.5 7c0 1 2 1.8 4.5 1.8s4.5-.8 4.5-1.8" {...strokeProps} />
        </svg>
      );
    case "bank":
      return (
        <svg width={s} height={s} viewBox="0 0 14 14" fill="none">
          <path d="M7 1.5L1.5 4.5h11L7 1.5z" {...strokeProps} />
          <path d="M3 5.5v5M7 5.5v5M11 5.5v5" {...strokeProps} />
          <path d="M1.5 11h11" {...strokeProps} />
          <path d="M1 12.5h12" {...strokeProps} />
        </svg>
      );
    case "code":
      return (
        <svg width={s} height={s} viewBox="0 0 14 14" fill="none">
          <path d="M4.5 4L2 7l2.5 3" {...strokeProps} />
          <path d="M9.5 4L12 7l-2.5 3" {...strokeProps} />
          <path d="M8 2.5L6 11.5" {...strokeProps} />
        </svg>
      );
    case "shield":
      return (
        <svg width={s} height={s} viewBox="0 0 14 14" fill="none">
          <path d="M7 1.5L2.5 3.5v3.5c0 2.5 2 4.5 4.5 5.5 2.5-1 4.5-3 4.5-5.5V3.5L7 1.5z" {...strokeProps} />
          <path d="M5 7l1.5 1.5L9.5 5.5" {...strokeProps} />
        </svg>
      );
    case "user":
      return (
        <svg width={s} height={s} viewBox="0 0 14 14" fill="none">
          <circle cx="7" cy="4.5" r="2.5" {...strokeProps} />
          <path d="M2.5 12.5c0-2.5 2-4 4.5-4s4.5 1.5 4.5 4" {...strokeProps} />
        </svg>
      );
    case "document":
      return (
        <svg width={s} height={s} viewBox="0 0 14 14" fill="none">
          <path d="M3.5 1.5h5l2.5 2.5v8.5h-7.5v-11z" {...strokeProps} />
          <path d="M8.5 1.5v2.5h2.5" {...strokeProps} />
          <path d="M5.5 6.5h3M5.5 8.5h3M5.5 10.5h2" {...strokeProps} />
        </svg>
      );
    case "chart":
      return (
        <svg width={s} height={s} viewBox="0 0 14 14" fill="none">
          <path d="M2 11.5h10" {...strokeProps} />
          <rect x="3" y="7" width="2" height="4.5" rx="0.5" {...strokeProps} />
          <rect x="6" y="4.5" width="2" height="7" rx="0.5" {...strokeProps} />
          <rect x="9" y="2.5" width="2" height="9" rx="0.5" {...strokeProps} />
        </svg>
      );
    case "cloud":
      return (
        <svg width={s} height={s} viewBox="0 0 14 14" fill="none">
          <path d="M3.5 9.5c-1.2 0-2-.8-2-2 0-1 .8-1.8 1.8-2C3.5 4 5 2.5 7 2.5c1.7 0 3 1 3.5 2.3.1 0 .2 0 .3 0 1.2 0 2 .9 2 2s-.8 2.2-2 2.2H3.5z" {...strokeProps} />
        </svg>
      );
    default:
      return null;
  }
}
