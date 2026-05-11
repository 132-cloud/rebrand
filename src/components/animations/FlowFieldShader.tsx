"use client";

import { useEffect, useRef } from "react";

export function FlowFieldShader() {
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

          // Diagonal wave moving from right-top to left-bottom
          // The wave front is a diagonal line that sweeps across
          const diagonal = nx * 0.6 + (1 - ny) * 0.4;

          // Multiple slow eased waves
          const wave1 = Math.sin(diagonal * 5 - time * 1.8) * 0.5 + 0.5;
          const wave2 = Math.sin(diagonal * 3.5 - time * 1.2 + 1.5) * 0.5 + 0.5;
          const wave3 = Math.sin(nx * 4 - time * 0.9 + ny * 2) * 0.5 + 0.5;

          // Ease the waves for smoother motion
          const eased1 = wave1 * wave1 * (3 - 2 * wave1);
          const eased2 = wave2 * wave2 * (3 - 2 * wave2);
          const eased3 = wave3 * wave3 * (3 - 2 * wave3);

          // Combine - this creates the rolling wave shape
          let intensity = eased1 * 0.45 + eased2 * 0.35 + eased3 * 0.2;

          // Fade from top-left (dark) to bottom-right (bright) - the diagonal gradient
          const positionBias = nx * 0.4 + ny * 0.6;
          intensity *= positionBias;

          // Soft edge fade at the wave boundary
          if (intensity < 0.05) continue;

          // Smooth the edge with a soft curve
          const edgeFade = Math.min(1, (intensity - 0.05) / 0.15);
          const alpha = edgeFade * intensity * 1.6;

          if (alpha < 0.02) continue;

          // All characters are ✳ (asterisk/star) as in the reference
          const char = "✳";

          // Color: #0065ff with boosted brightness
          const brightness = Math.min(1, alpha * 1.3);
          const r = Math.floor(brightness * 20);
          const g = Math.floor(brightness * 120);
          const b = Math.floor(brightness * 255);

          ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${Math.min(1, alpha * 1.4)})`;
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
