"use client";

import { useState, useEffect } from "react";

const STORAGE_KEY = "nymbus-site-auth";
const PASSWORD = "nymbus";

export function PasswordGate({ children }: { children: React.ReactNode }) {
  const [authenticated, setAuthenticated] = useState(false);
  const [input, setInput] = useState("");
  const [error, setError] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    if (sessionStorage.getItem(STORAGE_KEY) === "true") {
      setAuthenticated(true);
    }
  }, []);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (input === PASSWORD) {
      sessionStorage.setItem(STORAGE_KEY, "true");
      setAuthenticated(true);
      setError(false);
    } else {
      setError(true);
    }
  }

  // Avoid flash on hydration
  if (!mounted) return null;

  if (authenticated) return <>{children}</>;

  return (
    <div className="fixed inset-0 z-[99999] flex items-center justify-center bg-white">
      <div className="w-full max-w-sm px-6">
        <div className="text-center mb-8">
          <h1 className="text-[#171216] text-2xl font-bold mb-2" style={{ fontFamily: "'neue-haas-grotesk-text', 'proxima-nova', sans-serif" }}>
            Nymbus
          </h1>
          <p className="text-neutral-400 text-sm">Enter password to continue</p>
        </div>
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <input
            type="password"
            value={input}
            onChange={(e) => { setInput(e.target.value); setError(false); }}
            placeholder="Password"
            autoFocus
            className={`w-full px-4 py-3 rounded-lg border text-[#171216] text-sm outline-none transition-colors ${
              error ? "border-red-400 bg-red-50" : "border-neutral-200 bg-neutral-50 focus:border-neutral-400"
            }`}
          />
          {error && (
            <p className="text-red-500 text-xs">Incorrect password</p>
          )}
          <button
            type="submit"
            className="w-full px-4 py-3 bg-[#171216] text-white text-sm font-semibold rounded-full hover:bg-[#2a2329] transition-colors"
          >
            Enter
          </button>
        </form>
      </div>
    </div>
  );
}
