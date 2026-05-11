"use client";

import { useEffect, useRef } from "react";
import { ScrollReveal } from "@/components/animations/ScrollReveal";

function BlueprintGrid({ sectionRef }: { sectionRef: React.RefObject<HTMLElement | null> }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0, y: 0, active: false });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    const gridSize = 40;

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.scale(dpr, dpr);
    };

    const handleMouseMove = (e: MouseEvent) => {
      const canvasRect = canvas.getBoundingClientRect();
      mouseRef.current = { x: e.clientX - canvasRect.left, y: e.clientY - canvasRect.top, active: true };
    };

    const handleMouseLeave = () => {
      mouseRef.current.active = false;
    };

    const draw = () => {
      const rect = canvas.getBoundingClientRect();
      const w = rect.width;
      const h = rect.height;
      ctx.clearRect(0, 0, w, h);

      const mouse = mouseRef.current;

      // Vertical fade mask (20% to 80%)
      const fadeStart = h * 0.2;
      const fadeEnd = h * 0.8;

      for (let x = 0; x <= w; x += gridSize) {
        for (let y = 0; y <= h; y += gridSize) {
          // Calculate fade opacity
          let fadeOpacity = 1;
          if (y < fadeStart) fadeOpacity = y / fadeStart;
          else if (y > fadeEnd) fadeOpacity = (h - y) / (h - fadeEnd);

          // Mouse displacement
          let offsetX = 0;
          let offsetY = 0;
          if (mouse.active) {
            const dx = x - mouse.x;
            const dy = y - mouse.y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            const radius = 150;
            if (dist < radius) {
              const force = (1 - dist / radius) * 8;
              offsetX = (dx / dist) * force;
              offsetY = (dy / dist) * force;
            }
          }

          const baseOpacity = 0.18 * fadeOpacity;

          // Draw horizontal line segment
          if (x + gridSize <= w) {
            ctx.beginPath();
            ctx.moveTo(x + offsetX, y + offsetY);

            // Next point displacement
            let nextOffsetX = 0;
            let nextOffsetY = 0;
            if (mouse.active) {
              const dx2 = (x + gridSize) - mouse.x;
              const dy2 = y - mouse.y;
              const dist2 = Math.sqrt(dx2 * dx2 + dy2 * dy2);
              if (dist2 < 150) {
                const force2 = (1 - dist2 / 150) * 8;
                nextOffsetX = (dx2 / dist2) * force2;
                nextOffsetY = (dy2 / dist2) * force2;
              }
            }

            ctx.lineTo(x + gridSize + nextOffsetX, y + nextOffsetY);
            ctx.strokeStyle = `rgba(0, 100, 255, ${baseOpacity})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }

          // Draw vertical line segment
          if (y + gridSize <= h) {
            ctx.beginPath();
            ctx.moveTo(x + offsetX, y + offsetY);

            let nextOffsetX2 = 0;
            let nextOffsetY2 = 0;
            if (mouse.active) {
              const dx3 = x - mouse.x;
              const dy3 = (y + gridSize) - mouse.y;
              const dist3 = Math.sqrt(dx3 * dx3 + dy3 * dy3);
              if (dist3 < 150) {
                const force3 = (1 - dist3 / 150) * 8;
                nextOffsetX2 = (dx3 / dist3) * force3;
                nextOffsetY2 = (dy3 / dist3) * force3;
              }
            }

            // Fade for next y point
            let nextFade = 1;
            const ny = y + gridSize;
            if (ny < fadeStart) nextFade = ny / fadeStart;
            else if (ny > fadeEnd) nextFade = (h - ny) / (h - fadeEnd);

            ctx.lineTo(x + nextOffsetX2, y + gridSize + nextOffsetY2);
            ctx.strokeStyle = `rgba(0, 100, 255, ${0.18 * Math.min(fadeOpacity, nextFade)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      animationId = requestAnimationFrame(draw);
    };

    resize();
    animationId = requestAnimationFrame(draw);

    const section = sectionRef.current;
    if (section) {
      section.addEventListener("mousemove", handleMouseMove);
      section.addEventListener("mouseleave", handleMouseLeave);
    }
    window.addEventListener("resize", resize);

    return () => {
      cancelAnimationFrame(animationId);
      if (section) {
        section.removeEventListener("mousemove", handleMouseMove);
        section.removeEventListener("mouseleave", handleMouseLeave);
      }
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
    />
  );
}

export function ArchitectureDiagram() {
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <section ref={sectionRef} className="relative section-padding bg-[#0a0a1a] overflow-hidden">
      {/* Interactive blueprint grid */}
      <BlueprintGrid sectionRef={sectionRef} />

      {/* Bottom fade to black */}
      {/* removed */}

      <div className="container-site relative z-10">
        <ScrollReveal>
          <div className="max-w-5xl mb-12">
            <h4 className="text-[2rem] md:text-[2.15rem] mb-4 leading-tight">
              <span className="font-bold">Unified banking infrastructure for every growth strategy.</span>{" "}
              <span className="font-normal text-white/60">Launch, operate, engage, and connect across core, digital, data, and third-party systems.</span>
            </h4>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="relative w-full overflow-x-auto">
            <svg viewBox="0 0 1020 560" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto min-w-[700px]">

              {/* Animated pulse gradient definitions */}
              <defs>
                <style>{`
                  .connector-pulse {
                    stroke: rgba(0, 150, 255, 0.4);
                    stroke-width: 1;
                    stroke-dasharray: 2 2;
                    stroke-dashoffset: 0;
                    animation: dash-flow 2s linear infinite;
                  }
                  .connector-pulse-rev {
                    stroke: rgba(0, 150, 255, 0.4);
                    stroke-width: 1;
                    stroke-dasharray: 2 2;
                    stroke-dashoffset: 0;
                    animation: dash-flow-rev 3s linear infinite;
                  }
                  @keyframes dash-flow {
                    to { stroke-dashoffset: -28; }
                  }
                  @keyframes dash-flow-rev {
                    to { stroke-dashoffset: 28; }
                  }
                `}</style>
              </defs>

              {/* === TOP ROW: Onboard, Digital, Engage, Levels — solid fill #0065ff with hover === */}
              <a href="#" className="group">
                <rect x="60" y="40" width="110" height="44" rx="8" fill="#0065FF" className="transition-all duration-200 group-hover:fill-[#2684FF]" />
                <text x="115" y="67" textAnchor="middle" fill="white" fontSize="14" fontFamily="proxima-nova, sans-serif" fontWeight="700">Onboard</text>
              </a>

              <a href="#" className="group">
                <rect x="220" y="40" width="110" height="44" rx="8" fill="#0065FF" className="transition-all duration-200 group-hover:fill-[#2684FF]" />
                <text x="275" y="67" textAnchor="middle" fill="white" fontSize="14" fontFamily="proxima-nova, sans-serif" fontWeight="700">Digital</text>
              </a>

              <a href="#" className="group">
                <rect x="380" y="40" width="110" height="44" rx="8" fill="#0065FF" className="transition-all duration-200 group-hover:fill-[#2684FF]" />
                <text x="435" y="67" textAnchor="middle" fill="white" fontSize="14" fontFamily="proxima-nova, sans-serif" fontWeight="700">Engage</text>
              </a>

              <a href="#" className="group">
                <rect x="540" y="40" width="110" height="44" rx="8" fill="#0065FF" className="transition-all duration-200 group-hover:fill-[#2684FF]" />
                <text x="595" y="67" textAnchor="middle" fill="white" fontSize="14" fontFamily="proxima-nova, sans-serif" fontWeight="700">Levels</text>
              </a>

              {/* Horizontal connectors between top row — animated */}
              <line x1="170" y1="62" x2="220" y2="62" className="connector-pulse" />
              <line x1="330" y1="62" x2="380" y2="62" className="connector-pulse" />
              <line x1="490" y1="62" x2="540" y2="62" className="connector-pulse" />

              {/* === VERTICAL CONNECTORS: Top row down to Core === */}
              {/* Core box x=275 to x=435 (width 160). 4 evenly spaced entry points: 307, 339, 371, 403 */}

              {/* From Onboard (x=115) → Core top at x=307 — animated */}
              <line x1="115" y1="84" x2="115" y2="160" className="connector-pulse" />
              <line x1="115" y1="160" x2="307" y2="160" className="connector-pulse" />
              <line x1="307" y1="160" x2="307" y2="200" className="connector-pulse" />

              {/* From Digital (x=275) → Core top at x=339 — animated */}
              <line x1="275" y1="84" x2="275" y2="140" className="connector-pulse" />
              <line x1="275" y1="140" x2="339" y2="140" className="connector-pulse" />
              <line x1="339" y1="140" x2="339" y2="200" className="connector-pulse" />

              {/* From Engage (x=435) → Core top at x=371 — animated */}
              <line x1="435" y1="84" x2="435" y2="140" className="connector-pulse" />
              <line x1="435" y1="140" x2="371" y2="140" className="connector-pulse-rev" />
              <line x1="371" y1="140" x2="371" y2="200" className="connector-pulse" />

              {/* From Levels (x=595) → Core top at x=403 — animated */}
              <line x1="595" y1="84" x2="595" y2="160" className="connector-pulse" />
              <line x1="595" y1="160" x2="403" y2="160" className="connector-pulse-rev" />
              <line x1="403" y1="160" x2="403" y2="200" className="connector-pulse" />

              {/* === CORE BOX === */}
              <a href="#" className="group">
                <rect x="275" y="200" width="160" height="160" rx="12" stroke="rgba(0,100,255,0.4)" strokeWidth="1.5" fill="rgba(0, 30, 76, 1)" className="transition-all duration-200 group-hover:fill-[rgba(0,100,255,0.2)] group-hover:stroke-[rgba(0,100,255,0.7)]" />
                {/* Core icon */}
                <g transform="translate(330, 240)">
                  <path d="M25 2 L48 23 L2 23 Z" fill="#0065FF" />
                  <path d="M25 2 L25 23 L2 23 Z" fill="#0094FF" />
                  <path d="M25 2 L36 23 L14 23 Z" fill="#00AAFF" opacity="0.6" />
                  <path d="M25 48 L48 27 L2 27 Z" fill="#00BBFF" />
                  <path d="M25 48 L25 27 L2 27 Z" fill="#0094FF" />
                  <path d="M25 48 L36 27 L14 27 Z" fill="#00DDFF" opacity="0.5" />
                </g>
                <text x="355" y="320" textAnchor="middle" fill="white" fontSize="16" fontFamily="proxima-nova, sans-serif" fontWeight="700">Core</text>
              </a>

              {/* === CORE → INSIGHTS → CONNECT — animated === */}
              <line x1="435" y1="280" x2="560" y2="280" className="connector-pulse" />

              {/* Insights box — solid fill with hover */}
              <a href="#" className="group">
                <rect x="560" y="258" width="100" height="44" rx="8" fill="#0065FF" className="transition-all duration-200 group-hover:fill-[#2684FF]" />
                <text x="610" y="285" textAnchor="middle" fill="white" fontSize="14" fontFamily="proxima-nova, sans-serif" fontWeight="700">Insights</text>
              </a>

              <line x1="660" y1="280" x2="720" y2="280" className="connector-pulse" />

              {/* Connect box — solid fill with hover */}
              <a href="#" className="group">
                <rect x="720" y="258" width="100" height="44" rx="8" fill="#0065FF" className="transition-all duration-200 group-hover:fill-[#2684FF]" />
                <text x="770" y="285" textAnchor="middle" fill="white" fontSize="14" fontFamily="proxima-nova, sans-serif" fontWeight="700">Connect</text>
              </a>

              {/* === THIRD-PARTY CAPABILITIES === */}
              {/* Connector from Connect to third-party — reversed direction */}
              <line x1="820" y1="280" x2="860" y2="280" className="connector-pulse-rev" />

              {/* Third-party container — no stroke, fully rounded, wider for larger font */}
              <rect x="840" y="45" width="175" height="420" rx="12" fill="rgba(0, 23, 56, 1)" />
              <text x="927" y="75" textAnchor="middle" fill="#4da6ff" fontSize="12" fontFamily="proxima-nova, sans-serif" fontWeight="600">Third-Party Capabilities</text>

              {/* Third-party items */}
              {[
                "Payment Rails",
                "Card Issuance",
                "Data Enrichment",
                "Regtech - KYC/BSA/AML",
                "Marketing Technology",
                "File Storage",
                "Business Intelligence",
              ].map((item, i) => (
                <g key={item}>
                  <rect x="855" y={95 + i * 52} width="145" height="34" rx="6" stroke="rgba(0,100,255,0.3)" strokeWidth="1" fill="rgba(0,100,255,0.05)" />
                  <text x="927" y={116 + i * 52} textAnchor="middle" fill="rgba(255,255,255,0.7)" fontSize="11" fontFamily="proxima-nova, sans-serif">{item}</text>
                </g>
              ))}

              {/* === BOTTOM ROW — animated === */}
              {/* From Core bottom at x=315 → Teller (x=150) */}
              <line x1="315" y1="360" x2="315" y2="410" className="connector-pulse" />
              <line x1="315" y1="410" x2="150" y2="410" className="connector-pulse-rev" />
              <line x1="150" y1="410" x2="150" y2="450" className="connector-pulse" />

              {/* From Core bottom at x=355 → Back-Office — straight vertical */}
              <line x1="355" y1="360" x2="355" y2="450" className="connector-pulse" />

              {/* From Core bottom at x=395 → Customer Service (x=540) */}
              <line x1="395" y1="360" x2="395" y2="410" className="connector-pulse" />
              <line x1="395" y1="410" x2="540" y2="410" className="connector-pulse" />
              <line x1="540" y1="410" x2="540" y2="450" className="connector-pulse" />

              {/* Teller Application */}
              <rect x="80" y="450" width="140" height="44" rx="8" stroke="rgba(0,100,255,0.3)" strokeWidth="1" strokeDasharray="4 3" fill="rgba(0,100,255,0.04)" />
              <text x="150" y="476" textAnchor="middle" fill="rgba(255,255,255,0.6)" fontSize="14" fontFamily="proxima-nova, sans-serif">Teller Application</text>

              {/* Back-Office Application */}
              <rect x="275" y="450" width="160" height="44" rx="8" stroke="rgba(0,100,255,0.3)" strokeWidth="1" strokeDasharray="4 3" fill="rgba(0,100,255,0.04)" />
              <text x="355" y="476" textAnchor="middle" fill="rgba(255,255,255,0.6)" fontSize="14" fontFamily="proxima-nova, sans-serif">Back-Office Application</text>

              {/* Customer Service Application — wider for larger font */}
              <rect x="450" y="450" width="220" height="44" rx="8" stroke="rgba(0,100,255,0.3)" strokeWidth="1" strokeDasharray="4 3" fill="rgba(0,100,255,0.04)" />
              <text x="560" y="476" textAnchor="middle" fill="rgba(255,255,255,0.6)" fontSize="14" fontFamily="proxima-nova, sans-serif">Customer Service Application</text>

            </svg>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
