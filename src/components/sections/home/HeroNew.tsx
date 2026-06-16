"use client";

import React, { useRef, useEffect, useState } from "react";
import { ScrollReveal } from "@/components/animations/ScrollReveal";

// ─── Prompt routing data ───────────────────────────────────────────────────────

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

// Keywords to match typed input to routes
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

// Rotating placeholder texts
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

// ─── Shader Background ───────────────────────────────────────────────────────

function ShaderBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0.5, y: 0.5 });
  const animRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const gl = canvas.getContext("webgl");
    if (!gl) return;

    const vertSrc = `
      attribute vec2 a_position;
      void main() { gl_Position = vec4(a_position, 0.0, 1.0); }
    `;

    const fragSrc = `
      precision highp float;
      uniform vec2 u_resolution;
      uniform vec2 u_mouse;
      uniform float u_time;

      float hash(vec2 p) {
        p = fract(p * vec2(443.8975, 397.2973));
        p += dot(p, p + 19.19);
        return fract(p.x * p.y);
      }

      void main() {
        vec2 uv = gl_FragCoord.xy / u_resolution;
        vec2 mouse = u_mouse;
        float y = uv.y;
        vec3 col;
        
        col = vec3(0.0);
        col = mix(col, vec3(0.0, 0.05, 0.25), smoothstep(0.85, 0.65, y));
        col = mix(col, vec3(0.0, 0.2, 0.8), smoothstep(0.7, 0.5, y));
        col = mix(col, vec3(0.0, 0.4, 1.0), smoothstep(0.55, 0.38, y));
        float bottomGlow = smoothstep(0.35, 0.0, y);
        float arcDist = length((uv - vec2(0.5, -0.4)) * vec2(0.55, 1.0));
        float arc = smoothstep(0.9, 0.25, arcDist);
        col = mix(col, vec3(1.0), bottomGlow * arc);

        vec2 glowCenter = vec2(mouse.x, 1.0 - mouse.y);
        float glowDist = length((uv - glowCenter) * vec2(1.4, 1.0));
        float glow = exp(-glowDist * 3.0) * 0.35;
        col += vec3(0.1, 0.4, 1.0) * glow;

        float wave = sin(uv.x * 6.0 + u_time * 0.5 + mouse.x * 3.0) * 0.02;
        wave += sin(uv.x * 3.0 - u_time * 0.3 + mouse.y * 2.0) * 0.015;
        float waveMask = smoothstep(0.3, 0.8, 1.0 - uv.y);
        col += vec3(0.05, 0.2, 0.5) * wave * waveMask * 3.0;

        gl_FragColor = vec4(col, 1.0);
      }
    `;

    function createShader(type: number, src: string) {
      const s = gl!.createShader(type)!;
      gl!.shaderSource(s, src);
      gl!.compileShader(s);
      return s;
    }

    const prog = gl.createProgram()!;
    gl.attachShader(prog, createShader(gl.VERTEX_SHADER, vertSrc));
    gl.attachShader(prog, createShader(gl.FRAGMENT_SHADER, fragSrc));
    gl.linkProgram(prog);
    gl.useProgram(prog);

    const buf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1,-1,1,-1,-1,1,1,1]), gl.STATIC_DRAW);

    const aPos = gl.getAttribLocation(prog, "a_position");
    gl.enableVertexAttribArray(aPos);
    gl.vertexAttribPointer(aPos, 2, gl.FLOAT, false, 0, 0);

    const uRes = gl.getUniformLocation(prog, "u_resolution");
    const uMouse = gl.getUniformLocation(prog, "u_mouse");
    const uTime = gl.getUniformLocation(prog, "u_time");

    function resize() {
      const dpr = Math.min(window.devicePixelRatio, 2);
      canvas!.width = canvas!.clientWidth * dpr;
      canvas!.height = canvas!.clientHeight * dpr;
      gl!.viewport(0, 0, canvas!.width, canvas!.height);
    }

    function render(t: number) {
      gl!.uniform2f(uRes, canvas!.width, canvas!.height);
      gl!.uniform2f(uMouse, mouseRef.current.x, mouseRef.current.y);
      gl!.uniform1f(uTime, t * 0.001);
      gl!.drawArrays(gl!.TRIANGLE_STRIP, 0, 4);
      animRef.current = requestAnimationFrame(render);
    }

    resize();
    window.addEventListener("resize", resize);
    animRef.current = requestAnimationFrame(render);

    const handleMove = (e: MouseEvent) => {
      const rect = canvas!.getBoundingClientRect();
      mouseRef.current.x = (e.clientX - rect.left) / rect.width;
      mouseRef.current.y = (e.clientY - rect.top) / rect.height;
    };
    canvas!.parentElement?.addEventListener("mousemove", handleMove);

    return () => {
      cancelAnimationFrame(animRef.current);
      window.removeEventListener("resize", resize);
      canvas!.parentElement?.removeEventListener("mousemove", handleMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ display: "block" }}
    />
  );
}

