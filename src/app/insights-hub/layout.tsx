"use client";

import { useEffect } from "react";

export default function InsightsHubLayout({ children }: { children: React.ReactNode }) {
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
        .insights-hub-layout,
        .insights-hub-layout h1, .insights-hub-layout h2, .insights-hub-layout h3, .insights-hub-layout h4, .insights-hub-layout h5, .insights-hub-layout h6,
        .insights-hub-layout p, .insights-hub-layout span, .insights-hub-layout a, .insights-hub-layout button, .insights-hub-layout li, .insights-hub-layout input {
          font-family: "Inter Tight", "proxima-nova", sans-serif;
        }
      `}</style>
      <div className="insights-hub-layout">
        {children}
      </div>
    </>
  );
}
