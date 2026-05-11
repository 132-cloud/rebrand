"use client";

import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { useEffect, useState } from "react";

export function ClientLogos() {
  const [logos, setLogos] = useState<Record<string, string>>({});

  useEffect(() => {
    fetch("/images/logos/all-logos.json")
      .then((res) => res.json())
      .then((data) => setLogos(data))
      .catch(() => {});
  }, []);

  const logoKeys = [
    "connectone",
    "gesa",
    "locality",
    "citizens",
    "msufcu",
    "peoplesbank",
    "vantagewest",
    "vystar",
  ];

  return (
    <section className="py-12 md:py-16 border-y border-white/5">
      <div className="container-site">
        <ScrollReveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 items-center justify-items-center">
            {logoKeys.map((key) => (
              <div
                key={key}
                className="flex items-center justify-center opacity-50 hover:opacity-80 transition-opacity"
                dangerouslySetInnerHTML={{ __html: logos[key] || "" }}
              />
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
