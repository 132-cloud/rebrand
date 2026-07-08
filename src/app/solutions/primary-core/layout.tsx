"use client";

import { useEffect } from "react";

export default function PrimaryCoreLayout({ children }: { children: React.ReactNode }) {
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
        .primary-core-layout {
          font-family: "Inter Tight", "proxima-nova", sans-serif;
        }
        .primary-core-layout h1,
        .primary-core-layout h2,
        .primary-core-layout h3,
        .primary-core-layout h4,
        .primary-core-layout h5,
        .primary-core-layout h6 {
          font-family: "Inter Tight", "proxima-nova", sans-serif;
        }
        .primary-core-layout p,
        .primary-core-layout span,
        .primary-core-layout a,
        .primary-core-layout button,
        .primary-core-layout li {
          font-family: "Inter Tight", "proxima-nova", sans-serif;
        }
      `}</style>
      <div className="primary-core-layout">
        {children}
      </div>
    </>
  );
}
