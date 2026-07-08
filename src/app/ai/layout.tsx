"use client";

import { useEffect } from "react";

export default function AILayout({ children }: { children: React.ReactNode }) {
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
        .ai-layout {
          font-family: "Inter Tight", "proxima-nova", sans-serif;
        }
        .ai-layout h1,
        .ai-layout h2,
        .ai-layout h3,
        .ai-layout h4,
        .ai-layout h5,
        .ai-layout h6 {
          font-family: "Inter Tight", "proxima-nova", sans-serif;
        }
        .ai-layout p,
        .ai-layout span,
        .ai-layout a,
        .ai-layout button,
        .ai-layout li {
          font-family: "Inter Tight", "proxima-nova", sans-serif;
        }
      `}</style>
      <div className="ai-layout">
        {children}
      </div>
    </>
  );
}
