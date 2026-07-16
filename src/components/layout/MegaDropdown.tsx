"use client";

import { useRef, useEffect } from "react";
import Link from "next/link";

interface MenuItem {
  title: string;
  description?: string;
  href: string;
  indent?: boolean;
}

interface MenuColumn {
  category: string;
  items: MenuItem[];
}

interface MenuData {
  label: string;
  columns: MenuColumn[];
}

interface MegaDropdownProps {
  menu: MenuData;
  isActive: boolean;
  onOpen: () => void;
  onClose: () => void;
}

export function MegaDropdown({ menu, isActive, onOpen, onClose }: MegaDropdownProps) {
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    onOpen();
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(onClose, 100);
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  return (
    <div
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button
        className={`px-4 py-2 text-sm font-medium transition-colors rounded-lg flex items-center gap-1.5 ${
          isActive ? "text-white bg-white/5" : "text-white/70 hover:text-white hover:bg-white/5"
        }`}
        aria-expanded={isActive}
        aria-haspopup="true"
      >
        {menu.label}
        <svg
          className={`w-3.5 h-3.5 transition-transform duration-200 ${isActive ? "rotate-180" : ""}`}
          fill="none"
          viewBox="0 0 14 14"
        >
          <path d="M3 5l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      {isActive && (
        <div className="fixed top-[calc(28px+4rem)] md:top-[calc(28px+5rem)] left-0 right-0 pt-0 z-50">
          <div className="bg-charcoal-dark border-b border-white/10 shadow-2xl shadow-black/40 px-8 py-8">
            <div className="max-w-7xl mx-auto">
              <div className={`grid gap-10`}
                style={{ gridTemplateColumns: `repeat(${Math.min(menu.columns.length, 4)}, minmax(0, 1fr))` }}
              >
              {menu.columns.map((column) => (
                <div key={column.category}>
                  <h4 className="text-white/40 text-xs font-semibold uppercase tracking-wider mb-3 whitespace-nowrap">
                    {column.category}
                  </h4>
                  <ul className="space-y-1">
                    {column.items.map((item) => (
                      <li key={item.title}>
                        <Link
                          href={item.href}
                          className={`block px-2 py-2 -mx-2 rounded-lg hover:bg-white/5 transition-colors group ${item.indent ? "ml-4" : ""}`}
                          onClick={onClose}
                        >
                          <span className="text-white text-sm font-medium group-hover:text-sky-blue transition-colors">
                            {item.title}
                          </span>
                          {item.description && (
                            <span className="block text-white/40 text-xs mt-0.5">
                              {item.description}
                            </span>
                          )}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
