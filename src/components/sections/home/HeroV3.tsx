"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";

// ─── Prompt routing data (same as main hero) ─────────────────────────────────

interface PromptRoute {
  heading: string;
  body: string;
  buttons: { label: string; href: string }[];
}

const PROMPT_ROUTES: Record<string, PromptRoute> = {
  "modernize core infrastructure": {
    heading: "Modernize from the core outward.",
    body: "Deploy Nymbus as a primary core or parallel core, with digital banking, account opening, data, engagement, and managed operations connected around your strategy.",
    buttons: [
      { label: "Explore core banking", href: "/core-banking/" },
      { label: "Compare primary and parallel core", href: "/core-banking/#comparison" },
      { label: "Talk to an expert", href: "/contact/?topic=core-modernization" },
    ],
  },
  "run smarter operations": {
    heading: "Operate with more control and less internal lift.",
    body: "Activate managed services for onboarding, servicing, contact center, fraud, compliance workflows, and back-office operations, supported by the Nymbus platform.",
    buttons: [
      { label: "Explore managed services", href: "/managed-services/" },
      { label: "See operating model", href: "/managed-services/#model" },
      { label: "Talk to an expert", href: "/contact/?topic=managed-services" },
    ],
  },
  "launch a digital brand": {
    heading: "Launch a digital brand on connected banking infrastructure.",
    body: "Bring core processing, digital banking, account opening, managed operations, and Labs support together to move from growth strategy to live banking model.",
    buttons: [
      { label: "Explore digital brands", href: "/solutions/digital-brand/" },
      { label: "See how Labs supports launch", href: "/labs/" },
      { label: "Talk to an expert", href: "/contact/?topic=digital-brand" },
    ],
  },
  "build with governed ai": {
    heading: "Connect AI to real banking workflows with control.",
    body: "Explore governed AI workflows connected to banking data, actions, permissions, approvals, and auditability.",
    buttons: [
      { label: "Explore governed AI", href: "/ai/" },
      { label: "See banking workflow examples", href: "/ai/#workflows" },
      { label: "Talk to an expert", href: "/contact/?topic=ai" },
    ],
  },
  "build a growth strategy with labs": {
    heading: "Turn a growth idea into a funded banking model.",
    body: "Use Nymbus Labs for audience strategy, offer design, brand development, launch planning, acquisition support, and performance optimization.",
    buttons: [
      { label: "Explore Labs", href: "/labs/" },
      { label: "See launch support", href: "/labs/#launch" },
      { label: "Talk to an expert", href: "/contact/?topic=labs" },
    ],
  },
  "improve account opening": {
    heading: "Move applicants from intent to funded accounts faster.",
    body: "Use connected account opening, digital banking, data, decisioning, and operational workflows to support consumer, business, and niche banking models.",
    buttons: [
      { label: "Explore account opening", href: "/account-opening/" },
      { label: "See onboarding workflows", href: "/account-opening/#workflows" },
      { label: "Talk to an expert", href: "/contact/?topic=account-opening" },
    ],
  },
  "launch a de novo": {
    heading: "Launch a new institution on a connected banking platform.",
    body: "Deploy core processing, digital banking, account opening, managed operations, data, and growth support around the model you want to build.",
    buttons: [
      { label: "Explore de novo launch", href: "/solutions/de-novo/" },
      { label: "Explore core banking", href: "/core-banking/" },
      { label: "Talk to an expert", href: "/contact/?topic=de-novo" },
    ],
  },
  "build a new line of business": {
    heading: "Launch a new banking line without waiting on full-institution change.",
    body: "Use a parallel core, digital banking, account opening, managed operations, and Labs support to build around a specific market, segment, or product strategy.",
    buttons: [
      { label: "Explore parallel core", href: "/core-banking/#parallel" },
      { label: "Explore launch pathways", href: "/solutions/" },
      { label: "Talk to an expert", href: "/contact/?topic=new-line" },
    ],
  },
  "accelerate m&a": {
    heading: "Move faster on acquisition and integration strategy.",
    body: "Use a parallel core path to support acquired relationships, new portfolios, or integration strategies without forcing immediate change across the full institution.",
    buttons: [
      { label: "Explore M&A acceleration", href: "/solutions/m-and-a/" },
      { label: "Explore parallel core", href: "/core-banking/#parallel" },
      { label: "Talk to an expert", href: "/contact/?topic=m-and-a" },
    ],
  },
  "private label banking": {
    heading: "Launch partner-led banking models on modern infrastructure.",
    body: "Use Nymbus to support private-label banking programs with core processing, digital experience, account opening, data, and managed operations connected from the start.",
    buttons: [
      { label: "Explore private label banking", href: "/solutions/private-label/" },
      { label: "Explore platform capabilities", href: "/platform/" },
      { label: "Talk to an expert", href: "/contact/?topic=private-label" },
    ],
  },
  "sandbox innovation": {
    heading: "Test new banking models without disrupting current operations.",
    body: "Use a parallel core environment to explore new products, segments, digital experiences, or operating models before scaling them across the institution.",
    buttons: [
      { label: "Explore sandbox innovation", href: "/solutions/sandbox/" },
      { label: "Explore parallel core", href: "/core-banking/#parallel" },
      { label: "Talk to an expert", href: "/contact/?topic=sandbox" },
    ],
  },
  "grow deposits": {
    heading: "Build deposit growth around a focused strategy.",
    body: "Use Labs, digital banking, account opening, engagement, data, and managed operations to support acquisition, activation, and ongoing growth.",
    buttons: [
      { label: "Explore deposit growth", href: "/solutions/grow-deposits/" },
      { label: "Explore Labs", href: "/labs/" },
      { label: "Talk to an expert", href: "/contact/?topic=deposits" },
    ],
  },
};

