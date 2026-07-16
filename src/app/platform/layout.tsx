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
    <div className="platform-layout">
      {children}
    </div>
  );
}
