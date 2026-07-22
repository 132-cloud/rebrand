"use client";

import { useRef, useEffect } from "react";
import Link from "next/link";

interface ManagedServicesDropdownProps {
  isActive: boolean;
  onOpen: () => void;
  onClose: () => void;
}

export function ManagedServicesDropdown({ isActive, onOpen, onClose }: ManagedServicesDropdownProps) {
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
        Managed Services
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
                {/* Column 1: MANAGED SERVICES intro */}
                <div>
                  <h4 className="text-neutral-400 text-[11px] font-semibold uppercase tracking-wider mb-4">
                    Managed Services
                  </h4>
                  <h3 className="text-[#171216] text-[1.65rem] font-bold leading-tight mb-4">
                    We don&apos;t just deploy it. We run it.
                  </h3>
                  <p className="text-neutral-500 text-sm leading-relaxed">
                    The team that builds your operations runs them too. Ship the model without standing up an operation behind it.
                  </p>
                  <div className="mt-6">
                    <Link
                      href="/managed-services/"
                      onClick={onClose}
                      className="inline-block px-5 py-2.5 text-sm font-semibold text-white bg-[#171216] rounded-full hover:bg-[#2a2329] transition-colors no-underline"
                    >
                      Managed Services overview
                    </Link>
                  </div>
                </div>

                {/* Column 2: WHAT WE RUN (left) */}
                <div>
                  <h4 className="text-neutral-400 text-[11px] font-semibold uppercase tracking-wider mb-4">
                    Run the operations
                  </h4>
                  <ul className="space-y-0.5">
                    <li>
                      <Link href="/managed-services/#contact-center" onClick={onClose} className="block py-2 group no-underline">
                        <span className="text-[#171216] text-sm font-semibold group-hover:text-blue transition-colors">Contact Center</span>
                        <span className="block text-neutral-500 text-xs mt-0.5">Support without hiring</span>
                      </Link>
                    </li>
                    <li>
                      <Link href="/managed-services/#onboarding" onClick={onClose} className="block py-2 group no-underline">
                        <span className="text-[#171216] text-sm font-semibold group-hover:text-blue transition-colors">Onboarding</span>
                        <span className="block text-neutral-500 text-xs mt-0.5">Fund more accounts</span>
                      </Link>
                    </li>
                    <li>
                      <Link href="/managed-services/#contact-center" onClick={onClose} className="block py-2 group no-underline">
                        <span className="text-[#171216] text-sm font-semibold group-hover:text-blue transition-colors">Servicing</span>
                        <span className="block text-neutral-500 text-xs mt-0.5">Fast service at any volume</span>
                      </Link>
                    </li>
                    <li>
                      <Link href="/managed-services/#back-office" onClick={onClose} className="block py-2 group no-underline">
                        <span className="text-[#171216] text-sm font-semibold group-hover:text-blue transition-colors">Back Office</span>
                        <span className="block text-neutral-500 text-xs mt-0.5">Back office, handled</span>
                      </Link>
                    </li>
                    <li>
                      <Link href="/managed-services/#compliance" onClick={onClose} className="block py-2 group no-underline">
                        <span className="text-[#171216] text-sm font-semibold group-hover:text-blue transition-colors">Compliance</span>
                        <span className="block text-neutral-500 text-xs mt-0.5">Stay covered as rules change</span>
                      </Link>
                    </li>
                    <li>
                      <Link href="/managed-services/#back-office" onClick={onClose} className="block py-2 group no-underline">
                        <span className="text-[#171216] text-sm font-semibold group-hover:text-blue transition-colors">Fraud</span>
                        <span className="block text-neutral-500 text-xs mt-0.5">Contain losses at scale</span>
                      </Link>
                    </li>
                    <li>
                      <Link href="/managed-services/#business-banking" onClick={onClose} className="block py-2 group no-underline">
                        <span className="text-[#171216] text-sm font-semibold group-hover:text-blue transition-colors">Business Banking Support</span>
                        <span className="block text-neutral-500 text-xs mt-0.5">Business ops, covered</span>
                      </Link>
                    </li>
                  </ul>
                </div>

                {/* Column 2 continued (right) */}
                <div>
                  <h4 className="text-neutral-400 text-[11px] font-semibold uppercase tracking-wider mb-4">
                    Growth
                  </h4>
                  <ul className="space-y-0.5">
                    <li>
                      <Link href="/labs/" onClick={onClose} className="block py-2 group no-underline">
                        <span className="text-[#171216] text-sm font-semibold group-hover:text-blue transition-colors inline-flex items-center gap-1.5">
                          Labs
                          <span className="relative flex h-1.5 w-1.5">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#697CB2] opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#697CB2]"></span>
                          </span>
                        </span>
                        <span className="block text-neutral-500 text-xs mt-0.5">Launch and grow</span>
                      </Link>
                    </li>

                  </ul>
                </div>

                {/* Column 3: FEATURED card */}
                <div>
                  <h4 className="text-neutral-400 text-[11px] font-semibold uppercase tracking-wider mb-4">
                    Featured
                  </h4>
                  <Link
                    href="/labs/"
                    onClick={onClose}
                    className="block rounded-2xl overflow-hidden no-underline group"
                  >
                    {/* Image area */}
                    <div className="bg-[#0f1019] p-6 flex items-center justify-center">
                      <LabsGraphic />
                    </div>
                    {/* Card text */}
                    <div className="bg-[#0f1019] px-5 pb-5 pt-2">
                      <h5 className="text-white text-sm font-bold mb-1.5 group-hover:text-blue-100 transition-colors">
                        Nymbus Labs
                      </h5>
                      <p className="text-white/50 text-xs leading-relaxed">
                        Audience strategy, offer design, launch planning, and post-launch optimization. The growth layer around the launch.
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

/* ─── Labs Growth Graphic ─────────────────────────────────────────────────────
   A simple growth/strategy visual for the featured card.
─────────────────────────────────────────────────────────────────────────────── */

function LabsGraphic() {
  return (
    <svg viewBox="0 0 200 140" className="w-[160px] h-[112px]" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Grid lines */}
      <line x1="20" y1="120" x2="180" y2="120" stroke="rgba(255,255,255,0.08)" strokeWidth="0.5" />
      <line x1="20" y1="90" x2="180" y2="90" stroke="rgba(255,255,255,0.05)" strokeWidth="0.5" />
      <line x1="20" y1="60" x2="180" y2="60" stroke="rgba(255,255,255,0.05)" strokeWidth="0.5" />
      <line x1="20" y1="30" x2="180" y2="30" stroke="rgba(255,255,255,0.05)" strokeWidth="0.5" />

      {/* Growth curve */}
      <path
        d="M 25 110 C 50 105, 70 95, 90 80 S 130 45, 175 20"
        stroke="url(#labsGradient)"
        strokeWidth="2.5"
        strokeLinecap="round"
        fill="none"
      />

      {/* Area fill under curve */}
      <path
        d="M 25 110 C 50 105, 70 95, 90 80 S 130 45, 175 20 L 175 120 L 25 120 Z"
        fill="url(#labsAreaGradient)"
      />

      {/* Data points */}
      <circle cx="25" cy="110" r="3" fill="#6366f1" />
      <circle cx="60" cy="98" r="3" fill="#6366f1" />
      <circle cx="90" cy="80" r="3" fill="#6366f1" />
      <circle cx="120" cy="58" r="3" fill="#818cf8" />
      <circle cx="150" cy="35" r="3" fill="#a5b4fc" />
      <circle cx="175" cy="20" r="4" fill="#c4b5fd" stroke="#7c3aed" strokeWidth="1.5" />

      {/* Strategy labels */}
      <text x="30" y="135" fontSize="7" fill="rgba(255,255,255,0.3)" fontFamily="sans-serif">STRATEGY</text>
      <text x="80" y="135" fontSize="7" fill="rgba(255,255,255,0.3)" fontFamily="sans-serif">LAUNCH</text>
      <text x="135" y="135" fontSize="7" fill="rgba(255,255,255,0.3)" fontFamily="sans-serif">OPTIMIZE</text>

      <defs>
        <linearGradient id="labsGradient" x1="25" y1="110" x2="175" y2="20" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#4f46e5" />
          <stop offset="100%" stopColor="#c4b5fd" />
        </linearGradient>
        <linearGradient id="labsAreaGradient" x1="100" y1="20" x2="100" y2="120" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="rgba(99,102,241,0.15)" />
          <stop offset="100%" stopColor="rgba(99,102,241,0)" />
        </linearGradient>
      </defs>
    </svg>
  );
}