function matchRoute(input: string): PromptRoute | null {
  const lower = input.toLowerCase().trim();
  if (PROMPT_ROUTES[lower]) return PROMPT_ROUTES[lower];
  const keywords: [string[], string][] = [
    [["core", "modernize", "legacy", "replace core"], "modernize core infrastructure"],
    [["digital brand", "digital bank", "neobank"], "launch a digital brand"],
    [["operations", "managed", "servicing", "back-office", "reduce lift"], "run smarter operations"],
    [["ai", "artificial intelligence", "governed"], "build with governed ai"],
    [["labs", "growth strategy", "growth"], "build a growth strategy with labs"],
    [["account opening", "onboarding", "applicant"], "improve account opening"],
    [["de novo", "new institution", "charter"], "launch a de novo"],
    [["new line", "new business", "parallel"], "build a new line of business"],
    [["m&a", "merger", "acquisition", "integrate"], "accelerate m&a"],
    [["private label", "partner", "baas"], "private label banking"],
    [["sandbox", "innovation", "test", "experiment"], "sandbox innovation"],
    [["deposit", "grow deposits"], "grow deposits"],
  ];
  for (const [keys, route] of keywords) {
    if (keys.some((k) => lower.includes(k))) return PROMPT_ROUTES[route];
  }
  return null;
}

const PLACEHOLDERS = [
  "Launch a new core",
  "Launch a parallel core",
  "Activate managed services",
  "Explore governed AI",
  "Launch a de novo",
  "Launch a digital brand",
  "Build a new line of business",
  "Grow deposits",
  "Build a growth strategy",
];

const PRIMARY_PILLS = [
  { label: "Modernize core infrastructure", route: "modernize core infrastructure" },
  { label: "Run smarter operations", route: "run smarter operations" },
  { label: "Launch a digital brand", route: "launch a digital brand" },
  { label: "Build with governed AI", route: "build with governed ai" },
];

const MORE_PILLS = [
  { label: "Build a growth strategy with Labs", route: "build a growth strategy with labs" },
  { label: "Improve account opening", route: "improve account opening" },
  { label: "Launch a de novo", route: "launch a de novo" },
  { label: "Build a new line of business", route: "build a new line of business" },
  { label: "Accelerate M&A", route: "accelerate m&a" },
  { label: "Private label banking", route: "private label banking" },
  { label: "Sandbox innovation", route: "sandbox innovation" },
  { label: "Grow deposits", route: "grow deposits" },
];

