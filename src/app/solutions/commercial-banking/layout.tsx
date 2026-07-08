"use client";

import { useEffect } from "react";

export default function CommercialBankingLayout({ children }: { children: React.ReactNode }) {
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
        .commercial-banking-layout {
          font-family: "Inter Tight", "proxima-nova", sans-serif;
        }
        .commercial-banking-layout h1,
        .commercial-banking-layout h2,
        .commercial-banking-layout h3,
        .commercial-banking-layout h4,
        .commercial-banking-layout h5,
        .commercial-banking-layout h6 {
          font-family: "Inter Tight", "proxima-nova", sans-serif;
        }
        .commercial-banking-layout p,
        .commercial-banking-layout span,
        .commercial-banking-layout a,
        .commercial-banking-layout button,
        .commercial-banking-layout li {
          font-family: "Inter Tight", "proxima-nova", sans-serif;
        }
      `}</style>
      <div className="commercial-banking-layout">
        {children}
      </div>
    </>
  );
}
