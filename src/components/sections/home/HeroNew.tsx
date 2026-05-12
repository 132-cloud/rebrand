"use client";

import React, { useRef, useEffect } from "react";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { Button } from "@/components/ui/Button";

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

      // Hash for grain
      float hash(vec2 p) {
        p = fract(p * vec2(443.8975, 397.2973));
        p += dot(p, p + 19.19);
        return fract(p.x * p.y);
      }

      void main() {
        vec2 uv = gl_FragCoord.xy / u_resolution;
        vec2 mouse = u_mouse;

        // Base gradient: black at top -> blue in middle -> white at bottom
        // uv.y: 0 = bottom, 1 = top in WebGL
        float y = uv.y;
        vec3 col;
        
        // Start from black at top
        col = vec3(0.0);
        // Black holds longer at top, then transitions to deep navy
        col = mix(col, vec3(0.0, 0.05, 0.25), smoothstep(0.85, 0.65, y));
        // Deep navy to rich blue
        col = mix(col, vec3(0.0, 0.2, 0.8), smoothstep(0.7, 0.5, y));
        // Rich blue to bright blue
        col = mix(col, vec3(0.0, 0.4, 1.0), smoothstep(0.55, 0.38, y));
        // Bright blue to white at bottom (arc-shaped glow)
        float bottomGlow = smoothstep(0.35, 0.0, y);
        // Make the white more of a radial arc from bottom center
        float arcDist = length((uv - vec2(0.5, -0.4)) * vec2(0.55, 1.0));
        float arc = smoothstep(0.9, 0.25, arcDist);
        col = mix(col, vec3(1.0), bottomGlow * arc);

        // Mouse-reactive glow
        vec2 glowCenter = vec2(mouse.x, 1.0 - mouse.y);
        float glowDist = length((uv - glowCenter) * vec2(1.4, 1.0));
        float glow = exp(-glowDist * 3.0) * 0.35;
        col += vec3(0.1, 0.4, 1.0) * glow;

        // Animated wave distortion
        float wave = sin(uv.x * 6.0 + u_time * 0.5 + mouse.x * 3.0) * 0.02;
        wave += sin(uv.x * 3.0 - u_time * 0.3 + mouse.y * 2.0) * 0.015;
        float waveMask = smoothstep(0.3, 0.8, 1.0 - uv.y);
        col += vec3(0.05, 0.2, 0.5) * wave * waveMask * 3.0;

        // Film grain removed from shader - applied as CSS overlay instead

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

export function HeroNew() {
  return (
    <section className="relative pt-32 pb-20 md:pt-44 md:pb-28 lg:pt-52 lg:pb-36 overflow-hidden">
      {/* Interactive shader background */}
      <ShaderBackground />

      {/* Film grain overlay */}
      <div
        className="absolute inset-0 pointer-events-none mix-blend-overlay opacity-20"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Bottom 30% fade to white */}
      <div className="absolute bottom-0 left-0 right-0 h-[30%] bg-gradient-to-b from-transparent to-white pointer-events-none" />

      <div className="container-site relative z-10">
        <ScrollReveal direction="up" delay={0.1}>
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-[2.5rem] md:text-[3.5rem] lg:text-[4.25rem] font-bold leading-[1.05] tracking-tight mb-6">
              Modern banking platform for financial innovators.
            </h1>
            <p className="text-lg md:text-xl text-white/60 leading-relaxed max-w-2xl mx-auto mb-10">
              One platform for core processing, digital banking, account opening,
              data, engagement, and managed operations — for financial innovators
              who are done managing around legacy systems.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button href="#dashboard-preview" variant="primary" size="lg">
                Explore the platform
              </Button>
              <Button href="/contact/" variant="outline" size="lg" className="!border-[#0065ff] !text-[#0065ff] hover:!bg-[#0065ff]/10">
                Talk to an expert
              </Button>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
