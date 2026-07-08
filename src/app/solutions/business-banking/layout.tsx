"use client";

import { useEffect } from "react";

export default function BusinessBankingLayout({ children }: { children: React.ReactNode }) {
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
        .biz-banking-layout {
          font-family: "Inter Tight", "proxima-nova", sans-serif;
        }
        .biz-banking-layout h1,
        .biz-banking-layout h2,
        .biz-banking-layout h3,
        .biz-banking-layout h4,
        .biz-banking-layout h5,
        .biz-banking-layout h6 {
          font-family: "Inter Tight", "proxima-nova", sans-serif;
        }
        .biz-banking-layout p,
        .biz-banking-layout span,
        .biz-banking-layout a,
        .biz-banking-layout button,
        .biz-banking-layout li {
          font-family: "Inter Tight", "proxima-nova", sans-serif;
        }
      `}</style>
      <div className="biz-banking-layout">
        {children}
      </div>
    </>
  );
}
