"use client";

import { useEffect, useRef } from "react";

export function FlowFieldShader() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0.5, y: 0.5, active: false });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let lines: {
      points: { x: number; y: number; baseX: number; baseY: number }[];
      color: string;
    }[] = [];

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.scale(dpr, dpr);
      initLines(rect.width, rect.height);
    };

    const initLines = (w: number, h: number) => {
      lines = [];
      const lineCount = 60;
      const centerX = w / 2;
      const centerY = h / 2;

      for (let i = 0; i < lineCount; i++) {
        const points: { x: number; y: number; baseX: number; baseY: number }[] = [];
        const segments = 20;
        const angle = ((i / lineCount) * Math.PI * 2) - Math.PI;
        const spread = 0.25 + Math.random() * 0.2;

        for (let j = 0; j <= segments; j++) {
          const t = j / segments;
          // Lines converge at center then spread outward (butterfly/hourglass shape)
          const curveT = t < 0.5 ? t * 2 : (1 - t) * 2;
          const narrowing = Math.pow(curveT, 1.5);

          let x: number, y: number;
          if (t < 0.5) {
            // Left side - spreading from center to left
            const progress = 1 - t * 2;
            x = centerX - progress * centerX * 0.98;
            y = centerY + Math.sin(angle) * progress * h * spread * (1 - narrowing * 0.7);
          } else {
            // Right side - spreading from center to right
            const progress = (t - 0.5) * 2;
            x = centerX + progress * centerX * 0.98;
            y = centerY + Math.sin(angle + Math.PI * 0.1) * progress * h * spread * (1 - narrowing * 0.7);
          }

          // Add slight curve variation
          y += Math.sin(t * Math.PI * 2 + i * 0.5) * 15;

          points.push({ x, y, baseX: x, baseY: y });
        }

        const opacity = 0.15 + Math.random() * 0.35;
        lines.push({
          points,
          color: `rgba(0, 100, 255, ${opacity})`,
        });
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = {
        x: (e.clientX - rect.left) / rect.width,
        y: (e.clientY - rect.top) / rect.height,
        active: true,
      };
    };

    const handleMouseLeave = () => {
      mouseRef.current.active = false;
    };

    const draw = (time: number) => {
      const rect = canvas.getBoundingClientRect();
      const w = rect.width;
      const h = rect.height;
      ctx.clearRect(0, 0, w, h);

      const mouse = mouseRef.current;
      const mx = mouse.x * w;
      const my = mouse.y * h;

      for (const line of lines) {
        ctx.beginPath();
        for (let i = 0; i < line.points.length; i++) {
          const p = line.points[i];

          // Animate points with gentle wave
          let targetX = p.baseX + Math.sin(time * 0.0005 + i * 0.3) * 3;
          let targetY = p.baseY + Math.cos(time * 0.0004 + i * 0.2) * 2;

          // Mouse interaction - push points away
          if (mouse.active) {
            const dx = targetX - mx;
            const dy = targetY - my;
            const dist = Math.sqrt(dx * dx + dy * dy);
            const radius = 120;
            if (dist < radius) {
              const force = (1 - dist / radius) * 40;
              targetX += (dx / dist) * force;
              targetY += (dy / dist) * force;
            }
          }

          // Smooth interpolation
          p.x += (targetX - p.x) * 0.08;
          p.y += (targetY - p.y) * 0.08;

          if (i === 0) {
            ctx.moveTo(p.x, p.y);
          } else {
            const prev = line.points[i - 1];
            const cpx = (prev.x + p.x) / 2;
            const cpy = (prev.y + p.y) / 2;
            ctx.quadraticCurveTo(prev.x, prev.y, cpx, cpy);
          }
        }
        // Draw final segment to the last point
        const lastPoint = line.points[line.points.length - 1];
        ctx.lineTo(lastPoint.x, lastPoint.y);
        ctx.strokeStyle = line.color;
        ctx.lineWidth = 0.8;
        ctx.stroke();

        // Draw endpoint dots at actual last drawn positions
        const firstPt = line.points[0];
        const lastPt = line.points[line.points.length - 1];
        ctx.fillStyle = "rgba(0, 100, 255, 0.6)";
        ctx.beginPath();
        ctx.arc(firstPt.x, firstPt.y, 2, 0, Math.PI * 2);
        ctx.fill();
        ctx.beginPath();
        ctx.arc(lastPt.x, lastPt.y, 2, 0, Math.PI * 2);
        ctx.fill();
      }

      animationId = requestAnimationFrame(draw);
    };

    resize();
    animationId = requestAnimationFrame(draw);

    canvas.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("mouseleave", handleMouseLeave);
    window.addEventListener("resize", resize);

    return () => {
      cancelAnimationFrame(animationId);
      canvas.removeEventListener("mousemove", handleMouseMove);
      canvas.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="w-full h-full cursor-crosshair"
      style={{ minHeight: "500px" }}
    />
  );
}
