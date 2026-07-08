"use client";

import { useEffect } from "react";

export default function PressLayout({ children }: { children: React.ReactNode }) {
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
        .press-layout,
        .press-layout h1, .press-layout h2, .press-layout h3, .press-layout h4, .press-layout h5, .press-layout h6,
        .press-layout p, .press-layout span, .press-layout a, .press-layout button, .press-layout li {
          font-family: "Inter Tight", "proxima-nova", sans-serif;
        }
      `}</style>
      <div className="press-layout">
        {children}
      </div>
    </>
  );
}
