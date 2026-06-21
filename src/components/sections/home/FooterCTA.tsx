"use client";

import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { Button } from "@/components/ui/Button";
import { useEffect, useRef } from "react";

function Stars() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    const stars: { x: number; y: number; r: number; opacity: number; speed: number; phase: number }[] = [];

    const resize = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      canvas.height = canvas.offsetHeight * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };

    const init = () => {
      resize();
      stars.length = 0;
      const count = Math.floor((canvas.offsetWidth * canvas.offsetHeight) / 4000);
      for (let i = 0; i < count; i++) {
        stars.push({
          x: Math.random() * canvas.offsetWidth,
          y: Math.random() * canvas.offsetHeight * 0.7,
          r: Math.random() * 1.2 + 0.3,
          opacity: Math.random(),
          speed: Math.random() * 0.0025 + 0.001,
          phase: Math.random() * Math.PI * 2,
        });
      }
    };

    const draw = (time: number) => {
      ctx.clearRect(0, 0, canvas.offsetWidth, canvas.offsetHeight);
      for (const star of stars) {
        const twinkle = (Math.sin(time * star.speed + star.phase) + 1) / 2;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${twinkle * 0.3 + 0.025})`;
        ctx.fill();
      }
      animationId = requestAnimationFrame(draw);
    };

    init();
    animationId = requestAnimationFrame(draw);

    window.addEventListener("resize", init);
    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", init);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
    />
  );
}

export function FooterCTA() {
  return (
    <section
      className="relative py-32 md:py-44 lg:py-56 overflow-hidden"
      style={{
        background:
          "radial-gradient(ellipse 120% 110% at 50% 100%, #ffffff 0%, #0065FF 40%, #000000 80%)",
      }}
    >
      <Stars />

      <div className="absolute bottom-0 left-0 right-0 h-[30%] bg-gradient-to-b from-transparent to-white" />

      <div className="container-site relative z-10">
        <ScrollReveal>
          <div className="max-w-5xl mx-auto text-center">
            <h2
              className="font-bold leading-[1.05] tracking-tight text-white whitespace-nowrap"
              style={{ fontSize: "clamp(3rem, 6vw, 85px)" }}
            >
              Built for a bigger platform.
            </h2>
            <p className="mt-6 text-lg md:text-xl text-white/70 max-w-3xl mx-auto">
              One platform for core processing, managed services, digital banking, account opening, data, engagement, and governed AI workflows.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-10">
              <Button href="/contact/" variant="primary" size="lg">
                Talk to Nymbus
              </Button>
              <Button href="/platform/" variant="outline" size="lg">
                Explore the platform
              </Button>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
