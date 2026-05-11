"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
}

const navSections = [
  {
    title: "Products",
    groups: [
      {
        category: "Core Banking",
        links: [
          { title: "Core Processing", href: "/products/core-processing/" },
          { title: "Back Office", href: "/products/back-office/" },
          { title: "Front Office", href: "/products/front-office/" },
        ],
      },
      {
        category: "Digital Experience",
        links: [
          { title: "Digital Banking", href: "/products/digital-banking/" },
          { title: "Account Opening", href: "/products/account-opening/" },
          { title: "Levels", href: "/products/levels/" },
        ],
      },
      {
        category: "Data and Connectivity",
        links: [
          { title: "Connect", href: "/products/connect/" },
          { title: "Insights", href: "/products/insights/" },
        ],
      },
      {
        category: "Growth and Operations",
        links: [
          { title: "Managed Services", href: "/products/managed-services/" },
          { title: "Nymbus Labs", href: "/labs/" },
        ],
      },
    ],
  },
  {
    title: "Solutions",
    groups: [
      {
        category: "By growth strategy",
        links: [
          { title: "Launch a digital brand", href: "/solutions/launch-digital-brand/" },
          { title: "Enter a new market", href: "/solutions/new-market/" },
          { title: "Accelerate M&A", href: "/solutions/accelerate-ma/" },
          { title: "Private label banking", href: "/solutions/private-label/" },
        ],
      },
      {
        category: "By modernization path",
        links: [
          { title: "Deploy a parallel core", href: "/solutions/parallel-core/" },
          { title: "Modernize your core", href: "/solutions/modernize-core/" },
          { title: "Launch a de novo bank", href: "/solutions/de-novo/" },
        ],
      },
    ],
  },
  {
    title: "Resources",
    groups: [
      {
        category: "Learn",
        links: [
          { title: "Insights", href: "/insights/" },
          { title: "Customers", href: "/customers/" },
          { title: "Partners", href: "/partners/" },
        ],
      },
      {
        category: "Company",
        links: [
          { title: "About", href: "/about/" },
          { title: "Jobs", href: "/careers/" },
          { title: "Press", href: "/press/" },
        ],
      },
    ],
  },
];

export function MobileNav({ isOpen, onClose }: MobileNavProps) {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-40 lg:hidden">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />
      <nav className="absolute top-0 right-0 w-full max-w-sm h-full bg-charcoal-dark overflow-y-auto">
        <div className="p-6 pt-20">
          {/* AI link */}
          <Link
            href="/ai/"
            className="block text-white text-lg font-semibold mb-6"
            onClick={onClose}
          >
            AI
          </Link>

          {navSections.map((section) => (
            <div key={section.title} className="mb-4">
              <button
                onClick={() =>
                  setExpandedSection(
                    expandedSection === section.title ? null : section.title
                  )
                }
                className="flex items-center justify-between w-full text-white text-lg font-semibold py-2"
              >
                {section.title}
                <svg
                  className={`w-4 h-4 transition-transform ${
                    expandedSection === section.title ? "rotate-180" : ""
                  }`}
                  fill="none"
                  viewBox="0 0 14 14"
                >
                  <path d="M3 5l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </button>
              {expandedSection === section.title && (
                <div className="pl-2 pb-4 space-y-4">
                  {section.groups.map((group) => (
                    <div key={group.category}>
                      <p className="text-white/40 text-xs uppercase tracking-wider font-semibold mb-2">
                        {group.category}
                      </p>
                      <div className="space-y-1">
                        {group.links.map((link) => (
                          <Link
                            key={link.href}
                            href={link.href}
                            className="block text-white/60 hover:text-white text-sm py-1.5 transition-colors"
                            onClick={onClose}
                          >
                            {link.title}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}

          {/* CTA Buttons */}
          <div className="mt-8 space-y-3 pt-6 border-t border-white/10">
            <Link
              href="/demo/"
              className="block w-full text-center py-3 bg-blue rounded-[4px] text-white font-semibold hover:bg-blue-200 transition-colors"
              onClick={onClose}
            >
              See a demo
            </Link>
            <Link
              href="/contact/"
              className="block w-full text-center py-3 border border-white/20 rounded-[4px] text-white font-medium hover:bg-white/5 transition-colors"
              onClick={onClose}
            >
              Contact sales
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}
