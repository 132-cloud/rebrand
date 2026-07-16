"use client";

import { useRef, useEffect } from "react";
import Link from "next/link";

interface AIDropdownProps {
  isActive: boolean;
  onOpen: () => void;
  onClose: () => void;
}

export function AIDropdown({ isActive, onOpen, onClose }: AIDropdownProps) {
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
        AI
        <svg
          className={`w-3.5 h-3.5 transition-transform duration-200 ${isActive ? "rotate-180" : ""}`}
          fill="none"
          viewBox="0 0 14 14"
        >
          <path d="M3 5l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      {isActive && (
        <div className="fixed top-[calc(28px+4rem)] md:top-[calc(28px+5rem)] left-0 right-0 pt-0 z-50">
          <div className="bg-white border-b border-neutral-200 shadow-2xl shadow-black/10 px-8 py-10">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-4 gap-10">
                {/* Column 1: AI intro */}
                <div>
                  <h4 className="text-neutral-400 text-[11px] font-semibold uppercase tracking-wider mb-4">
                    AI
                  </h4>
                  <h3 className="text-[#171216] text-[1.65rem] font-bold leading-tight mb-4 max-w-[280px]">
                    AI that answers to permissions, approvals, and audit.
                  </h3>
                  <p className="text-neutral-500 text-sm leading-relaxed">
                    Governed and operational. Build with AI works inside the rules your institution already runs on.
                  </p>
                  <div className="mt-6">
                    <Link
                      href="/ai/"
                      onClick={onClose}
                      className="inline-block px-5 py-2.5 text-sm font-semibold text-white bg-[#171216] rounded-full hover:bg-[#2a2329] transition-colors no-underline"
                    >
                      Build with AI
                    </Link>
                  </div>
                </div>

                {/* Column 2: OUR APPROACH */}
                <div>
                  <h4 className="text-neutral-400 text-[11px] font-semibold uppercase tracking-wider mb-4">
                    Our Approach
                  </h4>
                  <ul className="space-y-0.5">
                    <li>
                      <Link href="/ai/" onClick={onClose} className="block py-2 group no-underline">
                        <span className="text-[#171216] text-sm font-semibold group-hover:text-blue transition-colors">AI Approach</span>
                        <span className="block text-neutral-500 text-xs mt-0.5">Governed by design, not bolted on top</span>
                      </Link>
                    </li>
                    <li>
                      <Link href="/ai/#nymbus-mcp" onClick={onClose} className="block py-2 group no-underline">
                        <span className="text-[#171216] text-sm font-semibold group-hover:text-blue transition-colors">Nymbus MCP</span>
                        <span className="block text-neutral-500 text-xs mt-0.5">Automation you control</span>
                      </Link>
                    </li>
                    <li>
                      <Link href="/ai/#applied" onClick={onClose} className="block py-2 group no-underline">
                        <span className="text-[#171216] text-sm font-semibold group-hover:text-blue transition-colors">Applied AI</span>
                        <span className="block text-neutral-500 text-xs mt-0.5">AI results, not roadmaps</span>
                      </Link>
                    </li>
                  </ul>
                </div>

                {/* Column 3: empty spacer to maintain grid */}
                <div />

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
                    {/* Network graphic */}
                    <div className="bg-[#0f1019] p-6 flex items-center justify-center">
                      <NetworkGraphic />
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

function NetworkGraphic() {
  return (
    <svg viewBox="0 0 160 120" className="w-[140px] h-[105px]" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Connection lines */}
      <line x1="80" y1="60" x2="30" y2="25" stroke="rgba(100,120,255,0.3)" strokeWidth="0.75" />
      <line x1="80" y1="60" x2="130" y2="25" stroke="rgba(100,120,255,0.3)" strokeWidth="0.75" />
      <line x1="80" y1="60" x2="25" y2="95" stroke="rgba(100,120,255,0.3)" strokeWidth="0.75" />
      <line x1="80" y1="60" x2="135" y2="95" stroke="rgba(100,120,255,0.3)" strokeWidth="0.75" />
      <line x1="80" y1="60" x2="80" y2="15" stroke="rgba(100,120,255,0.3)" strokeWidth="0.75" />
      <line x1="80" y1="60" x2="80" y2="105" stroke="rgba(100,120,255,0.3)" strokeWidth="0.75" />

      {/* Outer nodes */}
      <circle cx="30" cy="25" r="10" fill="#1e1f2e" stroke="rgba(255,255,255,0.08)" strokeWidth="0.75" />
      <circle cx="130" cy="25" r="10" fill="#1e1f2e" stroke="rgba(255,255,255,0.08)" strokeWidth="0.75" />
      <circle cx="25" cy="95" r="10" fill="#1e1f2e" stroke="rgba(255,255,255,0.08)" strokeWidth="0.75" />
      <circle cx="135" cy="95" r="10" fill="#1e1f2e" stroke="rgba(255,255,255,0.08)" strokeWidth="0.75" />
      <circle cx="80" cy="15" r="10" fill="#1e1f2e" stroke="rgba(255,255,255,0.08)" strokeWidth="0.75" />
      <circle cx="80" cy="105" r="10" fill="#1e1f2e" stroke="rgba(255,255,255,0.08)" strokeWidth="0.75" />

      {/* Glow dots on connections */}
      <circle cx="55" cy="42" r="2" fill="#6366f1" />
      <circle cx="105" cy="42" r="2" fill="#6366f1" />
      <circle cx="52" cy="78" r="2" fill="#6366f1" />
      <circle cx="108" cy="78" r="2" fill="#6366f1" />
      <circle cx="80" cy="37" r="2" fill="#6366f1" />
      <circle cx="80" cy="83" r="2" fill="#6366f1" />

      {/* Center node */}
      <circle cx="80" cy="60" r="16" fill="url(#aiCenterGradient)" />
      <text x="80" y="61" textAnchor="middle" dominantBaseline="middle" fontSize="9" fontWeight="bold" fill="white" fontFamily="sans-serif">
        N<tspan fontSize="6" dy="-2">+</tspan>
      </text>

      {/* Dashed orbit */}
      <circle cx="80" cy="60" r="30" stroke="rgba(100,120,255,0.2)" strokeWidth="0.75" strokeDasharray="3 3" fill="none" />

      <defs>
        <radialGradient id="aiCenterGradient" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#7c3aed" />
          <stop offset="100%" stopColor="#4f46e5" />
        </radialGradient>
      </defs>
    </svg>
  );
}
