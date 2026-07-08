"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { NymbusLogo } from "@/components/icons/NymbusLogo";
import { NymbusLogomark } from "@/components/icons/NymbusLogomark";
import { MobileNav } from "./MobileNav";
import { MegaDropdown } from "./MegaDropdown";
import { PlatformDropdown } from "./PlatformDropdown";
import { ManagedServicesDropdown } from "./ManagedServicesDropdown";
import { SolutionsDropdown } from "./SolutionsDropdown";
import { AIDropdown } from "./AIDropdown";
import { ResourcesDropdown } from "./ResourcesDropdown";

const productsMenu = {
  label: "Platform",
  columns: [
    {
      category: "Banking Technology",
      items: [
        { title: "Core Processing", description: "Banking system of record", href: "/products/core-processing/" },
        { title: "Digital Banking", description: "Consumer and business experiences", href: "/products/digital-banking/" },
        { title: "Account Opening", description: "Fast account onboarding", href: "/products/account-opening/" },
        { title: "Connect", description: "APIs, streaming, and MCP", href: "/products/connect/" },
        { title: "Insights", description: "Analytics and intelligence", href: "/products/insights/" },
        { title: "Levels", description: "Rewards and engagement", href: "/products/levels/" },
        { title: "Engage", description: "Customer engagement and rewards", href: "/products/engage/" },
      ],
    },
    {
      category: "Managed Services",
      items: [
        { title: "Contact Center", description: "Member and customer support", href: "/managed-services/contact-center/" },
        { title: "Onboarding", description: "Applicant onboarding support", href: "/managed-services/onboarding/" },
        { title: "Servicing", description: "Customer servicing support", href: "/managed-services/servicing/" },
        { title: "Compliance", description: "Compliance workflow support", href: "/managed-services/compliance/" },
        { title: "Fraud", description: "Fraud operations support", href: "/managed-services/fraud/" },
        { title: "Back Office", description: "Processing and operations support", href: "/managed-services/back-office/" },
        { title: "Business Banking Support", description: "Business account operations", href: "/managed-services/business-banking/" },
        { title: "Labs", description: "Growth strategy and execution", href: "/labs/" },
        { title: "Governed AI", description: "Controlled AI workflows", href: "/ai/" },
      ],
    },
  ],
};

const managedServicesMenu = {
  label: "Managed Services",
  columns: [
    {
      category: "Managed Services",
      items: [
        { title: "Contact Center", description: "Member and customer support", href: "/managed-services/contact-center/" },
        { title: "Onboarding", description: "Applicant onboarding support", href: "/managed-services/onboarding/" },
        { title: "Servicing", description: "Customer servicing support", href: "/managed-services/servicing/" },
        { title: "Compliance", description: "Compliance workflow support", href: "/managed-services/compliance/" },
        { title: "Fraud", description: "Fraud operations support", href: "/managed-services/fraud/" },
        { title: "Back Office", description: "Processing and operations support", href: "/managed-services/back-office/" },
        { title: "Business Banking Support", description: "Business account operations", href: "/managed-services/business-banking/" },
        { title: "Labs", description: "Growth strategy support", href: "/labs/" },
        { title: "Governed AI", description: "Controlled AI workflows", href: "/ai/" },
      ],
    },
  ],
};

const solutionsMenu = {
  label: "Solutions",
  columns: [
    {
      category: "Launch a new core",
      items: [
        { title: "Brick and mortar core replacement", href: "/solutions/core-replacement/" },
        { title: "De novo launch", href: "/solutions/de-novo/" },
      ],
    },
    {
      category: "Launch a parallel core",
      items: [
        { title: "Vertical brand launches", href: "/solutions/vertical-brands/" },
        { title: "New lines of business", href: "/solutions/new-line-of-business/" },
        { title: "M&A acceleration", href: "/solutions/accelerate-ma/" },
        { title: "Private label banking", href: "/solutions/private-label/" },
        { title: "Sandbox innovation", href: "/solutions/sandbox/" },
      ],
    },
    {
      category: "Segments",
      items: [
        { title: "Business banking", href: "/solutions/business-banking/" },
        { title: "Solo business banking", href: "/solutions/business-banking/#solo", indent: true },
        { title: "Small business banking", href: "/solutions/business-banking/#small", indent: true },
        { title: "Commercial banking", href: "/solutions/business-banking/#commercial", indent: true },
        { title: "Personal banking", href: "/solutions/personal-banking/" },
      ],
    },
  ],
};

const aiMenu = {
  label: "AI",
  columns: [
    {
      category: "AI",
      items: [
        { title: "Our AI Approach", description: "Governed by design", href: "/ai/" },
        { title: "AI Workflows", description: "Controlled banking automation", href: "/ai/workflows/" },
        { title: "Applied AI", description: "AI-native product and workflow design", href: "/ai/applied/" },
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
        className={`fixed top-[28px] left-0 right-0 z-50 transition-all duration-300 ${
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
              <PlatformDropdown
                isActive={activeDropdown === "products"}
                onOpen={() => setActiveDropdown("products")}
                onClose={() => setActiveDropdown((prev) => prev === "products" ? null : prev)}
              />
              <ManagedServicesDropdown
                isActive={activeDropdown === "managed-services"}
                onOpen={() => setActiveDropdown("managed-services")}
                onClose={() => setActiveDropdown((prev) => prev === "managed-services" ? null : prev)}
              />
              <SolutionsDropdown
                isActive={activeDropdown === "solutions"}
                onOpen={() => setActiveDropdown("solutions")}
                onClose={() => setActiveDropdown((prev) => prev === "solutions" ? null : prev)}
              />
              <AIDropdown
                isActive={activeDropdown === "ai"}
                onOpen={() => setActiveDropdown("ai")}
                onClose={() => setActiveDropdown((prev) => prev === "ai" ? null : prev)}
              />
              <ResourcesDropdown
                isActive={activeDropdown === "resources"}
                onOpen={() => setActiveDropdown("resources")}
                onClose={() => setActiveDropdown((prev) => prev === "resources" ? null : prev)}
              />
            </nav>

            {/* Right CTA Buttons */}
            <div className="hidden lg:flex items-center gap-3">
              <Link
                href="/request-demo/"
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
