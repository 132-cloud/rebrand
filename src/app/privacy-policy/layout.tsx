"use client";

import { useEffect } from "react";

export default function PrivacyPolicyLayout({ children }: { children: React.ReactNode }) {
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
        .privacy-policy-layout {
          font-family: "Inter Tight", "proxima-nova", sans-serif;
        }
        .privacy-policy-layout h1,
        .privacy-policy-layout h2,
        .privacy-policy-layout h3,
        .privacy-policy-layout h4,
        .privacy-policy-layout h5,
        .privacy-policy-layout h6,
        .privacy-policy-layout p,
        .privacy-policy-layout span,
        .privacy-policy-layout a,
        .privacy-policy-layout button,
        .privacy-policy-layout li {
          font-family: "Inter Tight", "proxima-nova", sans-serif;
        }
      `}</style>
      <div className="privacy-policy-layout">
        {children}
      </div>
    </>
  );
}
