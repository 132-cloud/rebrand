"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function BrandSwitcher() {
  const pathname = usePathname();

  const links = [
    { label: "Nymbus", href: "/" },
    { label: "The Guide", href: "/v3" },
    { label: "The Neighbour", href: "/v2" },
  ];

  return (
    <div
      className="w-full flex items-center justify-center gap-6 py-2 px-4 text-[12px] tracking-wide sticky top-0"
      style={{
        background: "#111",
        color: "rgba(255,255,255,0.6)",
        fontFamily: "system-ui, sans-serif",
        zIndex: 9999,
      }}
    >
      <span className="font-medium text-white/40 uppercase tracking-wider mr-2">
        Visual Brand Switcher
      </span>
      {links.map((link) => {
        const isActive = pathname === link.href;
        return (
          <Link
            key={link.href}
            href={link.href}
            className={`transition-colors ${
              isActive
                ? "text-white font-medium"
                : "text-white/60 hover:text-white"
            }`}
          >
            {link.label}
          </Link>
        );
      })}
    </div>
  );
}
