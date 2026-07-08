"use client";

import { useEffect } from "react";

export default function ParallelCoreLayout({ children }: { children: React.ReactNode }) {
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
        .parallel-core-layout {
          font-family: "Inter Tight", "proxima-nova", sans-serif;
        }
        .parallel-core-layout h1,
        .parallel-core-layout h2,
        .parallel-core-layout h3,
        .parallel-core-layout h4,
        .parallel-core-layout h5,
        .parallel-core-layout h6 {
          font-family: "Inter Tight", "proxima-nova", sans-serif;
        }
        .parallel-core-layout p,
        .parallel-core-layout span,
        .parallel-core-layout a,
        .parallel-core-layout button,
        .parallel-core-layout li {
          font-family: "Inter Tight", "proxima-nova", sans-serif;
        }
      `}</style>
      <div className="parallel-core-layout">
        {children}
      </div>
    </>
  );
}
