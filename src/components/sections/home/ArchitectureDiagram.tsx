"use client";

import { useEffect, useRef } from "react";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import Link from "next/link";

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
              <span className="font-bold">Connect to existing systems. Simplify vendor management.</span>{" "}
              <span className="font-normal text-white/60">Unify banking workflows through APIs, extensible integrations, and Nymbus MCP.</span>
            </h4>
            <Link href="/platform/" className="text-sky-blue text-sm font-medium hover:text-blue-75 transition-colors no-underline inline-flex items-center gap-1">
              Explore integrations
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="relative w-full max-w-5xl mx-auto">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/Platform Diagram.svg"
              alt="Nymbus platform architecture diagram"
              className="w-full h-auto"
            />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
