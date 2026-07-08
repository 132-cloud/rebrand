"use client";

import { useRef, useEffect } from "react";
import Link from "next/link";

interface SolutionsDropdownProps {
  isActive: boolean;
  onOpen: () => void;
  onClose: () => void;
}

export function SolutionsDropdown({ isActive, onOpen, onClose }: SolutionsDropdownProps) {
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
        Solutions
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
                {/* Column 1: SOLUTIONS intro */}
                <div>
                  <h4 className="text-neutral-400 text-[11px] font-semibold uppercase tracking-wider mb-4">
                    Solutions
                  </h4>
                  <h3 className="text-neutral-900 text-[1.65rem] font-bold leading-tight mb-4">
                    Launch alongside your core, or modernize from it.
                  </h3>
                  <p className="text-neutral-500 text-sm leading-relaxed">
                    Stand up something new next to what you run today, or modernize the foundation itself. One platform, two paths to market.
                  </p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    <Link
                      href="/request-demo/"
                      onClick={onClose}
                      className="inline-block px-5 py-2.5 text-sm font-semibold text-white bg-neutral-900 rounded-full hover:bg-neutral-800 transition-colors no-underline"
                    >
                      See a demo
                    </Link>
                    <Link
                      href="/contact/"
                      onClick={onClose}
                      className="inline-block px-5 py-2.5 text-sm font-semibold text-neutral-900 border border-neutral-300 rounded-full hover:bg-neutral-50 transition-colors no-underline"
                    >
                      Contact sales
                    </Link>
                  </div>
                </div>

                {/* Column 2: LAUNCH A PRIMARY CORE + LAUNCH A PARALLEL CORE */}
                <div>
                  <h4 className="text-neutral-400 text-[11px] font-semibold uppercase tracking-wider mb-4">
                    Launch a Primary Core
                  </h4>
                  <ul className="space-y-0.5">
                    <li>
                      <Link href="/solutions/primary-core/#core-replacement" onClick={onClose} className="block py-2 group no-underline">
                        <span className="text-neutral-900 text-sm font-semibold group-hover:text-blue transition-colors">Core replacement</span>
                      </Link>
                    </li>
                    <li>
                      <Link href="/solutions/primary-core/#de-novo" onClick={onClose} className="block py-2 group no-underline">
                        <span className="text-neutral-900 text-sm font-semibold group-hover:text-blue transition-colors">De novo launch</span>
                      </Link>
                    </li>
                  </ul>

                  <h4 className="text-neutral-400 text-[11px] font-semibold uppercase tracking-wider mb-4 mt-6">
                    Launch a Parallel Core
                  </h4>
                  <ul className="space-y-0.5">
                    <li>
                      <Link href="/solutions/parallel-core/#vertical-brands" onClick={onClose} className="block py-2 group no-underline">
                        <span className="text-neutral-900 text-sm font-semibold group-hover:text-blue transition-colors">Vertical brand launches</span>
                      </Link>
                    </li>
                    <li>
                      <Link href="/solutions/parallel-core/#new-lines" onClick={onClose} className="block py-2 group no-underline">
                        <span className="text-neutral-900 text-sm font-semibold group-hover:text-blue transition-colors">New lines of business</span>
                      </Link>
                    </li>
                    <li>
                      <Link href="/solutions/parallel-core/#ma-acceleration" onClick={onClose} className="block py-2 group no-underline">
                        <span className="text-neutral-900 text-sm font-semibold group-hover:text-blue transition-colors">M&A acceleration</span>
                      </Link>
                    </li>
                    <li>
                      <Link href="/solutions/parallel-core/#private-label" onClick={onClose} className="block py-2 group no-underline">
                        <span className="text-neutral-900 text-sm font-semibold group-hover:text-blue transition-colors">Private label banking</span>
                      </Link>
                    </li>
                    <li>
                      <Link href="/solutions/parallel-core/#sandbox" onClick={onClose} className="block py-2 group no-underline">
                        <span className="text-neutral-900 text-sm font-semibold group-hover:text-blue transition-colors">Sandbox innovation</span>
                      </Link>
                    </li>
                  </ul>
                </div>

                {/* Column 3: SEGMENTS */}
                <div>
                  <h4 className="text-neutral-400 text-[11px] font-semibold uppercase tracking-wider mb-4">
                    Segments
                  </h4>
                  <ul className="space-y-0.5">
                    <li>
                      <Link href="/solutions/business-banking/" onClick={onClose} className="block py-2 group no-underline">
                        <span className="text-neutral-900 text-sm font-semibold group-hover:text-blue transition-colors">Business</span>
                      </Link>
                    </li>
                    <li>
                      <Link href="/solutions/commercial-banking/" onClick={onClose} className="block py-2 group no-underline">
                        <span className="text-neutral-900 text-sm font-semibold group-hover:text-blue transition-colors">Commercial</span>
                      </Link>
                    </li>
                    <li>
                      <Link href="/solutions/personal-banking/" onClick={onClose} className="block py-2 group no-underline">
                        <span className="text-neutral-900 text-sm font-semibold group-hover:text-blue transition-colors">Personal</span>
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
                    href="/customers/msufcu/"
                    onClick={onClose}
                    className="block rounded-2xl overflow-hidden no-underline group"
                  >
                    {/* Image area with MSUFCU logo */}
                    <div className="bg-[#0f1019] p-8 flex items-center justify-center">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src="/images/logos/msufcu-logo.svg"
                        alt="MSU FCU"
                        className="h-10 w-auto brightness-0 invert opacity-80"
                      />
                    </div>
                    {/* Card text */}
                    <div className="bg-[#0f1019] px-5 pb-5 pt-2">
                      <h5 className="text-white text-sm font-bold mb-1.5 group-hover:text-blue-100 transition-colors">
                        From plan to platform
                      </h5>
                      <p className="text-white/50 text-xs leading-relaxed">
                        See how MSU FCU launched a new business banking brand alongside its existing core.
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
