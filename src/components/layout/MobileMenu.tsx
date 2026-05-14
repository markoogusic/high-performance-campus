"use client";

import { useEffect, useState } from "react";
import { navItems } from "@/data/navigation";
import { site } from "@/data/site";
import { Button } from "@/components/ui/Button";

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      <button
        aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
        aria-expanded={isOpen}
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden p-2 rounded-md text-navy-800 hover:bg-gray-100 transition-colors"
      >
        {isOpen ? (
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        )}
      </button>

      {isOpen && (
        <div className="fixed inset-0 top-[65px] z-40 bg-white md:hidden flex flex-col">
          <nav className="flex-1 overflow-y-auto px-6 py-8">
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="block py-3 text-lg font-medium text-navy-800 hover:text-navy-600 border-b border-gray-100"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div className="px-6 py-6 border-t border-gray-100">
            <Button
              href={site.registrationUrl}
              external
              size="lg"
              className="w-full"
              onClick={() => setIsOpen(false)}
            >
              Inscríbete
            </Button>
          </div>
        </div>
      )}
    </>
  );
}
