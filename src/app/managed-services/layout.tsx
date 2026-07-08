"use client";

import { useEffect } from "react";

export default function ManagedServicesLayout({ children }: { children: React.ReactNode }) {
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
        .managed-services-layout {
          font-family: "Inter Tight", "proxima-nova", sans-serif;
        }
        .managed-services-layout h1,
        .managed-services-layout h2,
        .managed-services-layout h3,
        .managed-services-layout h4,
        .managed-services-layout h5,
        .managed-services-layout h6 {
          font-family: "Inter Tight", "proxima-nova", sans-serif;
        }
        .managed-services-layout p,
        .managed-services-layout span,
        .managed-services-layout a,
        .managed-services-layout button,
        .managed-services-layout li {
          font-family: "Inter Tight", "proxima-nova", sans-serif;
        }
      `}</style>
      <div className="managed-services-layout">
        {children}
      </div>
    </>
  );
}
