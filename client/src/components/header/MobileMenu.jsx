"use client";

import Link from "next/link";
import Button from "@/components/shared/Button";
import { ACCENTS } from "./navItems";

export default function MobileMenu({
  navItems,
  mobileOpen,
  expanded,
  onToggle,
  onClose,
}) {
  return (
    <div
      className={`fixed inset-0 top-[73px] z-40 overflow-y-auto bg-white transition-all duration-400 lg:hidden ${
        mobileOpen
          ? "pointer-events-auto visible translate-y-0 opacity-100"
          : "pointer-events-none invisible translate-y-3 opacity-0"
      }`}
      aria-hidden={!mobileOpen}
    >
      <div
        className={`h-1.5 w-full origin-left transition-transform duration-500 ${
          mobileOpen ? "scale-x-100" : "scale-x-0"
        }`}
        style={{
          background:
            "linear-gradient(90deg, #DA3750 0%, #D4A853 50%, #0A1628 100%)",
        }}
      />

      <nav className="mx-auto max-w-7xl px-6 py-6">
        <div className="flex flex-col">
          {navItems.map((item, idx) => {
            const isOpen = expanded === item.label;
            return (
              <div
                key={item.label}
                className={`transition-all duration-500 ${
                  mobileOpen ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                }`}
                style={{ transitionDelay: mobileOpen ? `${140 + idx * 70}ms` : "0ms" }}
              >
                <div className="flex items-center gap-5 border-b border-grey-100 py-6">
                  <span
                    className="font-heading text-lg font-bold"
                    style={{ color: ACCENTS[idx % ACCENTS.length] }}
                  >
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                  {item.children ? (
                    <button
                      onClick={() => onToggle(item.label)}
                      className={`flex flex-1 items-center justify-between text-left font-heading text-2xl font-semibold transition-colors sm:text-4xl ${
                        isOpen ? "text-accent" : "text-contrast"
                      }`}
                    >
                      {item.label}
                      <span className="flex h-11 w-11 items-center justify-center rounded-full border border-grey-200 transition-all duration-300">
                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          className={`h-5 w-5 transition-transform duration-300 ${
                            isOpen ? "rotate-45" : ""
                          }`}
                        >
                          <path d="M12 5v14M5 12h14" />
                        </svg>
                      </span>
                    </button>
                  ) : (
                    <div className="flex flex-1 flex-col">
                      <Link
                        href={item.href}
                        onClick={onClose}
                        className="font-heading text-2xl font-semibold text-contrast sm:text-4xl"
                      >
                        {item.label}
                      </Link>
                      <span className="mt-1 text-sm text-grey-500">
                        {item.description}
                      </span>
                    </div>
                  )}
                </div>

                {item.children && (
                  <div
                    className={`grid overflow-hidden transition-all duration-500 ${
                      isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="min-h-0">
                      <p className="pl-12 pt-4 text-sm leading-relaxed text-grey-500">
                        {item.description}
                      </p>
                      <div className="mt-3 flex flex-col pb-5 pl-12">
                        {item.children.map((child, i) => (
                          <Link
                            key={child.label}
                            href={child.href}
                            onClick={onClose}
                            className={`group flex items-center gap-4 rounded-2xl px-4 py-3.5 transition-all duration-300 hover:bg-grey-100 ${
                              isOpen ? "translate-x-0 opacity-100" : "-translate-x-4 opacity-0"
                            }`}
                            style={{
                              transitionDelay: isOpen ? `${160 + i * 60}ms` : "0ms",
                            }}
                          >
                            <span
                              className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-xs font-bold text-white"
                              style={{
                                backgroundColor: ACCENTS[i % ACCENTS.length],
                              }}
                            >
                              {String(i + 1).padStart(2, "0")}
                            </span>
                            <span className="text-base font-medium text-contrast">
                              {child.label}
                            </span>
                            <svg
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              className="ml-auto h-5 w-5 text-grey-300 transition-colors group-hover:text-accent"
                            >
                              <path d="M5 12h14M13 6l6 6-6 6" />
                            </svg>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div
          className={`mt-8 pb-10 transition-all duration-500 ${
            mobileOpen ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
          style={{ transitionDelay: mobileOpen ? "480ms" : "0ms" }}
        >
          <Button
            href="/book-a-call"
            variant="primary"
            size="lg"
            className="w-full text-center"
            onClick={onClose}
          >
            Book a call
          </Button>
        </div>
      </nav>
    </div>
  );
}
