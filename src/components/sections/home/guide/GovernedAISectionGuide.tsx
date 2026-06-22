"use client";

import { useEffect, useRef } from "react";
import { ScrollReveal } from "@/components/animations/ScrollReveal";

// Grey version of the FlowFieldShader for Guide theme
function FlowFieldShaderGrey() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let w = 0;
    let h = 0;

    const fontSize = 14;
    const lineHeight = fontSize * 1.5;
    const charWidth = fontSize * 0.85;
    let cols = 0;
    let rows = 0;
    let time = 0;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio, 2);
      const rect = canvas.getBoundingClientRect();
      w = rect.width;
      h = rect.height;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.scale(dpr, dpr);
      cols = Math.ceil(w / charWidth) + 2;
      rows = Math.ceil(h / lineHeight) + 2;
    };

    const draw = () => {
      time += 0.003;
      ctx.clearRect(0, 0, w, h);
      ctx.font = `${fontSize}px monospace`;
      ctx.textBaseline = "middle";

      for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
          const x = col * charWidth;
          const y = row * lineHeight;

          const nx = col / cols;
          const ny = row / rows;

          const diagonal = nx * 0.6 + (1 - ny) * 0.4;
          const wave1 = Math.sin(diagonal * 5 - time * 1.8) * 0.5 + 0.5;
          const wave2 = Math.sin(diagonal * 3.5 - time * 1.2 + 1.5) * 0.5 + 0.5;
          const wave3 = Math.sin(nx * 4 - time * 0.9 + ny * 2) * 0.5 + 0.5;

          const eased1 = wave1 * wave1 * (3 - 2 * wave1);
          const eased2 = wave2 * wave2 * (3 - 2 * wave2);
          const eased3 = wave3 * wave3 * (3 - 2 * wave3);

          let intensity = eased1 * 0.45 + eased2 * 0.35 + eased3 * 0.2;
          const positionBias = nx * 0.4 + ny * 0.6;
          intensity *= positionBias;

          if (intensity < 0.05) continue;

          const edgeFade = Math.min(1, (intensity - 0.05) / 0.15);
          const alpha = edgeFade * intensity * 1.6;

          if (alpha < 0.02) continue;

          const char = ((col * 7 + row * 13) % 2 === 0) ? "1" : "0";

          // Grey color instead of blue
          const brightness = Math.min(1, alpha * 1.3);
          const grey = Math.floor(brightness * 160);

          ctx.fillStyle = `rgba(${grey}, ${grey}, ${grey}, ${Math.min(1, alpha * 1.4)})`;
          ctx.fillText(char, x, y);
        }
      }

      animationId = requestAnimationFrame(draw);
    };

    resize();
    animationId = requestAnimationFrame(draw);
    window.addEventListener("resize", resize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="w-full h-full"
      style={{ minHeight: "500px", background: "transparent" }}
    />
  );
}

const aiCards = [
  {
    title: "Govern approved actions",
    description: "Connect AI workflows to defined banking actions, not open-ended automation.",
  },
  {
    title: "Control access and auditability",
    description: "Approve who can initiate, review, and complete sensitive work, plus clear records of AI-supported activity.",
  },
  {
    title: "Apply AI to real work",
    description: "Use AI inside onboarding, servicing, operations, growth, and core banking workflows.",
  },
];

export function GovernedAISectionGuide() {
  return (
    <section className="relative section-padding bg-black overflow-hidden">
      {/* FlowFieldShader background - grey */}
      <div className="absolute inset-0 opacity-40 pointer-events-none">
        <FlowFieldShaderGrey />
      </div>

      <div className="container-site relative z-10">
        <ScrollReveal>
          <div className="max-w-5xl mb-4">
            <h4 className="text-[2rem] md:text-[2.15rem] mb-2 leading-tight">
              <span className="font-bold text-white">Governed AI connected to real banking work.</span>{" "}
              <span className="font-normal text-white/60">
                Deploy AI-enabled workflows inside a controlled operating model, with approved actions, role-based access, human review paths, and auditability.
              </span>
            </h4>
          </div>
        </ScrollReveal>

        {/* 4-column cards */}
        <ScrollReveal delay={0.1}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-10">
            {aiCards.map((card) => (
              <div
                key={card.title}
                className="p-6 rounded-xl border border-white/10 bg-black/60 backdrop-blur-sm hover:border-white/20 transition-all duration-300"
              >
                <h4 className="text-white font-semibold text-sm mb-2">{card.title}</h4>
                <p className="text-white/40 text-sm leading-relaxed">{card.description}</p>
              </div>
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="mt-8">
            <a
              href="/ai/"
              className="inline-flex items-center px-6 py-3 text-sm font-semibold rounded-[4px] transition-all"
              style={{
                backgroundColor: "#171216",
                color: "#ffffff",
                boxShadow: "0 4px 14px rgba(100, 100, 100, 0.4)",
              }}
            >
              Build with governed AI
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