// ─── Rotating Placeholder ────────────────────────────────────────────────────

function RotatingPlaceholder({ items }: { items: string[] }) {
  const [index, setIndex] = useState(0);
  const [animState, setAnimState] = useState<"visible" | "exiting" | "entering">("visible");

  useEffect(() => {
    const timer = setInterval(() => {
      setAnimState("exiting");
      setTimeout(() => {
        setIndex((i) => (i + 1) % items.length);
        setAnimState("entering");
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            setAnimState("visible");
          });
        });
      }, 400);
    }, 3000);
    return () => clearInterval(timer);
  }, [items.length]);

  let opacity = 1;
  let transform = "translateY(0)";
  if (animState === "exiting") { opacity = 0; transform = "translateY(-14px)"; }
  else if (animState === "entering") { opacity = 0; transform = "translateY(14px)"; }

  return (
    <span
      className="inline-block pointer-events-none"
      style={{
        transition: animState === "entering" ? "none" : "opacity 0.4s ease-in-out, transform 0.4s ease-in-out",
        opacity,
        transform,
        color: "rgba(0, 0, 0, 0.4)",
      }}
    >
      {items[index]}
    </span>
  );
}

// ─── Arrow Up Icon ───────────────────────────────────────────────────────────

function ArrowUpIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10 16V4M10 4L5 9M10 4L15 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

// ─── V2 Header ───────────────────────────────────────────────────────────────

// ─── Brand Switcher for V2/V3 pages ──────────────────────────────────────────

function BrandSwitcherV2() {
  const links = [
    { label: "Nymbus", href: "/" },
    { label: "The Guide", href: "/v3" },
    { label: "The Neighbour", href: "/v2" },
  ];

  return (
    <div
      className="absolute top-0 left-0 right-0 flex items-center justify-center gap-6 py-2 px-4 text-[12px] tracking-wide"
      style={{ zIndex: 60, background: "rgba(0,0,0,0.85)", color: "rgba(255,255,255,0.6)", fontFamily: "'neue-haas-grotesk-text', sans-serif" }}
    >
      <span className="font-medium text-white/40 uppercase tracking-wider mr-2">Visual Brand Switcher</span>
      {links.map((link) => (
        <Link key={link.href} href={link.href} className="text-white/60 hover:text-white transition-colors">
          {link.label}
        </Link>
      ))}
    </div>
  );
}

// ─── V2 Header with Dropdowns ────────────────────────────────────────────────

