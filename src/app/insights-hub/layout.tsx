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
    <div className="insights-hub-layout">
      {children}
    </div>
  );
}
