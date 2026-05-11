"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("nymbus-cookie-consent");
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("nymbus-cookie-consent", "accepted");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-charcoal border-t border-white/10 p-4">
      <div className="container-site flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-white/70 text-sm text-center sm:text-left">
          We use cookies on this site to enhance your experience. Visit our{" "}
          <Link href="/privacy-policy/" className="text-sky-blue hover:text-blue-75">
            Privacy Policy
          </Link>{" "}
          for more info.
        </p>
        <button
          onClick={handleAccept}
          className="px-6 py-2 bg-blue text-white text-sm font-semibold rounded-[4px] hover:bg-blue-200 transition-colors flex-shrink-0"
        >
          Accept
        </button>
      </div>
    </div>
  );
}
