"use client";

import { useEffect } from "react";

export default function PersonalBankingLayout({ children }: { children: React.ReactNode }) {
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
        .personal-banking-layout {
          font-family: "Inter Tight", "proxima-nova", sans-serif;
        }
        .personal-banking-layout h1,
        .personal-banking-layout h2,
        .personal-banking-layout h3,
        .personal-banking-layout h4,
        .personal-banking-layout h5,
        .personal-banking-layout h6 {
          font-family: "Inter Tight", "proxima-nova", sans-serif;
        }
        .personal-banking-layout p,
        .personal-banking-layout span,
        .personal-banking-layout a,
        .personal-banking-layout button,
        .personal-banking-layout li {
          font-family: "Inter Tight", "proxima-nova", sans-serif;
        }
      `}</style>
      <div className="personal-banking-layout">
        {children}
      </div>
    </>
  );
}
