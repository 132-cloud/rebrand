"use client";

import { useRef, useEffect } from "react";
import Link from "next/link";

interface ResourcesDropdownProps {
  isActive: boolean;
  onOpen: () => void;
  onClose: () => void;
}

export function ResourcesDropdown({ isActive, onOpen, onClose }: ResourcesDropdownProps) {
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
        Resources
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
                {/* Column 1: RESOURCES intro */}
                <div>
                  <h4 className="text-neutral-400 text-[11px] font-semibold uppercase tracking-wider mb-4">
                    Resources
                  </h4>
                  <h3 className="text-[#171216] text-[1.65rem] font-bold leading-tight mb-4">
                    See how modern banking is being built.
                  </h3>
                  <p className="text-neutral-500 text-sm leading-relaxed">
                    Guides, insights, and stories on launching, modernizing, and running with Nymbus.
                  </p>
                  <div className="mt-6">
                    <Link
                      href="/insights-hub/"
                      onClick={onClose}
                      className="inline-block px-5 py-2.5 text-sm font-semibold text-white bg-[#171216] rounded-full hover:bg-[#2a2329] transition-colors no-underline"
                    >
                      Latest insights
                    </Link>
                  </div>
                </div>

                {/* Column 2: LEARN */}
                <div>
                  <h4 className="text-neutral-400 text-[11px] font-semibold uppercase tracking-wider mb-4">
                    Learn
                  </h4>
                  <ul className="space-y-0.5">
                    <li>
                      <Link href="/insights-hub/" onClick={onClose} className="block py-2 group no-underline">
                        <span className="text-[#171216] text-sm font-semibold group-hover:text-blue transition-colors">Insights</span>
                        <span className="block text-neutral-500 text-xs mt-0.5">Ideas for growth</span>
                      </Link>
                    </li>
                    <li>
                      <Link href="/customers/" onClick={onClose} className="block py-2 group no-underline">
                        <span className="text-[#171216] text-sm font-semibold group-hover:text-blue transition-colors">Customers</span>
                        <span className="block text-neutral-500 text-xs mt-0.5">See who launched</span>
                      </Link>
                    </li>
                    <li>
                      <Link href="/integrations/" onClick={onClose} className="block py-2 group no-underline">
                        <span className="text-[#171216] text-sm font-semibold group-hover:text-blue transition-colors">Integrations</span>
                        <span className="block text-neutral-500 text-xs mt-0.5">Plug in your partners</span>
                      </Link>
                    </li>
                    <li>
                      <Link href="/product-releases/" onClick={onClose} className="block py-2 group no-underline">
                        <span className="text-[#171216] text-sm font-semibold group-hover:text-blue transition-colors">Product releases</span>
                        <span className="block text-neutral-500 text-xs mt-0.5">See what shipped</span>
                      </Link>
                    </li>
                  </ul>
                </div>

                {/* Column 3: COMPANY */}
                <div>
                  <h4 className="text-neutral-400 text-[11px] font-semibold uppercase tracking-wider mb-4">
                    Company
                  </h4>
                  <ul className="space-y-0.5">
                    <li>
                      <Link href="/about/" onClick={onClose} className="block py-1.5 group no-underline">
                        <span className="text-[#171216] text-sm font-semibold group-hover:text-blue transition-colors">About Nymbus</span>
                      </Link>
                    </li>
                    <li>
                      <Link href="/cuso/" onClick={onClose} className="block py-1.5 group no-underline">
                        <span className="text-[#171216] text-sm font-semibold group-hover:text-blue transition-colors">CUSO</span>
                      </Link>
                    </li>
                    <li>
                      <Link href="/careers/" onClick={onClose} className="block py-1.5 group no-underline">
                        <span className="text-[#171216] text-sm font-semibold group-hover:text-blue transition-colors">Jobs</span>
                      </Link>
                    </li>
                    <li>
                      <Link href="/press/" onClick={onClose} className="block py-1.5 group no-underline">
                        <span className="text-[#171216] text-sm font-semibold group-hover:text-blue transition-colors">Pressroom</span>
                      </Link>
                    </li>
                    <li>
                      <Link href="/contact/" onClick={onClose} className="block py-1.5 group no-underline">
                        <span className="text-[#171216] text-sm font-semibold group-hover:text-blue transition-colors">Contact</span>
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
                    href="/ai/"
                    onClick={onClose}
                    className="block rounded-2xl overflow-hidden no-underline group"
                  >
                    {/* Editorial graphic */}
                    <div className="bg-[#0f1019] p-6 flex items-center justify-center">
                      <EditorialGraphic />
                    </div>
                    {/* Card text */}
                    <div className="bg-[#0f1019] px-5 pb-5 pt-2">
                      <h5 className="text-white text-sm font-bold mb-1.5 group-hover:text-blue-100 transition-colors">
                        Governed AI for real banking workflows
                      </h5>
                      <p className="text-white/50 text-xs leading-relaxed">
                        As the platform behind banks and credit unions building what&apos;s next, we have a front-row seat to how AI is reshaping banking operations.
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

function EditorialGraphic() {
  return (
    <svg viewBox="0 0 160 100" className="w-[140px] h-[88px]" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Abstract document/editorial lines */}
      <rect x="20" y="15" width="120" height="70" rx="8" fill="#1e1f2e" stroke="rgba(255,255,255,0.06)" strokeWidth="0.75" />

      {/* Header bar */}
      <rect x="30" y="25" width="50" height="4" rx="2" fill="rgba(99,102,241,0.6)" />
      <rect x="30" y="33" width="80" height="3" rx="1.5" fill="rgba(255,255,255,0.12)" />
      <rect x="30" y="40" width="70" height="3" rx="1.5" fill="rgba(255,255,255,0.08)" />
      <rect x="30" y="47" width="75" height="3" rx="1.5" fill="rgba(255,255,255,0.08)" />

      {/* Divider */}
      <line x1="30" y1="56" x2="130" y2="56" stroke="rgba(255,255,255,0.06)" strokeWidth="0.5" />

      {/* Bottom content blocks */}
      <rect x="30" y="62" width="35" height="15" rx="3" fill="rgba(99,102,241,0.12)" />
      <rect x="70" y="62" width="35" height="15" rx="3" fill="rgba(99,102,241,0.08)" />
      <rect x="110" y="62" width="20" height="15" rx="3" fill="rgba(99,102,241,0.05)" />

      {/* Accent dot */}
      <circle cx="130" cy="27" r="4" fill="#6366f1" opacity="0.6" />
    </svg>
  );
}
