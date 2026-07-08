"use client";

import { useEffect } from "react";

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    document.body.classList.add("is-guide-theme");
    return () => {
      document.body.classList.remove("is-guide-theme");
    };
  }, []);

  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link
        href="https://fonts.googleapis.com/css2?family=Inter+Tight:ital,wght@0,100..900;1,100..900&display=swap"
        rel="stylesheet"
      />
      <style>{`
        .about-layout {
          font-family: "Inter Tight", "proxima-nova", sans-serif;
        }
        .about-layout h1,
        .about-layout h2,
        .about-layout h3,
        .about-layout h4,
        .about-layout h5,
        .about-layout h6,
        .about-layout p,
        .about-layout span,
        .about-layout a,
        .about-layout button,
        .about-layout li {
          font-family: "Inter Tight", "proxima-nova", sans-serif;
        }
      `}</style>
      <div className="about-layout">
        {children}
      </div>
    </>
  );
}
