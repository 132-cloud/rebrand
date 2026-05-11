"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { NymbusLogo } from "@/components/icons/NymbusLogo";
import { NymbusLogomark } from "@/components/icons/NymbusLogomark";
import { MobileNav } from "./MobileNav";
import { MegaDropdown } from "./MegaDropdown";

const productsMenu = {
  label: "Products",
  columns: [
    {
      category: "Core Banking",
      items: [
        { title: "Core Processing", description: "Banking system of record", href: "/products/core-processing/" },
        { title: "Back Office", description: "Operational banking workflows", href: "/products/back-office/" },
        { title: "Front Office", description: "Modern service tools", href: "/products/front-office/" },
      ],
    },
    {
      category: "Digital Experience",
      items: [
        { title: "Digital Banking", description: "Consumer and business experiences", href: "/products/digital-banking/" },
        { title: "Account Opening", description: "Fast account onboarding", href: "/products/account-opening/" },
        { title: "Levels", description: "Rewards and engagement", href: "/products/levels/" },
      ],
    },
    {
      category: "Data and Connectivity",
      items: [
        { title: "Connect", description: "APIs, streaming, and MCP", href: "/products/connect/" },
        { title: "Insights", description: "Analytics and intelligence", href: "/products/insights/" },
      ],
    },
    {
      category: "Growth and Operations",
      items: [
        { title: "Managed Services", description: "Launch and operations support", href: "/products/managed-services/" },
        { title: "Nymbus Labs", description: "Growth strategy and execution", href: "/labs/" },
      ],
    },
  ],
};

const solutionsMenu = {
  label: "Solutions",
  columns: [
    {
      category: "By growth strategy",
      items: [
        { title: "Launch a digital brand", href: "/solutions/launch-digital-brand/" },
        { title: "Enter a new market or vertical", href: "/solutions/new-market/" },
        { title: "Accelerate M&A", href: "/solutions/accelerate-ma/" },
        { title: "Launch private label banking", href: "/solutions/private-label/" },
      ],
    },
    {
      category: "By modernization path",
      items: [
        { title: "Deploy a parallel core", href: "/solutions/parallel-core/" },
        { title: "Modernize your core", href: "/solutions/modernize-core/" },
        { title: "Launch a de novo bank", href: "/solutions/de-novo/" },
      ],
    },
    {
      category: "By institution type",
      items: [
        { title: "Community banks", href: "/solutions/community-banks/" },
        { title: "Credit unions", href: "/solutions/credit-unions/" },
        { title: "De novo banks", href: "/solutions/de-novo-banks/" },
        { title: "Fintechs", href: "/solutions/fintechs/" },
      ],
    },
  ],
};

const resourcesMenu = {
  label: "Resources",
  columns: [
    {
      category: "Learn",
      items: [
        { title: "Insights", href: "/insights/" },
        { title: "Customers", href: "/customers/" },
        { title: "Partners", href: "/partners/" },
        { title: "Product releases", href: "/product-releases/" },
      ],
    },
    {
      category: "Company",
      items: [
        { title: "About Nymbus", href: "/about/" },
        { title: "CUSO", href: "/cuso/" },
        { title: "Jobs", href: "/careers/" },
        { title: "News", href: "/news/" },
        { title: "Press", href: "/press/" },
      ],
    },
    {
      category: "Contact",
      items: [
        { title: "Contact sales", href: "/contact/" },
      ],
    },
  ],
};

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-charcoal-dark/95 backdrop-blur-md shadow-lg border-b border-white/5"
            : "bg-transparent"
        }`}
      >
        <div className="container-site">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link href="/" className="flex-shrink-0" title="Nymbus">
              <NymbusLogo className="hidden md:block h-5 w-auto text-white" />
              <NymbusLogomark className="md:hidden h-7 w-auto" />
            </Link>

            {/* Center Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              <MegaDropdown
                menu={productsMenu}
                isActive={activeDropdown === "products"}
                onOpen={() => setActiveDropdown("products")}
                onClose={() => setActiveDropdown(null)}
              />
              <MegaDropdown
                menu={solutionsMenu}
                isActive={activeDropdown === "solutions"}
                onOpen={() => setActiveDropdown("solutions")}
                onClose={() => setActiveDropdown(null)}
              />
              <Link
                href="/ai/"
                className="px-4 py-2 text-white/70 hover:text-white text-sm font-medium transition-colors rounded-lg hover:bg-white/5"
              >
                AI
              </Link>
              <MegaDropdown
                menu={resourcesMenu}
                isActive={activeDropdown === "resources"}
                onOpen={() => setActiveDropdown("resources")}
                onClose={() => setActiveDropdown(null)}
              />
            </nav>

            {/* Right CTA Buttons */}
            <div className="hidden lg:flex items-center gap-3">
              <Link
                href="/demo/"
                className="px-5 py-2.5 text-sm font-semibold text-white bg-blue rounded-[4px] hover:bg-blue-200 transition-colors"
              >
                See a demo
              </Link>
              <Link
                href="/contact/"
                className="px-5 py-2.5 text-sm font-semibold text-white/80 border border-white/20 rounded-[4px] hover:bg-white/5 hover:text-white transition-colors"
              >
                Contact sales
              </Link>
            </div>

            {/* Mobile Menu Trigger */}
            <button
              className="lg:hidden p-2 text-white"
              onClick={() => setMobileNavOpen(!mobileNavOpen)}
              aria-label={mobileNavOpen ? "Close menu" : "Open menu"}
            >
              {mobileNavOpen ? (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M6 6l12 12M6 18L18 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              ) : (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M3 6h18M3 12h18M3 18h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </header>

      <MobileNav isOpen={mobileNavOpen} onClose={() => setMobileNavOpen(false)} />
    </>
  );
}