// ─── Rotating Placeholder with scroll-up animation ───────────────────────────

function RotatingPlaceholder({ items }: { items: string[] }) {
  const [index, setIndex] = useState(0);
  const [animState, setAnimState] = useState<"visible" | "exiting" | "entering">("visible");

  useEffect(() => {
    const timer = setInterval(() => {
      // Start exit: fade out moving up
      setAnimState("exiting");
      setTimeout(() => {
        // Switch text and start enter: fade in moving up from below
        setIndex((i) => (i + 1) % items.length);
        setAnimState("entering");
        // Small delay to let the browser paint the "entering" start position
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

  if (animState === "exiting") {
    opacity = 0;
    transform = "translateY(-14px)";
  } else if (animState === "entering") {
    opacity = 0;
    transform = "translateY(14px)";
  } else {
    opacity = 1;
    transform = "translateY(0)";
  }

  return (
    <span
      className="inline-block pointer-events-none text-white/40"
      style={{
        transition: animState === "entering" ? "none" : "opacity 0.4s ease-in-out, transform 0.4s ease-in-out",
        opacity,
        transform,
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

// ─── Main Hero Component ─────────────────────────────────────────────────────

export function HeroNew() {
  const [inputValue, setInputValue] = useState("");
  const [activeRoute, setActiveRoute] = useState<PromptRoute | null>(null);
  const [moreOpen, setMoreOpen] = useState(false);

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

  const [isClosing, setIsClosing] = useState(false);

  const chatboxRef = useRef<HTMLDivElement>(null);
  const pillsRef = useRef<HTMLDivElement>(null);

  // Click outside chatbox resets to default state with smooth transition
  // Excludes pills area so clicking a different pill navigates directly
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

  function handlePillClick(route: string) {
    setActiveRoute(PROMPT_ROUTES[route]);
    setInputValue("");
  }

  return (
    <section className="relative pt-32 pb-10 md:pt-44 md:pb-14 lg:pt-52 lg:pb-16 overflow-hidden min-h-[90vh] flex items-center">
      {/* Interactive shader background */}
      <ShaderBackground />

      {/* Film grain overlay */}
      <div
        className="absolute inset-0 pointer-events-none mix-blend-overlay opacity-20"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Bottom fade to white */}
      <div className="absolute bottom-0 left-0 right-0 h-[15%] bg-gradient-to-b from-transparent to-white pointer-events-none" />

      <div className="container-site relative z-10 w-full">
        <ScrollReveal direction="up" delay={0.1}>
          <div className="max-w-5xl mx-auto text-center">
            {/* H1 - Primary headline at 71px, force 2 lines max */}
            <h1
              className="font-bold leading-[1.05] tracking-tight mb-8 text-white mx-auto"
              style={{ fontSize: "clamp(48px, 5vw, 71px)", maxWidth: "1100px" }}
            >
              The modern banking platform<br />for financial innovators.
            </h1>

            {/* Sub-question at 28px */}
            <p
              className="text-white/60"
              style={{ fontSize: "28px", lineHeight: 1.3, marginBottom: "30px" }}
            >
              What do you want to build?
            </p>

            {/* Prompt Box - expands downward when active */}
            <div ref={chatboxRef} className="relative max-w-2xl mx-auto mb-8">
              <div
                className="bg-white/10 backdrop-blur-md border border-white/20 rounded-[28px] shadow-2xl overflow-hidden"
                style={{
                  transition: "max-height 0.4s ease-in-out",
                  maxHeight: activeRoute && !isClosing ? "500px" : "56px",
                }}
              >
                {/* Input row - always visible */}
                <form onSubmit={handleSubmit} className="flex items-center px-6 h-[56px]">
                  <div className="flex-1 relative h-full flex items-center">
                    {/* Real input */}
                    <input
                      type="text"
                      value={inputValue}
                      onChange={(e) => {
                        setInputValue(e.target.value);
                        if (activeRoute) setActiveRoute(null);
                      }}
                      className="w-full bg-transparent text-white text-lg outline-none relative z-10 placeholder:text-white/40"
                      placeholder={activeRoute ? "Ask something else" : ""}
                    />
                    {/* Animated placeholder (only show when empty and no route) */}
                    {!inputValue && !activeRoute && (
                      <span className="absolute inset-0 flex items-center">
                        <RotatingPlaceholder items={PLACEHOLDERS} />
                      </span>
                    )}
                  </div>
                  <button
                    type="submit"
                    className="ml-4 w-9 h-9 flex items-center justify-center bg-[#0065ff] hover:bg-[#0050cc] text-white rounded-full transition-colors flex-shrink-0"
                    aria-label="Submit"
                  >
                    <ArrowUpIcon />
                  </button>
                </form>

                {/* Expanded content - appears below input */}
                {activeRoute && (
                  <div className="px-6 pb-6 text-left animate-[fadeSlideIn_0.4s_ease-out]">
                    <div className="border-t border-white/10 pt-5">
                      <h2 className="text-lg md:text-xl font-bold text-white mb-2">
                        {activeRoute.heading}
                      </h2>
                      <p className="text-white/60 text-sm leading-relaxed mb-5">
                        {activeRoute.body}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {activeRoute.buttons.map((btn) => {
                          const isExpert = btn.label.toLowerCase().includes("talk to");
                          return (
                            <a
                              key={btn.label}
                              href={btn.href}
                              className={
                                isExpert
                                  ? "px-4 py-2 bg-[#0065ff] hover:bg-[#0050cc] border border-[#0065ff] text-white text-sm font-medium rounded-full transition-colors"
                                  : "px-4 py-2 bg-white/10 hover:bg-white/20 border border-white/15 text-white text-sm font-medium rounded-full transition-colors"
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
                  className="px-4 py-2 bg-white/10 hover:bg-white/20 border border-white/15 text-white/80 hover:text-white text-sm rounded-full transition-colors"
                >
                  {pill.label}
                </button>
              ))}

              {/* More pill - toggles extra pills inline */}
              <button
                onClick={() => setMoreOpen(!moreOpen)}
                className="px-4 py-2 bg-white/10 hover:bg-white/20 border border-white/15 text-white/80 hover:text-white text-sm rounded-full transition-colors"
              >
                {moreOpen ? "Less" : "More"}
              </button>

              {/* Talk to an expert pill - filled blue */}
              <a
                href="/contact/"
                className="px-4 py-2 bg-[#0065ff] hover:bg-[#0050cc] border border-[#0065ff] text-white text-sm font-medium rounded-full transition-colors"
              >
                Talk to an expert
              </a>

              {/* Expanded "More" pills - shown inline continuing the flow */}
              {moreOpen && MORE_PILLS.map((pill) => (
                <button
                  key={pill.route}
                  onClick={() => handlePillClick(pill.route)}
                  className="px-4 py-2 bg-white/5 hover:bg-white/15 border border-white/10 text-white/70 hover:text-white text-sm rounded-full transition-colors animate-[fadeSlideIn_0.3s_ease-out]"
                >
                  {pill.label}
                </button>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>

      {/* Keyframe animation */}
      <style jsx>{`
        @keyframes fadeSlideIn {
          from {
            opacity: 0;
            transform: translateY(-8px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}
