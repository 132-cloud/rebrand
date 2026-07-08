"use client";

import { useEffect } from "react";

export default function PlatformLayout({ children }: { children: React.ReactNode }) {
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
        .platform-layout {
          font-family: "Inter Tight", "proxima-nova", sans-serif;
        }
        .platform-layout h1,
        .platform-layout h2,
        .platform-layout h3,
        .platform-layout h4,
        .platform-layout h5,
        .platform-layout h6 {
          font-family: "Inter Tight", "proxima-nova", sans-serif;
        }
        .platform-layout p,
        .platform-layout span,
        .platform-layout a,
        .platform-layout button,
        .platform-layout li {
          font-family: "Inter Tight", "proxima-nova", sans-serif;
        }
      `}</style>
      <div className="platform-layout">
        {children}
      </div>
    </>
  );
}