const NAV_ITEMS: { label: string; items?: { title: string; description?: string; href: string }[] }[] = [
  {
    label: "Platform",
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
    label: "Managed Services",
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
  {
    label: "Solutions",
    items: [
      { title: "Brick and mortar core replacement", href: "/solutions/core-replacement/" },
      { title: "De novo launch", href: "/solutions/de-novo/" },
      { title: "Vertical brand launches", href: "/solutions/vertical-brands/" },
      { title: "New lines of business", href: "/solutions/new-line-of-business/" },
      { title: "M&A acceleration", href: "/solutions/accelerate-ma/" },
      { title: "Private label banking", href: "/solutions/private-label/" },
      { title: "Sandbox innovation", href: "/solutions/sandbox/" },
      { title: "Business banking", href: "/solutions/business-banking/" },
      { title: "Retail banking", href: "/solutions/personal-banking/" },
    ],
  },
  {
    label: "AI",
    items: [
      { title: "Our AI Approach", description: "Governed by design", href: "/ai/" },
      { title: "AI Workflows", description: "Controlled banking automation", href: "/ai/workflows/" },
      { title: "Applied AI", description: "AI-native product and workflow design", href: "/ai/applied/" },
    ],
  },
  { label: "Resources" },
];

function HeaderV2() {
  const [activeNav, setActiveNav] = useState<string | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  function handleEnter(label: string) {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveNav(label);
  }

  function handleLeave() {
    timeoutRef.current = setTimeout(() => setActiveNav(null), 150);
  }

  return (
    <header className="absolute top-0 left-0 right-0 py-6" style={{ zIndex: 50 }}>
      <div className="max-w-[1400px] mx-auto px-8 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex-shrink-0">
          <img src="https://res.cloudinary.com/duio2kdnj/image/upload/v1780981754/nymbus/new-logo-1C.svg" alt="Nymbus" className="h-5 w-auto" />
        </Link>

        {/* Navigation */}
        <nav className="hidden lg:flex items-center gap-6">
          {NAV_ITEMS.map((navItem) => (
            <div
              key={navItem.label}
              className="relative"
              onMouseEnter={() => navItem.items && handleEnter(navItem.label)}
              onMouseLeave={handleLeave}
            >
              <span
                className="text-[14px] tracking-[0.56px] cursor-pointer transition-colors hover:opacity-70 flex items-center gap-1"
                style={{ color: "#000000", fontFamily: "'neue-haas-grotesk-text', sans-serif" }}
              >
                {navItem.label}
                {navItem.items && (
                  <svg className="w-3 h-3 opacity-50" fill="none" viewBox="0 0 14 14">
                    <path d="M3 5l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                )}
              </span>

              {/* Dropdown */}
              {navItem.items && activeNav === navItem.label && (
                <div
                  className="absolute top-full left-1/2 -translate-x-1/2 mt-3 py-4 px-5 rounded-xl min-w-[260px] animate-[fadeSlideIn_0.2s_ease-out]"
                  style={{
                    background: "rgba(255,255,255,0.95)",
                    backdropFilter: "blur(20px)",
                    border: "1px solid rgba(0, 0, 0, 0.08)",
                    boxShadow: "0 8px 40px rgba(0,0,0,0.08)",
                  }}
                  onMouseEnter={() => handleEnter(navItem.label)}
                  onMouseLeave={handleLeave}
                >
                  {navItem.items.map((item) => (
                    <Link
                      key={item.title}
                      href={item.href}
                      className="block px-3 py-2 rounded-lg transition-colors hover:bg-black/5"
                    >
                      <span
                        className="text-[14px] font-medium block"
                        style={{ color: "#000000", fontFamily: "'neue-haas-grotesk-text', sans-serif" }}
                      >
                        {item.title}
                      </span>
                      {item.description && (
                        <span
                          className="text-[12px] block mt-0.5"
                          style={{ color: "rgba(0, 0, 0, 0.5)", fontFamily: "'neue-haas-grotesk-text', sans-serif" }}
                        >
                          {item.description}
                        </span>
                      )}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* CTAs */}
        <div className="hidden lg:flex items-center gap-3">
          <Link
            href="/demo/"
            className="px-6 py-2.5 text-[14px] font-medium tracking-[0.3px] rounded-full bg-[#000] text-white hover:bg-[#1a1a1a] transition-colors"
            style={{ fontFamily: "'neue-haas-grotesk-text', sans-serif" }}
          >
            See a demo
          </Link>
          <Link
            href="/contact/"
            className="px-6 py-2.5 text-[14px] font-medium tracking-[0.3px] rounded-full border border-black/15 bg-white text-black hover:bg-gray-50 transition-colors"
            style={{ fontFamily: "'neue-haas-grotesk-text', sans-serif" }}
          >
            Contact Sales
          </Link>
        </div>
      </div>
    </header>
  );
}

// ─── Main V2 Hero Component ──────────────────────────────────────────────────

export function HeroV3() {
  const [inputValue, setInputValue] = useState("");
  const [activeRoute, setActiveRoute] = useState<PromptRoute | null>(null);
  const [moreOpen, setMoreOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const chatboxRef = useRef<HTMLDivElement>(null);
  const pillsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (
        activeRoute &&
        !isClosing &&
        chatboxRef.current &&
        !chatboxRef.current.contains(e.target as Node) &&
        pillsRef.current &&
        !pillsRef.current.contains(e.target as Node)
      ) {
        setIsClosing(true);
        setTimeout(() => {
          setActiveRoute(null);
          setInputValue("");
          setIsClosing(false);
        }, 350);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [activeRoute, isClosing]);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const route = matchRoute(inputValue);
    if (route) {
      setActiveRoute(route);
    } else {
      setActiveRoute({
        heading: "Let us help you find the right path.",
        body: "Tell us more about what you're looking to accomplish, and we'll connect you with the right team and resources.",
        buttons: [
          { label: "Explore the platform", href: "/platform/" },
          { label: "Talk to an expert", href: "/contact/" },
        ],
      });
    }
  }

  function handlePillClick(route: string) {
    setActiveRoute(PROMPT_ROUTES[route]);
    setInputValue("");
  }

  return (
    <div
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        background: "#D9D9D9",
      }}
    >
      {/* Background image - bokeh abstract over D9D9D9 */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "url('https://res.cloudinary.com/duio2kdnj/image/upload/v1780985570/nymbus/v3-bg-bokeh-actual.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Header */}
      <HeaderV2 />

      {/* Main content */}
      <div className="relative w-full max-w-[1100px] mx-auto px-8 text-center pt-32" style={{ zIndex: 10 }}>
        {/* H1 - Bold uppercase */}
        <h1
          className="font-bold uppercase leading-[1] mb-[40px]"
          style={{
            fontFamily: "'neue-haas-grotesk-text', sans-serif",
            fontSize: "72px",
            color: "#000000",
            maxWidth: "1053px",
            margin: "0 auto 40px",
            letterSpacing: "-1px",
          }}
        >
          Modern banking platform<br />for financial innovators.
        </h1>

        {/* Sub-question */}
        <p
          className="mb-[30px]"
          style={{
            fontFamily: "'neue-haas-grotesk-text', sans-serif",
            fontSize: "28px",
            lineHeight: 1.3,
            color: "rgba(0, 0, 0, 0.5)",
          }}
        >
          What do you want to build next?
        </p>

        {/* Prompt Box */}
        <div ref={chatboxRef} className="relative max-w-2xl mx-auto mb-8">
          {/* Static grey border */}
          <div
            className="absolute -inset-[1px] rounded-[29px]"
            style={{ background: "rgba(0,0,0,0.1)", zIndex: 0 }}
          />
          {/* Animated orange stroke rotating on top */}
          <div className="absolute -inset-[1px] rounded-[29px] overflow-hidden" style={{ zIndex: 0 }}>
            <div
              className="absolute inset-[-50%] animate-[borderRotate_4s_linear_infinite]"
              style={{
                background: "conic-gradient(from 0deg, transparent 0%, transparent 42%, rgba(105,124,178,0.7) 48%, rgba(105,124,178,0.9) 52%, rgba(105,124,178,0.7) 58%, transparent 64%, transparent 100%)",
              }}
            />
          </div>
          <div
            className="relative overflow-hidden rounded-[28px]"
            style={{
              transition: "max-height 0.4s ease-in-out",
              maxHeight: activeRoute && !isClosing ? "500px" : "56px",
              background: "rgba(255,255,255,0.7)",
              backdropFilter: "blur(20px)",
              zIndex: 1,
            }}
          >
            {/* Input row */}
            <form onSubmit={handleSubmit} className="flex items-center px-6 h-[56px]">
              <div className="flex-1 relative h-full flex items-center">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => {
                    setInputValue(e.target.value);
                    if (activeRoute) setActiveRoute(null);
                  }}
                  className="w-full bg-transparent text-lg outline-none relative z-10"
                  style={{ color: "#000000", fontFamily: "'neue-haas-grotesk-text', sans-serif" }}
                  placeholder={activeRoute ? "Ask something else" : ""}
                />
                {!inputValue && !activeRoute && (
                  <span className="absolute inset-0 flex items-center">
                    <RotatingPlaceholder items={PLACEHOLDERS} />
                  </span>
                )}
              </div>
              <button
                type="submit"
                className="ml-4 w-9 h-9 flex items-center justify-center rounded-full transition-colors flex-shrink-0"
                style={{ background: "#000", color: "white" }}
                aria-label="Submit"
              >
                <ArrowUpIcon />
              </button>
            </form>

            {/* Expanded content */}
            {activeRoute && (
              <div className="px-6 pb-6 text-left animate-[fadeSlideIn_0.4s_ease-out]">
                <div className="pt-5" style={{ borderTop: "1px solid rgba(0, 0, 0, 0.08)" }}>
                  <h2
                    className="text-lg md:text-xl font-semibold mb-2"
                    style={{ color: "#000000", fontFamily: "'neue-haas-grotesk-text', sans-serif", letterSpacing: "normal" }}
                  >
                    {activeRoute.heading}
                  </h2>
                  <p
                    className="text-sm leading-relaxed mb-5"
                    style={{ color: "rgba(0, 0, 0, 0.6)", fontFamily: "'neue-haas-grotesk-text', sans-serif" }}
                  >
                    {activeRoute.body}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {activeRoute.buttons.map((btn) => {
                      const isExpert = btn.label.toLowerCase().includes("talk to");
                      return (
                        <a
                          key={btn.label}
                          href={btn.href}
                          className="px-4 py-2 text-sm font-medium rounded-full transition-colors"
                          style={
                            isExpert
                              ? { background: "#000", color: "white", fontFamily: "'neue-haas-grotesk-text', sans-serif" }
                              : { background: "rgba(255, 255, 255, 0.1)", color: "#000000", border: "1px solid rgba(0, 0, 0, 0.1)", fontFamily: "'neue-haas-grotesk-text', sans-serif" }
                          }
                        >
                          {btn.label}
                        </a>
                      );
                    })}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Pills */}
        <div ref={pillsRef} className="flex flex-wrap justify-center gap-2 max-w-4xl mx-auto">
          {PRIMARY_PILLS.map((pill) => (
            <button
              key={pill.route}
              onClick={() => handlePillClick(pill.route)}
              className="px-4 py-2 text-sm rounded-full transition-colors"
              style={{
                background: "rgba(255, 255, 255, 0.08)",
                border: "1px solid rgba(0, 0, 0, 0.1)",
                color: "#000000",
                fontFamily: "'neue-haas-grotesk-text', sans-serif",
              }}
            >
              {pill.label}
            </button>
          ))}

          <button
            onClick={() => setMoreOpen(!moreOpen)}
            className="px-4 py-2 text-sm rounded-full transition-colors"
            style={{
              background: "rgba(255, 255, 255, 0.08)",
              border: "1px solid rgba(0, 0, 0, 0.1)",
              color: "#000000",
              fontFamily: "'neue-haas-grotesk-text', sans-serif",
            }}
          >
            {moreOpen ? "Less" : "More"}
          </button>

          <a
            href="/contact/"
            className="px-4 py-2 text-sm font-medium rounded-full transition-colors"
            style={{
              background: "rgba(255,255,255,0.9)",
              color: "#000",
              fontFamily: "'neue-haas-grotesk-text', sans-serif",
            }}
          >
            Talk to an expert
          </a>

          {moreOpen && MORE_PILLS.map((pill) => (
            <button
              key={pill.route}
              onClick={() => handlePillClick(pill.route)}
              className="px-4 py-2 text-sm rounded-full transition-colors animate-[fadeSlideIn_0.3s_ease-out]"
              style={{
                background: "rgba(255, 255, 255, 0.05)",
                border: "1px solid rgba(0, 0, 0, 0.08)",
                color: "rgba(0, 0, 0, 0.7)",
                fontFamily: "'neue-haas-grotesk-text', sans-serif",
              }}
            >
              {pill.label}
            </button>
          ))}
        </div>
      </div>

      {/* Keyframe animations */}
      <style jsx>{`
        @keyframes fadeSlideIn {
          from { opacity: 0; transform: translateY(-8px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes gradientDrift {
          0% { transform: translateX(80%); }
          100% { transform: translateX(-140%); }
        }
        @keyframes borderRotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}
