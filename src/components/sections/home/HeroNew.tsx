"use client";

import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { Button } from "@/components/ui/Button";

export function HeroNew() {
  return (
    <section className="relative pt-32 pb-20 md:pt-44 md:pb-28 lg:pt-52 lg:pb-36 overflow-hidden">
      {/* Keyframes for gentle wave animation */}
      <style jsx global>{`
        @keyframes arcWave {
          0% {
            transform: translateX(-6%);
          }
          50% {
            transform: translateX(6%);
          }
          100% {
            transform: translateX(-6%);
          }
        }
      `}</style>

      {/* Static base background */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse 200% 200% at 50% 130%, #ffffff 20%, #4da6ff 30%, #0055ff 40%, #0022aa 45%, #000510 60%, #000000 70%)
          `,
        }}
      />

      {/* Animated wave glow layer */}
      <div
        className="absolute inset-[-10%] pointer-events-none"
        style={{
          background: `
            radial-gradient(ellipse 120% 80% at 50% 110%, rgba(77, 166, 255, 0.6) 0%, rgba(0, 100, 255, 0.4) 20%, rgba(0, 50, 200, 0.2) 40%, transparent 60%)
          `,
          opacity: 0.7,
          animation: 'arcWave 10s ease-in-out infinite',
        }}
      />

      {/* Film grain overlay */}
      <div
        className="absolute inset-0 opacity-[0.06] pointer-events-none mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
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
              <Button href="/products/" variant="primary" size="lg">
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
