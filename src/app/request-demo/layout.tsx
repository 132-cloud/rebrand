"use client";

import { useEffect } from "react";

export default function RequestDemoLayout({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    document.body.classList.add("is-guide-theme");
    return () => { document.body.classList.remove("is-guide-theme"); };
  }, []);

  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link href="https://fonts.googleapis.com/css2?family=Inter+Tight:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet" />
      {children}
    </>
  );
}
